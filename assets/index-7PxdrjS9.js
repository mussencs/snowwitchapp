import{_ as r}from"./index-M4tVeB1K.js";import{s}from"./Utils-v1apRgsN.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function f(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await r(()=>import("./Pusher-AWYMT7el.js"),__vite__mapDeps([0,1,2,3,4]));return new u(e)},t)}export{a as Push,f as loadExternalPushInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pusher-AWYMT7el.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/Utils-v1apRgsN.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
