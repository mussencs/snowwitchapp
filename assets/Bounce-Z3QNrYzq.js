import{O as l,P as i,g as n}from"./Utils-v1apRgsN.js";const c=e=>{e.collisionMaxSpeed===void 0&&(e.collisionMaxSpeed=n(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function t(e,o){l(i(e),i(o)),c(e),c(o)}export{t as bounce};
