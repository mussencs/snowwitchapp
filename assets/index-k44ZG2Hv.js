import{_ as r}from"./index-DhsxT5Pz.js";import{d as s}from"./Utils-v1apRgsN.js";class l{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(e){e&&(e.delay!==void 0&&(this.delay=e.delay),e.quantity!==void 0&&(this.quantity=e.quantity),e.particles!==void 0&&(this.particles=s({},e.particles)),e.pauseOnStop!==void 0&&(this.pauseOnStop=e.pauseOnStop))}}async function u(i,e=!0){await i.addInteractor("externalTrail",async t=>{const{TrailMaker:n}=await r(()=>import("./TrailMaker-XHsGxlXq.js"),__vite__mapDeps([0,1,2,3,4]));return new n(t)},e)}export{l as Trail,u as loadExternalTrailInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailMaker-XHsGxlXq.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/Utils-v1apRgsN.js","assets/index-DhsxT5Pz.js","assets/index--OehLxFp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
