function bT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function LT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var To={},MT={get exports(){return To},set exports(t){To=t}},Xu={},k={},FT={get exports(){return k},set exports(t){k=t}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),UT=Symbol.for("react.portal"),$T=Symbol.for("react.fragment"),VT=Symbol.for("react.strict_mode"),BT=Symbol.for("react.profiler"),zT=Symbol.for("react.provider"),jT=Symbol.for("react.context"),HT=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),qT=Symbol.for("react.memo"),GT=Symbol.for("react.lazy"),kg=Symbol.iterator;function KT(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var $v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vv=Object.assign,Bv={};function ys(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||$v}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zv(){}zv.prototype=ys.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||$v}var Yf=Qf.prototype=new zv;Yf.constructor=Qf;Vv(Yf,ys.prototype);Yf.isPureReactComponent=!0;var Rg=Array.isArray,jv=Object.prototype.hasOwnProperty,Xf={current:null},Hv={key:!0,ref:!0,__self:!0,__source:!0};function Wv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jv.call(e,r)&&!Hv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fl,type:t,key:s,ref:o,props:i,_owner:Xf.current}}function QT(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function YT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ng=/\/+/g;function lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YT(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case UT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lh(o,0):r,Rg(i)?(n="",t!=null&&(n=t.replace(Ng,"$&/")+"/"),Ta(i,e,n,"",function(u){return u})):i!=null&&(Jf(i)&&(i=QT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rg(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+lh(s,l);o+=Ta(s,e,n,a,i)}else if(a=KT(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+lh(s,l++),o+=Ta(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ql(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function XT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Ia={transition:null},JT={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Xf};q.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!Jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=ys;q.Fragment=$T;q.Profiler=BT;q.PureComponent=Qf;q.StrictMode=VT;q.Suspense=WT;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)jv.call(e,a)&&!Hv.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fl,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:jT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zT,_context:t},t.Consumer=t};q.createElement=Wv;q.createFactory=function(t){var e=Wv.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:HT,render:t}};q.isValidElement=Jf;q.lazy=function(t){return{$$typeof:GT,_payload:{_status:-1,_result:t},_init:XT}};q.memo=function(t,e){return{$$typeof:qT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return ct.current.useCallback(t,e)};q.useContext=function(t){return ct.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};q.useEffect=function(t,e){return ct.current.useEffect(t,e)};q.useId=function(){return ct.current.useId()};q.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return ct.current.useMemo(t,e)};q.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};q.useRef=function(t){return ct.current.useRef(t)};q.useState=function(t){return ct.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return ct.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(FT);const Jn=LT(k),ld=bT({__proto__:null,default:Jn},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=k,eI=Symbol.for("react.element"),tI=Symbol.for("react.fragment"),nI=Object.prototype.hasOwnProperty,rI=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iI={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nI.call(e,r)&&!iI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eI,type:t,key:s,ref:o,props:i,_owner:rI.current}}Xu.Fragment=tI;Xu.jsx=qv;Xu.jsxs=qv;(function(t){t.exports=Xu})(MT);const Gv=To.Fragment,D=To.jsx,ot=To.jsxs;var ad={},ud={},sI={get exports(){return ud},set exports(t){ud=t}},xt={},cd={},oI={get exports(){return cd},set exports(t){cd=t}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,$){var B=A.length;A.push($);e:for(;0<B;){var ve=B-1>>>1,xe=A[ve];if(0<i(xe,$))A[ve]=$,A[B]=xe,B=ve;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var $=A[0],B=A.pop();if(B!==$){A[0]=B;e:for(var ve=0,xe=A.length,Gl=xe>>>1;ve<Gl;){var kr=2*(ve+1)-1,oh=A[kr],Rr=kr+1,Kl=A[Rr];if(0>i(oh,B))Rr<xe&&0>i(Kl,oh)?(A[ve]=Kl,A[Rr]=B,ve=Rr):(A[ve]=oh,A[kr]=B,ve=kr);else if(Rr<xe&&0>i(Kl,B))A[ve]=Kl,A[Rr]=B,ve=Rr;else break e}}return $}function i(A,$){var B=A.sortIndex-$.sortIndex;return B!==0?B:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,h=null,d=3,m=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=A)r(u),$.sortIndex=$.expirationTime,e(a,$);else break;$=n(u)}}function v(A){if(_=!1,g(A),!y)if(n(a)!==null)y=!0,ih(I);else{var $=n(u);$!==null&&sh(v,$.startTime-A)}}function I(A,$){y=!1,_&&(_=!1,p(P),P=-1),m=!0;var B=d;try{for(g($),h=n(a);h!==null&&(!(h.expirationTime>$)||A&&!Ut());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var xe=ve(h.expirationTime<=$);$=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(a)&&r(a),g($)}else r(a);h=n(a)}if(h!==null)var Gl=!0;else{var kr=n(u);kr!==null&&sh(v,kr.startTime-$),Gl=!1}return Gl}finally{h=null,d=B,m=!1}}var R=!1,N=null,P=-1,J=5,H=-1;function Ut(){return!(t.unstable_now()-H<J)}function Ds(){if(N!==null){var A=t.unstable_now();H=A;var $=!0;try{$=N(!0,A)}finally{$?bs():(R=!1,N=null)}}else R=!1}var bs;if(typeof f=="function")bs=function(){f(Ds)};else if(typeof MessageChannel<"u"){var Ig=new MessageChannel,DT=Ig.port2;Ig.port1.onmessage=Ds,bs=function(){DT.postMessage(null)}}else bs=function(){w(Ds,0)};function ih(A){N=A,R||(R=!0,bs())}function sh(A,$){P=w(function(){A(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,ih(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var B=d;d=$;try{return A()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=d;d=A;try{return $()}finally{d=B}},t.unstable_scheduleCallback=function(A,$,B){var ve=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ve+B:ve):B=ve,A){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=B+xe,A={id:c++,callback:$,priorityLevel:A,startTime:B,expirationTime:xe,sortIndex:-1},B>ve?(A.sortIndex=B,e(u,A),n(a)===null&&A===n(u)&&(_?(p(P),P=-1):_=!0,sh(v,B-ve))):(A.sortIndex=xe,e(a,A),y||m||(y=!0,ih(I))),A},t.unstable_shouldYield=Ut,t.unstable_wrapCallback=function(A){var $=d;return function(){var B=d;d=$;try{return A.apply(this,arguments)}finally{d=B}}}})(Kv);(function(t){t.exports=Kv})(oI);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=k,Rt=cd;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yv=new Set,Io={};function ui(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(Io[t]=e,t=0;t<e.length;t++)Yv.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hd=Object.prototype.hasOwnProperty,lI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Ag={};function aI(t){return hd.call(Ag,t)?!0:hd.call(xg,t)?!1:lI.test(t)?Ag[t]=!0:(xg[t]=!0,!1)}function uI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cI(t,e,n,r){if(e===null||typeof e>"u"||uI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,ep);We[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,ep);We[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,ep);We[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function tp(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cI(e,n,i,r)&&(n=null),r||i===null?aI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yl=Symbol.for("react.element"),Si=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Zv=Symbol.for("react.offscreen"),Pg=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,ah;function Qs(t){if(ah===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ah=e&&e[1]||""}return`
`+ah+t}var uh=!1;function ch(t,e){if(!t||uh)return"";uh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{uh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function hI(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=ch(t.type,!1),t;case 11:return t=ch(t.type.render,!1),t;case 1:return t=ch(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Si:return"Portal";case dd:return"Profiler";case np:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jv:return(t.displayName||"Context")+".Consumer";case Xv:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ip:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function dI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fI(t){var e=e0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){t._valueTracker||(t._valueTracker=fI(t))}function t0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gd(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n0(t,e){e=e.checked,e!=null&&tp(t,"checked",e,!1)}function yd(t,e){n0(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ys(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function r0(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jl,s0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jl=Jl||document.createElement("div"),Jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pI=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){pI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function o0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function l0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mI=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,Ui=null,$i=null;function Mg(t){if(t=gl(t)){if(typeof Td!="function")throw Error(E(280));var e=t.stateNode;e&&(e=nc(e),Td(t.stateNode,t.type,e))}}function a0(t){Ui?$i?$i.push(t):$i=[t]:Ui=t}function u0(){if(Ui){var t=Ui,e=$i;if($i=Ui=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function c0(t,e){return t(e)}function h0(){}var hh=!1;function d0(t,e,n){if(hh)return t(e,n);hh=!0;try{return c0(t,e,n)}finally{hh=!1,(Ui!==null||$i!==null)&&(h0(),u0())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Id=!1;if(In)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){Id=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{Id=!1}function gI(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var io=!1,ja=null,Ha=!1,kd=null,yI={onError:function(t){io=!0,ja=t}};function _I(t,e,n,r,i,s,o,l,a){io=!1,ja=null,gI.apply(yI,arguments)}function vI(t,e,n,r,i,s,o,l,a){if(_I.apply(this,arguments),io){if(io){var u=ja;io=!1,ja=null}else throw Error(E(198));Ha||(Ha=!0,kd=u)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(t){if(ci(t)!==t)throw Error(E(188))}function wI(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fg(i),t;if(s===r)return Fg(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function p0(t){return t=wI(t),t!==null?m0(t):null}function m0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m0(t);if(e!==null)return e;t=t.sibling}return null}var g0=Rt.unstable_scheduleCallback,Ug=Rt.unstable_cancelCallback,EI=Rt.unstable_shouldYield,SI=Rt.unstable_requestPaint,we=Rt.unstable_now,CI=Rt.unstable_getCurrentPriorityLevel,op=Rt.unstable_ImmediatePriority,y0=Rt.unstable_UserBlockingPriority,Wa=Rt.unstable_NormalPriority,TI=Rt.unstable_LowPriority,_0=Rt.unstable_IdlePriority,Ju=null,on=null;function II(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:NI,kI=Math.log,RI=Math.LN2;function NI(t){return t>>>=0,t===0?32:31-(kI(t)/RI|0)|0}var Zl=64,ea=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xs(l):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function xI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=xI(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v0(){var t=Zl;return Zl<<=1,!(Zl&4194240)&&(Zl=64),t}function dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function PI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,ap,S0,C0,T0,Nd=!1,ta=[],Zn=null,er=null,tr=null,No=new Map,xo=new Map,zn=[],OI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $g(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gl(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DI(t,e,n,r,i){switch(e){case"focusin":return Zn=Fs(Zn,t,e,n,r,i),!0;case"dragenter":return er=Fs(er,t,e,n,r,i),!0;case"mouseover":return tr=Fs(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return No.set(s,Fs(No.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Fs(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function I0(t){var e=Or(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=f0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){S0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cd=r,n.target.dispatchEvent(r),Cd=null}else return e=gl(n),e!==null&&ap(e),t.blockedOn=n,!1;e.shift()}return!0}function Vg(t,e,n){ka(t)&&n.delete(e)}function bI(){Nd=!1,Zn!==null&&ka(Zn)&&(Zn=null),er!==null&&ka(er)&&(er=null),tr!==null&&ka(tr)&&(tr=null),No.forEach(Vg),xo.forEach(Vg)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,bI)))}function Ao(t){function e(i){return Us(i,t)}if(0<ta.length){Us(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Us(Zn,t),er!==null&&Us(er,t),tr!==null&&Us(tr,t),No.forEach(e),xo.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&zn.shift()}var Vi=Ln.ReactCurrentBatchConfig,Ga=!0;function LI(t,e,n,r){var i=Z,s=Vi.transition;Vi.transition=null;try{Z=1,up(t,e,n,r)}finally{Z=i,Vi.transition=s}}function MI(t,e,n,r){var i=Z,s=Vi.transition;Vi.transition=null;try{Z=4,up(t,e,n,r)}finally{Z=i,Vi.transition=s}}function up(t,e,n,r){if(Ga){var i=xd(t,e,n,r);if(i===null)Sh(t,e,r,Ka,n),$g(t,r);else if(DI(i,t,e,n,r))r.stopPropagation();else if($g(t,r),e&4&&-1<OI.indexOf(t)){for(;i!==null;){var s=gl(i);if(s!==null&&E0(s),s=xd(t,e,n,r),s===null&&Sh(t,e,r,Ka,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sh(t,e,r,null,n)}}var Ka=null;function xd(t,e,n,r){if(Ka=null,t=sp(r),t=Or(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CI()){case op:return 1;case y0:return 4;case Wa:case TI:return 16;case _0:return 536870912;default:return 16}default:return 16}}var Qn=null,cp=null,Ra=null;function R0(){if(Ra)return Ra;var t,e=cp,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ra=i.slice(t,1<r?1-r:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Bg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:Bg,this.isPropagationStopped=Bg,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hp=At(_s),ml=pe({},_s,{view:0,detail:0}),FI=At(ml),fh,ph,$s,Zu=pe({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(fh=t.screenX-$s.screenX,ph=t.screenY-$s.screenY):ph=fh=0,$s=t),fh)},movementY:function(t){return"movementY"in t?t.movementY:ph}}),zg=At(Zu),UI=pe({},Zu,{dataTransfer:0}),$I=At(UI),VI=pe({},ml,{relatedTarget:0}),mh=At(VI),BI=pe({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),zI=At(BI),jI=pe({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HI=At(jI),WI=pe({},_s,{data:0}),jg=At(WI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KI[t])?!!e[t]:!1}function dp(){return QI}var YI=pe({},ml,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dp,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=At(YI),JI=pe({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=At(JI),ZI=pe({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dp}),ek=At(ZI),tk=pe({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),nk=At(tk),rk=pe({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ik=At(rk),sk=[9,13,27,32],fp=In&&"CompositionEvent"in window,so=null;In&&"documentMode"in document&&(so=document.documentMode);var ok=In&&"TextEvent"in window&&!so,N0=In&&(!fp||so&&8<so&&11>=so),Wg=String.fromCharCode(32),qg=!1;function x0(t,e){switch(t){case"keyup":return sk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function lk(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(qg=!0,Wg);case"textInput":return t=e.data,t===Wg&&qg?null:t;default:return null}}function ak(t,e){if(Ti)return t==="compositionend"||!fp&&x0(t,e)?(t=R0(),Ra=cp=Qn=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var uk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uk[t.type]:e==="textarea"}function P0(t,e,n,r){a0(r),e=Qa(e,"onChange"),0<e.length&&(n=new hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,Po=null;function ck(t){z0(t,0)}function ec(t){var e=Ri(t);if(t0(e))return t}function hk(t,e){if(t==="change")return e}var O0=!1;if(In){var gh;if(In){var yh="oninput"in document;if(!yh){var Kg=document.createElement("div");Kg.setAttribute("oninput","return;"),yh=typeof Kg.oninput=="function"}gh=yh}else gh=!1;O0=gh&&(!document.documentMode||9<document.documentMode)}function Qg(){oo&&(oo.detachEvent("onpropertychange",D0),Po=oo=null)}function D0(t){if(t.propertyName==="value"&&ec(Po)){var e=[];P0(e,Po,t,sp(t)),d0(ck,e)}}function dk(t,e,n){t==="focusin"?(Qg(),oo=e,Po=n,oo.attachEvent("onpropertychange",D0)):t==="focusout"&&Qg()}function fk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Po)}function pk(t,e){if(t==="click")return ec(e)}function mk(t,e){if(t==="input"||t==="change")return ec(e)}function gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:gk;function Oo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hd.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function Yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xg(t,e){var n=Yg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yg(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L0(){for(var t=window,e=za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=za(t.document)}return e}function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yk(t){var e=L0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(r!==null&&pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xg(n,s);var o=Xg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _k=In&&"documentMode"in document&&11>=document.documentMode,Ii=null,Ad=null,lo=null,Pd=!1;function Jg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Ii==null||Ii!==za(r)||(r=Ii,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Oo(lo,r)||(lo=r,r=Qa(Ad,"onSelect"),0<r.length&&(e=new hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},_h={},M0={};In&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function tc(t){if(_h[t])return _h[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return _h[t]=e[n];return t}var F0=tc("animationend"),U0=tc("animationiteration"),$0=tc("animationstart"),V0=tc("transitionend"),B0=new Map,Zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){B0.set(t,e),ui(e,[t])}for(var vh=0;vh<Zg.length;vh++){var wh=Zg[vh],vk=wh.toLowerCase(),wk=wh[0].toUpperCase()+wh.slice(1);Er(vk,"on"+wk)}Er(F0,"onAnimationEnd");Er(U0,"onAnimationIteration");Er($0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(V0,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ek=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function ey(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vI(r,e,void 0,t),t.currentTarget=null}function z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;ey(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;ey(i,l,u),s=a}}}if(Ha)throw t=kd,Ha=!1,kd=null,t}function ie(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var r=t+"__bubble";n.has(r)||(j0(e,t,2,!1),n.add(r))}function Eh(t,e,n){var r=0;e&&(r|=4),j0(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[ia]){t[ia]=!0,Yv.forEach(function(n){n!=="selectionchange"&&(Ek.has(n)||Eh(n,!1,t),Eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,Eh("selectionchange",!1,e))}}function j0(t,e,n,r){switch(k0(e)){case 1:var i=LI;break;case 4:i=MI;break;default:i=up}n=i.bind(null,e,n,t),i=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Or(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}d0(function(){var u=s,c=sp(n),h=[];e:{var d=B0.get(t);if(d!==void 0){var m=hp,y=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":m=XI;break;case"focusin":y="focus",m=mh;break;case"focusout":y="blur",m=mh;break;case"beforeblur":case"afterblur":m=mh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$I;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ek;break;case F0:case U0:case $0:m=zI;break;case V0:m=nk;break;case"scroll":m=FI;break;case"wheel":m=ik;break;case"copy":case"cut":case"paste":m=HI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Hg}var _=(e&4)!==0,w=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Ro(f,p),v!=null&&_.push(bo(f,v,g)))),w)break;f=f.return}0<_.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Cd&&(y=n.relatedTarget||n.fromElement)&&(Or(y)||y[kn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Or(y):null,y!==null&&(w=ci(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=zg,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Hg,v="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?d:Ri(m),g=y==null?d:Ri(y),d=new _(v,f+"leave",m,n,c),d.target=w,d.relatedTarget=g,v=null,Or(c)===u&&(_=new _(p,f+"enter",y,n,c),_.target=g,_.relatedTarget=w,v=_),w=v,m&&y)t:{for(_=m,p=y,f=0,g=_;g;g=gi(g))f++;for(g=0,v=p;v;v=gi(v))g++;for(;0<f-g;)_=gi(_),f--;for(;0<g-f;)p=gi(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=gi(_),p=gi(p)}_=null}else _=null;m!==null&&ty(h,d,m,_,!1),y!==null&&w!==null&&ty(h,w,y,_,!0)}}e:{if(d=u?Ri(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=hk;else if(Gg(d))if(O0)I=mk;else{I=fk;var R=dk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=pk);if(I&&(I=I(t,u))){P0(h,I,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&_d(d,"number",d.value)}switch(R=u?Ri(u):window,t){case"focusin":(Gg(R)||R.contentEditable==="true")&&(Ii=R,Ad=u,lo=null);break;case"focusout":lo=Ad=Ii=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Jg(h,n,c);break;case"selectionchange":if(_k)break;case"keydown":case"keyup":Jg(h,n,c)}var N;if(fp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ti?x0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(N0&&n.locale!=="ko"&&(Ti||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ti&&(N=R0()):(Qn=c,cp="value"in Qn?Qn.value:Qn.textContent,Ti=!0)),R=Qa(u,P),0<R.length&&(P=new jg(P,t,null,n,c),h.push({event:P,listeners:R}),N?P.data=N:(N=A0(n),N!==null&&(P.data=N)))),(N=ok?lk(t,n):ak(t,n))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(c=new jg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}z0(h,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(bo(t,s,i)),s=Ro(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ty(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ro(n,s),a!=null&&o.unshift(bo(n,a,l))):i||(a=Ro(n,s),a!=null&&o.push(bo(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sk=/\r\n?/g,Ck=/\u0000|\uFFFD/g;function ny(t){return(typeof t=="string"?t:""+t).replace(Sk,`
`).replace(Ck,"")}function sa(t,e,n){if(e=ny(e),ny(t)!==e&&n)throw Error(E(425))}function Ya(){}var Od=null,Dd=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,Tk=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,Ik=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(t){return ry.resolve(null).then(t).catch(kk)}:Ld;function kk(t){setTimeout(function(){throw t})}function Ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),nn="__reactFiber$"+vs,Lo="__reactProps$"+vs,kn="__reactContainer$"+vs,Md="__reactEvents$"+vs,Rk="__reactListeners$"+vs,Nk="__reactHandles$"+vs;function Or(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iy(t);t!==null;){if(n=t[nn])return n;t=iy(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[nn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function nc(t){return t[Lo]||null}var Fd=[],Ni=-1;function Sr(t){return{current:t}}function oe(t){0>Ni||(t.current=Fd[Ni],Fd[Ni]=null,Ni--)}function re(t,e){Ni++,Fd[Ni]=t.current,t.current=e}var fr={},nt=Sr(fr),yt=Sr(!1),Gr=fr;function Ji(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function Xa(){oe(yt),oe(nt)}function sy(t,e,n){if(nt.current!==fr)throw Error(E(168));re(nt,e),re(yt,n)}function H0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,dI(t)||"Unknown",i));return pe({},n,r)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Gr=nt.current,re(nt,t),re(yt,yt.current),!0}function oy(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=H0(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,oe(yt),oe(nt),re(nt,t)):oe(yt),re(yt,n)}var fn=null,rc=!1,Th=!1;function W0(t){fn===null?fn=[t]:fn.push(t)}function xk(t){rc=!0,W0(t)}function Cr(){if(!Th&&fn!==null){Th=!0;var t=0,e=Z;try{var n=fn;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,rc=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),g0(op,Cr),i}finally{Z=e,Th=!1}}return null}var xi=[],Ai=0,Za=null,eu=0,Pt=[],Ot=0,Kr=null,pn=1,mn="";function Nr(t,e){xi[Ai++]=eu,xi[Ai++]=Za,Za=t,eu=e}function q0(t,e,n){Pt[Ot++]=pn,Pt[Ot++]=mn,Pt[Ot++]=Kr,Kr=t;var r=pn;t=mn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Qt(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function mp(t){t.return!==null&&(Nr(t,1),q0(t,1,0))}function gp(t){for(;t===Za;)Za=xi[--Ai],xi[Ai]=null,eu=xi[--Ai],xi[Ai]=null;for(;t===Kr;)Kr=Pt[--Ot],Pt[Ot]=null,mn=Pt[--Ot],Pt[Ot]=null,pn=Pt[--Ot],Pt[Ot]=null}var kt=null,Tt=null,ae=!1,zt=null;function G0(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ly(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Tt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Tt=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(ae){var e=Tt;if(e){var n=e;if(!ly(t,e)){if(Ud(t))throw Error(E(418));e=nr(n.nextSibling);var r=kt;e&&ly(t,e)?G0(r,n):(t.flags=t.flags&-4097|2,ae=!1,kt=t)}}else{if(Ud(t))throw Error(E(418));t.flags=t.flags&-4097|2,ae=!1,kt=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function oa(t){if(t!==kt)return!1;if(!ae)return ay(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=Tt)){if(Ud(t))throw K0(),Error(E(418));for(;e;)G0(t,e),e=nr(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=kt?nr(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=Tt;t;)t=nr(t.nextSibling)}function Zi(){Tt=kt=null,ae=!1}function yp(t){zt===null?zt=[t]:zt.push(t)}var Ak=Ln.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tu=Sr(null),nu=null,Pi=null,_p=null;function vp(){_p=Pi=nu=null}function wp(t){var e=tu.current;oe(tu),t._currentValue=e}function Vd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){nu=t,_p=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(_p!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(nu===null)throw Error(E(308));Pi=t,nu.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var Dr=null;function Ep(t){Dr===null?Dr=[t]:Dr.push(t)}function Q0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ep(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ep(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lp(t,n)}}function uy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,m=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,_=l;switch(d=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=pe({},h,d);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else m={eventTime:m,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=h):c=c.next=m,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var X0=new Qv.Component().refs;function Bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Yt(e,t,i,r),xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Yt(e,t,i,r),xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=sr(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Yt(e,t,r,n),xa(e,t,r))}};function hy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function J0(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=_t(e)?Gr:nt.current,r=e.contextTypes,s=(r=r!=null)?Ji(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=X0,Sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=_t(e)?Gr:nt.current,i.context=Ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ic.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===X0&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fy(t){var e=t._init;return e(t._payload)}function Z0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=or(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,v){return f===null||f.tag!==6?(f=Ph(g,p.mode,v),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,v){var I=g.type;return I===Ci?c(p,f,g.props.children,v,g.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vn&&fy(I)===f.type)?(v=i(f,g.props),v.ref=Vs(p,f,g),v.return=p,v):(v=La(g.type,g.key,g.props,null,p.mode,v),v.ref=Vs(p,f,g),v.return=p,v)}function u(p,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Oh(g,p.mode,v),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,v,I){return f===null||f.tag!==7?(f=Br(g,p.mode,v,I),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ph(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yl:return g=La(f.type,f.key,f.props,null,p.mode,g),g.ref=Vs(p,null,f),g.return=p,g;case Si:return f=Oh(f,p.mode,g),f.return=p,f;case Vn:var v=f._init;return h(p,v(f._payload),g)}if(Ys(f)||Ls(f))return f=Br(f,p.mode,g,null),f.return=p,f;la(p,f)}return null}function d(p,f,g,v){var I=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:l(p,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yl:return g.key===I?a(p,f,g,v):null;case Si:return g.key===I?u(p,f,g,v):null;case Vn:return I=g._init,d(p,f,I(g._payload),v)}if(Ys(g)||Ls(g))return I!==null?null:c(p,f,g,v,null);la(p,g)}return null}function m(p,f,g,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,l(f,p,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yl:return p=p.get(v.key===null?g:v.key)||null,a(f,p,v,I);case Si:return p=p.get(v.key===null?g:v.key)||null,u(f,p,v,I);case Vn:var R=v._init;return m(p,f,g,R(v._payload),I)}if(Ys(v)||Ls(v))return p=p.get(g)||null,c(f,p,v,I,null);la(f,v)}return null}function y(p,f,g,v){for(var I=null,R=null,N=f,P=f=0,J=null;N!==null&&P<g.length;P++){N.index>P?(J=N,N=null):J=N.sibling;var H=d(p,N,g[P],v);if(H===null){N===null&&(N=J);break}t&&N&&H.alternate===null&&e(p,N),f=s(H,f,P),R===null?I=H:R.sibling=H,R=H,N=J}if(P===g.length)return n(p,N),ae&&Nr(p,P),I;if(N===null){for(;P<g.length;P++)N=h(p,g[P],v),N!==null&&(f=s(N,f,P),R===null?I=N:R.sibling=N,R=N);return ae&&Nr(p,P),I}for(N=r(p,N);P<g.length;P++)J=m(N,p,P,g[P],v),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?P:J.key),f=s(J,f,P),R===null?I=J:R.sibling=J,R=J);return t&&N.forEach(function(Ut){return e(p,Ut)}),ae&&Nr(p,P),I}function _(p,f,g,v){var I=Ls(g);if(typeof I!="function")throw Error(E(150));if(g=I.call(g),g==null)throw Error(E(151));for(var R=I=null,N=f,P=f=0,J=null,H=g.next();N!==null&&!H.done;P++,H=g.next()){N.index>P?(J=N,N=null):J=N.sibling;var Ut=d(p,N,H.value,v);if(Ut===null){N===null&&(N=J);break}t&&N&&Ut.alternate===null&&e(p,N),f=s(Ut,f,P),R===null?I=Ut:R.sibling=Ut,R=Ut,N=J}if(H.done)return n(p,N),ae&&Nr(p,P),I;if(N===null){for(;!H.done;P++,H=g.next())H=h(p,H.value,v),H!==null&&(f=s(H,f,P),R===null?I=H:R.sibling=H,R=H);return ae&&Nr(p,P),I}for(N=r(p,N);!H.done;P++,H=g.next())H=m(N,p,P,H.value,v),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?P:H.key),f=s(H,f,P),R===null?I=H:R.sibling=H,R=H);return t&&N.forEach(function(Ds){return e(p,Ds)}),ae&&Nr(p,P),I}function w(p,f,g,v){if(typeof g=="object"&&g!==null&&g.type===Ci&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yl:e:{for(var I=g.key,R=f;R!==null;){if(R.key===I){if(I=g.type,I===Ci){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vn&&fy(I)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=Vs(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===Ci?(f=Br(g.props.children,p.mode,v,g.key),f.return=p,p=f):(v=La(g.type,g.key,g.props,null,p.mode,v),v.ref=Vs(p,f,g),v.return=p,p=v)}return o(p);case Si:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Oh(g,p.mode,v),f.return=p,p=f}return o(p);case Vn:return R=g._init,w(p,f,R(g._payload),v)}if(Ys(g))return y(p,f,g,v);if(Ls(g))return _(p,f,g,v);la(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ph(g,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return w}var es=Z0(!0),ew=Z0(!1),yl={},ln=Sr(yl),Mo=Sr(yl),Fo=Sr(yl);function br(t){if(t===yl)throw Error(E(174));return t}function Cp(t,e){switch(re(Fo,e),re(Mo,t),re(ln,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}oe(ln),re(ln,e)}function ts(){oe(ln),oe(Mo),oe(Fo)}function tw(t){br(Fo.current);var e=br(ln.current),n=wd(e,t.type);e!==n&&(re(Mo,t),re(ln,n))}function Tp(t){Mo.current===t&&(oe(ln),oe(Mo))}var de=Sr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ih=[];function Ip(){for(var t=0;t<Ih.length;t++)Ih[t]._workInProgressVersionPrimary=null;Ih.length=0}var Aa=Ln.ReactCurrentDispatcher,kh=Ln.ReactCurrentBatchConfig,Qr=0,fe=null,Te=null,Oe=null,su=!1,ao=!1,Uo=0,Pk=0;function Ge(){throw Error(E(321))}function kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Rp(t,e,n,r,i,s){if(Qr=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?Lk:Mk,t=n(r,i),ao){s=0;do{if(ao=!1,Uo=0,25<=s)throw Error(E(301));s+=1,Oe=Te=null,e.updateQueue=null,Aa.current=Fk,t=n(r,i)}while(ao)}if(Aa.current=ou,e=Te!==null&&Te.next!==null,Qr=0,Oe=Te=fe=null,su=!1,e)throw Error(E(300));return t}function Np(){var t=Uo!==0;return Uo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?fe.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Ft(){if(Te===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Oe===null?fe.memoizedState:Oe.next;if(e!==null)Oe=e,Te=t;else{if(t===null)throw Error(E(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Oe===null?fe.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function $o(t,e){return typeof e=="function"?e(t):e}function Rh(t){var e=Ft(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Qr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,fe.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Jt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nh(t){var e=Ft(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function nw(){}function rw(t,e){var n=fe,r=Ft(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,xp(ow.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Vo(9,sw.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(E(349));Qr&30||iw(n,e,i)}return i}function iw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sw(t,e,n,r){e.value=n,e.getSnapshot=r,lw(e)&&aw(t)}function ow(t,e,n){return n(function(){lw(e)&&aw(t)})}function lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function aw(t){var e=Rn(t,1);e!==null&&Yt(e,t,1,-1)}function py(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=bk.bind(null,fe,t),[e.memoizedState,t]}function Vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uw(){return Ft().memoizedState}function Pa(t,e,n,r){var i=tn();fe.flags|=t,i.memoizedState=Vo(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&kp(r,o.deps)){i.memoizedState=Vo(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Vo(1|e,n,s,r)}function my(t,e){return Pa(8390656,8,t,e)}function xp(t,e){return sc(2048,8,t,e)}function cw(t,e){return sc(4,2,t,e)}function hw(t,e){return sc(4,4,t,e)}function dw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fw(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,dw.bind(null,e,t),n)}function Ap(){}function pw(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mw(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gw(t,e,n){return Qr&21?(Jt(n,e)||(n=v0(),fe.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function Ok(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=kh.transition;kh.transition={};try{t(!1),e()}finally{Z=n,kh.transition=r}}function yw(){return Ft().memoizedState}function Dk(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_w(t))vw(e,n);else if(n=Q0(t,e,n,r),n!==null){var i=at();Yt(n,t,r,i),ww(n,e,r)}}function bk(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_w(t))vw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var a=e.interleaved;a===null?(i.next=i,Ep(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Q0(t,e,i,r),n!==null&&(i=at(),Yt(n,t,r,i),ww(n,e,r))}}function _w(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function vw(t,e){ao=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ww(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lp(t,n)}}var ou={readContext:Mt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Lk={readContext:Mt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:my,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,dw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Dk.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:py,useDebugValue:Ap,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=py(!1),e=t[0];return t=Ok.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=tn();if(ae){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Me===null)throw Error(E(349));Qr&30||iw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,my(ow.bind(null,r,s,t),[t]),r.flags|=2048,Vo(9,sw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=Me.identifierPrefix;if(ae){var n=mn,r=pn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mk={readContext:Mt,useCallback:pw,useContext:Mt,useEffect:xp,useImperativeHandle:fw,useInsertionEffect:cw,useLayoutEffect:hw,useMemo:mw,useReducer:Rh,useRef:uw,useState:function(){return Rh($o)},useDebugValue:Ap,useDeferredValue:function(t){var e=Ft();return gw(e,Te.memoizedState,t)},useTransition:function(){var t=Rh($o)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:nw,useSyncExternalStore:rw,useId:yw,unstable_isNewReconciler:!1},Fk={readContext:Mt,useCallback:pw,useContext:Mt,useEffect:xp,useImperativeHandle:fw,useInsertionEffect:cw,useLayoutEffect:hw,useMemo:mw,useReducer:Nh,useRef:uw,useState:function(){return Nh($o)},useDebugValue:Ap,useDeferredValue:function(t){var e=Ft();return Te===null?e.memoizedState=t:gw(e,Te.memoizedState,t)},useTransition:function(){var t=Nh($o)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:nw,useSyncExternalStore:rw,useId:yw,unstable_isNewReconciler:!1};function ns(t,e){try{var n="",r=e;do n+=hI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uk=typeof WeakMap=="function"?WeakMap:Map;function Ew(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,Zd=r),jd(t,e)},n}function Sw(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jd(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Jk.bind(null,t,e,n),e.then(t,t))}function yy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _y(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var $k=Ln.ReactCurrentOwner,pt=!1;function st(t,e,n,r){e.child=t===null?ew(e,null,n,r):es(e,t.child,n,r)}function vy(t,e,n,r,i){n=n.render;var s=e.ref;return Bi(e,i),r=Rp(t,e,n,r,s,i),n=Np(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ae&&n&&mp(e),e.flags|=1,st(t,e,r,i),e.child)}function wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cw(t,e,s,r,i)):(t=La(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return Hd(t,e,n,r,i)}function Tw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Di,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Di,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Di,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(Di,Ct),Ct|=r;return st(t,e,i,n),e.child}function Iw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,r,i){var s=_t(n)?Gr:nt.current;return s=Ji(e,s),Bi(e,i),n=Rp(t,e,n,r,s,i),r=Np(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ae&&r&&mp(e),e.flags|=1,st(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(_t(n)){var s=!0;Ja(e)}else s=!1;if(Bi(e,i),e.stateNode===null)Oa(t,e),J0(e,n,r),zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=_t(n)?Gr:nt.current,u=Ji(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&dy(e,o,r,u),Bn=!1;var d=e.memoizedState;o.state=d,ru(e,r,o,i),a=e.memoizedState,l!==r||d!==a||yt.current||Bn?(typeof c=="function"&&(Bd(e,n,c,r),a=e.memoizedState),(l=Bn||hy(e,n,l,r,d,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Y0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Vt(e.type,l),o.props=u,h=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Mt(a):(a=_t(n)?Gr:nt.current,a=Ji(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||d!==a)&&dy(e,o,r,a),Bn=!1,d=e.memoizedState,o.state=d,ru(e,r,o,i);var y=e.memoizedState;l!==h||d!==y||yt.current||Bn?(typeof m=="function"&&(Bd(e,n,m,r),y=e.memoizedState),(u=Bn||hy(e,n,u,r,d,y,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Wd(t,e,n,r,s,i)}function Wd(t,e,n,r,i,s){Iw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&oy(e,n,!1),Nn(t,e,s);r=e.stateNode,$k.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,s),e.child=es(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&oy(e,n,!0),e.child}function kw(t){var e=t.stateNode;e.pendingContext?sy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sy(t,e.context,!1),Cp(t,e.containerInfo)}function Sy(t,e,n,r,i){return Zi(),yp(i),e.flags|=256,st(t,e,n,r),e.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rw(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(de,i&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ac(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=qd,t):Pp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Vk(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=or(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qd,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pp(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,r){return r!==null&&yp(r),es(e,t.child,null,n),t=Pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xh(Error(E(422))),aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ac({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=qd,s);if(!(e.mode&1))return aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=xh(s,r,void 0),aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),Yt(r,t,i,-1))}return Fp(),r=xh(Error(E(421))),aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Zk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=nr(i.nextSibling),kt=e,ae=!0,zt=null,t!==null&&(Pt[Ot++]=pn,Pt[Ot++]=mn,Pt[Ot++]=Kr,pn=t.id,mn=t.overflow,Kr=e),e=Pp(e,r.children),e.flags|=4096,e)}function Cy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vd(t.return,e,n)}function Ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cy(t,n,e);else if(t.tag===19)Cy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ah(e,!0,n,null,s);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bk(t,e,n){switch(e.tag){case 3:kw(e),Zi();break;case 5:tw(e);break;case 1:_t(e.type)&&Ja(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?Rw(t,e,n):(re(de,de.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,Tw(t,e,n)}return Nn(t,e,n)}var xw,Kd,Aw,Pw;xw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};Aw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(ln.current);var s=null;switch(n){case"input":i=gd(t,i),r=gd(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=vd(t,i),r=vd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ya)}Ed(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ie("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zk(t,e,n){var r=e.pendingProps;switch(gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return _t(e.type)&&Xa(),Ke(e),null;case 3:return r=e.stateNode,ts(),oe(yt),oe(nt),Ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(nf(zt),zt=null))),Kd(t,e),Ke(e),null;case 5:Tp(e);var i=br(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Aw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ke(e),null}if(t=br(ln.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)ie(Js[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Og(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":bg(r,s),ie("invalid",r)}Ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",""+l]):Io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Xl(r),Dg(r,s,!0);break;case"textarea":Xl(r),Lg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ya)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Lo]=r,xw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)ie(Js[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Og(t,r),i=gd(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":bg(t,r),i=vd(t,r),ie("invalid",t);break;default:i=r}Ed(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?l0(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&s0(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ko(t,a):typeof a=="number"&&ko(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ie("scroll",t):a!=null&&tp(t,s,a,o))}switch(n){case"input":Xl(t),Dg(t,r,!1);break;case"textarea":Xl(t),Lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)Pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=br(Fo.current),br(ln.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return Ke(e),null;case 13:if(oe(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&Tt!==null&&e.mode&1&&!(e.flags&128))K0(),Zi(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[nn]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else zt!==null&&(nf(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?ke===0&&(ke=3):Fp())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return ts(),Kd(t,e),t===null&&Do(e.stateNode.containerInfo),Ke(e),null;case 10:return wp(e.type._context),Ke(e),null;case 17:return _t(e.type)&&Xa(),Ke(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>rs&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Ke(e),null}else 2*we()-s.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=de.current,re(de,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function jk(t,e){switch(gp(e),e.tag){case 1:return _t(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),oe(yt),oe(nt),Ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return ts(),null;case 10:return wp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var ua=!1,Ye=!1,Hk=typeof WeakSet=="function"?WeakSet:Set,x=null;function Oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Qd(t,e,n){try{n()}catch(r){ge(t,e,r)}}var Ty=!1;function Wk(t,e){if(Od=Ga,t=L0(),pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dd={focusedElem:t,selectionRange:n},Ga=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vt(e.type,_),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){ge(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=Ty,Ty=!1,y}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qd(e,n,s)}i=i.next}while(i!==r)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ow(t){var e=t.alternate;e!==null&&(t.alternate=null,Ow(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Lo],delete e[Md],delete e[Rk],delete e[Nk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dw(t){return t.tag===5||t.tag===3||t.tag===4}function Iy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ya));else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function Jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var $e=null,Bt=!1;function Un(t,e,n){for(n=n.child;n!==null;)bw(t,e,n),n=n.sibling}function bw(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:Ye||Oi(n,e);case 6:var r=$e,i=Bt;$e=null,Un(t,e,n),$e=r,Bt=i,$e!==null&&(Bt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Bt?(t=$e,n=n.stateNode,t.nodeType===8?Ch(t.parentNode,n):t.nodeType===1&&Ch(t,n),Ao(t)):Ch($e,n.stateNode));break;case 4:r=$e,i=Bt,$e=n.stateNode.containerInfo,Bt=!0,Un(t,e,n),$e=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qd(n,e,o),i=i.next}while(i!==r)}Un(t,e,n);break;case 1:if(!Ye&&(Oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,Un(t,e,n),Ye=r):Un(t,e,n);break;default:Un(t,e,n)}}function ky(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hk),e.forEach(function(r){var i=eR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Bt=!1;break e;case 3:$e=l.stateNode.containerInfo,Bt=!0;break e;case 4:$e=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if($e===null)throw Error(E(160));bw(s,o,i),$e=null,Bt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lw(e,t),e=e.sibling}function Lw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),en(t),r&4){try{uo(3,t,t.return),oc(3,t)}catch(_){ge(t,t.return,_)}try{uo(5,t,t.return)}catch(_){ge(t,t.return,_)}}break;case 1:$t(e,t),en(t),r&512&&n!==null&&Oi(n,n.return);break;case 5:if($t(e,t),en(t),r&512&&n!==null&&Oi(n,n.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(_){ge(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&n0(i,s),Sd(l,o);var u=Sd(l,s);for(o=0;o<a.length;o+=2){var c=a[o],h=a[o+1];c==="style"?l0(i,h):c==="dangerouslySetInnerHTML"?s0(i,h):c==="children"?ko(i,h):tp(i,c,h,u)}switch(l){case"input":yd(i,s);break;case"textarea":r0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(_){ge(t,t.return,_)}}break;case 6:if($t(e,t),en(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ge(t,t.return,_)}}break;case 3:if($t(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(_){ge(t,t.return,_)}break;case 4:$t(e,t),en(t);break;case 13:$t(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bp=we())),r&4&&ky(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(u=Ye)||c,$t(e,t),Ye=u):$t(e,t),en(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,m=d.child,d.tag){case 0:case 11:case 14:case 15:uo(4,d,d.return);break;case 1:Oi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ge(r,n,_)}}break;case 5:Oi(d,d.return);break;case 22:if(d.memoizedState!==null){Ny(h);continue}}m!==null?(m.return=d,x=m):Ny(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=o0("display",o))}catch(_){ge(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ge(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$t(e,t),en(t),r&4&&ky(t);break;case 21:break;default:$t(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dw(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=Iy(t);Jd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Iy(t);Xd(t,l,o);break;default:throw Error(E(161))}}catch(a){ge(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qk(t,e,n){x=t,Mw(t)}function Mw(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ye;l=ua;var u=Ye;if(ua=o,(Ye=a)&&!u)for(x=i;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?xy(i):a!==null?(a.return=o,x=a):xy(i);for(;s!==null;)x=s,Mw(s),s=s.sibling;x=i,ua=l,Ye=u}Ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Ry(t)}}function Ry(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ye||e.flags&512&&Yd(e)}catch(d){ge(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Ny(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function xy(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(a){ge(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ge(e,i,a)}}var s=e.return;try{Yd(e)}catch(a){ge(e,s,a)}break;case 5:var o=e.return;try{Yd(e)}catch(a){ge(e,o,a)}}}catch(a){ge(e,e.return,a)}if(e===t){x=null;break}var l=e.sibling;if(l!==null){l.return=e.return,x=l;break}x=e.return}}var Gk=Math.ceil,lu=Ln.ReactCurrentDispatcher,Op=Ln.ReactCurrentOwner,bt=Ln.ReactCurrentBatchConfig,Q=0,Me=null,Ce=null,je=0,Ct=0,Di=Sr(0),ke=0,Bo=null,Yr=0,lc=0,Dp=0,co=null,ft=null,bp=0,rs=1/0,dn=null,au=!1,Zd=null,ir=null,ca=!1,Yn=null,uu=0,ho=0,ef=null,Da=-1,ba=0;function at(){return Q&6?we():Da!==-1?Da:Da=we()}function sr(t){return t.mode&1?Q&2&&je!==0?je&-je:Ak.transition!==null?(ba===0&&(ba=v0()),ba):(t=Z,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function Yt(t,e,n,r){if(50<ho)throw ho=0,ef=null,Error(E(185));pl(t,n,r),(!(Q&2)||t!==Me)&&(t===Me&&(!(Q&2)&&(lc|=n),ke===4&&jn(t,je)),vt(t,r),n===1&&Q===0&&!(e.mode&1)&&(rs=we()+500,rc&&Cr()))}function vt(t,e){var n=t.callbackNode;AI(t,e);var r=qa(t,t===Me?je:0);if(r===0)n!==null&&Ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ug(n),e===1)t.tag===0?xk(Ay.bind(null,t)):W0(Ay.bind(null,t)),Ik(function(){!(Q&6)&&Cr()}),n=null;else{switch(w0(r)){case 1:n=op;break;case 4:n=y0;break;case 16:n=Wa;break;case 536870912:n=_0;break;default:n=Wa}n=Hw(n,Fw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fw(t,e){if(Da=-1,ba=0,Q&6)throw Error(E(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=qa(t,t===Me?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=Q;Q|=2;var s=$w();(Me!==t||je!==e)&&(dn=null,rs=we()+500,Vr(t,e));do try{Yk();break}catch(l){Uw(t,l)}while(1);vp(),lu.current=s,Q=i,Ce!==null?e=0:(Me=null,je=0,e=ke)}if(e!==0){if(e===2&&(i=Rd(t),i!==0&&(r=i,e=tf(t,i))),e===1)throw n=Bo,Vr(t,0),jn(t,r),vt(t,we()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Kk(i)&&(e=cu(t,r),e===2&&(s=Rd(t),s!==0&&(r=s,e=tf(t,s))),e===1))throw n=Bo,Vr(t,0),jn(t,r),vt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:xr(t,ft,dn);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=bp+500-we(),10<e)){if(qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ld(xr.bind(null,t,ft,dn),e);break}xr(t,ft,dn);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gk(r/1960))-r,10<r){t.timeoutHandle=Ld(xr.bind(null,t,ft,dn),r);break}xr(t,ft,dn);break;case 5:xr(t,ft,dn);break;default:throw Error(E(329))}}}return vt(t,we()),t.callbackNode===n?Fw.bind(null,t):null}function tf(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=cu(t,e),t!==2&&(e=ft,ft=n,e!==null&&nf(e)),t}function nf(t){ft===null?ft=t:ft.push.apply(ft,t)}function Kk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~Dp,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function Ay(t){if(Q&6)throw Error(E(327));zi();var e=qa(t,0);if(!(e&1))return vt(t,we()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=Rd(t);r!==0&&(e=r,n=tf(t,r))}if(n===1)throw n=Bo,Vr(t,0),jn(t,e),vt(t,we()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ft,dn),vt(t,we()),null}function Lp(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(rs=we()+500,rc&&Cr())}}function Xr(t){Yn!==null&&Yn.tag===0&&!(Q&6)&&zi();var e=Q;Q|=1;var n=bt.transition,r=Z;try{if(bt.transition=null,Z=1,t)return t()}finally{Z=r,bt.transition=n,Q=e,!(Q&6)&&Cr()}}function Mp(){Ct=Di.current,oe(Di)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tk(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(gp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xa();break;case 3:ts(),oe(yt),oe(nt),Ip();break;case 5:Tp(r);break;case 4:ts();break;case 13:oe(de);break;case 19:oe(de);break;case 10:wp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(Me=t,Ce=t=or(t.current,null),je=Ct=e,ke=0,Bo=null,Dp=lc=Yr=0,ft=co=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function Uw(t,e){do{var n=Ce;try{if(vp(),Aa.current=ou,su){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(Qr=0,Oe=Te=fe=null,ao=!1,Uo=0,Op.current=null,n===null||n.return===null){ke=1,Bo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=je,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=yy(o);if(m!==null){m.flags&=-257,_y(m,o,l,s,e),m.mode&1&&gy(s,u,e),e=m,a=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(a),e.updateQueue=_}else y.add(a);break e}else{if(!(e&1)){gy(s,u,e),Fp();break e}a=Error(E(426))}}else if(ae&&l.mode&1){var w=yy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),_y(w,o,l,s,e),yp(ns(a,l));break e}}s=a=ns(a,l),ke!==4&&(ke=2),co===null?co=[s]:co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ew(s,a,e);uy(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Sw(s,l,e);uy(s,v);break e}}s=s.return}while(s!==null)}Bw(n)}catch(I){e=I,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function $w(){var t=lu.current;return lu.current=ou,t===null?ou:t}function Fp(){(ke===0||ke===3||ke===2)&&(ke=4),Me===null||!(Yr&268435455)&&!(lc&268435455)||jn(Me,je)}function cu(t,e){var n=Q;Q|=2;var r=$w();(Me!==t||je!==e)&&(dn=null,Vr(t,e));do try{Qk();break}catch(i){Uw(t,i)}while(1);if(vp(),Q=n,lu.current=r,Ce!==null)throw Error(E(261));return Me=null,je=0,ke}function Qk(){for(;Ce!==null;)Vw(Ce)}function Yk(){for(;Ce!==null&&!EI();)Vw(Ce)}function Vw(t){var e=jw(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?Bw(t):Ce=e,Op.current=null}function Bw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jk(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ce=null;return}}else if(n=zk(n,e,Ct),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);ke===0&&(ke=5)}function xr(t,e,n){var r=Z,i=bt.transition;try{bt.transition=null,Z=1,Xk(t,e,n,r)}finally{bt.transition=i,Z=r}return null}function Xk(t,e,n,r){do zi();while(Yn!==null);if(Q&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PI(t,s),t===Me&&(Ce=Me=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,Hw(Wa,function(){return zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=Z;Z=1;var l=Q;Q|=4,Op.current=null,Wk(t,n),Lw(n,t),yk(Dd),Ga=!!Od,Dd=Od=null,t.current=n,qk(n),SI(),Q=l,Z=o,bt.transition=s}else t.current=n;if(ca&&(ca=!1,Yn=t,uu=i),s=t.pendingLanes,s===0&&(ir=null),II(n.stateNode),vt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,t=Zd,Zd=null,t;return uu&1&&t.tag!==0&&zi(),s=t.pendingLanes,s&1?t===ef?ho++:(ho=0,ef=t):ho=0,Cr(),null}function zi(){if(Yn!==null){var t=w0(uu),e=bt.transition,n=Z;try{if(bt.transition=null,Z=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,uu=0,Q&6)throw Error(E(331));var i=Q;for(Q|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:uo(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,m=c.return;if(Ow(c),c===u){x=null;break}if(d!==null){d.return=m,x=d;break}x=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=f;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oc(9,l)}}catch(I){ge(l,l.return,I)}if(l===o){x=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,x=v;break e}x=l.return}}if(Q=i,Cr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Ju,t)}catch{}r=!0}return r}finally{Z=n,bt.transition=e}}return!1}function Py(t,e,n){e=ns(n,e),e=Ew(t,e,1),t=rr(t,e,1),e=at(),t!==null&&(pl(t,1,e),vt(t,e))}function ge(t,e,n){if(t.tag===3)Py(t,t,n);else for(;e!==null;){if(e.tag===3){Py(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=ns(n,t),t=Sw(e,t,1),e=rr(e,t,1),t=at(),e!==null&&(pl(e,1,t),vt(e,t));break}}e=e.return}}function Jk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(je&n)===n&&(ke===4||ke===3&&(je&130023424)===je&&500>we()-bp?Vr(t,0):Dp|=n),vt(t,e)}function zw(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=at();t=Rn(t,e),t!==null&&(pl(t,e,n),vt(t,n))}function Zk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zw(t,n)}function eR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),zw(t,n)}var jw;jw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,Bk(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ae&&e.flags&1048576&&q0(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var i=Ji(e,nt.current);Bi(e,n),i=Rp(null,e,r,t,i,n);var s=Np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,Ja(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sp(e),i.updater=ic,e.stateNode=i,i._reactInternals=e,zd(e,r,t,n),e=Wd(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&mp(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nR(r),t=Vt(r,t),i){case 0:e=Hd(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=vy(null,e,r,t,n);break e;case 14:e=wy(null,e,r,Vt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ey(t,e,r,i,n);case 3:e:{if(kw(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Y0(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ns(Error(E(423)),e),e=Sy(t,e,r,n,i);break e}else if(r!==i){i=ns(Error(E(424)),e),e=Sy(t,e,r,n,i);break e}else for(Tt=nr(e.stateNode.containerInfo.firstChild),kt=e,ae=!0,zt=null,n=ew(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===i){e=Nn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return tw(e),t===null&&$d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),Iw(t,e),st(t,e,o,n),e.child;case 6:return t===null&&$d(e),null;case 13:return Rw(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=es(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),vy(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(tu,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!yt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=wn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Vd(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=Mt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),wy(t,e,r,i,n);case 15:return Cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Oa(t,e),e.tag=1,_t(r)?(t=!0,Ja(e)):t=!1,Bi(e,n),J0(e,r,i),zd(e,r,i,n),Wd(null,e,r,!0,t,n);case 19:return Nw(t,e,n);case 22:return Tw(t,e,n)}throw Error(E(156,e.tag))};function Hw(t,e){return g0(t,e)}function tR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new tR(t,e,n,r)}function Up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nR(t){if(typeof t=="function")return Up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===ip)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Br(n.children,i,s,e);case np:o=8,i|=8;break;case dd:return t=Dt(12,n,e,i|2),t.elementType=dd,t.lanes=s,t;case fd:return t=Dt(13,n,e,i),t.elementType=fd,t.lanes=s,t;case pd:return t=Dt(19,n,e,i),t.elementType=pd,t.lanes=s,t;case Zv:return ac(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xv:o=10;break e;case Jv:o=9;break e;case rp:o=11;break e;case ip:o=14;break e;case Vn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function ac(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=Zv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ph(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Oh(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dh(0),this.expirationTimes=dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,r,i,s,o,l,a){return t=new rR(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sp(s),t}function iR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ww(t){if(!t)return fr;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(_t(n))return H0(t,n,e)}return e}function qw(t,e,n,r,i,s,o,l,a){return t=$p(n,r,!0,t,i,s,o,l,a),t.context=Ww(null),n=t.current,r=at(),i=sr(n),s=wn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,pl(t,i,r),vt(t,r),t}function uc(t,e,n,r){var i=e.current,s=at(),o=sr(i);return n=Ww(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Yt(t,i,o,s),xa(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vp(t,e){Oy(t,e),(t=t.alternate)&&Oy(t,e)}function sR(){return null}var Gw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bp(t){this._internalRoot=t}cc.prototype.render=Bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));uc(t,e,null,null)};cc.prototype.unmount=Bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){uc(null,t,null,null)}),e[kn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=C0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&I0(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dy(){}function oR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hu(o);s.call(u)}}var o=qw(e,r,t,0,null,!1,!1,"",Dy);return t._reactRootContainer=o,t[kn]=o.current,Do(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=hu(a);l.call(u)}}var a=$p(t,0,!1,null,null,!1,!1,"",Dy);return t._reactRootContainer=a,t[kn]=a.current,Do(t.nodeType===8?t.parentNode:t),Xr(function(){uc(e,a,n,r)}),a}function dc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=hu(o);l.call(a)}}uc(e,o,t,i)}else o=oR(n,e,t,i,r);return hu(o)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(lp(e,n|1),vt(e,we()),!(Q&6)&&(rs=we()+500,Cr()))}break;case 13:Xr(function(){var r=Rn(t,1);if(r!==null){var i=at();Yt(r,t,1,i)}}),Vp(t,1)}};ap=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=at();Yt(e,t,134217728,n)}Vp(t,134217728)}};S0=function(t){if(t.tag===13){var e=sr(t),n=Rn(t,e);if(n!==null){var r=at();Yt(n,t,e,r)}Vp(t,e)}};C0=function(){return Z};T0=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};Td=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nc(r);if(!i)throw Error(E(90));t0(r),yd(r,i)}}}break;case"textarea":r0(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};c0=Lp;h0=Xr;var lR={usingClientEntryPoint:!1,Events:[gl,Ri,nc,a0,u0,Lp]},zs={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aR={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p0(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||sR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Ju=ha.inject(aR),on=ha}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lR;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(E(200));return iR(t,e,null,n)};xt.createRoot=function(t,e){if(!zp(t))throw Error(E(299));var n=!1,r="",i=Gw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,r,i),t[kn]=e.current,Do(t.nodeType===8?t.parentNode:t),new Bp(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=p0(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Xr(t)};xt.hydrate=function(t,e,n){if(!hc(e))throw Error(E(200));return dc(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Gw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qw(e,null,t,1,n??null,i,!1,s,o),t[kn]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cc(e)};xt.render=function(t,e,n){if(!hc(e))throw Error(E(200));return dc(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!hc(t))throw Error(E(40));return t._reactRootContainer?(Xr(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};xt.unstable_batchedUpdates=Lp;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hc(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return dc(t,e,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=xt})(sI);var by=ud;ad.createRoot=by.createRoot,ad.hydrateRoot=by.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw ws(e)},ws=function(t){return new Error("Firebase Database ("+Kw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const m=l<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yw=function(t){const e=Qw(t);return jp.encodeByteArray(e,!0)},du=function(t){return Yw(t).replace(/\./g,"")},fu=function(t){try{return jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return Xw(void 0,t)}function Xw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hR(n)||(t[n]=Xw(t[n],e[n]));return t}function hR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=()=>dR().__FIREBASE_DEFAULTS__,pR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fu(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return fR()||pR()||mR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jw=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hp=t=>{const e=Jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gR=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},Zw=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[du(JSON.stringify(n)),du(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function yR(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _R(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vR(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tE(){return Kw.NODE_ADMIN===!0}function wR(){try{return typeof indexedDB=="object"}catch{return!1}}function ER(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SR,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new hn(i,l,r)}}function CR(t,e){return t.replace(TR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=zo(fu(s[0])||""),n=zo(fu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},IR=function(t){const e=nE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kR=function(t){const e=nE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function is(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ly(s)&&Ly(o)){if(!mu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):h<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function NR(t,e){const n=new xR(t,e);return n.subscribe.bind(n)}class xR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dh),i.error===void 0&&(i.error=Dh),i.complete===void 0&&(i.complete=Dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dh(){}function Gp(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bR(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DR(t){return t===Ar?void 0:t}function bR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const MR={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},FR=Y.INFO,UR={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},$R=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=FR,this._logHandler=$R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const VR=(t,e)=>e.some(n=>t instanceof n);let My,Fy;function BR(){return My||(My=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zR(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rE=new WeakMap,sf=new WeakMap,iE=new WeakMap,bh=new WeakMap,Kp=new WeakMap;function jR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rE.set(n,t)}).catch(()=>{}),Kp.set(e,t),e}function HR(t){if(sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sf.set(t,e)}let of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WR(t){of=t(of)}function qR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lh(this),e,...n);return iE.set(r,e.sort?e.sort():[e]),lr(r)}:zR().includes(t)?function(...e){return t.apply(Lh(this),e),lr(rE.get(this))}:function(...e){return lr(t.apply(Lh(this),e))}}function GR(t){return typeof t=="function"?qR(t):(t instanceof IDBTransaction&&HR(t),VR(t,BR())?new Proxy(t,of):t)}function lr(t){if(t instanceof IDBRequest)return jR(t);if(bh.has(t))return bh.get(t);const e=GR(t);return e!==t&&(bh.set(t,e),Kp.set(e,t)),e}const Lh=t=>Kp.get(t);function KR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(lr(o.result),a.oldVersion,a.newVersion,lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const QR=["get","getKey","getAll","getAllKeys","count"],YR=["put","add","delete","clear"],Mh=new Map;function Uy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mh.get(e))return Mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QR.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Mh.set(e,s),s}WR(t=>({...t,get:(e,n,r)=>Uy(e,n)||t.get(e,n,r),has:(e,n)=>!!Uy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lf="@firebase/app",$y="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new gc("@firebase/app"),ZR="@firebase/app-compat",eN="@firebase/analytics-compat",tN="@firebase/analytics",nN="@firebase/app-check-compat",rN="@firebase/app-check",iN="@firebase/auth",sN="@firebase/auth-compat",oN="@firebase/database",lN="@firebase/database-compat",aN="@firebase/functions",uN="@firebase/functions-compat",cN="@firebase/installations",hN="@firebase/installations-compat",dN="@firebase/messaging",fN="@firebase/messaging-compat",pN="@firebase/performance",mN="@firebase/performance-compat",gN="@firebase/remote-config",yN="@firebase/remote-config-compat",_N="@firebase/storage",vN="@firebase/storage-compat",wN="@firebase/firestore",EN="@firebase/firestore-compat",SN="firebase",CN="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="[DEFAULT]",TN={[lf]:"fire-core",[ZR]:"fire-core-compat",[tN]:"fire-analytics",[eN]:"fire-analytics-compat",[rN]:"fire-app-check",[nN]:"fire-app-check-compat",[iN]:"fire-auth",[sN]:"fire-auth-compat",[oN]:"fire-rtdb",[lN]:"fire-rtdb-compat",[aN]:"fire-fn",[uN]:"fire-fn-compat",[cN]:"fire-iid",[hN]:"fire-iid-compat",[dN]:"fire-fcm",[fN]:"fire-fcm-compat",[pN]:"fire-perf",[mN]:"fire-perf-compat",[gN]:"fire-rc",[yN]:"fire-rc-compat",[_N]:"fire-gcs",[vN]:"fire-gcs-compat",[wN]:"fire-fst",[EN]:"fire-fst-compat","fire-js":"fire-js",[SN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,uf=new Map;function IN(t,e){try{t.container.addComponent(e)}catch(n){Jr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(uf.has(e))return Jr.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,t);for(const n of gu.values())IN(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new _l("app","Firebase",kN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=CN;function sE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:af,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=gR()),!n)throw ar.create("no-options");const s=gu.get(i);if(s){if(mu(n,s.options)&&mu(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new LR(i);for(const a of uf.values())o.addComponent(a);const l=new RN(n,r,o);return gu.set(i,l),l}function yc(t=af){const e=gu.get(t);if(!e&&t===af)return sE();if(!e)throw ar.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=TN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jr.warn(l.join(" "));return}pr(new xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="firebase-heartbeat-database",xN=1,jo="firebase-heartbeat-store";let Fh=null;function oE(){return Fh||(Fh=KR(NN,xN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jo)}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Fh}async function AN(t){try{return(await oE()).transaction(jo).objectStore(jo).get(lE(t))}catch(e){if(e instanceof hn)Jr.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jr.warn(n.message)}}}async function Vy(t,e){try{const r=(await oE()).transaction(jo,"readwrite");return await r.objectStore(jo).put(e,lE(t)),r.done}catch(n){if(n instanceof hn)Jr.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jr.warn(r.message)}}}function lE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=1024,ON=30*24*60*60*1e3;class DN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=By();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ON}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=By(),{heartbeatsToSend:n,unsentEntries:r}=bN(this._heartbeatsCache.heartbeats),i=du(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function By(){return new Date().toISOString().substring(0,10)}function bN(t,e=PN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wR()?ER().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zy(t){return du(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){pr(new xn("platform-logger",e=>new XR(e),"PRIVATE")),pr(new xn("heartbeat",e=>new DN(e),"PRIVATE")),Lt(lf,$y,t),Lt(lf,$y,"esm2017"),Lt("fire-js","")}MN("");var FN="firebase",UN="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(FN,UN,"app");function Qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $N=aE,uE=new _l("auth","Firebase",aE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new gc("@firebase/auth");function Ma(t,...e){jy.logLevel<=Y.ERROR&&jy.error(`Auth (${hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw Yp(t,...e)}function an(t,...e){return Yp(t,...e)}function VN(t,e,n){const r=Object.assign(Object.assign({},$N()),{[e]:n});return new _l("auth","Firebase",r).create(e,{appName:t.name})}function Yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uE.create(t,...e)}function M(t,e,...n){if(!t)throw Yp(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ma(e),new Error(e)}function An(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=Hy.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hy.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e){const n=vl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mu(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function zN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jN(){return Wy()==="http:"||Wy()==="https:"}function Wy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jN()||_R()||"connection"in navigator)?navigator.onLine:!0}function WN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=qp()||eE()}get(){return HN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new wl(3e4,6e4);function El(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ss(t,e,n,r,i={}){return hE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Es(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),cE.fetch()(dE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function hE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qN),e);try{const i=new KN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw da(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VN(t,c,u);Zt(t,c)}}catch(i){if(i instanceof hn)throw i;Zt(t,"network-request-failed")}}async function Sl(t,e,n,r,i={}){const s=await Ss(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xp(t.config,i):`${t.config.apiScheme}://${i}`}class KN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),GN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function YN(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XN(t,e=!1){const n=ce(t),r=await n.getIdToken(e),i=Jp(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fo(Uh(i.auth_time)),issuedAtTime:fo(Uh(i.iat)),expirationTime:fo(Uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uh(t){return Number(t)*1e3}function Jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=fu(n);return i?JSON.parse(i):(Ma("Failed to decode base64 JWT payload"),null)}catch(i){return Ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function JN(t){const e=Jp(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&ZN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ss(t,YN(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rx(s.providerUserInfo):[],l=nx(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new fE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function tx(t){const e=ce(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rx(t){return t.map(e=>{var{providerId:n}=e,r=Qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e){const n=await hE(t,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ix(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ho;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ex(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ss(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XN(this,e)}reload(){return tx(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ss(this,QN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:v,isAnonymous:I,providerData:R,stsTokenManager:N}=n;M(g&&N,e,"internal-error");const P=Ho.fromJSON(this.name,N);M(typeof g=="string",e,"internal-error"),$n(h,e.name),$n(d,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof I=="boolean",e,"internal-error"),$n(m,e.name),$n(y,e.name),$n(_,e.name),$n(w,e.name),$n(p,e.name),$n(f,e.name);const J=new zr({uid:g,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(H=>Object.assign({},H))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ho;i.updateFromServerResponse(n);const s=new zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pE.type="NONE";const qy=pE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(yn(qy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(qy);const o=Fa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const h=zr._fromJSON(e,c);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ji(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vE(e))return"Blackberry";if(wE(e))return"Webos";if(Zp(e))return"Safari";if((e.includes("chrome/")||gE(e))&&!e.includes("edge/"))return"Chrome";if(_E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mE(t=rt()){return/firefox\//i.test(t)}function Zp(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gE(t=rt()){return/crios\//i.test(t)}function yE(t=rt()){return/iemobile/i.test(t)}function _E(t=rt()){return/android/i.test(t)}function vE(t=rt()){return/blackberry/i.test(t)}function wE(t=rt()){return/webos/i.test(t)}function _c(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sx(t=rt()){var e;return _c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ox(){return vR()&&document.documentMode===10}function EE(t=rt()){return _c(t)||_E(t)||wE(t)||vE(t)||/windows phone/i.test(t)||yE(t)}function lx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e=[]){let n;switch(t){case"Browser":n=Gy(rt());break;case"Worker":n=`${Gy(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ce(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _l("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Cl(t){return ce(t)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=NR(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cx(t,e,n){const r=Cl(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=CE(e),{host:o,port:l}=hx(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dx()}function CE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hx(t){const e=CE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qy(o)}}}function Qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function fx(t,e){return Ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){return Sl(t,"POST","/v1/accounts:signInWithPassword",El(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",El(t,e))}async function gx(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",El(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends em{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return px(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mx(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gx(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e){return Sl(t,"POST","/v1/accounts:signInWithIdp",El(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="http://localhost";class Zr extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:yx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vx(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class tm{constructor(e){var n,r,i,s,o,l;const a=Zs(eo(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,h=_x((i=a.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=vx(e);try{return new tm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tm.parseLink(n);return M(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends TE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Tl{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Tl{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Tl{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){return Sl(t,"POST","/v1/accounts:signUp",El(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zr._fromIdTokenResponse(e,r,i),o=Yy(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yy(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _u(e,n,r,i)}}function IE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,s,e,r):s})}async function Ex(t,e,n=!1){const r=await ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ss(t,IE(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Jp(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e,n=!1){const r="signIn",i=await IE(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Cx(t,e){return kE(Cl(t),e)}async function Tx(t,e,n){const r=Cl(t),i=await wx(r,{returnSecureToken:!0,email:e,password:n}),s=await ei._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ix(t,e,n){return Cx(ce(t),Cs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e){return Ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ce(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ss(r,kx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Nx(t,e,n,r){return ce(t).onIdTokenChanged(e,n,r)}function xx(t,e,n){return ce(t).beforeAuthStateChanged(e,n)}function Ax(t,e,n,r){return ce(t).onAuthStateChanged(e,n,r)}function Px(t){return ce(t).signOut()}const vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){const t=rt();return Zp(t)||_c(t)}const Dx=1e3,bx=10;class NE extends RE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ox()&&lx(),this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ox()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NE.type="LOCAL";const Lx=NE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends RE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xE.type="SESSION";const AE=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Mx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=nm("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function Ux(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function $x(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bx(){return PE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="firebaseLocalStorageDb",zx=1,wu="firebaseLocalStorage",DE="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wc(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function jx(){const t=indexedDB.deleteDatabase(OE);return new Il(t).toPromise()}function hf(){const t=indexedDB.open(OE,zx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:DE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await jx(),e(await hf()))})})}async function Xy(t,e,n){const r=wc(t,!0).put({[DE]:e,value:n});return new Il(r).toPromise()}async function Hx(t,e){const n=wc(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function Jy(t,e){const n=wc(t,!0).delete(e);return new Il(n).toPromise()}const Wx=800,qx=3;class bE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(Bx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $x(),!this.activeServiceWorker)return;this.sender=new Fx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hf();return await Xy(e,vu,"1"),await Jy(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wc(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bE.type="LOCAL";const Gx=bE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kx().appendChild(r)})}function Yx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t,e){return e?yn(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jx(t){return kE(t.auth,new rm(t),t.bypassAuthState)}function Zx(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Sx(n,new rm(t),t.bypassAuthState)}async function eA(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Ex(n,new rm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jx;case"linkViaPopup":case"linkViaRedirect":return eA;case"reauthViaPopup":case"reauthViaRedirect":return Zx;default:Zt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=new wl(2e3,1e4);class bi extends LE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tA.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="pendingRedirect",Ua=new Map;class rA extends LE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await iA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iA(t,e){const n=lA(e),r=oA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sA(t,e){Ua.set(t._key(),e)}function oA(t){return yn(t._redirectPersistence)}function lA(t){return Fa(nA,t.config.apiKey,t.name)}async function aA(t,e,n=!1){const r=Cl(t),i=Xx(r,e),o=await new rA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=10*60*1e3;class cA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ME(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ME({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ME(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pA=/^https?/;async function mA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dA(t);for(const n of e)try{if(gA(n))return}catch{}Zt(t,"unauthorized-domain")}function gA(t){const e=cf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pA.test(n))return!1;if(fA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new wl(3e4,6e4);function e_(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _A(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(an(t,"network-request-failed"))},timeout:yA.get()})}if(!((i=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=un().gapi)===null||s===void 0)&&s.load)o();else{const l=Yx("iframefcb");return un()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},Qx(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw $a=null,e})}let $a=null;function vA(t){return $a=$a||_A(t),$a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new wl(5e3,15e3),EA="__/auth/iframe",SA="emulator/auth/iframe",CA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IA(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xp(e,SA):`https://${t.config.authDomain}/${EA}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=TA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function kA(t){const e=await vA(t),n=un().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:IA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=un().setTimeout(()=>{s(o)},wA.get());function a(){un().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NA=500,xA=600,AA="_blank",PA="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OA(t,e,n,r=NA,i=xA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},RA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(l=gE(u)?AA:n),mE(u)&&(e=e||PA,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(sx(u)&&l!=="_self")return DA(e||"",l),new t_(null);const h=window.open(e||"",l,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new t_(h)}function DA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",LA="emulator/auth/handler";function n_(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof TE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Tl){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${MA(t)}?${Es(l).slice(1)}`}function MA({config:t}){return t.emulator?Xp(t,LA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class FA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=aA,this._overrideRedirectResult=sA}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=n_(e,n,r,cf(),i);return OA(e,o,nm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ux(n_(e,n,r,cf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kA(e),r=new cA(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($h,{type:$h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$h];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EE()||Zp()||_c()}}const UA=FA;var r_="@firebase/auth",i_="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BA(t){pr(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(t)},c=new ux(l,a,u);return zN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new xn("auth-internal",e=>{const n=Cl(e.getProvider("auth").getImmediate());return(r=>new $A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(r_,i_,VA(t)),Lt(r_,i_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=5*60,jA=Zw("authIdTokenMaxAge")||zA;let s_=null;const HA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jA)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WA(t=yc()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BN(t,{popupRedirectResolver:UA,persistence:[Gx,Lx,AE]}),r=Zw("authTokenSyncURL");if(r){const s=HA(r);xx(n,s,()=>s(n.currentUser)),Nx(n,o=>s(o))}const i=Jw("auth");return i&&cx(n,`http://${i}`),n}BA("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="firebasestorage.googleapis.com",UE="storageBucket",qA=2*60*1e3,GA=10*60*1e3,KA=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends hn{constructor(e,n,r=0){super(Vh(e),`Firebase Storage: ${n} (${Vh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Vh(t){return"storage/"+t}function im(){const t="An unknown error occurred, please check the error payload for server response.";return new me("unknown",t)}function QA(t){return new me("object-not-found","Object '"+t+"' does not exist.")}function YA(t){return new me("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function XA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me("unauthenticated",t)}function JA(){return new me("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ZA(t){return new me("unauthorized","User does not have permission to access '"+t+"'.")}function $E(){return new me("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function VE(){return new me("canceled","User canceled the upload/download.")}function eP(t){return new me("invalid-url","Invalid URL '"+t+"'.")}function tP(t){return new me("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function nP(){return new me("no-default-bucket","No default bucket found. Did you set the '"+UE+"' property when initializing the app?")}function BE(){return new me("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function rP(){return new me("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function iP(){return new me("no-download-url","The given file does not have any download URLs.")}function sP(t){return new me("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function df(t){return new me("invalid-argument",t)}function zE(){return new me("app-deleted","The Firebase app was deleted.")}function oP(t){return new me("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function po(t,e){return new me("invalid-format","String does not match format '"+t+"': "+e)}function js(t){throw new me("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw tP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===FE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${w}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:m,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<g.length;v++){const I=g[v],R=I.regex.exec(e);if(R){const N=R[I.indices.bucket];let P=R[I.indices.path];P||(P=""),r=new It(N,P),I.postModify(r);break}}if(r==null)throw eP(e);return r}}class lP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(m,a())},w)}function d(){s&&clearTimeout(s)}function m(w,...p){if(u){d();return}if(w){d(),c.call(null,w,...p);return}if(a()||o){d(),c.call(null,w,...p);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function _(w){y||(y=!0,d(),!u&&(i!==null?(w||(l=2),clearTimeout(i),h(0)):w||(l=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function uP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){return t!==void 0}function hP(t){return typeof t=="function"}function dP(t){return typeof t=="object"&&!Array.isArray(t)}function Ec(t){return typeof t=="string"||t instanceof String}function o_(t){return sm()&&t instanceof Blob}function sm(){return typeof Blob<"u"&&!yR()}function l_(t,e,n,r){if(r<e)throw df(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw df(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jr||(jr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r,i,s,o,l,a,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===jr.NO_ERROR,a=s.getStatus();if(!l||HE(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===jr.ABORT;r(!1,new fa(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new fa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());cP(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=im();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?zE():VE();o(a)}else{const a=$E();o(a)}};this.canceled_?n(!1,new fa(!1,null,!0)):this.backoffId_=aP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function pP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _P(t,e,n,r,i,s,o=!0){const l=jE(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return gP(u,e),pP(u,n),mP(u,s),yP(u,r),new fP(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wP(...t){const e=vP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(sm())return new Blob(t);throw new me("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function EP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){if(typeof atob>"u")throw sP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bh{constructor(e,n){this.data=e,this.contentType=n||null}}function CP(t,e){switch(t){case sn.RAW:return new Bh(WE(e));case sn.BASE64:case sn.BASE64URL:return new Bh(qE(t,e));case sn.DATA_URL:return new Bh(IP(e),kP(e))}throw im()}function WE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TP(t){let e;try{e=decodeURIComponent(t)}catch{throw po(sn.DATA_URL,"Malformed data URL.")}return WE(e)}function qE(t,e){switch(t){case sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw po(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw po(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=SP(e)}catch(i){throw i.message.includes("polyfill")?i:po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class GE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw po(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=RP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IP(t){const e=new GE(t);return e.base64?qE(sn.BASE64,e.rest):TP(e.rest)}function kP(t){return new GE(t).contentType}function RP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){let r=0,i="";o_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(o_(this.data_)){const r=this.data_,i=EP(r,e,n);return i===null?null:new Kn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(r,!0)}}static getBlob(...e){if(sm()){const n=e.map(r=>r instanceof Kn?r.data_:r);return new Kn(wP.apply(null,n))}else{const n=e.map(o=>Ec(o)?CP(sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){let e;try{e=JSON.parse(t)}catch{return null}return dP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function QE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){return e}class it{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AP}}let pa=null;function PP(t){return!Ec(t)||t.length<2?t:QE(t)}function YE(){if(pa)return pa;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(s,o){return PP(o)}const n=new it("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=r,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),pa=t,pa}function OP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new It(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function DP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return OP(r,t),r}function XE(t,e,n){const r=KE(e);return r===null?null:DP(t,r,n)}function bP(t,e,n,r){const i=KE(e);if(i===null||!Ec(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=kl(d,n,r),y=jE({alt:"media",token:u});return m+y})[0]}function JE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Ts{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){if(!t)throw im()}function om(t,e){function n(r,i){const s=XE(t,i,e);return En(s!==null),s}return n}function LP(t,e){function n(r,i){const s=XE(t,i,e);return En(s!==null),bP(s,i,t.host,t._protocol)}return n}function Rl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=JA():i=XA():n.getStatus()===402?i=YA(t.bucket):n.getStatus()===403?i=ZA(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ZE(t){const e=Rl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=QA(t.path)),s.serverResponse=i.serverResponse,s}return n}function MP(t,e,n){const r=e.fullServerUrl(),i=kl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Ts(i,s,om(t,n),o);return l.errorHandler=ZE(e),l}function FP(t,e,n){const r=e.fullServerUrl(),i=kl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Ts(i,s,LP(t,n),o);return l.errorHandler=ZE(e),l}function UP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function e1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UP(null,e)),r}function $P(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let v=0;v<2;v++)g=g+Math.random().toString().slice(2);return g}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=e1(e,r,i),c=JE(u,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+a+"--",m=Kn.getBlob(h,r,d);if(m===null)throw BE();const y={name:u.fullPath},_=kl(s,t.host,t._protocol),w="POST",p=t.maxUploadRetryTime,f=new Ts(_,w,om(t,n),p);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=Rl(e),f}class Eu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function lm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{En(!1)}return En(!!n&&(e||["active"]).indexOf(n)!==-1),n}function VP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=e1(e,r,i),l={name:o.fullPath},a=kl(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=JE(o,n),d=t.maxUploadRetryTime;function m(_){lm(_);let w;try{w=_.getResponseHeader("X-Goog-Upload-URL")}catch{En(!1)}return En(Ec(w)),w}const y=new Ts(a,u,m,d);return y.urlParams=l,y.headers=c,y.body=h,y.errorHandler=Rl(e),y}function BP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=lm(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{En(!1)}h||En(!1);const d=Number(h);return En(!isNaN(d)),new Eu(d,r.size(),c==="final")}const o="POST",l=t.maxUploadRetryTime,a=new Ts(n,o,s,l);return a.headers=i,a.errorHandler=Rl(e),a}const a_=256*1024;function zP(t,e,n,r,i,s,o,l){const a=new Eu(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw rP();const u=a.total-a.current;let c=u;i>0&&(c=Math.min(c,i));const h=a.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const y={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},_=r.slice(h,d);if(_===null)throw BE();function w(v,I){const R=lm(v,["active","final"]),N=a.current+c,P=r.size();let J;return R==="final"?J=om(e,s)(v,I):J=null,new Eu(N,P,R==="final",J)}const p="POST",f=e.maxUploadRetryTime,g=new Ts(n,p,w,f);return g.headers=y,g.body=_.uploadData(),g.progressCallback=l||null,g.errorHandler=Rl(t),g}const dt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function zh(t){switch(t){case"running":case"pausing":case"canceling":return dt.RUNNING;case"paused":return dt.PAUSED;case"success":return dt.SUCCESS;case"canceled":return dt.CANCELED;case"error":return dt.ERROR;default:return dt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n,r){if(hP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class HP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WP extends HP{initXhr(){this.xhr_.responseType="text"}}function vi(){return new WP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=YE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(HE(i.status,[]))if(s)i=$E();else{this.sleepTime=Math.max(this.sleepTime*2,KA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=VP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=BP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,vi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=a_*this._chunkMultiplier,n=new Eu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=zP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,vi,i,s,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){a_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=MP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,vi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=$P(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=VE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=zh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new jP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(zh(this._state)){case dt.SUCCESS:yi(this._resolve.bind(null,this.snapshot))();break;case dt.CANCELED:case dt.ERROR:const n=this._reject;yi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(zh(this._state)){case dt.RUNNING:case dt.PAUSED:e.next&&yi(e.next.bind(e,this.snapshot))();break;case dt.SUCCESS:e.complete&&yi(e.complete.bind(e))();break;case dt.CANCELED:case dt.ERROR:e.error&&yi(e.error.bind(e,this._error))();break;default:e.error&&yi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QE(this._location.path)}get storage(){return this._service}get parent(){const e=NP(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oP(e)}}function GP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new qP(t,new Kn(e),n)}function KP(t){t._throwIfRoot("getDownloadURL");const e=FP(t.storage,t._location,YE());return t.storage.makeRequestWithTokens(e,vi).then(n=>{if(n===null)throw iP();return n})}function QP(t,e){const n=xP(t._location.path,e),r=new It(t._location.bucket,n);return new ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){return/^[A-Za-z]+:\/\//.test(t)}function XP(t,e){return new ti(t,e)}function t1(t,e){if(t instanceof am){const n=t;if(n._bucket==null)throw nP();const r=new ti(n,n._bucket);return e!=null?t1(r,e):r}else return e!==void 0?QP(t,e):t}function JP(t,e){if(e&&YP(e)){if(t instanceof am)return XP(t,e);throw df("To use ref(service, url), the first argument must be a Storage instance.")}else return t1(t,e)}function u_(t,e){const n=e==null?void 0:e[UE];return n==null?null:It.makeFromBucketSpec(n,t)}function ZP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Wp(i,t.app.options.projectId))}class am{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=FE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qA,this._maxUploadRetryTime=GA,this._requests=new Set,i!=null?this._bucket=It.makeFromBucketSpec(i,this._host):this._bucket=u_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=u_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lP(zE());{const o=_P(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const c_="@firebase/storage",h_="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="storage";function eO(t,e,n){return t=ce(t),GP(t,e,n)}function tO(t){return t=ce(t),KP(t)}function nO(t,e){return t=ce(t),JP(t,e)}function rO(t=yc(),e){t=ce(t);const r=vl(t,n1).getImmediate({identifier:e}),i=Hp("storage");return i&&iO(r,...i),r}function iO(t,e,n,r={}){ZP(t,e,n,r)}function sO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new am(n,r,i,e,hi)}function oO(){pr(new xn(n1,sO,"PUBLIC").setMultipleInstances(!0)),Lt(c_,h_,""),Lt(c_,h_,"esm2017")}oO();const d_="@firebase/database",f_="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r1="";function lO(t){r1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aO(e)}}catch{}return new uO},Lr=i1("localStorage"),ff=i1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new gc("@firebase/database"),cO=function(){let t=1;return function(){return t++}}(),s1=function(t){const e=PR(t),n=new RR;n.update(e);const r=n.digest();return jp.encodeByteArray(r)},Nl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Nl.apply(null,r):typeof r=="object"?e+=be(r):e+=r,e+=" "}return e};let Hr=null,p_=!0;const hO=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wi.logLevel=Y.VERBOSE,Hr=Wi.log.bind(Wi),e&&ff.set("logging_enabled",!0)):typeof t=="function"?Hr=t:(Hr=null,ff.remove("logging_enabled"))},Xe=function(...t){if(p_===!0&&(p_=!1,Hr===null&&ff.get("logging_enabled")===!0&&hO(!0)),Hr){const e=Nl.apply(null,t);Hr(e)}},xl=function(t){return function(...e){Xe(t,...e)}},pf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nl(...t);Wi.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${Nl(...t)}`;throw Wi.error(e),new Error(e)},wt=function(...t){const e="FIREBASE WARNING: "+Nl(...t);Wi.warn(e)},dO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},o1=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},os="[MIN_NAME]",ni="[MAX_NAME]",Is=function(t,e){if(t===e)return 0;if(t===os||e===ni)return-1;if(e===os||t===ni)return 1;{const n=m_(t),r=m_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},pO=function(t,e){return t===e?0:t<e?-1:1},Hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},um=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=be(e[r]),n+=":",n+=um(t[e[r]]);return n+="}",n},l1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const a1=function(t){C(!o1(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},mO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _O=new RegExp("^-?(0*)\\d{1,10}$"),vO=-2147483648,wO=2147483647,m_=function(t){if(_O.test(t)){const e=Number(t);if(e>=vO&&e<=wO)return e}return null},ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},EO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class qi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="5",u1="v",c1="s",h1="r",d1="f",f1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,p1="ls",m1="p",mf="ac",g1="websocket",y1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function v1(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===g1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===y1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TO(t)&&(n.ns=t.namespace);const i=[];return Et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={},Hh={};function hm(t){const e=t.toString();return jh[e]||(jh[e]=new IO),jh[e]}function kO(t,e){const n=t.toString();return Hh[n]||(Hh[n]=e()),Hh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ks(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="start",NO="close",xO="pLPCommand",AO="pRTLPCB",w1="id",E1="pw",S1="ser",PO="cb",OO="seg",DO="ts",bO="d",LO="dframe",C1=1870,T1=30,MO=C1-T1,FO=25e3,UO=3e4;class Li{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xl(e),this.stats_=hm(n),this.urlFn=a=>(this.appCheckToken&&(a[mf]=this.appCheckToken),v1(n,y1,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new RO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UO)),fO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dm((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===g_)this.id=l,this.password=a;else if(o===NO)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[g_]="t",r[S1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u1]=cm,this.transportSessionId&&(r[c1]=this.transportSessionId),this.lastSessionId&&(r[p1]=this.lastSessionId),this.applicationId&&(r[m1]=this.applicationId),this.appCheckToken&&(r[mf]=this.appCheckToken),typeof location<"u"&&location.hostname&&f1.test(location.hostname)&&(r[h1]=d1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mO()&&!gO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yw(n),i=l1(r,MO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[LO]="t",r[w1]=e,r[E1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cO(),window[xO+this.uniqueCallbackIdentifier]=e,window[AO+this.uniqueCallbackIdentifier]=n,this.myIFrame=dm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Xe("frame writing exception"),l.stack&&Xe(l.stack),Xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w1]=this.myID,e[E1]=this.myPW,e[S1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+T1+r.length<=C1;){const o=this.pendingSegs.shift();r=r+"&"+OO+i+"="+o.seg+"&"+DO+i+"="+o.ts+"&"+bO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(FO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=16384,VO=45e3;let Su=null;typeof MozWebSocket<"u"?Su=MozWebSocket:typeof WebSocket<"u"&&(Su=WebSocket);class Ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xl(this.connId),this.stats_=hm(n),this.connURL=Ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[u1]=cm,typeof location<"u"&&location.hostname&&f1.test(location.hostname)&&(o[h1]=d1),n&&(o[c1]=n),r&&(o[p1]=r),i&&(o[mf]=i),s&&(o[m1]=s),v1(e,g1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lr.set("previous_websocket_failure",!0);try{let r;tE(),this.mySock=new Su(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Su!==null&&!Ht.forceDisallow_}static previouslyFailed(){return Lr.isInMemoryStorage||Lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=zo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l1(n,$O);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ht.responsesRequiredToBeHealthy=2;Ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Li,Ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ht&&Ht.isAvailable();let r=n&&!Ht.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ht];else{const i=this.transports_=[];for(const s of qo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=6e4,zO=5e3,jO=10*1024,HO=100*1024,Wh="t",y_="d",WO="s",__="r",qO="e",v_="o",w_="a",E_="n",S_="p",GO="h";class KO{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xl("c:"+this.id+":"),this.transportManager_=new qo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wh in e){const n=e[Wh];n===w_?this.upgradeIfSecondaryHealthy_():n===__?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===v_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hs("t",e),r=Hs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:S_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:w_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:E_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hs("t",e),r=Hs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hs(Wh,e);if(y_ in e){const r=e[y_];if(n===GO)this.onHandshake_(r);else if(n===E_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WO?this.onConnectionShutdown_(r):n===__?this.onReset_(r):n===qO?pf("Server Error: "+r):n===v_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cm!==r&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:S_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends k1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cu}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=32,T_=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ee("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mr(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function R1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function N1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function x1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function mt(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return mt(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fm(t,e){if(mr(t)!==mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mr(t)>mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class YO{constructor(e,n){this.errorPrefix_=n,this.parts_=N1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=mc(this.parts_[r]);A1(this)}}function XO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mc(e),A1(t)}function JO(t){const e=t.parts_.pop();t.byteLength_-=mc(e),t.parts_.length>0&&(t.byteLength_-=1)}function A1(t){if(t.byteLength_>T_)throw new Error(t.errorPrefix_+"has a key path longer than "+T_+" bytes ("+t.byteLength_+").");if(t.parts_.length>C_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+C_+") or object contains a cycle "+Pr(t))}function Pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends k1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new pm}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=1e3,ZO=60*5*1e3,I_=30*1e3,eD=1.3,tD=3e4,nD="server_kill",k_=3;class Sn extends I1{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Sn.nextPersistentConnectionId_++,this.log_=xl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ws,this.maxReconnectDelay_=ZO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!tE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(be(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new pc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Sn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const r=is(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=I_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=IR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pf("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tD&&(this.reconnectDelay_=Ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new KO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{wt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(nD)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&wt(h),a())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rf(this.interruptReasons_)&&(this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>um(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=k_&&(this.reconnectDelay_=I_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=k_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+r1.replace(/\./g,"-")]=1,qp()?e["framework.cordova"]=1:eE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cu.getInstance().currentlyOnline();return rf(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(os,e),i=new j(os,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class P1 extends Sc{static get __EMPTY_NODE(){return ma}static set __EMPTY_NODE(e){ma=e}compare(e,n){return Is(e.name,n.name)}isDefinedOn(e){throw ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(ni,ma)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ma)}toString(){return".key"}}const Gi=new P1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class rD{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new rD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e){return Is(t.name,e.name)}function mm(t,e){return Is(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;function sD(t){gf=t}const O1=function(t){return typeof t=="number"?"number:"+a1(t):"string:"+t},D1=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else C(t===gf||t.isEmpty(),"priority of unexpected type.");C(t===gf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),D1(this.priorityNode_)}static set __childrenNodeConstructor(e){R_=e}static get __childrenNodeConstructor(){return R_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:z(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+O1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=a1(this.value_):e+=this.value_,this.lazyHash_=s1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b1,L1;function oD(t){b1=t}function lD(t){L1=t}class aD extends Sc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Is(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(ni,new Ae("[PRIORITY-POST]",L1))}makePost(e,n){const r=b1(e);return new j(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new aD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=Math.log(2);class cD{constructor(e){const n=s=>parseInt(Math.log(s)/uD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tu=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let h,d;if(c===0)return null;if(c===1)return h=t[a],d=n?n(h):h,new De(d,h.node,De.BLACK,null,null);{const m=parseInt(c/2,10)+a,y=i(a,m),_=i(m+1,u);return h=t[m],d=n?n(h):h,new De(d,h.node,De.BLACK,y,_)}},s=function(a){let u=null,c=null,h=t.length;const d=function(y,_){const w=h-y,p=h;h-=y;const f=i(w+1,p),g=t[w],v=n?n(g):g;m(new De(v,g.node,_,null,f))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<a.count;++y){const _=a.nextBitIsOne(),w=Math.pow(2,a.count-(y+1));_?d(w,De.BLACK):(d(w,De.BLACK),d(w,De.RED))}return c},o=new cD(t.length),l=s(o);return new gt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh;const _i={};class _n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(_i&&ye,"ChildrenNode.ts has not been loaded"),qh=qh||new _n({".priority":_i},{".priority":ye}),qh}get(e){const n=is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Tu(r,e.getCompare()):l=_i;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new _n(c,u)}addToIndexes(e,n){const r=pu(this.indexes_,(i,s)=>{const o=is(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===_i)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Tu(l,o.getCompare())}else return _i;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new _n(r,this.indexSet_)}removeFromIndexes(e,n){const r=pu(this.indexes_,i=>{if(i===_i)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new _n(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&D1(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qs||(qs=new L(new gt(mm),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qs}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qs:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?qs:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{C(z(e)!==".priority"||mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,l)=>{n[o]=l.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+O1(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":s1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Al?-1:0}withIndex(e){if(e===Gi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gi?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hD extends L{constructor(){super(new gt(mm),L.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Al=new hD;Object.defineProperties(j,{MIN:{value:new j(os,L.EMPTY_NODE)},MAX:{value:new j(ni,Al)}});P1.__EMPTY_NODE=L.EMPTY_NODE;Ae.__childrenNodeConstructor=L;sD(Al);lD(Al);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=!0;function ze(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,ze(e))}if(!(t instanceof Array)&&dD){const n=[];let r=!1;if(Et(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ze(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return L.EMPTY_NODE;const s=Tu(n,iD,o=>o.name,mm);if(r){const o=Tu(n,ye.getCompare());return new L(s,ze(e),new _n({".priority":o},{".priority":ye}))}else return new L(s,ze(e),_n.Default)}else{let n=L.EMPTY_NODE;return Et(t,(r,i)=>{if(Mn(t,r)&&r.substring(0,1)!=="."){const s=ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ze(e))}}oD(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD extends Sc{constructor(e){super(),this.indexPath_=e,C(!W(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Is(e.name,n.name):s}makePost(e,n){const r=ze(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Al);return new j(ni,e)}toString(){return N1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD extends Sc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Is(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ze(e);return new j(n,r)}toString(){return".value"}}const mD=new pD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){return{type:"value",snapshotNode:t}}function ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Go(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ko(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Go(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ls(n,r)):o.trackChildChange(Ko(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(Go(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ko(i,s,o))}else r.trackChildChange(ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.indexedFilter_=new gm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qo.getStartPost_(e),this.endPost_=Qo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,m)=>h(m,d)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ko(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Go(n,h));const _=l.updateImmediateChild(n,L.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ls(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Go(u.name,u.node)),s.trackChildChange(ls(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:os}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new ym;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _D(t){return t.loadsAllData()?new gm(t.getIndex()):t.hasLimit()?new yD(t):new Qo(t)}function N_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===mD?n="$value":t.index_===Gi?n="$key":(C(t.index_ instanceof fD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function x_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends I1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Iu.getListenId_(e,r),l={};this.listens_[o]=l;const a=N_(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),is(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Iu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=N_(e._queryParams),r=e._path.toString(),i=new pc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=zo(l.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){return{value:null,children:new Map}}function F1(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,ku());const i=t.children.get(r);e=ne(e),F1(i,e,n)}}function yf(t,e,n){t.value!==null?n(e,t.value):wD(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);yf(i,s,n)})}function wD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=10*1e3,SD=30*1e3,CD=5*60*1e3;class TD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ED(e);const r=A_+(SD-A_)*Math.random();mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Et(e,(i,s)=>{s>0&&Mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*CD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function U1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _m(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Gt.ACK_USER_WRITE,this.source=U1()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new Ru(X(),n,this.revert)}}else return C(z(this.path)===e,"operationForChild called for unrelated child."),new Ru(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Yo(this.source,X()):new Yo(this.source,ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Gt.OVERWRITE}operationForChild(e){return W(this.path)?new ri(this.source,X(),this.snap.getImmediateChild(e)):new ri(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Gt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new ri(this.source,X(),n.value):new Xo(this.source,X(),n)}else return C(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xo(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kD(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(gD(o.childName,o.snapshotNode))}),Gs(t,i,"child_removed",e,r,n),Gs(t,i,"child_added",e,r,n),Gs(t,i,"child_moved",s,r,n),Gs(t,i,"child_changed",e,r,n),Gs(t,i,"value",e,r,n),i}function Gs(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>ND(t,l,a)),o.forEach(l=>{const a=RD(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function RD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ND(t,e,n){if(e.childName==null||n.childName==null)throw ws("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e){return{eventCache:t,serverCache:e}}function go(t,e,n,r){return Cc(new ii(e,n,r),t.serverCache)}function $1(t,e,n,r){return Cc(t.eventCache,new ii(e,n,r))}function _f(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;const xD=()=>(Gh||(Gh=new gt(pO)),Gh);class se{constructor(e,n=xD()){this.value=e,this.children=n}static fromObject(e){let n=new se(null);return Et(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(W(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:Ie(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new se(null)}}set(e,n){if(W(e))return new se(n,this.children);{const r=z(e),s=(this.children.get(r)||new se(null)).set(ne(e),n),o=this.children.insert(r,s);return new se(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(W(e))return n;{const r=z(e),s=(this.children.get(r)||new se(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new se(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),Ie(n,i),r):new se(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.writeTree_=e}static empty(){return new Xt(new se(null))}}function yo(t,e,n){if(W(e))return new Xt(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=mt(i,e);return s=s.updateChild(o,n),new Xt(t.writeTree_.set(i,s))}else{const i=new se(n),s=t.writeTree_.setTree(e,i);return new Xt(s)}}}function P_(t,e,n){let r=t;return Et(n,(i,s)=>{r=yo(r,Ie(e,i),s)}),r}function O_(t,e){if(W(e))return Xt.empty();{const n=t.writeTree_.setTree(e,new se(null));return new Xt(n)}}function vf(t,e){return di(t,e)!=null}function di(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function D_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function ur(t,e){if(W(e))return t;{const n=di(t,e);return n!=null?new Xt(new se(n)):new Xt(t.writeTree_.subtree(e))}}function wf(t){return t.writeTree_.isEmpty()}function as(t,e){return V1(X(),t.writeTree_,e)}function V1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=V1(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e){return H1(e,t)}function AD(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yo(t.visibleWrites,e,n)),t.lastWriteId=r}function PD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OD(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&DD(l,r.path)?i=!1:qt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return bD(t),!0;if(r.snap)t.visibleWrites=O_(t.visibleWrites,r.path);else{const l=r.children;Et(l,a=>{t.visibleWrites=O_(t.visibleWrites,Ie(r.path,a))})}return!0}else return!1}function DD(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Ie(t.path,n),e))return!0;return!1}function bD(t){t.visibleWrites=B1(t.allWrites,LD,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function LD(t){return t.visible}function B1(t,e,n){let r=Xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)qt(n,o)?(l=mt(n,o),r=yo(r,l,s.snap)):qt(o,n)&&(l=mt(o,n),r=yo(r,X(),s.snap.getChild(l)));else if(s.children){if(qt(n,o))l=mt(n,o),r=P_(r,l,s.children);else if(qt(o,n))if(l=mt(o,n),W(l))r=P_(r,X(),s.children);else{const a=is(s.children,z(l));if(a){const u=a.getChild(ne(l));r=yo(r,X(),u)}}}else throw ws("WriteRecord should have .snap or .children")}}return r}function z1(t,e,n,r,i){if(!r&&!i){const s=di(t.visibleWrites,e);if(s!=null)return s;{const o=ur(t.visibleWrites,e);if(wf(o))return n;if(n==null&&!vf(o,X()))return null;{const l=n||L.EMPTY_NODE;return as(o,l)}}}else{const s=ur(t.visibleWrites,e);if(!i&&wf(s))return n;if(!i&&n==null&&!vf(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},l=B1(t.allWrites,o,e),a=n||L.EMPTY_NODE;return as(l,a)}}}function MD(t,e,n){let r=L.EMPTY_NODE;const i=di(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ur(t.visibleWrites,e);return n.forEachChild(ye,(o,l)=>{const a=as(ur(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),D_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ur(t.visibleWrites,e);return D_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FD(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(vf(t.visibleWrites,s))return null;{const o=ur(t.visibleWrites,s);return wf(o)?i.getChild(n):as(o,i.getChild(n))}}function UD(t,e,n,r){const i=Ie(e,n),s=di(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ur(t.visibleWrites,i);return as(o,r.getNode().getImmediateChild(n))}else return null}function $D(t,e){return di(t.visibleWrites,e)}function VD(t,e,n,r,i,s,o){let l;const a=ur(t.visibleWrites,e),u=di(a,X());if(u!=null)l=u;else if(n!=null)l=as(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=d.getNext();for(;m&&c.length<i;)h(m,r)!==0&&c.push(m),m=d.getNext();return c}else return[]}function BD(){return{visibleWrites:Xt.empty(),allWrites:[],lastWriteId:-1}}function Nu(t,e,n,r){return z1(t.writeTree,t.treePath,e,n,r)}function Em(t,e){return MD(t.writeTree,t.treePath,e)}function b_(t,e,n,r){return FD(t.writeTree,t.treePath,e,n,r)}function xu(t,e){return $D(t.writeTree,Ie(t.treePath,e))}function zD(t,e,n,r,i,s){return VD(t.writeTree,t.treePath,e,n,r,i,s)}function Sm(t,e,n){return UD(t.writeTree,t.treePath,e,n)}function j1(t,e){return H1(Ie(t.treePath,e),t.writeTree)}function H1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ko(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Go(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ko(r,e.snapshotNode,i.oldSnap));else throw ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const W1=new HD;class Cm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:si(this.viewCache_),s=zD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t){return{filter:t}}function qD(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GD(t,e,n,r,i){const s=new jD;let o,l;if(n.type===Gt.OVERWRITE){const u=n;u.source.fromUser?o=Ef(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Au(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Gt.MERGE){const u=n;u.source.fromUser?o=QD(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Sf(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Gt.ACK_USER_WRITE){const u=n;u.revert?o=JD(t,e,u.path,r,i,s):o=YD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Gt.LISTEN_COMPLETE)o=XD(t,e,n.path,r,s);else throw ws("Unknown operation type: "+n.type);const a=s.getChanges();return KD(e,o,a),{viewCache:o,changes:a}}function KD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_f(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(M1(_f(e)))}}function q1(t,e,n,r,i,s){const o=e.eventCache;if(xu(r,n)!=null)return e;{let l,a;if(W(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=si(e),c=u instanceof L?u:L.EMPTY_NODE,h=Em(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Nu(r,si(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){C(mr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const h=b_(r,n,c,a);h!=null?l=t.filter.updatePriority(c,h):l=o.getNode()}else{const c=ne(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=b_(r,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Sm(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,c,i,s):l=o.getNode()}}return go(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Au(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=z(n);if(!a.isCompleteForPath(n)&&mr(n)>1)return e;const y=ne(n),w=a.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(a.getNode(),w):u=c.updateChild(a.getNode(),m,w,y,W1,null)}const h=$1(e,u,a.isFullyInitialized()||W(n),c.filtersNodes()),d=new Cm(i,h,s);return q1(t,h,n,i,d,l)}function Ef(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Cm(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=go(e,u,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=go(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=ne(n),m=l.getNode().getImmediateChild(h);let y;if(W(d))y=r;else{const _=c.getCompleteChild(h);_!=null?R1(d)===".priority"&&_.getChild(x1(d)).isEmpty()?y=_:y=_.updateChild(d,r):y=L.EMPTY_NODE}if(m.equals(y))a=e;else{const _=t.filter.updateChild(l.getNode(),h,y,d,c,o);a=go(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function L_(t,e){return t.eventCache.isCompleteForChild(e)}function QD(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=Ie(n,a);L_(e,z(c))&&(l=Ef(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=Ie(n,a);L_(e,z(c))||(l=Ef(t,l,c,u,i,s,o))}),l}function M_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Sf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;W(n)?u=r:u=new se(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),y=M_(t,m,d);a=Au(t,a,new ee(h),y,i,s,o,l)}}),u.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!m){const y=e.serverCache.getNode().getImmediateChild(h),_=M_(t,y,d);a=Au(t,a,new ee(h),_,i,s,o,l)}}),a}function YD(t,e,n,r,i,s,o){if(xu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Au(t,e,n,a.getNode().getChild(n),i,s,l,o);if(W(n)){let u=new se(null);return a.getNode().forEachChild(Gi,(c,h)=>{u=u.set(new ee(c),h)}),Sf(t,e,n,u,i,s,l,o)}else return e}else{let u=new se(null);return r.foreach((c,h)=>{const d=Ie(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),Sf(t,e,n,u,i,s,l,o)}}function XD(t,e,n,r,i){const s=e.serverCache,o=$1(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return q1(t,o,n,r,W1,i)}function JD(t,e,n,r,i,s){let o;if(xu(r,n)!=null)return e;{const l=new Cm(r,e,i),a=e.eventCache.getNode();let u;if(W(n)||z(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Nu(r,si(e));else{const h=e.serverCache.getNode();C(h instanceof L,"serverChildren would be complete if leaf node"),c=Em(r,h)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=z(n);let h=Sm(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=a.getImmediateChild(c)),h!=null?u=t.filter.updateChild(a,c,h,ne(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,L.EMPTY_NODE,ne(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nu(r,si(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||xu(r,X())!=null,go(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gm(r.getIndex()),s=_D(r);this.processor_=WD(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,l.getNode(),null),c=new ii(a,o.isFullyInitialized(),i.filtersNodes()),h=new ii(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Cc(h,c),this.eventGenerator_=new ID(this.query_)}get query(){return this.query_}}function eb(t){return t.viewCache_.serverCache.getNode()}function tb(t,e){const n=si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function F_(t){return t.eventRegistrations_.length===0}function nb(t,e){t.eventRegistrations_.push(e)}function U_(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function $_(t,e,n,r){e.type===Gt.MERGE&&e.source.queryId!==null&&(C(si(t.viewCache_),"We should always have a full cache before handling merges"),C(_f(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=GD(t.processor_,i,e,n,r);return qD(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,G1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(ls(s,o))}),n.isFullyInitialized()&&r.push(M1(n.getNode())),G1(t,r,n.getNode(),e)}function G1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return kD(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;class ib{constructor(){this.views=new Map}}function sb(t){C(!Pu,"__referenceConstructor has already been defined"),Pu=t}function ob(){return C(Pu,"Reference.ts has not been loaded"),Pu}function lb(t){return t.views.size===0}function Tm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),$_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat($_(o,e,n,r));return s}}function ab(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Nu(n,i?r:null),a=!1;l?a=!0:r instanceof L?(l=Em(n,r),a=!1):(l=L.EMPTY_NODE,a=!1);const u=Cc(new ii(l,a,!1),new ii(r,i,!1));return new ZD(e,u)}return o}function ub(t,e,n,r,i,s){const o=ab(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nb(o,n),rb(o,n)}function cb(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=gr(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(U_(u,n,r)),F_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(U_(a,n,r)),F_(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!gr(t)&&s.push(new(ob())(e._repo,e._path)),{removed:s,events:o}}function K1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ki(t,e){let n=null;for(const r of t.views.values())n=n||tb(r,e);return n}function Q1(t,e){if(e._queryParams.loadsAllData())return Tc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Y1(t,e){return Q1(t,e)!=null}function gr(t){return Tc(t)!=null}function Tc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;function hb(t){C(!Ou,"__referenceConstructor has already been defined"),Ou=t}function db(){return C(Ou,"Reference.ts has not been loaded"),Ou}let fb=1;class V_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=BD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function X1(t,e,n,r,i){return AD(t.pendingWriteTree_,e,n,r,i),i?Pl(t,new ri(U1(),e,n)):[]}function Mr(t,e,n=!1){const r=PD(t.pendingWriteTree_,e);if(OD(t.pendingWriteTree_,e)){let s=new se(null);return r.snap!=null?s=s.set(X(),!0):Et(r.children,o=>{s=s.set(new ee(o),!0)}),Pl(t,new Ru(r.path,s,n))}else return[]}function Ic(t,e,n){return Pl(t,new ri(_m(),e,n))}function pb(t,e,n){const r=se.fromObject(n);return Pl(t,new Xo(_m(),e,r))}function mb(t,e){return Pl(t,new Yo(_m(),e))}function gb(t,e,n){const r=km(t,n);if(r){const i=Rm(r),s=i.path,o=i.queryId,l=mt(s,e),a=new Yo(vm(o),l);return Nm(t,s,a)}else return[]}function Cf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Y1(o,e))){const a=cb(o,e,n,r);lb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,m)=>gr(m));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=vb(d);for(let y=0;y<m.length;++y){const _=m[y],w=_.query,p=eS(t,_);t.listenProvider_.startListening(_o(w),Du(t,w),p.hashFn,p.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(_o(e),null):u.forEach(d=>{const m=t.queryToTagMap.get(kc(d));t.listenProvider_.stopListening(_o(d),m)}))}wb(t,u)}return l}function yb(t,e,n,r){const i=km(t,r);if(i!=null){const s=Rm(i),o=s.path,l=s.queryId,a=mt(o,e),u=new ri(vm(l),a,n);return Nm(t,o,u)}else return[]}function _b(t,e,n,r){const i=km(t,r);if(i){const s=Rm(i),o=s.path,l=s.queryId,a=mt(o,e),u=se.fromObject(n),c=new Xo(vm(l),a,u);return Nm(t,o,c)}else return[]}function B_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const y=mt(d,i);s=s||Ki(m,y),o=o||gr(m)});let l=t.syncPointTree_.get(i);l?(o=o||gr(l),s=s||Ki(l,X())):(l=new ib,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=Ki(y,X());_&&(s=s.updateImmediateChild(m,_))}));const u=Y1(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=kc(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=Eb();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const c=wm(t.pendingWriteTree_,i);let h=ub(l,e,n,c,s,a);if(!u&&!o&&!r){const d=Q1(l,e);h=h.concat(Sb(t,e,d))}return h}function Im(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=mt(o,e),u=Ki(l,a);if(u)return u});return z1(i,e,s,n,!0)}function Pl(t,e){return J1(e,t.syncPointTree_,null,wm(t.pendingWriteTree_,X()))}function J1(t,e,n,r){if(W(t.path))return Z1(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=Ki(i,X()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=j1(r,o);s=s.concat(J1(l,a,u,c))}return i&&(s=s.concat(Tm(i,t,r,n))),s}}function Z1(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=Ki(i,X()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=j1(r,o),c=t.operationForChild(o);c&&(s=s.concat(Z1(c,l,a,u)))}),i&&(s=s.concat(Tm(i,t,r,n))),s}function eS(t,e){const n=e.query,r=Du(t,n);return{hashFn:()=>(eb(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?gb(t,n._path,r):mb(t,n._path);{const s=yO(i,n);return Cf(t,n,null,s)}}}}function Du(t,e){const n=kc(e);return t.queryToTagMap.get(n)}function kc(t){return t._path.toString()+"$"+t._queryIdentifier}function km(t,e){return t.tagToQueryMap.get(e)}function Rm(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Nm(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=wm(t.pendingWriteTree_,e);return Tm(r,n,i,null)}function vb(t){return t.fold((e,n,r)=>{if(n&&gr(n))return[Tc(n)];{let i=[];return n&&(i=K1(n)),Et(r,(s,o)=>{i=i.concat(o)}),i}})}function _o(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(db())(t._repo,t._path):t}function wb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=kc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Eb(){return fb++}function Sb(t,e,n){const r=e._path,i=Du(t,e),s=eS(t,n),o=t.listenProvider_.startListening(_o(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!gr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,h)=>{if(!W(u)&&c&&gr(c))return[Tc(c).query];{let d=[];return c&&(d=d.concat(K1(c).map(m=>m.query))),Et(h,(m,y)=>{d=d.concat(y)}),d}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(_o(c),Du(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xm(n)}node(){return this.node_}}class Am{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Am(this.syncTree_,n)}node(){return Im(this.syncTree_,this.path_)}}const Cb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},z_=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Tb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ib(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Tb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},Ib=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},kb=function(t,e,n,r){return Pm(e,new Am(n,t),r)},tS=function(t,e,n){return Pm(t,new xm(e),n)};function Pm(t,e,n){const r=t.getPriority().val(),i=z_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=z_(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ae(l,ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(ye,(l,a)=>{const u=Pm(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Dm(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=z(n);for(;i!==null;){const s=is(r.node.children,i)||{children:{},childCount:0};r=new Om(i,r,s),n=ne(n),i=z(n)}return r}function Rs(t){return t.node.value}function nS(t,e){t.node.value=e,Tf(t)}function rS(t){return t.node.childCount>0}function Rb(t){return Rs(t)===void 0&&!rS(t)}function Rc(t,e){Et(t.node.children,(n,r)=>{e(new Om(n,t,r))})}function iS(t,e,n,r){n&&!r&&e(t),Rc(t,i=>{iS(i,e,!0,r)}),n&&r&&e(t)}function Nb(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ol(t){return new ee(t.parent===null?t.name:Ol(t.parent)+"/"+t.name)}function Tf(t){t.parent!==null&&xb(t.parent,t.name,t)}function xb(t,e,n){const r=Rb(n),i=Mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Tf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Tf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=/[\[\].#$\/\u0000-\u001F\u007F]/,Pb=/[\[\].#$\u0000-\u001F\u007F]/,Kh=10*1024*1024,sS=function(t){return typeof t=="string"&&t.length!==0&&!Ab.test(t)},oS=function(t){return typeof t=="string"&&t.length!==0&&!Pb.test(t)},Ob=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oS(t)},lS=function(t,e,n,r){r&&e===void 0||bm(Gp(t,"value"),e,n)},bm=function(t,e,n){const r=n instanceof ee?new YO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pr(r)+" with contents = "+e.toString());if(o1(e))throw new Error(t+"contains "+e.toString()+" "+Pr(r));if(typeof e=="string"&&e.length>Kh/3&&mc(e)>Kh)throw new Error(t+"contains a string greater than "+Kh+" utf8 bytes "+Pr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Et(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XO(r,o),bm(t,l,r),JO(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pr(r)+" in addition to actual children.")}},aS=function(t,e,n,r){if(!(r&&n===void 0)&&!oS(n))throw new Error(Gp(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Db=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aS(t,e,n,r)},uS=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},bb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ob(n))throw new Error(Gp(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lm(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!fm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cS(t,e,n){Lm(t,n),hS(t,r=>fm(r,e))}function On(t,e,n){Lm(t,n),hS(t,r=>qt(r,e)||qt(e,r))}function hS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Mb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Mb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hr&&Xe("event: "+n.toString()),ks(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="repo_interrupt",Ub=25;class $b{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ku(),this.transactionQueueTree_=new Om,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vb(t,e,n){if(t.stats_=hm(t.repoInfo_),t.forceRestClient_||EO())t.server_=new Iu(t.repoInfo_,(r,i,s,o)=>{j_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>H_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(r,i,s,o)=>{j_(t,r,i,s,o)},r=>{H_(t,r)},r=>{Bb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kO(t.repoInfo_,()=>new TD(t.stats_,t.server_)),t.infoData_=new vD,t.infoSyncTree_=new V_({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ic(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Fm(t,"connected",!1),t.serverSyncTree_=new V_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);On(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function dS(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mm(t){return Cb({timestamp:dS(t)})}function j_(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=pu(n,u=>ze(u));o=_b(t.serverSyncTree_,s,a,i)}else{const a=ze(n);o=yb(t.serverSyncTree_,s,a,i)}else if(r){const a=pu(n,u=>ze(u));o=pb(t.serverSyncTree_,s,a)}else{const a=ze(n);o=Ic(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Nc(t,s)),On(t.eventQueue_,l,o)}function H_(t,e){Fm(t,"connected",e),e===!1&&jb(t)}function Bb(t,e){Et(e,(n,r)=>{Fm(t,n,r)})}function Fm(t,e,n){const r=new ee("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(r,i);const s=Ic(t.infoSyncTree_,r,i);On(t.eventQueue_,r,s)}function fS(t){return t.nextWriteId_++}function zb(t,e,n,r,i){Um(t,"set",{path:e.toString(),value:n,priority:r});const s=Mm(t),o=ze(n,r),l=Im(t.serverSyncTree_,e),a=tS(o,l,s),u=fS(t),c=X1(t.serverSyncTree_,e,a,u,!0);Lm(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const y=d==="ok";y||wt("set at "+e+" failed: "+d);const _=Mr(t.serverSyncTree_,u,!y);On(t.eventQueue_,e,_),qb(t,i,d,m)});const h=_S(t,e);Nc(t,h),On(t.eventQueue_,h,[])}function jb(t){Um(t,"onDisconnectEvents");const e=Mm(t),n=ku();yf(t.onDisconnect_,X(),(i,s)=>{const o=kb(i,s,t.serverSyncTree_,e);F1(n,i,o)});let r=[];yf(n,X(),(i,s)=>{r=r.concat(Ic(t.serverSyncTree_,i,s));const o=_S(t,i);Nc(t,o)}),t.onDisconnect_=ku(),On(t.eventQueue_,X(),r)}function Hb(t,e,n){let r;z(e._path)===".info"?r=B_(t.infoSyncTree_,e,n):r=B_(t.serverSyncTree_,e,n),cS(t.eventQueue_,e._path,r)}function W_(t,e,n){let r;z(e._path)===".info"?r=Cf(t.infoSyncTree_,e,n):r=Cf(t.serverSyncTree_,e,n),cS(t.eventQueue_,e._path,r)}function Wb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Fb)}function Um(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xe(n,...e)}function qb(t,e,n,r){e&&ks(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pS(t,e,n){return Im(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function $m(t,e=t.transactionQueueTree_){if(e||xc(t,e),Rs(e)){const n=gS(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Gb(t,Ol(e),n)}else rS(e)&&Rc(e,n=>{$m(t,n)})}function Gb(t,e,n){const r=n.map(u=>u.currentWriteId),i=pS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=mt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Um(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Mr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();xc(t,Dm(t.transactionQueueTree_,e)),$m(t,t.transactionQueueTree_),On(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)ks(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{wt("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Nc(t,e)}},o)}function Nc(t,e){const n=mS(t,e),r=Ol(n),i=gS(t,n);return Kb(t,i,r),r}function Kb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=mt(n,a.path);let c=!1,h;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,h=a.abortReason,i=i.concat(Mr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ub)c=!0,h="maxretry",i=i.concat(Mr(t.serverSyncTree_,a.currentWriteId,!0));else{const d=pS(t,a.path,o);a.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){bm("transaction failed: Data returned ",m,a.path);let y=ze(m);typeof m=="object"&&m!=null&&Mn(m,".priority")||(y=y.updatePriority(d.getPriority()));const w=a.currentWriteId,p=Mm(t),f=tS(y,d,p);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=f,a.currentWriteId=fS(t),o.splice(o.indexOf(w),1),i=i.concat(X1(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Mr(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(Mr(t.serverSyncTree_,a.currentWriteId,!0))}On(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}xc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ks(r[l]);$m(t,t.transactionQueueTree_)}function mS(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&Rs(r)===void 0;)r=Dm(r,n),e=ne(e),n=z(e);return r}function gS(t,e){const n=[];return yS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function yS(t,e,n){const r=Rs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rc(e,i=>{yS(t,i,n)})}function xc(t,e){const n=Rs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nS(e,n.length>0?n:void 0)}Rc(e,r=>{xc(t,r)})}function _S(t,e){const n=Ol(mS(t,e)),r=Dm(t.transactionQueueTree_,e);return Nb(r,i=>{Qh(t,i)}),Qh(t,r),iS(r,i=>{Qh(t,i)}),n}function Qh(t,e){const n=Rs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Mr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nS(e,void 0):n.length=s+1,On(t.eventQueue_,Ol(e),i);for(let o=0;o<r.length;o++)ks(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Yb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const q_=function(t,e){const n=Xb(t),r=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},Xb=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=Qb(t.substring(c,h)));const d=Yb(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Jb=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=G_.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=G_.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class wS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:R1(this._path)}get ref(){return new Fn(this._repo,this._path)}get _queryIdentifier(){const e=x_(this._queryParams),n=um(e);return n==="{}"?"default":n}get _queryObject(){return x_(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof Vm))return!1;const n=this._repo===e._repo,r=fm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+QO(this._path)}}class Fn extends Vm{constructor(e,n){super(e,n,new ym,!1)}get parent(){const e=x1(this._path);return e===null?null:new Fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=us(this.ref,e);return new Jo(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jo(i,us(this.ref,r),ye)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ES(t,e){return t=ce(t),t._checkNotDeleted("ref"),e!==void 0?us(t._root,e):t._root}function us(t,e){return t=ce(t),z(t._path)===null?Db("child","path",e,!1):aS("child","path",e,!1),new Fn(t._repo,Ie(t._path,e))}function eL(t,e){t=ce(t),uS("push",t._path),lS("push",e,t._path,!0);const n=dS(t._repo),r=Jb(n),i=us(t,r),s=us(t,r);let o;return e!=null?o=SS(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function SS(t,e){t=ce(t),uS("set",t._path),lS("set",e,t._path,!1);const n=new pc;return zb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Bm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new vS("value",this,new Jo(e.snapshotNode,new Fn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wS(this,e,n):null}matches(e){return e instanceof Bm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wS(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=us(new Fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new vS(e.type,this,new Jo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tL(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,h)=>{W_(t._repo,t,l),a(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Zb(n,s||void 0),l=e==="value"?new Bm(o):new zm(e,o);return Hb(t._repo,t,l),()=>W_(t._repo,t,l)}function nL(t,e,n,r){return tL(t,"value",e,n,r)}sb(Fn);hb(Fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL="FIREBASE_DATABASE_EMULATOR_HOST",If={};let iL=!1;function sL(t,e,n,r){t.repoInfo_=new _1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function oL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=q_(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[rL]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=q_(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new qi(qi.OWNER):new CO(t.name,t.options,e);bb("Invalid Firebase Database URL",o),W(o.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=aL(l,t,c,new SO(t.name,n));return new uL(h,t)}function lL(t,e){const n=If[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Wb(t),delete n[t.key]}function aL(t,e,n,r){let i=If[e.name];i||(i={},If[e.name]=i);let s=i[t.toURLString()];return s&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $b(t,iL,n,r),i[t.toURLString()]=s,s}class uL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function cL(t=yc(),e){const n=vl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Hp("database");r&&hL(n,...r)}return n}function hL(t,e,n,r={}){t=ce(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new qi(qi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Wp(r.mockUserToken,t.app.options.projectId);s=new qi(o)}sL(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t){lO(hi),pr(new xn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return oL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Lt(d_,f_,t),Lt(d_,f_,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dL();var fL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,jm=jm||{},F=fL||self;function bu(){}function Ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Dl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pL(t){return Object.prototype.hasOwnProperty.call(t,Yh)&&t[Yh]||(t[Yh]=++mL)}var Yh="closure_uid_"+(1e9*Math.random()>>>0),mL=0;function gL(t,e,n){return t.call.apply(t.bind,arguments)}function yL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=gL:et=yL,et.apply(null,arguments)}function ya(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function Tr(){this.s=this.s,this.o=this.o}var _L=0;Tr.prototype.s=!1;Tr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_L!=0)&&pL(this)};Tr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const CS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function K_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ac(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var vL=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",bu,e),F.removeEventListener("test",bu,e)}catch{}return t}();function Lu(t){return/^[\s\xa0]*$/.test(t)}var Q_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xh(t,e){return t<e?-1:t>e?1:0}function Pc(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function rn(t){return Pc().indexOf(t)!=-1}function Wm(t){return Wm[" "](t),t}Wm[" "]=bu;function wL(t){var e=CL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var EL=rn("Opera"),cs=rn("Trident")||rn("MSIE"),TS=rn("Edge"),kf=TS||cs,IS=rn("Gecko")&&!(Pc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge"))&&!(rn("Trident")||rn("MSIE"))&&!rn("Edge"),SL=Pc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge");function kS(){var t=F.document;return t?t.documentMode:void 0}var Mu;e:{var Jh="",Zh=function(){var t=Pc();if(IS)return/rv:([^\);]+)(\)|;)/.exec(t);if(TS)return/Edge\/([\d\.]+)/.exec(t);if(cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SL)return/WebKit\/(\S+)/.exec(t);if(EL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zh&&(Jh=Zh?Zh[1]:""),cs){var ed=kS();if(ed!=null&&ed>parseFloat(Jh)){Mu=String(ed);break e}}Mu=Jh}var CL={};function TL(){return wL(function(){let t=0;const e=Q_(String(Mu)).split("."),n=Q_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Xh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Xh(i[2].length==0,s[2].length==0)||Xh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Rf;if(F.document&&cs){var Y_=kS();Rf=Y_||parseInt(Mu,10)||void 0}else Rf=void 0;var IL=Rf;function Zo(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(IS){e:{try{Wm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zo.X.h.call(this)}}qe(Zo,tt);var kL={2:"touch",3:"pen",4:"mouse"};Zo.prototype.h=function(){Zo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bl="closure_listenable_"+(1e6*Math.random()|0),RL=0;function NL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++RL,this.ba=this.ea=!1}function Oc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function RS(t){const e={};for(const n in t)e[n]=t[n];return e}const X_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function NS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<X_.length;s++)n=X_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Dc(t){this.src=t,this.g={},this.h=0}Dc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=xf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new NL(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Nf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=CS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Oc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Gm="closure_lm_"+(1e6*Math.random()|0),td={};function xS(t,e,n,r,i){if(r&&r.once)return PS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)xS(t,e[s],n,r,i);return null}return n=Ym(n),t&&t[bl]?t.N(e,n,Dl(r)?!!r.capture:!!r,i):AS(t,e,n,!1,r,i)}function AS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Dl(i)?!!i.capture:!!i,l=Qm(t);if(l||(t[Gm]=l=new Dc(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=xL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(DS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xL(){function t(n){return e.call(t.src,t.listener,n)}const e=AL;return t}function PS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)PS(t,e[s],n,r,i);return null}return n=Ym(n),t&&t[bl]?t.O(e,n,Dl(r)?!!r.capture:!!r,i):AS(t,e,n,!0,r,i)}function OS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)OS(t,e[s],n,r,i);else r=Dl(r)?!!r.capture:!!r,n=Ym(n),t&&t[bl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=xf(s,n,r,i),-1<n&&(Oc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xf(e,n,r,i)),(n=-1<t?e[t]:null)&&Km(n))}function Km(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[bl])Nf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(DS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qm(e))?(Nf(n,t),n.h==0&&(n.src=null,e[Gm]=null)):Oc(t)}}}function DS(t){return t in td?td[t]:td[t]="on"+t}function AL(t,e){if(t.ba)t=!0;else{e=new Zo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Km(t),t=n.call(r,e)}return t}function Qm(t){return t=t[Gm],t instanceof Dc?t:null}var nd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ym(t){return typeof t=="function"?t:(t[nd]||(t[nd]=function(e){return t.handleEvent(e)}),t[nd])}function Ue(){Tr.call(this),this.i=new Dc(this),this.P=this,this.I=null}qe(Ue,Tr);Ue.prototype[bl]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){OS(this,t,e,n,r)};function He(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;e=new tt(r,t),NS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_a(o,r,!0,e)&&i}if(o=e.g=t,i=_a(o,r,!0,e)&&i,i=_a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_a(o,r,!1,e)&&i}Ue.prototype.M=function(){if(Ue.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Oc(n[r]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var l=o.listener,a=o.ha||o.src;o.ea&&Nf(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xm=F.JSON.stringify;function PL(){var t=MS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OL{constructor(){this.h=this.g=null}add(e,n){const r=bS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new DL,t=>t.reset());class DL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bL(t){F.setTimeout(()=>{throw t},0)}function LS(t,e){Af||LL(),Pf||(Af(),Pf=!0),MS.add(t,e)}var Af;function LL(){var t=F.Promise.resolve(void 0);Af=function(){t.then(ML)}}var Pf=!1,MS=new OL;function ML(){for(var t;t=PL();){try{t.h.call(t.g)}catch(n){bL(n)}var e=bS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pf=!1}function bc(t,e){Ue.call(this),this.h=t||1,this.g=e||F,this.j=et(this.lb,this),this.l=Date.now()}qe(bc,Ue);O=bc.prototype;O.ca=!1;O.R=null;O.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),He(this,"tick"),this.ca&&(Jm(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}O.M=function(){bc.X.M.call(this),Jm(this),delete this.g};function Zm(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function FS(t){t.g=Zm(()=>{t.g=null,t.i&&(t.i=!1,FS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FL extends Tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:FS(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function el(t){Tr.call(this),this.h=t,this.g={}}qe(el,Tr);var J_=[];function US(t,e,n,r){Array.isArray(n)||(n&&(J_[0]=n.toString()),n=J_);for(var i=0;i<n.length;i++){var s=xS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $S(t){qm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Km(e)},t),t.g={}}el.prototype.M=function(){el.X.M.call(this),$S(this)};el.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lc(){this.g=!0}Lc.prototype.Aa=function(){this.g=!1};function UL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function $L(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Mi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BL(t,n)+(r?" "+r:"")})}function VL(t,e){t.info(function(){return"TIMEOUT: "+e})}Lc.prototype.info=function(){};function BL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xm(n)}catch{return e}}var fi={},Z_=null;function Mc(){return Z_=Z_||new Ue}fi.Pa="serverreachability";function VS(t){tt.call(this,fi.Pa,t)}qe(VS,tt);function tl(t){const e=Mc();He(e,new VS(e))}fi.STAT_EVENT="statevent";function BS(t,e){tt.call(this,fi.STAT_EVENT,t),this.stat=e}qe(BS,tt);function lt(t){const e=Mc();He(e,new BS(e,t))}fi.Qa="timingevent";function zS(t,e){tt.call(this,fi.Qa,t),this.size=e}qe(zS,tt);function Ll(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Fc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eg(){}eg.prototype.h=null;function ev(t){return t.h||(t.h=t.i())}function HS(){}var Ml={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tg(){tt.call(this,"d")}qe(tg,tt);function ng(){tt.call(this,"c")}qe(ng,tt);var Of;function Uc(){}qe(Uc,eg);Uc.prototype.g=function(){return new XMLHttpRequest};Uc.prototype.i=function(){return{}};Of=new Uc;function Fl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new el(this),this.O=zL,t=kf?125:void 0,this.T=new bc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new WS}function WS(){this.i=null,this.g="",this.h=!1}var zL=45e3,Df={},Fu={};O=Fl.prototype;O.setTimeout=function(t){this.O=t};function bf(t,e,n){t.K=1,t.v=Vc(Dn(e)),t.s=n,t.P=!0,qS(t,null)}function qS(t,e){t.F=Date.now(),Ul(t),t.A=Dn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),eC(n.i,"t",r),t.C=0,n=t.l.H,t.h=new WS,t.g=EC(t.l,n?e:null,!t.s),0<t.N&&(t.L=new FL(et(t.La,t,t.g),t.N)),US(t.S,t.g,"readystatechange",t.ib),e=t.H?RS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),tl(),UL(t.j,t.u,t.A,t.m,t.U,t.s)}O.ib=function(t){t=t.target;const e=this.L;e&&vn(t)==3?e.l():this.La(t)};O.La=function(t){try{if(t==this.g)e:{const c=vn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||kf||this.g&&(this.h.h||this.g.fa()||iv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?tl(3):tl(2)),$c(this);var n=this.g.aa();this.Y=n;t:if(GS(this)){var r=iv(this.g);t="";var i=r.length,s=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),vo(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,$L(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lu(l)){var u=l;break t}}u=null}if(n=u)Mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lf(this,n);else{this.i=!1,this.o=3,lt(12),Fr(this),vo(this);break e}}this.P?(KS(this,c,o),kf&&this.i&&c==3&&(US(this.S,this.T,"tick",this.hb),this.T.start())):(Mi(this.j,this.m,o,null),Lf(this,o)),c==4&&Fr(this),this.i&&!this.I&&(c==4?yC(this.l,this):(this.i=!1,Ul(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Fr(this),vo(this)}}}catch{}finally{}};function GS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function KS(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jL(t,n),i==Fu){e==4&&(t.o=4,lt(14),r=!1),Mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Df){t.o=4,lt(15),Mi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Mi(t.j,t.m,i,null),Lf(t,i);GS(t)&&i!=Fu&&i!=Df&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ug(e),e.K=!0,lt(11))):(Mi(t.j,t.m,n,"[Invalid Chunked Response]"),Fr(t),vo(t))}O.hb=function(){if(this.g){var t=vn(this.g),e=this.g.fa();this.C<e.length&&($c(this),KS(this,t,e),this.i&&t!=4&&Ul(this))}};function jL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Fu:(n=Number(e.substring(n,r)),isNaN(n)?Df:(r+=1,r+n>e.length?Fu:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.I=!0,Fr(this)};function Ul(t){t.V=Date.now()+t.O,QS(t,t.O)}function QS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ll(et(t.gb,t),e)}function $c(t){t.B&&(F.clearTimeout(t.B),t.B=null)}O.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VL(this.j,this.A),this.K!=2&&(tl(),lt(17)),Fr(this),this.o=2,vo(this)):QS(this,this.V-t)};function vo(t){t.l.G==0||t.I||yC(t.l,t)}function Fr(t){$c(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jm(t.T),$S(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Lf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mf(n.h,t))){if(!t.J&&Mf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Vu(n),jc(n);else break e;ag(n),lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ll(et(n.cb,n),6e3));if(1>=rC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ur(n,11)}else if((t.J||n.g==t)&&Vu(n),!Lu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rg(s,s.h),s.h=null))}if(r.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,ue(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=wC(r,r.H?r.ka:null,r.V),o.J){iC(r.h,o);var l=o,a=r.J;a&&l.setTimeout(a),l.B&&($c(l),Ul(l)),r.g=o}else mC(r);0<n.i.length&&Hc(n)}else u[0]!="stop"&&u[0]!="close"||Ur(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ur(n,7):lg(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}tl(4)}catch{}}function HL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function WL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ac(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function YS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ac(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=WL(t),r=HL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var XS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wr){this.h=e!==void 0?e:t.h,Uu(this,t.j),this.s=t.s,this.g=t.g,$u(this,t.m),this.l=t.l,e=t.i;var n=new nl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tv(this,n),this.o=t.o}else t&&(n=String(t).match(XS))?(this.h=!!e,Uu(this,n[1]||"",!0),this.s=to(n[2]||""),this.g=to(n[3]||"",!0),$u(this,n[4]),this.l=to(n[5]||"",!0),tv(this,n[6]||"",!0),this.o=to(n[7]||"")):(this.h=!!e,this.i=new nl(null,this.h))}Wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(no(e,nv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(no(e,nv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(no(n,n.charAt(0)=="/"?QL:KL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",no(n,XL)),t.join("")};function Dn(t){return new Wr(t)}function Uu(t,e,n){t.j=n?to(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $u(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tv(t,e,n){e instanceof nl?(t.i=e,JL(t.i,t.h)):(n||(e=no(e,YL)),t.i=new nl(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function Vc(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function to(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function no(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nv=/[#\/\?@]/g,KL=/[#\?:]/g,QL=/[#\?]/g,YL=/[#\?@]/g,XL=/#/g;function nl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ir(t){t.g||(t.g=new Map,t.h=0,t.i&&qL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=nl.prototype;O.add=function(t,e){Ir(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function JS(t,e){Ir(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ZS(t,e){return Ir(t),e=Ns(t,e),t.g.has(e)}O.forEach=function(t,e){Ir(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.oa=function(){Ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.W=function(t){Ir(this);let e=[];if(typeof t=="string")ZS(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Ir(this),this.i=null,t=Ns(this,t),ZS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function eC(t,e,n){JS(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),Hm(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JL(t,e){e&&!t.j&&(Ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(JS(this,r),eC(this,i,n))},t)),t.j=e}var ZL=class{constructor(e,n){this.h=e,this.g=n}};function tC(t){this.l=t||eM,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eM=10;function nC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rC(t){return t.h?1:t.g?t.g.size:0}function Mf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rg(t,e){t.g?t.g.add(e):t.h=e}function iC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}tC.prototype.cancel=function(){if(this.i=sC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hm(t.i)}function ig(){}ig.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};ig.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function tM(){this.g=new ig}function nM(t,e,n){const r=n||"";try{YS(t,function(i,s){let o=i;Dl(i)&&(o=Xm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rM(t,e){const n=new Lc;if(F.Image){const r=new Image;r.onload=ya(va,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ya(va,n,r,"TestLoadImage: error",!1,e),r.onabort=ya(va,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ya(va,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function va(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $l(t){this.l=t.ac||null,this.j=t.jb||!1}qe($l,eg);$l.prototype.g=function(){return new Bc(this.l,this.j)};$l.prototype.i=function(t){return function(){return t}}({});function Bc(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Bc,Ue);var sg=0;O=Bc.prototype;O.open=function(t,e){if(this.readyState!=sg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rl(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vl(this)),this.readyState=sg};O.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rl(this)),this.g&&(this.readyState=3,rl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function oC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}O.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vl(this):rl(this),this.readyState==3&&oC(this)}};O.Va=function(t){this.g&&(this.response=this.responseText=t,Vl(this))};O.Ua=function(t){this.g&&(this.response=t,Vl(this))};O.ga=function(){this.g&&Vl(this)};function Vl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rl(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iM=F.JSON.parse;function _e(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lC,this.K=this.L=!1}qe(_e,Ue);var lC="",sM=/^https?$/i,oM=["POST","PUT"];O=_e.prototype;O.Ka=function(t){this.L=t};O.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Of.g(),this.C=this.u?ev(this.u):ev(Of),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){rv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=CS(oM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cC(this),0<this.B&&((this.K=lM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=Zm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){rv(this,s)}};function lM(t){return cs&&TL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.qa=function(){typeof jm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function rv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,aC(t),zc(t)}function aC(t){t.D||(t.D=!0,He(t,"complete"),He(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),zc(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zc(this,!0)),_e.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?uC(this):this.fb())};O.fb=function(){uC(this)};function uC(t){if(t.h&&typeof jm<"u"&&(!t.C[1]||vn(t)!=4||t.aa()!=2)){if(t.v&&vn(t)==4)Zm(t.Ha,0,t);else if(He(t,"readystatechange"),vn(t)==4){t.h=!1;try{const l=t.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=l===0){var i=String(t.H).match(XS)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!sM.test(i?i.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var o=2<vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",aC(t)}}finally{zc(t)}}}}function zc(t,e){if(t.g){cC(t);const n=t.g,r=t.C[0]?bu:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function cC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function vn(t){return t.g?t.g.readyState:0}O.aa=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iM(e)}};function iv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hC(t){let e="";return qm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function og(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=hC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dC(t){this.Ca=0,this.i=[],this.j=new Lc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ks("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ks("baseRetryDelayMs",5e3,t),this.bb=Ks("retryDelaySeedMs",1e4,t),this.$a=Ks("forwardChannelMaxRetries",2,t),this.ta=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new tC(t&&t.concurrentRequestLimit),this.Fa=new tM,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=dC.prototype;O.ma=8;O.G=1;function lg(t){if(fC(t),t.G==3){var e=t.U++,n=Dn(t.F);ue(n,"SID",t.I),ue(n,"RID",e),ue(n,"TYPE","terminate"),Bl(t,n),e=new Fl(t,t.j,e,void 0),e.K=2,e.v=Vc(Dn(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=EC(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ul(e)}vC(t)}function jc(t){t.g&&(ug(t),t.g.cancel(),t.g=null)}function fC(t){jc(t),t.u&&(F.clearTimeout(t.u),t.u=null),Vu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Hc(t){nC(t.h)||t.m||(t.m=!0,LS(t.Ja,t),t.C=0)}function aM(t,e){return rC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ll(et(t.Ja,t,e),_C(t,t.C)),t.C++,!0)}O.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Fl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=RS(s),NS(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pC(this,i,e),n=Dn(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Bl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(hC(s)))+"&"+e:this.o&&og(n,this.o,s)),rg(this.h,i),this.Ya&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",e),ue(n,"SID","null"),i.Z=!0,bf(i,n,null)):bf(i,n,e),this.G=2}}else this.G==3&&(t?sv(this,t):this.i.length==0||nC(this.h)||sv(this))};function sv(t,e){var n;e?n=e.m:n=t.U++;const r=Dn(t.F);ue(r,"SID",t.I),ue(r,"RID",n),ue(r,"AID",t.T),Bl(t,r),t.o&&t.s&&og(r,t.o,t.s),n=new Fl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=pC(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),rg(t.h,n),bf(n,r,e)}function Bl(t,e){t.ia&&qm(t.ia,function(n,r){ue(e,r,n)}),t.l&&YS({},function(n,r){ue(e,r,n)})}function pC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?et(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].h;const c=i[a].g;if(u-=s,0>u)s=Math.max(0,i[a].h-100),l=!1;else try{nM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function mC(t){t.g||t.u||(t.Z=1,LS(t.Ia,t),t.A=0)}function ag(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ll(et(t.Ia,t),_C(t,t.A)),t.A++,!0)}O.Ia=function(){if(this.u=null,gC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ll(et(this.eb,this),t)}};O.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),jc(this),gC(this))};function ug(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function gC(t){t.g=new Fl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Dn(t.sa);ue(e,"RID","rpc"),ue(e,"SID",t.I),ue(e,"CI",t.L?"0":"1"),ue(e,"AID",t.T),ue(e,"TYPE","xmlhttp"),Bl(t,e),t.o&&t.s&&og(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vc(Dn(e)),n.s=null,n.P=!0,qS(n,t)}O.cb=function(){this.v!=null&&(this.v=null,jc(this),ag(this),lt(19))};function Vu(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function yC(t,e){var n=null;if(t.g==e){Vu(t),ug(t),t.g=null;var r=2}else if(Mf(t.h,e))n=e.D,iC(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Mc(),He(r,new zS(r,n)),Hc(t)}else mC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&aM(t,e)||r==2&&ag(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}}function _C(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ur(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=et(t.kb,t);n||(n=new Wr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Uu(n,"https"),Vc(n)),rM(n.toString(),r)}else lt(2);t.G=0,t.l&&t.l.va(e),vC(t),fC(t)}O.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function vC(t){if(t.G=0,t.la=[],t.l){const e=sC(t.h);(e.length!=0||t.i.length!=0)&&(K_(t.la,e),K_(t.la,t.i),t.h.i.length=0,Hm(t.i),t.i.length=0),t.l.ua()}}function wC(t,e,n){var r=n instanceof Wr?Dn(n):new Wr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),$u(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Wr(null,void 0);r&&Uu(s,r),e&&(s.g=e),i&&$u(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ue(r,n,e),ue(r,"VER",t.ma),Bl(t,r),r}function EC(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _e(new $l({jb:!0})):new _e(t.ra),e.Ka(t.H),e}function SC(){}O=SC.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Ra=function(){};function Bu(){if(cs&&!(10<=Number(IL)))throw Error("Environmental error: no available transport.")}Bu.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){Ue.call(this),this.g=new dC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Lu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}qe(Nt,Ue);Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=wC(t,null,t.V),Hc(t)};Nt.prototype.close=function(){lg(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xm(t),t=n);e.i.push(new ZL(e.ab++,t)),e.G==3&&Hc(e)};Nt.prototype.M=function(){this.g.l=null,delete this.j,lg(this.g),delete this.g,Nt.X.M.call(this)};function CC(t){tg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(CC,tg);function TC(){ng.call(this),this.status=1}qe(TC,ng);function xs(t){this.g=t}qe(xs,SC);xs.prototype.xa=function(){He(this.g,"a")};xs.prototype.wa=function(t){He(this.g,new CC(t))};xs.prototype.va=function(t){He(this.g,new TC)};xs.prototype.ua=function(){He(this.g,"b")};Bu.prototype.createWebChannel=Bu.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;Fc.NO_ERROR=0;Fc.TIMEOUT=8;Fc.HTTP_ERROR=6;jS.COMPLETE="complete";HS.EventType=Ml;Ml.OPEN="a";Ml.CLOSE="b";Ml.ERROR="c";Ml.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.Oa;_e.prototype.getLastErrorCode=_e.prototype.Ea;_e.prototype.getStatus=_e.prototype.aa;_e.prototype.getResponseJson=_e.prototype.Sa;_e.prototype.getResponseText=_e.prototype.fa;_e.prototype.send=_e.prototype.da;_e.prototype.setWithCredentials=_e.prototype.Ka;var uM=function(){return new Bu},cM=function(){return Mc()},rd=Fc,hM=jS,dM=fi,ov={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fM=$l,wa=HS,pM=_e;const lv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new gc("@firebase/firestore");function av(){return oi.logLevel}function b(t,...e){if(oi.logLevel<=Y.DEBUG){const n=e.map(cg);oi.debug(`Firestore (${As}): ${t}`,...n)}}function li(t,...e){if(oi.logLevel<=Y.ERROR){const n=e.map(cg);oi.error(`Firestore (${As}): ${t}`,...n)}}function Ff(t,...e){if(oi.logLevel<=Y.WARN){const n=e.map(cg);oi.warn(`Firestore (${As}): ${t}`,...n)}}function cg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw li(e),new Error(e)}function Ne(t,e){t||G()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class gM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yM{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new IC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Qe(e)}}class _M{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class vM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new _M(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EM{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.A=n.token,new wM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Fe(0,0))}static max(){return new he(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends il{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const CM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends il{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return CM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new U(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new U(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new U(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(Se.fromString(e))}static fromName(e){return new V(Se.fromString(e).popFirst(5))}static empty(){return new V(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new Se(e.slice()))}}function TM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new yr(i,V.empty(),e)}function IM(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(he.min(),V.empty(),-1)}static max(){return new yr(he.max(),V.empty(),-1)}}function kM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==RM)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},a=>r(a))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let a=0;a<s;a++){const u=a;n(e[u]).next(c=>{o[u]=c,++l,l===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Wc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}NC.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i,s,o,l,a){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class zu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){return t==null}function ju(t){return t===0&&1/t==-1/0}function AM(t){return typeof t=="number"&&Number.isInteger(t)&&!ju(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new bn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new bn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bn.EMPTY_BYTE_STRING=new bn("");const PM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=PM.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sl(t){return typeof t=="string"?bn.fromBase64String(t):bn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hu(t){const e=ai(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?OM(t)?4:DM(t)?9007199254740991:10:G()}function cn(t,e){if(t===e)return!0;const n=ds(t);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hu(t).isEqual(Hu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ai(r.timestampValue),o=ai(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return sl(r.bytesValue).isEqual(sl(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ve(r.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ve(r.integerValue)===Ve(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ve(r.doubleValue),o=Ve(i.doubleValue);return s===o?ju(s)===ju(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(uv(s)!==uv(o))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(o[l]===void 0||!cn(s[l],o[l])))return!1;return!0}(t,e);default:return G()}}function ol(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=ds(t),r=ds(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ve(i.integerValue||i.doubleValue),l=Ve(s.integerValue||s.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return cv(t.timestampValue,e.timestampValue);case 4:return cv(Hu(t),Hu(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=sl(i),l=sl(s);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),l=s.split("/");for(let a=0;a<o.length&&a<l.length;a++){const u=te(o[a],l[a]);if(u!==0)return u}return te(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=te(Ve(i.latitude),Ve(s.latitude));return o!==0?o:te(Ve(i.longitude),Ve(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],l=s.values||[];for(let a=0;a<o.length&&a<l.length;++a){const u=fs(o[a],l[a]);if(u)return u}return te(o.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ea.mapValue&&s===Ea.mapValue)return 0;if(i===Ea.mapValue)return 1;if(s===Ea.mapValue)return-1;const o=i.fields||{},l=Object.keys(o),a=s.fields||{},u=Object.keys(a);l.sort(),u.sort();for(let c=0;c<l.length&&c<u.length;++c){const h=te(l[c],u[c]);if(h!==0)return h;const d=fs(o[l[c]],a[u[c]]);if(d!==0)return d}return te(l.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function cv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=ai(t),r=ai(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function ps(t){return Uf(t)}function Uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ai(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?sl(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Uf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${Uf(r.fields[l])}`;return s+"}"}(t.mapValue):G();var e,n}function $f(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function Va(t){return!!t&&"mapValue"in t}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.position=e,this.inclusive=n}}function hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{}class Le extends AC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LM(e,n,r):n==="array-contains"?new UM(e,r):n==="in"?new $M(e,r):n==="not-in"?new VM(e,r):n==="array-contains-any"?new BM(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MM(e,r):new FM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _r extends AC{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new _r(e,n)}matches(e){return PC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function PC(t){return t.op==="and"}function OC(t){return bM(t)&&PC(t)}function bM(t){for(const e of t.filters)if(e instanceof _r)return!1;return!0}function Vf(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(OC(t))return t.filters.map(e=>Vf(e)).join(",");{const e=t.filters.map(n=>Vf(n)).join(",");return`${t.op}(${e})`}}function DC(t,e){return t instanceof Le?function(n,r){return r instanceof Le&&n.op===r.op&&n.field.isEqual(r.field)&&cn(n.value,r.value)}(t,e):t instanceof _r?function(n,r){return r instanceof _r&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&DC(s,r.filters[o]),!0):!1}(t,e):void G()}function bC(t){return t instanceof Le?function(e){return`${e.field.canonicalString()} ${e.op} ${ps(e.value)}`}(t):t instanceof _r?function(e){return e.op.toString()+" {"+e.getFilters().map(bC).join(" ,")+"}"}(t):"Filter"}class LM extends Le{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class MM extends Le{constructor(e,n){super(e,"in",n),this.keys=LC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FM extends Le{constructor(e,n){super(e,"not-in",n),this.keys=LC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class UM extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&ol(n.arrayValue,this.value)}}class $M extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ol(this.value.arrayValue,n)}}class VM extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ol(this.value.arrayValue,n)}}class BM extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ol(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function zM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new St(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new St(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fv(this.data.getIterator())}getIteratorFrom(e){return new fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new ut(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=wo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Va(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Wt(wo(this.value))}}function MC(t){const e=[];return zl(t.fields,(n,r)=>{const i=new Ze([n]);if(Va(r)){const s=MC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new jt(e,0,he.min(),he.min(),he.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,he.min(),he.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,he.min(),he.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ft=null}}function pv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jM(t,e,n,r,i,s,o)}function fg(t){const e=le(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hg(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.ft=n}return e.ft}function pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!DC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dv(t.startAt,e.startAt)&&dv(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function HM(t,e,n,r,i,s,o,l){return new qc(t,e,n,r,i,s,o,l)}function WM(t){return new qc(t)}function mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function GM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KM(t){return t.collectionGroup!==null}function Qi(t){const e=le(t);if(e.dt===null){e.dt=[];const n=GM(e),r=qM(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Eo(n)),e.dt.push(new Eo(Ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Eo(Ze.keyField(),s))}}}return e.dt}function ms(t){const e=le(t);if(!e._t)if(e.limitType==="F")e._t=pv(e.path,e.collectionGroup,Qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Qi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Eo(s.field,o))}const r=e.endAt?new Wu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Wu(e.startAt.position,e.startAt.inclusive):null;e._t=pv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Bf(t,e,n){return new qc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function FC(t,e){return pg(ms(t),ms(e))&&t.limitType===e.limitType}function UC(t){return`${fg(ms(t))}|lt:${t.limitType}`}function gv(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>bC(r)).join(", ")}]`),hg(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),`Target(${n})`}(ms(t))}; limitType=${t.limitType})`}function $C(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Qi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const l=hv(i,s,o);return i.inclusive?l<=0:l<0}(n.startAt,Qi(n),r)||n.endAt&&!function(i,s,o){const l=hv(i,s,o);return i.inclusive?l>=0:l>0}(n.endAt,Qi(n),r))}(t,e)}function QM(t){return(e,n)=>{let r=!1;for(const i of Qi(t)){const s=YM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YM(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const l=s.data.field(i),a=o.data.field(i);return l!==null&&a!==null?fs(l,a):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ju(e)?"-0":e}}function BC(t){return{integerValue:""+t}}function XM(t,e){return AM(e)?BC(e):VC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this._=void 0}}function JM(t,e,n){return t instanceof qu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ll?jC(t,e):t instanceof al?HC(t,e):function(r,i){const s=zC(r,i),o=yv(s)+yv(r.gt);return $f(s)&&$f(r.gt)?BC(o):VC(r.yt,o)}(t,e)}function ZM(t,e,n){return t instanceof ll?jC(t,e):t instanceof al?HC(t,e):n}function zC(t,e){return t instanceof Gu?$f(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class qu extends Gc{}class ll extends Gc{constructor(e){super(),this.elements=e}}function jC(t,e){const n=WC(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class al extends Gc{constructor(e){super(),this.elements=e}}function HC(t,e){let n=WC(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Gu extends Gc{constructor(e,n){super(),this.yt=e,this.gt=n}}function yv(t){return Ve(t.integerValue||t.doubleValue)}function WC(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eF(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ll&&r instanceof ll||n instanceof al&&r instanceof al?hs(n.elements,r.elements,cn):n instanceof Gu&&r instanceof Gu?cn(n.gt,r.gt):n instanceof qu&&r instanceof qu}(t.transform,e.transform)}class tF{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kc{}function qC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KC(t.key,Cn.none()):new jl(t.key,t.data,Cn.none());{const n=t.data,r=Wt.empty();let i=new ut(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pi(t.key,r,new Kt(i.toArray()),Cn.none())}}function nF(t,e,n){t instanceof jl?function(r,i,s){const o=r.value.clone(),l=vv(r.fieldTransforms,i,s.transformResults);o.setAll(l),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof pi?function(r,i,s){if(!Ba(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=vv(r.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(GC(r)),l.setAll(o),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof jl?function(i,s,o,l){if(!Ba(i.precondition,s))return o;const a=i.value.clone(),u=wv(i.fieldTransforms,l,s);return a.setAll(u),s.convertToFoundDocument(s.version,a).setHasLocalMutations(),null}(t,e,n,r):t instanceof pi?function(i,s,o,l){if(!Ba(i.precondition,s))return o;const a=wv(i.fieldTransforms,l,s),u=s.data;return u.setAll(GC(i)),u.setAll(a),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ba(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function rF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zC(r.transform,i||null);s!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,s))}return n||null}function _v(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hs(n,r,(i,s)=>eF(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jl extends Kc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pi extends Kc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vv(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ZM(o,l,n[i]))}return r}function wv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JM(s,o,e))}return r}let KC=class extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};class iF extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,K;function sF(t){switch(t){default:return G();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function oF(t){if(t===void 0)return li("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ee.OK:return T.OK;case Ee.CANCELLED:return T.CANCELLED;case Ee.UNKNOWN:return T.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return T.INTERNAL;case Ee.UNAVAILABLE:return T.UNAVAILABLE;case Ee.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ee.NOT_FOUND:return T.NOT_FOUND;case Ee.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ee.ABORTED:return T.ABORTED;case Ee.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ee.DATA_LOSS:return T.DATA_LOSS;default:return G()}}(K=Ee||(Ee={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=new St(V.comparator);function Ku(){return lF}const QC=new St(V.comparator);function Ca(...t){let e=QC;for(const n of t)e=e.insert(n.key,n);return e}function YC(t){let e=QC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return Co()}function XC(){return Co()}function Co(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const aF=new St(V.comparator),uF=new ut(V.comparator);function Je(...t){let e=uF;for(const n of t)e=e.add(n);return e}const cF=new ut(te);function hF(){return cF}class dF{constructor(e,n){this.databaseId=e,this.wt=n}}function zf(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fF(t,e){return t.wt?e.toBase64():e.toUint8Array()}function pF(t,e){return zf(t,e.toTimestamp())}function Yi(t){return Ne(!!t),he.fromTimestamp(function(e){const n=ai(e);return new Fe(n.seconds,n.nanos)}(t))}function JC(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function mF(t){const e=Se.fromString(t);return Ne(CF(e)),e}function jf(t,e){return JC(t.databaseId,e.path)}function gF(t){const e=mF(t);return e.length===4?Se.emptyPath():_F(e)}function yF(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _F(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ev(t,e,n){return{name:jf(t,e),fields:n.value.mapValue.fields}}function vF(t,e){let n;if(e instanceof jl)n={update:Ev(t,e.key,e.value)};else if(e instanceof KC)n={delete:jf(t,e.key)};else if(e instanceof pi)n={update:Ev(t,e.key,e.data),updateMask:SF(e.fieldMask)};else{if(!(e instanceof iF))return G();n={verify:jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof qu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ll)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof al)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Gu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:pF(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function wF(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yi(r.updateTime):Yi(i);return s.isEqual(he.min())&&(s=Yi(i)),new tF(s,r.transformResults||[])}(n,e))):[]}function EF(t){let e=gF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=ZC(c);return h instanceof _r&&OC(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Eo(wi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let l=null;n.limit&&(l=function(c){let h;return h=typeof c=="object"?c.value:c,hg(h)?null:h}(n.limit));let a=null;n.startAt&&(a=function(c){const h=!!c.before,d=c.values||[];return new Wu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Wu(d,h)}(n.endAt)),HM(e,i,o,s,l,"F",a,u)}function ZC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=wi(e.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=wi(e.unaryFilter.field);return Le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wi(e.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=wi(e.unaryFilter.field);return Le.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Le.create(wi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return _r.create(e.compositeFilter.filters.map(n=>ZC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function wi(t){return Ze.fromServerFormat(t.fieldPath)}function SF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CF(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=XC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const a=qC(o,l);a!==null&&r.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Je())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>_v(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>_v(n,r))}}class mg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=aF;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.ie=e}}function RF(t){const e=EF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(){this.Je=new xF}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(yr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class xF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new gs(0)}static vn(){return new gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,Kt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Je()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ca();return s.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Je()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ku();const o=Co(),l=Co();return n.forEach((a,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof pi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),So(c.mutation,u,c.mutation.getFieldMask(),Fe.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(a=>(a.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return l.set(u,new PF(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new St((o,l)=>o-l),s=Je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const u=n.get(a);if(u===null)return;let c=r.get(a)||Kt.empty();c=l.applyToLocalView(u,c),r.set(a,c);const h=(i.get(l.batchId)||Je()).add(a);i=i.insert(l.batchId,h)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),u=a.key,c=a.value,h=XC();c.forEach(d=>{if(!s.has(d)){const m=qC(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve($r());let l=-1,a=s;return o.next(u=>S.forEach(u,(c,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{a=a.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,a,u,Je())).next(c=>({batchId:l,changes:YC(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ca();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,l=>{const a=function(u,c){return new qc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((l,a)=>{const u=a.getKey();i.get(u)===null&&(i=i.insert(u,jt.newInvalidDocument(u)))});let o=Ca();return i.forEach((l,a)=>{const u=s.get(l);u!==void 0&&So(u.mutation,a,Kt.empty(),Fe.now()),$C(n,a)&&(o=o.insert(l,a))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yi(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:RF(r.bundledQuery),readTime:Yi(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(){this.overlays=new St(V.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new V(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,u=a.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&a.largestBatchId>r&&i.set(a.getKey(),a)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new St((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const l=$r(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,c)=>l.set(u,c)),!(l.size()>=i)););return S.resolve(l)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IF(n,r));let s=this.es.get(n);s===void 0&&(s=Je(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.ns=new ut(Pe.ss),this.rs=new ut(Pe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Pe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new V(new Se([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new V(new Se([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=Je();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return V.comparator(e.key,n.key)||te(e._s,n._s)}static os(e,n){return te(e._s,n._s)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ut(Pe.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TF(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.gs=this.gs.add(new Pe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const l=this.ys(o._s);s.push(l)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(te);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],l=>{r=r.add(l._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new V(s),0);let l=new ut(te);return this.gs.forEachWhile(a=>{const u=a.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(a._s)),!0)},o),S.resolve(this.Is(l))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Pe(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(e){this.Es=e,this.docs=new St(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Ku();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=Ku();const s=new V(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:l,value:{document:a}}=o.getNext();if(!n.isPrefixOf(l.path))break;l.path.length>n.length+1||kM(IM(a),r)<=0||(i=i.insert(a.key,a.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){G()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FF(this)}getSize(e){return S.resolve(this.size)}}class FF extends AF{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e){this.persistence=e,this.Rs=new Ps(n=>fg(n),pg),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.bs=0,this.Ps=new gg,this.targetCount=0,this.vs=gs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new NC(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new UF(this),this.indexManager=new NF,this.remoteDocumentCache=function(r){return new MF(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new kF(n),this.Ns=new DF(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new LF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new VF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class VF extends NM{constructor(e){super(),this.currentSequenceNumber=e}}class yg{constructor(e){this.persistence=e,this.Fs=new gg,this.$s=null}static Bs(e){return new yg(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=V.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Je(),i=Je();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _g(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(mv(n))return S.resolve(null);let r=ms(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bf(n,null,"F"),r=ms(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Je(...s);return this.Ni.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(a=>{const u=this.Fi(n,l);return this.$i(n,u,o,a.readTime)?this.ki(e,Bf(n,null,"F")):this.Bi(e,u,n,a)}))})))}Oi(e,n,r,i){return mv(n)||i.isEqual(he.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(av()<=Y.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gv(n)),this.Bi(e,o,n,TM(i,-1)))})}Fi(e,n){let r=new ut(QM(e));return n.forEach((i,s)=>{$C(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return av()<=Y.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",gv(n)),this.Ni.getDocumentsMatchingQuery(e,n,yr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new St(te),this.Ui=new Ps(s=>fg(s),pg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OF(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function jF(t,e,n,r){return new zF(t,e,n,r)}async function eT(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let a=Je();for(const u of i){o.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}for(const u of s){l.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}return n.localDocuments.getDocuments(r,a).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:l}))})})}function HF(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,l,a,u){const c=a.batch,h=c.keys();let d=S.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(y=>{const _=a.docVersions.get(m);Ne(_!==null),y.version.compareTo(_)<0&&(c.applyToRemoteDocument(y,a),y.isValidDocument()&&(y.setReadTime(a.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(l,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let l=Je();for(let a=0;a<o.mutationResults.length;++a)o.mutationResults[a].transformResults.length>0&&(l=l.add(o.batch.mutations[a].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function WF(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qF(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Sv{constructor(){this.activeTargetIds=hF()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GF{constructor(){this.Lr=new Sv,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Sv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);b("RestConnection","Sending: ",o,r);const l={};return this.lo(l,i,s),this.fo(e,o,l,r).then(a=>(b("RestConnection","Received: ",a),a),a=>{throw Ff("RestConnection",`${e} failed with error: `,a,"url: ",o,"request:",r),a})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+As,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=QF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const l=new pM;l.setWithCredentials(!0),l.listenOnce(hM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rd.NO_ERROR:const u=l.getResponseJson();b("Connection","XHR received:",JSON.stringify(u)),s(u);break;case rd.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new U(T.DEADLINE_EXCEEDED,"Request time out"));break;case rd.HTTP_ERROR:const c=l.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',c,"response text:",l.getResponseText()),c>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(d.status);o(new U(m,d.message))}else o(new U(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else o(new U(T.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const a=JSON.stringify(i);l.send(n,"POST",a,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uM(),o=cM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new fM({})),this.lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const a=i.join("");b("Connection","Creating WebChannel: "+a,l);const u=s.createWebChannel(a,l);let c=!1,h=!1;const d=new YF({Hr:y=>{h?b("Connection","Not sending because WebChannel is closed:",y):(c||(b("Connection","Opening WebChannel transport."),u.open(),c=!0),b("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,_,w)=>{y.listen(_,p=>{try{w(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,wa.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),m(u,wa.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),d.io())}),m(u,wa.EventType.ERROR,y=>{h||(h=!0,Ff("Connection","WebChannel transport errored:",y),d.io(new U(T.UNAVAILABLE,"The operation could not be completed")))}),m(u,wa.EventType.MESSAGE,y=>{var _;if(!h){const w=y.data[0];Ne(!!w);const p=w,f=p.error||((_=p[0])===null||_===void 0?void 0:_.error);if(f){b("Connection","WebChannel received error:",f);const g=f.status;let v=function(R){const N=Ee[R];if(N!==void 0)return oF(N)}(g),I=f.message;v===void 0&&(v=T.INTERNAL,I="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new U(v,I)),u.close()}else b("Connection","WebChannel received:",w),d.ro(w)}}),m(o,dM.STAT_EVENT,y=>{y.stat===ov.PROXY?b("Connection","Detected buffering proxy"):y.stat===ov.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){return new dF(t,!0)}class tT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(e,n,r,i,s,o,l,a){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new tT(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(li(n.toString()),li("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new U(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZF extends JF{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=wF(e.writeResults,e.commitTime),r=Yi(e.commitTime);return this.listener.Zo(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=yF(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vF(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new U(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class tU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(li(n),this.ou=!1):b("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Wl(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const a=le(l);a._u.add(4),await Hl(a),a.gu.set("Unknown"),a._u.delete(4),await Yc(a)}(this))})}),this.gu=new tU(r,i)}}async function Yc(t){if(Wl(t))for(const e of t.wu)await e(!0)}async function Hl(t){for(const e of t.wu)await e(!1)}function Wl(t){return le(t)._u.size===0}async function nT(t,e,n){if(!Wc(e))throw e;t._u.add(1),await Hl(t),t.gu.set("Offline"),n||(n=()=>WF(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Yc(t)})}function rT(t,e){return e().catch(n=>nT(t,n,e))}async function Xc(t){const e=le(t),n=vr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;rU(e);)try{const i=await qF(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,iU(e,i)}catch(i){await nT(e,i)}iT(e)&&sT(e)}function rU(t){return Wl(t)&&t.fu.length<10}function iU(t,e){t.fu.push(e);const n=vr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function iT(t){return Wl(t)&&!vr(t).No()&&t.fu.length>0}function sT(t){vr(t).start()}async function sU(t){vr(t).eu()}async function oU(t){const e=vr(t);for(const n of t.fu)e.Xo(n.mutations)}async function lU(t,e,n){const r=t.fu.shift(),i=mg.from(r,e,n);await rT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xc(t)}async function aU(t,e){e&&vr(t).Yo&&await async function(n,r){if(i=r.code,sF(i)&&i!==T.ABORTED){const s=n.fu.shift();vr(n).Mo(),await rT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xc(n)}var i}(t,e),iT(t)&&sT(t)}async function Tv(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Wl(n);n._u.add(3),await Hl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Yc(n)}async function uU(t,e){const n=le(t);e?(n._u.delete(2),await Yc(n)):e||(n._u.add(2),await Hl(n),n.gu.set("Unknown"))}function vr(t){return t.Iu||(t.Iu=function(e,n,r){const i=le(e);return i.su(),new ZF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:sU.bind(null,t),Zr:aU.bind(null,t),tu:oU.bind(null,t),Zo:lU.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Xc(t)):(await t.Iu.stop(),t.fu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new vg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oT(t,e){if(li("AsyncQueue",`${e}: ${t}`),Wc(t))return new U(T.UNAVAILABLE,`${e}: ${t}`);throw t}class cU{constructor(){this.queries=new Ps(e=>UC(e),FC),this.onlineState="Unknown",this.Ru=new Set}}function hU(t){t.Ru.forEach(e=>{e.next()})}class dU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ps(l=>UC(l),FC),this.rc=new Map,this.oc=new Set,this.uc=new St(V.comparator),this.cc=new Map,this.ac=new gg,this.hc={},this.lc=new Map,this.fc=gs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function fU(t,e,n){const r=yU(t);try{const i=await function(s,o){const l=le(s),a=Fe.now(),u=o.reduce((d,m)=>d.add(m.key),Je());let c,h;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Ku(),y=Je();return l.Gi.getEntries(d,u).next(_=>{m=_,m.forEach((w,p)=>{p.isValidDocument()||(y=y.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(_=>{c=_;const w=[];for(const p of o){const f=rF(p,c.get(p.key).overlayedDocument);f!=null&&w.push(new pi(p.key,f,MC(f.value.mapValue),Cn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,a,w,o)}).next(_=>{h=_;const w=_.applyToLocalDocumentSet(c,y);return l.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:h.batchId,changes:YC(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,l){let a=s.hc[s.currentUser.toKey()];a||(a=new St(te)),a=a.insert(o,l),s.hc[s.currentUser.toKey()]=a}(r,i.batchId,n),await Jc(r,i.changes),await Xc(r.remoteStore)}catch(i){const s=oT(i,"Failed to persist write");n.reject(s)}}function Iv(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const l=o.view.bu(e);l.snapshot&&i.push(l.snapshot)}),function(s,o){const l=le(s);l.onlineState=o;let a=!1;l.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(a=!0)}),a&&hU(l)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pU(t,e){const n=le(t),r=e.batch.batchId;try{const i=await HF(n.localStore,e);aT(n,r,null),lT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jc(n,i)}catch(i){await RC(i)}}async function mU(t,e,n){const r=le(t);try{const i=await function(s,o){const l=le(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let u;return l.mutationQueue.lookupMutationBatch(a,o).next(c=>(Ne(c!==null),u=c.keys(),l.mutationQueue.removeMutationBatch(a,c))).next(()=>l.mutationQueue.performConsistencyCheck(a)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(a,u,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,u)).next(()=>l.localDocuments.getDocuments(a,u))})}(r.localStore,e);aT(r,e,n),lT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jc(r,i)}catch(i){await RC(i)}}function lT(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function aT(t,e,n){const r=le(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}async function Jc(t,e,n){const r=le(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((l,a)=>{o.push(r._c(a,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=_g.Ci(a.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(l,a){const u=le(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(a,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Wc(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of a){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function gU(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await eT(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(l=>{l.reject(new U(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jc(n,r.ji)}}function yU(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mU.bind(null,e),e}class _U{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return jF(this.persistence,new BF,e.initialUser,this.yt)}yc(e){return new $F(yg.Bs,this.yt)}gc(e){return new GF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Iv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gU.bind(null,this.syncEngine),await uU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cU}createDatastore(e){const n=Qc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new XF(i));var i;return function(s,o,l,a){return new eU(s,o,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=l=>Iv(this.syncEngine,l,0),o=Cv.C()?new Cv:new KF,new nU(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,l,a,u){const c=new dU(r,i,s,o,l,a);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=le(e);b("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Hl(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wU(t,e,n){if(!n)throw new U(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EU(t,e,n,r){if(e===!0&&r===!0)throw new U(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kv(t){if(!V.isDocumentKey(t))throw new U(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Hf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wg(t);throw new U(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map;class Nv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,EU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mM;switch(n.type){case"gapi":const r=n.client;return new vM(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rv.get(e);n&&(b("ComponentProvider","Removing Datastore"),Rv.delete(e),n.terminate())}(this),Promise.resolve()}}function SU(t,e,n,r={}){var i;const s=(t=Hf(t,Eg))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ff("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=Qe.MOCK_USER;else{o=Wp(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new U(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Qe(a)}t._authCredentials=new gM(new IC(o,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ul(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class Sg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sg(this.firestore,e,this._query)}}class ul extends Sg{constructor(e,n,r){super(e,n,WM(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new V(e))}withConverter(e){return new ul(this.firestore,e,this._path)}}function CU(t,e,...n){if(t=ce(t),arguments.length===1&&(e=kC.R()),wU("doc","path",e),t instanceof Eg){const r=Se.fromString(e,...n);return kv(r),new Tn(t,null,new V(r))}{if(!(t instanceof Tn||t instanceof ul))throw new U(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return kv(r),new Tn(t.firestore,t instanceof ul?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=kC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oT(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function IU(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kU(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RU(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Tv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Tv(e.remoteStore,s)),t.onlineComponents=e}async function RU(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await IU(t,new _U)),t.offlineComponents}async function NU(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await kU(t,new vU)),t.onlineComponents}function xU(t){return NU(t).then(e=>e.syncEngine)}class AU{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new tT(this,"async_queue_retry"),this.Wc=()=>{const n=id();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=id();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new qr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Wc(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw li("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=vg.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class uT extends Eg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new AU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cT(this),this._firestoreClient.terminate()}}function PU(t,e){const n=typeof t=="object"?t:yc(),r=typeof t=="string"?t:e||"(default)",i=vl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hp("firestore");s&&SU(i,...s)}return i}function OU(t){return t._firestoreClient||cT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,l){return new xM(i,s,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new TU(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cl(bn.fromBase64String(e))}catch(n){throw new U(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cl(bn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU=/^__.*__$/;class bU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new jl(e,this.data,n,this.fieldTransforms)}}function pT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Cg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Cg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Qu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(pT(this.sa)&&DU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class LU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Qc(e)}da(e,n,r,i=!1){return new Cg({sa:e,methodName:n,fa:r,path:Ze.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function MU(t){const e=t._freezeSettings(),n=Qc(t._databaseId);return new LU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FU(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);_T("Data must be an object, but it was:",o,r);const l=gT(r,o);let a,u;if(s.merge)a=new Kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=UU(e,h,n);if(!o.contains(d))throw new U(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);BU(c,d)||c.push(d)}a=new Kt(c),u=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,u=o.fieldTransforms;return new bU(new Wt(l),a,u)}function mT(t,e){if(yT(t=ce(t)))return _T("Unsupported field value:",e,t),gT(t,e);if(t instanceof dT)return function(n,r){if(!pT(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let l=mT(o,r.aa(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XM(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Fe.fromDate(n);return{timestampValue:zf(r.yt,i)}}if(n instanceof Fe){const i=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zf(r.yt,i)}}if(n instanceof fT)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cl)return{bytesValue:fF(r.yt,n._byteString)};if(n instanceof Tn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:JC(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${wg(n)}`)}(t,e)}function gT(t,e){const n={};return xC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zl(t,(r,i)=>{const s=mT(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof fT||t instanceof cl||t instanceof Tn||t instanceof dT)}function _T(t,e,n){if(!yT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=wg(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function UU(t,e,n){if((e=ce(e))instanceof hT)return e._internalPath;if(typeof e=="string")return VU(t,e);throw Qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const $U=new RegExp("[~\\*/\\[\\]]");function VU(t,e,n){if(e.search($U)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hT(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new U(T.INVALID_ARGUMENT,l+t+a)}function BU(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function jU(t,e,n){t=Hf(t,Tn);const r=Hf(t.firestore,uT),i=zU(t.converter,e,n);return HU(r,[FU(MU(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function HU(t,e){return function(n,r){const i=new qr;return n.asyncQueue.enqueueAndForget(async()=>fU(await xU(n),r,i)),i.promise}(OU(t),e)}(function(t,e=!0){(function(n){As=n})(hi),pr(new xn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new uT(new yM(n.getProvider("auth-internal")),new EM(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(l.options.projectId,a)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Lt(lv,"3.8.1",t),Lt(lv,"3.8.1","esm2017")})();const WU={apiKey:"AIzaSyBXlZ4HyZvYbK_KZhoxHA0LMfB5TBZBQfI",authDomain:"chatappavi.firebaseapp.com",projectId:"chatappavi",storageBucket:"chatappavi.appspot.com",messagingSenderId:"557679912507",appId:"1:557679912507:web:ec4f8f91f80675b93bde1e",measurementId:"G-YPDTN9K1JQ",databaseURL:"https://chatappavi-default-rtdb.asia-southeast1.firebasedatabase.app"};sE(WU);const Zc=WA(),qU=rO(),GU=PU(),vT=cL();var wT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xv=Jn.createContext&&Jn.createContext(wT),cr=globalThis&&globalThis.__assign||function(){return cr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},cr.apply(this,arguments)},KU=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function ET(t){return t&&t.map(function(e,n){return Jn.createElement(e.tag,cr({key:n},e.attr),ET(e.child))})}function ST(t){return function(e){return Jn.createElement(QU,cr({attr:cr({},t.attr)},e),ET(t.child))}}function QU(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=KU(t,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),Jn.createElement("svg",cr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:cr(cr({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Jn.createElement("title",null,s),t.children)};return xv!==void 0?Jn.createElement(xv.Consumer,null,function(n){return e(n)}):e(wT)}function YU(t){return ST({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"}},{tag:"path",attr:{d:"M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"}}]})(t)}/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hl.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Av="popstate";function XU(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=mi(i.location.hash.substr(1));return Wf("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:dl(s))}function r(i,s){JU(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return e2(e,n,r,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function JU(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZU(){return Math.random().toString(36).substr(2,8)}function Pv(t,e){return{usr:t.state,key:t.key,idx:e}}function Wf(t,e,n,r){return n===void 0&&(n=null),hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mi(e):e,{state:n,key:e&&e.key||r||ZU()})}function dl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function e2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Xn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(hl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){l=Xn.Pop;let w=c(),p=w==null?null:w-u;u=w,a&&a({action:l,location:_.location,delta:p})}function d(w,p){l=Xn.Push;let f=Wf(_.location,w,p);n&&n(f,w),u=c()+1;let g=Pv(f,u),v=_.createHref(f);try{o.pushState(g,"",v)}catch{i.location.assign(v)}s&&a&&a({action:l,location:_.location,delta:1})}function m(w,p){l=Xn.Replace;let f=Wf(_.location,w,p);n&&n(f,w),u=c();let g=Pv(f,u),v=_.createHref(f);o.replaceState(g,"",v),s&&a&&a({action:l,location:_.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:dl(w);return Re(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Av,h),a=w,()=>{i.removeEventListener(Av,h),a=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(w){return o.go(w)}};return _}var Ov;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ov||(Ov={}));function t2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?mi(e):e,i=IT(r.pathname||"/",n);if(i==null)return null;let s=CT(t);n2(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=h2(s[l],p2(i));return o}function CT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(Re(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=hr([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),CT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:u2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of TT(s.path))i(s,o,a)}),e}function TT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TT(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function n2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:c2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const r2=/^:\w+$/,i2=3,s2=2,o2=1,l2=10,a2=-2,Dv=t=>t==="*";function u2(t,e){let n=t.split("/"),r=n.length;return n.some(Dv)&&(r+=a2),e&&(r+=s2),n.filter(i=>!Dv(i)).reduce((i,s)=>i+(r2.test(s)?i2:s===""?o2:l2),r)}function c2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function h2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=d2({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let h=l.route;s.push({params:r,pathname:hr([i,c.pathname]),pathnameBase:_2(hr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=hr([i,c.pathnameBase]))}return s}function d2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=f2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=l[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=m2(l[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function f2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function p2(t){try{return decodeURI(t)}catch(e){return Tg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function m2(t,e){try{return decodeURIComponent(t)}catch(n){return Tg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function IT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Tg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mi(t):t;return{pathname:n?n.startsWith("/")?n:y2(n,e):e,search:v2(r),hash:w2(i)}}function y2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function RT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mi(t):(i=hl({},t),Re(!i.pathname||!i.pathname.includes("?"),sd("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),sd("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),sd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}l=h>=0?e[h]:"/"}let a=g2(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),_2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),v2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,w2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function E2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const S2=["post","put","patch","delete"];[...S2];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qf(){return qf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qf.apply(this,arguments)}function C2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const T2=typeof Object.is=="function"?Object.is:C2,{useState:I2,useEffect:k2,useLayoutEffect:R2,useDebugValue:N2}=ld;function x2(t,e,n){const r=e(),[{inst:i},s]=I2({inst:{value:r,getSnapshot:e}});return R2(()=>{i.value=r,i.getSnapshot=e,od(i)&&s({inst:i})},[t,r,e]),k2(()=>(od(i)&&s({inst:i}),t(()=>{od(i)&&s({inst:i})})),[t]),N2(r),r}function od(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!T2(n,r)}catch{return!0}}function A2(t,e,n){return e()}const P2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O2=!P2,D2=O2?A2:x2;"useSyncExternalStore"in ld&&(t=>t.useSyncExternalStore)(ld);const NT=k.createContext(null),xT=k.createContext(null),eh=k.createContext(null),th=k.createContext(null),Os=k.createContext({outlet:null,matches:[]}),AT=k.createContext(null);function b2(t,e){let{relative:n}=e===void 0?{}:e;ql()||Re(!1);let{basename:r,navigator:i}=k.useContext(eh),{hash:s,pathname:o,search:l}=PT(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:hr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ql(){return k.useContext(th)!=null}function nh(){return ql()||Re(!1),k.useContext(th).location}function rh(){ql()||Re(!1);let{basename:t,navigator:e}=k.useContext(eh),{matches:n}=k.useContext(Os),{pathname:r}=nh(),i=JSON.stringify(kT(n).map(l=>l.pathnameBase)),s=k.useRef(!1);return k.useEffect(()=>{s.current=!0}),k.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=RT(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:hr([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function PT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(Os),{pathname:i}=nh(),s=JSON.stringify(kT(r).map(o=>o.pathnameBase));return k.useMemo(()=>RT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function L2(t,e){ql()||Re(!1);let{navigator:n}=k.useContext(eh),r=k.useContext(xT),{matches:i}=k.useContext(Os),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=nh(),u;if(e){var c;let _=typeof e=="string"?mi(e):e;l==="/"||(c=_.pathname)!=null&&c.startsWith(l)||Re(!1),u=_}else u=a;let h=u.pathname||"/",d=l==="/"?h:h.slice(l.length)||"/",m=t2(t,{pathname:d}),y=$2(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:hr([l,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:hr([l,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&y?k.createElement(th.Provider,{value:{location:qf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xn.Pop}},y):y}function M2(){let t=j2(),e=E2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}class F2 extends k.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(Os.Provider,{value:this.props.routeContext},k.createElement(AT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U2(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(NT);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Os.Provider,{value:e},r)}function $2(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Re(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||k.createElement(M2,null):null,c=e.concat(r.slice(0,l+1)),h=()=>k.createElement(U2,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?k.createElement(F2,{location:n.location,component:u,error:a,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var bv;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(bv||(bv={}));var Yu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Yu||(Yu={}));function V2(t){let e=k.useContext(xT);return e||Re(!1),e}function B2(t){let e=k.useContext(Os);return e||Re(!1),e}function z2(t){let e=B2(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function j2(){var t;let e=k.useContext(AT),n=V2(Yu.UseRouteError),r=z2(Yu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ei(t){Re(!1)}function H2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1}=t;ql()&&Re(!1);let l=e.replace(/^\/*/,"/"),a=k.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=mi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=k.useMemo(()=>{let _=IT(u,l);return _==null?null:{pathname:_,search:c,hash:h,state:d,key:m}},[l,u,c,h,d,m]);return y==null?null:k.createElement(eh.Provider,{value:a},k.createElement(th.Provider,{children:n,value:{location:y,navigationType:i}}))}function W2(t){let{children:e,location:n}=t,r=k.useContext(NT),i=r&&!e?r.router.routes:Gf(e);return L2(i,n)}var Lv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Lv||(Lv={}));new Promise(()=>{});function Gf(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;if(r.type===k.Fragment){n.push.apply(n,Gf(r.props.children,e));return}r.type!==Ei&&Re(!1),!r.props.index||!r.props.children||Re(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Gf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kf(){return Kf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kf.apply(this,arguments)}function q2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function G2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function K2(t,e){return t.button===0&&(!e||e==="_self")&&!G2(t)}const Q2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Y2(t){let{basename:e,children:n,window:r}=t,i=k.useRef();i.current==null&&(i.current=XU({window:r,v5Compat:!0}));let s=i.current,[o,l]=k.useState({action:s.action,location:s.location});return k.useLayoutEffect(()=>s.listen(l),[s]),k.createElement(H2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const X2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OT=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,h=q2(e,Q2),d=typeof u=="string"?u:dl(u),m=/^[a-z+]+:\/\//i.test(d)||d.startsWith("//"),y=d,_=!1;if(X2&&m){let g=new URL(window.location.href),v=d.startsWith("//")?new URL(g.protocol+d):new URL(d);v.origin===g.origin?y=v.pathname+v.search+v.hash:_=!0}let w=b2(y,{relative:i}),p=J2(y,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function f(g){r&&r(g),g.defaultPrevented||p(g)}return k.createElement("a",Kf({},h,{href:m?d:w,onClick:_||s?r:f,ref:n,target:a}))});var Mv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Mv||(Mv={}));var Fv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fv||(Fv={}));function J2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=rh(),a=nh(),u=PT(t,{relative:o});return k.useCallback(c=>{if(K2(c,n)){c.preventDefault();let h=r!==void 0?r:dl(a)===dl(u);l(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const Z2=()=>{let[t,e]=k.useState(),[n,r]=k.useState("Room Image");return D("div",{className:"formContainer",children:ot("div",{className:"formWrapper",children:[D("div",{className:"logo",children:"ChatApp"}),D("div",{className:"title",children:"Create Room"}),ot("form",{onSubmit:async s=>{s.preventDefault();const o=s.target[0].value,l=s.target[1].value,a=s.target[2].value,u=s.target[3].files[0];if(l!==a)return e("Password Mismatch"),!1;try{const c=await Tx(Zc,`${o}@chatApp.com`,l),h=nO(qU,"userName"),d=eO(h,u);d.on(m=>{e(m.message)},()=>{tO(d.snapshot.ref).then(async m=>{console.log("File available at",m),await Rx(c.user,{userName:o,photoURL:m}),await jU(CU(GU,"room",c.user.uid),{uid:c.user.uid,userName:o,photoURL:m})})}),console.log(c),e()}catch(c){e(c.message)}},children:[D("input",{type:"text",name:"",id:"",placeholder:"Room Name",required:!0}),D("input",{type:"password",name:"",id:"",placeholder:"Room Password",required:!0}),D("input",{type:"password",name:"",id:"",placeholder:"Confirm Password",required:!0}),ot("label",{htmlFor:"avatar",children:[D("div",{className:"pic",children:D(YU,{})}),D("div",{className:"picDesc",children:n})]}),D("input",{style:{display:"none"},type:"file",accept:"image/*",name:"avatar",id:"avatar",onChange:s=>s.target.value?r(s.target.value):r("File Not Selected")}),D("button",{type:"submit",children:"Create Room"})]}),ot("p",{children:["Already have a room ? ",D(OT,{to:"/JoinRoom",children:"Join"})]}),t&&D("span",{children:t})]})})},e$=()=>{const[t,e]=k.useState(""),n=rh();return D("div",{className:"formContainer",children:ot("div",{className:"formWrapper",children:[D("div",{className:"logo",children:"ChatApp"}),D("div",{className:"title",children:"Join Room"}),ot("form",{action:"",onSubmit:async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{await Ix(Zc,`${s}@chatApp.com`,o),n("/")}catch(l){e(l.message)}},children:[D("input",{type:"text",name:"",id:"",placeholder:"Room Name",required:!0}),D("input",{type:"password",name:"",id:"",placeholder:"Room Password",required:!0}),D("button",{type:"submit",children:"Join Room"})]}),ot("p",{children:["Don't have a room ? ",D(OT,{to:"/CreateRoom",children:"Create"})]}),D("span",{children:t})]})})},wr=k.createContext(),t$=({children:t})=>{const[e,n]=k.useState({}),[r,i]=k.useState("");return k.useEffect(()=>{const s=Ax(Zc,o=>{n(o)});return()=>{s()}},[]),D(wr.Provider,{value:{currentRoom:e,user:r,setUser:i},children:t})},n$=()=>{const t=k.useContext(wr).currentRoom;return ot("div",{className:"navbar",children:[D("div",{className:"roomName",children:t.email}),D("div",{className:"rightNav",onClick:()=>Px(Zc),children:D("button",{children:"Leave"})})]})},r$=({userName:t,message:e})=>{const{user:n}=k.useContext(wr);return D(Gv,{children:ot("div",{className:n===t?"chatR":"chat",children:[D("div",{className:"chatUser",children:t}),D("div",{className:"chatMessage",children:e})]})})},i$=()=>{const t=k.useContext(wr).currentRoom,[e,n]=k.useState([]),r=k.useRef(null);return k.useEffect(()=>{r.current.scrollTop=r.current.scrollHeight},[r]),k.useEffect(()=>{const i=ES(vT,"chats/"+t.uid);nL(i,s=>{const o=s.val();if(o){const l=Object.keys(o).map(a=>D(r$,{userName:o[a].user,message:o[a].value},a)).reverse();n(l)}})},[t]),ot("div",{className:"chatSection",children:[D("div",{ref:r}),e]})};function s$(t){return ST({tag:"svg",attr:{t:"1569683742680",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]})(t)}const o$=()=>{const t=k.useContext(wr).currentRoom,{user:e}=k.useContext(wr);console.log(e);const[n,r]=k.useState("");return ot("div",{className:"chatInput",children:[D("input",{value:n,onChange:s=>r(s.target.value),type:"text",placeholder:"Message"}),D(s$,{onClick:()=>{const s=ES(vT,"chats/"+t.uid),o=eL(s);SS(o,{type:"text",user:e,value:n}),r("")},className:"sendIcon"})]})},Uv=()=>ot("div",{className:"homePage",children:[D(n$,{}),D(i$,{}),D("div",{className:"homeFooter",children:D(o$,{})})]});const l$=()=>{const t=rh(),{setUser:e,user:n}=k.useContext(wr),[r,i]=k.useState("");return ot("div",{className:"enterName",children:[D("div",{children:"Enter your name to Continue"}),ot("form",{onSubmit:o=>{o.preventDefault(),e(r),t("/")},children:[D("input",{required:!0,type:"text",id:"",value:r,onChange:o=>i(o.target.value)}),D("button",{type:"submit",children:"Continue"})]})]})},a$=()=>D(Gv,{children:D(Y2,{children:D(W2,{children:ot(Ei,{path:"/",children:[D(Ei,{index:!0,element:D(u$,{})}),D(Ei,{path:"CreateRoom",element:D(Z2,{})}),D(Ei,{path:"JoinRoom",element:D(e$,{})}),D(Ei,{path:"EnterName",element:D(l$,{})})]})})})}),u$=()=>{const{currentRoom:t,user:e}=k.useContext(wr);console.log(e);const n=rh();if(t)if(!e)n("/EnterName");else return D(Uv,{});else return n("/JoinRoom"),null;return D(Uv,{})};ad.createRoot(document.getElementById("root")).render(D(t$,{children:D(a$,{})}));
