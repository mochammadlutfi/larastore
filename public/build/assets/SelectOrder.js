import{_ as c,o,B as l,C as d,c as m,E as u,F as p}from"./id.js";import{E as h,a as f}from"./index33.js";import"./index22.js";import"./typescript.js";import"./event.js";import"./index31.js";import"./scroll.js";import"./isEqual.js";import"./_Uint8Array.js";import"./debounce.js";import"./index34.js";import"./validator.js";const _={name:"SelectOrder",data(){return{dataList:[],value:this.modelValue,isLoading:!1}},watch:{modelValue(e){this.value=e}},props:{modelValue:{type:[String,Number]}},computed:{},async mounted(){await this.fetchData()},methods:{async fetchData(){try{this.isLoading=!0;const e=await axios.get(this.route("user.order.data"),{params:{status:"done"}});e.status==200&&(this.dataList=[],this.dataList=e.data),this.isLoading=!1}catch(e){console.error(e)}},selectChange(e){this.$emit("update:modelValue",e)}}};function g(e,s,L,v,a,r){const i=f,n=h;return o(),l(n,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),"value-key":"id",class:"w-100",filterable:"",clearable:"",remote:"",onChange:r.selectChange,autocomplete:"off",loading:a.isLoading,placeholder:"Pilih Pesanan"},{default:d(()=>[(o(!0),m(p,null,u(a.dataList,t=>(o(),l(i,{key:t.id,label:t.nomor,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange","loading"])}const F=c(_,[["render",g]]);export{F as default};
