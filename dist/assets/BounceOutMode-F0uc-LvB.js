import{_ as m}from"./index-DhsxT5Pz.js";import{R as p}from"./Utils-v1apRgsN.js";class v{constructor(o){this.container=o,this.modes=["bounce","split"]}async update(o,s,f,n){if(!this.modes.includes(n))return;const i=this.container;let e=!1;for(const[,r]of i.plugins)if(r.particleBounce!==void 0&&(e=await r.particleBounce(o,f,s)),e)break;if(e)return;const d=o.getPosition(),a=o.offset,t=o.getRadius(),u=p(d,t),c=i.canvas.size,{bounceHorizontal:l,bounceVertical:_}=await m(()=>import("./Utils-USPYQ1UP.js"),__vite__mapDeps([0,1]));l({particle:o,outMode:n,direction:s,bounds:u,canvasSize:c,offset:a,size:t}),_({particle:o,outMode:n,direction:s,bounds:u,canvasSize:c,offset:a,size:t})}}export{v as BounceOutMode};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-USPYQ1UP.js","assets/Utils-v1apRgsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
