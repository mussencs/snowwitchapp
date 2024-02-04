import{_ as a}from"./index-M4tVeB1K.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-NZFmm0Ls.js"),__vite__mapDeps([0,1,2,3,4]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-NZFmm0Ls.js","assets/index-M4tVeB1K.js","assets/index--OehLxFp.css","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/Utils-v1apRgsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
