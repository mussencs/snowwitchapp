import{_ as s}from"./index-M4tVeB1K.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-IVlJxZaZ.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Connector-IVlJxZaZ.js","assets/CanvasUtils-Z4phBtTb.js","assets/ColorUtils-k3FqKNbQ.js","assets/Utils-v1apRgsN.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
