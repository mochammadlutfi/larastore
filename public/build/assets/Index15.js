import{_ as K,L,o as m,B as u,C as a,a as l,a5 as r,G as e,a6 as k,a7 as j,D as h,c as U,e as z,H as I,M as N,I as Y,J as A}from"./id.js";import{E as F}from"./index30.js";import{E as G}from"./index21.js";import{a as H,E as J}from"./index33.js";import{E as O}from"./index8.js";import{E as R}from"./index22.js";import{E as q}from"./index9.js";import{E as Q,a as W}from"./index32.js";import{E as X}from"./index31.js";import{E as Z}from"./index36.js";import{E as $,a as ee}from"./index23.js";import{E as ae}from"./index37.js";import{E as te}from"./index27.js";import{v as oe}from"./directive.js";import"./index28.js";import"./scroll.js";import"./validator.js";import"./index7.js";import"./typescript.js";import"./event.js";import"./isEqual.js";import"./_Uint8Array.js";import"./debounce.js";import"./index34.js";import"./_initCloneObject.js";import"./index24.js";import"./index26.js";const se={data(){return{data:[],isLoading:!0,params:{searchKey:"name",searchKeyword:"",sort:"id",sortDir:"DESC",limit:25,total:0,page:1,pageSize:0},showModal:!1,form:{status:null,periode:null}}},async created(){await this.fetchData()},methods:{async fetchData(t){var t=t??1;try{this.isLoading=!0;const i=await axios.get(this.route("admin.purchase.order.data"),{params:{page:t,limit:this.params.limit,search:this.params.searchKeyword,searchKey:this.params.searchKey}});i.status==200&&(this.data=i.data.data,this.params.page=i.data.current_page,this.params.total=i.data.total,this.params.pageSize=i.data.per_page,this.params.from=i.data.from,this.params.to=i.data.to),this.isLoading=!1}catch(i){console.error(i)}},format_date(n){if(n)return moment(String(n)).format("DD MMM YYYY")},hapus(n){F.alert("Data yang dihapus tidak bisa dikembalikan!","Peringatan",{showCancelButton:!0,confirmButtonText:"Ya!",cancelButtonText:"Tidak!",type:"warning"}).then(()=>{this.$inertia.delete(this.route("admin.purchase.order.delete",{id:n}),{preserveScroll:!0,onSuccess:()=>{this.fetchData(),G({type:"success",message:"Data Berhasil Dihapus!"})}})})}}},le={class:"content"},ne={class:"content-heading d-flex justify-content-between align-items-center"},re=l("span",null,"Pesanan Pembelian",-1),ie={class:"space-x-1"},de=["href"],pe=l("i",{class:"fa fa-plus me-1"},null,-1),me=l("i",{class:"fa fa-print me-1"},null,-1),ce={class:"block block-rounded"},ue={class:"block-content py-3"},_e=l("i",{class:"fa fa-search"},null,-1),fe={class:"block-content p-0"},he=l("i",{class:"fa fa-angle-down ms-1"},null,-1),ge=["href"],be=l("i",{class:"si fa-fw si-eye"},null,-1),we=["href"],ye=l("i",{class:"si fa-fw si-note"},null,-1),Ee=l("i",{class:"si fa-fw si-trash"},null,-1),ke={key:0,class:"block-content py-2"},ve={class:"mb-0"},De={class:"d-flex"},Ce={class:"float-end"};function xe(n,t,i,Se,s,_){const c=I,d=H,w=J,f=O,v=R,y=q,p=Q,g=X,b=N,D=Y,C=A,x=W,S=Z,E=$,V=ae,M=ee,B=te,T=L("base-layout"),P=oe;return m(),u(T,null,{default:a(()=>[l("div",le,[l("div",ne,[re,l("div",ie,[l("a",{href:n.route("admin.purchase.order.create"),class:"ep-button ep-button--primary"},[pe,r(" Tambah ")],8,de),e(c,{type:"primary",onClick:t[0]||(t[0]=k(o=>s.showModal=!0,["prevent"]))},{default:a(()=>[me,r(" Export ")]),_:1})])]),l("div",ce,[l("div",ue,[e(y,{justify:"space-between"},{default:a(()=>[e(f,{span:12},{default:a(()=>[e(w,{modelValue:s.params.limit,"onUpdate:modelValue":t[1]||(t[1]=o=>s.params.limit=o),placeholder:"Pilih",style:{width:"115px"},onChange:t[2]||(t[2]=o=>_.fetchData(1))},{default:a(()=>[e(d,{label:"25",value:"25"}),e(d,{label:"50",value:"50"}),e(d,{label:"100",value:"100"})]),_:1},8,["modelValue"])]),_:1}),e(f,{span:8},{default:a(()=>[e(v,{modelValue:s.params.searchKeyword,"onUpdate:modelValue":t[4]||(t[4]=o=>s.params.searchKeyword=o),placeholder:"Masukan kata kunci",class:"input-with-select",clearable:""},{append:a(()=>[e(c,{onClick:t[3]||(t[3]=o=>_.fetchData(1))},{default:a(()=>[_e]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),l("div",fe,[j((m(),u(x,{data:s.data,class:"table-click",style:{width:"100%"},onSortChange:n.sortChange},{default:a(()=>[e(p,{type:"index",index:n.indexMethod,width:"100"},null,8,["index"]),e(p,{prop:"nomor",label:"Nomor",sortable:""}),e(p,{prop:"supplier.name",label:"Supplier",sortable:""}),e(p,{prop:"state",label:"Status",sortable:""},{default:a(o=>[o.row.state=="draft"?(m(),u(g,{key:0,type:"warning"},{default:a(()=>[r(" Draft ")]),_:1})):o.row.state=="done"?(m(),u(g,{key:1,type:"success"},{default:a(()=>[r(" Selesai ")]),_:1})):(m(),u(g,{key:2,type:"danger"},{default:a(()=>[r("Batal")]),_:1}))]),_:1}),e(p,{prop:"total",label:"Total",sortable:""},{default:a(o=>[r(h(n.currency(o.row.total)),1)]),_:1}),e(p,{label:"Aksi",align:"center",width:"180"},{default:a(o=>[e(C,{"popper-class":"dropdown-action",trigger:"click"},{dropdown:a(()=>[e(D,null,{default:a(()=>[e(b,null,{default:a(()=>[l("a",{href:n.route("admin.purchase.order.show",{id:o.row.id}),class:"w-100 d-flex align-items-center justify-content-between space-x-1"},[r(" Detail "),be],8,ge)]),_:2},1024),e(b,null,{default:a(()=>[l("a",{href:n.route("admin.purchase.order.edit",{id:o.row.id}),class:"w-100 d-flex align-items-center justify-content-between space-x-1"},[r(" Ubah "),ye],8,we)]),_:2},1024),e(b,{class:"d-flex align-items-center justify-content-between space-x-1",onClick:k(Ve=>_.hapus(o.row.id),["prevent"])},{default:a(()=>[r(" Hapus "),Ee]),_:2},1032,["onClick"])]),_:2},1024)]),default:a(()=>[e(c,{type:"primary"},{default:a(()=>[r(" Aksi "),he]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data","onSortChange"])),[[P,s.isLoading]])]),s.isLoading==!1?(m(),U("div",ke,[e(y,{justify:"space-between"},{default:a(()=>[e(f,{lg:12},{default:a(()=>[l("p",ve,"Menampilkan "+h(s.params.from)+" sampai "+h(s.params.to)+" dari "+h(s.params.total),1)]),_:1}),e(f,{lg:12,class:"text-end"},{default:a(()=>[e(S,{class:"float-end",background:"",layout:"prev, pager, next","page-size":s.params.pageSize,total:s.params.total,"current-page":s.params.page,onCurrentChange:_.fetchData},null,8,["page-size","total","current-page","onCurrentChange"])]),_:1})]),_:1})])):z("",!0)])]),e(B,{modelValue:s.showModal,"onUpdate:modelValue":t[8]||(t[8]=o=>s.showModal=o),title:"Export",width:"500","before-close":n.handleClose},{default:a(()=>[e(M,{"label-width":"30%",method:"GET",action:n.route("admin.purchase.order.report"),target:"_blank","label-position":"top"},{default:a(()=>[e(E,{class:"mb-4",label:"Status"},{default:a(()=>[e(w,{modelValue:s.form.status,"onUpdate:modelValue":t[5]||(t[5]=o=>s.form.status=o),name:"status",class:"w-100",placeholder:"Pilih"},{default:a(()=>[e(d,{label:"Semua",value:""}),e(d,{label:"Pending",value:"draft"}),e(d,{label:"Selesai",value:"done"}),e(d,{label:"Batal",value:"cancel"})]),_:1},8,["modelValue"])]),_:1}),e(E,{class:"mb-4",label:"Periode"},{default:a(()=>[e(V,{name:"date",modelValue:s.form.periode,"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.periode=o),type:"daterange","range-separator":"Sampai","start-placeholder":"Tanggal Mulai","end-placeholder":"Tanggal Selesai"},null,8,["modelValue"])]),_:1}),l("div",De,[l("div",Ce,[e(c,{onClick:t[7]||(t[7]=o=>s.showModal=!1)},{default:a(()=>[r("Batal")]),_:1}),e(c,{type:"primary","native-type":"submit"},{default:a(()=>[r(" Download ")]),_:1})])])]),_:1},8,["action"])]),_:1},8,["modelValue","before-close"])]),_:1})}const ta=K(se,[["render",xe]]);export{ta as default};