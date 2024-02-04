import{_ as e}from"./index-M4tVeB1K.js";import{E as s}from"./EmitterShapeBase-9m8zmmPs.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-B0zI_fan.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-_36zz1HX.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-_36zz1HX.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css","assets/Utils-v1apRgsN.js","assets/AnimatableColor-KMUtOEIM.js","assets/AnimationOptions-xsz24yrg.js","assets/OptionsColor-kLODGGBo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
