const e=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form textarea"),o={};e.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log()})),t.addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",e.target.value)})),e.addEventListener("input",(function(e){console.log(e.target.name),console.log(e.target.value),o[e.target.name]=e.target.value;const t=JSON.stringify(o);localStorage.setItem("feedback-form-state",t)})),function(e){const o=localStorage.getItem("feedback-form-state");o&&(console.log(o),t.value=o)}();
//# sourceMappingURL=03-feedback.5d229224.js.map
