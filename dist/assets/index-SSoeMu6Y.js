import{_ as n}from"./index-DhsxT5Pz.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-k8p_T5xo.js"),__vite__mapDeps([0,1,2,3,4]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-Ijik5S1t.js"),__vite__mapDeps([5,1,2,3,4]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-k8p_T5xo.js","assets/PolygonDrawerBase-UF74eD-k.js","assets/index-DhsxT5Pz.js","assets/index--OehLxFp.css","assets/Utils-v1apRgsN.js","assets/TriangleDrawer-Ijik5S1t.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
