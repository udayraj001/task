(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function T_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function C_(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Z0={exports:{}},$l={},Q0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),A_=Symbol.for("react.portal"),R_=Symbol.for("react.fragment"),b_=Symbol.for("react.strict_mode"),P_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),U_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),Ih=Symbol.iterator;function F_(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var J0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},em=Object.assign,tm={};function Ho(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||J0}Ho.prototype.isReactComponent={};Ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nm(){}nm.prototype=Ho.prototype;function _d(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||J0}var yd=_d.prototype=new nm;yd.constructor=_d;em(yd,Ho.prototype);yd.isPureReactComponent=!0;var Nh=Array.isArray,im=Object.prototype.hasOwnProperty,xd={current:null},rm={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)im.call(e,i)&&!rm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ws,type:t,key:o,ref:s,props:r,_owner:xd.current}}function k_(t,e){return{$$typeof:Ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ws}function z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function yu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z_(""+t.key):e.toString(36)}function Xa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ws:case A_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+yu(s,0):i,Nh(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),Xa(r,e,n,"",function(u){return u})):r!=null&&(Sd(r)&&(r=k_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Nh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+yu(o,a);s+=Xa(o,e,n,l,r)}else if(l=F_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+yu(o,a++),s+=Xa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function oa(t,e,n){if(t==null)return t;var i=[],r=0;return Xa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function B_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},ja={transition:null},H_={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:ja,ReactCurrentOwner:xd};function sm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:oa,forEach:function(t,e,n){oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oa(t,function(){e++}),e},toArray:function(t){return oa(t,function(e){return e})||[]},only:function(t){if(!Sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ho;Xe.Fragment=R_;Xe.Profiler=P_;Xe.PureComponent=_d;Xe.StrictMode=b_;Xe.Suspense=N_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;Xe.act=sm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=em({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=xd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)im.call(e,l)&&!rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ws,type:t.type,key:r,ref:o,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:D_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};Xe.createElement=om;Xe.createFactory=function(t){var e=om.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:I_,render:t}};Xe.isValidElement=Sd;Xe.lazy=function(t){return{$$typeof:O_,_payload:{_status:-1,_result:t},_init:B_}};Xe.memo=function(t,e){return{$$typeof:U_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};Xe.unstable_act=sm;Xe.useCallback=function(t,e){return en.current.useCallback(t,e)};Xe.useContext=function(t){return en.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return en.current.useEffect(t,e)};Xe.useId=function(){return en.current.useId()};Xe.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return en.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Xe.useRef=function(t){return en.current.useRef(t)};Xe.useState=function(t){return en.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return en.current.useTransition()};Xe.version="18.3.1";Q0.exports=Xe;var Tt=Q0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=Tt,G_=Symbol.for("react.element"),W_=Symbol.for("react.fragment"),X_=Object.prototype.hasOwnProperty,j_=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$_={key:!0,ref:!0,__self:!0,__source:!0};function am(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)X_.call(e,i)&&!$_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:G_,type:t,key:o,ref:s,props:r,_owner:j_.current}}$l.Fragment=W_;$l.jsx=am;$l.jsxs=am;Z0.exports=$l;var Ce=Z0.exports,lm={exports:{}},Mn={},um={exports:{}},cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var q=D.length;D.push(X);e:for(;0<q;){var se=q-1>>>1,me=D[se];if(0<r(me,X))D[se]=X,D[q]=me,q=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],q=D.pop();if(q!==X){D[0]=q;e:for(var se=0,me=D.length,Ke=me>>>1;se<Ke;){var Ve=2*(se+1)-1,Ye=D[Ve],j=Ve+1,Q=D[j];if(0>r(Ye,q))j<me&&0>r(Q,Ye)?(D[se]=Q,D[j]=q,se=j):(D[se]=Ye,D[Ve]=q,se=Ve);else if(j<me&&0>r(Q,q))D[se]=Q,D[j]=q,se=j;else break e}}return X}function r(D,X){var q=D.sortIndex-X.sortIndex;return q!==0?q:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,h=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function x(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,G(T);else{var X=n(u);X!==null&&K(x,X.startTime-D)}}function T(D,X){_=!1,y&&(y=!1,c(R),R=-1),p=!0;var q=h;try{for(v(X),f=n(l);f!==null&&(!(f.expirationTime>X)||D&&!P());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var me=se(f.expirationTime<=X);X=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(l)&&i(l),v(X)}else i(l);f=n(l)}if(f!==null)var Ke=!0;else{var Ve=n(u);Ve!==null&&K(x,Ve.startTime-X),Ke=!1}return Ke}finally{f=null,h=q,p=!1}}var C=!1,A=null,R=-1,S=5,M=-1;function P(){return!(t.unstable_now()-M<S)}function N(){if(A!==null){var D=t.unstable_now();M=D;var X=!0;try{X=A(!0,D)}finally{X?U():(C=!1,A=null)}}else C=!1}var U;if(typeof g=="function")U=function(){g(N)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,V=Y.port2;Y.port1.onmessage=N,U=function(){V.postMessage(null)}}else U=function(){m(N,0)};function G(D){A=D,C||(C=!0,U())}function K(D,X){R=m(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var q=h;h=X;try{return D()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=h;h=D;try{return X()}finally{h=q}},t.unstable_scheduleCallback=function(D,X,q){var se=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?se+q:se):q=se,D){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,D={id:d++,callback:X,priorityLevel:D,startTime:q,expirationTime:me,sortIndex:-1},q>se?(D.sortIndex=q,e(u,D),n(l)===null&&D===n(u)&&(y?(c(R),R=-1):y=!0,K(x,q-se))):(D.sortIndex=me,e(l,D),_||p||(_=!0,G(T))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var X=h;return function(){var q=h;h=X;try{return D.apply(this,arguments)}finally{h=q}}}})(cm);um.exports=cm;var Y_=um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=Tt,Sn=Y_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,Ss={};function Or(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(Ss[t]=e,t=0;t<e.length;t++)fm.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,K_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},Fh={};function Z_(t){return Cc.call(Fh,t)?!0:Cc.call(Oh,t)?!1:K_.test(t)?Fh[t]=!0:(Oh[t]=!0,!1)}function Q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J_(t,e,n,i){if(e===null||typeof e>"u"||Q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Md=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Md,Ed);Ht[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Md,Ed);Ht[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Md,Ed);Ht[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J_(e,n,r,i)&&(n=null),i||r===null?Z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),pm=Symbol.for("react.offscreen"),kh=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,xu;function ss(t){if(xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xu=e&&e[1]||""}return`
`+xu+t}var Su=!1;function Mu(t,e){if(!t||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ss(t):""}function e2(t){switch(t.tag){case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case to:return"Fragment";case eo:return"Portal";case Ac:return"Profiler";case Td:return"StrictMode";case Rc:return"Suspense";case bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hm:return(t.displayName||"Context")+".Consumer";case dm:return(t._context.displayName||"Context")+".Provider";case Cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:Pc(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return Pc(t(e))}catch{}}return null}function t2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pc(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n2(t){var e=mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=n2(t))}function gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lc(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vm(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function Dc(t,e){vm(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ic(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ic(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var as=Array.isArray;function po(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(as(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function _m(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i2=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){i2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function Sm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function Mm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var r2=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oc(t,e){if(e){if(r2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kc=null;function Rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zc=null,mo=null,go=null;function Gh(t){if(t=$s(t)){if(typeof zc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Ql(e),zc(t.stateNode,t.type,e))}}function Em(t){mo?go?go.push(t):go=[t]:mo=t}function wm(){if(mo){var t=mo,e=go;if(go=mo=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function Tm(t,e){return t(e)}function Cm(){}var Eu=!1;function Am(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return Tm(t,e,n)}finally{Eu=!1,(mo!==null||go!==null)&&(Cm(),wm())}}function Es(t,e){var n=t.stateNode;if(n===null)return null;var i=Ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Bc=!1;if(Si)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{Bc=!1}function o2(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var hs=!1,cl=null,fl=!1,Hc=null,s2={onError:function(t){hs=!0,cl=t}};function a2(t,e,n,i,r,o,s,a,l){hs=!1,cl=null,o2.apply(s2,arguments)}function l2(t,e,n,i,r,o,s,a,l){if(a2.apply(this,arguments),hs){if(hs){var u=cl;hs=!1,cl=null}else throw Error(ee(198));fl||(fl=!0,Hc=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Fr(t)!==t)throw Error(ee(188))}function u2(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Wh(r),t;if(o===i)return Wh(r),e;o=o.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function bm(t){return t=u2(t),t!==null?Pm(t):null}function Pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pm(t);if(e!==null)return e;t=t.sibling}return null}var Lm=Sn.unstable_scheduleCallback,Xh=Sn.unstable_cancelCallback,c2=Sn.unstable_shouldYield,f2=Sn.unstable_requestPaint,Ct=Sn.unstable_now,d2=Sn.unstable_getCurrentPriorityLevel,bd=Sn.unstable_ImmediatePriority,Dm=Sn.unstable_UserBlockingPriority,dl=Sn.unstable_NormalPriority,h2=Sn.unstable_LowPriority,Im=Sn.unstable_IdlePriority,Yl=null,ni=null;function p2(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:v2,m2=Math.log,g2=Math.LN2;function v2(t){return t>>>=0,t===0?32:31-(m2(t)/g2|0)|0}var ua=64,ca=4194304;function ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ls(a):(o&=s,o!==0&&(i=ls(o)))}else s=n&~r,s!==0?i=ls(s):o!==0&&(i=ls(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function _2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Wn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=_2(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function x2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Um(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Om,Ld,Fm,km,zm,Gc=!1,fa=[],Gi=null,Wi=null,Xi=null,ws=new Map,Ts=new Map,ki=[],S2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(e.pointerId)}}function qo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=$s(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M2(t,e,n,i,r){switch(e){case"focusin":return Gi=qo(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=qo(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=qo(Xi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ws.set(o,qo(ws.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ts.set(o,qo(Ts.get(o)||null,t,e,n,i,r)),!0}return!1}function Bm(t){var e=Sr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rm(n),e!==null){t.blockedOn=e,zm(t.priority,function(){Fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);kc=i,n.target.dispatchEvent(i),kc=null}else return e=$s(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){$a(t)&&n.delete(e)}function E2(){Gc=!1,Gi!==null&&$a(Gi)&&(Gi=null),Wi!==null&&$a(Wi)&&(Wi=null),Xi!==null&&$a(Xi)&&(Xi=null),ws.forEach($h),Ts.forEach($h)}function Ko(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,E2)))}function Cs(t){function e(r){return Ko(r,t)}if(0<fa.length){Ko(fa[0],t);for(var n=1;n<fa.length;n++){var i=fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Ko(Gi,t),Wi!==null&&Ko(Wi,t),Xi!==null&&Ko(Xi,t),ws.forEach(e),Ts.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)Bm(n),n.blockedOn===null&&ki.shift()}var vo=Ai.ReactCurrentBatchConfig,pl=!0;function w2(t,e,n,i){var r=tt,o=vo.transition;vo.transition=null;try{tt=1,Dd(t,e,n,i)}finally{tt=r,vo.transition=o}}function T2(t,e,n,i){var r=tt,o=vo.transition;vo.transition=null;try{tt=4,Dd(t,e,n,i)}finally{tt=r,vo.transition=o}}function Dd(t,e,n,i){if(pl){var r=Wc(t,e,n,i);if(r===null)Nu(t,e,i,ml,n),jh(t,i);else if(M2(r,t,e,n,i))i.stopPropagation();else if(jh(t,i),e&4&&-1<S2.indexOf(t)){for(;r!==null;){var o=$s(r);if(o!==null&&Om(o),o=Wc(t,e,n,i),o===null&&Nu(t,e,i,ml,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Nu(t,e,i,null,n)}}var ml=null;function Wc(t,e,n,i){if(ml=null,t=Rd(i),t=Sr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function Hm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d2()){case bd:return 1;case Dm:return 4;case dl:case h2:return 16;case Im:return 536870912;default:return 16}default:return 16}}var Hi=null,Id=null,Ya=null;function Vm(){if(Ya)return Ya;var t,e=Id,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ya=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Yh(){return!1}function En(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?da:Yh,this.isPropagationStopped=Yh,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=En(Vo),js=St({},Vo,{view:0,detail:0}),C2=En(js),Tu,Cu,Zo,ql=St({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Tu=t.screenX-Zo.screenX,Cu=t.screenY-Zo.screenY):Cu=Tu=0,Zo=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),qh=En(ql),A2=St({},ql,{dataTransfer:0}),R2=En(A2),b2=St({},js,{relatedTarget:0}),Au=En(b2),P2=St({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),L2=En(P2),D2=St({},Vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I2=En(D2),N2=St({},Vo,{data:0}),Kh=En(N2),U2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F2[t])?!!e[t]:!1}function Ud(){return k2}var z2=St({},js,{key:function(t){if(t.key){var e=U2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B2=En(z2),H2=St({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=En(H2),V2=St({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),G2=En(V2),W2=St({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),X2=En(W2),j2=St({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$2=En(j2),Y2=[9,13,27,32],Od=Si&&"CompositionEvent"in window,ps=null;Si&&"documentMode"in document&&(ps=document.documentMode);var q2=Si&&"TextEvent"in window&&!ps,Gm=Si&&(!Od||ps&&8<ps&&11>=ps),Qh=" ",Jh=!1;function Wm(t,e){switch(t){case"keyup":return Y2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function K2(t,e){switch(t){case"compositionend":return Xm(e);case"keypress":return e.which!==32?null:(Jh=!0,Qh);case"textInput":return t=e.data,t===Qh&&Jh?null:t;default:return null}}function Z2(t,e){if(no)return t==="compositionend"||!Od&&Wm(t,e)?(t=Vm(),Ya=Id=Hi=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gm&&e.locale!=="ko"?null:e.data;default:return null}}var Q2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q2[t.type]:e==="textarea"}function jm(t,e,n,i){Em(i),e=gl(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ms=null,As=null;function J2(t){ig(t,0)}function Kl(t){var e=oo(t);if(gm(e))return t}function e1(t,e){if(t==="change")return e}var $m=!1;if(Si){var Ru;if(Si){var bu="oninput"in document;if(!bu){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),bu=typeof tp.oninput=="function"}Ru=bu}else Ru=!1;$m=Ru&&(!document.documentMode||9<document.documentMode)}function np(){ms&&(ms.detachEvent("onpropertychange",Ym),As=ms=null)}function Ym(t){if(t.propertyName==="value"&&Kl(As)){var e=[];jm(e,As,t,Rd(t)),Am(J2,e)}}function t1(t,e,n){t==="focusin"?(np(),ms=e,As=n,ms.attachEvent("onpropertychange",Ym)):t==="focusout"&&np()}function n1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(As)}function i1(t,e){if(t==="click")return Kl(e)}function r1(t,e){if(t==="input"||t==="change")return Kl(e)}function o1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:o1;function Rs(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cc.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Km(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function s1(t){var e=Km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(i!==null&&Fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=rp(n,o);var s=rp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a1=Si&&"documentMode"in document&&11>=document.documentMode,io=null,Xc=null,gs=null,jc=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||io==null||io!==ul(i)||(i=io,"selectionStart"in i&&Fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gs&&Rs(gs,i)||(gs=i,i=gl(Xc,"onSelect"),0<i.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=io)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Pu={},Zm={};Si&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Zl(t){if(Pu[t])return Pu[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zm)return Pu[t]=e[n];return t}var Qm=Zl("animationend"),Jm=Zl("animationiteration"),eg=Zl("animationstart"),tg=Zl("transitionend"),ng=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){ng.set(t,e),Or(e,[t])}for(var Lu=0;Lu<sp.length;Lu++){var Du=sp[Lu],l1=Du.toLowerCase(),u1=Du[0].toUpperCase()+Du.slice(1);ir(l1,"on"+u1)}ir(Qm,"onAnimationEnd");ir(Jm,"onAnimationIteration");ir(eg,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(tg,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c1=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,l2(i,e,void 0,t),t.currentTarget=null}function ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ap(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ap(r,a,u),o=l}}}if(fl)throw t=Hc,fl=!1,Hc=null,t}function ct(t,e){var n=e[Zc];n===void 0&&(n=e[Zc]=new Set);var i=t+"__bubble";n.has(i)||(rg(e,t,2,!1),n.add(i))}function Iu(t,e,n){var i=0;e&&(i|=4),rg(n,t,i,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function bs(t){if(!t[pa]){t[pa]=!0,fm.forEach(function(n){n!=="selectionchange"&&(c1.has(n)||Iu(n,!1,t),Iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,Iu("selectionchange",!1,e))}}function rg(t,e,n,i){switch(Hm(e)){case 1:var r=w2;break;case 4:r=T2;break;default:r=Dd}n=r.bind(null,e,n,t),r=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Sr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Am(function(){var u=o,d=Rd(n),f=[];e:{var h=ng.get(t);if(h!==void 0){var p=Nd,_=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=B2;break;case"focusin":_="focus",p=Au;break;case"focusout":_="blur",p=Au;break;case"beforeblur":case"afterblur":p=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=R2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=G2;break;case Qm:case Jm:case eg:p=L2;break;case tg:p=X2;break;case"scroll":p=C2;break;case"wheel":p=$2;break;case"copy":case"cut":case"paste":p=I2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zh}var y=(e&4)!==0,m=!y&&t==="scroll",c=y?h!==null?h+"Capture":null:h;y=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,c!==null&&(x=Es(g,c),x!=null&&y.push(Ps(g,x,v)))),m)break;g=g.return}0<y.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==kc&&(_=n.relatedTarget||n.fromElement)&&(Sr(_)||_[Mi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Sr(_):null,_!==null&&(m=Fr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=qh,x="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zh,x="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?h:oo(p),v=_==null?h:oo(_),h=new y(x,g+"leave",p,n,d),h.target=m,h.relatedTarget=v,x=null,Sr(d)===u&&(y=new y(c,g+"enter",_,n,d),y.target=v,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,c=_,g=0,v=y;v;v=zr(v))g++;for(v=0,x=c;x;x=zr(x))v++;for(;0<g-v;)y=zr(y),g--;for(;0<v-g;)c=zr(c),v--;for(;g--;){if(y===c||c!==null&&y===c.alternate)break t;y=zr(y),c=zr(c)}y=null}else y=null;p!==null&&lp(f,h,p,y,!1),_!==null&&m!==null&&lp(f,m,_,y,!0)}}e:{if(h=u?oo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=e1;else if(ep(h))if($m)T=r1;else{T=n1;var C=t1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=i1);if(T&&(T=T(t,u))){jm(f,T,n,d);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ic(h,"number",h.value)}switch(C=u?oo(u):window,t){case"focusin":(ep(C)||C.contentEditable==="true")&&(io=C,Xc=u,gs=null);break;case"focusout":gs=Xc=io=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,op(f,n,d);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":op(f,n,d)}var A;if(Od)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else no?Wm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Gm&&n.locale!=="ko"&&(no||R!=="onCompositionStart"?R==="onCompositionEnd"&&no&&(A=Vm()):(Hi=d,Id="value"in Hi?Hi.value:Hi.textContent,no=!0)),C=gl(u,R),0<C.length&&(R=new Kh(R,t,null,n,d),f.push({event:R,listeners:C}),A?R.data=A:(A=Xm(n),A!==null&&(R.data=A)))),(A=q2?K2(t,n):Z2(t,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(d=new Kh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=A))}ig(f,e)})}function Ps(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Es(t,n),o!=null&&i.unshift(Ps(t,o,r)),o=Es(t,e),o!=null&&i.push(Ps(t,o,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Es(n,o),l!=null&&s.unshift(Ps(n,l,a))):r||(l=Es(n,o),l!=null&&s.push(Ps(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var f1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(d1,"")}function ma(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(ee(425))}function vl(){}var $c=null,Yc=null;function qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(t){return cp.resolve(null).then(t).catch(m1)}:Kc;function m1(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Cs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Cs(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Go=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Go,Ls="__reactProps$"+Go,Mi="__reactContainer$"+Go,Zc="__reactEvents$"+Go,g1="__reactListeners$"+Go,v1="__reactHandles$"+Go;function Sr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[Qn])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function $s(t){return t=t[Qn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Ql(t){return t[Ls]||null}var Qc=[],so=-1;function rr(t){return{current:t}}function ft(t){0>so||(t.current=Qc[so],Qc[so]=null,so--)}function lt(t,e){so++,Qc[so]=t.current,t.current=e}var er={},Yt=rr(er),ln=rr(!1),Rr=er;function To(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function _l(){ft(ln),ft(Yt)}function dp(t,e,n){if(Yt.current!==er)throw Error(ee(168));lt(Yt,e),lt(ln,n)}function og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,t2(t)||"Unknown",r));return St({},n,i)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Rr=Yt.current,lt(Yt,t),lt(ln,ln.current),!0}function hp(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=og(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ft(ln),ft(Yt),lt(Yt,t)):ft(ln),lt(ln,n)}var pi=null,Jl=!1,Ou=!1;function sg(t){pi===null?pi=[t]:pi.push(t)}function _1(t){Jl=!0,sg(t)}function or(){if(!Ou&&pi!==null){Ou=!0;var t=0,e=tt;try{var n=pi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,Jl=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),Lm(bd,or),r}finally{tt=e,Ou=!1}}return null}var ao=[],lo=0,xl=null,Sl=0,Rn=[],bn=0,br=null,gi=1,vi="";function mr(t,e){ao[lo++]=Sl,ao[lo++]=xl,xl=t,Sl=e}function ag(t,e,n){Rn[bn++]=gi,Rn[bn++]=vi,Rn[bn++]=br,br=t;var i=gi;t=vi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var o=32-Wn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,gi=1<<32-Wn(e)+r|n<<r|i,vi=o+t}else gi=1<<o|n<<r|i,vi=t}function kd(t){t.return!==null&&(mr(t,1),ag(t,1,0))}function zd(t){for(;t===xl;)xl=ao[--lo],ao[lo]=null,Sl=ao[--lo],ao[lo]=null;for(;t===br;)br=Rn[--bn],Rn[bn]=null,vi=Rn[--bn],Rn[bn]=null,gi=Rn[--bn],Rn[bn]=null}var yn=null,_n=null,mt=!1,Hn=null;function lg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function Jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ef(t){if(mt){var e=_n;if(e){var n=e;if(!pp(t,e)){if(Jc(t))throw Error(ee(418));e=ji(n.nextSibling);var i=yn;e&&pp(t,e)?lg(i,n):(t.flags=t.flags&-4097|2,mt=!1,yn=t)}}else{if(Jc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,mt=!1,yn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function ga(t){if(t!==yn)return!1;if(!mt)return mp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qc(t.type,t.memoizedProps)),e&&(e=_n)){if(Jc(t))throw ug(),Error(ee(418));for(;e;)lg(t,e),e=ji(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?ji(t.stateNode.nextSibling):null;return!0}function ug(){for(var t=_n;t;)t=ji(t.nextSibling)}function Co(){_n=yn=null,mt=!1}function Bd(t){Hn===null?Hn=[t]:Hn.push(t)}var y1=Ai.ReactCurrentBatchConfig;function Qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function va(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function cg(t){function e(c,g){if(t){var v=c.deletions;v===null?(c.deletions=[g],c.flags|=16):v.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Ki(c,g),c.index=0,c.sibling=null,c}function o(c,g,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<g?(c.flags|=2,g):v):(c.flags|=2,g)):(c.flags|=1048576,g)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,v,x){return g===null||g.tag!==6?(g=Gu(v,c.mode,x),g.return=c,g):(g=r(g,v),g.return=c,g)}function l(c,g,v,x){var T=v.type;return T===to?d(c,g,v.props.children,x,v.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ui&&gp(T)===g.type)?(x=r(g,v.props),x.ref=Qo(c,g,v),x.return=c,x):(x=nl(v.type,v.key,v.props,null,c.mode,x),x.ref=Qo(c,g,v),x.return=c,x)}function u(c,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Wu(v,c.mode,x),g.return=c,g):(g=r(g,v.children||[]),g.return=c,g)}function d(c,g,v,x,T){return g===null||g.tag!==7?(g=Ar(v,c.mode,x,T),g.return=c,g):(g=r(g,v),g.return=c,g)}function f(c,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gu(""+g,c.mode,v),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:return v=nl(g.type,g.key,g.props,null,c.mode,v),v.ref=Qo(c,null,g),v.return=c,v;case eo:return g=Wu(g,c.mode,v),g.return=c,g;case Ui:var x=g._init;return f(c,x(g._payload),v)}if(as(g)||$o(g))return g=Ar(g,c.mode,v,null),g.return=c,g;va(c,g)}return null}function h(c,g,v,x){var T=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(c,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sa:return v.key===T?l(c,g,v,x):null;case eo:return v.key===T?u(c,g,v,x):null;case Ui:return T=v._init,h(c,g,T(v._payload),x)}if(as(v)||$o(v))return T!==null?null:d(c,g,v,x,null);va(c,v)}return null}function p(c,g,v,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(v)||null,a(g,c,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case sa:return c=c.get(x.key===null?v:x.key)||null,l(g,c,x,T);case eo:return c=c.get(x.key===null?v:x.key)||null,u(g,c,x,T);case Ui:var C=x._init;return p(c,g,v,C(x._payload),T)}if(as(x)||$o(x))return c=c.get(v)||null,d(g,c,x,T,null);va(g,x)}return null}function _(c,g,v,x){for(var T=null,C=null,A=g,R=g=0,S=null;A!==null&&R<v.length;R++){A.index>R?(S=A,A=null):S=A.sibling;var M=h(c,A,v[R],x);if(M===null){A===null&&(A=S);break}t&&A&&M.alternate===null&&e(c,A),g=o(M,g,R),C===null?T=M:C.sibling=M,C=M,A=S}if(R===v.length)return n(c,A),mt&&mr(c,R),T;if(A===null){for(;R<v.length;R++)A=f(c,v[R],x),A!==null&&(g=o(A,g,R),C===null?T=A:C.sibling=A,C=A);return mt&&mr(c,R),T}for(A=i(c,A);R<v.length;R++)S=p(A,c,R,v[R],x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?R:S.key),g=o(S,g,R),C===null?T=S:C.sibling=S,C=S);return t&&A.forEach(function(P){return e(c,P)}),mt&&mr(c,R),T}function y(c,g,v,x){var T=$o(v);if(typeof T!="function")throw Error(ee(150));if(v=T.call(v),v==null)throw Error(ee(151));for(var C=T=null,A=g,R=g=0,S=null,M=v.next();A!==null&&!M.done;R++,M=v.next()){A.index>R?(S=A,A=null):S=A.sibling;var P=h(c,A,M.value,x);if(P===null){A===null&&(A=S);break}t&&A&&P.alternate===null&&e(c,A),g=o(P,g,R),C===null?T=P:C.sibling=P,C=P,A=S}if(M.done)return n(c,A),mt&&mr(c,R),T;if(A===null){for(;!M.done;R++,M=v.next())M=f(c,M.value,x),M!==null&&(g=o(M,g,R),C===null?T=M:C.sibling=M,C=M);return mt&&mr(c,R),T}for(A=i(c,A);!M.done;R++,M=v.next())M=p(A,c,R,M.value,x),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),g=o(M,g,R),C===null?T=M:C.sibling=M,C=M);return t&&A.forEach(function(N){return e(c,N)}),mt&&mr(c,R),T}function m(c,g,v,x){if(typeof v=="object"&&v!==null&&v.type===to&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case sa:e:{for(var T=v.key,C=g;C!==null;){if(C.key===T){if(T=v.type,T===to){if(C.tag===7){n(c,C.sibling),g=r(C,v.props.children),g.return=c,c=g;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ui&&gp(T)===C.type){n(c,C.sibling),g=r(C,v.props),g.ref=Qo(c,C,v),g.return=c,c=g;break e}n(c,C);break}else e(c,C);C=C.sibling}v.type===to?(g=Ar(v.props.children,c.mode,x,v.key),g.return=c,c=g):(x=nl(v.type,v.key,v.props,null,c.mode,x),x.ref=Qo(c,g,v),x.return=c,c=x)}return s(c);case eo:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(c,g.sibling),g=r(g,v.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Wu(v,c.mode,x),g.return=c,c=g}return s(c);case Ui:return C=v._init,m(c,g,C(v._payload),x)}if(as(v))return _(c,g,v,x);if($o(v))return y(c,g,v,x);va(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,v),g.return=c,c=g):(n(c,g),g=Gu(v,c.mode,x),g.return=c,c=g),s(c)):n(c,g)}return m}var Ao=cg(!0),fg=cg(!1),Ml=rr(null),El=null,uo=null,Hd=null;function Vd(){Hd=uo=El=null}function Gd(t){var e=Ml.current;ft(Ml),t._currentValue=e}function tf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _o(t,e){El=t,Hd=uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},uo===null){if(El===null)throw Error(ee(308));uo=t,El.dependencies={lanes:0,firstContext:t}}else uo=uo.next=t;return e}var Mr=null;function Wd(t){Mr===null?Mr=[t]:Mr.push(t)}function dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Wd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pd(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;Oi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=St({},f,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Lr|=s,t.lanes=s,t.memoizedState=f}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ys={},ii=rr(Ys),Ds=rr(Ys),Is=rr(Ys);function Er(t){if(t===Ys)throw Error(ee(174));return t}function jd(t,e){switch(lt(Is,e),lt(Ds,t),lt(ii,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uc(e,t)}ft(ii),lt(ii,e)}function Ro(){ft(ii),ft(Ds),ft(Is)}function pg(t){Er(Is.current);var e=Er(ii.current),n=Uc(e,t.type);e!==n&&(lt(Ds,t),lt(ii,n))}function $d(t){Ds.current===t&&(ft(ii),ft(Ds))}var yt=rr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function Yd(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var Za=Ai.ReactCurrentDispatcher,ku=Ai.ReactCurrentBatchConfig,Pr=0,xt=null,Pt=null,Ft=null,Cl=!1,vs=!1,Ns=0,x1=0;function Gt(){throw Error(ee(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Kd(t,e,n,i,r,o){if(Pr=o,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?w1:T1,t=n(i,r),vs){o=0;do{if(vs=!1,Ns=0,25<=o)throw Error(ee(301));o+=1,Ft=Pt=null,e.updateQueue=null,Za.current=C1,t=n(i,r)}while(vs)}if(Za.current=Al,e=Pt!==null&&Pt.next!==null,Pr=0,Ft=Pt=xt=null,Cl=!1,e)throw Error(ee(300));return t}function Zd(){var t=Ns!==0;return Ns=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Nn(){if(Pt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?xt.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(ee(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Us(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Pr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,xt.lanes|=d,Lr|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,$n(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,xt.lanes|=o,Lr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);$n(o,e.memoizedState)||(an=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function mg(){}function gg(t,e){var n=xt,i=Nn(),r=e(),o=!$n(i.memoizedState,r);if(o&&(i.memoizedState=r,an=!0),i=i.queue,Qd(yg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Os(9,_g.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ee(349));Pr&30||vg(n,e,r)}return r}function vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _g(t,e,n,i){e.value=n,e.getSnapshot=i,xg(e)&&Sg(t)}function yg(t,e,n){return n(function(){xg(e)&&Sg(t)})}function xg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Sg(t){var e=Ei(t,1);e!==null&&Xn(e,t,1,-1)}function yp(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},e.queue=t,t=t.dispatch=E1.bind(null,xt,t),[e.memoizedState,t]}function Os(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mg(){return Nn().memoizedState}function Qa(t,e,n,i){var r=Kn();xt.flags|=t,r.memoizedState=Os(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=Nn();i=i===void 0?null:i;var o=void 0;if(Pt!==null){var s=Pt.memoizedState;if(o=s.destroy,i!==null&&qd(i,s.deps)){r.memoizedState=Os(e,n,o,i);return}}xt.flags|=t,r.memoizedState=Os(1|e,n,o,i)}function xp(t,e){return Qa(8390656,8,t,e)}function Qd(t,e){return eu(2048,8,t,e)}function Eg(t,e){return eu(4,2,t,e)}function wg(t,e){return eu(4,4,t,e)}function Tg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cg(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,Tg.bind(null,e,t),n)}function Jd(){}function Ag(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bg(t,e,n){return Pr&21?($n(n,e)||(n=Nm(),xt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function S1(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=ku.transition;ku.transition={};try{t(!1),e()}finally{tt=n,ku.transition=i}}function Pg(){return Nn().memoizedState}function M1(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Lg(t))Dg(e,n);else if(n=dg(t,e,n,i),n!==null){var r=Jt();Xn(n,t,i,r),Ig(n,e,i)}}function E1(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lg(t))Dg(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,s)){var l=e.interleaved;l===null?(r.next=r,Wd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dg(t,e,r,i),n!==null&&(r=Jt(),Xn(n,t,i,r),Ig(n,e,i))}}function Lg(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Dg(t,e){vs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ig(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pd(t,n)}}var Al={readContext:In,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},w1={readContext:In,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,Tg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M1.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:Jd,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=S1.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=Kn();if(mt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),kt===null)throw Error(ee(349));Pr&30||vg(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,xp(yg.bind(null,i,o,t),[t]),i.flags|=2048,Os(9,_g.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Kn(),e=kt.identifierPrefix;if(mt){var n=vi,i=gi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T1={readContext:In,useCallback:Ag,useContext:In,useEffect:Qd,useImperativeHandle:Cg,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Rg,useReducer:zu,useRef:Mg,useState:function(){return zu(Us)},useDebugValue:Jd,useDeferredValue:function(t){var e=Nn();return bg(e,Pt.memoizedState,t)},useTransition:function(){var t=zu(Us)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:mg,useSyncExternalStore:gg,useId:Pg,unstable_isNewReconciler:!1},C1={readContext:In,useCallback:Ag,useContext:In,useEffect:Qd,useImperativeHandle:Cg,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Rg,useReducer:Bu,useRef:Mg,useState:function(){return Bu(Us)},useDebugValue:Jd,useDeferredValue:function(t){var e=Nn();return Pt===null?e.memoizedState=t:bg(e,Pt.memoizedState,t)},useTransition:function(){var t=Bu(Us)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:mg,useSyncExternalStore:gg,useId:Pg,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=qi(t),o=yi(i,r);o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Xn(e,t,r,i),Ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=qi(t),o=yi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Xn(e,t,r,i),Ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=qi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Xn(e,t,i,n),Ka(e,t,i))}};function Sp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,i)||!Rs(r,o):!0}function Ng(t,e,n){var i=!1,r=er,o=e.contextType;return typeof o=="object"&&o!==null?o=In(o):(r=un(e)?Rr:Yt.current,i=e.contextTypes,o=(i=i!=null)?To(t,r):er),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=In(o):(o=un(e)?Rr:Yt.current,r.context=To(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(nf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e){try{var n="",i=e;do n+=e2(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var A1=typeof WeakMap=="function"?WeakMap:Map;function Ug(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,mf=i),of(t,e)},n}function Og(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new A1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H1.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var R1=Ai.ReactCurrentOwner,an=!1;function Qt(t,e,n,i){e.child=t===null?fg(e,null,n,i):Ao(e,t.child,n,i)}function Cp(t,e,n,i,r){n=n.render;var o=e.ref;return _o(e,r),i=Kd(t,e,n,i,o,r),n=Zd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&n&&kd(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Ap(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!ah(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Fg(t,e,o,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(s,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ki(o,i),t.ref=e.ref,t.return=e,e.child=t}function Fg(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Rs(o,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,wi(t,e,r)}return sf(t,e,n,i,r)}function kg(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(fo,vn),vn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(fo,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,lt(fo,vn),vn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,lt(fo,vn),vn|=i;return Qt(t,e,r,n),e.child}function zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,i,r){var o=un(n)?Rr:Yt.current;return o=To(e,o),_o(e,r),n=Kd(t,e,n,i,o,r),i=Zd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&i&&kd(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Rp(t,e,n,i,r){if(un(n)){var o=!0;yl(e)}else o=!1;if(_o(e,r),e.stateNode===null)Ja(t,e),Ng(e,n,i),rf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=un(n)?Rr:Yt.current,u=To(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Mp(e,s,i,u),Oi=!1;var h=e.memoizedState;s.state=h,wl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||ln.current||Oi?(typeof d=="function"&&(nf(e,n,d,i),l=e.memoizedState),(a=Oi||Sp(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,hg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=un(n)?Rr:Yt.current,l=To(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mp(e,s,i,l),Oi=!1,h=e.memoizedState,s.state=h,wl(e,i,s,r);var _=e.memoizedState;a!==f||h!==_||ln.current||Oi?(typeof p=="function"&&(nf(e,n,p,i),_=e.memoizedState),(u=Oi||Sp(e,n,u,i,h,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return af(t,e,n,i,o,r)}function af(t,e,n,i,r,o){zg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&hp(e,n,!1),wi(t,e,o);i=e.stateNode,R1.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ao(e,t.child,null,o),e.child=Ao(e,null,a,o)):Qt(t,e,a,o),e.memoizedState=i.state,r&&hp(e,n,!0),e.child}function Bg(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),jd(t,e.containerInfo)}function bp(t,e,n,i,r){return Co(),Bd(r),e.flags|=256,Qt(t,e,n,i),e.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hg(t,e,n){var i=e.pendingProps,r=yt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(yt,r&1),t===null)return ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ru(s,i,0,null),t=Ar(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=uf(n),e.memoizedState=lf,t):eh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return b1(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Ki(a,o):(o=Ar(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?uf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=lf,i}return o=t.child,t=o.sibling,i=Ki(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function eh(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,i){return i!==null&&Bd(i),Ao(e,t.child,null,n),t=eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b1(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Hu(Error(ee(422))),_a(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),o=Ar(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ao(e,t.child,null,s),e.child.memoizedState=uf(s),e.memoizedState=lf,o);if(!(e.mode&1))return _a(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ee(419)),i=Hu(o,i,void 0),_a(t,e,s,i)}if(a=(s&t.childLanes)!==0,an||a){if(i=kt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ei(t,r),Xn(i,t,r,-1))}return sh(),i=Hu(Error(ee(421))),_a(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=V1.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,_n=ji(r.nextSibling),yn=e,mt=!0,Hn=null,t!==null&&(Rn[bn++]=gi,Rn[bn++]=vi,Rn[bn++]=br,gi=t.id,vi=t.overflow,br=e),e=eh(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),tf(t.return,e,n)}function Vu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Vg(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Qt(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vu(e,!0,n,null,o);break;case"together":Vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function P1(t,e,n){switch(e.tag){case 3:Bg(e),Co();break;case 5:pg(e);break;case 1:un(e.type)&&yl(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Hg(t,e,n):(lt(yt,yt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);lt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Vg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,kg(t,e,n)}return wi(t,e,n)}var Gg,cf,Wg,Xg;Gg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cf=function(){};Wg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ii.current);var o=null;switch(n){case"input":r=Lc(t,r),i=Lc(t,i),o=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),o=[];break;case"textarea":r=Nc(t,r),i=Nc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}Oc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Xg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Jo(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L1(t,e,n){var i=e.pendingProps;switch(zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return un(e.type)&&_l(),Wt(e),null;case 3:return i=e.stateNode,Ro(),ft(ln),ft(Yt),Yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(_f(Hn),Hn=null))),cf(t,e),Wt(e),null;case 5:$d(e);var r=Er(Is.current);if(n=e.type,t!==null&&e.stateNode!=null)Wg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Wt(e),null}if(t=Er(ii.current),ga(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Qn]=e,i[Ls]=o,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<us.length;r++)ct(us[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":zh(i,o),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ct("invalid",i);break;case"textarea":Hh(i,o),ct("invalid",i)}Oc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ma(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ma(i.textContent,a,t),r=["children",""+a]):Ss.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ct("scroll",i)}switch(n){case"input":aa(i),Bh(i,o,!0);break;case"textarea":aa(i),Vh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Qn]=e,t[Ls]=i,Gg(t,e,!1,!1),e.stateNode=t;e:{switch(s=Fc(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<us.length;r++)ct(us[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":zh(t,i),r=Lc(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Hh(t,i),r=Nc(t,i),ct("invalid",t);break;default:r=i}Oc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Mm(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ss.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ct("scroll",t):l!=null&&wd(t,o,l,s))}switch(n){case"input":aa(t),Bh(t,i,!1);break;case"textarea":aa(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?po(t,!!i.multiple,o,!1):i.defaultValue!=null&&po(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)Xg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Er(Is.current),Er(ii.current),ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(o=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Wt(e),null;case 13:if(ft(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&_n!==null&&e.mode&1&&!(e.flags&128))ug(),Co(),e.flags|=98560,o=!1;else if(o=ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ee(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ee(317));o[Qn]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),o=!1}else Hn!==null&&(_f(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Lt===0&&(Lt=3):sh())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Ro(),cf(t,e),t===null&&bs(e.stateNode.containerInfo),Wt(e),null;case 10:return Gd(e.type._context),Wt(e),null;case 17:return un(e.type)&&_l(),Wt(e),null;case 19:if(ft(yt),o=e.memoizedState,o===null)return Wt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Jo(o,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Tl(t),s!==null){for(e.flags|=128,Jo(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(yt,yt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ct()>Po&&(e.flags|=128,i=!0,Jo(o,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!mt)return Wt(e),null}else 2*Ct()-o.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,i=!0,Jo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ct(),e.sibling=null,n=yt.current,lt(yt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function D1(t,e){switch(zd(e),e.tag){case 1:return un(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),ft(ln),ft(Yt),Yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(ft(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(yt),null;case 4:return Ro(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var ya=!1,$t=!1,I1=typeof WeakSet=="function"?WeakSet:Set,he=null;function co(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function ff(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Lp=!1;function N1(t,e){if($c=pl,t=Km(),Fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},pl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){Et(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=Lp,Lp=!1,_}function _s(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&ff(e,n,o)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jg(t){var e=t.alternate;e!==null&&(t.alternate=null,jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Ls],delete e[Zc],delete e[g1],delete e[v1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}var zt=null,Bn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)Yg(t,e,n),n=n.sibling}function Yg(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:$t||co(n,e);case 6:var i=zt,r=Bn;zt=null,Ri(t,e,n),zt=i,Bn=r,zt!==null&&(Bn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Bn?(t=zt,n=n.stateNode,t.nodeType===8?Uu(t.parentNode,n):t.nodeType===1&&Uu(t,n),Cs(t)):Uu(zt,n.stateNode));break;case 4:i=zt,r=Bn,zt=n.stateNode.containerInfo,Bn=!0,Ri(t,e,n),zt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ff(n,e,s),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!$t&&(co(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ri(t,e,n),$t=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I1),e.forEach(function(i){var r=G1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Bn=!1;break e;case 3:zt=a.stateNode.containerInfo,Bn=!0;break e;case 4:zt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(zt===null)throw Error(ee(160));Yg(o,s,r),zt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qg(e,t),e=e.sibling}function qg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),qn(t),i&4){try{_s(3,t,t.return),nu(3,t)}catch(y){Et(t,t.return,y)}try{_s(5,t,t.return)}catch(y){Et(t,t.return,y)}}break;case 1:Un(e,t),qn(t),i&512&&n!==null&&co(n,n.return);break;case 5:if(Un(e,t),qn(t),i&512&&n!==null&&co(n,n.return),t.flags&32){var r=t.stateNode;try{Ms(r,"")}catch(y){Et(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vm(r,o),Fc(a,s);var u=Fc(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Mm(r,f):d==="dangerouslySetInnerHTML"?xm(r,f):d==="children"?Ms(r,f):wd(r,d,f,u)}switch(a){case"input":Dc(r,o);break;case"textarea":_m(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?po(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?po(r,!!o.multiple,o.defaultValue,!0):po(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ls]=o}catch(y){Et(t,t.return,y)}}break;case 6:if(Un(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){Et(t,t.return,y)}}break;case 3:if(Un(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cs(e.containerInfo)}catch(y){Et(t,t.return,y)}break;case 4:Un(e,t),qn(t);break;case 13:Un(e,t),qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(ih=Ct())),i&4&&Ip(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||d,Un(e,t),$t=u):Un(e,t),qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(he=t,d=t.child;d!==null;){for(f=he=d;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:_s(4,h,h.return);break;case 1:co(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Et(i,n,y)}}break;case 5:co(h,h.return);break;case 22:if(h.memoizedState!==null){Up(f);continue}}p!==null?(p.return=h,he=p):Up(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sm("display",s))}catch(y){Et(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Et(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),qn(t),i&4&&Ip(t);break;case 21:break;default:Un(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($g(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ms(r,""),i.flags&=-33);var o=Dp(t);pf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Dp(t);hf(t,a,s);break;default:throw Error(ee(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U1(t,e,n){he=t,Kg(t)}function Kg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ya;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=ya;var u=$t;if(ya=s,($t=l)&&!u)for(he=r;he!==null;)s=he,l=s.child,s.tag===22&&s.memoizedState!==null?Op(r):l!==null?(l.return=s,he=l):Op(r);for(;o!==null;)he=o,Kg(o),o=o.sibling;he=r,ya=a,$t=u}Np(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,he=o):Np(t)}}function Np(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&_p(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Cs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}$t||e.flags&512&&df(e)}catch(h){Et(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Up(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Op(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var o=e.return;try{df(e)}catch(l){Et(e,o,l)}break;case 5:var s=e.return;try{df(e)}catch(l){Et(e,s,l)}}}catch(l){Et(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var O1=Math.ceil,Rl=Ai.ReactCurrentDispatcher,th=Ai.ReactCurrentOwner,Dn=Ai.ReactCurrentBatchConfig,Ze=0,kt=null,bt=null,Bt=0,vn=0,fo=rr(0),Lt=0,Fs=null,Lr=0,iu=0,nh=0,ys=null,sn=null,ih=0,Po=1/0,hi=null,bl=!1,mf=null,Yi=null,xa=!1,Vi=null,Pl=0,xs=0,gf=null,el=-1,tl=0;function Jt(){return Ze&6?Ct():el!==-1?el:el=Ct()}function qi(t){return t.mode&1?Ze&2&&Bt!==0?Bt&-Bt:y1.transition!==null?(tl===0&&(tl=Nm()),tl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Hm(t.type)),t):1}function Xn(t,e,n,i){if(50<xs)throw xs=0,gf=null,Error(ee(185));Xs(t,n,i),(!(Ze&2)||t!==kt)&&(t===kt&&(!(Ze&2)&&(iu|=n),Lt===4&&zi(t,Bt)),cn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Po=Ct()+500,Jl&&or()))}function cn(t,e){var n=t.callbackNode;y2(t,e);var i=hl(t,t===kt?Bt:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?_1(Fp.bind(null,t)):sg(Fp.bind(null,t)),p1(function(){!(Ze&6)&&or()}),n=null;else{switch(Um(i)){case 1:n=bd;break;case 4:n=Dm;break;case 16:n=dl;break;case 536870912:n=Im;break;default:n=dl}n=rv(n,Zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zg(t,e){if(el=-1,tl=0,Ze&6)throw Error(ee(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=hl(t,t===kt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ll(t,i);else{e=i;var r=Ze;Ze|=2;var o=Jg();(kt!==t||Bt!==e)&&(hi=null,Po=Ct()+500,Cr(t,e));do try{z1();break}catch(a){Qg(t,a)}while(!0);Vd(),Rl.current=o,Ze=r,bt!==null?e=0:(kt=null,Bt=0,e=Lt)}if(e!==0){if(e===2&&(r=Vc(t),r!==0&&(i=r,e=vf(t,r))),e===1)throw n=Fs,Cr(t,0),zi(t,i),cn(t,Ct()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!F1(r)&&(e=Ll(t,i),e===2&&(o=Vc(t),o!==0&&(i=o,e=vf(t,o))),e===1))throw n=Fs,Cr(t,0),zi(t,i),cn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:gr(t,sn,hi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=ih+500-Ct(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kc(gr.bind(null,t,sn,hi),e);break}gr(t,sn,hi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Wn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O1(i/1960))-i,10<i){t.timeoutHandle=Kc(gr.bind(null,t,sn,hi),i);break}gr(t,sn,hi);break;case 5:gr(t,sn,hi);break;default:throw Error(ee(329))}}}return cn(t,Ct()),t.callbackNode===n?Zg.bind(null,t):null}function vf(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=sn,sn=n,e!==null&&_f(e)),t}function _f(t){sn===null?sn=t:sn.push.apply(sn,t)}function F1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!$n(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~nh,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Fp(t){if(Ze&6)throw Error(ee(327));yo();var e=hl(t,0);if(!(e&1))return cn(t,Ct()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var i=Vc(t);i!==0&&(e=i,n=vf(t,i))}if(n===1)throw n=Fs,Cr(t,0),zi(t,e),cn(t,Ct()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,sn,hi),cn(t,Ct()),null}function rh(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Po=Ct()+500,Jl&&or())}}function Dr(t){Vi!==null&&Vi.tag===0&&!(Ze&6)&&yo();var e=Ze;Ze|=1;var n=Dn.transition,i=tt;try{if(Dn.transition=null,tt=1,t)return t()}finally{tt=i,Dn.transition=n,Ze=e,!(Ze&6)&&or()}}function oh(){vn=fo.current,ft(fo)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h1(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Ro(),ft(ln),ft(Yt),Yd();break;case 5:$d(i);break;case 4:Ro();break;case 13:ft(yt);break;case 19:ft(yt);break;case 10:Gd(i.type._context);break;case 22:case 23:oh()}n=n.return}if(kt=t,bt=t=Ki(t.current,null),Bt=vn=e,Lt=0,Fs=null,nh=iu=Lr=0,sn=ys=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Mr=null}return t}function Qg(t,e){do{var n=bt;try{if(Vd(),Za.current=Al,Cl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Pr=0,Ft=Pt=xt=null,vs=!1,Ns=0,th.current=null,n===null||n.return===null){Lt=1,Fs=e,bt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wp(s);if(p!==null){p.flags&=-257,Tp(p,s,a,o,e),p.mode&1&&Ep(o,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Ep(o,u,e),sh();break e}l=Error(ee(426))}}else if(mt&&a.mode&1){var m=wp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,s,a,o,e),Bd(bo(l,a));break e}}o=l=bo(l,a),Lt!==4&&(Lt=2),ys===null?ys=[o]:ys.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=Ug(o,l,e);vp(o,c);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yi===null||!Yi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Og(o,a,e);vp(o,x);break e}}o=o.return}while(o!==null)}tv(n)}catch(T){e=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Jg(){var t=Rl.current;return Rl.current=Al,t===null?Al:t}function sh(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(Lr&268435455)&&!(iu&268435455)||zi(kt,Bt)}function Ll(t,e){var n=Ze;Ze|=2;var i=Jg();(kt!==t||Bt!==e)&&(hi=null,Cr(t,e));do try{k1();break}catch(r){Qg(t,r)}while(!0);if(Vd(),Ze=n,Rl.current=i,bt!==null)throw Error(ee(261));return kt=null,Bt=0,Lt}function k1(){for(;bt!==null;)ev(bt)}function z1(){for(;bt!==null&&!c2();)ev(bt)}function ev(t){var e=iv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?tv(t):bt=e,th.current=null}function tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D1(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,bt=null;return}}else if(n=L1(n,e,vn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Lt===0&&(Lt=5)}function gr(t,e,n){var i=tt,r=Dn.transition;try{Dn.transition=null,tt=1,B1(t,e,n,i)}finally{Dn.transition=r,tt=i}return null}function B1(t,e,n,i){do yo();while(Vi!==null);if(Ze&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(x2(t,o),t===kt&&(bt=kt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,rv(dl,function(){return yo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dn.transition,Dn.transition=null;var s=tt;tt=1;var a=Ze;Ze|=4,th.current=null,N1(t,n),qg(n,t),s1(Yc),pl=!!$c,Yc=$c=null,t.current=n,U1(n),f2(),Ze=a,tt=s,Dn.transition=o}else t.current=n;if(xa&&(xa=!1,Vi=t,Pl=r),o=t.pendingLanes,o===0&&(Yi=null),p2(n.stateNode),cn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=mf,mf=null,t;return Pl&1&&t.tag!==0&&yo(),o=t.pendingLanes,o&1?t===gf?xs++:(xs=0,gf=t):xs=0,or(),null}function yo(){if(Vi!==null){var t=Um(Pl),e=Dn.transition,n=tt;try{if(Dn.transition=null,tt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Pl=0,Ze&6)throw Error(ee(331));var r=Ze;for(Ze|=4,he=t.current;he!==null;){var o=he,s=o.child;if(he.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:_s(8,d,o)}var f=d.child;if(f!==null)f.return=d,he=f;else for(;he!==null;){d=he;var h=d.sibling,p=d.return;if(jg(d),d===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,he=s;else e:for(;he!==null;){if(o=he,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_s(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,he=c;break e}he=o.return}}var g=t.current;for(he=g;he!==null;){s=he;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,he=v;else e:for(s=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(T){Et(a,a.return,T)}if(a===s){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if(Ze=r,or(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Yl,t)}catch{}i=!0}return i}finally{tt=n,Dn.transition=e}}return!1}function kp(t,e,n){e=bo(n,e),e=Ug(t,e,1),t=$i(t,e,1),e=Jt(),t!==null&&(Xs(t,1,e),cn(t,e))}function Et(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=bo(n,t),t=Og(e,t,1),e=$i(e,t,1),t=Jt(),e!==null&&(Xs(e,1,t),cn(e,t));break}}e=e.return}}function H1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Bt&n)===n&&(Lt===4||Lt===3&&(Bt&130023424)===Bt&&500>Ct()-ih?Cr(t,0):nh|=n),cn(t,e)}function nv(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=Jt();t=Ei(t,e),t!==null&&(Xs(t,e,n),cn(t,n))}function V1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nv(t,n)}function G1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),nv(t,n)}var iv;iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,P1(t,e,n);an=!!(t.flags&131072)}else an=!1,mt&&e.flags&1048576&&ag(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ja(t,e),t=e.pendingProps;var r=To(e,Yt.current);_o(e,n),r=Kd(null,e,i,t,r,n);var o=Zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(o=!0,yl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xd(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,rf(e,i,t,n),e=af(null,e,i,!0,o,n)):(e.tag=0,mt&&o&&kd(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=X1(i),t=zn(i,t),r){case 0:e=sf(null,e,i,t,n);break e;case 1:e=Rp(null,e,i,t,n);break e;case 11:e=Cp(null,e,i,t,n);break e;case 14:e=Ap(null,e,i,zn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Rp(t,e,i,r,n);case 3:e:{if(Bg(e),t===null)throw Error(ee(387));i=e.pendingProps,o=e.memoizedState,r=o.element,hg(t,e),wl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=bo(Error(ee(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=bo(Error(ee(424)),e),e=bp(t,e,i,n,r);break e}else for(_n=ji(e.stateNode.containerInfo.firstChild),yn=e,mt=!0,Hn=null,n=fg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Co(),i===r){e=wi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return pg(e),t===null&&ef(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,qc(i,r)?s=null:o!==null&&qc(i,o)&&(e.flags|=32),zg(t,e),Qt(t,e,s,n),e.child;case 6:return t===null&&ef(e),null;case 13:return Hg(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ao(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Cp(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,lt(Ml,i._currentValue),i._currentValue=s,o!==null)if($n(o.value,s)){if(o.children===r.children&&!ln.current){e=wi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=yi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ee(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),tf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_o(e,n),r=In(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Ap(t,e,i,r,n);case 15:return Fg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ja(t,e),e.tag=1,un(i)?(t=!0,yl(e)):t=!1,_o(e,n),Ng(e,i,r),rf(e,i,r,n),af(null,e,i,!0,t,n);case 19:return Vg(t,e,n);case 22:return kg(t,e,n)}throw Error(ee(156,e.tag))};function rv(t,e){return Lm(t,e)}function W1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new W1(t,e,n,i)}function ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X1(t){if(typeof t=="function")return ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cd)return 11;if(t===Ad)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")ah(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case to:return Ar(n.children,r,o,e);case Td:s=8,r|=8;break;case Ac:return t=Ln(12,n,e,r|2),t.elementType=Ac,t.lanes=o,t;case Rc:return t=Ln(13,n,e,r),t.elementType=Rc,t.lanes=o,t;case bc:return t=Ln(19,n,e,r),t.elementType=bc,t.lanes=o,t;case pm:return ru(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dm:s=10;break e;case hm:s=9;break e;case Cd:s=11;break e;case Ad:s=14;break e;case Ui:s=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Ln(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ar(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=pm,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Wu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function j1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lh(t,e,n,i,r,o,s,a,l){return t=new j1(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ln(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xd(o),t}function $1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ov(t){if(!t)return er;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(un(n))return og(t,n,e)}return e}function sv(t,e,n,i,r,o,s,a,l){return t=lh(n,i,!0,t,r,o,s,a,l),t.context=ov(null),n=t.current,i=Jt(),r=qi(n),o=yi(i,r),o.callback=e??null,$i(n,o,r),t.current.lanes=r,Xs(t,r,i),cn(t,i),t}function ou(t,e,n,i){var r=e.current,o=Jt(),s=qi(r);return n=ov(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,s),t!==null&&(Xn(t,r,s,o),Ka(t,r,s)),s}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uh(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Y1(){return null}var av=typeof reportError=="function"?reportError:function(t){console.error(t)};function ch(t){this._internalRoot=t}su.prototype.render=ch.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));ou(t,e,null,null)};su.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){ou(null,t,null,null)}),e[Mi]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=km();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&Bm(t)}};function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function q1(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Dl(s);o.call(u)}}var s=sv(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=s,t[Mi]=s.current,bs(t.nodeType===8?t.parentNode:t),Dr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Dl(l);a.call(u)}}var l=lh(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[Mi]=l.current,bs(t.nodeType===8?t.parentNode:t),Dr(function(){ou(e,l,n,i)}),l}function lu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Dl(s);a.call(l)}}ou(e,s,t,r)}else s=q1(n,e,t,r,i);return Dl(s)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ls(e.pendingLanes);n!==0&&(Pd(e,n|1),cn(e,Ct()),!(Ze&6)&&(Po=Ct()+500,or()))}break;case 13:Dr(function(){var i=Ei(t,1);if(i!==null){var r=Jt();Xn(i,t,1,r)}}),uh(t,1)}};Ld=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Jt();Xn(e,t,134217728,n)}uh(t,134217728)}};Fm=function(t){if(t.tag===13){var e=qi(t),n=Ei(t,e);if(n!==null){var i=Jt();Xn(n,t,e,i)}uh(t,e)}};km=function(){return tt};zm=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};zc=function(t,e,n){switch(e){case"input":if(Dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ql(i);if(!r)throw Error(ee(90));gm(i),Dc(i,r)}}}break;case"textarea":_m(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};Tm=rh;Cm=Dr;var K1={usingClientEntryPoint:!1,Events:[$s,oo,Ql,Em,wm,rh]},es={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z1={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||Y1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Yl=Sa.inject(Z1),ni=Sa}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(e))throw Error(ee(200));return $1(t,e,null,n)};Mn.createRoot=function(t,e){if(!fh(t))throw Error(ee(299));var n=!1,i="",r=av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lh(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,bs(t.nodeType===8?t.parentNode:t),new ch(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Dr(t)};Mn.hydrate=function(t,e,n){if(!au(e))throw Error(ee(200));return lu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!fh(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=sv(e,null,t,1,n??null,r,!1,o,s),t[Mi]=e.current,bs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new su(e)};Mn.render=function(t,e,n){if(!au(e))throw Error(ee(200));return lu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!au(t))throw Error(ee(40));return t._reactRootContainer?(Dr(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Mn.unstable_batchedUpdates=rh;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!au(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return lu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lv)}catch(t){console.error(t)}}lv(),lm.exports=Mn;var Q1=lm.exports,uv,Hp=Q1;uv=Hp.createRoot,Hp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),dh=(t,e)=>{const n=Tt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...u},d)=>Tt.createElement("svg",{ref:d,...J1,width:r,height:r,stroke:i,strokeWidth:s?Number(o)*24/Number(r):o,className:["lucide",`lucide-${ey(t)}`,a].join(" "),...u},[...e.map(([f,h])=>Tt.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=dh("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=dh("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=dh("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),iy="data:image/svg+xml,%3csvg%20width='74'%20height='21'%20viewBox='0%200%2074%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M48.8978%200.395142H45.6201V20.6478H48.8978V0.395142Z'%20fill='black'/%3e%3cpath%20d='M57.937%200.395111V3.21457H63.8176V20.5538H67.0228V0.395111H57.937Z'%20fill='black'/%3e%3cpath%20d='M36.3267%202.22799C35.0492%201.02971%2033.3155%200.418762%2031.1711%200.418762H23.2401V20.5538H26.4695V13.529H30.9763C33.2178%2013.529%2035.025%2012.9417%2036.3025%2011.767C36.9608%2011.1401%2037.4769%2010.3851%2037.8173%209.55097C38.1578%208.71684%2038.3151%207.82215%2038.279%206.92486C38.3018%206.05259%2038.1403%205.18509%2037.8043%204.37657C37.4684%203.56804%2036.9654%202.83586%2036.3267%202.22576M34.8804%206.92486C34.9141%207.42751%2034.832%207.93114%2034.6402%208.39872C34.4483%208.86629%2034.1515%209.28589%2033.7717%209.62667C32.8838%2010.3125%2031.7687%2010.6555%2030.6387%2010.5901H26.4211V3.35542H30.8317C31.9009%203.30403%2032.9506%203.64803%2033.7717%204.31886C34.1463%204.64341%2034.4407%205.04669%2034.6327%205.49838C34.8248%205.95006%2034.9095%206.43839%2034.8804%206.92664'%20fill='black'/%3e%3cpath%20d='M7.86768%2010.1926L16.1582%200.395111H12.3257L5.28896%208.68861L5.19269%208.80625H3.86728V0.395111H0.685852V14.6551H3.86728V11.6248H5.24105L6.59064%2013.2696L12.5675%2020.5778H16.2549L7.86768%2010.1926Z'%20fill='black'/%3e%3cpath%20d='M2.78233%2017.5877C2.32533%2017.4614%201.83573%2017.5167%201.42033%2017.7416C1.00494%2017.9665%200.697455%2018.3428%200.564952%2018.7882C0.502117%2019.0079%200.484682%2019.2376%200.513665%2019.4639C0.542648%2019.6902%200.61747%2019.9086%200.733766%2020.1064C0.970219%2020.5097%201.35987%2020.8057%201.81827%2020.9303C1.96577%2020.9765%202.11965%2021.0002%202.27452%2021.0007C2.5076%2021.0039%202.739%2020.9618%202.95528%2020.8769C3.17155%2020.792%203.36838%2020.6659%203.53433%2020.506C3.70028%2020.3461%203.83203%2020.1556%203.92193%2019.9456C4.01183%2019.7355%204.05808%2019.5101%204.058%2019.2824C4.05348%2018.905%203.92775%2018.5386%203.69853%2018.2347C3.46932%2017.9309%203.1482%2017.7051%202.7805%2017.589'%20fill='black'/%3e%3cpath%20d='M72.2523%200.0653653C71.7953%20-0.0608134%2071.3058%20-0.00542536%2070.8904%200.219456C70.475%200.444338%2070.1675%200.820477%2070.0349%201.26587C69.9721%201.48554%2069.9547%201.71522%2069.9836%201.94153C70.0126%202.16784%2070.0874%202.38625%2070.2037%202.58403C70.4363%202.98098%2070.8158%203.27583%2071.2641%203.40799C71.4116%203.45411%2071.5654%203.47786%2071.7203%203.4784C72.1051%203.47819%2072.4795%203.35662%2072.7877%203.13179C73.096%202.90696%2073.3217%202.5909%2073.4312%202.23065C73.5589%201.7906%2073.5072%201.31938%2073.2871%200.915688C73.067%200.511993%2072.6955%200.207123%2072.2505%200.06492'%20fill='black'/%3e%3c/svg%3e",ry=()=>{const[t,e]=Tt.useState(null),n=[{name:"Mobility",hasDropdown:!0},{name:"Expertise",hasDropdown:!0},{name:"Insights",hasDropdown:!0},{name:"Company",hasDropdown:!0},{name:"Careers",hasDropdown:!0},{name:"Investors",hasDropdown:!0}];return Ce.jsxs("header",{className:"bg-white shadow-sm relative z-50",children:[Ce.jsx("div",{className:"bg-black text-[#DEDEDE] text-[] md:text-xs py-3 ",children:Ce.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex justify-end items-center space-x-6",children:[Ce.jsx("span",{children:"KPIT Worldwide"}),Ce.jsxs("div",{className:"flex items-center space-x-1",children:[Ce.jsx("span",{children:"Happenings at KPIT"}),Ce.jsx(Vp,{className:"w-4 h-4"})]})]})}),Ce.jsx("div",{className:"max-w-full mx-auto px-4 md:px-48 py-1 border border-black",children:Ce.jsxs("div",{className:"flex items-center justify-between",children:[Ce.jsx("div",{className:"flex items-center",children:Ce.jsx("img",{src:iy,alt:"KPIT Logo",className:"h-5 lg:h-5 w-auto cursor-pointer object-contain"})}),Ce.jsx("nav",{className:"hidden lg:flex items-center space-x-8 text-[18px] font-medium ",children:n.map(i=>Ce.jsx("div",{className:"relative",onMouseEnter:()=>i.hasDropdown&&e(i.name),onMouseLeave:()=>e(null),children:Ce.jsxs("button",{className:"flex items-center space-x-1 text-black",children:[Ce.jsx("span",{children:i.name}),i.hasDropdown&&Ce.jsx(Vp,{className:"w-4 h-4"})]})},i.name))}),Ce.jsxs("div",{className:"flex items-center space-x-4",children:[Ce.jsxs("div",{className:"hidden lg:flex items-center space-x-4",children:[Ce.jsx(ny,{className:"w-5 h-5 text-[#6A4BE7] cursor-pointer"}),Ce.jsx("button",{className:"bg-white border border-[#6A4BE7] text-[#6A4BE7] px-6 py-2 rounded-full hover:bg-[#6A4BE7] hover:text-white transition-colors font-semibold",children:"Contact"})]}),Ce.jsx("div",{className:"flex lg:hidden",children:Ce.jsx(ty,{className:"w-6 h-6 text-black cursor-pointer"})})]})]})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="180",oy=0,Gp=1,sy=2,cv=1,ay=2,di=3,tr=0,fn=1,mi=2,Zi=0,xo=1,Wp=2,Xp=3,jp=4,ly=5,yr=100,uy=101,cy=102,fy=103,dy=104,hy=200,py=201,my=202,gy=203,yf=204,xf=205,vy=206,_y=207,yy=208,xy=209,Sy=210,My=211,Ey=212,wy=213,Ty=214,Sf=0,Mf=1,Ef=2,Lo=3,wf=4,Tf=5,Cf=6,Af=7,fv=0,Cy=1,Ay=2,Qi=0,Ry=1,by=2,Py=3,Ly=4,Dy=5,Iy=6,Ny=7,dv=300,Do=301,Io=302,Rf=303,bf=304,uu=306,Pf=1e3,wr=1001,Lf=1002,jn=1003,Uy=1004,Ma=1005,Jn=1006,Xu=1007,Tr=1008,Ti=1009,hv=1010,pv=1011,ks=1012,ph=1013,Ir=1014,_i=1015,qs=1016,mh=1017,gh=1018,zs=1020,mv=35902,gv=35899,vv=1021,_v=1022,Gn=1023,Bs=1026,Hs=1027,yv=1028,vh=1029,xv=1030,_h=1031,yh=1033,il=33776,rl=33777,ol=33778,sl=33779,Df=35840,If=35841,Nf=35842,Uf=35843,Of=36196,Ff=37492,kf=37496,zf=37808,Bf=37809,Hf=37810,Vf=37811,Gf=37812,Wf=37813,Xf=37814,jf=37815,$f=37816,Yf=37817,qf=37818,Kf=37819,Zf=37820,Qf=37821,Jf=36492,ed=36494,td=36495,nd=36283,id=36284,rd=36285,od=36286,Oy=3200,Fy=3201,ky=0,zy=1,Bi="",An="srgb",No="srgb-linear",Il="linear",rt="srgb",Br=7680,$p=519,By=512,Hy=513,Vy=514,Sv=515,Gy=516,Wy=517,Xy=518,jy=519,Yp=35044,qp="300 es",ei=2e3,Nl=2001;class Wo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,sd=180/Math.PI;function Ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function $y(t,e){return(t%e+e)%e}function $u(t,e,n){return(1-n)*t+n*e}function ts(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=o[s+0],p=o[s+1],_=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||u!==p||d!==_){let m=1-a;const c=l*h+u*p+d*_+f*y,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const T=Math.sqrt(v),C=Math.atan2(T,c*g);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}const x=a*g;if(l=l*m+h*x,u=u*m+p*x,d=d*m+_*x,f=f*m+y*x,m===1-a){const T=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=T,u*=T,d*=T,f*=T}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s],h=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+d*f+l*p-u*h,e[n+1]=l*_+d*h+u*f-a*p,e[n+2]=u*_+d*p+a*h-l*f,e[n+3]=d*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(o/2),h=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"YZX":this._x=h*d*f+u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f-h*p*_;break;case"XZY":this._x=h*d*f-u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*l,this._y=r*d+s*l+o*a-i*u,this._z=o*d+s*u+i*l-r*a,this._w=s*d-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*d,this.y=i+l*d+a*u-o*f,this.z=r+l*f+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new B,Kp=new Zs;class ze{constructor(e,n,i,r,o,s,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],y=r[0],m=r[3],c=r[6],g=r[1],v=r[4],x=r[7],T=r[2],C=r[5],A=r[8];return o[0]=s*y+a*g+l*T,o[3]=s*m+a*v+l*C,o[6]=s*c+a*x+l*A,o[1]=u*y+d*g+f*T,o[4]=u*m+d*v+f*C,o[7]=u*c+d*x+f*A,o[2]=h*y+p*g+_*T,o[5]=h*m+p*v+_*C,o[8]=h*c+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*s-a*u,h=a*l-d*o,p=u*o-s*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-d*i)*y,e[2]=(a*i-r*s)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new ze;function Mv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yy(){const t=Ul("canvas");return t.style.display="block",t}const Zp={};function Vs(t){t in Zp||(Zp[t]=!0,console.warn(t))}function qy(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const Qp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){const t={enabled:!0,workingColorSpace:No,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===rt&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(r.r=So(r.r),r.g=So(r.g),r.b=So(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bi?Il:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[No]:{primaries:e,whitePoint:i,transfer:Il,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const Je=Ky();function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function So(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class Zy{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=Ul("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=xi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qy=0;class xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ku(r[s].image)):o.push(Ku(r[s]))}else o=Ku(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jy=0;const Zu=new B;class dn extends Wo{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=wr,r=wr,o=Jn,s=Tr,a=Gn,l=Ti,u=dn.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ks(),this.name="",this.source=new xh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=dv;dn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(p+1)/2,T=(c+1)/2,C=(d+h)/4,A=(f+y)/4,R=(_+m)/4;return v>x&&v>T?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=C/i,o=A/i):x>T?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=C/r,o=R/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=A/o,r=R/o),this.set(i,r,o,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-y)/g,this.z=(h-d)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ex extends Wo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:i.depth},o=new dn(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new xh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends ex{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ev extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tx extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,On):On.fromBufferAttribute(o,s),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),wa.subVectors(this.max,ns),Vr.subVectors(e.a,ns),Gr.subVectors(e.b,ns),Wr.subVectors(e.c,ns),bi.subVectors(Gr,Vr),Pi.subVectors(Wr,Gr),ur.subVectors(Vr,Wr);let n=[0,-bi.z,bi.y,0,-Pi.z,Pi.y,0,-ur.z,ur.y,bi.z,0,-bi.x,Pi.z,0,-Pi.x,ur.z,0,-ur.x,-bi.y,bi.x,0,-Pi.y,Pi.x,0,-ur.y,ur.x,0];return!Qu(n,Vr,Gr,Wr,wa)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,Vr,Gr,Wr,wa))?!1:(Ta.crossVectors(bi,Pi),n=[Ta.x,Ta.y,Ta.z],Qu(n,Vr,Gr,Wr,wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,Ea=new Qs,Vr=new B,Gr=new B,Wr=new B,bi=new B,Pi=new B,ur=new B,ns=new B,wa=new B,Ta=new B,cr=new B;function Qu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){cr.fromArray(t,o);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),d=i.dot(cr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const nx=new Qs,is=new B,Ju=new B;class Sh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nx.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const n=is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(Ju)),this.expandByPoint(is.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new B,ec=new B,Ca=new B,Li=new B,tc=new B,Aa=new B,nc=new B;class ix{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ec.copy(e).add(n).multiplyScalar(.5),Ca.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(ec);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ca),a=Li.dot(this.direction),l=-Li.dot(Ca),u=Li.lengthSq(),d=Math.abs(1-s*s);let f,h,p,_;if(d>0)if(f=s*l-a,h=s*a-l,_=o*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,p=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector(Ca,h),p}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,o){tc.subVectors(n,e),Aa.subVectors(i,e),nc.crossVectors(tc,Aa);let s=this.direction.dot(nc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Aa.crossVectors(Li,Aa));if(l<0)return null;const u=a*this.direction.dot(tc.cross(Li));if(u<0||l+u>s)return null;const d=-a*Li.dot(nc);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,o,s,a,l,u,d,f,h,p,_,y,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,d,f,h,p,_,y,m)}set(e,n,i,r,o,s,a,l,u,d,f,h,p,_,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=_,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),o=1/Xr.setFromMatrixColumn(e,1).length(),s=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*d,p=s*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=_+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=u*d,y=u*f;n[0]=h+y*a,n[4]=_*a-p,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=u*d,y=u*f;n[0]=h-y*a,n[4]=-s*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*d,n[9]=y-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,_=a*l,y=a*u;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+p,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,p=s*u,_=a*l,y=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+y,n[5]=s*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rx,e,ox)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(i,mn),Di.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(i,mn)),Di.normalize(),Ra.crossVectors(mn,Di),r[0]=Di.x,r[4]=Ra.x,r[8]=mn.x,r[1]=Di.y,r[5]=Ra.y,r[9]=mn.y,r[2]=Di.z,r[6]=Ra.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],y=i[6],m=i[10],c=i[14],g=i[3],v=i[7],x=i[11],T=i[15],C=r[0],A=r[4],R=r[8],S=r[12],M=r[1],P=r[5],N=r[9],U=r[13],Y=r[2],V=r[6],G=r[10],K=r[14],D=r[3],X=r[7],q=r[11],se=r[15];return o[0]=s*C+a*M+l*Y+u*D,o[4]=s*A+a*P+l*V+u*X,o[8]=s*R+a*N+l*G+u*q,o[12]=s*S+a*U+l*K+u*se,o[1]=d*C+f*M+h*Y+p*D,o[5]=d*A+f*P+h*V+p*X,o[9]=d*R+f*N+h*G+p*q,o[13]=d*S+f*U+h*K+p*se,o[2]=_*C+y*M+m*Y+c*D,o[6]=_*A+y*P+m*V+c*X,o[10]=_*R+y*N+m*G+c*q,o[14]=_*S+y*U+m*K+c*se,o[3]=g*C+v*M+x*Y+T*D,o[7]=g*A+v*P+x*V+T*X,o[11]=g*R+v*N+x*G+T*q,o[15]=g*S+v*U+x*K+T*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],y=e[7],m=e[11],c=e[15];return _*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*d-o*l*d)+m*(+n*u*f-n*a*p-o*s*f+i*s*p+o*a*d-i*u*d)+c*(-r*a*d-n*l*f+n*a*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],y=e[13],m=e[14],c=e[15],g=f*m*u-y*h*u+y*l*p-a*m*p-f*l*c+a*h*c,v=_*h*u-d*m*u-_*l*p+s*m*p+d*l*c-s*h*c,x=d*y*u-_*f*u+_*a*p-s*y*p-d*a*c+s*f*c,T=_*f*l-d*y*l-_*a*h+s*y*h+d*a*m-s*f*m,C=n*g+i*v+r*x+o*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(y*h*o-f*m*o-y*r*p+i*m*p+f*r*c-i*h*c)*A,e[2]=(a*m*o-y*l*o+y*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(d*m*o-_*h*o+_*r*p-n*m*p-d*r*c+n*h*c)*A,e[6]=(_*l*o-s*m*o-_*r*u+n*m*u+s*r*c-n*l*c)*A,e[7]=(s*h*o-d*l*o+d*r*u-n*h*u-s*r*p+n*l*p)*A,e[8]=x*A,e[9]=(_*f*o-d*y*o-_*i*p+n*y*p+d*i*c-n*f*c)*A,e[10]=(s*y*o-_*a*o+_*i*u-n*y*u-s*i*c+n*a*c)*A,e[11]=(d*a*o-s*f*o-d*i*u+n*f*u+s*i*p-n*a*p)*A,e[12]=T*A,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*m+n*f*m)*A,e[14]=(_*a*r-s*y*r-_*i*l+n*y*l+s*i*m-n*a*m)*A,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*s,0,u*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,d=s+s,f=a+a,h=o*u,p=o*d,_=o*f,y=s*d,m=s*f,c=a*f,g=l*u,v=l*d,x=l*f,T=i.x,C=i.y,A=i.z;return r[0]=(1-(y+c))*T,r[1]=(p+x)*T,r[2]=(_-v)*T,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(h+c))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Xr.set(r[0],r[1],r[2]).length();const s=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/o,d=1/s,f=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ei,l=!1){const u=this.elements,d=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(l)_=o/(s-o),y=s*o/(s-o);else if(a===ei)_=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===Nl)_=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ei,l=!1){const u=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(s-o),y=s/(s-o);else if(a===ei)_=-2/(s-o),y=-(s+o)/(s-o);else if(a===Nl)_=-1/(s-o),y=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new B,Fn=new Dt,rx=new B(0,0,0),ox=new B(1,1,1),Di=new B,Ra=new B,mn=new B,e0=new Dt,t0=new Zs;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const n0=new B,jr=new Zs,ui=new Dt,ba=new B,rs=new B,ax=new B,lx=new Zs,i0=new B(1,0,0),r0=new B(0,1,0),o0=new B(0,0,1),s0={type:"added"},ux={type:"removed"},$r={type:"childadded",child:null},ic={type:"childremoved",child:null};class xn extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new B,n=new Ci,i=new Zs,r=new B(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ze}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(r0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,n){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(r0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(rs,ba,this.up):ui.lookAt(ba,rs,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(ui),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s0),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ux),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s0),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new B(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new B,ci=new B,rc=new B,fi=new B,Yr=new B,qr=new B,a0=new B,oc=new B,sc=new B,ac=new B,lc=new At,uc=new At,cc=new At;class Vn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){kn.subVectors(r,n),ci.subVectors(i,n),rc.subVectors(e,n);const s=kn.dot(kn),a=kn.dot(ci),l=kn.dot(rc),u=ci.dot(ci),d=ci.dot(rc),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(u*l-a*d)*h,_=(s*d-a*l)*h;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,fi.x),l.addScaledVector(s,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return lc.setScalar(0),uc.setScalar(0),cc.setScalar(0),lc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,i),cc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(lc,o.x),s.addScaledVector(uc,o.y),s.addScaledVector(cc,o.z),s}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),ci.subVectors(e,n),kn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Yr.subVectors(r,i),qr.subVectors(o,i),oc.subVectors(e,i);const l=Yr.dot(oc),u=qr.dot(oc);if(l<=0&&u<=0)return n.copy(i);sc.subVectors(e,r);const d=Yr.dot(sc),f=qr.dot(sc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Yr,s);ac.subVectors(e,o);const p=Yr.dot(ac),_=qr.dot(ac);if(_>=0&&p<=_)return n.copy(o);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(qr,a);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return a0.subVectors(o,r),a=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(a0,a);const c=1/(m+y+h);return s=y*c,a=h*c,n.copy(i).addScaledVector(Yr,s).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function fc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=$y(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=fc(s,o,e+1/3),this.g=fc(s,o,e),this.b=fc(s,o,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=Tv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Je.workingToColorSpace(jt.copy(this),e),Math.round($e(jt.r*255,0,255))*65536+Math.round($e(jt.g*255,0,255))*256+Math.round($e(jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,o=jt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const d=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=An){Je.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Pa);const i=$u(Ii.h,Pa.h,n),r=$u(Ii.s,Pa.s,n),o=$u(Ii.l,Pa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new ot;ot.NAMES=Tv;let cx=0;class cu extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=xo,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=xf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==xf&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mh extends cu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new B,La=new nt;let fx=0;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yp,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ts(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ts(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ts(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ts(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ts(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class Cv extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Av extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dx=0;const Cn=new Dt,dc=new xn,Kr=new B,gn=new Qs,os=new Qs,Ot=new B;class sr extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?Av:Cv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(gn.min,os.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,os.max),gn.expandByPoint(Ot)):(gn.expandByPoint(os.min),gn.expandByPoint(os.max))}gn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Ot.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),Ot.add(Kr)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new B,l[R]=new B;const u=new B,d=new B,f=new B,h=new nt,p=new nt,_=new nt,y=new B,m=new B;function c(R,S,M){u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(o,R),p.fromBufferAttribute(o,S),_.fromBufferAttribute(o,M),d.sub(u),f.sub(u),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(P),a[R].add(y),a[S].add(y),a[M].add(y),l[R].add(m),l[S].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,S=g.length;R<S;++R){const M=g[R],P=M.start,N=M.count;for(let U=P,Y=P+N;U<Y;U+=3)c(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new B,x=new B,T=new B,C=new B;function A(R){T.fromBufferAttribute(r,R),C.copy(T);const S=a[R];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(C,S);const P=x.dot(l[R])<0?-1:1;s.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,S=g.length;R<S;++R){const M=g[R],P=M.start,N=M.count;for(let U=P,Y=P+N;U<Y;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,o=new B,s=new B,a=new B,l=new B,u=new B,d=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let c=0;c<d;c++)h[_++]=u[p++]}return new ri(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],f=o[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l0=new Dt,fr=new ix,Da=new Sh,u0=new B,Ia=new B,Na=new B,Ua=new B,hc=new B,Oa=new B,c0=new B,Fa=new B;class ti extends xn{constructor(e=new sr,n=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Oa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const d=a[l],f=o[l];d!==0&&(hc.fromBufferAttribute(f,e),s?Oa.addScaledVector(hc,d):Oa.addScaledVector(hc.sub(n),d))}n.add(Oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(o),fr.copy(e.ray).recast(e.near),!(Da.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Da,u0)===null||fr.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(l0.copy(o).invert(),fr.copy(e.ray).applyMatrix4(l0),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const m=h[_],c=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,T=v;x<T;x+=3){const C=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);r=ka(this,c,e,i,u,d,f,C,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,c=y;m<c;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=ka(this,s,e,i,u,d,f,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const m=h[_],c=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,T=v;x<T;x+=3){const C=x,A=x+1,R=x+2;r=ka(this,c,e,i,u,d,f,C,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,c=y;m<c;m+=3){const g=m,v=m+1,x=m+2;r=ka(this,s,e,i,u,d,f,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hx(t,e,n,i,r,o,s,a){let l;if(e.side===fn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===tr,a),l===null)return null;Fa.copy(a),Fa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Fa);return u<n.near||u>n.far?null:{distance:u,point:Fa.clone(),object:t}}function ka(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Ia),t.getVertexPosition(l,Na),t.getVertexPosition(u,Ua);const d=hx(t,e,n,i,Ia,Na,Ua,c0);if(d){const f=new B;Vn.getBarycoord(c0,Ia,Na,Ua,f),r&&(d.uv=Vn.getInterpolatedAttribute(r,a,l,u,f,new nt)),o&&(d.uv1=Vn.getInterpolatedAttribute(o,a,l,u,f,new nt)),s&&(d.normal=Vn.getInterpolatedAttribute(s,a,l,u,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};Vn.getNormal(Ia,Na,Ua,h.normal),d.face=h,d.barycoord=f}return d}class Js extends sr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new oi(u,3)),this.setAttribute("normal",new oi(d,3)),this.setAttribute("uv",new oi(f,2));function _(y,m,c,g,v,x,T,C,A,R,S){const M=x/A,P=T/R,N=x/2,U=T/2,Y=C/2,V=A+1,G=R+1;let K=0,D=0;const X=new B;for(let q=0;q<G;q++){const se=q*P-U;for(let me=0;me<V;me++){const Ke=me*M-N;X[y]=Ke*g,X[m]=se*v,X[c]=Y,u.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[c]=C>0?1:-1,d.push(X.x,X.y,X.z),f.push(me/A),f.push(1-q/R),K+=1}}for(let q=0;q<R;q++)for(let se=0;se<A;se++){const me=h+se+V*q,Ke=h+se+V*(q+1),Ve=h+(se+1)+V*(q+1),Ye=h+(se+1)+V*q;l.push(me,Ke,Ye),l.push(Ke,Ve,Ye),D+=6}a.addGroup(p,D,S),p+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Uo(t[n]);for(const r in i)e[r]=i[r]}return e}function px(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const mx={clone:Uo,merge:Zt};var gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends cu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new B,f0=new nt,d0=new nt;class Pn extends bv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,f0,d0),n.subVectors(d0,f0)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ju*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class _x extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const o=new Pn(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const s=new Pn(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const a=new Pn(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const u=new Pn(Zr,Qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Pv extends dn{constructor(e=[],n=Do,i,r,o,s,a,l,u,d){super(e,n,i,r,o,s,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Js(5,5,5),o=new nr({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Zi});o.uniforms.tEquirect.value=n;const s=new ti(r,o),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Jn),new _x(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}class cs extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xx={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Sx extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const mc=new B,Mx=new B,Ex=new ze;class vr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mc.subVectors(i,n).cross(Mx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ex.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Sh,wx=new nt(.5,.5),za=new B;class Lv{constructor(e=new vr,n=new vr,i=new vr,r=new vr,o=new vr,s=new vr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ei,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],u=o[3],d=o[4],f=o[5],h=o[6],p=o[7],_=o[8],y=o[9],m=o[10],c=o[11],g=o[12],v=o[13],x=o[14],T=o[15];if(r[0].setComponents(u-s,p-d,c-_,T-g).normalize(),r[1].setComponents(u+s,p+d,c+_,T+g).normalize(),r[2].setComponents(u+a,p+f,c+y,T+v).normalize(),r[3].setComponents(u-a,p-f,c-y,T-v).normalize(),i)r[4].setComponents(l,h,m,x).normalize(),r[5].setComponents(u-l,p-h,c-m,T-x).normalize();else if(r[4].setComponents(u-l,p-h,c-m,T-x).normalize(),n===ei)r[5].setComponents(u+l,p+h,c+m,T+x).normalize();else if(n===Nl)r[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const n=wx.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dv extends dn{constructor(e,n,i=Ir,r,o,s,a=jn,l=jn,u,d=Bs,f=1){if(d!==Bs&&d!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,o,s,a,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Iv extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eh extends sr{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const o=[],s=[],a=[],l=[],u=new B,d=new nt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),s.push(u.x,u.y,u.z),a.push(0,0,1),d.x=(s[h]/e+1)/2,d.y=(s[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new oi(s,3)),this.setAttribute("normal",new oi(a,3)),this.setAttribute("uv",new oi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ea extends sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=n/l,p=[],_=[],y=[],m=[];for(let c=0;c<d;c++){const g=c*h-s;for(let v=0;v<u;v++){const x=v*f-o;_.push(x,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,x=g+u*(c+1),T=g+1+u*(c+1),C=g+1+u*c;p.push(v,x,C),p.push(x,T,C)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(y,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tx extends cu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cx extends cu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ax extends bv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Rx extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function h0(t,e,n,i){const r=bx(i);switch(n){case vv:return t*e;case yv:return t*e/r.components*r.byteLength;case vh:return t*e/r.components*r.byteLength;case xv:return t*e*2/r.components*r.byteLength;case _h:return t*e*2/r.components*r.byteLength;case _v:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case yh:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:case Uf:return Math.max(t,16)*Math.max(e,8)/4;case Df:case Nf:return Math.max(t,8)*Math.max(e,8)/2;case Of:case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jf:case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nd:case id:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rd:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bx(t){switch(t){case Ti:case hv:return{byteLength:1,components:1};case ks:case pv:case qs:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Ir:case ph:case _i:return{byteLength:4,components:1};case mv:case gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Px(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const d=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
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
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Xx=`#ifdef USE_BUMPMAP
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eS=`#define PI 3.141592653589793
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
} // validated`,tS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nS=`vec3 transformedNormal = objectNormal;
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
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
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
#endif`,pS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ES=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,wS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,bS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,PS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BS=`#if defined( USE_POINTS_UV )
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
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
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
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,FM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kM=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,zM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,XM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,$M=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,YM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,qM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,KM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,ZM=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,JM=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,eE=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,tE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nE=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,iE=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rE=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,oE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,aE=`uniform vec3 color;
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
}`,lE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,uE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,He={alphahash_fragment:Lx,alphahash_pars_fragment:Dx,alphamap_fragment:Ix,alphamap_pars_fragment:Nx,alphatest_fragment:Ux,alphatest_pars_fragment:Ox,aomap_fragment:Fx,aomap_pars_fragment:kx,batching_pars_vertex:zx,batching_vertex:Bx,begin_vertex:Hx,beginnormal_vertex:Vx,bsdfs:Gx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:qx,color_fragment:Kx,color_pars_fragment:Zx,color_pars_vertex:Qx,color_vertex:Jx,common:eS,cube_uv_reflection_fragment:tS,defaultnormal_vertex:nS,displacementmap_pars_vertex:iS,displacementmap_vertex:rS,emissivemap_fragment:oS,emissivemap_pars_fragment:sS,colorspace_fragment:aS,colorspace_pars_fragment:lS,envmap_fragment:uS,envmap_common_pars_fragment:cS,envmap_pars_fragment:fS,envmap_pars_vertex:dS,envmap_physical_pars_fragment:ES,envmap_vertex:hS,fog_vertex:pS,fog_pars_vertex:mS,fog_fragment:gS,fog_pars_fragment:vS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:yS,lights_lambert_fragment:xS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:wS,lights_toon_pars_fragment:TS,lights_phong_fragment:CS,lights_phong_pars_fragment:AS,lights_physical_fragment:RS,lights_physical_pars_fragment:bS,lights_fragment_begin:PS,lights_fragment_maps:LS,lights_fragment_end:DS,logdepthbuf_fragment:IS,logdepthbuf_pars_fragment:NS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:OS,map_fragment:FS,map_pars_fragment:kS,map_particle_fragment:zS,map_particle_pars_fragment:BS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:VS,morphinstance_vertex:GS,morphcolor_vertex:WS,morphnormal_vertex:XS,morphtarget_pars_vertex:jS,morphtarget_vertex:$S,normal_fragment_begin:YS,normal_fragment_maps:qS,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:QS,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:rM,packing:oM,premultiplied_alpha_fragment:sM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:uM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:dM,shadowmap_pars_vertex:hM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:vM,skinning_vertex:_M,skinnormal_vertex:yM,specularmap_fragment:xM,specularmap_pars_fragment:SM,tonemapping_fragment:MM,tonemapping_pars_fragment:EM,transmission_fragment:wM,transmission_pars_fragment:TM,uv_pars_fragment:CM,uv_pars_vertex:AM,uv_vertex:RM,worldpos_vertex:bM,background_vert:PM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:IM,cube_vert:NM,cube_frag:UM,depth_vert:OM,depth_frag:FM,distanceRGBA_vert:kM,distanceRGBA_frag:zM,equirect_vert:BM,equirect_frag:HM,linedashed_vert:VM,linedashed_frag:GM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:jM,meshlambert_frag:$M,meshmatcap_vert:YM,meshmatcap_frag:qM,meshnormal_vert:KM,meshnormal_frag:ZM,meshphong_vert:QM,meshphong_frag:JM,meshphysical_vert:eE,meshphysical_frag:tE,meshtoon_vert:nE,meshtoon_frag:iE,points_vert:rE,points_frag:oE,shadow_vert:sE,shadow_frag:aE,sprite_vert:lE,sprite_frag:uE},ue={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Zn={basic:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Zt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Zt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Zt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Zt([ue.common,ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Zt([ue.lights,ue.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Zn.physical={uniforms:Zt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ba={r:0,b:0,g:0},hr=new Ci,cE=new Dt;function fE(t,e,n,i,r,o,s){const a=new ot(0);let l=o===!0?0:1,u,d,f=null,h=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function y(v){let x=!1;const T=_(v);T===null?c(a,l):T&&T.isColor&&(c(T,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const T=_(x);T&&(T.isCubeTexture||T.mapping===uu)?(d===void 0&&(d=new ti(new Js(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Uo(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hr.copy(x.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(hr)),d.material.toneMapped=Je.getTransfer(T.colorSpace)!==rt,(f!==T||h!==T.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=T,h=T.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new ti(new ea(2,2),new nr({name:"BackgroundMaterial",uniforms:Uo(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Je.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function c(v,x){v.getRGB(Ba,Rv(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,x,s)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:y,addToRenderList:m,dispose:g}}function dE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(M,P,N,U,Y){let V=!1;const G=f(U,N,P);o!==G&&(o=G,u(o.object)),V=p(M,U,N,Y),V&&_(M,U,N,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,x(M,P,N,U),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,P,N){const U=N.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let V=Y[P.id];V===void 0&&(V={},Y[P.id]=V);let G=V[U];return G===void 0&&(G=h(l()),V[U]=G),G}function h(M){const P=[],N=[],U=[];for(let Y=0;Y<n;Y++)P[Y]=0,N[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,P,N,U){const Y=o.attributes,V=P.attributes;let G=0;const K=N.getAttributes();for(const D in K)if(K[D].location>=0){const q=Y[D];let se=V[D];if(se===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;G++}return o.attributesNum!==G||o.index!==U}function _(M,P,N,U){const Y={},V=P.attributes;let G=0;const K=N.getAttributes();for(const D in K)if(K[D].location>=0){let q=V[D];q===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const se={};se.attribute=q,q&&q.data&&(se.data=q.data),Y[D]=se,G++}o.attributes=Y,o.attributesNum=G,o.index=U}function y(){const M=o.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){c(M,0)}function c(M,P){const N=o.newAttributes,U=o.enabledAttributes,Y=o.attributeDivisors;N[M]=1,U[M]===0&&(t.enableVertexAttribArray(M),U[M]=1),Y[M]!==P&&(t.vertexAttribDivisor(M,P),Y[M]=P)}function g(){const M=o.newAttributes,P=o.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==M[N]&&(t.disableVertexAttribArray(N),P[N]=0)}function v(M,P,N,U,Y,V,G){G===!0?t.vertexAttribIPointer(M,P,N,Y,V):t.vertexAttribPointer(M,P,N,U,Y,V)}function x(M,P,N,U){y();const Y=U.attributes,V=N.getAttributes(),G=P.defaultAttributeValues;for(const K in V){const D=V[K];if(D.location>=0){let X=Y[K];if(X===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const q=X.normalized,se=X.itemSize,me=e.get(X);if(me===void 0)continue;const Ke=me.buffer,Ve=me.type,Ye=me.bytesPerElement,j=Ve===t.INT||Ve===t.UNSIGNED_INT||X.gpuType===ph;if(X.isInterleavedBufferAttribute){const Q=X.data,ve=Q.stride,Ue=X.offset;if(Q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<D.locationSize;Ae++)c(D.location+Ae,Q.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<D.locationSize;Ae++)m(D.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Ae=0;Ae<D.locationSize;Ae++)v(D.location+Ae,se/D.locationSize,Ve,q,ve*Ye,(Ue+se/D.locationSize*Ae)*Ye,j)}else{if(X.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)c(D.location+Q,X.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Q=0;Q<D.locationSize;Q++)m(D.location+Q);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Q=0;Q<D.locationSize;Q++)v(D.location+Q,se/D.locationSize,Ve,q,se*Ye,se/D.locationSize*Q*Ye,j)}}else if(G!==void 0){const q=G[K];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(D.location,q);break;case 3:t.vertexAttrib3fv(D.location,q);break;case 4:t.vertexAttrib4fv(D.location,q);break;default:t.vertexAttrib1fv(D.location,q)}}}}g()}function T(){R();for(const M in i){const P=i[M];for(const N in P){const U=P[N];for(const Y in U)d(U[Y].object),delete U[Y];delete P[N]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const N in P){const U=P[N];for(const Y in U)d(U[Y].object),delete U[Y];delete P[N]}delete i[M.id]}function A(M){for(const P in i){const N=i[P];if(N[M.id]===void 0)continue;const U=N[M.id];for(const Y in U)d(U[Y].object),delete U[Y];delete N[M.id]}}function R(){S(),s=!0,o!==r&&(o=r,u(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function hE(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function a(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(u,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)s(u[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y]*h[y];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pE(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Gn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:C}}function mE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new vr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,c=t.get(f);if(!r||_===null||_.length===0||o&&!m)o?d(null):u();else{const g=o?0:i,v=g*4;let x=c.clippingState||null;l.value=x,x=d(_,h,v,p);for(let T=0;T!==v;++T)x[T]=n[T];c.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const c=p+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let v=0,x=p;v!==y;++v,x+=4)s.copy(f[v]).applyMatrix4(g,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function gE(t){let e=new WeakMap;function n(s,a){return a===Rf?s.mapping=Do:a===bf&&(s.mapping=Io),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Rf||a===bf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new yx(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const ho=4,p0=[.125,.215,.35,.446,.526,.582],xr=20,gc=new Ax,m0=new ot;let vc=null,_c=0,yc=0,xc=!1;const _r=(1+Math.sqrt(5))/2,Jr=1/_r,g0=[new B(-_r,Jr,0),new B(_r,Jr,0),new B(-Jr,0,_r),new B(Jr,0,_r),new B(0,_r,-Jr),new B(0,_r,Jr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],vE=new B;class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=vE}=o;vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,_c,yc),this._renderer.xr.enabled=xc,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:qs,format:Gn,colorSpace:No,depthBuffer:!1},r=_0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_E(o)),this._blurMaterial=yE(o,e,n)}return r}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,gc)}_sceneToCubeUV(e,n,i,r,o){const l=new Pn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(m0),f.toneMapping=Qi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const y=new Mh({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new ti(new Js,y);let c=!1;const g=e.background;g?g.isColor&&(y.color.copy(g),e.background=null,c=!0):(y.color.copy(m0),c=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,u[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+d[v],o.y,o.z)):x===1?(l.up.set(0,0,u[v]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+d[v],o.z)):(l.up.set(0,u[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+d[v]));const T=this._cubeSize;Ha(r,x*T,v>2?T:0,T,T),f.setRenderTarget(r),c&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ti(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=g0[(r-o-1)%g0.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ti(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*xr-1),y=o/_,m=isFinite(o)?1+Math.floor(d*y):xr;m>xr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const c=[];let g=0;for(let A=0;A<xr;++A){const R=A/y,S=Math.exp(-R*R/2);c.push(S),A===0?g+=S:A<m&&(g+=2*S)}for(let A=0;A<c.length;A++)c[A]=c[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const x=this._sizeLods[r],T=3*x*(r>v-ho?r-v+ho:0),C=4*(this._cubeSize-x);Ha(n,T,C,3*x,2*x),l.setRenderTarget(n),l.render(f,gc)}}function _E(t){const e=[],n=[],i=[];let r=t;const o=t-ho+1+p0.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ho?l=p0[s-t+ho-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,y=3,m=2,c=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),x=new Float32Array(c*_*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,R=C>2?0:-1,S=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];g.set(S,y*_*C),v.set(h,m*_*C);const M=[C,C,C,C,C,C];x.set(M,c*_*C)}const T=new sr;T.setAttribute("position",new ri(g,y)),T.setAttribute("uv",new ri(v,m)),T.setAttribute("faceIndex",new ri(x,c)),e.push(T),r>ho&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _0(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yE(t,e,n){const i=new Float32Array(xr),r=new B(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function y0(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function x0(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function xE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Rf||l===bf,d=l===Do||l===Io;if(u||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new v0(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new v0(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function SE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Vs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ME(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,x=g.length;v<x;v+=3){const T=g[v+0],C=g[v+1],A=g[v+2];h.push(T,C,C,A,A,T)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const T=v+0,C=v+1,A=v+2;h.push(T,C,C,A,A,T)}}else return;const m=new(Mv(h)?Av:Cv)(h,1);m.version=y;const c=o.get(f);c&&e.remove(c),o.set(f,m)}function d(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function EE(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*s),n.update(p,i,1)}function u(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,o,h*s,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,_);let m=0;for(let c=0;c<_;c++)m+=p[c];n.update(m,i,1)}function f(h,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/s,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,y,0,_);let c=0;for(let g=0;g<_;g++)c+=p[g]*y[g];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function wE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TE(t,e,n){const i=new WeakMap,r=new At;function o(s,a,l){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*C*4*f),R=new Ev(A,T,C,f);R.type=_i,R.needsUpdate=!0;const S=x*4;for(let P=0;P<f;P++){const N=c[P],U=g[P],Y=v[P],V=T*C*4*P;for(let G=0;G<N.count;G++){const K=G*S;_===!0&&(r.fromBufferAttribute(N,G),A[V+K+0]=r.x,A[V+K+1]=r.y,A[V+K+2]=r.z,A[V+K+3]=0),y===!0&&(r.fromBufferAttribute(U,G),A[V+K+4]=r.x,A[V+K+5]=r.y,A[V+K+6]=r.z,A[V+K+7]=0),m===!0&&(r.fromBufferAttribute(Y,G),A[V+K+8]=r.x,A[V+K+9]=r.y,A[V+K+10]=r.z,A[V+K+11]=Y.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new nt(T,C)},i.set(a,h),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function CE(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const Uv=new dn,S0=new Dv(1,1),Ov=new Ev,Fv=new tx,kv=new Pv,M0=[],E0=[],w0=new Float32Array(16),T0=new Float32Array(9),C0=new Float32Array(4);function Xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=M0[r];if(o===void 0&&(o=new Float32Array(r),M0[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=E0[e];n===void 0&&(n=new Int32Array(e),E0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(It(n,i))return;C0.set(i),t.uniformMatrix2fv(this.addr,!1,C0),Nt(n,i)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(It(n,i))return;T0.set(i),t.uniformMatrix3fv(this.addr,!1,T0),Nt(n,i)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(It(n,i))return;w0.set(i),t.uniformMatrix4fv(this.addr,!1,w0),Nt(n,i)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function kE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(S0.compareFunction=Sv,o=S0):o=Uv,n.setTexture2D(e||o,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Fv,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kv,r)}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ov,r)}function jE(t){switch(t){case 5126:return AE;case 35664:return RE;case 35665:return bE;case 35666:return PE;case 35674:return LE;case 35675:return DE;case 35676:return IE;case 5124:case 35670:return NE;case 35667:case 35671:return UE;case 35668:case 35672:return OE;case 35669:case 35673:return FE;case 5125:return kE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function $E(t,e){t.uniform1fv(this.addr,e)}function YE(t,e){const n=Xo(e,this.size,2);t.uniform2fv(this.addr,n)}function qE(t,e){const n=Xo(e,this.size,3);t.uniform3fv(this.addr,n)}function KE(t,e){const n=Xo(e,this.size,4);t.uniform4fv(this.addr,n)}function ZE(t,e){const n=Xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QE(t,e){const n=Xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JE(t,e){const n=Xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ew(t,e){t.uniform1iv(this.addr,e)}function tw(t,e){t.uniform2iv(this.addr,e)}function nw(t,e){t.uniform3iv(this.addr,e)}function iw(t,e){t.uniform4iv(this.addr,e)}function rw(t,e){t.uniform1uiv(this.addr,e)}function ow(t,e){t.uniform2uiv(this.addr,e)}function sw(t,e){t.uniform3uiv(this.addr,e)}function aw(t,e){t.uniform4uiv(this.addr,e)}function lw(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Uv,o[s])}function uw(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Fv,o[s])}function cw(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||kv,o[s])}function fw(t,e,n){const i=this.cache,r=e.length,o=fu(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Ov,o[s])}function dw(t){switch(t){case 5126:return $E;case 35664:return YE;case 35665:return qE;case 35666:return KE;case 35674:return ZE;case 35675:return QE;case 35676:return JE;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return ow;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return fw}}class hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class pw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dw(n.type)}}class mw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function A0(t,e){t.seq.push(e),t.map[e.id]=e}function gw(t,e,n){const i=t.name,r=i.length;for(Sc.lastIndex=0;;){const o=Sc.exec(i),s=Sc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){A0(n,u===void 0?new hw(a,t,e):new pw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new mw(a),A0(n,f)),n=f}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);gw(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function R0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vw=37297;let _w=0;function yw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const b0=new ze;function xw(t){Je._getMatrix(b0,Je.workingColorSpace,t);const e=`mat3( ${b0.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Il:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function P0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+yw(t.getShaderSource(e),a)}else return o}function Sw(t,e){const n=xw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Mw(t,e){let n;switch(e){case Ry:n="Linear";break;case by:n="Reinhard";break;case Py:n="Cineon";break;case Ly:n="ACESFilmic";break;case Iy:n="AgX";break;case Ny:n="Neutral";break;case Dy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Va=new B;function Ew(){Je.getLuminanceCoefficients(Va);const t=Va.x.toFixed(4),e=Va.y.toFixed(4),n=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Tw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Cw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function fs(t){return t!==""}function L0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(t){return t.replace(Aw,bw)}const Rw=new Map;function bw(t,e){let n=He[e];if(n===void 0){const i=Rw.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(t){return t.replace(Pw,Lw)}function Lw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function N0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function Iw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case Io:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function Uw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fv:e="ENVMAP_BLENDING_MULTIPLY";break;case Cy:e="ENVMAP_BLENDING_MIX";break;case Ay:e="ENVMAP_BLENDING_ADD";break}return e}function Ow(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Fw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Dw(n),u=Iw(n),d=Nw(n),f=Uw(n),h=Ow(n),p=ww(n),_=Tw(o),y=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fs).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fs).join(`
`),c.length>0&&(c+=`
`)):(m=[N0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),c=[N0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?He.tonemapping_pars_fragment:"",n.toneMapping!==Qi?Mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Sw("linearToOutputTexel",n.outputColorSpace),Ew(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fs).join(`
`)),s=ad(s),s=L0(s,n),s=D0(s,n),a=ad(a),a=L0(a,n),a=D0(a,n),s=I0(s),a=I0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+m+s,x=g+c+a,T=R0(r,r.VERTEX_SHADER,v),C=R0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,T),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(y)||"",U=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(C)||"",V=N.trim(),G=U.trim(),K=Y.trim();let D=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,C);else{const q=P0(r,T,"vertex"),se=P0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+q+`
`+se)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||K==="")&&(X=!1);X&&(P.diagnostics={runnable:D,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:c}})}r.deleteShader(T),r.deleteShader(C),R=new al(r,y),S=Cw(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,vw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_w++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=C,this}let kw=0;class zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Bw(e),n.set(e,i)),i}}class Bw{constructor(e){this.id=kw++,this.code=e,this.usedTimes=0}}function Hw(t,e,n,i,r,o,s){const a=new wv,l=new zw,u=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,N,U){const Y=N.fog,V=U.geometry,G=S.isMeshStandardMaterial?N.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||G),D=K&&K.mapping===uu?K.image.height:null,X=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=q!==void 0?q.length:0;let me=0;V.morphAttributes.position!==void 0&&(me=1),V.morphAttributes.normal!==void 0&&(me=2),V.morphAttributes.color!==void 0&&(me=3);let Ke,Ve,Ye,j;if(X){const et=Zn[X];Ke=et.vertexShader,Ve=et.fragmentShader}else Ke=S.vertexShader,Ve=S.fragmentShader,l.update(S),Ye=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const Q=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,qe=!!S.map,Vt=!!S.matcap,L=!!K,dt=!!S.aoMap,Fe=!!S.lightMap,Ie=!!S.bumpMap,xe=!!S.normalMap,ht=!!S.displacementMap,Se=!!S.emissiveMap,Be=!!S.metalnessMap,Ut=!!S.roughnessMap,wt=S.anisotropy>0,b=S.clearcoat>0,E=S.dispersion>0,k=S.iridescence>0,$=S.sheen>0,J=S.transmission>0,W=wt&&!!S.anisotropyMap,Te=b&&!!S.clearcoatMap,oe=b&&!!S.clearcoatNormalMap,Me=b&&!!S.clearcoatRoughnessMap,Ee=k&&!!S.iridescenceMap,ie=k&&!!S.iridescenceThicknessMap,de=$&&!!S.sheenColorMap,De=$&&!!S.sheenRoughnessMap,we=!!S.specularMap,ce=!!S.specularColorMap,ke=!!S.specularIntensityMap,I=J&&!!S.transmissionMap,re=J&&!!S.thicknessMap,ae=!!S.gradientMap,ge=!!S.alphaMap,te=S.alphaTest>0,Z=!!S.alphaHash,ye=!!S.extensions;let Oe=Qi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const at={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:Ve,defines:S.defines,customVertexShaderID:Ye,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:No,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Vt,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:D,aoMap:dt,lightMap:Fe,bumpMap:Ie,normalMap:xe,displacementMap:h&&ht,emissiveMap:Se,normalMapObjectSpace:xe&&S.normalMapType===zy,normalMapTangentSpace:xe&&S.normalMapType===ky,metalnessMap:Be,roughnessMap:Ut,anisotropy:wt,anisotropyMap:W,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:E,iridescence:k,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:de,sheenRoughnessMap:De,specularMap:we,specularColorMap:ce,specularIntensityMap:ke,transmission:J,transmissionMap:I,thicknessMap:re,gradientMap:ae,opaque:S.transparent===!1&&S.blending===xo&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:Z,combine:S.combine,mapUv:qe&&y(S.map.channel),aoMapUv:dt&&y(S.aoMap.channel),lightMapUv:Fe&&y(S.lightMap.channel),bumpMapUv:Ie&&y(S.bumpMap.channel),normalMapUv:xe&&y(S.normalMap.channel),displacementMapUv:ht&&y(S.displacementMap.channel),emissiveMapUv:Se&&y(S.emissiveMap.channel),metalnessMapUv:Be&&y(S.metalnessMap.channel),roughnessMapUv:Ut&&y(S.roughnessMap.channel),anisotropyMapUv:W&&y(S.anisotropyMap.channel),clearcoatMapUv:Te&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(S.sheenRoughnessMap.channel),specularMapUv:we&&y(S.specularMap.channel),specularColorMapUv:ce&&y(S.specularColorMap.channel),specularIntensityMapUv:ke&&y(S.specularIntensityMap.channel),transmissionMapUv:I&&y(S.transmissionMap.channel),thicknessMapUv:re&&y(S.thicknessMap.channel),alphaMapUv:ge&&y(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(qe||ge),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mi,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=u.has(1),at.vertexUv2s=u.has(2),at.vertexUv3s=u.has(3),u.clear(),at}function c(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(M,S),v(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=_[S.type];let P;if(M){const N=Zn[M];P=mx.clone(N.uniforms)}else P=S.uniforms;return P}function T(S,M){let P;for(let N=0,U=d.length;N<U;N++){const Y=d[N];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Fw(t,M,S,o),d.push(P)),P}function C(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function A(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:T,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:R}}function Vw(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function Gw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function U0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function O0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,p,_,y,m){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=y,c.group=m),e++,c}function a(f,h,p,_,y,m){const c=s(f,h,p,_,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(f,h,p,_,y,m){const c=s(f,h,p,_,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||Gw),i.length>1&&i.sort(h||U0),r.length>1&&r.sort(h||U0)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:u}}function Ww(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new O0,t.set(i,[s])):r>=o.length?(s=new O0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Xw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new ot};break;case"SpotLight":n={position:new B,direction:new B,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $w=0;function Yw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qw(t){const e=new Xw,n=jw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,o=new Dt,s=new Dt;function a(u){let d=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,y=0,m=0,c=0,g=0,v=0,x=0,T=0,C=0,A=0;u.sort(Yw);for(let S=0,M=u.length;S<M;S++){const P=u[S],N=P.color,U=P.intensity,Y=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*U,f+=N.g*U,h+=N.b*U;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],U);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,D=n.get(P);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=Y,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[y]=G;const K=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[y]=K.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=V,x++}y++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const K=P.shadow,D=n.get(P);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(U),G.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[c]=G,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==c||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=c,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=A,i.version=$w++)}function l(u,d){let f=0,h=0,p=0,_=0,y=0;const m=d.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const v=u[c];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function F0(t){const e=new qw(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Kw(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new F0(t),e.set(r,[a])):o>=s.length?(a=new F0(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
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
}`;function Jw(t,e,n){let i=new Lv;const r=new nt,o=new nt,s=new At,a=new Tx({depthPacking:Fy}),l=new Cx,u={},d=n.maxTextureSize,f={[tr]:fn,[fn]:tr,[mi]:mi},h=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Zw,fragmentShader:Qw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new sr;_.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ti(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let c=this.type;this.render=function(C,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=c!==di&&this.type===di,Y=c===di&&this.type!==di;for(let V=0,G=C.length;V<G;V++){const K=C[V],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),o.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/X.x),r.x=o.x*X.x,D.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/X.y),r.y=o.y*X.y,D.mapSize.y=o.y)),D.map===null||U===!0||Y===!0){const se=this.type!==di?{minFilter:jn,magFilter:jn}:{};D.map!==null&&D.map.dispose(),D.map=new Nr(r.x,r.y,se),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const q=D.getViewportCount();for(let se=0;se<q;se++){const me=D.getViewport(se);s.set(o.x*me.x,o.y*me.y,o.x*me.z,o.y*me.w),N.viewport(s),D.updateMatrices(K,se),i=D.getFrustum(),x(A,R,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===di&&g(D,R),D.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,P)};function g(C,A){const R=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,R,p,y,null)}function v(C,A,R,S){let M=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=M.uuid,U=A.uuid;let Y=u[N];Y===void 0&&(Y={},u[N]=Y);let V=Y[U];V===void 0&&(V=M.clone(),Y[U]=V,A.addEventListener("dispose",T)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,S===di?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=t.properties.get(M);N.light=R}return M}function x(C,A,R,S,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===di)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const U=e.update(C),Y=C.material;if(Array.isArray(Y)){const V=U.groups;for(let G=0,K=V.length;G<K;G++){const D=V[G],X=Y[D.materialIndex];if(X&&X.visible){const q=v(C,X,S,M);C.onBeforeShadow(t,C,A,R,U,q,D),t.renderBufferDirect(R,null,U,q,C,D),C.onAfterShadow(t,C,A,R,U,q,D)}}}else if(Y.visible){const V=v(C,Y,S,M);C.onBeforeShadow(t,C,A,R,U,V,null),t.renderBufferDirect(R,null,U,V,C,null),C.onAfterShadow(t,C,A,R,U,V,null)}}const N=C.children;for(let U=0,Y=N.length;U<Y;U++)x(N[U],A,R,S,M)}function T(C){C.target.removeEventListener("dispose",T);for(const R in u){const S=u[R],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const eT={[Sf]:Mf,[Ef]:Cf,[wf]:Af,[Lo]:Tf,[Mf]:Sf,[Cf]:Ef,[Af]:wf,[Tf]:Lo};function tT(t,e){function n(){let I=!1;const re=new At;let ae=null;const ge=new At(0,0,0,0);return{setMask:function(te){ae!==te&&!I&&(t.colorMask(te,te,te,te),ae=te)},setLocked:function(te){I=te},setClear:function(te,Z,ye,Oe,at){at===!0&&(te*=Oe,Z*=Oe,ye*=Oe),re.set(te,Z,ye,Oe),ge.equals(re)===!1&&(t.clearColor(te,Z,ye,Oe),ge.copy(re))},reset:function(){I=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,ae=null,ge=null,te=null;return{setReversed:function(Z){if(re!==Z){const ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return re},setTest:function(Z){Z?Q(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!I&&(t.depthMask(Z),ae=Z)},setFunc:function(Z){if(re&&(Z=eT[Z]),ge!==Z){switch(Z){case Sf:t.depthFunc(t.NEVER);break;case Mf:t.depthFunc(t.ALWAYS);break;case Ef:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case wf:t.depthFunc(t.EQUAL);break;case Tf:t.depthFunc(t.GEQUAL);break;case Cf:t.depthFunc(t.GREATER);break;case Af:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Z}},setLocked:function(Z){I=Z},setClear:function(Z){te!==Z&&(re&&(Z=1-Z),t.clearDepth(Z),te=Z)},reset:function(){I=!1,ae=null,ge=null,te=null,re=!1}}}function r(){let I=!1,re=null,ae=null,ge=null,te=null,Z=null,ye=null,Oe=null,at=null;return{setTest:function(et){I||(et?Q(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(et){re!==et&&!I&&(t.stencilMask(et),re=et)},setFunc:function(et,si,Yn){(ae!==et||ge!==si||te!==Yn)&&(t.stencilFunc(et,si,Yn),ae=et,ge=si,te=Yn)},setOp:function(et,si,Yn){(Z!==et||ye!==si||Oe!==Yn)&&(t.stencilOp(et,si,Yn),Z=et,ye=si,Oe=Yn)},setLocked:function(et){I=et},setClear:function(et){at!==et&&(t.clearStencil(et),at=et)},reset:function(){I=!1,re=null,ae=null,ge=null,te=null,Z=null,ye=null,Oe=null,at=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,y=!1,m=null,c=null,g=null,v=null,x=null,T=null,C=null,A=new ot(0,0,0),R=0,S=!1,M=null,P=null,N=null,U=null,Y=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),G=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),G=K>=2);let X=null,q={};const se=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Ke=new At().fromArray(se),Ve=new At().fromArray(me);function Ye(I,re,ae,ge){const te=new Uint8Array(4),Z=t.createTexture();t.bindTexture(I,Z),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<ae;ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(re+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return Z}const j={};j[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Q(t.DEPTH_TEST),s.setFunc(Lo),Ie(!1),xe(Gp),Q(t.CULL_FACE),dt(Zi);function Q(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function ve(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Ue(I,re){return f[I]!==re?(t.bindFramebuffer(I,re),f[I]=re,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ae(I,re){let ae=p,ge=!1;if(I){ae=h.get(re),ae===void 0&&(ae=[],h.set(re,ae));const te=I.textures;if(ae.length!==te.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,ye=te.length;Z<ye;Z++)ae[Z]=t.COLOR_ATTACHMENT0+Z;ae.length=te.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function qe(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const Vt={[yr]:t.FUNC_ADD,[uy]:t.FUNC_SUBTRACT,[cy]:t.FUNC_REVERSE_SUBTRACT};Vt[fy]=t.MIN,Vt[dy]=t.MAX;const L={[hy]:t.ZERO,[py]:t.ONE,[my]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[Sy]:t.SRC_ALPHA_SATURATE,[yy]:t.DST_COLOR,[vy]:t.DST_ALPHA,[gy]:t.ONE_MINUS_SRC_COLOR,[xf]:t.ONE_MINUS_SRC_ALPHA,[xy]:t.ONE_MINUS_DST_COLOR,[_y]:t.ONE_MINUS_DST_ALPHA,[My]:t.CONSTANT_COLOR,[Ey]:t.ONE_MINUS_CONSTANT_COLOR,[wy]:t.CONSTANT_ALPHA,[Ty]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(I,re,ae,ge,te,Z,ye,Oe,at,et){if(I===Zi){y===!0&&(ve(t.BLEND),y=!1);return}if(y===!1&&(Q(t.BLEND),y=!0),I!==ly){if(I!==m||et!==S){if((c!==yr||x!==yr)&&(t.blendEquation(t.FUNC_ADD),c=yr,x=yr),et)switch(I){case xo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFunc(t.ONE,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,v=null,T=null,C=null,A.set(0,0,0),R=0,m=I,S=et}return}te=te||re,Z=Z||ae,ye=ye||ge,(re!==c||te!==x)&&(t.blendEquationSeparate(Vt[re],Vt[te]),c=re,x=te),(ae!==g||ge!==v||Z!==T||ye!==C)&&(t.blendFuncSeparate(L[ae],L[ge],L[Z],L[ye]),g=ae,v=ge,T=Z,C=ye),(Oe.equals(A)===!1||at!==R)&&(t.blendColor(Oe.r,Oe.g,Oe.b,at),A.copy(Oe),R=at),m=I,S=!1}function Fe(I,re){I.side===mi?ve(t.CULL_FACE):Q(t.CULL_FACE);let ae=I.side===fn;re&&(ae=!ae),Ie(ae),I.blending===xo&&I.transparent===!1?dt(Zi):dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const ge=I.stencilWrite;a.setTest(ge),ge&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function xe(I){I!==oy?(Q(t.CULL_FACE),I!==P&&(I===Gp?t.cullFace(t.BACK):I===sy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),P=I}function ht(I){I!==N&&(G&&t.lineWidth(I),N=I)}function Se(I,re,ae){I?(Q(t.POLYGON_OFFSET_FILL),(U!==re||Y!==ae)&&(t.polygonOffset(re,ae),U=re,Y=ae)):ve(t.POLYGON_OFFSET_FILL)}function Be(I){I?Q(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function Ut(I){I===void 0&&(I=t.TEXTURE0+V-1),X!==I&&(t.activeTexture(I),X=I)}function wt(I,re,ae){ae===void 0&&(X===null?ae=t.TEXTURE0+V-1:ae=X);let ge=q[ae];ge===void 0&&(ge={type:void 0,texture:void 0},q[ae]=ge),(ge.type!==I||ge.texture!==re)&&(X!==ae&&(t.activeTexture(ae),X=ae),t.bindTexture(I,re||j[I]),ge.type=I,ge.texture=re)}function b(){const I=q[X];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){Ke.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function De(I){Ve.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function we(I,re){let ae=u.get(re);ae===void 0&&(ae=new WeakMap,u.set(re,ae));let ge=ae.get(I);ge===void 0&&(ge=t.getUniformBlockIndex(re,I.name),ae.set(I,ge))}function ce(I,re){const ge=u.get(re).get(I);l.get(re)!==ge&&(t.uniformBlockBinding(re,ge,I.__bindingPointIndex),l.set(re,ge))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,q={},f={},h=new WeakMap,p=[],_=null,y=!1,m=null,c=null,g=null,v=null,x=null,T=null,C=null,A=new ot(0,0,0),R=0,S=!1,M=null,P=null,N=null,U=null,Y=null,Ke.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Q,disable:ve,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:qe,setBlending:dt,setMaterial:Fe,setFlipSided:Ie,setCullFace:xe,setLineWidth:ht,setPolygonOffset:Se,setScissorTest:Be,activeTexture:Ut,bindTexture:wt,unbindTexture:b,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:Ee,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:oe,texStorage3D:Me,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:de,viewport:De,reset:ke}}function nT(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,E){return p?new OffscreenCanvas(b,E):Ul("canvas")}function y(b,E,k){let $=1;const J=wt(b);if((J.width>k||J.height>k)&&($=k/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor($*J.width),Te=Math.floor($*J.height);f===void 0&&(f=_(W,Te));const oe=E?_(W,Te):f;return oe.width=W,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,W,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Te+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function c(b){t.generateMipmap(b)}function g(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(b,E,k,$,J=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=E;if(E===t.RED&&(k===t.FLOAT&&(W=t.R32F),k===t.HALF_FLOAT&&(W=t.R16F),k===t.UNSIGNED_BYTE&&(W=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(W=t.R8UI),k===t.UNSIGNED_SHORT&&(W=t.R16UI),k===t.UNSIGNED_INT&&(W=t.R32UI),k===t.BYTE&&(W=t.R8I),k===t.SHORT&&(W=t.R16I),k===t.INT&&(W=t.R32I)),E===t.RG&&(k===t.FLOAT&&(W=t.RG32F),k===t.HALF_FLOAT&&(W=t.RG16F),k===t.UNSIGNED_BYTE&&(W=t.RG8)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(W=t.RG8UI),k===t.UNSIGNED_SHORT&&(W=t.RG16UI),k===t.UNSIGNED_INT&&(W=t.RG32UI),k===t.BYTE&&(W=t.RG8I),k===t.SHORT&&(W=t.RG16I),k===t.INT&&(W=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(W=t.RGB8UI),k===t.UNSIGNED_SHORT&&(W=t.RGB16UI),k===t.UNSIGNED_INT&&(W=t.RGB32UI),k===t.BYTE&&(W=t.RGB8I),k===t.SHORT&&(W=t.RGB16I),k===t.INT&&(W=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),k===t.UNSIGNED_INT&&(W=t.RGBA32UI),k===t.BYTE&&(W=t.RGBA8I),k===t.SHORT&&(W=t.RGBA16I),k===t.INT&&(W=t.RGBA32I)),E===t.RGB&&(k===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),E===t.RGBA){const Te=J?Il:Je.getTransfer($);k===t.FLOAT&&(W=t.RGBA32F),k===t.HALF_FLOAT&&(W=t.RGBA16F),k===t.UNSIGNED_BYTE&&(W=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(b,E){let k;return b?E===null||E===Ir||E===zs?k=t.DEPTH24_STENCIL8:E===_i?k=t.DEPTH32F_STENCIL8:E===ks&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ir||E===zs?k=t.DEPTH_COMPONENT24:E===_i?k=t.DEPTH_COMPONENT32F:E===ks&&(k=t.DEPTH_COMPONENT16),k}function T(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==jn&&b.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){const E=b.target;E.removeEventListener("dispose",C),R(E),E.isVideoTexture&&d.delete(E)}function A(b){const E=b.target;E.removeEventListener("dispose",A),M(E)}function R(b){const E=i.get(b);if(E.__webglInit===void 0)return;const k=b.source,$=h.get(k);if($){const J=$[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(b),Object.keys($).length===0&&h.delete(k)}i.remove(b)}function S(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const k=b.source,$=h.get(k);delete $[E.__cacheKey],s.memory.textures--}function M(b){const E=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let J=0;J<E.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[$][J]);else t.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)t.deleteFramebuffer(E.__webglFramebuffer[$]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=b.textures;for(let $=0,J=k.length;$<J;$++){const W=i.get(k[$]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(k[$])}i.remove(b)}let P=0;function N(){P=0}function U(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function Y(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function V(b,E){const k=i.get(b);if(b.isVideoTexture&&Be(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,b,E);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function G(b,E){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){j(k,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function K(b,E){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){j(k,b,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function D(b,E){const k=i.get(b);if(b.version>0&&k.__version!==b.version){Q(k,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const X={[Pf]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[Lf]:t.MIRRORED_REPEAT},q={[jn]:t.NEAREST,[Uy]:t.NEAREST_MIPMAP_NEAREST,[Ma]:t.NEAREST_MIPMAP_LINEAR,[Jn]:t.LINEAR,[Xu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},se={[By]:t.NEVER,[jy]:t.ALWAYS,[Hy]:t.LESS,[Sv]:t.LEQUAL,[Vy]:t.EQUAL,[Xy]:t.GEQUAL,[Gy]:t.GREATER,[Wy]:t.NOTEQUAL};function me(b,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Xu||E.magFilter===Ma||E.magFilter===Tr||E.minFilter===Jn||E.minFilter===Xu||E.minFilter===Ma||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,X[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,X[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,X[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,q[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jn||E.minFilter!==Ma&&E.minFilter!==Tr||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(b,E){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",C));const $=E.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const W=Y(E);if(W!==b.__cacheKey){J[W]===void 0&&(J[W]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,k=!0),J[W].usedTimes++;const Te=J[b.__cacheKey];Te!==void 0&&(J[b.__cacheKey].usedTimes--,Te.usedTimes===0&&S(E)),b.__cacheKey=W,b.__webglTexture=J[W].texture}return k}function Ve(b,E,k){return Math.floor(Math.floor(b/k)/E)}function Ye(b,E,k,$){const W=b.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,k,$,E.data);else{W.sort((ie,de)=>ie.start-de.start);let Te=0;for(let ie=1;ie<W.length;ie++){const de=W[Te],De=W[ie],we=de.start+de.count,ce=Ve(De.start,E.width,4),ke=Ve(de.start,E.width,4);De.start<=we+1&&ce===ke&&Ve(De.start+De.count-1,E.width,4)===ce?de.count=Math.max(de.count,De.start+De.count-de.start):(++Te,W[Te]=De)}W.length=Te+1;const oe=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ie=0,de=W.length;ie<de;ie++){const De=W[ie],we=Math.floor(De.start/4),ce=Math.ceil(De.count/4),ke=we%E.width,I=Math.floor(we/E.width),re=ce,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,ke,I,re,ae,k,$,E.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function j(b,E,k){let $=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=t.TEXTURE_3D);const J=Ke(b,E),W=E.source;n.bindTexture($,b.__webglTexture,t.TEXTURE0+k);const Te=i.get(W);if(W.version!==Te.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const oe=Je.getPrimaries(Je.workingColorSpace),Me=E.colorSpace===Bi?null:Je.getPrimaries(E.colorSpace),Ee=E.colorSpace===Bi||oe===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=y(E.image,!1,r.maxTextureSize);ie=Ut(E,ie);const de=o.convert(E.format,E.colorSpace),De=o.convert(E.type);let we=v(E.internalFormat,de,De,E.colorSpace,E.isVideoTexture);me($,E);let ce;const ke=E.mipmaps,I=E.isVideoTexture!==!0,re=Te.__version===void 0||J===!0,ae=W.dataReady,ge=T(E,ie);if(E.isDepthTexture)we=x(E.format===Hs,E.type),re&&(I?n.texStorage2D(t.TEXTURE_2D,1,we,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,we,ie.width,ie.height,0,de,De,null));else if(E.isDataTexture)if(ke.length>0){I&&re&&n.texStorage2D(t.TEXTURE_2D,ge,we,ke[0].width,ke[0].height);for(let te=0,Z=ke.length;te<Z;te++)ce=ke[te],I?ae&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,de,De,ce.data):n.texImage2D(t.TEXTURE_2D,te,we,ce.width,ce.height,0,de,De,ce.data);E.generateMipmaps=!1}else I?(re&&n.texStorage2D(t.TEXTURE_2D,ge,we,ie.width,ie.height),ae&&Ye(E,ie,de,De)):n.texImage2D(t.TEXTURE_2D,0,we,ie.width,ie.height,0,de,De,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,we,ke[0].width,ke[0].height,ie.depth);for(let te=0,Z=ke.length;te<Z;te++)if(ce=ke[te],E.format!==Gn)if(de!==null)if(I){if(ae)if(E.layerUpdates.size>0){const ye=h0(ce.width,ce.height,E.format,E.type);for(const Oe of E.layerUpdates){const at=ce.data.subarray(Oe*ye/ce.data.BYTES_PER_ELEMENT,(Oe+1)*ye/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Oe,ce.width,ce.height,1,de,at)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,de,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,we,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,de,De,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,we,ce.width,ce.height,ie.depth,0,de,De,ce.data)}else{I&&re&&n.texStorage2D(t.TEXTURE_2D,ge,we,ke[0].width,ke[0].height);for(let te=0,Z=ke.length;te<Z;te++)ce=ke[te],E.format!==Gn?de!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,de,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,te,we,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,de,De,ce.data):n.texImage2D(t.TEXTURE_2D,te,we,ce.width,ce.height,0,de,De,ce.data)}else if(E.isDataArrayTexture)if(I){if(re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,we,ie.width,ie.height,ie.depth),ae)if(E.layerUpdates.size>0){const te=h0(ie.width,ie.height,E.format,E.type);for(const Z of E.layerUpdates){const ye=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,de,De,ye)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,De,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,de,De,ie.data);else if(E.isData3DTexture)I?(re&&n.texStorage3D(t.TEXTURE_3D,ge,we,ie.width,ie.height,ie.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,De,ie.data)):n.texImage3D(t.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,de,De,ie.data);else if(E.isFramebufferTexture){if(re)if(I)n.texStorage2D(t.TEXTURE_2D,ge,we,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,we,te,Z,0,de,De,null),te>>=1,Z>>=1}}else if(ke.length>0){if(I&&re){const te=wt(ke[0]);n.texStorage2D(t.TEXTURE_2D,ge,we,te.width,te.height)}for(let te=0,Z=ke.length;te<Z;te++)ce=ke[te],I?ae&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de,De,ce):n.texImage2D(t.TEXTURE_2D,te,we,de,De,ce);E.generateMipmaps=!1}else if(I){if(re){const te=wt(ie);n.texStorage2D(t.TEXTURE_2D,ge,we,te.width,te.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,De,ie)}else n.texImage2D(t.TEXTURE_2D,0,we,de,De,ie);m(E)&&c($),Te.__version=W.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Q(b,E,k){if(E.image.length!==6)return;const $=Ke(b,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+k);const W=i.get(J);if(J.version!==W.__version||$===!0){n.activeTexture(t.TEXTURE0+k);const Te=Je.getPrimaries(Je.workingColorSpace),oe=E.colorSpace===Bi?null:Je.getPrimaries(E.colorSpace),Me=E.colorSpace===Bi||Te===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Ee&&!ie?de[Z]=y(E.image[Z],!0,r.maxCubemapSize):de[Z]=ie?E.image[Z].image:E.image[Z],de[Z]=Ut(E,de[Z]);const De=de[0],we=o.convert(E.format,E.colorSpace),ce=o.convert(E.type),ke=v(E.internalFormat,we,ce,E.colorSpace),I=E.isVideoTexture!==!0,re=W.__version===void 0||$===!0,ae=J.dataReady;let ge=T(E,De);me(t.TEXTURE_CUBE_MAP,E);let te;if(Ee){I&&re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ke,De.width,De.height);for(let Z=0;Z<6;Z++){te=de[Z].mipmaps;for(let ye=0;ye<te.length;ye++){const Oe=te[ye];E.format!==Gn?we!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Oe.width,Oe.height,we,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Oe.width,Oe.height,we,ce,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,ke,Oe.width,Oe.height,0,we,ce,Oe.data)}}}else{if(te=E.mipmaps,I&&re){te.length>0&&ge++;const Z=wt(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,we,ce,de[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,de[Z].width,de[Z].height,0,we,ce,de[Z].data);for(let ye=0;ye<te.length;ye++){const at=te[ye].image[Z].image;I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,at.width,at.height,we,ce,at.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,ke,at.width,at.height,0,we,ce,at.data)}}else{I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,ce,de[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,we,ce,de[Z]);for(let ye=0;ye<te.length;ye++){const Oe=te[ye];I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,we,ce,Oe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,ke,we,ce,Oe.image[Z])}}}m(E)&&c(t.TEXTURE_CUBE_MAP),W.__version=J.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ve(b,E,k,$,J,W){const Te=o.convert(k.format,k.colorSpace),oe=o.convert(k.type),Me=v(k.internalFormat,Te,oe,k.colorSpace),Ee=i.get(E),ie=i.get(k);if(ie.__renderTarget=E,!Ee.__hasExternalTextures){const de=Math.max(1,E.width>>W),De=Math.max(1,E.height>>W);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,W,Me,de,De,E.depth,0,Te,oe,null):n.texImage2D(J,W,Me,de,De,0,Te,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,ie.__webglTexture,0,ht(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,ie.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(b,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const $=E.depthTexture,J=$&&$.isDepthTexture?$.type:null,W=x(E.stencilBuffer,J),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=ht(E);Se(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,W,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,W,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,W,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,b)}else{const $=E.textures;for(let J=0;J<$.length;J++){const W=$[J],Te=o.convert(W.format,W.colorSpace),oe=o.convert(W.type),Me=v(W.internalFormat,Te,oe,W.colorSpace),Ee=ht(E);k&&Se(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Me,E.width,E.height):Se(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,Me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const J=$.__webglTexture,W=ht(E);if(E.depthTexture.format===Bs)Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===Hs)Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qe(b){const E=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=$}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=b.texture.mipmaps;$&&$.length>0?Ae(E.__webglFramebuffer[0],b):Ae(E.__webglFramebuffer,b)}else if(k){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=t.createRenderbuffer(),Ue(E.__webglDepthbuffer[$],b,!1);else{const J=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,W)}}else{const $=b.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ue(E.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vt(b,E,k){const $=i.get(b);E!==void 0&&ve($.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&qe(b)}function L(b){const E=b.texture,k=i.get(b),$=i.get(E);b.addEventListener("dispose",A);const J=b.textures,W=b.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=E.version,s.memory.textures++),W){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let Me=0;Me<E.mipmaps.length;Me++)k.__webglFramebuffer[oe][Me]=t.createFramebuffer()}else k.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)k.__webglFramebuffer[oe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Te)for(let oe=0,Me=J.length;oe<Me;oe++){const Ee=i.get(J[oe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&Se(b)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Me=J[oe];k.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const Ee=o.convert(Me.format,Me.colorSpace),ie=o.convert(Me.type),de=v(Me.internalFormat,Ee,ie,Me.colorSpace,b.isXRRenderTarget===!0),De=ht(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),me(t.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)ve(k.__webglFramebuffer[oe][Me],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else ve(k.__webglFramebuffer[oe],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let oe=0,Me=J.length;oe<Me;oe++){const Ee=J[oe],ie=i.get(Ee);let de=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ie.__webglTexture),me(de,Ee),ve(k.__webglFramebuffer,b,Ee,t.COLOR_ATTACHMENT0+oe,de,0),m(Ee)&&c(de)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,$.__webglTexture),me(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)ve(k.__webglFramebuffer[Me],b,E,t.COLOR_ATTACHMENT0,oe,Me);else ve(k.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,oe,0);m(E)&&c(oe),n.unbindTexture()}b.depthBuffer&&qe(b)}function dt(b){const E=b.textures;for(let k=0,$=E.length;k<$;k++){const J=E[k];if(m(J)){const W=g(b),Te=i.get(J).__webglTexture;n.bindTexture(W,Te),c(W),n.unbindTexture()}}}const Fe=[],Ie=[];function xe(b){if(b.samples>0){if(Se(b)===!1){const E=b.textures,k=b.width,$=b.height;let J=t.COLOR_BUFFER_BIT;const W=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(b),oe=E.length>1;if(oe)for(let Ee=0;Ee<E.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Me=b.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ie=i.get(E[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,k,$,0,0,k,$,J,t.NEAREST),l===!0&&(Fe.length=0,Ie.length=0,Fe.push(t.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Fe.push(W),Ie.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Ee=0;Ee<E.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ie=i.get(E[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ht(b){return Math.min(r.maxSamples,b.samples)}function Se(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(b){const E=s.render.frame;d.get(b)!==E&&(d.set(b,E),b.update())}function Ut(b,E){const k=b.colorSpace,$=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==No&&k!==Bi&&(Je.getTransfer(k)===rt?($!==Gn||J!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function wt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=D,this.rebindTextures=Vt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Se}function iT(t,e){function n(i,r=Bi){let o;const s=Je.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===hv)return t.BYTE;if(i===pv)return t.SHORT;if(i===ks)return t.UNSIGNED_SHORT;if(i===ph)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===qs)return t.HALF_FLOAT;if(i===vv)return t.ALPHA;if(i===_v)return t.RGB;if(i===Gn)return t.RGBA;if(i===Bs)return t.DEPTH_COMPONENT;if(i===Hs)return t.DEPTH_STENCIL;if(i===yv)return t.RED;if(i===vh)return t.RED_INTEGER;if(i===xv)return t.RG;if(i===_h)return t.RG_INTEGER;if(i===yh)return t.RGBA_INTEGER;if(i===il||i===rl||i===ol||i===sl)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===il)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===il)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Df||i===If||i===Nf||i===Uf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Df)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===If)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Of||i===Ff||i===kf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Of||i===Ff)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===kf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===jf||i===$f||i===Yf||i===qf||i===Kf||i===Zf||i===Qf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===zf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$f)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jf||i===ed||i===td)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Jf)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ed)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===td)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===id||i===rd||i===od)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===nd)return o.COMPRESSED_RED_RGTC1_EXT;if(i===id)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===od)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Iv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new nr({vertexShader:rT,fragmentShader:oT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aT extends Wo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",m=new sT,c={},g=n.getContextAttributes();let v=null,x=null;const T=[],C=[],A=new nt;let R=null;const S=new Pn;S.viewport=new At;const M=new Pn;M.viewport=new At;const P=[S,M],N=new Rx;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=T[j];return Q===void 0&&(Q=new pc,T[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=T[j];return Q===void 0&&(Q=new pc,T[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=T[j];return Q===void 0&&(Q=new pc,T[j]=Q),Q.getHandSpace()};function V(j){const Q=C.indexOf(j.inputSource);if(Q===-1)return;const ve=T[Q];ve!==void 0&&(ve.update(j.inputSource,j.frame,u||s),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let j=0;j<T.length;j++){const Q=C[j];Q!==null&&(C[j]=null,T[j].disconnect(Q))}U=null,Y=null,m.reset();for(const j in c)delete c[j];e.setRenderTarget(v),p=null,h=null,f=null,r=null,x=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ue=null,Ae=null;g.depth&&(Ae=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=g.stencil?Hs:Bs,Ue=g.stencil?zs:Ir);const qe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:o};f=this.getBinding(),h=f.createProjectionLayer(qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Nr(h.textureWidth,h.textureHeight,{format:Gn,type:Ti,depthTexture:new Dv(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Nr(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(j){for(let Q=0;Q<j.removed.length;Q++){const ve=j.removed[Q],Ue=C.indexOf(ve);Ue>=0&&(C[Ue]=null,T[Ue].disconnect(ve))}for(let Q=0;Q<j.added.length;Q++){const ve=j.added[Q];let Ue=C.indexOf(ve);if(Ue===-1){for(let qe=0;qe<T.length;qe++)if(qe>=C.length){C.push(ve),Ue=qe;break}else if(C[qe]===null){C[qe]=ve,Ue=qe;break}if(Ue===-1)break}const Ae=T[Ue];Ae&&Ae.connect(ve)}}const D=new B,X=new B;function q(j,Q,ve){D.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);const Ue=D.distanceTo(X),Ae=Q.projectionMatrix.elements,qe=ve.projectionMatrix.elements,Vt=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),dt=(Ae[9]+1)/Ae[5],Fe=(Ae[9]-1)/Ae[5],Ie=(Ae[8]-1)/Ae[0],xe=(qe[8]+1)/qe[0],ht=Vt*Ie,Se=Vt*xe,Be=Ue/(-Ie+xe),Ut=Be*-Ie;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ut),j.translateZ(Be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const wt=Vt+Be,b=L+Be,E=ht-Ut,k=Se+(Ue-Ut),$=dt*L/b*wt,J=Fe*L/b*wt;j.projectionMatrix.makePerspective(E,k,$,J,wt,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function se(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Q=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),N.near=M.near=S.near=Q,N.far=M.far=S.far=ve,(U!==N.near||Y!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,Y=N.far),N.layers.mask=j.layers.mask|6,S.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Ue=j.parent,Ae=N.cameras;se(N,Ue);for(let qe=0;qe<Ae.length;qe++)se(Ae[qe],Ue);Ae.length===2?q(N,S,M):N.projectionMatrix.copy(S.projectionMatrix),me(j,N,Ue)};function me(j,Q,ve){ve===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=sd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return c[j]};let Ke=null;function Ve(j,Q){if(d=Q.getViewerPose(u||s),_=Q,d!==null){const ve=d.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ue=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let L=0;L<ve.length;L++){const dt=ve[L];let Fe=null;if(p!==null)Fe=p.getViewport(dt);else{const xe=f.getViewSubImage(h,dt);Fe=xe.viewport,L===0&&(e.setRenderTargetTextures(x,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(x))}let Ie=P[L];Ie===void 0&&(Ie=new Pn,Ie.layers.enable(L),Ie.viewport=new At,P[L]=Ie),Ie.matrix.fromArray(dt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(dt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),L===0&&(N.matrix.copy(Ie.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Ie)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const L=f.getDepthInformation(ve[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Ae&&Ae.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let L=0;L<ve.length;L++){const dt=ve[L].camera;if(dt){let Fe=c[dt];Fe||(Fe=new Iv,c[dt]=Fe);const Ie=f.getCameraImage(dt);Fe.sourceTexture=Ie}}}}for(let ve=0;ve<T.length;ve++){const Ue=C[ve],Ae=T[ve];Ue!==null&&Ae!==void 0&&Ae.update(Ue,Q,u||s)}Ke&&Ke(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ye=new Nv;Ye.setAnimationLoop(Ve),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}}const pr=new Ci,lT=new Dt;function uT(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Rv(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,v,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),f(m,c)):c.isMeshPhongMaterial?(o(m,c),d(m,c)):c.isMeshStandardMaterial?(o(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(o(m,c),_(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),y(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,v):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===fn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===fn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),v=g.envMap,x=g.envMapRotation;v&&(m.envMap.value=v,pr.copy(x),pr.x*=-1,pr.y*=-1,pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(pr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,v){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=v*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===fn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cT(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function u(g,v){let x=r[g.id];x===void 0&&(_(g),x=d(g),r[g.id]=x,g.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(g,T);const C=e.render.frame;o[g.id]!==C&&(h(g),o[g.id]=C)}function d(g){const v=f();g.__bindingPointIndex=v;const x=t.createBuffer(),T=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],x=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=x.length;C<A;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(p(P,C,S,T)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let V=0;V<U.length;V++){const G=U[V],K=y(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,N+Y,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,x,T){const C=g.value,A=v+"_"+x;if(T[A]===void 0)return typeof C=="number"||typeof C=="boolean"?T[A]=C:T[A]=C.clone(),!0;{const R=T[A];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return T[A]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(g){const v=g.uniforms;let x=0;const T=16;for(let A=0,R=v.length;A<R;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,P=S.length;M<P;M++){const N=S[M],U=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,V=U.length;Y<V;Y++){const G=U[Y],K=y(G),D=x%T,X=D%K.boundary,q=D+X;x+=X,q!==0&&T-q<K.storage&&(x+=T-q),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=K.storage}}}const C=x%T;return C>0&&(x+=T-C),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const x=s.indexOf(v.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class fT{constructor(e={}){const{canvas:n=Yy(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,c=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=An;let C=0,A=0,R=null,S=-1,M=null;const P=new At,N=new At;let U=null;const Y=new ot(0);let V=0,G=n.width,K=n.height,D=1,X=null,q=null;const se=new At(0,0,G,K),me=new At(0,0,G,K);let Ke=!1;const Ve=new Lv;let Ye=!1,j=!1;const Q=new Dt,ve=new B,Ue=new At,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Vt(){return R===null?D:1}let L=i;function dt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",te,!1),L===null){const O="webgl2";if(L=dt(O,w),L===null)throw dt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,Ie,xe,ht,Se,Be,Ut,wt,b,E,k,$,J,W,Te,oe,Me,Ee,ie,de,De,we,ce,ke;function I(){Fe=new SE(L),Fe.init(),we=new iT(L,Fe),Ie=new pE(L,Fe,e,we),xe=new tT(L,Fe),Ie.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),ht=new wE(L),Se=new Vw,Be=new nT(L,Fe,xe,Se,Ie,we,ht),Ut=new gE(x),wt=new xE(x),b=new Px(L),ce=new dE(L,b),E=new ME(L,b,ht,ce),k=new CE(L,E,b,ht),ie=new TE(L,Ie,Be),oe=new mE(Se),$=new Hw(x,Ut,wt,Fe,Ie,ce,oe),J=new uT(x,Se),W=new Ww,Te=new Kw(Fe),Ee=new fE(x,Ut,wt,xe,k,p,l),Me=new Jw(x,k,Ie),ke=new cT(L,ht,Ie,xe),de=new hE(L,Fe,ht),De=new EE(L,Fe,ht),ht.programs=$.programs,x.capabilities=Ie,x.extensions=Fe,x.properties=Se,x.renderLists=W,x.shadowMap=Me,x.state=xe,x.info=ht}I();const re=new aT(x,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(G,K,!1))},this.getSize=function(w){return w.set(G,K)},this.setSize=function(w,O,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,K=O,n.width=Math.floor(w*D),n.height=Math.floor(O*D),z===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(G*D,K*D).floor()},this.setDrawingBufferSize=function(w,O,z){G=w,K=O,D=z,n.width=Math.floor(w*z),n.height=Math.floor(O*z),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,O,z,H){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,O,z,H),xe.viewport(P.copy(se).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,O,z,H){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,O,z,H),xe.scissor(N.copy(me).multiplyScalar(D).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(w){xe.setScissorTest(Ke=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,z=!0){let H=0;if(w){let F=!1;if(R!==null){const ne=R.texture.format;F=ne===yh||ne===_h||ne===vh}if(F){const ne=R.texture.type,fe=ne===Ti||ne===Ir||ne===ks||ne===zs||ne===mh||ne===gh,_e=Ee.getClearColor(),pe=Ee.getClearAlpha(),Le=_e.r,Ne=_e.g,Re=_e.b;fe?(_[0]=Le,_[1]=Ne,_[2]=Re,_[3]=pe,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=Le,y[1]=Ne,y[2]=Re,y[3]=pe,L.clearBufferiv(L.COLOR,0,y))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",te,!1),Ee.dispose(),W.dispose(),Te.dispose(),Se.dispose(),Ut.dispose(),wt.dispose(),k.dispose(),ce.dispose(),ke.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",Yn),re.removeEventListener("sessionend",Ah),ar.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ht.autoReset,O=Me.enabled,z=Me.autoUpdate,H=Me.needsUpdate,F=Me.type;I(),ht.autoReset=w,Me.enabled=O,Me.autoUpdate=z,Me.needsUpdate=H,Me.type=F}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Z(w){const O=w.target;O.removeEventListener("dispose",Z),ye(O)}function ye(w){Oe(w),Se.remove(w)}function Oe(w){const O=Se.get(w).programs;O!==void 0&&(O.forEach(function(z){$.releaseProgram(z)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,z,H,F,ne){O===null&&(O=Ae);const fe=F.isMesh&&F.matrixWorld.determinant()<0,_e=y_(w,O,z,H,F);xe.setMaterial(H,fe);let pe=z.index,Le=1;if(H.wireframe===!0){if(pe=E.getWireframeAttribute(z),pe===void 0)return;Le=2}const Ne=z.drawRange,Re=z.attributes.position;let je=Ne.start*Le,it=(Ne.start+Ne.count)*Le;ne!==null&&(je=Math.max(je,ne.start*Le),it=Math.min(it,(ne.start+ne.count)*Le)),pe!==null?(je=Math.max(je,0),it=Math.min(it,pe.count)):Re!=null&&(je=Math.max(je,0),it=Math.min(it,Re.count));const Mt=it-je;if(Mt<0||Mt===1/0)return;ce.setup(F,H,_e,z,pe);let ut,st=de;if(pe!==null&&(ut=b.get(pe),st=De,st.setIndex(ut)),F.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*Vt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(F.isLine){let be=H.linewidth;be===void 0&&(be=1),xe.setLineWidth(be*Vt()),F.isLineSegments?st.setMode(L.LINES):F.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else F.isPoints?st.setMode(L.POINTS):F.isSprite&&st.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,gt=F._multiDrawCounts,Qe=F._multiDrawCount,hn=pe?b.get(pe).bytesPerElement:1,kr=Se.get(H).currentProgram.getUniforms();for(let pn=0;pn<Qe;pn++)kr.setValue(L,"_gl_DrawID",pn),st.render(be[pn]/hn,gt[pn])}else if(F.isInstancedMesh)st.renderInstances(je,Mt,F.count);else if(z.isInstancedBufferGeometry){const be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,be);st.renderInstances(je,Mt,gt)}else st.render(je,Mt)};function at(w,O,z){w.transparent===!0&&w.side===mi&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,ia(w,O,z),w.side=tr,w.needsUpdate=!0,ia(w,O,z),w.side=mi):ia(w,O,z)}this.compile=function(w,O,z=null){z===null&&(z=w),c=Te.get(z),c.init(O),v.push(c),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),c.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ne=F.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const _e=ne[fe];at(_e,z,F),H.add(_e)}else at(ne,z,F),H.add(ne)}),c=v.pop(),H},this.compileAsync=function(w,O,z=null){const H=this.compile(w,O,z);return new Promise(F=>{function ne(){if(H.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){F(w);return}setTimeout(ne,10)}Fe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let et=null;function si(w){et&&et(w)}function Yn(){ar.stop()}function Ah(){ar.start()}const ar=new Nv;ar.setAnimationLoop(si),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(w){et=w,re.setAnimationLoop(w),w===null?ar.stop():ar.start()},re.addEventListener("sessionstart",Yn),re.addEventListener("sessionend",Ah),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,R),c=Te.get(w,v.length),c.init(O),v.push(c),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(Q,ei,O.reversedDepth),j=this.localClippingEnabled,Ye=oe.init(this.clippingPlanes,j),m=W.get(w,g.length),m.init(),g.push(m),re.enabled===!0&&re.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&vu(ne,O,-1/0,x.sortObjects)}vu(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(X,q),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&Ee.addToRenderList(m,w),this.info.render.frame++,Ye===!0&&oe.beginShadows();const z=c.state.shadowsArray;Me.render(z,w,O),Ye===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(c.setupLights(),O.isArrayCamera){const ne=O.cameras;if(F.length>0)for(let fe=0,_e=ne.length;fe<_e;fe++){const pe=ne[fe];bh(H,F,w,pe)}qe&&Ee.render(w);for(let fe=0,_e=ne.length;fe<_e;fe++){const pe=ne[fe];Rh(m,w,pe,pe.viewport)}}else F.length>0&&bh(H,F,w,O),qe&&Ee.render(w),Rh(m,w,O);R!==null&&A===0&&(Be.updateMultisampleRenderTarget(R),Be.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,O),ce.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(c=v[v.length-1],Ye===!0&&oe.setGlobalState(x.clippingPlanes,c.state.camera)):c=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function vu(w,O,z,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)c.pushLight(w),w.castShadow&&c.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ve.intersectsSprite(w)){H&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const fe=k.update(w),_e=w.material;_e.visible&&m.push(w,fe,_e,z,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ve.intersectsObject(w))){const fe=k.update(w),_e=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(_e)){const pe=fe.groups;for(let Le=0,Ne=pe.length;Le<Ne;Le++){const Re=pe[Le],je=_e[Re.materialIndex];je&&je.visible&&m.push(w,fe,je,z,Ue.z,Re)}}else _e.visible&&m.push(w,fe,_e,z,Ue.z,null)}}const ne=w.children;for(let fe=0,_e=ne.length;fe<_e;fe++)vu(ne[fe],O,z,H)}function Rh(w,O,z,H){const F=w.opaque,ne=w.transmissive,fe=w.transparent;c.setupLightsView(z),Ye===!0&&oe.setGlobalState(x.clippingPlanes,z),H&&xe.viewport(P.copy(H)),F.length>0&&na(F,O,z),ne.length>0&&na(ne,O,z),fe.length>0&&na(fe,O,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function bh(w,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[H.id]===void 0&&(c.state.transmissionRenderTarget[H.id]=new Nr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?qs:Ti,minFilter:Tr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ne=c.state.transmissionRenderTarget[H.id],fe=H.viewport||P;ne.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);const _e=x.getRenderTarget(),pe=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(Y),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Ee.render(z);const Ne=x.toneMapping;x.toneMapping=Qi;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),c.setupLightsView(H),Ye===!0&&oe.setGlobalState(x.clippingPlanes,H),na(w,z,H),Be.updateMultisampleRenderTarget(ne),Be.updateRenderTargetMipmap(ne),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,Mt=O.length;it<Mt;it++){const ut=O[it],st=ut.object,be=ut.geometry,gt=ut.material,Qe=ut.group;if(gt.side===mi&&st.layers.test(H.layers)){const hn=gt.side;gt.side=fn,gt.needsUpdate=!0,Ph(st,z,H,be,gt,Qe),gt.side=hn,gt.needsUpdate=!0,je=!0}}je===!0&&(Be.updateMultisampleRenderTarget(ne),Be.updateRenderTargetMipmap(ne))}x.setRenderTarget(_e,pe,Le),x.setClearColor(Y,V),Re!==void 0&&(H.viewport=Re),x.toneMapping=Ne}function na(w,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ne=w.length;F<ne;F++){const fe=w[F],_e=fe.object,pe=fe.geometry,Le=fe.group;let Ne=fe.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),_e.layers.test(z.layers)&&Ph(_e,O,z,pe,Ne,Le)}}function Ph(w,O,z,H,F,ne){w.onBeforeRender(x,O,z,H,F,ne),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,O,z,H,w,ne),F.transparent===!0&&F.side===mi&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,w,ne),F.side=tr,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,w,ne),F.side=mi):x.renderBufferDirect(z,O,H,F,w,ne),w.onAfterRender(x,O,z,H,F,ne)}function ia(w,O,z){O.isScene!==!0&&(O=Ae);const H=Se.get(w),F=c.state.lights,ne=c.state.shadowsArray,fe=F.state.version,_e=$.getParameters(w,F.state,ne,O,z),pe=$.getProgramCacheKey(_e);let Le=H.programs;H.environment=w.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(w.isMeshStandardMaterial?wt:Ut).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Z),Le=new Map,H.programs=Le);let Ne=Le.get(pe);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===fe)return Dh(w,_e),Ne}else _e.uniforms=$.getUniforms(w),w.onBeforeCompile(_e,x),Ne=$.acquireProgram(_e,pe),Le.set(pe,Ne),H.uniforms=_e.uniforms;const Re=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Dh(w,_e),H.needsLights=S_(w),H.lightsStateVersion=fe,H.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Lh(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=al.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Dh(w,O){const z=Se.get(w);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function y_(w,O,z,H,F){O.isScene!==!0&&(O=Ae),Be.resetTextureUnits();const ne=O.fog,fe=H.isMeshStandardMaterial?O.environment:null,_e=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:No,pe=(H.isMeshStandardMaterial?wt:Ut).get(H.envMap||fe),Le=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let Mt=Qi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=ut!==void 0?ut.length:0,be=Se.get(H),gt=c.state.lights;if(Ye===!0&&(j===!0||w!==M)){const qt=w===M&&H.id===S;oe.setState(H,w,qt)}let Qe=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==gt.state.version||be.outputColorSpace!==_e||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==pe||H.fog===!0&&be.fog!==ne||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==oe.numPlanes||be.numIntersection!==oe.numIntersection)||be.vertexAlphas!==Le||be.vertexTangents!==Ne||be.morphTargets!==Re||be.morphNormals!==je||be.morphColors!==it||be.toneMapping!==Mt||be.morphTargetsCount!==st)&&(Qe=!0):(Qe=!0,be.__version=H.version);let hn=be.currentProgram;Qe===!0&&(hn=ia(H,O,F));let kr=!1,pn=!1,jo=!1;const vt=hn.getUniforms(),wn=be.uniforms;if(xe.useProgram(hn.program)&&(kr=!0,pn=!0,jo=!0),H.id!==S&&(S=H.id,pn=!0),kr||M!==w){xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",w.projectionMatrix),vt.setValue(L,"viewMatrix",w.matrixWorldInverse);const nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(L,ve.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,pn=!0,jo=!0)}if(F.isSkinnedMesh){vt.setOptional(L,F,"bindMatrix"),vt.setOptional(L,F,"bindMatrixInverse");const qt=F.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),vt.setValue(L,"boneTexture",qt.boneTexture,Be))}F.isBatchedMesh&&(vt.setOptional(L,F,"batchingTexture"),vt.setValue(L,"batchingTexture",F._matricesTexture,Be),vt.setOptional(L,F,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",F._indirectTexture,Be),vt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",F._colorsTexture,Be));const Tn=z.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ie.update(F,z,hn),(pn||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,vt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(wn.envMap.value=pe,wn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(wn.envMapIntensity.value=O.environmentIntensity),pn&&(vt.setValue(L,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&x_(wn,jo),ne&&H.fog===!0&&J.refreshFogUniforms(wn,ne),J.refreshMaterialUniforms(wn,H,D,K,c.state.transmissionRenderTarget[w.id]),al.upload(L,Lh(be),wn,Be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(al.upload(L,Lh(be),wn,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(L,"center",F.center),vt.setValue(L,"modelViewMatrix",F.modelViewMatrix),vt.setValue(L,"normalMatrix",F.normalMatrix),vt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qt=H.uniformsGroups;for(let nn=0,_u=qt.length;nn<_u;nn++){const lr=qt[nn];ke.update(lr,hn),ke.bind(lr,hn)}}return hn}function x_(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function S_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,z){const H=Se.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(w.texture).__webglTexture=O,Se.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const z=Se.get(w);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0};const M_=L.createFramebuffer();this.setRenderTarget=function(w,O=0,z=0){R=w,C=O,A=z;let H=!0,F=null,ne=!1,fe=!1;if(w){const pe=Se.get(w);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(pe.__webglFramebuffer===void 0)Be.setupRenderTarget(w);else if(pe.__hasExternalTextures)Be.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ne=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?F=Ne[O][z]:F=Ne[O],ne=!0):w.samples>0&&Be.useMultisampledRTT(w)===!1?F=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[z]:F=Ne,P.copy(w.viewport),N.copy(w.scissor),U=w.scissorTest}else P.copy(se).multiplyScalar(D).floor(),N.copy(me).multiplyScalar(D).floor(),U=Ke;if(z!==0&&(F=M_),xe.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&xe.drawBuffers(w,F),xe.viewport(P),xe.scissor(N),xe.setScissorTest(U),ne){const pe=Se.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,z)}else if(fe){const pe=O;for(let Le=0;Le<w.textures.length;Le++){const Ne=Se.get(w.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,z,pe)}}else if(w!==null&&z!==0){const pe=Se.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(w,O,z,H,F,ne,fe,_e=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe){xe.bindFramebuffer(L.FRAMEBUFFER,pe);try{const Le=w.textures[_e],Ne=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&z>=0&&z<=w.height-F&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(O,z,H,F,we.convert(Ne),we.convert(Re),ne))}finally{const Le=R!==null?Se.get(R).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,O,z,H,F,ne,fe,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe)if(O>=0&&O<=w.width-H&&z>=0&&z<=w.height-F){xe.bindFramebuffer(L.FRAMEBUFFER,pe);const Le=w.textures[_e],Ne=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(O,z,H,F,we.convert(Ne),we.convert(Re),0);const it=R!==null?Se.get(R).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,it);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qy(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(je),L.deleteSync(Mt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,z=0){const H=Math.pow(2,-z),F=Math.floor(w.image.width*H),ne=Math.floor(w.image.height*H),fe=O!==null?O.x:0,_e=O!==null?O.y:0;Be.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,fe,_e,F,ne),xe.unbindTexture()};const E_=L.createFramebuffer(),w_=L.createFramebuffer();this.copyTextureToTexture=function(w,O,z=null,H=null,F=0,ne=null){ne===null&&(F!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=F,F=0):ne=0);let fe,_e,pe,Le,Ne,Re,je,it,Mt;const ut=w.isCompressedTexture?w.mipmaps[ne]:w.image;if(z!==null)fe=z.max.x-z.min.x,_e=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Ne=z.min.y,Re=z.isBox3?z.min.z:0;else{const Tn=Math.pow(2,-F);fe=Math.floor(ut.width*Tn),_e=Math.floor(ut.height*Tn),w.isDataArrayTexture?pe=ut.depth:w.isData3DTexture?pe=Math.floor(ut.depth*Tn):pe=1,Le=0,Ne=0,Re=0}H!==null?(je=H.x,it=H.y,Mt=H.z):(je=0,it=0,Mt=0);const st=we.convert(O.format),be=we.convert(O.type);let gt;O.isData3DTexture?(Be.setTexture3D(O,0),gt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Be.setTexture2DArray(O,0),gt=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(O,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),hn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kr=L.getParameter(L.UNPACK_SKIP_PIXELS),pn=L.getParameter(L.UNPACK_SKIP_ROWS),jo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const vt=w.isDataArrayTexture||w.isData3DTexture,wn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Tn=Se.get(w),qt=Se.get(O),nn=Se.get(Tn.__renderTarget),_u=Se.get(qt.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,_u.__webglFramebuffer);for(let lr=0;lr<pe;lr++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,F,Re+lr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,ne,Mt+lr)),L.blitFramebuffer(Le,Ne,fe,_e,je,it,fe,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||Se.has(w)){const Tn=Se.get(w),qt=Se.get(O);xe.bindFramebuffer(L.READ_FRAMEBUFFER,E_),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,w_);for(let nn=0;nn<pe;nn++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tn.__webglTexture,F,Re+nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tn.__webglTexture,F),wn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,ne,Mt+nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,ne),F!==0?L.blitFramebuffer(Le,Ne,fe,_e,je,it,fe,_e,L.COLOR_BUFFER_BIT,L.NEAREST):wn?L.copyTexSubImage3D(gt,ne,je,it,Mt+nn,Le,Ne,fe,_e):L.copyTexSubImage2D(gt,ne,je,it,Le,Ne,fe,_e);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else wn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(gt,ne,je,it,Mt,fe,_e,pe,st,be,ut.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,ne,je,it,Mt,fe,_e,pe,st,ut.data):L.texSubImage3D(gt,ne,je,it,Mt,fe,_e,pe,st,be,ut):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ne,je,it,fe,_e,st,be,ut.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ne,je,it,ut.width,ut.height,st,ut.data):L.texSubImage2D(L.TEXTURE_2D,ne,je,it,fe,_e,st,be,ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,hn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kr),L.pixelStorei(L.UNPACK_SKIP_ROWS,pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jo),ne===0&&O.generateMipmaps&&L.generateMipmap(gt),xe.unbindTexture()},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&Be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const dT=()=>{const t=Tt.useRef(null),e=Tt.useRef(),n=Tt.useRef(),i=Tt.useRef(),r=Tt.useRef(),o=Tt.useRef();return Tt.useEffect(()=>{if(!t.current)return;const s=new Sx;e.current=s;const a=new Pn(60,window.innerWidth/350,.1,1e3);a.position.set(0,40,100),a.lookAt(0,0,0),i.current=a;const l=new fT({alpha:!0,antialias:!0});l.setSize(window.innerWidth,300),l.setClearColor(0,0),t.current.appendChild(l.domElement),n.current=l;const u=new cs;s.add(u),r.current=u;const d=120,f=60,h=4,p=6,_=[];for(let g=0;g<d;g++)for(let v=0;v<f;v++){const x=Math.random()>.5;let T;x?T=new Eh(.6,8):T=new ea(1,.6);const C=new Mh({color:2278750,transparent:!0,opacity:.8}),A=new ti(T,C);A.position.x=(g-d/2)*h,A.position.z=(v-f/2)*p,A.position.y=0,A.userData={originalX:A.position.x,originalZ:A.position.z,gridX:g,gridZ:v},u.add(A),_.push(A)}let y=0;const m=()=>{y+=.03,_.forEach(g=>{const{originalX:v,originalZ:x,gridX:T,gridZ:C}=g.userData,A=.08,R=.12,S=.05,M=Math.sin(y*2+T*A)*10,P=Math.sin(y*1.5+C*R)*6,N=Math.sin(y*.8+(T+C)*S)*4,U=M+P+N;g.position.y=U,g.position.x=v+Math.sin(y*.5+T*.1)*1,g.position.z=x+Math.cos(y*.3+C*.1)*.5;const Y=g.material,V=(U+18)/36;Y.opacity=.4+V*.5}),a.position.x=Math.sin(y*.1)*8,a.position.y=40+Math.sin(y*.08)*3,a.lookAt(0,0,0),l.render(s,a),o.current=requestAnimationFrame(m)};m();const c=()=>{!a||!l||(a.aspect=window.innerWidth/350,a.updateProjectionMatrix(),l.setSize(window.innerWidth,350))};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),o.current&&cancelAnimationFrame(o.current),t.current&&l.domElement&&t.current.removeChild(l.domElement),l.dispose(),_.forEach(g=>{g.geometry.dispose(),g.material.dispose()})}},[]),Ce.jsx("div",{ref:t,className:"w-full pointer-events-none",style:{height:"350px"}})},hT=()=>Ce.jsxs("section",{className:"relative min-h-screen bg-white overflow-hidden",children:[Ce.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 pt-14",children:[Ce.jsx("div",{className:"flex justify-center mb-5",children:Ce.jsxs("div",{className:"bg-[#FFFFFF] rounded-full px-5 py-2 shadow-sm border flex items-center space-x-1",children:[Ce.jsx("div",{className:"w-3 h-3 bg-[#B0FF44] rounded-full"}),Ce.jsx("span",{className:"text-[7px] text-gray-700  md:text-[12px] md:font-semibold",children:"JSW Motors & KPIT Technologies forge strategic collaboration"})]})}),Ce.jsxs("div",{className:"text-center",children:[Ce.jsxs("h1",{className:"font-inter text-3xl md:text-[76px] font-bold text-gray-900 leading-tight mb-2",children:["Shaping The Future",Ce.jsx("br",{}),Ce.jsx("span",{className:"font-inter text-gray-800",children:"Of Mobility"})]}),Ce.jsx("p",{className:"text-sm md:text-[18px] text-[#464646] max-w-4xl mx-auto leading-relaxed",children:"We are reimagining mobility for creating a cleaner, smarter and safer world."})]})]}),Ce.jsx("div",{className:"relative w-full",children:Ce.jsx(dT,{})})]});var zv={},Bv={},du={},Hv={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(Hv);var pT="Expected a function",k0=NaN,mT="[object Symbol]",gT=/^\s+|\s+$/g,vT=/^[-+]0x[0-9a-f]+$/i,_T=/^0b[01]+$/i,yT=/^0o[0-7]+$/i,xT=parseInt,ST=typeof ra=="object"&&ra&&ra.Object===Object&&ra,MT=typeof self=="object"&&self&&self.Object===Object&&self,ET=ST||MT||Function("return this")(),wT=Object.prototype,TT=wT.toString,CT=Math.max,AT=Math.min,Mc=function(){return ET.Date.now()};function RT(t,e,n){var i,r,o,s,a,l,u=0,d=!1,f=!1,h=!0;if(typeof t!="function")throw new TypeError(pT);e=z0(e)||0,ld(n)&&(d=!!n.leading,f="maxWait"in n,o=f?CT(z0(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h);function p(C){var A=i,R=r;return i=r=void 0,u=C,s=t.apply(R,A),s}function _(C){return u=C,a=setTimeout(c,e),d?p(C):s}function y(C){var A=C-l,R=C-u,S=e-A;return f?AT(S,o-R):S}function m(C){var A=C-l,R=C-u;return l===void 0||A>=e||A<0||f&&R>=o}function c(){var C=Mc();if(m(C))return g(C);a=setTimeout(c,y(C))}function g(C){return a=void 0,h&&i?p(C):(i=r=void 0,s)}function v(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function x(){return a===void 0?s:g(Mc())}function T(){var C=Mc(),A=m(C);if(i=arguments,r=this,l=C,A){if(a===void 0)return _(l);if(f)return a=setTimeout(c,e),p(l)}return a===void 0&&(a=setTimeout(c,e)),s}return T.cancel=v,T.flush=x,T}function ld(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function bT(t){return!!t&&typeof t=="object"}function PT(t){return typeof t=="symbol"||bT(t)&&TT.call(t)==mT}function z0(t){if(typeof t=="number")return t;if(PT(t))return k0;if(ld(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ld(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(gT,"");var n=_T.test(t);return n||yT.test(t)?xT(t.slice(2),n?2:8):vT.test(t)?k0:+t}var LT=RT,Vv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=r(o,i(a)))}return o}function i(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)e.call(o,a)&&o[a]&&(s=r(s,a));return s}function r(o,s){return s?o?o+" "+s:o+s:o}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Vv);var hu=Vv.exports,le={},Th={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(Tt);function n(r){return r&&r.__esModule?r:{default:r}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};t.default=i})(Th);Object.defineProperty(le,"__esModule",{value:!0});le.checkSpecKeys=le.checkNavigable=le.changeSlide=le.canUseDOM=le.canGoNext=void 0;le.clamp=Wv;le.extractObject=void 0;le.filterSettings=jT;le.validSettings=le.swipeStart=le.swipeMove=le.swipeEnd=le.slidesOnRight=le.slidesOnLeft=le.slideHandler=le.siblingDirection=le.safePreventDefault=le.lazyStartIndex=le.lazySlidesOnRight=le.lazySlidesOnLeft=le.lazyEndIndex=le.keyHandler=le.initializedState=le.getWidth=le.getTrackLeft=le.getTrackCSS=le.getTrackAnimateCSS=le.getTotalSlides=le.getSwipeDirection=le.getSlideCount=le.getRequiredLazySlides=le.getPreClones=le.getPostClones=le.getOnDemandLazySlides=le.getNavigableIndexes=le.getHeight=void 0;var DT=Gv(Tt),IT=Gv(Th);function Gv(t){return t&&t.__esModule?t:{default:t}}function Gs(t){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gs(t)}function B0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B0(Object(n),!0).forEach(function(i){NT(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function NT(t,e,n){return(e=UT(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function UT(t){var e=OT(t,"string");return Gs(e)=="symbol"?e:e+""}function OT(t,e){if(Gs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Gs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Wv(t,e,n){return Math.max(e,Math.min(t,n))}var Mo=le.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},Xv=le.getOnDemandLazySlides=function(e){for(var n=[],i=jv(e),r=$v(e),o=i;o<r;o++)e.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};le.getRequiredLazySlides=function(e){for(var n=[],i=jv(e),r=$v(e),o=i;o<r;o++)n.push(o);return n};var jv=le.lazyStartIndex=function(e){return e.currentSlide-FT(e)},$v=le.lazyEndIndex=function(e){return e.currentSlide+kT(e)},FT=le.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},kT=le.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},ud=le.getWidth=function(e){return e&&e.offsetWidth||0},Yv=le.getHeight=function(e){return e&&e.offsetHeight||0},qv=le.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r,o,s;return i=e.startX-e.curX,r=e.startY-e.curY,o=Math.atan2(r,i),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"},Kv=le.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};le.extractObject=function(e,n){var i={};return n.forEach(function(r){return i[r]=e[r]}),i};le.initializedState=function(e){var n=DT.default.Children.count(e.children),i=e.listRef,r=Math.ceil(ud(i)),o=e.trackRef&&e.trackRef.node,s=Math.ceil(ud(o)),a;if(e.vertical)a=r;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=r/100),a=Math.ceil((r-l)/e.slidesToShow)}var u=i&&Yv(i.querySelector('[data-index="0"]')),d=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var h=e.lazyLoadedList||[],p=Xv(pt(pt({},e),{},{currentSlide:f,lazyLoadedList:h}));h=h.concat(p);var _={slideCount:n,slideWidth:a,listWidth:r,trackWidth:s,currentSlide:f,slideHeight:u,listHeight:d,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(_.autoplaying="playing"),_};le.slideHandler=function(e){var n=e.waitForAnimate,i=e.animating,r=e.fade,o=e.infinite,s=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,d=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,p=e.useCSS,_=e.lazyLoadedList;if(n&&i)return{};var y=s,m,c,g,v={},x={},T=o?s:Wv(s,0,a-1);if(r){if(!o&&(s<0||s>=a))return{};s<0?y=s+a:s>=a&&(y=s-a),l&&_.indexOf(y)<0&&(_=_.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:_,targetSlide:y},x={animating:!1,targetSlide:y}}else m=y,y<0?(m=y+a,o?a%f!==0&&(m=a-a%f):m=0):!Kv(e)&&y>u?y=m=u:d&&y>=a?(y=o?a:a-1,m=o?0:a-1):y>=a&&(m=y-a,o?a%f!==0&&(m=0):m=a-h),!o&&y+h>=a&&(m=a-h),c=Fl(pt(pt({},e),{},{slideIndex:y})),g=Fl(pt(pt({},e),{},{slideIndex:m})),o||(c===g&&(y=m),c=g),l&&(_=_.concat(Xv(pt(pt({},e),{},{currentSlide:y})))),p?(v={animating:!0,currentSlide:m,trackStyle:Zv(pt(pt({},e),{},{left:c})),lazyLoadedList:_,targetSlide:T},x={animating:!1,currentSlide:m,trackStyle:Ol(pt(pt({},e),{},{left:g})),swipeLeft:null,targetSlide:T}):v={currentSlide:m,trackStyle:Ol(pt(pt({},e),{},{left:g})),lazyLoadedList:_,targetSlide:T};return{state:v,nextState:x}};le.changeSlide=function(e,n){var i,r,o,s,a,l=e.slidesToScroll,u=e.slidesToShow,d=e.slideCount,f=e.currentSlide,h=e.targetSlide,p=e.lazyLoad,_=e.infinite;if(s=d%l!==0,i=s?0:(d-f)%l,n.message==="previous")o=i===0?l:u-i,a=f-o,p&&!_&&(r=f-o,a=r===-1?d-1:r),_||(a=h-l);else if(n.message==="next")o=i===0?l:i,a=f+o,p&&!_&&(a=(f+l)%d+i),_||(a=h+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,_){var y=VT(pt(pt({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-d:a<n.currentSlide&&y==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};le.keyHandler=function(e,n,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};le.swipeStart=function(e,n,i){return e.target.tagName==="IMG"&&Mo(e),!n||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};le.swipeMove=function(e,n){var i=n.scrolling,r=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,d=n.edgeFriction,f=n.edgeDragged,h=n.onEdge,p=n.swiped,_=n.swiping,y=n.slideCount,m=n.slidesToScroll,c=n.infinite,g=n.touchObject,v=n.swipeEvent,x=n.listHeight,T=n.listWidth;if(!i){if(r)return Mo(e);o&&s&&a&&Mo(e);var C,A={},R=Fl(n);g.curX=e.touches?e.touches[0].pageX:e.clientX,g.curY=e.touches?e.touches[0].pageY:e.clientY,g.swipeLength=Math.round(Math.sqrt(Math.pow(g.curX-g.startX,2)));var S=Math.round(Math.sqrt(Math.pow(g.curY-g.startY,2)));if(!a&&!_&&S>10)return{scrolling:!0};a&&(g.swipeLength=S);var M=(l?-1:1)*(g.curX>g.startX?1:-1);a&&(M=g.curY>g.startY?1:-1);var P=Math.ceil(y/m),N=qv(n.touchObject,a),U=g.swipeLength;return c||(u===0&&(N==="right"||N==="down")||u+1>=P&&(N==="left"||N==="up")||!Kv(n)&&(N==="left"||N==="up"))&&(U=g.swipeLength*d,f===!1&&h&&(h(N),A.edgeDragged=!0)),!p&&v&&(v(N),A.swiped=!0),o?C=R+U*(x/T)*M:l?C=R-U*M:C=R+U*M,a&&(C=R+U*M),A=pt(pt({},A),{},{touchObject:g,swipeLeft:C,trackStyle:Ol(pt(pt({},n),{},{left:C}))}),Math.abs(g.curX-g.startX)<Math.abs(g.curY-g.startY)*.8||g.swipeLength>10&&(A.swiping=!0,Mo(e)),A}};le.swipeEnd=function(e,n){var i=n.dragging,r=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,f=n.scrolling,h=n.onSwipe,p=n.targetSlide,_=n.currentSlide,y=n.infinite;if(!i)return r&&Mo(e),{};var m=l?u/a:s/a,c=qv(o,l),g={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return g;if(o.swipeLength>m){Mo(e),h&&h(c);var v,x,T=y?_:p;switch(c){case"left":case"up":x=T+V0(n),v=d?H0(n,x):x,g.currentDirection=0;break;case"right":case"down":x=T-V0(n),v=d?H0(n,x):x,g.currentDirection=1;break;default:v=T}g.triggerSlideHandler=v}else{var C=Fl(n);g.trackStyle=Zv(pt(pt({},n),{},{left:C}))}return g};var zT=le.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,o=[];i<n;)o.push(i),i=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return o},H0=le.checkNavigable=function(e,n){var i=zT(e),r=0;if(n>i[i.length-1])n=i[i.length-1];else for(var o in i){if(n<i[o]){n=r;break}r=i[o]}return n},V0=le.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,r=e.listRef,o=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(e.vertical){if(l.offsetTop+Yv(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-n+ud(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var s=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(i.dataset.index-s)||1;return a}else return e.slidesToScroll},Ch=le.checkSpecKeys=function(e,n){return n.reduce(function(i,r){return i&&e.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",e)},Ol=le.getTrackCSS=function(e){Ch(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,i;if(!e.vertical)n=HT(e)*e.slideWidth;else{var r=e.unslick?e.slideCount:e.slideCount+2*e.slidesToShow;i=r*e.slideHeight}var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=pt(pt({},o),{},{WebkitTransform:s,transform:a,msTransform:l})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),n&&(o.width=n),i&&(o.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o},Zv=le.getTrackAnimateCSS=function(e){Ch(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ol(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},Fl=le.getTrackLeft=function(e){if(e.unslick)return 0;Ch(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,i=e.trackRef,r=e.infinite,o=e.centerMode,s=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,d=e.listWidth,f=e.variableWidth,h=e.slideHeight,p=e.fade,_=e.vertical,y=0,m,c,g=0;if(p||e.slideCount===1)return 0;var v=0;if(r?(v=-ll(e),s%l!==0&&n+l>s&&(v=-(n>s?a-(n-s):s%l)),o&&(v+=parseInt(a/2))):(s%l!==0&&n+l>s&&(v=a-s%l),o&&(v=parseInt(a/2))),y=v*u,g=v*h,_?m=n*h*-1+g:m=n*u*-1+y,f===!0){var x,T=i&&i.node;if(x=n+ll(e),c=T&&T.childNodes[x],m=c?c.offsetLeft*-1:0,o===!0){x=r?n+ll(e):n,c=T&&T.children[x],m=0;for(var C=0;C<x;C++)m-=T&&T.children[C]&&T.children[C].offsetWidth;m-=parseInt(e.centerPadding),m+=c&&(d-c.offsetWidth)/2}}return m},ll=le.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},BT=le.getPostClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},HT=le.getTotalSlides=function(e){return e.slideCount===1?1:ll(e)+e.slideCount+BT(e)},VT=le.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+GT(e)?"left":"right":e.targetSlide<e.currentSlide-WT(e)?"right":"left"},GT=le.slidesOnRight=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,o=e.centerPadding;if(i){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),r&&n%2===0&&(s+=1),s}return r?0:n-1},WT=le.slidesOnLeft=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,o=e.centerPadding;if(i){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!r&&n%2===0&&(s+=1),s}return r?n-1:0};le.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var XT=le.validSettings=Object.keys(IT.default);function jT(t){return XT.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var pu={};Object.defineProperty(pu,"__esModule",{value:!0});pu.Track=void 0;var Fi=Qv(Tt),Ec=Qv(hu),Ga=le;function Qv(t){return t&&t.__esModule?t:{default:t}}function Oo(t){"@babel/helpers - typeof";return Oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oo(t)}function cd(){return cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cd.apply(null,arguments)}function $T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function YT(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,e_(i.key),i)}}function qT(t,e,n){return e&&YT(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function KT(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&fd(t,e)}function fd(t,e){return fd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},fd(t,e)}function ZT(t){var e=Jv();return function(){var n,i=kl(t);if(e){var r=kl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return QT(this,n)}}function QT(t,e){if(e&&(Oo(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dd(t)}function dd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jv(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Jv=function(){return!!t})()}function kl(t){return kl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},kl(t)}function G0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function on(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?G0(Object(n),!0).forEach(function(i){hd(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function hd(t,e,n){return(e=e_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e_(t){var e=JT(t,"string");return Oo(e)=="symbol"?e:e+""}function JT(t,e){if(Oo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Oo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var wc=function(e){var n,i,r,o,s;e.rtl?s=e.slideCount-1-e.index:s=e.index,r=s<0||s>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),i=(s-e.currentSlide)%e.slideCount===0,s>e.currentSlide-o-1&&s<=e.currentSlide+o&&(n=!0)):n=e.currentSlide<=s&&s<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":i,"slick-cloned":r,"slick-current":l}},eC=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Tc=function(e,n){return e.key||n},tC=function(e){var n,i=[],r=[],o=[],s=Fi.default.Children.count(e.children),a=(0,Ga.lazyStartIndex)(e),l=(0,Ga.lazyEndIndex)(e);return Fi.default.Children.forEach(e.children,function(u,d){var f,h={message:"children",index:d,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(d)>=0?f=u:f=Fi.default.createElement("div",null);var p=eC(on(on({},e),{},{index:d})),_=f.props.className||"",y=wc(on(on({},e),{},{index:d}));if(i.push(Fi.default.cloneElement(f,{key:"original"+Tc(f,d),"data-index":d,className:(0,Ec.default)(y,_),tabIndex:"-1","aria-hidden":!y["slick-active"],style:on(on({outline:"none"},f.props.style||{}),p),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&s>1&&e.fade===!1&&!e.unslick){var m=s-d;m<=(0,Ga.getPreClones)(e)&&(n=-m,n>=a&&(f=u),y=wc(on(on({},e),{},{index:n})),r.push(Fi.default.cloneElement(f,{key:"precloned"+Tc(f,n),"data-index":n,tabIndex:"-1",className:(0,Ec.default)(y,_),"aria-hidden":!y["slick-active"],style:on(on({},f.props.style||{}),p),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(h)}}))),d<(0,Ga.getPostClones)(e)&&(n=s+d,n<l&&(f=u),y=wc(on(on({},e),{},{index:n})),o.push(Fi.default.cloneElement(f,{key:"postcloned"+Tc(f,n),"data-index":n,tabIndex:"-1",className:(0,Ec.default)(y,_),"aria-hidden":!y["slick-active"],style:on(on({},f.props.style||{}),p),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(h)}})))}}),e.rtl?r.concat(i,o).reverse():r.concat(i,o)};pu.Track=function(t){KT(n,t);var e=ZT(n);function n(){var i;$T(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return i=e.call.apply(e,[this].concat(o)),hd(dd(i),"node",null),hd(dd(i),"handleRef",function(a){i.node=a}),i}return qT(n,[{key:"render",value:function(){var r=tC(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:s,onMouseOver:a,onMouseLeave:l};return Fi.default.createElement("div",cd({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),r)}}]),n}(Fi.default.PureComponent);var mu={};function Fo(t){"@babel/helpers - typeof";return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fo(t)}Object.defineProperty(mu,"__esModule",{value:!0});mu.Dots=void 0;var Wa=t_(Tt),nC=t_(hu),W0=le;function t_(t){return t&&t.__esModule?t:{default:t}}function X0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function iC(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X0(Object(n),!0).forEach(function(i){rC(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function rC(t,e,n){return(e=n_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sC(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,n_(i.key),i)}}function aC(t,e,n){return e&&sC(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function n_(t){var e=lC(t,"string");return Fo(e)=="symbol"?e:e+""}function lC(t,e){if(Fo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Fo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&pd(t,e)}function pd(t,e){return pd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},pd(t,e)}function cC(t){var e=i_();return function(){var n,i=zl(t);if(e){var r=zl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return fC(this,n)}}function fC(t,e){if(e&&(Fo(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dC(t)}function dC(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i_(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(i_=function(){return!!t})()}function zl(t){return zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},zl(t)}var hC=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};mu.Dots=function(t){uC(n,t);var e=cC(n);function n(){return oC(this,n),e.apply(this,arguments)}return aC(n,[{key:"clickHandler",value:function(r,o){o.preventDefault(),this.props.clickHandler(r)}},{key:"render",value:function(){for(var r=this.props,o=r.onMouseEnter,s=r.onMouseOver,a=r.onMouseLeave,l=r.infinite,u=r.slidesToScroll,d=r.slidesToShow,f=r.slideCount,h=r.currentSlide,p=hC({slideCount:f,slidesToScroll:u,slidesToShow:d,infinite:l}),_={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},y=[],m=0;m<p;m++){var c=(m+1)*u-1,g=l?c:(0,W0.clamp)(c,0,f-1),v=g-(u-1),x=l?v:(0,W0.clamp)(v,0,f-1),T=(0,nC.default)({"slick-active":l?h>=x&&h<=g:h===x}),C={message:"dots",index:m,slidesToScroll:u,currentSlide:h},A=this.clickHandler.bind(this,C);y=y.concat(Wa.default.createElement("li",{key:m,className:T},Wa.default.cloneElement(this.props.customPaging(m),{onClick:A})))}return Wa.default.cloneElement(this.props.appendDots(y),iC({className:this.props.dotsClass},_))}}]),n}(Wa.default.PureComponent);var ko={};function zo(t){"@babel/helpers - typeof";return zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zo(t)}Object.defineProperty(ko,"__esModule",{value:!0});ko.PrevArrow=ko.NextArrow=void 0;var Eo=o_(Tt),r_=o_(hu),pC=le;function o_(t){return t&&t.__esModule?t:{default:t}}function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bl.apply(null,arguments)}function j0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Hl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j0(Object(n),!0).forEach(function(i){mC(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function mC(t,e,n){return(e=l_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s_(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gC(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,l_(i.key),i)}}function a_(t,e,n){return e&&gC(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function l_(t){var e=vC(t,"string");return zo(e)=="symbol"?e:e+""}function vC(t,e){if(zo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(zo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function u_(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&md(t,e)}function md(t,e){return md=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},md(t,e)}function c_(t){var e=f_();return function(){var n,i=Vl(t);if(e){var r=Vl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _C(this,n)}}function _C(t,e){if(e&&(zo(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yC(t)}function yC(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f_(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(f_=function(){return!!t})()}function Vl(t){return Vl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Vl(t)}ko.PrevArrow=function(t){u_(n,t);var e=c_(n);function n(){return s_(this,n),e.apply(this,arguments)}return a_(n,[{key:"clickHandler",value:function(r,o){o&&o.preventDefault(),this.props.clickHandler(r,o)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(r["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,r_.default)(r),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=Eo.default.cloneElement(this.props.prevArrow,Hl(Hl({},s),a)):l=Eo.default.createElement("button",Bl({key:"0",type:"button"},s)," ","Previous"),l}}]),n}(Eo.default.PureComponent);ko.NextArrow=function(t){u_(n,t);var e=c_(n);function n(){return s_(this,n),e.apply(this,arguments)}return a_(n,[{key:"clickHandler",value:function(r,o){o&&o.preventDefault(),this.props.clickHandler(r,o)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,pC.canGoNext)(this.props)||(r["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,r_.default)(r),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=Eo.default.cloneElement(this.props.nextArrow,Hl(Hl({},s),a)):l=Eo.default.createElement("button",Bl({key:"1",type:"button"},s)," ","Next"),l}}]),n}(Eo.default.PureComponent);var d_=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(r,o){return r[0]===n?(i=o,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(n,i){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,o=this.__entries__;r<o.length;r++){var s=o[r];n.call(i,s[1],s[0])}},e}()}(),gd=typeof window<"u"&&typeof document<"u"&&window.document===document,Gl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),xC=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Gl):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),SC=2;function MC(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&a()}function s(){xC(o)}function a(){var l=Date.now();if(n){if(l-r<SC)return;i=!0}else n=!0,i=!1,setTimeout(s,e);r=l}return a}var EC=20,wC=["top","right","bottom","left","width","height","size","weight"],TC=typeof MutationObserver<"u",CC=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=MC(this.refresh.bind(this),EC)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!gd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),TC?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!gd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,r=wC.some(function(o){return!!~i.indexOf(o)});r&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h_=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},Bo=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Gl},p_=gu(0,0,0,0);function Wl(t){return parseFloat(t)||0}function $0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){var o=t["border-"+r+"-width"];return i+Wl(o)},0)}function AC(t){for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){var o=r[i],s=t["padding-"+o];n[o]=Wl(s)}return n}function RC(t){var e=t.getBBox();return gu(0,0,e.width,e.height)}function bC(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return p_;var i=Bo(t).getComputedStyle(t),r=AC(i),o=r.left+r.right,s=r.top+r.bottom,a=Wl(i.width),l=Wl(i.height);if(i.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=$0(i,"left","right")+o),Math.round(l+s)!==n&&(l-=$0(i,"top","bottom")+s)),!LC(t)){var u=Math.round(a+o)-e,d=Math.round(l+s)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(l-=d)}return gu(r.left,r.top,a,l)}var PC=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Bo(t).SVGGraphicsElement}:function(t){return t instanceof Bo(t).SVGElement&&typeof t.getBBox=="function"}}();function LC(t){return t===Bo(t).document.documentElement}function DC(t){return gd?PC(t)?RC(t):bC(t):p_}function IC(t){var e=t.x,n=t.y,i=t.width,r=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return h_(s,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),s}function gu(t,e,n,i){return{x:t,y:e,width:n,height:i}}var NC=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=gu(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=DC(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),UC=function(){function t(e,n){var i=IC(n);h_(this,{target:e,contentRect:i})}return t}(),OC=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new d_,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Bo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new NC(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Bo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new UC(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),m_=typeof WeakMap<"u"?new WeakMap:new d_,g_=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=CC.getInstance(),i=new OC(e,n,this);m_.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){g_.prototype[t]=function(){var e;return(e=m_.get(this))[t].apply(e,arguments)}});var FC=function(){return typeof Gl.ResizeObserver<"u"?Gl.ResizeObserver:g_}();const kC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),zC=C_(kC);Object.defineProperty(du,"__esModule",{value:!0});du.InnerSlider=void 0;var Kt=ta(Tt),BC=ta(Hv),HC=ta(LT),VC=ta(hu),_t=le,GC=pu,WC=mu,Y0=ko,XC=ta(zC);function ta(t){return t&&t.__esModule?t:{default:t}}function Ur(t){"@babel/helpers - typeof";return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ur(t)}function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xl.apply(null,arguments)}function jC(t,e){if(t==null)return{};var n,i,r=$C(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.includes(n)||{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function $C(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Pe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q0(Object(n),!0).forEach(function(i){We(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function YC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qC(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,__(i.key),i)}}function KC(t,e,n){return e&&qC(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ZC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vd(t,e)}function vd(t,e){return vd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},vd(t,e)}function QC(t){var e=v_();return function(){var n,i=jl(t);if(e){var r=jl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return JC(this,n)}}function JC(t,e){if(e&&(Ur(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ge(t)}function Ge(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v_(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v_=function(){return!!t})()}function jl(t){return jl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},jl(t)}function We(t,e,n){return(e=__(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function __(t){var e=e3(t,"string");return Ur(e)=="symbol"?e:e+""}function e3(t,e){if(Ur(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Ur(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}du.InnerSlider=function(t){ZC(n,t);var e=QC(n);function n(i){var r;YC(this,n),r=e.call(this,i),We(Ge(r),"listRefHandler",function(s){return r.list=s}),We(Ge(r),"trackRefHandler",function(s){return r.track=s}),We(Ge(r),"adaptHeight",function(){if(r.props.adaptiveHeight&&r.list){var s=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=(0,_t.getHeight)(s)+"px"}}),We(Ge(r),"componentDidMount",function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var s=(0,_t.getOnDemandLazySlides)(Pe(Pe({},r.props),r.state));s.length>0&&(r.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(s)}}),r.props.onLazyLoad&&r.props.onLazyLoad(s))}var a=Pe({listRef:r.list,trackRef:r.track},r.props);r.updateState(a,!0,function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("update")}),r.props.lazyLoad==="progressive"&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new XC.default(function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout(function(){return r.onWindowResized()},r.props.speed))):r.onWindowResized()}),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,l.onblur=r.props.pauseOnFocus?r.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)}),We(Ge(r),"componentWillUnmount",function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach(function(s){return clearTimeout(s)}),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()}),We(Ge(r),"componentDidUpdate",function(s){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var a=(0,_t.getOnDemandLazySlides)(Pe(Pe({},r.props),r.state));a.length>0&&(r.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a))}r.adaptHeight();var l=Pe(Pe({listRef:r.list,trackRef:r.track},r.props),r.state),u=r.didPropsChange(s);u&&r.updateState(l,u,function(){r.state.currentSlide>=Kt.default.Children.count(r.props.children)&&r.changeSlide({message:"index",index:Kt.default.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),r.props.autoplay?r.autoPlay("update"):r.pause("paused")})}),We(Ge(r),"onWindowResized",function(s){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,HC.default)(function(){return r.resizeWindow(s)},50),r.debouncedResize()}),We(Ge(r),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(r.track&&r.track.node);if(a){var l=Pe(Pe({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(l,s,function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")}),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}}),We(Ge(r),"updateState",function(s,a,l){var u=(0,_t.initializedState)(s);s=Pe(Pe(Pe({},s),u),{},{slideIndex:u.currentSlide});var d=(0,_t.getTrackLeft)(s);s=Pe(Pe({},s),{},{left:d});var f=(0,_t.getTrackCSS)(s);(a||Kt.default.Children.count(r.props.children)!==Kt.default.Children.count(s.children))&&(u.trackStyle=f),r.setState(u,l)}),We(Ge(r),"ssrInit",function(){if(r.props.variableWidth){var s=0,a=0,l=[],u=(0,_t.getPreClones)(Pe(Pe(Pe({},r.props),r.state),{},{slideCount:r.props.children.length})),d=(0,_t.getPostClones)(Pe(Pe(Pe({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach(function(A){l.push(A.props.style.width),s+=A.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],s+=l[l.length-1-f];for(var h=0;h<d;h++)s+=l[h];for(var p=0;p<r.state.currentSlide;p++)a+=l[p];var _={width:s+"px",left:-a+"px"};if(r.props.centerMode){var y="".concat(l[r.state.currentSlide],"px");_.left="calc(".concat(_.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:_}}var m=Kt.default.Children.count(r.props.children),c=Pe(Pe(Pe({},r.props),r.state),{},{slideCount:m}),g=(0,_t.getPreClones)(c)+(0,_t.getPostClones)(c)+m,v=100/r.props.slidesToShow*g,x=100/g,T=-x*((0,_t.getPreClones)(c)+r.state.currentSlide)*v/100;r.props.centerMode&&(T+=(100-x*v/100)/2);var C={width:v+"%",left:T+"%"};return{slideWidth:x+"%",trackStyle:C}}),We(Ge(r),"checkImagesLoad",function(){var s=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],a=s.length,l=0;Array.prototype.forEach.call(s,function(u){var d=function(){return++l&&l>=a&&r.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(h){f(h),u.parentNode.focus()}}u.onload||(r.props.lazyLoad?u.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(u.onload=d,u.onerror=function(){d(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))})}),We(Ge(r),"progressiveLazyLoad",function(){for(var s=[],a=Pe(Pe({},r.props),r.state),l=r.state.currentSlide;l<r.state.slideCount+(0,_t.getPostClones)(a);l++)if(r.state.lazyLoadedList.indexOf(l)<0){s.push(l);break}for(var u=r.state.currentSlide-1;u>=-(0,_t.getPreClones)(a);u--)if(r.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}s.length>0?(r.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),r.props.onLazyLoad&&r.props.onLazyLoad(s)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)}),We(Ge(r),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=r.props,u=l.asNavFor,d=l.beforeChange,f=l.onLazyLoad,h=l.speed,p=l.afterChange,_=r.state.currentSlide,y=(0,_t.slideHandler)(Pe(Pe(Pe({index:s},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!a})),m=y.state,c=y.nextState;if(m){d&&d(_,m.currentSlide);var g=m.lazyLoadedList.filter(function(v){return r.state.lazyLoadedList.indexOf(v)<0});f&&g.length>0&&f(g),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),p&&p(_),delete r.animationEndCallback),r.setState(m,function(){u&&r.asNavForIndex!==s&&(r.asNavForIndex=s,u.innerSlider.slideHandler(s)),c&&(r.animationEndCallback=setTimeout(function(){var v=c.animating,x=jC(c,["animating"]);r.setState(x,function(){r.callbackTimers.push(setTimeout(function(){return r.setState({animating:v})},10)),p&&p(m.currentSlide),delete r.animationEndCallback})},h))})}}),We(Ge(r),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=Pe(Pe({},r.props),r.state),u=(0,_t.changeSlide)(l,s);if(!(u!==0&&!u)&&(a===!0?r.slideHandler(u,a):r.slideHandler(u),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var d=r.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),We(Ge(r),"clickHandler",function(s){r.clickable===!1&&(s.stopPropagation(),s.preventDefault()),r.clickable=!0}),We(Ge(r),"keyHandler",function(s){var a=(0,_t.keyHandler)(s,r.props.accessibility,r.props.rtl);a!==""&&r.changeSlide({message:a})}),We(Ge(r),"selectHandler",function(s){r.changeSlide(s)}),We(Ge(r),"disableBodyScroll",function(){var s=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=s}),We(Ge(r),"enableBodyScroll",function(){window.ontouchmove=null}),We(Ge(r),"swipeStart",function(s){r.props.verticalSwiping&&r.disableBodyScroll();var a=(0,_t.swipeStart)(s,r.props.swipe,r.props.draggable);a!==""&&r.setState(a)}),We(Ge(r),"swipeMove",function(s){var a=(0,_t.swipeMove)(s,Pe(Pe(Pe({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));a&&(a.swiping&&(r.clickable=!1),r.setState(a))}),We(Ge(r),"swipeEnd",function(s){var a=(0,_t.swipeEnd)(s,Pe(Pe(Pe({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,r.setState(a),l!==void 0&&(r.slideHandler(l),r.props.verticalSwiping&&r.enableBodyScroll())}}),We(Ge(r),"touchEnd",function(s){r.swipeEnd(s),r.clickable=!0}),We(Ge(r),"slickPrev",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"previous"})},0))}),We(Ge(r),"slickNext",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"next"})},0))}),We(Ge(r),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"index",index:s,currentSlide:r.state.currentSlide},a)},0))}),We(Ge(r),"play",function(){var s;if(r.props.rtl)s=r.state.currentSlide-r.props.slidesToScroll;else if((0,_t.canGoNext)(Pe(Pe({},r.props),r.state)))s=r.state.currentSlide+r.props.slidesToScroll;else return!1;r.slideHandler(s)}),We(Ge(r),"autoPlay",function(s){r.autoplayTimer&&clearInterval(r.autoplayTimer);var a=r.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})}),We(Ge(r),"pause",function(s){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var a=r.state.autoplaying;s==="paused"?r.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&r.setState({autoplaying:"focused"}):a==="playing"&&r.setState({autoplaying:"hovered"})}),We(Ge(r),"onDotsOver",function(){return r.props.autoplay&&r.pause("hovered")}),We(Ge(r),"onDotsLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),We(Ge(r),"onTrackOver",function(){return r.props.autoplay&&r.pause("hovered")}),We(Ge(r),"onTrackLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),We(Ge(r),"onSlideFocus",function(){return r.props.autoplay&&r.pause("focused")}),We(Ge(r),"onSlideBlur",function(){return r.props.autoplay&&r.state.autoplaying==="focused"&&r.autoPlay("blur")}),We(Ge(r),"render",function(){var s=(0,VC.default)("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),a=Pe(Pe({},r.props),r.state),l=(0,_t.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=r.props.pauseOnHover;l=Pe(Pe({},l),{},{onMouseEnter:u?r.onTrackOver:null,onMouseLeave:u?r.onTrackLeave:null,onMouseOver:u?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null});var d;if(r.props.dots===!0&&r.state.slideCount>=r.props.slidesToShow){var f=(0,_t.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=r.props.pauseOnDotsHover;f=Pe(Pe({},f),{},{clickHandler:r.changeSlide,onMouseEnter:h?r.onDotsLeave:null,onMouseOver:h?r.onDotsOver:null,onMouseLeave:h?r.onDotsLeave:null}),d=Kt.default.createElement(WC.Dots,f)}var p,_,y=(0,_t.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=r.changeSlide,r.props.arrows&&(p=Kt.default.createElement(Y0.PrevArrow,y),_=Kt.default.createElement(Y0.NextArrow,y));var m=null;r.props.vertical&&(m={height:r.state.listHeight});var c=null;r.props.vertical===!1?r.props.centerMode===!0&&(c={padding:"0px "+r.props.centerPadding}):r.props.centerMode===!0&&(c={padding:r.props.centerPadding+" 0px"});var g=Pe(Pe({},m),c),v=r.props.touchMove,x={className:"slick-list",style:g,onClick:r.clickHandler,onMouseDown:v?r.swipeStart:null,onMouseMove:r.state.dragging&&v?r.swipeMove:null,onMouseUp:v?r.swipeEnd:null,onMouseLeave:r.state.dragging&&v?r.swipeEnd:null,onTouchStart:v?r.swipeStart:null,onTouchMove:r.state.dragging&&v?r.swipeMove:null,onTouchEnd:v?r.touchEnd:null,onTouchCancel:r.state.dragging&&v?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},T={className:s,dir:"ltr",style:r.props.style};return r.props.unslick&&(x={className:"slick-list"},T={className:s,style:r.props.style}),Kt.default.createElement("div",T,r.props.unslick?"":p,Kt.default.createElement("div",Xl({ref:r.listRefHandler},x),Kt.default.createElement(GC.Track,Xl({ref:r.trackRefHandler},l),r.props.children)),r.props.unslick?"":_,r.props.unslick?"":d)}),r.list=null,r.track=null,r.state=Pe(Pe({},BC.default),{},{currentSlide:r.props.initialSlide,targetSlide:r.props.initialSlide?r.props.initialSlide:0,slideCount:Kt.default.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var o=r.ssrInit();return r.state=Pe(Pe({},r.state),o),r}return KC(n,[{key:"didPropsChange",value:function(r){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var l=a[s];if(!r.hasOwnProperty(l)){o=!0;break}if(!(Ur(r[l])==="object"||typeof r[l]=="function"||isNaN(r[l]))&&r[l]!==this.props[l]){o=!0;break}}return o||Kt.default.Children.count(this.props.children)!==Kt.default.Children.count(r.children)}}]),n}(Kt.default.Component);var t3=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},n3=t3,i3=n3,r3=function(t){var e=/[height|width]$/;return e.test(t)},K0=function(t){var e="",n=Object.keys(t);return n.forEach(function(i,r){var o=t[i];i=i3(i),r3(i)&&typeof o=="number"&&(o=o+"px"),o===!0?e+=i:o===!1?e+="not "+i:e+="("+i+": "+o+")",r<n.length-1&&(e+=" and ")}),e},o3=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,i){e+=K0(n),i<t.length-1&&(e+=", ")}),e):K0(t)},s3=o3;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=s(Tt),n=du,i=s(s3),r=s(Th),o=le;function s(R){return R&&R.__esModule?R:{default:R}}function a(R){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},a(R)}function l(){return l=Object.assign?Object.assign.bind():function(R){for(var S=1;S<arguments.length;S++){var M=arguments[S];for(var P in M)({}).hasOwnProperty.call(M,P)&&(R[P]=M[P])}return R},l.apply(null,arguments)}function u(R,S){var M=Object.keys(R);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(R);S&&(P=P.filter(function(N){return Object.getOwnPropertyDescriptor(R,N).enumerable})),M.push.apply(M,P)}return M}function d(R){for(var S=1;S<arguments.length;S++){var M=arguments[S]!=null?arguments[S]:{};S%2?u(Object(M),!0).forEach(function(P){T(R,P,M[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(M)):u(Object(M)).forEach(function(P){Object.defineProperty(R,P,Object.getOwnPropertyDescriptor(M,P))})}return R}function f(R,S){if(!(R instanceof S))throw new TypeError("Cannot call a class as a function")}function h(R,S){for(var M=0;M<S.length;M++){var P=S[M];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(R,C(P.key),P)}}function p(R,S,M){return S&&h(R.prototype,S),Object.defineProperty(R,"prototype",{writable:!1}),R}function _(R,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(S&&S.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),S&&y(R,S)}function y(R,S){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(M,P){return M.__proto__=P,M},y(R,S)}function m(R){var S=v();return function(){var M,P=x(R);if(S){var N=x(this).constructor;M=Reflect.construct(P,arguments,N)}else M=P.apply(this,arguments);return c(this,M)}}function c(R,S){if(S&&(a(S)=="object"||typeof S=="function"))return S;if(S!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(R)}function g(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function v(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v=function(){return!!R})()}function x(R){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},x(R)}function T(R,S,M){return(S=C(S))in R?Object.defineProperty(R,S,{value:M,enumerable:!0,configurable:!0,writable:!0}):R[S]=M,R}function C(R){var S=A(R,"string");return a(S)=="symbol"?S:S+""}function A(R,S){if(a(R)!="object"||!R)return R;var M=R[Symbol.toPrimitive];if(M!==void 0){var P=M.call(R,S||"default");if(a(P)!="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return(S==="string"?String:Number)(R)}t.default=function(R){_(M,R);var S=m(M);function M(P){var N;return f(this,M),N=S.call(this,P),T(g(N),"innerSliderRefHandler",function(U){return N.innerSlider=U}),T(g(N),"slickPrev",function(){return N.innerSlider.slickPrev()}),T(g(N),"slickNext",function(){return N.innerSlider.slickNext()}),T(g(N),"slickGoTo",function(U){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return N.innerSlider.slickGoTo(U,Y)}),T(g(N),"slickPause",function(){return N.innerSlider.pause("paused")}),T(g(N),"slickPlay",function(){return N.innerSlider.autoPlay("play")}),N.state={breakpoint:null},N._responsiveMediaHandlers=[],N}return p(M,[{key:"media",value:function(N,U){var Y=window.matchMedia(N),V=function(K){var D=K.matches;D&&U()};Y.addListener(V),this._responsiveMediaHandlers.push({mql:Y,query:N,listener:V})}},{key:"componentDidMount",value:function(){var N=this;if(this.props.responsive){var U=this.props.responsive.map(function(V){return V.breakpoint});U.sort(function(V,G){return V-G}),U.forEach(function(V,G){var K;G===0?K=(0,i.default)({minWidth:0,maxWidth:V}):K=(0,i.default)({minWidth:U[G-1]+1,maxWidth:V}),(0,o.canUseDOM)()&&N.media(K,function(){N.setState({breakpoint:V})})});var Y=(0,i.default)({minWidth:U.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(Y,function(){N.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(N){N.mql.removeListener(N.listener)})}},{key:"render",value:function(){var N=this,U,Y;this.state.breakpoint?(Y=this.props.responsive.filter(function(Ve){return Ve.breakpoint===N.state.breakpoint}),U=Y[0].settings==="unslick"?"unslick":d(d(d({},r.default),this.props),Y[0].settings)):U=d(d({},r.default),this.props),U.centerMode&&(U.slidesToScroll>1,U.slidesToScroll=1),U.fade&&(U.slidesToShow>1,U.slidesToScroll>1,U.slidesToShow=1,U.slidesToScroll=1);var V=e.default.Children.toArray(this.props.children);V=V.filter(function(Ve){return typeof Ve=="string"?!!Ve.trim():!!Ve}),U.variableWidth&&(U.rows>1||U.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),U.variableWidth=!1);for(var G=[],K=null,D=0;D<V.length;D+=U.rows*U.slidesPerRow){for(var X=[],q=D;q<D+U.rows*U.slidesPerRow;q+=U.slidesPerRow){for(var se=[],me=q;me<q+U.slidesPerRow&&(U.variableWidth&&V[me].props.style&&(K=V[me].props.style.width),!(me>=V.length));me+=1)se.push(e.default.cloneElement(V[me],{key:100*D+10*q+me,tabIndex:-1,style:{width:"".concat(100/U.slidesPerRow,"%"),display:"inline-block"}}));X.push(e.default.createElement("div",{key:10*D+q},se))}U.variableWidth?G.push(e.default.createElement("div",{key:D,style:{width:K}},X)):G.push(e.default.createElement("div",{key:D},X))}if(U==="unslick"){var Ke="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:Ke},V)}else G.length<=U.slidesToShow&&(U.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(U)),G)}}]),M}(e.default.Component)})(Bv);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(Bv);function n(i){return i&&i.__esModule?i:{default:i}}t.default=e.default})(zv);const a3=T_(zv),l3="/assets/card-1-MS43sXYL.jpg",u3="/assets/card-2-D2WUfMYl.png",c3="/assets/card-3-AnD4b__v.png",f3="data:image/svg+xml,%3csvg%20width='161'%20height='160'%20viewBox='0%200%20161%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M80.5%2020.6401C47.7%2020.6401%2021.14%2047.2001%2021.14%2080.0001C21.14%20112.8%2047.7%20139.36%2080.5%20139.36C113.3%20139.36%20139.86%20112.8%20139.86%2080.0001C139.86%2047.2001%20113.3%2020.6401%2080.5%2020.6401ZM136.02%2080.0001C136.02%20110.72%20111.22%20135.52%2080.5%20135.52C49.78%20135.52%2024.98%20110.72%2024.98%2080.0001C24.98%2049.2801%2049.78%2024.4801%2080.5%2024.4801C111.22%2024.4801%20136.02%2049.2801%20136.02%2080.0001Z'%20fill='%236F6F6F'/%3e%3cpath%20d='M80.5%2044.8003V46.7203C98.9%2046.7203%20113.78%2061.6003%20113.78%2080.0003H115.7C115.7%2060.4803%2099.86%2044.8003%2080.5%2044.8003ZM80.5%20113.28C62.1%20113.28%2047.22%2098.4003%2047.22%2080.0003H45.3C45.3%2099.5203%2061.14%20115.2%2080.5%20115.2'%20fill='%236F6F6F'/%3e%3cpath%20d='M108.98%2054.8801C109.78%2055.6801%20110.9%2057.1201%20111.54%2057.9201L123.54%2050.4001C122.9%2049.6001%20121.94%2048.4801%20121.3%2047.5201L113.62%2052.4801L113.14%2052.9601L113.46%2052.3201L116.82%2045.6001L114.42%2043.2001L107.7%2046.5601L107.06%2046.8801L107.54%2046.4001L112.5%2038.8801C111.54%2038.0801%20110.74%2037.4401%20109.62%2036.6401L101.94%2048.6401C102.9%2049.4401%20104.18%2050.4001%20104.98%2051.2001L112.18%2047.5201L112.66%2047.2001L112.34%2047.6801L108.66%2054.8801H108.98Z'%20fill='%236F6F6F'/%3e%3cpath%20d='M81.62%2039.84L84.98%2032.48V31.84C85.14%2031.84%2084.98%2032.48%2084.98%2032.48L85.3%2042.24C86.42%2042.24%2087.7%2042.56%2088.82%2042.72L88.34%2028.32C86.74%2028.16%2085.14%2028%2083.38%2028L80.18%2036V36.64L80.02%2036L76.82%2028C75.22%2028%2073.62%2028.16%2071.86%2028.32L71.38%2042.72C72.5%2042.56%2073.78%2042.4%2074.9%2042.24L75.22%2032.48L78.58%2039.84H81.62Z'%20fill='%236F6F6F'/%3e%3cpath%20d='M55.06%2051.3602C56.98%2049.4402%2058.1%2047.0402%2056.18%2044.9602C55.22%2043.8402%2053.46%2043.5202%2052.02%2044.1602C52.18%2043.5202%2052.34%2041.7602%2050.9%2040.4802C50.1%2039.8402%2049.14%2039.6802%2048.18%2039.6802C46.42%2039.8402%2044.98%2041.1202%2041.3%2045.2802C40.18%2046.5602%2038.58%2048.4802%2037.62%2049.7602L47.86%2059.3602C51.22%2055.6802%2052.66%2054.2402%2055.38%2051.3602H55.06ZM41.78%2048.9602C43.86%2046.4002%2046.1%2044.1602%2047.06%2043.2002C47.38%2042.8802%2047.7%2042.5602%2048.18%2042.5602C48.82%2042.4002%2049.62%2042.8802%2049.78%2043.5202C49.78%2044.1602%2049.46%2044.8002%2048.98%2045.4402C47.86%2046.7202%2043.86%2050.8802%2043.86%2050.8802L41.94%2048.9602H41.78ZM45.78%2052.8002C45.78%2052.8002%2049.62%2048.6402%2050.9%2047.3602C51.38%2046.8802%2051.7%2046.5602%2052.02%2046.4002C52.5%2046.2402%2052.98%2046.0802%2053.46%2046.4002C53.94%2046.7202%2054.1%2047.2002%2053.94%2047.6802C53.94%2048.3202%2053.3%2048.8002%2052.98%2049.2802C52.5%2049.9202%2047.86%2054.7202%2047.86%2054.7202L45.78%2052.8002Z'%20fill='%236F6F6F'/%3e%3cpath%20d='M80.5%2044.8003V80.0003H45.3C45.3%2060.4803%2060.98%2044.8003%2080.5%2044.8003Z'%20fill='%238B8B8B'/%3e%3cpath%20d='M115.7%2080C115.7%2099.52%20100.02%20115.2%2080.5%20115.2V80H115.7Z'%20fill='%238B8B8B'/%3e%3c/svg%3e",d3="data:image/svg+xml,%3csvg%20width='161'%20height='160'%20viewBox='0%200%20161%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M136.82%2016.6401H118.42V32.0001H136.82V16.6401Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M122.74%2016.8001C120.34%2018.2401%20117.78%2021.1201%20119.7%2024.1601C122.58%2028.8001%20128.66%2022.8801%20129.94%2024.9601C130.42%2025.7601%20129.94%2026.5601%20129.14%2026.8801C128.66%2027.2001%20128.18%2027.2001%20127.86%2027.2001C127.38%2027.2001%20127.06%2026.8801%20127.06%2026.8801L122.74%2029.6001C124.66%2032.3201%20128.02%2031.3601%20130.74%2029.6001C134.9%2027.0401%20135.86%2024.0001%20134.26%2021.4401C131.38%2016.9601%20124.82%2022.5601%20123.86%2020.8001C123.54%2020.1601%20123.86%2019.6801%20124.66%2019.2001C124.98%2019.0401%20125.46%2018.8801%20125.78%2018.8801C126.1%2018.8801%20126.42%2019.2001%20126.42%2019.2001L130.58%2016.6401H143.86V62.7201H85.62C76.18%2062.7201%2068.5%2070.5601%2068.5%2080.0001C68.5%2089.4401%2076.18%2097.1201%2085.62%2097.1201H143.86V143.2H80.66C45.62%20143.2%2017.3%20115.04%2017.3%2080.0001C17.3%2044.9601%2045.6201%2016.6401%2080.5%2016.6401H122.58L122.74%2016.8001Z'%20fill='%238B8B8B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M56.6601%2074.8801L52.3401%2077.4401L51.2201%2076.6401C50.9001%2078.4001%2050.2601%2079.2001%2048.3401%2080.4801C45.7801%2082.0801%2043.2201%2081.4401%2040.9801%2077.9201L36.3401%2070.5601L40.9801%2067.6801L44.9801%2074.2401C45.9401%2075.8401%2046.9001%2076.1601%2048.0201%2075.3601C49.3001%2074.5601%2049.1401%2073.2801%2048.0201%2071.3601L44.3401%2065.4401L48.9801%2062.5601L56.5001%2074.7201L56.6601%2074.8801Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.22%2061.4402L55.38%2058.8802L56.5%2059.6802C56.5%2058.4002%2057.46%2057.1202%2058.9%2056.1602C60.98%2054.8802%2062.74%2055.0402%2064.02%2056.1602C64.02%2054.0802%2064.98%2052.4802%2066.58%2051.5202C69.94%2049.4402%2072.18%2050.7202%2074.26%2054.0802L78.74%2061.2802L74.1%2064.1602L70.26%2057.9202C69.14%2056.1602%2068.34%2055.6802%2067.22%2056.3202C65.94%2057.1202%2066.42%2058.5602%2067.22%2060.0002L70.9%2066.0802L66.26%2068.9602L62.42%2062.7202C61.3%2060.9602%2060.5%2060.4802%2059.38%2061.1202C58.1%2061.9202%2058.58%2063.3602%2059.38%2064.8002L63.06%2070.8802L58.42%2073.7602L50.9%2061.6002L51.22%2061.4402Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M103.22%2046.08L95.7001%2033.92L100.34%2031.04L107.86%2043.2L103.22%2046.08Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M92.66%2028.9601L97.14%2026.0801L99.38%2029.6001L94.74%2032.3201L92.66%2028.9601Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M102.74%2029.6004L106.9%2027.0404L108.18%2028.0004C108.18%2026.7204%20108.82%2025.4404%20110.58%2024.3204C113.62%2022.4004%20116.18%2023.3604%20118.26%2026.7204L122.74%2034.0804L118.1%2036.9604L114.1%2030.5604C113.3%2029.2804%20112.34%2028.4804%20111.06%2029.2804C109.62%2030.0804%20109.94%2031.3604%20110.9%2032.9604L114.74%2039.2004L110.1%2042.0804L102.58%2029.9204L102.74%2029.6004Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.3001%2047.8401L77.4601%2045.2801L78.5801%2046.0801C78.5801%2044.8001%2079.5401%2043.5201%2080.9801%2042.5601C83.0601%2041.2801%2084.8201%2041.4401%2086.1001%2042.5601C86.1001%2040.4801%2087.0601%2038.8801%2088.6601%2037.9201C92.0201%2035.8401%2094.2601%2037.1201%2096.3401%2040.4801L100.82%2047.6801L96.1801%2050.5601L92.3401%2044.3201C91.2201%2042.5601%2090.4201%2042.0801%2089.3001%2042.7201C88.0201%2043.5201%2088.5001%2044.9601%2089.3001%2046.4001L92.9801%2052.4801L88.3401%2055.3601L84.5001%2049.1201C83.3801%2047.3601%2082.5801%2046.8801%2081.4601%2047.5201C80.1801%2048.3201%2080.6601%2049.7601%2081.4601%2051.2001L85.1401%2057.2801L80.5001%2060.1601L72.9801%2048.0001L73.3001%2047.8401Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.3401%2087.5199C31.3801%2090.5599%2024.9801%2089.1199%2021.7801%2084.1599C18.7401%2079.1999%2020.1801%2072.7999%2025.1401%2069.5999L31.0601%2065.9199L33.9401%2070.5599L28.8201%2073.7599C26.4201%2075.1999%2025.7801%2078.3999%2027.2201%2080.6399C28.6601%2083.0399%2031.8601%2083.6799%2034.1001%2082.2399L39.2201%2079.0399L42.1001%2083.6799L36.1801%2087.3599L36.3401%2087.5199Z'%20fill='white'/%3e%3c/svg%3e",h3="data:image/svg+xml,%3csvg%20width='161'%20height='160'%20viewBox='0%200%20161%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.26%2080C26.26%2065.76%2026.26%2051.52%2026.26%2037.28C26.26%2031.36%2028.5%2026.56%2032.98%2023.2C35.38%2021.44%2038.1%2020.48%2040.98%2020.48C67.22%2020.48%2093.62%2020.48%20119.86%2020.48C126.9%2020.48%20133.3%2026.56%20134.42%2034.4C134.42%2035.36%20134.58%2036.32%20134.58%2037.44C134.58%2065.92%20134.58%2094.4%20134.58%20122.88C134.58%20130.08%20131.38%20135.2%20125.62%20138.24C123.86%20139.2%20121.94%20139.52%20119.86%20139.68C119.38%20139.68%20119.06%20139.68%20118.58%20139.68H41.62C36.5%20139.68%2032.34%20137.44%2029.3%20132.96C27.22%20130.08%2026.42%20126.72%2026.42%20123.04C26.42%20108.8%2026.42%2094.56%2026.42%2080.32L26.26%2080ZM80.5%2028.16H41.62C40.02%2028.16%2038.42%2028.48%2036.98%2029.6C34.42%2031.52%2033.14%2034.08%2033.14%2037.44V123.2C33.14%20124.8%2033.62%20126.24%2034.26%20127.52C35.86%20130.4%2038.26%20131.84%2041.46%20131.84C67.22%20131.84%2092.98%20131.84%20118.74%20131.84C119.06%20131.84%20119.54%20131.84%20119.86%20131.84C121.78%20131.84%20123.38%20131.04%20124.82%20129.76C126.9%20127.84%20127.7%20125.28%20127.7%20122.4C127.7%2094.24%20127.7%2066.24%20127.7%2038.08C127.7%2037.6%20127.7%2036.96%20127.7%2036.48C127.7%2034.56%20126.9%2032.64%20125.62%2031.2C123.86%2029.12%20121.78%2028.16%20119.22%2028.16C106.26%2028.16%2093.3%2028.16%2080.34%2028.16H80.5Z'%20fill='%238B8B8B'/%3e%3cpath%20d='M106.74%2092.6399V62.7199C106.74%2061.4399%20106.42%2060.3199%20105.46%2059.5199C105.14%2059.1999%20104.66%2059.0399%20104.34%2059.0399C102.58%2059.0399%20100.98%2059.0399%2099.2201%2059.0399V92.6399H91.3801V59.0399H83.7001V92.6399H75.8601V51.3599H106.1C110.9%2051.3599%20114.74%2055.5199%20114.74%2060.7999C114.74%2071.1999%20114.74%2081.5999%20114.74%2091.9999C114.74%20102.4%20114.74%2092.6399%20114.1%2092.6399C111.86%2092.6399%20109.62%2092.6399%20107.38%2092.6399H106.74Z'%20fill='%238B8B8B'/%3e%3cpath%20d='M51.0599%20101.12C52.0199%20101.12%2052.9799%20101.12%2054.0999%20101.12C55.2199%20101.12%2056.3399%20101.12%2057.4599%20100.64C60.3399%2099.84%2061.7799%2097.92%2061.9399%2094.56C61.9399%2093.92%2061.9399%2093.28%2061.9399%2092.64H61.2999C59.2199%2092.64%2056.9799%2092.64%2054.8999%2092.64C50.2599%2092.64%2046.5799%2088.64%2046.4199%2083.52C46.4199%2075.84%2046.4199%2068.32%2046.4199%2060.64C46.4199%2055.52%2050.2599%2051.52%2054.8999%2051.52C59.6999%2051.52%2064.3399%2051.52%2069.1399%2051.52C69.6199%2051.52%2069.7799%2051.52%2069.7799%2052.16C69.7799%2064.16%2069.7799%2076.16%2069.7799%2088C69.7799%2090.56%2069.7799%2092.96%2069.7799%2095.52C69.4599%20101.6%2066.5799%20105.92%2061.1399%20107.84C59.0599%20108.64%2056.8199%20108.8%2054.5799%20108.8H51.3799C51.0599%20108.8%2050.8999%20108.8%2050.8999%20108.48C50.8999%20106.08%2050.8999%20103.84%2050.8999%20101.44C50.8999%20101.44%2050.8999%20101.44%2050.8999%20101.28L51.0599%20101.12ZM61.7799%2058.88C61.6199%2058.88%2061.4599%2058.88%2061.2999%2058.88H57.4599C55.5399%2058.88%2054.2599%2060.16%2054.2599%2062.4V71.2C54.2599%2074.72%2054.2599%2078.24%2054.2599%2081.6C54.2599%2083.36%2055.5399%2084.8%2057.1399%2084.96C58.5799%2084.96%2060.0199%2084.96%2061.6199%2084.96C61.6199%2084.96%2061.7799%2084.96%2061.9399%2084.96V58.88H61.7799Z'%20fill='%238B8B8B'/%3e%3cpath%20d='M75.8599%20108.64V101.12H114.58C114.58%20101.28%20114.58%20101.44%20114.58%20101.6C114.58%20103.84%20114.58%20105.92%20114.58%20108.16C114.58%20108.64%20114.58%20108.8%20114.1%20108.8C101.46%20108.8%2088.82%20108.8%2076.1799%20108.8C76.1799%20108.8%2075.86%20108.8%2075.7%20108.8L75.8599%20108.64Z'%20fill='%238B8B8B'/%3e%3c/svg%3e",p3="data:image/svg+xml,%3csvg%20width='161'%20height='160'%20viewBox='0%200%20161%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4405_2338)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M133.14%2080.3198H139.7L136.34%2075.1998L133.14%2080.3198ZM122.42%2088.3198V86.0798H124.66C125.46%2085.7598%20125.78%2084.9598%20125.78%2084.9598L131.38%2075.8398C131.86%2075.1998%20131.38%2074.5598%20130.74%2074.3998L127.86%2074.0798V71.8398H140.66C141.46%2071.8398%20141.78%2072.3198%20142.1%2072.7998L149.62%2084.1598C150.26%2085.1198%20150.74%2085.7598%20151.38%2085.9198H153.78V88.4798H139.38V86.2398H141.14C142.1%2085.9198%20142.74%2085.4398%20142.1%2084.4798L141.46%2083.3598H131.22L130.42%2084.6398C129.94%2085.4398%20130.42%2085.9198%20131.22%2085.9198H133.14V88.3198H122.42Z'%20fill='%238B8B8B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.42%2085.1202H106.1V74.8802H110.42C114.58%2074.8802%20116.18%2075.8402%20116.18%2080.0002C116.18%2084.1602%20114.58%2085.1202%20110.42%2085.1202ZM112.98%2071.6802H96.5V73.9202H98.58C99.38%2074.2402%2099.7%2074.7202%2099.7%2075.5202V84.4802C99.7%2085.1202%2099.38%2085.7602%2098.74%2085.7602L96.5%2086.0802V88.3202H112.98C120.66%2088.3202%20123.86%2084.6402%20123.86%2079.6802C123.86%2074.7202%20120.5%2071.6802%20112.98%2071.6802Z'%20fill='%238B8B8B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.06006%2088.3202H20.5001V86.0802H18.2601C17.7801%2085.7602%2017.1401%2085.4402%2017.1401%2084.3202V81.6002H27.3801V84.1602C27.3801%2084.9602%2027.3801%2085.6002%2026.2601%2085.7602H24.0201V88.3202H37.4601V86.0802H35.0601C34.5801%2085.7602%2034.1001%2085.4402%2034.1001%2084.4802V75.8402C34.1001%2074.8802%2034.4201%2074.4002%2035.2201%2074.2402H37.4601V71.6802H24.0201V73.9202L26.2601%2074.2402C27.0601%2074.2402%2027.3801%2075.0402%2027.3801%2075.8402V78.4002H17.1401V75.8402C17.1401%2074.8802%2017.6201%2074.4002%2018.2601%2074.4002H20.5001V71.8402H7.06006V74.0802H9.30006C10.1001%2074.4002%2010.4201%2075.0402%2010.4201%2075.8402V84.3202C10.4201%2085.2802%2010.2601%2085.9202%209.30006%2085.9202H7.06006V88.3202Z'%20fill='%238B8B8B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.5399%2074.24C47.6999%2074.24%2045.6199%2075.68%2045.6199%2080C45.6199%2084.32%2047.8599%2085.76%2051.5399%2085.76C55.2199%2085.76%2057.4599%2084.32%2057.4599%2080C57.4599%2075.68%2055.2199%2074.24%2051.5399%2074.24ZM37.9399%2080C37.9399%2074.72%2042.2599%2071.04%2051.5399%2071.04C60.8199%2071.04%2065.1399%2074.72%2065.1399%2080C65.1399%2085.28%2060.8199%2088.96%2051.5399%2088.96C42.2599%2088.96%2037.9399%2085.28%2037.9399%2080Z'%20fill='%238B8B8B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.9401%2088.3202H76.5001V86.0802H74.2601C73.6201%2085.7602%2073.1401%2085.2802%2073.1401%2084.4802V76.0002L81.9401%2087.6802C82.2601%2088.1602%2082.9001%2088.3202%2083.3801%2088.3202H91.7001V75.6802C91.7001%2075.0402%2091.7001%2074.2402%2092.6601%2074.2402H94.9001V71.6802H84.3401V73.9202L86.5801%2074.2402C87.3801%2074.2402%2087.5401%2075.0402%2087.5401%2075.8402V84.0002L78.7401%2072.4802C78.4201%2072.0002%2077.9401%2071.6802%2077.3001%2071.6802H65.6201V73.9202H67.8601C68.6601%2074.2402%2068.9801%2074.7202%2068.9801%2075.6802V84.1602C68.9801%2085.2802%2068.6601%2085.6002%2067.8601%2085.7602H65.6201V88.1602L65.9401%2088.3202Z'%20fill='%238B8B8B'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4405_2338'%3e%3crect%20width='160'%20height='160'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",m3="data:image/svg+xml,%3csvg%20width='160'%20height='160'%20viewBox='0%200%20160%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1404_5517)'%3e%3cpath%20d='M147.072%2071C144.879%2071%20142.849%2071.7474%20141.429%2073.1436C140.065%2074.4775%20139.221%2076.32%20139.221%2078.8425V88.6212H142.126V79.2214C142.126%2077.3113%20142.682%2075.9983%20143.531%2075.1471C144.439%2074.2336%20145.698%2073.8287%20147.03%2073.8287C148.934%2073.8287%20150.455%2074.7008%20151.646%2076.2527L154%2074.6748C152.474%2072.3184%20149.857%2071%20147.072%2071Z'%20fill='%234C4A4D'/%3e%3cpath%20d='M119.987%2071C114.969%2071%20110.874%2075.0508%20110.874%2080.0466C110.874%2085.0425%20114.869%2088.9947%20119.892%2088.9947C122.462%2088.9947%20124.964%2087.6765%20126.176%2086.0052V88.6212H129.082V80.0207C129.082%2077.3373%20128.101%2075.2146%20126.532%2073.6627C124.843%2071.9914%20122.462%2071%20119.987%2071ZM120.034%2073.8287C123.438%2073.8287%20126.202%2076.4653%20126.202%2079.9999C126.202%2083.5345%20123.438%2086.1713%20120.034%2086.1713C116.63%2086.1713%20113.845%2083.5345%20113.845%2079.9999C113.845%2076.4653%20116.63%2073.8287%20120.034%2073.8287Z'%20fill='%234C4A4D'/%3e%3cpath%20d='M85.6846%2071.3789V81.2198C85.6846%2083.3634%2086.4713%2085.2008%2087.7563%2086.5451C89.2354%2088.097%2091.3753%2089.0001%2093.7094%2089.0001C96.0434%2089.0001%2098.1837%2088.1021%2099.6625%2086.5502C100.948%2085.2007%20101.734%2083.3685%20101.734%2081.2249V71.3789H98.8285V80.846C98.8285%2082.59%2098.2728%2083.7838%2097.4227%2084.661C96.4419%2085.673%2095.0678%2086.1713%2093.7094%2086.1713C92.3509%2086.1713%2090.9767%2085.6679%2089.9959%2084.661C89.141%2083.789%2088.5903%2082.59%2088.5903%2080.846V71.3789H85.6846Z'%20fill='%234C4A4D'/%3e%3cpath%20d='M58.2852%2080C58.2852%2075.0069%2062.2607%2071%2067.4271%2071C70.7838%2071%2073.4272%2072.365%2075.0427%2074.7007L72.6406%2076.2785C71.4237%2074.6747%2069.6195%2073.8287%2067.4271%2073.8287C64.0965%2073.8287%2061.259%2076.1592%2061.259%2080C61.259%2083.5554%2063.829%2086.1713%2067.4743%2086.1713C70.5426%2086.1713%2072.9028%2084.3079%2073.4955%2081.5779H69.567V78.8218H76.4483C76.4955%2079.1747%2076.5427%2079.5744%2076.5427%2080C76.5427%2084.9204%2072.5671%2089%2067.4271%2089C62.287%2089%2058.2852%2085.019%2058.2852%2080Z'%20fill='%234C4A4D'/%3e%3cpath%20d='M40.0426%2071C35.0232%2071%2030.9268%2075.0536%2030.9268%2080.0467C30.9267%2085.0398%2034.9235%2088.9947%2039.9482%2088.9947C42.5182%2088.9947%2045.0147%2087.6765%2046.2315%2086.0052V88.6212H49.1373V80.0207C49.1373%2077.3373%2048.1617%2075.2146%2046.5882%2073.6627C44.8993%2071.9914%2042.5182%2071%2040.0426%2071ZM40.1001%2073.8287C43.5041%2073.8287%2046.2682%2076.4653%2046.2682%2079.9999C46.2682%2083.5345%2043.5041%2086.1713%2040.1001%2086.1713C36.6962%2086.1713%2033.9112%2083.5345%2033.9112%2079.9999C33.9112%2076.4653%2036.6962%2073.8287%2040.1001%2073.8287Z'%20fill='%234C4A4D'/%3e%3cpath%20d='M18.8798%2071.3789V80.7734C18.8798%2082.6834%2018.3238%2083.9966%2017.4741%2084.8479C16.5667%2085.7614%2015.3081%2086.166%2013.9759%2086.166C12.0719%2086.166%2010.5508%2085.2994%209.3602%2083.7423L7%2085.3202C8.52628%2087.6765%2011.1436%2088.9948%2013.9286%2088.9948C16.121%2088.9948%2018.1507%2088.2475%2019.5721%2086.8513C20.9358%2085.5173%2021.7855%2083.6747%2021.7855%2081.1523V71.3789H18.8798Z'%20fill='%234C4A4D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1404_5517'%3e%3crect%20width='147'%20height='18'%20fill='white'%20transform='translate(7%2071)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",g3="data:image/svg+xml,%3csvg%20width='160'%20height='160'%20viewBox='0%200%20160%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M80.36%2021C113.122%2021%20139.72%2047.5982%20139.72%2080.36C139.72%20113.122%20113.122%20139.72%2080.36%20139.72C47.5982%20139.72%2021%20113.122%2021%2080.36C21%2047.5982%2047.5982%2021%2080.36%2021ZM37.0519%20107.76C41.6725%20115.066%2048.0667%20121.083%2055.639%20125.253C63.2113%20129.423%2071.7155%20131.609%2080.36%20131.607C98.5687%20131.607%20114.576%20122.09%20123.668%20107.76L80.36%2091.2575L37.0519%20107.76ZM89.7982%2074.9088L125.746%20104.168C129.607%2096.8273%20131.62%2088.6548%20131.607%2080.36C131.607%2052.7724%20109.758%2030.2453%2082.4376%2029.1521L89.7982%2074.9088ZM78.2824%2029.1521C50.962%2030.2453%2029.1125%2052.7724%2029.1125%2080.36C29.1125%2088.9524%2031.2297%2097.0501%2034.9743%20104.168L70.9218%2074.9088L78.2824%2029.1521Z'%20fill='%238B8B8B'/%3e%3c/svg%3e",v3=()=>{const t=[{img:l3,title:"KPIT’s New Technology Center in Sweden unlocks Mobility Innovation",link:"#"},{img:u3,title:"KPIT collaborates with Mercedes-Benz Research and Development India",link:"#"},{img:c3,title:"Chairman’s message",link:"#"}],e=[f3,d3,h3,p3,m3,g3],n={dots:!1,infinite:!0,autoplay:!0,speed:2e3,autoplaySpeed:2e3,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:640,settings:{slidesToShow:2}}]};return Ce.jsxs("div",{className:"w-full flex flex-col items-center bg-white py-10",children:[Ce.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mb-10",children:t.map((i,r)=>Ce.jsxs("div",{className:"bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-all",children:[Ce.jsx("img",{src:i.img,alt:"card",className:"w-full h-48 object-cover"}),Ce.jsxs("div",{className:"p-4",children:[Ce.jsx("h3",{className:"font-semibold text-gray-800",children:i.title}),Ce.jsx("a",{href:i.link,className:"text-purple-600 font-medium mt-2 inline-block hover:underline",children:"Read More →"})]})]},r))}),Ce.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6",children:["Trusted By Mobility ",Ce.jsx("br",{})," Leaders Worldwide"]}),Ce.jsx("div",{className:"w-full max-w-6xl px-4",children:Ce.jsx(a3,{...n,children:e.map((i,r)=>Ce.jsx("div",{className:"flex items-center justify-center px-4 py-6",children:Ce.jsx("div",{className:"bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-24 w-40",children:Ce.jsx("img",{src:i,alt:"logo",className:"max-h-12 object-contain grayscale hover:grayscale-0 transition"})})},r))})})]})};function _3(){return Ce.jsxs("div",{className:"min-h-screen bg-white",children:[Ce.jsx(ry,{}),Ce.jsx(hT,{}),Ce.jsx(v3,{})]})}uv(document.getElementById("root")).render(Ce.jsx(Tt.StrictMode,{children:Ce.jsx(_3,{})}));
