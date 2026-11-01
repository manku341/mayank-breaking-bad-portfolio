(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fm={exports:{}},Sl={},hm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),S0=Symbol.for("react.portal"),b0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),M0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),A0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),Sf=Symbol.iterator;function L0(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mm=Object.assign,gm={};function Es(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xm(){}xm.prototype=Es.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}var ad=sd.prototype=new xm;ad.constructor=sd;mm(ad,Es.prototype);ad.isPureReactComponent=!0;var bf=Array.isArray,vm=Object.prototype.hasOwnProperty,od={current:null},_m={key:!0,ref:!0,__self:!0,__source:!0};function ym(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)vm.call(e,i)&&!_m.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:wa,type:t,key:s,ref:a,props:r,_owner:od.current}}function P0(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function I0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ef=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I0(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case wa:case S0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Yl(a,0):i,bf(r)?(n="",t!=null&&(n=t.replace(Ef,"$&/")+"/"),Co(r,e,n,"",function(u){return u})):r!=null&&(ld(r)&&(r=P0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ef,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",bf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Yl(s,o);a+=Co(s,e,n,l,r)}else if(l=L0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Yl(s,o++),a+=Co(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function D0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Ro={transition:null},U0={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:od};function Sm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Es;qe.Fragment=b0;qe.Profiler=M0;qe.PureComponent=sd;qe.StrictMode=E0;qe.Suspense=C0;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;qe.act=Sm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=mm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)vm.call(e,l)&&!_m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:wa,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:T0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w0,_context:t},t.Consumer=t};qe.createElement=ym;qe.createFactory=function(t){var e=ym.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:A0,render:t}};qe.isValidElement=ld;qe.lazy=function(t){return{$$typeof:N0,_payload:{_status:-1,_result:t},_init:D0}};qe.memo=function(t,e){return{$$typeof:R0,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};qe.unstable_act=Sm;qe.useCallback=function(t,e){return Jt.current.useCallback(t,e)};qe.useContext=function(t){return Jt.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};qe.useEffect=function(t,e){return Jt.current.useEffect(t,e)};qe.useId=function(){return Jt.current.useId()};qe.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Jt.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};qe.useRef=function(t){return Jt.current.useRef(t)};qe.useState=function(t){return Jt.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return Jt.current.useTransition()};qe.version="18.3.1";hm.exports=qe;var Te=hm.exports;const O0=y0(Te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=Te,F0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,j0=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)B0.call(e,i)&&!H0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:F0,type:t,key:s,ref:a,props:r,_owner:j0.current}}Sl.Fragment=z0;Sl.jsx=bm;Sl.jsxs=bm;fm.exports=Sl;var c=fm.exports,eu={},Em={exports:{}},vn={},Mm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var z=D.length;D.push(O);e:for(;0<z;){var K=z-1>>>1,Z=D[K];if(0<r(Z,O))D[K]=O,D[z]=Z,z=K;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],z=D.pop();if(z!==O){D[0]=z;e:for(var K=0,Z=D.length,Y=Z>>>1;K<Y;){var q=2*(K+1)-1,oe=D[q],le=q+1,ue=D[le];if(0>r(oe,z))le<Z&&0>r(ue,oe)?(D[K]=ue,D[le]=z,K=le):(D[K]=oe,D[q]=z,K=q);else if(le<Z&&0>r(ue,z))D[K]=ue,D[le]=z,K=le;else break e}}return O}function r(D,O){var z=D.sortIndex-O.sortIndex;return z!==0?z:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,h=null,p=3,g=!1,_=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=D)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function S(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,W(R);else{var O=n(u);O!==null&&$(S,O.startTime-D)}}function R(D,O){_=!1,y&&(y=!1,d(N),N=-1),g=!0;var z=p;try{for(v(O),h=n(l);h!==null&&(!(h.expirationTime>O)||D&&!k());){var K=h.callback;if(typeof K=="function"){h.callback=null,p=h.priorityLevel;var Z=K(h.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),v(O)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var q=n(u);q!==null&&$(S,q.startTime-O),Y=!1}return Y}finally{h=null,p=z,g=!1}}var w=!1,T=null,N=-1,b=5,M=-1;function k(){return!(t.unstable_now()-M<b)}function G(){if(T!==null){var D=t.unstable_now();M=D;var O=!0;try{O=T(!0,D)}finally{O?J():(w=!1,T=null)}}else w=!1}var J;if(typeof m=="function")J=function(){m(G)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,F=P.port2;P.port1.onmessage=G,J=function(){F.postMessage(null)}}else J=function(){x(G,0)};function W(D){T=D,w||(w=!0,J())}function $(D,O){N=x(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,W(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var z=p;p=O;try{return D()}finally{p=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=p;p=D;try{return O()}finally{p=z}},t.unstable_scheduleCallback=function(D,O,z){var K=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?K+z:K):z=K,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,D={id:f++,callback:O,priorityLevel:D,startTime:z,expirationTime:Z,sortIndex:-1},z>K?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(y?(d(N),N=-1):y=!0,$(S,z-K))):(D.sortIndex=Z,e(l,D),_||g||(_=!0,W(R))),D},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(D){var O=p;return function(){var z=p;p=O;try{return D.apply(this,arguments)}finally{p=z}}}})(wm);Mm.exports=wm;var G0=Mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=Te,xn=G0;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tm=new Set,ra={};function Er(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(ra[t]=e,t=0;t<e.length;t++)Tm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},wf={};function X0(t){return tu.call(wf,t)?!0:tu.call(Mf,t)?!1:W0.test(t)?wf[t]=!0:(Mf[t]=!0,!1)}function Y0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q0(t,e,n,i){if(e===null||typeof e>"u"||Y0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cd,ud);Ft[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cd,ud);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cd,ud);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q0(e,n,r,i)&&(n=null),i||r===null?X0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),nu=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,ql;function Gs(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var $l=!1;function Kl(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function $0(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Gr:return"Portal";case nu:return"Profiler";case fd:return"StrictMode";case iu:return"Suspense";case ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cm:return(t.displayName||"Context")+".Consumer";case Am:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:su(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return su(t(e))}catch{}}return null}function K0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(e);case 8:return e===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z0(t){var e=Nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=Z0(t))}function Lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Nm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function au(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function ou(t,e){Pm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Vs(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function Im(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,Um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q0=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){Q0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function Om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function km(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Om(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var J0=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(t,e){if(e){if(J0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pu=null,rs=null,ss=null;function Lf(t){if(t=Ca(t)){if(typeof pu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Tl(e),pu(t.stateNode,t.type,e))}}function Fm(t){rs?ss?ss.push(t):ss=[t]:rs=t}function zm(){if(rs){var t=rs,e=ss;if(ss=rs=null,Lf(t),e)for(t=0;t<e.length;t++)Lf(e[t])}}function Bm(t,e){return t(e)}function jm(){}var Zl=!1;function Hm(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Bm(t,e,n)}finally{Zl=!1,(rs!==null||ss!==null)&&(jm(),zm())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Tl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var mu=!1;if(hi)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{mu=!1}function ev(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var qs=!1,Ho=null,Go=!1,gu=null,tv={onError:function(t){qs=!0,Ho=t}};function nv(t,e,n,i,r,s,a,o,l){qs=!1,Ho=null,ev.apply(tv,arguments)}function iv(t,e,n,i,r,s,a,o,l){if(nv.apply(this,arguments),qs){if(qs){var u=Ho;qs=!1,Ho=null}else throw Error(ie(198));Go||(Go=!0,gu=u)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pf(t){if(Mr(t)!==t)throw Error(ie(188))}function rv(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pf(r),t;if(s===i)return Pf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Vm(t){return t=rv(t),t!==null?Wm(t):null}function Wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wm(t);if(e!==null)return e;t=t.sibling}return null}var Xm=xn.unstable_scheduleCallback,If=xn.unstable_cancelCallback,sv=xn.unstable_shouldYield,av=xn.unstable_requestPaint,yt=xn.unstable_now,ov=xn.unstable_getCurrentPriorityLevel,gd=xn.unstable_ImmediatePriority,Ym=xn.unstable_UserBlockingPriority,Vo=xn.unstable_NormalPriority,lv=xn.unstable_LowPriority,qm=xn.unstable_IdlePriority,bl=null,Kn=null;function cv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:fv,uv=Math.log,dv=Math.LN2;function fv(t){return t>>>=0,t===0?32:31-(uv(t)/dv|0)|0}var Ha=64,Ga=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ws(o):(s&=a,s!==0&&(i=Ws(s)))}else a=n&~r,a!==0?i=Ws(a):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function hv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=hv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $m(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function mv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zm,vd,Qm,Jm,eg,vu=!1,Va=[],Ii=null,Di=null,Ui=null,oa=new Map,la=new Map,Ai=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Df(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ca(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xv(t,e,n,i,r){switch(e){case"focusin":return Ii=Ls(Ii,t,e,n,i,r),!0;case"dragenter":return Di=Ls(Di,t,e,n,i,r),!0;case"mouseover":return Ui=Ls(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oa.set(s,Ls(oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,la.set(s,Ls(la.get(s)||null,t,e,n,i,r)),!0}return!1}function tg(t){var e=lr(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gm(n),e!==null){t.blockedOn=e,eg(t.priority,function(){Qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hu=i,n.target.dispatchEvent(i),hu=null}else return e=Ca(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Uf(t,e,n){No(t)&&n.delete(e)}function vv(){vu=!1,Ii!==null&&No(Ii)&&(Ii=null),Di!==null&&No(Di)&&(Di=null),Ui!==null&&No(Ui)&&(Ui=null),oa.forEach(Uf),la.forEach(Uf)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,vu||(vu=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,vv)))}function ca(t){function e(r){return Ps(r,t)}if(0<Va.length){Ps(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Ps(Ii,t),Di!==null&&Ps(Di,t),Ui!==null&&Ps(Ui,t),oa.forEach(e),la.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&Ai.shift()}var as=vi.ReactCurrentBatchConfig,Xo=!0;function _v(t,e,n,i){var r=Je,s=as.transition;as.transition=null;try{Je=1,_d(t,e,n,i)}finally{Je=r,as.transition=s}}function yv(t,e,n,i){var r=Je,s=as.transition;as.transition=null;try{Je=4,_d(t,e,n,i)}finally{Je=r,as.transition=s}}function _d(t,e,n,i){if(Xo){var r=_u(t,e,n,i);if(r===null)lc(t,e,i,Yo,n),Df(t,i);else if(xv(r,t,e,n,i))i.stopPropagation();else if(Df(t,i),e&4&&-1<gv.indexOf(t)){for(;r!==null;){var s=Ca(r);if(s!==null&&Zm(s),s=_u(t,e,n,i),s===null&&lc(t,e,i,Yo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lc(t,e,i,null,n)}}var Yo=null;function _u(t,e,n,i){if(Yo=null,t=md(i),t=lr(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ov()){case gd:return 1;case Ym:return 4;case Vo:case lv:return 16;case qm:return 536870912;default:return 16}default:return 16}}var Ri=null,yd=null,Lo=null;function ig(){if(Lo)return Lo;var t,e=yd,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Lo=r.slice(t,1<i?1-i:void 0)}function Po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Of(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Of,this.isPropagationStopped=Of,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=_n(Ms),Aa=pt({},Ms,{view:0,detail:0}),Sv=_n(Aa),Jl,ec,Is,El=pt({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Jl=t.screenX-Is.screenX,ec=t.screenY-Is.screenY):ec=Jl=0,Is=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),kf=_n(El),bv=pt({},El,{dataTransfer:0}),Ev=_n(bv),Mv=pt({},Aa,{relatedTarget:0}),tc=_n(Mv),wv=pt({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=_n(wv),Av=pt({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=_n(Av),Rv=pt({},Ms,{data:0}),Ff=_n(Rv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pv[t])?!!e[t]:!1}function bd(){return Iv}var Dv=pt({},Aa,{key:function(t){if(t.key){var e=Nv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?Po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=_n(Dv),Ov=pt({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=_n(Ov),kv=pt({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),Fv=_n(kv),zv=pt({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=_n(zv),jv=pt({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=_n(jv),Gv=[9,13,27,32],Ed=hi&&"CompositionEvent"in window,$s=null;hi&&"documentMode"in document&&($s=document.documentMode);var Vv=hi&&"TextEvent"in window&&!$s,rg=hi&&(!Ed||$s&&8<$s&&11>=$s),Bf=" ",jf=!1;function sg(t,e){switch(t){case"keyup":return Gv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Wv(t,e){switch(t){case"compositionend":return ag(e);case"keypress":return e.which!==32?null:(jf=!0,Bf);case"textInput":return t=e.data,t===Bf&&jf?null:t;default:return null}}function Xv(t,e){if(Wr)return t==="compositionend"||!Ed&&sg(t,e)?(t=ig(),Lo=yd=Ri=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rg&&e.locale!=="ko"?null:e.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yv[t.type]:e==="textarea"}function og(t,e,n,i){Fm(i),e=qo(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,ua=null;function qv(t){vg(t,0)}function Ml(t){var e=qr(t);if(Lm(e))return t}function $v(t,e){if(t==="change")return e}var lg=!1;if(hi){var nc;if(hi){var ic="oninput"in document;if(!ic){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),ic=typeof Gf.oninput=="function"}nc=ic}else nc=!1;lg=nc&&(!document.documentMode||9<document.documentMode)}function Vf(){Ks&&(Ks.detachEvent("onpropertychange",cg),ua=Ks=null)}function cg(t){if(t.propertyName==="value"&&Ml(ua)){var e=[];og(e,ua,t,md(t)),Hm(qv,e)}}function Kv(t,e,n){t==="focusin"?(Vf(),Ks=e,ua=n,Ks.attachEvent("onpropertychange",cg)):t==="focusout"&&Vf()}function Zv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(ua)}function Qv(t,e){if(t==="click")return Ml(e)}function Jv(t,e){if(t==="input"||t==="change")return Ml(e)}function e_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:e_;function da(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,e){var n=Wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wf(n)}}function ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dg(){for(var t=window,e=jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jo(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function t_(t){var e=dg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(i!==null&&Md(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xf(n,s);var a=Xf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n_=hi&&"documentMode"in document&&11>=document.documentMode,Xr=null,yu=null,Zs=null,Su=!1;function Yf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||Xr==null||Xr!==jo(i)||(i=Xr,"selectionStart"in i&&Md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&da(Zs,i)||(Zs=i,i=qo(yu,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xr)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},rc={},fg={};hi&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function wl(t){if(rc[t])return rc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fg)return rc[t]=e[n];return t}var hg=wl("animationend"),pg=wl("animationiteration"),mg=wl("animationstart"),gg=wl("transitionend"),xg=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){xg.set(t,e),Er(e,[t])}for(var sc=0;sc<qf.length;sc++){var ac=qf[sc],i_=ac.toLowerCase(),r_=ac[0].toUpperCase()+ac.slice(1);Yi(i_,"on"+r_)}Yi(hg,"onAnimationEnd");Yi(pg,"onAnimationIteration");Yi(mg,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(gg,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function $f(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,iv(i,e,void 0,t),t.currentTarget=null}function vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;$f(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;$f(r,o,u),s=l}}}if(Go)throw t=gu,Go=!1,gu=null,t}function at(t,e){var n=e[Tu];n===void 0&&(n=e[Tu]=new Set);var i=t+"__bubble";n.has(i)||(_g(e,t,2,!1),n.add(i))}function oc(t,e,n){var i=0;e&&(i|=4),_g(n,t,i,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Ya]){t[Ya]=!0,Tm.forEach(function(n){n!=="selectionchange"&&(s_.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,oc("selectionchange",!1,e))}}function _g(t,e,n,i){switch(ng(e)){case 1:var r=_v;break;case 4:r=yv;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Hm(function(){var u=s,f=md(n),h=[];e:{var p=xg.get(t);if(p!==void 0){var g=Sd,_=t;switch(t){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":g=Uv;break;case"focusin":_="focus",g=tc;break;case"focusout":_="blur",g=tc;break;case"beforeblur":case"afterblur":g=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Fv;break;case hg:case pg:case mg:g=Tv;break;case gg:g=Bv;break;case"scroll":g=Sv;break;case"wheel":g=Hv;break;case"copy":case"cut":case"paste":g=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zf}var y=(e&4)!==0,x=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=aa(m,d),S!=null&&y.push(ha(m,S,v)))),x)break;m=m.return}0<y.length&&(p=new g(p,_,null,n,f),h.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==hu&&(_=n.relatedTarget||n.fromElement)&&(lr(_)||_[pi]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?lr(_):null,_!==null&&(x=Mr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=kf,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=zf,S="onPointerLeave",d="onPointerEnter",m="pointer"),x=g==null?p:qr(g),v=_==null?p:qr(_),p=new y(S,m+"leave",g,n,f),p.target=x,p.relatedTarget=v,S=null,lr(f)===u&&(y=new y(d,m+"enter",_,n,f),y.target=v,y.relatedTarget=x,S=y),x=S,g&&_)t:{for(y=g,d=_,m=0,v=y;v;v=Tr(v))m++;for(v=0,S=d;S;S=Tr(S))v++;for(;0<m-v;)y=Tr(y),m--;for(;0<v-m;)d=Tr(d),v--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=Tr(y),d=Tr(d)}y=null}else y=null;g!==null&&Kf(h,p,g,y,!1),_!==null&&x!==null&&Kf(h,x,_,y,!0)}}e:{if(p=u?qr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var R=$v;else if(Hf(p))if(lg)R=Jv;else{R=Zv;var w=Kv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=Qv);if(R&&(R=R(t,u))){og(h,R,n,f);break e}w&&w(t,p,u),t==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&lu(p,"number",p.value)}switch(w=u?qr(u):window,t){case"focusin":(Hf(w)||w.contentEditable==="true")&&(Xr=w,yu=u,Zs=null);break;case"focusout":Zs=yu=Xr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Yf(h,n,f);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":Yf(h,n,f)}var T;if(Ed)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Wr?sg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(rg&&n.locale!=="ko"&&(Wr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Wr&&(T=ig()):(Ri=f,yd="value"in Ri?Ri.value:Ri.textContent,Wr=!0)),w=qo(u,N),0<w.length&&(N=new Ff(N,t,null,n,f),h.push({event:N,listeners:w}),T?N.data=T:(T=ag(n),T!==null&&(N.data=T)))),(T=Vv?Wv(t,n):Xv(t,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(f=new Ff("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=T))}vg(h,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=aa(t,n),s!=null&&i.unshift(ha(t,s,r)),s=aa(t,e),s!=null&&i.push(ha(t,s,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=aa(n,s),l!=null&&a.unshift(ha(n,l,o))):r||(l=aa(n,s),l!=null&&a.push(ha(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var a_=/\r\n?/g,o_=/\u0000|\uFFFD/g;function Zf(t){return(typeof t=="string"?t:""+t).replace(a_,`
`).replace(o_,"")}function qa(t,e,n){if(e=Zf(e),Zf(t)!==e&&n)throw Error(ie(425))}function $o(){}var bu=null,Eu=null;function Mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,c_=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(t){return Qf.resolve(null).then(t).catch(u_)}:wu;function u_(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ca(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),$n="__reactFiber$"+ws,pa="__reactProps$"+ws,pi="__reactContainer$"+ws,Tu="__reactEvents$"+ws,d_="__reactListeners$"+ws,f_="__reactHandles$"+ws;function lr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jf(t);t!==null;){if(n=t[$n])return n;t=Jf(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[$n]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Tl(t){return t[pa]||null}var Au=[],$r=-1;function qi(t){return{current:t}}function lt(t){0>$r||(t.current=Au[$r],Au[$r]=null,$r--)}function st(t,e){$r++,Au[$r]=t.current,t.current=e}var Wi={},Yt=qi(Wi),an=qi(!1),gr=Wi;function hs(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Ko(){lt(an),lt(Yt)}function eh(t,e,n){if(Yt.current!==Wi)throw Error(ie(168));st(Yt,e),st(an,n)}function yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,K0(t)||"Unknown",r));return pt({},n,i)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,gr=Yt.current,st(Yt,t),st(an,an.current),!0}function th(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=yg(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,lt(an),lt(Yt),st(Yt,t)):lt(an),st(an,n)}var ai=null,Al=!1,uc=!1;function Sg(t){ai===null?ai=[t]:ai.push(t)}function h_(t){Al=!0,Sg(t)}function $i(){if(!uc&&ai!==null){uc=!0;var t=0,e=Je;try{var n=ai;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Al=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Xm(gd,$i),r}finally{Je=e,uc=!1}}return null}var Kr=[],Zr=0,Qo=null,Jo=0,bn=[],En=0,xr=null,li=1,ci="";function nr(t,e){Kr[Zr++]=Jo,Kr[Zr++]=Qo,Qo=t,Jo=e}function bg(t,e,n){bn[En++]=li,bn[En++]=ci,bn[En++]=xr,xr=t;var i=li;t=ci;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Hn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function wd(t){t.return!==null&&(nr(t,1),bg(t,1,0))}function Td(t){for(;t===Qo;)Qo=Kr[--Zr],Kr[Zr]=null,Jo=Kr[--Zr],Kr[Zr]=null;for(;t===xr;)xr=bn[--En],bn[En]=null,ci=bn[--En],bn[En]=null,li=bn[--En],bn[En]=null}var gn=null,mn=null,ct=!1,Fn=null;function Eg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(ct){var e=mn;if(e){var n=e;if(!nh(t,e)){if(Cu(t))throw Error(ie(418));e=Oi(n.nextSibling);var i=gn;e&&nh(t,e)?Eg(i,n):(t.flags=t.flags&-4097|2,ct=!1,gn=t)}}else{if(Cu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ct=!1,gn=t}}}function ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function $a(t){if(t!==gn)return!1;if(!ct)return ih(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mu(t.type,t.memoizedProps)),e&&(e=mn)){if(Cu(t))throw Mg(),Error(ie(418));for(;e;)Eg(t,e),e=Oi(e.nextSibling)}if(ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Oi(t.stateNode.nextSibling):null;return!0}function Mg(){for(var t=mn;t;)t=Oi(t.nextSibling)}function ps(){mn=gn=null,ct=!1}function Ad(t){Fn===null?Fn=[t]:Fn.push(t)}var p_=vi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rh(t){var e=t._init;return e(t._payload)}function wg(t){function e(d,m){if(t){var v=d.deletions;v===null?(d.deletions=[m],d.flags|=16):v.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Bi(d,m),d.index=0,d.sibling=null,d}function s(d,m,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<m?(d.flags|=2,m):v):(d.flags|=2,m)):(d.flags|=1048576,m)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,m,v,S){return m===null||m.tag!==6?(m=xc(v,d.mode,S),m.return=d,m):(m=r(m,v),m.return=d,m)}function l(d,m,v,S){var R=v.type;return R===Vr?f(d,m,v.props.children,S,v.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&rh(R)===m.type)?(S=r(m,v.props),S.ref=Ds(d,m,v),S.return=d,S):(S=zo(v.type,v.key,v.props,null,d.mode,S),S.ref=Ds(d,m,v),S.return=d,S)}function u(d,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=vc(v,d.mode,S),m.return=d,m):(m=r(m,v.children||[]),m.return=d,m)}function f(d,m,v,S,R){return m===null||m.tag!==7?(m=fr(v,d.mode,S,R),m.return=d,m):(m=r(m,v),m.return=d,m)}function h(d,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xc(""+m,d.mode,v),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case za:return v=zo(m.type,m.key,m.props,null,d.mode,v),v.ref=Ds(d,null,m),v.return=d,v;case Gr:return m=vc(m,d.mode,v),m.return=d,m;case wi:var S=m._init;return h(d,S(m._payload),v)}if(Vs(m)||Rs(m))return m=fr(m,d.mode,v,null),m.return=d,m;Ka(d,m)}return null}function p(d,m,v,S){var R=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(d,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===R?l(d,m,v,S):null;case Gr:return v.key===R?u(d,m,v,S):null;case wi:return R=v._init,p(d,m,R(v._payload),S)}if(Vs(v)||Rs(v))return R!==null?null:f(d,m,v,S,null);Ka(d,v)}return null}function g(d,m,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,o(m,d,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case za:return d=d.get(S.key===null?v:S.key)||null,l(m,d,S,R);case Gr:return d=d.get(S.key===null?v:S.key)||null,u(m,d,S,R);case wi:var w=S._init;return g(d,m,v,w(S._payload),R)}if(Vs(S)||Rs(S))return d=d.get(v)||null,f(m,d,S,R,null);Ka(m,S)}return null}function _(d,m,v,S){for(var R=null,w=null,T=m,N=m=0,b=null;T!==null&&N<v.length;N++){T.index>N?(b=T,T=null):b=T.sibling;var M=p(d,T,v[N],S);if(M===null){T===null&&(T=b);break}t&&T&&M.alternate===null&&e(d,T),m=s(M,m,N),w===null?R=M:w.sibling=M,w=M,T=b}if(N===v.length)return n(d,T),ct&&nr(d,N),R;if(T===null){for(;N<v.length;N++)T=h(d,v[N],S),T!==null&&(m=s(T,m,N),w===null?R=T:w.sibling=T,w=T);return ct&&nr(d,N),R}for(T=i(d,T);N<v.length;N++)b=g(T,d,N,v[N],S),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?N:b.key),m=s(b,m,N),w===null?R=b:w.sibling=b,w=b);return t&&T.forEach(function(k){return e(d,k)}),ct&&nr(d,N),R}function y(d,m,v,S){var R=Rs(v);if(typeof R!="function")throw Error(ie(150));if(v=R.call(v),v==null)throw Error(ie(151));for(var w=R=null,T=m,N=m=0,b=null,M=v.next();T!==null&&!M.done;N++,M=v.next()){T.index>N?(b=T,T=null):b=T.sibling;var k=p(d,T,M.value,S);if(k===null){T===null&&(T=b);break}t&&T&&k.alternate===null&&e(d,T),m=s(k,m,N),w===null?R=k:w.sibling=k,w=k,T=b}if(M.done)return n(d,T),ct&&nr(d,N),R;if(T===null){for(;!M.done;N++,M=v.next())M=h(d,M.value,S),M!==null&&(m=s(M,m,N),w===null?R=M:w.sibling=M,w=M);return ct&&nr(d,N),R}for(T=i(d,T);!M.done;N++,M=v.next())M=g(T,d,N,M.value,S),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?N:M.key),m=s(M,m,N),w===null?R=M:w.sibling=M,w=M);return t&&T.forEach(function(G){return e(d,G)}),ct&&nr(d,N),R}function x(d,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var R=v.key,w=m;w!==null;){if(w.key===R){if(R=v.type,R===Vr){if(w.tag===7){n(d,w.sibling),m=r(w,v.props.children),m.return=d,d=m;break e}}else if(w.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&rh(R)===w.type){n(d,w.sibling),m=r(w,v.props),m.ref=Ds(d,w,v),m.return=d,d=m;break e}n(d,w);break}else e(d,w);w=w.sibling}v.type===Vr?(m=fr(v.props.children,d.mode,S,v.key),m.return=d,d=m):(S=zo(v.type,v.key,v.props,null,d.mode,S),S.ref=Ds(d,m,v),S.return=d,d=S)}return a(d);case Gr:e:{for(w=v.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(d,m.sibling),m=r(m,v.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=vc(v,d.mode,S),m.return=d,d=m}return a(d);case wi:return w=v._init,x(d,m,w(v._payload),S)}if(Vs(v))return _(d,m,v,S);if(Rs(v))return y(d,m,v,S);Ka(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,v),m.return=d,d=m):(n(d,m),m=xc(v,d.mode,S),m.return=d,d=m),a(d)):n(d,m)}return x}var ms=wg(!0),Tg=wg(!1),el=qi(null),tl=null,Qr=null,Cd=null;function Rd(){Cd=Qr=tl=null}function Nd(t){var e=el.current;lt(el),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function os(t,e){tl=t,Cd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Cd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(tl===null)throw Error(ie(308));Qr=t,tl.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var cr=null;function Ld(t){cr===null?cr=[t]:cr.push(t)}function Ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ld(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ld(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function sh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(p=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(g,h,p);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,p=typeof _=="function"?_.call(g,h,p):_,p==null)break e;h=pt({},h,p);break e;case 2:Ti=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=a,t.lanes=a,t.memoizedState=h}}function ah(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ra={},Zn=qi(Ra),ma=qi(Ra),ga=qi(Ra);function ur(t){if(t===Ra)throw Error(ie(174));return t}function Id(t,e){switch(st(ga,e),st(ma,t),st(Zn,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}lt(Zn),st(Zn,e)}function gs(){lt(Zn),lt(ma),lt(ga)}function Rg(t){ur(ga.current);var e=ur(Zn.current),n=uu(e,t.type);e!==n&&(st(ma,t),st(Zn,n))}function Dd(t){ma.current===t&&(lt(Zn),lt(ma))}var ft=qi(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Ud(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Do=vi.ReactCurrentDispatcher,fc=vi.ReactCurrentBatchConfig,vr=0,ht=null,Mt=null,Pt=null,rl=!1,Qs=!1,xa=0,m_=0;function jt(){throw Error(ie(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function kd(t,e,n,i,r,s){if(vr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?__:y_,t=n(i,r),Qs){s=0;do{if(Qs=!1,xa=0,25<=s)throw Error(ie(301));s+=1,Pt=Mt=null,e.updateQueue=null,Do.current=S_,t=n(i,r)}while(Qs)}if(Do.current=sl,e=Mt!==null&&Mt.next!==null,vr=0,Pt=Mt=ht=null,rl=!1,e)throw Error(ie(300));return t}function Fd(){var t=xa!==0;return xa=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Ln(){if(Mt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Pt===null?ht.memoizedState:Pt.next;if(e!==null)Pt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function va(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((vr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,ht.lanes|=f,_r|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ng(){}function Lg(t,e){var n=ht,i=Ln(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,zd(Dg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,_a(9,Ig.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ie(349));vr&30||Pg(n,e,r)}return r}function Pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ig(t,e,n,i){e.value=n,e.getSnapshot=i,Ug(e)&&Og(t)}function Dg(t,e,n){return n(function(){Ug(e)&&Og(t)})}function Ug(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Og(t){var e=mi(t,1);e!==null&&Gn(e,t,1,-1)}function oh(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=v_.bind(null,ht,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kg(){return Ln().memoizedState}function Uo(t,e,n,i){var r=Yn();ht.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function Cl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Od(i,a.deps)){r.memoizedState=_a(e,n,s,i);return}}ht.flags|=t,r.memoizedState=_a(1|e,n,s,i)}function lh(t,e){return Uo(8390656,8,t,e)}function zd(t,e){return Cl(2048,8,t,e)}function Fg(t,e){return Cl(4,2,t,e)}function zg(t,e){return Cl(4,4,t,e)}function Bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jg(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,Bg.bind(null,e,t),n)}function Bd(){}function Hg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return vr&21?(Vn(n,e)||(n=$m(),ht.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function g_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=fc.transition;fc.transition={};try{t(!1),e()}finally{Je=n,fc.transition=i}}function Wg(){return Ln().memoizedState}function x_(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Xg(t))Yg(e,n);else if(n=Ag(t,e,n,i),n!==null){var r=Qt();Gn(n,t,i,r),qg(n,e,i)}}function v_(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xg(t))Yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ld(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ag(t,e,r,i),n!==null&&(r=Qt(),Gn(n,t,i,r),qg(n,e,i))}}function Xg(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Yg(t,e){Qs=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var sl={readContext:Nn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},__={readContext:Nn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:lh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4194308,4,Bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uo(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=x_.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:oh,useDebugValue:Bd,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=oh(!1),e=t[0];return t=g_.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Yn();if(ct){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),It===null)throw Error(ie(349));vr&30||Pg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lh(Dg.bind(null,i,s,t),[t]),i.flags|=2048,_a(9,Ig.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=It.identifierPrefix;if(ct){var n=ci,i=li;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=m_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y_={readContext:Nn,useCallback:Hg,useContext:Nn,useEffect:zd,useImperativeHandle:jg,useInsertionEffect:Fg,useLayoutEffect:zg,useMemo:Gg,useReducer:hc,useRef:kg,useState:function(){return hc(va)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ln();return Vg(e,Mt.memoizedState,t)},useTransition:function(){var t=hc(va)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Lg,useId:Wg,unstable_isNewReconciler:!1},S_={readContext:Nn,useCallback:Hg,useContext:Nn,useEffect:zd,useImperativeHandle:jg,useInsertionEffect:Fg,useLayoutEffect:zg,useMemo:Gg,useReducer:pc,useRef:kg,useState:function(){return pc(va)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ln();return Mt===null?e.memoizedState=t:Vg(e,Mt.memoizedState,t)},useTransition:function(){var t=pc(va)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Lg,useId:Wg,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=zi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Gn(e,t,r,i),Io(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=zi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Gn(e,t,r,i),Io(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=zi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Gn(e,t,i,n),Io(e,t,i))}};function ch(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function $g(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=on(e)?gr:Yt.current,i=e.contextTypes,s=(i=i!=null)?hs(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function uh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Pu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=on(e)?gr:Yt.current,r.context=hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=$0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var b_=typeof WeakMap=="function"?WeakMap:Map;function Kg(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,Gu=i),Iu(t,e)},n}function Zg(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Iu(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function dh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new b_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=O_.bind(null,t,e,n),e.then(t,t))}function fh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var E_=vi.ReactCurrentOwner,sn=!1;function Kt(t,e,n,i){e.child=t===null?Tg(e,null,n,i):ms(e,t.child,n,i)}function ph(t,e,n,i,r){n=n.render;var s=e.ref;return os(e,r),i=kd(t,e,n,i,s,r),n=Fd(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&n&&wd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function mh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qg(t,e,s,i,r)):(t=zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Qg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Du(t,e,n,i,r)}function Jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(es,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(es,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(es,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(es,pn),pn|=i;return Kt(t,e,r,n),e.child}function ex(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Du(t,e,n,i,r){var s=on(n)?gr:Yt.current;return s=hs(e,s),os(e,r),n=kd(t,e,n,i,s,r),i=Fd(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&i&&wd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function gh(t,e,n,i,r){if(on(n)){var s=!0;Zo(e)}else s=!1;if(os(e,r),e.stateNode===null)Oo(t,e),$g(e,n,i),Pu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=on(n)?gr:Yt.current,u=hs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&uh(e,a,i,u),Ti=!1;var p=e.memoizedState;a.state=p,nl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||an.current||Ti?(typeof f=="function"&&(Lu(e,n,f,i),l=e.memoizedState),(o=Ti||ch(e,n,o,i,p,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Cg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:On(e.type,o),a.props=u,h=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=on(n)?gr:Yt.current,l=hs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==l)&&uh(e,a,i,l),Ti=!1,p=e.memoizedState,a.state=p,nl(e,i,a,r);var _=e.memoizedState;o!==h||p!==_||an.current||Ti?(typeof g=="function"&&(Lu(e,n,g,i),_=e.memoizedState),(u=Ti||ch(e,n,u,i,p,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Uu(t,e,n,i,s,r)}function Uu(t,e,n,i,r,s){ex(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&th(e,n,!1),gi(t,e,s);i=e.stateNode,E_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ms(e,t.child,null,s),e.child=ms(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&th(e,n,!0),e.child}function tx(t){var e=t.stateNode;e.pendingContext?eh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eh(t,e.context,!1),Id(t,e.containerInfo)}function xh(t,e,n,i,r){return ps(),Ad(r),e.flags|=256,Kt(t,e,n,i),e.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function nx(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ft,r&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Pl(a,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ku(n),e.memoizedState=Ou,t):jd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return M_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Bi(o,s):(s=fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ou,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jd(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,i){return i!==null&&Ad(i),ms(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=mc(Error(ie(422))),Za(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ms(e,t.child,null,a),e.child.memoizedState=ku(a),e.memoizedState=Ou,s);if(!(e.mode&1))return Za(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=mc(s,i,void 0),Za(t,e,a,i)}if(o=(a&t.childLanes)!==0,sn||o){if(i=It,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Gn(i,t,r,-1))}return Yd(),i=mc(Error(ie(421))),Za(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=k_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Oi(r.nextSibling),gn=e,ct=!0,Fn=null,t!==null&&(bn[En++]=li,bn[En++]=ci,bn[En++]=xr,li=t.id,ci=t.overflow,xr=e),e=jd(e,i.children),e.flags|=4096,e)}function vh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ix(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vh(t,n,e);else if(t.tag===19)vh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w_(t,e,n){switch(e.tag){case 3:tx(e),ps();break;case 5:Rg(e);break;case 1:on(e.type)&&Zo(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?nx(t,e,n):(st(ft,ft.current&1),t=gi(t,e,n),t!==null?t.sibling:null);st(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ix(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Jg(t,e,n)}return gi(t,e,n)}var rx,Fu,sx,ax;rx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fu=function(){};sx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Zn.current);var s=null;switch(n){case"input":r=au(t,r),i=au(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=cu(t,r),i=cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$o)}du(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ra.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ra.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ax=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function T_(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return on(e.type)&&Ko(),Ht(e),null;case 3:return i=e.stateNode,gs(),lt(an),lt(Yt),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Xu(Fn),Fn=null))),Fu(t,e),Ht(e),null;case 5:Dd(e);var r=ur(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)sx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ht(e),null}if(t=ur(Zn.current),$a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[pa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)at(Xs[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Af(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Rf(i,s),at("invalid",i)}du(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,o,t),r=["children",""+o]):ra.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Ba(i),Cf(i,s,!0);break;case"textarea":Ba(i),Nf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$o)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[pa]=i,rx(t,e,!1,!1),e.stateNode=t;e:{switch(a=fu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)at(Xs[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Af(t,i),r=au(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Rf(t,i),r=cu(t,i),at("invalid",t);break;default:r=i}du(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?km(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sa(t,l):typeof l=="number"&&sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&dd(t,s,l,a))}switch(n){case"input":Ba(t),Cf(t,i,!1);break;case"textarea":Ba(t),Nf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?is(t,!!i.multiple,s,!1):i.defaultValue!=null&&is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)ax(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ur(ga.current),ur(Zn.current),$a(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ht(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&mn!==null&&e.mode&1&&!(e.flags&128))Mg(),ps(),e.flags|=98560,s=!1;else if(s=$a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[$n]=e}else ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Fn!==null&&(Xu(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?wt===0&&(wt=3):Yd())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return gs(),Fu(t,e),t===null&&fa(e.stateNode.containerInfo),Ht(e),null;case 10:return Nd(e.type._context),Ht(e),null;case 17:return on(e.type)&&Ko(),Ht(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Us(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=il(t),a!==null){for(e.flags|=128,Us(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>vs&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ht(e),null}else 2*yt()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ft.current,st(ft,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function A_(t,e){switch(Td(e),e.tag){case 1:return on(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gs(),lt(an),lt(Yt),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return gs(),null;case 10:return Nd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Qa=!1,Wt=!1,C_=typeof WeakSet=="function"?WeakSet:Set,me=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function zu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var _h=!1;function R_(t,e){if(bu=Xo,t=dg(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:t,selectionRange:n},Xo=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,x=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),x);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=_h,_h=!1,_}function Js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zu(e,n,s)}r=r.next}while(r!==i)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ox(t){var e=t.alternate;e!==null&&(t.alternate=null,ox(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[pa],delete e[Tu],delete e[d_],delete e[f_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lx(t){return t.tag===5||t.tag===3||t.tag===4}function yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Hu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var Ut=null,kn=!1;function _i(t,e,n){for(n=n.child;n!==null;)cx(t,e,n),n=n.sibling}function cx(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Wt||Jr(n,e);case 6:var i=Ut,r=kn;Ut=null,_i(t,e,n),Ut=i,kn=r,Ut!==null&&(kn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(kn?(t=Ut,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),ca(t)):cc(Ut,n.stateNode));break;case 4:i=Ut,r=kn,Ut=n.stateNode.containerInfo,kn=!0,_i(t,e,n),Ut=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zu(n,e,a),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Wt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,_i(t,e,n),Wt=i):_i(t,e,n);break;default:_i(t,e,n)}}function Sh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new C_),e.forEach(function(i){var r=F_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,kn=!1;break e;case 3:Ut=o.stateNode.containerInfo,kn=!0;break e;case 4:Ut=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(Ut===null)throw Error(ie(160));cx(s,a,r),Ut=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ux(e,t),e=e.sibling}function ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Xn(t),i&4){try{Js(3,t,t.return),Nl(3,t)}catch(y){xt(t,t.return,y)}try{Js(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Pn(e,t),Xn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(Pn(e,t),Xn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{sa(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Pm(r,s),fu(o,a);var u=fu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?km(r,h):f==="dangerouslySetInnerHTML"?Um(r,h):f==="children"?sa(r,h):dd(r,f,h,u)}switch(o){case"input":ou(r,s);break;case"textarea":Im(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?is(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?is(r,!!s.multiple,s.defaultValue,!0):is(r,!!s.multiple,s.multiple?[]:"",!1))}r[pa]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Pn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Pn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Pn(e,t),Xn(t);break;case 13:Pn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=yt())),i&4&&Sh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||f,Pn(e,t),Wt=u):Pn(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(p=me,g=p.child,p.tag){case 0:case 11:case 14:case 15:Js(4,p,p.return);break;case 1:Jr(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:Jr(p,p.return);break;case 22:if(p.memoizedState!==null){Eh(h);continue}}g!==null?(g.return=p,me=g):Eh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Om("display",a))}catch(y){xt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){xt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),Xn(t),i&4&&Sh(t);break;case 21:break;default:Pn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lx(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(sa(r,""),i.flags&=-33);var s=yh(t);Hu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=yh(t);ju(t,o,a);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function N_(t,e,n){me=t,dx(t)}function dx(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Qa;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Wt;o=Qa;var u=Wt;if(Qa=a,(Wt=l)&&!u)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?Mh(r):l!==null?(l.return=a,me=l):Mh(r);for(;s!==null;)me=s,dx(s),s=s.sibling;me=r,Qa=o,Wt=u}bh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):bh(t)}}function bh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ah(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ah(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Wt||e.flags&512&&Bu(e)}catch(p){xt(e,e.return,p)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Eh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Mh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Bu(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Bu(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var L_=Math.ceil,al=vi.ReactCurrentDispatcher,Hd=vi.ReactCurrentOwner,Cn=vi.ReactCurrentBatchConfig,Ze=0,It=null,Et=null,kt=0,pn=0,es=qi(0),wt=0,ya=null,_r=0,Ll=0,Gd=0,ea=null,nn=null,Vd=0,vs=1/0,si=null,ol=!1,Gu=null,Fi=null,Ja=!1,Ni=null,ll=0,ta=0,Vu=null,ko=-1,Fo=0;function Qt(){return Ze&6?yt():ko!==-1?ko:ko=yt()}function zi(t){return t.mode&1?Ze&2&&kt!==0?kt&-kt:p_.transition!==null?(Fo===0&&(Fo=$m()),Fo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function Gn(t,e,n,i){if(50<ta)throw ta=0,Vu=null,Error(ie(185));Ta(t,n,i),(!(Ze&2)||t!==It)&&(t===It&&(!(Ze&2)&&(Ll|=n),wt===4&&Ci(t,kt)),ln(t,i),n===1&&Ze===0&&!(e.mode&1)&&(vs=yt()+500,Al&&$i()))}function ln(t,e){var n=t.callbackNode;pv(t,e);var i=Wo(t,t===It?kt:0);if(i===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?h_(wh.bind(null,t)):Sg(wh.bind(null,t)),c_(function(){!(Ze&6)&&$i()}),n=null;else{switch(Km(i)){case 1:n=gd;break;case 4:n=Ym;break;case 16:n=Vo;break;case 536870912:n=qm;break;default:n=Vo}n=_x(n,fx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fx(t,e){if(ko=-1,Fo=0,Ze&6)throw Error(ie(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var i=Wo(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=Ze;Ze|=2;var s=px();(It!==t||kt!==e)&&(si=null,vs=yt()+500,dr(t,e));do try{D_();break}catch(o){hx(t,o)}while(!0);Rd(),al.current=s,Ze=r,Et!==null?e=0:(It=null,kt=0,e=wt)}if(e!==0){if(e===2&&(r=xu(t),r!==0&&(i=r,e=Wu(t,r))),e===1)throw n=ya,dr(t,0),Ci(t,i),ln(t,yt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!P_(r)&&(e=cl(t,i),e===2&&(s=xu(t),s!==0&&(i=s,e=Wu(t,s))),e===1))throw n=ya,dr(t,0),Ci(t,i),ln(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ir(t,nn,si);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Vd+500-yt(),10<e)){if(Wo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wu(ir.bind(null,t,nn,si),e);break}ir(t,nn,si);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*L_(i/1960))-i,10<i){t.timeoutHandle=wu(ir.bind(null,t,nn,si),i);break}ir(t,nn,si);break;case 5:ir(t,nn,si);break;default:throw Error(ie(329))}}}return ln(t,yt()),t.callbackNode===n?fx.bind(null,t):null}function Wu(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=nn,nn=n,e!==null&&Xu(e)),t}function Xu(t){nn===null?nn=t:nn.push.apply(nn,t)}function P_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Gd,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function wh(t){if(Ze&6)throw Error(ie(327));ls();var e=Wo(t,0);if(!(e&1))return ln(t,yt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=xu(t);i!==0&&(e=i,n=Wu(t,i))}if(n===1)throw n=ya,dr(t,0),Ci(t,e),ln(t,yt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,nn,si),ln(t,yt()),null}function Wd(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(vs=yt()+500,Al&&$i())}}function yr(t){Ni!==null&&Ni.tag===0&&!(Ze&6)&&ls();var e=Ze;Ze|=1;var n=Cn.transition,i=Je;try{if(Cn.transition=null,Je=1,t)return t()}finally{Je=i,Cn.transition=n,Ze=e,!(Ze&6)&&$i()}}function Xd(){pn=es.current,lt(es)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,l_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ko();break;case 3:gs(),lt(an),lt(Yt),Ud();break;case 5:Dd(i);break;case 4:gs();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Nd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(It=t,Et=t=Bi(t.current,null),kt=pn=e,wt=0,ya=null,Gd=Ll=_r=0,nn=ea=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}cr=null}return t}function hx(t,e){do{var n=Et;try{if(Rd(),Do.current=sl,rl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(vr=0,Pt=Mt=ht=null,Qs=!1,xa=0,Hd.current=null,n===null||n.return===null){wt=1,ya=e,Et=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=fh(a);if(g!==null){g.flags&=-257,hh(g,a,o,s,e),g.mode&1&&dh(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){dh(s,u,e),Yd();break e}l=Error(ie(426))}}else if(ct&&o.mode&1){var x=fh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),hh(x,a,o,s,e),Ad(xs(l,o));break e}}s=l=xs(l,o),wt!==4&&(wt=2),ea===null?ea=[s]:ea.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Kg(s,l,e);sh(s,d);break e;case 1:o=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Zg(s,o,e);sh(s,S);break e}}s=s.return}while(s!==null)}gx(n)}catch(R){e=R,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function px(){var t=al.current;return al.current=sl,t===null?sl:t}function Yd(){(wt===0||wt===3||wt===2)&&(wt=4),It===null||!(_r&268435455)&&!(Ll&268435455)||Ci(It,kt)}function cl(t,e){var n=Ze;Ze|=2;var i=px();(It!==t||kt!==e)&&(si=null,dr(t,e));do try{I_();break}catch(r){hx(t,r)}while(!0);if(Rd(),Ze=n,al.current=i,Et!==null)throw Error(ie(261));return It=null,kt=0,wt}function I_(){for(;Et!==null;)mx(Et)}function D_(){for(;Et!==null&&!sv();)mx(Et)}function mx(t){var e=vx(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?gx(t):Et=e,Hd.current=null}function gx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A_(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=T_(n,e,pn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function ir(t,e,n){var i=Je,r=Cn.transition;try{Cn.transition=null,Je=1,U_(t,e,n,i)}finally{Cn.transition=r,Je=i}return null}function U_(t,e,n,i){do ls();while(Ni!==null);if(Ze&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mv(t,s),t===It&&(Et=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,_x(Vo,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=Je;Je=1;var o=Ze;Ze|=4,Hd.current=null,R_(t,n),ux(n,t),t_(Eu),Xo=!!bu,Eu=bu=null,t.current=n,N_(n),av(),Ze=o,Je=a,Cn.transition=s}else t.current=n;if(Ja&&(Ja=!1,Ni=t,ll=r),s=t.pendingLanes,s===0&&(Fi=null),cv(n.stateNode),ln(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=Gu,Gu=null,t;return ll&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Vu?ta++:(ta=0,Vu=t):ta=0,$i(),null}function ls(){if(Ni!==null){var t=Km(ll),e=Cn.transition,n=Je;try{if(Cn.transition=null,Je=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,ll=0,Ze&6)throw Error(ie(331));var r=Ze;for(Ze|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:Js(8,f,s)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var p=f.sibling,g=f.return;if(ox(f),f===u){me=null;break}if(p!==null){p.return=g,me=p;break}me=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var m=t.current;for(me=m;me!==null;){a=me;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,me=v;else e:for(a=m;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nl(9,o)}}catch(R){xt(o,o.return,R)}if(o===a){me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,me=S;break e}me=o.return}}if(Ze=r,$i(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(bl,t)}catch{}i=!0}return i}finally{Je=n,Cn.transition=e}}return!1}function Th(t,e,n){e=xs(n,e),e=Kg(t,e,1),t=ki(t,e,1),e=Qt(),t!==null&&(Ta(t,1,e),ln(t,e))}function xt(t,e,n){if(t.tag===3)Th(t,t,n);else for(;e!==null;){if(e.tag===3){Th(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=xs(n,t),t=Zg(e,t,1),e=ki(e,t,1),t=Qt(),e!==null&&(Ta(e,1,t),ln(e,t));break}}e=e.return}}function O_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(wt===4||wt===3&&(kt&130023424)===kt&&500>yt()-Vd?dr(t,0):Gd|=n),ln(t,e)}function xx(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=Qt();t=mi(t,e),t!==null&&(Ta(t,e,n),ln(t,n))}function k_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xx(t,n)}function F_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),xx(t,n)}var vx;vx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,w_(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ct&&e.flags&1048576&&bg(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Oo(t,e),t=e.pendingProps;var r=hs(e,Yt.current);os(e,n),r=kd(null,e,i,t,r,n);var s=Fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Zo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,Pu(e,i,t,n),e=Uu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&wd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Oo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=B_(i),t=On(i,t),r){case 0:e=Du(null,e,i,t,n);break e;case 1:e=gh(null,e,i,t,n);break e;case 11:e=ph(null,e,i,t,n);break e;case 14:e=mh(null,e,i,On(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Du(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),gh(t,e,i,r,n);case 3:e:{if(tx(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Cg(t,e),nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(ie(423)),e),e=xh(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(ie(424)),e),e=xh(t,e,i,n,r);break e}else for(mn=Oi(e.stateNode.containerInfo.firstChild),gn=e,ct=!0,Fn=null,n=Tg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),i===r){e=gi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return Rg(e),t===null&&Ru(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Mu(i,r)?a=null:s!==null&&Mu(i,s)&&(e.flags|=32),ex(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return nx(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ms(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),ph(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(el,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!an.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,n),r=Nn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),mh(t,e,i,r,n);case 15:return Qg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Oo(t,e),e.tag=1,on(i)?(t=!0,Zo(e)):t=!1,os(e,n),$g(e,i,r),Pu(e,i,r,n),Uu(null,e,i,!0,t,n);case 19:return ix(t,e,n);case 22:return Jg(t,e,n)}throw Error(ie(156,e.tag))};function _x(t,e){return Xm(t,e)}function z_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new z_(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B_(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===pd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Vr:return fr(n.children,r,s,e);case fd:a=8,r|=8;break;case nu:return t=An(12,n,e,r|2),t.elementType=nu,t.lanes=s,t;case iu:return t=An(13,n,e,r),t.elementType=iu,t.lanes=s,t;case ru:return t=An(19,n,e,r),t.elementType=ru,t.lanes=s,t;case Rm:return Pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Am:a=10;break e;case Cm:a=9;break e;case hd:a=11;break e;case pd:a=14;break e;case wi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Pl(t,e,n,i){return t=An(22,t,i,e),t.elementType=Rm,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function j_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,a,o,l){return t=new j_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function H_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yx(t){if(!t)return Wi;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(on(n))return yg(t,n,e)}return e}function Sx(t,e,n,i,r,s,a,o,l){return t=$d(n,i,!0,t,r,s,a,o,l),t.context=yx(null),n=t.current,i=Qt(),r=zi(n),s=fi(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Ta(t,r,i),ln(t,i),t}function Il(t,e,n,i){var r=e.current,s=Qt(),a=zi(r);return n=yx(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(Gn(t,r,a,s),Io(t,r,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){Ah(t,e),(t=t.alternate)&&Ah(t,e)}function G_(){return null}var bx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}Dl.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Il(t,e,null,null)};Dl.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Il(null,t,null,null)}),e[pi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&tg(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ch(){}function V_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}var a=Sx(e,i,t,0,null,!1,!1,"",Ch);return t._reactRootContainer=a,t[pi]=a.current,fa(t.nodeType===8?t.parentNode:t),yr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ul(l);o.call(u)}}var l=$d(t,0,!1,null,null,!1,!1,"",Ch);return t._reactRootContainer=l,t[pi]=l.current,fa(t.nodeType===8?t.parentNode:t),yr(function(){Il(e,l,n,i)}),l}function Ol(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=ul(a);o.call(l)}}Il(e,a,t,r)}else a=V_(n,e,t,r,i);return ul(a)}Zm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(xd(e,n|1),ln(e,yt()),!(Ze&6)&&(vs=yt()+500,$i()))}break;case 13:yr(function(){var i=mi(t,1);if(i!==null){var r=Qt();Gn(i,t,1,r)}}),Kd(t,1)}};vd=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Qt();Gn(e,t,134217728,n)}Kd(t,134217728)}};Qm=function(t){if(t.tag===13){var e=zi(t),n=mi(t,e);if(n!==null){var i=Qt();Gn(n,t,e,i)}Kd(t,e)}};Jm=function(){return Je};eg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};pu=function(t,e,n){switch(e){case"input":if(ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tl(i);if(!r)throw Error(ie(90));Lm(i),ou(i,r)}}}break;case"textarea":Im(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};Bm=Wd;jm=yr;var W_={usingClientEntryPoint:!1,Events:[Ca,qr,Tl,Fm,zm,Wd]},Os={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X_={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{bl=eo.inject(X_),Kn=eo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(ie(200));return H_(t,e,null,n)};vn.createRoot=function(t,e){if(!Qd(t))throw Error(ie(299));var n=!1,i="",r=bx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,fa(t.nodeType===8?t.parentNode:t),new Zd(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Vm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return yr(t)};vn.hydrate=function(t,e,n){if(!Ul(e))throw Error(ie(200));return Ol(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=bx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Sx(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};vn.render=function(t,e,n){if(!Ul(e))throw Error(ie(200));return Ol(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(ie(40));return t._reactRootContainer?(yr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};vn.unstable_batchedUpdates=Wd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ul(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Ol(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Ex(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ex)}catch(t){console.error(t)}}Ex(),Em.exports=vn;var Y_=Em.exports,Rh=Y_;eu.createRoot=Rh.createRoot,eu.hydrateRoot=Rh.hydrateRoot;function q_({onComplete:t}){const[e,n]=Te.useState(0),[i,r]=Te.useState("INITIALIZING LABORATORY ENVIRONMENT..."),[s,a]=Te.useState(!1),[o,l]=Te.useState(!1);Te.useEffect(()=>{const f=[{at:15,text:"CALIBRATING REACTION VESSEL..."},{at:38,text:"PREPARING CHEMICAL EMULSION (#80CC28)..."},{at:62,text:"STABILIZING VOLUMETRIC GREEN SMOKE..."},{at:85,text:"LOADING ARTIFICIAL INTELLIGENCE MODELS..."},{at:99,text:"PURITY ATTAINED: 99.1% — ALL SYSTEMS ACTIVE."}],h=setInterval(()=>{n(p=>{if(p>=99)return clearInterval(h),a(!0),99;const g=p+Math.floor(Math.random()*6)+3,_=Math.min(g,99),y=f.find(x=>_>=x.at);return y&&r(y.text),_})},45);return()=>clearInterval(h)},[]);const u=()=>{l(!0),setTimeout(()=>{t()},700)};return c.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-lab-black text-lab-muted transition-opacity duration-700 ${o?"opacity-0 pointer-events-none":"opacity-100"}`,children:[c.jsx("div",{className:"absolute inset-0 lab-grid opacity-30"}),c.jsx("div",{className:"absolute inset-0 bg-radial-gradient from-transparent via-lab-black/60 to-lab-black pointer-events-none"}),c.jsxs("div",{className:"relative z-10 max-w-lg w-full px-6 flex flex-col items-center text-center",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[c.jsxs("div",{className:"w-20 h-24 bg-lab-charcoal border-2 border-lab-green rounded-sm flex flex-col justify-between p-2 shadow-glow-sm relative",children:[c.jsx("span",{className:"text-[10px] font-mono text-lab-muted text-left font-bold",children:"24"}),c.jsx("span",{className:"text-3xl font-cinematic text-lab-green tracking-wider font-bold",children:"Ma"}),c.jsxs("div",{className:"flex justify-between items-end",children:[c.jsx("span",{className:"text-[8px] font-mono uppercase text-lab-sand",children:"Mayank"}),c.jsx("span",{className:"text-[8px] font-mono text-lab-muted",children:"54.93"})]})]}),c.jsxs("div",{className:"w-20 h-24 bg-lab-charcoal border-2 border-lab-toxic rounded-sm flex flex-col justify-between p-2 shadow-glow-sm relative",children:[c.jsx("span",{className:"text-[10px] font-mono text-lab-muted text-left font-bold",children:"52"}),c.jsx("span",{className:"text-3xl font-cinematic text-lab-toxic tracking-wider font-bold",children:"Sh"}),c.jsxs("div",{className:"flex justify-between items-end",children:[c.jsx("span",{className:"text-[8px] font-mono uppercase text-lab-sand",children:"Sharma"}),c.jsx("span",{className:"text-[8px] font-mono text-lab-muted",children:"127.6"})]})]})]}),c.jsx("h2",{className:"text-xs uppercase tracking-[0.35em] text-lab-sand font-mono mb-2",children:"MAYANK® • CLASSIFIED 3D LABORATORY"}),c.jsx("h1",{className:"text-3xl md:text-4xl font-cinematic tracking-wider text-white mb-6",children:"PREPARING THE COMPOUND"}),c.jsx("div",{className:"w-full bg-lab-charcoal/80 border border-lab-border rounded-full h-3 p-0.5 mb-3 relative overflow-hidden",children:c.jsx("div",{className:"h-full bg-gradient-to-r from-lab-green via-lab-toxic to-lab-sand rounded-full transition-all duration-150 relative shadow-glow-sm",style:{width:`${e}%`}})}),c.jsxs("div",{className:"w-full flex justify-between items-center text-xs font-mono mb-6",children:[c.jsxs("span",{className:"text-lab-green animate-pulse",children:["> ",i]}),c.jsxs("span",{className:"text-lab-toxic font-bold tracking-widest",children:[e,".1% PURITY"]})]}),c.jsx("div",{className:"h-14 flex items-center justify-center",children:s?c.jsxs("button",{onClick:u,className:"px-8 py-3 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-xl tracking-widest uppercase transition-all duration-300 shadow-glow-green transform hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer",children:[c.jsx("span",{children:"ENTER THE LAB"}),c.jsx("span",{className:"text-xs font-mono",children:"→"})]}):c.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-lab-muted",children:[c.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-lab-green animate-ping"}),c.jsx("span",{children:"SYNTHESIZING MOLECULAR MATRIX..."})]})}),c.jsxs("div",{className:"mt-8 pt-4 border-t border-lab-border/40 text-[10px] font-mono text-lab-muted/70 tracking-widest flex items-center gap-2",children:[c.jsx("span",{className:"text-lab-amber font-bold",children:"[CAUTION]"}),c.jsx("span",{children:"HAZARDOUS CREATIVITY • EXPERIMENTAL 3D ENGINE"})]})]})]})}function $_(){const[t,e]=Te.useState({x:-100,y:-100}),[n,i]=Te.useState({x:-100,y:-100}),[r,s]=Te.useState(!1),[a,o]=Te.useState(!1),[l,u]=Te.useState(!1);return Te.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const f=x=>{e({x:x.clientX,y:x.clientY}),u(!0)},h=()=>o(!0),p=()=>o(!1),g=()=>u(!1);window.addEventListener("mousemove",f),window.addEventListener("mousedown",h),window.addEventListener("mouseup",p),document.addEventListener("mouseleave",g);const _=()=>{document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive-card').forEach(d=>{d.addEventListener("mouseenter",()=>s(!0)),d.addEventListener("mouseleave",()=>s(!1))})};_();const y=new MutationObserver(_);return y.observe(document.body,{childList:!0,subtree:!0}),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mousedown",h),window.removeEventListener("mouseup",p),document.removeEventListener("mouseleave",g),y.disconnect()}},[]),Te.useEffect(()=>{let f;const h=()=>{i(p=>({x:p.x+(t.x-p.x)*.2,y:p.y+(t.y-p.y)*.2})),f=requestAnimationFrame(h)};return f=requestAnimationFrame(h),()=>cancelAnimationFrame(f)},[t]),l?c.jsxs("div",{className:"hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden",children:[c.jsx("div",{className:"fixed w-2 h-2 rounded-full bg-lab-toxic pointer-events-none transition-transform duration-75",style:{left:`${t.x}px`,top:`${t.y}px`,transform:`translate(-50%, -50%) scale(${a?.6:1})`,boxShadow:"0 0 10px #B5E853"}}),c.jsx("div",{className:"fixed pointer-events-none border border-lab-green/60 rounded-full transition-all duration-150 flex items-center justify-center",style:{left:`${n.x}px`,top:`${n.y}px`,width:r?"48px":"26px",height:r?"48px":"26px",transform:"translate(-50%, -50%)",borderColor:r?"#B5E853":"rgba(128, 204, 40, 0.45)",backgroundColor:r?"rgba(181, 232, 83, 0.08)":"transparent",boxShadow:r?"0 0 16px rgba(181, 232, 83, 0.3)":"none"},children:r&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"absolute w-full h-[1px] bg-lab-toxic/30"}),c.jsx("div",{className:"absolute h-full w-[1px] bg-lab-toxic/30"})]})})]}):null}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="160",K_=0,Nh=1,Z_=2,Mx=1,wx=2,ri=3,Xi=0,cn=1,wn=2,ji=0,cs=1,dl=2,Lh=3,Ph=4,Q_=5,ar=100,J_=101,ey=102,Ih=103,Dh=104,ty=200,ny=201,iy=202,ry=203,Yu=204,qu=205,sy=206,ay=207,oy=208,ly=209,cy=210,uy=211,dy=212,fy=213,hy=214,py=0,my=1,gy=2,fl=3,xy=4,vy=5,_y=6,yy=7,Tx=0,Sy=1,by=2,Hi=0,Ey=1,My=2,wy=3,ef=4,Ty=5,Ay=6,Ax=300,_s=301,ys=302,$u=303,Ku=304,kl=306,Zu=1e3,Bn=1001,Qu=1002,Zt=1003,Uh=1004,_c=1005,Mn=1006,Cy=1007,Sa=1008,Gi=1009,Ry=1010,Ny=1011,tf=1012,Cx=1013,Li=1014,Pi=1015,ba=1016,Rx=1017,Nx=1018,hr=1020,Ly=1021,jn=1023,Py=1024,Iy=1025,pr=1026,Ss=1027,Dy=1028,Lx=1029,Uy=1030,Px=1031,Ix=1033,yc=33776,Sc=33777,bc=33778,Ec=33779,Oh=35840,kh=35841,Fh=35842,zh=35843,Dx=36196,Bh=37492,jh=37496,Hh=37808,Gh=37809,Vh=37810,Wh=37811,Xh=37812,Yh=37813,qh=37814,$h=37815,Kh=37816,Zh=37817,Qh=37818,Jh=37819,ep=37820,tp=37821,Mc=36492,np=36494,ip=36495,Oy=36283,rp=36284,sp=36285,ap=36286,Ux=3e3,mr=3001,ky=3200,Fy=3201,Ox=0,zy=1,Tn="",Ot="srgb",xi="srgb-linear",nf="display-p3",Fl="display-p3-linear",hl="linear",ot="srgb",pl="rec709",ml="p3",Ar=7680,op=519,By=512,jy=513,Hy=514,kx=515,Gy=516,Vy=517,Wy=518,Xy=519,lp=35044,cp="300 es",Ju=1035,ui=2e3,gl=2001;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,ed=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function Yy(t,e){return(t%e+e)%e}function Tc(t,e,n){return(1-n)*t+n*e}function up(t){return(t&t-1)===0&&t!==0}function td(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,n=0){xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,a,o,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],h=i[7],p=i[2],g=i[5],_=i[8],y=r[0],x=r[3],d=r[6],m=r[1],v=r[4],S=r[7],R=r[2],w=r[5],T=r[8];return s[0]=a*y+o*m+l*R,s[3]=a*x+o*v+l*w,s[6]=a*d+o*S+l*T,s[1]=u*y+f*m+h*R,s[4]=u*x+f*v+h*w,s[7]=u*d+f*S+h*T,s[2]=p*y+g*m+_*R,s[5]=p*x+g*v+_*w,s[8]=p*d+g*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=f*a-o*u,p=o*l-f*s,g=u*s-a*l,_=n*h+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new Ye;function Fx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qy(){const t=xl("canvas");return t.style.display="block",t}const dp={};function na(t){t in dp||(dp[t]=!0,console.warn(t))}const fp=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hp=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[xi]:{transfer:hl,primaries:pl,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:ot,primaries:pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Fl]:{transfer:hl,primaries:ml,toReference:t=>t.applyMatrix3(hp),fromReference:t=>t.applyMatrix3(fp)},[nf]:{transfer:ot,primaries:ml,toReference:t=>t.convertSRGBToLinear().applyMatrix3(hp),fromReference:t=>t.applyMatrix3(fp).convertLinearToSRGB()}},$y=new Set([xi,Fl]),it={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$y.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=to[e].toReference,r=to[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return to[t].primaries},getTransfer:function(t){return t===Tn?hl:to[t].transfer}};function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class zx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=xl("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=us(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ky=0;class Bx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Na(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rc(r[a].image)):s.push(Rc(r[a]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zy=0;class un extends Ts{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Bn,r=Bn,s=Mn,a=Sa,o=jn,l=Gi,u=un.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Na(),this.name="",this.source=new Bx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===mr?Ot:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zu:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zu:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?mr:Ux}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?Ot:Tn}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ax;un.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],p=l[1],g=l[5],_=l[9],y=l[2],x=l[6],d=l[10];if(Math.abs(f-p)<.01&&Math.abs(h-y)<.01&&Math.abs(_-x)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+y)<.1&&Math.abs(_+x)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,R=(d+1)/2,w=(f+p)/4,T=(h+y)/4,N=(_+x)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=N/s),this.set(i,r,s,n),this}let m=Math.sqrt((x-_)*(x-_)+(h-y)*(h-y)+(p-f)*(p-f));return Math.abs(m)<.001&&(m=1),this.x=(x-_)/m,this.y=(h-y)/m,this.z=(p-f)/m,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qy extends Ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?Ot:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Qy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jx extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jy extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==p||u!==g||f!==_){let x=1-o;const d=l*p+u*g+f*_+h*y,m=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,d*m);x=Math.sin(x*w)/R,o=Math.sin(o*w)/R}const S=o*m;if(l=l*x+p*S,u=u*x+g*S,f=f*x+_*S,h=h*x+y*S,x===1-o){const R=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=R,u*=R,f*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*g-u*p,e[n+1]=l*_+f*p+u*h-o*g,e[n+2]=u*_+f*g+o*p-l*h,e[n+3]=f*_-o*h-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*f*h+u*g*_,this._y=u*g*h-p*f*_,this._z=u*f*_+p*g*h,this._w=u*f*h-p*g*_;break;case"YXZ":this._x=p*f*h+u*g*_,this._y=u*g*h-p*f*_,this._z=u*f*_-p*g*h,this._w=u*f*h+p*g*_;break;case"ZXY":this._x=p*f*h-u*g*_,this._y=u*g*h+p*f*_,this._z=u*f*_+p*g*h,this._w=u*f*h-p*g*_;break;case"ZYX":this._x=p*f*h-u*g*_,this._y=u*g*h+p*f*_,this._z=u*f*_-p*g*h,this._w=u*f*h+p*g*_;break;case"YZX":this._x=p*f*h+u*g*_,this._y=u*g*h+p*f*_,this._z=u*f*_-p*g*h,this._w=u*f*h-p*g*_;break;case"XZY":this._x=p*f*h-u*g*_,this._y=u*g*h-p*f*_,this._z=u*f*_+p*g*h,this._w=u*f*h+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],h=n[10],p=i+o+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*f,this.y=i+l*f+o*u-s*h,this.z=r+l*h+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new I,pp=new La;class Pa{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),io.subVectors(this.max,Fs),Rr.subVectors(e.a,Fs),Nr.subVectors(e.b,Fs),Lr.subVectors(e.c,Fs),yi.subVectors(Nr,Rr),Si.subVectors(Lr,Nr),Qi.subVectors(Rr,Lr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Qi.z,Qi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Qi.z,0,-Qi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Qi.y,Qi.x,0];return!Lc(n,Rr,Nr,Lr,io)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Rr,Nr,Lr,io))?!1:(ro.crossVectors(yi,Si),n=[ro.x,ro.y,ro.z],Lc(n,Rr,Nr,Lr,io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,no=new Pa,Rr=new I,Nr=new I,Lr=new I,yi=new I,Si=new I,Qi=new I,Fs=new I,io=new I,ro=new I,Ji=new I;function Lc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ji.fromArray(t,s);const o=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),u=n.dot(Ji),f=i.dot(Ji);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const eS=new Pa,zs=new I,Pc=new I;class Ia{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const n=zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Pc)),this.expandByPoint(zs.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new I,Ic=new I,so=new I,bi=new I,Dc=new I,ao=new I,Uc=new I;class rf{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ic.copy(e).add(n).multiplyScalar(.5),so.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Ic);const s=e.distanceTo(n)*.5,a=-this.direction.dot(so),o=bi.dot(this.direction),l=-bi.dot(so),u=bi.lengthSq(),f=Math.abs(1-a*a);let h,p,g,_;if(f>0)if(h=a*l-o,p=a*o-l,_=s*f,h>=0)if(p>=-_)if(p<=_){const y=1/f;h*=y,p*=y,g=h*(h+a*p+2*o)+p*(a*h+p+2*l)+u}else p=s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;else p=-s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;else p<=-_?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+u):p<=_?(h=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+u):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+u);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ic).addScaledVector(so,p),g}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){Dc.subVectors(n,e),ao.subVectors(i,e),Uc.crossVectors(Dc,ao);let a=this.direction.dot(Uc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(ao.crossVectors(bi,ao));if(l<0)return null;const u=o*this.direction.dot(Dc.cross(bi));if(u<0||l+u>a)return null;const f=-o*bi.dot(Uc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,a,o,l,u,f,h,p,g,_,y,x){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,h,p,g,_,y,x)}set(e,n,i,r,s,a,o,l,u,f,h,p,g,_,y,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=g,d[7]=_,d[11]=y,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*f,g=a*h,_=o*f,y=o*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=g+_*u,n[5]=p-y*u,n[9]=-o*l,n[2]=y-p*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*f,g=l*h,_=u*f,y=u*h;n[0]=p+y*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*f,g=l*h,_=u*f,y=u*h;n[0]=p-y*o,n[4]=-a*h,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=y-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*f,g=a*h,_=o*f,y=o*h;n[0]=l*f,n[4]=_*u-g,n[8]=p*u+y,n[1]=l*h,n[5]=y*u+p,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=y-p*h,n[8]=_*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*h+_,n[10]=p-y*h}else if(e.order==="XZY"){const p=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=p*h+y,n[5]=a*f,n[9]=g*h-_,n[2]=_*h-g,n[6]=o*f,n[10]=y*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ei.crossVectors(i,fn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ei.crossVectors(i,fn)),Ei.normalize(),oo.crossVectors(fn,Ei),r[0]=Ei.x,r[4]=oo.x,r[8]=fn.x,r[1]=Ei.y,r[5]=oo.y,r[9]=fn.y,r[2]=Ei.z,r[6]=oo.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],h=i[5],p=i[9],g=i[13],_=i[2],y=i[6],x=i[10],d=i[14],m=i[3],v=i[7],S=i[11],R=i[15],w=r[0],T=r[4],N=r[8],b=r[12],M=r[1],k=r[5],G=r[9],J=r[13],P=r[2],F=r[6],W=r[10],$=r[14],D=r[3],O=r[7],z=r[11],K=r[15];return s[0]=a*w+o*M+l*P+u*D,s[4]=a*T+o*k+l*F+u*O,s[8]=a*N+o*G+l*W+u*z,s[12]=a*b+o*J+l*$+u*K,s[1]=f*w+h*M+p*P+g*D,s[5]=f*T+h*k+p*F+g*O,s[9]=f*N+h*G+p*W+g*z,s[13]=f*b+h*J+p*$+g*K,s[2]=_*w+y*M+x*P+d*D,s[6]=_*T+y*k+x*F+d*O,s[10]=_*N+y*G+x*W+d*z,s[14]=_*b+y*J+x*$+d*K,s[3]=m*w+v*M+S*P+R*D,s[7]=m*T+v*k+S*F+R*O,s[11]=m*N+v*G+S*W+R*z,s[15]=m*b+v*J+S*$+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],h=e[6],p=e[10],g=e[14],_=e[3],y=e[7],x=e[11],d=e[15];return _*(+s*l*h-r*u*h-s*o*p+i*u*p+r*o*g-i*l*g)+y*(+n*l*g-n*u*p+s*a*p-r*a*g+r*u*f-s*l*f)+x*(+n*u*h-n*o*g-s*a*h+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*l*h+n*o*p+r*a*h-i*a*p+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=e[9],p=e[10],g=e[11],_=e[12],y=e[13],x=e[14],d=e[15],m=h*x*u-y*p*u+y*l*g-o*x*g-h*l*d+o*p*d,v=_*p*u-f*x*u-_*l*g+a*x*g+f*l*d-a*p*d,S=f*y*u-_*h*u+_*o*g-a*y*g-f*o*d+a*h*d,R=_*h*l-f*y*l-_*o*p+a*y*p+f*o*x-a*h*x,w=n*m+i*v+r*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=m*T,e[1]=(y*p*s-h*x*s-y*r*g+i*x*g+h*r*d-i*p*d)*T,e[2]=(o*x*s-y*l*s+y*r*u-i*x*u-o*r*d+i*l*d)*T,e[3]=(h*l*s-o*p*s-h*r*u+i*p*u+o*r*g-i*l*g)*T,e[4]=v*T,e[5]=(f*x*s-_*p*s+_*r*g-n*x*g-f*r*d+n*p*d)*T,e[6]=(_*l*s-a*x*s-_*r*u+n*x*u+a*r*d-n*l*d)*T,e[7]=(a*p*s-f*l*s+f*r*u-n*p*u-a*r*g+n*l*g)*T,e[8]=S*T,e[9]=(_*h*s-f*y*s-_*i*g+n*y*g+f*i*d-n*h*d)*T,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*d+n*o*d)*T,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*g-n*o*g)*T,e[12]=R*T,e[13]=(f*y*r-_*h*r+_*i*p-n*y*p-f*i*x+n*h*x)*T,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*x-n*o*x)*T,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,h=o+o,p=s*u,g=s*f,_=s*h,y=a*f,x=a*h,d=o*h,m=l*u,v=l*f,S=l*h,R=i.x,w=i.y,T=i.z;return r[0]=(1-(y+d))*R,r[1]=(g+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(g-S)*w,r[5]=(1-(p+d))*w,r[6]=(x+m)*w,r[7]=0,r[8]=(_+v)*T,r[9]=(x-m)*T,r[10]=(1-(p+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,f=1/a,h=1/o;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===ui)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===gl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),p=(n+e)*u,g=(i+r)*f;let _,y;if(o===ui)_=(a+s)*h,y=-2*h;else if(o===gl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new I,Dn=new vt,tS=new I(0,0,0),nS=new I(1,1,1),Ei=new I,oo=new I,fn=new I,mp=new vt,gp=new La;class zl{constructor(e=0,n=0,i=0,r=zl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],h=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zl.DEFAULT_ORDER="XYZ";class Hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const xp=new I,Ir=new La,ti=new vt,lo=new I,Bs=new I,rS=new I,sS=new La,vp=new I(1,0,0),_p=new I(0,1,0),yp=new I(0,0,1),aS={type:"added"},oS={type:"removed"};class Dt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,n=new zl,i=new La,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,n){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lo.copy(e):lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Bs,lo,this.up):ti.lookAt(lo,Bs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ti),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new I,ni=new I,Oc=new I,ii=new I,Dr=new I,Ur=new I,Sp=new I,kc=new I,Fc=new I,zc=new I;let co=!1;class zn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ni.subVectors(i,n),Oc.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(ni),l=Un.dot(Oc),u=ni.dot(ni),f=ni.dot(Oc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(u*l-o*f)*p,_=(a*f-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,n,i,r,s,a,o,l){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ni.subVectors(e,n),Un.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Un.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Dr.subVectors(r,i),Ur.subVectors(s,i),kc.subVectors(e,i);const l=Dr.dot(kc),u=Ur.dot(kc);if(l<=0&&u<=0)return n.copy(i);Fc.subVectors(e,r);const f=Dr.dot(Fc),h=Ur.dot(Fc);if(f>=0&&h<=f)return n.copy(r);const p=l*h-f*u;if(p<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Dr,a);zc.subVectors(e,s);const g=Dr.dot(zc),_=Ur.dot(zc);if(_>=0&&g<=_)return n.copy(s);const y=g*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Ur,o);const x=f*_-g*h;if(x<=0&&h-f>=0&&g-_>=0)return Sp.subVectors(s,r),o=(h-f)/(h-f+(g-_)),n.copy(r).addScaledVector(Sp,o);const d=1/(x+y+p);return a=y*d,o=p*d,n.copy(i).addScaledVector(Dr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Yy(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return it.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Xt(Vt.r*255,0,255))*65536+Math.round(Xt(Vt.g*255,0,255))*256+Math.round(Xt(Vt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ot){it.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(uo);const i=Tc(Mi.h,uo.h,n),r=Tc(Mi.s,uo.s,n),s=Tc(Mi.l,uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ke;ke.NAMES=Gx;let lS=0;class wr extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=cs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=qu,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yu&&(i.blendSrc=this.blendSrc),this.blendDst!==qu&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ds extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,fo=new xe;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fo.fromBufferAttribute(this,n),fo.applyMatrix3(e),this.setXY(n,fo.x,fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lp&&(e.usage=this.usage),e}}class Vx extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Wx extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rt extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cS=0;const Sn=new vt,jc=new Dt,Or=new I,hn=new Pa,js=new Pa,Lt=new I;class zt extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Wx:Vx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(hn.min,js.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,js.max),hn.expandByPoint(Lt)):(hn.expandByPoint(js.min),hn.expandByPoint(js.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Lt.fromBufferAttribute(o,u),l&&(Or.fromBufferAttribute(e,u),Lt.add(Or)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let M=0;M<o;M++)u[M]=new I,f[M]=new I;const h=new I,p=new I,g=new I,_=new xe,y=new xe,x=new xe,d=new I,m=new I;function v(M,k,G){h.fromArray(r,M*3),p.fromArray(r,k*3),g.fromArray(r,G*3),_.fromArray(a,M*2),y.fromArray(a,k*2),x.fromArray(a,G*2),p.sub(h),g.sub(h),y.sub(_),x.sub(_);const J=1/(y.x*x.y-x.x*y.y);isFinite(J)&&(d.copy(p).multiplyScalar(x.y).addScaledVector(g,-y.y).multiplyScalar(J),m.copy(g).multiplyScalar(y.x).addScaledVector(p,-x.x).multiplyScalar(J),u[M].add(d),u[k].add(d),u[G].add(d),f[M].add(m),f[k].add(m),f[G].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let M=0,k=S.length;M<k;++M){const G=S[M],J=G.start,P=G.count;for(let F=J,W=J+P;F<W;F+=3)v(i[F+0],i[F+1],i[F+2])}const R=new I,w=new I,T=new I,N=new I;function b(M){T.fromArray(s,M*3),N.copy(T);const k=u[M];R.copy(k),R.sub(T.multiplyScalar(T.dot(k))).normalize(),w.crossVectors(N,k);const J=w.dot(f[M])<0?-1:1;l[M*4]=R.x,l[M*4+1]=R.y,l[M*4+2]=R.z,l[M*4+3]=J}for(let M=0,k=S.length;M<k;++M){const G=S[M],J=G.start,P=G.count;for(let F=J,W=J+P;F<W;F+=3)b(i[F+0]),b(i[F+1]),b(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,u=new I,f=new I,h=new I;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),y=e.getX(p+1),x=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),o.add(f),l.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,h=o.normalized,p=new u.constructor(l.length*f);let g=0,_=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*f;for(let d=0;d<f;d++)p[_++]=u[g++]}return new Rn(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const p=u[f],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,p=u.length;h<p;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bp=new vt,er=new rf,ho=new Ia,Ep=new I,kr=new I,Fr=new I,zr=new I,Hc=new I,po=new I,mo=new xe,go=new xe,xo=new xe,Mp=new I,wp=new I,Tp=new I,vo=new I,_o=new I;class bt extends Dt{constructor(e=new zt,n=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],h=s[l];f!==0&&(Hc.fromBufferAttribute(h,e),a?po.addScaledVector(Hc,f):po.addScaledVector(Hc.sub(n),f))}n.add(po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(ho.containsPoint(er.origin)===!1&&(er.intersectSphere(ho,Ep)===null||er.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(bp.copy(s).invert(),er.copy(e.ray).applyMatrix4(bp),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const x=p[_],d=a[x.materialIndex],m=Math.max(x.start,g.start),v=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let S=m,R=v;S<R;S+=3){const w=o.getX(S),T=o.getX(S+1),N=o.getX(S+2);r=yo(this,d,e,i,u,f,h,w,T,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let x=_,d=y;x<d;x+=3){const m=o.getX(x),v=o.getX(x+1),S=o.getX(x+2);r=yo(this,a,e,i,u,f,h,m,v,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const x=p[_],d=a[x.materialIndex],m=Math.max(x.start,g.start),v=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=m,R=v;S<R;S+=3){const w=S,T=S+1,N=S+2;r=yo(this,d,e,i,u,f,h,w,T,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let x=_,d=y;x<d;x+=3){const m=x,v=x+1,S=x+2;r=yo(this,a,e,i,u,f,h,m,v,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function uS(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_o);return u<n.near||u>n.far?null:{distance:u,point:_o.clone(),object:t}}function yo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,kr),t.getVertexPosition(l,Fr),t.getVertexPosition(u,zr);const f=uS(t,e,n,i,kr,Fr,zr,vo);if(f){r&&(mo.fromBufferAttribute(r,o),go.fromBufferAttribute(r,l),xo.fromBufferAttribute(r,u),f.uv=zn.getInterpolation(vo,kr,Fr,zr,mo,go,xo,new xe)),s&&(mo.fromBufferAttribute(s,o),go.fromBufferAttribute(s,l),xo.fromBufferAttribute(s,u),f.uv1=zn.getInterpolation(vo,kr,Fr,zr,mo,go,xo,new xe),f.uv2=f.uv1),a&&(Mp.fromBufferAttribute(a,o),wp.fromBufferAttribute(a,l),Tp.fromBufferAttribute(a,u),f.normal=zn.getInterpolation(vo,kr,Fr,zr,Mp,wp,Tp,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new I,materialIndex:0};zn.getNormal(kr,Fr,zr,h.normal),f.face=h}return f}class Da extends zt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],h=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(h,2));function _(y,x,d,m,v,S,R,w,T,N,b){const M=S/T,k=R/N,G=S/2,J=R/2,P=w/2,F=T+1,W=N+1;let $=0,D=0;const O=new I;for(let z=0;z<W;z++){const K=z*k-J;for(let Z=0;Z<F;Z++){const Y=Z*M-G;O[y]=Y*m,O[x]=K*v,O[d]=P,u.push(O.x,O.y,O.z),O[y]=0,O[x]=0,O[d]=w>0?1:-1,f.push(O.x,O.y,O.z),h.push(Z/T),h.push(1-z/N),$+=1}}for(let z=0;z<N;z++)for(let K=0;K<T;K++){const Z=p+K+F*z,Y=p+K+F*(z+1),q=p+(K+1)+F*(z+1),oe=p+(K+1)+F*z;l.push(Z,Y,oe),l.push(Y,q,oe),D+=6}o.addGroup(g,D,b),g+=D,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function dS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xx(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const fS={clone:bs,merge:$t};var hS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=dS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Yx extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends Yx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,jr=1;class mS extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Br,jr,e,n);r.layers=this.layers,this.add(r);const s=new rn(Br,jr,e,n);s.layers=this.layers,this.add(s);const a=new rn(Br,jr,e,n);a.layers=this.layers,this.add(a);const o=new rn(Br,jr,e,n);o.layers=this.layers,this.add(o);const l=new rn(Br,jr,e,n);l.layers=this.layers,this.add(l);const u=new rn(Br,jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qx extends un{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:_s,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gS extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?Ot:Tn),this.texture=new qx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Da(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ji});s.uniforms.tEquirect.value=n;const a=new bt(r,s),o=n.minFilter;return n.minFilter===Sa&&(n.minFilter=Mn),new mS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Gc=new I,xS=new I,vS=new Ye;class rr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(xS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vS.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Ia,So=new I;class sf{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],_=r[9],y=r[10],x=r[11],d=r[12],m=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,p-u,x-g,S-d).normalize(),i[1].setComponents(l+s,p+u,x+g,S+d).normalize(),i[2].setComponents(l+a,p+f,x+_,S+m).normalize(),i[3].setComponents(l-a,p-f,x-_,S-m).normalize(),i[4].setComponents(l-o,p-h,x-y,S-v).normalize(),n===ui)i[5].setComponents(l+o,p+h,x+y,S+v).normalize();else if(n===gl)i[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $x(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _S(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,p=u.usage,g=h.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const p=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(h,u),g.count===-1&&_.length===0&&t.bufferSubData(h,0,p),_.length!==0){for(let y=0,x=_.length;y<x;y++){const d=_[y];n?t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:l}}class Ea extends zt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,h=e/o,p=n/l,g=[],_=[],y=[],x=[];for(let d=0;d<f;d++){const m=d*p-a;for(let v=0;v<u;v++){const S=v*h-s;_.push(S,-m,0),y.push(0,0,1),x.push(v/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){const v=m+u*d,S=m+u*(d+1),R=m+1+u*(d+1),w=m+1+u*d;g.push(v,S,w),g.push(S,R,w)}this.setIndex(g),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ES=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_b=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,AE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:yS,alphahash_pars_fragment:SS,alphamap_fragment:bS,alphamap_pars_fragment:ES,alphatest_fragment:MS,alphatest_pars_fragment:wS,aomap_fragment:TS,aomap_pars_fragment:AS,batching_pars_vertex:CS,batching_vertex:RS,begin_vertex:NS,beginnormal_vertex:LS,bsdfs:PS,iridescence_fragment:IS,bumpmap_pars_fragment:DS,clipping_planes_fragment:US,clipping_planes_pars_fragment:OS,clipping_planes_pars_vertex:kS,clipping_planes_vertex:FS,color_fragment:zS,color_pars_fragment:BS,color_pars_vertex:jS,color_vertex:HS,common:GS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:WS,displacementmap_pars_vertex:XS,displacementmap_vertex:YS,emissivemap_fragment:qS,emissivemap_pars_fragment:$S,colorspace_fragment:KS,colorspace_pars_fragment:ZS,envmap_fragment:QS,envmap_common_pars_fragment:JS,envmap_pars_fragment:eb,envmap_pars_vertex:tb,envmap_physical_pars_fragment:hb,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:rb,fog_fragment:sb,fog_pars_fragment:ab,gradientmap_pars_fragment:ob,lightmap_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:db,lights_pars_begin:fb,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:xb,lights_physical_fragment:vb,lights_physical_pars_fragment:_b,lights_fragment_begin:yb,lights_fragment_maps:Sb,lights_fragment_end:bb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Cb,map_particle_fragment:Rb,map_particle_pars_fragment:Nb,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Db,morphtarget_pars_vertex:Ub,morphtarget_vertex:Ob,normal_fragment_begin:kb,normal_fragment_maps:Fb,normal_pars_fragment:zb,normal_pars_vertex:Bb,normal_vertex:jb,normalmap_pars_fragment:Hb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:Xb,opaque_fragment:Yb,packing:qb,premultiplied_alpha_fragment:$b,project_vertex:Kb,dithering_fragment:Zb,dithering_pars_fragment:Qb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:aE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:dE,tonemapping_pars_fragment:fE,transmission_fragment:hE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:xE,worldpos_vertex:vE,background_vert:_E,background_frag:yE,backgroundCube_vert:SE,backgroundCube_frag:bE,cube_vert:EE,cube_frag:ME,depth_vert:wE,depth_frag:TE,distanceRGBA_vert:AE,distanceRGBA_frag:CE,equirect_vert:RE,equirect_frag:NE,linedashed_vert:LE,linedashed_frag:PE,meshbasic_vert:IE,meshbasic_frag:DE,meshlambert_vert:UE,meshlambert_frag:OE,meshmatcap_vert:kE,meshmatcap_frag:FE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:jE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:VE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:YE,points_frag:qE,shadow_vert:$E,shadow_frag:KE,sprite_vert:ZE,sprite_frag:QE},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},qn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qn.physical={uniforms:$t([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const bo={r:0,b:0,g:0};function JE(t,e,n,i,r,s,a){const o=new ke(0);let l=s===!0?0:1,u,f,h=null,p=0,g=null;function _(x,d){let m=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===kl)?(f===void 0&&(f=new bt(new Da(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:bs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=it.getTransfer(v.colorSpace)!==ot,(h!==v||p!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=v,p=v.version,g=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new bt(new Ea(2,2),new br({name:"BackgroundMaterial",uniforms:bs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=it.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function y(x,d){x.getRGB(bo,Xx(t)),i.buffers.color.setClear(bo.r,bo.g,bo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(x,d=1){o.set(x),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,y(o,l)},render:_}}function eM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=x(null);let u=l,f=!1;function h(P,F,W,$,D){let O=!1;if(a){const z=y($,W,F);u!==z&&(u=z,g(u.object)),O=d(P,$,W,D),O&&m(P,$,W,D)}else{const z=F.wireframe===!0;(u.geometry!==$.id||u.program!==W.id||u.wireframe!==z)&&(u.geometry=$.id,u.program=W.id,u.wireframe=z,O=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(P,F,W,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,F,W){const $=W.wireframe===!0;let D=o[P.id];D===void 0&&(D={},o[P.id]=D);let O=D[F.id];O===void 0&&(O={},D[F.id]=O);let z=O[$];return z===void 0&&(z=x(p()),O[$]=z),z}function x(P){const F=[],W=[],$=[];for(let D=0;D<r;D++)F[D]=0,W[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:P,attributes:{},index:null}}function d(P,F,W,$){const D=u.attributes,O=F.attributes;let z=0;const K=W.getAttributes();for(const Z in K)if(K[Z].location>=0){const q=D[Z];let oe=O[Z];if(oe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;z++}return u.attributesNum!==z||u.index!==$}function m(P,F,W,$){const D={},O=F.attributes;let z=0;const K=W.getAttributes();for(const Z in K)if(K[Z].location>=0){let q=O[Z];q===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),D[Z]=oe,z++}u.attributes=D,u.attributesNum=z,u.index=$}function v(){const P=u.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function S(P){R(P,0)}function R(P,F){const W=u.newAttributes,$=u.enabledAttributes,D=u.attributeDivisors;W[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),D[P]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),D[P]=F)}function w(){const P=u.newAttributes,F=u.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==P[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function T(P,F,W,$,D,O,z){z===!0?t.vertexAttribIPointer(P,F,W,D,O):t.vertexAttribPointer(P,F,W,$,D,O)}function N(P,F,W,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=$.attributes,O=W.getAttributes(),z=F.defaultAttributeValues;for(const K in O){const Z=O[K];if(Z.location>=0){let Y=D[K];if(Y===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const q=Y.normalized,oe=Y.itemSize,le=n.get(Y);if(le===void 0)continue;const ue=le.buffer,Ne=le.type,Ue=le.bytesPerElement,Ae=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||Y.gpuType===Cx);if(Y.isInterleavedBufferAttribute){const $e=Y.data,B=$e.stride,Ct=Y.offset;if($e.isInstancedInterleavedBuffer){for(let we=0;we<Z.locationSize;we++)R(Z.location+we,$e.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let we=0;we<Z.locationSize;we++)S(Z.location+we);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let we=0;we<Z.locationSize;we++)T(Z.location+we,oe/Z.locationSize,Ne,q,B*Ue,(Ct+oe/Z.locationSize*we)*Ue,Ae)}else{if(Y.isInstancedBufferAttribute){for(let $e=0;$e<Z.locationSize;$e++)R(Z.location+$e,Y.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let $e=0;$e<Z.locationSize;$e++)S(Z.location+$e);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let $e=0;$e<Z.locationSize;$e++)T(Z.location+$e,oe/Z.locationSize,Ne,q,oe*Ue,oe/Z.locationSize*$e*Ue,Ae)}}else if(z!==void 0){const q=z[K];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(Z.location,q);break;case 3:t.vertexAttrib3fv(Z.location,q);break;case 4:t.vertexAttrib4fv(Z.location,q);break;default:t.vertexAttrib1fv(Z.location,q)}}}}w()}function b(){G();for(const P in o){const F=o[P];for(const W in F){const $=F[W];for(const D in $)_($[D].object),delete $[D];delete F[W]}delete o[P]}}function M(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const W in F){const $=F[W];for(const D in $)_($[D].object),delete $[D];delete F[W]}delete o[P.id]}function k(P){for(const F in o){const W=o[F];if(W[P.id]===void 0)continue;const $=W[P.id];for(const D in $)_($[D].object),delete $[D];delete W[P.id]}}function G(){J(),f=!0,u!==l&&(u=l,g(u.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function tM(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,p){if(p===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,h,p),n.update(h,s,p)}function u(f,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(f[_],h[_]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=h[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function nM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=a||e.has("OES_texture_float"),R=v&&S,w=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:x,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:w}}function iM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new rr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||i!==0||r;return r=p,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,g){const _=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!x)s?f(null):u();else{const m=s?0:i,v=m*4;let S=d.clippingState||null;l.value=S,S=f(_,p,v,g);for(let R=0;R!==v;++R)S[R]=n[R];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,g,_){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=l.value,_!==!0||x===null){const d=g+y*4,m=p.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<d)&&(x=new Float32Array(d));for(let v=0,S=g;v!==y;++v,S+=4)a.copy(h[v]).applyMatrix4(m,o),a.normal.toArray(x,S),x[S+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function rM(t){let e=new WeakMap;function n(a,o){return o===$u?a.mapping=_s:o===Ku&&(a.mapping=ys),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$u||o===Ku)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new gS(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kx extends Yx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=4,Ap=[.125,.215,.35,.446,.526,.582],or=20,Vc=new Kx,Cp=new ke;let Wc=null,Xc=0,Yc=0;const sr=(1+Math.sqrt(5))/2,Hr=1/sr,Rp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,sr,Hr),new I(0,sr,-Hr),new I(Hr,0,sr),new I(-Hr,0,sr),new I(sr,Hr,0),new I(-sr,Hr,0)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,Yc),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ba,format:jn,colorSpace:xi,depthBuffer:!1},r=Lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sM(s)),this._blurMaterial=aM(s,e,n)}return r}_compileMaterial(e){const n=new bt(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,i,r){const o=new rn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Cp),f.toneMapping=Hi,f.autoClear=!1;const g=new ds({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new bt(new Da,g);let y=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,y=!0):(g.color.copy(Cp),y=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):m===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;Eo(r,m*v,d>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_s||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Eo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rp[(r-1)%Rp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new bt(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*or-1),y=s/_,x=isFinite(s)?1+Math.floor(f*y):or;x>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${or}`);const d=[];let m=0;for(let T=0;T<or;++T){const N=T/y,b=Math.exp(-N*N/2);d.push(b),T===0?m+=b:T<x&&(m+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/m;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-ts?r-v+ts:0),w=4*(this._cubeSize-S);Eo(n,R,w,3*S,2*S),l.setRenderTarget(n),l.render(h,Vc)}}function sM(t){const e=[],n=[],i=[];let r=t;const s=t-ts+1+Ap.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ts?l=Ap[a-t+ts-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,_=6,y=3,x=2,d=1,m=new Float32Array(y*_*g),v=new Float32Array(x*_*g),S=new Float32Array(d*_*g);for(let w=0;w<g;w++){const T=w%3*2/3-1,N=w>2?0:-1,b=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];m.set(b,y*_*w),v.set(p,x*_*w);const M=[w,w,w,w,w,w];S.set(M,d*_*w)}const R=new zt;R.setAttribute("position",new Rn(m,y)),R.setAttribute("uv",new Rn(v,x)),R.setAttribute("faceIndex",new Rn(S,d)),e.push(R),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aM(t,e,n){const i=new Float32Array(or),r=new I(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Pp(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ip(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oM(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===$u||l===Ku,f=l===_s||l===ys;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Np(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Np(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function lM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cM(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const y=p.morphAttributes[_];for(let x=0,d=y.length;x<d;x++)e.remove(y[x])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const _ in g){const y=g[_];for(let x=0,d=y.length;x<d;x++)e.update(y[x],t.ARRAY_BUFFER)}}function u(h){const p=[],g=h.index,_=h.attributes.position;let y=0;if(g!==null){const m=g.array;y=g.version;for(let v=0,S=m.length;v<S;v+=3){const R=m[v+0],w=m[v+1],T=m[v+2];p.push(R,w,w,T,T,R)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const R=v+0,w=v+1,T=v+2;p.push(R,w,w,T,T,R)}}else return;const x=new(Fx(p)?Wx:Vx)(p,1);x.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,x)}function f(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function uM(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function h(g,_,y){if(y===0)return;let x,d;if(r)x=t,d="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[d](s,_,o,g*l,y),n.update(_,s,y)}function p(g,_,y){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<y;d++)this.render(g[d]/l,_[d]);else{x.multiDrawElementsWEBGL(s,_,0,o,g,0,y);let d=0;for(let m=0;m<y;m++)d+=_[m];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function dM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fM(t,e){return t[0]-e[0]}function hM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,h){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let x=s.get(f);if(x===void 0||x.count!==y){let F=function(){J.dispose(),s.delete(f),f.removeEventListener("dispose",F)};var g=F;x!==void 0&&x.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let b=0;v===!0&&(b=1),S===!0&&(b=2),R===!0&&(b=3);let M=f.attributes.position.count*b,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const G=new Float32Array(M*k*4*y),J=new jx(G,M,k,y);J.type=Pi,J.needsUpdate=!0;const P=b*4;for(let W=0;W<y;W++){const $=w[W],D=T[W],O=N[W],z=M*k*4*W;for(let K=0;K<$.count;K++){const Z=K*P;v===!0&&(a.fromBufferAttribute($,K),G[z+Z+0]=a.x,G[z+Z+1]=a.y,G[z+Z+2]=a.z,G[z+Z+3]=0),S===!0&&(a.fromBufferAttribute(D,K),G[z+Z+4]=a.x,G[z+Z+5]=a.y,G[z+Z+6]=a.z,G[z+Z+7]=0),R===!0&&(a.fromBufferAttribute(O,K),G[z+Z+8]=a.x,G[z+Z+9]=a.y,G[z+Z+10]=a.z,G[z+Z+11]=O.itemSize===4?a.w:1)}}x={count:y,texture:J,size:new xe(M,k)},s.set(f,x),f.addEventListener("dispose",F)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];const m=f.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",p),h.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const _=p===void 0?0:p.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<_;S++){const R=y[S];R[0]=S,R[1]=p[S]}y.sort(hM);for(let S=0;S<8;S++)S<_&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(fM);const x=f.morphAttributes.position,d=f.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const R=o[S],w=R[0],T=R[1];w!==Number.MAX_SAFE_INTEGER&&T?(x&&f.getAttribute("morphTarget"+S)!==x[w]&&f.setAttribute("morphTarget"+S,x[w]),d&&f.getAttribute("morphNormal"+S)!==d[w]&&f.setAttribute("morphNormal"+S,d[w]),r[S]=T,m+=T):(x&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),d&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mM(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Zx extends un{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:pr,f!==pr&&f!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===pr&&(i=Li),i===void 0&&f===Ss&&(i=hr),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qx=new un,Jx=new Zx(1,1);Jx.compareFunction=kx;const e0=new jx,t0=new Jy,n0=new qx,Dp=[],Up=[],Op=new Float32Array(16),kp=new Float32Array(9),Fp=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dp[r];if(s===void 0&&(s=new Float32Array(r),Dp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function vM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function _M(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function yM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Fp.set(i),t.uniformMatrix2fv(this.addr,!1,Fp),At(n,i)}}function SM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;kp.set(i),t.uniformMatrix3fv(this.addr,!1,kp),At(n,i)}}function bM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Op.set(i),t.uniformMatrix4fv(this.addr,!1,Op),At(n,i)}}function EM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function wM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function TM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function AM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function RM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function NM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function LM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Jx:Qx;n.setTexture2D(e||s,r)}function PM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||t0,r)}function IM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||n0,r)}function DM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||e0,r)}function UM(t){switch(t){case 5126:return gM;case 35664:return xM;case 35665:return vM;case 35666:return _M;case 35674:return yM;case 35675:return SM;case 35676:return bM;case 5124:case 35670:return EM;case 35667:case 35671:return MM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return DM}}function OM(t,e){t.uniform1fv(this.addr,e)}function kM(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function FM(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function zM(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function BM(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jM(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HM(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GM(t,e){t.uniform1iv(this.addr,e)}function VM(t,e){t.uniform2iv(this.addr,e)}function WM(t,e){t.uniform3iv(this.addr,e)}function XM(t,e){t.uniform4iv(this.addr,e)}function YM(t,e){t.uniform1uiv(this.addr,e)}function qM(t,e){t.uniform2uiv(this.addr,e)}function $M(t,e){t.uniform3uiv(this.addr,e)}function KM(t,e){t.uniform4uiv(this.addr,e)}function ZM(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Qx,s[a])}function QM(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||t0,s[a])}function JM(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||n0,s[a])}function e1(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||e0,s[a])}function t1(t){switch(t){case 5126:return OM;case 35664:return kM;case 35665:return FM;case 35666:return zM;case 35674:return BM;case 35675:return jM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return VM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return YM;case 36294:return qM;case 36295:return $M;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return e1}}class n1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UM(n.type)}}class i1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=t1(n.type)}}class r1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function zp(t,e){t.seq.push(e),t.map[e.id]=e}function s1(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),a=qc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){zp(n,u===void 0?new n1(o,t,e):new i1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new r1(o),zp(n,h)),n=h}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);s1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Bp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const a1=37297;let o1=0;function l1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function c1(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===ml&&n===pl?i="LinearDisplayP3ToLinearSRGB":e===pl&&n===ml&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case Fl:return[i,"LinearTransferOETF"];case Ot:case nf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function jp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+l1(t.getShaderSource(e),a)}else return r}function u1(t,e){const n=c1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function d1(t,e){let n;switch(e){case Ey:n="Linear";break;case My:n="Reinhard";break;case wy:n="OptimizedCineon";break;case ef:n="ACESFilmic";break;case Ay:n="AgX";break;case Ty:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function f1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function h1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function p1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function m1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ns(t){return t!==""}function Hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(t){return t.replace(g1,v1)}const x1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function v1(t,e){let n=Ve[e];if(n===void 0){const i=x1.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nd(n)}const _1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(t){return t.replace(_1,y1)}function y1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _s:case ys:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function M1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Tx:e="ENVMAP_BLENDING_MULTIPLY";break;case Sy:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function w1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function T1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=S1(n),u=b1(n),f=E1(n),h=M1(n),p=w1(n),g=n.isWebGL2?"":f1(n),_=h1(n),y=p1(s),x=r.createProgram();let d,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ns).join(`
`),d.length>0&&(d+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ns).join(`
`),m.length>0&&(m+=`
`)):(d=[Wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),m=[g,Wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Hi?d1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,u1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ns).join(`
`)),a=nd(a),a=Hp(a,n),a=Gp(a,n),o=nd(o),o=Hp(o,n),o=Gp(o,n),a=Vp(a),o=Vp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+d+a,R=v+m+o,w=Bp(r,r.VERTEX_SHADER,S),T=Bp(r,r.FRAGMENT_SHADER,R);r.attachShader(x,w),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function N(G){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(x).trim(),P=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(T).trim();let W=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,T);else{const D=jp(r,w,"vertex"),O=jp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+D+`
`+O)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||F==="")&&($=!1);$&&(G.diagnostics={runnable:W,programLog:J,vertexShader:{log:P,prefix:d},fragmentShader:{log:F,prefix:m}})}r.deleteShader(w),r.deleteShader(T),b=new Bo(r,x),M=m1(r,x)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(x,a1)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let A1=0;class C1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new R1(e),n.set(e,i)),i}}class R1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function N1(t,e,n,i,r,s,a){const o=new Hx,l=new C1,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function x(b,M,k,G,J){const P=G.fog,F=J.geometry,W=b.isMeshStandardMaterial?G.environment:null,$=(b.isMeshStandardMaterial?n:e).get(b.envMap||W),D=$&&$.mapping===kl?$.image.height:null,O=_[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,K=z!==void 0?z.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let Y,q,oe,le;if(O){const Rt=qn[O];Y=Rt.vertexShader,q=Rt.fragmentShader}else Y=b.vertexShader,q=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),le=l.getFragmentShaderID(b);const ue=t.getRenderTarget(),Ne=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,Ae=!!b.map,$e=!!b.matcap,B=!!$,Ct=!!b.aoMap,we=!!b.lightMap,Pe=!!b.bumpMap,ye=!!b.normalMap,et=!!b.displacementMap,ze=!!b.emissiveMap,C=!!b.metalnessMap,E=!!b.roughnessMap,j=b.anisotropy>0,re=b.clearcoat>0,ee=b.iridescence>0,te=b.sheen>0,Se=b.transmission>0,de=j&&!!b.anisotropyMap,ve=re&&!!b.clearcoatMap,Re=re&&!!b.clearcoatNormalMap,Be=re&&!!b.clearcoatRoughnessMap,ne=ee&&!!b.iridescenceMap,je=ee&&!!b.iridescenceThicknessMap,Ge=te&&!!b.sheenColorMap,Ie=te&&!!b.sheenRoughnessMap,be=!!b.specularMap,ge=!!b.specularColorMap,Oe=!!b.specularIntensityMap,Qe=Se&&!!b.transmissionMap,he=Se&&!!b.thicknessMap,fe=!!b.gradientMap,Q=!!b.alphaMap,L=b.alphaTest>0,se=!!b.alphaHash,ae=!!b.extensions,Ce=!!F.attributes.uv1,Ee=!!F.attributes.uv2,tt=!!F.attributes.uv3;let _e=Hi;return b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(_e=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:b.type,shaderName:b.name,vertexShader:Y,fragmentShader:q,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ue,instancing:Ne,instancingColor:Ne&&J.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:xi,map:Ae,matcap:$e,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:D,aoMap:Ct,lightMap:we,bumpMap:Pe,normalMap:ye,displacementMap:p&&et,emissiveMap:ze,normalMapObjectSpace:ye&&b.normalMapType===zy,normalMapTangentSpace:ye&&b.normalMapType===Ox,metalnessMap:C,roughnessMap:E,anisotropy:j,anisotropyMap:de,clearcoat:re,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:Be,iridescence:ee,iridescenceMap:ne,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:ge,specularIntensityMap:Oe,transmission:Se,transmissionMap:Qe,thicknessMap:he,gradientMap:fe,opaque:b.transparent===!1&&b.blending===cs,alphaMap:Q,alphaTest:L,alphaHash:se,combine:b.combine,mapUv:Ae&&y(b.map.channel),aoMapUv:Ct&&y(b.aoMap.channel),lightMapUv:we&&y(b.lightMap.channel),bumpMapUv:Pe&&y(b.bumpMap.channel),normalMapUv:ye&&y(b.normalMap.channel),displacementMapUv:et&&y(b.displacementMap.channel),emissiveMapUv:ze&&y(b.emissiveMap.channel),metalnessMapUv:C&&y(b.metalnessMap.channel),roughnessMapUv:E&&y(b.roughnessMap.channel),anisotropyMapUv:de&&y(b.anisotropyMap.channel),clearcoatMapUv:ve&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(b.sheenRoughnessMap.channel),specularMapUv:be&&y(b.specularMap.channel),specularColorMapUv:ge&&y(b.specularColorMap.channel),specularIntensityMapUv:Oe&&y(b.specularIntensityMap.channel),transmissionMapUv:Qe&&y(b.transmissionMap.channel),thicknessMapUv:he&&y(b.thicknessMap.channel),alphaMapUv:Q&&y(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||j),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:tt,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Ae||Q),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:_e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wn,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)M.push(k),M.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(m(M,b),v(M,b),M.push(t.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function m(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){const M=_[b.type];let k;if(M){const G=qn[M];k=fS.clone(G.uniforms)}else k=b.uniforms;return k}function R(b,M){let k;for(let G=0,J=u.length;G<J;G++){const P=u[G];if(P.cacheKey===M){k=P,++k.usedTimes;break}}return k===void 0&&(k=new T1(t,M,b,s),u.push(k)),k}function w(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function N(){l.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:N}}function L1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function P1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,g,_,y,x){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:g,groupOrder:_,renderOrder:h.renderOrder,z:y,group:x},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=g,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=x),e++,d}function o(h,p,g,_,y,x){const d=a(h,p,g,_,y,x);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(h,p,g,_,y,x){const d=a(h,p,g,_,y,x);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||P1),i.length>1&&i.sort(p||Xp),r.length>1&&r.sort(p||Xp)}function f(){for(let h=e,p=t.length;h<p;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function I1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Yp,t.set(i,[a])):r>=s.length?(a=new Yp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function D1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new ke};break;case"SpotLight":n={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function U1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let O1=0;function k1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function F1(t,e){const n=new D1,i=U1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new I);const s=new I,a=new vt,o=new vt;function l(f,h){let p=0,g=0,_=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let y=0,x=0,d=0,m=0,v=0,S=0,R=0,w=0,T=0,N=0,b=0;f.sort(k1);const M=h===!0?Math.PI:1;for(let G=0,J=f.length;G<J;G++){const P=f[G],F=P.color,W=P.intensity,$=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=F.r*W*M,g+=F.g*W*M,_+=F.b*W*M;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],W);b++}else if(P.isDirectionalLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const z=P.shadow,K=i.get(P);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=P.shadow.matrix,S++}r.directional[y]=O,y++}else if(P.isSpotLight){const O=n.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(F).multiplyScalar(W*M),O.distance=$,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[d]=O;const z=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[d]=z.matrix,P.castShadow){const K=i.get(P);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=D,w++}d++}else if(P.isRectAreaLight){const O=n.get(P);O.color.copy(F).multiplyScalar(W),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[m]=O,m++}else if(P.isPointLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*M),O.distance=P.distance,O.decay=P.decay,P.castShadow){const z=P.shadow,K=i.get(P);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,r.pointShadow[x]=K,r.pointShadowMap[x]=D,r.pointShadowMatrix[x]=P.shadow.matrix,R++}r.point[x]=O,x++}else if(P.isHemisphereLight){const O=n.get(P);O.skyColor.copy(P.color).multiplyScalar(W*M),O.groundColor.copy(P.groundColor).multiplyScalar(W*M),r.hemi[v]=O,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==y||k.pointLength!==x||k.spotLength!==d||k.rectAreaLength!==m||k.hemiLength!==v||k.numDirectionalShadows!==S||k.numPointShadows!==R||k.numSpotShadows!==w||k.numSpotMaps!==T||k.numLightProbes!==b)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=m,r.point.length=x,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+T-N,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=b,k.directionalLength=y,k.pointLength=x,k.spotLength=d,k.rectAreaLength=m,k.hemiLength=v,k.numDirectionalShadows=S,k.numPointShadows=R,k.numSpotShadows=w,k.numSpotMaps=T,k.numLightProbes=b,r.version=O1++)}function u(f,h){let p=0,g=0,_=0,y=0,x=0;const d=h.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const S=f[m];if(S.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),p++}else if(S.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),g++}else if(S.isHemisphereLight){const R=r.hemi[x];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(d),x++}}}return{setup:l,setupView:u,state:r}}function qp(t,e){const n=new F1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function z1(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new qp(t,e),n.set(s,[l])):a>=o.length?(l=new qp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class B1 extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j1 extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V1(t,e,n){let i=new sf;const r=new xe,s=new xe,a=new ut,o=new B1({depthPacking:Fy}),l=new j1,u={},f=n.maxTextureSize,h={[Xi]:cn,[cn]:Xi,[wn]:wn},p=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new zt;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bt(_,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mx;let d=this.type;this.render=function(w,T,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const b=t.getRenderTarget(),M=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),G=t.state;G.setBlending(ji),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=d!==ri&&this.type===ri,P=d===ri&&this.type!==ri;for(let F=0,W=w.length;F<W;F++){const $=w[F],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||J===!0||P===!0){const K=this.type!==ri?{minFilter:Zt,magFilter:Zt}:{};D.map!==null&&D.map.dispose(),D.map=new Sr(r.x,r.y,K),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const z=D.getViewportCount();for(let K=0;K<z;K++){const Z=D.getViewport(K);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),G.viewport(a),D.updateMatrices($,K),i=D.getFrustum(),S(T,N,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ri&&m(D,N),D.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(b,M,k)};function m(w,T){const N=e.update(y);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Sr(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,N,p,y,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,N,g,y,null)}function v(w,T,N,b){let M=null;const k=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)M=k;else if(M=N.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=M.uuid,J=T.uuid;let P=u[G];P===void 0&&(P={},u[G]=P);let F=P[J];F===void 0&&(F=M.clone(),P[J]=F,T.addEventListener("dispose",R)),M=F}if(M.visible=T.visible,M.wireframe=T.wireframe,b===ri?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=t.properties.get(M);G.light=N}return M}function S(w,T,N,b,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ri)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const J=e.update(w),P=w.material;if(Array.isArray(P)){const F=J.groups;for(let W=0,$=F.length;W<$;W++){const D=F[W],O=P[D.materialIndex];if(O&&O.visible){const z=v(w,O,b,M);w.onBeforeShadow(t,w,T,N,J,z,D),t.renderBufferDirect(N,null,J,z,w,D),w.onAfterShadow(t,w,T,N,J,z,D)}}}else if(P.visible){const F=v(w,P,b,M);w.onBeforeShadow(t,w,T,N,J,F,null),t.renderBufferDirect(N,null,J,F,w,null),w.onAfterShadow(t,w,T,N,J,F,null)}}const G=w.children;for(let J=0,P=G.length;J<P;J++)S(G[J],T,N,b,M)}function R(w){w.target.removeEventListener("dispose",R);for(const N in u){const b=u[N],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function W1(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const se=new ut;let ae=null;const Ce=new ut(0,0,0,0);return{setMask:function(Ee){ae!==Ee&&!L&&(t.colorMask(Ee,Ee,Ee,Ee),ae=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,tt,_e,mt,Rt){Rt===!0&&(Ee*=mt,tt*=mt,_e*=mt),se.set(Ee,tt,_e,mt),Ce.equals(se)===!1&&(t.clearColor(Ee,tt,_e,mt),Ce.copy(se))},reset:function(){L=!1,ae=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,se=null,ae=null,Ce=null;return{setTest:function(Ee){Ee?Ue(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!L&&(t.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(ae!==Ee){switch(Ee){case py:t.depthFunc(t.NEVER);break;case my:t.depthFunc(t.ALWAYS);break;case gy:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case xy:t.depthFunc(t.EQUAL);break;case vy:t.depthFunc(t.GEQUAL);break;case _y:t.depthFunc(t.GREATER);break;case yy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){L=!1,se=null,ae=null,Ce=null}}}function a(){let L=!1,se=null,ae=null,Ce=null,Ee=null,tt=null,_e=null,mt=null,Rt=null;return{setTest:function(nt){L||(nt?Ue(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(nt){se!==nt&&!L&&(t.stencilMask(nt),se=nt)},setFunc:function(nt,qt,Wn){(ae!==nt||Ce!==qt||Ee!==Wn)&&(t.stencilFunc(nt,qt,Wn),ae=nt,Ce=qt,Ee=Wn)},setOp:function(nt,qt,Wn){(tt!==nt||_e!==qt||mt!==Wn)&&(t.stencilOp(nt,qt,Wn),tt=nt,_e=qt,mt=Wn)},setLocked:function(nt){L=nt},setClear:function(nt){Rt!==nt&&(t.clearStencil(nt),Rt=nt)},reset:function(){L=!1,se=null,ae=null,Ce=null,Ee=null,tt=null,_e=null,mt=null,Rt=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,y=[],x=null,d=!1,m=null,v=null,S=null,R=null,w=null,T=null,N=null,b=new ke(0,0,0),M=0,k=!1,G=null,J=null,P=null,F=null,W=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=O>=2);let K=null,Z={};const Y=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),oe=new ut().fromArray(Y),le=new ut().fromArray(q);function ue(L,se,ae,Ce){const Ee=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<ae;_e++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(se+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return tt}const Ne={};Ne[t.TEXTURE_2D]=ue(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(t.DEPTH_TEST),l.setFunc(fl),ze(!1),C(Nh),Ue(t.CULL_FACE),ye(ji);function Ue(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function Ae(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function $e(L,se){return g[L]!==se?(t.bindFramebuffer(L,se),g[L]=se,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function B(L,se){let ae=y,Ce=!1;if(L)if(ae=_.get(se),ae===void 0&&(ae=[],_.set(se,ae)),L.isWebGLMultipleRenderTargets){const Ee=L.texture;if(ae.length!==Ee.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,_e=Ee.length;tt<_e;tt++)ae[tt]=t.COLOR_ATTACHMENT0+tt;ae.length=Ee.length,Ce=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ct(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const we={[ar]:t.FUNC_ADD,[J_]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};if(i)we[Ih]=t.MIN,we[Dh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Ih]=L.MIN_EXT,we[Dh]=L.MAX_EXT)}const Pe={[ty]:t.ZERO,[ny]:t.ONE,[iy]:t.SRC_COLOR,[Yu]:t.SRC_ALPHA,[cy]:t.SRC_ALPHA_SATURATE,[oy]:t.DST_COLOR,[sy]:t.DST_ALPHA,[ry]:t.ONE_MINUS_SRC_COLOR,[qu]:t.ONE_MINUS_SRC_ALPHA,[ly]:t.ONE_MINUS_DST_COLOR,[ay]:t.ONE_MINUS_DST_ALPHA,[uy]:t.CONSTANT_COLOR,[dy]:t.ONE_MINUS_CONSTANT_COLOR,[fy]:t.CONSTANT_ALPHA,[hy]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(L,se,ae,Ce,Ee,tt,_e,mt,Rt,nt){if(L===ji){d===!0&&(Ae(t.BLEND),d=!1);return}if(d===!1&&(Ue(t.BLEND),d=!0),L!==Q_){if(L!==m||nt!==k){if((v!==ar||w!==ar)&&(t.blendEquation(t.FUNC_ADD),v=ar,w=ar),nt)switch(L){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dl:t.blendFunc(t.ONE,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ph:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ph:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,T=null,N=null,b.set(0,0,0),M=0,m=L,k=nt}return}Ee=Ee||se,tt=tt||ae,_e=_e||Ce,(se!==v||Ee!==w)&&(t.blendEquationSeparate(we[se],we[Ee]),v=se,w=Ee),(ae!==S||Ce!==R||tt!==T||_e!==N)&&(t.blendFuncSeparate(Pe[ae],Pe[Ce],Pe[tt],Pe[_e]),S=ae,R=Ce,T=tt,N=_e),(mt.equals(b)===!1||Rt!==M)&&(t.blendColor(mt.r,mt.g,mt.b,Rt),b.copy(mt),M=Rt),m=L,k=!1}function et(L,se){L.side===wn?Ae(t.CULL_FACE):Ue(t.CULL_FACE);let ae=L.side===cn;se&&(ae=!ae),ze(ae),L.blending===cs&&L.transparent===!1?ye(ji):ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Ce=L.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),j(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){G!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),G=L)}function C(L){L!==K_?(Ue(t.CULL_FACE),L!==J&&(L===Nh?t.cullFace(t.BACK):L===Z_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),J=L}function E(L){L!==P&&(D&&t.lineWidth(L),P=L)}function j(L,se,ae){L?(Ue(t.POLYGON_OFFSET_FILL),(F!==se||W!==ae)&&(t.polygonOffset(se,ae),F=se,W=ae)):Ae(t.POLYGON_OFFSET_FILL)}function re(L){L?Ue(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+$-1),K!==L&&(t.activeTexture(L),K=L)}function te(L,se,ae){ae===void 0&&(K===null?ae=t.TEXTURE0+$-1:ae=K);let Ce=Z[ae];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[ae]=Ce),(Ce.type!==L||Ce.texture!==se)&&(K!==ae&&(t.activeTexture(ae),K=ae),t.bindTexture(L,se||Ne[L]),Ce.type=L,Ce.texture=se)}function Se(){const L=Z[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){oe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Qe(L){le.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),le.copy(L))}function he(L,se){let ae=h.get(se);ae===void 0&&(ae=new WeakMap,h.set(se,ae));let Ce=ae.get(L);Ce===void 0&&(Ce=t.getUniformBlockIndex(se,L.name),ae.set(L,Ce))}function fe(L,se){const Ce=h.get(se).get(L);f.get(se)!==Ce&&(t.uniformBlockBinding(se,Ce,L.__bindingPointIndex),f.set(se,Ce))}function Q(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},K=null,Z={},g={},_=new WeakMap,y=[],x=null,d=!1,m=null,v=null,S=null,R=null,w=null,T=null,N=null,b=new ke(0,0,0),M=0,k=!1,G=null,J=null,P=null,F=null,W=null,oe.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ue,disable:Ae,bindFramebuffer:$e,drawBuffers:B,useProgram:Ct,setBlending:ye,setMaterial:et,setFlipSided:ze,setCullFace:C,setLineWidth:E,setPolygonOffset:j,setScissorTest:re,activeTexture:ee,bindTexture:te,unbindTexture:Se,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:be,texImage3D:ge,updateUBOMapping:he,uniformBlockBinding:fe,texStorage2D:Ge,texStorage3D:Ie,texSubImage2D:Re,texSubImage3D:Be,compressedTexSubImage2D:ne,compressedTexSubImage3D:je,scissor:Oe,viewport:Qe,reset:Q}}function X1(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return g?new OffscreenCanvas(C,E):xl("canvas")}function y(C,E,j,re){let ee=1;if((C.width>re||C.height>re)&&(ee=re/Math.max(C.width,C.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const te=E?td:Math.floor,Se=te(ee*C.width),de=te(ee*C.height);h===void 0&&(h=_(Se,de));const ve=j?_(Se,de):h;return ve.width=Se,ve.height=de,ve.getContext("2d").drawImage(C,0,0,Se,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+de+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return up(C.width)&&up(C.height)}function d(C){return o?!1:C.wrapS!==Bn||C.wrapT!==Bn||C.minFilter!==Zt&&C.minFilter!==Mn}function m(C,E){return C.generateMipmaps&&E&&C.minFilter!==Zt&&C.minFilter!==Mn}function v(C){t.generateMipmap(C)}function S(C,E,j,re,ee=!1){if(o===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=E;if(E===t.RED&&(j===t.FLOAT&&(te=t.R32F),j===t.HALF_FLOAT&&(te=t.R16F),j===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(te=t.R8UI),j===t.UNSIGNED_SHORT&&(te=t.R16UI),j===t.UNSIGNED_INT&&(te=t.R32UI),j===t.BYTE&&(te=t.R8I),j===t.SHORT&&(te=t.R16I),j===t.INT&&(te=t.R32I)),E===t.RG&&(j===t.FLOAT&&(te=t.RG32F),j===t.HALF_FLOAT&&(te=t.RG16F),j===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RGBA){const Se=ee?hl:it.getTransfer(re);j===t.FLOAT&&(te=t.RGBA32F),j===t.HALF_FLOAT&&(te=t.RGBA16F),j===t.UNSIGNED_BYTE&&(te=Se===ot?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(C,E,j){return m(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){return C===Zt||C===Uh||C===_c?t.NEAREST:t.LINEAR}function T(C){const E=C.target;E.removeEventListener("dispose",T),b(E),E.isVideoTexture&&f.delete(E)}function N(C){const E=C.target;E.removeEventListener("dispose",N),k(E)}function b(C){const E=i.get(C);if(E.__webglInit===void 0)return;const j=C.source,re=p.get(j);if(re){const ee=re[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(C),Object.keys(re).length===0&&p.delete(j)}i.remove(C)}function M(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const j=C.source,re=p.get(j);delete re[E.__cacheKey],a.memory.textures--}function k(C){const E=C.texture,j=i.get(C),re=i.get(E);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(j.__webglFramebuffer[ee]))for(let te=0;te<j.__webglFramebuffer[ee].length;te++)t.deleteFramebuffer(j.__webglFramebuffer[ee][te]);else t.deleteFramebuffer(j.__webglFramebuffer[ee]);j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ee])}else{if(Array.isArray(j.__webglFramebuffer))for(let ee=0;ee<j.__webglFramebuffer.length;ee++)t.deleteFramebuffer(j.__webglFramebuffer[ee]);else t.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ee=0;ee<j.__webglColorRenderbuffer.length;ee++)j.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ee]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,te=E.length;ee<te;ee++){const Se=i.get(E[ee]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(C)}let G=0;function J(){G=0}function P(){const C=G;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),G+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function W(C,E){const j=i.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(j,C,E);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+E)}function $(C,E){const j=i.get(C);if(C.version>0&&j.__version!==C.version){oe(j,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+E)}function D(C,E){const j=i.get(C);if(C.version>0&&j.__version!==C.version){oe(j,C,E);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+E)}function O(C,E){const j=i.get(C);if(C.version>0&&j.__version!==C.version){le(j,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+E)}const z={[Zu]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[Qu]:t.MIRRORED_REPEAT},K={[Zt]:t.NEAREST,[Uh]:t.NEAREST_MIPMAP_NEAREST,[_c]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[Cy]:t.LINEAR_MIPMAP_NEAREST,[Sa]:t.LINEAR_MIPMAP_LINEAR},Z={[By]:t.NEVER,[Xy]:t.ALWAYS,[jy]:t.LESS,[kx]:t.LEQUAL,[Hy]:t.EQUAL,[Wy]:t.GEQUAL,[Gy]:t.GREATER,[Vy]:t.NOTEQUAL};function Y(C,E,j){if(j?(t.texParameteri(C,t.TEXTURE_WRAP_S,z[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,z[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,z[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Bn||E.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Zt&&E.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Zt||E.minFilter!==_c&&E.minFilter!==Sa||E.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ba&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function q(C,E){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",T));const re=E.source;let ee=p.get(re);ee===void 0&&(ee={},p.set(re,ee));const te=F(E);if(te!==C.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ee[te].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&M(E)),C.__cacheKey=te,C.__webglTexture=ee[te].texture}return j}function oe(C,E,j){let re=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=t.TEXTURE_3D);const ee=q(C,E),te=E.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+j);const Se=i.get(te);if(te.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+j);const de=it.getPrimaries(it.workingColorSpace),ve=E.colorSpace===Tn?null:it.getPrimaries(E.colorSpace),Re=E.colorSpace===Tn||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Be=d(E)&&x(E.image)===!1;let ne=y(E.image,Be,!1,r.maxTextureSize);ne=ze(E,ne);const je=x(ne)||o,Ge=s.convert(E.format,E.colorSpace);let Ie=s.convert(E.type),be=S(E.internalFormat,Ge,Ie,E.colorSpace,E.isVideoTexture);Y(re,E,je);let ge;const Oe=E.mipmaps,Qe=o&&E.isVideoTexture!==!0&&be!==Dx,he=Se.__version===void 0||ee===!0,fe=R(E,ne,je);if(E.isDepthTexture)be=t.DEPTH_COMPONENT,o?E.type===Pi?be=t.DEPTH_COMPONENT32F:E.type===Li?be=t.DEPTH_COMPONENT24:E.type===hr?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:E.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===pr&&be===t.DEPTH_COMPONENT&&E.type!==tf&&E.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Li,Ie=s.convert(E.type)),E.format===Ss&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,E.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=hr,Ie=s.convert(E.type))),he&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,be,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,be,ne.width,ne.height,0,Ge,Ie,null));else if(E.isDataTexture)if(Oe.length>0&&je){Qe&&he&&n.texStorage2D(t.TEXTURE_2D,fe,be,Oe[0].width,Oe[0].height);for(let Q=0,L=Oe.length;Q<L;Q++)ge=Oe[Q],Qe?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,Ge,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,Q,be,ge.width,ge.height,0,Ge,Ie,ge.data);E.generateMipmaps=!1}else Qe?(he&&n.texStorage2D(t.TEXTURE_2D,fe,be,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,Ge,Ie,ne.data)):n.texImage2D(t.TEXTURE_2D,0,be,ne.width,ne.height,0,Ge,Ie,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qe&&he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,be,Oe[0].width,Oe[0].height,ne.depth);for(let Q=0,L=Oe.length;Q<L;Q++)ge=Oe[Q],E.format!==jn?Ge!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ne.depth,Ge,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,be,ge.width,ge.height,ne.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ne.depth,Ge,Ie,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,be,ge.width,ge.height,ne.depth,0,Ge,Ie,ge.data)}else{Qe&&he&&n.texStorage2D(t.TEXTURE_2D,fe,be,Oe[0].width,Oe[0].height);for(let Q=0,L=Oe.length;Q<L;Q++)ge=Oe[Q],E.format!==jn?Ge!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,Ge,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,Ge,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,Q,be,ge.width,ge.height,0,Ge,Ie,ge.data)}else if(E.isDataArrayTexture)Qe?(he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,be,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Ie,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,Ge,Ie,ne.data);else if(E.isData3DTexture)Qe?(he&&n.texStorage3D(t.TEXTURE_3D,fe,be,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Ie,ne.data)):n.texImage3D(t.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,Ge,Ie,ne.data);else if(E.isFramebufferTexture){if(he)if(Qe)n.texStorage2D(t.TEXTURE_2D,fe,be,ne.width,ne.height);else{let Q=ne.width,L=ne.height;for(let se=0;se<fe;se++)n.texImage2D(t.TEXTURE_2D,se,be,Q,L,0,Ge,Ie,null),Q>>=1,L>>=1}}else if(Oe.length>0&&je){Qe&&he&&n.texStorage2D(t.TEXTURE_2D,fe,be,Oe[0].width,Oe[0].height);for(let Q=0,L=Oe.length;Q<L;Q++)ge=Oe[Q],Qe?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ge,Ie,ge):n.texImage2D(t.TEXTURE_2D,Q,be,Ge,Ie,ge);E.generateMipmaps=!1}else Qe?(he&&n.texStorage2D(t.TEXTURE_2D,fe,be,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,Ie,ne)):n.texImage2D(t.TEXTURE_2D,0,be,Ge,Ie,ne);m(E,je)&&v(re),Se.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function le(C,E,j){if(E.image.length!==6)return;const re=q(C,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+j);const te=i.get(ee);if(ee.version!==te.__version||re===!0){n.activeTexture(t.TEXTURE0+j);const Se=it.getPrimaries(it.workingColorSpace),de=E.colorSpace===Tn?null:it.getPrimaries(E.colorSpace),ve=E.colorSpace===Tn||Se===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let Q=0;Q<6;Q++)!Re&&!Be?ne[Q]=y(E.image[Q],!1,!0,r.maxCubemapSize):ne[Q]=Be?E.image[Q].image:E.image[Q],ne[Q]=ze(E,ne[Q]);const je=ne[0],Ge=x(je)||o,Ie=s.convert(E.format,E.colorSpace),be=s.convert(E.type),ge=S(E.internalFormat,Ie,be,E.colorSpace),Oe=o&&E.isVideoTexture!==!0,Qe=te.__version===void 0||re===!0;let he=R(E,je,Ge);Y(t.TEXTURE_CUBE_MAP,E,Ge);let fe;if(Re){Oe&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ge,je.width,je.height);for(let Q=0;Q<6;Q++){fe=ne[Q].mipmaps;for(let L=0;L<fe.length;L++){const se=fe[L];E.format!==jn?Ie!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,se.width,se.height,Ie,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,ge,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,se.width,se.height,Ie,be,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,ge,se.width,se.height,0,Ie,be,se.data)}}}else{fe=E.mipmaps,Oe&&Qe&&(fe.length>0&&he++,n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ge,ne[0].width,ne[0].height));for(let Q=0;Q<6;Q++)if(Be){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ne[Q].width,ne[Q].height,Ie,be,ne[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ge,ne[Q].width,ne[Q].height,0,Ie,be,ne[Q].data);for(let L=0;L<fe.length;L++){const ae=fe[L].image[Q].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,ae.width,ae.height,Ie,be,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,ge,ae.width,ae.height,0,Ie,be,ae.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,be,ne[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ge,Ie,be,ne[Q]);for(let L=0;L<fe.length;L++){const se=fe[L];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,Ie,be,se.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,ge,Ie,be,se.image[Q])}}}m(E,Ge)&&v(t.TEXTURE_CUBE_MAP),te.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,j,re,ee,te){const Se=s.convert(j.format,j.colorSpace),de=s.convert(j.type),ve=S(j.internalFormat,Se,de,j.colorSpace);if(!i.get(E).__hasExternalTextures){const Be=Math.max(1,E.width>>te),ne=Math.max(1,E.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,ve,Be,ne,E.depth,0,Se,de,null):n.texImage2D(ee,te,ve,Be,ne,0,Se,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,i.get(j).__webglTexture,0,Pe(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,i.get(j).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,E,j){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let re=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||ye(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pi?re=t.DEPTH_COMPONENT32F:ee.type===Li&&(re=t.DEPTH_COMPONENT24));const te=Pe(E);ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,re,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,re,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const re=Pe(E);j&&ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<re.length;ee++){const te=re[ee],Se=s.convert(te.format,te.colorSpace),de=s.convert(te.type),ve=S(te.internalFormat,Se,de,te.colorSpace),Re=Pe(E);j&&ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const re=i.get(E.depthTexture).__webglTexture,ee=Pe(E);if(E.depthTexture.format===pr)ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===Ss)ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const E=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,C)}else if(j){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=t.createRenderbuffer(),Ne(E.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Ne(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(C,E,j){const re=i.get(C);E!==void 0&&ue(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Ae(C)}function B(C){const E=C.texture,j=i.get(C),re=i.get(E);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=E.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,Se=x(C)||o;if(ee){j.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[de]=[];for(let ve=0;ve<E.mipmaps.length;ve++)j.__webglFramebuffer[de][ve]=t.createFramebuffer()}else j.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)j.__webglFramebuffer[de]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const de=C.texture;for(let ve=0,Re=de.length;ve<Re;ve++){const Be=i.get(de[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ye(C)===!1){const de=te?E:[E];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const Re=de[ve];j.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ve]);const Be=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),je=S(Re.internalFormat,Be,ne,Re.colorSpace,C.isXRRenderTarget===!0),Ge=Pe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,je,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,j.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(j.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Y(t.TEXTURE_CUBE_MAP,E,Se);for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ue(j.__webglFramebuffer[de][ve],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ue(j.__webglFramebuffer[de],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E,Se)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const de=C.texture;for(let ve=0,Re=de.length;ve<Re;ve++){const Be=de[ve],ne=i.get(Be);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),Y(t.TEXTURE_2D,Be,Se),ue(j.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),m(Be,Se)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,re.__webglTexture),Y(de,E,Se),o&&E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ue(j.__webglFramebuffer[ve],C,E,t.COLOR_ATTACHMENT0,de,ve);else ue(j.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,de,0);m(E,Se)&&v(de),n.unbindTexture()}C.depthBuffer&&Ae(C)}function Ct(C){const E=x(C)||o,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ee=j.length;re<ee;re++){const te=j[re];if(m(te,E)){const Se=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(te).__webglTexture;n.bindTexture(Se,de),v(Se),n.unbindTexture()}}}function we(C){if(o&&C.samples>0&&ye(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,re=C.height;let ee=t.COLOR_BUFFER_BIT;const te=[],Se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(C),ve=C.isWebGLMultipleRenderTargets===!0;if(ve)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){te.push(t.COLOR_ATTACHMENT0+Re),C.depthBuffer&&te.push(Se);const Be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Re]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ve){const ne=i.get(E[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,j,re,0,0,j,re,ee,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const Be=i.get(E[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function ye(C){const E=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){const E=a.render.frame;f.get(C)!==E&&(f.set(C,E),C.update())}function ze(C,E){const j=C.colorSpace,re=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ju||j!==xi&&j!==Tn&&(it.getTransfer(j)===ot?o===!1?e.has("EXT_sRGB")===!0&&re===jn?(C.format=Ju,C.minFilter=Mn,C.generateMipmaps=!1):E=zx.sRGBToLinear(E):(re!==jn||ee!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=$e,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ye}function Y1(t,e,n){const i=n.isWebGL2;function r(s,a=Tn){let o;const l=it.getTransfer(a);if(s===Gi)return t.UNSIGNED_BYTE;if(s===Rx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Nx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ry)return t.BYTE;if(s===Ny)return t.SHORT;if(s===tf)return t.UNSIGNED_SHORT;if(s===Cx)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===ba)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ly)return t.ALPHA;if(s===jn)return t.RGBA;if(s===Py)return t.LUMINANCE;if(s===Iy)return t.LUMINANCE_ALPHA;if(s===pr)return t.DEPTH_COMPONENT;if(s===Ss)return t.DEPTH_STENCIL;if(s===Ju)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Dy)return t.RED;if(s===Lx)return t.RED_INTEGER;if(s===Uy)return t.RG;if(s===Px)return t.RG_INTEGER;if(s===Ix)return t.RGBA_INTEGER;if(s===yc||s===Sc||s===bc||s===Ec)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oh||s===kh||s===Fh||s===zh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bh||s===jh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bh)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===jh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hh||s===Gh||s===Vh||s===Wh||s===Xh||s===Yh||s===qh||s===$h||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Hh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ep)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mc||s===np||s===ip)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Mc)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Oy||s===rp||s===sp||s===ap)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Mc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===rp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ap)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class q1 extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $1={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const x=n.getJointPose(y,i),d=this._getHandJoint(u,y);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,_=.005;u.inputState.pinching&&p>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class K1 extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,p=null,g=null,_=null;const y=n.getContextAttributes();let x=null,d=null;const m=[],v=[],S=new xe;let R=null;const w=new rn;w.layers.enable(1),w.viewport=new ut;const T=new rn;T.layers.enable(2),T.viewport=new ut;const N=[w,T],b=new q1;b.layers.enable(1),b.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let q=m[Y];return q===void 0&&(q=new $c,m[Y]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Y){let q=m[Y];return q===void 0&&(q=new $c,m[Y]=q),q.getGripSpace()},this.getHand=function(Y){let q=m[Y];return q===void 0&&(q=new $c,m[Y]=q),q.getHandSpace()};function G(Y){const q=v.indexOf(Y.inputSource);if(q===-1)return;const oe=m[q];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,u||a),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",P);for(let Y=0;Y<m.length;Y++){const q=v[Y];q!==null&&(v[Y]=null,m[Y].disconnect(q))}M=null,k=null,e.setRenderTarget(x),g=null,p=null,h=null,r=null,d=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new Sr(g.framebufferWidth,g.framebufferHeight,{format:jn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let q=null,oe=null,le=null;y.depth&&(le=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=y.stencil?Ss:pr,oe=y.stencil?hr:Li);const ue={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(ue),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Sr(p.textureWidth,p.textureHeight,{format:jn,type:Gi,depthTexture:new Zx(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ne=e.properties.get(d);Ne.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(Y){for(let q=0;q<Y.removed.length;q++){const oe=Y.removed[q],le=v.indexOf(oe);le>=0&&(v[le]=null,m[le].disconnect(oe))}for(let q=0;q<Y.added.length;q++){const oe=Y.added[q];let le=v.indexOf(oe);if(le===-1){for(let Ne=0;Ne<m.length;Ne++)if(Ne>=v.length){v.push(oe),le=Ne;break}else if(v[Ne]===null){v[Ne]=oe,le=Ne;break}if(le===-1)break}const ue=m[le];ue&&ue.connect(oe)}}const F=new I,W=new I;function $(Y,q,oe){F.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const le=F.distanceTo(W),ue=q.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,Ue=ue[14]/(ue[10]-1),Ae=ue[14]/(ue[10]+1),$e=(ue[9]+1)/ue[5],B=(ue[9]-1)/ue[5],Ct=(ue[8]-1)/ue[0],we=(Ne[8]+1)/Ne[0],Pe=Ue*Ct,ye=Ue*we,et=le/(-Ct+we),ze=et*-Ct;q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=Ue+et,E=Ae+et,j=Pe-ze,re=ye+(le-ze),ee=$e*Ae/E*C,te=B*Ae/E*C;Y.projectionMatrix.makePerspective(j,re,ee,te,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function D(Y,q){q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;b.near=T.near=w.near=Y.near,b.far=T.far=w.far=Y.far,(M!==b.near||k!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,k=b.far);const q=Y.parent,oe=b.cameras;D(b,q);for(let le=0;le<oe.length;le++)D(oe[le],q);oe.length===2?$(b,w,T):b.projectionMatrix.copy(w.projectionMatrix),O(Y,b,q)};function O(Y,q,oe){oe===null?Y.matrix.copy(q.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(q.projectionMatrix),Y.projectionMatrixInverse.copy(q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ed*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)};let z=null;function K(Y,q){if(f=q.getViewerPose(u||a),_=q,f!==null){const oe=f.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let le=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let ue=0;ue<oe.length;ue++){const Ne=oe[ue];let Ue=null;if(g!==null)Ue=g.getViewport(Ne);else{const $e=h.getViewSubImage(p,Ne);Ue=$e.viewport,ue===0&&(e.setRenderTargetTextures(d,$e.colorTexture,p.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(d))}let Ae=N[ue];Ae===void 0&&(Ae=new rn,Ae.layers.enable(ue),Ae.viewport=new ut,N[ue]=Ae),Ae.matrix.fromArray(Ne.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ne.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ue===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(Ae)}}for(let oe=0;oe<m.length;oe++){const le=v[oe],ue=m[oe];le!==null&&ue!==void 0&&ue.update(le,q,u||a)}z&&z(Y,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Z=new $x;Z.setAnimationLoop(K),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}}function Z1(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,Xx(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,m,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),h(x,d)):d.isMeshPhongMaterial?(s(x,d),f(x,d)):d.isMeshStandardMaterial?(s(x,d),p(x,d),d.isMeshPhysicalMaterial&&g(x,d,S)):d.isMeshMatcapMaterial?(s(x,d),_(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),y(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,m,v):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===cn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===cn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(x.envMap.value=m,x.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap){x.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,x.lightMapTransform)}d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,m,v){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*m,x.scale.value=v*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function f(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function h(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function p(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),e.get(d).envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function g(x,d,m){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&x.clearcoatNormalScale.value.negate())),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function y(x,d){const m=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Q1(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function u(m,v){let S=r[m.id];S===void 0&&(_(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",x));const R=v.program;i.updateUBOMapping(m,R);const w=e.render.frame;s[m.id]!==w&&(p(m),s[m.id]=w)}function f(m){const v=h();m.__bindingPointIndex=v;const S=t.createBuffer(),R=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const v=r[m.id],S=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const N=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,M=N.length;b<M;b++){const k=N[b];if(g(k,w,b,R)===!0){const G=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let F=0;F<J.length;F++){const W=J[F],$=y(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,G+P,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,S,R){const w=m.value,T=v+"_"+S;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const N=R[T];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return R[T]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function _(m){const v=m.uniforms;let S=0;const R=16;for(let T=0,N=v.length;T<N;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,k=b.length;M<k;M++){const G=b[M],J=Array.isArray(G.value)?G.value:[G.value];for(let P=0,F=J.length;P<F;P++){const W=J[P],$=y(W),D=S%R;D!==0&&R-D<$.boundary&&(S+=R-D),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=$.storage}}}const w=S%R;return w>0&&(S+=R-w),m.__size=S,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function x(m){const v=m.target;v.removeEventListener("dispose",x);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class of{constructor(e={}){const{canvas:n=qy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,x=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,w=0,T=null,N=-1,b=null;const M=new ut,k=new ut;let G=null;const J=new ke(0);let P=0,F=n.width,W=n.height,$=1,D=null,O=null;const z=new ut(0,0,F,W),K=new ut(0,0,F,W);let Z=!1;const Y=new sf;let q=!1,oe=!1,le=null;const ue=new vt,Ne=new xe,Ue=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return T===null?$:1}let B=i;function Ct(A,U){for(let V=0;V<A.length;V++){const X=A[V],H=n.getContext(X,U);if(H!==null)return H}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",se,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=Ct(U,A),B===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,Pe,ye,et,ze,C,E,j,re,ee,te,Se,de,ve,Re,Be,ne,je,Ge,Ie,be,ge,Oe,Qe;function he(){we=new lM(B),Pe=new nM(B,we,e),we.init(Pe),ge=new Y1(B,we,Pe),ye=new W1(B,we,Pe),et=new dM(B),ze=new L1,C=new X1(B,we,ye,ze,Pe,ge,et),E=new rM(v),j=new oM(v),re=new _S(B,Pe),Oe=new eM(B,we,re,Pe),ee=new cM(B,re,et,Oe),te=new mM(B,ee,re,et),Ge=new pM(B,Pe,C),Be=new iM(ze),Se=new N1(v,E,j,we,Pe,Oe,Be),de=new Z1(v,ze),ve=new I1,Re=new z1(we,Pe),je=new JE(v,E,j,ye,te,p,l),ne=new V1(v,te,Pe),Qe=new Q1(B,et,Pe,ye),Ie=new tM(B,we,et,Pe),be=new uM(B,we,et,Pe),et.programs=Se.programs,v.capabilities=Pe,v.extensions=we,v.properties=ze,v.renderLists=ve,v.shadowMap=ne,v.state=ye,v.info=et}he();const fe=new K1(v,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(F,W,!1))},this.getSize=function(A){return A.set(F,W)},this.setSize=function(A,U,V=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,W=U,n.width=Math.floor(A*$),n.height=Math.floor(U*$),V===!0&&(n.style.width=A+"px",n.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(F*$,W*$).floor()},this.setDrawingBufferSize=function(A,U,V){F=A,W=U,$=V,n.width=Math.floor(A*V),n.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,U,V,X){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,U,V,X),ye.viewport(M.copy(z).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,U,V,X){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,U,V,X),ye.scissor(k.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){ye.setScissorTest(Z=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(A=!0,U=!0,V=!0){let X=0;if(A){let H=!1;if(T!==null){const pe=T.texture.format;H=pe===Ix||pe===Px||pe===Lx}if(H){const pe=T.texture.type,Me=pe===Gi||pe===Li||pe===tf||pe===hr||pe===Rx||pe===Nx,Le=je.getClearColor(),De=je.getClearAlpha(),We=Le.r,Fe=Le.g,He=Le.b;Me?(g[0]=We,g[1]=Fe,g[2]=He,g[3]=De,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=We,_[1]=Fe,_[2]=He,_[3]=De,B.clearBufferiv(B.COLOR,0,_))}else X|=B.COLOR_BUFFER_BIT}U&&(X|=B.DEPTH_BUFFER_BIT),V&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ve.dispose(),Re.dispose(),ze.dispose(),E.dispose(),j.dispose(),te.dispose(),Oe.dispose(),Qe.dispose(),Se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Rt),fe.removeEventListener("sessionend",nt),le&&(le.dispose(),le=null),qt.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=et.autoReset,U=ne.enabled,V=ne.autoUpdate,X=ne.needsUpdate,H=ne.type;he(),et.autoReset=A,ne.enabled=U,ne.autoUpdate=V,ne.needsUpdate=X,ne.type=H}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const U=A.target;U.removeEventListener("dispose",ae),Ce(U)}function Ce(A){Ee(A),ze.remove(A)}function Ee(A){const U=ze.get(A).programs;U!==void 0&&(U.forEach(function(V){Se.releaseProgram(V)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,X,H,pe){U===null&&(U=Ae);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Le=g0(A,U,V,X,H);ye.setMaterial(X,Me);let De=V.index,We=1;if(X.wireframe===!0){if(De=ee.getWireframeAttribute(V),De===void 0)return;We=2}const Fe=V.drawRange,He=V.attributes.position;let _t=Fe.start*We,dn=(Fe.start+Fe.count)*We;pe!==null&&(_t=Math.max(_t,pe.start*We),dn=Math.min(dn,(pe.start+pe.count)*We)),De!==null?(_t=Math.max(_t,0),dn=Math.min(dn,De.count)):He!=null&&(_t=Math.max(_t,0),dn=Math.min(dn,He.count));const Nt=dn-_t;if(Nt<0||Nt===1/0)return;Oe.setup(H,X,Le,V,De);let Qn,dt=Ie;if(De!==null&&(Qn=re.get(De),dt=be,dt.setIndex(Qn)),H.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*$e()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if(H.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*$e()),H.isLineSegments?dt.setMode(B.LINES):H.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else H.isPoints?dt.setMode(B.POINTS):H.isSprite&&dt.setMode(B.TRIANGLES);if(H.isBatchedMesh)dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)dt.renderInstances(_t,Nt,H.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Gl=Math.min(V.instanceCount,Xe);dt.renderInstances(_t,Nt,Gl)}else dt.render(_t,Nt)};function tt(A,U,V){A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,ka(A,U,V),A.side=Xi,A.needsUpdate=!0,ka(A,U,V),A.side=wn):ka(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),x=Re.get(V),x.init(),m.push(x),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),A!==V&&A.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),x.setupLights(v._useLegacyLights);const X=new Set;return A.traverse(function(H){const pe=H.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Le=pe[Me];tt(Le,V,H),X.add(Le)}else tt(pe,V,H),X.add(pe)}),m.pop(),x=null,X},this.compileAsync=function(A,U,V=null){const X=this.compile(A,U,V);return new Promise(H=>{function pe(){if(X.forEach(function(Me){ze.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){H(A);return}setTimeout(pe,10)}we.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let _e=null;function mt(A){_e&&_e(A)}function Rt(){qt.stop()}function nt(){qt.start()}const qt=new $x;qt.setAnimationLoop(mt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){_e=A,fe.setAnimationLoop(A),A===null?qt.stop():qt.start()},fe.addEventListener("sessionstart",Rt),fe.addEventListener("sessionend",nt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,T),x=Re.get(A,m.length),x.init(),m.push(x),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(ue),oe=this.localClippingEnabled,q=Be.init(this.clippingPlanes,oe),y=ve.get(A,d.length),y.init(),d.push(y),Wn(A,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(D,O),this.info.render.frame++,q===!0&&Be.beginShadows();const V=x.state.shadowsArray;if(ne.render(V,A,U),q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(y,A),x.setupLights(v._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let H=0,pe=X.length;H<pe;H++){const Me=X[H];mf(y,A,Me,Me.viewport)}}else mf(y,A,U);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,U),Oe.resetDefaultState(),N=-1,b=null,m.pop(),m.length>0?x=m[m.length-1]:x=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Wn(A,U,V,X){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Me=te.update(A),Le=A.material;Le.visible&&y.push(A,Me,Le,V,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Me=te.update(A),Le=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ue.copy(Me.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Le)){const De=Me.groups;for(let We=0,Fe=De.length;We<Fe;We++){const He=De[We],_t=Le[He.materialIndex];_t&&_t.visible&&y.push(A,Me,_t,V,Ue.z,He)}}else Le.visible&&y.push(A,Me,Le,V,Ue.z,null)}}const pe=A.children;for(let Me=0,Le=pe.length;Me<Le;Me++)Wn(pe[Me],U,V,X)}function mf(A,U,V,X){const H=A.opaque,pe=A.transmissive,Me=A.transparent;x.setupLightsView(V),q===!0&&Be.setGlobalState(v.clippingPlanes,V),pe.length>0&&m0(H,pe,U,V),X&&ye.viewport(M.copy(X)),H.length>0&&Oa(H,U,V),pe.length>0&&Oa(pe,U,V),Me.length>0&&Oa(Me,U,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function m0(A,U,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const pe=Pe.isWebGL2;le===null&&(le=new Sr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?ba:Gi,minFilter:Sa,samples:pe?4:0})),v.getDrawingBufferSize(Ne),pe?le.setSize(Ne.x,Ne.y):le.setSize(td(Ne.x),td(Ne.y));const Me=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=Hi,Oa(A,V,X),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le);let De=!1;for(let We=0,Fe=U.length;We<Fe;We++){const He=U[We],_t=He.object,dn=He.geometry,Nt=He.material,Qn=He.group;if(Nt.side===wn&&_t.layers.test(X.layers)){const dt=Nt.side;Nt.side=cn,Nt.needsUpdate=!0,gf(_t,V,X,dn,Nt,Qn),Nt.side=dt,Nt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le)),v.setRenderTarget(Me),v.setClearColor(J,P),v.toneMapping=Le}function Oa(A,U,V){const X=U.isScene===!0?U.overrideMaterial:null;for(let H=0,pe=A.length;H<pe;H++){const Me=A[H],Le=Me.object,De=Me.geometry,We=X===null?Me.material:X,Fe=Me.group;Le.layers.test(V.layers)&&gf(Le,U,V,De,We,Fe)}}function gf(A,U,V,X,H,pe){A.onBeforeRender(v,U,V,X,H,pe),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,U,V,X,A,pe),H.transparent===!0&&H.side===wn&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,v.renderBufferDirect(V,U,X,H,A,pe),H.side=Xi,H.needsUpdate=!0,v.renderBufferDirect(V,U,X,H,A,pe),H.side=wn):v.renderBufferDirect(V,U,X,H,A,pe),A.onAfterRender(v,U,V,X,H,pe)}function ka(A,U,V){U.isScene!==!0&&(U=Ae);const X=ze.get(A),H=x.state.lights,pe=x.state.shadowsArray,Me=H.state.version,Le=Se.getParameters(A,H.state,pe,U,V),De=Se.getProgramCacheKey(Le);let We=X.programs;X.environment=A.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(A.isMeshStandardMaterial?j:E).get(A.envMap||X.environment),We===void 0&&(A.addEventListener("dispose",ae),We=new Map,X.programs=We);let Fe=We.get(De);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===Me)return vf(A,Le),Fe}else Le.uniforms=Se.getUniforms(A),A.onBuild(V,Le,v),A.onBeforeCompile(Le,v),Fe=Se.acquireProgram(Le,De),We.set(De,Fe),X.uniforms=Le.uniforms;const He=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Be.uniform),vf(A,Le),X.needsLights=v0(A),X.lightsStateVersion=Me,X.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function xf(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Bo.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function vf(A,U){const V=ze.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function g0(A,U,V,X,H){U.isScene!==!0&&(U=Ae),C.resetTextureUnits();const pe=U.fog,Me=X.isMeshStandardMaterial?U.environment:null,Le=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xi,De=(X.isMeshStandardMaterial?j:E).get(X.envMap||Me),We=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!V.morphAttributes.position,_t=!!V.morphAttributes.normal,dn=!!V.morphAttributes.color;let Nt=Hi;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const Qn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=Qn!==void 0?Qn.length:0,Xe=ze.get(X),Gl=x.state.lights;if(q===!0&&(oe===!0||A!==b)){const yn=A===b&&X.id===N;Be.setState(X,A,yn)}let gt=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gl.state.version||Xe.outputColorSpace!==Le||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||Xe.envMap!==De||X.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Fe||Xe.morphTargets!==He||Xe.morphNormals!==_t||Xe.morphColors!==dn||Xe.toneMapping!==Nt||Pe.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(gt=!0):(gt=!0,Xe.__version=X.version);let Ki=Xe.currentProgram;gt===!0&&(Ki=ka(X,U,H));let _f=!1,Cs=!1,Vl=!1;const Bt=Ki.getUniforms(),Zi=Xe.uniforms;if(ye.useProgram(Ki.program)&&(_f=!0,Cs=!0,Vl=!0),X.id!==N&&(N=X.id,Cs=!0),_f||b!==A){Bt.setValue(B,"projectionMatrix",A.projectionMatrix),Bt.setValue(B,"viewMatrix",A.matrixWorldInverse);const yn=Bt.map.cameraPosition;yn!==void 0&&yn.setValue(B,Ue.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Bt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Cs=!0,Vl=!0)}if(H.isSkinnedMesh){Bt.setOptional(B,H,"bindMatrix"),Bt.setOptional(B,H,"bindMatrixInverse");const yn=H.skeleton;yn&&(Pe.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Bt.setValue(B,"boneTexture",yn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Bt.setOptional(B,H,"batchingTexture"),Bt.setValue(B,"batchingTexture",H._matricesTexture,C));const Wl=V.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0&&Pe.isWebGL2===!0)&&Ge.update(H,V,Ki),(Cs||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,Bt.setValue(B,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Zi.envMap.value=De,Zi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Cs&&(Bt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&x0(Zi,Vl),pe&&X.fog===!0&&de.refreshFogUniforms(Zi,pe),de.refreshMaterialUniforms(Zi,X,$,W,le),Bo.upload(B,xf(Xe),Zi,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Bo.upload(B,xf(Xe),Zi,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(B,"center",H.center),Bt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Bt.setValue(B,"normalMatrix",H.normalMatrix),Bt.setValue(B,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const yn=X.uniformsGroups;for(let Xl=0,_0=yn.length;Xl<_0;Xl++)if(Pe.isWebGL2){const yf=yn[Xl];Qe.update(yf,Ki),Qe.bind(yf,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function x0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function v0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,V){ze.get(A.texture).__webglTexture=U,ze.get(A.depthTexture).__webglTexture=V;const X=ze.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const V=ze.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){T=A,R=U,w=V;let X=!0,H=null,pe=!1,Me=!1;if(A){const De=ze.get(A);De.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?C.setupRenderTarget(A):De.__hasExternalTextures&&C.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Me=!0);const Fe=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?H=Fe[U][V]:H=Fe[U],pe=!0):Pe.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?H=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[V]:H=Fe,M.copy(A.viewport),k.copy(A.scissor),G=A.scissorTest}else M.copy(z).multiplyScalar($).floor(),k.copy(K).multiplyScalar($).floor(),G=Z;if(ye.bindFramebuffer(B.FRAMEBUFFER,H)&&Pe.drawBuffers&&X&&ye.drawBuffers(A,H),ye.viewport(M),ye.scissor(k),ye.setScissorTest(G),pe){const De=ze.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,V)}else if(Me){const De=ze.get(A.texture),We=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.__webglTexture,V||0,We)}N=-1},this.readRenderTargetPixels=function(A,U,V,X,H,pe,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){ye.bindFramebuffer(B.FRAMEBUFFER,Le);try{const De=A.texture,We=De.format,Fe=De.type;if(We!==jn&&ge.convert(We)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Fe===ba&&(we.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&we.has("EXT_color_buffer_float"));if(Fe!==Gi&&ge.convert(Fe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Pi&&(Pe.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-X&&V>=0&&V<=A.height-H&&B.readPixels(U,V,X,H,ge.convert(We),ge.convert(Fe),pe)}finally{const De=T!==null?ze.get(T).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,U,V=0){const X=Math.pow(2,-V),H=Math.floor(U.image.width*X),pe=Math.floor(U.image.height*X);C.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,A.x,A.y,H,pe),ye.unbindTexture()},this.copyTextureToTexture=function(A,U,V,X=0){const H=U.image.width,pe=U.image.height,Me=ge.convert(V.format),Le=ge.convert(V.type);C.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,A.x,A.y,H,pe,Me,Le,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,A.x,A.y,Me,Le,U.image),X===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V,X,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,De=ge.convert(X.format),We=ge.convert(X.type);let Fe;if(X.isData3DTexture)C.setTexture3D(X,0),Fe=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),Fe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const He=B.getParameter(B.UNPACK_ROW_LENGTH),_t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),dn=B.getParameter(B.UNPACK_SKIP_PIXELS),Nt=B.getParameter(B.UNPACK_SKIP_ROWS),Qn=B.getParameter(B.UNPACK_SKIP_IMAGES),dt=V.isCompressedTexture?V.mipmaps[H]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,dt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Fe,H,U.x,U.y,U.z,pe,Me,Le,De,We,dt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Fe,H,U.x,U.y,U.z,pe,Me,Le,De,dt.data)):B.texSubImage3D(Fe,H,U.x,U.y,U.z,pe,Me,Le,De,We,dt),B.pixelStorei(B.UNPACK_ROW_LENGTH,He),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qn),H===0&&X.generateMipmaps&&B.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,ye.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nf?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Fl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?mr:Ux}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?Ot:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class J1 extends of{}J1.prototype.isWebGL1Renderer=!0;class lf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=n}clone(){return new lf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class i0 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class r0 extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $p=new I,Kp=new I,Zp=new vt,Kc=new rf,Mo=new Ia;class ew extends Dt{constructor(e=new zt,n=new r0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)$p.fromBufferAttribute(n,r-1),Kp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=$p.distanceTo(Kp);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;Zp.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(Zp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new I,f=new I,h=new I,p=new I,g=this.isLineSegments?2:1,_=i.index,x=i.attributes.position;if(_!==null){const d=Math.max(0,a.start),m=Math.min(_.count,a.start+a.count);for(let v=d,S=m-1;v<S;v+=g){const R=_.getX(v),w=_.getX(v+1);if(u.fromBufferAttribute(x,R),f.fromBufferAttribute(x,w),Kc.distanceSqToSegment(u,f,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(p);N<e.near||N>e.far||n.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let v=d,S=m-1;v<S;v+=g){if(u.fromBufferAttribute(x,v),f.fromBufferAttribute(x,v+1),Kc.distanceSqToSegment(u,f,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(p);w<e.near||w>e.far||n.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Qp=new I,Jp=new I;class tw extends ew{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Qp.fromBufferAttribute(n,r),Jp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Qp.distanceTo(Jp);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s0 extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const em=new vt,id=new rf,wo=new Ia,To=new I;class nw extends Dt{constructor(e=new zt,n=new s0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;em.copy(r).invert(),id.copy(e.ray).applyMatrix4(em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,y=g;_<y;_++){const x=u.getX(_);To.fromBufferAttribute(h,x),tm(To,x,l,r,e,n,this)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,y=g;_<y;_++)To.fromBufferAttribute(h,_),tm(To,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tm(t,e,n,i,r,s,a){const o=id.distanceSqToPoint(t);if(o<n){const l=new I;id.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class iw extends un{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vl extends zt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Xt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],u=[],f=1/n,h=new I,p=new xe,g=new I,_=new I,y=new I;let x=0,d=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:x=e[m+1].x-e[m].x,d=e[m+1].y-e[m].y,g.x=d*1,g.y=-x,g.z=d*0,y.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:x=e[m+1].x-e[m].x,d=e[m+1].y-e[m].y,g.x=d*1,g.y=-x,g.z=d*0,_.copy(g),g.x+=y.x,g.y+=y.y,g.z+=y.z,g.normalize(),l.push(g.x,g.y,g.z),y.copy(_)}for(let m=0;m<=n;m++){const v=i+m*f*r,S=Math.sin(v),R=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*S,h.y=e[w].y,h.z=e[w].x*R,a.push(h.x,h.y,h.z),p.x=m/n,p.y=w/(e.length-1),o.push(p.x,p.y);const T=l[3*w+0]*S,N=l[3*w+1],b=l[3*w+0]*R;u.push(T,N,b)}}for(let m=0;m<n;m++)for(let v=0;v<e.length-1;v++){const S=v+m*e.length,R=S,w=S+e.length,T=S+e.length+1,N=S+1;s.push(R,w,N),s.push(T,N,w)}this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.points,e.segments,e.phiStart,e.phiLength)}}class cf extends zt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],u=new I,f=new xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=n;h++,p+=3){const g=i+h/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),a.push(u.x,u.y,u.z),o.push(0,0,1),f.x=(a[p]/e+1)/2,f.y=(a[p+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class uf extends zt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],p=[],g=[];let _=0;const y=[],x=i/2;let d=0;m(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(g,2));function m(){const S=new I,R=new I;let w=0;const T=(n-e)/i;for(let N=0;N<=s;N++){const b=[],M=N/s,k=M*(n-e)+e;for(let G=0;G<=r;G++){const J=G/r,P=J*l+o,F=Math.sin(P),W=Math.cos(P);R.x=k*F,R.y=-M*i+x,R.z=k*W,h.push(R.x,R.y,R.z),S.set(F,T,W).normalize(),p.push(S.x,S.y,S.z),g.push(J,1-M),b.push(_++)}y.push(b)}for(let N=0;N<r;N++)for(let b=0;b<s;b++){const M=y[b][N],k=y[b+1][N],G=y[b+1][N+1],J=y[b][N+1];f.push(M,k,J),f.push(k,G,J),w+=6}u.addGroup(d,w,0),d+=w}function v(S){const R=_,w=new xe,T=new I;let N=0;const b=S===!0?e:n,M=S===!0?1:-1;for(let G=1;G<=r;G++)h.push(0,x*M,0),p.push(0,M,0),g.push(.5,.5),_++;const k=_;for(let G=0;G<=r;G++){const P=G/r*l+o,F=Math.cos(P),W=Math.sin(P);T.x=b*W,T.y=x*M,T.z=b*F,h.push(T.x,T.y,T.z),p.push(0,M,0),w.x=F*.5+.5,w.y=W*.5*M+.5,g.push(w.x,w.y),_++}for(let G=0;G<r;G++){const J=R+G,P=k+G;S===!0?f.push(P,P+1,J):f.push(P+1,P,J),N+=3}u.addGroup(d,N,S===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends zt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),f(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const v=new I,S=new I,R=new I;for(let w=0;w<n.length;w+=3)g(n[w+0],v),g(n[w+1],S),g(n[w+2],R),l(v,S,R,m)}function l(m,v,S,R){const w=R+1,T=[];for(let N=0;N<=w;N++){T[N]=[];const b=m.clone().lerp(S,N/w),M=v.clone().lerp(S,N/w),k=w-N;for(let G=0;G<=k;G++)G===0&&N===w?T[N][G]=b:T[N][G]=b.clone().lerp(M,G/k)}for(let N=0;N<w;N++)for(let b=0;b<2*(w-N)-1;b++){const M=Math.floor(b/2);b%2===0?(p(T[N][M+1]),p(T[N+1][M]),p(T[N][M])):(p(T[N][M+1]),p(T[N+1][M+1]),p(T[N+1][M]))}}function u(m){const v=new I;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(m),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function f(){const m=new I;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const S=x(m)/2/Math.PI+.5,R=d(m)/Math.PI+.5;a.push(S,1-R)}_(),h()}function h(){for(let m=0;m<a.length;m+=6){const v=a[m+0],S=a[m+2],R=a[m+4],w=Math.max(v,S,R),T=Math.min(v,S,R);w>.9&&T<.1&&(v<.2&&(a[m+0]+=1),S<.2&&(a[m+2]+=1),R<.2&&(a[m+4]+=1))}}function p(m){s.push(m.x,m.y,m.z)}function g(m,v){const S=m*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const m=new I,v=new I,S=new I,R=new I,w=new xe,T=new xe,N=new xe;for(let b=0,M=0;b<s.length;b+=9,M+=6){m.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),w.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),R.copy(m).add(v).add(S).divideScalar(3);const k=x(R);y(w,M+0,m,k),y(T,M+2,v,k),y(N,M+4,S,k)}}function y(m,v,S,R){R<0&&m.x===1&&(a[v]=m.x-1),S.x===0&&S.z===0&&(a[v]=R/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.vertices,e.indices,e.radius,e.details)}}class df extends jl{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new df(e.radius,e.detail)}}class ff extends jl{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ff(e.radius,e.detail)}}class Ma extends zt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const f=[],h=new I,p=new I,g=[],_=[],y=[],x=[];for(let d=0;d<=i;d++){const m=[],v=d/i;let S=0;d===0&&a===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const w=R/n;h.x=-e*Math.cos(r+w*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+w*s)*Math.sin(a+v*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),x.push(w+S,1-v),m.push(u++)}f.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const v=f[d][m+1],S=f[d][m],R=f[d+1][m],w=f[d+1][m+1];(d!==0||a>0)&&g.push(v,S,w),(d!==i-1||l<Math.PI)&&g.push(S,R,w)}this.setIndex(g),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hl extends zt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],f=new I,h=new I,p=new I;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const y=_/r*s,x=g/i*Math.PI*2;h.x=(e+n*Math.cos(x))*Math.cos(y),h.y=(e+n*Math.cos(x))*Math.sin(y),h.z=n*Math.sin(x),o.push(h.x,h.y,h.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(h,f).normalize(),l.push(p.x,p.y,p.z),u.push(_/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const y=(r+1)*g+_-1,x=(r+1)*(g-1)+_-1,d=(r+1)*(g-1)+_,m=(r+1)*g+_;a.push(y,x,m),a.push(x,d,m)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rw extends zt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new I,s=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let u=0,f=l.length;u<f;++u){const h=l[u],p=h.start,g=h.count;for(let _=p,y=p+g;_<y;_+=3)for(let x=0;x<3;x++){const d=o.getX(_+x),m=o.getX(_+(x+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,m),nm(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let u=0;u<3;u++){const f=3*o+u,h=3*o+(u+1)%3;r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,h),nm(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new rt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function nm(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class oi extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ox,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sw extends oi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hf extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Zc=new vt,im=new I,rm=new I;class a0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;im.setFromMatrixPosition(e.matrixWorld),n.position.copy(im),rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rm),n.updateMatrixWorld(),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sm=new vt,Hs=new I,Qc=new I;class aw extends a0{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Qc.copy(i.position),Qc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Qc),i.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),sm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm)}}class am extends hf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new aw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ow extends a0{constructor(){super(new Kx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ia extends hf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o0 extends hf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}let l0=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=om(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=om();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function om(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);function lw({scrollProgress:t=0,mousePos:e={x:0,y:0}}){const n=Te.useRef(null),[i,r]=Te.useState(!0),s=Te.useRef({});return Te.useEffect(()=>{const a=document.createElement("canvas");if(!(a.getContext("webgl")||a.getContext("experimental-webgl"))){r(!1);return}const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=n.current;if(!u)return;let f=u.clientWidth||window.innerWidth,h=u.clientHeight||window.innerHeight;const p=new i0;p.fog=new lf(395526,.038);const g=new rn(45,f/h,.1,100);g.position.set(0,1.1,7.8);const _=new of({antialias:!0,alpha:!0,powerPreference:"high-performance"});_.setSize(f,h),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.toneMapping=ef,_.toneMappingExposure=1.35,_.shadowMap.enabled=!0,_.shadowMap.type=wx,u.appendChild(_.domElement);const y=new o0(660493,2.2);p.add(y);const x=new ia(12953466,2.2);x.position.set(4,9,5),x.castShadow=!0,x.shadow.mapSize.width=1024,x.shadow.mapSize.height=1024,p.add(x);const d=new ia(11921491,3.2);d.position.set(-5,4,-4),p.add(d);const m=new ia(8440872,1.6);m.position.set(6,2,2),p.add(m);const v=new am(11921491,4.5,7.5);v.position.set(0,.9,0),p.add(v);const S=new am(8440872,2,4);S.position.set(0,-.4,0),p.add(S);const R=new Ea(32,24),w=new oi({color:791310,roughness:.45,metalness:.55}),T=new bt(R,w);T.rotation.x=-Math.PI/2,T.position.y=-1.55,T.receiveShadow=!0,p.add(T);const N=new di;p.add(N);const b=[];b.push(new xe(0,-.05)),b.push(new xe(1.7,-.05)),b.push(new xe(1.76,.15)),b.push(new xe(1.6,.5)),b.push(new xe(.66,2.3)),b.push(new xe(.5,2.8)),b.push(new xe(.5,4.2)),b.push(new xe(.64,4.35)),b.push(new xe(.64,4.48)),b.push(new xe(.48,4.48)),b.push(new xe(.46,2.8)),b.push(new xe(.6,2.3)),b.push(new xe(1.5,.5)),b.push(new xe(1.6,.1)),b.push(new xe(0,.05));const M=new vl(b,54),k=new sw({color:15794164,metalness:.05,roughness:.08,transmission:.94,thickness:.6,transparent:!0,opacity:.72,reflectivity:.95,clearcoat:1,clearcoatRoughness:.05,side:wn}),G=new bt(M,k);G.castShadow=!0,N.add(G);const J=new di;for(let he=0;he<5;he++){const fe=.65+he*.42,Q=1.4-he*.2,L=new Hl(Q,.007,8,40,Math.PI*.75),se=new ds({color:12953466,transparent:!0,opacity:.75}),ae=new bt(L,se);ae.rotation.x=Math.PI/2,ae.rotation.z=Math.PI*.12,ae.position.y=fe,J.add(ae)}N.add(J);const P=[];P.push(new xe(0,.08)),P.push(new xe(1.56,.08)),P.push(new xe(1.56,.3)),P.push(new xe(1.32,.9)),P.push(new xe(1.02,1.5)),P.push(new xe(.86,1.88)),P.push(new xe(0,1.88));const F=new vl(P,42),W=new oi({color:8440872,emissive:4758292,emissiveIntensity:.95,roughness:.15,metalness:.1,transparent:!0,opacity:.88,side:wn}),$=new bt(F,W);N.add($);const D=new cf(.86,36),O=new oi({color:11921491,emissive:7784740,emissiveIntensity:1.1,roughness:.1,transparent:!0,opacity:.95,side:wn}),z=new bt(D,O);z.rotation.x=-Math.PI/2,z.position.y=1.88,N.add(z);const K=55,Z=new Ma(.042,12,12),Y=new oi({color:15531996,emissive:11921491,emissiveIntensity:.8,roughness:.1,transparent:!0,opacity:.85}),q=[];for(let he=0;he<K;he++){const fe=new bt(Z,Y),Q=Math.random()*.92,L=Math.random()*Math.PI*2;fe.position.set(Math.cos(L)*Q,.18+Math.random()*1.68,Math.sin(L)*Q);const se=.35+Math.random()*.85;fe.scale.setScalar(se),fe.userData={speed:.007+Math.random()*.015,wobbleSpeed:1.8+Math.random()*3.5,wobbleOffset:Math.random()*Math.PI*2,initialRad:Q,angle:L,baseScale:se},N.add(fe),q.push(fe)}const oe=document.createElement("canvas");oe.width=128,oe.height=128;const le=oe.getContext("2d"),ue=le.createRadialGradient(64,64,4,64,64,60);ue.addColorStop(0,"rgba(181, 232, 83, 0.85)"),ue.addColorStop(.25,"rgba(128, 204, 40, 0.45)"),ue.addColorStop(.6,"rgba(80, 150, 20, 0.15)"),ue.addColorStop(1,"rgba(0, 0, 0, 0)"),le.fillStyle=ue,le.fillRect(0,0,128,128);const Ne=new iw(oe),Ue=42,Ae=[],$e=new Ea(.75,.75),B=new ds({map:Ne,transparent:!0,opacity:.4,depthWrite:!1,blending:dl}),Ct=new di;for(let he=0;he<Ue;he++){const fe=new bt($e,B.clone());fe.position.set((Math.random()-.5)*.28,4.45+Math.random()*3.2,(Math.random()-.5)*.28),fe.rotation.z=Math.random()*Math.PI*2,fe.scale.setScalar(.4+Math.random()*1.6),fe.userData={speedY:.007+Math.random()*.013,rotSpeed:(Math.random()-.5)*.012,driftX:(Math.random()-.5)*.005,fadeSpeed:.003+Math.random()*.004},Ct.add(fe),Ae.push(fe)}N.add(Ct);const we=280,Pe=new zt,ye=new Float32Array(we*3),et=new Float32Array(we*3),ze=new Float32Array(we),C=new ke(11921491),E=new ke(8440872),j=new ke(12953466);for(let he=0;he<we;he++){ye[he*3]=(Math.random()-.5)*24,ye[he*3+1]=(Math.random()-.5)*16,ye[he*3+2]=(Math.random()-.5)*14;const fe=Math.random(),Q=fe>.6?C:fe>.3?E:j;et[he*3]=Q.r,et[he*3+1]=Q.g,et[he*3+2]=Q.b,ze[he]=.035+Math.random()*.055}Pe.setAttribute("position",new Rn(ye,3)),Pe.setAttribute("color",new Rn(et,3));const re=new s0({size:.055,vertexColors:!0,transparent:!0,opacity:.65,blending:dl}),ee=new nw(Pe,re);p.add(ee);const te=new di,Se=14,de=[],ve=new Ma(.12,16,16),Re=new oi({color:8440872,emissive:2249992,roughness:.3}),Be=new oi({color:2570284,roughness:.5});for(let he=0;he<Se;he++){const fe=new bt(ve,he%2===0?Re:Be),Q=he/Se*Math.PI*2,L=2.4+Math.sin(he*1.5)*.8;fe.position.set(Math.cos(Q)*L,Math.sin(he*2)*1.2,Math.sin(Q)*L),te.add(fe),de.push(fe)}for(let he=0;he<Se;he++){const fe=(he+1)%Se,Q=de[he].position,L=de[fe].position,se=Q.distanceTo(L),ae=new uf(.018,.018,se,8),Ce=new ds({color:2042657,transparent:!0,opacity:.4}),Ee=new bt(ae,Ce);Ee.position.copy(Q).add(L).multiplyScalar(.5),Ee.quaternion.setFromUnitVectors(new I(0,1,0),L.clone().sub(Q).normalize()),te.add(Ee)}te.position.set(4.5,0,-4),p.add(te);const ne=he=>{const fe=he>=1024,Q=he>=768&&he<1024;return{isDesktop:fe,heroFlaskX:fe?2.2:Q?1.4:0,heroFlaskY:fe?-1.05:-1.8,heroFlaskZ:fe?.2:-.8,heroFlaskScale:fe?1.05:Q?.85:.72,cameraZ:fe?7.6:8.5}};let je=ne(f);N.position.set(je.heroFlaskX,je.heroFlaskY,je.heroFlaskZ),N.scale.setScalar(je.heroFlaskScale),T.position.x=je.heroFlaskX,s.current={scene:p,camera:g,renderer:_,flaskGroup:N,tableMesh:T,bubbles:q,smokeParticles:Ae,dustPointsMesh:ee,moleculeGroup:te,liquidGlowLight:v,meniscusMesh:z};let Ge,Ie=new l0,be=!0;const ge=()=>{if(Ge=requestAnimationFrame(ge),!be)return;const he=Ie.getElapsedTime();l||(q.forEach(_e=>{_e.position.y+=_e.userData.speed;const mt=Math.sin(he*_e.userData.wobbleSpeed+_e.userData.wobbleOffset)*.035,Rt=_e.userData.initialRad*(1-_e.position.y/2.3*.45);_e.position.x=Math.cos(_e.userData.angle)*Rt+mt,_e.position.z=Math.sin(_e.userData.angle)*Rt;const nt=Math.min(1,_e.position.y/1.86);_e.scale.setScalar(_e.userData.baseScale*(1+nt*.4)),_e.position.y>1.86&&(_e.position.y=.16,_e.userData.angle=Math.random()*Math.PI*2)}),Ae.forEach(_e=>{_e.position.y+=_e.userData.speedY,_e.position.x+=_e.userData.driftX+Math.sin(he*1.8+_e.position.y*1.2)*.0025,_e.rotation.z+=_e.userData.rotSpeed,_e.scale.x+=.0035,_e.scale.y+=.0035;const mt=_e.position.y-4.45;_e.material.opacity=Math.max(0,.42-mt*.11),(_e.position.y>7.8||_e.material.opacity<=.01)&&(_e.position.y=4.45,_e.position.x=(Math.random()-.5)*.22,_e.position.z=(Math.random()-.5)*.22,_e.scale.setScalar(.4+Math.random()*.4),_e.material.opacity=.4)}),z.position.y=1.88+Math.sin(he*2.8)*.012,v.intensity=4.2+Math.sin(he*3.5)*.7,te.rotation.y=he*.12,te.rotation.x=Math.sin(he*.08)*.15,ee.rotation.y=he*.025);const fe=l?0:Math.sin(he*1.4)*.05,Q=l?0:e.x*.35,L=l?0:e.y*.2;N.rotation.y+=(Q-N.rotation.y)*.05,N.rotation.x+=(L-N.rotation.x)*.05;const se=t>0?(1-t)*je.heroFlaskX:je.heroFlaskX,ae=je.heroFlaskY+fe-t*1.2;N.position.x+=(se-N.position.x)*.06,N.position.y+=(ae-N.position.y)*.06,T.position.x=N.position.x;const Ce=l?0:e.x*.25,Ee=1.1-t*1.6+(l?0:e.y*.15),tt=je.cameraZ+t*2.2;g.position.x+=(Ce-g.position.x)*.05,g.position.y+=(Ee-g.position.y)*.05,g.position.z+=(tt-g.position.z)*.05,g.lookAt(N.position.x*.25,.5-t*.4,0),_.render(p,g)};ge();const Oe=()=>{be=!document.hidden,be&&Ie.start()};document.addEventListener("visibilitychange",Oe);const Qe=()=>{n.current&&(f=n.current.clientWidth||window.innerWidth,h=n.current.clientHeight||window.innerHeight,g.aspect=f/h,g.updateProjectionMatrix(),_.setSize(f,h),je=ne(f),N.scale.setScalar(je.heroFlaskScale),g.position.z=je.cameraZ)};return window.addEventListener("resize",Qe),()=>{window.removeEventListener("resize",Qe),document.removeEventListener("visibilitychange",Oe),cancelAnimationFrame(Ge),u&&_.domElement&&u.removeChild(_.domElement),_.dispose(),M.dispose(),F.dispose(),D.dispose(),k.dispose(),W.dispose(),R.dispose(),w.dispose()}},[]),c.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:i?c.jsx("div",{ref:n,className:"w-full h-full"}):c.jsx("div",{className:"w-full h-full bg-lab-black flex items-center justify-center",children:c.jsx("div",{className:"w-72 h-72 rounded-full border border-lab-green/30 bg-lab-green/5 blur-3xl animate-pulse"})})})}class cw{constructor(){this.ctx=null,this.isPlaying=!1,this.masterGain=null,this.bubbleInterval=null}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}start(){if(this.init(),!this.ctx||(this.ctx.state==="suspended"&&this.ctx.resume(),this.isPlaying))return;this.isPlaying=!0;const e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createBiquadFilter(),r=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(55,this.ctx.currentTime),n.type="sine",n.frequency.setValueAtTime(110.5,this.ctx.currentTime),i.type="lowpass",i.frequency.setValueAtTime(140,this.ctx.currentTime),r.gain.setValueAtTime(.08,this.ctx.currentTime),e.connect(i),n.connect(i),i.connect(r),r.connect(this.masterGain),e.start(),n.start(),this.droneNodes=[e,n,r,i],this.scheduleBubbles()}scheduleBubbles(){if(!this.isPlaying)return;const e=()=>{if(!this.isPlaying||!this.ctx)return;try{const i=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain(),a=280+Math.random()*220,o=a+150+Math.random()*100;r.type="sine",r.frequency.setValueAtTime(a,i),r.frequency.exponentialRampToValueAtTime(o,i+.08),s.gain.setValueAtTime(1e-4,i),s.gain.linearRampToValueAtTime(.05,i+.02),s.gain.exponentialRampToValueAtTime(1e-4,i+.08),r.connect(s),s.connect(this.masterGain),r.start(i),r.stop(i+.09)}catch{}const n=400+Math.random()*1400;this.bubbleTimeout=setTimeout(e,n)};e()}stop(){this.isPlaying=!1,this.bubbleTimeout&&clearTimeout(this.bubbleTimeout),this.droneNodes&&(this.droneNodes.forEach(e=>{try{e.stop&&e.stop(),e.disconnect&&e.disconnect()}catch{}}),this.droneNodes=null),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}}const uw=new cw;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ke=(t,e)=>{const n=Te.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},f)=>Te.createElement("svg",{ref:f,...dw,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${fw(t)}`,o].join(" "),...u},[...e.map(([h,p])=>Te.createElement(h,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=Ke("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Ke("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Ke("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Ke("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=Ke("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Ke("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=Ke("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Ke("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=Ke("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=Ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=Ke("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=Ke("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=Ke("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=Ke("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=Ke("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=Ke("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=Ke("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=Ke("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=Ke("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Ke("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=Ke("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=Ke("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Ke("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=Ke("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Ke("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=Ke("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Ke("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=Ke("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=Ke("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=Ke("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=Ke("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=Ke("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=Ke("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=Ke("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Lw({activeSection:t="hero"}){const[e,n]=Te.useState(!1),[i,r]=Te.useState(!1),[s,a]=Te.useState(!1);Te.useEffect(()=>{const f=()=>{a(window.scrollY>40)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const o=()=>{const f=uw.toggle();n(f)},l=[{id:"hero",label:"THE LAB",num:"01"},{id:"about",label:"DOSSIER",num:"02"},{id:"projects",label:"EXPERIMENTS",num:"03"},{id:"skills",label:"THE FORMULA",num:"04"},{id:"creative",label:"CREATIVE LAB",num:"05"},{id:"contact",label:"TRANSMIT",num:"06"}],u=f=>{const h=document.getElementById(f);h&&h.scrollIntoView({behavior:"smooth"}),r(!1)};return c.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${s?"bg-lab-black/90 backdrop-blur-md border-b border-lab-border py-3 shadow-lg":"bg-transparent py-5"}`,children:[c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[c.jsxs("button",{onClick:()=>u("hero"),className:"flex items-center gap-2 group cursor-pointer text-left",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsxs("div",{className:"w-8 h-9 bg-lab-charcoal border border-lab-green group-hover:border-lab-toxic rounded-sm flex flex-col justify-between p-1 transition-all shadow-glow-sm",children:[c.jsx("span",{className:"text-[7px] font-mono text-lab-muted leading-none",children:"24"}),c.jsx("span",{className:"text-sm font-cinematic text-lab-green group-hover:text-lab-toxic leading-none font-bold",children:"Ma"}),c.jsx("span",{className:"text-[5px] font-mono text-lab-sand uppercase leading-none",children:"Mayank"})]}),c.jsxs("div",{className:"w-8 h-9 bg-lab-charcoal border border-lab-toxic group-hover:border-lab-sand rounded-sm flex flex-col justify-between p-1 transition-all shadow-glow-sm",children:[c.jsx("span",{className:"text-[7px] font-mono text-lab-muted leading-none",children:"52"}),c.jsx("span",{className:"text-sm font-cinematic text-lab-toxic group-hover:text-lab-sand leading-none font-bold",children:"Sh"}),c.jsx("span",{className:"text-[5px] font-mono text-lab-sand uppercase leading-none",children:"Sharma"})]})]}),c.jsxs("div",{className:"hidden sm:flex flex-col",children:[c.jsxs("span",{className:"text-xs font-mono font-bold tracking-widest text-white group-hover:text-lab-green transition-colors",children:["MAYANK",c.jsx("span",{className:"text-lab-toxic",children:"®"})]}),c.jsx("span",{className:"text-[9px] font-mono tracking-wider text-lab-muted",children:"NST // AI & ML LAB"})]})]}),c.jsx("div",{className:"hidden lg:flex items-center gap-6",children:l.map(f=>{const h=t===f.id;return c.jsxs("button",{onClick:()=>u(f.id),className:`text-xs font-mono tracking-widest uppercase transition-all duration-200 flex items-center gap-1.5 py-1 px-2 rounded-sm cursor-pointer ${h?"text-lab-toxic border-b-2 border-lab-toxic font-bold":"text-lab-muted hover:text-white hover:border-b-2 hover:border-lab-green/50"}`,children:[c.jsxs("span",{className:"text-[10px] text-lab-green/70",children:[f.num,"."]}),c.jsx("span",{children:f.label})]},f.id)})}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("div",{className:"hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-lab-charcoal/80 border border-lab-border text-[10px] font-mono",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lab-green animate-pulse"}),c.jsx("span",{className:"text-lab-muted",children:"PURITY:"}),c.jsx("span",{className:"text-lab-toxic font-bold",children:"99.1%"})]}),c.jsx("button",{onClick:o,className:`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono transition-all duration-300 cursor-pointer ${e?"bg-lab-green/10 border-lab-green text-lab-toxic shadow-glow-sm":"bg-lab-charcoal border-lab-border text-lab-muted hover:text-white hover:border-lab-muted"}`,title:"Toggle Atmospheric Chemical Soundscape",children:e?c.jsxs(c.Fragment,{children:[c.jsx(Cw,{size:14,className:"text-lab-toxic animate-bounce"}),c.jsx("span",{className:"hidden sm:inline",children:"LAB SOUND [ACTIVE]"}),c.jsxs("div",{className:"flex items-end gap-0.5 h-3 ml-1",children:[c.jsx("div",{className:"w-0.5 bg-lab-toxic h-full animate-[pulse_0.4s_infinite]"}),c.jsx("div",{className:"w-0.5 bg-lab-green h-2 animate-[pulse_0.6s_infinite]"}),c.jsx("div",{className:"w-0.5 bg-lab-toxic h-3 animate-[pulse_0.5s_infinite]"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx(Rw,{size:14}),c.jsx("span",{className:"hidden sm:inline",children:"LAB SOUND [OFF]"})]})}),c.jsx("button",{onClick:()=>r(!i),className:"lg:hidden p-2 rounded bg-lab-charcoal border border-lab-border text-lab-muted hover:text-white","aria-label":"Toggle Navigation",children:i?c.jsx(p0,{size:20}):c.jsx(Ew,{size:20})})]})]}),i&&c.jsx("div",{className:"lg:hidden bg-lab-black/95 border-b border-lab-border px-4 py-6 mt-2 backdrop-blur-xl animate-fadeIn",children:c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"flex items-center gap-2 pb-3 border-b border-lab-border/40 text-xs font-mono text-lab-toxic",children:[c.jsx(h0,{size:14}),c.jsx("span",{children:"CLASSIFIED NAVIGATION LOG"})]}),l.map(f=>{const h=t===f.id;return c.jsxs("button",{onClick:()=>u(f.id),className:`flex items-center justify-between py-2.5 px-3 rounded text-left text-sm font-mono tracking-wider transition-colors ${h?"bg-lab-charcoal text-lab-toxic font-bold border-l-2 border-lab-toxic":"text-lab-muted hover:text-white hover:bg-lab-charcoal/50"}`,children:[c.jsxs("span",{className:"flex items-center gap-2",children:[h&&c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lab-toxic animate-pulse"}),c.jsx("span",{children:f.label})]}),c.jsx("span",{className:"text-xs text-lab-green/70",children:f.num})]},f.id)})]})})]})}function Pw(){const t=()=>{const n=document.getElementById("about");n&&n.scrollIntoView({behavior:"smooth"})},e=()=>{const n=document.getElementById("projects");n&&n.scrollIntoView({behavior:"smooth"})};return c.jsxs("section",{id:"hero",className:"relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-auto",children:[c.jsxs("div",{className:"w-full flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/70 pb-4 text-[11px] font-mono text-lab-muted",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("span",{className:"flex items-center gap-2 text-lab-toxic font-bold",children:[c.jsxs("span",{className:"relative flex h-2 w-2",children:[c.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-toxic opacity-75"}),c.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-lab-toxic"})]}),"LIVE EXPERIMENT: ACTIVE"]}),c.jsx("span",{className:"text-lab-border font-light",children:"|"}),c.jsx("span",{className:"hidden sm:inline text-lab-sand font-medium",children:"SYSTEM CODE: BB-NST-01"})]}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("span",{className:"text-lab-muted",children:["LOC: ",c.jsx("span",{className:"text-white font-semibold",children:"NST CAMPUS // IN"})]}),c.jsx("span",{className:"text-lab-border",children:"|"}),c.jsxs("span",{className:"text-lab-muted",children:["SPEC: ",c.jsx("span",{className:"text-lab-toxic font-semibold",children:"AI & MACHINE LEARNING"})]})]})]}),c.jsxs("div",{className:"my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[c.jsxs("div",{className:"lg:col-span-8 flex flex-col items-start relative z-10",children:[c.jsx("div",{className:"absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-lab-black/95 via-lab-black/80 to-transparent -z-10 rounded-2xl pointer-events-none backdrop-blur-[2px]"}),c.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-lab-charcoal/95 border border-lab-border text-xs font-mono text-lab-sand mb-6 backdrop-blur-md shadow-glow-sm",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-lab-green shadow-[0_0_8px_#80CC28]"}),c.jsx("span",{className:"tracking-widest uppercase font-semibold",children:"Newton School of Technology • B.Tech CSE"})]}),c.jsxs("div",{className:"space-y-1.5 mb-6",children:[c.jsx("div",{className:"flex items-center gap-2.5",children:c.jsx("span",{className:"text-xs font-mono tracking-[0.35em] text-lab-toxic uppercase font-bold",children:"// EXPERIMENT COMMENCING • MAYANK®"})}),c.jsxs("h1",{className:"text-5xl sm:text-7xl lg:text-8xl font-cinematic uppercase tracking-tight text-white leading-[0.92] drop-shadow-lg",children:["MAYANK IS ",c.jsx("span",{className:"text-lab-green glow-text inline-block",children:"IN THE LAB."})]})]}),c.jsxs("p",{className:"text-lg sm:text-xl lg:text-2xl text-gray-200 font-sans font-light max-w-2xl leading-relaxed mb-8 drop-shadow-sm",children:[c.jsx("strong",{className:"text-white font-medium",children:"Engineering ideas."})," Experimenting with technology."," ",c.jsx("span",{className:"text-lab-sand font-medium",children:"Building what's next."})," Exploring the boundary between"," ",c.jsx("span",{className:"text-lab-toxic font-normal underline decoration-lab-toxic/50 underline-offset-4",children:"Creative 3D Web Experiences"}),","," ",c.jsx("span",{className:"text-lab-green font-normal underline decoration-lab-green/50 underline-offset-4",children:"Artificial Intelligence"}),", and production systems."]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl mb-10 text-xs font-mono",children:[c.jsxs("div",{className:"p-3.5 bg-lab-card/95 border border-lab-border hover:border-lab-green/60 rounded-sm backdrop-blur-md transition-all hover:shadow-glow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 text-lab-green mb-1.5 font-bold",children:[c.jsx(gw,{size:15}),c.jsx("span",{children:"CREATIVE 3D WEB"})]}),c.jsx("p",{className:"text-gray-300 text-[11px] leading-relaxed",children:"Three.js, WebGL procedural shaders & Awwwards-grade digital interfaces."})]}),c.jsxs("div",{className:"p-3.5 bg-lab-card/95 border border-lab-border hover:border-lab-toxic/60 rounded-sm backdrop-blur-md transition-all hover:shadow-glow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 text-lab-toxic mb-1.5 font-bold",children:[c.jsx(pf,{size:15}),c.jsx("span",{children:"AI / ML PROTOCOLS"})]}),c.jsx("p",{className:"text-gray-300 text-[11px] leading-relaxed",children:"Neural architectures, PyTorch pipelines & real-world intelligent software."})]}),c.jsxs("div",{className:"p-3.5 bg-lab-card/95 border border-lab-border hover:border-lab-sand/60 rounded-sm backdrop-blur-md transition-all hover:shadow-glow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 text-lab-sand mb-1.5 font-bold",children:[c.jsx(Tw,{size:15}),c.jsx("span",{children:"SSB CANDIDATE"})]}),c.jsx("p",{className:"text-gray-300 text-[11px] leading-relaxed",children:"Conference Out veteran: military composure, mental stamina & high-pressure discipline."})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[c.jsxs("button",{onClick:t,className:"px-8 py-4 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-xl tracking-wider uppercase transition-all duration-300 shadow-glow-green hover:shadow-[0_0_35px_rgba(181,232,83,0.55)] flex items-center gap-3 cursor-pointer group active:scale-95",children:[c.jsx("span",{children:"ENTER THE LAB"}),c.jsx(hw,{size:20,className:"transition-transform group-hover:translate-x-1 group-hover:translate-y-1"})]}),c.jsxs("button",{onClick:e,className:"px-7 py-4 bg-lab-charcoal/90 hover:bg-lab-card border border-lab-border hover:border-lab-toxic text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer backdrop-blur-sm active:scale-95",children:[c.jsx(Ua,{size:16,className:"text-lab-green"}),c.jsx("span",{children:"EXPLORE MY EXPERIMENTS"})]})]})]}),c.jsx("div",{className:"hidden lg:flex lg:col-span-4 flex-col items-end justify-center pointer-events-none",children:c.jsxs("div",{className:"p-5 bg-lab-card/80 border border-lab-border/70 rounded-sm backdrop-blur-md space-y-3 max-w-xs text-xs font-mono shadow-2xl",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-lab-border/50 pb-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-lab-toxic font-bold",children:[c.jsx(c0,{size:14,className:"animate-pulse"}),c.jsx("span",{children:"SPECTROMETER"})]}),c.jsx("span",{className:"text-lab-sand text-[10px]",children:"REAL-TIME"})]}),c.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-lab-muted",children:"VESSEL:"}),c.jsx("span",{className:"text-white font-medium",children:"BOROSILICATE 1000ml"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-lab-muted",children:"REAGENT:"}),c.jsx("span",{className:"text-lab-green font-medium",children:"C₁₀H₁₅N (TOXIC LIME)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-lab-muted",children:"PURITY:"}),c.jsx("span",{className:"text-lab-toxic font-bold",children:"99.1% HOMOGENEOUS"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-lab-muted",children:"FUMES:"}),c.jsx("span",{className:"text-lab-sand font-medium",children:"VOLUMETRIC ACTIVE"})]})]}),c.jsxs("div",{className:"pt-2 border-t border-lab-border/40 text-[9px] text-lab-muted/80 uppercase tracking-widest flex items-center justify-between",children:[c.jsx("span",{children:"ORBITAL PARALLAX"}),c.jsx("span",{className:"text-lab-green",children:"[ENGAGED]"})]})]})})]}),c.jsxs("div",{className:"pt-8 border-t border-lab-border/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-lab-muted",children:[c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] block text-lab-muted/70",children:"REACTION VESSEL"}),c.jsx("span",{className:"text-white font-semibold",children:"BOROSILICATE FLASK 1000ml"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] block text-lab-muted/70",children:"COMPOUND MATRIX"}),c.jsx("span",{className:"text-lab-green font-semibold",children:"C₁₀H₁₅N • SYNTHETIC 3D"})]}),c.jsxs("div",{className:"hidden sm:block",children:[c.jsx("span",{className:"text-[10px] block text-lab-muted/70",children:"BATCH STATUS"}),c.jsx("span",{className:"text-lab-toxic font-bold",children:"99.1% HOMOGENEOUS"})]})]}),c.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-lab-sand hover:text-white transition-colors cursor-pointer text-xs group",children:[c.jsx("span",{children:"SCROLL TO PROCEED"}),c.jsx("span",{className:"animate-bounce group-hover:text-lab-toxic",children:"↓"})]})]})]})}function Iw(){const[t,e]=Te.useState("dossier"),[n,i]=Te.useState(null),r=[{id:"dossier",label:"CLASSIFIED PROFILE",icon:yw,num:"01"},{id:"timeline",label:"JOURNEY TIMELINE",icon:lm,num:"02"},{id:"aiml",label:"AI & ML PROTOCOL",icon:yl,num:"03"},{id:"ssb",label:"SSB RESILIENCE LOG",icon:vw,num:"04"}],s=[{phase:"PHASE 01",period:"GENESIS & CURIOSITY",title:"FOUNDATIONS OF CODE & COMPUTATION",tag:"EARLY EXPLORATION",status:"COMPLETED",description:"First ignition of interest in computing and problem-solving. Learned fundamental computational thinking, algorithmic logic, and started experimenting with Python programming to build small scripts and utilities.",reagents:["Python Fundamentals","Algorithmic Logic","Data Structures Intro","Linux Basics"]},{phase:"PHASE 02",period:"2024 — PRESENT",title:"NEWTON SCHOOL OF TECHNOLOGY (NST)",tag:"B.TECH DEGREE",status:"ACTIVE IN PROGRESS",description:"Admitted into the B.Tech Computer Science Engineering program at Newton School of Technology. Immersion into production-first software development, real-world team collaboration, system design, and rigorous engineering practices.",reagents:["B.Tech CSE Core","Modern Web Architectures","Git & GitHub Collaboration","Computer Architecture"]},{phase:"PHASE 03",period:"ACTIVE RESEARCH",title:"AI & MACHINE LEARNING SPECIALIZATION",tag:"ACADEMIC FOCUS",status:"SPECIALIZING",description:"Diving deep into the mathematical foundations and applied frameworks of Artificial Intelligence. Experimenting with PyTorch neural network layers, linear algebra, computer vision algorithms, and predictive modeling for real-world utility.",reagents:["PyTorch","scikit-learn","Computer Vision (OpenCV)","Neural Net Architectures","Pandas & NumPy"]},{phase:"PHASE 04",period:"MILESTONE ASSESSMENT",title:"SERVICES SELECTION BOARD (SSB)",tag:"TACTICAL GRIT",status:"CONFERENCE OUT",description:"Underwent the rigorous 5-day psychological, tactical, and leadership assessment of the Services Selection Board. Reached the final Conference Out milestone — a transformative crucible that forged discipline, crisis management, and emotional resilience.",reagents:["Crisis Decision Making","Psychological Stamina","Group Dynamics Leadership","High-Pressure Composure"]},{phase:"PHASE 05",period:"CURRENT EXPERIMENTATION",title:"CREATIVE 3D WEB & EXPERIMENTAL INTERFACES",tag:"LABORATORY PURSUIT",status:"ACTIVE EXPLORATION",description:"Exploring the fusion of creative web development, Three.js 3D graphics, procedural WebGL shaders, and AI. Driven by the philosophy that software should feel cinematic, tangible, and awe-inspiring rather than flat and generic.",reagents:["Three.js","WebGL Shaders","React Ecosystem","Web Audio API","Awwwards UI/UX Principles"]}];return c.jsxs("section",{id:"about",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[c.jsxs("div",{className:"mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic",children:[c.jsx("span",{className:"w-8 h-[1px] bg-lab-toxic"}),c.jsx("span",{children:"LABORATORY DOSSIER // SECTION 02"})]}),c.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none",children:["THE MIND BEHIND ",c.jsx("span",{className:"text-lab-green glow-text",children:"THE EXPERIMENT."})]}),c.jsx("p",{className:"text-sm font-mono text-lab-sand mt-3 max-w-2xl",children:"[RESTRICTED ACCESS • CLASSIFIED PERSONNEL FILE] SUBJECT: MAYANK SHARMA • NST // AI & ML LAB"})]}),c.jsxs("div",{className:"hidden sm:flex items-center gap-3 bg-lab-charcoal/80 border border-lab-border px-4 py-2 rounded-sm text-xs font-mono",children:[c.jsx(dm,{size:18,className:"text-lab-toxic animate-pulse"}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] block text-lab-muted",children:"CLEARANCE PROTOCOL"}),c.jsx("span",{className:"text-white font-bold",children:"LEVEL 4 • AUTHENTICATED"})]})]})]}),c.jsxs("div",{className:"bg-lab-card border border-lab-border rounded-sm shadow-2xl overflow-hidden relative",children:[c.jsxs("div",{className:"bg-gradient-to-r from-lab-charcoal via-lab-border/70 to-lab-charcoal px-6 py-3 flex flex-wrap items-center justify-between text-[11px] font-mono border-b border-lab-border",children:[c.jsxs("div",{className:"flex items-center gap-3 text-lab-amber font-bold",children:[c.jsx("span",{className:"px-2 py-0.5 bg-lab-amber/20 border border-lab-amber/50 rounded text-[10px] tracking-wider uppercase",children:"CLASSIFIED DOSSIER"}),c.jsx("span",{className:"text-white",children:"DOSSIER NO: EXP-MS-001"})]}),c.jsxs("div",{className:"flex items-center gap-4 text-lab-muted text-[10px]",children:[c.jsx("span",{children:"SECURITY HASH: 99.1-HOMOGENEOUS"}),c.jsxs("span",{className:"text-lab-green font-semibold flex items-center gap-1.5",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lab-green animate-ping"}),"STATUS: ACTIVE IN THE LAB"]})]})]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 border-b border-lab-border bg-lab-black/70",children:r.map(a=>{const o=a.icon,l=t===a.id;return c.jsxs("button",{onClick:()=>e(a.id),className:`py-4 px-4 text-xs font-mono flex items-center justify-center gap-2.5 transition-all cursor-pointer border-r border-lab-border last:border-r-0 ${l?"bg-lab-card text-lab-toxic border-b-2 border-b-lab-toxic font-bold shadow-inner":"text-lab-muted hover:text-white hover:bg-lab-charcoal/60"}`,children:[c.jsxs("span",{className:"text-[10px] text-lab-green/70",children:[a.num,"."]}),c.jsx(o,{size:15,className:l?"text-lab-toxic":"text-lab-muted"}),c.jsx("span",{className:"truncate tracking-wider",children:a.label})]},a.id)})}),c.jsxs("div",{className:"p-6 sm:p-10 lg:p-12",children:[t==="dossier"&&c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",children:[c.jsxs("div",{className:"lg:col-span-5 bg-lab-charcoal/80 border border-lab-border p-6 sm:p-7 rounded-sm space-y-6 relative overflow-hidden",children:[c.jsx("div",{className:"absolute -right-6 -bottom-6 text-lab-green/5 select-none pointer-events-none font-cinematic text-9xl",children:"LAB"}),c.jsxs("div",{className:"flex items-center justify-between border-b border-lab-border/70 pb-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsxs("div",{className:"w-10 h-11 bg-lab-black border border-lab-green rounded-sm flex flex-col justify-between p-1 shadow-glow-sm",children:[c.jsx("span",{className:"text-[7px] font-mono text-lab-muted leading-none",children:"24"}),c.jsx("span",{className:"text-base font-cinematic text-lab-green leading-none font-bold",children:"Ma"}),c.jsx("span",{className:"text-[5px] font-mono text-lab-sand uppercase leading-none",children:"Mayank"})]}),c.jsxs("div",{className:"w-10 h-11 bg-lab-black border border-lab-toxic rounded-sm flex flex-col justify-between p-1 shadow-glow-sm",children:[c.jsx("span",{className:"text-[7px] font-mono text-lab-muted leading-none",children:"52"}),c.jsx("span",{className:"text-base font-cinematic text-lab-toxic leading-none font-bold",children:"Sh"}),c.jsx("span",{className:"text-[5px] font-mono text-lab-sand uppercase leading-none",children:"Sharma"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-cinematic uppercase tracking-wider text-white",children:"MAYANK SHARMA"}),c.jsx("p",{className:"text-[10px] font-mono text-lab-sand",children:"BRAND CALLSIGN: MAYANK®"})]})]}),c.jsx("span",{className:"px-2 py-0.5 text-[9px] font-mono bg-lab-green/20 text-lab-green border border-lab-green/40 rounded uppercase font-bold tracking-wider",children:"AUTHENTIC"})]}),c.jsxs("div",{className:"space-y-3 text-xs font-mono",children:[c.jsxs("div",{className:"flex justify-between py-1.5 border-b border-lab-border/40",children:[c.jsx("span",{className:"text-lab-muted",children:"ACADEMIC PROGRAM:"}),c.jsx("span",{className:"text-white font-medium text-right",children:"B.Tech Computer Science"})]}),c.jsxs("div",{className:"flex justify-between py-1.5 border-b border-lab-border/40",children:[c.jsx("span",{className:"text-lab-muted",children:"INSTITUTION:"}),c.jsx("span",{className:"text-lab-toxic font-semibold text-right",children:"Newton School of Technology"})]}),c.jsxs("div",{className:"flex justify-between py-1.5 border-b border-lab-border/40",children:[c.jsx("span",{className:"text-lab-muted",children:"SPECIALIZATION:"}),c.jsx("span",{className:"text-lab-green font-medium text-right",children:"Artificial Intelligence & ML"})]}),c.jsxs("div",{className:"flex justify-between py-1.5 border-b border-lab-border/40",children:[c.jsx("span",{className:"text-lab-muted",children:"TECHNICAL INTERESTS:"}),c.jsx("span",{className:"text-white text-right",children:"3D Web, AI & Real Systems"})]}),c.jsxs("div",{className:"flex justify-between py-1.5 border-b border-lab-border/40",children:[c.jsx("span",{className:"text-lab-muted",children:"SSB RECORD:"}),c.jsx("span",{className:"text-lab-sand font-medium text-right",children:"Conference Out (Resilience Verified)"})]}),c.jsxs("div",{className:"flex justify-between py-1.5 border-b border-lab-border/40",children:[c.jsx("span",{className:"text-lab-muted",children:"LOCATION:"}),c.jsx("span",{className:"text-white text-right",children:"NST Campus, India"})]})]}),c.jsxs("div",{className:"pt-2 flex items-center justify-between border-t border-lab-border/50 text-lab-muted",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(dm,{size:24,className:"text-lab-green/70"}),c.jsxs("div",{className:"text-[9px] font-mono leading-tight",children:[c.jsx("span",{children:"BIOMETRIC HASH"}),c.jsx("span",{className:"block text-white font-mono tracking-widest",children:"NST-2024-MS"})]})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("div",{className:"font-mono text-[9px] text-lab-sand tracking-widest font-bold",children:"|||| | ||| ||||| ||"}),c.jsx("span",{className:"text-[8px] text-lab-muted font-mono",children:"SPECIMEN ID-001"})]})]}),c.jsxs("div",{className:"pt-2 flex flex-wrap gap-2 justify-end",children:[c.jsx("div",{className:"border border-lab-green/70 text-lab-green uppercase font-mono text-[9px] font-bold px-2.5 py-0.5 rounded rotate-[-2deg] tracking-wider bg-lab-green/10",children:"PURITY: 99.1%"}),c.jsx("div",{className:"border border-lab-toxic/70 text-lab-toxic uppercase font-mono text-[9px] font-bold px-2.5 py-0.5 rounded rotate-[1deg] tracking-wider bg-lab-toxic/10",children:"SSB VETERAN"})]})]}),c.jsxs("div",{className:"lg:col-span-7 space-y-6 text-sm font-sans leading-relaxed text-gray-300",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-lab-sand",children:[c.jsx(Ua,{size:14,className:"text-lab-green"}),c.jsx("span",{children:"EXECUTIVE RESEARCHER STATEMENT"})]}),c.jsx("h3",{className:"text-3xl sm:text-4xl font-cinematic text-white tracking-wide uppercase leading-tight",children:"ENGINEERING AT THE INTERSECTION OF CREATIVITY, COMPUTATION & ARTIFICIAL INTELLIGENCE."}),c.jsxs("p",{className:"text-base text-gray-200 leading-relaxed font-light",children:["I am a Computer Science Engineering student at ",c.jsx("strong",{className:"text-white font-semibold",children:"Newton School of Technology"}),", specializing in ",c.jsx("span",{className:"text-lab-toxic font-medium",children:"Artificial Intelligence and Machine Learning"}),"."]}),c.jsxs("p",{children:["My laboratory work focuses on breaking away from predictable, templated web experiences. By synthesizing ",c.jsx("span",{className:"text-lab-green font-medium",children:"creative 3D web development (Three.js & WebGL)"})," with robust machine learning backends, I explore how software can engage users as an interactive, cinematic medium while solving genuine engineering challenges."]}),c.jsxs("p",{children:["My foundational mindset was tested and reinforced through the comprehensive 5-day assessment of the ",c.jsx("strong",{className:"text-lab-sand font-medium",children:"Services Selection Board (SSB)"}),". Emerging as a Conference Out candidate solidified my approach to software engineering: tactical composure under pressure, uncompromising intellectual honesty, and the mental stamina to continuously iterate and refine until the code runs with total precision."]}),c.jsxs("div",{className:"pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono",children:[c.jsxs("div",{className:"p-3.5 bg-lab-charcoal/70 border border-lab-border rounded-sm",children:[c.jsx("span",{className:"text-lab-toxic block font-bold mb-1",children:"// PHILOSOPHY"}),c.jsx("p",{className:"text-lab-muted text-[11px] leading-relaxed",children:"Build tangible, real-world systems. Theory is only as valuable as the production software it powers."})]}),c.jsxs("div",{className:"p-3.5 bg-lab-charcoal/70 border border-lab-border rounded-sm",children:[c.jsx("span",{className:"text-lab-green block font-bold mb-1",children:"// SPECIALIZATION"}),c.jsx("p",{className:"text-lab-muted text-[11px] leading-relaxed",children:"AI/ML architectures, PyTorch pipelines, procedural 3D WebGL environments & responsive UI/UX."})]})]}),c.jsxs("div",{className:"pt-2 flex flex-wrap gap-2 text-xs font-mono",children:[c.jsx("span",{className:"px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-sand rounded-sm",children:"#NewtonSchoolOfTech"}),c.jsx("span",{className:"px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-green rounded-sm",children:"#ThreeJS"}),c.jsx("span",{className:"px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded-sm",children:"#AIMLSpecialist"}),c.jsx("span",{className:"px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-muted rounded-sm",children:"#ConferenceOut"})]})]})]}),t==="timeline"&&c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/60 pb-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2.5 bg-lab-green/10 border border-lab-green rounded text-lab-green",children:c.jsx(lm,{size:22})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-cinematic text-white uppercase tracking-wider",children:"EDUCATION & EXPERIMENTAL TIMELINE"}),c.jsx("p",{className:"text-xs font-mono text-lab-sand",children:"CHRONOLOGICAL LOG OF TECHNICAL EVOLUTION • AUTHENTIC STAGES"})]})]}),c.jsxs("div",{className:"text-xs font-mono text-lab-muted",children:[c.jsx("span",{children:"TOTAL LOGGED PHASES: "}),c.jsx("span",{className:"text-lab-toxic font-bold",children:"05 MILESTONES"})]})]}),c.jsx("div",{className:"relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-lab-green before:via-lab-toxic before:to-lab-border",children:s.map((a,o)=>{const l=n===o;return c.jsxs("div",{onMouseEnter:()=>i(o),onMouseLeave:()=>i(null),className:`relative p-5 sm:p-6 bg-lab-charcoal/70 border transition-all duration-300 rounded-sm ${l?"border-lab-toxic bg-lab-charcoal shadow-glow-sm translate-x-1":"border-lab-border hover:border-lab-green/60"}`,children:[c.jsx("div",{className:`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${l?"bg-lab-toxic border-white shadow-[0_0_12px_#B5E853] scale-125":"bg-lab-black border-lab-green"}`,children:c.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-lab-green"})}),c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono",children:[c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("span",{className:"px-2 py-0.5 bg-lab-black border border-lab-border text-lab-toxic font-bold rounded text-[10px]",children:a.phase}),c.jsx("span",{className:"text-white font-medium",children:a.period})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("span",{className:"text-lab-sand text-[10px] uppercase font-bold tracking-wider",children:["[",a.tag,"]"]}),c.jsx("span",{className:"px-2 py-0.5 rounded text-[9px] bg-lab-green/20 text-lab-green border border-lab-green/30 font-bold",children:a.status})]})]}),c.jsx("h4",{className:"text-xl sm:text-2xl font-cinematic uppercase tracking-wide text-white mb-2",children:a.title}),c.jsx("p",{className:"text-sm font-sans text-gray-300 leading-relaxed mb-4",children:a.description}),c.jsxs("div",{className:"pt-2 border-t border-lab-border/40 flex flex-wrap items-center gap-2",children:[c.jsx("span",{className:"text-[10px] font-mono text-lab-muted uppercase font-bold",children:"REAGENTS / KEY LEARNINGS:"}),a.reagents.map(u=>c.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 bg-lab-black border border-lab-border text-lab-toxic rounded-sm",children:["+",u]},u))]})]},a.phase)})})]}),t==="aiml"&&c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-lab-border/60 pb-4",children:[c.jsx("div",{className:"p-2.5 bg-lab-toxic/10 border border-lab-toxic rounded text-lab-toxic",children:c.jsx(yl,{size:22})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-cinematic text-white uppercase tracking-wider",children:"ARTIFICIAL INTELLIGENCE & MACHINE LEARNING CURRICULUM"}),c.jsx("p",{className:"text-xs font-mono text-lab-toxic",children:"NEWTON SCHOOL OF TECHNOLOGY • SPECIALIZED ENGINEERING DOMAIN"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono",children:[c.jsxs("div",{className:"p-5 bg-lab-charcoal/70 border border-lab-border hover:border-lab-green rounded-sm space-y-3 transition-colors",children:[c.jsx("span",{className:"text-lab-green text-sm font-bold block",children:"// 01. MATHEMATICAL MODELING"}),c.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Mastering linear algebra, multivariate calculus, probability distributions, loss function surfaces, and convex optimization driving neural convergence."}),c.jsx("div",{className:"pt-2 text-[10px] text-lab-sand",children:"TOOLS: Python, NumPy, SciPy, Jupyter"})]}),c.jsxs("div",{className:"p-5 bg-lab-charcoal/70 border border-lab-border hover:border-lab-toxic rounded-sm space-y-3 transition-colors",children:[c.jsx("span",{className:"text-lab-toxic text-sm font-bold block",children:"// 02. DEEP LEARNING & VISION"}),c.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Convolutional networks (CNNs), feature map extraction, spatial hand/face landmark analysis with OpenCV, and basic transformer mechanisms."}),c.jsx("div",{className:"pt-2 text-[10px] text-lab-sand",children:"TOOLS: PyTorch, OpenCV, MediaPipe"})]}),c.jsxs("div",{className:"p-5 bg-lab-charcoal/70 border border-lab-border hover:border-lab-sand rounded-sm space-y-3 transition-colors",children:[c.jsx("span",{className:"text-lab-sand text-sm font-bold block",children:"// 03. WEBGL + AI SYNTHESIS"}),c.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Bridging Python ML pipelines with real-time 3D interactive WebGL browser frontends to visualize latent topologies and deep representations interactively."}),c.jsx("div",{className:"pt-2 text-[10px] text-lab-sand",children:"TOOLS: Three.js, REST APIs, WebSockets"})]})]}),c.jsxs("div",{className:"p-5 bg-lab-black border border-lab-border rounded-sm",children:[c.jsxs("div",{className:"text-xs font-mono text-lab-green mb-1.5 flex items-center gap-2",children:[c.jsx(pf,{size:14}),c.jsx("span",{children:"CORE ENGINEERING APPROACH @ NST"})]}),c.jsx("p",{className:"text-sm font-sans text-gray-300 leading-relaxed",children:"“At Newton School of Technology, we treat machine learning not as a collection of black-box libraries, but as an engineering discipline rooted in mathematics, data integrity, and production reliability.”"})]})]}),t==="ssb"&&c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-lab-border/60 pb-4",children:[c.jsx("div",{className:"p-2.5 bg-lab-sand/10 border border-lab-sand rounded text-lab-sand",children:c.jsx(mw,{size:22})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-cinematic text-white uppercase tracking-wider",children:"THE SSB JOURNEY • CONFERENCE OUT EXPERIENCE"}),c.jsx("p",{className:"text-xs font-mono text-lab-sand",children:"SERVICES SELECTION BOARD • 5-DAY COMPREHENSIVE CRUCIBLE"})]})]}),c.jsxs("div",{className:"p-6 sm:p-7 bg-lab-charcoal/70 border border-lab-border rounded-sm space-y-5 text-sm text-gray-300 leading-relaxed",children:[c.jsx("p",{children:"The Services Selection Board (SSB) evaluation is one of the most comprehensive leadership and personality assessments in the world. Over 5 demanding days, candidates are evaluated across psychological tests, tactical Group Testing Officer (GTO) obstacle tasks, and extensive personal interviews."}),c.jsxs("p",{children:["Completing the entire battery of tests and reaching the final Conference as a ",c.jsx("strong",{className:"text-lab-sand font-mono font-bold",children:"“Conference Out”"})," candidate is a permanent badge of resilience and personal growth. It instilled virtues that directly influence my engineering discipline today:"]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono",children:[c.jsxs("div",{className:"p-4 bg-lab-black border border-lab-border rounded-sm space-y-2",children:[c.jsx("span",{className:"text-lab-toxic font-bold block text-sm",children:"> PSYCHOLOGICAL GRIT"}),c.jsx("p",{className:"text-lab-muted leading-relaxed",children:"Facing prolonged scrutiny with composure; separating self-worth from instant validation; analyzing feedback without ego."})]}),c.jsxs("div",{className:"p-4 bg-lab-black border border-lab-border rounded-sm space-y-2",children:[c.jsx("span",{className:"text-lab-green font-bold block text-sm",children:"> HIGH-PRESSURE CLARITY"}),c.jsx("p",{className:"text-lab-muted leading-relaxed",children:"Maintaining clear decision-making when timelines are short, parameters are ambiguous, and team dynamics are complex."})]}),c.jsxs("div",{className:"p-4 bg-lab-black border border-lab-border rounded-sm space-y-2",children:[c.jsx("span",{className:"text-lab-sand font-bold block text-sm",children:"> INTERNAL STANDARDS"}),c.jsx("p",{className:"text-lab-muted leading-relaxed",children:"A military-grade code of ethics: never cutting corners, owning mistakes immediately, and building systems that endure."})]})]})]})]})]}),c.jsxs("div",{className:"bg-lab-charcoal/50 border-t border-lab-border px-6 py-3 flex flex-wrap items-center justify-between text-[10px] font-mono text-lab-muted",children:[c.jsx("span",{children:"CLASSIFICATION: AUTHENTIC BIOGRAPHICAL FILE // NO INVENTED ACHIEVEMENTS"}),c.jsxs("span",{className:"text-lab-sand",children:["MAYANK® • NEWTON SCHOOL OF TECHNOLOGY • ",new Date().getFullYear()]})]})]})]})}function Dw(){const[t,e]=Te.useState(null),[n,i]=Te.useState("ALL"),r=[{id:"EXP-01",title:"MAYANK® 3D LAB PORTFOLIO",subtitle:"Cinematic Breaking Bad-Inspired 3D Portfolio Experience",description:"An interactive 3D digital laboratory environment built from scratch. Features parametric borosilicate glass physics, real-time chemical fluid meniscus rendering, volumetric smoke billboard dispersion, synthetic Web Audio atmospheric soundscapes, and responsive dark aesthetics.",status:"LIVE PRODUCTION",statusType:"live",purity:"99.1%",category:"3D & CREATIVE",tags:["Three.js","React","WebGL","TailwindCSS","Web Audio API","Vite"],github:"https://github.com/mayanksharma",githubPlaceholder:!1,demo:"#",demoPlaceholder:!1,demoNote:"Currently Active in this Viewport",highlights:["Custom LatheGeometry borosilicate flask with physical transmission glass shaders","Multi-frequency Web Audio API ambient drone and procedural chemical bubble synthesizer","Responsive 3D orbital camera and mouse parallax mechanics","Zero bloated dependencies — high performance 60fps rendering"],specNote:"Flagship personal creative web development experiment combining Three.js 3D with the cinematic Breaking Bad aesthetic."},{id:"EXP-02",title:"NEURAL SYNTHESIS LAB & ML WORKFLOWS",subtitle:"Deep Learning & Neural Network Explorations at NST",description:"Academic laboratory exploration in Artificial Intelligence and Machine Learning developed during the B.Tech CSE coursework at Newton School of Technology. Focuses on neural network layer activation analysis, gradient descent optimization, and data pipelines.",status:"ACTIVE RESEARCH",statusType:"research",purity:"98.5%",category:"AI & ML",tags:["Python","PyTorch","scikit-learn","NumPy","Pandas"],github:"#",githubPlaceholder:!0,githubPlaceholderText:"[PLACEHOLDER: Add your GitHub Repository URL]",demo:"#",demoPlaceholder:!0,demoPlaceholderText:"[PLACEHOLDER: Add your Notebook or Demo Link]",demoNote:"Prototype Notebook / Lab Environment",highlights:["Evaluation of feedforward and convolutional neural architectures","Data preprocessing, feature normalization, and loss curve monitoring","Implementation of regression and classification models in PyTorch and scikit-learn","Exploration of loss landscapes and hyperparameter tuning"],specNote:"Core laboratory experiment in AI & Machine Learning. Connect your repository URL here."},{id:"EXP-03",title:"NST CAMPUS UTILITY & WORKFLOWS",subtitle:"Student Schedule & Academic Resource System",description:"An exploratory software engineering utility designed for the Newton School of Technology campus ecosystem. Designed to assist students in timetable management, conflict detection across academic tracks, and contextual schedule queries.",status:"PROTOTYPE SPEC",statusType:"prototype",purity:"96.8%",category:"SYSTEMS",tags:["Python","React","REST APIs","FastAPI","TailwindCSS"],github:"#",githubPlaceholder:!0,githubPlaceholderText:"[PLACEHOLDER: Add your GitHub Repository URL]",demo:"#",demoPlaceholder:!0,demoPlaceholderText:"[PLACEHOLDER: Add your Live Project URL]",demoNote:"Prototype Specification Phase",highlights:["Modular REST API endpoints for academic schedule querying","Conflict resolution logic for overlapping lecture slots","Minimalist dark mode user interface designed for student productivity","Role-based permissions and session handling structure"],specNote:"Practical software engineering project built to address daily student scheduling at NST."},{id:"EXP-04",title:"COMPUTER VISION & SPATIAL INTERACTION",subtitle:"Real-Time Landmark Detection & Gesture Viewport Controller",description:"An experimental computer vision pipeline investigating touchless spatial hand tracking to manipulate 3D camera viewports. Evaluates coordinate smoothing and low-latency interaction models.",status:"EXPERIMENTAL",statusType:"experimental",purity:"95.2%",category:"AI & ML",tags:["Python","OpenCV","MediaPipe","Canvas API","JavaScript"],github:"#",githubPlaceholder:!0,githubPlaceholderText:"[PLACEHOLDER: Add your GitHub Repository URL]",demo:"#",demoPlaceholder:!0,demoPlaceholderText:"[PLACEHOLDER: Add your Demo URL or Video]",demoNote:"Research Experiment",highlights:["Sub-30ms landmark tracking for 21 discrete hand joints","Algorithmic coordinate dampening to filter out sensor noise and hand tremors","Spatial vector normalization for multi-axis rotation and pinch scaling","Exploratory bridge to client-side WebGL canvas manipulation"],specNote:"Experimental project testing the fusion of computer vision models with interactive 3D web environments."}],s=["ALL","3D & CREATIVE","AI & ML","SYSTEMS"],a=n==="ALL"?r:r.filter(o=>o.category===n);return c.jsxs("section",{id:"projects",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[c.jsxs("div",{className:"mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic",children:[c.jsx("span",{className:"w-8 h-[1px] bg-lab-toxic"}),c.jsx("span",{children:"LABORATORY EXPERIMENT LOG // SECTION 03"})]}),c.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none",children:["EXPERIMENTS ",c.jsx("span",{className:"text-lab-green glow-text",children:"// SELECTED BUILDS"})]}),c.jsx("p",{className:"text-sm font-mono text-lab-sand mt-3 max-w-2xl",children:"AUTHENTIC SPECIMEN LOGS • 3D WEB DEVELOPMENT, ARTIFICIAL INTELLIGENCE & SOFTWARE SYSTEMS"})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs font-mono",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-lab-muted mr-1",children:[c.jsx(Aw,{size:14,className:"text-lab-toxic"}),c.jsx("span",{className:"hidden sm:inline",children:"FILTER:"})]}),s.map(o=>c.jsx("button",{onClick:()=>i(o),className:`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${n===o?"bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm":"bg-lab-card/80 border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active"}`,children:o},o))]})]}),c.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch",children:a.map(o=>c.jsxs("div",{className:"group relative bg-lab-card/90 border border-lab-border hover:border-lab-green/80 rounded-sm p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lab-toxic to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-lab-border/50 pb-4 mb-5 text-xs font-mono",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"px-2.5 py-1 bg-lab-black border border-lab-border text-lab-sand font-bold rounded text-[11px] tracking-wider",children:o.id}),c.jsx("span",{className:"px-2 py-0.5 bg-lab-charcoal border border-lab-border text-lab-muted text-[10px] tracking-widest uppercase rounded",children:o.category})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:`w-2 h-2 rounded-full ${o.statusType==="live"?"bg-lab-toxic shadow-[0_0_8px_#B5E853] animate-pulse":o.statusType==="research"?"bg-lab-green":"bg-lab-sand"}`}),c.jsx("span",{className:"text-white font-semibold tracking-wider text-[11px]",children:o.status}),c.jsxs("span",{className:"text-lab-muted text-[10px]",children:["[",o.purity,"]"]})]})]}),c.jsx("h3",{className:"text-2xl sm:text-3xl font-cinematic uppercase tracking-wide text-white group-hover:text-lab-green transition-colors mb-1.5 leading-tight",children:o.title}),c.jsxs("p",{className:"text-xs font-mono text-lab-sand mb-4",children:["// ",o.subtitle]}),c.jsx("p",{className:"text-sm font-sans text-gray-300 leading-relaxed mb-6 font-light",children:o.description}),c.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:o.tags.map(l=>c.jsx("span",{className:"text-[11px] font-mono px-2.5 py-1 bg-lab-charcoal/90 border border-lab-border text-gray-300 rounded-sm group-hover:border-lab-border-active transition-colors",children:l},l))})]}),c.jsxs("div",{className:"pt-5 border-t border-lab-border/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono",children:[c.jsxs("button",{onClick:()=>e(o),className:"px-4 py-2.5 bg-lab-charcoal hover:bg-lab-green text-white hover:text-lab-black border border-lab-border hover:border-lab-green transition-all duration-200 flex items-center gap-2 rounded-sm cursor-pointer active:scale-95",children:[c.jsx(_w,{size:15}),c.jsx("span",{children:"INSPECT SPECIMEN"})]}),c.jsxs("div",{className:"flex items-center gap-2.5",children:[o.githubPlaceholder?c.jsxs("button",{onClick:()=>e(o),className:"px-3 py-2 bg-lab-black hover:bg-lab-charcoal border border-lab-border hover:border-lab-sand text-lab-muted hover:text-white rounded-sm transition-all flex items-center gap-1.5 text-[11px] cursor-pointer",title:o.githubPlaceholderText,children:[c.jsx(rd,{size:15}),c.jsx("span",{className:"hidden sm:inline",children:"REPO [EDIT]"})]}):c.jsxs("a",{href:o.github,target:"_blank",rel:"noreferrer",className:"px-3 py-2 bg-lab-black hover:bg-lab-charcoal border border-lab-border hover:border-lab-green text-gray-300 hover:text-white rounded-sm transition-all flex items-center gap-1.5 text-[11px]",title:"View GitHub Repository",children:[c.jsx(rd,{size:15}),c.jsx("span",{className:"hidden sm:inline",children:"GITHUB"})]}),o.demoPlaceholder?c.jsxs("button",{onClick:()=>e(o),className:"px-3.5 py-2 bg-lab-charcoal/80 border border-lab-border hover:border-lab-toxic text-lab-sand hover:text-white rounded-sm transition-all flex items-center gap-1.5 text-[11px] cursor-pointer",title:o.demoPlaceholderText,children:[c.jsx(um,{size:15}),c.jsx("span",{children:"DEMO [EDIT]"})]}):c.jsxs("a",{href:o.demo,className:"px-3.5 py-2 bg-lab-green/10 border border-lab-green hover:bg-lab-green hover:text-lab-black text-lab-toxic rounded-sm transition-all flex items-center gap-1.5 text-[11px] font-bold shadow-glow-sm",title:o.demoNote,children:[c.jsx(um,{size:15}),c.jsx("span",{children:"LIVE DEMO"})]})]})]})]},o.id))}),t&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-lab-black/90 backdrop-blur-md animate-fadeIn",children:c.jsxs("div",{className:"bg-lab-card border border-lab-green max-w-3xl w-full max-h-[92vh] overflow-y-auto rounded shadow-glow-green p-6 sm:p-8 relative",children:[c.jsx("button",{onClick:()=>e(null),className:"absolute top-6 right-6 p-2 rounded bg-lab-charcoal border border-lab-border text-lab-muted hover:text-white transition-colors cursor-pointer","aria-label":"Close Inspection Modal",children:c.jsx(p0,{size:20})}),c.jsxs("div",{className:"border-b border-lab-border/70 pb-4 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2.5 text-xs font-mono text-lab-toxic mb-1",children:[c.jsxs("span",{children:["// DETAILED LABORATORY LOG • ",t.id]}),c.jsx("span",{children:"•"}),c.jsx("span",{className:"text-lab-sand",children:t.category})]}),c.jsx("h3",{className:"text-3xl sm:text-4xl font-cinematic uppercase text-white tracking-wide",children:t.title}),c.jsx("p",{className:"text-xs font-mono text-lab-muted",children:t.subtitle})]}),c.jsxs("div",{className:"p-3.5 bg-lab-charcoal/80 border border-lab-border rounded mb-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-lab-green animate-pulse"}),c.jsxs("span",{className:"text-white",children:["STATUS: ",c.jsx("strong",{className:"text-lab-toxic",children:t.status})]})]}),c.jsxs("div",{className:"text-lab-sand",children:["CHEMICAL PURITY: ",c.jsx("span",{className:"text-white font-bold",children:t.purity})]})]}),c.jsxs("div",{className:"mb-6 space-y-2",children:[c.jsx("h4",{className:"text-xs font-mono uppercase text-lab-sand font-bold tracking-wider",children:"[PROJECT SPECIFICATION OVERVIEW]"}),c.jsx("p",{className:"text-sm font-sans text-gray-200 leading-relaxed font-light",children:t.description}),c.jsx("p",{className:"text-xs font-mono text-lab-muted italic",children:t.specNote})]}),c.jsxs("div",{className:"mb-6 space-y-3",children:[c.jsx("h4",{className:"text-xs font-mono uppercase text-lab-toxic font-bold tracking-wider",children:"[TECHNICAL HIGHLIGHTS & ARCHITECTURE]"}),c.jsx("ul",{className:"space-y-2.5 text-xs font-mono text-gray-300",children:t.highlights.map((o,l)=>c.jsxs("li",{className:"flex items-start gap-2.5",children:[c.jsx("span",{className:"text-lab-green font-bold",children:">"}),c.jsx("span",{children:o})]},l))})]}),c.jsxs("div",{className:"mb-6",children:[c.jsx("h4",{className:"text-xs font-mono uppercase text-lab-sand font-bold tracking-wider mb-2",children:"[TECHNOLOGY STACK & REAGENTS]"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(o=>c.jsxs("span",{className:"text-xs font-mono px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded",children:["+",o]},o))})]}),c.jsxs("div",{className:"p-4 bg-lab-black border border-lab-border rounded mb-6 text-xs font-mono space-y-2",children:[c.jsxs("div",{className:"text-lab-sand font-bold flex items-center gap-1.5",children:[c.jsx(u0,{size:14,className:"text-lab-green"}),c.jsx("span",{children:"LINK CONFIGURATION & PLACEHOLDER DIRECTIVE:"})]}),t.githubPlaceholder?c.jsxs("div",{className:"text-lab-muted",children:[c.jsx("span",{className:"text-white",children:"GitHub:"})," ",t.githubPlaceholderText]}):c.jsxs("div",{className:"text-lab-muted",children:[c.jsx("span",{className:"text-white",children:"GitHub:"})," ",c.jsx("a",{href:t.github,target:"_blank",rel:"noreferrer",className:"text-lab-toxic underline",children:t.github})]}),t.demoPlaceholder?c.jsxs("div",{className:"text-lab-muted",children:[c.jsx("span",{className:"text-white",children:"Live Demo:"})," ",t.demoPlaceholderText]}):c.jsxs("div",{className:"text-lab-muted",children:[c.jsx("span",{className:"text-white",children:"Live Demo:"})," ",c.jsx("span",{className:"text-lab-green",children:t.demoNote})]})]}),c.jsxs("div",{className:"pt-4 border-t border-lab-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono",children:[c.jsx("span",{className:"text-lab-muted",children:"MAYANK® LAB ARCHIVE // SPECIMEN VERIFIED"}),c.jsx("button",{onClick:()=>e(null),className:"px-6 py-2.5 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-lg uppercase tracking-wider transition-colors cursor-pointer",children:"CLOSE INSPECTOR"})]})]})})]})}function Uw(){const[t,e]=Te.useState(null),[n,i]=Te.useState("ALL"),r=[{id:"languages",category:"PROGRAMMING LANGUAGES",code:"CAT-01",icon:u0,accent:"border-lab-green text-lab-green",glow:"shadow-[0_0_20px_rgba(128,204,40,0.15)]",description:"Core syntax and algorithmic reagents utilized in academic coursework and development.",skills:[{symbol:"Py",name:"Python",atomicNumber:"01",compoundCode:"PY-3.12",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-toxic",focus:"Primary language for AI/ML modeling, data structures, algorithms, and script automation at Newton School of Technology.",topics:["Object-Oriented Programming","Data Structures & Algorithms","Scientific Computing","File I/O & Automation"]},{symbol:"Js",name:"JavaScript",atomicNumber:"02",compoundCode:"JS-ES24",learningStatus:"FOUNDATIONAL LEARNING",statusColor:"text-lab-sand",focus:"Client-side interactivity, asynchronous programming, Canvas API, Web Audio API, and DOM manipulation for dynamic web apps.",topics:["ES6+ Syntax","Promises & Async/Await","Event Loop Mechanics","DOM & Canvas Operations"]},{symbol:"Ht",name:"HTML",atomicNumber:"03",compoundCode:"HT-5.0",learningStatus:"FOUNDATIONAL LEARNING",statusColor:"text-lab-green",focus:"Semantic page structuring, accessible document outlines, audio/canvas embedding, and modern web standards.",topics:["Semantic Elements","Canvas 2D/3D Mounts","Accessibility (a11y) Basics","Audio/Video Embedding"]},{symbol:"Cs",name:"CSS",atomicNumber:"04",compoundCode:"CS-3.0",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-toxic",focus:"Responsive design systems, TailwindCSS utility architecture, hardware-accelerated animations, and dark cinematic aesthetics.",topics:["TailwindCSS Systems","CSS Grid & Flexbox","Keyframe Animations","Hardware Acceleration"]}]},{id:"aiml",category:"AI & MACHINE LEARNING",code:"CAT-02",icon:yl,accent:"border-lab-toxic text-lab-toxic",glow:"shadow-[0_0_20px_rgba(181,232,83,0.18)]",description:"Theoretical foundations and applied neural pipelines studied as an AI/ML engineering major at NST.",skills:[{symbol:"Ai",name:"Artificial Intelligence",atomicNumber:"05",compoundCode:"AI-SYS",learningStatus:"ACADEMIC COURSEWORK",statusColor:"text-lab-toxic",focus:"Core concepts of intelligent systems, heuristic search algorithms, decision trees, and agentic reasoning architectures.",topics:["Heuristic Search & Optimization","State Space Exploration","Agentic Workflows","Decision Logic"]},{symbol:"Ml",name:"Machine Learning",atomicNumber:"06",compoundCode:"ML-MATH",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-green",focus:"Supervised and unsupervised learning techniques, linear regression, classification models, loss functions, and data preprocessing.",topics:["Linear & Logistic Regression","Classification & Clustering","Loss Function Gradient Descent","Model Evaluation Metrics"]},{symbol:"Nn",name:"Neural Networks",atomicNumber:"07",compoundCode:"NN-TENS",learningStatus:"ACADEMIC COURSEWORK",statusColor:"text-lab-toxic",focus:"Multi-layer perceptrons, backpropagation mechanics, activation functions (ReLU, Sigmoid), and convolutional layers.",topics:["Perceptrons & Multi-Layer Nets","Backpropagation Gradients","Activation Functions","Feature Map Convolutions"]},{symbol:"Pt",name:"PyTorch",atomicNumber:"08",compoundCode:"PT-CUDA",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-sand",focus:"Building and training modular neural network architectures, tensor manipulations, autograd mechanics, and dataset loaders.",topics:["nn.Module Pipelines","Tensor Math & Autograd","DataLoader & Datasets","Loss Optimization Loops"]}]},{id:"devtools",category:"DEVELOPMENT TOOLS",code:"CAT-03",icon:Nw,accent:"border-lab-sand text-lab-sand",glow:"shadow-[0_0_20px_rgba(197,167,122,0.15)]",description:"Industry-standard workflows and 3D graphics libraries powering our engineering stack.",skills:[{symbol:"Gt",name:"Git",atomicNumber:"09",compoundCode:"GT-VCS",learningStatus:"PRACTICAL APPLICATION",statusColor:"text-lab-green",focus:"Distributed version control, branch management, merge conflict resolution, commit hygiene, and staging workflows.",topics:["Branching Strategies","Commit Hygiene","Merge Conflict Handling","Staging & History Log"]},{symbol:"Gh",name:"GitHub",atomicNumber:"10",compoundCode:"GH-HUB",learningStatus:"PRACTICAL APPLICATION",statusColor:"text-lab-sand",focus:"Repository hosting, collaborative team pull requests, open-source documentation, and basic CI/CD actions.",topics:["Pull Request Reviews","Issues & Milestones","Repository Documentation","GitHub Actions Intro"]},{symbol:"Vs",name:"VS Code",atomicNumber:"11",compoundCode:"VS-IDE",learningStatus:"PRACTICAL APPLICATION",statusColor:"text-lab-muted",focus:"Primary development environment, multi-language debugging, extension ecosystems, terminal integration, and formatting.",topics:["Integrated Debugging","Language Server Protocols","Terminal Workflows","Keybinding Ergonomics"]},{symbol:"Th",name:"Three.js",atomicNumber:"12",compoundCode:"TH-3JS",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-toxic",focus:"Constructing interactive 3D WebGL scenes, cameras, lighting setups, geometries (Lathe, Buffer), and particle simulations.",topics:["Scene, Camera & Render Loops","Parametric Geometries","MeshPhysicalMaterial Glass","Particle Systems"]},{symbol:"Gl",name:"WebGL",atomicNumber:"13",compoundCode:"GL-SHDR",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-green",focus:"Hardware-accelerated browser rasterization, understanding the graphics pipeline, vertex and fragment shader fundamentals.",topics:["Graphics Pipeline Stages","Vertex & Fragment Shaders","Buffer Attributes","GPU Texture Mapping"]}]},{id:"creative",category:"VISUAL DESIGN & CREATIVE DEVELOPMENT",code:"CAT-04",icon:d0,accent:"border-lab-green text-lab-green",glow:"shadow-[0_0_20px_rgba(128,204,40,0.18)]",description:"Bridging technical computing with cinematic visual identity, spatial ergonomics, and digital storytelling.",skills:[{symbol:"3D",name:"3D Web Experiences",atomicNumber:"14",compoundCode:"3D-EXP",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-toxic",focus:"Designing spatial web layouts that elevate portfolios into interactive cinematic environments with real-time feedback.",topics:["Spatial Composition","Interactive Parallax","Depth-Linked Scrolling","Atmospheric Lighting"]},{symbol:"Ui",name:"Interactive UI",atomicNumber:"15",compoundCode:"UI-INT",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-green",focus:"Crafting responsive user interfaces with immediate tactile feedback, custom cursors, micro-interactions, and dark mode ergonomics.",topics:["Tactile Feedback States","Custom Reticle Cursors","Micro-Transitions","Accessible Dark Theme"]},{symbol:"Cr",name:"Creative Web Development",atomicNumber:"16",compoundCode:"CR-DEV",learningStatus:"ACTIVE EXPLORATION",statusColor:"text-lab-sand",focus:"Synthesizing soundscapes (Web Audio API), procedural graphics, and storytelling into memorable digital experiences.",topics:["Awwwards-grade Aesthetics","Web Audio API Synthesizers","Cinematic Loaders","Narrative Web Design"]}]}];r.flatMap(a=>a.skills.map(o=>({...o,categoryTitle:a.category,categoryCode:a.code})));const s=n==="ALL"?r:r.filter(a=>a.id===n);return c.jsxs("section",{id:"skills",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[c.jsxs("div",{className:"mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic",children:[c.jsx("span",{className:"w-8 h-[1px] bg-lab-toxic"}),c.jsx("span",{children:"CHEMICAL MATRIX // SECTION 04"})]}),c.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none",children:["THE FORMULA ",c.jsx("span",{className:"text-lab-green glow-text",children:"// TECHNICAL ARSENAL"})]}),c.jsx("p",{className:"text-sm font-mono text-lab-sand mt-3 max-w-2xl",children:"AUTHENTIC LEARNING PROTOCOLS • PROGRAMMING LANGUAGES, AI/ML, TOOLS & CREATIVE 3D WEB"})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs font-mono",children:[c.jsx("button",{onClick:()=>i("ALL"),className:`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${n==="ALL"?"bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm":"bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active"}`,children:"ALL ARSENAL"}),c.jsx("button",{onClick:()=>i("languages"),className:`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${n==="languages"?"bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm":"bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active"}`,children:"LANGUAGES"}),c.jsx("button",{onClick:()=>i("aiml"),className:`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${n==="aiml"?"bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm":"bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active"}`,children:"AI & ML"}),c.jsx("button",{onClick:()=>i("devtools"),className:`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${n==="devtools"?"bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm":"bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active"}`,children:"TOOLS"}),c.jsx("button",{onClick:()=>i("creative"),className:`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${n==="creative"?"bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm":"bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active"}`,children:"CREATIVE 3D"})]})]}),c.jsx("div",{className:"space-y-10",children:s.map(a=>{const o=a.icon;return c.jsxs("div",{className:`bg-lab-card/85 border border-lab-border rounded-sm p-6 sm:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-lab-border-active ${a.glow}`,children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/60 pb-4 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:`p-2.5 bg-lab-charcoal border ${a.accent} rounded-sm shadow-sm`,children:c.jsx(o,{size:18})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("span",{className:"text-[10px] font-mono text-lab-sand font-bold tracking-widest uppercase",children:["[",a.code,"]"]}),c.jsx("h3",{className:"text-2xl sm:text-3xl font-cinematic uppercase tracking-wider text-white",children:a.category})]}),c.jsx("p",{className:"text-xs font-mono text-lab-muted mt-0.5",children:a.description})]})]}),c.jsxs("div",{className:"text-xs font-mono text-lab-muted",children:[c.jsx("span",{className:"text-lab-toxic font-bold",children:a.skills.length})," REAGENTS ACTIVE"]})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:a.skills.map(l=>{const u=(t==null?void 0:t.symbol)===l.symbol;return c.jsxs("div",{onClick:()=>e(l),className:`group p-4 bg-lab-charcoal/70 border rounded-sm transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${u?"border-lab-toxic bg-lab-charcoal shadow-glow-sm scale-[1.02]":"border-lab-border hover:border-lab-green hover:bg-lab-charcoal"}`,children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono mb-3",children:[c.jsxs("span",{className:"text-lab-sand font-bold",children:["#",l.atomicNumber," • ",l.compoundCode]}),c.jsx("span",{className:`text-[9px] font-bold tracking-wider uppercase ${l.statusColor}`,children:l.learningStatus})]}),c.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[c.jsx("div",{className:"w-12 h-14 bg-lab-black border border-lab-green/80 group-hover:border-lab-toxic rounded-sm flex flex-col items-center justify-center transition-colors shadow-sm",children:c.jsx("span",{className:"text-xl font-cinematic font-bold text-lab-green group-hover:text-lab-toxic leading-none",children:l.symbol})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-lg font-cinematic uppercase tracking-wider text-white group-hover:text-lab-green transition-colors leading-none",children:l.name}),c.jsx("span",{className:"text-[10px] font-mono text-lab-muted",children:"Core Component"})]})]}),c.jsx("p",{className:"text-xs font-sans text-gray-300 leading-relaxed font-light line-clamp-2 mb-3",children:l.focus})]}),c.jsxs("div",{className:"pt-2 border-t border-lab-border/40 flex items-center justify-between text-[10px] font-mono text-lab-sand group-hover:text-lab-toxic transition-colors",children:[c.jsx("span",{children:"INSPECT FORMULA"}),c.jsx("span",{children:"→"})]})]},l.symbol)})})]},a.id)})}),c.jsx("div",{className:"mt-10 bg-lab-card border border-lab-green rounded-sm p-6 sm:p-8 shadow-glow-sm relative",children:t?c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[c.jsx("div",{className:"lg:col-span-3 flex justify-center",children:c.jsxs("div",{className:"w-36 h-44 bg-lab-charcoal border-2 border-lab-green rounded-sm p-4 flex flex-col justify-between shadow-glow-green text-center",children:[c.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-lab-muted",children:[c.jsxs("span",{className:"font-bold text-lab-sand",children:["#",t.atomicNumber]}),c.jsx("span",{className:"text-[9px] text-lab-toxic font-bold uppercase",children:t.compoundCode})]}),c.jsxs("div",{className:"my-auto",children:[c.jsx("span",{className:"text-6xl font-cinematic uppercase text-lab-green font-bold block leading-none",children:t.symbol}),c.jsx("span",{className:"text-xs font-mono uppercase text-white font-bold tracking-wider block mt-1",children:t.name})]}),c.jsxs("div",{className:"text-[9px] font-mono text-lab-muted border-t border-lab-border/40 pt-1",children:["STATUS: ",c.jsx("span",{className:"text-lab-sand",children:t.learningStatus})]})]})}),c.jsxs("div",{className:"lg:col-span-9 space-y-4",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-lab-border/60 pb-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(_l,{size:20,className:"text-lab-toxic animate-spin"}),c.jsxs("h3",{className:"text-2xl sm:text-3xl font-cinematic uppercase text-white tracking-wide",children:["FORMULA ANALYSIS: ",t.name," [",t.symbol,"]"]})]}),c.jsx("span",{className:"px-2.5 py-1 rounded text-xs font-mono bg-lab-charcoal border border-lab-border text-lab-toxic font-bold",children:t.learningStatus})]}),c.jsx("p",{className:"text-sm font-sans text-gray-200 leading-relaxed font-light",children:t.focus}),c.jsxs("div",{children:[c.jsxs("h4",{className:"text-xs font-mono text-lab-sand uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5",children:[c.jsx(Ua,{size:14,className:"text-lab-green"}),c.jsx("span",{children:"// KEY CONCEPT REAGENTS • NST CURRICULUM & LAB EXPLORATION:"})]}),c.jsx("div",{className:"flex flex-wrap gap-2",children:t.topics.map(a=>c.jsxs("span",{className:"text-xs font-mono px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded-sm",children:["+",a]},a))})]}),c.jsxs("div",{className:"pt-2 text-[11px] font-mono text-lab-muted flex items-center gap-2",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lab-green"}),c.jsx("span",{children:"Documented as an active learning & engineering foundation • Mayank Sharma @ NST"})]})]})]}):c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-lab-muted",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(_l,{size:20,className:"text-lab-green animate-spin"}),c.jsx("span",{children:"CLICK ANY REAGENT ELEMENT ABOVE TO INSPECT ITS MOLECULAR CURRICULUM PROFILE • 99.1% CHEMICAL INTEGRITY"})]}),c.jsx("span",{className:"text-lab-toxic font-bold tracking-wider",children:"[CONTROL PANEL READY]"})]})})]})}function Ow({reagentColor:t="#80CC28",wireframe:e=!1,rotationSpeed:n=1}){const i=Te.useRef(null),r=Te.useRef(null),[s,a]=Te.useState(!0);return Te.useEffect(()=>{const o=document.createElement("canvas");if(!(o.getContext("webgl")||o.getContext("experimental-webgl"))){a(!1);return}const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=i.current;if(!f)return;const h=f.clientWidth||320,p=f.clientHeight||300,g=new i0,_=new rn(50,h/p,.1,50);_.position.set(0,0,4.6);const y=new of({antialias:!0,alpha:!0});y.setSize(h,p),y.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),y.toneMapping=ef,f.appendChild(y.domElement);const x=new o0(1715741,2.5);g.add(x);const d=new ia(11921491,2.8);d.position.set(3,4,4),g.add(d);const m=new ia(12953466,1.8);m.position.set(-4,-2,-2),g.add(m);const v=new di;g.add(v);const S=new df(1.6,1),R=S.attributes.position,w=R.count,T=[],N=.08;for(let le=0;le<w;le++){const ue=new I().fromBufferAttribute(R,le);let Ne=!1;for(const Ue of T)if(Ue.distanceTo(ue)<N){Ne=!0;break}Ne||T.push(ue)}const b=new Ma(.1,14,14),M=new oi({color:new ke(t),emissive:new ke(t),emissiveIntensity:.8,roughness:.2,metalness:.2,wireframe:e});T.forEach(le=>{const ue=new bt(b,M);ue.position.copy(le),v.add(ue)});const k=new rw(S),G=new r0({color:new ke(t),transparent:!0,opacity:.45}),J=new tw(k,G);v.add(J);const P=new ff(.6,0),F=new oi({color:11921491,emissive:8440872,emissiveIntensity:1.2,wireframe:!0}),W=new bt(P,F);v.add(W);const $=new Hl(2.1,.015,8,48),D=new ds({color:12953466,transparent:!0,opacity:.4}),O=new bt($,D);O.rotation.x=Math.PI/3,v.add(O),r.current={compoundGroup:v,nodeMat:M,wireMat:G,coreMesh:W,ringMesh:O,renderer:y,baseGeom:S,nodeGeom:b,coreGeom:P,ringGeom:$};let z,K=new l0,Z=!0;const Y=()=>{if(z=requestAnimationFrame(Y),!Z)return;const le=K.getDelta(),ue=K.getElapsedTime();if(!u){v.rotation.y+=le*.45*n,v.rotation.x+=le*.25*n,O.rotation.z+=le*.3*n,W.rotation.y-=le*.6*n;const Ne=1+Math.sin(ue*3)*.08;W.scale.setScalar(Ne)}y.render(g,_)};Y();const q=()=>{Z=!document.hidden,Z&&K.start()};document.addEventListener("visibilitychange",q);const oe=()=>{if(!i.current)return;const le=i.current.clientWidth||320,ue=i.current.clientHeight||300;_.aspect=le/ue,_.updateProjectionMatrix(),y.setSize(le,ue)};return window.addEventListener("resize",oe),()=>{window.removeEventListener("resize",oe),document.removeEventListener("visibilitychange",q),cancelAnimationFrame(z),f&&y.domElement&&f.removeChild(y.domElement),y.dispose(),S.dispose(),b.dispose(),P.dispose(),$.dispose(),M.dispose(),G.dispose(),F.dispose(),D.dispose()}},[]),Te.useEffect(()=>{if(!r.current)return;const{nodeMat:o,wireMat:l}=r.current;o&&(o.color.set(t),o.emissive.set(t),o.wireframe=e),l&&l.color.set(t)},[t,e]),s?c.jsxs("div",{className:"w-full h-72 sm:h-80 relative flex items-center justify-center",children:[c.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"}),c.jsx("div",{className:"absolute inset-0 border border-lab-border/40 rounded-sm pointer-events-none"}),c.jsxs("div",{className:"absolute bottom-3 left-4 text-[10px] font-mono text-lab-sand pointer-events-none flex items-center gap-1.5",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lab-toxic animate-ping"}),c.jsx("span",{children:"3D MOLECULAR MATRIX • INTERACTIVE"})]})]}):c.jsxs("div",{className:"w-full h-72 sm:h-80 flex flex-col items-center justify-center p-6 text-center bg-lab-black/90",children:[c.jsx("div",{className:"w-20 h-20 rounded-full border-2 border-lab-toxic flex items-center justify-center mb-3 shadow-glow-sm",children:c.jsx(_l,{size:32,className:"text-lab-green animate-pulse"})}),c.jsx("span",{className:"text-xs font-mono text-white font-bold uppercase",children:"3D MOLECULE SIMULATION"}),c.jsx("span",{className:"text-[10px] font-mono text-lab-sand mt-1",children:"LATTICE ACTIVE (CANVAS FALLBACK MODE)"})]})}function kw(){const[t,e]=Te.useState("3d"),[n,i]=Te.useState("#80CC28"),[r,s]=Te.useState(!1),[a,o]=Te.useState(1),l=[{id:"3d",title:"3D WEB WORLDS",subtitle:"Three.js, WebGL & Immersive 3D Environments",icon:xw,status:"ACTIVE EXPERIMENTATION",statusColor:"text-lab-toxic",beacon:"bg-lab-toxic",accentColor:"#80CC28",summary:"Exploring spatial browser canvases, custom procedural shaders, realistic borosilicate glass refraction, and physical particle dynamics.",details:["Investigating parametric LatheGeometry and BufferGeometry procedural mesh generation in Three.js.","Experimenting with GLSL fragment and vertex shaders for custom glowing energy pulses and volumetric smoke billows.","Designing depth-linked camera choreography that responds naturally to mouse parallax and page scroll velocity.","Optimizing rendering loops to maintain consistent 60fps on both desktop and mobile viewports with zero layout shifts."],tags:["Three.js","WebGL Shaders","Particle Dynamics","ACESFilmic ToneMapping","Math Geometries"],specLabel:"EXP-AREA // 3D GRAPHICS"},{id:"ai",title:"AI EXPLORATIONS",subtitle:"Artificial Intelligence, Machine Learning & Intelligent Systems",icon:yl,status:"RESEARCH & PROTOTYPING",statusColor:"text-lab-green",beacon:"bg-lab-green",accentColor:"#B5E853",summary:"Exploring machine learning pipelines, deep neural network layers, computer vision gestures, and agentic workflows at Newton School of Technology.",details:["Studying neural network weight activations and learning rate curves in PyTorch and scikit-learn.","Experimenting with real-time computer vision heuristics (OpenCV & MediaPipe) for touchless gesture interactions.","Investigating how AI models can interface with client-side WebGL frontends to visualize high-dimensional latent vectors.","Focusing on authentic understanding of algorithms and loss gradients rather than treating models as black boxes."],tags:["PyTorch","scikit-learn","Computer Vision (OpenCV)","Heuristic Optimization","Tensor Pipelines"],specLabel:"EXP-AREA // INTELLIGENCE"},{id:"ui",title:"INTERACTIVE DESIGN",subtitle:"Motion, Animations, Creative Interfaces & Soundscapes",icon:d0,status:"CONCEPT EXPLORATION",statusColor:"text-lab-sand",beacon:"bg-lab-sand",accentColor:"#C5A77A",summary:"Synthesizing kinetic typography, tactile micro-interactions, dark mode ergonomics, and procedural Web Audio API soundscapes.",details:["Developing native Web Audio API oscillators to generate real-time atmospheric drones and bubbling sound effects without audio files.","Designing custom cursor reticles with trailing spring physics to enhance visual feedback across interactive surfaces.","Creating modular design systems inspired by cinematic universe aesthetics (dark charcoal, toxic lime, desert sand).","Exploring Awwwards-grade digital storytelling techniques that make web development feel engaging and immersive."],tags:["Web Audio API","Kinetic Typography","Micro-Interactions","Custom Reticle Cursors","Dark Aesthetics"],specLabel:"EXP-AREA // INTERFACES"}],u=l.find(f=>f.id===t)||l[0];return c.jsxs("section",{id:"creative",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[c.jsxs("div",{className:"mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic",children:[c.jsx("span",{className:"w-8 h-[1px] bg-lab-toxic"}),c.jsx("span",{children:"EXPERIMENTAL WORKBENCH // SECTION 05"})]}),c.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none",children:["CREATIVE LAB ",c.jsx("span",{className:"text-lab-green glow-text",children:"// BEYOND THE FORMULA"})]}),c.jsx("p",{className:"text-sm font-mono text-lab-sand mt-3 max-w-2xl",children:"ACTIVE EXPLORATION DOMAINS • 3D WORLDS, MACHINE INTELLIGENCE & INTERACTIVE SYSTEM DESIGN"})]}),c.jsxs("div",{className:"hidden sm:flex items-center gap-2.5 px-3 py-1.5 bg-lab-charcoal border border-lab-border rounded-sm text-xs font-mono",children:[c.jsx(c0,{size:14,className:"text-lab-toxic animate-pulse"}),c.jsx("span",{className:"text-lab-muted",children:"BENCH STATUS:"}),c.jsx("span",{className:"text-white font-bold",children:"ALL CHAMBERS ACTIVE"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[c.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[c.jsxs("div",{className:"text-xs font-mono text-lab-sand uppercase font-bold tracking-wider mb-2 flex items-center gap-2",children:[c.jsx(f0,{size:14,className:"text-lab-green"}),c.jsx("span",{children:"SELECT EXPERIMENTATION CHAMBER:"})]}),l.map((f,h)=>{const p=f.icon,g=t===f.id;return c.jsxs("div",{onClick:()=>{e(f.id),i(f.accentColor)},className:`group p-5 rounded-sm border transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-md ${g?"bg-lab-charcoal border-lab-green shadow-glow-sm scale-[1.01]":"bg-lab-card/90 border-lab-border hover:border-lab-border-active hover:bg-lab-charcoal/60"}`,children:[g&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-lab-toxic shadow-[0_0_10px_#B5E853]"}),c.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:`p-2.5 rounded-sm border ${g?"bg-lab-black border-lab-toxic text-lab-toxic":"bg-lab-charcoal border-lab-border text-lab-muted"} transition-colors`,children:c.jsx(p,{size:18})}),c.jsxs("div",{children:[c.jsxs("span",{className:"text-[10px] font-mono text-lab-sand block",children:["0",h+1,". ",f.specLabel]}),c.jsx("h3",{className:"text-xl sm:text-2xl font-cinematic uppercase tracking-wider text-white group-hover:text-lab-green transition-colors leading-none",children:f.title})]})]}),c.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] font-mono pt-1",children:[c.jsx("span",{className:`w-2 h-2 rounded-full ${f.beacon} ${g?"animate-ping":""}`}),c.jsxs("span",{className:`font-bold ${f.statusColor}`,children:["[",f.status,"]"]})]})]}),c.jsx("p",{className:"text-xs font-sans text-gray-300 leading-relaxed font-light pl-11 line-clamp-2",children:f.summary}),c.jsx("div",{className:"mt-3 pl-11 flex flex-wrap gap-1.5",children:f.tags.slice(0,3).map(_=>c.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 bg-lab-black border border-lab-border text-lab-muted rounded-sm",children:_},_))})]},f.id)}),c.jsxs("div",{className:"p-4 bg-lab-charcoal/50 border border-lab-border/70 rounded-sm text-xs font-mono text-lab-muted space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-2 text-lab-sand font-bold",children:[c.jsx(pf,{size:14,className:"text-lab-toxic"}),c.jsx("span",{children:"EXPLORATION DIRECTIVE:"})]}),c.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed font-light",children:"Presented as active areas of technical curiosity and ongoing experimentation at Newton School of Technology. No commercial projects or completed claims are asserted."})]})]}),c.jsx("div",{className:"lg:col-span-7 space-y-6",children:c.jsxs("div",{className:"bg-lab-card/90 border border-lab-green/80 rounded-sm p-6 sm:p-8 backdrop-blur-md shadow-glow-sm relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lab-toxic to-transparent animate-pulse pointer-events-none"}),c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/60 pb-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("div",{className:"flex items-center gap-2 text-xs font-mono text-lab-toxic mb-1",children:c.jsxs("span",{children:["// LABORATORY CHAMBER: ",u.specLabel]})}),c.jsx("h3",{className:"text-3xl sm:text-4xl font-cinematic uppercase tracking-wide text-white",children:u.title}),c.jsx("p",{className:"text-xs font-mono text-lab-sand",children:u.subtitle})]}),c.jsxs("div",{className:"px-3 py-1 bg-lab-charcoal border border-lab-border rounded text-xs font-mono flex items-center gap-2",children:[c.jsx("span",{className:`w-2 h-2 rounded-full ${u.beacon} animate-pulse`}),c.jsx("span",{className:"text-white font-bold",children:u.status})]})]}),c.jsxs("div",{className:"mb-6 bg-lab-black/80 border border-lab-border rounded-sm overflow-hidden relative",children:[c.jsxs("div",{className:"p-3 border-b border-lab-border/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono bg-lab-charcoal/50",children:[c.jsxs("div",{className:"flex items-center gap-2 text-white",children:[c.jsx(_l,{size:16,className:"text-lab-toxic animate-spin"}),c.jsx("span",{children:"3D LATTICE SIMULATION"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[c.jsx("button",{onClick:()=>s(!r),className:`px-2 py-0.5 border rounded cursor-pointer transition-colors ${r?"bg-lab-toxic text-lab-black border-lab-toxic font-bold":"border-lab-border text-lab-muted hover:text-white"}`,children:"WIREFRAME"}),c.jsxs("button",{onClick:()=>o(f=>f===1?2.5:f===2.5?.3:1),className:"px-2 py-0.5 border border-lab-border text-lab-sand hover:text-white rounded cursor-pointer transition-colors flex items-center gap-1",children:[c.jsx(Mw,{size:12}),c.jsxs("span",{children:["SPEED: ",a,"x"]})]})]})]}),c.jsx(Ow,{reagentColor:u.accentColor,wireframe:r,rotationSpeed:a})]}),c.jsxs("div",{className:"space-y-4 mb-6",children:[c.jsxs("h4",{className:"text-xs font-mono text-lab-sand uppercase font-bold tracking-wider flex items-center gap-2",children:[c.jsx(Ua,{size:14,className:"text-lab-green"}),c.jsx("span",{children:"// CURRENT INVESTIGATIONS & LEARNING INITIATIVES:"})]}),c.jsx("div",{className:"space-y-2.5",children:u.details.map((f,h)=>c.jsxs("div",{className:"flex items-start gap-3 text-xs font-mono text-gray-300 bg-lab-charcoal/50 p-3 rounded-sm border border-lab-border/40",children:[c.jsx("span",{className:"text-lab-green font-bold",children:">"}),c.jsx("span",{className:"leading-relaxed font-light",children:f})]},h))})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-[10px] font-mono text-lab-muted uppercase font-bold tracking-wider mb-2",children:"REAGENTS INVOLVED IN THIS CHAMBER:"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:u.tags.map(f=>c.jsxs("span",{className:"text-xs font-mono px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded-sm",children:["+",f]},f))})]})]})})]})]})}function Fw(){const[t,e]=Te.useState({name:"",email:"",subject:"",message:""}),[n,i]=Te.useState({}),[r,s]=Te.useState(!1),[a,o]=Te.useState(!1),[l,u]=Te.useState(!1),f="mayank.sharma@newtonschool.co",h=[{name:"GITHUB",handle:"mayanksharma",url:"https://github.com/mayanksharma",icon:rd,tag:"SOURCE REPOSITORY",isPlaceholder:!1},{name:"LINKEDIN",handle:"mayanksharma",url:"https://linkedin.com/in/mayanksharma",icon:Sw,tag:"PROFESSIONAL NETWORK",isPlaceholder:!1}],p=[{id:"hero",label:"THE LAB"},{id:"about",label:"DOSSIER"},{id:"projects",label:"EXPERIMENTS"},{id:"skills",label:"THE FORMULA"},{id:"creative",label:"CREATIVE LAB"},{id:"contact",label:"TRANSMIT"}],g=m=>{const v=document.getElementById(m);v&&v.scrollIntoView({behavior:"smooth"})},_=()=>{navigator.clipboard.writeText(f),s(!0),setTimeout(()=>s(!1),2e3)},y=()=>{const m={};return t.name.trim()||(m.name="Operator name is required"),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(m.email="Enter a valid email address"):m.email="Callsign / email is required",t.subject.trim()||(m.subject="Subject specification is required"),t.message.trim()||(m.message="Transmission content cannot be blank"),m},x=m=>{m.preventDefault();const v=y();if(Object.keys(v).length>0){i(v);return}i({}),u(!0);const S=encodeURIComponent(`[LAB TRANSMISSION] ${t.subject}`),R=encodeURIComponent(`Operator Name: ${t.name}
Email: ${t.email}
Subject: ${t.subject}

Transmission:
${t.message}`);window.location.href=`mailto:${f}?subject=${S}&body=${R}`},d=()=>{const m=`TO: ${f}
OPERATOR: ${t.name} <${t.email}>
SUBJECT: ${t.subject}

MESSAGE:
${t.message}`;navigator.clipboard.writeText(m),o(!0),setTimeout(()=>o(!1),2e3)};return c.jsxs("section",{id:"contact",className:"relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10",children:[c.jsx("div",{className:"mb-10 max-w-5xl mx-auto",children:c.jsxs("div",{className:"p-3 bg-lab-charcoal/80 border border-lab-border rounded-sm flex flex-wrap items-center justify-between gap-3 text-xs font-mono backdrop-blur-md",children:[c.jsxs("div",{className:"flex items-center gap-2.5 text-lab-toxic font-bold",children:[c.jsx(f0,{size:15,className:"animate-pulse"}),c.jsx("span",{className:"tracking-widest uppercase",children:"CONNECTION ESTABLISHED // AWAITING TRANSMISSION"})]}),c.jsxs("div",{className:"flex items-center gap-4 text-lab-muted text-[11px]",children:[c.jsx("span",{children:"NODE: NST-TERMINAL-01"}),c.jsx("span",{className:"text-lab-green font-semibold",children:"STATUS: READY"})]})]})}),c.jsxs("div",{className:"mb-14 border-b border-lab-border/70 pb-6 text-center max-w-3xl mx-auto",children:[c.jsxs("div",{className:"inline-flex items-center gap-3 mb-3 font-mono text-xs text-lab-toxic",children:[c.jsx("span",{className:"w-8 h-[1px] bg-lab-toxic"}),c.jsx("span",{children:"COMMUNICATION CONSOLE // SECTION 06"}),c.jsx("span",{className:"w-8 h-[1px] bg-lab-toxic"})]}),c.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none",children:["TRANSMIT ",c.jsx("span",{className:"text-lab-green glow-text",children:"// ESTABLISH CONNECTION"})]}),c.jsx("h3",{className:"text-xl sm:text-2xl font-cinematic text-lab-sand uppercase tracking-wider mt-3",children:"HAVE AN IDEA? LET'S EXPERIMENT."}),c.jsx("p",{className:"text-sm sm:text-base font-sans text-gray-300 mt-3 max-w-xl mx-auto leading-relaxed font-light",children:"Open to collaborative technology ventures, creative 3D web development, and AI/ML experiments. Transmit a signal directly to the lab or reach out through my verified channels."})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto",children:[c.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[c.jsxs("div",{className:"bg-lab-card/90 border border-lab-border hover:border-lab-green/60 p-6 rounded-sm backdrop-blur-md space-y-4 transition-all",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-lab-sand uppercase font-bold",children:"// SECURE EMAIL CHANNEL"}),c.jsxs("button",{onClick:_,className:"text-lab-toxic hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-[11px]",title:"Copy email to clipboard",children:[r?c.jsx(Jc,{size:13}):c.jsx(cm,{size:13}),c.jsx("span",{children:r?"COPIED":"COPY"})]})]}),c.jsxs("div",{className:"flex items-center gap-3.5",children:[c.jsx("div",{className:"p-3 bg-lab-charcoal border border-lab-border rounded text-lab-green",children:c.jsx(bw,{size:22})}),c.jsxs("div",{className:"overflow-hidden",children:[c.jsx("a",{href:`mailto:${f}`,className:"text-base font-mono text-white hover:text-lab-toxic transition-colors truncate block font-medium",children:f}),c.jsx("span",{className:"text-[11px] font-mono text-lab-muted",children:"Direct Laboratory Mailbox"})]})]})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:h.map(m=>{const v=m.icon;return c.jsxs("a",{href:m.url,target:"_blank",rel:"noreferrer",className:"p-5 bg-lab-card/90 border border-lab-border hover:border-lab-toxic rounded-sm transition-all group flex flex-col justify-between backdrop-blur-md hover:shadow-glow-sm",children:[c.jsxs("div",{className:"flex items-center justify-between text-lab-muted group-hover:text-lab-toxic mb-3",children:[c.jsx(v,{size:22}),c.jsx(pw,{size:16,className:"transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-sm font-cinematic uppercase tracking-wider text-white block",children:m.name}),c.jsxs("span",{className:"text-[10px] font-mono text-lab-sand",children:["@",m.handle]})]})]},m.name)})}),c.jsxs("div",{className:"p-5 bg-lab-charcoal/60 border border-lab-border rounded-sm text-xs font-mono text-lab-muted space-y-2 backdrop-blur-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 text-lab-toxic font-bold",children:[c.jsx(h0,{size:15}),c.jsx("span",{children:"AUTHENTIC IDENTITY PROTOCOL"})]}),c.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed font-light",children:"Mayank Sharma • Newton School of Technology • B.Tech CSE (AI & ML). All communications are reviewed personally with technical discretion."})]})]}),c.jsxs("div",{className:"lg:col-span-7 bg-lab-card/90 border border-lab-border rounded-sm p-6 sm:p-8 backdrop-blur-md relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lab-green to-transparent"}),l?c.jsxs("div",{className:"py-8 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn",children:[c.jsx("div",{className:"w-16 h-16 rounded-full bg-lab-green/20 border border-lab-green flex items-center justify-center text-lab-toxic shadow-glow-green",children:c.jsx(Jc,{size:32})}),c.jsx("h4",{className:"text-3xl font-cinematic uppercase tracking-wider text-white",children:"TRANSMISSION PREPARED"}),c.jsxs("p",{className:"text-sm font-sans text-gray-300 max-w-md leading-relaxed font-light",children:["Your transmission has been formatted. Since this static portfolio runs without an intrusive third-party tracker, your default mail client has been opened to dispatch directly to ",c.jsx("strong",{className:"text-white",children:f}),"."]}),c.jsxs("div",{className:"w-full text-left bg-lab-black p-4 border border-lab-border rounded text-xs font-mono space-y-1.5 my-2",children:[c.jsx("div",{className:"text-lab-sand font-bold text-[10px] uppercase border-b border-lab-border/40 pb-1",children:"// FORMATTED DISPATCH PAYLOAD:"}),c.jsxs("div",{className:"text-lab-muted",children:[c.jsx("strong",{className:"text-white",children:"FROM:"})," ",t.name," <",t.email,">"]}),c.jsxs("div",{className:"text-lab-muted",children:[c.jsx("strong",{className:"text-white",children:"SUBJECT:"})," ",t.subject]}),c.jsxs("div",{className:"text-lab-green pt-1 whitespace-pre-wrap",children:[c.jsx("strong",{className:"text-white",children:"MESSAGE:"})," ",t.message]})]}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[c.jsxs("button",{onClick:d,className:"px-5 py-2.5 bg-lab-charcoal hover:bg-lab-card border border-lab-border hover:border-lab-toxic text-xs font-mono text-white transition-colors cursor-pointer flex items-center gap-2",children:[a?c.jsx(Jc,{size:14,className:"text-lab-toxic"}):c.jsx(cm,{size:14}),c.jsx("span",{children:a?"PAYLOAD COPIED":"COPY TRANSMISSION TEXT"})]}),c.jsx("button",{onClick:()=>{u(!1),e({name:"",email:"",subject:"",message:""})},className:"px-5 py-2.5 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-lg uppercase tracking-wider transition-colors cursor-pointer",children:"NEW TRANSMISSION"})]}),c.jsx("p",{className:"text-[10px] font-mono text-lab-muted/80 pt-2",children:"Note: To route messages via an API or webhook (EmailJS / Formspree), you can bind your endpoint in this component."})]}):c.jsxs("form",{onSubmit:x,className:"space-y-4",noValidate:!0,children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-lab-border/40 pb-3 text-xs font-mono",children:[c.jsxs("div",{className:"flex items-center gap-2 text-white font-bold",children:[c.jsx(Ua,{size:15,className:"text-lab-green"}),c.jsx("span",{children:"TRANSMIT DISPATCH CONSOLE"})]}),c.jsx("span",{className:"text-lab-toxic text-[10px]",children:"ENCRYPTED TLS // DIRECT"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsx("label",{className:"text-xs font-mono text-lab-sand block font-medium",children:"NAME *"}),c.jsx("input",{type:"text",value:t.name,onChange:m=>{e({...t,name:m.target.value}),n.name&&i({...n,name:null})},placeholder:"e.g. Walter White",className:`w-full p-3 bg-lab-black border ${n.name?"border-red-500":"border-lab-border focus:border-lab-green"} rounded-sm text-xs font-mono text-white focus:outline-none transition-colors`}),n.name&&c.jsxs("span",{className:"text-[10px] font-mono text-red-400 flex items-center gap-1",children:[c.jsx(Ao,{size:10})," ",n.name]})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("label",{className:"text-xs font-mono text-lab-sand block font-medium",children:"EMAIL *"}),c.jsx("input",{type:"email",value:t.email,onChange:m=>{e({...t,email:m.target.value}),n.email&&i({...n,email:null})},placeholder:"e.g. operator@laboratory.com",className:`w-full p-3 bg-lab-black border ${n.email?"border-red-500":"border-lab-border focus:border-lab-green"} rounded-sm text-xs font-mono text-white focus:outline-none transition-colors`}),n.email&&c.jsxs("span",{className:"text-[10px] font-mono text-red-400 flex items-center gap-1",children:[c.jsx(Ao,{size:10})," ",n.email]})]})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("label",{className:"text-xs font-mono text-lab-sand block font-medium",children:"SUBJECT *"}),c.jsx("input",{type:"text",value:t.subject,onChange:m=>{e({...t,subject:m.target.value}),n.subject&&i({...n,subject:null})},placeholder:"e.g. Collaborative 3D Web Exploration / AI Query",className:`w-full p-3 bg-lab-black border ${n.subject?"border-red-500":"border-lab-border focus:border-lab-green"} rounded-sm text-xs font-mono text-white focus:outline-none transition-colors`}),n.subject&&c.jsxs("span",{className:"text-[10px] font-mono text-red-400 flex items-center gap-1",children:[c.jsx(Ao,{size:10})," ",n.subject]})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("label",{className:"text-xs font-mono text-lab-sand block font-medium",children:"MESSAGE *"}),c.jsx("textarea",{rows:4,value:t.message,onChange:m=>{e({...t,message:m.target.value}),n.message&&i({...n,message:null})},placeholder:"Outline your experiment, idea, project inquiry or collaboration...",className:`w-full p-3 bg-lab-black border ${n.message?"border-red-500":"border-lab-border focus:border-lab-green"} rounded-sm text-xs font-mono text-white focus:outline-none transition-colors resize-none`}),n.message&&c.jsxs("span",{className:"text-[10px] font-mono text-red-400 flex items-center gap-1",children:[c.jsx(Ao,{size:10})," ",n.message]})]}),c.jsxs("button",{type:"submit",className:"w-full py-4 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-xl tracking-widest uppercase transition-all duration-300 shadow-glow-green flex items-center justify-center gap-3 cursor-pointer active:scale-95 mt-2",children:[c.jsx(ww,{size:18}),c.jsx("span",{children:"SEND MESSAGE // DISPATCH"})]}),c.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-lab-muted/80 pt-1",children:[c.jsx("span",{children:"Dispatches via direct mail client fallback"}),c.jsx("span",{className:"text-lab-green",children:"NO SPAM // DIRECT CONTACT"})]})]})]})]}),c.jsxs("footer",{className:"mt-28 pt-12 border-t border-lab-border/50 text-center space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsxs("div",{className:"w-8 h-9 bg-lab-charcoal border border-lab-green rounded-sm flex flex-col justify-between p-1 shadow-glow-sm",children:[c.jsx("span",{className:"text-[7px] font-mono text-lab-muted leading-none",children:"24"}),c.jsx("span",{className:"text-sm font-cinematic text-lab-green leading-none font-bold",children:"Ma"}),c.jsx("span",{className:"text-[5px] font-mono text-lab-sand uppercase leading-none",children:"Mayank"})]}),c.jsxs("div",{className:"w-8 h-9 bg-lab-charcoal border border-lab-toxic rounded-sm flex flex-col justify-between p-1 shadow-glow-sm",children:[c.jsx("span",{className:"text-[7px] font-mono text-lab-muted leading-none",children:"52"}),c.jsx("span",{className:"text-sm font-cinematic text-lab-toxic leading-none font-bold",children:"Sh"}),c.jsx("span",{className:"text-[5px] font-mono text-lab-sand uppercase leading-none",children:"Sharma"})]})]}),c.jsx("nav",{className:"flex flex-wrap items-center justify-center gap-6 text-xs font-mono","aria-label":"Footer Navigation",children:p.map(m=>c.jsx("button",{onClick:()=>g(m.id),className:"text-lab-muted hover:text-lab-toxic transition-colors cursor-pointer uppercase tracking-wider",children:m.label},m.id))}),c.jsxs("div",{className:"space-y-1 text-xs font-mono text-lab-muted",children:[c.jsxs("p",{className:"text-white font-medium",children:["MAYANK SHARMA • ",c.jsx("span",{className:"text-lab-sand",children:"MAYANK®"})]}),c.jsx("p",{className:"text-[11px] text-lab-muted",children:"B.Tech Computer Science Engineering • Artificial Intelligence & Machine Learning"}),c.jsx("p",{className:"text-[10px] text-lab-toxic font-medium",children:"Newton School of Technology"})]}),c.jsxs("div",{className:"pt-2 text-[10px] font-mono text-lab-muted/60 tracking-widest border-t border-lab-border/30 max-w-md mx-auto",children:["© ",new Date().getFullYear()," MAYANK® • BREAKING BAD 3D PORTFOLIO EXPERIENCE • 99.1% CHEMICAL PURITY"]})]})]})}function zw(){const[t,e]=Te.useState(!1),[n,i]=Te.useState(0),[r,s]=Te.useState({x:0,y:0}),[a,o]=Te.useState("hero");return Te.useEffect(()=>{const l=u=>{const f=u.clientX/window.innerWidth*2-1,h=-(u.clientY/window.innerHeight)*2+1;s({x:f,y:h})};return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]),Te.useEffect(()=>{const l=()=>{const u=document.documentElement.scrollHeight-window.innerHeight,f=window.scrollY,h=u>0?f/u:0;if(i(h),f<120){o("hero");return}if(window.innerHeight+f>=document.documentElement.scrollHeight-70){o("contact");return}const p=["hero","about","projects","skills","creative","contact"];for(const g of p){const _=document.getElementById(g);if(_){const y=_.getBoundingClientRect();if(y.top<=window.innerHeight*.45&&y.bottom>=window.innerHeight*.2){o(g);break}}}};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),c.jsxs("div",{className:"relative min-h-screen bg-lab-black text-lab-muted font-sans selection:bg-lab-green selection:text-lab-black",children:[!t&&c.jsx(q_,{onComplete:()=>e(!0)}),c.jsx($_,{}),c.jsx(lw,{scrollProgress:n,mousePos:r}),c.jsx("div",{className:"fixed inset-0 scanlines pointer-events-none z-20 opacity-30"}),c.jsx("div",{className:"fixed inset-0 vignette-overlay pointer-events-none z-20"}),c.jsx("div",{className:"fixed inset-0 grain-overlay pointer-events-none z-20 opacity-40"}),c.jsx(Lw,{activeSection:a}),c.jsxs("main",{className:"relative z-10 flex flex-col",children:[c.jsx(Pw,{}),c.jsx(Iw,{}),c.jsx(Dw,{}),c.jsx(Uw,{}),c.jsx(kw,{}),c.jsx(Fw,{})]})]})}eu.createRoot(document.getElementById("root")).render(c.jsx(O0.StrictMode,{children:c.jsx(zw,{})}));
