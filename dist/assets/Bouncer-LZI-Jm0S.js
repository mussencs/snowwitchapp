import{_ as u}from"./index-DhsxT5Pz.js";import{Bounce as m}from"./index-Y4K7LeoG.js";import{C as b,i as v,D as l}from"./Utils-v1apRgsN.js";import{E as _}from"./ExternalInteractorBase-St1QSTOy.js";const i="bounce";class D extends _{constructor(e){super(e)}clear(){}init(){const e=this.container,o=e.actualOptions.interactivity.modes.bounce;o&&(e.retina.bounceModeDistance=o.distance*e.retina.pixelRatio)}async interact(){const e=this.container,o=e.actualOptions,t=o.interactivity.events,s=e.interactivity.status===b,n=t.onHover.enable,a=t.onHover.mode,d=t.onDiv;if(s&&n&&v(i,a)){const{mouseBounce:r}=await u(()=>import("./Utils-Rsb3bicQ.js"),__vite__mapDeps([0,1,2]));r(this.container,c=>this.isEnabled(c))}else{const{divBounce:r}=await u(()=>import("./Utils-Rsb3bicQ.js"),__vite__mapDeps([0,1,2]));r(this.container,d,i,c=>this.isEnabled(c))}}isEnabled(e){const o=this.container,t=o.actualOptions,s=o.interactivity.mouse,n=((e==null?void 0:e.interactivity)??t.interactivity).events,a=n.onDiv;return!!s.position&&n.onHover.enable&&v(i,n.onHover.mode)||l(i,a)}loadModeOptions(e,...o){e.bounce||(e.bounce=new m);for(const t of o)e.bounce.load(t==null?void 0:t.bounce)}reset(){}}export{D as Bouncer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-Rsb3bicQ.js","assets/Utils-v1apRgsN.js","assets/Circle--nfIG_u3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}