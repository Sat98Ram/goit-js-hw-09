!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null,d=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.bb787d80.js.map
