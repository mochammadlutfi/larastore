import{F as u,A as h,P as n}from"./pagination.js";import{_ as m,L as g,o as i,c,a as t,G as l,C as e,a4 as f,F as v,E as b,B as k,D as x}from"./id.js";import{E as w}from"./index9.js";import{E as y}from"./index8.js";import"./typescript.js";const E={name:"VideoSlide",components:{Flicking:u,Arrow:h,Pagination:n},data(){return{data:[],isLoading:!1,plugins:[],options:{align:"prev",defaultIndex:1,circular:!0}}},async mounted(){typeof window>"u"||(this.plugins.push(new n({type:"bullet"})),await this.fetchData())},methods:{async fetchData(){try{this.isLoading=!0;const s=await axios.get(this.route("video.data"),{params:{}});s.status==200&&(this.data=s.data),this.isLoading=!1}catch(s){console.error(s)}}}},L={class:"position-relative bg-body-extra-light"},S={class:"content content-full"},V={class:"pt-5"},F=f('<div class="position-relative"><span class="text-back">02</span><h2 class="fw-bold mb-2 text-center"> Galeri <span class="text-primary">Video</span></h2><h3 class="h4 fw-medium text-muted text-center mb-5"> Liputan Media &amp; Video Lebih Kenal Dengan Makhfudz Solaiman (Kang Ebod) </h3></div>',1),B={class:"block block-rounded block-bordered d-flex flex-column h-100 mb-0"},D={class:"block-content p-3"},C=["src"],N={class:"block-content p-3 pt-0"},A={class:"mb-1 fs-5"},G=["href"],K=t("div",{class:"flicking-pagination"},null,-1),M=t("div",{class:"position-relative text-center"},[t("div",{class:"flicking-pagination video-pagination"})],-1);function P(s,z,I,R,o,$){const r=y,d=g("Flicking"),p=w;return i(),c("div",L,[t("div",S,[t("div",V,[F,l(p,{gutter:32,class:"mb-lg-4"},{default:e(()=>[l(d,{options:o.options,plugins:o.plugins},{viewport:e(()=>[K]),default:e(()=>[(i(!0),c(v,null,b(o.data,(a,_)=>(i(),k(r,{lg:8,span:24,key:_,class:"mb-lg-4"},{default:e(()=>[t("div",B,[t("div",D,[t("img",{src:"uploads"+a.image,class:"img-fluid rounded-3"},null,8,C)]),t("div",N,[t("h2",A,[t("a",{class:"text-primary",href:s.route("video.show",{slug:a.slug})},x(a.title),9,G)])])])]),_:2},1024))),128))]),_:1},8,["options","plugins"])]),_:1}),M])])])}const Q=m(E,[["render",P]]);export{Q as default};
