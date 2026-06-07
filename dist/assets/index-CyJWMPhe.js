(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function bm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _u={exports:{}},Da={},vu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function H0(){if(Ep)return ht;Ep=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(L,te,Ae){this.props=L,this.context=te,this.refs=C,this.updater=Ae||M}S.prototype.isReactComponent={},S.prototype.setState=function(L,te){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,te,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=S.prototype;function D(L,te,Ae){this.props=L,this.context=te,this.refs=C,this.updater=Ae||M}var I=D.prototype=new v;I.constructor=D,T(I,S.prototype),I.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function Q(L,te,Ae){var He,Ge={},ne=null,de=null;if(te!=null)for(He in te.ref!==void 0&&(de=te.ref),te.key!==void 0&&(ne=""+te.key),te)U.call(te,He)&&!F.hasOwnProperty(He)&&(Ge[He]=te[He]);var ye=arguments.length-2;if(ye===1)Ge.children=Ae;else if(1<ye){for(var ke=Array(ye),Ie=0;Ie<ye;Ie++)ke[Ie]=arguments[Ie+2];Ge.children=ke}if(L&&L.defaultProps)for(He in ye=L.defaultProps,ye)Ge[He]===void 0&&(Ge[He]=ye[He]);return{$$typeof:s,type:L,key:ne,ref:de,props:Ge,_owner:O.current}}function A(L,te){return{$$typeof:s,type:L.type,key:te,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function V(L){var te={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ae){return te[Ae]})}var q=/\/+/g;function $(L,te){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):te.toString(36)}function le(L,te,Ae,He,Ge){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var de=!1;if(L===null)de=!0;else switch(ne){case"string":case"number":de=!0;break;case"object":switch(L.$$typeof){case s:case e:de=!0}}if(de)return de=L,Ge=Ge(de),L=He===""?"."+$(de,0):He,P(Ge)?(Ae="",L!=null&&(Ae=L.replace(q,"$&/")+"/"),le(Ge,te,Ae,"",function(Ie){return Ie})):Ge!=null&&(R(Ge)&&(Ge=A(Ge,Ae+(!Ge.key||de&&de.key===Ge.key?"":(""+Ge.key).replace(q,"$&/")+"/")+L)),te.push(Ge)),1;if(de=0,He=He===""?".":He+":",P(L))for(var ye=0;ye<L.length;ye++){ne=L[ye];var ke=He+$(ne,ye);de+=le(ne,te,Ae,ke,Ge)}else if(ke=x(L),typeof ke=="function")for(L=ke.call(L),ye=0;!(ne=L.next()).done;)ne=ne.value,ke=He+$(ne,ye++),de+=le(ne,te,Ae,ke,Ge);else if(ne==="object")throw te=String(L),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return de}function ce(L,te,Ae){if(L==null)return L;var He=[],Ge=0;return le(L,He,"","",function(ne){return te.call(Ae,ne,Ge++)}),He}function oe(L){if(L._status===-1){var te=L._result;te=te(),te.then(function(Ae){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ae)},function(Ae){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ae)}),L._status===-1&&(L._status=0,L._result=te)}if(L._status===1)return L._result.default;throw L._result}var Y={current:null},j={transition:null},fe={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:j,ReactCurrentOwner:O};function K(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ce,forEach:function(L,te,Ae){ce(L,function(){te.apply(this,arguments)},Ae)},count:function(L){var te=0;return ce(L,function(){te++}),te},toArray:function(L){return ce(L,function(te){return te})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ht.Component=S,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ht.act=K,ht.cloneElement=function(L,te,Ae){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var He=T({},L.props),Ge=L.key,ne=L.ref,de=L._owner;if(te!=null){if(te.ref!==void 0&&(ne=te.ref,de=O.current),te.key!==void 0&&(Ge=""+te.key),L.type&&L.type.defaultProps)var ye=L.type.defaultProps;for(ke in te)U.call(te,ke)&&!F.hasOwnProperty(ke)&&(He[ke]=te[ke]===void 0&&ye!==void 0?ye[ke]:te[ke])}var ke=arguments.length-2;if(ke===1)He.children=Ae;else if(1<ke){ye=Array(ke);for(var Ie=0;Ie<ke;Ie++)ye[Ie]=arguments[Ie+2];He.children=ye}return{$$typeof:s,type:L.type,key:Ge,ref:ne,props:He,_owner:de}},ht.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:c,_context:L},L.Consumer=L},ht.createElement=Q,ht.createFactory=function(L){var te=Q.bind(null,L);return te.type=L,te},ht.createRef=function(){return{current:null}},ht.forwardRef=function(L){return{$$typeof:f,render:L}},ht.isValidElement=R,ht.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:oe}},ht.memo=function(L,te){return{$$typeof:m,type:L,compare:te===void 0?null:te}},ht.startTransition=function(L){var te=j.transition;j.transition={};try{L()}finally{j.transition=te}},ht.unstable_act=K,ht.useCallback=function(L,te){return Y.current.useCallback(L,te)},ht.useContext=function(L){return Y.current.useContext(L)},ht.useDebugValue=function(){},ht.useDeferredValue=function(L){return Y.current.useDeferredValue(L)},ht.useEffect=function(L,te){return Y.current.useEffect(L,te)},ht.useId=function(){return Y.current.useId()},ht.useImperativeHandle=function(L,te,Ae){return Y.current.useImperativeHandle(L,te,Ae)},ht.useInsertionEffect=function(L,te){return Y.current.useInsertionEffect(L,te)},ht.useLayoutEffect=function(L,te){return Y.current.useLayoutEffect(L,te)},ht.useMemo=function(L,te){return Y.current.useMemo(L,te)},ht.useReducer=function(L,te,Ae){return Y.current.useReducer(L,te,Ae)},ht.useRef=function(L){return Y.current.useRef(L)},ht.useState=function(L){return Y.current.useState(L)},ht.useSyncExternalStore=function(L,te,Ae){return Y.current.useSyncExternalStore(L,te,Ae)},ht.useTransition=function(){return Y.current.useTransition()},ht.version="18.3.1",ht}var Tp;function jf(){return Tp||(Tp=1,vu.exports=H0()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function G0(){if(wp)return Da;wp=1;var s=jf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var g,_={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(g in p)r.call(p,g)&&!c.hasOwnProperty(g)&&(_[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)_[g]===void 0&&(_[g]=p[g]);return{$$typeof:e,type:f,key:x,ref:M,props:_,_owner:o.current}}return Da.Fragment=n,Da.jsx=d,Da.jsxs=d,Da}var Ap;function W0(){return Ap||(Ap=1,_u.exports=G0()),_u.exports}var z=W0(),Xt=jf();const X0=bm(Xt);var sl={},xu={exports:{}},In={},Su={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function j0(){return Cp||(Cp=1,(function(s){function e(j,fe){var K=j.length;j.push(fe);e:for(;0<K;){var L=K-1>>>1,te=j[L];if(0<o(te,fe))j[L]=fe,j[K]=te,K=L;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var fe=j[0],K=j.pop();if(K!==fe){j[0]=K;e:for(var L=0,te=j.length,Ae=te>>>1;L<Ae;){var He=2*(L+1)-1,Ge=j[He],ne=He+1,de=j[ne];if(0>o(Ge,K))ne<te&&0>o(de,Ge)?(j[L]=de,j[ne]=K,L=ne):(j[L]=Ge,j[He]=K,L=He);else if(ne<te&&0>o(de,K))j[L]=de,j[ne]=K,L=ne;else break e}}return fe}function o(j,fe){var K=j.sortIndex-fe.sortIndex;return K!==0?K:j.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],g=1,_=null,x=3,M=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(j){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=j)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function P(j){if(C=!1,I(j),!T)if(n(p)!==null)T=!0,oe(U);else{var fe=n(m);fe!==null&&Y(P,fe.startTime-j)}}function U(j,fe){T=!1,C&&(C=!1,v(Q),Q=-1),M=!0;var K=x;try{for(I(fe),_=n(p);_!==null&&(!(_.expirationTime>fe)||j&&!V());){var L=_.callback;if(typeof L=="function"){_.callback=null,x=_.priorityLevel;var te=L(_.expirationTime<=fe);fe=s.unstable_now(),typeof te=="function"?_.callback=te:_===n(p)&&r(p),I(fe)}else r(p);_=n(p)}if(_!==null)var Ae=!0;else{var He=n(m);He!==null&&Y(P,He.startTime-fe),Ae=!1}return Ae}finally{_=null,x=K,M=!1}}var O=!1,F=null,Q=-1,A=5,R=-1;function V(){return!(s.unstable_now()-R<A)}function q(){if(F!==null){var j=s.unstable_now();R=j;var fe=!0;try{fe=F(!0,j)}finally{fe?$():(O=!1,F=null)}}else O=!1}var $;if(typeof D=="function")$=function(){D(q)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=q,$=function(){ce.postMessage(null)}}else $=function(){S(q,0)};function oe(j){F=j,O||(O=!0,$())}function Y(j,fe){Q=S(function(){j(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,oe(U))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(j){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var K=x;x=fe;try{return j()}finally{x=K}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,fe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=x;x=j;try{return fe()}finally{x=K}},s.unstable_scheduleCallback=function(j,fe,K){var L=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?L+K:L):K=L,j){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=K+te,j={id:g++,callback:fe,priorityLevel:j,startTime:K,expirationTime:te,sortIndex:-1},K>L?(j.sortIndex=K,e(m,j),n(p)===null&&j===n(m)&&(C?(v(Q),Q=-1):C=!0,Y(P,K-L))):(j.sortIndex=te,e(p,j),T||M||(T=!0,oe(U))),j},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(j){var fe=x;return function(){var K=x;x=fe;try{return j.apply(this,arguments)}finally{x=K}}}})(yu)),yu}var Rp;function q0(){return Rp||(Rp=1,Su.exports=j0()),Su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function Y0(){if(bp)return In;bp=1;var s=jf(),e=q0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(t){return p.call(_,t)?!0:p.call(g,t)?!1:m.test(t)?_[t]=!0:(g[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,u,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,a,l){var u=S.hasOwnProperty(i)?S[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,u,l)&&(a=null),l||u===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),j=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,L;function te(t){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+t}var Ae=!1;function He(t,i){if(!t||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),h=l.stack.split(`
`),E=u.length-1,N=h.length-1;1<=E&&0<=N&&u[E]!==h[N];)N--;for(;1<=E&&0<=N;E--,N--)if(u[E]!==h[N]){if(E!==1||N!==1)do if(E--,N--,0>N||u[E]!==h[N]){var k=`
`+u[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=N);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?te(t):""}function Ge(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case A:return"Profiler";case Q:return"StrictMode";case $:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}function de(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Ie(t))}function qt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vt(t,i){var a=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Rt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function Bt(t,i){lt(t,i);var a=ye(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?zt(t,i.type,a):i.hasOwnProperty("defaultValue")&&zt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function zt(t,i,a){(i!=="number"||dt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var mt=Array.isArray;function xt(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function je(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(mt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ye(a)}}function y(t,i){var a=ye(i.value),l=ye(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function W(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ue,$e=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function Se(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function be(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=Se(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var We=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(We[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Me=null,Ne=null;function ve(t){if(t=va(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),Le(t.stateNode,t.type,i))}}function pe(t){Me?Ne?Ne.push(t):Ne=[t]:Me=t}function Re(){if(Me){var t=Me,i=Ne;if(Ne=Me=null,ve(t),i)for(t=0;t<i.length;t++)ve(i[t])}}function it(t,i){return t(i)}function Pt(){}var St=!1;function Fn(t,i,a){if(St)return t(i,a);St=!0;try{return it(t,i,a)}finally{St=!1,(Me!==null||Ne!==null)&&(Pt(),Re())}}function Mn(t,i){var a=t.stateNode;if(a===null)return null;var l=So(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zs=!1;if(f)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Zs=!1}function Qs(t,i,a,l,u,h,E,N,k){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(_e){this.onError(_e)}}var Ar=!1,Cr=null,Rr=!1,ni=null,Js={onError:function(t){Ar=!0,Cr=t}};function Qa(t,i,a,l,u,h,E,N,k){Ar=!1,Cr=null,Qs.apply(Js,arguments)}function Ja(t,i,a,l,u,h,E,N,k){if(Qa.apply(this,arguments),Ar){if(Ar){var re=Cr;Ar=!1,Cr=null}else throw Error(n(198));Rr||(Rr=!0,ni=re)}}function Xn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function br(t){if(Xn(t)!==t)throw Error(n(188))}function eo(t){var i=t.alternate;if(!i){if(i=Xn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return br(u),t;if(h===l)return br(u),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=h;else{for(var E=!1,N=u.child;N;){if(N===a){E=!0,a=u,l=h;break}if(N===l){E=!0,l=u,a=h;break}N=N.sibling}if(!E){for(N=h.child;N;){if(N===a){E=!0,a=h,l=u;break}if(N===l){E=!0,l=h,a=u;break}N=N.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ta(t){return t=eo(t),t!==null?to(t):null}function to(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=to(t);if(i!==null)return i;t=t.sibling}return null}var no=e.unstable_scheduleCallback,io=e.unstable_cancelCallback,zl=e.unstable_shouldYield,Vl=e.unstable_requestPaint,Ht=e.unstable_now,w=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,J=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Ue=null,we=null;function Ve(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:ut,tt=Math.log,Ze=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var yt=64,Ut=4194304;function Dt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var N=E&~u;N!==0?l=Dt(N):(h&=E,h!==0&&(l=Dt(h)))}else E=a&~u,E!==0?l=Dt(E):h!==0&&(l=Dt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Oe(i),u=1<<a,l|=t[a],i&=~u;return l}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),N=1<<E,k=u[E];k===-1?((N&a)===0||(N&l)!==0)&&(u[E]=Qe(N,i)):k<=i&&(t.expiredLanes|=N),h&=~N}}function gt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=yt;return yt<<=1,(yt&4194240)===0&&(yt=64),t}function pi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Jt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=a}function Pr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Oe(a),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~h}}function bt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Oe(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var at=0;function En(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sn,an,ts,mi,sd,Hl=!1,ro=[],Qi=null,Ji=null,er=null,na=new Map,ia=new Map,tr=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ad(t,i){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":na.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(i.pointerId)}}function ra(t,i,a,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=va(i),i!==null&&an(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function fg(t,i,a,l,u){switch(i){case"focusin":return Qi=ra(Qi,t,i,a,l,u),!0;case"dragenter":return Ji=ra(Ji,t,i,a,l,u),!0;case"mouseover":return er=ra(er,t,i,a,l,u),!0;case"pointerover":var h=u.pointerId;return na.set(h,ra(na.get(h)||null,t,i,a,l,u)),!0;case"gotpointercapture":return h=u.pointerId,ia.set(h,ra(ia.get(h)||null,t,i,a,l,u)),!0}return!1}function od(t){var i=Lr(t.target);if(i!==null){var a=Xn(i);if(a!==null){if(i=a.tag,i===13){if(i=ea(a),i!==null){t.blockedOn=i,sd(t.priority,function(){ts(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ot=l,a.target.dispatchEvent(l),ot=null}else return i=va(a),i!==null&&an(i),t.blockedOn=a,!1;i.shift()}return!0}function ld(t,i,a){so(t)&&a.delete(i)}function dg(){Hl=!1,Qi!==null&&so(Qi)&&(Qi=null),Ji!==null&&so(Ji)&&(Ji=null),er!==null&&so(er)&&(er=null),na.forEach(ld),ia.forEach(ld)}function sa(t,i){t.blockedOn===i&&(t.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dg)))}function aa(t){function i(u){return sa(u,t)}if(0<ro.length){sa(ro[0],t);for(var a=1;a<ro.length;a++){var l=ro[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Qi!==null&&sa(Qi,t),Ji!==null&&sa(Ji,t),er!==null&&sa(er,t),na.forEach(i),ia.forEach(i),a=0;a<tr.length;a++)l=tr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)od(a),a.blockedOn===null&&tr.shift()}var ns=P.ReactCurrentBatchConfig,ao=!0;function hg(t,i,a,l){var u=at,h=ns.transition;ns.transition=null;try{at=1,Gl(t,i,a,l)}finally{at=u,ns.transition=h}}function pg(t,i,a,l){var u=at,h=ns.transition;ns.transition=null;try{at=4,Gl(t,i,a,l)}finally{at=u,ns.transition=h}}function Gl(t,i,a,l){if(ao){var u=Wl(t,i,a,l);if(u===null)oc(t,i,l,oo,a),ad(t,l);else if(fg(u,t,i,a,l))l.stopPropagation();else if(ad(t,l),i&4&&-1<ug.indexOf(t)){for(;u!==null;){var h=va(u);if(h!==null&&sn(h),h=Wl(t,i,a,l),h===null&&oc(t,i,l,oo,a),h===u)break;u=h}u!==null&&l.stopPropagation()}else oc(t,i,l,null,a)}}var oo=null;function Wl(t,i,a,l){if(oo=null,t=H(l),t=Lr(t),t!==null)if(i=Xn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ea(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oo=t,null}function cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w()){case X:return 1;case se:return 4;case ie:case J:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var nr=null,Xl=null,lo=null;function ud(){if(lo)return lo;var t,i=Xl,a=i.length,l,u="value"in nr?nr.value:nr.textContent,h=u.length;for(t=0;t<a&&i[t]===u[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===u[h-l];l++);return lo=u.slice(t,1<l?1-l:void 0)}function co(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function fd(){return!1}function On(t){function i(a,l,u,h,E){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?uo:fd,this.isPropagationStopped=fd,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=On(is),oa=K({},is,{view:0,detail:0}),mg=On(oa),ql,Yl,la,fo=K({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(ql=t.screenX-la.screenX,Yl=t.screenY-la.screenY):Yl=ql=0,la=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),dd=On(fo),gg=K({},fo,{dataTransfer:0}),_g=On(gg),vg=K({},oa,{relatedTarget:0}),$l=On(vg),xg=K({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=On(xg),yg=K({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mg=On(yg),Eg=K({},is,{data:0}),hd=On(Eg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ag[t])?!!i[t]:!1}function Kl(){return Cg}var Rg=K({},oa,{key:function(t){if(t.key){var i=Tg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bg=On(Rg),Pg=K({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=On(Pg),Lg=K({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Ng=On(Lg),Dg=K({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=On(Dg),Ug=K({},fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=On(Ug),Og=[9,13,27,32],Zl=f&&"CompositionEvent"in window,ca=null;f&&"documentMode"in document&&(ca=document.documentMode);var kg=f&&"TextEvent"in window&&!ca,md=f&&(!Zl||ca&&8<ca&&11>=ca),gd=" ",_d=!1;function vd(t,i){switch(t){case"keyup":return Og.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Bg(t,i){switch(t){case"compositionend":return xd(i);case"keypress":return i.which!==32?null:(_d=!0,gd);case"textInput":return t=i.data,t===gd&&_d?null:t;default:return null}}function zg(t,i){if(rs)return t==="compositionend"||!Zl&&vd(t,i)?(t=ud(),lo=Xl=nr=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return md&&i.locale!=="ko"?null:i.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vg[t.type]:i==="textarea"}function yd(t,i,a,l){pe(l),i=_o(i,"onChange"),0<i.length&&(a=new jl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ua=null,fa=null;function Hg(t){Bd(t,0)}function ho(t){var i=cs(t);if(qt(i))return t}function Gg(t,i){if(t==="change")return i}var Md=!1;if(f){var Ql;if(f){var Jl="oninput"in document;if(!Jl){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Jl=typeof Ed.oninput=="function"}Ql=Jl}else Ql=!1;Md=Ql&&(!document.documentMode||9<document.documentMode)}function Td(){ua&&(ua.detachEvent("onpropertychange",wd),fa=ua=null)}function wd(t){if(t.propertyName==="value"&&ho(fa)){var i=[];yd(i,fa,t,H(t)),Fn(Hg,i)}}function Wg(t,i,a){t==="focusin"?(Td(),ua=i,fa=a,ua.attachEvent("onpropertychange",wd)):t==="focusout"&&Td()}function Xg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ho(fa)}function jg(t,i){if(t==="click")return ho(i)}function qg(t,i){if(t==="input"||t==="change")return ho(i)}function Yg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Yg;function da(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!p.call(i,u)||!ii(t[u],i[u]))return!1}return!0}function Ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cd(t,i){var a=Ad(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ad(a)}}function Rd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function bd(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=dt(t.document)}return i}function ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function $g(t){var i=bd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Rd(a.ownerDocument.documentElement,a)){if(l!==null&&ec(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Cd(a,h);var E=Cd(a,l);u&&E&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kg=f&&"documentMode"in document&&11>=document.documentMode,ss=null,tc=null,ha=null,nc=!1;function Pd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nc||ss==null||ss!==dt(l)||(l=ss,"selectionStart"in l&&ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ha&&da(ha,l)||(ha=l,l=_o(tc,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ss)))}function po(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var as={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},ic={},Ld={};f&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function mo(t){if(ic[t])return ic[t];if(!as[t])return t;var i=as[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ld)return ic[t]=i[a];return t}var Nd=mo("animationend"),Dd=mo("animationiteration"),Id=mo("animationstart"),Ud=mo("transitionend"),Fd=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,i){Fd.set(t,i),c(i,[t])}for(var rc=0;rc<Od.length;rc++){var sc=Od[rc],Zg=sc.toLowerCase(),Qg=sc[0].toUpperCase()+sc.slice(1);ir(Zg,"on"+Qg)}ir(Nd,"onAnimationEnd"),ir(Dd,"onAnimationIteration"),ir(Id,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Ud,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function kd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Ja(l,i,void 0,t),t.currentTarget=null}function Bd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],k=N.instance,re=N.currentTarget;if(N=N.listener,k!==h&&u.isPropagationStopped())break e;kd(u,N,re),h=k}else for(E=0;E<l.length;E++){if(N=l[E],k=N.instance,re=N.currentTarget,N=N.listener,k!==h&&u.isPropagationStopped())break e;kd(u,N,re),h=k}}}if(Rr)throw t=ni,Rr=!1,ni=null,t}function Ot(t,i){var a=i[hc];a===void 0&&(a=i[hc]=new Set);var l=t+"__bubble";a.has(l)||(zd(i,t,2,!1),a.add(l))}function ac(t,i,a){var l=0;i&&(l|=4),zd(a,t,l,i)}var go="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[go]){t[go]=!0,r.forEach(function(a){a!=="selectionchange"&&(Jg.has(a)||ac(a,!1,t),ac(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[go]||(i[go]=!0,ac("selectionchange",!1,i))}}function zd(t,i,a,l){switch(cd(i)){case 1:var u=hg;break;case 4:u=pg;break;default:u=Gl}a=u.bind(null,i,a,t),u=void 0,!Zs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function oc(t,i,a,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===u||N.nodeType===8&&N.parentNode===u)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;E=E.return}for(;N!==null;){if(E=Lr(N),E===null)return;if(k=E.tag,k===5||k===6){l=h=E;continue e}N=N.parentNode}}l=l.return}Fn(function(){var re=h,_e=H(a),xe=[];e:{var ge=Fd.get(t);if(ge!==void 0){var Fe=jl,Xe=t;switch(t){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":Fe=bg;break;case"focusin":Xe="focus",Fe=$l;break;case"focusout":Xe="blur",Fe=$l;break;case"beforeblur":case"afterblur":Fe=$l;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Ng;break;case Nd:case Dd:case Id:Fe=Sg;break;case Ud:Fe=Ig;break;case"scroll":Fe=mg;break;case"wheel":Fe=Fg;break;case"copy":case"cut":case"paste":Fe=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=pd}var Ye=(i&4)!==0,Yt=!Ye&&t==="scroll",Z=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var G=re,ee;G!==null;){ee=G;var Ee=ee.stateNode;if(ee.tag===5&&Ee!==null&&(ee=Ee,Z!==null&&(Ee=Mn(G,Z),Ee!=null&&Ye.push(ga(G,Ee,ee)))),Yt)break;G=G.return}0<Ye.length&&(ge=new Fe(ge,Xe,null,a,_e),xe.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",ge&&a!==ot&&(Xe=a.relatedTarget||a.fromElement)&&(Lr(Xe)||Xe[bi]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Xe=a.relatedTarget||a.toElement,Fe=re,Xe=Xe?Lr(Xe):null,Xe!==null&&(Yt=Xn(Xe),Xe!==Yt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=re),Fe!==Xe)){if(Ye=dd,Ee="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=pd,Ee="onPointerLeave",Z="onPointerEnter",G="pointer"),Yt=Fe==null?ge:cs(Fe),ee=Xe==null?ge:cs(Xe),ge=new Ye(Ee,G+"leave",Fe,a,_e),ge.target=Yt,ge.relatedTarget=ee,Ee=null,Lr(_e)===re&&(Ye=new Ye(Z,G+"enter",Xe,a,_e),Ye.target=ee,Ye.relatedTarget=Yt,Ee=Ye),Yt=Ee,Fe&&Xe)t:{for(Ye=Fe,Z=Xe,G=0,ee=Ye;ee;ee=os(ee))G++;for(ee=0,Ee=Z;Ee;Ee=os(Ee))ee++;for(;0<G-ee;)Ye=os(Ye),G--;for(;0<ee-G;)Z=os(Z),ee--;for(;G--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=os(Ye),Z=os(Z)}Ye=null}else Ye=null;Fe!==null&&Vd(xe,ge,Fe,Ye,!1),Xe!==null&&Yt!==null&&Vd(xe,Yt,Xe,Ye,!0)}}e:{if(ge=re?cs(re):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var Ke=Gg;else if(Sd(ge))if(Md)Ke=qg;else{Ke=Xg;var Je=Wg}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=jg);if(Ke&&(Ke=Ke(t,re))){yd(xe,Ke,a,_e);break e}Je&&Je(t,ge,re),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&zt(ge,"number",ge.value)}switch(Je=re?cs(re):window,t){case"focusin":(Sd(Je)||Je.contentEditable==="true")&&(ss=Je,tc=re,ha=null);break;case"focusout":ha=tc=ss=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Pd(xe,a,_e);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":Pd(xe,a,_e)}var et;if(Zl)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else rs?vd(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(md&&a.locale!=="ko"&&(rs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&rs&&(et=ud()):(nr=_e,Xl="value"in nr?nr.value:nr.textContent,rs=!0)),Je=_o(re,rt),0<Je.length&&(rt=new hd(rt,t,null,a,_e),xe.push({event:rt,listeners:Je}),et?rt.data=et:(et=xd(a),et!==null&&(rt.data=et)))),(et=kg?Bg(t,a):zg(t,a))&&(re=_o(re,"onBeforeInput"),0<re.length&&(_e=new hd("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:re}),_e.data=et))}Bd(xe,i)})}function ga(t,i,a){return{instance:t,listener:i,currentTarget:a}}function _o(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Mn(t,a),h!=null&&l.unshift(ga(t,h,u)),h=Mn(t,i),h!=null&&l.push(ga(t,h,u))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vd(t,i,a,l,u){for(var h=i._reactName,E=[];a!==null&&a!==l;){var N=a,k=N.alternate,re=N.stateNode;if(k!==null&&k===l)break;N.tag===5&&re!==null&&(N=re,u?(k=Mn(a,h),k!=null&&E.unshift(ga(a,k,N))):u||(k=Mn(a,h),k!=null&&E.push(ga(a,k,N)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(e0,`
`).replace(t0,"")}function vo(t,i,a){if(i=Hd(i),Hd(t)!==i&&a)throw Error(n(425))}function xo(){}var lc=null,cc=null;function uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(t){return Gd.resolve(null).then(t).catch(r0)}:fc;function r0(t){setTimeout(function(){throw t})}function dc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),aa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);aa(i)}function rr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Wd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),gi="__reactFiber$"+ls,_a="__reactProps$"+ls,bi="__reactContainer$"+ls,hc="__reactEvents$"+ls,s0="__reactListeners$"+ls,a0="__reactHandles$"+ls;function Lr(t){var i=t[gi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[bi]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Wd(t);t!==null;){if(a=t[gi])return a;t=Wd(t)}return i}t=a,a=t.parentNode}return null}function va(t){return t=t[gi]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[_a]||null}var pc=[],us=-1;function sr(t){return{current:t}}function kt(t){0>us||(t.current=pc[us],pc[us]=null,us--)}function Ft(t,i){us++,pc[us]=t.current,t.current=i}var ar={},mn=sr(ar),bn=sr(!1),Nr=ar;function fs(t,i){var a=t.type.contextTypes;if(!a)return ar;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in a)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Pn(t){return t=t.childContextTypes,t!=null}function yo(){kt(bn),kt(mn)}function Xd(t,i,a){if(mn.current!==ar)throw Error(n(168));Ft(mn,i),Ft(bn,a)}function jd(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,de(t)||"Unknown",u));return K({},a,l)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Nr=mn.current,Ft(mn,t),Ft(bn,bn.current),!0}function qd(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=jd(t,i,Nr),l.__reactInternalMemoizedMergedChildContext=t,kt(bn),kt(mn),Ft(mn,t)):kt(bn),Ft(bn,a)}var Pi=null,Eo=!1,mc=!1;function Yd(t){Pi===null?Pi=[t]:Pi.push(t)}function o0(t){Eo=!0,Yd(t)}function or(){if(!mc&&Pi!==null){mc=!0;var t=0,i=at;try{var a=Pi;for(at=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Pi=null,Eo=!1}catch(u){throw Pi!==null&&(Pi=Pi.slice(t+1)),no(X,or),u}finally{at=i,mc=!1}}return null}var ds=[],hs=0,To=null,wo=0,jn=[],qn=0,Dr=null,Li=1,Ni="";function Ir(t,i){ds[hs++]=wo,ds[hs++]=To,To=t,wo=i}function $d(t,i,a){jn[qn++]=Li,jn[qn++]=Ni,jn[qn++]=Dr,Dr=t;var l=Li;t=Ni;var u=32-Oe(l)-1;l&=~(1<<u),a+=1;var h=32-Oe(i)+u;if(30<h){var E=u-u%5;h=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Li=1<<32-Oe(i)+u|a<<u|l,Ni=h+t}else Li=1<<h|a<<u|l,Ni=t}function gc(t){t.return!==null&&(Ir(t,1),$d(t,1,0))}function _c(t){for(;t===To;)To=ds[--hs],ds[hs]=null,wo=ds[--hs],ds[hs]=null;for(;t===Dr;)Dr=jn[--qn],jn[qn]=null,Ni=jn[--qn],jn[qn]=null,Li=jn[--qn],jn[qn]=null}var kn=null,Bn=null,Vt=!1,ri=null;function Kd(t,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Zd(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Bn=rr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Dr!==null?{id:Li,overflow:Ni}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,Bn=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(Vt){var i=Bn;if(i){var a=i;if(!Zd(t,i)){if(vc(t))throw Error(n(418));i=rr(a.nextSibling);var l=kn;i&&Zd(t,i)?Kd(l,a):(t.flags=t.flags&-4097|2,Vt=!1,kn=t)}}else{if(vc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,kn=t}}}function Qd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Ao(t){if(t!==kn)return!1;if(!Vt)return Qd(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uc(t.type,t.memoizedProps)),i&&(i=Bn)){if(vc(t))throw Jd(),Error(n(418));for(;i;)Kd(t,i),i=rr(i.nextSibling)}if(Qd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Bn=rr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=kn?rr(t.stateNode.nextSibling):null;return!0}function Jd(){for(var t=Bn;t;)t=rr(t.nextSibling)}function ps(){Bn=kn=null,Vt=!1}function Sc(t){ri===null?ri=[t]:ri.push(t)}var l0=P.ReactCurrentBatchConfig;function xa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var N=u.refs;E===null?delete N[h]:N[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function eh(t){var i=t._init;return i(t._payload)}function th(t){function i(Z,G){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[G],Z.flags|=16):ee.push(G)}}function a(Z,G){if(!t)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function l(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function u(Z,G){return Z=mr(Z,G),Z.index=0,Z.sibling=null,Z}function h(Z,G,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<G?(Z.flags|=2,G):ee):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function N(Z,G,ee,Ee){return G===null||G.tag!==6?(G=fu(ee,Z.mode,Ee),G.return=Z,G):(G=u(G,ee),G.return=Z,G)}function k(Z,G,ee,Ee){var Ke=ee.type;return Ke===F?_e(Z,G,ee.props.children,Ee,ee.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&eh(Ke)===G.type)?(Ee=u(G,ee.props),Ee.ref=xa(Z,G,ee),Ee.return=Z,Ee):(Ee=Zo(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=xa(Z,G,ee),Ee.return=Z,Ee)}function re(Z,G,ee,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=du(ee,Z.mode,Ee),G.return=Z,G):(G=u(G,ee.children||[]),G.return=Z,G)}function _e(Z,G,ee,Ee,Ke){return G===null||G.tag!==7?(G=Hr(ee,Z.mode,Ee,Ke),G.return=Z,G):(G=u(G,ee),G.return=Z,G)}function xe(Z,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=fu(""+G,Z.mode,ee),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return ee=Zo(G.type,G.key,G.props,null,Z.mode,ee),ee.ref=xa(Z,null,G),ee.return=Z,ee;case O:return G=du(G,Z.mode,ee),G.return=Z,G;case oe:var Ee=G._init;return xe(Z,Ee(G._payload),ee)}if(mt(G)||fe(G))return G=Hr(G,Z.mode,ee,null),G.return=Z,G;Co(Z,G)}return null}function ge(Z,G,ee,Ee){var Ke=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ke!==null?null:N(Z,G,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:return ee.key===Ke?k(Z,G,ee,Ee):null;case O:return ee.key===Ke?re(Z,G,ee,Ee):null;case oe:return Ke=ee._init,ge(Z,G,Ke(ee._payload),Ee)}if(mt(ee)||fe(ee))return Ke!==null?null:_e(Z,G,ee,Ee,null);Co(Z,ee)}return null}function Fe(Z,G,ee,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(ee)||null,N(G,Z,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,k(G,Z,Ee,Ke);case O:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,re(G,Z,Ee,Ke);case oe:var Je=Ee._init;return Fe(Z,G,ee,Je(Ee._payload),Ke)}if(mt(Ee)||fe(Ee))return Z=Z.get(ee)||null,_e(G,Z,Ee,Ke,null);Co(G,Ee)}return null}function Xe(Z,G,ee,Ee){for(var Ke=null,Je=null,et=G,rt=G=0,cn=null;et!==null&&rt<ee.length;rt++){et.index>rt?(cn=et,et=null):cn=et.sibling;var wt=ge(Z,et,ee[rt],Ee);if(wt===null){et===null&&(et=cn);break}t&&et&&wt.alternate===null&&i(Z,et),G=h(wt,G,rt),Je===null?Ke=wt:Je.sibling=wt,Je=wt,et=cn}if(rt===ee.length)return a(Z,et),Vt&&Ir(Z,rt),Ke;if(et===null){for(;rt<ee.length;rt++)et=xe(Z,ee[rt],Ee),et!==null&&(G=h(et,G,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Vt&&Ir(Z,rt),Ke}for(et=l(Z,et);rt<ee.length;rt++)cn=Fe(et,Z,rt,ee[rt],Ee),cn!==null&&(t&&cn.alternate!==null&&et.delete(cn.key===null?rt:cn.key),G=h(cn,G,rt),Je===null?Ke=cn:Je.sibling=cn,Je=cn);return t&&et.forEach(function(gr){return i(Z,gr)}),Vt&&Ir(Z,rt),Ke}function Ye(Z,G,ee,Ee){var Ke=fe(ee);if(typeof Ke!="function")throw Error(n(150));if(ee=Ke.call(ee),ee==null)throw Error(n(151));for(var Je=Ke=null,et=G,rt=G=0,cn=null,wt=ee.next();et!==null&&!wt.done;rt++,wt=ee.next()){et.index>rt?(cn=et,et=null):cn=et.sibling;var gr=ge(Z,et,wt.value,Ee);if(gr===null){et===null&&(et=cn);break}t&&et&&gr.alternate===null&&i(Z,et),G=h(gr,G,rt),Je===null?Ke=gr:Je.sibling=gr,Je=gr,et=cn}if(wt.done)return a(Z,et),Vt&&Ir(Z,rt),Ke;if(et===null){for(;!wt.done;rt++,wt=ee.next())wt=xe(Z,wt.value,Ee),wt!==null&&(G=h(wt,G,rt),Je===null?Ke=wt:Je.sibling=wt,Je=wt);return Vt&&Ir(Z,rt),Ke}for(et=l(Z,et);!wt.done;rt++,wt=ee.next())wt=Fe(et,Z,rt,wt.value,Ee),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?rt:wt.key),G=h(wt,G,rt),Je===null?Ke=wt:Je.sibling=wt,Je=wt);return t&&et.forEach(function(V0){return i(Z,V0)}),Vt&&Ir(Z,rt),Ke}function Yt(Z,G,ee,Ee){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:e:{for(var Ke=ee.key,Je=G;Je!==null;){if(Je.key===Ke){if(Ke=ee.type,Ke===F){if(Je.tag===7){a(Z,Je.sibling),G=u(Je,ee.props.children),G.return=Z,Z=G;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&eh(Ke)===Je.type){a(Z,Je.sibling),G=u(Je,ee.props),G.ref=xa(Z,Je,ee),G.return=Z,Z=G;break e}a(Z,Je);break}else i(Z,Je);Je=Je.sibling}ee.type===F?(G=Hr(ee.props.children,Z.mode,Ee,ee.key),G.return=Z,Z=G):(Ee=Zo(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=xa(Z,G,ee),Ee.return=Z,Z=Ee)}return E(Z);case O:e:{for(Je=ee.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){a(Z,G.sibling),G=u(G,ee.children||[]),G.return=Z,Z=G;break e}else{a(Z,G);break}else i(Z,G);G=G.sibling}G=du(ee,Z.mode,Ee),G.return=Z,Z=G}return E(Z);case oe:return Je=ee._init,Yt(Z,G,Je(ee._payload),Ee)}if(mt(ee))return Xe(Z,G,ee,Ee);if(fe(ee))return Ye(Z,G,ee,Ee);Co(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(a(Z,G.sibling),G=u(G,ee),G.return=Z,Z=G):(a(Z,G),G=fu(ee,Z.mode,Ee),G.return=Z,Z=G),E(Z)):a(Z,G)}return Yt}var ms=th(!0),nh=th(!1),Ro=sr(null),bo=null,gs=null,yc=null;function Mc(){yc=gs=bo=null}function Ec(t){var i=Ro.current;kt(Ro),t._currentValue=i}function Tc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function _s(t,i){bo=t,yc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Ln=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(yc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(bo===null)throw Error(n(308));gs=t,bo.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Ur=null;function wc(t){Ur===null?Ur=[t]:Ur.push(t)}function ih(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,wc(i)):(a.next=u.next,u.next=a),i.interleaved=a,Di(t,l)}function Di(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var lr=!1;function Ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Di(t,a)}return u=l.interleaved,u===null?(i.next=i,wc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Di(t,a)}function Po(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,bt(t,a)}}function sh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?u=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Lo(t,i,a,l){var u=t.updateQueue;lr=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var k=N,re=k.next;k.next=null,E===null?h=re:E.next=re,E=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,N=_e.lastBaseUpdate,N!==E&&(N===null?_e.firstBaseUpdate=re:N.next=re,_e.lastBaseUpdate=k))}if(h!==null){var xe=u.baseState;E=0,_e=re=k=null,N=h;do{var ge=N.lane,Fe=N.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Xe=t,Ye=N;switch(ge=i,Fe=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){xe=Xe.call(Fe,xe,ge);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,ge=typeof Xe=="function"?Xe.call(Fe,xe,ge):Xe,ge==null)break e;xe=K({},xe,ge);break e;case 2:lr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[N]:ge.push(N))}else Fe={eventTime:Fe,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_e===null?(re=_e=Fe,k=xe):_e=_e.next=Fe,E|=ge;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(_e===null&&(k=xe),u.baseState=k,u.firstBaseUpdate=re,u.lastBaseUpdate=_e,i=u.shared.interleaved,i!==null){u=i;do E|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);kr|=E,t.lanes=E,t.memoizedState=xe}}function ah(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var Sa={},_i=sr(Sa),ya=sr(Sa),Ma=sr(Sa);function Fr(t){if(t===Sa)throw Error(n(174));return t}function Cc(t,i){switch(Ft(Ma,i),Ft(ya,t),Ft(_i,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}kt(_i),Ft(_i,i)}function vs(){kt(_i),kt(ya),kt(Ma)}function oh(t){Fr(Ma.current);var i=Fr(_i.current),a=me(i,t.type);i!==a&&(Ft(ya,t),Ft(_i,a))}function Rc(t){ya.current===t&&(kt(_i),kt(ya))}var Gt=sr(0);function No(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Pc(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Do=P.ReactCurrentDispatcher,Lc=P.ReactCurrentBatchConfig,Or=0,Wt=null,en=null,on=null,Io=!1,Ea=!1,Ta=0,c0=0;function gn(){throw Error(n(321))}function Nc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ii(t[a],i[a]))return!1;return!0}function Dc(t,i,a,l,u,h){if(Or=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?h0:p0,t=a(l,u),Ea){h=0;do{if(Ea=!1,Ta=0,25<=h)throw Error(n(301));h+=1,on=en=null,i.updateQueue=null,Do.current=m0,t=a(l,u)}while(Ea)}if(Do.current=Oo,i=en!==null&&en.next!==null,Or=0,on=en=Wt=null,Io=!1,i)throw Error(n(300));return t}function Ic(){var t=Ta!==0;return Ta=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Wt.memoizedState=on=t:on=on.next=t,on}function $n(){if(en===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=on===null?Wt.memoizedState:on.next;if(i!==null)on=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Wt.memoizedState=on=t:on=on.next=t}return on}function wa(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=en,u=l.baseQueue,h=a.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}l.baseQueue=u=h,a.pending=null}if(u!==null){h=u.next,l=l.baseState;var N=E=null,k=null,re=h;do{var _e=re.lane;if((Or&_e)===_e)k!==null&&(k=k.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var xe={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};k===null?(N=k=xe,E=l):k=k.next=xe,Wt.lanes|=_e,kr|=_e}re=re.next}while(re!==null&&re!==h);k===null?E=l:k.next=N,ii(l,i.memoizedState)||(Ln=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do h=u.lane,Wt.lanes|=h,kr|=h,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Fc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);ii(h,i.memoizedState)||(Ln=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function lh(){}function ch(t,i){var a=Wt,l=$n(),u=i(),h=!ii(l.memoizedState,u);if(h&&(l.memoizedState=u,Ln=!0),l=l.queue,Oc(dh.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Aa(9,fh.bind(null,a,l,u,i),void 0,null),ln===null)throw Error(n(349));(Or&30)!==0||uh(a,i,u)}return u}function uh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function fh(t,i,a,l){i.value=a,i.getSnapshot=l,hh(i)&&ph(t)}function dh(t,i,a){return a(function(){hh(i)&&ph(t)})}function hh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ii(t,a)}catch{return!0}}function ph(t){var i=Di(t,1);i!==null&&li(i,t,1,-1)}function mh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i.queue=t,t=t.dispatch=d0.bind(null,Wt,t),[i.memoizedState,t]}function Aa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function gh(){return $n().memoizedState}function Uo(t,i,a,l){var u=vi();Wt.flags|=t,u.memoizedState=Aa(1|i,a,void 0,l===void 0?null:l)}function Fo(t,i,a,l){var u=$n();l=l===void 0?null:l;var h=void 0;if(en!==null){var E=en.memoizedState;if(h=E.destroy,l!==null&&Nc(l,E.deps)){u.memoizedState=Aa(i,a,h,l);return}}Wt.flags|=t,u.memoizedState=Aa(1|i,a,h,l)}function _h(t,i){return Uo(8390656,8,t,i)}function Oc(t,i){return Fo(2048,8,t,i)}function vh(t,i){return Fo(4,2,t,i)}function xh(t,i){return Fo(4,4,t,i)}function Sh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function yh(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4,4,Sh.bind(null,i,t),a)}function kc(){}function Mh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Nc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Eh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Nc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Th(t,i,a){return(Or&21)===0?(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=a):(ii(a,i)||(a=pn(),Wt.lanes|=a,kr|=a,t.baseState=!0),i)}function u0(t,i){var a=at;at=a!==0&&4>a?a:4,t(!0);var l=Lc.transition;Lc.transition={};try{t(!1),i()}finally{at=a,Lc.transition=l}}function wh(){return $n().memoizedState}function f0(t,i,a){var l=hr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Ah(t))Ch(i,a);else if(a=ih(t,i,a,l),a!==null){var u=wn();li(a,t,l,u),Rh(a,i,l)}}function d0(t,i,a){var l=hr(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ah(t))Ch(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,N=h(E,a);if(u.hasEagerState=!0,u.eagerState=N,ii(N,E)){var k=i.interleaved;k===null?(u.next=u,wc(i)):(u.next=k.next,k.next=u),i.interleaved=u;return}}catch{}finally{}a=ih(t,i,u,l),a!==null&&(u=wn(),li(a,t,l,u),Rh(a,i,l))}}function Ah(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Ch(t,i){Ea=Io=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Rh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,bt(t,a)}}var Oo={readContext:Yn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},h0={readContext:Yn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:_h,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4194308,4,Sh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Uo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Uo(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=f0.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:mh,useDebugValue:kc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=mh(!1),i=t[0];return t=u0.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Wt,u=vi();if(Vt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ln===null)throw Error(n(349));(Or&30)!==0||uh(l,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,_h(dh.bind(null,l,h,t),[t]),l.flags|=2048,Aa(9,fh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=vi(),i=ln.identifierPrefix;if(Vt){var a=Ni,l=Li;a=(l&~(1<<32-Oe(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=c0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},p0={readContext:Yn,useCallback:Mh,useContext:Yn,useEffect:Oc,useImperativeHandle:yh,useInsertionEffect:vh,useLayoutEffect:xh,useMemo:Eh,useReducer:Uc,useRef:gh,useState:function(){return Uc(wa)},useDebugValue:kc,useDeferredValue:function(t){var i=$n();return Th(i,en.memoizedState,t)},useTransition:function(){var t=Uc(wa)[0],i=$n().memoizedState;return[t,i]},useMutableSource:lh,useSyncExternalStore:ch,useId:wh,unstable_isNewReconciler:!1},m0={readContext:Yn,useCallback:Mh,useContext:Yn,useEffect:Oc,useImperativeHandle:yh,useInsertionEffect:vh,useLayoutEffect:xh,useMemo:Eh,useReducer:Fc,useRef:gh,useState:function(){return Fc(wa)},useDebugValue:kc,useDeferredValue:function(t){var i=$n();return en===null?i.memoizedState=t:Th(i,en.memoizedState,t)},useTransition:function(){var t=Fc(wa)[0],i=$n().memoizedState;return[t,i]},useMutableSource:lh,useSyncExternalStore:ch,useId:wh,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=K({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Bc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:K({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ko={isMounted:function(t){return(t=t._reactInternals)?Xn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),u=hr(t),h=Ii(l,u);h.payload=i,a!=null&&(h.callback=a),i=cr(t,h,u),i!==null&&(li(i,t,u,l),Po(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),u=hr(t),h=Ii(l,u);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(t,h,u),i!==null&&(li(i,t,u,l),Po(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=hr(t),u=Ii(a,l);u.tag=2,i!=null&&(u.callback=i),i=cr(t,u,l),i!==null&&(li(i,t,l,a),Po(i,t,l))}};function bh(t,i,a,l,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(u,h):!0}function Ph(t,i,a){var l=!1,u=ar,h=i.contextType;return typeof h=="object"&&h!==null?h=Yn(h):(u=Pn(i)?Nr:mn.current,l=i.contextTypes,h=(l=l!=null)?fs(t,u):ar),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ko,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function Lh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&ko.enqueueReplaceState(i,i.state,null)}function zc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Ac(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Yn(h):(h=Pn(i)?Nr:mn.current,u.context=fs(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Bc(t,i,h,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&ko.enqueueReplaceState(u,u.state,null),Lo(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var a="",l=i;do a+=Ge(l),l=l.return;while(l);var u=a}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Vc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Hc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,i,a){a=Ii(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Xo||(Xo=!0,iu=l),Hc(t,i)},a}function Dh(t,i,a){a=Ii(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Hc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Hc(t,i),typeof l!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ih(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new g0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=P0.bind(null,t,i,a),i.then(t,t))}function Uh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Fh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ii(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var _0=P.ReactCurrentOwner,Ln=!1;function Tn(t,i,a,l){i.child=t===null?nh(i,null,a,l):ms(i,t.child,a,l)}function Oh(t,i,a,l,u){a=a.render;var h=i.ref;return _s(i,u),l=Dc(t,i,a,l,h,u),a=Ic(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ui(t,i,u)):(Vt&&a&&gc(i),i.flags|=1,Tn(t,i,l,u),i.child)}function kh(t,i,a,l,u){if(t===null){var h=a.type;return typeof h=="function"&&!uu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Bh(t,i,h,l,u)):(t=Zo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,l)&&t.ref===i.ref)return Ui(t,i,u)}return i.flags|=1,t=mr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Bh(t,i,a,l,u){if(t!==null){var h=t.memoizedProps;if(da(h,l)&&t.ref===i.ref)if(Ln=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Ln=!0);else return i.lanes=t.lanes,Ui(t,i,u)}return Gc(t,i,a,l,u)}function zh(t,i,a){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(ys,zn),zn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(ys,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Ft(ys,zn),zn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Ft(ys,zn),zn|=l;return Tn(t,i,u,a),i.child}function Vh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Gc(t,i,a,l,u){var h=Pn(a)?Nr:mn.current;return h=fs(i,h),_s(i,u),a=Dc(t,i,a,l,h,u),l=Ic(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ui(t,i,u)):(Vt&&l&&gc(i),i.flags|=1,Tn(t,i,a,u),i.child)}function Hh(t,i,a,l,u){if(Pn(a)){var h=!0;Mo(i)}else h=!1;if(_s(i,u),i.stateNode===null)zo(t,i),Ph(i,a,l),zc(i,a,l,u),l=!0;else if(t===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var k=E.context,re=a.contextType;typeof re=="object"&&re!==null?re=Yn(re):(re=Pn(a)?Nr:mn.current,re=fs(i,re));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==l||k!==re)&&Lh(i,E,l,re),lr=!1;var ge=i.memoizedState;E.state=ge,Lo(i,l,E,u),k=i.memoizedState,N!==l||ge!==k||bn.current||lr?(typeof _e=="function"&&(Bc(i,a,_e,l),k=i.memoizedState),(N=lr||bh(i,a,N,l,ge,k,re))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=re,l=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,rh(t,i),N=i.memoizedProps,re=i.type===i.elementType?N:si(i.type,N),E.props=re,xe=i.pendingProps,ge=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=Yn(k):(k=Pn(a)?Nr:mn.current,k=fs(i,k));var Fe=a.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==xe||ge!==k)&&Lh(i,E,l,k),lr=!1,ge=i.memoizedState,E.state=ge,Lo(i,l,E,u);var Xe=i.memoizedState;N!==xe||ge!==Xe||bn.current||lr?(typeof Fe=="function"&&(Bc(i,a,Fe,l),Xe=i.memoizedState),(re=lr||bh(i,a,re,l,ge,Xe,k)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Xe,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Xe,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Xe),E.props=l,E.state=Xe,E.context=k,l=re):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Wc(t,i,a,l,h,u)}function Wc(t,i,a,l,u,h){Vh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return u&&qd(i,a,!1),Ui(t,i,h);l=i.stateNode,_0.current=i;var N=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ms(i,t.child,null,h),i.child=ms(i,null,N,h)):Tn(t,i,N,h),i.memoizedState=l.state,u&&qd(i,a,!0),i.child}function Gh(t){var i=t.stateNode;i.pendingContext?Xd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Xd(t,i.context,!1),Cc(t,i.containerInfo)}function Wh(t,i,a,l,u){return ps(),Sc(u),i.flags|=256,Tn(t,i,a,l),i.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xh(t,i,a){var l=i.pendingProps,u=Gt.current,h=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=t!==null&&t.memoizedState===null?!1:(u&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ft(Gt,u&1),t===null)return xc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Qo(E,l,0,null),t=Hr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=jc(a),i.memoizedState=Xc,t):qc(i,E));if(u=t.memoizedState,u!==null&&(N=u.dehydrated,N!==null))return v0(t,i,E,l,N,u,a);if(h){h=l.fallback,E=i.mode,u=t.child,N=u.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=mr(u,k),l.subtreeFlags=u.subtreeFlags&14680064),N!==null?h=mr(N,h):(h=Hr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?jc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=Xc,l}return h=t.child,t=h.sibling,l=mr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function qc(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Bo(t,i,a,l){return l!==null&&Sc(l),ms(i,t.child,null,a),t=qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function v0(t,i,a,l,u,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Vc(Error(n(422))),Bo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Qo({mode:"visible",children:l.children},u,0,null),h=Hr(h,u,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,E),i.child.memoizedState=jc(E),i.memoizedState=Xc,h);if((i.mode&1)===0)return Bo(t,i,E,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Vc(h,l,void 0),Bo(t,i,E,l)}if(N=(E&t.childLanes)!==0,Ln||N){if(l=ln,l!==null){switch(E&-E){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|E))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Di(t,u),li(l,t,u,-1))}return cu(),l=Vc(Error(n(421))),Bo(t,i,E,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=L0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Bn=rr(u.nextSibling),kn=i,Vt=!0,ri=null,t!==null&&(jn[qn++]=Li,jn[qn++]=Ni,jn[qn++]=Dr,Li=t.id,Ni=t.overflow,Dr=i),i=qc(i,l.children),i.flags|=4096,i)}function jh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tc(t.return,i,a)}function Yc(t,i,a,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=u)}function qh(t,i,a){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(Tn(t,i,l.children,a),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,a,i);else if(t.tag===19)jh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ft(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&No(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Yc(i,!1,u,a,h);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&No(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Yc(i,!0,a,null,h);break;case"together":Yc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ui(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function x0(t,i,a){switch(i.tag){case 3:Gh(i),ps();break;case 5:oh(i);break;case 1:Pn(i.type)&&Mo(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Ft(Ro,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Xh(t,i,a):(Ft(Gt,Gt.current&1),t=Ui(t,i,a),t!==null?t.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return qh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ft(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,zh(t,i,a)}return Ui(t,i,a)}var Yh,$c,$h,Kh;Yh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$c=function(){},$h=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Fr(_i.current);var h=null;switch(a){case"input":u=vt(t,u),l=vt(t,l),h=[];break;case"select":u=K({},u,{value:void 0}),l=K({},l,{value:void 0}),h=[];break;case"textarea":u=je(t,u),l=je(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=xo)}qe(a,l);var E;a=null;for(re in u)if(!l.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var N=u[re];for(E in N)N.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?h||(h=[]):(h=h||[]).push(re,null));for(re in l){var k=l[re];if(N=u!=null?u[re]:void 0,l.hasOwnProperty(re)&&k!==N&&(k!=null||N!=null))if(re==="style")if(N){for(E in N)!N.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&N[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(h||(h=[]),h.push(re,a)),a=k;else re==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(h=h||[]).push(re,k)):re==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(re,""+k):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(k!=null&&re==="onScroll"&&Ot("scroll",t),h||N===k||(h=[])):(h=h||[]).push(re,k))}a&&(h=h||[]).push("style",a);var re=h;(i.updateQueue=re)&&(i.flags|=4)}},Kh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ca(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function S0(t,i,a){var l=i.pendingProps;switch(_c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Pn(i.type)&&yo(),_n(i),null;case 3:return l=i.stateNode,vs(),kt(bn),kt(mn),Pc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(au(ri),ri=null))),$c(t,i),_n(i),null;case 5:Rc(i);var u=Fr(Ma.current);if(a=i.type,t!==null&&i.stateNode!=null)$h(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Fr(_i.current),Ao(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[gi]=i,l[_a]=h,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(u=0;u<pa.length;u++)Ot(pa[u],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":Rt(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":b(l,h),Ot("invalid",l)}qe(a,h),u=null;for(var E in h)if(h.hasOwnProperty(E)){var N=h[E];E==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&vo(l.textContent,N,t),u=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&vo(l.textContent,N,t),u=["children",""+N]):o.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ot("scroll",l)}switch(a){case"input":pt(l),B(l,h,!0);break;case"textarea":pt(l),W(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=xo)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[gi]=i,t[_a]=l,Yh(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ce(a,l),a){case"dialog":Ot("cancel",t),Ot("close",t),u=l;break;case"iframe":case"object":case"embed":Ot("load",t),u=l;break;case"video":case"audio":for(u=0;u<pa.length;u++)Ot(pa[u],t);u=l;break;case"source":Ot("error",t),u=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),u=l;break;case"details":Ot("toggle",t),u=l;break;case"input":Rt(t,l),u=vt(t,l),Ot("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=K({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":b(t,l),u=je(t,l),Ot("invalid",t);break;default:u=l}qe(a,u),N=u;for(h in N)if(N.hasOwnProperty(h)){var k=N[h];h==="style"?be(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&$e(t,k)):h==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Te(t,k):typeof k=="number"&&Te(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Ot("scroll",t):k!=null&&I(t,h,k,E))}switch(a){case"input":pt(t),B(t,l,!1);break;case"textarea":pt(t),W(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?xt(t,!!l.multiple,h,!1):l.defaultValue!=null&&xt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=xo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)Kh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Fr(Ma.current),Fr(_i.current),Ao(i)){if(l=i.stateNode,a=i.memoizedProps,l[gi]=i,(h=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:vo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return _n(i),null;case 13:if(kt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Jd(),ps(),i.flags|=98560,h=!1;else if(h=Ao(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[gi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),h=!1}else ri!==null&&(au(ri),ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?tn===0&&(tn=3):cu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return vs(),$c(t,i),t===null&&ma(i.stateNode.containerInfo),_n(i),null;case 10:return Ec(i.type._context),_n(i),null;case 17:return Pn(i.type)&&yo(),_n(i),null;case 19:if(kt(Gt),h=i.memoizedState,h===null)return _n(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ca(h,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=No(t),E!==null){for(i.flags|=128,Ca(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ft(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ht()>Ms&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304)}else{if(!l)if(t=No(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Vt)return _n(i),null}else 2*Ht()-h.renderingStartTime>Ms&&a!==1073741824&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ht(),i.sibling=null,a=Gt.current,Ft(Gt,l?a&1|2:a&1),i):(_n(i),null);case 22:case 23:return lu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function y0(t,i){switch(_c(i),i.tag){case 1:return Pn(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),kt(bn),kt(mn),Pc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Rc(i),null;case 13:if(kt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Gt),null;case 4:return vs(),null;case 10:return Ec(i.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var Vo=!1,vn=!1,M0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ss(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){jt(t,i,l)}else a.current=null}function Kc(t,i,a){try{a()}catch(l){jt(t,i,l)}}var Zh=!1;function E0(t,i){if(lc=ao,t=bd(),ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,N=-1,k=-1,re=0,_e=0,xe=t,ge=null;t:for(;;){for(var Fe;xe!==a||u!==0&&xe.nodeType!==3||(N=E+u),xe!==h||l!==0&&xe.nodeType!==3||(k=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Fe=xe.firstChild)!==null;)ge=xe,xe=Fe;for(;;){if(xe===t)break t;if(ge===a&&++re===u&&(N=E),ge===h&&++_e===l&&(k=E),(Fe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Fe}a=N===-1||k===-1?null:{start:N,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(cc={focusedElem:t,selectionRange:a},ao=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,Yt=Xe.memoizedState,Z=i.stateNode,G=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:si(i.type,Ye),Yt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){jt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return Xe=Zh,Zh=!1,Xe}function Ra(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Kc(i,a,h)}u=u.next}while(u!==l)}}function Ho(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Zc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Qh(t){var i=t.alternate;i!==null&&(t.alternate=null,Qh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[_a],delete i[hc],delete i[s0],delete i[a0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jh(t){return t.tag===5||t.tag===3||t.tag===4}function ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=xo));else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,a),t=t.sibling;t!==null;)Qc(t,i,a),t=t.sibling}function Jc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,a),t=t.sibling;t!==null;)Jc(t,i,a),t=t.sibling}var fn=null,ai=!1;function ur(t,i,a){for(a=a.child;a!==null;)tp(t,i,a),a=a.sibling}function tp(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ue,a)}catch{}switch(a.tag){case 5:vn||Ss(a,i);case 6:var l=fn,u=ai;fn=null,ur(t,i,a),fn=l,ai=u,fn!==null&&(ai?(t=fn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(ai?(t=fn,a=a.stateNode,t.nodeType===8?dc(t.parentNode,a):t.nodeType===1&&dc(t,a),aa(t)):dc(fn,a.stateNode));break;case 4:l=fn,u=ai,fn=a.stateNode.containerInfo,ai=!0,ur(t,i,a),fn=l,ai=u;break;case 0:case 11:case 14:case 15:if(!vn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Kc(a,i,E),u=u.next}while(u!==l)}ur(t,i,a);break;case 1:if(!vn&&(Ss(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(N){jt(a,i,N)}ur(t,i,a);break;case 21:ur(t,i,a);break;case 22:a.mode&1?(vn=(l=vn)||a.memoizedState!==null,ur(t,i,a),vn=l):ur(t,i,a);break;default:ur(t,i,a)}}function np(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new M0),i.forEach(function(l){var u=N0.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function oi(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var h=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:fn=N.stateNode,ai=!1;break e;case 3:fn=N.stateNode.containerInfo,ai=!0;break e;case 4:fn=N.stateNode.containerInfo,ai=!0;break e}N=N.return}if(fn===null)throw Error(n(160));tp(h,E,u),fn=null,ai=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(re){jt(u,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ip(i,t),i=i.sibling}function ip(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),xi(t),l&4){try{Ra(3,t,t.return),Ho(3,t)}catch(Ye){jt(t,t.return,Ye)}try{Ra(5,t,t.return)}catch(Ye){jt(t,t.return,Ye)}}break;case 1:oi(i,t),xi(t),l&512&&a!==null&&Ss(a,a.return);break;case 5:if(oi(i,t),xi(t),l&512&&a!==null&&Ss(a,a.return),t.flags&32){var u=t.stateNode;try{Te(u,"")}catch(Ye){jt(t,t.return,Ye)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,N=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&lt(u,h),Ce(N,E);var re=Ce(N,h);for(E=0;E<k.length;E+=2){var _e=k[E],xe=k[E+1];_e==="style"?be(u,xe):_e==="dangerouslySetInnerHTML"?$e(u,xe):_e==="children"?Te(u,xe):I(u,_e,xe,re)}switch(N){case"input":Bt(u,h);break;case"textarea":y(u,h);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Fe=h.value;Fe!=null?xt(u,!!h.multiple,Fe,!1):ge!==!!h.multiple&&(h.defaultValue!=null?xt(u,!!h.multiple,h.defaultValue,!0):xt(u,!!h.multiple,h.multiple?[]:"",!1))}u[_a]=h}catch(Ye){jt(t,t.return,Ye)}}break;case 6:if(oi(i,t),xi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Ye){jt(t,t.return,Ye)}}break;case 3:if(oi(i,t),xi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{aa(i.containerInfo)}catch(Ye){jt(t,t.return,Ye)}break;case 4:oi(i,t),xi(t);break;case 13:oi(i,t),xi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(nu=Ht())),l&4&&np(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(vn=(re=vn)||_e,oi(i,t),vn=re):oi(i,t),xi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!_e&&(t.mode&1)!==0)for(ze=t,_e=t.child;_e!==null;){for(xe=ze=_e;ze!==null;){switch(ge=ze,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ra(4,ge,ge.return);break;case 1:Ss(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){jt(l,a,Ye)}}break;case 5:Ss(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ap(xe);continue}}Fe!==null?(Fe.return=ge,ze=Fe):ap(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{u=xe.stateNode,re?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=xe.stateNode,k=xe.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Se("display",E))}catch(Ye){jt(t,t.return,Ye)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=re?"":xe.memoizedProps}catch(Ye){jt(t,t.return,Ye)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:oi(i,t),xi(t),l&4&&np(t);break;case 21:break;default:oi(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Jh(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Te(u,""),l.flags&=-33);var h=ep(t);Jc(t,h,u);break;case 3:case 4:var E=l.stateNode.containerInfo,N=ep(t);Qc(t,N,E);break;default:throw Error(n(161))}}catch(k){jt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function T0(t,i,a){ze=t,rp(t)}function rp(t,i,a){for(var l=(t.mode&1)!==0;ze!==null;){var u=ze,h=u.child;if(u.tag===22&&l){var E=u.memoizedState!==null||Vo;if(!E){var N=u.alternate,k=N!==null&&N.memoizedState!==null||vn;N=Vo;var re=vn;if(Vo=E,(vn=k)&&!re)for(ze=u;ze!==null;)E=ze,k=E.child,E.tag===22&&E.memoizedState!==null?op(u):k!==null?(k.return=E,ze=k):op(u);for(;h!==null;)ze=h,rp(h),h=h.sibling;ze=u,Vo=N,vn=re}sp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,ze=h):sp(t)}}function sp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Ho(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!vn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ah(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ah(i,E,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&aa(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&Zc(i)}catch(ge){jt(i,i.return,ge)}}if(i===t){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function ap(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function op(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(k){jt(i,a,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(k){jt(i,u,k)}}var h=i.return;try{Zc(i)}catch(k){jt(i,h,k)}break;case 5:var E=i.return;try{Zc(i)}catch(k){jt(i,E,k)}}}catch(k){jt(i,i.return,k)}if(i===t){ze=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ze=N;break}ze=i.return}}var w0=Math.ceil,Go=P.ReactCurrentDispatcher,eu=P.ReactCurrentOwner,Kn=P.ReactCurrentBatchConfig,Mt=0,ln=null,Kt=null,dn=0,zn=0,ys=sr(0),tn=0,ba=null,kr=0,Wo=0,tu=0,Pa=null,Nn=null,nu=0,Ms=1/0,Fi=null,Xo=!1,iu=null,fr=null,jo=!1,dr=null,qo=0,La=0,ru=null,Yo=-1,$o=0;function wn(){return(Mt&6)!==0?Ht():Yo!==-1?Yo:Yo=Ht()}function hr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&dn!==0?dn&-dn:l0.transition!==null?($o===0&&($o=pn()),$o):(t=at,t!==0||(t=window.event,t=t===void 0?16:cd(t.type)),t)}function li(t,i,a,l){if(50<La)throw La=0,ru=null,Error(n(185));Jt(t,a,l),((Mt&2)===0||t!==ln)&&(t===ln&&((Mt&2)===0&&(Wo|=a),tn===4&&pr(t,dn)),Dn(t,l),a===1&&Mt===0&&(i.mode&1)===0&&(Ms=Ht()+500,Eo&&or()))}function Dn(t,i){var a=t.callbackNode;Ct(t,i);var l=Tt(t,t===ln?dn:0);if(l===0)a!==null&&io(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&io(a),i===1)t.tag===0?o0(cp.bind(null,t)):Yd(cp.bind(null,t)),i0(function(){(Mt&6)===0&&or()}),a=null;else{switch(En(l)){case 1:a=X;break;case 4:a=se;break;case 16:a=ie;break;case 536870912:a=Pe;break;default:a=ie}a=_p(a,lp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function lp(t,i){if(Yo=-1,$o=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Es()&&t.callbackNode!==a)return null;var l=Tt(t,t===ln?dn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ko(t,l);else{i=l;var u=Mt;Mt|=2;var h=fp();(ln!==t||dn!==i)&&(Fi=null,Ms=Ht()+500,zr(t,i));do try{R0();break}catch(N){up(t,N)}while(!0);Mc(),Go.current=h,Mt=u,Kt!==null?i=0:(ln=null,dn=0,i=tn)}if(i!==0){if(i===2&&(u=gt(t),u!==0&&(l=u,i=su(t,u))),i===1)throw a=ba,zr(t,0),pr(t,l),Dn(t,Ht()),a;if(i===6)pr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!A0(u)&&(i=Ko(t,l),i===2&&(h=gt(t),h!==0&&(l=h,i=su(t,h))),i===1))throw a=ba,zr(t,0),pr(t,l),Dn(t,Ht()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Vr(t,Nn,Fi);break;case 3:if(pr(t,l),(l&130023424)===l&&(i=nu+500-Ht(),10<i)){if(Tt(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=fc(Vr.bind(null,t,Nn,Fi),i);break}Vr(t,Nn,Fi);break;case 4:if(pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>u&&(u=E),l&=~h}if(l=u,l=Ht()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*w0(l/1960))-l,10<l){t.timeoutHandle=fc(Vr.bind(null,t,Nn,Fi),l);break}Vr(t,Nn,Fi);break;case 5:Vr(t,Nn,Fi);break;default:throw Error(n(329))}}}return Dn(t,Ht()),t.callbackNode===a?lp.bind(null,t):null}function su(t,i){var a=Pa;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=Nn,Nn=a,i!==null&&au(i)),t}function au(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function A0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],h=u.getSnapshot;u=u.value;try{if(!ii(h(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i){for(i&=~tu,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Oe(i),l=1<<a;t[a]=-1,i&=~l}}function cp(t){if((Mt&6)!==0)throw Error(n(327));Es();var i=Tt(t,0);if((i&1)===0)return Dn(t,Ht()),null;var a=Ko(t,i);if(t.tag!==0&&a===2){var l=gt(t);l!==0&&(i=l,a=su(t,l))}if(a===1)throw a=ba,zr(t,0),pr(t,i),Dn(t,Ht()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Vr(t,Nn,Fi),Dn(t,Ht()),null}function ou(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(Ms=Ht()+500,Eo&&or())}}function Br(t){dr!==null&&dr.tag===0&&(Mt&6)===0&&Es();var i=Mt;Mt|=1;var a=Kn.transition,l=at;try{if(Kn.transition=null,at=1,t)return t()}finally{at=l,Kn.transition=a,Mt=i,(Mt&6)===0&&or()}}function lu(){zn=ys.current,kt(ys)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,n0(a)),Kt!==null)for(a=Kt.return;a!==null;){var l=a;switch(_c(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&yo();break;case 3:vs(),kt(bn),kt(mn),Pc();break;case 5:Rc(l);break;case 4:vs();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:Ec(l.type._context);break;case 22:case 23:lu()}a=a.return}if(ln=t,Kt=t=mr(t.current,null),dn=zn=i,tn=0,ba=null,tu=Wo=kr=0,Nn=Pa=null,Ur!==null){for(i=0;i<Ur.length;i++)if(a=Ur[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=u,l.next=E}a.pending=l}Ur=null}return t}function up(t,i){do{var a=Kt;try{if(Mc(),Do.current=Oo,Io){for(var l=Wt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Io=!1}if(Or=0,on=en=Wt=null,Ea=!1,Ta=0,eu.current=null,a===null||a.return===null){tn=1,ba=i,Kt=null;break}e:{var h=t,E=a.return,N=a,k=i;if(i=dn,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var re=k,_e=N,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=Uh(E);if(Fe!==null){Fe.flags&=-257,Fh(Fe,E,N,h,i),Fe.mode&1&&Ih(h,re,i),i=Fe,k=re;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else Xe.add(k);break e}else{if((i&1)===0){Ih(h,re,i),cu();break e}k=Error(n(426))}}else if(Vt&&N.mode&1){var Yt=Uh(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Fh(Yt,E,N,h,i),Sc(xs(k,N));break e}}h=k=xs(k,N),tn!==4&&(tn=2),Pa===null?Pa=[h]:Pa.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Nh(h,k,i);sh(h,Z);break e;case 1:N=k;var G=h.type,ee=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(fr===null||!fr.has(ee)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Dh(h,N,i);sh(h,Ee);break e}}h=h.return}while(h!==null)}hp(a)}catch(Ke){i=Ke,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function fp(){var t=Go.current;return Go.current=Oo,t===null?Oo:t}function cu(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(kr&268435455)===0&&(Wo&268435455)===0||pr(ln,dn)}function Ko(t,i){var a=Mt;Mt|=2;var l=fp();(ln!==t||dn!==i)&&(Fi=null,zr(t,i));do try{C0();break}catch(u){up(t,u)}while(!0);if(Mc(),Mt=a,Go.current=l,Kt!==null)throw Error(n(261));return ln=null,dn=0,tn}function C0(){for(;Kt!==null;)dp(Kt)}function R0(){for(;Kt!==null&&!zl();)dp(Kt)}function dp(t){var i=gp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?hp(t):Kt=i,eu.current=null}function hp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=S0(a,i,zn),a!==null){Kt=a;return}}else{if(a=y0(a,i),a!==null){a.flags&=32767,Kt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);tn===0&&(tn=5)}function Vr(t,i,a){var l=at,u=Kn.transition;try{Kn.transition=null,at=1,b0(t,i,a,l)}finally{Kn.transition=u,at=l}return null}function b0(t,i,a,l){do Es();while(dr!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Pr(t,h),t===ln&&(Kt=ln=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||jo||(jo=!0,_p(ie,function(){return Es(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Kn.transition,Kn.transition=null;var E=at;at=1;var N=Mt;Mt|=4,eu.current=null,E0(t,a),ip(a,t),$g(cc),ao=!!lc,cc=lc=null,t.current=a,T0(a),Vl(),Mt=N,at=E,Kn.transition=h}else t.current=a;if(jo&&(jo=!1,dr=t,qo=u),h=t.pendingLanes,h===0&&(fr=null),Ve(a.stateNode),Dn(t,Ht()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Xo)throw Xo=!1,t=iu,iu=null,t;return(qo&1)!==0&&t.tag!==0&&Es(),h=t.pendingLanes,(h&1)!==0?t===ru?La++:(La=0,ru=t):La=0,or(),null}function Es(){if(dr!==null){var t=En(qo),i=Kn.transition,a=at;try{if(Kn.transition=null,at=16>t?16:t,dr===null)var l=!1;else{if(t=dr,dr=null,qo=0,(Mt&6)!==0)throw Error(n(331));var u=Mt;for(Mt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if((ze.flags&16)!==0){var N=h.deletions;if(N!==null){for(var k=0;k<N.length;k++){var re=N[k];for(ze=re;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:Ra(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,ze=xe;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Fe=_e.return;if(Qh(_e),_e===re){ze=null;break}if(ge!==null){ge.return=Fe,ze=ge;break}ze=Fe}}}var Xe=h.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var Yt=Ye.sibling;Ye.sibling=null,Ye=Yt}while(Ye!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ra(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,ze=Z;break e}ze=h.return}}var G=t.current;for(ze=G;ze!==null;){E=ze;var ee=E.child;if((E.subtreeFlags&2064)!==0&&ee!==null)ee.return=E,ze=ee;else e:for(E=G;ze!==null;){if(N=ze,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ho(9,N)}}catch(Ke){jt(N,N.return,Ke)}if(N===E){ze=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,ze=Ee;break e}ze=N.return}}if(Mt=u,or(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ue,t)}catch{}l=!0}return l}finally{at=a,Kn.transition=i}}return!1}function pp(t,i,a){i=xs(a,i),i=Nh(t,i,1),t=cr(t,i,1),i=wn(),t!==null&&(Jt(t,1,i),Dn(t,i))}function jt(t,i,a){if(t.tag===3)pp(t,t,a);else for(;i!==null;){if(i.tag===3){pp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fr===null||!fr.has(l))){t=xs(a,t),t=Dh(i,t,1),i=cr(i,t,1),t=wn(),i!==null&&(Jt(i,1,t),Dn(i,t));break}}i=i.return}}function P0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&a,ln===t&&(dn&a)===a&&(tn===4||tn===3&&(dn&130023424)===dn&&500>Ht()-nu?zr(t,0):tu|=a),Dn(t,i)}function mp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var a=wn();t=Di(t,i),t!==null&&(Jt(t,i,a),Dn(t,a))}function L0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),mp(t,a)}function N0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),mp(t,a)}var gp;gp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,x0(t,i,a);Ln=(t.flags&131072)!==0}else Ln=!1,Vt&&(i.flags&1048576)!==0&&$d(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;zo(t,i),t=i.pendingProps;var u=fs(i,mn.current);_s(i,a),u=Dc(null,i,l,t,u,a);var h=Ic();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(l)?(h=!0,Mo(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ac(i),u.updater=ko,i.stateNode=u,u._reactInternals=i,zc(i,l,t,a),i=Wc(null,i,l,!0,h,a)):(i.tag=0,Vt&&h&&gc(i),Tn(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(zo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=I0(l),t=si(l,t),u){case 0:i=Gc(null,i,l,t,a);break e;case 1:i=Hh(null,i,l,t,a);break e;case 11:i=Oh(null,i,l,t,a);break e;case 14:i=kh(null,i,l,si(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),Gc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),Hh(t,i,l,u,a);case 3:e:{if(Gh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,rh(t,i),Lo(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=xs(Error(n(423)),i),i=Wh(t,i,l,a,u);break e}else if(l!==u){u=xs(Error(n(424)),i),i=Wh(t,i,l,a,u);break e}else for(Bn=rr(i.stateNode.containerInfo.firstChild),kn=i,Vt=!0,ri=null,a=nh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),l===u){i=Ui(t,i,a);break e}Tn(t,i,l,a)}i=i.child}return i;case 5:return oh(i),t===null&&xc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,E=u.children,uc(l,u)?E=null:h!==null&&uc(l,h)&&(i.flags|=32),Vh(t,i),Tn(t,i,E,a),i.child;case 6:return t===null&&xc(i),null;case 13:return Xh(t,i,a);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,a):Tn(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),Oh(t,i,l,u,a);case 7:return Tn(t,i,i.pendingProps,a),i.child;case 8:return Tn(t,i,i.pendingProps.children,a),i.child;case 12:return Tn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,E=u.value,Ft(Ro,l._currentValue),l._currentValue=E,h!==null)if(ii(h.value,E)){if(h.children===u.children&&!bn.current){i=Ui(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){E=h.child;for(var k=N.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=Ii(-1,a&-a),k.tag=2;var re=h.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),re.pending=k}}h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),Tc(h.return,a,i),N.lanes|=a;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,N=E.alternate,N!==null&&(N.lanes|=a),Tc(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Tn(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,_s(i,a),u=Yn(u),l=l(u),i.flags|=1,Tn(t,i,l,a),i.child;case 14:return l=i.type,u=si(l,i.pendingProps),u=si(l.type,u),kh(t,i,l,u,a);case 15:return Bh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),zo(t,i),i.tag=1,Pn(l)?(t=!0,Mo(i)):t=!1,_s(i,a),Ph(i,l,u),zc(i,l,u,a),Wc(null,i,l,!0,t,a);case 19:return qh(t,i,a);case 22:return zh(t,i,a)}throw Error(n(156,i.tag))};function _p(t,i){return no(t,i)}function D0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,a,l){return new D0(t,i,a,l)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function I0(t){if(typeof t=="function")return uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===ce)return 14}return 2}function mr(t,i){var a=t.alternate;return a===null?(a=Zn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Zo(t,i,a,l,u,h){var E=2;if(l=t,typeof t=="function")uu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case F:return Hr(a.children,u,h,i);case Q:E=8,u|=8;break;case A:return t=Zn(12,a,i,u|2),t.elementType=A,t.lanes=h,t;case $:return t=Zn(13,a,i,u),t.elementType=$,t.lanes=h,t;case le:return t=Zn(19,a,i,u),t.elementType=le,t.lanes=h,t;case Y:return Qo(a,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case V:E=9;break e;case q:E=11;break e;case ce:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Zn(E,a,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Hr(t,i,a,l){return t=Zn(7,t,l,i),t.lanes=a,t}function Qo(t,i,a,l){return t=Zn(22,t,l,i),t.elementType=Y,t.lanes=a,t.stateNode={isHidden:!1},t}function fu(t,i,a){return t=Zn(6,t,null,i),t.lanes=a,t}function du(t,i,a){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function U0(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function hu(t,i,a,l,u,h,E,N,k){return t=new U0(t,i,a,N,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Zn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(h),t}function F0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function vp(t){if(!t)return ar;t=t._reactInternals;e:{if(Xn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Pn(a))return jd(t,a,i)}return i}function xp(t,i,a,l,u,h,E,N,k){return t=hu(a,l,!0,t,u,h,E,N,k),t.context=vp(null),a=t.current,l=wn(),u=hr(a),h=Ii(l,u),h.callback=i??null,cr(a,h,u),t.current.lanes=u,Jt(t,u,l),Dn(t,l),t}function Jo(t,i,a,l){var u=i.current,h=wn(),E=hr(u);return a=vp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ii(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=cr(u,i,E),t!==null&&(li(t,u,E,h),Po(t,u,E)),E}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function pu(t,i){Sp(t,i),(t=t.alternate)&&Sp(t,i)}function O0(){return null}var yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}tl.prototype.render=mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Jo(t,i,null,null)},tl.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Br(function(){Jo(null,t,null,null)}),i[bi]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=mi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,t),a===0&&od(t)}};function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function k0(t,i,a,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var re=el(E);h.call(re)}}var E=xp(i,l,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=E,t[bi]=E.current,ma(t.nodeType===8?t.parentNode:t),Br(),E}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var N=l;l=function(){var re=el(k);N.call(re)}}var k=hu(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=k,t[bi]=k.current,ma(t.nodeType===8?t.parentNode:t),Br(function(){Jo(i,k,a,l)}),k}function il(t,i,a,l,u){var h=a._reactRootContainer;if(h){var E=h;if(typeof u=="function"){var N=u;u=function(){var k=el(E);N.call(k)}}Jo(i,E,t,u)}else E=k0(a,i,t,u,l);return el(E)}sn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Dt(i.pendingLanes);a!==0&&(bt(i,a|1),Dn(i,Ht()),(Mt&6)===0&&(Ms=Ht()+500,or()))}break;case 13:Br(function(){var l=Di(t,1);if(l!==null){var u=wn();li(l,t,1,u)}}),pu(t,1)}},an=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var a=wn();li(i,t,134217728,a)}pu(t,134217728)}},ts=function(t){if(t.tag===13){var i=hr(t),a=Di(t,i);if(a!==null){var l=wn();li(a,t,i,l)}pu(t,i)}},mi=function(){return at},sd=function(t,i){var a=at;try{return at=t,i()}finally{at=a}},Le=function(t,i,a){switch(i){case"input":if(Bt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=So(l);if(!u)throw Error(n(90));qt(l),Bt(l,u)}}}break;case"textarea":y(t,a);break;case"select":i=a.value,i!=null&&xt(t,!!a.multiple,i,!1)}},it=ou,Pt=Br;var B0={usingClientEntryPoint:!1,Events:[va,cs,So,pe,Re,ou]},Na={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z0={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ta(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||O0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Ue=rl.inject(z0),we=rl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0,In.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(i))throw Error(n(200));return F0(t,i,null,a)},In.createRoot=function(t,i){if(!gu(t))throw Error(n(299));var a=!1,l="",u=yp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=hu(t,1,!1,null,null,a,!1,l,u),t[bi]=i.current,ma(t.nodeType===8?t.parentNode:t),new mu(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ta(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Br(t)},In.hydrate=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,a)},In.hydrateRoot=function(t,i,a){if(!gu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,h="",E=yp;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=xp(i,null,t,1,a??null,u,!1,h,E),t[bi]=i.current,ma(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new tl(i)},In.render=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,a)},In.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(Br(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1},In.unstable_batchedUpdates=ou,In.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!nl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,a,!1,l)},In.version="18.3.1-next-f1338f8080-20240426",In}var Pp;function $0(){if(Pp)return xu.exports;Pp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xu.exports=Y0(),xu.exports}var Lp;function K0(){if(Lp)return sl;Lp=1;var s=$0();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var Z0=K0();const Q0=bm(Z0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="182",J0=0,Np=1,e_=2,Cl=1,t_=2,za=3,wr=0,Un=1,Hi=2,Wi=0,Bs=1,Dp=2,Ip=3,Up=4,n_=5,Kr=100,i_=101,r_=102,s_=103,a_=104,o_=200,l_=201,c_=202,u_=203,Qu=204,Ju=205,f_=206,d_=207,h_=208,p_=209,m_=210,g_=211,__=212,v_=213,x_=214,ef=0,tf=1,nf=2,Vs=3,rf=4,sf=5,af=6,of=7,Pm=0,S_=1,y_=2,Ti=0,Lm=1,Nm=2,Dm=3,Im=4,Um=5,Fm=6,Om=7,km=300,es=301,Hs=302,lf=303,cf=304,Fl=306,uf=1e3,Gi=1001,ff=1002,hn=1003,M_=1004,al=1005,yn=1006,Mu=1007,Qr=1008,ti=1009,Bm=1010,zm=1011,Xa=1012,Yf=1013,Ci=1014,Mi=1015,qi=1016,$f=1017,Kf=1018,ja=1020,Vm=35902,Hm=35899,Gm=1021,Wm=1022,hi=1023,Yi=1026,Jr=1027,Xm=1028,Zf=1029,Gs=1030,Qf=1031,Jf=1033,Rl=33776,bl=33777,Pl=33778,Ll=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37488,Sf=37489,yf=37490,Mf=37491,Ef=37808,Tf=37809,wf=37810,Af=37811,Cf=37812,Rf=37813,bf=37814,Pf=37815,Lf=37816,Nf=37817,Df=37818,If=37819,Uf=37820,Ff=37821,Of=36492,kf=36494,Bf=36495,zf=36283,Vf=36284,Hf=36285,Gf=36286,E_=3200,T_=0,w_=1,Er="",Jn="srgb",Ws="srgb-linear",Dl="linear",Lt="srgb",Ts=7680,Fp=519,A_=512,C_=513,R_=514,ed=515,b_=516,P_=517,td=518,L_=519,Op=35044,kp="300 es",Ei=2e3,Il=2001;function jm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N_(){const s=Ul("canvas");return s.style.display="block",s}const Bp={};function zp(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function At(...s){const e="THREE."+s.shift();console.error(e,...s)}function qa(...s){const e=s.join(" ");e in Bp||(Bp[e]=!0,st(...s))}function D_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vp=1234567;const Ha=Math.PI/180,Ya=180/Math.PI;function Ys(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function nd(s,e){return(s%e+e)%e}function I_(s,e,n,r,o){return r+(s-e)*(o-r)/(n-e)}function U_(s,e,n){return s!==e?(n-s)/(e-s):0}function Ga(s,e,n){return(1-n)*s+n*e}function F_(s,e,n,r){return Ga(s,e,1-Math.exp(-n*r))}function O_(s,e=1){return e-Math.abs(nd(s,e*2)-e)}function k_(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function B_(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function z_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function V_(s,e){return s+Math.random()*(e-s)}function H_(s){return s*(.5-Math.random())}function G_(s){s!==void 0&&(Vp=s);let e=Vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W_(s){return s*Ha}function X_(s){return s*Ya}function j_(s){return(s&s-1)===0&&s!==0}function q_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Y_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $_(s,e,n,r,o){const c=Math.cos,d=Math.sin,f=c(n/2),p=d(n/2),m=c((e+r)/2),g=d((e+r)/2),_=c((e-r)/2),x=d((e-r)/2),M=c((r-e)/2),T=d((r-e)/2);switch(o){case"XYX":s.set(f*g,p*_,p*x,f*m);break;case"YZY":s.set(p*x,f*g,p*_,f*m);break;case"ZXZ":s.set(p*_,p*x,f*g,f*m);break;case"XZX":s.set(f*g,p*T,p*M,f*m);break;case"YXY":s.set(p*M,f*g,p*T,f*m);break;case"ZYZ":s.set(p*T,p*M,f*g,f*m);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ks(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Hp={DEG2RAD:Ha,RAD2DEG:Ya,generateUUID:Ys,clamp:_t,euclideanModulo:nd,mapLinear:I_,inverseLerp:U_,lerp:Ga,damp:F_,pingpong:O_,smoothstep:k_,smootherstep:B_,randInt:z_,randFloat:V_,randFloatSpread:H_,seededRandom:G_,degToRad:W_,radToDeg:X_,isPowerOfTwo:j_,ceilPowerOfTwo:q_,floorPowerOfTwo:Y_,setQuaternionFromProperEuler:$_,normalize:An,denormalize:ks};class It{constructor(e=0,n=0){It.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3],x=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(f<=0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(f>=1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=C;return}if(_!==C||p!==x||m!==M||g!==T){let S=p*x+m*M+g*T+_*C;S<0&&(x=-x,M=-M,T=-T,C=-C,S=-S);let v=1-f;if(S<.9995){const D=Math.acos(S),I=Math.sin(D);v=Math.sin(v*D)/I,f=Math.sin(f*D)/I,p=p*v+x*f,m=m*v+M*f,g=g*v+T*f,_=_*v+C*f}else{p=p*v+x*f,m=m*v+M*f,g=g*v+T*f,_=_*v+C*f;const D=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=D,m*=D,g*=D,_*=D}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],p=r[o+1],m=r[o+2],g=r[o+3],_=c[d],x=c[d+1],M=c[d+2],T=c[d+3];return e[n]=f*T+g*_+p*M-m*x,e[n+1]=p*T+g*x+m*_-f*M,e[n+2]=m*T+g*M+f*x-p*_,e[n+3]=g*T-f*_-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),g=f(o/2),_=f(c/2),x=p(r/2),M=p(o/2),T=p(c/2);switch(d){case"XYZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"YZX":this._x=x*g*_+m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_-x*M*T;break;case"XZY":this._x=x*g*_-m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_+x*M*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=r+f+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(d-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(g-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(c-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(d-o)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+d*f+o*m-c*p,this._y=o*g+d*p+c*f-r*m,this._z=c*g+d*m+r*p-o*f,this._w=d*g-r*f-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,d=-d,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+d*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+d*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,n=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),g=2*(f*n-c*o),_=2*(c*r-d*n);return this.x=n+p*m+d*_-f*g,this.y=r+p*g+f*m-c*_,this.z=o+p*_+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new ae,Gp=new Ka;class ct{constructor(e,n,r,o,c,d,f,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,m)}set(e,n,r,o,c,d,f,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],M=r[5],T=r[8],C=o[0],S=o[3],v=o[6],D=o[1],I=o[4],P=o[7],U=o[2],O=o[5],F=o[8];return c[0]=d*C+f*D+p*U,c[3]=d*S+f*I+p*O,c[6]=d*v+f*P+p*F,c[1]=m*C+g*D+_*U,c[4]=m*S+g*I+_*O,c[7]=m*v+g*P+_*F,c[2]=x*C+M*D+T*U,c[5]=x*S+M*I+T*O,c[8]=x*v+M*P+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-r*c*g+r*f*p+o*c*m-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],_=g*d-f*m,x=f*p-g*c,M=m*c-d*p,T=n*_+r*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(o*m-g*r)*C,e[2]=(f*r-o*d)*C,e[3]=x*C,e[4]=(g*n-o*p)*C,e[5]=(o*c-f*n)*C,e[6]=M*C,e[7]=(r*p-m*n)*C,e[8]=(d*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new ct,Wp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Lt&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Lt&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Er?Dl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:Dl,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const Et=K_();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class Z_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ws===void 0&&(ws=Ul("canvas")),ws.width=e.width,ws.height=e.height;const o=ws.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ws}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Xi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xi(n[r]/255)*255):n[r]=Xi(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(wu(o[d].image)):c.push(wu(o[d]))}else c=wu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Z_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let J_=0;const Au=new ae;class Rn extends qs{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Gi,o=Gi,c=yn,d=Qr,f=hi,p=ti,m=Rn.DEFAULT_ANISOTROPY,g=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ys(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=km;Rn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],T=p[9],C=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,P=(M+1)/2,U=(v+1)/2,O=(g+x)/4,F=(_+C)/4,Q=(T+S)/4;return I>P&&I>U?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=O/r,c=F/r):P>U?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=O/o,c=Q/o):U<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),r=F/c,o=Q/c),this.set(r,o,c,n),this}let D=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(_-C)/D,this.z=(x-g)/D,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ev extends qs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Rn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new id(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends ev{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class qm extends Rn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tv extends Rn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ci):ci.fromBufferAttribute(c,d),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),ll.subVectors(this.max,Ia),As.subVectors(e.a,Ia),Cs.subVectors(e.b,Ia),Rs.subVectors(e.c,Ia),_r.subVectors(Cs,As),vr.subVectors(Rs,Cs),Gr.subVectors(As,Rs);let n=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Gr.z,Gr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Gr.z,0,-Gr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Gr.y,Gr.x,0];return!Cu(n,As,Cs,Rs,ll)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,As,Cs,Rs,ll))?!1:(cl.crossVectors(_r,vr),n=[cl.x,cl.y,cl.z],Cu(n,As,Cs,Rs,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],ci=new ae,ol=new Za,As=new ae,Cs=new ae,Rs=new ae,_r=new ae,vr=new ae,Gr=new ae,Ia=new ae,ll=new ae,cl=new ae,Wr=new ae;function Cu(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Wr.fromArray(s,c);const f=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),p=e.dot(Wr),m=n.dot(Wr),g=r.dot(Wr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const nv=new Za,Ua=new ae,Ru=new ae;class rd{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):nv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Ru)),this.expandByPoint(Ua.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new ae,bu=new ae,ul=new ae,xr=new ae,Pu=new ae,fl=new ae,Lu=new ae;class iv{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){bu.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(bu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(ul),f=xr.dot(this.direction),p=-xr.dot(ul),m=xr.lengthSq(),g=Math.abs(1-d*d);let _,x,M,T;if(g>0)if(_=d*p-f,x=d*f-p,T=c*g,_>=0)if(x>=-T)if(x<=T){const C=1/g;_*=C,x*=C,M=_*(_+d*x+2*f)+x*(d*_+x+2*p)+m}else x=c,_=Math.max(0,-(d*x+f)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(d*x+f)),M=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-d*c+f)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(d*c+f)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=d>0?-c:c,_=Math.max(0,-(d*x+f)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(bu).addScaledVector(ul,x),M}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),o=ki.dot(ki)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,o,c){Pu.subVectors(n,e),fl.subVectors(r,e),Lu.crossVectors(Pu,fl);let d=this.direction.dot(Lu),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;xr.subVectors(this.origin,e);const p=f*this.direction.dot(fl.crossVectors(xr,fl));if(p<0)return null;const m=f*this.direction.dot(Pu.cross(xr));if(m<0||p+m>d)return null;const g=-f*xr.dot(Lu);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,r,o,c,d,f,p,m,g,_,x,M,T,C,S){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,m,g,_,x,M,T,C,S)}set(e,n,r,o,c,d,f,p,m,g,_,x,M,T,C,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=d,v[9]=f,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=T,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),d=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*g,M=d*_,T=f*g,C=f*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=M+T*m,n[5]=x-C*m,n[9]=-f*p,n[2]=C-x*m,n[6]=T+M*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*g,M=p*_,T=m*g,C=m*_;n[0]=x+C*f,n[4]=T*f-M,n[8]=d*m,n[1]=d*_,n[5]=d*g,n[9]=-f,n[2]=M*f-T,n[6]=C+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*g,M=p*_,T=m*g,C=m*_;n[0]=x-C*f,n[4]=-d*_,n[8]=T+M*f,n[1]=M+T*f,n[5]=d*g,n[9]=C-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*g,M=d*_,T=f*g,C=f*_;n[0]=p*g,n[4]=T*m-M,n[8]=x*m+C,n[1]=p*_,n[5]=C*m+x,n[9]=M*m-T,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*m,T=f*p,C=f*m;n[0]=p*g,n[4]=C-x*_,n[8]=T*_+M,n[1]=_,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=M*_+T,n[10]=x-C*_}else if(e.order==="XZY"){const x=d*p,M=d*m,T=f*p,C=f*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+C,n[5]=d*g,n[9]=M*_-T,n[2]=T*_-M,n[6]=f*g,n[10]=C*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,n,r){const o=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Sr.crossVectors(r,Vn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Sr.crossVectors(r,Vn)),Sr.normalize(),dl.crossVectors(Vn,Sr),o[0]=Sr.x,o[4]=dl.x,o[8]=Vn.x,o[1]=Sr.y,o[5]=dl.y,o[9]=Vn.y,o[2]=Sr.z,o[6]=dl.z,o[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],M=r[13],T=r[2],C=r[6],S=r[10],v=r[14],D=r[3],I=r[7],P=r[11],U=r[15],O=o[0],F=o[4],Q=o[8],A=o[12],R=o[1],V=o[5],q=o[9],$=o[13],le=o[2],ce=o[6],oe=o[10],Y=o[14],j=o[3],fe=o[7],K=o[11],L=o[15];return c[0]=d*O+f*R+p*le+m*j,c[4]=d*F+f*V+p*ce+m*fe,c[8]=d*Q+f*q+p*oe+m*K,c[12]=d*A+f*$+p*Y+m*L,c[1]=g*O+_*R+x*le+M*j,c[5]=g*F+_*V+x*ce+M*fe,c[9]=g*Q+_*q+x*oe+M*K,c[13]=g*A+_*$+x*Y+M*L,c[2]=T*O+C*R+S*le+v*j,c[6]=T*F+C*V+S*ce+v*fe,c[10]=T*Q+C*q+S*oe+v*K,c[14]=T*A+C*$+S*Y+v*L,c[3]=D*O+I*R+P*le+U*j,c[7]=D*F+I*V+P*ce+U*fe,c[11]=D*Q+I*q+P*oe+U*K,c[15]=D*A+I*$+P*Y+U*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],M=e[14],T=e[3],C=e[7],S=e[11],v=e[15],D=p*M-m*x,I=f*M-m*_,P=f*x-p*_,U=d*M-m*g,O=d*x-p*g,F=d*_-f*g;return n*(C*D-S*I+v*P)-r*(T*D-S*U+v*O)+o*(T*I-C*U+v*F)-c*(T*P-C*O+S*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],M=e[11],T=e[12],C=e[13],S=e[14],v=e[15],D=_*S*m-C*x*m+C*p*M-f*S*M-_*p*v+f*x*v,I=T*x*m-g*S*m-T*p*M+d*S*M+g*p*v-d*x*v,P=g*C*m-T*_*m+T*f*M-d*C*M-g*f*v+d*_*v,U=T*_*p-g*C*p-T*f*x+d*C*x+g*f*S-d*_*S,O=n*D+r*I+o*P+c*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=D*F,e[1]=(C*x*c-_*S*c-C*o*M+r*S*M+_*o*v-r*x*v)*F,e[2]=(f*S*c-C*p*c+C*o*m-r*S*m-f*o*v+r*p*v)*F,e[3]=(_*p*c-f*x*c-_*o*m+r*x*m+f*o*M-r*p*M)*F,e[4]=I*F,e[5]=(g*S*c-T*x*c+T*o*M-n*S*M-g*o*v+n*x*v)*F,e[6]=(T*p*c-d*S*c-T*o*m+n*S*m+d*o*v-n*p*v)*F,e[7]=(d*x*c-g*p*c+g*o*m-n*x*m-d*o*M+n*p*M)*F,e[8]=P*F,e[9]=(T*_*c-g*C*c-T*r*M+n*C*M+g*r*v-n*_*v)*F,e[10]=(d*C*c-T*f*c+T*r*m-n*C*m-d*r*v+n*f*v)*F,e[11]=(g*f*c-d*_*c-g*r*m+n*_*m+d*r*M-n*f*M)*F,e[12]=U*F,e[13]=(g*C*o-T*_*o+T*r*x-n*C*x-g*r*S+n*_*S)*F,e[14]=(T*f*o-d*C*o-T*r*p+n*C*p+d*r*S-n*f*S)*F,e[15]=(d*_*o-g*f*o+g*r*p-n*_*p-d*r*x+n*f*x)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,g=c*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,g*f+r,g*p-o*d,0,m*p-o*f,g*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,m=c+c,g=d+d,_=f+f,x=c*m,M=c*g,T=c*_,C=d*g,S=d*_,v=f*_,D=p*m,I=p*g,P=p*_,U=r.x,O=r.y,F=r.z;return o[0]=(1-(C+v))*U,o[1]=(M+P)*U,o[2]=(T-I)*U,o[3]=0,o[4]=(M-P)*O,o[5]=(1-(x+v))*O,o[6]=(S+D)*O,o[7]=0,o[8]=(T+I)*F,o[9]=(S-D)*F,o[10]=(1-(x+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=bs.set(o[0],o[1],o[2]).length();const d=bs.set(o[4],o[5],o[6]).length(),f=bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),ui.copy(this);const m=1/c,g=1/d,_=1/f;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=_,ui.elements[9]*=_,ui.elements[10]*=_,n.setFromRotationMatrix(ui),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Ei,p=!1){const m=this.elements,g=2*c/(n-e),_=2*c/(r-o),x=(n+e)/(n-e),M=(r+o)/(r-o);let T,C;if(p)T=c/(d-c),C=d*c/(d-c);else if(f===Ei)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(f===Il)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Ei,p=!1){const m=this.elements,g=2/(n-e),_=2/(r-o),x=-(n+e)/(n-e),M=-(r+o)/(r-o);let T,C;if(p)T=1/(d-c),C=d/(d-c);else if(f===Ei)T=-2/(d-c),C=-(d+c)/(d-c);else if(f===Il)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new ae,ui=new Qt,rv=new ae(0,0,0),sv=new ae(1,1,1),Sr=new ae,dl=new ae,Vn=new ae,jp=new Qt,qp=new Ka;class $i{constructor(e=0,n=0,r=0,o=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],p=o[1],m=o[5],g=o[9],_=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const Yp=new ae,Ps=new Ka,Bi=new Qt,hl=new ae,Fa=new ae,ov=new ae,lv=new Ka,$p=new ae(1,0,0),Kp=new ae(0,1,0),Zp=new ae(0,0,1),Qp={type:"added"},cv={type:"removed"},Ls={type:"childadded",child:null},Nu={type:"childremoved",child:null};class Wn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ae,n=new $i,r=new Ka,o=new ae(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ct}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Fa,hl,this.up):Bi.lookAt(hl,Fa,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cv),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new ae(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ae,zi=new ae,Du=new ae,Vi=new ae,Ns=new ae,Ds=new ae,Jp=new ae,Iu=new ae,Uu=new ae,Fu=new ae,Ou=new $t,ku=new $t,Bu=new $t;class di{constructor(e=new ae,n=new ae,r=new ae){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),fi.subVectors(e,n),o.cross(fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){fi.subVectors(o,n),zi.subVectors(r,n),Du.subVectors(e,n);const d=fi.dot(fi),f=fi.dot(zi),p=fi.dot(Du),m=zi.dot(zi),g=zi.dot(Du),_=d*m-f*f;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-f*g)*x,T=(d*g-f*p)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,r,o,c,d,f,p){return this.getBarycoord(e,n,r,o,Vi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Vi.x),p.addScaledVector(d,Vi.y),p.addScaledVector(f,Vi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,d){return Ou.setScalar(0),ku.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,r),Bu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Ou,c.x),d.addScaledVector(ku,c.y),d.addScaledVector(Bu,c.z),d}static isFrontFacing(e,n,r,o){return fi.subVectors(r,n),zi.subVectors(e,n),fi.cross(zi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),fi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return di.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Ns.subVectors(o,r),Ds.subVectors(c,r),Iu.subVectors(e,r);const p=Ns.dot(Iu),m=Ds.dot(Iu);if(p<=0&&m<=0)return n.copy(r);Uu.subVectors(e,o);const g=Ns.dot(Uu),_=Ds.dot(Uu);if(g>=0&&_<=g)return n.copy(o);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),n.copy(r).addScaledVector(Ns,d);Fu.subVectors(e,c);const M=Ns.dot(Fu),T=Ds.dot(Fu);if(T>=0&&M<=T)return n.copy(c);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Ds,f);const S=g*T-M*_;if(S<=0&&_-g>=0&&M-T>=0)return Jp.subVectors(c,o),f=(_-g)/(_-g+(M-T)),n.copy(o).addScaledVector(Jp,f);const v=1/(S+C+x);return d=C*v,f=x*v,n.copy(r).addScaledVector(Ns,d).addScaledVector(Ds,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function zu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Nt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=nd(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=zu(d,c,e+1/3),this.g=zu(d,c,e),this.b=zu(d,c,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,n=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=$m[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Et.workingToColorSpace(Sn.copy(this),e),Math.round(_t(Sn.r*255,0,255))*65536+Math.round(_t(Sn.g*255,0,255))*256+Math.round(_t(Sn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(Sn.copy(this),n);const r=Sn.r,o=Sn.g,c=Sn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let p,m;const g=(f+d)/2;if(f===d)p=0,m=0;else{const _=d-f;switch(m=g<=.5?_/(d+f):_/(2-d-f),d){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Jn){Et.workingToColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,o=Sn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(pl);const r=Ga(yr.h,pl.h,n),o=Ga(yr.s,pl.s,n),c=Ga(yr.l,pl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Nt;Nt.NAMES=$m;let uv=0;class Ol extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Bs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qu&&(r.blendSrc=this.blendSrc),this.blendDst!==Ju&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wa extends Ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new ae,ml=new It;let fv=0;class Ai{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Op,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ks(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),o=An(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),o=An(o,this.array),c=An(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}}class Km extends Ai{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Zm extends Ai{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ji extends Ai{constructor(e,n,r){super(new Float32Array(e),n,r)}}let dv=0;const Qn=new Qt,Vu=new Wn,Is=new ae,Hn=new Za,Oa=new Za,un=new ae;class Ki extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jm(e)?Zm:Km)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,r){return Qn.makeTranslation(e,n,r),this.applyMatrix4(Qn),this}scale(e,n,r){return Qn.makeScale(e,n,r),this.applyMatrix4(Qn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ji(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Hn.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Oa.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Hn.min,Oa.min),Hn.expandByPoint(un),un.addVectors(Hn.max,Oa.max),Hn.expandByPoint(un)):(Hn.expandByPoint(Oa.min),Hn.expandByPoint(Oa.max))}Hn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)un.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(un));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)un.fromBufferAttribute(f,m),p&&(Is.fromBufferAttribute(e,m),un.add(Is)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let Q=0;Q<r.count;Q++)f[Q]=new ae,p[Q]=new ae;const m=new ae,g=new ae,_=new ae,x=new It,M=new It,T=new It,C=new ae,S=new ae;function v(Q,A,R){m.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,A),T.fromBufferAttribute(c,R),g.sub(m),_.sub(m),M.sub(x),T.sub(x);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(V),f[Q].add(C),f[A].add(C),f[R].add(C),p[Q].add(S),p[A].add(S),p[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Q=0,A=D.length;Q<A;++Q){const R=D[Q],V=R.start,q=R.count;for(let $=V,le=V+q;$<le;$+=3)v(e.getX($+0),e.getX($+1),e.getX($+2))}const I=new ae,P=new ae,U=new ae,O=new ae;function F(Q){U.fromBufferAttribute(o,Q),O.copy(U);const A=f[Q];I.copy(A),I.sub(U.multiplyScalar(U.dot(A))).normalize(),P.crossVectors(O,A);const V=P.dot(p[Q])<0?-1:1;d.setXYZW(Q,I.x,I.y,I.z,V)}for(let Q=0,A=D.length;Q<A;++Q){const R=D[Q],V=R.start,q=R.count;for(let $=V,le=V+q;$<le;$+=3)F(e.getX($+0)),F(e.getX($+1)),F(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ae,c=new ae,d=new ae,f=new ae,p=new ae,m=new ae,g=new ae,_=new ae;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),g.subVectors(d,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),f.add(g),p.add(g),m.add(g),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),g.subVectors(d,c),_.subVectors(o,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(f,p){const m=f.array,g=f.itemSize,_=f.normalized,x=new m.constructor(p.length*g);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){f.isInterleavedBufferAttribute?M=p[C]*f.data.stride+f.offset:M=p[C]*g;for(let v=0;v<g;v++)x[T++]=m[M++]}return new Ai(x,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ki,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=e(x,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Qt,Xr=new iv,gl=new rd,tm=new ae,_l=new ae,vl=new ae,xl=new ae,Hu=new ae,Sl=new ae,nm=new ae,yl=new ae;class Gn extends Wn{constructor(e=new Ki,n=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){Sl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=f[p],_=c[p];g!==0&&(Hu.fromBufferAttribute(_,e),d?Sl.addScaledVector(Hu,g):Sl.addScaledVector(Hu.sub(n),g))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(c),Xr.copy(e.ray).recast(e.near),!(gl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(gl,tm)===null||Xr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(c).invert(),Xr.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=d[S.materialIndex],D=Math.max(S.start,M.start),I=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let P=D,U=I;P<U;P+=3){const O=f.getX(P),F=f.getX(P+1),Q=f.getX(P+2);o=Ml(this,v,e,r,m,g,_,O,F,Q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let S=T,v=C;S<v;S+=3){const D=f.getX(S),I=f.getX(S+1),P=f.getX(S+2);o=Ml(this,d,e,r,m,g,_,D,I,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=d[S.materialIndex],D=Math.max(S.start,M.start),I=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let P=D,U=I;P<U;P+=3){const O=P,F=P+1,Q=P+2;o=Ml(this,v,e,r,m,g,_,O,F,Q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,v=C;S<v;S+=3){const D=S,I=S+1,P=S+2;o=Ml(this,d,e,r,m,g,_,D,I,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function hv(s,e,n,r,o,c,d,f){let p;if(e.side===Un?p=r.intersectTriangle(d,c,o,!0,f):p=r.intersectTriangle(o,c,d,e.side===wr,f),p===null)return null;yl.copy(f),yl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(yl);return m<n.near||m>n.far?null:{distance:m,point:yl.clone(),object:s}}function Ml(s,e,n,r,o,c,d,f,p,m){s.getVertexPosition(f,_l),s.getVertexPosition(p,vl),s.getVertexPosition(m,xl);const g=hv(s,e,n,r,_l,vl,xl,nm);if(g){const _=new ae;di.getBarycoord(nm,_l,vl,xl,_),o&&(g.uv=di.getInterpolatedAttribute(o,f,p,m,_,new It)),c&&(g.uv1=di.getInterpolatedAttribute(c,f,p,m,_,new It)),d&&(g.normal=di.getInterpolatedAttribute(d,f,p,m,_,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new ae,materialIndex:0};di.getNormal(_l,vl,xl,x.normal),g.face=x,g.barycoord=_}return g}class $s extends Ki{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,d,c,0),T("z","y","x",1,-1,r,n,-e,d,c,1),T("x","z","y",1,1,e,r,n,o,d,2),T("x","z","y",1,-1,e,r,-n,o,d,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ji(m,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(_,2));function T(C,S,v,D,I,P,U,O,F,Q,A){const R=P/F,V=U/Q,q=P/2,$=U/2,le=O/2,ce=F+1,oe=Q+1;let Y=0,j=0;const fe=new ae;for(let K=0;K<oe;K++){const L=K*V-$;for(let te=0;te<ce;te++){const Ae=te*R-q;fe[C]=Ae*D,fe[S]=L*I,fe[v]=le,m.push(fe.x,fe.y,fe.z),fe[C]=0,fe[S]=0,fe[v]=O>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(te/F),_.push(1-K/Q),Y+=1}}for(let K=0;K<Q;K++)for(let L=0;L<F;L++){const te=x+L+ce*K,Ae=x+L+ce*(K+1),He=x+(L+1)+ce*(K+1),Ge=x+(L+1)+ce*K;p.push(te,Ae,Ge),p.push(Ae,He,Ge),j+=6}f.addGroup(M,j,A),M+=j,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Cn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const o in r)e[o]=r[o]}return e}function pv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Qm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const mv={clone:Xs,merge:Cn};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gv,this.fragmentShader=_v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Jm extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new ae,im=new It,rm=new It;class ei extends Jm{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ha*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,n-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class vv extends Wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(Us,Fs,e,n);o.layers=this.layers,this.add(o);const c=new ei(Us,Fs,e,n);c.layers=this.layers,this.add(c);const d=new ei(Us,Fs,e,n);d.layers=this.layers,this.add(d);const f=new ei(Us,Fs,e,n);f.layers=this.layers,this.add(f);const p=new ei(Us,Fs,e,n);p.layers=this.layers,this.add(p);const m=new ei(Us,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,p]=n;for(const m of n)this.remove(m);if(e===Ei)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class eg extends Rn{constructor(e=[],n=es,r,o,c,d,f,p,m,g){super(e,n,r,o,c,d,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tg extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new eg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new $s(5,5,5),c=new Ri({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Wi});c.uniforms.tEquirect.value=n;const d=new Gn(o,c),f=n.minFilter;return n.minFilter===Qr&&(n.minFilter=yn),new vv(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}class El extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xv={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),v=this._getHandJoint(m,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Sv extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yv extends Rn{constructor(e=null,n=1,r=1,o,c,d,f,p,m=hn,g=hn,_,x){super(null,d,f,p,m,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wu=new ae,Mv=new ae,Ev=new ct;class $r{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Wu.subVectors(r,n).cross(Mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Ev.getNormalMatrix(e),o=this.coplanarPoint(Wu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new rd,Tv=new It(.5,.5),Tl=new ae;class ng{constructor(e=new $r,n=new $r,r=new $r,o=new $r,c=new $r,d=new $r){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ei,r=!1){const o=this.planes,c=e.elements,d=c[0],f=c[1],p=c[2],m=c[3],g=c[4],_=c[5],x=c[6],M=c[7],T=c[8],C=c[9],S=c[10],v=c[11],D=c[12],I=c[13],P=c[14],U=c[15];if(o[0].setComponents(m-d,M-g,v-T,U-D).normalize(),o[1].setComponents(m+d,M+g,v+T,U+D).normalize(),o[2].setComponents(m+f,M+_,v+C,U+I).normalize(),o[3].setComponents(m-f,M-_,v-C,U-I).normalize(),r)o[4].setComponents(p,x,S,P).normalize(),o[5].setComponents(m-p,M-x,v-S,U-P).normalize();else if(o[4].setComponents(m-p,M-x,v-S,U-P).normalize(),n===Ei)o[5].setComponents(m+p,M+x,v+S,U+P).normalize();else if(n===Il)o[5].setComponents(p,x,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const n=Tv.distanceTo(e.center);return jr.radius=.7071067811865476+n,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $a extends Rn{constructor(e,n,r=Ci,o,c,d,f=hn,p=hn,m,g=Yi,_=1){if(g!==Yi&&g!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,d,f,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class wv extends $a{constructor(e,n=Ci,r=es,o,c,d=hn,f=hn,p,m=Yi){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,c,d,f,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ig extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class js extends Ki{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,g=p+1,_=e/f,x=n/p,M=[],T=[],C=[],S=[];for(let v=0;v<g;v++){const D=v*x-d;for(let I=0;I<m;I++){const P=I*_-c;T.push(P,-D,0),C.push(0,0,1),S.push(I/f),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let D=0;D<f;D++){const I=D+m*v,P=D+m*(v+1),U=D+1+m*(v+1),O=D+1+m*v;M.push(I,P,O),M.push(P,U,O)}this.setIndex(M),this.setAttribute("position",new ji(T,3)),this.setAttribute("normal",new ji(C,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}class Av extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cv extends Ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rv extends Ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rg extends Jm{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class bv extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sm(s,e,n,r){const o=Pv(r);switch(n){case Gm:return s*e;case Xm:return s*e/o.components*o.byteLength;case Zf:return s*e/o.components*o.byteLength;case Gs:return s*e*2/o.components*o.byteLength;case Qf:return s*e*2/o.components*o.byteLength;case Wm:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case Jf:return s*e*4/o.components*o.byteLength;case Rl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(s,16)*Math.max(e,8)/4;case df:case pf:return Math.max(s,8)*Math.max(e,8)/2;case gf:case _f:case xf:case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vf:case yf:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Of:case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Pv(s){switch(s){case ti:case Bm:return{byteLength:1,components:1};case Xa:case zm:case qi:return{byteLength:2,components:1};case $f:case Kf:return{byteLength:2,components:4};case Ci:case Yf:case Mi:return{byteLength:4,components:1};case Vm:case Hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Lv(s){const e=new WeakMap;function n(f,p){const m=f.array,g=f.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:c,update:d}}var Nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
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
#endif`,Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kv=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
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
#endif`,Vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xv=`#ifdef USE_IRIDESCENCE
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
#endif`,jv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tx=`#define PI 3.141592653589793
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
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ix=`vec3 transformedNormal = objectNormal;
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
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
}`,Sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#endif`,Tx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Px=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lx=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vx=`#if defined( USE_POINTS_UV )
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
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
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
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ES=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
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
}`,kS=`#if DEPTH_PACKING == 3200
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
}`,BS=`#define DISTANCE
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
}`,zS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
}`,qS=`#define LAMBERT
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
}`,YS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,$S=`#define MATCAP
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
}`,KS=`#define MATCAP
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
}`,ZS=`#define NORMAL
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
}`,QS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JS=`#define PHONG
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
}`,ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,ty=`#define STANDARD
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
}`,ny=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,iy=`#define TOON
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
}`,ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,sy=`uniform float size;
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
}`,ay=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ly=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,cy=`uniform float rotation;
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
}`,uy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Nv,alphahash_pars_fragment:Dv,alphamap_fragment:Iv,alphamap_pars_fragment:Uv,alphatest_fragment:Fv,alphatest_pars_fragment:Ov,aomap_fragment:kv,aomap_pars_fragment:Bv,batching_pars_vertex:zv,batching_vertex:Vv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Wv,iridescence_fragment:Xv,bumpmap_pars_fragment:jv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:$v,clipping_planes_vertex:Kv,color_fragment:Zv,color_pars_fragment:Qv,color_pars_vertex:Jv,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:rx,displacementmap_vertex:sx,emissivemap_fragment:ax,emissivemap_pars_fragment:ox,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:dx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Tx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:_x,fog_pars_fragment:vx,gradientmap_pars_fragment:xx,lightmap_pars_fragment:Sx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:Mx,lights_pars_begin:Ex,lights_toon_fragment:wx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Cx,lights_phong_pars_fragment:Rx,lights_physical_fragment:bx,lights_physical_pars_fragment:Px,lights_fragment_begin:Lx,lights_fragment_maps:Nx,lights_fragment_end:Dx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Ox,map_fragment:kx,map_pars_fragment:Bx,map_particle_fragment:zx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:jx,morphtarget_pars_vertex:qx,morphtarget_vertex:Yx,normal_fragment_begin:$x,normal_fragment_maps:Kx,normal_pars_fragment:Zx,normal_pars_vertex:Qx,normal_vertex:Jx,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:rS,opaque_fragment:sS,packing:aS,premultiplied_alpha_fragment:oS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:uS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:_S,skinning_pars_vertex:vS,skinning_vertex:xS,skinnormal_vertex:SS,specularmap_fragment:yS,specularmap_pars_fragment:MS,tonemapping_fragment:ES,tonemapping_pars_fragment:TS,transmission_fragment:wS,transmission_pars_fragment:AS,uv_pars_fragment:CS,uv_pars_vertex:RS,uv_vertex:bS,worldpos_vertex:PS,background_vert:LS,background_frag:NS,backgroundCube_vert:DS,backgroundCube_frag:IS,cube_vert:US,cube_frag:FS,depth_vert:OS,depth_frag:kS,distance_vert:BS,distance_frag:zS,equirect_vert:VS,equirect_frag:HS,linedashed_vert:GS,linedashed_frag:WS,meshbasic_vert:XS,meshbasic_frag:jS,meshlambert_vert:qS,meshlambert_frag:YS,meshmatcap_vert:$S,meshmatcap_frag:KS,meshnormal_vert:ZS,meshnormal_frag:QS,meshphong_vert:JS,meshphong_frag:ey,meshphysical_vert:ty,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:ry,points_vert:sy,points_frag:ay,shadow_vert:oy,shadow_frag:ly,sprite_vert:cy,sprite_frag:uy},De={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},yi={basic:{uniforms:Cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Cn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Cn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Cn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Cn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Cn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Cn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Cn([De.common,De.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Cn([De.lights,De.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};yi.physical={uniforms:Cn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wl={r:0,b:0,g:0},qr=new $i,fy=new Qt;function dy(s,e,n,r,o,c,d){const f=new Nt(0);let p=c===!0?0:1,m,g,_=null,x=0,M=null;function T(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function C(I){let P=!1;const U=T(I);U===null?v(f,p):U&&U.isColor&&(v(U,1),P=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(I,P){const U=T(P);U&&(U.isCubeTexture||U.mapping===Fl)?(g===void 0&&(g=new Gn(new $s(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Xs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),qr.copy(P.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(fy.makeRotationFromEuler(qr)),g.material.toneMapped=Et.getTransfer(U.colorSpace)!==Lt,(_!==U||x!==U.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=U,x=U.version,M=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Gn(new js(2,2),new Ri({name:"BackgroundMaterial",uniforms:Xs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(U.colorSpace)!==Lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function v(I,P){I.getRGB(wl,Qm(s)),r.buffers.color.setClear(wl.r,wl.g,wl.b,P,d)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,P=1){f.set(I),p=P,v(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,v(f,p)},render:C,addToRenderList:S,dispose:D}}function hy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,d=!1;function f(R,V,q,$,le){let ce=!1;const oe=_($,q,V);c!==oe&&(c=oe,m(c.object)),ce=M(R,$,q,le),ce&&T(R,$,q,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,P(R,V,q,$),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,V,q){const $=q.wireframe===!0;let le=r[R.id];le===void 0&&(le={},r[R.id]=le);let ce=le[V.id];ce===void 0&&(ce={},le[V.id]=ce);let oe=ce[$];return oe===void 0&&(oe=x(p()),ce[$]=oe),oe}function x(R){const V=[],q=[],$=[];for(let le=0;le<n;le++)V[le]=0,q[le]=0,$[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:$,object:R,attributes:{},index:null}}function M(R,V,q,$){const le=c.attributes,ce=V.attributes;let oe=0;const Y=q.getAttributes();for(const j in Y)if(Y[j].location>=0){const K=le[j];let L=ce[j];if(L===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),K===void 0||K.attribute!==L||L&&K.data!==L.data)return!0;oe++}return c.attributesNum!==oe||c.index!==$}function T(R,V,q,$){const le={},ce=V.attributes;let oe=0;const Y=q.getAttributes();for(const j in Y)if(Y[j].location>=0){let K=ce[j];K===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));const L={};L.attribute=K,K&&K.data&&(L.data=K.data),le[j]=L,oe++}c.attributes=le,c.attributesNum=oe,c.index=$}function C(){const R=c.newAttributes;for(let V=0,q=R.length;V<q;V++)R[V]=0}function S(R){v(R,0)}function v(R,V){const q=c.newAttributes,$=c.enabledAttributes,le=c.attributeDivisors;q[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),le[R]!==V&&(s.vertexAttribDivisor(R,V),le[R]=V)}function D(){const R=c.newAttributes,V=c.enabledAttributes;for(let q=0,$=V.length;q<$;q++)V[q]!==R[q]&&(s.disableVertexAttribArray(q),V[q]=0)}function I(R,V,q,$,le,ce,oe){oe===!0?s.vertexAttribIPointer(R,V,q,le,ce):s.vertexAttribPointer(R,V,q,$,le,ce)}function P(R,V,q,$){C();const le=$.attributes,ce=q.getAttributes(),oe=V.defaultAttributeValues;for(const Y in ce){const j=ce[Y];if(j.location>=0){let fe=le[Y];if(fe===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const K=fe.normalized,L=fe.itemSize,te=e.get(fe);if(te===void 0)continue;const Ae=te.buffer,He=te.type,Ge=te.bytesPerElement,ne=He===s.INT||He===s.UNSIGNED_INT||fe.gpuType===Yf;if(fe.isInterleavedBufferAttribute){const de=fe.data,ye=de.stride,ke=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<j.locationSize;Ie++)v(j.location+Ie,de.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<j.locationSize;Ie++)S(j.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Ie=0;Ie<j.locationSize;Ie++)I(j.location+Ie,L/j.locationSize,He,K,ye*Ge,(ke+L/j.locationSize*Ie)*Ge,ne)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)v(j.location+de,fe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<j.locationSize;de++)S(j.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let de=0;de<j.locationSize;de++)I(j.location+de,L/j.locationSize,He,K,L*Ge,L/j.locationSize*de*Ge,ne)}}else if(oe!==void 0){const K=oe[Y];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(j.location,K);break;case 3:s.vertexAttrib3fv(j.location,K);break;case 4:s.vertexAttrib4fv(j.location,K);break;default:s.vertexAttrib1fv(j.location,K)}}}}D()}function U(){Q();for(const R in r){const V=r[R];for(const q in V){const $=V[q];for(const le in $)g($[le].object),delete $[le];delete V[q]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const q in V){const $=V[q];for(const le in $)g($[le].object),delete $[le];delete V[q]}delete r[R.id]}function F(R){for(const V in r){const q=r[V];if(q[R.id]===void 0)continue;const $=q[R.id];for(const le in $)g($[le].object),delete $[le];delete q[R.id]}}function Q(){A(),d=!0,c!==o&&(c=o,m(c.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:D}}function py(s,e,n){let r;function o(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function d(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),n.update(g,r,_))}function f(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];n.update(M,r,1)}function p(m,g,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let T=0;for(let C=0;C<_;C++)T+=g[C]*x[C];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function my(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(F){return!(F!==hi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const Q=F===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ti&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Mi&&!Q)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(st("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:P,maxSamples:U,samples:O}}function gy(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new $r,f=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||o;return o=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!o||T===null||T.length===0||c&&!S)c?g(null):m();else{const D=c?0:r,I=D*4;let P=v.clippingState||null;p.value=P,P=g(T,x,I,M);for(let U=0;U!==I;++U)P[U]=n[U];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,M,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const v=M+C*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let I=0,P=M;I!==C;++I,P+=4)d.copy(_[I]).applyMatrix4(D,f),d.normal.toArray(S,P),S[P+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function _y(s){let e=new WeakMap;function n(d,f){return f===lf?d.mapping=es:f===cf&&(d.mapping=Hs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===lf||f===cf)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new tg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),n(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Tr=4,am=[.125,.215,.35,.446,.526,.582],Zr=20,vy=256,ka=new rg,om=new Nt;let Xu=null,ju=0,qu=0,Yu=!1;const xy=new ae;class lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:d=256,position:f=xy}=c;Xu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,ju,qu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:qi,format:hi,colorSpace:Ws,depthBuffer:!1},o=cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sy(c)),this._blurMaterial=My(c,e,n),this._ggxMaterial=yy(c,e,n)}return o}_compileMaterial(e){const n=new Gn(new Ki,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,r,o,c){const p=new ei(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(om),_.toneMapping=Ti,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gn(new $s,new Wa({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let v=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,v=!0):(S.color.copy(om),v=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[I],c.y,c.z)):P===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[I]));const U=this._cubeSize;Os(o,P*U,I>2?U:0,U,U),_.setRenderTarget(o),v&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=x,e.background=D}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===es||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Os(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),x=0+m*1.25,M=_*x,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-Tr?r-T+Tr:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-n,Os(c,S,v,3*C,2*C),o.setRenderTarget(c),o.render(f,ka),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,Os(e,S,v,3*C,2*C),o.setRenderTarget(e),o.render(f,ka)}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),C=c/T,S=isFinite(c)?1+Math.floor(g*C):Zr;S>Zr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const v=[];let D=0;for(let F=0;F<Zr;++F){const Q=F/C,A=Math.exp(-Q*Q/2);v.push(A),F===0?D+=A:F<S&&(D+=2*A)}for(let F=0;F<v.length;F++)v[F]=v[F]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:I}=this;x.dTheta.value=T,x.mipInt.value=I-r;const P=this._sizeLods[o],U=3*P*(o>I-Tr?o-I+Tr:0),O=4*(this._cubeSize-P);Os(n,U,O,3*P,2*P),p.setRenderTarget(n),p.render(_,ka)}}function Sy(s){const e=[],n=[],r=[];let o=s;const c=s-Tr+1+am.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-Tr?p=am[d-s+Tr-1]:d===0&&(p=0),n.push(p);const m=1/(f-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,C=3,S=2,v=1,D=new Float32Array(C*T*M),I=new Float32Array(S*T*M),P=new Float32Array(v*T*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,Q=O>2?0:-1,A=[F,Q,0,F+2/3,Q,0,F+2/3,Q+1,0,F,Q,0,F+2/3,Q+1,0,F,Q+1,0];D.set(A,C*T*O),I.set(x,S*T*O);const R=[O,O,O,O,O,O];P.set(R,v*T*O)}const U=new Ki;U.setAttribute("position",new Ai(D,C)),U.setAttribute("uv",new Ai(I,S)),U.setAttribute("faceIndex",new Ai(P,v)),r.push(new Gn(U,null)),o>Tr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function cm(s,e,n){const r=new wi(s,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function yy(s,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function My(s,e,n){const r=new Float32Array(Zr),o=new ae(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function um(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function fm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function Ey(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===lf||p===cf,g=p===es||p===Hs;if(m||g){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new lm(s)),_=m?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return m&&M&&M.height>0||g&&M&&o(M)?(n===null&&(n=new lm(s)),_=m?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Ty(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qa("WebGLRenderer: "+r+" extension not supported."),o}}}function wy(s,e,n,r){const o={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(_,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,T=_.attributes.position;let C=0;if(M!==null){const D=M.array;C=M.version;for(let I=0,P=D.length;I<P;I+=3){const U=D[I+0],O=D[I+1],F=D[I+2];x.push(U,O,O,F,F,U)}}else if(T!==void 0){const D=T.array;C=T.version;for(let I=0,P=D.length/3-1;I<P;I+=3){const U=I+0,O=I+1,F=I+2;x.push(U,O,O,F,F,U)}}else return;const S=new(jm(x)?Zm:Km)(x,1);S.version=C;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function Ay(s,e,n){let r;function o(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function p(x,M){s.drawElements(r,M,c,x*d),n.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*d,T),n.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let S=0;for(let v=0;v<T;v++)S+=M[v];n.update(S,r,1)}function _(x,M,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/d,M[v],C[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,T);let v=0;for(let D=0;D<T;D++)v+=M[D]*C[D];n.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Cy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Ry(s,e,n){const r=new WeakMap,o=new $t;function c(d,f,p){const m=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let R=function(){Q.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),S===!0&&(P=3);let U=f.attributes.position.count*P,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*O*4*_),Q=new qm(F,U,O,_);Q.type=Mi,Q.needsUpdate=!0;const A=P*4;for(let V=0;V<_;V++){const q=v[V],$=D[V],le=I[V],ce=U*O*4*V;for(let oe=0;oe<q.count;oe++){const Y=oe*A;T===!0&&(o.fromBufferAttribute(q,oe),F[ce+Y+0]=o.x,F[ce+Y+1]=o.y,F[ce+Y+2]=o.z,F[ce+Y+3]=0),C===!0&&(o.fromBufferAttribute($,oe),F[ce+Y+4]=o.x,F[ce+Y+5]=o.y,F[ce+Y+6]=o.z,F[ce+Y+7]=0),S===!0&&(o.fromBufferAttribute(le,oe),F[ce+Y+8]=o.x,F[ce+Y+9]=o.y,F[ce+Y+10]=o.z,F[ce+Y+11]=le.itemSize===4?o.w:1)}}x={count:_,texture:Q,size:new It(U,O)},r.set(f,x),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function by(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=e.get(p,g);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return _}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}const Py={[Lm]:"LINEAR_TONE_MAPPING",[Nm]:"REINHARD_TONE_MAPPING",[Dm]:"CINEON_TONE_MAPPING",[Im]:"ACES_FILMIC_TONE_MAPPING",[Fm]:"AGX_TONE_MAPPING",[Om]:"NEUTRAL_TONE_MAPPING",[Um]:"CUSTOM_TONE_MAPPING"};function Ly(s,e,n,r,o){const c=new wi(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),d=new wi(e,n,{type:qi,depthBuffer:!1,stencilBuffer:!1}),f=new Ki;f.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ji([0,2,0,0,2,0],2));const p=new Av({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Gn(f,p),g=new rg(-1,1,1,-1,0,1);let _=null,x=null,M=!1,T,C=null,S=[],v=!1;this.setSize=function(D,I){c.setSize(D,I),d.setSize(D,I);for(let P=0;P<S.length;P++){const U=S[P];U.setSize&&U.setSize(D,I)}},this.setEffects=function(D){S=D,v=S.length>0&&S[0].isRenderPass===!0;const I=c.width,P=c.height;for(let U=0;U<S.length;U++){const O=S[U];O.setSize&&O.setSize(I,P)}},this.begin=function(D,I){if(M||D.toneMapping===Ti&&S.length===0)return!1;if(C=I,I!==null){const P=I.width,U=I.height;(c.width!==P||c.height!==U)&&this.setSize(P,U)}return v===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Ti,!0},this.hasRenderPass=function(){return v},this.end=function(D,I){D.toneMapping=T,M=!0;let P=c,U=d;for(let O=0;O<S.length;O++){const F=S[O];if(F.enabled!==!1&&(F.render(D,U,P,I),F.needsSwap!==!1)){const Q=P;P=U,U=Q}}if(_!==D.outputColorSpace||x!==D.toneMapping){_=D.outputColorSpace,x=D.toneMapping,p.defines={},Et.getTransfer(_)===Lt&&(p.defines.SRGB_TRANSFER="");const O=Py[x];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(C),D.render(m,g),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),f.dispose(),p.dispose()}}const ag=new Rn,Wf=new $a(1,1),og=new qm,lg=new tv,cg=new eg,dm=[],hm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=dm[o];if(c===void 0&&(c=new Float32Array(o),dm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Bl(s,e){let n=hm[e];n===void 0&&(n=new Int32Array(e),hm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Ny(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function Iy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function Uy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function Fy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;gm.set(r),s.uniformMatrix2fv(this.addr,!1,gm),rn(n,r)}}function Oy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;mm.set(r),s.uniformMatrix3fv(this.addr,!1,mm),rn(n,r)}}function ky(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;pm.set(r),s.uniformMatrix4fv(this.addr,!1,pm),rn(n,r)}}function By(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function Vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function Hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function Gy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function Xy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function qy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Wf.compareFunction=n.isReversedDepthBuffer()?td:ed,c=Wf):c=ag,n.setTexture2D(e||c,o)}function Yy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||lg,o)}function $y(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||cg,o)}function Ky(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||og,o)}function Zy(s){switch(s){case 5126:return Ny;case 35664:return Dy;case 35665:return Iy;case 35666:return Uy;case 35674:return Fy;case 35675:return Oy;case 35676:return ky;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return Vy;case 35669:case 35673:return Hy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Ky}}function Qy(s,e){s.uniform1fv(this.addr,e)}function Jy(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function eM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function tM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function nM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function iM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function rM(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function sM(s,e){s.uniform1iv(this.addr,e)}function aM(s,e){s.uniform2iv(this.addr,e)}function oM(s,e){s.uniform3iv(this.addr,e)}function lM(s,e){s.uniform4iv(this.addr,e)}function cM(s,e){s.uniform1uiv(this.addr,e)}function uM(s,e){s.uniform2uiv(this.addr,e)}function fM(s,e){s.uniform3uiv(this.addr,e)}function dM(s,e){s.uniform4uiv(this.addr,e)}function hM(s,e,n){const r=this.cache,o=e.length,c=Bl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Wf:d=ag;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||d,c[f])}function pM(s,e,n){const r=this.cache,o=e.length,c=Bl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||lg,c[d])}function mM(s,e,n){const r=this.cache,o=e.length,c=Bl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||cg,c[d])}function gM(s,e,n){const r=this.cache,o=e.length,c=Bl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||og,c[d])}function _M(s){switch(s){case 5126:return Qy;case 35664:return Jy;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}class vM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Zy(n.type)}}class xM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_M(n.type)}}class SM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function _m(s,e){s.seq.push(e),s.map[e.id]=e}function yM(s,e,n){const r=s.name,o=r.length;for($u.lastIndex=0;;){const c=$u.exec(r),d=$u.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){_m(n,m===void 0?new vM(f,s,e):new xM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new SM(f),_m(n,_)),n=_}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(n,d),p=e.getUniformLocation(n,f.name);yM(f,p,this)}const o=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function vm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const MM=37297;let EM=0;function TM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const xm=new ct;function wM(s){Et._getMatrix(xm,Et.workingColorSpace,s);const e=`mat3( ${xm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Dl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return n.toUpperCase()+`

`+c+`

`+TM(s.getShaderSource(e),f)}else return c}function AM(s,e){const n=wM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const CM={[Lm]:"Linear",[Nm]:"Reinhard",[Dm]:"Cineon",[Im]:"ACESFilmic",[Fm]:"AgX",[Om]:"Neutral",[Um]:"Custom"};function RM(s,e){const n=CM[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new ae;function bM(){Et.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function LM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function NM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Va(s){return s!==""}function ym(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(s){return s.replace(DM,UM)}const IM=new Map;function UM(s,e){let n=ft[e];if(n===void 0){const r=IM.get(e);if(r!==void 0)n=ft[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xf(n)}const FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(s){return s.replace(FM,OM)}function OM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Tm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kM={[Cl]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function BM(s){return kM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zM={[es]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Fl]:"ENVMAP_TYPE_CUBE_UV"};function VM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":zM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const HM={[Hs]:"ENVMAP_MODE_REFRACTION"};function GM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":HM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WM={[Pm]:"ENVMAP_BLENDING_MULTIPLY",[S_]:"ENVMAP_BLENDING_MIX",[y_]:"ENVMAP_BLENDING_ADD"};function XM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":WM[s.combine]||"ENVMAP_BLENDING_NONE"}function jM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function qM(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=BM(n),m=VM(n),g=GM(n),_=XM(n),x=jM(n),M=PM(n),T=LM(c),C=o.createProgram();let S,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Va).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Va).join(`
`),v.length>0&&(v+=`
`)):(S=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),v=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?ft.tonemapping_pars_fragment:"",n.toneMapping!==Ti?RM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,AM("linearToOutputTexel",n.outputColorSpace),bM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),d=Xf(d),d=ym(d,n),d=Mm(d,n),f=Xf(f),f=ym(f,n),f=Mm(f,n),d=Em(d),f=Em(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=D+S+d,P=D+v+f,U=vm(o,o.VERTEX_SHADER,I),O=vm(o,o.FRAGMENT_SHADER,P);o.attachShader(C,U),o.attachShader(C,O),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(V){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(C)||"",$=o.getShaderInfoLog(U)||"",le=o.getShaderInfoLog(O)||"",ce=q.trim(),oe=$.trim(),Y=le.trim();let j=!0,fe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,O);else{const K=Sm(o,U,"vertex"),L=Sm(o,O,"fragment");At("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+K+`
`+L)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(oe===""||Y==="")&&(fe=!1);fe&&(V.diagnostics={runnable:j,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(U),o.deleteShader(O),Q=new Nl(o,C),A=NM(o,C)}let Q;this.getUniforms=function(){return Q===void 0&&F(this),Q};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(C,MM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=O,this}let YM=0;class $M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new KM(e),n.set(e,r)),r}}class KM{constructor(e){this.id=YM++,this.code=e,this.usedTimes=0}}function ZM(s,e,n,r,o,c,d){const f=new Ym,p=new $M,m=new Set,g=[],_=new Map,x=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return m.add(A),A===0?"uv":`uv${A}`}function S(A,R,V,q,$){const le=q.fog,ce=$.geometry,oe=A.isMeshStandardMaterial?q.environment:null,Y=(A.isMeshStandardMaterial?n:e).get(A.envMap||oe),j=Y&&Y.mapping===Fl?Y.image.height:null,fe=T[A.type];A.precision!==null&&(M=o.getMaxPrecision(A.precision),M!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const K=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,L=K!==void 0?K.length:0;let te=0;ce.morphAttributes.position!==void 0&&(te=1),ce.morphAttributes.normal!==void 0&&(te=2),ce.morphAttributes.color!==void 0&&(te=3);let Ae,He,Ge,ne;if(fe){const St=yi[fe];Ae=St.vertexShader,He=St.fragmentShader}else Ae=A.vertexShader,He=A.fragmentShader,p.update(A),Ge=p.getVertexShaderID(A),ne=p.getFragmentShaderID(A);const de=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=$.isInstancedMesh===!0,Ie=$.isBatchedMesh===!0,pt=!!A.map,qt=!!A.matcap,dt=!!Y,vt=!!A.aoMap,Rt=!!A.lightMap,lt=!!A.bumpMap,Bt=!!A.normalMap,B=!!A.displacementMap,zt=!!A.emissiveMap,mt=!!A.metalnessMap,xt=!!A.roughnessMap,je=A.anisotropy>0,b=A.clearcoat>0,y=A.dispersion>0,W=A.iridescence>0,he=A.sheen>0,me=A.transmission>0,ue=je&&!!A.anisotropyMap,$e=b&&!!A.clearcoatMap,Te=b&&!!A.clearcoatNormalMap,Be=b&&!!A.clearcoatRoughnessMap,nt=W&&!!A.iridescenceMap,Se=W&&!!A.iridescenceThicknessMap,be=he&&!!A.sheenColorMap,We=he&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Ce=!!A.specularColorMap,ot=!!A.specularIntensityMap,H=me&&!!A.transmissionMap,Le=me&&!!A.thicknessMap,Me=!!A.gradientMap,Ne=!!A.alphaMap,ve=A.alphaTest>0,pe=!!A.alphaHash,Re=!!A.extensions;let it=Ti;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(it=s.toneMapping);const Pt={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:He,defines:A.defines,customVertexShaderID:Ge,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Ie,batchingColor:Ie&&$._colorsTexture!==null,instancing:ke,instancingColor:ke&&$.instanceColor!==null,instancingMorph:ke&&$.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ws,alphaToCoverage:!!A.alphaToCoverage,map:pt,matcap:qt,envMap:dt,envMapMode:dt&&Y.mapping,envMapCubeUVHeight:j,aoMap:vt,lightMap:Rt,bumpMap:lt,normalMap:Bt,displacementMap:B,emissiveMap:zt,normalMapObjectSpace:Bt&&A.normalMapType===w_,normalMapTangentSpace:Bt&&A.normalMapType===T_,metalnessMap:mt,roughnessMap:xt,anisotropy:je,anisotropyMap:ue,clearcoat:b,clearcoatMap:$e,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,dispersion:y,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:be,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Ce,specularIntensityMap:ot,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:Me,opaque:A.transparent===!1&&A.blending===Bs&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:pe,combine:A.combine,mapUv:pt&&C(A.map.channel),aoMapUv:vt&&C(A.aoMap.channel),lightMapUv:Rt&&C(A.lightMap.channel),bumpMapUv:lt&&C(A.bumpMap.channel),normalMapUv:Bt&&C(A.normalMap.channel),displacementMapUv:B&&C(A.displacementMap.channel),emissiveMapUv:zt&&C(A.emissiveMap.channel),metalnessMapUv:mt&&C(A.metalnessMap.channel),roughnessMapUv:xt&&C(A.roughnessMap.channel),anisotropyMapUv:ue&&C(A.anisotropyMap.channel),clearcoatMapUv:$e&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&C(A.sheenRoughnessMap.channel),specularMapUv:qe&&C(A.specularMap.channel),specularColorMapUv:Ce&&C(A.specularColorMap.channel),specularIntensityMapUv:ot&&C(A.specularIntensityMap.channel),transmissionMapUv:H&&C(A.transmissionMap.channel),thicknessMapUv:Le&&C(A.thicknessMap.channel),alphaMapUv:Ne&&C(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Bt||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(pt||Ne),fog:!!le,useFog:A.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ye,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===Lt,decodeVideoTextureEmissive:zt&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===Lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hi,flipSided:A.side===Un,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)R.push(V),R.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(D(R,A),I(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function D(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function I(A,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),A.push(f.mask)}function P(A){const R=T[A.type];let V;if(R){const q=yi[R];V=mv.clone(q.uniforms)}else V=A.uniforms;return V}function U(A,R){let V=_.get(R);return V!==void 0?++V.usedTimes:(V=new qM(s,R,A,c),g.push(V),_.set(R,V)),V}function O(A){if(--A.usedTimes===0){const R=g.indexOf(A);g[R]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function F(A){p.remove(A)}function Q(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:P,acquireProgram:U,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:Q}}function QM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function JM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Am(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(_,x,M,T,C,S){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:C,group:S},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=C,v.group=S),e++,v}function f(_,x,M,T,C,S){const v=d(_,x,M,T,C,S);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):n.push(v)}function p(_,x,M,T,C,S){const v=d(_,x,M,T,C,S);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||JM),r.length>1&&r.sort(x||wm),o.length>1&&o.sort(x||wm)}function g(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:g,sort:m}}function eE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Am,s.set(r,[d])):o>=c.length?(d=new Am,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function tE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new Nt};break;case"SpotLight":n={position:new ae,direction:new ae,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=n,n}}}function nE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let iE=0;function rE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sE(s){const e=new tE,n=nE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ae);const o=new ae,c=new Qt,d=new Qt;function f(m){let g=0,_=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let M=0,T=0,C=0,S=0,v=0,D=0,I=0,P=0,U=0,O=0,F=0;m.sort(rE);for(let A=0,R=m.length;A<R;A++){const V=m[A],q=V.color,$=V.intensity,le=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Gs?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=q.r*$,_+=q.g*$,x+=q.b*$;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],$);F++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,j=n.get(V);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=oe,M++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(q).multiplyScalar($),oe.distance=le,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[C]=oe;const Y=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,Y.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[C]=Y.matrix,V.castShadow){const j=n.get(V);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=ce,P++}C++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(q).multiplyScalar($),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=oe,S++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const Y=V.shadow,j=n.get(V);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=V.shadow.matrix,I++}r.point[T]=oe,T++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar($),oe.groundColor.copy(V.groundColor).multiplyScalar($),r.hemi[v]=oe,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==T||Q.spotLength!==C||Q.rectAreaLength!==S||Q.hemiLength!==v||Q.numDirectionalShadows!==D||Q.numPointShadows!==I||Q.numSpotShadows!==P||Q.numSpotMaps!==U||Q.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+U-O,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,Q.directionalLength=M,Q.pointLength=T,Q.spotLength=C,Q.rectAreaLength=S,Q.hemiLength=v,Q.numDirectionalShadows=D,Q.numPointShadows=I,Q.numSpotShadows=P,Q.numSpotMaps=U,Q.numLightProbes=F,r.version=iE++)}function p(m,g){let _=0,x=0,M=0,T=0,C=0;const S=g.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const I=m[v];if(I.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),_++}else if(I.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(S),x++}else if(I.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(S),C++}}}return{setup:f,setupView:p,state:r}}function Cm(s){const e=new sE(s),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function aE(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new Cm(s),e.set(o,[f])):c>=d.length?(f=new Cm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cE=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],uE=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Rm=new Qt,Ba=new ae,Ku=new ae;function fE(s,e,n){let r=new ng;const o=new It,c=new It,d=new $t,f=new Cv,p=new Rv,m={},g=n.maxTextureSize,_={[wr]:Un,[Un]:wr,[Hi]:Hi},x=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:oE,fragmentShader:lE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ki;T.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Gn(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let v=this.type;this.render=function(O,F,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;O.type===t_&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Cl);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Wi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=v!==this.type;$&&F.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(ce=>ce.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,ce=O.length;le<ce;le++){const oe=O[le],Y=oe.shadow;if(Y===void 0){st("WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const j=Y.getFrameExtents();if(o.multiply(j),c.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/j.x),o.x=c.x*j.x,Y.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/j.y),o.y=c.y*j.y,Y.mapSize.y=c.y)),Y.map===null||$===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===za){if(oe.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new wi(o.x,o.y,{format:Gs,type:qi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),Y.map.texture.name=oe.name+".shadowMap",Y.map.depthTexture=new $a(o.x,o.y,Mi),Y.map.depthTexture.name=oe.name+".shadowMapDepth",Y.map.depthTexture.format=Yi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=hn,Y.map.depthTexture.magFilter=hn}else{oe.isPointLight?(Y.map=new tg(o.x),Y.map.depthTexture=new wv(o.x,Ci)):(Y.map=new wi(o.x,o.y),Y.map.depthTexture=new $a(o.x,o.y,Ci)),Y.map.depthTexture.name=oe.name+".shadowMap",Y.map.depthTexture.format=Yi;const K=s.state.buffers.depth.getReversed();this.type===Cl?(Y.map.depthTexture.compareFunction=K?td:ed,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=hn,Y.map.depthTexture.magFilter=hn)}Y.camera.updateProjectionMatrix()}const fe=Y.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<fe;K++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,K),s.clear();else{K===0&&(s.setRenderTarget(Y.map),s.clear());const L=Y.getViewport(K);d.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),q.viewport(d)}if(oe.isPointLight){const L=Y.camera,te=Y.matrix,Ae=oe.distance||L.far;Ae!==L.far&&(L.far=Ae,L.updateProjectionMatrix()),Ba.setFromMatrixPosition(oe.matrixWorld),L.position.copy(Ba),Ku.copy(L.position),Ku.add(cE[K]),L.up.copy(uE[K]),L.lookAt(Ku),L.updateMatrixWorld(),te.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Rm.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Rm,L.coordinateSystem,L.reversedDepth)}else Y.updateMatrices(oe);r=Y.getFrustum(),P(F,Q,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===za&&D(Y,Q),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(A,R,V)};function D(O,F){const Q=e.update(C);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new wi(o.x,o.y,{format:Gs,type:qi})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,Q,x,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,Q,M,C,null)}function I(O,F,Q,A){let R=null;const V=Q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)R=V;else if(R=Q.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=R.uuid,$=F.uuid;let le=m[q];le===void 0&&(le={},m[q]=le);let ce=le[$];ce===void 0&&(ce=R.clone(),le[$]=ce,F.addEventListener("dispose",U)),R=ce}if(R.visible=F.visible,R.wireframe=F.wireframe,A===za?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:_[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,Q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=s.properties.get(R);q.light=Q}return R}function P(O,F,Q,A,R){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===za)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,O.matrixWorld);const $=e.update(O),le=O.material;if(Array.isArray(le)){const ce=$.groups;for(let oe=0,Y=ce.length;oe<Y;oe++){const j=ce[oe],fe=le[j.materialIndex];if(fe&&fe.visible){const K=I(O,fe,A,R);O.onBeforeShadow(s,O,F,Q,$,K,j),s.renderBufferDirect(Q,null,$,K,O,j),O.onAfterShadow(s,O,F,Q,$,K,j)}}}else if(le.visible){const ce=I(O,le,A,R);O.onBeforeShadow(s,O,F,Q,$,ce,null),s.renderBufferDirect(Q,null,$,ce,O,null),O.onAfterShadow(s,O,F,Q,$,ce,null)}}const q=O.children;for(let $=0,le=q.length;$<le;$++)P(q[$],F,Q,A,R)}function U(O){O.target.removeEventListener("dispose",U);for(const Q in m){const A=m[Q],R=O.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const dE={[ef]:tf,[nf]:af,[rf]:of,[Vs]:sf,[tf]:ef,[af]:nf,[of]:rf,[sf]:Vs};function hE(s,e){function n(){let H=!1;const Le=new $t;let Me=null;const Ne=new $t(0,0,0,0);return{setMask:function(ve){Me!==ve&&!H&&(s.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){H=ve},setClear:function(ve,pe,Re,it,Pt){Pt===!0&&(ve*=it,pe*=it,Re*=it),Le.set(ve,pe,Re,it),Ne.equals(Le)===!1&&(s.clearColor(ve,pe,Re,it),Ne.copy(Le))},reset:function(){H=!1,Me=null,Ne.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,Me=null,Ne=null,ve=null;return{setReversed:function(pe){if(Le!==pe){const Re=e.get("EXT_clip_control");pe?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const it=ve;ve=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(pe){pe?de(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!H&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Le&&(pe=dE[pe]),Ne!==pe){switch(pe){case ef:s.depthFunc(s.NEVER);break;case tf:s.depthFunc(s.ALWAYS);break;case nf:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case rf:s.depthFunc(s.EQUAL);break;case sf:s.depthFunc(s.GEQUAL);break;case af:s.depthFunc(s.GREATER);break;case of:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=pe}},setLocked:function(pe){H=pe},setClear:function(pe){ve!==pe&&(Le&&(pe=1-pe),s.clearDepth(pe),ve=pe)},reset:function(){H=!1,Me=null,Ne=null,ve=null,Le=!1}}}function o(){let H=!1,Le=null,Me=null,Ne=null,ve=null,pe=null,Re=null,it=null,Pt=null;return{setTest:function(St){H||(St?de(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(St){Le!==St&&!H&&(s.stencilMask(St),Le=St)},setFunc:function(St,Fn,Mn){(Me!==St||Ne!==Fn||ve!==Mn)&&(s.stencilFunc(St,Fn,Mn),Me=St,Ne=Fn,ve=Mn)},setOp:function(St,Fn,Mn){(pe!==St||Re!==Fn||it!==Mn)&&(s.stencilOp(St,Fn,Mn),pe=St,Re=Fn,it=Mn)},setLocked:function(St){H=St},setClear:function(St){Pt!==St&&(s.clearStencil(St),Pt=St)},reset:function(){H=!1,Le=null,Me=null,Ne=null,ve=null,pe=null,Re=null,it=null,Pt=null}}}const c=new n,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,C=!1,S=null,v=null,D=null,I=null,P=null,U=null,O=null,F=new Nt(0,0,0),Q=0,A=!1,R=null,V=null,q=null,$=null,le=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Y=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),oe=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),oe=Y>=2);let fe=null,K={};const L=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),Ae=new $t().fromArray(L),He=new $t().fromArray(te);function Ge(H,Le,Me,Ne){const ve=new Uint8Array(4),pe=s.createTexture();s.bindTexture(H,pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Me;Re++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Le+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return pe}const ne={};ne[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),de(s.DEPTH_TEST),d.setFunc(Vs),lt(!1),Bt(Np),de(s.CULL_FACE),vt(Wi);function de(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function ye(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function ke(H,Le){return _[H]!==Le?(s.bindFramebuffer(H,Le),_[H]=Le,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ie(H,Le){let Me=M,Ne=!1;if(H){Me=x.get(Le),Me===void 0&&(Me=[],x.set(Le,Me));const ve=H.textures;if(Me.length!==ve.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Re=ve.length;pe<Re;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=ve.length,Ne=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(Me)}function pt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const qt={[Kr]:s.FUNC_ADD,[i_]:s.FUNC_SUBTRACT,[r_]:s.FUNC_REVERSE_SUBTRACT};qt[s_]=s.MIN,qt[a_]=s.MAX;const dt={[o_]:s.ZERO,[l_]:s.ONE,[c_]:s.SRC_COLOR,[Qu]:s.SRC_ALPHA,[m_]:s.SRC_ALPHA_SATURATE,[h_]:s.DST_COLOR,[f_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[Ju]:s.ONE_MINUS_SRC_ALPHA,[p_]:s.ONE_MINUS_DST_COLOR,[d_]:s.ONE_MINUS_DST_ALPHA,[g_]:s.CONSTANT_COLOR,[__]:s.ONE_MINUS_CONSTANT_COLOR,[v_]:s.CONSTANT_ALPHA,[x_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(H,Le,Me,Ne,ve,pe,Re,it,Pt,St){if(H===Wi){C===!0&&(ye(s.BLEND),C=!1);return}if(C===!1&&(de(s.BLEND),C=!0),H!==n_){if(H!==S||St!==A){if((v!==Kr||P!==Kr)&&(s.blendEquation(s.FUNC_ADD),v=Kr,P=Kr),St)switch(H){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.ONE,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",H);break}else switch(H){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ip:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Up:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",H);break}D=null,I=null,U=null,O=null,F.set(0,0,0),Q=0,S=H,A=St}return}ve=ve||Le,pe=pe||Me,Re=Re||Ne,(Le!==v||ve!==P)&&(s.blendEquationSeparate(qt[Le],qt[ve]),v=Le,P=ve),(Me!==D||Ne!==I||pe!==U||Re!==O)&&(s.blendFuncSeparate(dt[Me],dt[Ne],dt[pe],dt[Re]),D=Me,I=Ne,U=pe,O=Re),(it.equals(F)===!1||Pt!==Q)&&(s.blendColor(it.r,it.g,it.b,Pt),F.copy(it),Q=Pt),S=H,A=!1}function Rt(H,Le){H.side===Hi?ye(s.CULL_FACE):de(s.CULL_FACE);let Me=H.side===Un;Le&&(Me=!Me),lt(Me),H.blending===Bs&&H.transparent===!1?vt(Wi):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ne=H.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),zt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function Bt(H){H!==J0?(de(s.CULL_FACE),H!==V&&(H===Np?s.cullFace(s.BACK):H===e_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),V=H}function B(H){H!==q&&(oe&&s.lineWidth(H),q=H)}function zt(H,Le,Me){H?(de(s.POLYGON_OFFSET_FILL),($!==Le||le!==Me)&&(s.polygonOffset(Le,Me),$=Le,le=Me)):ye(s.POLYGON_OFFSET_FILL)}function mt(H){H?de(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function xt(H){H===void 0&&(H=s.TEXTURE0+ce-1),fe!==H&&(s.activeTexture(H),fe=H)}function je(H,Le,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ce-1:Me=fe);let Ne=K[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},K[Me]=Ne),(Ne.type!==H||Ne.texture!==Le)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(H,Le||ne[H]),Ne.type=H,Ne.texture=Le)}function b(){const H=K[fe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function he(){try{s.texSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function Te(){try{s.texStorage2D(...arguments)}catch(H){At("WebGLState:",H)}}function Be(){try{s.texStorage3D(...arguments)}catch(H){At("WebGLState:",H)}}function nt(){try{s.texImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function Se(){try{s.texImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function be(H){Ae.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function We(H){He.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function qe(H,Le){let Me=m.get(Le);Me===void 0&&(Me=new WeakMap,m.set(Le,Me));let Ne=Me.get(H);Ne===void 0&&(Ne=s.getUniformBlockIndex(Le,H.name),Me.set(H,Ne))}function Ce(H,Le){const Ne=m.get(Le).get(H);p.get(Le)!==Ne&&(s.uniformBlockBinding(Le,Ne,H.__bindingPointIndex),p.set(Le,Ne))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},fe=null,K={},_={},x=new WeakMap,M=[],T=null,C=!1,S=null,v=null,D=null,I=null,P=null,U=null,O=null,F=new Nt(0,0,0),Q=0,A=!1,R=null,V=null,q=null,$=null,le=null,Ae.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:de,disable:ye,bindFramebuffer:ke,drawBuffers:Ie,useProgram:pt,setBlending:vt,setMaterial:Rt,setFlipSided:lt,setCullFace:Bt,setLineWidth:B,setPolygonOffset:zt,setScissorTest:mt,activeTexture:xt,bindTexture:je,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:nt,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:Ce,texStorage2D:Te,texStorage3D:Be,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:$e,scissor:be,viewport:We,reset:ot}}function pE(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,y){return M?new OffscreenCanvas(b,y):Ul("canvas")}function C(b,y,W){let he=1;const me=je(b);if((me.width>W||me.height>W)&&(he=W/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(he*me.width),$e=Math.floor(he*me.height);_===void 0&&(_=T(ue,$e));const Te=y?T(ue,$e):_;return Te.width=ue,Te.height=$e,Te.getContext("2d").drawImage(b,0,0,ue,$e),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+$e+")."),Te}else return"data"in b&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),b;return b}function S(b){return b.generateMipmaps}function v(b){s.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(b,y,W,he,me=!1){if(b!==null){if(s[b]!==void 0)return s[b];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=y;if(y===s.RED&&(W===s.FLOAT&&(ue=s.R32F),W===s.HALF_FLOAT&&(ue=s.R16F),W===s.UNSIGNED_BYTE&&(ue=s.R8)),y===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.R8UI),W===s.UNSIGNED_SHORT&&(ue=s.R16UI),W===s.UNSIGNED_INT&&(ue=s.R32UI),W===s.BYTE&&(ue=s.R8I),W===s.SHORT&&(ue=s.R16I),W===s.INT&&(ue=s.R32I)),y===s.RG&&(W===s.FLOAT&&(ue=s.RG32F),W===s.HALF_FLOAT&&(ue=s.RG16F),W===s.UNSIGNED_BYTE&&(ue=s.RG8)),y===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RG8UI),W===s.UNSIGNED_SHORT&&(ue=s.RG16UI),W===s.UNSIGNED_INT&&(ue=s.RG32UI),W===s.BYTE&&(ue=s.RG8I),W===s.SHORT&&(ue=s.RG16I),W===s.INT&&(ue=s.RG32I)),y===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),W===s.UNSIGNED_INT&&(ue=s.RGB32UI),W===s.BYTE&&(ue=s.RGB8I),W===s.SHORT&&(ue=s.RGB16I),W===s.INT&&(ue=s.RGB32I)),y===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),W===s.UNSIGNED_INT&&(ue=s.RGBA32UI),W===s.BYTE&&(ue=s.RGBA8I),W===s.SHORT&&(ue=s.RGBA16I),W===s.INT&&(ue=s.RGBA32I)),y===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),y===s.RGBA){const $e=me?Dl:Et.getTransfer(he);W===s.FLOAT&&(ue=s.RGBA32F),W===s.HALF_FLOAT&&(ue=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ue=$e===Lt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(b,y){let W;return b?y===null||y===Ci||y===ja?W=s.DEPTH24_STENCIL8:y===Mi?W=s.DEPTH32F_STENCIL8:y===Xa&&(W=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===ja?W=s.DEPTH_COMPONENT24:y===Mi?W=s.DEPTH_COMPONENT32F:y===Xa&&(W=s.DEPTH_COMPONENT16),W}function U(b,y){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function O(b){const y=b.target;y.removeEventListener("dispose",O),Q(y),y.isVideoTexture&&g.delete(y)}function F(b){const y=b.target;y.removeEventListener("dispose",F),R(y)}function Q(b){const y=r.get(b);if(y.__webglInit===void 0)return;const W=b.source,he=x.get(W);if(he){const me=he[y.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(b),Object.keys(he).length===0&&x.delete(W)}r.remove(b)}function A(b){const y=r.get(b);s.deleteTexture(y.__webglTexture);const W=b.source,he=x.get(W);delete he[y.__cacheKey],d.memory.textures--}function R(b){const y=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(y.__webglFramebuffer[he]))for(let me=0;me<y.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(y.__webglFramebuffer[he][me]);else s.deleteFramebuffer(y.__webglFramebuffer[he]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[he])}else{if(Array.isArray(y.__webglFramebuffer))for(let he=0;he<y.__webglFramebuffer.length;he++)s.deleteFramebuffer(y.__webglFramebuffer[he]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let he=0;he<y.__webglColorRenderbuffer.length;he++)y.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[he]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=b.textures;for(let he=0,me=W.length;he<me;he++){const ue=r.get(W[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(W[he])}r.remove(b)}let V=0;function q(){V=0}function $(){const b=V;return b>=o.maxTextures&&st("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),V+=1,b}function le(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function ce(b,y){const W=r.get(b);if(b.isVideoTexture&&mt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&W.__version!==b.version){const he=b.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,b,y);return}}else b.isExternalTexture&&(W.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+y)}function oe(b,y){const W=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){ne(W,b,y);return}else b.isExternalTexture&&(W.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+y)}function Y(b,y){const W=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){ne(W,b,y);return}n.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+y)}function j(b,y){const W=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&W.__version!==b.version){de(W,b,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+y)}const fe={[uf]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[ff]:s.MIRRORED_REPEAT},K={[hn]:s.NEAREST,[M_]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},L={[A_]:s.NEVER,[L_]:s.ALWAYS,[C_]:s.LESS,[ed]:s.LEQUAL,[R_]:s.EQUAL,[td]:s.GEQUAL,[b_]:s.GREATER,[P_]:s.NOTEQUAL};function te(b,y){if(y.type===Mi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===yn||y.magFilter===Mu||y.magFilter===al||y.magFilter===Qr||y.minFilter===yn||y.minFilter===Mu||y.minFilter===al||y.minFilter===Qr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,fe[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,fe[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,fe[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,K[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,L[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==al&&y.minFilter!==Qr||y.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Ae(b,y){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",O));const he=y.source;let me=x.get(he);me===void 0&&(me={},x.set(he,me));const ue=le(y);if(ue!==b.__cacheKey){me[ue]===void 0&&(me[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,W=!0),me[ue].usedTimes++;const $e=me[b.__cacheKey];$e!==void 0&&(me[b.__cacheKey].usedTimes--,$e.usedTimes===0&&A(y)),b.__cacheKey=ue,b.__webglTexture=me[ue].texture}return W}function He(b,y,W){return Math.floor(Math.floor(b/W)/y)}function Ge(b,y,W,he){const ue=b.updateRanges;if(ue.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,W,he,y.data);else{ue.sort((Se,be)=>Se.start-be.start);let $e=0;for(let Se=1;Se<ue.length;Se++){const be=ue[$e],We=ue[Se],qe=be.start+be.count,Ce=He(We.start,y.width,4),ot=He(be.start,y.width,4);We.start<=qe+1&&Ce===ot&&He(We.start+We.count-1,y.width,4)===Ce?be.count=Math.max(be.count,We.start+We.count-be.start):(++$e,ue[$e]=We)}ue.length=$e+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),Be=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Se=0,be=ue.length;Se<be;Se++){const We=ue[Se],qe=Math.floor(We.start/4),Ce=Math.ceil(We.count/4),ot=qe%y.width,H=Math.floor(qe/y.width),Le=Ce,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,ot,H,Le,Me,W,he,y.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function ne(b,y,W){let he=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(he=s.TEXTURE_3D);const me=Ae(b,y),ue=y.source;n.bindTexture(he,b.__webglTexture,s.TEXTURE0+W);const $e=r.get(ue);if(ue.version!==$e.__version||me===!0){n.activeTexture(s.TEXTURE0+W);const Te=Et.getPrimaries(Et.workingColorSpace),Be=y.colorSpace===Er?null:Et.getPrimaries(y.colorSpace),nt=y.colorSpace===Er||Te===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Se=C(y.image,!1,o.maxTextureSize);Se=xt(y,Se);const be=c.convert(y.format,y.colorSpace),We=c.convert(y.type);let qe=I(y.internalFormat,be,We,y.colorSpace,y.isVideoTexture);te(he,y);let Ce;const ot=y.mipmaps,H=y.isVideoTexture!==!0,Le=$e.__version===void 0||me===!0,Me=ue.dataReady,Ne=U(y,Se);if(y.isDepthTexture)qe=P(y.format===Jr,y.type),Le&&(H?n.texStorage2D(s.TEXTURE_2D,1,qe,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,be,We,null));else if(y.isDataTexture)if(ot.length>0){H&&Le&&n.texStorage2D(s.TEXTURE_2D,Ne,qe,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ce=ot[ve],H?Me&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,be,We,Ce.data):n.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,be,We,Ce.data);y.generateMipmaps=!1}else H?(Le&&n.texStorage2D(s.TEXTURE_2D,Ne,qe,Se.width,Se.height),Me&&Ge(y,Se,be,We)):n.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,be,We,Se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,qe,ot[0].width,ot[0].height,Se.depth);for(let ve=0,pe=ot.length;ve<pe;ve++)if(Ce=ot[ve],y.format!==hi)if(be!==null)if(H){if(Me)if(y.layerUpdates.size>0){const Re=sm(Ce.width,Ce.height,y.format,y.type);for(const it of y.layerUpdates){const Pt=Ce.data.subarray(it*Re/Ce.data.BYTES_PER_ELEMENT,(it+1)*Re/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,it,Ce.width,Ce.height,1,be,Pt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Se.depth,be,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Se.depth,be,We,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Se.depth,0,be,We,Ce.data)}else{H&&Le&&n.texStorage2D(s.TEXTURE_2D,Ne,qe,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ce=ot[ve],y.format!==hi?be!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,be,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,be,We,Ce.data):n.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,be,We,Ce.data)}else if(y.isDataArrayTexture)if(H){if(Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,qe,Se.width,Se.height,Se.depth),Me)if(y.layerUpdates.size>0){const ve=sm(Se.width,Se.height,y.format,y.type);for(const pe of y.layerUpdates){const Re=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,be,We,Re)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,be,We,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,be,We,Se.data);else if(y.isData3DTexture)H?(Le&&n.texStorage3D(s.TEXTURE_3D,Ne,qe,Se.width,Se.height,Se.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,be,We,Se.data)):n.texImage3D(s.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,be,We,Se.data);else if(y.isFramebufferTexture){if(Le)if(H)n.texStorage2D(s.TEXTURE_2D,Ne,qe,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Re=0;Re<Ne;Re++)n.texImage2D(s.TEXTURE_2D,Re,qe,ve,pe,0,be,We,null),ve>>=1,pe>>=1}}else if(ot.length>0){if(H&&Le){const ve=je(ot[0]);n.texStorage2D(s.TEXTURE_2D,Ne,qe,ve.width,ve.height)}for(let ve=0,pe=ot.length;ve<pe;ve++)Ce=ot[ve],H?Me&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,be,We,Ce):n.texImage2D(s.TEXTURE_2D,ve,qe,be,We,Ce);y.generateMipmaps=!1}else if(H){if(Le){const ve=je(Se);n.texStorage2D(s.TEXTURE_2D,Ne,qe,ve.width,ve.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be,We,Se)}else n.texImage2D(s.TEXTURE_2D,0,qe,be,We,Se);S(y)&&v(he),$e.__version=ue.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function de(b,y,W){if(y.image.length!==6)return;const he=Ae(b,y),me=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+W);const ue=r.get(me);if(me.version!==ue.__version||he===!0){n.activeTexture(s.TEXTURE0+W);const $e=Et.getPrimaries(Et.workingColorSpace),Te=y.colorSpace===Er?null:Et.getPrimaries(y.colorSpace),Be=y.colorSpace===Er||$e===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const nt=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!nt&&!Se?be[pe]=C(y.image[pe],!0,o.maxCubemapSize):be[pe]=Se?y.image[pe].image:y.image[pe],be[pe]=xt(y,be[pe]);const We=be[0],qe=c.convert(y.format,y.colorSpace),Ce=c.convert(y.type),ot=I(y.internalFormat,qe,Ce,y.colorSpace),H=y.isVideoTexture!==!0,Le=ue.__version===void 0||he===!0,Me=me.dataReady;let Ne=U(y,We);te(s.TEXTURE_CUBE_MAP,y);let ve;if(nt){H&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ot,We.width,We.height);for(let pe=0;pe<6;pe++){ve=be[pe].mipmaps;for(let Re=0;Re<ve.length;Re++){const it=ve[Re];y.format!==hi?qe!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,it.width,it.height,qe,it.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,ot,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,it.width,it.height,qe,Ce,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,ot,it.width,it.height,0,qe,Ce,it.data)}}}else{if(ve=y.mipmaps,H&&Le){ve.length>0&&Ne++;const pe=je(be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,qe,Ce,be[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,be[pe].width,be[pe].height,0,qe,Ce,be[pe].data);for(let Re=0;Re<ve.length;Re++){const Pt=ve[Re].image[pe].image;H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,Pt.width,Pt.height,qe,Ce,Pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,ot,Pt.width,Pt.height,0,qe,Ce,Pt.data)}}else{H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,qe,Ce,be[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,qe,Ce,be[pe]);for(let Re=0;Re<ve.length;Re++){const it=ve[Re];H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,qe,Ce,it.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,ot,qe,Ce,it.image[pe])}}}S(y)&&v(s.TEXTURE_CUBE_MAP),ue.__version=me.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ye(b,y,W,he,me,ue){const $e=c.convert(W.format,W.colorSpace),Te=c.convert(W.type),Be=I(W.internalFormat,$e,Te,W.colorSpace),nt=r.get(y),Se=r.get(W);if(Se.__renderTarget=y,!nt.__hasExternalTextures){const be=Math.max(1,y.width>>ue),We=Math.max(1,y.height>>ue);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,ue,Be,be,We,y.depth,0,$e,Te,null):n.texImage2D(me,ue,Be,be,We,0,$e,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),zt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,me,Se.__webglTexture,0,B(y)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,me,Se.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(b,y,W){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const he=y.depthTexture,me=he&&he.isDepthTexture?he.type:null,ue=P(y.stencilBuffer,me),$e=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;zt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(y),ue,y.width,y.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(y),ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ue,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,b)}else{const he=y.textures;for(let me=0;me<he.length;me++){const ue=he[me],$e=c.convert(ue.format,ue.colorSpace),Te=c.convert(ue.type),Be=I(ue.internalFormat,$e,Te,ue.colorSpace);zt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(y),Be,y.width,y.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(y),Be,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Be,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(b,y,W){const he=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(y.depthTexture);if(me.__renderTarget=y,(!me.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),te(s.TEXTURE_CUBE_MAP,y.depthTexture);const nt=c.convert(y.depthTexture.format),Se=c.convert(y.depthTexture.type);let be;y.depthTexture.format===Yi?be=s.DEPTH_COMPONENT24:y.depthTexture.format===Jr&&(be=s.DEPTH24_STENCIL8);for(let We=0;We<6;We++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,be,y.width,y.height,0,nt,Se,null)}}else ce(y.depthTexture,0);const ue=me.__webglTexture,$e=B(y),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Be=y.depthTexture.format===Jr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Yi)zt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Be,Te,ue,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Be,Te,ue,0);else if(y.depthTexture.format===Jr)zt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Be,Te,ue,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Be,Te,ue,0);else throw new Error("Unknown depthTexture format")}function pt(b){const y=r.get(b),W=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const he=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),he){const me=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),y.__depthDisposeCallback=me}y.__boundDepthTexture=he}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ie(y.__webglFramebuffer[he],b,he);else{const he=b.texture.mipmaps;he&&he.length>0?Ie(y.__webglFramebuffer[0],b,0):Ie(y.__webglFramebuffer,b,0)}else if(W){y.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[he]),y.__webglDepthbuffer[he]===void 0)y.__webglDepthbuffer[he]=s.createRenderbuffer(),ke(y.__webglDepthbuffer[he],b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}else{const he=b.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ke(y.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(b,y,W){const he=r.get(b);y!==void 0&&ye(he.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&pt(b)}function dt(b){const y=b.texture,W=r.get(b),he=r.get(y);b.addEventListener("dispose",F);const me=b.textures,ue=b.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=y.version,d.memory.textures++),ue){W.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Te]=[];for(let Be=0;Be<y.mipmaps.length;Be++)W.__webglFramebuffer[Te][Be]=s.createFramebuffer()}else W.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Te=0;Te<y.mipmaps.length;Te++)W.__webglFramebuffer[Te]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if($e)for(let Te=0,Be=me.length;Te<Be;Te++){const nt=r.get(me[Te]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),d.memory.textures++)}if(b.samples>0&&zt(b)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Be=me[Te];W.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Te]);const nt=c.convert(Be.format,Be.colorSpace),Se=c.convert(Be.type),be=I(Be.internalFormat,nt,Se,Be.colorSpace,b.isXRRenderTarget===!0),We=B(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,W.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),te(s.TEXTURE_CUBE_MAP,y);for(let Te=0;Te<6;Te++)if(y.mipmaps&&y.mipmaps.length>0)for(let Be=0;Be<y.mipmaps.length;Be++)ye(W.__webglFramebuffer[Te][Be],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else ye(W.__webglFramebuffer[Te],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(y)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Te=0,Be=me.length;Te<Be;Te++){const nt=me[Te],Se=r.get(nt);let be=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,Se.__webglTexture),te(be,nt),ye(W.__webglFramebuffer,b,nt,s.COLOR_ATTACHMENT0+Te,be,0),S(nt)&&v(be)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Te=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),te(Te,y),y.mipmaps&&y.mipmaps.length>0)for(let Be=0;Be<y.mipmaps.length;Be++)ye(W.__webglFramebuffer[Be],b,y,s.COLOR_ATTACHMENT0,Te,Be);else ye(W.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,Te,0);S(y)&&v(Te),n.unbindTexture()}b.depthBuffer&&pt(b)}function vt(b){const y=b.textures;for(let W=0,he=y.length;W<he;W++){const me=y[W];if(S(me)){const ue=D(b),$e=r.get(me).__webglTexture;n.bindTexture(ue,$e),v(ue),n.unbindTexture()}}}const Rt=[],lt=[];function Bt(b){if(b.samples>0){if(zt(b)===!1){const y=b.textures,W=b.width,he=b.height;let me=s.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(b),Te=y.length>1;if(Te)for(let nt=0;nt<y.length;nt++)n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Be=b.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let nt=0;nt<y.length;nt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const Se=r.get(y[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,W,he,0,0,W,he,me,s.NEAREST),p===!0&&(Rt.length=0,lt.length=0,Rt.push(s.COLOR_ATTACHMENT0+nt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Rt.push(ue),lt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let nt=0;nt<y.length;nt++){n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const Se=r.get(y[nt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Se,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function B(b){return Math.min(o.maxSamples,b.samples)}function zt(b){const y=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function mt(b){const y=d.render.frame;g.get(b)!==y&&(g.set(b,y),b.update())}function xt(b,y){const W=b.colorSpace,he=b.format,me=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==Ws&&W!==Er&&(Et.getTransfer(W)===Lt?(he!==hi||me!==ti)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),y}function je(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=qt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function mE(s,e){function n(r,o=Er){let c;const d=Et.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===$f)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Bm)return s.BYTE;if(r===zm)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===Yf)return s.INT;if(r===Ci)return s.UNSIGNED_INT;if(r===Mi)return s.FLOAT;if(r===qi)return s.HALF_FLOAT;if(r===Gm)return s.ALPHA;if(r===Wm)return s.RGB;if(r===hi)return s.RGBA;if(r===Yi)return s.DEPTH_COMPONENT;if(r===Jr)return s.DEPTH_STENCIL;if(r===Xm)return s.RED;if(r===Zf)return s.RED_INTEGER;if(r===Gs)return s.RG;if(r===Qf)return s.RG_INTEGER;if(r===Jf)return s.RGBA_INTEGER;if(r===Rl||r===bl||r===Pl||r===Ll)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Rl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Rl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===hf||r===pf||r===mf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===df)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===gf||r===_f)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===vf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===xf)return c.COMPRESSED_R11_EAC;if(r===Sf)return c.COMPRESSED_SIGNED_R11_EAC;if(r===yf)return c.COMPRESSED_RG11_EAC;if(r===Mf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===bf||r===Pf||r===Lf||r===Nf||r===Df||r===If||r===Uf||r===Ff)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ef)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Af)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Df)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ff)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Of||r===kf||r===Bf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Of)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zf||r===Vf||r===Hf||r===Gf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===zf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Vf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ja?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_E=`
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

}`;class vE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new ig(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ri({vertexShader:gE,fragmentShader:_E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new js(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xE extends qs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new vE,v={},D=n.getContextAttributes();let I=null,P=null;const U=[],O=[],F=new It;let Q=null;const A=new ei;A.viewport=new $t;const R=new ei;R.viewport=new $t;const V=[A,R],q=new bv;let $=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=U[ne];return de===void 0&&(de=new Gu,U[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=U[ne];return de===void 0&&(de=new Gu,U[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=U[ne];return de===void 0&&(de=new Gu,U[ne]=de),de.getHandSpace()};function ce(ne){const de=O.indexOf(ne.inputSource);if(de===-1)return;const ye=U[de];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,m||d),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function oe(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",Y);for(let ne=0;ne<U.length;ne++){const de=O[ne];de!==null&&(O[ne]=null,U[ne].disconnect(de))}$=null,le=null,S.reset();for(const ne in v)delete v[ne];e.setRenderTarget(I),M=null,x=null,_=null,o=null,P=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",Y),D.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Ie=null;D.depth&&(Ie=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=D.stencil?Jr:Yi,ke=D.stencil?ja:Ci);const pt={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(pt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new wi(x.textureWidth,x.textureHeight,{format:hi,type:ti,depthTexture:new $a(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new wi(M.framebufferWidth,M.framebufferHeight,{format:hi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ne){for(let de=0;de<ne.removed.length;de++){const ye=ne.removed[de],ke=O.indexOf(ye);ke>=0&&(O[ke]=null,U[ke].disconnect(ye))}for(let de=0;de<ne.added.length;de++){const ye=ne.added[de];let ke=O.indexOf(ye);if(ke===-1){for(let pt=0;pt<U.length;pt++)if(pt>=O.length){O.push(ye),ke=pt;break}else if(O[pt]===null){O[pt]=ye,ke=pt;break}if(ke===-1)break}const Ie=U[ke];Ie&&Ie.connect(ye)}}const j=new ae,fe=new ae;function K(ne,de,ye){j.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ke=j.distanceTo(fe),Ie=de.projectionMatrix.elements,pt=ye.projectionMatrix.elements,qt=Ie[14]/(Ie[10]-1),dt=Ie[14]/(Ie[10]+1),vt=(Ie[9]+1)/Ie[5],Rt=(Ie[9]-1)/Ie[5],lt=(Ie[8]-1)/Ie[0],Bt=(pt[8]+1)/pt[0],B=qt*lt,zt=qt*Bt,mt=ke/(-lt+Bt),xt=mt*-lt;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(xt),ne.translateZ(mt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ie[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=qt+mt,b=dt+mt,y=B-xt,W=zt+(ke-xt),he=vt*dt/b*je,me=Rt*dt/b*je;ne.projectionMatrix.makePerspective(y,W,he,me,je,b),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let de=ne.near,ye=ne.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),q.near=R.near=A.near=de,q.far=R.far=A.far=ye,($!==q.near||le!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),$=q.near,le=q.far),q.layers.mask=ne.layers.mask|6,A.layers.mask=q.layers.mask&3,R.layers.mask=q.layers.mask&5;const ke=ne.parent,Ie=q.cameras;L(q,ke);for(let pt=0;pt<Ie.length;pt++)L(Ie[pt],ke);Ie.length===2?K(q,A,R):q.projectionMatrix.copy(A.projectionMatrix),te(ne,q,ke)};function te(ne,de,ye){ye===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ya*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(ne){p=ne,x!==null&&(x.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(ne){return v[ne]};let Ae=null;function He(ne,de){if(g=de.getViewerPose(m||d),T=de,g!==null){const ye=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ke=!1;ye.length!==q.cameras.length&&(q.cameras.length=0,ke=!0);for(let dt=0;dt<ye.length;dt++){const vt=ye[dt];let Rt=null;if(M!==null)Rt=M.getViewport(vt);else{const Bt=_.getViewSubImage(x,vt);Rt=Bt.viewport,dt===0&&(e.setRenderTargetTextures(P,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(P))}let lt=V[dt];lt===void 0&&(lt=new ei,lt.layers.enable(dt),lt.viewport=new $t,V[dt]=lt),lt.matrix.fromArray(vt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(vt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),dt===0&&(q.matrix.copy(lt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ke===!0&&q.cameras.push(lt)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const dt=_.getDepthInformation(ye[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(Ie&&Ie.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<ye.length;dt++){const vt=ye[dt].camera;if(vt){let Rt=v[vt];Rt||(Rt=new ig,v[vt]=Rt);const lt=_.getCameraImage(vt);Rt.sourceTexture=lt}}}}for(let ye=0;ye<U.length;ye++){const ke=O[ye],Ie=U[ye];ke!==null&&Ie!==void 0&&Ie.update(ke,de,m||d)}Ae&&Ae(ne,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ge=new sg;Ge.setAnimationLoop(He),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}}const Yr=new $i,SE=new Qt;function yE(s,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Qm(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,D,I,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,P)):v.isMeshMatcapMaterial?(c(S,v),T(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),C(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?p(S,v,D,I):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Un&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Un&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=e.get(v),I=D.envMap,P=D.envMapRotation;I&&(S.envMap.value=I,Yr.copy(P),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),S.envMapRotation.value.setFromMatrix4(SE.makeRotationFromEuler(Yr)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,D,I){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=I*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Un&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const D=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ME(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,I){const P=I.program;r.uniformBlockBinding(D,P)}function m(D,I){let P=o[D.id];P===void 0&&(T(D),P=g(D),o[D.id]=P,D.addEventListener("dispose",S));const U=I.program;r.updateUBOMapping(D,U);const O=e.render.frame;c[D.id]!==O&&(x(D),c[D.id]=O)}function g(D){const I=_();D.__bindingPointIndex=I;const P=s.createBuffer(),U=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function _(){for(let D=0;D<f;D++)if(d.indexOf(D)===-1)return d.push(D),D;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const I=o[D.id],P=D.uniforms,U=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let O=0,F=P.length;O<F;O++){const Q=Array.isArray(P[O])?P[O]:[P[O]];for(let A=0,R=Q.length;A<R;A++){const V=Q[A];if(M(V,O,A,U)===!0){const q=V.__offset,$=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let ce=0;ce<$.length;ce++){const oe=$[ce],Y=C(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,q+le,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,le),le+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,I,P,U){const O=D.value,F=I+"_"+P;if(U[F]===void 0)return typeof O=="number"||typeof O=="boolean"?U[F]=O:U[F]=O.clone(),!0;{const Q=U[F];if(typeof O=="number"||typeof O=="boolean"){if(Q!==O)return U[F]=O,!0}else if(Q.equals(O)===!1)return Q.copy(O),!0}return!1}function T(D){const I=D.uniforms;let P=0;const U=16;for(let F=0,Q=I.length;F<Q;F++){const A=Array.isArray(I[F])?I[F]:[I[F]];for(let R=0,V=A.length;R<V;R++){const q=A[R],$=Array.isArray(q.value)?q.value:[q.value];for(let le=0,ce=$.length;le<ce;le++){const oe=$[le],Y=C(oe),j=P%U,fe=j%Y.boundary,K=j+fe;P+=fe,K!==0&&U-K<Y.storage&&(P+=U-K),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=Y.storage}}}const O=P%U;return O>0&&(P+=U-O),D.__size=P,D.__cache={},this}function C(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",D),I}function S(D){const I=D.target;I.removeEventListener("dispose",S);const P=d.indexOf(I.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function v(){for(const D in o)s.deleteBuffer(o[D]);d=[],o={},c={}}return{bind:p,update:m,dispose:v}}const EE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function TE(){return Si===null&&(Si=new yv(EE,16,16,Gs,qi),Si.name="DFG_LUT",Si.minFilter=yn,Si.magFilter=yn,Si.wrapS=Gi,Si.wrapT=Gi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class wE{constructor(e={}){const{canvas:n=N_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ti}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=M,S=new Set([Jf,Qf,Zf]),v=new Set([ti,Ci,Xa,ja,$f,Kf]),D=new Uint32Array(4),I=new Int32Array(4);let P=null,U=null;const O=[],F=[];let Q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=Jn;let V=0,q=0,$=null,le=-1,ce=null;const oe=new $t,Y=new $t;let j=null;const fe=new Nt(0);let K=0,L=n.width,te=n.height,Ae=1,He=null,Ge=null;const ne=new $t(0,0,L,te),de=new $t(0,0,L,te);let ye=!1;const ke=new ng;let Ie=!1,pt=!1;const qt=new Qt,dt=new ae,vt=new $t,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Bt(){return $===null?Ae:1}let B=r;function zt(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",St,!1),B===null){const X="webgl2";if(B=zt(X,w),B===null)throw zt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw At("WebGLRenderer: "+w.message),w}let mt,xt,je,b,y,W,he,me,ue,$e,Te,Be,nt,Se,be,We,qe,Ce,ot,H,Le,Me,Ne,ve;function pe(){mt=new Ty(B),mt.init(),Me=new mE(B,mt),xt=new my(B,mt,e,Me),je=new hE(B,mt),xt.reversedDepthBuffer&&x&&je.buffers.depth.setReversed(!0),b=new Cy(B),y=new QM,W=new pE(B,mt,je,y,xt,Me,b),he=new _y(A),me=new Ey(A),ue=new Lv(B),Ne=new hy(B,ue),$e=new wy(B,ue,b,Ne),Te=new by(B,$e,ue,b),ot=new Ry(B,xt,W),We=new gy(y),Be=new ZM(A,he,me,mt,xt,Ne,We),nt=new yE(A,y),Se=new eE,be=new aE(mt),Ce=new dy(A,he,me,je,Te,T,p),qe=new fE(A,Te,xt),ve=new ME(B,b,xt,je),H=new py(B,mt,b),Le=new Ay(B,mt,b),b.programs=Be.programs,A.capabilities=xt,A.extensions=mt,A.properties=y,A.renderLists=Se,A.shadowMap=qe,A.state=je,A.info=b}pe(),C!==ti&&(Q=new Ly(C,n.width,n.height,o,c));const Re=new xE(A,B);this.xr=Re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(w){w!==void 0&&(Ae=w,this.setSize(L,te,!1))},this.getSize=function(w){return w.set(L,te)},this.setSize=function(w,X,se=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,te=X,n.width=Math.floor(w*Ae),n.height=Math.floor(X*Ae),se===!0&&(n.style.width=w+"px",n.style.height=X+"px"),Q!==null&&Q.setSize(n.width,n.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(L*Ae,te*Ae).floor()},this.setDrawingBufferSize=function(w,X,se){L=w,te=X,Ae=se,n.width=Math.floor(w*se),n.height=Math.floor(X*se),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(C===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,X,se,ie){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,X,se,ie),je.viewport(oe.copy(ne).multiplyScalar(Ae).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,X,se,ie){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,X,se,ie),je.scissor(Y.copy(de).multiplyScalar(Ae).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){je.setScissorTest(ye=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,se=!0){let ie=0;if(w){let J=!1;if($!==null){const Pe=$.texture.format;J=S.has(Pe)}if(J){const Pe=$.texture.type,Ue=v.has(Pe),we=Ce.getClearColor(),Ve=Ce.getClearAlpha(),Oe=we.r,tt=we.g,Ze=we.b;Ue?(D[0]=Oe,D[1]=tt,D[2]=Ze,D[3]=Ve,B.clearBufferuiv(B.COLOR,0,D)):(I[0]=Oe,I[1]=tt,I[2]=Ze,I[3]=Ve,B.clearBufferiv(B.COLOR,0,I))}else ie|=B.COLOR_BUFFER_BIT}X&&(ie|=B.DEPTH_BUFFER_BIT),se&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Ce.dispose(),Se.dispose(),be.dispose(),y.dispose(),he.dispose(),me.dispose(),Te.dispose(),Ne.dispose(),ve.dispose(),Be.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Cr),Re.removeEventListener("sessionend",Rr),ni.stop()};function it(w){w.preventDefault(),zp("WebGLRenderer: Context Lost."),R=!0}function Pt(){zp("WebGLRenderer: Context Restored."),R=!1;const w=b.autoReset,X=qe.enabled,se=qe.autoUpdate,ie=qe.needsUpdate,J=qe.type;pe(),b.autoReset=w,qe.enabled=X,qe.autoUpdate=se,qe.needsUpdate=ie,qe.type=J}function St(w){At("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fn(w){const X=w.target;X.removeEventListener("dispose",Fn),Mn(X)}function Mn(w){Zs(w),y.remove(w)}function Zs(w){const X=y.get(w).programs;X!==void 0&&(X.forEach(function(se){Be.releaseProgram(se)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,se,ie,J,Pe){X===null&&(X=Rt);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,we=to(w,X,se,ie,J);je.setMaterial(ie,Ue);let Ve=se.index,Oe=1;if(ie.wireframe===!0){if(Ve=$e.getWireframeAttribute(se),Ve===void 0)return;Oe=2}const tt=se.drawRange,Ze=se.attributes.position;let ut=tt.start*Oe,yt=(tt.start+tt.count)*Oe;Pe!==null&&(ut=Math.max(ut,Pe.start*Oe),yt=Math.min(yt,(Pe.start+Pe.count)*Oe)),Ve!==null?(ut=Math.max(ut,0),yt=Math.min(yt,Ve.count)):Ze!=null&&(ut=Math.max(ut,0),yt=Math.min(yt,Ze.count));const Ut=yt-ut;if(Ut<0||Ut===1/0)return;Ne.setup(J,ie,we,se,Ve);let Dt,Tt=H;if(Ve!==null&&(Dt=ue.get(Ve),Tt=Le,Tt.setIndex(Dt)),J.isMesh)ie.wireframe===!0?(je.setLineWidth(ie.wireframeLinewidth*Bt()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(J.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*Bt()),J.isLineSegments?Tt.setMode(B.LINES):J.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else J.isPoints?Tt.setMode(B.POINTS):J.isSprite&&Tt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,Ct=J._multiDrawCounts,gt=J._multiDrawCount,pn=Ve?ue.get(Ve).bytesPerElement:1,pi=y.get(ie).currentProgram.getUniforms();for(let Jt=0;Jt<gt;Jt++)pi.setValue(B,"_gl_DrawID",Jt),Tt.render(Qe[Jt]/pn,Ct[Jt])}else if(J.isInstancedMesh)Tt.renderInstances(ut,Ut,J.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ct=Math.min(se.instanceCount,Qe);Tt.renderInstances(ut,Ut,Ct)}else Tt.render(ut,Ut)};function Zi(w,X,se){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=Un,w.needsUpdate=!0,br(w,X,se),w.side=wr,w.needsUpdate=!0,br(w,X,se),w.side=Hi):br(w,X,se)}this.compile=function(w,X,se=null){se===null&&(se=w),U=be.get(se),U.init(X),F.push(U),se.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),w!==se&&w.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),U.setupLights();const ie=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const we=Pe[Ue];Zi(we,se,J),ie.add(we)}else Zi(Pe,se,J),ie.add(Pe)}),U=F.pop(),ie},this.compileAsync=function(w,X,se=null){const ie=this.compile(w,X,se);return new Promise(J=>{function Pe(){if(ie.forEach(function(Ue){y.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){J(w);return}setTimeout(Pe,10)}mt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Qs=null;function Ar(w){Qs&&Qs(w)}function Cr(){ni.stop()}function Rr(){ni.start()}const ni=new sg;ni.setAnimationLoop(Ar),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){Qs=w,Re.setAnimationLoop(w),w===null?ni.stop():ni.start()},Re.addEventListener("sessionstart",Cr),Re.addEventListener("sessionend",Rr),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,ie=Q!==null&&($===null||se)&&Q.begin(A,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,X,$),U=be.get(w,F.length),U.init(X),F.push(U),qt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(qt,Ei,X.reversedDepth),pt=this.localClippingEnabled,Ie=We.init(this.clippingPlanes,pt),P=Se.get(w,O.length),P.init(),O.push(P),Re.enabled===!0&&Re.isPresenting===!0){const Ue=A.xr.getDepthSensingMesh();Ue!==null&&Js(Ue,X,-1/0,A.sortObjects)}Js(w,X,0,A.sortObjects),P.finish(),A.sortObjects===!0&&P.sort(He,Ge),lt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,lt&&Ce.addToRenderList(P,w),this.info.render.frame++,Ie===!0&&We.beginShadows();const J=U.state.shadowsArray;if(qe.render(J,w,X),Ie===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&Q.hasRenderPass())===!1){const Ue=P.opaque,we=P.transmissive;if(U.setupLights(),X.isArrayCamera){const Ve=X.cameras;if(we.length>0)for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe];Ja(Ue,we,w,Ze)}lt&&Ce.render(w);for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe];Qa(P,w,Ze,Ze.viewport)}}else we.length>0&&Ja(Ue,we,w,X),lt&&Ce.render(w),Qa(P,w,X)}$!==null&&q===0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),ie&&Q.end(A),w.isScene===!0&&w.onAfterRender(A,w,X),Ne.resetDefaultState(),le=-1,ce=null,F.pop(),F.length>0?(U=F[F.length-1],Ie===!0&&We.setGlobalState(A.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?P=O[O.length-1]:P=null};function Js(w,X,se,ie){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){ie&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qt);const Ue=Te.update(w),we=w.material;we.visible&&P.push(w,Ue,we,se,vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Ue=Te.update(w),we=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),vt.copy(Ue.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(qt)),Array.isArray(we)){const Ve=Ue.groups;for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe],ut=we[Ze.materialIndex];ut&&ut.visible&&P.push(w,Ue,ut,se,vt.z,Ze)}}else we.visible&&P.push(w,Ue,we,se,vt.z,null)}}const Pe=w.children;for(let Ue=0,we=Pe.length;Ue<we;Ue++)Js(Pe[Ue],X,se,ie)}function Qa(w,X,se,ie){const{opaque:J,transmissive:Pe,transparent:Ue}=w;U.setupLightsView(se),Ie===!0&&We.setGlobalState(A.clippingPlanes,se),ie&&je.viewport(oe.copy(ie)),J.length>0&&Xn(J,X,se),Pe.length>0&&Xn(Pe,X,se),Ue.length>0&&Xn(Ue,X,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Ja(w,X,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const ut=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new wi(1,1,{generateMipmaps:!0,type:ut?qi:ti,minFilter:Qr,samples:xt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Pe=U.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||oe;Pe.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const we=A.getRenderTarget(),Ve=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(Pe),A.getClearColor(fe),K=A.getClearAlpha(),K<1&&A.setClearColor(16777215,.5),A.clear(),lt&&Ce.render(se);const tt=A.toneMapping;A.toneMapping=Ti;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),Ie===!0&&We.setGlobalState(A.clippingPlanes,ie),Xn(w,se,ie),W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let yt=0,Ut=X.length;yt<Ut;yt++){const Dt=X[yt],{object:Tt,geometry:Qe,material:Ct,group:gt}=Dt;if(Ct.side===Hi&&Tt.layers.test(ie.layers)){const pn=Ct.side;Ct.side=Un,Ct.needsUpdate=!0,ea(Tt,se,ie,Qe,Ct,gt),Ct.side=pn,Ct.needsUpdate=!0,ut=!0}}ut===!0&&(W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe))}A.setRenderTarget(we,Ve,Oe),A.setClearColor(fe,K),Ze!==void 0&&(ie.viewport=Ze),A.toneMapping=tt}function Xn(w,X,se){const ie=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Pe=w.length;J<Pe;J++){const Ue=w[J],{object:we,geometry:Ve,group:Oe}=Ue;let tt=Ue.material;tt.allowOverride===!0&&ie!==null&&(tt=ie),we.layers.test(se.layers)&&ea(we,X,se,Ve,tt,Oe)}}function ea(w,X,se,ie,J,Pe){w.onBeforeRender(A,X,se,ie,J,Pe),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(A,X,se,ie,w,Pe),J.transparent===!0&&J.side===Hi&&J.forceSinglePass===!1?(J.side=Un,J.needsUpdate=!0,A.renderBufferDirect(se,X,ie,J,w,Pe),J.side=wr,J.needsUpdate=!0,A.renderBufferDirect(se,X,ie,J,w,Pe),J.side=Hi):A.renderBufferDirect(se,X,ie,J,w,Pe),w.onAfterRender(A,X,se,ie,J,Pe)}function br(w,X,se){X.isScene!==!0&&(X=Rt);const ie=y.get(w),J=U.state.lights,Pe=U.state.shadowsArray,Ue=J.state.version,we=Be.getParameters(w,J.state,Pe,X,se),Ve=Be.getProgramCacheKey(we);let Oe=ie.programs;ie.environment=w.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(w.isMeshStandardMaterial?me:he).get(w.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Fn),Oe=new Map,ie.programs=Oe);let tt=Oe.get(Ve);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===Ue)return ta(w,we),tt}else we.uniforms=Be.getUniforms(w),w.onBeforeCompile(we,A),tt=Be.acquireProgram(we,Ve),Oe.set(Ve,tt),ie.uniforms=we.uniforms;const Ze=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=We.uniform),ta(w,we),ie.needsLights=io(w),ie.lightsStateVersion=Ue,ie.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function eo(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Nl.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function ta(w,X){const se=y.get(w);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function to(w,X,se,ie,J){X.isScene!==!0&&(X=Rt),W.resetTextureUnits();const Pe=X.fog,Ue=ie.isMeshStandardMaterial?X.environment:null,we=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ws,Ve=(ie.isMeshStandardMaterial?me:he).get(ie.envMap||Ue),Oe=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!se.morphAttributes.position,ut=!!se.morphAttributes.normal,yt=!!se.morphAttributes.color;let Ut=Ti;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const Dt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Tt=Dt!==void 0?Dt.length:0,Qe=y.get(ie),Ct=U.state.lights;if(Ie===!0&&(pt===!0||w!==ce)){const sn=w===ce&&ie.id===le;We.setState(ie,w,sn)}let gt=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ct.state.version||Qe.outputColorSpace!==we||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Ve||ie.fog===!0&&Qe.fog!==Pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==We.numPlanes||Qe.numIntersection!==We.numIntersection)||Qe.vertexAlphas!==Oe||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ut||Qe.morphColors!==yt||Qe.toneMapping!==Ut||Qe.morphTargetsCount!==Tt)&&(gt=!0):(gt=!0,Qe.__version=ie.version);let pn=Qe.currentProgram;gt===!0&&(pn=br(ie,X,J));let pi=!1,Jt=!1,Pr=!1;const bt=pn.getUniforms(),at=Qe.uniforms;if(je.useProgram(pn.program)&&(pi=!0,Jt=!0,Pr=!0),ie.id!==le&&(le=ie.id,Jt=!0),pi||ce!==w){je.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),bt.setValue(B,"projectionMatrix",w.projectionMatrix),bt.setValue(B,"viewMatrix",w.matrixWorldInverse);const an=bt.map.cameraPosition;an!==void 0&&an.setValue(B,dt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),ce!==w&&(ce=w,Jt=!0,Pr=!0)}if(Qe.needsLights&&(Ct.state.directionalShadowMap.length>0&&bt.setValue(B,"directionalShadowMap",Ct.state.directionalShadowMap,W),Ct.state.spotShadowMap.length>0&&bt.setValue(B,"spotShadowMap",Ct.state.spotShadowMap,W),Ct.state.pointShadowMap.length>0&&bt.setValue(B,"pointShadowMap",Ct.state.pointShadowMap,W)),J.isSkinnedMesh){bt.setOptional(B,J,"bindMatrix"),bt.setOptional(B,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),bt.setValue(B,"boneTexture",sn.boneTexture,W))}J.isBatchedMesh&&(bt.setOptional(B,J,"batchingTexture"),bt.setValue(B,"batchingTexture",J._matricesTexture,W),bt.setOptional(B,J,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",J._indirectTexture,W),bt.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",J._colorsTexture,W));const En=se.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ot.update(J,se,pn),(Jt||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,bt.setValue(B,"receiveShadow",J.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(at.envMap.value=Ve,at.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=TE()),Jt&&(bt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&no(at,Pr),Pe&&ie.fog===!0&&nt.refreshFogUniforms(at,Pe),nt.refreshMaterialUniforms(at,ie,Ae,te,U.state.transmissionRenderTarget[w.id]),Nl.upload(B,eo(Qe),at,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Nl.upload(B,eo(Qe),at,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(B,"center",J.center),bt.setValue(B,"modelViewMatrix",J.modelViewMatrix),bt.setValue(B,"normalMatrix",J.normalMatrix),bt.setValue(B,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const sn=ie.uniformsGroups;for(let an=0,ts=sn.length;an<ts;an++){const mi=sn[an];ve.update(mi,pn),ve.bind(mi,pn)}}return pn}function no(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,X,se){const ie=y.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=X,y.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const se=y.get(w);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const zl=B.createFramebuffer();this.setRenderTarget=function(w,X=0,se=0){$=w,V=X,q=se;let ie=null,J=!1,Pe=!1;if(w){const we=y.get(w);if(we.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),oe.copy(w.viewport),Y.copy(w.scissor),j=w.scissorTest,je.viewport(oe),je.scissor(Y),je.setScissorTest(j),le=-1;return}else if(we.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(we.__hasExternalTextures)W.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&y.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const Oe=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[X])?ie=Oe[X][se]:ie=Oe[X],J=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?ie=y.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?ie=Oe[se]:ie=Oe,oe.copy(w.viewport),Y.copy(w.scissor),j=w.scissorTest}else oe.copy(ne).multiplyScalar(Ae).floor(),Y.copy(de).multiplyScalar(Ae).floor(),j=ye;if(se!==0&&(ie=zl),je.bindFramebuffer(B.FRAMEBUFFER,ie)&&je.drawBuffers(w,ie),je.viewport(oe),je.scissor(Y),je.setScissorTest(j),J){const we=y.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,we.__webglTexture,se)}else if(Pe){const we=X;for(let Ve=0;Ve<w.textures.length;Ve++){const Oe=y.get(w.textures[Ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ve,Oe.__webglTexture,se,we)}}else if(w!==null&&se!==0){const we=y.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,se)}le=-1},this.readRenderTargetPixels=function(w,X,se,ie,J,Pe,Ue,we=0){if(!(w&&w.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){je.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const Oe=w.textures[we],tt=Oe.format,Ze=Oe.type;if(!xt.textureFormatReadable(tt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ze)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ie&&se>=0&&se<=w.height-J&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(X,se,ie,J,Me.convert(tt),Me.convert(Ze),Pe))}finally{const Oe=$!==null?y.get($).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,X,se,ie,J,Pe,Ue,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(X>=0&&X<=w.width-ie&&se>=0&&se<=w.height-J){je.bindFramebuffer(B.FRAMEBUFFER,Ve);const Oe=w.textures[we],tt=Oe.format,Ze=Oe.type;if(!xt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.bufferData(B.PIXEL_PACK_BUFFER,Pe.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(X,se,ie,J,Me.convert(tt),Me.convert(Ze),0);const yt=$!==null?y.get($).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,yt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await D_(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pe),B.deleteBuffer(ut),B.deleteSync(Ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,se=0){const ie=Math.pow(2,-se),J=Math.floor(w.image.width*ie),Pe=Math.floor(w.image.height*ie),Ue=X!==null?X.x:0,we=X!==null?X.y:0;W.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,Ue,we,J,Pe),je.unbindTexture()};const Vl=B.createFramebuffer(),Ht=B.createFramebuffer();this.copyTextureToTexture=function(w,X,se=null,ie=null,J=0,Pe=null){Pe===null&&(J!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=J,J=0):Pe=0);let Ue,we,Ve,Oe,tt,Ze,ut,yt,Ut;const Dt=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(se!==null)Ue=se.max.x-se.min.x,we=se.max.y-se.min.y,Ve=se.isBox3?se.max.z-se.min.z:1,Oe=se.min.x,tt=se.min.y,Ze=se.isBox3?se.min.z:0;else{const En=Math.pow(2,-J);Ue=Math.floor(Dt.width*En),we=Math.floor(Dt.height*En),w.isDataArrayTexture?Ve=Dt.depth:w.isData3DTexture?Ve=Math.floor(Dt.depth*En):Ve=1,Oe=0,tt=0,Ze=0}ie!==null?(ut=ie.x,yt=ie.y,Ut=ie.z):(ut=0,yt=0,Ut=0);const Tt=Me.convert(X.format),Qe=Me.convert(X.type);let Ct;X.isData3DTexture?(W.setTexture3D(X,0),Ct=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),Ct=B.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),Ct=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),pn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pi=B.getParameter(B.UNPACK_SKIP_PIXELS),Jt=B.getParameter(B.UNPACK_SKIP_ROWS),Pr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Dt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const bt=w.isDataArrayTexture||w.isData3DTexture,at=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const En=y.get(w),sn=y.get(X),an=y.get(En.__renderTarget),ts=y.get(sn.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,an.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let mi=0;mi<Ve;mi++)bt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(w).__webglTexture,J,Ze+mi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(X).__webglTexture,Pe,Ut+mi)),B.blitFramebuffer(Oe,tt,Ue,we,ut,yt,Ue,we,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||y.has(w)){const En=y.get(w),sn=y.get(X);je.bindFramebuffer(B.READ_FRAMEBUFFER,Vl),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht);for(let an=0;an<Ve;an++)bt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,J,Ze+an):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,J),at?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,Pe,Ut+an):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,Pe),J!==0?B.blitFramebuffer(Oe,tt,Ue,we,ut,yt,Ue,we,B.COLOR_BUFFER_BIT,B.NEAREST):at?B.copyTexSubImage3D(Ct,Pe,ut,yt,Ut+an,Oe,tt,Ue,we):B.copyTexSubImage2D(Ct,Pe,ut,yt,Oe,tt,Ue,we);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ct,Pe,ut,yt,Ut,Ue,we,Ve,Tt,Qe,Dt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,Pe,ut,yt,Ut,Ue,we,Ve,Tt,Dt.data):B.texSubImage3D(Ct,Pe,ut,yt,Ut,Ue,we,Ve,Tt,Qe,Dt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,ut,yt,Ue,we,Tt,Qe,Dt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,ut,yt,Dt.width,Dt.height,Tt,Dt.data):B.texSubImage2D(B.TEXTURE_2D,Pe,ut,yt,Ue,we,Tt,Qe,Dt);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pr),Pe===0&&X.generateMipmaps&&B.generateMipmap(Ct),je.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){V=0,q=0,$=null,je.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function AE({effectOptions:s={}}){const e=Xt.useRef(null),n=Xt.useRef(null),r=Xt.useRef(null);Xt.useRef(null);const o=Xt.useRef(null);return Xt.useEffect(()=>{var oe,Y,j,fe;if(!e.current)return;const c=e.current,d=c.clientWidth,f=c.clientHeight,p=new Sv;p.background=new Nt(((oe=s.colors)==null?void 0:oe.background)||0),n.current=p;const m=new ei(s.fov||90,d/f,.1,1e3);m.position.z=0;const g=new wE({antialias:!0,alpha:!0});g.setSize(d,f),g.setPixelRatio(window.devicePixelRatio),c.appendChild(g.domElement),r.current=g;const _=s.length||400,x=s.roadWidth||10,M=s.islandWidth||2;s.lanesPerRoad;const T=new js(x,_),C=new Wa({color:((Y=s.colors)==null?void 0:Y.roadColor)||526344}),S=new js(M,_),v=new Wa({color:((j=s.colors)==null?void 0:j.islandColor)||657930}),D=[];for(let K=0;K<20;K++){const L=new Gn(T,C);L.position.z=-K*(_/10),L.position.y=-2,p.add(L),D.push(L);const te=new Gn(S,v);te.position.z=-K*(_/10),te.position.y=-2,p.add(te)}const I=s.totalSideLightSticks||20,P=s.lightStickWidth||[.12,.5],U=s.lightStickHeight||[1.3,1.7],O=((fe=s.colors)==null?void 0:fe.sticks)||242627,F=[];for(let K=0;K<I;K++){const L=Hp.randFloat(P[0],P[1]),te=Hp.randFloat(U[0],U[1]),Ae=new $s(L,te,.1),He=new Wa({color:O}),Ge=new Gn(Ae,He);Ge.position.z=-K*(_/I),Ge.position.x=x/2+.5,Ge.position.y=-1,p.add(Ge),F.push(Ge);const ne=new Gn(Ae,He);ne.position.z=-K*(_/I),ne.position.x=-(x/2)-.5,ne.position.y=-1,p.add(ne),F.push(ne)}let Q=0,A=0;const R=5,V=s.speedUp||2;function q(){o.current=requestAnimationFrame(q),Q+=(A-Q)*.1;const K=R+Q*V;D.forEach((te,Ae)=>{te.position.z+=K,te.position.z>10&&(te.position.z-=_*2)}),F.forEach(te=>{te.position.z+=K,te.position.z>10&&(te.position.z-=_)});const L=Q>0?s.fovSpeedUp||150:s.fov||90;m.fov+=(L-m.fov)*.1,m.updateProjectionMatrix(),g.render(p,m)}q();const $=()=>{A=1,s.onSpeedUp&&s.onSpeedUp()},le=()=>{A=0,s.onSlowDown&&s.onSlowDown()};window.addEventListener("mousemove",$),window.addEventListener("mouseleave",le);const ce=()=>{const K=c.clientWidth,L=c.clientHeight;m.aspect=K/L,m.updateProjectionMatrix(),g.setSize(K,L)};return window.addEventListener("resize",ce),()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseleave",le),window.removeEventListener("resize",ce),o.current&&cancelAnimationFrame(o.current),r.current&&(r.current.dispose(),c.contains(r.current.domElement)&&c.removeChild(r.current.domElement)),D.forEach(K=>{K.geometry.dispose(),K.material.dispose()}),F.forEach(K=>{K.geometry.dispose(),K.material.dispose()})}},[s]),z.jsx("div",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1,pointerEvents:"none"}})}const Zu=[{id:"fmcg",name:"Consumer Goods & FMCG",tagline:"Everyday essentials, crafted for a premium lifestyle.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"]},{id:"manufacturing",name:"Manufacturing",tagline:"Precision engineering and smart factories of tomorrow.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=600&auto=format&fit=crop"]},{id:"warehousing",name:"Warehousing & Logistics",tagline:"Seamless fulfillment centers driving global supply chains.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1553413719-875871274712?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"]},{id:"consumer-tech",name:"Consumer Tech & Apps",tagline:"Beautifully designed interfaces connecting people.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551645121-d1034da75057?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1580927751497-69f9c7e98a3c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"]},{id:"saas",name:"SaaS",tagline:"Enterprise workflows streamlined into single-pane control.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"]},{id:"ai-tools",name:"AI Tools & Agents",tagline:"The cognitive layer automating tasks and amplifying intellect.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"]},{id:"health",name:"Health & Wellness",tagline:"Nurturing minds and bodies with mindful digital touchpoints.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"education",name:"Education",tagline:"Empowering curious minds through intuitive learning platforms.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"]},{id:"agriculture",name:"Agriculture",tagline:"Sustainable food tech and vertical crop optimization.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1560493527-3efd3243e023?q=80&w=600&auto=format&fit=crop"]},{id:"media",name:"Media, News & Entertainment",tagline:"Culture-defining storytelling that shapes the zeitgeist.",accent:"#ffeeba",images:["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"]},{id:"social-media",name:"Social Media",tagline:"Enabling next-generation content creators and networks.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"]},{id:"marketing",name:"Marketing",tagline:"Performance strategies backed by behavioral economics.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"]},{id:"tech-research",name:"Technology & Research",tagline:"Pioneering studies and technological breakthroughs.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"]},{id:"finance",name:"Finance & Compliance",tagline:"Intelligent asset management and compliance systems.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"]},{id:"real-estate",name:"Real Estate",tagline:"Architectural structures designed with human scale in mind.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=600&auto=format&fit=crop"]},{id:"travel",name:"Travel & Hospitality",tagline:"Curating bespoke travel diaries and sensory hotels.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"ips",name:"IPs & Creative Assets",tagline:"Protecting, fostering, and monetizing unique design IPs.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop"]},{id:"events",name:"Events & Experiences",tagline:"Gathering communities in beautifully staged spaces.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"]}];function CE({items:s=[]}){const e=Xt.useRef(null),[n,r]=Xt.useState(0),[o,c]=Xt.useState(!1),[d,f]=Xt.useState(0),[p,m]=Xt.useState(0),[g,_]=Xt.useState(0),x=Xt.useRef(0),M=Xt.useRef(0),T=Xt.useRef(null),C=s.map((q,$)=>({url:q.images[0],name:q.name,accent:q.accent})),v=360/(C.length||1),D=380;Xt.useEffect(()=>{if(o){T.current&&cancelAnimationFrame(T.current);return}const q=.95,$=()=>{Math.abs(g)>.05?(r(le=>le+g),_(le=>le*q),T.current=requestAnimationFrame($)):_(0)};return T.current=requestAnimationFrame($),()=>{T.current&&cancelAnimationFrame(T.current)}},[o,g]);const I=q=>{c(!0),f(q),m(n),_(0),x.current=q,M.current=Date.now()},P=q=>{if(!o)return;const $=q-d,le=.35,ce=p+$*le;r(ce);const oe=Date.now(),Y=oe-M.current;if(Y>0){const fe=(q-x.current)/Y*12*le;_(K=>K*.5+fe*.5)}x.current=q,M.current=oe},U=()=>{c(!1)},O=q=>{I(q.clientX)},F=q=>{P(q.clientX)},Q=()=>{U()},A=q=>{q.touches.length>0&&I(q.touches[0].clientX)},R=q=>{q.touches.length>0&&P(q.touches[0].clientX)},V=()=>{U()};return Xt.useEffect(()=>{const q=e.current;if(!q)return;const $=le=>{o&&le.preventDefault()};return q.addEventListener("touchmove",$,{passive:!1}),()=>{q.removeEventListener("touchmove",$)}},[o]),z.jsxs("div",{className:"dome-gallery-section",children:[z.jsxs("div",{className:"dome-gallery-header",children:[z.jsx("h3",{className:"section-title-accent",children:"Sectors in Motion"}),z.jsx("p",{className:"section-subtitle",children:"Swipe or drag to spin the 3D gallery and explore our active pursuits."})]}),z.jsx("div",{className:"dome-gallery-viewport",ref:e,onMouseDown:O,onMouseMove:F,onMouseUp:Q,onMouseLeave:Q,onTouchStart:A,onTouchMove:R,onTouchEnd:V,children:z.jsx("div",{className:"dome-gallery-cylinder",style:{transform:`translateZ(-${D}px) rotateY(${-n}deg)`,cursor:o?"grabbing":"grab"},children:C.map((q,$)=>{const le=$*v;return z.jsxs("div",{className:"dome-gallery-card",style:{transform:`rotateY(${le}deg) translateZ(${D}px)`,borderTop:`3px solid ${q.accent||"#fff"}`},children:[z.jsx("div",{className:"dome-card-image",style:{backgroundImage:`url("${q.url}")`}}),z.jsxs("div",{className:"dome-card-meta",children:[z.jsx("span",{className:"dome-card-number",children:($+1).toString().padStart(2,"0")}),z.jsx("h4",{className:"dome-card-title",children:q.name})]})]},$)})})})]})}function RE(){const[s,e]=Xt.useState(null),[n,r]=Xt.useState(!1),o=[{id:1,type:"quote",content:"What starts here changes the world.",caption:"Our guiding light. Deeply committed to the pursuits that matter.",bg:"linear-gradient(135deg, #ffddcc 0%, #ffccd5 100%)",textColor:"#333",likes:"1,240",comments:"42"},{id:2,type:"image",url:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",caption:"Collaborating at the intersection of intellect and execution. #WHNLGroup",likes:"892",comments:"18"},{id:3,type:"quote",content:"One group, many pursuits and an obsession for excellence.",caption:"Diverse operations, singular standard. Excellence is not negotiable.",bg:"linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",textColor:"#2a4d33",likes:"1,053",comments:"29"},{id:4,type:"reel",thumbnail:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",caption:"🎥 WHNL Group Promo Reel 2026. A glimpse into our vision, industries, and pursuits. Press Play to experience.",likes:"3,412",comments:"115"},{id:5,type:"quote",content:"Rooted in clarity, action, impact, participation, consistency, tenacity with a dash of humour.",caption:"The foundation of everything we build. And yes, we don't take ourselves too seriously all the time.",bg:"linear-gradient(135deg, #cce5ff 0%, #b8daff 100%)",textColor:"#1d3a5f",likes:"940",comments:"31"},{id:6,type:"image",url:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",caption:"Quiet mornings in our workspace. Designing structures with human scale in mind.",likes:"612",comments:"11"},{id:7,type:"quote",content:"We probably say “why not” for everything that we do.",caption:"Because constraints are just rules someone else made up. We choose exploration.",bg:"linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)",textColor:"#533f03",likes:"1,114",comments:"54"},{id:8,type:"image",url:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",caption:"Dynamic systems. Scalable technology. Real impact.",likes:"743",comments:"14"},{id:9,type:"quote",content:"Unwavering participation, no limitations.",caption:"We show up. Fully. Every single day.",bg:"linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)",textColor:"#721c24",likes:"889",comments:"22"},{id:10,type:"quote",content:"We believe in ourselves almost to the point of delusion.",caption:"Call it crazy, call it bold. Every world-changing pursuit started with absolute belief.",bg:"linear-gradient(135deg, #e8dbfc 0%, #d6bbfb 100%)",textColor:"#3d126b",likes:"1,529",comments:"98"},{id:11,type:"image",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",caption:"Visualizing research & data pipelines. Precision at depth.",likes:"790",comments:"16"},{id:12,type:"quote",content:"An intersection of vision, intellect and impact.",caption:"Where theories turn into applications, and investments turn into impact.",bg:"linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)",textColor:"#0c5460",likes:"1,032",comments:"41"}],c=f=>{e(f),f.type==="reel"&&r(!0)},d=()=>{e(null),r(!1)};return z.jsxs("div",{className:"instagram-section",children:[z.jsx("div",{className:"instagram-header",children:z.jsxs("div",{className:"insta-profile-info",children:[z.jsx("div",{className:"insta-avatar",children:z.jsx("span",{className:"avatar-text",children:"W"})}),z.jsxs("div",{className:"insta-meta",children:[z.jsxs("div",{className:"insta-username-row",children:[z.jsx("h2",{className:"insta-username",children:"whnl.group"}),z.jsx("span",{className:"verified-badge",children:"✓"}),z.jsx("button",{className:"insta-follow-btn",children:"Follow"})]}),z.jsxs("div",{className:"insta-stats",children:[z.jsxs("span",{children:[z.jsx("strong",{children:"12"})," posts"]}),z.jsxs("span",{children:[z.jsx("strong",{children:"48.6K"})," followers"]}),z.jsxs("span",{children:[z.jsx("strong",{children:"142"})," following"]})]}),z.jsxs("div",{className:"insta-bio",children:[z.jsx("p",{className:"bio-name",children:"WHNL Group"}),z.jsx("p",{className:"bio-desc",children:"One group, many pursuits. Rooted in clarity, action, and impact."}),z.jsx("a",{href:"#explore",className:"bio-link",children:"zaina.international/whnl"})]})]})]})}),z.jsx("div",{className:"instagram-grid",children:o.map(f=>z.jsxs("div",{className:`instagram-grid-item ${f.type}`,onClick:()=>c(f),children:[f.type==="quote"&&z.jsxs("div",{className:"insta-quote-card",style:{background:f.bg,color:f.textColor},children:[z.jsxs("p",{className:"quote-text",children:["“",f.content,"”"]}),z.jsx("span",{className:"quote-branding",children:"WHNL"})]}),f.type==="image"&&z.jsx("div",{className:"insta-image-card",style:{backgroundImage:`url("${f.url}")`}}),f.type==="reel"&&z.jsxs("div",{className:"insta-image-card reel-card",style:{backgroundImage:`url("${f.thumbnail}")`},children:[z.jsxs("div",{className:"reel-badge",children:[z.jsx("svg",{viewBox:"0 0 24 24",className:"reel-svg-icon",children:z.jsx("path",{fill:"currentColor",d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-2,14.5v-9l6,4.5Z"})}),z.jsx("span",{children:"REEL"})]}),z.jsx("div",{className:"reel-overlay-play",children:z.jsx("div",{className:"play-triangle"})})]}),z.jsx("div",{className:"insta-hover-overlay",children:z.jsxs("div",{className:"overlay-metrics",children:[z.jsxs("span",{children:["❤️ ",f.likes]}),z.jsxs("span",{children:["💬 ",f.comments]})]})})]},f.id))}),s&&z.jsx("div",{className:"insta-modal-backdrop",onClick:d,children:z.jsxs("div",{className:"insta-modal-content",onClick:f=>f.stopPropagation(),children:[z.jsx("button",{className:"insta-modal-close",onClick:d,children:"×"}),z.jsxs("div",{className:"insta-modal-body",children:[z.jsxs("div",{className:"insta-modal-media",children:[s.type==="quote"&&z.jsxs("div",{className:"insta-quote-card modal-view",style:{background:s.bg,color:s.textColor},children:[z.jsxs("p",{className:"quote-text-large",children:["“",s.content,"”"]}),z.jsx("span",{className:"quote-branding-large",children:"WHNL GROUP"})]}),s.type==="image"&&z.jsx("img",{src:s.url,alt:"Instagram post",className:"modal-img"}),s.type==="reel"&&z.jsx("div",{className:"reel-player-container",children:n?z.jsxs("div",{className:"custom-reel-player",children:[z.jsxs("div",{className:"hyperspeed-reel-simulation",children:[z.jsx("div",{className:"reel-glow-backdrop"}),z.jsxs("div",{className:"reel-text-flow",children:[z.jsx("span",{className:"reel-title-slide",children:"WHNL GROUP"}),z.jsx("span",{className:"reel-subtitle-slide",children:"WHAT STARTS HERE CHANGES THE WORLD"}),z.jsx("span",{className:"reel-tags-slide",children:"#clarity #action #impact"}),z.jsx("div",{className:"reel-visual-pulse"})]})]}),z.jsxs("div",{className:"reel-controls",children:[z.jsx("button",{className:"reel-btn",onClick:()=>r(!1),children:"Pause"}),z.jsx("span",{className:"reel-duration",children:"0:15"})]})]}):z.jsx("div",{className:"reel-poster",style:{backgroundImage:`url("${s.thumbnail}")`},children:z.jsx("button",{className:"play-reel-trigger-btn",onClick:()=>r(!0),children:"Play Promo Reel"})})})]}),z.jsxs("div",{className:"insta-modal-sidebar",children:[z.jsxs("div",{className:"sidebar-header",children:[z.jsx("div",{className:"insta-avatar small",children:"W"}),z.jsxs("div",{children:[z.jsx("span",{className:"sidebar-username",children:"whnl.group"}),z.jsx("span",{className:"verified-badge small",children:"✓"})]})]}),z.jsxs("div",{className:"sidebar-caption-area",children:[z.jsxs("div",{className:"caption-row",children:[z.jsx("div",{className:"insta-avatar small",children:"W"}),z.jsxs("p",{className:"caption-text",children:[z.jsx("strong",{children:"whnl.group"})," ",s.caption]})]}),z.jsx("div",{className:"comment-divider"}),z.jsxs("div",{className:"mock-comments",children:[z.jsxs("div",{className:"comment-row",children:[z.jsx("span",{className:"comment-user",children:"alex_design"}),z.jsx("span",{className:"comment-content",children:"Absolutely love this aesthetic! Sleek. ✨"})]}),z.jsxs("div",{className:"comment-row",children:[z.jsx("span",{className:"comment-user",children:"impact_lab"}),z.jsx("span",{className:"comment-content",children:"This quote hits hard. Bold approach. 🙌"})]}),z.jsxs("div",{className:"comment-row",children:[z.jsx("span",{className:"comment-user",children:"tech_pursuits"}),z.jsx("span",{className:"comment-content",children:"Is the Careers board open? Can't wait!"})]})]})]}),z.jsxs("div",{className:"sidebar-footer",children:[z.jsxs("div",{className:"interactions-row",children:[z.jsx("span",{className:"heart-icon",children:"❤️"}),z.jsx("span",{className:"share-icon",children:"📤"})]}),z.jsxs("div",{className:"likes-count",children:[s.likes," likes"]}),z.jsx("div",{className:"post-date",children:"June 6, 2026"})]})]})]})]})})]})}function bE(){const[s,e]=Xt.useState(null),n=Xt.useRef(null);return Xt.useEffect(()=>{const r=n.current;if(!r)return;const o=c=>{r.style.left=`${c.clientX+180}px`,r.style.top=`${c.clientY+-80}px`};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[]),z.jsxs("div",{className:"page",children:[z.jsxs("header",{className:"header",children:[z.jsx("div",{className:"brand-logo-container",children:z.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"brand-logo"})}),z.jsxs("nav",{className:"nav-links",children:[z.jsx("a",{href:"#industries",className:"nav-link",children:"Sectors"}),z.jsx("a",{href:"#social",className:"nav-link",children:"Journal"}),z.jsx("a",{href:"#communities",className:"nav-link",children:"Careers"})]})]}),z.jsxs("section",{className:"hero-section",children:[z.jsx("div",{className:"hero-hyperspeed-container",children:z.jsx(AE,{effectOptions:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:12,islandWidth:3,lanesPerRoad:3,fov:80,fovSpeedUp:130,speedUp:1.5,carLightsFade:.5,totalSideLightSticks:15,lightPairsPerRoadWay:30,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.08,brokenLinesLengthPercentage:.4,lightStickWidth:[.1,.4],lightStickHeight:[1.2,1.6],movingAwaySpeed:[50,70],movingCloserSpeed:[-100,-140],carLightsLength:[400*.02,400*.15],carLightsRadius:[.04,.12],carWidthPercentage:[.25,.45],carShiftX:[-.6,.6],carFloorSeparation:[0,4],colors:{roadColor:0,islandColor:328965,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[16567509,15125759,16766668],rightCars:[13431531,13757681,13426943],sticks:15125759}}})}),z.jsx("div",{className:"hero-overlay"}),z.jsxs("div",{className:"hero-content",children:[z.jsxs("div",{className:"hero-title-group",children:[z.jsx("span",{className:"hero-tagline",children:"WHNL Group"}),z.jsxs("h1",{className:"hero-title",children:["What starts here",z.jsx("br",{}),"changes the world."]}),z.jsx("p",{className:"hero-subtitle",children:"We are a holding company of businesses that make an impact."})]}),z.jsx("div",{className:"hero-cta-group",children:z.jsx("button",{className:"btn-primary",onClick:()=>{const r=document.getElementById("communities");r&&r.scrollIntoView({behavior:"smooth"})},children:"Explore Careers & Communities"})})]}),z.jsxs("a",{href:"#industries",className:"scroll-indicator",children:[z.jsx("span",{className:"scroll-text",children:"Explore"}),z.jsx("div",{className:"scroll-line"})]})]}),z.jsxs("main",{children:[z.jsxs("section",{id:"industries",className:"zaina-index-section",children:[z.jsxs("div",{className:"zaina-section-header",children:[z.jsx("span",{className:"section-label",children:"Pursuits"}),z.jsx("h2",{className:"section-title",children:"The WHNL Portfolio"}),z.jsx("p",{className:"section-description",children:"An intersection of vision, intellect, and impact. A diverse ecosystem of businesses operating with an obsession for excellence."})]}),z.jsxs("div",{className:"filters-row",children:[z.jsx("span",{className:"filters-title",children:"Industries Index"}),z.jsxs("div",{className:"filter-tags",children:[z.jsxs("span",{className:"filter-tag active",children:["All Sectors (",Zu.length,")"]}),z.jsx("span",{className:"filter-tag",children:"Consumer"}),z.jsx("span",{className:"filter-tag",children:"Tech & AI"}),z.jsx("span",{className:"filter-tag",children:"IP & Creative"})]})]}),z.jsx("div",{className:"zaina-table",children:Zu.map((r,o)=>z.jsxs("div",{className:"zaina-row",onMouseEnter:()=>e(r),onMouseLeave:()=>e(null),children:[z.jsx("span",{className:"row-num",children:(o+1).toString().padStart(2,"0")}),z.jsx("span",{className:"row-name",children:r.name}),z.jsx("span",{className:"row-tagline",children:r.tagline}),z.jsx("div",{className:"row-action",children:z.jsx("span",{className:"action-arrow",children:"→"})})]},r.id))}),z.jsx("div",{ref:n,className:`float-preview-container ${s?"visible":""}`,children:s&&z.jsx("div",{className:"image-stack",children:s.images.slice(0,3).map((r,o)=>z.jsx("div",{className:`stack-image img-${o}`,style:{backgroundImage:`url("${r}")`}},o))})})]}),z.jsx("section",{className:"dome-gallery-section",children:z.jsx(CE,{items:Zu})}),z.jsx("section",{id:"social",children:z.jsx(RE,{})}),z.jsx("section",{id:"communities",className:"communities-section",children:z.jsxs("div",{className:"communities-content",children:[z.jsx("span",{className:"section-label",children:"Join Our Pursuit"}),z.jsx("h2",{className:"section-title",children:"Careers & Communities"}),z.jsx("p",{className:"section-description",children:"We believe in ourselves almost to the point of delusion. If you carry unwavering participation, no limitations, and a healthy dose of tenacity, let's design the future together."}),z.jsxs("div",{className:"communities-grid",children:[z.jsxs("div",{className:"community-card",children:[z.jsx("span",{className:"card-label",children:"Active Talents"}),z.jsx("h3",{className:"card-title",children:"Explore Careers"}),z.jsx("p",{className:"card-description",children:"Discover open opportunities across our businesses in technology, FMCG, SaaS, manufacturing, real estate, and finance."}),z.jsxs("a",{href:"#apply",className:"card-link",onClick:r=>{r.preventDefault(),alert("Talent recruitment portal coming soon. For inquiries, email careers@whnl.group")},children:["Apply Online ",z.jsx("span",{children:"→"})]})]}),z.jsxs("div",{className:"community-card",children:[z.jsx("span",{className:"card-label",children:"Eco-systems"}),z.jsx("h3",{className:"card-title",children:"Our Communities"}),z.jsx("p",{className:"card-description",children:"Learn about our collaborative networks, events, hackathons, creative IPs, and wellness experiences designed to cultivate impact."}),z.jsxs("a",{href:"#connect",className:"card-link",onClick:r=>{r.preventDefault(),alert("Community platform launch scheduled for Fall 2026.")},children:["Get Involved ",z.jsx("span",{children:"→"})]})]})]})]})})]}),z.jsxs("footer",{className:"whnl-footer",children:[z.jsxs("div",{className:"footer-top",children:[z.jsxs("div",{className:"footer-brand",children:[z.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"footer-logo"}),z.jsx("p",{className:"footer-pitch",children:"One group, many pursuits, and an obsession for excellence."})]}),z.jsxs("div",{className:"footer-cols",children:[z.jsxs("div",{className:"footer-col",children:[z.jsx("h4",{className:"footer-col-title",children:"Operations"}),z.jsxs("ul",{children:[z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"Consumer & FMCG"})}),z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"Technology & SaaS"})}),z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"Manufacturing & Logistics"})}),z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"IPs & Media"})})]})]}),z.jsxs("div",{className:"footer-col",children:[z.jsx("h4",{className:"footer-col-title",children:"Company"}),z.jsxs("ul",{children:[z.jsx("li",{children:z.jsx("a",{href:"#social",children:"Journal"})}),z.jsx("li",{children:z.jsx("a",{href:"#communities",children:"Careers"})}),z.jsx("li",{children:z.jsx("a",{href:"#communities",children:"Communities"})}),z.jsx("li",{children:z.jsx("a",{href:"#contact",onClick:r=>{r.preventDefault(),alert("Contact: hello@whnl.group")},children:"Contact Us"})})]})]})]})]}),z.jsxs("div",{className:"footer-bottom",children:[z.jsxs("span",{children:["© ",new Date().getFullYear()," WHNL Group. All rights reserved."]}),z.jsx("span",{children:"Sleek • Premium • sorted"})]})]})]})}Q0.createRoot(document.getElementById("root")).render(z.jsx(X0.StrictMode,{children:z.jsx(bE,{})}));
