(function(l){var n={};function t(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return l[o].call(e.exports,e,e.exports,t),e.l=!0,e.exports}return t.m=l,t.c=n,t.d=function(o,e,r){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},t.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(e&1&&(o=t(o)),e&8||e&4&&typeof o=="object"&&o&&o.__esModule)return o;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),e&2&&typeof o!="string")for(var u in o)t.d(r,u,function(i){return o[i]}.bind(null,u));return r},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="/build/",t(t.s=207)})({1:function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return e}),t.d(n,"c",function(){return r}),t.d(n,"z",function(){return u}),t.d(n,"A",function(){return i}),t.d(n,"s",function(){return d}),t.d(n,"t",function(){return c}),t.d(n,"v",function(){return s}),t.d(n,"y",function(){return E}),t.d(n,"x",function(){return T}),t.d(n,"u",function(){return f}),t.d(n,"w",function(){return S}),t.d(n,"o",function(){return a}),t.d(n,"p",function(){return O}),t.d(n,"f",function(){return h}),t.d(n,"e",function(){return A}),t.d(n,"h",function(){return m}),t.d(n,"i",function(){return I}),t.d(n,"q",function(){return N}),t.d(n,"r",function(){return L}),t.d(n,"k",function(){return g}),t.d(n,"d",function(){return D}),t.d(n,"j",function(){return v}),t.d(n,"l",function(){return P}),t.d(n,"m",function(){return C}),t.d(n,"g",function(){return M}),t.d(n,"n",function(){return j});const o="fmkadmapgofadopljbjfkapdkoienihi",e="dnjnjgbfilfphmojnmhliehogmojhclc",r="ikiahnapldjmdmpkmfhjdjilojjhgcbf",u=!1,i=!1,d=1,c=2,s=3,E=4,T=5,f=6,S=7,a=1,O=2,h="React::DevTools::defaultTab",A="React::DevTools::componentFilters",R="React::DevTools::lastSelection",m="React::DevTools::openInEditorUrl",I="React::DevTools::parseHookNames",N="React::DevTools::recordChangeDescriptions",L="React::DevTools::reloadAndProfile",g="React::DevTools::breakOnConsoleErrors",D="React::DevTools::theme",v="React::DevTools::appendComponentStack",P="React::DevTools::showInlineWarningsAndErrors",C="React::DevTools::traceUpdatesEnabled",M="React::DevTools::hideConsoleLogsInStrictMode",j=5},13:function(l,n,t){"use strict";t.d(n,"d",function(){return o}),t.d(n,"e",function(){return e}),t.d(n,"c",function(){return r}),t.d(n,"f",function(){return i}),t.d(n,"a",function(){return d}),t.d(n,"b",function(){return c});const o=navigator.userAgent.indexOf("Edg")>=0,e=navigator.userAgent.indexOf("Firefox")>=0,r=o===!1&&e===!1;function u(){if(o)return"Edge";if(e)return"Firefox";if(r)return"Chrome";throw new Error("Expected browser name to be one of Chrome, Edge or Firefox.")}function i(){if(r)return chrome.devtools.panels.themeName==="dark"?"dark":"light";if(chrome.devtools&&chrome.devtools.panels)switch(chrome.devtools.panels.themeName){case"dark":return"dark";default:return"light"}}const d="compact",c=[d]},207:function(l,n,t){"use strict";t.r(n);var o=t(54),e=t.n(o),r=t(1),u=t(8),i=t(13);function d(s){let E="";const T=new XMLHttpRequest;T.addEventListener("load",function(){E=this.responseText}),T.open("GET",s,!1),T.send();const f=document.createElement("script");f.textContent=E,e()(document.documentElement).appendChild(f),e()(f.parentNode).removeChild(f)}let c;if(window.addEventListener("message",function({data:E,source:T}){var f;if(!(T!==window||!E))switch(E.source){case"react-devtools-detector":c={hasDetectedReact:!0,reactBuildType:E.reactBuildType},chrome.runtime.sendMessage(c);break;case"react-devtools-extension":if(((f=E.payload)===null||f===void 0?void 0:f.type)==="fetch-file-with-cache"){const O=E.payload.url,h=R=>{chrome.runtime.sendMessage({source:"react-devtools-content-script",payload:{type:"fetch-file-with-cache-error",url:O,value:R}})},A=R=>{chrome.runtime.sendMessage({source:"react-devtools-content-script",payload:{type:"fetch-file-with-cache-complete",url:O,value:R}})};fetch(O,{cache:"force-cache"}).then(R=>{R.ok?R.text().then(m=>A(m)).catch(m=>h(null)):h(null)},R=>h(null))}break;case"react-devtools-inject-backend-manager":i.e&&d(chrome.runtime.getURL("build/backendManager.js"));break;case"react-devtools-backend-manager":if(i.e){var S,a;(S=E.payload)===null||S===void 0||(a=S.versions)===null||a===void 0||a.forEach(O=>{i.b.includes(O)&&d(chrome.runtime.getURL(`/build/react_devtools_backend_${O}.js`))})}break}}),window.addEventListener("pageshow",function({target:s}){!c||s!==window.document||chrome.runtime.sendMessage(c)}),i.e)switch(Object(u.d)(r.r)==="true"&&d(chrome.runtime.getURL("build/renderer.js")),document.contentType){case"text/html":case"application/xhtml+xml":{d(chrome.runtime.getURL("build/installHook.js"));break}}},54:function(l,n,t){"use strict";function o(e,r){if(e!=null)return e;var u=new Error(r!==void 0?r:"Got unexpected "+e);throw u.framesToPop=1,u}l.exports=o,l.exports.default=o,Object.defineProperty(l.exports,"__esModule",{value:!0})},8:function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return e}),t.d(n,"c",function(){return r}),t.d(n,"d",function(){return u});function o(c){try{return localStorage.getItem(c)}catch{return null}}function e(c){try{localStorage.removeItem(c)}catch{}}function r(c,s){try{return localStorage.setItem(c,s)}catch{}}function u(c){try{return sessionStorage.getItem(c)}catch{return null}}function i(c){try{sessionStorage.removeItem(c)}catch{}}function d(c,s){try{return sessionStorage.setItem(c,s)}catch{}}}});

//# sourceMappingURL=prepareInjection.js.map