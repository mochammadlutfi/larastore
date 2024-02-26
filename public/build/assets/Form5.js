import{_,L as b,o as V,B as g,C as t,a as r,G as e,D as E,a5 as k,a6 as y,H as S}from"./id.js";import{E as v}from"./index21.js";import{E as x}from"./index22.js";import{E as w,a as B}from"./index23.js";import{E as M}from"./index8.js";import{E as N}from"./index9.js";import"./index7.js";import"./typescript.js";import"./event.js";import"./_Uint8Array.js";import"./_initCloneObject.js";const C={props:{data:{type:Object,default:{}},errors:Object},data(){return{title:"Tambah Supplier Baru",loading:!1,form:{id:null,name:null,pic:null,phone:null,email:null,address:null}}},created(){Object.keys(this.data).length&&this.setValue()},methods:{submit(){this.loading=!0;let m=this.$inertia.form(this.form),l=Object.keys(this.data).length?this.route("admin.purchase.supplier.update",{id:this.data.id}):this.route("admin.purchase.supplier.store");m.post(l,{preserveScroll:!0,onSuccess:()=>{v({type:"success",message:"Data Berhasil Disimpan!"})},onFinish:()=>{this.loading=!1}})},setValue(){this.title="Ubah Supplier",this.form.id=this.data.id,this.form.name=this.data.name,this.form.pic=this.data.pic,this.form.phone=this.data.phone,this.form.email=this.data.email,this.form.address=this.data.address}}},U={class:"content"},j={class:"content-heading d-flex justify-content-between align-items-center pt-0"},A={class:"space-x-1"},D={class:"block block-rounded"},F={class:"block-content p-4"};function I(m,l,s,O,o,u){const p=S,n=x,i=w,d=M,c=N,f=B,h=b("base-layout");return V(),g(h,null,{default:t(()=>[r("div",U,[e(f,{"label-width":"30%",onSubmit:y(u.submit,["prevent"]),"label-position":"left"},{default:t(()=>[r("div",j,[r("span",null,E(o.title),1),r("div",A,[e(p,{"native-type":"submit",type:"primary",loading:o.loading},{default:t(()=>[k(" Simpan ")]),_:1},8,["loading"])])]),r("div",D,[r("div",F,[e(c,{gutter:32},{default:t(()=>[e(d,{lg:12},{default:t(()=>[e(i,{class:"mb-4",label:"Nama Supplier",error:s.errors.name},{default:t(()=>[e(n,{modelValue:o.form.name,"onUpdate:modelValue":l[0]||(l[0]=a=>o.form.name=a),placeholder:"Masukan Nama Supplier"},null,8,["modelValue"])]),_:1},8,["error"]),e(i,{class:"mb-4",label:"PIC Supplier",error:s.errors.pic},{default:t(()=>[e(n,{modelValue:o.form.pic,"onUpdate:modelValue":l[1]||(l[1]=a=>o.form.pic=a),placeholder:"Masukan PIC"},null,8,["modelValue"])]),_:1},8,["error"]),e(i,{class:"mb-4",label:"No Handphone",error:s.errors.phone},{default:t(()=>[e(n,{modelValue:o.form.phone,"onUpdate:modelValue":l[2]||(l[2]=a=>o.form.phone=a),placeholder:"Masukan No Handphone"},null,8,["modelValue"])]),_:1},8,["error"])]),_:1}),e(d,{lg:12},{default:t(()=>[e(i,{class:"mb-4",label:"Alamat Email",error:s.errors.email},{default:t(()=>[e(n,{modelValue:o.form.email,"onUpdate:modelValue":l[3]||(l[3]=a=>o.form.email=a),placeholder:"Masukan Alamat Email"},null,8,["modelValue"])]),_:1},8,["error"]),e(i,{class:"mb-4",label:"Alamat Lengkap",error:s.errors.address},{default:t(()=>[e(n,{modelValue:o.form.address,"onUpdate:modelValue":l[4]||(l[4]=a=>o.form.address=a),type:"textarea",rows:5,placeholder:"Masukan Alamat Email"},null,8,["modelValue"])]),_:1},8,["error"])]),_:1})]),_:1})])])]),_:1},8,["onSubmit"])])]),_:1})}const W=_(C,[["render",I]]);export{W as default};