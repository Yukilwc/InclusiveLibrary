import{_ as D,f as R,I as c,R as I,$ as V,r as x,o as i,c as d,a as n,b as C,w as L,F as h,l as E,S as F,a0 as z,a1 as N,d as $,D as q,t as A,m as T}from"./app.59b4e306.js";const W=v=>(z("data-v-3a6a2ec9"),v=v(),N(),v),j={class:""},G=W(()=>n("div",{class:""},"\u4FEE\u6539\u5BB9\u5668\u5BBD\u5EA6",-1)),M=$("\u786E\u8BA4"),O={class:"tags-list-container"},P={class:"tags-list-wrapper"},U={class:"item-wrapper"},H={class:"text"},J={key:0,class:"item--add"},K=R({name:"index",setup(v){const _=c(!1),B=c(380),m=c(380),b=40,p=[{name:"name1",color:"#67C23A"},{name:"name2name2",color:"#E6A23C"},{name:"name33333333",color:"#F56C6C"},{name:"name4name4",color:"#909399"},{name:"name555",color:"#409EFF"}],f=c([...p]),l=c([]),g=function(a,o){if(!a)return"";var t=a.toLowerCase(),u=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(t&&u.test(t)){if(t.length===4){for(var s="#",e=1;e<4;e+=1)s+=t.slice(e,e+1).concat(t.slice(e,e+1));t=s}for(var r=[],e=1;e<7;e+=2)r.push(parseInt("0x"+t.slice(e,e+2)));return r.push(o),"RGBA("+r.join(",")+")"}return t};I(async()=>{await w(),k()});const w=async()=>{var a,o;f.value=[...p],l.value=[],_.value=!1,await y();for(let t=p.length-1;t>=0;t--){let u=(a=document.querySelector(".list--for-calc-length"))==null?void 0:a.getBoundingClientRect().width,s=(o=document.querySelector(".list--for-show"))==null?void 0:o.getBoundingClientRect().width;if(l.value.length===0){if(u<=s){console.log("==========\u7B2C\u4E00\u8F6E\u672A\u8D85\u8FC7\u5BB9\u5668\u5BBD\u5EA6");break}}else if(u<=s-b){console.log("==========\u672A\u8D85\u8FC7\u5BB9\u5668\u5BBD\u5EA6");break}let e=f.value.pop();l.value=[e,...l.value],await y()}_.value=!0},k=()=>{var a=new ResizeObserver(o=>{w()});a.observe(document.querySelector(".tags-list-container"))},y=async()=>new Promise(a=>{V(()=>{a("")})});return console.log("==========hex2Rgb",g("#409EFF","0.8")),(a,o)=>{const t=x("el-input"),u=x("el-button");return i(),d(h,null,[n("div",j,[G,C(t,{placeholder:"\u8BF7\u8F93\u5165\u5BB9\u5668\u5BBD\u5EA6",modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=s=>m.value=s),onInput:o[1]||(o[1]=s=>{B.value=m.value})},null,8,["modelValue"]),C(u,null,{default:L(()=>[M]),_:1})]),n("div",{class:"outer-container mt10",style:F({width:`${B.value}px`})},[n("div",O,[n("div",P,[(i(),d(h,null,E(2,(s,e)=>n("div",{class:q(["list",e==0?"list--for-calc-length":"list--for-show"]),key:e},[(i(!0),d(h,null,E(f.value,(r,S)=>(i(),d("div",{class:"item",key:S,style:F({backgroundColor:g(r.color,"0.2")})},[n("div",U,[n("div",H,A(r.name),1)])],4))),128)),_.value&&l.value.length>0?(i(),d("div",J," +"+A(l.value.length),1)):T("",!0)],2)),64))])])],4)],64)}}});var X=D(K,[["__scopeId","data-v-3a6a2ec9"],["__file","index.vue"]]);export{X as default};
