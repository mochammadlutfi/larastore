import{_ as d,L as p,o as _,B as u,C as s,a as e,G as t,D as i,a5 as a,H as f}from"./id.js";import{E as k}from"./index21.js";import{E as h}from"./index8.js";import{E as b}from"./index9.js";import"./index7.js";import"./typescript.js";const g={props:{errors:Object},data(){return{isLoading:!1,form:{email:"",password:"",remember:!1}}},methods:{resentEmail(){this.isLoading=!0,this.$inertia.visit(this.route("verification.send"),{method:"post",onSuccess:()=>{k({type:"success",message:"Email Berhasil Terkirim!"})}})}}},E={class:"content content-full"},v={class:"block rounded block-bordered"},y={class:"block-content p-3"},w=e("div",{class:"text-center mb-lg-5"},[e("h2",{class:"fs-4 text-center mb-3"},"Verifikasi Email"),e("h3",{class:"fs-5 text-center"},"Verifikasi email kamu untuk menyelesaikan pendaftaran"),e("img",{src:"/images/email.svg",class:"h-50 w-50"})],-1),x={class:"font-size-h5"},B={class:"nice-copy mb-2"},C=e("br",null,null,-1);function V(o,$,L,N,j,n){const r=f,l=h,c=b,m=p("base-layout");return _(),u(m,{title:"Masuk"},{default:s(()=>[e("div",E,[t(c,{justify:"center"},{default:s(()=>[t(l,{md:10,lg:10,class:"align-items-center"},{default:s(()=>[e("div",v,[e("div",y,[w,e("div",x,"Hai "+i(o.$page.props.user.name)+"!",1),e("p",B,[a("Kami sudah mengirim email ke "),e("b",null,i(o.$page.props.user.email),1),a(" berserta link untuk verifikasi akun kamu. Apabila tidak ditemukan, periksa folder spam email"),C]),t(r,{type:"primary",class:"w-100",onClick:n.resentEmail},{default:s(()=>[a(" Kirim Ulang Email ")]),_:1},8,["onClick"])])])]),_:1})]),_:1})])]),_:1})}const z=d(g,[["render",V]]);export{z as default};