(function(g){var d={};function c(o){if(d[o])return d[o].exports;var r=d[o]={i:o,l:!1,exports:{}};return g[o].call(r.exports,r,r.exports,c),r.l=!0,r.exports}return c.m=g,c.c=d,c.d=function(o,r,s){c.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:s})},c.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,r){if(r&1&&(o=c(o)),r&8||r&4&&typeof o=="object"&&o&&o.__esModule)return o;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),r&2&&typeof o!="string")for(var O in o)c.d(s,O,function(R){return o[R]}.bind(null,O));return s},c.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(r,"a",r),r},c.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},c.p="/build/",c(c.s=211)})({211:function(g,d,c){"use strict";c.r(d);function o(r){if(r.hasOwnProperty("__REACT_DEVTOOLS_GLOBAL_HOOK__"))return null;let s=console,O={};for(const e in console)O[e]=console[e];function R(e){s=e,O={};for(const n in s)O[n]=console[n]}function L(e){try{if(typeof e.version=="string")return e.bundleType>0?"development":"production";const n=Function.prototype.toString;if(e.Mount&&e.Mount._renderNewRootComponent){const t=n.call(e.Mount._renderNewRootComponent);return t.indexOf("function")!==0?"production":t.indexOf("storedMeasure")!==-1?"development":t.indexOf("should be a pure function")!==-1?t.indexOf("NODE_ENV")!==-1||t.indexOf("development")!==-1||t.indexOf("true")!==-1?"development":t.indexOf("nextElement")!==-1||t.indexOf("nextComponent")!==-1?"unminified":"development":t.indexOf("nextElement")!==-1||t.indexOf("nextComponent")!==-1?"unminified":"outdated"}}catch{}return"production"}function w(e){try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&(b=!0,setTimeout(function(){throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")}))}catch{}}function y(e,n){if(e==null||e.length===0||typeof e[0]=="string"&&e[0].match(/([^%]|^)(%c)/g)||n===void 0)return e;const t=/([^%]|^)((%%)*)(%([oOdisf]))/g;return typeof e[0]=="string"&&e[0].match(t)?[`%c${e[0]}`,n,...e.slice(1)]:[e.reduce((i,f,a)=>{switch(a>0&&(i+=" "),typeof f){case"string":case"boolean":case"symbol":return i+="%s";case"number":const p=Number.isInteger(f)?"%i":"%f";return i+=p;default:return i+="%o"}},"%c"),n,...e]}let E=null;function D({hideConsoleLogsInStrictMode:e,browserTheme:n}){const t=["error","group","groupCollapsed","info","log","trace","warn"];if(E!==null)return;const u={};E=()=>{for(const i in u)try{s[i]=u[i]}catch{}},t.forEach(i=>{try{const f=u[i]=s[i].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__?s[i].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__:s[i],a=(...p)=>{if(!e){let C;switch(i){case"warn":C=n==="light"?"rgba(250, 180, 50, 0.75)":"rgba(250, 180, 50, 0.5)";break;case"error":C=n==="light"?"rgba(250, 123, 130, 0.75)":"rgba(250, 123, 130, 0.5)";break;case"log":default:C=n==="light"?"rgba(125, 125, 125, 0.75)":"rgba(125, 125, 125, 0.5)";break}if(C)f(...y(p,`color: ${C}`));else throw Error("Console color is not defined")}};a.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__=f,f.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__=a,s[i]=a}catch{}})}function I(){E!==null&&(E(),E=null)}let F=0;function x(e){const n=++F;M.set(n,e);const t=b?"deadcode":L(e);if(r.hasOwnProperty("__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__")){const{registerRendererWithConsole:i,patchConsoleUsingWindowValues:f}=r.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__;typeof i=="function"&&typeof f=="function"&&(i(e),f())}const u=r.__REACT_DEVTOOLS_ATTACH__;if(typeof u=="function"){const i=u(l,n,e,r);l.rendererInterfaces.set(n,i)}return l.emit("renderer",{id:n,renderer:e,reactBuildType:t}),n}let b=!1;function A(e,n){return l.on(e,n),()=>l.off(e,n)}function V(e,n){_[e]||(_[e]=[]),_[e].push(n)}function k(e,n){if(!_[e])return;const t=_[e].indexOf(n);t!==-1&&_[e].splice(t,1),_[e].length||delete _[e]}function H(e,n){_[e]&&_[e].map(t=>t(n))}function N(e){const n=v;return n[e]||(n[e]=new Set),n[e]}function G(e,n){const t=T.get(e);t!=null&&t.handleCommitFiberUnmount(n)}function j(e,n,t){const u=l.getFiberRoots(e),i=n.current,f=u.has(n),a=i.memoizedState==null||i.memoizedState.element==null;!f&&!a?u.add(n):f&&a&&u.delete(n);const p=T.get(e);p!=null&&p.handleCommitFiberRoot(n,t)}function B(e,n){const t=T.get(e);t!=null&&t.handlePostCommitFiberRoot(n)}function P(e,n){const t=T.get(e);if(t!=null)n?t.patchConsoleForStrictMode():t.unpatchConsoleForStrictMode();else if(n){const u=window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__===!0,i=window.__REACT_DEVTOOLS_BROWSER_THEME__;D({hideConsoleLogsInStrictMode:u,browserTheme:i})}else I()}const S=[],h=[];function m(e){const n=e.stack.split(`
`);return n.length>1?n[1]:null}function K(){return h}function U(e){const n=m(e);n!==null&&S.push(n)}function W(e){if(S.length>0){const n=S.pop(),t=m(e);t!==null&&h.push([n,t])}}const v={},T=new Map,_={},M=new Map,l={rendererInterfaces:T,listeners:_,backends:new Map,renderers:M,emit:H,getFiberRoots:N,inject:x,on:V,off:k,sub:A,supportsFiber:!0,checkDCE:w,onCommitFiberUnmount:G,onCommitFiberRoot:j,onPostCommitFiberRoot:B,setStrictMode:P,getInternalModuleRanges:K,registerInternalModuleStart:U,registerInternalModuleStop:W};return Object.defineProperty(r,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!1,enumerable:!1,get(){return l}}),l}window.hasOwnProperty("__REACT_DEVTOOLS_GLOBAL_HOOK__")||(o(window),window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on("renderer",function({reactBuildType:r}){window.postMessage({source:"react-devtools-detector",reactBuildType:r},"*")}),window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeObjectCreate=Object.create,window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeMap=Map,window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeWeakMap=WeakMap,window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeSet=Set)}});

//# sourceMappingURL=installHook.js.map