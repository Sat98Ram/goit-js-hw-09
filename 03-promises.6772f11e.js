function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var l=r("7Y9D8");const u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function s(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.addEventListener("submit",(t=>{t.preventDefault();let o=Number(i.value);const n=Number(a.value),r=d.value;for(let t=1;t<=r;t+=1)s(t,o).then((o=>{e(l).Notify.success(`Fulfilled promise ${t} in ${o.delay}ms`)})).catch((o=>{e(l).Notify.failure(`Rejected promise ${t} in ${o.delay}ms`)})),o+=n,console.log(o);t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.6772f11e.js.map
