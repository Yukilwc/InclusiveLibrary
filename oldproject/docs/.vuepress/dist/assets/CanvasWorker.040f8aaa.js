import{_ as t,f as c,R as _,o as v,c as d,F as p,a0 as l,a1 as u,a as e}from"./app.59b4e306.js";function i(){return new Worker("/InclusiveLibrary/assets/StarsCanvasWorker.6b5b248c.js",{type:"module"})}const r=a=>(l("data-v-55320da0"),a=a(),u(),a),f=r(()=>e("div",null,"CanvasWorker",-1)),k=r(()=>e("div",{class:"canvas-container"},[e("canvas",{id:"canvas"})],-1)),m=c({name:"CanvasWorker",setup(a){return _(()=>{const s=new i;let n=document.getElementById("canvas").transferControlToOffscreen();s.postMessage({canvas:n},[n])}),(s,o)=>(v(),d(p,null,[f,k],64))}});var C=t(m,[["__scopeId","data-v-55320da0"],["__file","CanvasWorker.vue"]]);export{C as default};
