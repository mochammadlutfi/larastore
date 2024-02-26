<?php

namespace App\Http\Controllers\Admin\Inventory;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Storage;


use App\Models\Inventory\Product;
use App\Models\Inventory\ProductVariant;
use Image;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Inventory/Product/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Inventory/Product/Form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'category_id' => 'required',
        ];

        if($request->has_variant == false){
            $rules['sell_price'] = 'required';
            $rules['sell_unit_id'] = 'required';
            $rules['purchase_price'] = 'required';
            $rules['purchase_unit_id'] = 'required';
        }else{
            $rules['variant.*.name'] = 'required';
            $rules['variant.*.sell_price'] = 'required';
            $rules['variant.*.sell_unit_id'] = 'required';
            $rules['variant.*.purchase_price'] = 'required';
            $rules['variant.*.purchase_unit_id'] = 'required';
        }

        $pesan = [
            'name.required' => 'Nama Produk Wajib Diisi!',
            'category_id.required' => 'Kategori Produk Wajib Diisi!',
            'sell_price.required' => 'Harga Jual Wajib Diisi!',
            'sell_unit_id.required' => 'Satuan Jual Wajib Diisi!',
            'purchase_price.required' => 'Harga Beli Wajib Diisi!',
            'purchase_unit_id.required' => 'Satuan Beli Wajib Diisi!',
        ];

        $validator = Validator::make($request->all(), $rules, $pesan);
        if ($validator->fails()){
            return back()->withErrors($validator->errors());
        }else{
            DB::beginTransaction();
            try{
                // dd($request->all());
                $product = new Product();
                $product->name = $request->name;
                $product->description = $request->description;
                $product->category_id = $request->category_id;
                $product->brand_id = $request->brand_id;
                $product->has_variant = $request->has_variant;
                $product->save();

                if($request->has_variant == "1"){
                    foreach($request->variant as $v){
                        $variant = new ProductVariant();
                        $variant->name = $v["name"];
                        $variant->sku = $v["sku"];
                        $variant->sell_price = $v["sell_price"];
                        $variant->sell_unit_id = $v["sell_unit_id"];
                        $variant->purchase_price = $v["purchase_price"];
                        $variant->purchase_unit_id = $v["purchase_unit_id"];
                        $variant->product_id = $product->id;
                        if($v['image']){
                            $variant->image = $this->uploadImage($v["image"], Str::slug($request->name, '-'), $product->id);
                        }
                        $variant->save();
                    }
                }else{
                    $variant = new ProductVariant();
                    $variant->sku = $request->sku;
                    $variant->sell_price = $request->sell_price;
                    $variant->sell_unit_id = $request->sell_unit_id;
                    $variant->purchase_price = $request->purchase_price;
                    $variant->purchase_unit_id = $request->purchase_unit_id;
                    $variant->product_id = $product->id;
                    $variant->image = $this->uploadImage($request->image, Str::slug($request->name, '-'), $product->id);
                    $variant->save();
                }
                
            }catch(\QueryException $e){
                dd($e);
                DB::rollback();
            }
            DB::commit();
            return redirect()->route('admin.inventory.product.index');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Product::with(['variant'])->where('id', $id)->first();

        
        return Inertia::render('Inventory/Product/Form',[
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'name' => 'required',
            'category_id' => 'required',
        ];

        if($request->has_variant == false){
            $rules['sell_price'] = 'required';
            $rules['sell_unit_id'] = 'required';
            $rules['purchase_price'] = 'required';
            $rules['purchase_unit_id'] = 'required';
        }else{
            $rules['variant.*.name'] = 'required';
            $rules['variant.*.sell_price'] = 'required';
            $rules['variant.*.sell_unit_id'] = 'required';
            $rules['variant.*.purchase_price'] = 'required';
            $rules['variant.*.purchase_unit_id'] = 'required';
        }

        $pesan = [
            'name.required' => 'Nama Produk Wajib Diisi!',
            'category_id.required' => 'Kategori Produk Wajib Diisi!',
            'sell_price.required' => 'Harga Jual Wajib Diisi!',
            'sell_unit_id.required' => 'Satuan Jual Wajib Diisi!',
            'purchase_price.required' => 'Harga Beli Wajib Diisi!',
            'purchase_unit_id.required' => 'Satuan Beli Wajib Diisi!',
        ];

        $validator = Validator::make($request->all(), $rules, $pesan);
        if ($validator->fails()){
            return back()->withErrors($validator->errors());
        }else{
            DB::beginTransaction();
            try{

                $product = Product::where('id', $id)->first();
                $product->name = $request->name;
                $product->description = $request->description;
                $product->category_id = $request->category_id;
                $product->brand_id = $request->brand_id;
                $product->has_variant = $request->has_variant;
                $product->save();

                if($request->has_variant == "1"){
                    $i = 0;
                    foreach($request->variant as $v){
                        if($v["id"]){
                            $variant = ProductVariant::where('id', $v["id"])->first();
                        }else{
                            $variant = new ProductVariant();
                        }
                        $variant->name = $v["name"];
                        $variant->sku = $v["sku"];
                        $variant->sell_price = $v["sell_price"];
                        $variant->sell_unit_id = $v["sell_unit_id"];
                        $variant->purchase_price = $v["purchase_price"];
                        $variant->purchase_unit_id = $v["purchase_unit_id"];
                        $variant->product_id = $product->id;
                        
                        if($request->hasFile('variant.'.$i.'.image')){
                            if(Storage::disk('public')->exists($v['image'])){
                                Storage::disk('public')->delete($v['image']);
                            }
                            $variant->image = $this->uploadImage($v["image"], Str::slug($request->name, '-'), $product->id);
                        }
                        $variant->save();
                        $i++;
                    }
                }else{
                    $variant = new ProductVariant();
                    $variant->sku = $request->sku;
                    $variant->sell_price = $request->sell_price;
                    $variant->sell_unit_id = $request->sell_unit_id;
                    $variant->purchase_price = $request->purchase_price;
                    $variant->purchase_unit_id = $request->purchase_unit_id;
                    $variant->product_id = $product->id;
                    
                    if($request->hasFile('image')){
                        if(Storage::disk('public')->exists($request->image)){
                            Storage::disk('public')->delete($request->image);
                        }
                        $variant->image = $this->uploadImage($request->image, Str::slug($request->name, '-'), $product->id);
                    }
                    $variant->save();
                }
                
            }catch(\QueryException $e){
                dd($e);
                DB::rollback();
            }
            DB::commit();
            return redirect()->route('admin.inventory.product.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        try{

            $product = Product::where('id', $id)->first();
            $variant = ProductVariant::where('product_id', $id)->latest()->get();

            foreach($variant as $v)
            {
                if(Storage::disk('public')->exists($v->image)){
                    Storage::disk('public')->delete($v->image);
                }
                $v->delete();
            }
            $product->delete();

        }catch(\QueryException $e){
            dd($e);
            DB::rollback();
        }
        DB::commit();
        return redirect()->route('admin.inventory.product.index');
    }

    private function removeImage($path)
    {

    }

    private function uploadImage($file, $name, $id){
        $file_name = $name. '-' . uniqid() . '.' . $file->getClientOriginalExtension();
        $imgFile = Image::make($file->getRealPath());
        $destinationPath = 'public/product/'.$id;

        $imgFile->resize(800, 800, function ($constraint) {
		    $constraint->aspectRatio();
		})->encode('jpg', 80);

        
        Storage::disk('public')->putFileAs(
            'product/'.$id,
            $file,
            $file_name
        );
        
        return '/uploads/product/'.$id.'/'.$file_name;
    }

    
    public function data(Request $request)
    {
        $sort = !empty($request->sort) ? $request->sort : 'id';
        $sortDir = !empty($request->sortDir) ? $request->sortDir : 'desc';
        $limit = ($request->limit) ? $request->limit : 25;
        $page = $request->page;

        $query = Product::with(['variant', 'category:id,name'])
        ->when(!empty($request->search), function ($q, $search) {
            return $q->orWhere('name', 'LIKE', '%' . $search . '%');
        })
        ->orderBy($sort, $sortDir);

        if($page){
            $data = $query->paginate($limit);
        }else{
            $data = $query->get();
        }
        return response()->json($data);
    }

    
    public function search(Request $request)
    {
        $search = $request->q;

        $data = ProductVariant::select("product_variants.*", "p.name as product")
        ->join("products as p", "p.id", "=", "product_variants.product_id")
        ->where(function($query) use ($search) {
            return $query->where('product_variants.name', 'LIKE', '%' . $search . '%')
            // ->orWhere('product_variants.sku', 'LIKE', '%' . $search . '%')
            ->orWhere('p.name', 'LIKE', '%' . $search . '%');
        })
        
        ->get();

        // if($page){
        //     $data = $query->paginate($limit);
        // }else{
        //     $data = $query->get();
        // }
        return response()->json($data);
    }

    public function stock()
    {

        $data = ProductVariant::with('product')
        ->orderBy('stock', 'ASC')->limit(10)
        ->get();
        // dd($data);
        return response()->json($data);
    }

}
