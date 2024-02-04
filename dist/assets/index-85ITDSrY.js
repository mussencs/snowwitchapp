import{_ as e}from"./index-DhsxT5Pz.js";import{O as s}from"./OptionsColor-kLODGGBo.js";import"./Utils-v1apRgsN.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class a{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function u(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-uAwZQ2qd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new t(o)},i)}export{a as Grab,r as GrabLinks,u as loadExternalGrabInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-uAwZQ2qd.js","assets/CanvasUtils-Z4phBtTb.js","assets/ColorUtils-k3FqKNbQ.js","assets/Utils-v1apRgsN.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-DhsxT5Pz.js","assets/index--OehLxFp.css","assets/OptionsColor-kLODGGBo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
