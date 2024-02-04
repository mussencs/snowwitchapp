import{_ as i}from"./index-DhsxT5Pz.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-zNzPgTtc.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-zNzPgTtc.js","assets/Utils-v1apRgsN.js","assets/ValueWithRandom--qAMq3uS.js","assets/AnimationOptions-xsz24yrg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
