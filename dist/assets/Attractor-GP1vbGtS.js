import{P as x}from"./ParticlesInteractorBase-0LBpK8Bl.js";import{g as f,I as g}from"./Utils-v1apRgsN.js";const l=1e3,p=1;class q extends x{constructor(t){super(t)}clear(){}init(){}async interact(t){const o=this.container;t.attractDistance===void 0&&(t.attractDistance=f(t.options.move.attract.distance)*o.retina.pixelRatio);const y=t.attractDistance,i=t.getPosition(),d=o.particles.quadTree.queryCircle(i,y);for(const e of d){if(t===e||!e.options.move.attract.enable||e.destroyed||e.spawning)continue;const u=e.getPosition(),{dx:v,dy:m}=g(i,u),r=t.options.move.attract.rotate,s=v/(r.x*l),c=m/(r.y*l),a=e.size.value/t.size.value,n=p/a;t.velocity.x-=s*a,t.velocity.y-=c*a,e.velocity.x+=s*n,e.velocity.y+=c*n}await Promise.resolve()}isEnabled(t){return t.options.move.attract.enable}reset(){}}export{q as Attractor};