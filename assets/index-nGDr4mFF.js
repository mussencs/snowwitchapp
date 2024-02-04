import{_ as n}from"./index-M4tVeB1K.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BOKATD7T.js"),__vite__mapDeps([0,1,2,3,4]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-4yZwpx9V.js"),__vite__mapDeps([5,1,2,3,4]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-BOKATD7T.js","assets/PolygonDrawerBase-Fw6vjONe.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css","assets/Utils-v1apRgsN.js","assets/TriangleDrawer-4yZwpx9V.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
