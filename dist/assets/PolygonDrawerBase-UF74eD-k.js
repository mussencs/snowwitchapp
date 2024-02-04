import{_ as o}from"./index-DhsxT5Pz.js";import{g as d}from"./Utils-v1apRgsN.js";const n=5;class c{async draw(e){const{particle:t,radius:a}=e,s=this.getCenter(t,a),r=this.getSidesData(t,a),{drawPolygon:i}=await o(()=>import("./Utils-kBXqb-Ez.js"),__vite__mapDeps([0,1]));i(e,s,r)}getSidesCount(e){const t=e.shapeData;return Math.round(d((t==null?void 0:t.sides)??n))}}export{c as P};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-kBXqb-Ez.js","assets/Utils-v1apRgsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
