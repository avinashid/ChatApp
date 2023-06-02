function MC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Os={},UC={get exports(){return Os},set exports(t){Os=t}},Fa={},S={},FC={get exports(){return S},set exports(t){S=t}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),$C=Symbol.for("react.portal"),zC=Symbol.for("react.fragment"),jC=Symbol.for("react.strict_mode"),BC=Symbol.for("react.profiler"),HC=Symbol.for("react.provider"),WC=Symbol.for("react.context"),VC=Symbol.for("react.forward_ref"),GC=Symbol.for("react.suspense"),qC=Symbol.for("react.memo"),KC=Symbol.for("react.lazy"),jp=Symbol.iterator;function YC(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var U_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,$_={};function xi(t,e,n){this.props=t,this.context=e,this.refs=$_,this.updater=n||U_}xi.prototype.isReactComponent={};xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=xi.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=$_,this.updater=n||U_}var _d=gd.prototype=new z_;_d.constructor=gd;F_(_d,xi.prototype);_d.isPureReactComponent=!0;var Bp=Array.isArray,j_=Object.prototype.hasOwnProperty,vd={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function H_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j_.call(e,r)&&!B_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_o,type:t,key:s,ref:o,props:i,_owner:vd.current}}function QC(t,e){return{$$typeof:_o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===_o}function XC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hp=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XC(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _o:case $C:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Fu(o,0):r,Bp(i)?(n="",t!=null&&(n=t.replace(Hp,"$&/")+"/"),El(i,e,n,"",function(u){return u})):i!=null&&(yd(i)&&(i=QC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bp(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Fu(s,l);o+=El(s,e,n,a,i)}else if(a=YC(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Fu(s,l++),o+=El(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},Cl={transition:null},ZC={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:vd};j.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=xi;j.Fragment=zC;j.Profiler=BC;j.PureComponent=gd;j.StrictMode=jC;j.Suspense=GC;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZC;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)j_.call(e,a)&&!B_.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_o,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:WC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HC,_context:t},t.Consumer=t};j.createElement=H_;j.createFactory=function(t){var e=H_.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:VC,render:t}};j.isValidElement=yd;j.lazy=function(t){return{$$typeof:KC,_payload:{_status:-1,_result:t},_init:JC}};j.memo=function(t,e){return{$$typeof:qC,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return We.current.useCallback(t,e)};j.useContext=function(t){return We.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return We.current.useDeferredValue(t)};j.useEffect=function(t,e){return We.current.useEffect(t,e)};j.useId=function(){return We.current.useId()};j.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return We.current.useMemo(t,e)};j.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};j.useRef=function(t){return We.current.useRef(t)};j.useState=function(t){return We.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return We.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(FC);const Nn=bC(S),Uc=MC({__proto__:null,default:Nn},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eS=S,tS=Symbol.for("react.element"),nS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,iS=eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sS={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rS.call(e,r)&&!sS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tS,type:t,key:s,ref:o,props:i,_owner:iS.current}}Fa.Fragment=nS;Fa.jsx=W_;Fa.jsxs=W_;(function(t){t.exports=Fa})(UC);const V_=Os.Fragment,P=Os.jsx,Me=Os.jsxs;var Fc={},$c={},oS={get exports(){return $c},set exports(t){$c=t}},ct={},zc={},lS={get exports(){return zc},set exports(t){zc=t}},G_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var b=N.length;N.push(M);e:for(;0<b;){var ae=b-1>>>1,_e=N[ae];if(0<i(_e,M))N[ae]=M,N[b]=_e,b=ae;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],b=N.pop();if(b!==M){N[0]=b;e:for(var ae=0,_e=N.length,Ko=_e>>>1;ae<Ko;){var Jn=2*(ae+1)-1,Uu=N[Jn],Zn=Jn+1,Yo=N[Zn];if(0>i(Uu,b))Zn<_e&&0>i(Yo,Uu)?(N[ae]=Yo,N[Zn]=b,ae=Zn):(N[ae]=Uu,N[Jn]=b,ae=Jn);else if(Zn<_e&&0>i(Yo,b))N[ae]=Yo,N[Zn]=b,ae=Zn;else break e}}return M}function i(N,M){var b=N.sortIndex-M.sortIndex;return b!==0?b:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,h=null,d=3,g=!1,_=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function y(N){if(v=!1,m(N),!_)if(n(a)!==null)_=!0,Mu(I);else{var M=n(u);M!==null&&bu(y,M.startTime-N)}}function I(N,M){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var b=d;try{for(m(M),h=n(a);h!==null&&(!(h.expirationTime>M)||N&&!wt());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var _e=ae(h.expirationTime<=M);M=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(a)&&r(a),m(M)}else r(a);h=n(a)}if(h!==null)var Ko=!0;else{var Jn=n(u);Jn!==null&&bu(y,Jn.startTime-M),Ko=!1}return Ko}finally{h=null,d=b,g=!1}}var T=!1,R=null,x=-1,G=5,$=-1;function wt(){return!(t.unstable_now()-$<G)}function Vi(){if(R!==null){var N=t.unstable_now();$=N;var M=!0;try{M=R(!0,N)}finally{M?Gi():(T=!1,R=null)}}else T=!1}var Gi;if(typeof f=="function")Gi=function(){f(Vi)};else if(typeof MessageChannel<"u"){var zp=new MessageChannel,LC=zp.port2;zp.port1.onmessage=Vi,Gi=function(){LC.postMessage(null)}}else Gi=function(){E(Vi,0)};function Mu(N){R=N,T||(T=!0,Gi())}function bu(N,M){x=E(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Mu(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var b=d;d=M;try{return N()}finally{d=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=d;d=N;try{return M()}finally{d=b}},t.unstable_scheduleCallback=function(N,M,b){var ae=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ae+b:ae):b=ae,N){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=b+_e,N={id:c++,callback:M,priorityLevel:N,startTime:b,expirationTime:_e,sortIndex:-1},b>ae?(N.sortIndex=b,e(u,N),n(a)===null&&N===n(u)&&(v?(p(x),x=-1):v=!0,bu(y,b-ae))):(N.sortIndex=_e,e(a,N),_||g||(_=!0,Mu(I))),N},t.unstable_shouldYield=wt,t.unstable_wrapCallback=function(N){var M=d;return function(){var b=d;d=M;try{return N.apply(this,arguments)}finally{d=b}}}})(G_);(function(t){t.exports=G_})(lS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=S,ut=zc;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K_=new Set,Ds={};function xr(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(Ds[t]=e,t=0;t<e.length;t++)K_.add(e[t])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},Vp={};function uS(t){return jc.call(Vp,t)?!0:jc.call(Wp,t)?!1:aS.test(t)?Vp[t]=!0:(Wp[t]=!0,!1)}function cS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hS(t,e,n,r){if(e===null||typeof e>"u"||cS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ve(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Ve(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Ve(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Ve(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Ve(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Ve(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Ve(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Ve(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Ve(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Ve(t,5,!1,t.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Ne[e]=new Ve(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Ne[e]=new Ve(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wd,Ed);Ne[e]=new Ve(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Ve(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Ve(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cd(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hS(e,n,i,r)&&(n=null),r||i===null?uS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hn=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),zr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Td=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),X_=Symbol.for("react.offscreen"),Gp=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,$u;function ls(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var zu=!1;function ju(t,e){if(!t||zu)return"";zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ls(t):""}function dS(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case zr:return"Portal";case Bc:return"Profiler";case Sd:return"StrictMode";case Hc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q_:return(t.displayName||"Context")+".Consumer";case Y_:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Td:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function fS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pS(t){var e=J_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jo(t){t._valueTracker||(t._valueTracker=pS(t))}function Z_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=J_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gc(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ev(t,e){e=e.checked,e!=null&&Cd(t,"checked",e,!1)}function qc(t,e){ev(t,e);var n=Bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,Bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var as=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(as(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bn(n)}}function tv(t,e){var n=Bn(e.value),r=Bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mS=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(t){mS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ms[e]=ms[t]})});function iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ms.hasOwnProperty(t)&&ms[t]?(""+e).trim():e+"px"}function sv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gS=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(gS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eh=null,ni=null,ri=null;function Xp(t){if(t=wo(t)){if(typeof eh!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Ha(e),eh(t.stateNode,t.type,e))}}function ov(t){ni?ri?ri.push(t):ri=[t]:ni=t}function lv(){if(ni){var t=ni,e=ri;if(ri=ni=null,Xp(t),e)for(t=0;t<e.length;t++)Xp(e[t])}}function av(t,e){return t(e)}function uv(){}var Bu=!1;function cv(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return av(t,e,n)}finally{Bu=!1,(ni!==null||ri!==null)&&(uv(),lv())}}function Ms(t,e){var n=t.stateNode;if(n===null)return null;var r=Ha(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var th=!1;if(tn)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){th=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{th=!1}function _S(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var gs=!1,Fl=null,$l=!1,nh=null,vS={onError:function(t){gs=!0,Fl=t}};function yS(t,e,n,r,i,s,o,l,a){gs=!1,Fl=null,_S.apply(vS,arguments)}function wS(t,e,n,r,i,s,o,l,a){if(yS.apply(this,arguments),gs){if(gs){var u=Fl;gs=!1,Fl=null}else throw Error(w(198));$l||($l=!0,nh=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(Ar(t)!==t)throw Error(w(188))}function ES(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jp(i),t;if(s===r)return Jp(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function dv(t){return t=ES(t),t!==null?fv(t):null}function fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fv(t);if(e!==null)return e;t=t.sibling}return null}var pv=ut.unstable_scheduleCallback,Zp=ut.unstable_cancelCallback,CS=ut.unstable_shouldYield,SS=ut.unstable_requestPaint,ue=ut.unstable_now,IS=ut.unstable_getCurrentPriorityLevel,Rd=ut.unstable_ImmediatePriority,mv=ut.unstable_UserBlockingPriority,zl=ut.unstable_NormalPriority,TS=ut.unstable_LowPriority,gv=ut.unstable_IdlePriority,$a=null,Ft=null;function kS(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot($a,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:PS,RS=Math.log,NS=Math.LN2;function PS(t){return t>>>=0,t===0?32:31-(RS(t)/NS|0)|0}var el=64,tl=4194304;function us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=us(l):(s&=o,s!==0&&(r=us(s)))}else o=n&~i,o!==0?r=us(o):s!==0&&(r=us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function xS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=xS(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _v(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function OS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,Pd,wv,Ev,Cv,ih=!1,nl=[],Pn=null,xn=null,An=null,bs=new Map,Us=new Map,vn=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function Yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wo(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LS(t,e,n,r,i){switch(e){case"focusin":return Pn=Yi(Pn,t,e,n,r,i),!0;case"dragenter":return xn=Yi(xn,t,e,n,r,i),!0;case"mouseover":return An=Yi(An,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bs.set(s,Yi(bs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Us.set(s,Yi(Us.get(s)||null,t,e,n,r,i)),!0}return!1}function Sv(t){var e=ir(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=hv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zc=r,n.target.dispatchEvent(r),Zc=null}else return e=wo(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){Sl(t)&&n.delete(e)}function MS(){ih=!1,Pn!==null&&Sl(Pn)&&(Pn=null),xn!==null&&Sl(xn)&&(xn=null),An!==null&&Sl(An)&&(An=null),bs.forEach(tm),Us.forEach(tm)}function Qi(t,e){t.blockedOn===e&&(t.blockedOn=null,ih||(ih=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,MS)))}function Fs(t){function e(i){return Qi(i,t)}if(0<nl.length){Qi(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pn!==null&&Qi(Pn,t),xn!==null&&Qi(xn,t),An!==null&&Qi(An,t),bs.forEach(e),Us.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&vn.shift()}var ii=hn.ReactCurrentBatchConfig,Bl=!0;function bS(t,e,n,r){var i=q,s=ii.transition;ii.transition=null;try{q=1,xd(t,e,n,r)}finally{q=i,ii.transition=s}}function US(t,e,n,r){var i=q,s=ii.transition;ii.transition=null;try{q=4,xd(t,e,n,r)}finally{q=i,ii.transition=s}}function xd(t,e,n,r){if(Bl){var i=sh(t,e,n,r);if(i===null)Zu(t,e,r,Hl,n),em(t,r);else if(LS(i,t,e,n,r))r.stopPropagation();else if(em(t,r),e&4&&-1<DS.indexOf(t)){for(;i!==null;){var s=wo(i);if(s!==null&&yv(s),s=sh(t,e,n,r),s===null&&Zu(t,e,r,Hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zu(t,e,r,null,n)}}var Hl=null;function sh(t,e,n,r){if(Hl=null,t=kd(r),t=ir(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function Iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IS()){case Rd:return 1;case mv:return 4;case zl:case TS:return 16;case gv:return 536870912;default:return 16}default:return 16}}var Tn=null,Ad=null,Il=null;function Tv(){if(Il)return Il;var t,e=Ad,n=e.length,r,i="value"in Tn?Tn.value:Tn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function nm(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:nm,this.isPropagationStopped=nm,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=ht(Ai),yo=ie({},Ai,{view:0,detail:0}),FS=ht(yo),Wu,Vu,Xi,za=ie({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(Wu=t.screenX-Xi.screenX,Vu=t.screenY-Xi.screenY):Vu=Wu=0,Xi=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:Vu}}),rm=ht(za),$S=ie({},za,{dataTransfer:0}),zS=ht($S),jS=ie({},yo,{relatedTarget:0}),Gu=ht(jS),BS=ie({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),HS=ht(BS),WS=ie({},Ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VS=ht(WS),GS=ie({},Ai,{data:0}),im=ht(GS),qS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YS[t])?!!e[t]:!1}function Dd(){return QS}var XS=ie({},yo,{key:function(t){if(t.key){var e=qS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JS=ht(XS),ZS=ie({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=ht(ZS),e1=ie({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),t1=ht(e1),n1=ie({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),r1=ht(n1),i1=ie({},za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=ht(i1),o1=[9,13,27,32],Ld=tn&&"CompositionEvent"in window,_s=null;tn&&"documentMode"in document&&(_s=document.documentMode);var l1=tn&&"TextEvent"in window&&!_s,kv=tn&&(!Ld||_s&&8<_s&&11>=_s),om=String.fromCharCode(32),lm=!1;function Rv(t,e){switch(t){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function a1(t,e){switch(t){case"compositionend":return Nv(e);case"keypress":return e.which!==32?null:(lm=!0,om);case"textInput":return t=e.data,t===om&&lm?null:t;default:return null}}function u1(t,e){if(Br)return t==="compositionend"||!Ld&&Rv(t,e)?(t=Tv(),Il=Ad=Tn=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kv&&e.locale!=="ko"?null:e.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c1[t.type]:e==="textarea"}function Pv(t,e,n,r){ov(r),e=Wl(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vs=null,$s=null;function h1(t){zv(t,0)}function ja(t){var e=Vr(t);if(Z_(e))return t}function d1(t,e){if(t==="change")return e}var xv=!1;if(tn){var qu;if(tn){var Ku="oninput"in document;if(!Ku){var um=document.createElement("div");um.setAttribute("oninput","return;"),Ku=typeof um.oninput=="function"}qu=Ku}else qu=!1;xv=qu&&(!document.documentMode||9<document.documentMode)}function cm(){vs&&(vs.detachEvent("onpropertychange",Av),$s=vs=null)}function Av(t){if(t.propertyName==="value"&&ja($s)){var e=[];Pv(e,$s,t,kd(t)),cv(h1,e)}}function f1(t,e,n){t==="focusin"?(cm(),vs=e,$s=n,vs.attachEvent("onpropertychange",Av)):t==="focusout"&&cm()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ja($s)}function m1(t,e){if(t==="click")return ja(e)}function g1(t,e){if(t==="input"||t==="change")return ja(e)}function _1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:_1;function zs(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jc.call(e,i)||!At(t[i],e[i]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function Ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=Dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ov(n.ownerDocument.documentElement,n)){if(r!==null&&Md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dm(n,s);var o=dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y1=tn&&"documentMode"in document&&11>=document.documentMode,Hr=null,oh=null,ys=null,lh=!1;function fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||Hr==null||Hr!==Ul(r)||(r=Hr,"selectionStart"in r&&Md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ys&&zs(ys,r)||(ys=r,r=Wl(oh,"onSelect"),0<r.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hr)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Yu={},Lv={};tn&&(Lv=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Ba(t){if(Yu[t])return Yu[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lv)return Yu[t]=e[n];return t}var Mv=Ba("animationend"),bv=Ba("animationiteration"),Uv=Ba("animationstart"),Fv=Ba("transitionend"),$v=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(t,e){$v.set(t,e),xr(e,[t])}for(var Qu=0;Qu<pm.length;Qu++){var Xu=pm[Qu],w1=Xu.toLowerCase(),E1=Xu[0].toUpperCase()+Xu.slice(1);qn(w1,"on"+E1)}qn(Mv,"onAnimationEnd");qn(bv,"onAnimationIteration");qn(Uv,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Fv,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wS(r,e,void 0,t),t.currentTarget=null}function zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;mm(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;mm(i,l,u),s=a}}}if($l)throw t=nh,$l=!1,nh=null,t}function X(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var r=t+"__bubble";n.has(r)||(jv(e,t,2,!1),n.add(r))}function Ju(t,e,n){var r=0;e&&(r|=4),jv(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[sl]){t[sl]=!0,K_.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Ju("selectionchange",!1,e))}}function jv(t,e,n,r){switch(Iv(e)){case 1:var i=bS;break;case 4:i=US;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ir(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}cv(function(){var u=s,c=kd(n),h=[];e:{var d=$v.get(t);if(d!==void 0){var g=Od,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":g=JS;break;case"focusin":_="focus",g=Gu;break;case"focusout":_="blur",g=Gu;break;case"beforeblur":case"afterblur":g=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=zS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=t1;break;case Mv:case bv:case Uv:g=HS;break;case Fv:g=r1;break;case"scroll":g=FS;break;case"wheel":g=s1;break;case"copy":case"cut":case"paste":g=VS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=sm}var v=(e&4)!==0,E=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Ms(f,p),y!=null&&v.push(Bs(f,y,m)))),E)break;f=f.return}0<v.length&&(d=new g(d,_,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Zc&&(_=n.relatedTarget||n.fromElement)&&(ir(_)||_[nn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?ir(_):null,_!==null&&(E=Ar(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=rm,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=sm,y="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?d:Vr(g),m=_==null?d:Vr(_),d=new v(y,f+"leave",g,n,c),d.target=E,d.relatedTarget=m,y=null,ir(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=m,v.relatedTarget=E,y=v),E=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=Mr(m))f++;for(m=0,y=p;y;y=Mr(y))m++;for(;0<f-m;)v=Mr(v),f--;for(;0<m-f;)p=Mr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Mr(v),p=Mr(p)}v=null}else v=null;g!==null&&gm(h,d,g,v,!1),_!==null&&E!==null&&gm(h,E,_,v,!0)}}e:{if(d=u?Vr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=d1;else if(am(d))if(xv)I=g1;else{I=p1;var T=f1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=m1);if(I&&(I=I(t,u))){Pv(h,I,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Kc(d,"number",d.value)}switch(T=u?Vr(u):window,t){case"focusin":(am(T)||T.contentEditable==="true")&&(Hr=T,oh=u,ys=null);break;case"focusout":ys=oh=Hr=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,fm(h,n,c);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":fm(h,n,c)}var R;if(Ld)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Br?Rv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(kv&&n.locale!=="ko"&&(Br||x!=="onCompositionStart"?x==="onCompositionEnd"&&Br&&(R=Tv()):(Tn=c,Ad="value"in Tn?Tn.value:Tn.textContent,Br=!0)),T=Wl(u,x),0<T.length&&(x=new im(x,t,null,n,c),h.push({event:x,listeners:T}),R?x.data=R:(R=Nv(n),R!==null&&(x.data=R)))),(R=l1?a1(t,n):u1(t,n))&&(u=Wl(u,"onBeforeInput"),0<u.length&&(c=new im("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}zv(h,e)})}function Bs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ms(t,n),s!=null&&r.unshift(Bs(t,s,i)),s=Ms(t,e),s!=null&&r.push(Bs(t,s,i))),t=t.return}return r}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ms(n,s),a!=null&&o.unshift(Bs(n,a,l))):i||(a=Ms(n,s),a!=null&&o.push(Bs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,I1=/\u0000|\uFFFD/g;function _m(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(I1,"")}function ol(t,e,n){if(e=_m(e),_m(t)!==e&&n)throw Error(w(425))}function Vl(){}var ah=null,uh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hh=typeof setTimeout=="function"?setTimeout:void 0,T1=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(R1)}:hh;function R1(t){setTimeout(function(){throw t})}function ec(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fs(e)}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Oi,Hs="__reactProps$"+Oi,nn="__reactContainer$"+Oi,dh="__reactEvents$"+Oi,N1="__reactListeners$"+Oi,P1="__reactHandles$"+Oi;function ir(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nn]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ym(t);t!==null;){if(n=t[Mt])return n;t=ym(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[Mt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Ha(t){return t[Hs]||null}var fh=[],Gr=-1;function Kn(t){return{current:t}}function Z(t){0>Gr||(t.current=fh[Gr],fh[Gr]=null,Gr--)}function Q(t,e){Gr++,fh[Gr]=t.current,t.current=e}var Hn={},Fe=Kn(Hn),Xe=Kn(!1),_r=Hn;function vi(t,e){var n=t.type.contextTypes;if(!n)return Hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function Gl(){Z(Xe),Z(Fe)}function wm(t,e,n){if(Fe.current!==Hn)throw Error(w(168));Q(Fe,e),Q(Xe,n)}function Bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,fS(t)||"Unknown",i));return ie({},n,r)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hn,_r=Fe.current,Q(Fe,t),Q(Xe,Xe.current),!0}function Em(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Bv(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,Z(Xe),Z(Fe),Q(Fe,t)):Z(Xe),Q(Xe,n)}var Vt=null,Wa=!1,tc=!1;function Hv(t){Vt===null?Vt=[t]:Vt.push(t)}function x1(t){Wa=!0,Hv(t)}function Yn(){if(!tc&&Vt!==null){tc=!0;var t=0,e=q;try{var n=Vt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vt=null,Wa=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(t+1)),pv(Rd,Yn),i}finally{q=e,tc=!1}}return null}var qr=[],Kr=0,Kl=null,Yl=0,dt=[],ft=0,vr=null,Gt=1,qt="";function er(t,e){qr[Kr++]=Yl,qr[Kr++]=Kl,Kl=t,Yl=e}function Wv(t,e,n){dt[ft++]=Gt,dt[ft++]=qt,dt[ft++]=vr,vr=t;var r=Gt;t=qt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gt=1<<32-Nt(e)+i|n<<i|r,qt=s+t}else Gt=1<<s|n<<i|r,qt=t}function bd(t){t.return!==null&&(er(t,1),Wv(t,1,0))}function Ud(t){for(;t===Kl;)Kl=qr[--Kr],qr[Kr]=null,Yl=qr[--Kr],qr[Kr]=null;for(;t===vr;)vr=dt[--ft],dt[ft]=null,qt=dt[--ft],dt[ft]=null,Gt=dt[--ft],dt[ft]=null}var ot=null,rt=null,ee=!1,It=null;function Vv(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,rt=On(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:Gt,overflow:qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,rt=null,!0):!1;default:return!1}}function ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mh(t){if(ee){var e=rt;if(e){var n=e;if(!Cm(t,e)){if(ph(t))throw Error(w(418));e=On(n.nextSibling);var r=ot;e&&Cm(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,ee=!1,ot=t)}}else{if(ph(t))throw Error(w(418));t.flags=t.flags&-4097|2,ee=!1,ot=t}}}function Sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function ll(t){if(t!==ot)return!1;if(!ee)return Sm(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=rt)){if(ph(t))throw Gv(),Error(w(418));for(;e;)Vv(t,e),e=On(e.nextSibling)}if(Sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rt=On(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rt=null}}else rt=ot?On(t.stateNode.nextSibling):null;return!0}function Gv(){for(var t=rt;t;)t=On(t.nextSibling)}function yi(){rt=ot=null,ee=!1}function Fd(t){It===null?It=[t]:It.push(t)}var A1=hn.ReactCurrentBatchConfig;function Ct(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ql=Kn(null),Xl=null,Yr=null,$d=null;function zd(){$d=Yr=Xl=null}function jd(t){var e=Ql.current;Z(Ql),t._currentValue=e}function gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){Xl=t,$d=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ke=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if($d!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(Xl===null)throw Error(w(308));Yr=t,Xl.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var sr=null;function Bd(t){sr===null?sr=[t]:sr.push(t)}function qv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,rn(t,r)}function rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _n=!1;function Hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,rn(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function Im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,r){var i=t.updateQueue;_n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(d=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=ie({},h,d);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=h):c=c.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=h}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Yv=new q_.Component().refs;function _h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Va={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=He(),i=Mn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Pt(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=He(),i=Mn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Pt(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),r=Mn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dn(t,i,r),e!==null&&(Pt(e,t,r,n),kl(e,t,r))}};function km(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zs(n,r)||!zs(i,s):!0}function Qv(t,e,n){var r=!1,i=Hn,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=Je(e)?_r:Fe.current,r=e.contextTypes,s=(r=r!=null)?vi(t,i):Hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Va,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Va.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yv,Hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=Je(e)?_r:Fe.current,i.context=vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Va.enqueueReplaceState(i,i.state,null),Jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Yv&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function Xv(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=bn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=ac(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var I=m.type;return I===jr?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===gn&&Nm(I)===f.type)?(y=i(f,m.props),y.ref=Ji(p,f,m),y.return=p,y):(y=Ol(m.type,m.key,m.props,null,p.mode,y),y.ref=Ji(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=uc(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,I){return f===null||f.tag!==7?(f=dr(m,p.mode,y,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ac(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xo:return m=Ol(f.type,f.key,f.props,null,p.mode,m),m.ref=Ji(p,null,f),m.return=p,m;case zr:return f=uc(f,p.mode,m),f.return=p,f;case gn:var y=f._init;return h(p,y(f._payload),m)}if(as(f)||qi(f))return f=dr(f,p.mode,m,null),f.return=p,f;al(p,f)}return null}function d(p,f,m,y){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xo:return m.key===I?a(p,f,m,y):null;case zr:return m.key===I?u(p,f,m,y):null;case gn:return I=m._init,d(p,f,I(m._payload),y)}if(as(m)||qi(m))return I!==null?null:c(p,f,m,y,null);al(p,m)}return null}function g(p,f,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,I);case zr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,I);case gn:var T=y._init;return g(p,f,m,T(y._payload),I)}if(as(y)||qi(y))return p=p.get(m)||null,c(f,p,y,I,null);al(f,y)}return null}function _(p,f,m,y){for(var I=null,T=null,R=f,x=f=0,G=null;R!==null&&x<m.length;x++){R.index>x?(G=R,R=null):G=R.sibling;var $=d(p,R,m[x],y);if($===null){R===null&&(R=G);break}t&&R&&$.alternate===null&&e(p,R),f=s($,f,x),T===null?I=$:T.sibling=$,T=$,R=G}if(x===m.length)return n(p,R),ee&&er(p,x),I;if(R===null){for(;x<m.length;x++)R=h(p,m[x],y),R!==null&&(f=s(R,f,x),T===null?I=R:T.sibling=R,T=R);return ee&&er(p,x),I}for(R=r(p,R);x<m.length;x++)G=g(R,p,x,m[x],y),G!==null&&(t&&G.alternate!==null&&R.delete(G.key===null?x:G.key),f=s(G,f,x),T===null?I=G:T.sibling=G,T=G);return t&&R.forEach(function(wt){return e(p,wt)}),ee&&er(p,x),I}function v(p,f,m,y){var I=qi(m);if(typeof I!="function")throw Error(w(150));if(m=I.call(m),m==null)throw Error(w(151));for(var T=I=null,R=f,x=f=0,G=null,$=m.next();R!==null&&!$.done;x++,$=m.next()){R.index>x?(G=R,R=null):G=R.sibling;var wt=d(p,R,$.value,y);if(wt===null){R===null&&(R=G);break}t&&R&&wt.alternate===null&&e(p,R),f=s(wt,f,x),T===null?I=wt:T.sibling=wt,T=wt,R=G}if($.done)return n(p,R),ee&&er(p,x),I;if(R===null){for(;!$.done;x++,$=m.next())$=h(p,$.value,y),$!==null&&(f=s($,f,x),T===null?I=$:T.sibling=$,T=$);return ee&&er(p,x),I}for(R=r(p,R);!$.done;x++,$=m.next())$=g(R,p,x,$.value,y),$!==null&&(t&&$.alternate!==null&&R.delete($.key===null?x:$.key),f=s($,f,x),T===null?I=$:T.sibling=$,T=$);return t&&R.forEach(function(Vi){return e(p,Vi)}),ee&&er(p,x),I}function E(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===jr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xo:e:{for(var I=m.key,T=f;T!==null;){if(T.key===I){if(I=m.type,I===jr){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===gn&&Nm(I)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=Ji(p,T,m),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===jr?(f=dr(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Ol(m.type,m.key,m.props,null,p.mode,y),y.ref=Ji(p,f,m),y.return=p,p=y)}return o(p);case zr:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=uc(m,p.mode,y),f.return=p,p=f}return o(p);case gn:return T=m._init,E(p,f,T(m._payload),y)}if(as(m))return _(p,f,m,y);if(qi(m))return v(p,f,m,y);al(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ac(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return E}var wi=Xv(!0),Jv=Xv(!1),Eo={},$t=Kn(Eo),Ws=Kn(Eo),Vs=Kn(Eo);function or(t){if(t===Eo)throw Error(w(174));return t}function Wd(t,e){switch(Q(Vs,e),Q(Ws,t),Q($t,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}Z($t),Q($t,e)}function Ei(){Z($t),Z(Ws),Z(Vs)}function Zv(t){or(Vs.current);var e=or($t.current),n=Qc(e,t.type);e!==n&&(Q(Ws,t),Q($t,n))}function Vd(t){Ws.current===t&&(Z($t),Z(Ws))}var ne=Kn(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=[];function Gd(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var Rl=hn.ReactCurrentDispatcher,rc=hn.ReactCurrentBatchConfig,yr=0,re=null,de=null,ye=null,ea=!1,ws=!1,Gs=0,O1=0;function xe(){throw Error(w(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,i,s){if(yr=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?b1:U1,t=n(r,i),ws){s=0;do{if(ws=!1,Gs=0,25<=s)throw Error(w(301));s+=1,ye=de=null,e.updateQueue=null,Rl.current=F1,t=n(r,i)}while(ws)}if(Rl.current=ta,e=de!==null&&de.next!==null,yr=0,ye=de=re=null,ea=!1,e)throw Error(w(300));return t}function Yd(){var t=Gs!==0;return Gs=0,t}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?re.memoizedState=ye=t:ye=ye.next=t,ye}function vt(){if(de===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=ye===null?re.memoizedState:ye.next;if(e!==null)ye=e,de=t;else{if(t===null)throw Error(w(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ye===null?re.memoizedState=ye=t:ye=ye.next=t}return ye}function qs(t,e){return typeof e=="function"?e(t):e}function ic(t){var e=vt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((yr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,re.lanes|=c,wr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,At(r,e.memoizedState)||(Ke=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sc(t){var e=vt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(Ke=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ey(){}function ty(t,e){var n=re,r=vt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,Ke=!0),r=r.queue,Qd(iy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ks(9,ry.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(w(349));yr&30||ny(n,e,i)}return i}function ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ry(t,e,n,r){e.value=n,e.getSnapshot=r,sy(e)&&oy(t)}function iy(t,e,n){return n(function(){sy(e)&&oy(t)})}function sy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function oy(t){var e=rn(t,1);e!==null&&Pt(e,t,1,-1)}function Pm(t){var e=Lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qs,lastRenderedState:t},e.queue=t,t=t.dispatch=M1.bind(null,re,t),[e.memoizedState,t]}function Ks(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ly(){return vt().memoizedState}function Nl(t,e,n,r){var i=Lt();re.flags|=t,i.memoizedState=Ks(1|e,n,void 0,r===void 0?null:r)}function Ga(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&qd(r,o.deps)){i.memoizedState=Ks(e,n,s,r);return}}re.flags|=t,i.memoizedState=Ks(1|e,n,s,r)}function xm(t,e){return Nl(8390656,8,t,e)}function Qd(t,e){return Ga(2048,8,t,e)}function ay(t,e){return Ga(4,2,t,e)}function uy(t,e){return Ga(4,4,t,e)}function cy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hy(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4,4,cy.bind(null,e,t),n)}function Xd(){}function dy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function py(t,e,n){return yr&21?(At(n,e)||(n=_v(),re.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ke=!0),t.memoizedState=n)}function D1(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=rc.transition;rc.transition={};try{t(!1),e()}finally{q=n,rc.transition=r}}function my(){return vt().memoizedState}function L1(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gy(t))_y(e,n);else if(n=qv(t,e,n,r),n!==null){var i=He();Pt(n,t,r,i),vy(n,e,r)}}function M1(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gy(t))_y(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,At(l,o)){var a=e.interleaved;a===null?(i.next=i,Bd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=qv(t,e,i,r),n!==null&&(i=He(),Pt(n,t,r,i),vy(n,e,r))}}function gy(t){var e=t.alternate;return t===re||e!==null&&e===re}function _y(t,e){ws=ea=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var ta={readContext:_t,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},b1={readContext:_t,useCallback:function(t,e){return Lt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,cy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Lt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Lt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=L1.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=Lt();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:Xd,useDeferredValue:function(t){return Lt().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=D1.bind(null,t[1]),Lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=Lt();if(ee){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Ce===null)throw Error(w(349));yr&30||ny(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xm(iy.bind(null,r,s,t),[t]),r.flags|=2048,Ks(9,ry.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Lt(),e=Ce.identifierPrefix;if(ee){var n=qt,r=Gt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U1={readContext:_t,useCallback:dy,useContext:_t,useEffect:Qd,useImperativeHandle:hy,useInsertionEffect:ay,useLayoutEffect:uy,useMemo:fy,useReducer:ic,useRef:ly,useState:function(){return ic(qs)},useDebugValue:Xd,useDeferredValue:function(t){var e=vt();return py(e,de.memoizedState,t)},useTransition:function(){var t=ic(qs)[0],e=vt().memoizedState;return[t,e]},useMutableSource:ey,useSyncExternalStore:ty,useId:my,unstable_isNewReconciler:!1},F1={readContext:_t,useCallback:dy,useContext:_t,useEffect:Qd,useImperativeHandle:hy,useInsertionEffect:ay,useLayoutEffect:uy,useMemo:fy,useReducer:sc,useRef:ly,useState:function(){return sc(qs)},useDebugValue:Xd,useDeferredValue:function(t){var e=vt();return de===null?e.memoizedState=t:py(e,de.memoizedState,t)},useTransition:function(){var t=sc(qs)[0],e=vt().memoizedState;return[t,e]},useMutableSource:ey,useSyncExternalStore:ty,useId:my,unstable_isNewReconciler:!1};function Ci(t,e){try{var n="",r=e;do n+=dS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $1=typeof WeakMap=="function"?WeakMap:Map;function yy(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ra||(ra=!0,Ph=r),yh(t,e)},n}function wy(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,Dn(n,e,1))),n.lanes|=1),t)}var z1=hn.ReactCurrentOwner,Ke=!1;function je(t,e,n,r){e.child=t===null?Jv(e,null,n,r):wi(e,t.child,n,r)}function Lm(t,e,n,r,i){n=n.render;var s=e.ref;return si(e,i),r=Kd(t,e,n,r,s,i),n=Yd(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(ee&&n&&bd(e),e.flags|=1,je(t,e,r,i),e.child)}function Mm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ey(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(o,r)&&t.ref===e.ref)return sn(t,e,i)}return e.flags|=1,t=bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ey(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zs(s,r)&&t.ref===e.ref)if(Ke=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ke=!0);else return e.lanes=t.lanes,sn(t,e,i)}return wh(t,e,n,r,i)}function Cy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Xr,nt),nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Xr,nt),nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Xr,nt),nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Xr,nt),nt|=r;return je(t,e,i,n),e.child}function Sy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,r,i){var s=Je(n)?_r:Fe.current;return s=vi(e,s),si(e,i),n=Kd(t,e,n,r,s,i),r=Yd(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(ee&&r&&bd(e),e.flags|=1,je(t,e,n,i),e.child)}function bm(t,e,n,r,i){if(Je(n)){var s=!0;ql(e)}else s=!1;if(si(e,i),e.stateNode===null)Pl(t,e),Qv(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=Je(n)?_r:Fe.current,u=vi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Rm(e,o,r,u),_n=!1;var d=e.memoizedState;o.state=d,Jl(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Xe.current||_n?(typeof c=="function"&&(_h(e,n,c,r),a=e.memoizedState),(l=_n||km(e,n,l,r,d,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kv(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Ct(e.type,l),o.props=u,h=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=_t(a):(a=Je(n)?_r:Fe.current,a=vi(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||d!==a)&&Rm(e,o,r,a),_n=!1,d=e.memoizedState,o.state=d,Jl(e,r,o,i);var _=e.memoizedState;l!==h||d!==_||Xe.current||_n?(typeof g=="function"&&(_h(e,n,g,r),_=e.memoizedState),(u=_n||km(e,n,u,r,d,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Eh(t,e,n,r,s,i)}function Eh(t,e,n,r,i,s){Sy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Em(e,n,!1),sn(t,e,s);r=e.stateNode,z1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wi(e,t.child,null,s),e.child=wi(e,null,l,s)):je(t,e,l,s),e.memoizedState=r.state,i&&Em(e,n,!0),e.child}function Iy(t){var e=t.stateNode;e.pendingContext?wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(t,e.context,!1),Wd(t,e.containerInfo)}function Um(t,e,n,r,i){return yi(),Fd(i),e.flags|=256,je(t,e,n,r),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ty(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ya(o,r,0,null),t=dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Ch,t):Jd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return j1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=bn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=bn(l,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ch,r}return s=t.child,t=s.sibling,r=bn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jd(t,e){return e=Ya({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&Fd(r),wi(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oc(Error(w(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ya({mode:"visible",children:r.children},i,0,null),s=dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wi(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Ch,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=oc(s,r,void 0),ul(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ke||l){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(t,i),Pt(r,t,i,-1))}return sf(),r=oc(Error(w(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rt=On(i.nextSibling),ot=e,ee=!0,It=null,t!==null&&(dt[ft++]=Gt,dt[ft++]=qt,dt[ft++]=vr,Gt=t.id,qt=t.overflow,vr=e),e=Jd(e,r.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gh(t.return,e,n)}function lc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ky(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lc(e,!0,n,null,s);break;case"together":lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B1(t,e,n){switch(e.tag){case 3:Iy(e),yi();break;case 5:Zv(e);break;case 1:Je(e.type)&&ql(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?Ty(t,e,n):(Q(ne,ne.current&1),t=sn(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ky(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Cy(t,e,n)}return sn(t,e,n)}var Ry,Ih,Ny,Py;Ry=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};Ny=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,or($t.current);var s=null;switch(n){case"input":i=Gc(t,i),r=Gc(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=Yc(t,i),r=Yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vl)}Xc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Py=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function H1(t,e,n){var r=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Je(e.type)&&Gl(),Ae(e),null;case 3:return r=e.stateNode,Ei(),Z(Xe),Z(Fe),Gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,It!==null&&(Oh(It),It=null))),Ih(t,e),Ae(e),null;case 5:Vd(e);var i=or(Vs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ny(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ae(e),null}if(t=or($t.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mt]=e,r[Hs]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)X(cs[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":qp(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":Yp(r,s),X("invalid",r)}Xc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",""+l]):Ds.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Jo(r),Kp(r,s,!0);break;case"textarea":Jo(r),Qp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[Hs]=r,Ry(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jc(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)X(cs[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":qp(t,r),i=Gc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),X("invalid",t);break;case"textarea":Yp(t,r),i=Yc(t,r),X("invalid",t);break;default:i=r}Xc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?sv(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rv(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ls(t,a):typeof a=="number"&&Ls(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ds.hasOwnProperty(s)?a!=null&&s==="onScroll"&&X("scroll",t):a!=null&&Cd(t,s,a,o))}switch(n){case"input":Jo(t),Kp(t,r,!1);break;case"textarea":Jo(t),Qp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Py(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=or(Vs.current),or($t.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return Ae(e),null;case 13:if(Z(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&rt!==null&&e.mode&1&&!(e.flags&128))Gv(),yi(),e.flags|=98560,s=!1;else if(s=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Mt]=e}else yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else It!==null&&(Oh(It),It=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?pe===0&&(pe=3):sf())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Ei(),Ih(t,e),t===null&&js(e.stateNode.containerInfo),Ae(e),null;case 10:return jd(e.type._context),Ae(e),null;case 17:return Je(e.type)&&Gl(),Ae(e),null;case 19:if(Z(ne),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zi(s,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zl(t),o!==null){for(e.flags|=128,Zi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>Si&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ae(e),null}else 2*ue()-s.renderingStartTime>Si&&n!==1073741824&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nt&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function W1(t,e){switch(Ud(e),e.tag){case 1:return Je(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ei(),Z(Xe),Z(Fe),Gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vd(e),null;case 13:if(Z(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ne),null;case 4:return Ei(),null;case 10:return jd(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var cl=!1,De=!1,V1=typeof WeakSet=="function"?WeakSet:Set,k=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){oe(t,e,r)}}var $m=!1;function G1(t,e){if(ah=Bl,t=Dv(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},Bl=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,E=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ct(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){oe(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=$m,$m=!1,_}function Es(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(e,n,s)}i=i.next}while(i!==r)}}function qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xy(t){var e=t.alternate;e!==null&&(t.alternate=null,xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[Hs],delete e[dh],delete e[N1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ay(t){return t.tag===5||t.tag===3||t.tag===4}function zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ay(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var Ie=null,St=!1;function pn(t,e,n){for(n=n.child;n!==null;)Oy(t,e,n),n=n.sibling}function Oy(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:De||Qr(n,e);case 6:var r=Ie,i=St;Ie=null,pn(t,e,n),Ie=r,St=i,Ie!==null&&(St?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(St?(t=Ie,n=n.stateNode,t.nodeType===8?ec(t.parentNode,n):t.nodeType===1&&ec(t,n),Fs(t)):ec(Ie,n.stateNode));break;case 4:r=Ie,i=St,Ie=n.stateNode.containerInfo,St=!0,pn(t,e,n),Ie=r,St=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Th(n,e,o),i=i.next}while(i!==r)}pn(t,e,n);break;case 1:if(!De&&(Qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,e,l)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,pn(t,e,n),De=r):pn(t,e,n);break;default:pn(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V1),e.forEach(function(r){var i=tI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,St=!1;break e;case 3:Ie=l.stateNode.containerInfo,St=!0;break e;case 4:Ie=l.stateNode.containerInfo,St=!0;break e}l=l.return}if(Ie===null)throw Error(w(160));Oy(s,o,i),Ie=null,St=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dy(e,t),e=e.sibling}function Dy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(e,t),Dt(t),r&4){try{Es(3,t,t.return),qa(3,t)}catch(v){oe(t,t.return,v)}try{Es(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:Et(e,t),Dt(t),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(Et(e,t),Dt(t),r&512&&n!==null&&Qr(n,n.return),t.flags&32){var i=t.stateNode;try{Ls(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ev(i,s),Jc(l,o);var u=Jc(l,s);for(o=0;o<a.length;o+=2){var c=a[o],h=a[o+1];c==="style"?sv(i,h):c==="dangerouslySetInnerHTML"?rv(i,h):c==="children"?Ls(i,h):Cd(i,c,h,u)}switch(l){case"input":qc(i,s);break;case"textarea":tv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ti(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ti(i,!!s.multiple,s.defaultValue,!0):ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hs]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(Et(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(Et(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fs(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:Et(e,t),Dt(t);break;case 13:Et(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=ue())),r&4&&jm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||c,Et(e,t),De=u):Et(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,g=d.child,d.tag){case 0:case 11:case 14:case 15:Es(4,d,d.return);break;case 1:Qr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:Qr(d,d.return);break;case 22:if(d.memoizedState!==null){Hm(h);continue}}g!==null?(g.return=d,k=g):Hm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=iv("display",o))}catch(v){oe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){oe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Et(e,t),Dt(t),r&4&&jm(t);break;case 21:break;default:Et(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ay(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ls(i,""),r.flags&=-33);var s=zm(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=zm(t);Rh(t,l,o);break;default:throw Error(w(161))}}catch(a){oe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q1(t,e,n){k=t,Ly(t)}function Ly(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||De;l=cl;var u=De;if(cl=o,(De=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Wm(i):a!==null?(a.return=o,k=a):Wm(i);for(;s!==null;)k=s,Ly(s),s=s.sibling;k=i,cl=l,De=u}Bm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Bm(t)}}function Bm(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Fs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}De||e.flags&512&&kh(e)}catch(d){oe(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Hm(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Wm(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qa(4,e)}catch(a){oe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){oe(e,i,a)}}var s=e.return;try{kh(e)}catch(a){oe(e,s,a)}break;case 5:var o=e.return;try{kh(e)}catch(a){oe(e,o,a)}}}catch(a){oe(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var K1=Math.ceil,na=hn.ReactCurrentDispatcher,Zd=hn.ReactCurrentOwner,mt=hn.ReactCurrentBatchConfig,H=0,Ce=null,he=null,ke=0,nt=0,Xr=Kn(0),pe=0,Ys=null,wr=0,Ka=0,ef=0,Cs=null,qe=null,tf=0,Si=1/0,Wt=null,ra=!1,Ph=null,Ln=null,hl=!1,kn=null,ia=0,Ss=0,xh=null,xl=-1,Al=0;function He(){return H&6?ue():xl!==-1?xl:xl=ue()}function Mn(t){return t.mode&1?H&2&&ke!==0?ke&-ke:A1.transition!==null?(Al===0&&(Al=_v()),Al):(t=q,t!==0||(t=window.event,t=t===void 0?16:Iv(t.type)),t):1}function Pt(t,e,n,r){if(50<Ss)throw Ss=0,xh=null,Error(w(185));vo(t,n,r),(!(H&2)||t!==Ce)&&(t===Ce&&(!(H&2)&&(Ka|=n),pe===4&&yn(t,ke)),Ze(t,r),n===1&&H===0&&!(e.mode&1)&&(Si=ue()+500,Wa&&Yn()))}function Ze(t,e){var n=t.callbackNode;AS(t,e);var r=jl(t,t===Ce?ke:0);if(r===0)n!==null&&Zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zp(n),e===1)t.tag===0?x1(Vm.bind(null,t)):Hv(Vm.bind(null,t)),k1(function(){!(H&6)&&Yn()}),n=null;else{switch(vv(r)){case 1:n=Rd;break;case 4:n=mv;break;case 16:n=zl;break;case 536870912:n=gv;break;default:n=zl}n=By(n,My.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function My(t,e){if(xl=-1,Al=0,H&6)throw Error(w(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=jl(t,t===Ce?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sa(t,r);else{e=r;var i=H;H|=2;var s=Uy();(Ce!==t||ke!==e)&&(Wt=null,Si=ue()+500,hr(t,e));do try{X1();break}catch(l){by(t,l)}while(1);zd(),na.current=s,H=i,he!==null?e=0:(Ce=null,ke=0,e=pe)}if(e!==0){if(e===2&&(i=rh(t),i!==0&&(r=i,e=Ah(t,i))),e===1)throw n=Ys,hr(t,0),yn(t,r),Ze(t,ue()),n;if(e===6)yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Y1(i)&&(e=sa(t,r),e===2&&(s=rh(t),s!==0&&(r=s,e=Ah(t,s))),e===1))throw n=Ys,hr(t,0),yn(t,r),Ze(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:tr(t,qe,Wt);break;case 3:if(yn(t,r),(r&130023424)===r&&(e=tf+500-ue(),10<e)){if(jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){He(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hh(tr.bind(null,t,qe,Wt),e);break}tr(t,qe,Wt);break;case 4:if(yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K1(r/1960))-r,10<r){t.timeoutHandle=hh(tr.bind(null,t,qe,Wt),r);break}tr(t,qe,Wt);break;case 5:tr(t,qe,Wt);break;default:throw Error(w(329))}}}return Ze(t,ue()),t.callbackNode===n?My.bind(null,t):null}function Ah(t,e){var n=Cs;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=sa(t,e),t!==2&&(e=qe,qe=n,e!==null&&Oh(e)),t}function Oh(t){qe===null?qe=t:qe.push.apply(qe,t)}function Y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yn(t,e){for(e&=~ef,e&=~Ka,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function Vm(t){if(H&6)throw Error(w(327));oi();var e=jl(t,0);if(!(e&1))return Ze(t,ue()),null;var n=sa(t,e);if(t.tag!==0&&n===2){var r=rh(t);r!==0&&(e=r,n=Ah(t,r))}if(n===1)throw n=Ys,hr(t,0),yn(t,e),Ze(t,ue()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,qe,Wt),Ze(t,ue()),null}function nf(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Si=ue()+500,Wa&&Yn())}}function Er(t){kn!==null&&kn.tag===0&&!(H&6)&&oi();var e=H;H|=1;var n=mt.transition,r=q;try{if(mt.transition=null,q=1,t)return t()}finally{q=r,mt.transition=n,H=e,!(H&6)&&Yn()}}function rf(){nt=Xr.current,Z(Xr)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T1(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:Ei(),Z(Xe),Z(Fe),Gd();break;case 5:Vd(r);break;case 4:Ei();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:jd(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Ce=t,he=t=bn(t.current,null),ke=nt=e,pe=0,Ys=null,ef=Ka=wr=0,qe=Cs=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sr=null}return t}function by(t,e){do{var n=he;try{if(zd(),Rl.current=ta,ea){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ea=!1}if(yr=0,ye=de=re=null,ws=!1,Gs=0,Zd.current=null,n===null||n.return===null){pe=1,Ys=e,he=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Om(o);if(g!==null){g.flags&=-257,Dm(g,o,l,s,e),g.mode&1&&Am(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Am(s,u,e),sf();break e}a=Error(w(426))}}else if(ee&&l.mode&1){var E=Om(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Dm(E,o,l,s,e),Fd(Ci(a,l));break e}}s=a=Ci(a,l),pe!==4&&(pe=2),Cs===null?Cs=[s]:Cs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=yy(s,a,e);Im(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ln===null||!Ln.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=wy(s,l,e);Im(s,y);break e}}s=s.return}while(s!==null)}$y(n)}catch(I){e=I,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function Uy(){var t=na.current;return na.current=ta,t===null?ta:t}function sf(){(pe===0||pe===3||pe===2)&&(pe=4),Ce===null||!(wr&268435455)&&!(Ka&268435455)||yn(Ce,ke)}function sa(t,e){var n=H;H|=2;var r=Uy();(Ce!==t||ke!==e)&&(Wt=null,hr(t,e));do try{Q1();break}catch(i){by(t,i)}while(1);if(zd(),H=n,na.current=r,he!==null)throw Error(w(261));return Ce=null,ke=0,pe}function Q1(){for(;he!==null;)Fy(he)}function X1(){for(;he!==null&&!CS();)Fy(he)}function Fy(t){var e=jy(t.alternate,t,nt);t.memoizedProps=t.pendingProps,e===null?$y(t):he=e,Zd.current=null}function $y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W1(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,he=null;return}}else if(n=H1(n,e,nt),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);pe===0&&(pe=5)}function tr(t,e,n){var r=q,i=mt.transition;try{mt.transition=null,q=1,J1(t,e,n,r)}finally{mt.transition=i,q=r}return null}function J1(t,e,n,r){do oi();while(kn!==null);if(H&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OS(t,s),t===Ce&&(he=Ce=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,By(zl,function(){return oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mt.transition,mt.transition=null;var o=q;q=1;var l=H;H|=4,Zd.current=null,G1(t,n),Dy(n,t),v1(uh),Bl=!!ah,uh=ah=null,t.current=n,q1(n),SS(),H=l,q=o,mt.transition=s}else t.current=n;if(hl&&(hl=!1,kn=t,ia=i),s=t.pendingLanes,s===0&&(Ln=null),kS(n.stateNode),Ze(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ra)throw ra=!1,t=Ph,Ph=null,t;return ia&1&&t.tag!==0&&oi(),s=t.pendingLanes,s&1?t===xh?Ss++:(Ss=0,xh=t):Ss=0,Yn(),null}function oi(){if(kn!==null){var t=vv(ia),e=mt.transition,n=q;try{if(mt.transition=null,q=16>t?16:t,kn===null)var r=!1;else{if(t=kn,kn=null,ia=0,H&6)throw Error(w(331));var i=H;for(H|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Es(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,g=c.return;if(xy(c),c===u){k=null;break}if(d!==null){d.return=g,k=d;break}k=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Es(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qa(9,l)}}catch(I){oe(l,l.return,I)}if(l===o){k=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,k=y;break e}k=l.return}}if(H=i,Yn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot($a,t)}catch{}r=!0}return r}finally{q=n,mt.transition=e}}return!1}function Gm(t,e,n){e=Ci(n,e),e=yy(t,e,1),t=Dn(t,e,1),e=He(),t!==null&&(vo(t,1,e),Ze(t,e))}function oe(t,e,n){if(t.tag===3)Gm(t,t,n);else for(;e!==null;){if(e.tag===3){Gm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){t=Ci(n,t),t=wy(e,t,1),e=Dn(e,t,1),t=He(),e!==null&&(vo(e,1,t),Ze(e,t));break}}e=e.return}}function Z1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=He(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>ue()-tf?hr(t,0):ef|=n),Ze(t,e)}function zy(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=He();t=rn(t,e),t!==null&&(vo(t,e,n),Ze(t,n))}function eI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zy(t,n)}function tI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),zy(t,n)}var jy;jy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Ke=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ke=!1,B1(t,e,n);Ke=!!(t.flags&131072)}else Ke=!1,ee&&e.flags&1048576&&Wv(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=vi(e,Fe.current);si(e,n),i=Kd(null,e,r,t,i,n);var s=Yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hd(e),i.updater=Va,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Eh(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&bd(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rI(r),t=Ct(r,t),i){case 0:e=wh(null,e,r,t,n);break e;case 1:e=bm(null,e,r,t,n);break e;case 11:e=Lm(null,e,r,t,n);break e;case 14:e=Mm(null,e,r,Ct(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),bm(t,e,r,i,n);case 3:e:{if(Iy(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kv(t,e),Jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ci(Error(w(423)),e),e=Um(t,e,r,n,i);break e}else if(r!==i){i=Ci(Error(w(424)),e),e=Um(t,e,r,n,i);break e}else for(rt=On(e.stateNode.containerInfo.firstChild),ot=e,ee=!0,It=null,n=Jv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){e=sn(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return Zv(e),t===null&&mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ch(r,i)?o=null:s!==null&&ch(r,s)&&(e.flags|=32),Sy(t,e),je(t,e,o,n),e.child;case 6:return t===null&&mh(e),null;case 13:return Ty(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wi(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),Lm(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Ql,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!Xe.current){e=sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Jt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gh(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,si(e,n),i=_t(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=Ct(r,e.pendingProps),i=Ct(r.type,i),Mm(t,e,r,i,n);case 15:return Ey(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),Pl(t,e),e.tag=1,Je(r)?(t=!0,ql(e)):t=!1,si(e,n),Qv(e,r,i),vh(e,r,i,n),Eh(null,e,r,!0,t,n);case 19:return ky(t,e,n);case 22:return Cy(t,e,n)}throw Error(w(156,e.tag))};function By(t,e){return pv(t,e)}function nI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new nI(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rI(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===Td)return 14}return 2}function bn(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return dr(n.children,i,s,e);case Sd:o=8,i|=8;break;case Bc:return t=pt(12,n,e,i|2),t.elementType=Bc,t.lanes=s,t;case Hc:return t=pt(13,n,e,i),t.elementType=Hc,t.lanes=s,t;case Wc:return t=pt(19,n,e,i),t.elementType=Wc,t.lanes=s,t;case X_:return Ya(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y_:o=10;break e;case Q_:o=9;break e;case Id:o=11;break e;case Td:o=14;break e;case gn:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function dr(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function Ya(t,e,n,r){return t=pt(22,t,r,e),t.elementType=X_,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function uc(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,i,s,o,l,a){return t=new iI(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(s),t}function sI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hy(t){if(!t)return Hn;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Je(n))return Bv(t,n,e)}return e}function Wy(t,e,n,r,i,s,o,l,a){return t=lf(n,r,!0,t,i,s,o,l,a),t.context=Hy(null),n=t.current,r=He(),i=Mn(n),s=Jt(r,i),s.callback=e??null,Dn(n,s,i),t.current.lanes=i,vo(t,i,r),Ze(t,r),t}function Qa(t,e,n,r){var i=e.current,s=He(),o=Mn(i);return n=Hy(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dn(i,e,o),t!==null&&(Pt(t,i,o,s),kl(t,i,o)),o}function oa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){qm(t,e),(t=t.alternate)&&qm(t,e)}function oI(){return null}var Vy=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}Xa.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Qa(t,e,null,null)};Xa.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Qa(null,t,null,null)}),e[nn]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&Sv(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Km(){}function lI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=oa(o);s.call(u)}}var o=Wy(e,r,t,0,null,!1,!1,"",Km);return t._reactRootContainer=o,t[nn]=o.current,js(t.nodeType===8?t.parentNode:t),Er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=oa(a);l.call(u)}}var a=lf(t,0,!1,null,null,!1,!1,"",Km);return t._reactRootContainer=a,t[nn]=a.current,js(t.nodeType===8?t.parentNode:t),Er(function(){Qa(e,a,n,r)}),a}function Za(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=oa(o);l.call(a)}}Qa(e,o,t,i)}else o=lI(n,e,t,i,r);return oa(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=us(e.pendingLanes);n!==0&&(Nd(e,n|1),Ze(e,ue()),!(H&6)&&(Si=ue()+500,Yn()))}break;case 13:Er(function(){var r=rn(t,1);if(r!==null){var i=He();Pt(r,t,1,i)}}),af(t,1)}};Pd=function(t){if(t.tag===13){var e=rn(t,134217728);if(e!==null){var n=He();Pt(e,t,134217728,n)}af(t,134217728)}};wv=function(t){if(t.tag===13){var e=Mn(t),n=rn(t,e);if(n!==null){var r=He();Pt(n,t,e,r)}af(t,e)}};Ev=function(){return q};Cv=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};eh=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ha(r);if(!i)throw Error(w(90));Z_(r),qc(r,i)}}}break;case"textarea":tv(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};av=nf;uv=Er;var aI={usingClientEntryPoint:!1,Events:[wo,Vr,Ha,ov,lv,nf]},es={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uI={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dv(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||oI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{$a=dl.inject(uI),Ft=dl}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aI;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(w(200));return sI(t,e,null,n)};ct.createRoot=function(t,e){if(!cf(t))throw Error(w(299));var n=!1,r="",i=Vy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,i),t[nn]=e.current,js(t.nodeType===8?t.parentNode:t),new uf(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=dv(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return Er(t)};ct.hydrate=function(t,e,n){if(!Ja(e))throw Error(w(200));return Za(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wy(e,null,t,1,n??null,i,!1,s,o),t[nn]=e.current,js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xa(e)};ct.render=function(t,e,n){if(!Ja(e))throw Error(w(200));return Za(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(w(40));return t._reactRootContainer?(Er(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};ct.unstable_batchedUpdates=nf;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ja(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Za(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ct})(oS);var Ym=$c;Fc.createRoot=Ym.createRoot,Fc.hydrateRoot=Ym.hydrateRoot;/**
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
 */const Gy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Di(e)},Di=function(t){return new Error("Firebase Database ("+Gy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ky=function(t){const e=qy(t);return hf.encodeByteArray(e,!0)},la=function(t){return Ky(t).replace(/\./g,"")},aa=function(t){try{return hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hI(t){return Yy(void 0,t)}function Yy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dI(n)||(t[n]=Yy(t[n],e[n]));return t}function dI(t){return t!=="__proto__"}/**
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
 */function fI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pI=()=>fI().__FIREBASE_DEFAULTS__,mI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aa(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return pI()||mI()||gI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qy=t=>{var e,n;return(n=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},df=t=>{const e=Qy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_I=()=>{var t;return(t=eu())===null||t===void 0?void 0:t.config},Xy=t=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ff(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[la(JSON.stringify(n)),la(JSON.stringify(o)),l].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function vI(){var t;const e=(t=eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zy(){return Gy.NODE_ADMIN===!0}function EI(){try{return typeof indexedDB=="object"}catch{return!1}}function CI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const SI="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?II(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,l,r)}}function II(t,e){return t.replace(TI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;/**
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
 */function Qs(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
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
 */const e0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qs(aa(s[0])||""),n=Qs(aa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},kI=function(t){const e=e0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RI=function(t){const e=e0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ua(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qm(s)&&Qm(o)){if(!ca(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
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
 */function Li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class NI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):h<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PI(t,e){const n=new xI(t,e);return n.subscribe.bind(n)}class xI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cc),i.error===void 0&&(i.error=cc),i.complete===void 0&&(i.complete=cc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cc(){}function mf(t,e){return`${t} failed: ${e} argument `}/**
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
 */const OI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class DI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MI(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LI(t){return t===nr?void 0:t}function MI(t){return t.instantiationMode==="EAGER"}/**
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
 */class bI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const UI={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},FI=V.INFO,$I={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},zI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$I[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const jI=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function BI(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,Lh=new WeakMap,n0=new WeakMap,hc=new WeakMap,gf=new WeakMap;function WI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t0.set(n,t)}).catch(()=>{}),gf.set(e,t),e}function VI(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GI(t){Mh=t(Mh)}function qI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dc(this),e,...n);return n0.set(r,e.sort?e.sort():[e]),Un(r)}:HI().includes(t)?function(...e){return t.apply(dc(this),e),Un(t0.get(this))}:function(...e){return Un(t.apply(dc(this),e))}}function KI(t){return typeof t=="function"?qI(t):(t instanceof IDBTransaction&&VI(t),jI(t,BI())?new Proxy(t,Mh):t)}function Un(t){if(t instanceof IDBRequest)return WI(t);if(hc.has(t))return hc.get(t);const e=KI(t);return e!==t&&(hc.set(t,e),gf.set(e,t)),e}const dc=t=>gf.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Un(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Un(o.result),a.oldVersion,a.newVersion,Un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const QI=["get","getKey","getAll","getAllKeys","count"],XI=["put","add","delete","clear"],fc=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return fc.set(e,s),s}GI(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",eg="0.9.1";/**
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
 */const Cr=new ru("@firebase/app"),eT="@firebase/app-compat",tT="@firebase/analytics-compat",nT="@firebase/analytics",rT="@firebase/app-check-compat",iT="@firebase/app-check",sT="@firebase/auth",oT="@firebase/auth-compat",lT="@firebase/database",aT="@firebase/database-compat",uT="@firebase/functions",cT="@firebase/functions-compat",hT="@firebase/installations",dT="@firebase/installations-compat",fT="@firebase/messaging",pT="@firebase/messaging-compat",mT="@firebase/performance",gT="@firebase/performance-compat",_T="@firebase/remote-config",vT="@firebase/remote-config-compat",yT="@firebase/storage",wT="@firebase/storage-compat",ET="@firebase/firestore",CT="@firebase/firestore-compat",ST="firebase",IT="9.16.0";/**
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
 */const Uh="[DEFAULT]",TT={[bh]:"fire-core",[eT]:"fire-core-compat",[nT]:"fire-analytics",[tT]:"fire-analytics-compat",[iT]:"fire-app-check",[rT]:"fire-app-check-compat",[sT]:"fire-auth",[oT]:"fire-auth-compat",[lT]:"fire-rtdb",[aT]:"fire-rtdb-compat",[uT]:"fire-fn",[cT]:"fire-fn-compat",[hT]:"fire-iid",[dT]:"fire-iid-compat",[fT]:"fire-fcm",[pT]:"fire-fcm-compat",[mT]:"fire-perf",[gT]:"fire-perf-compat",[_T]:"fire-rc",[vT]:"fire-rc-compat",[yT]:"fire-gcs",[wT]:"fire-gcs-compat",[ET]:"fire-fst",[CT]:"fire-fst-compat","fire-js":"fire-js",[ST]:"fire-js-all"};/**
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
 */const ha=new Map,Fh=new Map;function kT(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Fh.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of ha.values())kT(n,t);return!0}function So(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const RT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new Co("app","Firebase",RT);/**
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
 */class NT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=IT;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=_I()),!n)throw Fn.create("no-options");const s=ha.get(i);if(s){if(ca(n,s.options)&&ca(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const o=new bI(i);for(const a of Fh.values())o.addComponent(a);const l=new NT(n,r,o);return ha.set(i,l),l}function iu(t=Uh){const e=ha.get(t);if(!e&&t===Uh)return r0();if(!e)throw Fn.create("no-app",{appName:t});return e}function gt(t,e,n){var r;let i=(r=TT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(l.join(" "));return}Wn(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const PT="firebase-heartbeat-database",xT=1,Xs="firebase-heartbeat-store";let pc=null;function i0(){return pc||(pc=YI(PT,xT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),pc}async function AT(t){try{return(await i0()).transaction(Xs).objectStore(Xs).get(s0(t))}catch(e){if(e instanceof Ht)Cr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function tg(t,e){try{const r=(await i0()).transaction(Xs,"readwrite");return await r.objectStore(Xs).put(e,s0(t)),r.done}catch(n){if(n instanceof Ht)Cr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function s0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OT=1024,DT=30*24*60*60*1e3;class LT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ng();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=DT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ng(),{heartbeatsToSend:n,unsentEntries:r}=MT(this._heartbeatsCache.heartbeats),i=la(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ng(){return new Date().toISOString().substring(0,10)}function MT(t,e=OT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EI()?CI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rg(t){return la(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UT(t){Wn(new on("platform-logger",e=>new JI(e),"PRIVATE")),Wn(new on("heartbeat",e=>new LT(e),"PRIVATE")),gt(bh,eg,t),gt(bh,eg,"esm2017"),gt("fire-js","")}UT("");var FT="firebase",$T="9.16.0";/**
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
 */gt(FT,$T,"app");function _f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function o0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zT=o0,l0=new Co("auth","Firebase",o0());/**
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
 */const ig=new ru("@firebase/auth");function Dl(t,...e){ig.logLevel<=V.ERROR&&ig.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw vf(t,...e)}function zt(t,...e){return vf(t,...e)}function jT(t,e,n){const r=Object.assign(Object.assign({},zT()),{[e]:n});return new Co("auth","Firebase",r).create(e,{appName:t.name})}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l0.create(t,...e)}function D(t,e,...n){if(!t)throw vf(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function ln(t,e){t||Kt(e)}/**
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
 */const sg=new Map;function Yt(t){ln(t instanceof Function,"Expected a class definition");let e=sg.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sg.set(t,e),e)}/**
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
 */function BT(t,e){const n=So(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ca(s,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function HT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WT(){return og()==="http:"||og()==="https:"}function og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WT()||yI()||"connection"in navigator)?navigator.onLine:!0}function GT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=pf()||Jy()}get(){return VT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yf(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class a0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const KT=new Io(3e4,6e4);function To(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ko(t,e,n,r,i={}){return u0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Li(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),a0.fetch()(c0(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function u0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qT),e);try{const i=new YT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw fl(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jT(t,c,u);Ot(t,c)}}catch(i){if(i instanceof Ht)throw i;Ot(t,"network-request-failed")}}async function Ro(t,e,n,r,i={}){const s=await ko(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function c0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}class YT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),KT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function QT(t,e){return ko(t,"POST","/v1/accounts:delete",e)}async function XT(t,e){return ko(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JT(t,e=!1){const n=ge(t),r=await n.getIdToken(e),i=wf(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Is(mc(i.auth_time)),issuedAtTime:Is(mc(i.iat)),expirationTime:Is(mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=aa(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZT(t){const e=wf(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&ek(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ek({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class h0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function da(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Js(t,XT(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ik(s.providerUserInfo):[],l=rk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new h0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function nk(t){const e=ge(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ik(t){return t.map(e=>{var{providerId:n}=e,r=_f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sk(t,e){const n=await u0(t,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=c0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",a0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zs;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function mn(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new h0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JT(this,e)}reload(){return nk(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Js(this,QT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:I,providerData:T,stsTokenManager:R}=n;D(m&&R,e,"internal-error");const x=Zs.fromJSON(this.name,R);D(typeof m=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),D(typeof y=="boolean",e,"internal-error"),D(typeof I=="boolean",e,"internal-error"),mn(g,e.name),mn(_,e.name),mn(v,e.name),mn(E,e.name),mn(p,e.name),mn(f,e.name);const G=new fr({uid:m,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(G.providerData=T.map($=>Object.assign({},$))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zs;i.updateFromServerResponse(n);const s=new fr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await da(s),s}}/**
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
 */class d0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d0.type="NONE";const lg=d0;/**
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
 */function Ll(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(Yt(lg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(lg);const o=Ll(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const h=fr._fromJSON(e,c);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new li(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new li(s,e,r))}}/**
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
 */function ag(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_0(e))return"Blackberry";if(v0(e))return"Webos";if(Ef(e))return"Safari";if((e.includes("chrome/")||p0(e))&&!e.includes("edge/"))return"Chrome";if(g0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f0(t=$e()){return/firefox\//i.test(t)}function Ef(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p0(t=$e()){return/crios\//i.test(t)}function m0(t=$e()){return/iemobile/i.test(t)}function g0(t=$e()){return/android/i.test(t)}function _0(t=$e()){return/blackberry/i.test(t)}function v0(t=$e()){return/webos/i.test(t)}function su(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ok(t=$e()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lk(){return wI()&&document.documentMode===10}function y0(t=$e()){return su(t)||g0(t)||v0(t)||_0(t)||/windows phone/i.test(t)||m0(t)}function ak(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function w0(t,e=[]){let n;switch(t){case"Browser":n=ag($e());break;case"Worker":n=`${ag($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ck{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ge(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function No(t){return ge(t)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=PI(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function hk(t,e,n){const r=No(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=E0(e),{host:o,port:l}=dk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fk()}function E0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dk(t){const e=E0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cg(o)}}}function cg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function pk(t,e){return ko(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mk(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",To(t,e))}/**
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
 */async function gk(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",To(t,e))}async function _k(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",To(t,e))}/**
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
 */class eo extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return mk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gk(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _k(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ai(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",To(t,e))}/**
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
 */const vk="http://localhost";class Sr extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:vk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Li(n)}return e}}/**
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
 */function yk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wk(t){const e=hs(ds(t)).link,n=e?hs(ds(e)).deep_link_id:null,r=hs(ds(t)).deep_link_id;return(r?hs(ds(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,i,s,o,l;const a=hs(ds(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,h=yk((i=a.mode)!==null&&i!==void 0?i:null);D(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=wk(e);try{return new Sf(n)}catch{return null}}}/**
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
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return D(r,"argument-error"),eo._fromEmailAndCode(e,r.code,r.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class C0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Po extends C0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Po{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class En extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class Cn extends Po{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
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
 */class Sn extends Po{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */async function Ek(t,e){return Ro(t,"POST","/v1/accounts:signUp",To(t,e))}/**
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
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fr._fromIdTokenResponse(e,r,i),o=hg(r);return new Ir({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hg(r);return new Ir({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fa extends Ht{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fa(e,n,r,i)}}function S0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,s,e,r):s})}async function Ck(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
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
 */async function Sk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Js(t,S0(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=wf(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),Ir._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
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
 */async function I0(t,e,n=!1){const r="signIn",i=await S0(t,r,e),s=await Ir._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ik(t,e){return I0(No(t),e)}async function Tk(t,e,n){const r=No(t),i=await Ek(r,{returnSecureToken:!0,email:e,password:n}),s=await Ir._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function kk(t,e,n){return Ik(ge(t),Mi.credential(e,n))}function Rk(t,e,n,r){return ge(t).onIdTokenChanged(e,n,r)}function Nk(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}function Pk(t,e,n,r){return ge(t).onAuthStateChanged(e,n,r)}function xk(t){return ge(t).signOut()}const pa="__sak";/**
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
 */class T0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ak(){const t=$e();return Ef(t)||su(t)}const Ok=1e3,Dk=10;class k0 extends T0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ak()&&ak(),this.fallbackToPolling=y0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k0.type="LOCAL";const Lk=k0;/**
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
 */class R0 extends T0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R0.type="SESSION";const N0=R0;/**
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
 */function Mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Mk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ou.receivers=[];/**
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
 */function If(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=If("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function Uk(t){jt().location.href=t}/**
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
 */function P0(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function Fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $k(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zk(){return P0()?self:null}/**
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
 */const x0="firebaseLocalStorageDb",jk=1,ma="firebaseLocalStorage",A0="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lu(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function Bk(){const t=indexedDB.deleteDatabase(x0);return new xo(t).toPromise()}function zh(){const t=indexedDB.open(x0,jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ma,{keyPath:A0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ma)?e(r):(r.close(),await Bk(),e(await zh()))})})}async function dg(t,e,n){const r=lu(t,!0).put({[A0]:e,value:n});return new xo(r).toPromise()}async function Hk(t,e){const n=lu(t,!1).get(e),r=await new xo(n).toPromise();return r===void 0?null:r.value}function fg(t,e){const n=lu(t,!0).delete(e);return new xo(n).toPromise()}const Wk=800,Vk=3;class O0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ou._getInstance(zk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fk(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$k()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await dg(e,pa,"1"),await fg(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lu(i,!1).getAll();return new xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O0.type="LOCAL";const Gk=O0;/**
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
 */function qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qk().appendChild(r)})}function Yk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Io(3e4,6e4);/**
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
 */function Qk(t,e){return e?Yt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tf extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xk(t){return I0(t.auth,new Tf(t),t.bypassAuthState)}function Jk(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Sk(n,new Tf(t),t.bypassAuthState)}async function Zk(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Ck(n,new Tf(t),t.bypassAuthState)}/**
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
 */class D0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Jk;default:Ot(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eR=new Io(2e3,1e4);class Jr extends D0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}Jr.currentPopupAction=null;/**
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
 */const tR="pendingRedirect",Ml=new Map;class nR extends D0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await rR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rR(t,e){const n=oR(e),r=sR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iR(t,e){Ml.set(t._key(),e)}function sR(t){return Yt(t._redirectPersistence)}function oR(t){return Ll(tR,t.config.apiKey,t.name)}async function lR(t,e,n=!1){const r=No(t),i=Qk(r,e),o=await new nR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aR=10*60*1e3;class uR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!L0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aR&&this.cachedEventUids.clear(),this.cachedEventUids.has(pg(e))}saveEventToCache(e){this.cachedEventUids.add(pg(e)),this.lastProcessedEventTime=Date.now()}}function pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(t);default:return!1}}/**
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
 */async function hR(t,e={}){return ko(t,"GET","/v1/projects",e)}/**
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
 */const dR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fR=/^https?/;async function pR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(mR(n))return}catch{}Ot(t,"unauthorized-domain")}function mR(t){const e=$h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fR.test(n))return!1;if(dR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gR=new Io(3e4,6e4);function mg(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _R(t){return new Promise((e,n)=>{var r,i,s;function o(){mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mg(),n(zt(t,"network-request-failed"))},timeout:gR.get()})}if(!((i=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jt().gapi)===null||s===void 0)&&s.load)o();else{const l=Yk("iframefcb");return jt()[l]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},Kk(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw bl=null,e})}let bl=null;function vR(t){return bl=bl||_R(t),bl}/**
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
 */const yR=new Io(5e3,15e3),wR="__/auth/iframe",ER="emulator/auth/iframe",CR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IR(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,ER):`https://${t.config.authDomain}/${wR}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=SR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Li(r).slice(1)}`}async function TR(t){const e=await vR(t),n=jt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:IR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),l=jt().setTimeout(()=>{s(o)},yR.get());function a(){jt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const kR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RR=500,NR=600,PR="_blank",xR="http://localhost";class gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(t,e,n,r=RR,i=NR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},kR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$e().toLowerCase();n&&(l=p0(u)?PR:n),f0(u)&&(e=e||xR,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(ok(u)&&l!=="_self")return OR(e||"",l),new gg(null);const h=window.open(e||"",l,c);D(h,t,"popup-blocked");try{h.focus()}catch{}return new gg(h)}function OR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DR="__/auth/handler",LR="emulator/auth/handler";function _g(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof C0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Po){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${MR(t)}?${Li(l).slice(1)}`}function MR({config:t}){return t.emulator?yf(t,LR):`https://${t.authDomain}/${DR}`}/**
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
 */const gc="webStorageSupport";class bR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N0,this._completeRedirectFn=lR,this._overrideRedirectResult=iR}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_g(e,n,r,$h(),i);return AR(e,o,If())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Uk(_g(e,n,r,$h(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TR(e),r=new uR(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gc,{type:gc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gc];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return y0()||Ef()||su()}}const UR=bR;var vg="@firebase/auth",yg="0.21.1";/**
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
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $R(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zR(t){Wn(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w0(t)},c=new ck(l,a,u);return HT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new on("auth-internal",e=>{const n=No(e.getProvider("auth").getImmediate());return(r=>new FR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(vg,yg,$R(t)),gt(vg,yg,"esm2017")}/**
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
 */const jR=5*60,BR=Xy("authIdTokenMaxAge")||jR;let wg=null;const HR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BR)return;const i=n==null?void 0:n.token;wg!==i&&(wg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WR(t=iu()){const e=So(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BT(t,{popupRedirectResolver:UR,persistence:[Gk,Lk,N0]}),r=Xy("authTokenSyncURL");if(r){const s=HR(r);Nk(n,s,()=>s(n.currentUser)),Rk(n,o=>s(o))}const i=Qy("auth");return i&&hk(n,`http://${i}`),n}zR("Browser");/**
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
 */const M0="firebasestorage.googleapis.com",b0="storageBucket",VR=2*60*1e3,GR=10*60*1e3,qR=1e3;/**
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
 */class se extends Ht{constructor(e,n,r=0){super(_c(e),`Firebase Storage: ${n} (${_c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _c(t){return"storage/"+t}function kf(){const t="An unknown error occurred, please check the error payload for server response.";return new se("unknown",t)}function KR(t){return new se("object-not-found","Object '"+t+"' does not exist.")}function YR(t){return new se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new se("unauthenticated",t)}function XR(){return new se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function JR(t){return new se("unauthorized","User does not have permission to access '"+t+"'.")}function U0(){return new se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function F0(){return new se("canceled","User canceled the upload/download.")}function ZR(t){return new se("invalid-url","Invalid URL '"+t+"'.")}function eN(t){return new se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function tN(){return new se("no-default-bucket","No default bucket found. Did you set the '"+b0+"' property when initializing the app?")}function $0(){return new se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function nN(){return new se("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function rN(){return new se("no-download-url","The given file does not have any download URLs.")}function iN(t){return new se("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jh(t){return new se("invalid-argument",t)}function z0(){return new se("app-deleted","The Firebase app was deleted.")}function sN(t){return new se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ts(t,e){return new se("invalid-format","String does not match format '"+t+"': "+e)}function ts(t){throw new se("internal-error","Internal error: "+t)}/**
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
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(r.path==="")return r;throw eN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},v=n===M0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${E}`,"i"),m=[{regex:l,indices:a,postModify:s},{regex:g,indices:_,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<m.length;y++){const I=m[y],T=I.regex.exec(e);if(T){const R=T[I.indices.bucket];let x=T[I.indices.path];x||(x=""),r=new it(R,x),I.postModify(r);break}}if(r==null)throw ZR(e);return r}}class oN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(g,a())},E)}function d(){s&&clearTimeout(s)}function g(E,...p){if(u){d();return}if(E){d(),c.call(null,E,...p);return}if(a()||o){d(),c.call(null,E,...p);return}r<64&&(r*=2);let m;l===1?(l=2,m=0):m=(r+Math.random())*1e3,h(m)}let _=!1;function v(E){_||(_=!0,d(),!u&&(i!==null?(E||(l=2),clearTimeout(i),h(0)):E||(l=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function aN(t){t(!1)}/**
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
 */function uN(t){return t!==void 0}function cN(t){return typeof t=="function"}function hN(t){return typeof t=="object"&&!Array.isArray(t)}function au(t){return typeof t=="string"||t instanceof String}function Eg(t){return Rf()&&t instanceof Blob}function Rf(){return typeof Blob<"u"&&!vI()}function Cg(t,e,n,r){if(r<e)throw jh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ao(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var pr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pr||(pr={}));/**
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
 */function B0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class dN{constructor(e,n,r,i,s,o,l,a,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new pl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===pr.NO_ERROR,a=s.getStatus();if(!l||B0(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===pr.ABORT;r(!1,new pl(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new pl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());uN(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=kf();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?z0():F0();o(a)}else{const a=U0();o(a)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=lN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _N(t,e,n,r,i,s,o=!0){const l=j0(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return mN(u,e),fN(u,n),pN(u,s),gN(u,r),new dN(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function vN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yN(...t){const e=vN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rf())return new Blob(t);throw new se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function wN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function EN(t){if(typeof atob>"u")throw iN("base-64");return atob(t)}/**
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
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vc{constructor(e,n){this.data=e,this.contentType=n||null}}function CN(t,e){switch(t){case Ut.RAW:return new vc(H0(e));case Ut.BASE64:case Ut.BASE64URL:return new vc(W0(t,e));case Ut.DATA_URL:return new vc(IN(e),TN(e))}throw kf()}function H0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function SN(t){let e;try{e=decodeURIComponent(t)}catch{throw Ts(Ut.DATA_URL,"Malformed data URL.")}return H0(e)}function W0(t,e){switch(t){case Ut.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ts(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ts(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EN(e)}catch(i){throw i.message.includes("polyfill")?i:Ts(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class V0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ts(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IN(t){const e=new V0(t);return e.base64?W0(Ut.BASE64,e.rest):SN(e.rest)}function TN(t){return new V0(t).contentType}function kN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class In{constructor(e,n){let r=0,i="";Eg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Eg(this.data_)){const r=this.data_,i=wN(r,e,n);return i===null?null:new In(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new In(r,!0)}}static getBlob(...e){if(Rf()){const n=e.map(r=>r instanceof In?r.data_:r);return new In(yN.apply(null,n))}else{const n=e.map(o=>au(o)?CN(Ut.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new In(i,!0)}}uploadData(){return this.data_}}/**
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
 */function G0(t){let e;try{e=JSON.parse(t)}catch{return null}return hN(e)?e:null}/**
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
 */function RN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function q0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function PN(t,e){return e}class ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||PN}}let ml=null;function xN(t){return!au(t)||t.length<2?t:q0(t)}function K0(){if(ml)return ml;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(s,o){return xN(o)}const n=new ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ze("size");return i.xform=r,t.push(i),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),ml=t,ml}function AN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new it(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ON(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AN(r,t),r}function Y0(t,e,n){const r=G0(e);return r===null?null:ON(t,r,n)}function DN(t,e,n,r){const i=G0(e);if(i===null||!au(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=Ao(d,n,r),_=j0({alt:"media",token:u});return g+_})[0]}function Q0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class bi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zt(t){if(!t)throw kf()}function Nf(t,e){function n(r,i){const s=Y0(t,i,e);return Zt(s!==null),s}return n}function LN(t,e){function n(r,i){const s=Y0(t,i,e);return Zt(s!==null),DN(s,i,t.host,t._protocol)}return n}function Oo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=XR():i=QR():n.getStatus()===402?i=YR(t.bucket):n.getStatus()===403?i=JR(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function X0(t){const e=Oo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=KR(t.path)),s.serverResponse=i.serverResponse,s}return n}function MN(t,e,n){const r=e.fullServerUrl(),i=Ao(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new bi(i,s,Nf(t,n),o);return l.errorHandler=X0(e),l}function bN(t,e,n){const r=e.fullServerUrl(),i=Ao(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new bi(i,s,LN(t,n),o);return l.errorHandler=X0(e),l}function UN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function J0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UN(null,e)),r}function FN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let m="";for(let y=0;y<2;y++)m=m+Math.random().toString().slice(2);return m}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=J0(e,r,i),c=Q0(u,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+a+"--",g=In.getBlob(h,r,d);if(g===null)throw $0();const _={name:u.fullPath},v=Ao(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new bi(v,E,Nf(t,n),p);return f.urlParams=_,f.headers=o,f.body=g.uploadData(),f.errorHandler=Oo(e),f}class ga{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Pf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Zt(!1)}return Zt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function $N(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=J0(e,r,i),l={name:o.fullPath},a=Ao(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Q0(o,n),d=t.maxUploadRetryTime;function g(v){Pf(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{Zt(!1)}return Zt(au(E)),E}const _=new bi(a,u,g,d);return _.urlParams=l,_.headers=c,_.body=h,_.errorHandler=Oo(e),_}function zN(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Pf(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Zt(!1)}h||Zt(!1);const d=Number(h);return Zt(!isNaN(d)),new ga(d,r.size(),c==="final")}const o="POST",l=t.maxUploadRetryTime,a=new bi(n,o,s,l);return a.headers=i,a.errorHandler=Oo(e),a}const Sg=256*1024;function jN(t,e,n,r,i,s,o,l){const a=new ga(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw nN();const u=a.total-a.current;let c=u;i>0&&(c=Math.min(c,i));const h=a.current,d=h+c;let g="";c===0?g="finalize":u===c?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${a.current}`},v=r.slice(h,d);if(v===null)throw $0();function E(y,I){const T=Pf(y,["active","final"]),R=a.current+c,x=r.size();let G;return T==="final"?G=Nf(e,s)(y,I):G=null,new ga(R,x,T==="final",G)}const p="POST",f=e.maxUploadRetryTime,m=new bi(n,p,E,f);return m.headers=_,m.body=v.uploadData(),m.progressCallback=l||null,m.errorHandler=Oo(t),m}const Ge={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function yc(t){switch(t){case"running":case"pausing":case"canceling":return Ge.RUNNING;case"paused":return Ge.PAUSED;case"success":return Ge.SUCCESS;case"canceled":return Ge.CANCELED;case"error":return Ge.ERROR;default:return Ge.ERROR}}/**
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
 */class BN{constructor(e,n,r){if(cN(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function br(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class HN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ts("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ts("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ts("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ts("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ts("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WN extends HN{initXhr(){this.xhr_.responseType="text"}}function Fr(){return new WN}/**
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
 */class VN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=K0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(B0(i.status,[]))if(s)i=U0();else{this.sleepTime=Math.max(this.sleepTime*2,qR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=$N(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Fr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=zN(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Fr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Sg*this._chunkMultiplier,n=new ga(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=jN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Fr,i,s,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Sg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=MN(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Fr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=FN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Fr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=F0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=yc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new BN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(yc(this._state)){case Ge.SUCCESS:br(this._resolve.bind(null,this.snapshot))();break;case Ge.CANCELED:case Ge.ERROR:const n=this._reject;br(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(yc(this._state)){case Ge.RUNNING:case Ge.PAUSED:e.next&&br(e.next.bind(e,this.snapshot))();break;case Ge.SUCCESS:e.complete&&br(e.complete.bind(e))();break;case Ge.CANCELED:case Ge.ERROR:e.error&&br(e.error.bind(e,this._error))();break;default:e.error&&br(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Tr{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tr(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return q0(this._location.path)}get storage(){return this._service}get parent(){const e=RN(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new Tr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sN(e)}}function GN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new VN(t,new In(e),n)}function qN(t){t._throwIfRoot("getDownloadURL");const e=bN(t.storage,t._location,K0());return t.storage.makeRequestWithTokens(e,Fr).then(n=>{if(n===null)throw rN();return n})}function KN(t,e){const n=NN(t._location.path,e),r=new it(t._location.bucket,n);return new Tr(t.storage,r)}/**
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
 */function YN(t){return/^[A-Za-z]+:\/\//.test(t)}function QN(t,e){return new Tr(t,e)}function Z0(t,e){if(t instanceof xf){const n=t;if(n._bucket==null)throw tN();const r=new Tr(n,n._bucket);return e!=null?Z0(r,e):r}else return e!==void 0?KN(t,e):t}function XN(t,e){if(e&&YN(e)){if(t instanceof xf)return QN(t,e);throw jh("To use ref(service, url), the first argument must be a Storage instance.")}else return Z0(t,e)}function Ig(t,e){const n=e==null?void 0:e[b0];return n==null?null:it.makeFromBucketSpec(n,t)}function JN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ff(i,t.app.options.projectId))}class xf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=M0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VR,this._maxUploadRetryTime=GR,this._requests=new Set,i!=null?this._bucket=it.makeFromBucketSpec(i,this._host):this._bucket=Ig(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=Ig(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new oN(z0());{const o=_N(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Tg="@firebase/storage",kg="0.10.1";/**
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
 */const ew="storage";function Rg(t,e,n){return t=ge(t),GN(t,e,n)}function Ng(t){return t=ge(t),qN(t)}function Pg(t,e){return t=ge(t),XN(t,e)}function ZN(t=iu(),e){t=ge(t);const r=So(t,ew).getImmediate({identifier:e}),i=df("storage");return i&&eP(r,...i),r}function eP(t,e,n,r={}){JN(t,e,n,r)}function tP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new xf(n,r,i,e,Or)}function nP(){Wn(new on(ew,tP,"PUBLIC").setMultipleInstances(!0)),gt(Tg,kg,""),gt(Tg,kg,"esm2017")}nP();const xg="@firebase/database",Ag="0.14.1";/**
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
 */let tw="";function rP(t){tw=t}/**
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
 */class iP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const nw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iP(e)}}catch{}return new sP},lr=nw("localStorage"),Bh=nw("sessionStorage");/**
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
 */const ui=new ru("@firebase/database"),oP=function(){let t=1;return function(){return t++}}(),rw=function(t){const e=OI(t),n=new NI;n.update(e);const r=n.digest();return hf.encodeByteArray(r)},Do=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Do.apply(null,r):typeof r=="object"?e+=Ee(r):e+=r,e+=" "}return e};let mr=null,Og=!0;const lP=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ui.logLevel=V.VERBOSE,mr=ui.log.bind(ui),e&&Bh.set("logging_enabled",!0)):typeof t=="function"?mr=t:(mr=null,Bh.remove("logging_enabled"))},Le=function(...t){if(Og===!0&&(Og=!1,mr===null&&Bh.get("logging_enabled")===!0&&lP(!0)),mr){const e=Do.apply(null,t);mr(e)}},Lo=function(t){return function(...e){Le(t,...e)}},Hh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Do(...t);ui.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${Do(...t)}`;throw ui.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+Do(...t);ui.warn(e)},aP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ti="[MIN_NAME]",kr="[MAX_NAME]",Ui=function(t,e){if(t===e)return 0;if(t===Ti||e===kr)return-1;if(e===Ti||t===kr)return 1;{const n=Dg(t),r=Dg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cP=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},Af=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ee(e[r]),n+=":",n+=Af(t[e[r]]);return n+="}",n},sw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ow=function(t){C(!iw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},hP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const pP=new RegExp("^-?(0*)\\d{1,10}$"),mP=-2147483648,gP=2147483647,Dg=function(t){if(pP.test(t)){const e=Number(t);if(e>=mP&&e<=gP)return e}return null},Fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},_P=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";/**
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
 */const Of="5",lw="v",aw="s",uw="r",cw="f",hw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dw="ls",fw="p",Wh="ac",pw="websocket",mw="long_polling";/**
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
 */class gw{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _w(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===pw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wP(t)&&(n.ns=t.namespace);const i=[];return tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class EP{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hI(this.counters_)}}/**
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
 */const wc={},Ec={};function Df(t){const e=t.toString();return wc[e]||(wc[e]=new EP),wc[e]}function CP(t,e){const n=t.toString();return Ec[n]||(Ec[n]=e()),Ec[n]}/**
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
 */class SP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Fi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Lg="start",IP="close",TP="pLPCommand",kP="pRTLPCB",vw="id",yw="pw",ww="ser",RP="cb",NP="seg",PP="ts",xP="d",AP="dframe",Ew=1870,Cw=30,OP=Ew-Cw,DP=25e3,LP=3e4;class Zr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lo(e),this.stats_=Df(n),this.urlFn=a=>(this.appCheckToken&&(a[Wh]=this.appCheckToken),_w(n,mw,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LP)),uP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lf((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lg)this.id=l,this.password=a;else if(o===IP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lg]="t",r[ww]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lw]=Of,this.transportSessionId&&(r[aw]=this.transportSessionId),this.lastSessionId&&(r[dw]=this.lastSessionId),this.applicationId&&(r[fw]=this.applicationId),this.appCheckToken&&(r[Wh]=this.appCheckToken),typeof location<"u"&&location.hostname&&hw.test(location.hostname)&&(r[uw]=cw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zr.forceAllow_=!0}static forceDisallow(){Zr.forceDisallow_=!0}static isAvailable(){return Zr.forceAllow_?!0:!Zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hP()&&!dP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ky(n),i=sw(r,OP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[AP]="t",r[vw]=e,r[yw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oP(),window[TP+this.uniqueCallbackIdentifier]=e,window[kP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vw]=this.myID,e[yw]=this.myPW,e[ww]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cw+r.length<=Ew;){const o=this.pendingSegs.shift();r=r+"&"+NP+i+"="+o.seg+"&"+PP+i+"="+o.ts+"&"+xP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(DP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const MP=16384,bP=45e3;let _a=null;typeof MozWebSocket<"u"?_a=MozWebSocket:typeof WebSocket<"u"&&(_a=WebSocket);class Tt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lo(this.connId),this.stats_=Df(n),this.connURL=Tt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lw]=Of,typeof location<"u"&&location.hostname&&hw.test(location.hostname)&&(o[uw]=cw),n&&(o[aw]=n),r&&(o[dw]=r),i&&(o[Wh]=i),s&&(o[fw]=s),_w(e,pw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lr.set("previous_websocket_failure",!0);try{let r;Zy(),this.mySock=new _a(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_a!==null&&!Tt.forceDisallow_}static previouslyFailed(){return lr.isInMemoryStorage||lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sw(n,MP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
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
 */class to{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zr,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Tt&&Tt.isAvailable();let r=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tt];else{const i=this.transports_=[];for(const s of to.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);to.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}to.globalTransportInitialized_=!1;/**
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
 */const UP=6e4,FP=5e3,$P=10*1024,zP=100*1024,Cc="t",Mg="d",jP="s",bg="r",BP="e",Ug="o",Fg="a",$g="n",zg="p",HP="h";class WP{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lo("c:"+this.id+":"),this.transportManager_=new to(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$P?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cc in e){const n=e[Cc];n===Fg?this.upgradeIfSecondaryHealthy_():n===bg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ug&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),r=ns("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$g,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),r=ns("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns(Cc,e);if(Mg in e){const r=e[Mg];if(n===HP)this.onHandshake_(r);else if(n===$g){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jP?this.onConnectionShutdown_(r):n===bg?this.onReset_(r):n===BP?Hh("Server Error: "+r):n===Ug?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Of!==r&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Iw{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class va extends Iw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new va}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jg=32,Bg=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new K("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vn(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Tw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function VP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Ye(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mf(t,e){if(Vn(t)!==Vn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function kt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Vn(t)>Vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class GP{constructor(e,n){this.errorPrefix_=n,this.parts_=kw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=nu(this.parts_[r]);Nw(this)}}function qP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nu(e),Nw(t)}function KP(t){const e=t.parts_.pop();t.byteLength_-=nu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Nw(t){if(t.byteLength_>Bg)throw new Error(t.errorPrefix_+"has a key path longer than "+Bg+" bytes ("+t.byteLength_+").");if(t.parts_.length>jg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jg+") or object contains a cycle "+rr(t))}function rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class bf extends Iw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bf}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const rs=1e3,YP=60*5*1e3,Hg=30*1e3,QP=1.3,XP=3e4,JP="server_kill",Wg=3;class en extends Sw{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=en.nextPersistentConnectionId_++,this.log_=Lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rs,this.maxReconnectDelay_=YP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ee(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;en.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const r=Ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hh("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XP&&(this.reconnectDelay_=rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+en.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new WP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{et(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(JP)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dh(this.interruptReasons_)&&(this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Af(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wg&&(this.reconnectDelay_=Hg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tw.replace(/\./g,"-")]=1,pf()?e["framework.cordova"]=1:Jy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=va.getInstance().currentlyOnline();return Dh(this.interruptReasons_)&&e}}en.nextPersistentConnectionId_=0;en.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class uu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Ti,e),i=new F(Ti,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let gl;class Pw extends uu{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(e){gl=e}compare(e,n){return Ui(e.name,n.name)}isDefinedOn(e){throw Di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(kr,gl)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,gl)}toString(){return".key"}}const hi=new Pw;/**
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
 */class _l{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??we.RED,this.left=i??Qe.EMPTY_NODE,this.right=s??Qe.EMPTY_NODE}copy(e,n,r,i,s){return new we(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class ZP{copy(e,n,r,i,s){return this}insert(e,n,r){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _l(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new ZP;/**
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
 */function ex(t,e){return Ui(t.name,e.name)}function Uf(t,e){return Ui(t,e)}/**
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
 */let Vh;function tx(t){Vh=t}const xw=function(t){return typeof t=="number"?"number:"+ow(t):"string:"+t},Aw=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else C(t===Vh||t.isEmpty(),"priority of unexpected type.");C(t===Vh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vg;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Aw(this.priorityNode_)}static set __childrenNodeConstructor(e){Vg=e}static get __childrenNodeConstructor(){return Vg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ow(this.value_):e+=this.value_,this.lazyHash_=rw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ow,Dw;function nx(t){Ow=t}function rx(t){Dw=t}class ix extends uu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ui(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(kr,new ve("[PRIORITY-POST]",Dw))}makePost(e,n){const r=Ow(e);return new F(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new ix;/**
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
 */const sx=Math.log(2);class ox{constructor(e){const n=s=>parseInt(Math.log(s)/sx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ya=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let h,d;if(c===0)return null;if(c===1)return h=t[a],d=n?n(h):h,new we(d,h.node,we.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),v=i(g+1,u);return h=t[g],d=n?n(h):h,new we(d,h.node,we.BLACK,_,v)}},s=function(a){let u=null,c=null,h=t.length;const d=function(_,v){const E=h-_,p=h;h-=_;const f=i(E+1,p),m=t[E],y=n?n(m):m;g(new we(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),E=Math.pow(2,a.count-(_+1));v?d(E,we.BLACK):(d(E,we.BLACK),d(E,we.RED))}return c},o=new ox(t.length),l=s(o);return new Qe(r||e,l)};/**
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
 */let Sc;const Ur={};class Qt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Ur&&le,"ChildrenNode.ts has not been loaded"),Sc=Sc||new Qt({".priority":Ur},{".priority":le}),Sc}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){C(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ya(r,e.getCompare()):l=Ur;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Qt(c,u)}addToIndexes(e,n){const r=ua(this.indexes_,(i,s)=>{const o=Ii(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Ur)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ya(l,o.getCompare())}else return Ur;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Qt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ua(this.indexes_,i=>{if(i===Ur)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Qt(r,this.indexSet_)}}/**
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
 */let is;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Aw(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return is||(is=new O(new Qe(Uf),null,Qt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{C(U(e)!==".priority"||Vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xw(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mo?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lx extends O{constructor(){super(new Qe(Uf),O.EMPTY_NODE,Qt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Mo=new lx;Object.defineProperties(F,{MIN:{value:new F(Ti,O.EMPTY_NODE)},MAX:{value:new F(kr,Mo)}});Pw.__EMPTY_NODE=O.EMPTY_NODE;ve.__childrenNodeConstructor=O;tx(Mo);rx(Mo);/**
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
 */const ax=!0;function Te(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Te(e))}if(!(t instanceof Array)&&ax){const n=[];let r=!1;if(tt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=ya(n,ex,o=>o.name,Uf);if(r){const o=ya(n,le.getCompare());return new O(s,Te(e),new Qt({".priority":o},{".priority":le}))}else return new O(s,Te(e),Qt.Default)}else{let n=O.EMPTY_NODE;return tt(t,(r,i)=>{if(dn(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}nx(Te);/**
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
 */class ux extends uu{constructor(e){super(),this.indexPath_=e,C(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ui(e.name,n.name):s}makePost(e,n){const r=Te(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Mo);return new F(kr,e)}toString(){return kw(this.indexPath_,0).join("/")}}/**
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
 */class cx extends uu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ui(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=Te(e);return new F(n,r)}toString(){return".value"}}const hx=new cx;/**
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
 */function Lw(t){return{type:"value",snapshotNode:t}}function ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function no(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ff{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(no(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ki(n,r)):o.trackChildChange(ro(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(no(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ro(i,s,o))}else r.trackChildChange(ki(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class io{constructor(e){this.indexedFilter_=new Ff(e.getIndex()),this.index_=e.getIndex(),this.startPost_=io.getStartPost_(e),this.endPost_=io.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class fx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new io(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ro(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(no(n,h));const v=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ki(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(no(u.name,u.node)),s.trackChildChange(ki(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class $f{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ti}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new $f;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function px(t){return t.loadsAllData()?new Ff(t.getIndex()):t.hasLimit()?new fx(t):new io(t)}function Gg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===hx?n="$value":t.index_===hi?n="$key":(C(t.index_ instanceof ux,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ee(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ee(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ee(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
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
 */class wa extends Sw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Lo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wa.getListenId_(e,r),l={};this.listens_[o]=l;const a=Gg(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Ii(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=wa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gg(e._queryParams),r=e._path.toString(),i=new tu;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Li(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Qs(l.responseText)}catch{et("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class mx{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ea(){return{value:null,children:new Map}}function Mw(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Ea());const i=t.children.get(r);e=Y(e),Mw(i,e,n)}}function Gh(t,e,n){t.value!==null?n(e,t.value):gx(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Gh(i,s,n)})}function gx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class _x{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Kg=10*1e3,vx=30*1e3,yx=5*60*1e3;class wx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _x(e);const r=Kg+(vx-Kg)*Math.random();ks(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tt(e,(i,s)=>{s>0&&dn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*yx))}}/**
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
 */var Rt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rt||(Rt={}));function bw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ca{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rt.ACK_USER_WRITE,this.source=bw()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Ca(W(),n,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new Ca(Y(this.path),this.affectedTree,this.revert)}}/**
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
 */class so{constructor(e,n){this.source=e,this.path=n,this.type=Rt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new so(this.source,W()):new so(this.source,Y(this.path))}}/**
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
 */class Rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rt.OVERWRITE}operationForChild(e){return z(this.path)?new Rr(this.source,W(),this.snap.getImmediateChild(e)):new Rr(this.source,Y(this.path),this.snap)}}/**
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
 */class oo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Rr(this.source,W(),n.value):new oo(this.source,W(),n)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oo(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ex{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Cx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(dx(o.childName,o.snapshotNode))}),ss(t,i,"child_removed",e,r,n),ss(t,i,"child_added",e,r,n),ss(t,i,"child_moved",s,r,n),ss(t,i,"child_changed",e,r,n),ss(t,i,"value",e,r,n),i}function ss(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Ix(t,l,a)),o.forEach(l=>{const a=Sx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Sx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ix(t,e,n){if(e.childName==null||n.childName==null)throw Di("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function cu(t,e){return{eventCache:t,serverCache:e}}function Rs(t,e,n,r){return cu(new Nr(e,n,r),t.serverCache)}function Uw(t,e,n,r){return cu(t.eventCache,new Nr(e,n,r))}function qh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ic;const Tx=()=>(Ic||(Ic=new Qe(cP)),Ic);class J{constructor(e,n=Tx()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return tt(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(z(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:fe(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new J(null)}}set(e,n){if(z(e))return new J(n,this.children);{const r=U(e),s=(this.children.get(r)||new J(null)).set(Y(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(z(e))return n;{const r=U(e),s=(this.children.get(r)||new J(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),fe(n,i),r):new J(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new J(null))}}function Ns(t,e,n){if(z(e))return new xt(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ye(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function Yg(t,e,n){let r=t;return tt(n,(i,s)=>{r=Ns(r,fe(e,i),s)}),r}function Qg(t,e){if(z(e))return xt.empty();{const n=t.writeTree_.setTree(e,new J(null));return new xt(n)}}function Kh(t,e){return Dr(t,e)!=null}function Dr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function Xg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function $n(t,e){if(z(e))return t;{const n=Dr(t,e);return n!=null?new xt(new J(n)):new xt(t.writeTree_.subtree(e))}}function Yh(t){return t.writeTree_.isEmpty()}function Ri(t,e){return Fw(W(),t.writeTree_,e)}function Fw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Fw(fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
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
 */function Bf(t,e){return Bw(e,t)}function kx(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ns(t.visibleWrites,e,n)),t.lastWriteId=r}function Rx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Nx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Px(l,r.path)?i=!1:kt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return xx(t),!0;if(r.snap)t.visibleWrites=Qg(t.visibleWrites,r.path);else{const l=r.children;tt(l,a=>{t.visibleWrites=Qg(t.visibleWrites,fe(r.path,a))})}return!0}else return!1}function Px(t,e){if(t.snap)return kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&kt(fe(t.path,n),e))return!0;return!1}function xx(t){t.visibleWrites=$w(t.allWrites,Ax,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ax(t){return t.visible}function $w(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)kt(n,o)?(l=Ye(n,o),r=Ns(r,l,s.snap)):kt(o,n)&&(l=Ye(o,n),r=Ns(r,W(),s.snap.getChild(l)));else if(s.children){if(kt(n,o))l=Ye(n,o),r=Yg(r,l,s.children);else if(kt(o,n))if(l=Ye(o,n),z(l))r=Yg(r,W(),s.children);else{const a=Ii(s.children,U(l));if(a){const u=a.getChild(Y(l));r=Ns(r,W(),u)}}}else throw Di("WriteRecord should have .snap or .children")}}return r}function zw(t,e,n,r,i){if(!r&&!i){const s=Dr(t.visibleWrites,e);if(s!=null)return s;{const o=$n(t.visibleWrites,e);if(Yh(o))return n;if(n==null&&!Kh(o,W()))return null;{const l=n||O.EMPTY_NODE;return Ri(o,l)}}}else{const s=$n(t.visibleWrites,e);if(!i&&Yh(s))return n;if(!i&&n==null&&!Kh(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(kt(u.path,e)||kt(e,u.path))},l=$w(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Ri(l,a)}}}function Ox(t,e,n){let r=O.EMPTY_NODE;const i=Dr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$n(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=Ri($n(s,new K(o)),l);r=r.updateImmediateChild(o,a)}),Xg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$n(t.visibleWrites,e);return Xg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Dx(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(Kh(t.visibleWrites,s))return null;{const o=$n(t.visibleWrites,s);return Yh(o)?i.getChild(n):Ri(o,i.getChild(n))}}function Lx(t,e,n,r){const i=fe(e,n),s=Dr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$n(t.visibleWrites,i);return Ri(o,r.getNode().getImmediateChild(n))}else return null}function Mx(t,e){return Dr(t.visibleWrites,e)}function bx(t,e,n,r,i,s,o){let l;const a=$n(t.visibleWrites,e),u=Dr(a,W());if(u!=null)l=u;else if(n!=null)l=Ri(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=d.getNext();for(;g&&c.length<i;)h(g,r)!==0&&c.push(g),g=d.getNext();return c}else return[]}function Ux(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function Sa(t,e,n,r){return zw(t.writeTree,t.treePath,e,n,r)}function Hf(t,e){return Ox(t.writeTree,t.treePath,e)}function Jg(t,e,n,r){return Dx(t.writeTree,t.treePath,e,n,r)}function Ia(t,e){return Mx(t.writeTree,fe(t.treePath,e))}function Fx(t,e,n,r,i,s){return bx(t.writeTree,t.treePath,e,n,r,i,s)}function Wf(t,e,n){return Lx(t.writeTree,t.treePath,e,n)}function jw(t,e){return Bw(fe(t.treePath,e),t.writeTree)}function Bw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class $x{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ro(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,no(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ki(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ro(r,e.snapshotNode,i.oldSnap));else throw Di("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Hw=new zx;class Vf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),s=Fx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function jx(t){return{filter:t}}function Bx(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Hx(t,e,n,r,i){const s=new $x;let o,l;if(n.type===Rt.OVERWRITE){const u=n;u.source.fromUser?o=Qh(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Ta(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Rt.MERGE){const u=n;u.source.fromUser?o=Vx(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Xh(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Rt.ACK_USER_WRITE){const u=n;u.revert?o=Kx(t,e,u.path,r,i,s):o=Gx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Rt.LISTEN_COMPLETE)o=qx(t,e,n.path,r,s);else throw Di("Unknown operation type: "+n.type);const a=s.getChanges();return Wx(e,o,a),{viewCache:o,changes:a}}function Wx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Lw(qh(e)))}}function Ww(t,e,n,r,i,s){const o=e.eventCache;if(Ia(r,n)!=null)return e;{let l,a;if(z(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pr(e),c=u instanceof O?u:O.EMPTY_NODE,h=Hf(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Sa(r,Pr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){C(Vn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const h=Jg(r,n,c,a);h!=null?l=t.filter.updatePriority(c,h):l=o.getNode()}else{const c=Y(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Jg(r,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Wf(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,c,i,s):l=o.getNode()}}return Rs(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Ta(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=U(n);if(!a.isCompleteForPath(n)&&Vn(n)>1)return e;const _=Y(n),E=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),E):u=c.updateChild(a.getNode(),g,E,_,Hw,null)}const h=Uw(e,u,a.isFullyInitialized()||z(n),c.filtersNodes()),d=new Vf(i,h,s);return Ww(t,h,n,i,d,l)}function Qh(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Vf(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Rs(e,u,!0,t.filter.filtersNodes());else{const h=U(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Rs(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=Y(n),g=l.getNode().getImmediateChild(h);let _;if(z(d))_=r;else{const v=c.getCompleteChild(h);v!=null?Tw(d)===".priority"&&v.getChild(Rw(d)).isEmpty()?_=v:_=v.updateChild(d,r):_=O.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),h,_,d,c,o);a=Rs(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Zg(t,e){return t.eventCache.isCompleteForChild(e)}function Vx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=fe(n,a);Zg(e,U(c))&&(l=Qh(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=fe(n,a);Zg(e,U(c))||(l=Qh(t,l,c,u,i,s,o))}),l}function e_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Xh(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new J(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=e_(t,g,d);a=Ta(t,a,new K(h),_,i,s,o,l)}}),u.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),v=e_(t,_,d);a=Ta(t,a,new K(h),v,i,s,o,l)}}),a}function Gx(t,e,n,r,i,s,o){if(Ia(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ta(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new J(null);return a.getNode().forEachChild(hi,(c,h)=>{u=u.set(new K(c),h)}),Xh(t,e,n,u,i,s,l,o)}else return e}else{let u=new J(null);return r.foreach((c,h)=>{const d=fe(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),Xh(t,e,n,u,i,s,l,o)}}function qx(t,e,n,r,i){const s=e.serverCache,o=Uw(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Ww(t,o,n,r,Hw,i)}function Kx(t,e,n,r,i,s){let o;if(Ia(r,n)!=null)return e;{const l=new Vf(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Sa(r,Pr(e));else{const h=e.serverCache.getNode();C(h instanceof O,"serverChildren would be complete if leaf node"),c=Hf(r,h)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let h=Wf(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=a.getImmediateChild(c)),h!=null?u=t.filter.updateChild(a,c,h,Y(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,Y(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sa(r,Pr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ia(r,W())!=null,Rs(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Yx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ff(r.getIndex()),s=px(r);this.processor_=jx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Nr(a,o.isFullyInitialized(),i.filtersNodes()),h=new Nr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=cu(h,c),this.eventGenerator_=new Ex(this.query_)}get query(){return this.query_}}function Qx(t){return t.viewCache_.serverCache.getNode()}function Xx(t,e){const n=Pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function t_(t){return t.eventRegistrations_.length===0}function Jx(t,e){t.eventRegistrations_.push(e)}function n_(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function r_(t,e,n,r){e.type===Rt.MERGE&&e.source.queryId!==null&&(C(Pr(t.viewCache_),"We should always have a full cache before handling merges"),C(qh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Hx(t.processor_,i,e,n,r);return Bx(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Vw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Zx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(ki(s,o))}),n.isFullyInitialized()&&r.push(Lw(n.getNode())),Vw(t,r,n.getNode(),e)}function Vw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Cx(t.eventGenerator_,e,n,i)}/**
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
 */let ka;class eA{constructor(){this.views=new Map}}function tA(t){C(!ka,"__referenceConstructor has already been defined"),ka=t}function nA(){return C(ka,"Reference.ts has not been loaded"),ka}function rA(t){return t.views.size===0}function Gf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),r_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(r_(o,e,n,r));return s}}function iA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Sa(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Hf(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=cu(new Nr(l,a,!1),new Nr(r,i,!1));return new Yx(e,u)}return o}function sA(t,e,n,r,i,s){const o=iA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Jx(o,n),Zx(o,n)}function oA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Gn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(n_(u,n,r)),t_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(n_(a,n,r)),t_(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Gn(t)&&s.push(new(nA())(e._repo,e._path)),{removed:s,events:o}}function Gw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function di(t,e){let n=null;for(const r of t.views.values())n=n||Xx(r,e);return n}function qw(t,e){if(e._queryParams.loadsAllData())return hu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Kw(t,e){return qw(t,e)!=null}function Gn(t){return hu(t)!=null}function hu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ra;function lA(t){C(!Ra,"__referenceConstructor has already been defined"),Ra=t}function aA(){return C(Ra,"Reference.ts has not been loaded"),Ra}let uA=1;class i_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Ux(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yw(t,e,n,r,i){return kx(t.pendingWriteTree_,e,n,r,i),i?bo(t,new Rr(bw(),e,n)):[]}function ar(t,e,n=!1){const r=Rx(t.pendingWriteTree_,e);if(Nx(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(W(),!0):tt(r.children,o=>{s=s.set(new K(o),!0)}),bo(t,new Ca(r.path,s,n))}else return[]}function du(t,e,n){return bo(t,new Rr(zf(),e,n))}function cA(t,e,n){const r=J.fromObject(n);return bo(t,new oo(zf(),e,r))}function hA(t,e){return bo(t,new so(zf(),e))}function dA(t,e,n){const r=Kf(t,n);if(r){const i=Yf(r),s=i.path,o=i.queryId,l=Ye(s,e),a=new so(jf(o),l);return Qf(t,s,a)}else return[]}function Jh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Kw(o,e))){const a=oA(o,e,n,r);rA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,g)=>Gn(g));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=mA(d);for(let _=0;_<g.length;++_){const v=g[_],E=v.query,p=Jw(t,v);t.listenProvider_.startListening(Ps(E),Na(t,E),p.hashFn,p.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ps(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(fu(d));t.listenProvider_.stopListening(Ps(d),g)}))}gA(t,u)}return l}function fA(t,e,n,r){const i=Kf(t,r);if(i!=null){const s=Yf(i),o=s.path,l=s.queryId,a=Ye(o,e),u=new Rr(jf(l),a,n);return Qf(t,o,u)}else return[]}function pA(t,e,n,r){const i=Kf(t,r);if(i){const s=Yf(i),o=s.path,l=s.queryId,a=Ye(o,e),u=J.fromObject(n),c=new oo(jf(l),a,u);return Qf(t,o,c)}else return[]}function s_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const _=Ye(d,i);s=s||di(g,_),o=o||Gn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Gn(l),s=s||di(l,W())):(l=new eA,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=di(_,W());v&&(s=s.updateImmediateChild(g,v))}));const u=Kw(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=fu(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=_A();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const c=Bf(t.pendingWriteTree_,i);let h=sA(l,e,n,c,s,a);if(!u&&!o&&!r){const d=qw(l,e);h=h.concat(vA(t,e,d))}return h}function qf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ye(o,e),u=di(l,a);if(u)return u});return zw(i,e,s,n,!0)}function bo(t,e){return Qw(e,t.syncPointTree_,null,Bf(t.pendingWriteTree_,W()))}function Qw(t,e,n,r){if(z(t.path))return Xw(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=di(i,W()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=jw(r,o);s=s.concat(Qw(l,a,u,c))}return i&&(s=s.concat(Gf(i,t,r,n))),s}}function Xw(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=di(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=jw(r,o),c=t.operationForChild(o);c&&(s=s.concat(Xw(c,l,a,u)))}),i&&(s=s.concat(Gf(i,t,r,n))),s}function Jw(t,e){const n=e.query,r=Na(t,n);return{hashFn:()=>(Qx(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?dA(t,n._path,r):hA(t,n._path);{const s=fP(i,n);return Jh(t,n,null,s)}}}}function Na(t,e){const n=fu(e);return t.queryToTagMap.get(n)}function fu(t){return t._path.toString()+"$"+t._queryIdentifier}function Kf(t,e){return t.tagToQueryMap.get(e)}function Yf(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function Qf(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Bf(t.pendingWriteTree_,e);return Gf(r,n,i,null)}function mA(t){return t.fold((e,n,r)=>{if(n&&Gn(n))return[hu(n)];{let i=[];return n&&(i=Gw(n)),tt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ps(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aA())(t._repo,t._path):t}function gA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=fu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function _A(){return uA++}function vA(t,e,n){const r=e._path,i=Na(t,e),s=Jw(t,n),o=t.listenProvider_.startListening(Ps(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!Gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,h)=>{if(!z(u)&&c&&Gn(c))return[hu(c).query];{let d=[];return c&&(d=d.concat(Gw(c).map(g=>g.query))),tt(h,(g,_)=>{d=d.concat(_)}),d}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Ps(c),Na(t,c))}}return o}/**
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
 */class Xf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xf(n)}node(){return this.node_}}class Jf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new Jf(this.syncTree_,n)}node(){return qf(this.syncTree_,this.path_)}}const yA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},o_=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return EA(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},EA=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},CA=function(t,e,n,r){return Zf(e,new Jf(n,t),r)},Zw=function(t,e,n){return Zf(t,new Xf(e),n)};function Zf(t,e,n){const r=t.getPriority().val(),i=o_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=o_(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(le,(l,a)=>{const u=Zf(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class ep{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function tp(t,e){let n=e instanceof K?e:new K(e),r=t,i=U(n);for(;i!==null;){const s=Ii(r.node.children,i)||{children:{},childCount:0};r=new ep(i,r,s),n=Y(n),i=U(n)}return r}function $i(t){return t.node.value}function eE(t,e){t.node.value=e,Zh(t)}function tE(t){return t.node.childCount>0}function SA(t){return $i(t)===void 0&&!tE(t)}function pu(t,e){tt(t.node.children,(n,r)=>{e(new ep(n,t,r))})}function nE(t,e,n,r){n&&!r&&e(t),pu(t,i=>{nE(i,e,!0,r)}),n&&r&&e(t)}function IA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Uo(t){return new K(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function Zh(t){t.parent!==null&&TA(t.parent,t.name,t)}function TA(t,e,n){const r=SA(n),i=dn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Zh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zh(t))}/**
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
 */const kA=/[\[\].#$\/\u0000-\u001F\u007F]/,RA=/[\[\].#$\u0000-\u001F\u007F]/,Tc=10*1024*1024,rE=function(t){return typeof t=="string"&&t.length!==0&&!kA.test(t)},iE=function(t){return typeof t=="string"&&t.length!==0&&!RA.test(t)},NA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iE(t)},sE=function(t,e,n,r){r&&e===void 0||np(mf(t,"value"),e,n)},np=function(t,e,n){const r=n instanceof K?new GP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+rr(r)+" with contents = "+e.toString());if(iw(e))throw new Error(t+"contains "+e.toString()+" "+rr(r));if(typeof e=="string"&&e.length>Tc/3&&nu(e)>Tc)throw new Error(t+"contains a string greater than "+Tc+" utf8 bytes "+rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!rE(o)))throw new Error(t+" contains an invalid key ("+o+") "+rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qP(r,o),np(t,l,r),KP(r)}),i&&s)throw new Error(t+' contains ".value" child '+rr(r)+" in addition to actual children.")}},oE=function(t,e,n,r){if(!(r&&n===void 0)&&!iE(n))throw new Error(mf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},PA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oE(t,e,n,r)},lE=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!NA(n))throw new Error(mf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class AA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rp(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Mf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function aE(t,e,n){rp(t,n),uE(t,r=>Mf(r,e))}function un(t,e,n){rp(t,n),uE(t,r=>kt(r,e)||kt(e,r))}function uE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(OA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function OA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();mr&&Le("event: "+n.toString()),Fi(r)}}}/**
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
 */const DA="repo_interrupt",LA=25;class MA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ea(),this.transactionQueueTree_=new ep,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bA(t,e,n){if(t.stats_=Df(t.repoInfo_),t.forceRestClient_||_P())t.server_=new wa(t.repoInfo_,(r,i,s,o)=>{l_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>a_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new en(t.repoInfo_,e,(r,i,s,o)=>{l_(t,r,i,s,o)},r=>{a_(t,r)},r=>{UA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CP(t.repoInfo_,()=>new wx(t.stats_,t.server_)),t.infoData_=new mx,t.infoSyncTree_=new i_({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=du(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),sp(t,"connected",!1),t.serverSyncTree_=new i_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);un(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cE(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ip(t){return yA({timestamp:cE(t)})}function l_(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=ua(n,u=>Te(u));o=pA(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=fA(t.serverSyncTree_,s,a,i)}else if(r){const a=ua(n,u=>Te(u));o=cA(t.serverSyncTree_,s,a)}else{const a=Te(n);o=du(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=mu(t,s)),un(t.eventQueue_,l,o)}function a_(t,e){sp(t,"connected",e),e===!1&&$A(t)}function UA(t,e){tt(e,(n,r)=>{sp(t,n,r)})}function sp(t,e,n){const r=new K("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=du(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function hE(t){return t.nextWriteId_++}function FA(t,e,n,r,i){op(t,"set",{path:e.toString(),value:n,priority:r});const s=ip(t),o=Te(n,r),l=qf(t.serverSyncTree_,e),a=Zw(o,l,s),u=hE(t),c=Yw(t.serverSyncTree_,e,a,u,!0);rp(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const _=d==="ok";_||et("set at "+e+" failed: "+d);const v=ar(t.serverSyncTree_,u,!_);un(t.eventQueue_,e,v),BA(t,i,d,g)});const h=gE(t,e);mu(t,h),un(t.eventQueue_,h,[])}function $A(t){op(t,"onDisconnectEvents");const e=ip(t),n=Ea();Gh(t.onDisconnect_,W(),(i,s)=>{const o=CA(i,s,t.serverSyncTree_,e);Mw(n,i,o)});let r=[];Gh(n,W(),(i,s)=>{r=r.concat(du(t.serverSyncTree_,i,s));const o=gE(t,i);mu(t,o)}),t.onDisconnect_=Ea(),un(t.eventQueue_,W(),r)}function zA(t,e,n){let r;U(e._path)===".info"?r=s_(t.infoSyncTree_,e,n):r=s_(t.serverSyncTree_,e,n),aE(t.eventQueue_,e._path,r)}function u_(t,e,n){let r;U(e._path)===".info"?r=Jh(t.infoSyncTree_,e,n):r=Jh(t.serverSyncTree_,e,n),aE(t.eventQueue_,e._path,r)}function jA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DA)}function op(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function BA(t,e,n,r){e&&Fi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dE(t,e,n){return qf(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function lp(t,e=t.transactionQueueTree_){if(e||gu(t,e),$i(e)){const n=pE(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HA(t,Uo(e),n)}else tE(e)&&pu(e,n=>{lp(t,n)})}function HA(t,e,n){const r=n.map(u=>u.currentWriteId),i=dE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Ye(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{op(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(ar(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();gu(t,tp(t.transactionQueueTree_,e)),lp(t,t.transactionQueueTree_),un(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Fi(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{et("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}mu(t,e)}},o)}function mu(t,e){const n=fE(t,e),r=Uo(n),i=pE(t,n);return WA(t,i,r),r}function WA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ye(n,a.path);let c=!1,h;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,h=a.abortReason,i=i.concat(ar(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=LA)c=!0,h="maxretry",i=i.concat(ar(t.serverSyncTree_,a.currentWriteId,!0));else{const d=dE(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){np("transaction failed: Data returned ",g,a.path);let _=Te(g);typeof g=="object"&&g!=null&&dn(g,".priority")||(_=_.updatePriority(d.getPriority()));const E=a.currentWriteId,p=ip(t),f=Zw(_,d,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=hE(t),o.splice(o.indexOf(E),1),i=i.concat(Yw(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(ar(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(ar(t.serverSyncTree_,a.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}gu(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Fi(r[l]);lp(t,t.transactionQueueTree_)}function fE(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&$i(r)===void 0;)r=tp(r,n),e=Y(e),n=U(e);return r}function pE(t,e){const n=[];return mE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mE(t,e,n){const r=$i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pu(e,i=>{mE(t,i,n)})}function gu(t,e){const n=$i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,eE(e,n.length>0?n:void 0)}pu(e,r=>{gu(t,r)})}function gE(t,e){const n=Uo(fE(t,e)),r=tp(t.transactionQueueTree_,e);return IA(r,i=>{kc(t,i)}),kc(t,r),nE(r,i=>{kc(t,i)}),n}function kc(t,e){const n=$i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?eE(e,void 0):n.length=s+1,un(t.eventQueue_,Uo(e),i);for(let o=0;o<r.length;o++)Fi(r[o])}}/**
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
 */function VA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const c_=function(t,e){const n=qA(t),r=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||aP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},qA=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=VA(t.substring(c,h)));const d=GA(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const h_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",KA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=h_.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=h_.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class _E{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class vE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ap{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:Tw(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=qg(this._queryParams),n=Af(e);return n==="{}"?"default":n}get _queryObject(){return qg(this._queryParams)}isEqual(e){if(e=ge(e),!(e instanceof ap))return!1;const n=this._repo===e._repo,r=Mf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+VP(this._path)}}class fn extends ap{constructor(e,n){super(e,n,new $f,!1)}get parent(){const e=Rw(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class lo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=Ni(this.ref,e);return new lo(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new lo(i,Ni(this.ref,r),le)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fi(t,e){return t=ge(t),t._checkNotDeleted("ref"),e!==void 0?Ni(t._root,e):t._root}function Ni(t,e){return t=ge(t),U(t._path)===null?PA("child","path",e,!1):oE("child","path",e,!1),new fn(t._repo,fe(t._path,e))}function xs(t,e){t=ge(t),lE("push",t._path),sE("push",e,t._path,!0);const n=cE(t._repo),r=KA(n),i=Ni(t,r),s=Ni(t,r);let o;return e!=null?o=pi(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pi(t,e){t=ge(t),lE("set",t._path),sE("set",e,t._path,!1);const n=new tu;return FA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class up{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new _E("value",this,new lo(e.snapshotNode,new fn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vE(this,e,n):null}matches(e){return e instanceof up?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class cp{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vE(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=Ni(new fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new _E(e.type,this,new lo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cp?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function QA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,h)=>{u_(t._repo,t,l),a(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new YA(n,s||void 0),l=e==="value"?new up(o):new cp(e,o);return zA(t._repo,t,l),()=>u_(t._repo,t,l)}function XA(t,e,n,r){return QA(t,"value",e,n,r)}tA(fn);lA(fn);/**
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
 */const JA="FIREBASE_DATABASE_EMULATOR_HOST",ed={};let ZA=!1;function eO(t,e,n,r){t.repoInfo_=new gw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function tO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=c_(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[JA]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=c_(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new ci(ci.OWNER):new yP(t.name,t.options,e);xA("Invalid Firebase Database URL",o),z(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rO(l,t,c,new vP(t.name,n));return new iO(h,t)}function nO(t,e){const n=ed[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jA(t),delete n[t.key]}function rO(t,e,n,r){let i=ed[e.name];i||(i={},ed[e.name]=i);let s=i[t.toURLString()];return s&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new MA(t,ZA,n,r),i[t.toURLString()]=s,s}class iO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function sO(t=iu(),e){const n=So(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=df("database");r&&oO(n,...r)}return n}function oO(t,e,n,r={}){t=ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&an("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&an('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ci(ci.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ff(r.mockUserToken,t.app.options.projectId);s=new ci(o)}eO(i,e,n,s)}/**
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
 */function lO(t){rP(Or),Wn(new on("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return tO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gt(xg,Ag,t),gt(xg,Ag,"esm2017")}en.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};en.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lO();var aO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,hp=hp||{},L=aO||self;function Pa(){}function _u(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uO(t){return Object.prototype.hasOwnProperty.call(t,Rc)&&t[Rc]||(t[Rc]=++cO)}var Rc="closure_uid_"+(1e9*Math.random()>>>0),cO=0;function hO(t,e,n){return t.call.apply(t.bind,arguments)}function dO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=hO:be=dO,be.apply(null,arguments)}function vl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function Qn(){this.s=this.s,this.o=this.o}var fO=0;Qn.prototype.s=!1;Qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fO!=0)&&uO(this)};Qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function d_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_u(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var pO=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Pa,e),L.removeEventListener("test",Pa,e)}catch{}return t}();function xa(t){return/^[\s\xa0]*$/.test(t)}var f_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nc(t,e){return t<e?-1:t>e?1:0}function vu(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function bt(t){return vu().indexOf(t)!=-1}function fp(t){return fp[" "](t),t}fp[" "]=Pa;function mO(t){var e=vO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gO=bt("Opera"),ao=bt("Trident")||bt("MSIE"),wE=bt("Edge"),td=wE||ao,EE=bt("Gecko")&&!(vu().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge"))&&!(bt("Trident")||bt("MSIE"))&&!bt("Edge"),_O=vu().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge");function CE(){var t=L.document;return t?t.documentMode:void 0}var nd;e:{var Pc="",xc=function(){var t=vu();if(EE)return/rv:([^\);]+)(\)|;)/.exec(t);if(wE)return/Edge\/([\d\.]+)/.exec(t);if(ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_O)return/WebKit\/(\S+)/.exec(t);if(gO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xc&&(Pc=xc?xc[1]:""),ao){var Ac=CE();if(Ac!=null&&Ac>parseFloat(Pc)){nd=String(Ac);break e}}nd=Pc}var vO={};function yO(){return mO(function(){let t=0;const e=f_(String(nd)).split("."),n=f_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nc(i[2].length==0,s[2].length==0)||Nc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}L.document&&ao&&CE();function uo(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(EE){e:{try{fp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&uo.X.h.call(this)}}Pe(uo,Ue);var wO={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $o="closure_listenable_"+(1e6*Math.random()|0),EO=0;function CO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++EO,this.ba=this.ea=!1}function yu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function SE(t){const e={};for(const n in t)e[n]=t[n];return e}const p_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function IE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<p_.length;s++)n=p_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wu(t){this.src=t,this.g={},this.h=0}wu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=id(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new CO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function rd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=yE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function id(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var mp="closure_lm_"+(1e6*Math.random()|0),Oc={};function TE(t,e,n,r,i){if(r&&r.once)return RE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);return null}return n=vp(n),t&&t[$o]?t.N(e,n,Fo(r)?!!r.capture:!!r,i):kE(t,e,n,!1,r,i)}function kE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fo(i)?!!i.capture:!!i,l=_p(t);if(l||(t[mp]=l=new wu(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=SO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(PE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SO(){function t(n){return e.call(t.src,t.listener,n)}const e=IO;return t}function RE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)RE(t,e[s],n,r,i);return null}return n=vp(n),t&&t[$o]?t.O(e,n,Fo(r)?!!r.capture:!!r,i):kE(t,e,n,!0,r,i)}function NE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)NE(t,e[s],n,r,i);else r=Fo(r)?!!r.capture:!!r,n=vp(n),t&&t[$o]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=id(s,n,r,i),-1<n&&(yu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=_p(t))&&(e=t.g[e.toString()],t=-1,e&&(t=id(e,n,r,i)),(n=-1<t?e[t]:null)&&gp(n))}function gp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[$o])rd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(PE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_p(e))?(rd(n,t),n.h==0&&(n.src=null,e[mp]=null)):yu(t)}}}function PE(t){return t in Oc?Oc[t]:Oc[t]="on"+t}function IO(t,e){if(t.ba)t=!0;else{e=new uo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gp(t),t=n.call(r,e)}return t}function _p(t){return t=t[mp],t instanceof wu?t:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(t){return typeof t=="function"?t:(t[Dc]||(t[Dc]=function(e){return t.handleEvent(e)}),t[Dc])}function Se(){Qn.call(this),this.i=new wu(this),this.P=this,this.I=null}Pe(Se,Qn);Se.prototype[$o]=!0;Se.prototype.removeEventListener=function(t,e,n,r){NE(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var i=e;e=new Ue(r,t),IE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yl(o,r,!0,e)&&i}if(o=e.g=t,i=yl(o,r,!0,e)&&i,i=yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yl(o,r,!1,e)&&i}Se.prototype.M=function(){if(Se.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yu(n[r]);delete t.g[e],t.h--}}this.I=null};Se.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Se.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var l=o.listener,a=o.ha||o.src;o.ea&&rd(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var yp=L.JSON.stringify;function TO(){var t=OE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kO{constructor(){this.h=this.g=null}add(e,n){const r=xE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var xE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RO,t=>t.reset());class RO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NO(t){L.setTimeout(()=>{throw t},0)}function AE(t,e){sd||PO(),od||(sd(),od=!0),OE.add(t,e)}var sd;function PO(){var t=L.Promise.resolve(void 0);sd=function(){t.then(xO)}}var od=!1,OE=new kO;function xO(){for(var t;t=TO();){try{t.h.call(t.g)}catch(n){NO(n)}var e=xE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}od=!1}function Eu(t,e){Se.call(this),this.h=t||1,this.g=e||L,this.j=be(this.lb,this),this.l=Date.now()}Pe(Eu,Se);A=Eu.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Re(this,"tick"),this.ca&&(wp(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){Eu.X.M.call(this),wp(this),delete this.g};function Ep(t,e,n){if(typeof t=="function")n&&(t=be(t,n));else if(t&&typeof t.handleEvent=="function")t=be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function DE(t){t.g=Ep(()=>{t.g=null,t.i&&(t.i=!1,DE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AO extends Qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:DE(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function co(t){Qn.call(this),this.h=t,this.g={}}Pe(co,Qn);var m_=[];function LE(t,e,n,r){Array.isArray(n)||(n&&(m_[0]=n.toString()),n=m_);for(var i=0;i<n.length;i++){var s=TE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ME(t){pp(t.g,function(e,n){this.g.hasOwnProperty(n)&&gp(e)},t),t.g={}}co.prototype.M=function(){co.X.M.call(this),ME(this)};co.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cu(){this.g=!0}Cu.prototype.Aa=function(){this.g=!1};function OO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function DO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ei(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MO(t,n)+(r?" "+r:"")})}function LO(t,e){t.info(function(){return"TIMEOUT: "+e})}Cu.prototype.info=function(){};function MO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yp(n)}catch{return e}}var zi={},g_=null;function Cp(){return g_=g_||new Se}zi.Pa="serverreachability";function bE(t){Ue.call(this,zi.Pa,t)}Pe(bE,Ue);function ho(t){const e=Cp();Re(e,new bE(e))}zi.STAT_EVENT="statevent";function UE(t,e){Ue.call(this,zi.STAT_EVENT,t),this.stat=e}Pe(UE,Ue);function Be(t){const e=Cp();Re(e,new UE(e,t))}zi.Qa="timingevent";function FE(t,e){Ue.call(this,zi.Qa,t),this.size=e}Pe(FE,Ue);function zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Sp={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bO={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ip(){}Ip.prototype.h=null;function __(t){return t.h||(t.h=t.i())}function UO(){}var jo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Tp(){Ue.call(this,"d")}Pe(Tp,Ue);function kp(){Ue.call(this,"c")}Pe(kp,Ue);var ld;function Su(){}Pe(Su,Ip);Su.prototype.g=function(){return new XMLHttpRequest};Su.prototype.i=function(){return{}};ld=new Su;function Bo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new co(this),this.O=FO,t=td?125:void 0,this.T=new Eu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $E}function $E(){this.i=null,this.g="",this.h=!1}var FO=45e3,ad={},Aa={};A=Bo.prototype;A.setTimeout=function(t){this.O=t};function ud(t,e,n){t.K=1,t.v=Tu(cn(e)),t.s=n,t.P=!0,zE(t,null)}function zE(t,e){t.F=Date.now(),Ho(t),t.A=cn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),KE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new $E,t.g=mC(t.l,n?e:null,!t.s),0<t.N&&(t.L=new AO(be(t.La,t,t.g),t.N)),LE(t.S,t.g,"readystatechange",t.ib),e=t.H?SE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ho(),OO(t.j,t.u,t.A,t.m,t.U,t.s)}A.ib=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.La(t)};A.La=function(t){try{if(t==this.g)e:{const c=Xt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||td||this.g&&(this.h.h||this.g.fa()||E_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ho(3):ho(2)),Iu(this);var n=this.g.aa();this.Y=n;t:if(jE(this)){var r=E_(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),As(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,DO(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xa(l)){var u=l;break t}}u=null}if(n=u)ei(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cd(this,n);else{this.i=!1,this.o=3,Be(12),ur(this),As(this);break e}}this.P?(BE(this,c,o),td&&this.i&&c==3&&(LE(this.S,this.T,"tick",this.hb),this.T.start())):(ei(this.j,this.m,o,null),cd(this,o)),c==4&&ur(this),this.i&&!this.I&&(c==4?hC(this.l,this):(this.i=!1,Ho(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),ur(this),As(this)}}}catch{}finally{}};function jE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function BE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=$O(t,n),i==Aa){e==4&&(t.o=4,Be(14),r=!1),ei(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ad){t.o=4,Be(15),ei(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ei(t.j,t.m,i,null),cd(t,i);jE(t)&&i!=Aa&&i!=ad&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dp(e),e.K=!0,Be(11))):(ei(t.j,t.m,n,"[Invalid Chunked Response]"),ur(t),As(t))}A.hb=function(){if(this.g){var t=Xt(this.g),e=this.g.fa();this.C<e.length&&(Iu(this),BE(this,t,e),this.i&&t!=4&&Ho(this))}};function $O(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Aa:(n=Number(e.substring(n,r)),isNaN(n)?ad:(r+=1,r+n>e.length?Aa:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,ur(this)};function Ho(t){t.V=Date.now()+t.O,HE(t,t.O)}function HE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zo(be(t.gb,t),e)}function Iu(t){t.B&&(L.clearTimeout(t.B),t.B=null)}A.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(LO(this.j,this.A),this.K!=2&&(ho(),Be(17)),ur(this),this.o=2,As(this)):HE(this,this.V-t)};function As(t){t.l.G==0||t.I||hC(t.l,t)}function ur(t){Iu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wp(t.T),ME(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function cd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||hd(n.h,t))){if(!t.J&&hd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)La(n),Pu(n);else break e;Op(n),Be(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=zo(be(n.cb,n),6e3));if(1>=XE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else cr(n,11)}else if((t.J||n.g==t)&&La(n),!xa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.h;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rp(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,te(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=pC(r,r.H?r.ka:null,r.V),o.J){JE(r.h,o);var l=o,a=r.J;a&&l.setTimeout(a),l.B&&(Iu(l),Ho(l)),r.g=o}else uC(r);0<n.i.length&&xu(n)}else u[0]!="stop"&&u[0]!="close"||cr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?cr(n,7):Ap(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ho(4)}catch{}}function zO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function jO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_u(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function WE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_u(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jO(t),r=zO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var VE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function gr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gr){this.h=e!==void 0?e:t.h,Oa(this,t.j),this.s=t.s,this.g=t.g,Da(this,t.m),this.l=t.l,e=t.i;var n=new fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),v_(this,n),this.o=t.o}else t&&(n=String(t).match(VE))?(this.h=!!e,Oa(this,n[1]||"",!0),this.s=fs(n[2]||""),this.g=fs(n[3]||"",!0),Da(this,n[4]),this.l=fs(n[5]||"",!0),v_(this,n[6]||"",!0),this.o=fs(n[7]||"")):(this.h=!!e,this.i=new fo(null,this.h))}gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ps(e,y_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ps(e,y_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ps(n,n.charAt(0)=="/"?VO:WO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ps(n,qO)),t.join("")};function cn(t){return new gr(t)}function Oa(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Da(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function v_(t,e,n){e instanceof fo?(t.i=e,KO(t.i,t.h)):(n||(e=ps(e,GO)),t.i=new fo(e,t.h))}function te(t,e,n){t.i.set(e,n)}function Tu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var y_=/[#\/\?@]/g,WO=/[#\?:]/g,VO=/[#\?]/g,GO=/[#\?@]/g,qO=/#/g;function fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&BO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=fo.prototype;A.add=function(t,e){Xn(this),this.i=null,t=ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function GE(t,e){Xn(t),e=ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qE(t,e){return Xn(t),e=ji(t,e),t.g.has(e)}A.forEach=function(t,e){Xn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.oa=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.W=function(t){Xn(this);let e=[];if(typeof t=="string")qE(this,t)&&(e=e.concat(this.g.get(ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Xn(this),this.i=null,t=ji(this,t),qE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function KE(t,e,n){GE(t,e),0<n.length&&(t.i=null,t.g.set(ji(t,e),dp(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KO(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(GE(this,r),KE(this,i,n))},t)),t.j=e}var YO=class{constructor(t,e){this.h=t,this.g=e}};function YE(t){this.l=t||QO,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QO=10;function QE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XE(t){return t.h?1:t.g?t.g.size:0}function hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rp(t,e){t.g?t.g.add(e):t.h=e}function JE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}YE.prototype.cancel=function(){if(this.i=ZE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dp(t.i)}function Np(){}Np.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Np.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function XO(){this.g=new Np}function JO(t,e,n){const r=n||"";try{WE(t,function(i,s){let o=i;Fo(i)&&(o=yp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZO(t,e){const n=new Cu;if(L.Image){const r=new Image;r.onload=vl(wl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vl(wl,n,r,"TestLoadImage: error",!1,e),r.onabort=vl(wl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vl(wl,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ku(t){this.l=t.ac||null,this.j=t.jb||!1}Pe(ku,Ip);ku.prototype.g=function(){return new Ru(this.l,this.j)};ku.prototype.i=function(t){return function(){return t}}({});function Ru(t,e){Se.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Ru,Se);var Pp=0;A=Ru.prototype;A.open=function(t,e){if(this.readyState!=Pp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=Pp};A.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function eC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}A.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wo(this):po(this),this.readyState==3&&eC(this)}};A.Va=function(t){this.g&&(this.response=this.responseText=t,Wo(this))};A.Ua=function(t){this.g&&(this.response=t,Wo(this))};A.ga=function(){this.g&&Wo(this)};function Wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eD=L.JSON.parse;function ce(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tC,this.K=this.L=!1}Pe(ce,Se);var tC="",tD=/^https?$/i,nD=["POST","PUT"];A=ce.prototype;A.Ka=function(t){this.L=t};A.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ld.g(),this.C=this.u?__(this.u):__(ld),this.g.onreadystatechange=be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){w_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=yE(nD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{iC(this),0<this.B&&((this.K=rD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.qa,this)):this.A=Ep(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){w_(this,s)}};function rD(t){return ao&&yO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof hp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function w_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nC(t),Nu(t)}function nC(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Nu(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nu(this,!0)),ce.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?rC(this):this.fb())};A.fb=function(){rC(this)};function rC(t){if(t.h&&typeof hp<"u"&&(!t.C[1]||Xt(t)!=4||t.aa()!=2)){if(t.v&&Xt(t)==4)Ep(t.Ha,0,t);else if(Re(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const l=t.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=l===0){var i=String(t.H).match(VE)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!tD.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",nC(t)}}finally{Nu(t)}}}}function Nu(t,e){if(t.g){iC(t);const n=t.g,r=t.C[0]?Pa:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function iC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eD(e)}};function E_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case tC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sC(t){let e="";return pp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oC(t){this.Ca=0,this.i=[],this.j=new Cu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=os("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=os("baseRetryDelayMs",5e3,t),this.bb=os("retryDelaySeedMs",1e4,t),this.$a=os("forwardChannelMaxRetries",2,t),this.ta=os("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new YE(t&&t.concurrentRequestLimit),this.Fa=new XO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=oC.prototype;A.ma=8;A.G=1;function Ap(t){if(lC(t),t.G==3){var e=t.U++,n=cn(t.F);te(n,"SID",t.I),te(n,"RID",e),te(n,"TYPE","terminate"),Vo(t,n),e=new Bo(t,t.j,e,void 0),e.K=2,e.v=Tu(cn(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=mC(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ho(e)}fC(t)}function Pu(t){t.g&&(Dp(t),t.g.cancel(),t.g=null)}function lC(t){Pu(t),t.u&&(L.clearTimeout(t.u),t.u=null),La(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function xu(t){QE(t.h)||t.m||(t.m=!0,AE(t.Ja,t),t.C=0)}function iD(t,e){return XE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zo(be(t.Ja,t,e),dC(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=SE(s),IE(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=aC(this,i,e),n=cn(this.F),te(n,"RID",t),te(n,"CVER",22),this.D&&te(n,"X-HTTP-Session-Id",this.D),Vo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(sC(s)))+"&"+e:this.o&&xp(n,this.o,s)),Rp(this.h,i),this.Ya&&te(n,"TYPE","init"),this.O?(te(n,"$req",e),te(n,"SID","null"),i.Z=!0,ud(i,n,null)):ud(i,n,e),this.G=2}}else this.G==3&&(t?C_(this,t):this.i.length==0||QE(this.h)||C_(this))};function C_(t,e){var n;e?n=e.m:n=t.U++;const r=cn(t.F);te(r,"SID",t.I),te(r,"RID",n),te(r,"AID",t.T),Vo(t,r),t.o&&t.s&&xp(r,t.o,t.s),n=new Bo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=aC(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rp(t.h,n),ud(n,r,e)}function Vo(t,e){t.ia&&pp(t.ia,function(n,r){te(e,r,n)}),t.l&&WE({},function(n,r){te(e,r,n)})}function aC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?be(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].h;const c=i[a].g;if(u-=s,0>u)s=Math.max(0,i[a].h-100),l=!1;else try{JO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function uC(t){t.g||t.u||(t.Z=1,AE(t.Ia,t),t.A=0)}function Op(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zo(be(t.Ia,t),dC(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,cC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zo(be(this.eb,this),t)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Be(10),Pu(this),cC(this))};function Dp(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function cC(t){t.g=new Bo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=cn(t.sa);te(e,"RID","rpc"),te(e,"SID",t.I),te(e,"CI",t.L?"0":"1"),te(e,"AID",t.T),te(e,"TYPE","xmlhttp"),Vo(t,e),t.o&&t.s&&xp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Tu(cn(e)),n.s=null,n.P=!0,zE(n,t)}A.cb=function(){this.v!=null&&(this.v=null,Pu(this),Op(this),Be(19))};function La(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function hC(t,e){var n=null;if(t.g==e){La(t),Dp(t),t.g=null;var r=2}else if(hd(t.h,e))n=e.D,JE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Cp(),Re(r,new FE(r,n)),xu(t)}else uC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&iD(t,e)||r==2&&Op(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function dC(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=be(t.kb,t);n||(n=new gr("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Oa(n,"https"),Tu(n)),ZO(n.toString(),r)}else Be(2);t.G=0,t.l&&t.l.va(e),fC(t),lC(t)}A.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function fC(t){if(t.G=0,t.la=[],t.l){const e=ZE(t.h);(e.length!=0||t.i.length!=0)&&(d_(t.la,e),d_(t.la,t.i),t.h.i.length=0,dp(t.i),t.i.length=0),t.l.ua()}}function pC(t,e,n){var r=n instanceof gr?cn(n):new gr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Da(r,r.m);else{var i=L.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new gr(null,void 0);r&&Oa(s,r),e&&(s.g=e),i&&Da(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&te(r,n,e),te(r,"VER",t.ma),Vo(t,r),r}function mC(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new ku({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function gC(){}A=gC.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function yt(t,e){Se.call(this),this.g=new oC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bi(this)}Pe(yt,Se);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Be(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=pC(t,null,t.V),xu(t)};yt.prototype.close=function(){Ap(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yp(t),t=n);e.i.push(new YO(e.ab++,t)),e.G==3&&xu(e)};yt.prototype.M=function(){this.g.l=null,delete this.j,Ap(this.g),delete this.g,yt.X.M.call(this)};function _C(t){Tp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(_C,Tp);function vC(){kp.call(this),this.status=1}Pe(vC,kp);function Bi(t){this.g=t}Pe(Bi,gC);Bi.prototype.xa=function(){Re(this.g,"a")};Bi.prototype.wa=function(t){Re(this.g,new _C(t))};Bi.prototype.va=function(t){Re(this.g,new vC)};Bi.prototype.ua=function(){Re(this.g,"b")};yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Sp.NO_ERROR=0;Sp.TIMEOUT=8;Sp.HTTP_ERROR=6;bO.COMPLETE="complete";UO.EventType=jo;jo.OPEN="a";jo.CLOSE="b";jo.ERROR="c";jo.MESSAGE="d";Se.prototype.listen=Se.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;const S_="@firebase/firestore";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let Go="9.16.0";/**
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
 */const Pi=new ru("@firebase/firestore");function st(t,...e){if(Pi.logLevel<=V.DEBUG){const n=e.map(Mp);Pi.debug(`Firestore (${Go}): ${t}`,...n)}}function Lp(t,...e){if(Pi.logLevel<=V.ERROR){const n=e.map(Mp);Pi.error(`Firestore (${Go}): ${t}`,...n)}}function sD(t,...e){if(Pi.logLevel<=V.WARN){const n=e.map(Mp);Pi.warn(`Firestore (${Go}): ${t}`,...n)}}function Mp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function bp(t="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+t;throw Lp(e),new Error(e)}function Ma(t,e){t||bp()}/**
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
 */const lt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Oe.UNAUTHENTICATED))}shutdown(){}}class lD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aD{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ma(typeof r.accessToken=="string"),new yC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ma(e===null||typeof e=="string"),new Oe(e)}}class uD{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ma(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cD{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new uD(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dD{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,st("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ma(typeof n.token=="string"),this.A=n.token,new hD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pD{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function wC(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mD{constructor(e,n,r,i,s,o,l,a){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var I_,B;(B=I_||(I_={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";function Lc(){return typeof document<"u"?document:null}class gD{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&st("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Up{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Up(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(lt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _D(t,e){if(Lp("AsyncQueue",`${e}: ${t}`),wC(t))return new at(lt.UNAVAILABLE,`${e}: ${t}`);throw t}function vD(t,e,n,r){if(e===!0&&r===!0)throw new at(lt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yD(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":bp()}function wD(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new at(lt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yD(t);throw new at(lt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const T_=new Map;class k_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new at(lt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new at(lt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,vD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class EC{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new at(lt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new at(lt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oD;switch(n.type){case"gapi":const r=n.client;return new cD(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new at(lt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=T_.get(e);n&&(st("ComponentProvider","Removing Datastore"),T_.delete(e),n.terminate())}(this),Promise.resolve()}}function ED(t,e,n,r={}){var i;const s=(t=wD(t,EC))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&sD("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=Oe.MOCK_USER;else{o=ff(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new at(lt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Oe(a)}t._authCredentials=new lD(new yC(o,l))}}/**
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
 */class CD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=pD.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{st("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(st("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new at(lt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_D(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}class SD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new gD(this,"async_queue_retry"),this.Wc=()=>{const n=Lc();n&&st("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new mi;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!wC(e))throw e;st("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Lp("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Up.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&bp()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class ID extends EC{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kD(this),this._firestoreClient.terminate()}}function TD(t,e){const n=typeof t=="object"?t:iu(),r=typeof t=="string"?t:e||"(default)",i=So(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=df("firestore");s&&ED(i,...s)}return i}function kD(t){var e;const n=t._freezeSettings(),r=function(i,s,o,l){return new mD(i,s,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CD(t._authCredentials,t._appCheckCredentials,t._queue,r)}(function(t,e=!0){(function(n){Go=n})(Or),Wn(new on("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ID(new aD(n.getProvider("auth-internal")),new dD(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new at(lt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ba(l.options.projectId,a)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gt(S_,"3.8.1",t),gt(S_,"3.8.1","esm2017")})();const RD={apiKey:"AIzaSyBXlZ4HyZvYbK_KZhoxHA0LMfB5TBZBQfI",authDomain:"chatappavi.firebaseapp.com",projectId:"chatappavi",storageBucket:"chatappavi.appspot.com",messagingSenderId:"557679912507",appId:"1:557679912507:web:ec4f8f91f80675b93bde1e",measurementId:"G-YPDTN9K1JQ",databaseURL:"https://chatappavi-default-rtdb.asia-southeast1.firebasedatabase.app"};r0(RD);const Au=WR(),R_=ZN();TD();const gi=sO();var CC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N_=Nn.createContext&&Nn.createContext(CC),zn=globalThis&&globalThis.__assign||function(){return zn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},zn.apply(this,arguments)},ND=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function SC(t){return t&&t.map(function(e,n){return Nn.createElement(e.tag,zn({key:n},e.attr),SC(e.child))})}function Fp(t){return function(e){return Nn.createElement(PD,zn({attr:zn({},t.attr)},e),SC(t.child))}}function PD(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=ND(t,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),Nn.createElement("svg",zn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:zn(zn({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Nn.createElement("title",null,s),t.children)};return N_!==void 0?Nn.createElement(N_.Consumer,null,function(n){return e(n)}):e(CC)}/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var Rn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rn||(Rn={}));const P_="popstate";function xD(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Lr(i.location.hash.substr(1));return dd("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:go(s))}function r(i,s){AD(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return DD(e,n,r,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function AD(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OD(){return Math.random().toString(36).substr(2,8)}function x_(t,e){return{usr:t.state,key:t.key,idx:e}}function dd(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lr(e):e,{state:n,key:e&&e.key||r||OD()})}function go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Rn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(mo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){l=Rn.Pop;let E=c(),p=E==null?null:E-u;u=E,a&&a({action:l,location:v.location,delta:p})}function d(E,p){l=Rn.Push;let f=dd(v.location,E,p);n&&n(f,E),u=c()+1;let m=x_(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch{i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function g(E,p){l=Rn.Replace;let f=dd(v.location,E,p);n&&n(f,E),u=c();let m=x_(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:go(E);return me(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(P_,h),a=E,()=>{i.removeEventListener(P_,h),a=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let p=_(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(E){return o.go(E)}};return v}var A_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(A_||(A_={}));function LD(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Lr(e):e,i=kC(r.pathname||"/",n);if(i==null)return null;let s=IC(t);MD(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=WD(s[l],qD(i));return o}function IC(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(me(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=jn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),IC(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:BD(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of TC(s.path))i(s,o,a)}),e}function TC(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TC(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function MD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bD=/^:\w+$/,UD=3,FD=2,$D=1,zD=10,jD=-2,O_=t=>t==="*";function BD(t,e){let n=t.split("/"),r=n.length;return n.some(O_)&&(r+=jD),e&&(r+=FD),n.filter(i=>!O_(i)).reduce((i,s)=>i+(bD.test(s)?UD:s===""?$D:zD),r)}function HD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VD({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let h=l.route;s.push({params:r,pathname:jn([i,c.pathname]),pathnameBase:XD(jn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=jn([i,c.pathnameBase]))}return s}function VD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=l[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=KD(l[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function GD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$p(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qD(t){try{return decodeURI(t)}catch(e){return $p(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KD(t,e){try{return decodeURIComponent(t)}catch(n){return $p(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function kC(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $p(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lr(t):t;return{pathname:n?n.startsWith("/")?n:QD(n,e):e,search:JD(r),hash:ZD(i)}}function QD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function NC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lr(t):(i=mo({},t),me(!i.pathname||!i.pathname.includes("?"),Mc("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Mc("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Mc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}l=h>=0?e[h]:"/"}let a=YD(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),XD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tL=["post","put","patch","delete"];[...tL];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}function nL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const rL=typeof Object.is=="function"?Object.is:nL,{useState:iL,useEffect:sL,useLayoutEffect:oL,useDebugValue:lL}=Uc;function aL(t,e,n){const r=e(),[{inst:i},s]=iL({inst:{value:r,getSnapshot:e}});return oL(()=>{i.value=r,i.getSnapshot=e,bc(i)&&s({inst:i})},[t,r,e]),sL(()=>(bc(i)&&s({inst:i}),t(()=>{bc(i)&&s({inst:i})})),[t]),lL(r),r}function bc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!rL(n,r)}catch{return!0}}function uL(t,e,n){return e()}const cL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hL=!cL,dL=hL?uL:aL;"useSyncExternalStore"in Uc&&(t=>t.useSyncExternalStore)(Uc);const PC=S.createContext(null),xC=S.createContext(null),Ou=S.createContext(null),Du=S.createContext(null),Hi=S.createContext({outlet:null,matches:[]}),AC=S.createContext(null);function fL(t,e){let{relative:n}=e===void 0?{}:e;qo()||me(!1);let{basename:r,navigator:i}=S.useContext(Ou),{hash:s,pathname:o,search:l}=OC(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:jn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function qo(){return S.useContext(Du)!=null}function Lu(){return qo()||me(!1),S.useContext(Du).location}function Wi(){qo()||me(!1);let{basename:t,navigator:e}=S.useContext(Ou),{matches:n}=S.useContext(Hi),{pathname:r}=Lu(),i=JSON.stringify(RC(n).map(l=>l.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=NC(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:jn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function OC(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Hi),{pathname:i}=Lu(),s=JSON.stringify(RC(r).map(o=>o.pathnameBase));return S.useMemo(()=>NC(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function pL(t,e){qo()||me(!1);let{navigator:n}=S.useContext(Ou),r=S.useContext(xC),{matches:i}=S.useContext(Hi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Lu(),u;if(e){var c;let v=typeof e=="string"?Lr(e):e;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||me(!1),u=v}else u=a;let h=u.pathname||"/",d=l==="/"?h:h.slice(l.length)||"/",g=LD(t,{pathname:d}),_=vL(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:jn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:jn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&_?S.createElement(Du.Provider,{value:{location:fd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rn.Pop}},_):_}function mL(){let t=CL(),e=eL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class gL extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Hi.Provider,{value:this.props.routeContext},S.createElement(AC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _L(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(PC);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Hi.Provider,{value:e},r)}function vL(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||me(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S.createElement(mL,null):null,c=e.concat(r.slice(0,l+1)),h=()=>S.createElement(_L,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?S.createElement(gL,{location:n.location,component:u,error:a,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var D_;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(D_||(D_={}));var Ua;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ua||(Ua={}));function yL(t){let e=S.useContext(xC);return e||me(!1),e}function wL(t){let e=S.useContext(Hi);return e||me(!1),e}function EL(t){let e=wL(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function CL(){var t;let e=S.useContext(AC),n=yL(Ua.UseRouteError),r=EL(Ua.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function $r(t){me(!1)}function SL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:s,static:o=!1}=t;qo()&&me(!1);let l=e.replace(/^\/*/,"/"),a=S.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Lr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,_=S.useMemo(()=>{let v=kC(u,l);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:g}},[l,u,c,h,d,g]);return _==null?null:S.createElement(Ou.Provider,{value:a},S.createElement(Du.Provider,{children:n,value:{location:_,navigationType:i}}))}function IL(t){let{children:e,location:n}=t,r=S.useContext(PC),i=r&&!e?r.router.routes:pd(e);return pL(i,n)}var L_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(L_||(L_={}));new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,pd(r.props.children,e));return}r.type!==$r&&me(!1),!r.props.index||!r.props.children||me(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=pd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},md.apply(this,arguments)}function TL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RL(t,e){return t.button===0&&(!e||e==="_self")&&!kL(t)}const NL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function PL(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=xD({window:r,v5Compat:!0}));let s=i.current,[o,l]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(l),[s]),S.createElement(SL,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const xL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DC=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,h=TL(e,NL),d=typeof u=="string"?u:go(u),g=/^[a-z+]+:\/\//i.test(d)||d.startsWith("//"),_=d,v=!1;if(xL&&g){let m=new URL(window.location.href),y=d.startsWith("//")?new URL(m.protocol+d):new URL(d);y.origin===m.origin?_=y.pathname+y.search+y.hash:v=!0}let E=fL(_,{relative:i}),p=AL(_,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function f(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",md({},h,{href:g?d:E,onClick:v||s?r:f,ref:n,target:a}))});var M_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(M_||(M_={}));var b_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(b_||(b_={}));function AL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=Wi(),a=Lu(),u=OC(t,{relative:o});return S.useCallback(c=>{if(RL(c,n)){c.preventDefault();let h=r!==void 0?r:go(a)===go(u);l(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const OL=()=>{let[t,e]=S.useState();const n=Wi();return P("div",{className:"formContainer",children:Me("div",{className:"formWrapper",children:[P("div",{className:"logo",children:"ChatApp"}),P("div",{className:"title",children:"Create Room"}),Me("form",{onSubmit:async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value,l=i.target[2].value;if(o!==l)return e("Password Mismatch"),!1;try{const a=await Tk(Au,`${s}@chatApp.com`,o);e(""),n("/EnterName")}catch(a){e(a.message)}},children:[P("input",{type:"text",name:"",id:"RoomName",placeholder:"Room Name",required:!0}),P("input",{type:"password",name:"",id:"password",placeholder:"Room Password",required:!0}),P("input",{type:"password",name:"",id:"confirmPassword",placeholder:"Confirm Password",required:!0}),P("input",{style:{display:"none"},type:"file",accept:"image/*",name:"avatar",id:"avatar",onChange:i=>i.target.value?setProfilePic(i.target.value):setProfilePic("File Not Selected")}),P("button",{type:"submit",children:"Create Room"})]}),Me("p",{children:["Already have a room ? ",P(DC,{to:"/JoinRoom",children:"Join"})]}),t&&P("span",{children:t})]})})},Bt=S.createContext(),DL=({children:t})=>{localStorage.getItem("uniqueUserChatApp")||localStorage.setItem("uniqueUserChatApp","");const[e,n]=S.useState({}),[r,i]=S.useState(localStorage.getItem("uniqueUserChatApp"));return localStorage.setItem("uniqueUserChatApp",r),S.useEffect(()=>{const s=Pk(Au,o=>{n(o)});return()=>{s()}},[]),P(Bt.Provider,{value:{currentRoom:e,user:r,setUser:i},children:t})},LL=()=>{const[t,e]=S.useState("");S.useContext(Bt);const n=Wi();return P("div",{className:"formContainer",children:Me("div",{className:"formWrapper",children:[P("div",{className:"logo",children:"ChatApp"}),P("div",{className:"title",children:"Join Room"}),Me("form",{action:"",onSubmit:async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{await kk(Au,`${s}@chatApp.com`,o),n("/EnterName")}catch(l){e(l.message)}},children:[P("input",{type:"text",name:"",id:"name",placeholder:"Room Name",required:!0}),P("input",{type:"password",name:"password",id:"",placeholder:"Room Password",required:!0}),P("button",{type:"submit",children:"Join Room"})]}),Me("p",{children:["Don't have a room ? ",P(DC,{to:"/CreateRoom",children:"Create"})]}),P("span",{children:t})]})})},ML=()=>{const{currentRoom:t,setUser:e,user:n}=S.useContext(Bt);console.log(t);const r=async()=>{const i=fi(gi,"chats/"+t.uid),s=xs(i);pi(s,{type:"userAdd",user:n,value:"left the room."}),await xk(Au),e("")};return Me("div",{className:"navbar",children:[P("div",{className:"roomName",children:t&&t.email?t.email.substring(0,t.email.length-12):""}),P("div",{className:"rightNav",onClick:r,children:P("button",{children:"Leave"})})]})},bL=({userName:t,message:e,type:n})=>{const{user:r}=S.useContext(Bt),i=r===t?"chatR":"chat";let s="";switch(n){case"text":s=P("div",{className:"chatMessage",children:e});break;case"audio":s=P("div",{children:Me("audio",{controls:!0,children:[P("source",{src:e,type:"audio/mpeg"}),"Your browser does not support the audio element."]})});break;case"image":s=P("div",{className:"imageContainer",children:P("img",{className:"imageContainer",src:e})});break;case"userAdd":s=P("div",{className:"userAdd",children:e});break;default:s=P("div",{children:e});break}return P(V_,{children:Me("div",{className:i,children:[P("div",{className:"chatUser",children:t}),s]})})},UL=()=>{const t=S.useContext(Bt).currentRoom,[e,n]=S.useState([]);return S.useEffect(()=>{const r=fi(gi,"chats/"+t.uid);XA(r,i=>{const s=i.val();if(s){const o=Object.keys(s).map(l=>P(bL,{userName:s[l].user,message:s[l].value,type:s[l].type},l)).reverse();n(o)}})},[t]),P("div",{className:"chatSection",children:e})};function FL(t){return Fp({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}}]})(t)}function $L(t){return Fp({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}}]})(t)}function zL(t){return Fp({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"}}]})(t)}const jL=()=>{const t=S.useRef(),e=S.useContext(Bt).currentRoom,{user:n}=S.useContext(Bt),[r,i]=S.useState(""),s=()=>{if(t.current.focus(),r!=""){const u=fi(gi,"chats/"+e.uid),c=xs(u);pi(c,{type:"text",user:n,value:r})}i("")};return Me("div",{className:"chatInput",children:[P("textarea",{autoFocus:!0,ref:t,wrap:"soft",rows:0,cols:1,autoComplete:"off",id:"chatInput",value:r,onChange:u=>u.target.value!==`
`?i(u.target.value):i(""),type:"text",placeholder:"Message",onKeyDown:u=>{t.current.focus(),u.key==="Enter"&&(i(r.trim()),s(),i("".trim()))}}),Me("div",{className:"inputFunction",children:[P("label",{htmlFor:"audioFile",children:P(zL,{className:"inputIcon"})}),P("input",{style:{display:"none"},type:"file",accept:"audio/*",name:"audioFile",id:"audioFile",onChange:u=>{const c=u.target.files[0],h=Pg(R_,c.name),d=Rg(h,c);d.on("state_changed",g=>{},g=>{console.log(g.message)},()=>{Ng(d.snapshot.ref).then(g=>{const _=fi(gi,"chats/"+e.uid),v=xs(_);pi(v,{type:"audio",user:n,value:g})})})}}),P("label",{htmlFor:"imageFile",children:P($L,{className:"inputIcon"})}),P("input",{style:{display:"none"},type:"file",accept:"image/*",name:"imageFile",id:"imageFile",onBlur:()=>t.current.focus(),onChange:u=>{const c=u.target.files[0],h=Pg(R_,c.name),d=Rg(h,c);d.on("state_changed",g=>{},g=>{console.log(g.message)},()=>{Ng(d.snapshot.ref).then(g=>{const _=fi(gi,"chats/"+e.uid),v=xs(_);pi(v,{type:"image",user:n,value:g})})})}}),P(FL,{onClick:s,className:"sendIcon inputIcon"})]})]})},BL=()=>{const t=S.useRef();S.useEffect(()=>{t.current.scrollTop=t.current.scrollHeight},[]);const{user:e}=S.useContext(Bt),n=Wi();return e||n("/EnterName"),Me("div",{className:"homePage",children:[P(ML,{className:"navContainer"}),P(UL,{}),P("div",{className:"homeFooter",children:P(jL,{})}),P("div",{ref:t})]})};const HL=()=>{const t=Wi(),{setUser:e,user:n,currentRoom:r}=S.useContext(Bt),[i,s]=S.useState("");return console.log(r),Me("div",{className:"enterName",children:[P("div",{className:"logo",children:"Enter Name"}),Me("div",{className:"title",children:["Please enter your name",P("br",{})," to continue"]}),Me("form",{onSubmit:async l=>{l.preventDefault();const a=fi(gi,"chats/"+r.uid),u=xs(a);pi(u,{type:"userAdd",user:i,value:"joined the room."}),await e(i),t("/")},children:[P("input",{placeholder:"Your Name",required:!0,type:"text",id:"nameValue",value:i,onChange:l=>s(l.target.value)}),P("button",{type:"submit",children:"Continue"})]})]})},WL=()=>P(V_,{children:P(PL,{children:P(IL,{children:Me($r,{path:"/",children:[P($r,{index:!0,element:P(VL,{})}),P($r,{path:"CreateRoom",element:P(OL,{})}),P($r,{path:"JoinRoom",element:P(LL,{})}),P($r,{path:"EnterName",element:P(HL,{})})]})})})}),VL=()=>{const t=()=>{const{currentRoom:i,setUser:s}=S.useContext(Bt);return[i,s]},[e,n]=t(),r=Wi();if(!e)r("/JoinRoom");else return P(BL,{})};Fc.createRoot(document.getElementById("root")).render(P(DL,{children:P(WL,{})}));
