import{_ as m}from"./index-DhsxT5Pz.js";import{c as o,f as n}from"./Utils-v1apRgsN.js";const s=12,c=360,t=0;class g{async draw(r){const{drawCircle:a}=await m(()=>import("./Utils-KM-E2bpK.js"),__vite__mapDeps([]));a(r)}getSidesCount(){return s}async particleInit(r,a){const i=a.shapeData,e=(i==null?void 0:i.angle)??{max:c,min:t};a.circleRange=o(e)?{min:n(e.min),max:n(e.max)}:{min:t,max:n(e)},await Promise.resolve()}}export{g as CircleDrawer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}