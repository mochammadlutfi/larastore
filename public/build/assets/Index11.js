import I from"./UnitSelect.js";import{h as L}from"./moment.js";import{_ as U,L as j,o as u,B as f,C as t,a,G as e,a5 as m,a7 as y,a6 as C,c as N,D as _,e as z,H as P,M as Y,I as A,J as H}from"./id.js";import{E as v}from"./index21.js";import{E as O}from"./index30.js";import{a as G,E as J}from"./index33.js";import{E as R}from"./index8.js";import{E as q}from"./index22.js";import{E as Q}from"./index9.js";import{E as W,a as X}from"./index32.js";import{E as Z}from"./index36.js";import{E as $,a as ee}from"./index23.js";import{E as te}from"./index27.js";import{v as oe}from"./directive.js";import"./index7.js";import"./typescript.js";import"./index28.js";import"./scroll.js";import"./validator.js";import"./index31.js";import"./event.js";import"./isEqual.js";import"./_Uint8Array.js";import"./debounce.js";import"./index34.js";import"./_initCloneObject.js";import"./index24.js";const se={components:{UnitSelect:I},props:{errors:Object},data(){return{selected:[],data:[],from:0,to:0,isLoading:!0,page:1,pageSize:0,searchKey:"name",searchKeyword:"",limit:25,total:0,showForm:!1,sort:"name",sortDir:"ASC",formTitle:"Tambah Merk",form:{id:null,name:null},editMode:!1,loadingForm:!1,loadingImport:!1,showImport:!1,importFile:null}},async created(){await this.fetchData()},methods:{indexMethod(l){return(this.page==1?1:this.limit*(this.page-1)+1)+l},sortChange(l){this.sort=l.prop,this.sortDir=l.order=="ascending"?"ASC":"DESC",this.fetchData()},async fetchData(o){var o=o??1;try{this.isLoading=!0;const i=await axios.get("/admin/merk/data",{params:{page:o,limit:this.limit,sort:this.sort,sortDir:this.sortDir,search:this.searchKeyword,searchKey:this.searchKey}});i.status==200&&(this.from=i.data.from,this.to=i.data.to,this.data=i.data.data,this.page=i.data.current_page,this.total=i.data.total,this.pageSize=i.data.per_page),this.isLoading=!1}catch(i){console.error(i)}},format_date(l){if(l)return L(String(l)).format("DD MMMM YYYY")},onCloseForm(){this.title="Tambah Kontak",this.editMode=!1,this.form.id=null,this.form.name=null,this.form.phone=null,this.showForm=!1},submit(){this.loadingForm=!0;let l=this.$inertia.form(this.form),o=this.editMode==!0?this.route("admin.inventory.brand.update",{id:this.form.id}):this.route("admin.inventory.brand.store");l.post(o,{preserveScroll:!0,onFinish:()=>{this.loadingForm=!1},onSuccess:()=>{v({type:"success",message:"Data Berhasil Disimpan!"}),this.onCloseForm(),this.fetchData()}})},edit(l){this.formTitle="Ubah Merk",this.form.id=l.id,this.form.name=l.name,this.editMode=!0,this.showForm=!0},hapus(l){O.alert("Data yang dihapus tidak bisa dikembalikan!","Peringatan",{showCancelButton:!0,confirmButtonText:"Ya!",cancelButtonText:"Tidak!",type:"warning"}).then(()=>{this.$inertia.delete(this.route("admin.inventory.brand.delete",{id:l}),{preserveScroll:!0,onSuccess:()=>{this.fetchData(),v({type:"success",message:"Data Berhasil Dihapus!"})}})})}}},ae={class:"content"},le={class:"content-heading d-flex justify-content-between align-items-center"},ne=a("span",null,"Merk Produk",-1),ie={class:"space-x-1"},re=a("i",{class:"fa fa-plus me-1"},null,-1),me={class:"block block-rounded"},ce={class:"block-content py-3"},de=a("i",{class:"fa fa-search"},null,-1),pe={class:"block-content p-0"},ue=a("i",{class:"fa fa-angle-down ms-1"},null,-1),he=a("i",{class:"si fa-fw si-note"},null,-1),fe=a("i",{class:"si fa-fw si-trash"},null,-1),_e={key:0,class:"block-content py-2"},ge={class:"mb-0"},be={class:"text-end"},we=a("i",{class:"si si-close me-1"},null,-1),ke=a("i",{class:"si si-check me-1"},null,-1);function ye(l,o,i,Ce,s,r){const c=P,h=G,E=J,d=R,g=q,b=Q,p=W,w=Y,x=A,D=H,M=X,F=Z,S=$,V=ee,B=te,T=j("base-layout"),k=oe;return u(),f(T,null,{default:t(()=>[a("div",ae,[a("div",le,[ne,a("div",ie,[e(c,{onClick:o[0]||(o[0]=n=>s.showForm=!0),type:"primary"},{default:t(()=>[re,m(" Tambah ")]),_:1})])]),a("div",me,[a("div",ce,[e(b,{justify:"space-between"},{default:t(()=>[e(d,{span:12},{default:t(()=>[e(E,{modelValue:s.limit,"onUpdate:modelValue":o[1]||(o[1]=n=>s.limit=n),placeholder:"Pilih",style:{width:"115px"},onChange:o[2]||(o[2]=n=>r.fetchData(1))},{default:t(()=>[e(h,{label:"25",value:"25"}),e(h,{label:"50",value:"50"}),e(h,{label:"100",value:"100"})]),_:1},8,["modelValue"])]),_:1}),e(d,{span:8},{default:t(()=>[e(g,{modelValue:s.searchKeyword,"onUpdate:modelValue":o[4]||(o[4]=n=>s.searchKeyword=n),placeholder:"Masukan kata kunci",class:"input-with-select",clearable:""},{append:t(()=>[e(c,{onClick:o[3]||(o[3]=n=>r.fetchData(1))},{default:t(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),a("div",pe,[y((u(),f(M,{data:s.data,class:"table-click",style:{width:"100%"},onSortChange:r.sortChange},{default:t(()=>[e(p,{type:"index",index:r.indexMethod,width:"100"},null,8,["index"]),e(p,{prop:"name",label:"Nama",sortable:""}),e(p,{prop:"product_count",label:"Total Produk",sortable:""}),e(p,{label:"Aksi",align:"center",width:"180"},{default:t(n=>[e(D,{"popper-class":"dropdown-action",trigger:"click"},{dropdown:t(()=>[e(x,null,{default:t(()=>[e(w,{class:"d-flex align-items-center justify-content-between space-x-1",onClick:C(K=>r.edit(n.row),["prevent"])},{default:t(()=>[m(" Ubah "),he]),_:2},1032,["onClick"]),e(w,{class:"d-flex align-items-center justify-content-between space-x-1",onClick:C(K=>r.hapus(n.row.id),["prevent"])},{default:t(()=>[m(" Hapus "),fe]),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[e(c,{type:"primary"},{default:t(()=>[m(" Aksi "),ue]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data","onSortChange"])),[[k,s.isLoading]])]),s.isLoading==!1?(u(),N("div",_e,[e(b,{justify:"space-between"},{default:t(()=>[e(d,{lg:12},{default:t(()=>[a("p",ge,"Menampilkan "+_(s.from)+" sampai "+_(s.to)+" dari "+_(s.total),1)]),_:1}),e(d,{lg:12,class:"text-end"},{default:t(()=>[e(F,{class:"float-end",background:"",layout:"prev, pager, next","page-size":s.pageSize,total:s.total,"current-page":s.page,onCurrentChange:r.fetchData},null,8,["page-size","total","current-page","onCurrentChange"])]),_:1})]),_:1})])):z("",!0)])]),e(B,{modelValue:s.showForm,"onUpdate:modelValue":o[6]||(o[6]=n=>s.showForm=n),title:s.formTitle,width:"30%",class:"rounded-2","before-close":r.onCloseForm,"close-on-click-modal":!1},{default:t(()=>[y((u(),f(V,{model:s.form,"label-position":"top"},{default:t(()=>[e(S,{label:"Nama Merk",error:i.errors.name},{default:t(()=>[e(g,{modelValue:s.form.name,"onUpdate:modelValue":o[5]||(o[5]=n=>s.form.name=n)},null,8,["modelValue"])]),_:1},8,["error"]),a("div",be,[e(c,{onClick:r.onCloseForm},{default:t(()=>[we,m(" Batal ")]),_:1},8,["onClick"]),e(c,{type:"primary",onClick:r.submit},{default:t(()=>[ke,m(" Simpan ")]),_:1},8,["onClick"])])]),_:1},8,["model"])),[[k,s.loadingForm]])]),_:1},8,["modelValue","title","before-close"])]),_:1})}const We=U(se,[["render",ye]]);export{We as default};