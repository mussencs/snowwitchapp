import{p as a,h as t,u as m}from"./Utils-v1apRgsN.js";const e=0;class r{async init(s){const o=s.container,n=s.options.size,i=n.animation;i.enable&&(s.size.velocity=(s.retina.sizeAnimationSpeed??o.retina.sizeAnimationSpeed)/a*o.retina.reduceFactor,i.sync||(s.size.velocity*=t())),await Promise.resolve()}isEnabled(s){return!s.destroyed&&!s.spawning&&s.size.enable&&((s.size.maxLoops??e)<=e||(s.size.maxLoops??e)>e&&(s.size.loops??e)<(s.size.maxLoops??e))}reset(s){s.size.loops=e}async update(s,o){this.isEnabled(s)&&(m(s,s.size,!0,s.options.size.animation.destroy,o),await Promise.resolve())}}export{r as SizeUpdater};
