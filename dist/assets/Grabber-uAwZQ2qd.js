import{Grab as v}from"./index-85ITDSrY.js";import{d as y}from"./CanvasUtils-Z4phBtTb.js";import{b as k,d as L,e as C}from"./ColorUtils-k3FqKNbQ.js";import{E as O}from"./ExternalInteractorBase-St1QSTOy.js";import{C as h,E as w,i as E}from"./Utils-v1apRgsN.js";import"./index-DhsxT5Pz.js";import"./OptionsColor-kLODGGBo.js";const D=0;function M(r,t,n,i,o,e){y(r,n,i),r.strokeStyle=k(o,e),r.lineWidth=t,r.stroke()}function P(r,t,n,i,o){r.canvas.draw(e=>{const s=t.getPosition();M(e,t.retina.linksWidth??D,s,o,n,i)})}const G="grab",q=0,H=0;class F extends O{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.grab;n&&(t.retina.grabModeDistance=n.distance*t.retina.pixelRatio)}async interact(){var c;const t=this.container,n=t.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==h)return;const o=t.interactivity.mouse.position;if(!o)return;const e=t.retina.grabModeDistance;if(!e||e<q)return;const s=t.particles.quadTree.queryCircle(o,e,a=>this.isEnabled(a));for(const a of s){const f=a.getPosition(),l=w(f,o);if(l>e)continue;const b=i.modes.grab.links,d=b.opacity,m=d-l*d/e;if(m<=H)continue;const g=b.color??((c=a.options.links)==null?void 0:c.color);if(!t.particles.grabLineColor&&g){const u=i.modes.grab.links;t.particles.grabLineColor=L(g,u.blink,u.consent)}const p=C(a,void 0,t.particles.grabLineColor);p&&P(t,a,p,m,o)}await Promise.resolve()}isEnabled(t){const n=this.container,i=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return o.onHover.enable&&!!i.position&&E(G,o.onHover.mode)}loadModeOptions(t,...n){t.grab||(t.grab=new v);for(const i of n)t.grab.load(i==null?void 0:i.grab)}reset(){}}export{F as Grabber};
