import j from"./CustomerSelect.js";import{_ as x,L as g,o as _,B as D,C as s,a as i,G as l,D as r,a5 as n,c as y,F as v,e as w,a6 as S,H as M}from"./id.js";import{E as U}from"./index21.js";import{E as Y,a as B}from"./index23.js";import{E as F}from"./index8.js";import{E as L}from"./index37.js";import{E as N}from"./index9.js";import{E as O}from"./index38.js";import{E as H,a as I}from"./index32.js";import{E as z}from"./index25.js";import"./index33.js";import"./index22.js";import"./typescript.js";import"./event.js";import"./index31.js";import"./scroll.js";import"./isEqual.js";import"./_Uint8Array.js";import"./debounce.js";import"./index34.js";import"./validator.js";import"./index7.js";import"./_initCloneObject.js";import"./index24.js";import"./index26.js";const A={components:{CustomerSelect:j},props:{data:{type:Object,default:{}},errors:Object},data(){return{title:"Tambah Penjualan",query:"",loading:!1,form:{id:null,nomor:null,customer_id:null,date:null,total:0},lines:[],lines_deleted:[]}},created(){Object.keys(this.data).length&&this.setValue()},methods:{selectProduct(e){if(this.lines.length>=1)if(this.lines.some(d=>d.variant_id===e.id))for(var t=0;t<this.lines.length;t++)this.lines[t].variant_id===e.id&&this.lines[t].qty++;else this.lines.push({id:null,variant_id:e.id,product_id:e.product_id,variant:e.name,product:e.product,qty:1,price:e.sell_price,unit_id:e.sell_unit_id});else this.lines.push({id:null,variant_id:e.id,product_id:e.product_id,variant:e.name,product:e.product,qty:1,price:e.sell_price,unit_id:e.sell_unit_id});this.calculateTotal(),this.$forceUpdate()},async findProduct(e){try{this.isLoading=!0;const t=await axios.get("/admin/produk/search",{params:{q:e}});if(t.status==200)return t.data;this.isLoading=!1}catch(t){console.error(t)}},removeLine(e,t){t&&this.lines_deleted.push(t),this.lines.splice(e,1),this.calculateTotal(),this.$forceUpdate()},submit(){this.loading=!0;let e=Object.assign(this.form,{lines:this.lines,lines_deleted:this.lines_deleted}),t=this.$inertia.form(e),d=Object.keys(this.data).length?this.route("admin.sale.order.update",{id:this.data.id}):this.route("admin.sale.order.store");t.post(d,{preserveScroll:!0,onSuccess:()=>{U({type:"success",message:"Data Berhasil Disimpan!"})},onFinish:()=>{this.loading=!1}})},setValue(){this.title="Ubah Penjualan",this.form.id=this.data.id,this.form.nomor=this.data.nomor,this.form.customer_id=this.data.customer_id,this.form.date=this.data.date,this.form.total=this.data.total,this.data.lines.forEach((e,t)=>{this.lines.push({id:e.id,product:e.product.name,variant:e.variant.name,variant_id:e.variant_id,product_id:e.product_id,price:e.price,qty:e.qty,unit_id:e.unit_id,subtotal:e.subtotal})})},calculateTotal(){let e=0;for(var t=0;t<this.lines.length;t++)this.lines[t].subtotal=this.lines[t].qty*this.lines[t].price,e+=this.lines[t].subtotal;this.form.total=e}}},G={class:"content"},Q={class:"content-heading d-flex justify-content-between align-items-center pt-0"},R={class:"space-x-1"},J=i("i",{class:"fa fa-check me-2"},null,-1),K={class:"block block-rounded"},W={class:"block-content p-4"},X=i("span",null,[i("i",{class:"fa fa-search"})],-1),Z=i("i",{class:"fa fa-times"},null,-1),$={class:"d-flex float-end justify-content-end w-75 fs-4"},ee=i("div",{class:""},"Total",-1),te={class:"text-end w-50"};function oe(e,t,d,le,a,c){const p=M,E=g("customer-select"),f=Y,m=F,k=L,h=N,V=O,u=H,q=z,C=I,T=B,P=g("base-layout");return _(),D(P,{title:a.title},{default:s(()=>[i("div",G,[l(T,{"label-width":"30%",onSubmit:S(c.submit,["prevent"]),"label-position":"top"},{default:s(()=>[i("div",Q,[i("span",null,r(a.title),1),i("div",R,[l(p,{"native-type":"submit",type:"primary",loading:a.loading},{default:s(()=>[J,n(" Simpan ")]),_:1},8,["loading"])])]),i("div",K,[i("div",W,[l(h,{gutter:32},{default:s(()=>[l(m,{lg:12},{default:s(()=>[l(f,{class:"mb-4",label:"Pelanggan",error:d.errors.name},{default:s(()=>[l(E,{modelValue:a.form.customer_id,"onUpdate:modelValue":t[0]||(t[0]=o=>a.form.customer_id=o)},null,8,["modelValue"])]),_:1},8,["error"])]),_:1}),l(m,{lg:12},{default:s(()=>[l(f,{class:"mb-4",label:"Tanggal",error:d.errors.email},{default:s(()=>[l(k,{modelValue:a.form.date,"onUpdate:modelValue":t[1]||(t[1]=o=>a.form.date=o),type:"date",class:"w-100",placeholder:"Pilih Tanggal",format:"DD MMMM YYYY","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1},8,["error"])]),_:1})]),_:1}),l(V,{modelValue:a.query,"onUpdate:modelValue":t[2]||(t[2]=o=>a.query=o),"fetch-suggestions":c.findProduct,clearable:"","trigger-on-focus":!1,class:"inline-input w-50 mb-3",placeholder:"Cari Produk",onSelect:c.selectProduct},{default:s(({item:o})=>[i("div",null,[n(r(o.product)+" ",1),o.product?(_(),y(v,{key:0},[n(" - "+r(o.name),1)],64)):w("",!0)]),i("div",null,r(o.sku),1)]),prefix:s(()=>[X]),_:1},8,["modelValue","fetch-suggestions","onSelect"]),l(C,{data:a.lines,border:"",class:"mb-4",id:"variant"},{default:s(()=>[l(u,{label:"Produk"},{default:s(o=>[i("div",null,[n(r(o.row.product)+" ",1),o.row.product?(_(),y(v,{key:0},[n(" - "+r(o.row.variant),1)],64)):w("",!0)]),i("div",null,r(o.row.sku),1)]),_:1}),l(u,{label:"Harga"},{default:s(o=>[n(r(e.currency(o.row.price)),1)]),_:1}),l(u,{label:"Qty"},{default:s(o=>[l(q,{modelValue:o.row.qty,"onUpdate:modelValue":b=>o.row.qty=b,min:1,onChange:c.calculateTotal},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(u,{label:"Total"},{default:s(o=>[n(r(e.currency(o.row.price*o.row.qty)),1)]),_:1}),l(u,{width:"60px",align:"center"},{default:s(o=>[l(p,{type:"danger",size:"small",onClick:b=>c.removeLine(o.$index,o.row.id)},{default:s(()=>[Z]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{justify:"end"},{default:s(()=>[l(m,{lg:12,class:"float-end"},{default:s(()=>[i("div",$,[ee,i("div",te,r(e.currency(a.form.total)),1)])]),_:1})]),_:1})])])]),_:1},8,["onSubmit"])])]),_:1},8,["title"])}const je=x(A,[["render",oe]]);export{je as default};