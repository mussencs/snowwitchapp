import{_ as j}from"./index-DhsxT5Pz.js";import{v as d}from"./index-3C91lHYA.js";import{i as v,l as u,e as g,a as _,t as x}from"./Utils-v1apRgsN.js";const h='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class E{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[i,e]of this._emojiShapeDict)e instanceof ImageBitmap&&(e==null||e.close(),this._emojiShapeDict.delete(i))}async draw(i){const{drawEmoji:e}=await j(()=>import("./Utils-2-QXbC77.js"),__vite__mapDeps([]));e(i)}async init(i){const e=i.actualOptions;if(!d.find(t=>v(t,e.particles.shape.type)))return;const c=[u(h)],a=d.map(t=>e.particles.shape.options[t]).find(t=>!!t);a&&g(a,t=>{t.font&&c.push(u(t.font))}),await Promise.all(c)}particleDestroy(i){delete i.emojiData}async particleInit(i,e){const a=e.shapeData;if(!(a!=null&&a.value))return;const t=_(a.value,e.randomIndexData),m=a.font??h;if(!t)return;const f=`${t}_${m}`,p=this._emojiShapeDict.get(f);if(p){e.emojiData=p;return}const r=x(e.size.value)*2;let l;const s=x(e.size.value);if(typeof OffscreenCanvas<"u"){const n=new OffscreenCanvas(r,r),o=n.getContext("2d");if(!o)return;o.font=`400 ${s*2}px ${m}`,o.textBaseline="middle",o.textAlign="center",o.fillText(t,s,s),l=n.transferToImageBitmap()}else{const n=document.createElement("canvas");n.width=r,n.height=r;const o=n.getContext("2d");if(!o)return;o.font=`400 ${s*2}px ${m}`,o.textBaseline="middle",o.textAlign="center",o.fillText(t,s,s),l=n}this._emojiShapeDict.set(f,l),e.emojiData=l,await Promise.resolve()}}export{E as EmojiDrawer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}