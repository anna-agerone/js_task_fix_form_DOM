document.querySelectorAll("input").forEach(function(e){var t="".concat(e.getAttribute("name")).replace("N"," N"),a=t.replace(t[0],t[0].toUpperCase()),c=document.createElement("label");c.classList.add("field-label"),c.setAttribute("for","".concat(e.getAttribute("id"))),c.textContent="".concat(t.toUpperCase()),e.setAttribute("placeholder",a),e.before(c)});
//# sourceMappingURL=index.045bda18.js.map
