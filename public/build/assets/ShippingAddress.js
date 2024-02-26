import{_ as j,i as F,w as T,a9 as U,L as b,o as d,c as u,a as r,B as v,C as a,a6 as y,e as M,D as m,G as l,H as D,a5 as c,F as g,E as N}from"./id.js";import{E as A}from"./index21.js";import{E as G}from"./index27.js";import{E as O}from"./index8.js";import{E as R}from"./index9.js";import{E as z}from"./index22.js";import{E as H,a as I}from"./index23.js";import{E as J,a as K}from"./index29.js";import"./index7.js";import"./typescript.js";import"./index28.js";import"./scroll.js";import"./event.js";import"./_Uint8Array.js";import"./_initCloneObject.js";const Y={name:"ShippingAddress",setup(){const e=F();return T(e,t=>{t&&t.$mapPromise.then(n=>{})}),{mapRef:e}},props:{modelValue:{type:Object,default:{}}},mounted(){this.center.lat=this.$page.props.location.lat,this.center.lng=this.$page.props.location.lng,this.marker.lat=this.$page.props.location.lat,this.marker.lng=this.$page.props.location.lng},data(){return{title:"Tambah Alamat Baru",selectMap:!0,form:{id:null,name:null,reciever:null,phone:null,address:null,formatted_address:null,lat:null,lng:null,is_main:0,distance:null},dataList:[],errors:{},terms:null,modalShow:!1,modalForm:!1,editMode:!1,selected:this.modelValue,locations:[],locationSelected:null,mapOptions:{mapTypeControl:!1,streetViewControl:!1,lang:"id"},center:{lat:51.093048,lng:6.84212},marker:{lat:51.093048,lng:6.84212}}},watch:{locationSelected(e){e?(this.form.lat=e.lat,this.form.lng=e.lng,this.form.postal_code=e.postal_code,this.form.area_id=e.area_id,this.form.area_text=e.area_text):(this.form.postal_code=null,this.form.lat=null,this.form.lng=null,this.form.area_id=null,this.form.area_text=null)},modelValue(e){Object.keys(e).length&&(this.selected=e)}},methods:{openModal(){this.modalShow=!0,this.fetchData()},selectAddress(e){this.selected=e,this.$emit("update:modelValue",e),this.modalShow=!1},async fetchData(){try{const e=await axios.get("/user/alamat/data",{params:{}});e.status==200&&(this.dataList=e.data),this.isLoading=!1}catch(e){console.error(e)}},createAddress(){this.modalForm=!0},closeForm(){this.reset(),this.$root.window.mobile||this.$bvModal.hide("modalCreateAddress")},reset(){this.title="Tambah Alamat Baru",this.form.id=null,this.form.name=null,this.form.reciever=null,this.form.phone=null,this.form.address=null,this.form.postal_code=null,this.form.area_id=null,this.form.area_text=null,this.form.lat=null,this.form.lng=null,this.modalForm=!1,this.modalShow=!1,this.errors={},this.locationSelected={},this.editMode=!1},onSearch(e,t){e.length&&(t(!0),this.search(t,e,this))},submit:function(){let e={};e=Object.assign(e,this.form);let t=this.editMode?this.route("user.address.update"):this.route("user.address.store");axios.post(t,e).then(n=>{n.data.fail?(this.errors=n.data.errors,this.$swal.close()):(this.$swal.close(),this.reset(),this.selected=n.data.data,this.$emit("done",n.data.data),this.$swal.fire({icon:"success",title:"Success",showConfirmButton:!1,showCancelButton:!1,html:"Alamat Baru Berhasil Ditambahkan!",timer:1500}))}).catch(function(n){n.response&&(this.errors=n.response.data.errors)})},search:U.debounce((e,t,n)=>{let h={keyword:t};axios.get(n.route("shipper.sub_urban"),{params:h}).then(function(o){const p=o.data;n.locations=[],p.data.forEach(i=>{n.locations.push({area_id:i.adm_level_5.id,area_text:i.adm_level_2.name+", "+i.adm_level_3.name+", "+i.adm_level_4.name+", "+i.adm_level_5.name,postal_code:i.postcodes[0],lat:i.adm_level_5.geo_coord.lat,lng:i.adm_level_5.geo_coord.lng})}),e(!1)}).catch(function(o){})},350),edit(e){this.reset(),this.title="Ubah Alamat",this.editMode=!0,this.form.id=e.id,this.form.name=e.name,this.form.reciever=e.reciever,this.form.phone=e.phone,this.form.address=e.address,this.form.postal_code=e.postal_code,this.form.area_id=e.area_id,this.form.area_text=e.area_text,this.form.lat=e.lat,this.form.lng=e.lng,this.locationSelected={area_id:e.area_id,area_text:e.area_text,postal_code:e.postal_code,lat:e.lat,lng:e.lng},this.$bvModal.hide("addressList"),this.$root.window.mobile?this.modalForm=!0:this.$bvModal.show("modalCreateAddress")},setLatLng(){this.form.lat=this.center.lat,this.form.lng=this.center.lng},removeLatLng(){this.form.lat=null,this.form.lng=null},async onDragend(e){try{this.isLoading=!0;const t=await axios.post("/user/alamat/geocode",{latlng:e.latLng.lat()+","+e.latLng.lng()});t.status==200&&(t.data.jarak<=1e4?(this.form.formatted_address=t.data.data,this.form.distance=t.data.jarak,this.center.lat=e.latLng.lat(),this.center.lng=e.latLng.lng(),this.form.lat=e.latLng.lat(),this.form.lng=e.latLng.lng()):(A({type:"error",message:"Lokasi Tidak Terjangkau!"}),this.center.lat=this.$page.props.location.lat,this.center.lng=this.$page.props.location.lng,this.marker.lat=this.$page.props.location.lat,this.marker.lng=this.$page.props.location.lng)),this.isLoading=!1}catch(t){console.error(t)}},setPlace(e){if(!e.geometry||!e.geometry.location){console.log("Returned place contains no geometry");return}this.center=e.geometry.location,this.form.lat=this.center.lat,this.form.lng=this.center.lng,this.form.formatted_address=e.formatted_address},async getStreetAddressFrom(e,t){const n=this;try{this.isLoading=!0;const h=await axios.post("/user/alamat/geocode",{latlng:e+","+t});h.status==200&&(h.data.jarak<=1e4?(n.form.distance=h.data.jarak,n.form.formatted_address=h.data.data):A({type:"error",message:"Lokasi Tidak Terjangkau!"})),this.isLoading=!1}catch(h){console.error(h)}},async submit(){const e=this;await axios.post("/user/alamat/json-store",e.form).then(t=>{const n=t.data;this.selected=n.result,this.$emit("update:modelValue",n.result),this.modalForm=!1}).catch(t=>{const n=t.response.data;e.errors=n.result,e.loading=!1,console.log(t)})}}},q={class:"content-heading d-flex justify-content-between mb-2 py-2"},Q=r("span",null,"Alamat Pengiriman",-1),W={class:"space-x-1"},X={key:0,class:"block block-bordered rounded mb-2"},Z={class:"block-header border-3x border-bottom p-3"},$={class:"block-title"},ee={class:"block-content p-3"},te={class:"content__top-info"},oe={class:"top-info__name"},se={class:"top-info__phone"},le={class:"content__complete-address"},ae={class:"content__district"},re={key:1,class:"block block-bordered rounded mb-2"},ne={class:"block-content text-center p-3"},ie=r("h3",{class:"font-weight-bold h4"},"Alamat Pengiriman Belum Ditambahkan",-1),de=r("i",{class:"fa fa-plus me-2"},null,-1),me={class:"d-flex justify-content-between"},ce=["id"],pe={class:"block-content p-3"},he={class:"mb-3"},ue={class:"font-size-md"},_e={class:"font-w700"},fe={class:"content__complete-address"},ge={class:"content__district"},ke=r("i",{class:"si si-note me-1"},null,-1),be=r("i",{class:"fa fa-check me-1"},null,-1),ye={class:"d-flex justify-content-between"},we=["id"],xe={class:"ep-input mb-4"},Ve={class:"ep-input__wrapper"},ve={class:"text-end"};function Me(e,t,n,h,o,p){const i=D,k=O,w=R,x=G,L=b("GMapAutocomplete"),C=b("GMapMarker"),E=b("GMapMap"),f=z,_=H,V=J,S=K,B=I;return d(),u("div",null,[r("div",q,[Q,r("div",W,[Object.keys(o.selected).length?(d(),v(i,{key:0,type:"primary",plain:"",onClick:y(p.openModal,["prevent"])},{default:a(()=>[c(" Pilih Alamat Lain ")]),_:1},8,["onClick"])):M("",!0)])]),Object.keys(o.selected).length?(d(),u("div",X,[r("div",Z,[r("h3",$,m(o.selected.name),1)]),r("div",ee,[r("div",te,[r("span",oe,m(o.selected.reciever),1),r("span",se,m(o.selected.phone),1)]),r("div",le,m(o.selected.address),1),r("div",ae,m(o.selected.area_text),1)])])):(d(),u("div",re,[r("div",ne,[ie,l(i,{type:"primary",onClick:y(p.createAddress,["prevent"])},{default:a(()=>[de,c("Tambah Alamat ")]),_:1},8,["onClick"])])])),l(x,{modelValue:o.modalShow,"onUpdate:modelValue":t[0]||(t[0]=s=>o.modalShow=s),class:"address-list","show-close":!1},{header:a(({titleId:s})=>[r("div",me,[r("h4",{id:s,class:"fs-5 fw-bold my-auto"}," Pilih Alamat Pengiriman ",8,ce)])]),default:a(()=>[(d(!0),u(g,null,N(o.dataList,s=>(d(),u("div",{class:"block block-rounded block-bordered mb-15",key:s.id},[r("div",pe,[l(w,null,{default:a(()=>[l(k,{span:20},{default:a(()=>[r("div",he,[r("div",ue,[r("span",_e,m(s.reciever),1),c("("+m(s.name)+") ",1)]),r("div",null,m(s.phone),1),r("div",fe,m(s.address),1),r("div",ge,m(s.area_text),1)]),l(i,{type:"info",onClick:P=>p.edit(s),size:"small"},{default:a(()=>[ke,c(" Ubah ")]),_:2},1032,["onClick"])]),_:2},1024),l(k,{span:4,class:"d-flex"},{default:a(()=>[this.selected.id!=s.id?(d(),v(i,{key:0,type:"primary",onClick:P=>p.selectAddress(s),class:"my-auto"},{default:a(()=>[be,c(" Pilih ")]),_:2},1032,["onClick"])):M("",!0)]),_:2},1024)]),_:2},1024)])]))),128))]),_:1},8,["modelValue"]),l(x,{modelValue:o.modalForm,"onUpdate:modelValue":t[11]||(t[11]=s=>o.modalForm=s),class:"address-form","show-close":!1},{header:a(({titleId:s})=>[r("div",ye,[r("h4",{id:s,class:"fs-5 fw-bold my-auto"},m(o.title),9,we)])]),default:a(()=>[l(B,{"label-position":"top","label-width":"100%",onSubmit:y(p.submit,["prevent"])},{default:a(()=>[o.selectMap?(d(),u(g,{key:0},[r("div",xe,[r("div",Ve,[l(L,{class:"ep-input__inner",placeholder:"Cari Lokasi",onPlace_changed:p.setPlace},null,8,["onPlace_changed"])])]),l(E,{center:o.center,options:o.mapOptions,zoom:14,ref:"mapRef","map-type-id":"roadmap",class:"w-100 mb-4",style:{height:"300px"}},{default:a(()=>[l(C,{position:o.center,draggable:!0,onDragend:p.onDragend},null,8,["position","onDragend"])]),_:1},8,["center","options"]),l(_,{label:"Alamat Berdasarkan Titik",error:o.errors.phone},{default:a(()=>[l(f,{modelValue:o.form.formatted_address,"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.formatted_address=s),type:"textarea",rows:2,readonly:!0},null,8,["modelValue"])]),_:1},8,["error"])],64)):(d(),u(g,{key:1},[l(_,{label:"Alamat Berdasarkan Titik",error:o.errors.phone},{default:a(()=>[l(f,{modelValue:o.form.formatted_address,"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.formatted_address=s),type:"textarea",rows:2,readonly:!0},null,8,["modelValue"])]),_:1},8,["error"]),l(_,{label:"Alamat Lengkap",error:o.errors.phone},{default:a(()=>[l(f,{modelValue:o.form.address,"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.address=s),type:"textarea",rows:2,placeholder:"Masukan Alamat"},null,8,["modelValue"])]),_:1},8,["error"]),l(_,{label:"Nama Alamat",error:o.errors.name},{default:a(()=>[l(f,{modelValue:o.form.name,"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.name=s),type:"text",placeholder:"Masukan Nama Alamat"},null,8,["modelValue"])]),_:1},8,["error"]),l(w,{gutter:20},{default:a(()=>[l(k,{span:12},{default:a(()=>[l(_,{label:"Nama Penerima",error:o.errors.name},{default:a(()=>[l(f,{modelValue:o.form.reciever,"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.reciever=s),type:"text",placeholder:"Masukan Nama Penerima"},null,8,["modelValue"])]),_:1},8,["error"])]),_:1}),l(k,{span:12},{default:a(()=>[l(_,{label:"No HP Penerima",error:o.errors.phone},{default:a(()=>[l(f,{modelValue:o.form.phone,"onUpdate:modelValue":t[6]||(t[6]=s=>o.form.phone=s),type:"text",placeholder:"Masukan No Handphone"},null,8,["modelValue"])]),_:1},8,["error"])]),_:1})]),_:1}),l(_,{label:"Jadikan Alamat Utama?"},{default:a(()=>[l(S,{modelValue:o.form.is_main,"onUpdate:modelValue":t[7]||(t[7]=s=>o.form.is_main=s)},{default:a(()=>[l(V,{label:1,border:""},{default:a(()=>[c("Ya")]),_:1}),l(V,{label:0,border:""},{default:a(()=>[c("Tidak")]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)),r("div",ve,[o.selectMap?(d(),u(g,{key:0},[l(i,{onClick:t[8]||(t[8]=s=>o.modalForm=!1)},{default:a(()=>[c("Batal")]),_:1}),l(i,{type:"primary",onClick:t[9]||(t[9]=s=>o.selectMap=!1)},{default:a(()=>[c(" Pilih Titik ")]),_:1})],64)):(d(),u(g,{key:1},[l(i,{type:"primary",plain:"",onClick:t[10]||(t[10]=s=>o.selectMap=!0)},{default:a(()=>[c(" Kembali ")]),_:1}),l(i,{type:"primary",onClick:p.submit},{default:a(()=>[c(" Simpan ")]),_:1},8,["onClick"])],64))])]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"])])}const Re=j(Y,[["render",Me]]);export{Re as default};