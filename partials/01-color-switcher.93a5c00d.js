!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),intervalId:null,isActive:!1};t.stop.setAttribute("disabled",""),t.start.addEventListener("click",(function(){t.isActive||(t.isActive=!0,t.start.setAttribute("disabled",""),t.stop.removeAttribute("disabled"),t.intervalId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),t.stop.addEventListener("click",(function(){t.isActive=!1,t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",""),clearInterval(t.intervalId)}))}();
//# sourceMappingURL=01-color-switcher.93a5c00d.js.map