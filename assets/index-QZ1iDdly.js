import{_ as o}from"./index-M4tVeB1K.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-kHw7rzh_.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-kHw7rzh_.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css","assets/Utils-v1apRgsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
