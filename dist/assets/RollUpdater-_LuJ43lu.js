import{_ as s}from"./index-DhsxT5Pz.js";import{s as t}from"./Utils-v1apRgsN.js";import{O as d}from"./OptionsColor-kLODGGBo.js";class r{constructor(){this.enable=!1,this.value=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.value!==void 0&&(this.value=t(e.value)))}}class f{constructor(){this.darken=new r,this.enable=!1,this.enlighten=new r,this.mode="vertical",this.speed=25}load(e){e&&(e.backColor!==void 0&&(this.backColor=d.create(this.backColor,e.backColor)),this.darken.load(e.darken),e.enable!==void 0&&(this.enable=e.enable),this.enlighten.load(e.enlighten),e.mode!==void 0&&(this.mode=e.mode),e.speed!==void 0&&(this.speed=t(e.speed)))}}class b{getTransformValues(e){var i;const l=((i=e.roll)==null?void 0:i.enable)&&e.roll,n=l&&l.horizontal,a=l&&l.vertical;return{a:n?Math.cos(l.angle):void 0,d:a?Math.sin(l.angle):void 0}}async init(e){const{initParticle:l}=await s(()=>import("./Utils-aQw4Ds8U.js"),__vite__mapDeps([0,1,2]));l(e)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!!(l!=null&&l.enable)}loadOptions(e,...l){e.roll||(e.roll=new f);for(const n of l)e.roll.load(n==null?void 0:n.roll)}async update(e,l){if(!this.isEnabled(e))return;const{updateRoll:n}=await s(()=>import("./Utils-aQw4Ds8U.js"),__vite__mapDeps([0,1,2]));n(e,l)}}export{b as RollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-aQw4Ds8U.js","assets/Utils-v1apRgsN.js","assets/ColorUtils-k3FqKNbQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
