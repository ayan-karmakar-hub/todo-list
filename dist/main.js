!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=e=>{let t=e,n=document.createElement("button"),i=()=>{let e=document.querySelector("#details-input");t.details=e.value};return{updateHeadings:()=>{let e=document.querySelector("body"),n=document.createElement("h1"),i=document.createElement("h2");n.innerText="Details Page",i.id="task-header",i.innerText=t.name,e.appendChild(n),e.appendChild(i)},createDetails:()=>{let e=document.querySelector("body"),d=document.createElement("div"),l=document.createElement("label"),o=document.createElement("textarea"),r=document.createElement("button");d.id="detail-container",l.innerText="Details:",l.id="detail-label",l.for="details",o.id="details-input",o.name="details",o.rows="5",o.defaultValue=t.details,r.innerText="Save Changes",r.id="details-button",r.type="button",r.addEventListener("click",i),n.innerText="Back to Overview",n.id="switch-button",n.type="button",d.appendChild(l),d.appendChild(o),d.appendChild(r),d.appendChild(n),e.appendChild(d)},switchButton:n}};let d=(e,t)=>({name:e,id:t,details:"",done:!1}),l=[];l.push(function(){let e=d("Sample Item",0);return e.details="Sample Description",e}()),(()=>{function e(){let e=document.querySelector("#item-name"),t=e.value;if(""!=t){let n=d(t,l.length);l.push(n),o(),e.value=""}}function t(){let e=this.id.slice(this.id.length-1);l=l.filter(t=>t.id!==Number(e)),o()}function n(){let e=this.id.slice(this.id.length-1),t=l.find(t=>t.id===Number(e)),n=document.querySelector("#item"+e),i="text-decoration: line-none;";t.done||(i="text-decoration: line-through;"),n.style.cssText=i,t.done=!t.done}function o(){r(),function(){let e=document.querySelector("body"),t=document.createElement("h1"),n=document.createElement("h2");t.innerText="To-Do List",n.id="task-header",n.innerText="Remaining Tasks",e.appendChild(t),e.appendChild(n)}(),function(){let e=document.querySelector("body");console.log(e);let t=document.createElement("div");t.id="container",e.appendChild(t)}(),function(){let t=document.querySelector("#container"),n=document.createElement("form");n.id="form";let i=document.createElement("p"),d=document.createElement("label"),l=document.createElement("input"),o=document.createElement("button");i.innerText="Add a New Task",i.id="form-title",d.innerText="Task Name:",d.id="name-label",d.for="name",l.type="text",l.id="item-name",l.name="name",o.innerText="Add Item",o.id="add-button",o.type="button",o.addEventListener("click",e),n.appendChild(i),n.appendChild(d),n.appendChild(l),n.appendChild(o),t.appendChild(n)}(),function(){let e=document.querySelector("#container"),t=document.createElement("div");t.id="content",e.appendChild(t);for(let e=0;e<l.length;e++)a(e,l[e])}()}function r(){let e=document.querySelector("body");for(;e.lastChild;)e.removeChild(e.lastChild)}function a(e,i){i.id=e;let d=document.querySelector("#content"),l=document.createElement("button"),o=document.createElement("div"),r=document.createElement("button"),a=document.createElement("button");l.id="detail"+e,o.id="item"+e,r.id="complete"+e,a.id="remove"+e,l.classList="detail",o.classList="item",r.classList="complete",a.classList="remove",l.innerText="Add Details:",o.innerText=i.name,r.innerText="Complete",a.innerText="Remove",l.addEventListener("click",c),r.addEventListener("click",n),a.addEventListener("click",t),i.done&&(o.style.cssText="text-decoration: line-through;"),d.appendChild(l),d.appendChild(o),d.appendChild(r),d.appendChild(a)}function c(){let e=this.id.slice(this.id.length-1),t=l.find(t=>t.id===Number(e));r();let n=i(t);n.updateHeadings(),n.createDetails(),n.switchButton.addEventListener("click",o)}o()})()}]);