import{s as u,r as a,g as d,m}from"./Utils-v1apRgsN.js";const i=0,w=-1,l=0,g=0;function h(e,t,s){if(!e.life)return;const n=e.life;let f=!1;if(e.spawning)if(n.delayTime+=t.value,n.delayTime>=e.life.delay)f=!0,e.spawning=!1,n.delayTime=i,n.time=i;else return;if(n.duration===w||e.spawning||(f?n.time=i:n.time+=t.value,n.time<n.duration))return;if(n.time=i,e.life.count>l&&e.life.count--,e.life.count===l){e.destroy();return}const r=u(g,s.width),y=u(g,s.width);e.position.x=a(r),e.position.y=a(y),e.spawning=!0,n.delayTime=i,n.time=i,e.reset();const o=e.options.life;o&&(n.delay=d(o.delay.value)*m,n.duration=d(o.duration.value)*m)}export{h as updateLife};
