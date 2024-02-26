<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Sale\SaleOrder;
use App\Models\Sale\SaleOrderLine;

use Illuminate\Support\Facades\DB;

use Storage;
class UserOrderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return Inertia::render('UserOrder/Index');
    }


    public function show($id, Request $request)
    {
        $user_id = auth()->guard('web')->user();

        $data = SaleOrder::with([
            'lines' => function($q){
                return $q->with(['product', 'variant']);
            }, 'customer', 'shipping'
        ])
        ->where('id', $id)->first();

        return Inertia::render('UserOrder/Show',[
            'data' => $data,
        ]);
    }

        /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function Payment(Request $request)
    {
        $user_id = auth()->guard('web')->user()->id;

        $data = Sale::with(['payment' => function($q){
                return $q->with('payment_method');
            },
        ])
        ->where('customer_id', $user_id)
        ->where('is_web', 1)
        ->where('payment_status', 'unpaid')->get();

        return Inertia::render('Frontend/User/Order/Unpaid',[
            'dataList' => $data
        ]);
    }

    public function payment_show($order, Request $request)
    {
        $user_id = auth()->guard('web')->user()->id;

        $query = Payment::select('payment.id as payment_id', 'payment.code', 'payment.amount', 'payment.payment_method_id', 'a.id as sale_id', 'a.ref', 'a.status', 'a.payment_status', 
        'a.grand_total', 'a.shipping_cost', 'a.total', 'a.created_at', 'a.payment_due')
        ->leftJoin('sales as a', 'a.id', '=', 'payment.paymenttable_id')
        ->with(['payment_method' => function($q){
            $q->select('account_payment_methods.*', 'b.account_name', 'b.account_no', 'b.logo')
            ->join('account_bank as b', 'b.id', '=', 'account_payment_methods.bank_id');
        }])
        ->where('a.id', $order)
        ->where('a.customer_id', $user_id);

        $data = $query->first();
        return Inertia::render('Frontend/User/Order/Payment',[
            'order' => $data
        ]);
    }


    public function state($id, Request $request)
    {
        DB::beginTransaction();
        try{

            $user_id = auth()->guard('web')->user()->id;

            $data = SaleOrder::where('id', $id)->first();
            $data->payment_status = $request->status;
            $data->payment_method = 'Transfer';
            $data->save();

        }catch(\QueryException $e){
            DB::rollback();
            return back();
        }
        DB::commit();
        return response()->json($data);
    }

    public function confirm($id,Request $request)
    {
        DB::beginTransaction();
        try{

            $user_id = auth()->guard('web')->user()->id;
            $data = SaleOrder::where('id', $id)
            ->where('customer_id', $user_id)->first();
            $data->state = 'done';
            $data->save();
            
        }catch(\QueryException $e){
            DB::rollback();
            return back();
        }
        DB::commit();
        return redirect()->route('user.order.show', $data->id);
    }

    public function data(Request $request)
    {
        $sort = !empty($request->sort) ? $request->sort : 'id';
        $sortDir = !empty($request->sortDir) ? $request->sortDir : 'desc';
        $limit = ($request->limit) ? $request->limit : 25;
        $page = $request->page;
        $id = $request->id;

        $query = SaleOrder::with(['lines' => function($q){
            return $q->with(['product', 'variant']);
        }])
        ->when(!empty($request->search), function ($q, $search) {
            return $q->where('nomor', 'LIKE', '%' . $search . '%');
        })
        ->when($request->status == 'unpaid', function ($q) {
            return $q->where('state', 'pending')
            ->where('payment_status', 'unpaid');
        })
        ->when($request->status == 'process', function ($q) {
            return $q->whereIn('state',  ['process', 'pending'])
            ->where('payment_status', 'paid');
        })
        ->when($request->status == 'shipped', function ($q) {
            return $q->where('state', '=', 'shipped')
            ->where('payment_status', 'paid');
        })
        ->when($request->status == 'done', function ($q) {
            return $q->where('state', '=', 'done')
            ->where('payment_status', 'paid');
        })
        ->when($request->status == 'cancel', function ($q) {
            return $q->where('state', '=', 'cancel');
        })
        ->orderBy($sort, $sortDir);

        if($page){
            $data = $query->paginate($limit);
        }else{
            if($id){
                $data = $query->where('id', $id)->first();
            }else{
                $data = $query->get();
            }

        }
        return response()->json($data);
    }

}
