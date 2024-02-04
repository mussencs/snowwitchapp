const ee="pointerleave",te="pointermove",G="tsParticles - Error",ne=100,ie=.5,oe=1e3,f={x:0,y:0,z:0},I=2,J=1;class a{constructor(e,n,i){if(this._updateFromAngle=(o,r)=>{this.x=Math.cos(o)*r,this.y=Math.sin(o)*r},!v(e)&&e){this.x=e.x,this.y=e.y;const o=e;this.z=o.z?o.z:f.z}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??f.z;else throw new Error(`${G} Vector3d not initialized correctly`)}static get origin(){return a.create(f.x,f.y,f.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return a.create(e.x,e.y,e.z)}static create(e,n,i){return new a(e,n,i)}add(e){return a.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return a.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return a.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**I+this.y**I}mult(e){return a.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=0&&this.multTo(J/e)}rotate(e){return a.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),f.z)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:f.z}sub(e){return a.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}const z={x:0,y:0,z:0};class x extends a{constructor(e,n){super(e,n,z.z)}static get origin(){return x.create(z.x,z.y)}static clone(e){return x.create(e.x,e.y)}static create(e,n){return new x(e,n)}}let K=Math.random;const M=new Map;function se(t,e){M.get(t)||M.set(t,e)}function re(t){return M.get(t)??(e=>e)}function d(){return T(K(),0,1-Number.EPSILON)}function T(t,e,n){return Math.min(Math.max(t,e),n)}function ce(t,e,n,i){return Math.floor((t*n+e*i)/(n+i))}function k(t){const e=S(t),n=0;let i=w(t);return e===i&&(i=n),d()*(e-i)+i}function u(t){return v(t)?t:k(t)}function w(t){return v(t)?t:t.min}function S(t){return v(t)?t:t.max}function Q(t,e){if(t===e||e===void 0&&v(t))return t;const n=w(t),i=S(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:Q(n,i)}function q(t,e){const n=t.x-e.x,i=t.y-e.y,o=2;return{dx:n,dy:i,distance:Math.sqrt(n**o+i**o)}}function ae(t,e){return q(t,e).distance}function ue(t){return t*Math.PI/180}function R(t,e,n,i){return x.create(t.x*(n-i)/(n+i)+e.x*2*i/(n+i),t.y)}function U(t){var e,n;return{x:(((e=t.position)==null?void 0:e.x)??d()*100)*t.size.width/100,y:(((n=t.position)==null?void 0:n.y)??d()*100)*t.size.height/100}}function me(t){var n,i;const e={x:((n=t.position)==null?void 0:n.x)!==void 0?u(t.position.x):void 0,y:((i=t.position)==null?void 0:i.y)!==void 0?u(t.position.y):void 0};return U({size:t.size,position:e})}const W={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function le(){return W}function E(t){const e={bounced:!1},{pSide:n,pOtherSide:i,rectSide:o,rectOtherSide:r,velocity:s,factor:c}=t,y=.5,m=0;return i.min<r.min||i.min>r.max||i.max<r.min||i.max>r.max||(n.max>=o.min&&n.max<=(o.max+o.min)*y&&s>m||n.min<=o.max&&n.min>(o.max+o.min)*y&&s<m)&&(e.velocity=s*-c,e.bounced=!0),e}function X(t,e){const n=P(e,i=>t.matches(i));return b(n)?n.some(i=>i):n}function fe(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function O(t,e){return t===e||b(e)&&e.indexOf(t)>-1}async function ye(t,e){try{await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)}catch{}}function Y(t){return Math.floor(d()*t.length)}function Z(t,e,n=!0){return t[e!==void 0&&n?e%t.length:Y(t)]}function he(t,e,n,i,o){return B(V(t,i??0),e,n,o)}function B(t,e,n,i){let o=!0;return(!i||i==="bottom")&&(o=t.top<e.height+n.x),o&&(!i||i==="left")&&(o=t.right>n.x),o&&(!i||i==="right")&&(o=t.left<e.width+n.y),o&&(!i||i==="top")&&(o=t.bottom>n.y),o}function V(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function F(t,...e){for(const n of e){if(n==null)continue;if(!D(n)){t=n;continue}const i=Array.isArray(n);i&&(D(t)||!t||!Array.isArray(t))?t=[]:!i&&(D(t)||!t||Array.isArray(t))&&(t={});for(const o in n){if(o==="__proto__")continue;const r=n,s=r[o],c=t;c[o]=D(s)&&Array.isArray(s)?s.map(y=>F(c[o],y)):F(c[o],s)}}return t}function xe(t,e){return!!N(e,n=>n.enable&&O(t,n.mode))}function de(t,e,n){P(e,i=>{const o=i.mode;i.enable&&O(t,o)&&_(i,n)})}function _(t,e){const n=t.selectors;P(n,i=>{e(i,t)})}function ge(t,e){if(!(!e||!t))return N(t,n=>X(e,n.selectors))}function pe(t){return{position:t.getPosition(),radius:t.getRadius(),mass:t.getMass(),velocity:t.velocity,factor:x.create(u(t.options.bounce.horizontal.value),u(t.options.bounce.vertical.value))}}function ve(t,e){const{x:n,y:i}=t.velocity.sub(e.velocity),[o,r]=[t.position,e.position],{dx:s,dy:c}=q(r,o);if(n*s+i*c<0)return;const m=-Math.atan2(c,s),g=t.mass,h=e.mass,l=t.velocity.rotate(m),p=e.velocity.rotate(m),$=R(l,p,g,h),H=R(p,l,g,h),A=$.rotate(-m),L=H.rotate(-m);t.velocity.x=A.x*t.factor.x,t.velocity.y=A.y*t.factor.y,e.velocity.x=L.x*e.factor.x,e.velocity.y=L.y*e.factor.y}function be(t,e){const n=t.getPosition(),i=t.getRadius(),o=V(n,i),r=t.options.bounce,s=E({pSide:{min:o.left,max:o.right},pOtherSide:{min:o.top,max:o.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:t.velocity.x,factor:u(r.horizontal.value)});s.bounced&&(s.velocity!==void 0&&(t.velocity.x=s.velocity),s.position!==void 0&&(t.position.x=s.position));const c=E({pSide:{min:o.top,max:o.bottom},pOtherSide:{min:o.left,max:o.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:t.velocity.y,factor:u(r.vertical.value)});c.bounced&&(c.velocity!==void 0&&(t.velocity.y=c.velocity),c.position!==void 0&&(t.position.y=c.position))}function P(t,e){return b(t)?t.map((i,o)=>e(i,o)):e(t,0)}function De(t,e,n){return b(t)?Z(t,e,n):t}function N(t,e){return b(t)?t.find((i,o)=>e(i,o)):e(t,0)?t:void 0}function ze(t,e){const n=t.value,i=t.animation,o={delayTime:u(i.delay)*1e3,enable:i.enable,value:u(t.value)*e,max:S(n)*e,min:w(n)*e,loops:0,maxLoops:u(i.count),time:0},r=1;if(i.enable){switch(o.decay=r-u(i.decay),i.mode){case"increase":o.status="increasing";break;case"decrease":o.status="decreasing";break;case"random":o.status=d()>=.5?"increasing":"decreasing";break}const s=i.mode==="auto";switch(i.startValue){case"min":o.value=o.min,s&&(o.status="increasing");break;case"max":o.value=o.max,s&&(o.status="decreasing");break;case"random":default:o.value=k(o),s&&(o.status=d()>=.5?"increasing":"decreasing");break}}return o.initialValue=o.value,o}function j(t,e){if(!(t.mode==="percent")){const{mode:o,...r}=t;return r}return"x"in t?{x:t.x/100*e.width,y:t.y/100*e.height}:{width:t.width/100*e.width,height:t.height/100*e.height}}function Me(t,e){return j(t,e)}function we(t){return typeof t=="string"}function v(t){return typeof t=="number"}function D(t){return typeof t=="object"&&t!==null}function b(t){return Array.isArray(t)}function C(t,e,n,i,o){switch(e){case"max":n>=o&&t.destroy();break;case"min":n<=i&&t.destroy();break}}function Se(t,e,n,i,o){if(t.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const g=(e.velocity??0)*o.factor,h=e.min,l=e.max,p=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=o.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case"increasing":e.value>=l?(n?e.status="decreasing":e.value-=l,e.loops||(e.loops=0),e.loops++):e.value+=g;break;case"decreasing":e.value<=h?(n?e.status="increasing":e.value+=l,e.loops||(e.loops=0),e.loops++):e.value-=g}e.velocity&&p!==1&&(e.velocity*=p),C(t,i,e.value,h,l),t.destroyed||(e.value=T(e.value,h,l))}}export{Y as A,fe as B,te as C,xe as D,ae as E,ee as F,ge as G,de as H,q as I,re as J,me as K,U as L,he as M,Me as N,ve as O,pe as P,be as Q,V as R,ze as S,x as V,De as a,v as b,D as c,F as d,P as e,ue as f,u as g,d as h,O as i,ie as j,b as k,ye as l,oe as m,we as n,Z as o,ne as p,ce as q,k as r,Q as s,S as t,Se as u,w as v,T as w,se as x,le as y,G as z};
