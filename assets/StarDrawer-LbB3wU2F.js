import{_ as r}from"./index-M4tVeB1K.js";import{g as s}from"./Utils-v1apRgsN.js";const o=2,n=5;class _{async draw(a){const{drawStar:t}=await r(()=>import("./Utils-HW0nOYEz.js"),__vite__mapDeps([]));t(a)}getSidesCount(a){const t=a.shapeData;return Math.round(s((t==null?void 0:t.sides)??n))}async particleInit(a,t){const e=t.shapeData;t.starInset=s((e==null?void 0:e.inset)??o),await Promise.resolve()}}export{_ as StarDrawer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
