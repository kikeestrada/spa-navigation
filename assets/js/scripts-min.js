!function(){return function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){return o(t[i][1][e]||e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}}()({1:[function(e,t,r){"use strict";var n,o=e("./modules/swDetecter"),s=e("./modules/topNav"),i=(n=s)&&n.__esModule?n:{default:n};(0,o.swDetecter)(),(0,i.default)(),document.body.classList.contains("home")||document.body.classList.contains("page2")||document.body.classList.contains("page3")},{"./modules/swDetecter":2,"./modules/topNav":3}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.swDetecter=function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(e){return console.log("Registro de SW exitoso",e)}).catch(function(e){return console.warn("Error al tratar de registrar el sw",e)})}},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=function(){var e=document,t=e.querySelector(".hamburger"),r=e.querySelector(".top-nav__menu");t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("is-active"),r.classList.toggle("is-active")}),e.addEventListener("click",function(e){e.target.matches(".top-nav__anchor")&&(t.classList.remove("is-active"),r.classList.remove("is-active"))})}},{}]},{},[1]);
//# sourceMappingURL=scripts-min.js.map