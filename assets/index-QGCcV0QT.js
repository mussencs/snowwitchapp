import{_ as s}from"./index-DhsxT5Pz.js";import{i as l,e as c,l as p,a as d}from"./Utils-v1apRgsN.js";const i=["text","character","char","multiline-text"];class u{async draw(t){const{drawText:e}=await s(()=>import("./Utils-RnHGyT-d.js"),__vite__mapDeps([0,1]));e(t)}async init(t){const e=t.actualOptions;if(i.find(a=>l(a,e.particles.shape.type))){const a=i.map(n=>e.particles.shape.options[n]).find(n=>!!n),r=[];c(a,n=>{r.push(p(n.font,n.weight))}),await Promise.all(r)}}async particleInit(t,e){if(!e.shape||!i.includes(e.shape))return;const a=e.shapeData;if(a===void 0)return;const r=a.value;r!==void 0&&(e.text=d(r,e.randomIndexData),await Promise.resolve())}}const _=Object.freeze(Object.defineProperty({__proto__:null,TextDrawer:u,validTypes:i},Symbol.toStringTag,{value:"Module"}));async function h(o,t=!0){const{TextDrawer:e}=await s(()=>Promise.resolve().then(()=>_),void 0);await o.addShape(i,new e,t)}export{h as loadTextShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-RnHGyT-d.js","assets/Utils-v1apRgsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
