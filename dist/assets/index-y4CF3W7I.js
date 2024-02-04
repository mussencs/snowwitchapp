import{_ as o}from"./index-DhsxT5Pz.js";import{s as r}from"./Utils-v1apRgsN.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function c(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await o(()=>import("./Remover-Egdb_oqO.js"),__vite__mapDeps([0,1,2,3,4]));return new a(e)},t)}export{u as Remove,c as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-Egdb_oqO.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/Utils-v1apRgsN.js","assets/index-DhsxT5Pz.js","assets/index--OehLxFp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
