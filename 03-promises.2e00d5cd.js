function e(e,t){return new Promise(((n,o)=>{const s=Math.random()>.3;setTimeout((()=>{s?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const t=document.querySelector(".form");t.addEventListener("submit",(n=>{n.preventDefault();const o=t.elements.delay,s=t.elements.step,l=t.elements.amount,i=parseInt(o.value),a=parseInt(s.value),r=parseInt(l.value);for(let t=0;t<r;t++)e(t+1,i+t*a).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.2e00d5cd.js.map
