import{Remove as i}from"./index-y4CF3W7I.js";import{E as a}from"./ExternalInteractorBase-St1QSTOy.js";import{g as m}from"./Utils-v1apRgsN.js";import"./index-DhsxT5Pz.js";const s="remove";class u extends a{constructor(t){super(t),this.handleClickMode=r=>{const e=this.container,o=e.actualOptions;if(!o.interactivity.modes.remove||r!==s)return;const n=m(o.interactivity.modes.remove.quantity);e.particles.removeQuantity(n)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(t,...r){t.remove||(t.remove=new i);for(const e of r)t.remove.load(e==null?void 0:e.remove)}reset(){}}export{u as Remover};
