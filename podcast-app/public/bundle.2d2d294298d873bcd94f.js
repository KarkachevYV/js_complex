(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/**\n * Body CSS\n */\n\n html,\n body {\n   height: 100%;\n }\n \n html,\n body,\n input,\n textarea,\n button {\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n }\n \n \n /**\n  * Sidebar CSS\n  */\n \n #sidebar {\n   background-color: rgb(33, 150, 243);\n   padding: 15px;\n }\n \n @media (min-width: 768px) {\n   #sidebar {\n     position: fixed;\n     top: 0;\n     bottom: 0;\n     width: 180px;\n     height: 100%;\n     padding-top: 30px;\n   }\n }\n \n \n /**\n  * Content CSS\n  */\n @media (min-width: 768px) {\n   #content {\n     margin-left: 180px;\n   }\n }\n\n .author {\n  font-size: .8rem;\n }\n\n .floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n }\n\n .modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow: auto;\n  background: #fff;\n }\n\n .modal > h1 {\n  text-align: center;\n }\n\n .modal .modal-content {\n  padding: 1rem;\n }\n\n .error {\n  color: red;\n }",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{static create(n){return fetch("https://so-so-app-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>(n.id=e.name,n))).then(t).then(e.renderList)}static fetch(e){return e?fetch(`https://so-so-app-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=r(),t=e.length?e.map(o).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.getElementById("list").innerHTML=t}static listToHTML(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`))}</ol>`:"<p>Вопросов пока нет</p>"}}function t(e){const t=r();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function r(){return JSON.parse(localStorage.getItem("questions")||"[]")}function o(e){return`\n    <div class="mui--text-black-54">\n        ${new Date(e.date).toLocaleDateString()}\n        ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>\n        ${e.text}\n    </div>\n    <br>  \n    `}function a(e){return e.length>=10}function i(e,t){const n=document.createElement("div");n.classList.add("modal");const r=`\n        <h1>${e}</h1>\n        <div class="modal-content">${t}</div>\n    `;n.innerHTML=r,mui.overlay("on",n)}var s=n(379),d=n.n(s),c=n(795),l=n.n(c),u=n(569),p=n.n(u),f=n(565),m=n.n(f),h=n(216),v=n.n(h),b=n(589),y=n.n(b),g=n(28),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),d()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S.querySelector("#question-input"),L=S.querySelector("#submit");function E(t){t.preventDefault();const n=t.target.querySelector("button"),r=t.target.querySelector("#email").value,o=t.target.querySelector("#password").value;n.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsciq55NpI1s8jR4jKbroXlSGnayQCL8I",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(r,o).then(e.fetch).then(C).then((()=>n.disabled=!1))}function C(t){"string"==typeof t?i("Ошибка!",t):i("Список вопросов",e.listToHTML(t))}window.addEventListener("load",e.renderList),S.addEventListener("submit",(function(t){if(t.preventDefault(),a(T.value)){const t={text:T.value.trim(),date:(new Date).toJSON()};L.desabled=!0,e.create(t).then((()=>{T.value="",T.className="",L.desabled=!1}))}})),w.addEventListener("click",(function(){i("Авторизация",'\n        <form class="mui-form" id="auth-form">\n            <div class="mui-textfield mui-textfield--float-label">\n                <input type="email" id="email" required>\n                <label for="email">Email</label>\n            </div>\n            <div class="mui-textfield mui-textfield--float-label">\n                <input type="password" id="password" required>\n                <label for="password">Пароль</label>\n            </div>\n            <button\n                type="submit"           \n                class="mui-btn mui-btn--raised mui-btn--primary"                          \n                >\n                Войти\n            </button>\n        </form>   \n    '),document.getElementById("auth-form").addEventListener("submit",E,{once:!0})})),T.addEventListener("input",(()=>{L.disabled=!a(T.value)}))})()})();