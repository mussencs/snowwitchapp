import{f as u}from"./Utils-v1apRgsN.js";const m=180,t={x:0,y:0},f=2;function s(i,e,o){const{context:n}=i,g=o.count.numerator*o.count.denominator,r=o.count.numerator/o.count.denominator,l=m*(r-f)/r,c=Math.PI-u(l);if(n){n.beginPath(),n.translate(e.x,e.y),n.moveTo(t.x,t.y);for(let a=0;a<g;a++)n.lineTo(o.length,t.y),n.translate(o.length,t.y),n.rotate(c)}}export{s as drawPolygon};
