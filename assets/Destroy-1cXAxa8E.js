import{bounce as i}from"./Bounce-Z3QNrYzq.js";import"./Utils-v1apRgsN.js";function s(e,d){!e.unbreakable&&!d.unbreakable&&i(e,d),e.getRadius()===void 0&&d.getRadius()!==void 0?e.destroy():e.getRadius()!==void 0&&d.getRadius()===void 0?d.destroy():e.getRadius()!==void 0&&d.getRadius()!==void 0&&(e.getRadius()>=d.getRadius()?d:e).destroy()}export{s as destroy};
