import{h as v}from"./moment.js";import{_ as D,L as E,o as i,B as _,C as e,a as t,a5 as d,b as h,G as a,D as c,c as p,E as C,F as k,e as g,H as V}from"./id.js";import{E as j}from"./index22.js";import{E as B}from"./index8.js";import{E as T}from"./index9.js";import{E as z}from"./index31.js";import"./typescript.js";import"./event.js";const L={data(){return{status:this.route().params.status==null?"pending":this.route().params.status,data:[],isLoading:!1,page:1,pageSize:0,total:0,from:0,to:0,searchTerms:""}},async mounted(){await this.fetchData()},methods:{async fetchData(r){var r=r??1;try{this.isLoading=!0;const o=await axios.get(this.route("user.return.data"),{params:{page:r,search:this.searchTerms,status:this.status}});o.status==200&&(this.data=o.data.data,this.page=o.data.current_page,this.total=o.data.total,this.pageSize=o.data.per_page,this.from=o.data.from,this.to=o.data.to),this.isLoading=!1}catch(o){console.error(o)}},format_date(l){if(l)return v.locale("id"),v(String(l)).format("DD MMM YYYY")}}},M={class:"d-flex justify-content-between align-items-center mb-4"},N=t("h3",{class:"fs-4 fw-bold mb-0"},"Retur Pesanan",-1),R={class:"space-x-1"},S=["href"],Y=t("i",{class:"fa fa-plus me-1"},null,-1),P={class:"block block-bordered rounded mb-3"},F={class:"nav nav-tabs nav-tabs-alt nav-fill"},I={class:"nav-item"},q=["href"],A={class:"nav-item"},G=["href"],H={class:"nav-item"},K=["href"],U={class:"block-content p-2"},J=t("i",{class:"fa fa-search"},null,-1),O={class:"d-flex float-end my-auto"},Q={class:"my-auto px-3"},W={class:"pt-25 pl-0"},X=t("i",{class:"fa fa-chevron-left fa-fw"},null,-1),Z=t("i",{class:"fa fa-chevron-right fa-fw"},null,-1),$={class:"block-header border-3x border-bottom p-3"},tt={class:"block-title"},et={class:"block-options"},st={class:"block-options-item"},at={class:"block-content p-3"},ot=["src"],nt={class:"my-auto"},lt={class:"fs-6 fw-bold"},rt={class:"fs-sm fw-semibold"},it={class:"block-content block-content-full block-content-sm text-right border-top"},ct=["href"];function dt(l,r,o,ut,n,y){const w=j,u=B,b=V,f=T,m=z,x=E("user-layout");return i(),_(x,null,{default:e(()=>[t("div",M,[N,t("div",R,[t("a",{href:l.route("user.return.create"),class:"ep-button ep-button--primary"},[Y,d(" Ajukan Retur ")],8,S)])]),t("div",P,[t("ul",F,[t("li",I,[t("a",{class:h(["nav-link",{active:n.status=="pending"}]),href:l.route("user.return.index",{status:"pending"})},"Pending ",10,q)]),t("li",A,[t("a",{class:h(["nav-link",{active:n.status=="confirm"}]),href:l.route("user.return.index",{status:"confirm"})},"Disetujui ",10,G)]),t("li",H,[t("a",{class:h(["nav-link",{active:n.status=="reject"}]),href:l.route("user.return.index",{status:"reject"})},"Ditolak ",10,K)])]),t("div",U,[a(f,{gutter:12},{default:e(()=>[a(u,{lg:12},{default:e(()=>[a(w,{modelValue:n.searchTerms,"onUpdate:modelValue":r[0]||(r[0]=s=>n.searchTerms=s),class:"w-75 m-2",placeholder:"Cari Pesanan"},{prefix:e(()=>[J]),_:1},8,["modelValue"])]),_:1}),a(u,{lg:12,class:"d-flex float-end my-auto"},{default:e(()=>[t("div",O,[t("div",Q,[t("span",null,c(n.from)+"-"+c(n.to)+"/"+c(n.total),1)]),t("div",W,[a(b,{type:"primary",size:"small"},{default:e(()=>[X]),_:1}),a(b,{type:"primary",size:"small",plain:""},{default:e(()=>[Z]),_:1})])])]),_:1})]),_:1})])]),n.data.length?(i(!0),p(k,{key:0},C(n.data,s=>(i(),p("div",{class:"block rounded block-bordered mb-2",key:s.id},[t("div",$,[t("h3",tt,c(y.format_date(s.created_at)),1),t("div",et,[t("div",st,[s.status=="pending"?(i(),_(m,{key:0,class:"ml-2",type:"warning"},{default:e(()=>[d("Menunggu Konfirmasi")]),_:1})):s.status=="confirm"?(i(),_(m,{key:1,class:"ml-2",type:"info"},{default:e(()=>[d("Disetujui")]),_:1})):s.status=="cancel"?(i(),_(m,{key:2,class:"ml-2",type:"danger"},{default:e(()=>[d("Ditolak")]),_:1})):g("",!0)])])]),t("div",at,[a(f,{gutter:20},{default:e(()=>[a(u,{lg:18},{default:e(()=>[a(f,{gutter:20},{default:e(()=>[a(u,{lg:3},{default:e(()=>[t("img",{src:s.lines[0].product.main_image,class:"img-fluid"},null,8,ot)]),_:2},1024),a(u,{lg:18,class:"d-flex"},{default:e(()=>[t("div",nt,[t("div",lt,[d(c(s.lines[0].product.name)+" ",1),s.lines[0].variant.name?(i(),p(k,{key:0},[d(" - "+c(s.lines[0].variant.name),1)],64)):g("",!0)]),t("div",rt,c(s.lines[0].qty),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),t("div",it,[t("a",{href:l.route("user.return.show",{id:s.id}),class:"ep-button ep-button--primary is-plain"}," Detail Retur ",8,ct)])]))),128)):g("",!0)]),_:1})}const kt=D(L,[["render",dt]]);export{kt as default};