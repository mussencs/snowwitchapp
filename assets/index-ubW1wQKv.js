import{_ as i}from"./index-M4tVeB1K.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-FwYHHhPX.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-FwYHHhPX.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css","assets/ValueWithRandom--qAMq3uS.js","assets/AnimationOptions-xsz24yrg.js","assets/Utils-v1apRgsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
