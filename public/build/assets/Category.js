import{_ as f,L as g,o as s,B as u,C as o,a as t,D as a,G as n,c as d,E as h,F as m}from"./id.js";import{E as b}from"./index8.js";import{E as k}from"./index9.js";import"./typescript.js";const v={components:{},props:{data:{type:Object},product:{type:Object},category:{type:Array}}},y={class:"content content-full"},w={class:"block block-rounded block-transparent bg-primary"},E={class:"block-content bg-black-25"},B={class:"py-3 text-center"},C=t("h1",{class:"h2 fw-bold text-white mb-2"},"Produk Kategori",-1),x={class:"h5 fw-medium text-white-75"},j={class:"block block-rounded block-bordered"},D=t("div",{class:"block-header block-header-default"},[t("h3",{class:"block-title"},"Kategori")],-1),F={class:"block-content"},K={class:"nav-main"},L=["href"],N=t("i",{class:"nav-main-link-icon fa fa-angle-right"},null,-1),O={class:"nav-main-link-name"},P=t("div",{class:"content-heading pt-0 mb-3 border-0 d-flex justify-content-between"},[t("h3",{class:"h3 mb-0"},"Produk Terbaru")],-1),V={class:"product"},A={class:"product-content"},G={class:"product-img"},H=["href"],R=["src"],S={class:"product-info"},T={class:"product-title"},$=["href"],q={class:"product-price"};function z(c,I,l,J,M,Q){const r=b,_=k,p=g("base-layout");return s(),u(p,{title:"Home"},{default:o(()=>[t("div",y,[t("div",w,[t("div",E,[t("div",B,[C,t("h2",x,a(l.data.name),1)])])]),n(_,{gutter:20},{default:o(()=>[n(r,{lg:6},{default:o(()=>[t("div",j,[D,t("div",F,[t("ul",K,[(s(!0),d(m,null,h(l.category,(e,i)=>(s(),d("li",{class:"nav-main-item",key:i},[t("a",{class:"nav-main-link",href:c.route("category",{category:e.slug})},[N,t("span",O,a(e.name),1)],8,L)]))),128))])])])]),_:1}),n(r,{lg:18},{default:o(()=>[P,n(_,{gutter:20},{default:o(()=>[(s(!0),d(m,null,h(l.product.data,(e,i)=>(s(),u(r,{lg:5,key:i},{default:o(()=>[t("div",V,[t("div",A,[t("div",G,[t("a",{href:c.route("product.show",{slug:e.slug})},[t("img",{src:e.main_image,class:"img-fluid"},null,8,R)],8,H)]),t("div",S,[t("div",T,[t("a",{href:c.route("product.show",{slug:e.slug})},a(e.name),9,$)]),t("div",q,a(c.currency(e.sell_price)),1)])])])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])]),_:1})}const Z=f(v,[["render",z]]);export{Z as default};