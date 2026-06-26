(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Wm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},Da={},Eu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function a_(){if(Fp)return vt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(U,se,Ae){this.props=U,this.context=se,this.refs=A,this.updater=Ae||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function N(U,se,Ae){this.props=U,this.context=se,this.refs=A,this.updater=Ae||M}var L=N.prototype=new g;L.constructor=N,T(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,D=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function q(U,se,Ae){var He,$e={},te=null,de=null;if(se!=null)for(He in se.ref!==void 0&&(de=se.ref),se.key!==void 0&&(te=""+se.key),se)D.call(se,He)&&!O.hasOwnProperty(He)&&($e[He]=se[He]);var ve=arguments.length-2;if(ve===1)$e.children=Ae;else if(1<ve){for(var Be=Array(ve),Le=0;Le<ve;Le++)Be[Le]=arguments[Le+2];$e.children=Be}if(U&&U.defaultProps)for(He in ve=U.defaultProps,ve)$e[He]===void 0&&($e[He]=ve[He]);return{$$typeof:s,type:U,key:te,ref:de,props:$e,_owner:F.current}}function w(U,se){return{$$typeof:s,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return se[Ae]})}var K=/\/+/g;function $(U,se){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):se.toString(36)}function oe(U,se,Ae,He,$e){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(te){case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case s:case e:de=!0}}if(de)return de=U,$e=$e(de),U=He===""?"."+$(de,0):He,P($e)?(Ae="",U!=null&&(Ae=U.replace(K,"$&/")+"/"),oe($e,se,Ae,"",function(Le){return Le})):$e!=null&&(R($e)&&($e=w($e,Ae+(!$e.key||de&&de.key===$e.key?"":(""+$e.key).replace(K,"$&/")+"/")+U)),se.push($e)),1;if(de=0,He=He===""?".":He+":",P(U))for(var ve=0;ve<U.length;ve++){te=U[ve];var Be=He+$(te,ve);de+=oe(te,se,Ae,Be,$e)}else if(Be=x(U),typeof Be=="function")for(U=Be.call(U),ve=0;!(te=U.next()).done;)te=te.value,Be=He+$(te,ve++),de+=oe(te,se,Ae,Be,$e);else if(te==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return de}function ce(U,se,Ae){if(U==null)return U;var He=[],$e=0;return oe(U,He,"","",function(te){return se.call(Ae,te,$e++)}),He}function ie(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var H={current:null},j={transition:null},fe={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:j,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ce,forEach:function(U,se,Ae){ce(U,function(){se.apply(this,arguments)},Ae)},count:function(U){var se=0;return ce(U,function(){se++}),se},toArray:function(U){return ce(U,function(se){return se})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},vt.Component=S,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=N,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,vt.act=re,vt.cloneElement=function(U,se,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var He=T({},U.props),$e=U.key,te=U.ref,de=U._owner;if(se!=null){if(se.ref!==void 0&&(te=se.ref,de=F.current),se.key!==void 0&&($e=""+se.key),U.type&&U.type.defaultProps)var ve=U.type.defaultProps;for(Be in se)D.call(se,Be)&&!O.hasOwnProperty(Be)&&(He[Be]=se[Be]===void 0&&ve!==void 0?ve[Be]:se[Be])}var Be=arguments.length-2;if(Be===1)He.children=Ae;else if(1<Be){ve=Array(Be);for(var Le=0;Le<Be;Le++)ve[Le]=arguments[Le+2];He.children=ve}return{$$typeof:s,type:U.type,key:$e,ref:te,props:He,_owner:de}},vt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},vt.createElement=q,vt.createFactory=function(U){var se=q.bind(null,U);return se.type=U,se},vt.createRef=function(){return{current:null}},vt.forwardRef=function(U){return{$$typeof:f,render:U}},vt.isValidElement=R,vt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},vt.memo=function(U,se){return{$$typeof:m,type:U,compare:se===void 0?null:se}},vt.startTransition=function(U){var se=j.transition;j.transition={};try{U()}finally{j.transition=se}},vt.unstable_act=re,vt.useCallback=function(U,se){return H.current.useCallback(U,se)},vt.useContext=function(U){return H.current.useContext(U)},vt.useDebugValue=function(){},vt.useDeferredValue=function(U){return H.current.useDeferredValue(U)},vt.useEffect=function(U,se){return H.current.useEffect(U,se)},vt.useId=function(){return H.current.useId()},vt.useImperativeHandle=function(U,se,Ae){return H.current.useImperativeHandle(U,se,Ae)},vt.useInsertionEffect=function(U,se){return H.current.useInsertionEffect(U,se)},vt.useLayoutEffect=function(U,se){return H.current.useLayoutEffect(U,se)},vt.useMemo=function(U,se){return H.current.useMemo(U,se)},vt.useReducer=function(U,se,Ae){return H.current.useReducer(U,se,Ae)},vt.useRef=function(U){return H.current.useRef(U)},vt.useState=function(U){return H.current.useState(U)},vt.useSyncExternalStore=function(U,se,Ae){return H.current.useSyncExternalStore(U,se,Ae)},vt.useTransition=function(){return H.current.useTransition()},vt.version="18.3.1",vt}var Op;function nd(){return Op||(Op=1,Eu.exports=a_()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function o_(){if(kp)return Da;kp=1;var s=nd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var v,_={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!c.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:_,_owner:o.current}}return Da.Fragment=n,Da.jsx=u,Da.jsxs=u,Da}var Bp;function l_(){return Bp||(Bp=1,Mu.exports=o_()),Mu.exports}var k=l_(),It=nd();const c_=Wm(It);var al={},Tu={exports:{}},Fn={},wu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function u_(){return zp||(zp=1,(function(s){function e(j,fe){var re=j.length;j.push(fe);e:for(;0<re;){var U=re-1>>>1,se=j[U];if(0<o(se,fe))j[U]=fe,j[re]=se,re=U;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var fe=j[0],re=j.pop();if(re!==fe){j[0]=re;e:for(var U=0,se=j.length,Ae=se>>>1;U<Ae;){var He=2*(U+1)-1,$e=j[He],te=He+1,de=j[te];if(0>o($e,re))te<se&&0>o(de,$e)?(j[U]=de,j[te]=re,U=te):(j[U]=$e,j[He]=re,U=He);else if(te<se&&0>o(de,re))j[U]=de,j[te]=re,U=te;else break e}}return fe}function o(j,fe){var re=j.sortIndex-fe.sortIndex;return re!==0?re:j.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],v=1,_=null,x=3,M=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(j){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=j)r(m),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=n(m)}}function P(j){if(A=!1,L(j),!T)if(n(h)!==null)T=!0,ie(D);else{var fe=n(m);fe!==null&&H(P,fe.startTime-j)}}function D(j,fe){T=!1,A&&(A=!1,g(q),q=-1),M=!0;var re=x;try{for(L(fe),_=n(h);_!==null&&(!(_.expirationTime>fe)||j&&!z());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var se=U(_.expirationTime<=fe);fe=s.unstable_now(),typeof se=="function"?_.callback=se:_===n(h)&&r(h),L(fe)}else r(h);_=n(h)}if(_!==null)var Ae=!0;else{var He=n(m);He!==null&&H(P,He.startTime-fe),Ae=!1}return Ae}finally{_=null,x=re,M=!1}}var F=!1,O=null,q=-1,w=5,R=-1;function z(){return!(s.unstable_now()-R<w)}function K(){if(O!==null){var j=s.unstable_now();R=j;var fe=!0;try{fe=O(!0,j)}finally{fe?$():(F=!1,O=null)}}else F=!1}var $;if(typeof N=="function")$=function(){N(K)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=K,$=function(){ce.postMessage(null)}}else $=function(){S(K,0)};function ie(j){O=j,F||(F=!0,$())}function H(j,fe){q=S(function(){j(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ie(D))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(j){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var re=x;x=fe;try{return j()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,fe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=x;x=j;try{return fe()}finally{x=re}},s.unstable_scheduleCallback=function(j,fe,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=re+se,j={id:v++,callback:fe,priorityLevel:j,startTime:re,expirationTime:se,sortIndex:-1},re>U?(j.sortIndex=re,e(m,j),n(h)===null&&j===n(m)&&(A?(g(q),q=-1):A=!0,H(P,re-U))):(j.sortIndex=se,e(h,j),T||M||(T=!0,ie(D))),j},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(j){var fe=x;return function(){var re=x;x=fe;try{return j.apply(this,arguments)}finally{x=re}}}})(Au)),Au}var Vp;function f_(){return Vp||(Vp=1,wu.exports=u_()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function d_(){if(Hp)return Fn;Hp=1;var s=nd(),e=f_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return h.call(_,t)?!0:h.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,a,l,d,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,l){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,l)&&(a=null),l||d===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),j=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function se(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ae=!1;function He(t,i){if(!t||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var l=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){l=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){l=ae}t()}}catch(ae){if(ae&&l&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),p=l.stack.split(`
`),E=d.length-1,I=p.length-1;1<=E&&0<=I&&d[E]!==p[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==p[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==p[I]){var V=`
`+d[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?se(t):""}function $e(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case w:return"Profiler";case q:return"StrictMode";case $:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:te(t.type)||"Memo";case ie:i=t._payload,t=t._init;try{return te(t(i))}catch{}}return null}function de(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(t){var i=Be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function mt(t){t._valueTracker||(t._valueTracker=Le(t))}function Ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Be(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ne(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Ke(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ve(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function xt(t,i){Ve(t,i);var a=ve(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Mt(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Mt(t,i,a){(i!=="number"||ht(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var lt=Array.isArray;function dt(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Oe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(lt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ve(a)}}function y(t,i){var a=ve(i.value),l=ve(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function X(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ue,Ge=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(t){st.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),We[i]=We[t]})});function ye(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||We.hasOwnProperty(t)&&We[t]?(""+i).trim():i+"px"}function be(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=ye(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var qe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(t,i){if(i){if(qe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,Me=null,Ie=null;function xe(t){if(t=va(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=yo(i),De(t.stateNode,t.type,i))}}function me(t){Me?Ie?Ie.push(t):Ie=[t]:Me=t}function Re(){if(Me){var t=Me,i=Ie;if(Ie=Me=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function at(t,i){return t(i)}function Ut(){}var Et=!1;function Bn(t,i,a){if(Et)return t(i,a);Et=!0;try{return at(t,i,a)}finally{Et=!1,(Me!==null||Ie!==null)&&(Ut(),Re())}}function wn(t,i){var a=t.stateNode;if(a===null)return null;var l=yo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zs=!1;if(f)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Zs=!1}function Qs(t,i,a,l,d,p,E,I,V){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(_e){this.onError(_e)}}var Rr=!1,br=null,Pr=!1,ri=null,Js={onError:function(t){Rr=!0,br=t}};function Ja(t,i,a,l,d,p,E,I,V){Rr=!1,br=null,Qs.apply(Js,arguments)}function eo(t,i,a,l,d,p,E,I,V){if(Ja.apply(this,arguments),Rr){if(Rr){var ae=br;Rr=!1,br=null}else throw Error(n(198));Pr||(Pr=!0,ri=ae)}}function Yn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Nr(t){if(Yn(t)!==t)throw Error(n(188))}function to(t){var i=t.alternate;if(!i){if(i=Yn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Nr(d),t;if(p===l)return Nr(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=p;else{for(var E=!1,I=d.child;I;){if(I===a){E=!0,a=d,l=p;break}if(I===l){E=!0,l=d,a=p;break}I=I.sibling}if(!E){for(I=p.child;I;){if(I===a){E=!0,a=p,l=d;break}if(I===l){E=!0,l=p,a=d;break}I=I.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ta(t){return t=to(t),t!==null?no(t):null}function no(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=no(t);if(i!==null)return i;t=t.sibling}return null}var io=e.unstable_scheduleCallback,ro=e.unstable_cancelCallback,Xl=e.unstable_shouldYield,jl=e.unstable_requestPaint,Wt=e.unstable_now,C=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,le=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Q=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Fe=null,we=null;function je(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:gt,rt=Math.log,et=Math.LN2;function gt(t){return t>>>=0,t===0?32:31-(rt(t)/et|0)|0}var Tt=64,kt=4194304;function Ot(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,E=a&268435455;if(E!==0){var I=E&~d;I!==0?l=Ot(I):(p&=E,p!==0&&(l=Ot(p)))}else E=a&~d,E!==0?l=Ot(E):p!==0&&(l=Ot(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-ze(i),d=1<<a,l|=t[a],i&=~d;return l}function tt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-ze(p),I=1<<E,V=d[E];V===-1?((I&a)===0||(I&l)!==0)&&(d[E]=tt(I,i)):V<=i&&(t.expiredLanes|=I),p&=~I}}function St(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),t}function _i(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function en(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ze(i),t[i]=a}function Lr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-ze(a),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~p}}function Dt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-ze(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var ct=0;function An(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var an,on,rs,vi,vd,ql=!1,so=[],Ji=null,er=null,tr=null,na=new Map,ia=new Map,nr=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(t,i){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":na.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(i.pointerId)}}function ra(t,i,a,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=va(i),i!==null&&on(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function bg(t,i,a,l,d){switch(i){case"focusin":return Ji=ra(Ji,t,i,a,l,d),!0;case"dragenter":return er=ra(er,t,i,a,l,d),!0;case"mouseover":return tr=ra(tr,t,i,a,l,d),!0;case"pointerover":var p=d.pointerId;return na.set(p,ra(na.get(p)||null,t,i,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,ia.set(p,ra(ia.get(p)||null,t,i,a,l,d)),!0}return!1}function Sd(t){var i=Dr(t.target);if(i!==null){var a=Yn(i);if(a!==null){if(i=a.tag,i===13){if(i=ea(a),i!==null){t.blockedOn=i,vd(t.priority,function(){rs(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=$l(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ft=l,a.target.dispatchEvent(l),ft=null}else return i=va(a),i!==null&&on(i),t.blockedOn=a,!1;i.shift()}return!0}function yd(t,i,a){ao(t)&&a.delete(i)}function Pg(){ql=!1,Ji!==null&&ao(Ji)&&(Ji=null),er!==null&&ao(er)&&(er=null),tr!==null&&ao(tr)&&(tr=null),na.forEach(yd),ia.forEach(yd)}function sa(t,i){t.blockedOn===i&&(t.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pg)))}function aa(t){function i(d){return sa(d,t)}if(0<so.length){sa(so[0],t);for(var a=1;a<so.length;a++){var l=so[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Ji!==null&&sa(Ji,t),er!==null&&sa(er,t),tr!==null&&sa(tr,t),na.forEach(i),ia.forEach(i),a=0;a<nr.length;a++)l=nr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)Sd(a),a.blockedOn===null&&nr.shift()}var ss=P.ReactCurrentBatchConfig,oo=!0;function Ng(t,i,a,l){var d=ct,p=ss.transition;ss.transition=null;try{ct=1,Yl(t,i,a,l)}finally{ct=d,ss.transition=p}}function Lg(t,i,a,l){var d=ct,p=ss.transition;ss.transition=null;try{ct=4,Yl(t,i,a,l)}finally{ct=d,ss.transition=p}}function Yl(t,i,a,l){if(oo){var d=$l(t,i,a,l);if(d===null)dc(t,i,l,lo,a),xd(t,l);else if(bg(d,t,i,a,l))l.stopPropagation();else if(xd(t,l),i&4&&-1<Rg.indexOf(t)){for(;d!==null;){var p=va(d);if(p!==null&&an(p),p=$l(t,i,a,l),p===null&&dc(t,i,l,lo,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else dc(t,i,l,null,a)}}var lo=null;function $l(t,i,a,l){if(lo=null,t=G(l),t=Dr(t),t!==null)if(i=Yn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ea(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function Md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C()){case Y:return 1;case le:return 4;case ne:case Q:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var ir=null,Kl=null,co=null;function Ed(){if(co)return co;var t,i=Kl,a=i.length,l,d="value"in ir?ir.value:ir.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===d[p-l];l++);return co=d.slice(t,1<l?1-l:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Td(){return!1}function zn(t){function i(a,l,d,p,E){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fo:Td,this.isPropagationStopped=Td,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=zn(as),oa=re({},as,{view:0,detail:0}),Dg=zn(oa),Ql,Jl,la,ho=re({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Ql=t.screenX-la.screenX,Jl=t.screenY-la.screenY):Jl=Ql=0,la=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),wd=zn(ho),Ig=re({},ho,{dataTransfer:0}),Ug=zn(Ig),Fg=re({},oa,{relatedTarget:0}),ec=zn(Fg),Og=re({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=zn(Og),Bg=re({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=zn(Bg),Vg=re({},as,{data:0}),Ad=zn(Vg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Wg[t])?!!i[t]:!1}function tc(){return Xg}var jg=re({},oa,{key:function(t){if(t.key){var i=Hg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qg=zn(jg),Yg=re({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=zn(Yg),$g=re({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),Kg=zn($g),Zg=re({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=zn(Zg),Jg=re({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=zn(Jg),t0=[9,13,27,32],nc=f&&"CompositionEvent"in window,ca=null;f&&"documentMode"in document&&(ca=document.documentMode);var n0=f&&"TextEvent"in window&&!ca,Rd=f&&(!nc||ca&&8<ca&&11>=ca),bd=" ",Pd=!1;function Nd(t,i){switch(t){case"keyup":return t0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function i0(t,i){switch(t){case"compositionend":return Ld(i);case"keypress":return i.which!==32?null:(Pd=!0,bd);case"textInput":return t=i.data,t===bd&&Pd?null:t;default:return null}}function r0(t,i){if(os)return t==="compositionend"||!nc&&Nd(t,i)?(t=Ed(),co=Kl=ir=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rd&&i.locale!=="ko"?null:i.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!s0[t.type]:i==="textarea"}function Id(t,i,a,l){me(l),i=vo(i,"onChange"),0<i.length&&(a=new Zl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ua=null,fa=null;function a0(t){Qd(t,0)}function po(t){var i=ds(t);if(Ht(i))return t}function o0(t,i){if(t==="change")return i}var Ud=!1;if(f){var ic;if(f){var rc="oninput"in document;if(!rc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),rc=typeof Fd.oninput=="function"}ic=rc}else ic=!1;Ud=ic&&(!document.documentMode||9<document.documentMode)}function Od(){ua&&(ua.detachEvent("onpropertychange",kd),fa=ua=null)}function kd(t){if(t.propertyName==="value"&&po(fa)){var i=[];Id(i,fa,t,G(t)),Bn(a0,i)}}function l0(t,i,a){t==="focusin"?(Od(),ua=i,fa=a,ua.attachEvent("onpropertychange",kd)):t==="focusout"&&Od()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(fa)}function u0(t,i){if(t==="click")return po(i)}function f0(t,i){if(t==="input"||t==="change")return po(i)}function d0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:d0;function da(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(i,d)||!si(t[d],i[d]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var a=Bd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bd(a)}}function Vd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hd(){for(var t=window,i=ht();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ht(t.document)}return i}function sc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function h0(t){var i=Hd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Vd(a.ownerDocument.documentElement,a)){if(l!==null&&sc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=zd(a,p);var E=zd(a,l);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var p0=f&&"documentMode"in document&&11>=document.documentMode,ls=null,ac=null,ha=null,oc=!1;function Gd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oc||ls==null||ls!==ht(l)||(l=ls,"selectionStart"in l&&sc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ha&&da(ha,l)||(ha=l,l=vo(ac,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ls)))}function mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},lc={},Wd={};f&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function go(t){if(lc[t])return lc[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wd)return lc[t]=i[a];return t}var Xd=go("animationend"),jd=go("animationiteration"),qd=go("animationstart"),Yd=go("transitionend"),$d=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,i){$d.set(t,i),c(i,[t])}for(var cc=0;cc<Kd.length;cc++){var uc=Kd[cc],m0=uc.toLowerCase(),g0=uc[0].toUpperCase()+uc.slice(1);rr(m0,"on"+g0)}rr(Xd,"onAnimationEnd"),rr(jd,"onAnimationIteration"),rr(qd,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Yd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Zd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,eo(l,i,void 0,t),t.currentTarget=null}function Qd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],V=I.instance,ae=I.currentTarget;if(I=I.listener,V!==p&&d.isPropagationStopped())break e;Zd(d,I,ae),p=V}else for(E=0;E<l.length;E++){if(I=l[E],V=I.instance,ae=I.currentTarget,I=I.listener,V!==p&&d.isPropagationStopped())break e;Zd(d,I,ae),p=V}}}if(Pr)throw t=ri,Pr=!1,ri=null,t}function zt(t,i){var a=i[vc];a===void 0&&(a=i[vc]=new Set);var l=t+"__bubble";a.has(l)||(Jd(i,t,2,!1),a.add(l))}function fc(t,i,a){var l=0;i&&(l|=4),Jd(a,t,l,i)}var _o="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[_o]){t[_o]=!0,r.forEach(function(a){a!=="selectionchange"&&(_0.has(a)||fc(a,!1,t),fc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[_o]||(i[_o]=!0,fc("selectionchange",!1,i))}}function Jd(t,i,a,l){switch(Md(i)){case 1:var d=Ng;break;case 4:d=Lg;break;default:d=Yl}a=d.bind(null,i,a,t),d=void 0,!Zs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function dc(t,i,a,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=l.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Dr(I),E===null)return;if(V=E.tag,V===5||V===6){l=p=E;continue e}I=I.parentNode}}l=l.return}Bn(function(){var ae=p,_e=G(a),Se=[];e:{var ge=$d.get(t);if(ge!==void 0){var ke=Zl,Ye=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":ke=qg;break;case"focusin":Ye="focus",ke=ec;break;case"focusout":Ye="blur",ke=ec;break;case"beforeblur":case"afterblur":ke=ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Kg;break;case Xd:case jd:case qd:ke=kg;break;case Yd:ke=Qg;break;case"scroll":ke=Dg;break;case"wheel":ke=e0;break;case"copy":case"cut":case"paste":ke=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Cd}var Qe=(i&4)!==0,Kt=!Qe&&t==="scroll",Z=Qe?ge!==null?ge+"Capture":null:ge;Qe=[];for(var W=ae,J;W!==null;){J=W;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,Z!==null&&(Ee=wn(W,Z),Ee!=null&&Qe.push(ga(W,Ee,J)))),Kt)break;W=W.return}0<Qe.length&&(ge=new ke(ge,Ye,null,a,_e),Se.push({event:ge,listeners:Qe}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",ge&&a!==ft&&(Ye=a.relatedTarget||a.fromElement)&&(Dr(Ye)||Ye[Ii]))break e;if((ke||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,ke?(Ye=a.relatedTarget||a.toElement,ke=ae,Ye=Ye?Dr(Ye):null,Ye!==null&&(Kt=Yn(Ye),Ye!==Kt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ke=null,Ye=ae),ke!==Ye)){if(Qe=wd,Ee="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Cd,Ee="onPointerLeave",Z="onPointerEnter",W="pointer"),Kt=ke==null?ge:ds(ke),J=Ye==null?ge:ds(Ye),ge=new Qe(Ee,W+"leave",ke,a,_e),ge.target=Kt,ge.relatedTarget=J,Ee=null,Dr(_e)===ae&&(Qe=new Qe(Z,W+"enter",Ye,a,_e),Qe.target=J,Qe.relatedTarget=Kt,Ee=Qe),Kt=Ee,ke&&Ye)t:{for(Qe=ke,Z=Ye,W=0,J=Qe;J;J=us(J))W++;for(J=0,Ee=Z;Ee;Ee=us(Ee))J++;for(;0<W-J;)Qe=us(Qe),W--;for(;0<J-W;)Z=us(Z),J--;for(;W--;){if(Qe===Z||Z!==null&&Qe===Z.alternate)break t;Qe=us(Qe),Z=us(Z)}Qe=null}else Qe=null;ke!==null&&eh(Se,ge,ke,Qe,!1),Ye!==null&&Kt!==null&&eh(Se,Kt,Ye,Qe,!0)}}e:{if(ge=ae?ds(ae):window,ke=ge.nodeName&&ge.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ge.type==="file")var Je=o0;else if(Dd(ge))if(Ud)Je=f0;else{Je=c0;var nt=l0}else(ke=ge.nodeName)&&ke.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Je=u0);if(Je&&(Je=Je(t,ae))){Id(Se,Je,a,_e);break e}nt&&nt(t,ge,ae),t==="focusout"&&(nt=ge._wrapperState)&&nt.controlled&&ge.type==="number"&&Mt(ge,"number",ge.value)}switch(nt=ae?ds(ae):window,t){case"focusin":(Dd(nt)||nt.contentEditable==="true")&&(ls=nt,ac=ae,ha=null);break;case"focusout":ha=ac=ls=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Gd(Se,a,_e);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":Gd(Se,a,_e)}var it;if(nc)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else os?Nd(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Rd&&a.locale!=="ko"&&(os||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&os&&(it=Ed()):(ir=_e,Kl="value"in ir?ir.value:ir.textContent,os=!0)),nt=vo(ae,ot),0<nt.length&&(ot=new Ad(ot,t,null,a,_e),Se.push({event:ot,listeners:nt}),it?ot.data=it:(it=Ld(a),it!==null&&(ot.data=it)))),(it=n0?i0(t,a):r0(t,a))&&(ae=vo(ae,"onBeforeInput"),0<ae.length&&(_e=new Ad("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ae}),_e.data=it))}Qd(Se,i)})}function ga(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=wn(t,a),p!=null&&l.unshift(ga(t,p,d)),p=wn(t,i),p!=null&&l.push(ga(t,p,d))),t=t.return}return l}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,i,a,l,d){for(var p=i._reactName,E=[];a!==null&&a!==l;){var I=a,V=I.alternate,ae=I.stateNode;if(V!==null&&V===l)break;I.tag===5&&ae!==null&&(I=ae,d?(V=wn(a,p),V!=null&&E.unshift(ga(a,V,I))):d||(V=wn(a,p),V!=null&&E.push(ga(a,V,I)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var v0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(v0,`
`).replace(x0,"")}function xo(t,i,a){if(i=th(i),th(t)!==i&&a)throw Error(n(425))}function So(){}var hc=null,pc=null;function mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,S0=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(M0)}:gc;function M0(t){setTimeout(function(){throw t})}function _c(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),aa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);aa(i)}function sr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ih(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),xi="__reactFiber$"+fs,_a="__reactProps$"+fs,Ii="__reactContainer$"+fs,vc="__reactEvents$"+fs,E0="__reactListeners$"+fs,T0="__reactHandles$"+fs;function Dr(t){var i=t[xi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ii]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=ih(t);t!==null;){if(a=t[xi])return a;t=ih(t)}return i}t=a,a=t.parentNode}return null}function va(t){return t=t[xi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function yo(t){return t[_a]||null}var xc=[],hs=-1;function ar(t){return{current:t}}function Vt(t){0>hs||(t.current=xc[hs],xc[hs]=null,hs--)}function Bt(t,i){hs++,xc[hs]=t.current,t.current=i}var or={},_n=ar(or),Nn=ar(!1),Ir=or;function ps(t,i){var a=t.type.contextTypes;if(!a)return or;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(t){return t=t.childContextTypes,t!=null}function Mo(){Vt(Nn),Vt(_n)}function rh(t,i,a){if(_n.current!==or)throw Error(n(168));Bt(_n,i),Bt(Nn,a)}function sh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,de(t)||"Unknown",d));return re({},a,l)}function Eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Ir=_n.current,Bt(_n,t),Bt(Nn,Nn.current),!0}function ah(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=sh(t,i,Ir),l.__reactInternalMemoizedMergedChildContext=t,Vt(Nn),Vt(_n),Bt(_n,t)):Vt(Nn),Bt(Nn,a)}var Ui=null,To=!1,Sc=!1;function oh(t){Ui===null?Ui=[t]:Ui.push(t)}function w0(t){To=!0,oh(t)}function lr(){if(!Sc&&Ui!==null){Sc=!0;var t=0,i=ct;try{var a=Ui;for(ct=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ui=null,To=!1}catch(d){throw Ui!==null&&(Ui=Ui.slice(t+1)),io(Y,lr),d}finally{ct=i,Sc=!1}}return null}var ms=[],gs=0,wo=null,Ao=0,$n=[],Kn=0,Ur=null,Fi=1,Oi="";function Fr(t,i){ms[gs++]=Ao,ms[gs++]=wo,wo=t,Ao=i}function lh(t,i,a){$n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=Ur,Ur=t;var l=Fi;t=Oi;var d=32-ze(l)-1;l&=~(1<<d),a+=1;var p=32-ze(i)+d;if(30<p){var E=d-d%5;p=(l&(1<<E)-1).toString(32),l>>=E,d-=E,Fi=1<<32-ze(i)+d|a<<d|l,Oi=p+t}else Fi=1<<p|a<<d|l,Oi=t}function yc(t){t.return!==null&&(Fr(t,1),lh(t,1,0))}function Mc(t){for(;t===wo;)wo=ms[--gs],ms[gs]=null,Ao=ms[--gs],ms[gs]=null;for(;t===Ur;)Ur=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null}var Vn=null,Hn=null,Gt=!1,ai=null;function ch(t,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function uh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=sr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Vn=t,Hn=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(Gt){var i=Hn;if(i){var a=i;if(!uh(t,i)){if(Ec(t))throw Error(n(418));i=sr(a.nextSibling);var l=Vn;i&&uh(t,i)?ch(l,a):(t.flags=t.flags&-4097|2,Gt=!1,Vn=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,Vn=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Co(t){if(t!==Vn)return!1;if(!Gt)return fh(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!mc(t.type,t.memoizedProps)),i&&(i=Hn)){if(Ec(t))throw dh(),Error(n(418));for(;i;)ch(t,i),i=sr(i.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Hn=sr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Vn?sr(t.stateNode.nextSibling):null;return!0}function dh(){for(var t=Hn;t;)t=sr(t.nextSibling)}function _s(){Hn=Vn=null,Gt=!1}function wc(t){ai===null?ai=[t]:ai.push(t)}var A0=P.ReactCurrentBatchConfig;function xa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var I=d.refs;E===null?delete I[p]:I[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ro(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function hh(t){var i=t._init;return i(t._payload)}function ph(t){function i(Z,W){if(t){var J=Z.deletions;J===null?(Z.deletions=[W],Z.flags|=16):J.push(W)}}function a(Z,W){if(!t)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function l(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=gr(Z,W),Z.index=0,Z.sibling=null,Z}function p(Z,W,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<W?(Z.flags|=2,W):J):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,W,J,Ee){return W===null||W.tag!==6?(W=gu(J,Z.mode,Ee),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function V(Z,W,J,Ee){var Je=J.type;return Je===O?_e(Z,W,J.props.children,Ee,J.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ie&&hh(Je)===W.type)?(Ee=d(W,J.props),Ee.ref=xa(Z,W,J),Ee.return=Z,Ee):(Ee=Qo(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=xa(Z,W,J),Ee.return=Z,Ee)}function ae(Z,W,J,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=_u(J,Z.mode,Ee),W.return=Z,W):(W=d(W,J.children||[]),W.return=Z,W)}function _e(Z,W,J,Ee,Je){return W===null||W.tag!==7?(W=Wr(J,Z.mode,Ee,Je),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function Se(Z,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=gu(""+W,Z.mode,J),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return J=Qo(W.type,W.key,W.props,null,Z.mode,J),J.ref=xa(Z,null,W),J.return=Z,J;case F:return W=_u(W,Z.mode,J),W.return=Z,W;case ie:var Ee=W._init;return Se(Z,Ee(W._payload),J)}if(lt(W)||fe(W))return W=Wr(W,Z.mode,J,null),W.return=Z,W;Ro(Z,W)}return null}function ge(Z,W,J,Ee){var Je=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Je!==null?null:I(Z,W,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Je?V(Z,W,J,Ee):null;case F:return J.key===Je?ae(Z,W,J,Ee):null;case ie:return Je=J._init,ge(Z,W,Je(J._payload),Ee)}if(lt(J)||fe(J))return Je!==null?null:_e(Z,W,J,Ee,null);Ro(Z,J)}return null}function ke(Z,W,J,Ee,Je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(J)||null,I(W,Z,""+Ee,Je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return Z=Z.get(Ee.key===null?J:Ee.key)||null,V(W,Z,Ee,Je);case F:return Z=Z.get(Ee.key===null?J:Ee.key)||null,ae(W,Z,Ee,Je);case ie:var nt=Ee._init;return ke(Z,W,J,nt(Ee._payload),Je)}if(lt(Ee)||fe(Ee))return Z=Z.get(J)||null,_e(W,Z,Ee,Je,null);Ro(W,Ee)}return null}function Ye(Z,W,J,Ee){for(var Je=null,nt=null,it=W,ot=W=0,un=null;it!==null&&ot<J.length;ot++){it.index>ot?(un=it,it=null):un=it.sibling;var bt=ge(Z,it,J[ot],Ee);if(bt===null){it===null&&(it=un);break}t&&it&&bt.alternate===null&&i(Z,it),W=p(bt,W,ot),nt===null?Je=bt:nt.sibling=bt,nt=bt,it=un}if(ot===J.length)return a(Z,it),Gt&&Fr(Z,ot),Je;if(it===null){for(;ot<J.length;ot++)it=Se(Z,J[ot],Ee),it!==null&&(W=p(it,W,ot),nt===null?Je=it:nt.sibling=it,nt=it);return Gt&&Fr(Z,ot),Je}for(it=l(Z,it);ot<J.length;ot++)un=ke(it,Z,ot,J[ot],Ee),un!==null&&(t&&un.alternate!==null&&it.delete(un.key===null?ot:un.key),W=p(un,W,ot),nt===null?Je=un:nt.sibling=un,nt=un);return t&&it.forEach(function(_r){return i(Z,_r)}),Gt&&Fr(Z,ot),Je}function Qe(Z,W,J,Ee){var Je=fe(J);if(typeof Je!="function")throw Error(n(150));if(J=Je.call(J),J==null)throw Error(n(151));for(var nt=Je=null,it=W,ot=W=0,un=null,bt=J.next();it!==null&&!bt.done;ot++,bt=J.next()){it.index>ot?(un=it,it=null):un=it.sibling;var _r=ge(Z,it,bt.value,Ee);if(_r===null){it===null&&(it=un);break}t&&it&&_r.alternate===null&&i(Z,it),W=p(_r,W,ot),nt===null?Je=_r:nt.sibling=_r,nt=_r,it=un}if(bt.done)return a(Z,it),Gt&&Fr(Z,ot),Je;if(it===null){for(;!bt.done;ot++,bt=J.next())bt=Se(Z,bt.value,Ee),bt!==null&&(W=p(bt,W,ot),nt===null?Je=bt:nt.sibling=bt,nt=bt);return Gt&&Fr(Z,ot),Je}for(it=l(Z,it);!bt.done;ot++,bt=J.next())bt=ke(it,Z,ot,bt.value,Ee),bt!==null&&(t&&bt.alternate!==null&&it.delete(bt.key===null?ot:bt.key),W=p(bt,W,ot),nt===null?Je=bt:nt.sibling=bt,nt=bt);return t&&it.forEach(function(s_){return i(Z,s_)}),Gt&&Fr(Z,ot),Je}function Kt(Z,W,J,Ee){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:e:{for(var Je=J.key,nt=W;nt!==null;){if(nt.key===Je){if(Je=J.type,Je===O){if(nt.tag===7){a(Z,nt.sibling),W=d(nt,J.props.children),W.return=Z,Z=W;break e}}else if(nt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ie&&hh(Je)===nt.type){a(Z,nt.sibling),W=d(nt,J.props),W.ref=xa(Z,nt,J),W.return=Z,Z=W;break e}a(Z,nt);break}else i(Z,nt);nt=nt.sibling}J.type===O?(W=Wr(J.props.children,Z.mode,Ee,J.key),W.return=Z,Z=W):(Ee=Qo(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=xa(Z,W,J),Ee.return=Z,Z=Ee)}return E(Z);case F:e:{for(nt=J.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a(Z,W.sibling),W=d(W,J.children||[]),W.return=Z,Z=W;break e}else{a(Z,W);break}else i(Z,W);W=W.sibling}W=_u(J,Z.mode,Ee),W.return=Z,Z=W}return E(Z);case ie:return nt=J._init,Kt(Z,W,nt(J._payload),Ee)}if(lt(J))return Ye(Z,W,J,Ee);if(fe(J))return Qe(Z,W,J,Ee);Ro(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a(Z,W.sibling),W=d(W,J),W.return=Z,Z=W):(a(Z,W),W=gu(J,Z.mode,Ee),W.return=Z,Z=W),E(Z)):a(Z,W)}return Kt}var vs=ph(!0),mh=ph(!1),bo=ar(null),Po=null,xs=null,Ac=null;function Cc(){Ac=xs=Po=null}function Rc(t){var i=bo.current;Vt(bo),t._currentValue=i}function bc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Ss(t,i){Po=t,Ac=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Po===null)throw Error(n(308));xs=t,Po.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Or=null;function Pc(t){Or===null?Or=[t]:Or.push(t)}function gh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Pc(i)):(a.next=d.next,d.next=a),i.interleaved=a,ki(t,l)}function ki(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var cr=!1;function Nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(wt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,ki(t,a)}return d=l.interleaved,d===null?(i.next=i,Pc(l)):(i.next=d.next,d.next=i),l.interleaved=i,ki(t,a)}function No(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Dt(t,a)}}function vh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=E:p=p.next=E,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Lo(t,i,a,l){var d=t.updateQueue;cr=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var V=I,ae=V.next;V.next=null,E===null?p=ae:E.next=ae,E=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ae:I.next=ae,_e.lastBaseUpdate=V))}if(p!==null){var Se=d.baseState;E=0,_e=ae=V=null,I=p;do{var ge=I.lane,ke=I.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:ke,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ye=t,Qe=I;switch(ge=i,ke=a,Qe.tag){case 1:if(Ye=Qe.payload,typeof Ye=="function"){Se=Ye.call(ke,Se,ge);break e}Se=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Qe.payload,ge=typeof Ye=="function"?Ye.call(ke,Se,ge):Ye,ge==null)break e;Se=re({},Se,ge);break e;case 2:cr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else ke={eventTime:ke,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ae=_e=ke,V=Se):_e=_e.next=ke,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(V=Se),d.baseState=V,d.firstBaseUpdate=ae,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);zr|=E,t.lanes=E,t.memoizedState=Se}}function xh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var Sa={},Si=ar(Sa),ya=ar(Sa),Ma=ar(Sa);function kr(t){if(t===Sa)throw Error(n(174));return t}function Lc(t,i){switch(Bt(Ma,i),Bt(ya,t),Bt(Si,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Vt(Si),Bt(Si,i)}function ys(){Vt(Si),Vt(ya),Vt(Ma)}function Sh(t){kr(Ma.current);var i=kr(Si.current),a=pe(i,t.type);i!==a&&(Bt(ya,t),Bt(Si,a))}function Dc(t){ya.current===t&&(Vt(Si),Vt(ya))}var Xt=ar(0);function Do(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function Uc(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Io=P.ReactCurrentDispatcher,Fc=P.ReactCurrentBatchConfig,Br=0,jt=null,tn=null,ln=null,Uo=!1,Ea=!1,Ta=0,C0=0;function vn(){throw Error(n(321))}function Oc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!si(t[a],i[a]))return!1;return!0}function kc(t,i,a,l,d,p){if(Br=p,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?N0:L0,t=a(l,d),Ea){p=0;do{if(Ea=!1,Ta=0,25<=p)throw Error(n(301));p+=1,ln=tn=null,i.updateQueue=null,Io.current=D0,t=a(l,d)}while(Ea)}if(Io.current=ko,i=tn!==null&&tn.next!==null,Br=0,ln=tn=jt=null,Uo=!1,i)throw Error(n(300));return t}function Bc(){var t=Ta!==0;return Ta=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=t:ln=ln.next=t,ln}function Qn(){if(tn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=ln===null?jt.memoizedState:ln.next;if(i!==null)ln=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?jt.memoizedState=ln=t:ln=ln.next=t}return ln}function wa(t,i){return typeof i=="function"?i(t):i}function zc(t){var i=Qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=tn,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var I=E=null,V=null,ae=p;do{var _e=ae.lane;if((Br&_e)===_e)V!==null&&(V=V.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),l=ae.hasEagerState?ae.eagerState:t(l,ae.action);else{var Se={lane:_e,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};V===null?(I=V=Se,E=l):V=V.next=Se,jt.lanes|=_e,zr|=_e}ae=ae.next}while(ae!==null&&ae!==p);V===null?E=l:V.next=I,si(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=V,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do p=d.lane,jt.lanes|=p,zr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Vc(t){var i=Qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do p=t(p,E.action),E=E.next;while(E!==d);si(p,i.memoizedState)||(Dn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function yh(){}function Mh(t,i){var a=jt,l=Qn(),d=i(),p=!si(l.memoizedState,d);if(p&&(l.memoizedState=d,Dn=!0),l=l.queue,Hc(wh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Th.bind(null,a,l,d,i),void 0,null),cn===null)throw Error(n(349));(Br&30)!==0||Eh(a,i,d)}return d}function Eh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Th(t,i,a,l){i.value=a,i.getSnapshot=l,Ah(i)&&Ch(t)}function wh(t,i,a){return a(function(){Ah(i)&&Ch(t)})}function Ah(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!si(t,a)}catch{return!0}}function Ch(t){var i=ki(t,1);i!==null&&ui(i,t,1,-1)}function Rh(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i.queue=t,t=t.dispatch=P0.bind(null,jt,t),[i.memoizedState,t]}function Aa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function bh(){return Qn().memoizedState}function Fo(t,i,a,l){var d=yi();jt.flags|=t,d.memoizedState=Aa(1|i,a,void 0,l===void 0?null:l)}function Oo(t,i,a,l){var d=Qn();l=l===void 0?null:l;var p=void 0;if(tn!==null){var E=tn.memoizedState;if(p=E.destroy,l!==null&&Oc(l,E.deps)){d.memoizedState=Aa(i,a,p,l);return}}jt.flags|=t,d.memoizedState=Aa(1|i,a,p,l)}function Ph(t,i){return Fo(8390656,8,t,i)}function Hc(t,i){return Oo(2048,8,t,i)}function Nh(t,i){return Oo(4,2,t,i)}function Lh(t,i){return Oo(4,4,t,i)}function Dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ih(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4,4,Dh.bind(null,i,t),a)}function Gc(){}function Uh(t,i){var a=Qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Fh(t,i){var a=Qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Oh(t,i,a){return(Br&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=a):(si(a,i)||(a=gn(),jt.lanes|=a,zr|=a,t.baseState=!0),i)}function R0(t,i){var a=ct;ct=a!==0&&4>a?a:4,t(!0);var l=Fc.transition;Fc.transition={};try{t(!1),i()}finally{ct=a,Fc.transition=l}}function kh(){return Qn().memoizedState}function b0(t,i,a){var l=pr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Bh(t))zh(i,a);else if(a=gh(t,i,a,l),a!==null){var d=Rn();ui(a,t,l,d),Vh(a,i,l)}}function P0(t,i,a){var l=pr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bh(t))zh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,I=p(E,a);if(d.hasEagerState=!0,d.eagerState=I,si(I,E)){var V=i.interleaved;V===null?(d.next=d,Pc(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}a=gh(t,i,d,l),a!==null&&(d=Rn(),ui(a,t,l,d),Vh(a,i,l))}}function Bh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function zh(t,i){Ea=Uo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Vh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Dt(t,a)}}var ko={readContext:Zn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},N0={readContext:Zn,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:Ph,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4194308,4,Dh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Fo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fo(4,2,t,i)},useMemo:function(t,i){var a=yi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=yi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=b0.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Rh,useDebugValue:Gc,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Rh(!1),i=t[0];return t=R0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=jt,d=yi();if(Gt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),cn===null)throw Error(n(349));(Br&30)!==0||Eh(l,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Ph(wh.bind(null,l,p,t),[t]),l.flags|=2048,Aa(9,Th.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=yi(),i=cn.identifierPrefix;if(Gt){var a=Oi,l=Fi;a=(l&~(1<<32-ze(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=C0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},L0={readContext:Zn,useCallback:Uh,useContext:Zn,useEffect:Hc,useImperativeHandle:Ih,useInsertionEffect:Nh,useLayoutEffect:Lh,useMemo:Fh,useReducer:zc,useRef:bh,useState:function(){return zc(wa)},useDebugValue:Gc,useDeferredValue:function(t){var i=Qn();return Oh(i,tn.memoizedState,t)},useTransition:function(){var t=zc(wa)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Mh,useId:kh,unstable_isNewReconciler:!1},D0={readContext:Zn,useCallback:Uh,useContext:Zn,useEffect:Hc,useImperativeHandle:Ih,useInsertionEffect:Nh,useLayoutEffect:Lh,useMemo:Fh,useReducer:Vc,useRef:bh,useState:function(){return Vc(wa)},useDebugValue:Gc,useDeferredValue:function(t){var i=Qn();return tn===null?i.memoizedState=t:Oh(i,tn.memoizedState,t)},useTransition:function(){var t=Vc(wa)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Mh,useId:kh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Wc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Rn(),d=pr(t),p=Bi(l,d);p.payload=i,a!=null&&(p.callback=a),i=ur(t,p,d),i!==null&&(ui(i,t,d,l),No(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Rn(),d=pr(t),p=Bi(l,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ur(t,p,d),i!==null&&(ui(i,t,d,l),No(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Rn(),l=pr(t),d=Bi(a,l);d.tag=2,i!=null&&(d.callback=i),i=ur(t,d,l),i!==null&&(ui(i,t,l,a),No(i,t,l))}};function Hh(t,i,a,l,d,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(d,p):!0}function Gh(t,i,a){var l=!1,d=or,p=i.contextType;return typeof p=="object"&&p!==null?p=Zn(p):(d=Ln(i)?Ir:_n.current,l=i.contextTypes,p=(l=l!=null)?ps(t,d):or),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Wh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function Xc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Nc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Zn(p):(p=Ln(i)?Ir:_n.current,d.context=ps(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Wc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Bo.enqueueReplaceState(d,d.state,null),Lo(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var a="",l=i;do a+=$e(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function jc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function qc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function Xh(t,i,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){jo||(jo=!0,lu=l),qc(t,i)},a}function jh(t,i,a){a=Bi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){qc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){qc(t,i),typeof l!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new I0;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=Y0.bind(null,t,i,a),i.then(t,t))}function Yh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function $h(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Bi(-1,1),i.tag=2,ur(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var U0=P.ReactCurrentOwner,Dn=!1;function Cn(t,i,a,l){i.child=t===null?mh(i,null,a,l):vs(i,t.child,a,l)}function Kh(t,i,a,l,d){a=a.render;var p=i.ref;return Ss(i,d),l=kc(t,i,a,l,p,d),a=Bc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,zi(t,i,d)):(Gt&&a&&yc(i),i.flags|=1,Cn(t,i,l,d),i.child)}function Zh(t,i,a,l,d){if(t===null){var p=a.type;return typeof p=="function"&&!mu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Qh(t,i,p,l,d)):(t=Qo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var E=p.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,l)&&t.ref===i.ref)return zi(t,i,d)}return i.flags|=1,t=gr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Qh(t,i,a,l,d){if(t!==null){var p=t.memoizedProps;if(da(p,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,zi(t,i,d)}return Yc(t,i,a,l,d)}function Jh(t,i,a){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Ts,Gn),Gn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(Ts,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Bt(Ts,Gn),Gn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Bt(Ts,Gn),Gn|=l;return Cn(t,i,d,a),i.child}function ep(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yc(t,i,a,l,d){var p=Ln(a)?Ir:_n.current;return p=ps(i,p),Ss(i,d),a=kc(t,i,a,l,p,d),l=Bc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,zi(t,i,d)):(Gt&&l&&yc(i),i.flags|=1,Cn(t,i,a,d),i.child)}function tp(t,i,a,l,d){if(Ln(a)){var p=!0;Eo(i)}else p=!1;if(Ss(i,d),i.stateNode===null)Vo(t,i),Gh(i,a,l),Xc(i,a,l,d),l=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var V=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Zn(ae):(ae=Ln(a)?Ir:_n.current,ae=ps(i,ae));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||V!==ae)&&Wh(i,E,l,ae),cr=!1;var ge=i.memoizedState;E.state=ge,Lo(i,l,E,d),V=i.memoizedState,I!==l||ge!==V||Nn.current||cr?(typeof _e=="function"&&(Wc(i,a,_e,l),V=i.memoizedState),(I=cr||Hh(i,a,I,l,ge,V,ae))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),E.props=l,E.state=V,E.context=ae,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,_h(t,i),I=i.memoizedProps,ae=i.type===i.elementType?I:oi(i.type,I),E.props=ae,Se=i.pendingProps,ge=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=Zn(V):(V=Ln(a)?Ir:_n.current,V=ps(i,V));var ke=a.getDerivedStateFromProps;(_e=typeof ke=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Se||ge!==V)&&Wh(i,E,l,V),cr=!1,ge=i.memoizedState,E.state=ge,Lo(i,l,E,d);var Ye=i.memoizedState;I!==Se||ge!==Ye||Nn.current||cr?(typeof ke=="function"&&(Wc(i,a,ke,l),Ye=i.memoizedState),(ae=cr||Hh(i,a,ae,l,ge,Ye,V)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ye,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ye,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ye),E.props=l,E.state=Ye,E.context=V,l=ae):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return $c(t,i,a,l,p,d)}function $c(t,i,a,l,d,p){ep(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return d&&ah(i,a,!1),zi(t,i,p);l=i.stateNode,U0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=vs(i,t.child,null,p),i.child=vs(i,null,I,p)):Cn(t,i,I,p),i.memoizedState=l.state,d&&ah(i,a,!0),i.child}function np(t){var i=t.stateNode;i.pendingContext?rh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&rh(t,i.context,!1),Lc(t,i.containerInfo)}function ip(t,i,a,l,d){return _s(),wc(d),i.flags|=256,Cn(t,i,a,l),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function rp(t,i,a){var l=i.pendingProps,d=Xt.current,p=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Bt(Xt,d&1),t===null)return Tc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Jo(E,l,0,null),t=Wr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Zc(a),i.memoizedState=Kc,t):Qc(i,E));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return F0(t,i,E,l,I,d,a);if(p){p=l.fallback,E=i.mode,d=t.child,I=d.sibling;var V={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=gr(d,V),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=gr(I,p):(p=Wr(p,E,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?Zc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~a,i.memoizedState=Kc,l}return p=t.child,t=p.sibling,l=gr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Qc(t,i){return i=Jo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function zo(t,i,a,l){return l!==null&&wc(l),vs(i,t.child,null,a),t=Qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function F0(t,i,a,l,d,p,E){if(a)return i.flags&256?(i.flags&=-257,l=jc(Error(n(422))),zo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Jo({mode:"visible",children:l.children},d,0,null),p=Wr(p,d,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&vs(i,t.child,null,E),i.child.memoizedState=Zc(E),i.memoizedState=Kc,p);if((i.mode&1)===0)return zo(t,i,E,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=jc(p,l,void 0),zo(t,i,E,l)}if(I=(E&t.childLanes)!==0,Dn||I){if(l=cn,l!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|E))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,ki(t,d),ui(l,t,d,-1))}return pu(),l=jc(Error(n(421))),zo(t,i,E,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=$0.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Hn=sr(d.nextSibling),Vn=i,Gt=!0,ai=null,t!==null&&($n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=Ur,Fi=t.id,Oi=t.overflow,Ur=i),i=Qc(i,l.children),i.flags|=4096,i)}function sp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bc(t.return,i,a)}function Jc(t,i,a,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function ap(t,i,a){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(Cn(t,i,l.children,a),l=Xt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,a,i);else if(t.tag===19)sp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Bt(Xt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Jc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Do(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Jc(i,!0,a,null,p);break;case"together":Jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function zi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=gr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=gr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function O0(t,i,a){switch(i.tag){case 3:np(i),_s();break;case 5:Sh(i);break;case 1:Ln(i.type)&&Eo(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Bt(bo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Bt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?rp(t,i,a):(Bt(Xt,Xt.current&1),t=zi(t,i,a),t!==null?t.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ap(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Bt(Xt,Xt.current),l)break;return null;case 22:case 23:return i.lanes=0,Jh(t,i,a)}return zi(t,i,a)}var op,eu,lp,cp;op=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},eu=function(){},lp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,kr(Si.current);var p=null;switch(a){case"input":d=Ne(t,d),l=Ne(t,l),p=[];break;case"select":d=re({},d,{value:void 0}),l=re({},l,{value:void 0}),p=[];break;case"textarea":d=Oe(t,d),l=Oe(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=So)}Ze(a,l);var E;a=null;for(ae in d)if(!l.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var I=d[ae];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?p||(p=[]):(p=p||[]).push(ae,null));for(ae in l){var V=l[ae];if(I=d!=null?d[ae]:void 0,l.hasOwnProperty(ae)&&V!==I&&(V!=null||I!=null))if(ae==="style")if(I){for(E in I)!I.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&I[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(p||(p=[]),p.push(ae,a)),a=V;else ae==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,I=I?I.__html:void 0,V!=null&&I!==V&&(p=p||[]).push(ae,V)):ae==="children"?typeof V!="string"&&typeof V!="number"||(p=p||[]).push(ae,""+V):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(V!=null&&ae==="onScroll"&&zt("scroll",t),p||I===V||(p=[])):(p=p||[]).push(ae,V))}a&&(p=p||[]).push("style",a);var ae=p;(i.updateQueue=ae)&&(i.flags|=4)}},cp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ca(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function k0(t,i,a){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Ln(i.type)&&Mo(),xn(i),null;case 3:return l=i.stateNode,ys(),Vt(Nn),Vt(_n),Uc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Co(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(fu(ai),ai=null))),eu(t,i),xn(i),null;case 5:Dc(i);var d=kr(Ma.current);if(a=i.type,t!==null&&i.stateNode!=null)lp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=kr(Si.current),Co(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[xi]=i,l[_a]=p,t=(i.mode&1)!==0,a){case"dialog":zt("cancel",l),zt("close",l);break;case"iframe":case"object":case"embed":zt("load",l);break;case"video":case"audio":for(d=0;d<pa.length;d++)zt(pa[d],l);break;case"source":zt("error",l);break;case"img":case"image":case"link":zt("error",l),zt("load",l);break;case"details":zt("toggle",l);break;case"input":Ke(l,p),zt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},zt("invalid",l);break;case"textarea":b(l,p),zt("invalid",l)}Ze(a,p),d=null;for(var E in p)if(p.hasOwnProperty(E)){var I=p[E];E==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&xo(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&xo(l.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&zt("scroll",l)}switch(a){case"input":mt(l),B(l,p,!0);break;case"textarea":mt(l),X(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=So)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[xi]=i,t[_a]=l,op(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ce(a,l),a){case"dialog":zt("cancel",t),zt("close",t),d=l;break;case"iframe":case"object":case"embed":zt("load",t),d=l;break;case"video":case"audio":for(d=0;d<pa.length;d++)zt(pa[d],t);d=l;break;case"source":zt("error",t),d=l;break;case"img":case"image":case"link":zt("error",t),zt("load",t),d=l;break;case"details":zt("toggle",t),d=l;break;case"input":Ke(t,l),d=Ne(t,l),zt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=re({},l,{value:void 0}),zt("invalid",t);break;case"textarea":b(t,l),d=Oe(t,l),zt("invalid",t);break;default:d=l}Ze(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var V=I[p];p==="style"?be(t,V):p==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ge(t,V)):p==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Te(t,V):typeof V=="number"&&Te(t,""+V):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?V!=null&&p==="onScroll"&&zt("scroll",t):V!=null&&L(t,p,V,E))}switch(a){case"input":mt(t),B(t,l,!1);break;case"textarea":mt(t),X(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ve(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?dt(t,!!l.multiple,p,!1):l.defaultValue!=null&&dt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=So)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)cp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=kr(Ma.current),kr(Si.current),Co(i)){if(l=i.stateNode,a=i.memoizedProps,l[xi]=i,(p=l.nodeValue!==a)&&(t=Vn,t!==null))switch(t.tag){case 3:xo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[xi]=i,i.stateNode=l}return xn(i),null;case 13:if(Vt(Xt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dh(),_s(),i.flags|=98560,p=!1;else if(p=Co(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[xi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),p=!1}else ai!==null&&(fu(ai),ai=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?nn===0&&(nn=3):pu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return ys(),eu(t,i),t===null&&ma(i.stateNode.containerInfo),xn(i),null;case 10:return Rc(i.type._context),xn(i),null;case 17:return Ln(i.type)&&Mo(),xn(i),null;case 19:if(Vt(Xt),p=i.memoizedState,p===null)return xn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Ca(p,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Do(t),E!==null){for(i.flags|=128,Ca(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Bt(Xt,Xt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Wt()>ws&&(i.flags|=128,l=!0,Ca(p,!1),i.lanes=4194304)}else{if(!l)if(t=Do(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Gt)return xn(i),null}else 2*Wt()-p.renderingStartTime>ws&&a!==1073741824&&(i.flags|=128,l=!0,Ca(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(a=p.last,a!==null?a.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Wt(),i.sibling=null,a=Xt.current,Bt(Xt,l?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return hu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function B0(t,i){switch(Mc(i),i.tag){case 1:return Ln(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),Vt(Nn),Vt(_n),Uc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Vt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Vt(Xt),null;case 4:return ys(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Ho=!1,Sn=!1,z0=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Yt(t,i,l)}else a.current=null}function tu(t,i,a){try{a()}catch(l){Yt(t,i,l)}}var up=!1;function V0(t,i){if(hc=oo,t=Hd(),sc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var E=0,I=-1,V=-1,ae=0,_e=0,Se=t,ge=null;t:for(;;){for(var ke;Se!==a||d!==0&&Se.nodeType!==3||(I=E+d),Se!==p||l!==0&&Se.nodeType!==3||(V=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)ge=Se,Se=ke;for(;;){if(Se===t)break t;if(ge===a&&++ae===d&&(I=E),ge===p&&++_e===l&&(V=E),(ke=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=ke}a=I===-1||V===-1?null:{start:I,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:t,selectionRange:a},oo=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Qe=Ye.memoizedProps,Kt=Ye.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:oi(i.type,Qe),Kt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Yt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return Ye=up,up=!1,Ye}function Ra(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&tu(i,a,p)}d=d.next}while(d!==l)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function nu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function fp(t){var i=t.alternate;i!==null&&(t.alternate=null,fp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[xi],delete i[_a],delete i[vc],delete i[E0],delete i[T0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dp(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=So));else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,a),t=t.sibling;t!==null;)iu(t,i,a),t=t.sibling}function ru(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,a),t=t.sibling;t!==null;)ru(t,i,a),t=t.sibling}var dn=null,li=!1;function fr(t,i,a){for(a=a.child;a!==null;)pp(t,i,a),a=a.sibling}function pp(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Fe,a)}catch{}switch(a.tag){case 5:Sn||Es(a,i);case 6:var l=dn,d=li;dn=null,fr(t,i,a),dn=l,li=d,dn!==null&&(li?(t=dn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(li?(t=dn,a=a.stateNode,t.nodeType===8?_c(t.parentNode,a):t.nodeType===1&&_c(t,a),aa(t)):_c(dn,a.stateNode));break;case 4:l=dn,d=li,dn=a.stateNode.containerInfo,li=!0,fr(t,i,a),dn=l,li=d;break;case 0:case 11:case 14:case 15:if(!Sn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&tu(a,i,E),d=d.next}while(d!==l)}fr(t,i,a);break;case 1:if(!Sn&&(Es(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Yt(a,i,I)}fr(t,i,a);break;case 21:fr(t,i,a);break;case 22:a.mode&1?(Sn=(l=Sn)||a.memoizedState!==null,fr(t,i,a),Sn=l):fr(t,i,a);break;default:fr(t,i,a)}}function mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new z0),i.forEach(function(l){var d=K0.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ci(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,li=!1;break e;case 3:dn=I.stateNode.containerInfo,li=!0;break e;case 4:dn=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(dn===null)throw Error(n(160));pp(p,E,d),dn=null,li=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ae){Yt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gp(i,t),i=i.sibling}function gp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),Mi(t),l&4){try{Ra(3,t,t.return),Go(3,t)}catch(Qe){Yt(t,t.return,Qe)}try{Ra(5,t,t.return)}catch(Qe){Yt(t,t.return,Qe)}}break;case 1:ci(i,t),Mi(t),l&512&&a!==null&&Es(a,a.return);break;case 5:if(ci(i,t),Mi(t),l&512&&a!==null&&Es(a,a.return),t.flags&32){var d=t.stateNode;try{Te(d,"")}catch(Qe){Yt(t,t.return,Qe)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,E=a!==null?a.memoizedProps:p,I=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ve(d,p),Ce(I,E);var ae=Ce(I,p);for(E=0;E<V.length;E+=2){var _e=V[E],Se=V[E+1];_e==="style"?be(d,Se):_e==="dangerouslySetInnerHTML"?Ge(d,Se):_e==="children"?Te(d,Se):L(d,_e,Se,ae)}switch(I){case"input":xt(d,p);break;case"textarea":y(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ke=p.value;ke!=null?dt(d,!!p.multiple,ke,!1):ge!==!!p.multiple&&(p.defaultValue!=null?dt(d,!!p.multiple,p.defaultValue,!0):dt(d,!!p.multiple,p.multiple?[]:"",!1))}d[_a]=p}catch(Qe){Yt(t,t.return,Qe)}}break;case 6:if(ci(i,t),Mi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Qe){Yt(t,t.return,Qe)}}break;case 3:if(ci(i,t),Mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{aa(i.containerInfo)}catch(Qe){Yt(t,t.return,Qe)}break;case 4:ci(i,t),Mi(t);break;case 13:ci(i,t),Mi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ou=Wt())),l&4&&mp(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(Sn=(ae=Sn)||_e,ci(i,t),Sn=ae):ci(i,t),Mi(t),l&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!_e&&(t.mode&1)!==0)for(Xe=t,_e=t.child;_e!==null;){for(Se=Xe=_e;Xe!==null;){switch(ge=Xe,ke=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ra(4,ge,ge.return);break;case 1:Es(ge,ge.return);var Ye=ge.stateNode;if(typeof Ye.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Qe){Yt(l,a,Qe)}}break;case 5:Es(ge,ge.return);break;case 22:if(ge.memoizedState!==null){xp(Se);continue}}ke!==null?(ke.return=ge,Xe=ke):xp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,ae?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Se.stateNode,V=Se.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,I.style.display=ye("display",E))}catch(Qe){Yt(t,t.return,Qe)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch(Qe){Yt(t,t.return,Qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,t),Mi(t),l&4&&mp(t);break;case 21:break;default:ci(i,t),Mi(t)}}function Mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(dp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Te(d,""),l.flags&=-33);var p=hp(t);ru(t,p,d);break;case 3:case 4:var E=l.stateNode.containerInfo,I=hp(t);iu(t,I,E);break;default:throw Error(n(161))}}catch(V){Yt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function H0(t,i,a){Xe=t,_p(t)}function _p(t,i,a){for(var l=(t.mode&1)!==0;Xe!==null;){var d=Xe,p=d.child;if(d.tag===22&&l){var E=d.memoizedState!==null||Ho;if(!E){var I=d.alternate,V=I!==null&&I.memoizedState!==null||Sn;I=Ho;var ae=Sn;if(Ho=E,(Sn=V)&&!ae)for(Xe=d;Xe!==null;)E=Xe,V=E.child,E.tag===22&&E.memoizedState!==null?Sp(d):V!==null?(V.return=E,Xe=V):Sp(d);for(;p!==null;)Xe=p,_p(p),p=p.sibling;Xe=d,Ho=I,Sn=ae}vp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Xe=p):vp(t)}}function vp(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Sn||Go(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Sn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&xh(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var _e=ae.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&aa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Sn||i.flags&512&&nu(i)}catch(ge){Yt(i,i.return,ge)}}if(i===t){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function xp(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Sp(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(V){Yt(i,a,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(V){Yt(i,d,V)}}var p=i.return;try{nu(i)}catch(V){Yt(i,p,V)}break;case 5:var E=i.return;try{nu(i)}catch(V){Yt(i,E,V)}}}catch(V){Yt(i,i.return,V)}if(i===t){Xe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Xe=I;break}Xe=i.return}}var G0=Math.ceil,Wo=P.ReactCurrentDispatcher,su=P.ReactCurrentOwner,Jn=P.ReactCurrentBatchConfig,wt=0,cn=null,Qt=null,hn=0,Gn=0,Ts=ar(0),nn=0,ba=null,zr=0,Xo=0,au=0,Pa=null,In=null,ou=0,ws=1/0,Vi=null,jo=!1,lu=null,dr=null,qo=!1,hr=null,Yo=0,Na=0,cu=null,$o=-1,Ko=0;function Rn(){return(wt&6)!==0?Wt():$o!==-1?$o:$o=Wt()}function pr(t){return(t.mode&1)===0?1:(wt&2)!==0&&hn!==0?hn&-hn:A0.transition!==null?(Ko===0&&(Ko=gn()),Ko):(t=ct,t!==0||(t=window.event,t=t===void 0?16:Md(t.type)),t)}function ui(t,i,a,l){if(50<Na)throw Na=0,cu=null,Error(n(185));en(t,a,l),((wt&2)===0||t!==cn)&&(t===cn&&((wt&2)===0&&(Xo|=a),nn===4&&mr(t,hn)),Un(t,l),a===1&&wt===0&&(i.mode&1)===0&&(ws=Wt()+500,To&&lr()))}function Un(t,i){var a=t.callbackNode;Lt(t,i);var l=Rt(t,t===cn?hn:0);if(l===0)a!==null&&ro(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ro(a),i===1)t.tag===0?w0(Mp.bind(null,t)):oh(Mp.bind(null,t)),y0(function(){(wt&6)===0&&lr()}),a=null;else{switch(An(l)){case 1:a=Y;break;case 4:a=le;break;case 16:a=ne;break;case 536870912:a=Pe;break;default:a=ne}a=Pp(a,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function yp(t,i){if($o=-1,Ko=0,(wt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(As()&&t.callbackNode!==a)return null;var l=Rt(t,t===cn?hn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Zo(t,l);else{i=l;var d=wt;wt|=2;var p=Tp();(cn!==t||hn!==i)&&(Vi=null,ws=Wt()+500,Hr(t,i));do try{j0();break}catch(I){Ep(t,I)}while(!0);Cc(),Wo.current=p,wt=d,Qt!==null?i=0:(cn=null,hn=0,i=nn)}if(i!==0){if(i===2&&(d=St(t),d!==0&&(l=d,i=uu(t,d))),i===1)throw a=ba,Hr(t,0),mr(t,l),Un(t,Wt()),a;if(i===6)mr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!W0(d)&&(i=Zo(t,l),i===2&&(p=St(t),p!==0&&(l=p,i=uu(t,p))),i===1))throw a=ba,Hr(t,0),mr(t,l),Un(t,Wt()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,In,Vi);break;case 3:if(mr(t,l),(l&130023424)===l&&(i=ou+500-Wt(),10<i)){if(Rt(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=gc(Gr.bind(null,t,In,Vi),i);break}Gr(t,In,Vi);break;case 4:if(mr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var E=31-ze(l);p=1<<E,E=i[E],E>d&&(d=E),l&=~p}if(l=d,l=Wt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*G0(l/1960))-l,10<l){t.timeoutHandle=gc(Gr.bind(null,t,In,Vi),l);break}Gr(t,In,Vi);break;case 5:Gr(t,In,Vi);break;default:throw Error(n(329))}}}return Un(t,Wt()),t.callbackNode===a?yp.bind(null,t):null}function uu(t,i){var a=Pa;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=In,In=a,i!==null&&fu(i)),t}function fu(t){In===null?In=t:In.push.apply(In,t)}function W0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!si(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(t,i){for(i&=~au,i&=~Xo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-ze(i),l=1<<a;t[a]=-1,i&=~l}}function Mp(t){if((wt&6)!==0)throw Error(n(327));As();var i=Rt(t,0);if((i&1)===0)return Un(t,Wt()),null;var a=Zo(t,i);if(t.tag!==0&&a===2){var l=St(t);l!==0&&(i=l,a=uu(t,l))}if(a===1)throw a=ba,Hr(t,0),mr(t,i),Un(t,Wt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,In,Vi),Un(t,Wt()),null}function du(t,i){var a=wt;wt|=1;try{return t(i)}finally{wt=a,wt===0&&(ws=Wt()+500,To&&lr())}}function Vr(t){hr!==null&&hr.tag===0&&(wt&6)===0&&As();var i=wt;wt|=1;var a=Jn.transition,l=ct;try{if(Jn.transition=null,ct=1,t)return t()}finally{ct=l,Jn.transition=a,wt=i,(wt&6)===0&&lr()}}function hu(){Gn=Ts.current,Vt(Ts)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,S0(a)),Qt!==null)for(a=Qt.return;a!==null;){var l=a;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Mo();break;case 3:ys(),Vt(Nn),Vt(_n),Uc();break;case 5:Dc(l);break;case 4:ys();break;case 13:Vt(Xt);break;case 19:Vt(Xt);break;case 10:Rc(l.type._context);break;case 22:case 23:hu()}a=a.return}if(cn=t,Qt=t=gr(t.current,null),hn=Gn=i,nn=0,ba=null,au=Xo=zr=0,In=Pa=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var E=p.next;p.next=d,l.next=E}a.pending=l}Or=null}return t}function Ep(t,i){do{var a=Qt;try{if(Cc(),Io.current=ko,Uo){for(var l=jt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Uo=!1}if(Br=0,ln=tn=jt=null,Ea=!1,Ta=0,su.current=null,a===null||a.return===null){nn=1,ba=i,Qt=null;break}e:{var p=t,E=a.return,I=a,V=i;if(i=hn,I.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ae=V,_e=I,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ke=Yh(E);if(ke!==null){ke.flags&=-257,$h(ke,E,I,p,i),ke.mode&1&&qh(p,ae,i),i=ke,V=ae;var Ye=i.updateQueue;if(Ye===null){var Qe=new Set;Qe.add(V),i.updateQueue=Qe}else Ye.add(V);break e}else{if((i&1)===0){qh(p,ae,i),pu();break e}V=Error(n(426))}}else if(Gt&&I.mode&1){var Kt=Yh(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),$h(Kt,E,I,p,i),wc(Ms(V,I));break e}}p=V=Ms(V,I),nn!==4&&(nn=2),Pa===null?Pa=[p]:Pa.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Z=Xh(p,V,i);vh(p,Z);break e;case 1:I=V;var W=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(dr===null||!dr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=jh(p,I,i);vh(p,Ee);break e}}p=p.return}while(p!==null)}Ap(a)}catch(Je){i=Je,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Tp(){var t=Wo.current;return Wo.current=ko,t===null?ko:t}function pu(){(nn===0||nn===3||nn===2)&&(nn=4),cn===null||(zr&268435455)===0&&(Xo&268435455)===0||mr(cn,hn)}function Zo(t,i){var a=wt;wt|=2;var l=Tp();(cn!==t||hn!==i)&&(Vi=null,Hr(t,i));do try{X0();break}catch(d){Ep(t,d)}while(!0);if(Cc(),wt=a,Wo.current=l,Qt!==null)throw Error(n(261));return cn=null,hn=0,nn}function X0(){for(;Qt!==null;)wp(Qt)}function j0(){for(;Qt!==null&&!Xl();)wp(Qt)}function wp(t){var i=bp(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?Ap(t):Qt=i,su.current=null}function Ap(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=k0(a,i,Gn),a!==null){Qt=a;return}}else{if(a=B0(a,i),a!==null){a.flags&=32767,Qt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=t}while(i!==null);nn===0&&(nn=5)}function Gr(t,i,a){var l=ct,d=Jn.transition;try{Jn.transition=null,ct=1,q0(t,i,a,l)}finally{Jn.transition=d,ct=l}return null}function q0(t,i,a,l){do As();while(hr!==null);if((wt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Lr(t,p),t===cn&&(Qt=cn=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||qo||(qo=!0,Pp(ne,function(){return As(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Jn.transition,Jn.transition=null;var E=ct;ct=1;var I=wt;wt|=4,su.current=null,V0(t,a),gp(a,t),h0(pc),oo=!!hc,pc=hc=null,t.current=a,H0(a),jl(),wt=I,ct=E,Jn.transition=p}else t.current=a;if(qo&&(qo=!1,hr=t,Yo=d),p=t.pendingLanes,p===0&&(dr=null),je(a.stateNode),Un(t,Wt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(jo)throw jo=!1,t=lu,lu=null,t;return(Yo&1)!==0&&t.tag!==0&&As(),p=t.pendingLanes,(p&1)!==0?t===cu?Na++:(Na=0,cu=t):Na=0,lr(),null}function As(){if(hr!==null){var t=An(Yo),i=Jn.transition,a=ct;try{if(Jn.transition=null,ct=16>t?16:t,hr===null)var l=!1;else{if(t=hr,hr=null,Yo=0,(wt&6)!==0)throw Error(n(331));var d=wt;for(wt|=4,Xe=t.current;Xe!==null;){var p=Xe,E=p.child;if((Xe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var V=0;V<I.length;V++){var ae=I[V];for(Xe=ae;Xe!==null;){var _e=Xe;switch(_e.tag){case 0:case 11:case 15:Ra(8,_e,p)}var Se=_e.child;if(Se!==null)Se.return=_e,Xe=Se;else for(;Xe!==null;){_e=Xe;var ge=_e.sibling,ke=_e.return;if(fp(_e),_e===ae){Xe=null;break}if(ge!==null){ge.return=ke,Xe=ge;break}Xe=ke}}}var Ye=p.alternate;if(Ye!==null){var Qe=Ye.child;if(Qe!==null){Ye.child=null;do{var Kt=Qe.sibling;Qe.sibling=null,Qe=Kt}while(Qe!==null)}}Xe=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Xe=E;else e:for(;Xe!==null;){if(p=Xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ra(9,p,p.return)}var Z=p.sibling;if(Z!==null){Z.return=p.return,Xe=Z;break e}Xe=p.return}}var W=t.current;for(Xe=W;Xe!==null;){E=Xe;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Xe=J;else e:for(E=W;Xe!==null;){if(I=Xe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Go(9,I)}}catch(Je){Yt(I,I.return,Je)}if(I===E){Xe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Xe=Ee;break e}Xe=I.return}}if(wt=d,lr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Fe,t)}catch{}l=!0}return l}finally{ct=a,Jn.transition=i}}return!1}function Cp(t,i,a){i=Ms(a,i),i=Xh(t,i,1),t=ur(t,i,1),i=Rn(),t!==null&&(en(t,1,i),Un(t,i))}function Yt(t,i,a){if(t.tag===3)Cp(t,t,a);else for(;i!==null;){if(i.tag===3){Cp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dr===null||!dr.has(l))){t=Ms(a,t),t=jh(i,t,1),i=ur(i,t,1),t=Rn(),i!==null&&(en(i,1,t),Un(i,t));break}}i=i.return}}function Y0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&a,cn===t&&(hn&a)===a&&(nn===4||nn===3&&(hn&130023424)===hn&&500>Wt()-ou?Hr(t,0):au|=a),Un(t,i)}function Rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=kt,kt<<=1,(kt&130023424)===0&&(kt=4194304)));var a=Rn();t=ki(t,i),t!==null&&(en(t,i,a),Un(t,a))}function $0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Rp(t,a)}function K0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Rp(t,a)}var bp;bp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,O0(t,i,a);Dn=(t.flags&131072)!==0}else Dn=!1,Gt&&(i.flags&1048576)!==0&&lh(i,Ao,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Vo(t,i),t=i.pendingProps;var d=ps(i,_n.current);Ss(i,a),d=kc(null,i,l,t,d,a);var p=Bc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(l)?(p=!0,Eo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Nc(i),d.updater=Bo,i.stateNode=d,d._reactInternals=i,Xc(i,l,t,a),i=$c(null,i,l,!0,p,a)):(i.tag=0,Gt&&p&&yc(i),Cn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Vo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Q0(l),t=oi(l,t),d){case 0:i=Yc(null,i,l,t,a);break e;case 1:i=tp(null,i,l,t,a);break e;case 11:i=Kh(null,i,l,t,a);break e;case 14:i=Zh(null,i,l,oi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:oi(l,d),Yc(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:oi(l,d),tp(t,i,l,d,a);case 3:e:{if(np(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,_h(t,i),Lo(i,l,null,a);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ms(Error(n(423)),i),i=ip(t,i,l,a,d);break e}else if(l!==d){d=Ms(Error(n(424)),i),i=ip(t,i,l,a,d);break e}else for(Hn=sr(i.stateNode.containerInfo.firstChild),Vn=i,Gt=!0,ai=null,a=mh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),l===d){i=zi(t,i,a);break e}Cn(t,i,l,a)}i=i.child}return i;case 5:return Sh(i),t===null&&Tc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,E=d.children,mc(l,d)?E=null:p!==null&&mc(l,p)&&(i.flags|=32),ep(t,i),Cn(t,i,E,a),i.child;case 6:return t===null&&Tc(i),null;case 13:return rp(t,i,a);case 4:return Lc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=vs(i,null,l,a):Cn(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:oi(l,d),Kh(t,i,l,d,a);case 7:return Cn(t,i,i.pendingProps,a),i.child;case 8:return Cn(t,i,i.pendingProps.children,a),i.child;case 12:return Cn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,E=d.value,Bt(bo,l._currentValue),l._currentValue=E,p!==null)if(si(p.value,E)){if(p.children===d.children&&!Nn.current){i=zi(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){E=p.child;for(var V=I.firstContext;V!==null;){if(V.context===l){if(p.tag===1){V=Bi(-1,a&-a),V.tag=2;var ae=p.updateQueue;if(ae!==null){ae=ae.shared;var _e=ae.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),ae.pending=V}}p.lanes|=a,V=p.alternate,V!==null&&(V.lanes|=a),bc(p.return,a,i),I.lanes|=a;break}V=V.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),bc(E,a,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}Cn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,Ss(i,a),d=Zn(d),l=l(d),i.flags|=1,Cn(t,i,l,a),i.child;case 14:return l=i.type,d=oi(l,i.pendingProps),d=oi(l.type,d),Zh(t,i,l,d,a);case 15:return Qh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:oi(l,d),Vo(t,i),i.tag=1,Ln(l)?(t=!0,Eo(i)):t=!1,Ss(i,a),Gh(i,l,d),Xc(i,l,d,a),$c(null,i,l,!0,t,a);case 19:return ap(t,i,a);case 22:return Jh(t,i,a)}throw Error(n(156,i.tag))};function Pp(t,i){return io(t,i)}function Z0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,a,l){return new Z0(t,i,a,l)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Q0(t){if(typeof t=="function")return mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===ce)return 14}return 2}function gr(t,i){var a=t.alternate;return a===null?(a=ei(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Qo(t,i,a,l,d,p){var E=2;if(l=t,typeof t=="function")mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Wr(a.children,d,p,i);case q:E=8,d|=8;break;case w:return t=ei(12,a,i,d|2),t.elementType=w,t.lanes=p,t;case $:return t=ei(13,a,i,d),t.elementType=$,t.lanes=p,t;case oe:return t=ei(19,a,i,d),t.elementType=oe,t.lanes=p,t;case H:return Jo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case z:E=9;break e;case K:E=11;break e;case ce:E=14;break e;case ie:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ei(E,a,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Wr(t,i,a,l){return t=ei(7,t,l,i),t.lanes=a,t}function Jo(t,i,a,l){return t=ei(22,t,l,i),t.elementType=H,t.lanes=a,t.stateNode={isHidden:!1},t}function gu(t,i,a){return t=ei(6,t,null,i),t.lanes=a,t}function _u(t,i,a){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function J0(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vu(t,i,a,l,d,p,E,I,V){return t=new J0(t,i,a,I,V),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ei(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(p),t}function e_(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Np(t){if(!t)return or;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Ln(a))return sh(t,a,i)}return i}function Lp(t,i,a,l,d,p,E,I,V){return t=vu(a,l,!0,t,d,p,E,I,V),t.context=Np(null),a=t.current,l=Rn(),d=pr(a),p=Bi(l,d),p.callback=i??null,ur(a,p,d),t.current.lanes=d,en(t,d,l),Un(t,l),t}function el(t,i,a,l){var d=i.current,p=Rn(),E=pr(d);return a=Np(a),i.context===null?i.context=a:i.pendingContext=a,i=Bi(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ur(d,i,E),t!==null&&(ui(t,d,E,p),No(t,d,E)),E}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function xu(t,i){Dp(t,i),(t=t.alternate)&&Dp(t,i)}function t_(){return null}var Ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}nl.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){el(null,t,null,null)}),i[Ii]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=vi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<nr.length&&i!==0&&i<nr[a].priority;a++);nr.splice(a,0,t),a===0&&Sd(t)}};function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function n_(t,i,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ae=tl(E);p.call(ae)}}var E=Lp(i,l,t,0,null,!1,!1,"",Up);return t._reactRootContainer=E,t[Ii]=E.current,ma(t.nodeType===8?t.parentNode:t),Vr(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ae=tl(V);I.call(ae)}}var V=vu(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=V,t[Ii]=V.current,ma(t.nodeType===8?t.parentNode:t),Vr(function(){el(i,V,a,l)}),V}function rl(t,i,a,l,d){var p=a._reactRootContainer;if(p){var E=p;if(typeof d=="function"){var I=d;d=function(){var V=tl(E);I.call(V)}}el(i,E,t,d)}else E=n_(a,i,t,d,l);return tl(E)}an=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ot(i.pendingLanes);a!==0&&(Dt(i,a|1),Un(i,Wt()),(wt&6)===0&&(ws=Wt()+500,lr()))}break;case 13:Vr(function(){var l=ki(t,1);if(l!==null){var d=Rn();ui(l,t,1,d)}}),xu(t,1)}},on=function(t){if(t.tag===13){var i=ki(t,134217728);if(i!==null){var a=Rn();ui(i,t,134217728,a)}xu(t,134217728)}},rs=function(t){if(t.tag===13){var i=pr(t),a=ki(t,i);if(a!==null){var l=Rn();ui(a,t,i,l)}xu(t,i)}},vi=function(){return ct},vd=function(t,i){var a=ct;try{return ct=t,i()}finally{ct=a}},De=function(t,i,a){switch(i){case"input":if(xt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=yo(l);if(!d)throw Error(n(90));Ht(l),xt(l,d)}}}break;case"textarea":y(t,a);break;case"select":i=a.value,i!=null&&dt(t,!!a.multiple,i,!1)}},at=du,Ut=Vr;var i_={usingClientEntryPoint:!1,Events:[va,ds,yo,me,Re,du]},La={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r_={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ta(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||t_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Fe=sl.inject(r_),we=sl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_,Fn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(i))throw Error(n(200));return e_(t,i,null,a)},Fn.createRoot=function(t,i){if(!yu(t))throw Error(n(299));var a=!1,l="",d=Ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vu(t,1,!1,null,null,a,!1,l,d),t[Ii]=i.current,ma(t.nodeType===8?t.parentNode:t),new Su(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ta(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Vr(t)},Fn.hydrate=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,a)},Fn.hydrateRoot=function(t,i,a){if(!yu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",E=Ip;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Lp(i,null,t,1,a??null,d,!1,p,E),t[Ii]=i.current,ma(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new nl(i)},Fn.render=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,a)},Fn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1},Fn.unstable_batchedUpdates=du,Fn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!il(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,a,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Gp;function h_(){if(Gp)return Tu.exports;Gp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tu.exports=d_(),Tu.exports}var Wp;function p_(){if(Wp)return al;Wp=1;var s=h_();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var m_=p_();const g_=Wm(m_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="182",__=0,Xp=1,v_=2,Pl=1,Xm=2,Ha=3,Cr=0,kn=1,Ai=2,Yi=0,Vs=1,Fl=2,jp=3,qp=4,x_=5,Qr=100,S_=101,y_=102,M_=103,E_=104,T_=200,w_=201,A_=202,C_=203,of=204,lf=205,R_=206,b_=207,P_=208,N_=209,L_=210,D_=211,I_=212,U_=213,F_=214,cf=0,uf=1,ff=2,Gs=3,df=4,hf=5,pf=6,mf=7,jm=0,O_=1,k_=2,bi=0,qm=1,Ym=2,$m=3,Km=4,Zm=5,Qm=6,Jm=7,eg=300,ns=301,Ws=302,gf=303,_f=304,Vl=306,vf=1e3,qi=1001,xf=1002,pn=1003,B_=1004,ol=1005,En=1006,Cu=1007,es=1008,jn=1009,tg=1010,ng=1011,Xa=1012,rd=1013,Ni=1014,Ci=1015,Ki=1016,sd=1017,ad=1018,ja=1020,ig=35902,rg=35899,sg=1021,ag=1022,mi=1023,Zi=1026,ts=1027,og=1028,od=1029,Xs=1030,ld=1031,cd=1033,Nl=33776,Ll=33777,Dl=33778,Il=33779,Sf=35840,yf=35841,Mf=35842,Ef=35843,Tf=36196,wf=37492,Af=37496,Cf=37488,Rf=37489,bf=37490,Pf=37491,Nf=37808,Lf=37809,Df=37810,If=37811,Uf=37812,Ff=37813,Of=37814,kf=37815,Bf=37816,zf=37817,Vf=37818,Hf=37819,Gf=37820,Wf=37821,Xf=36492,jf=36494,qf=36495,Yf=36283,$f=36284,Kf=36285,Zf=36286,z_=3200,lg=0,V_=1,Tr="",ni="srgb",js="srgb-linear",Ol="linear",Ft="srgb",Cs=7680,Yp=519,H_=512,G_=513,W_=514,ud=515,X_=516,j_=517,fd=518,q_=519,$p=35044,Kp="300 es",Ri=2e3,kl=2001;function cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Y_(){const s=Bl("canvas");return s.style.display="block",s}const Zp={};function Qp(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Pt(...s){const e="THREE."+s.shift();console.error(e,...s)}function qa(...s){const e=s.join(" ");e in Zp||(Zp[e]=!0,ut(...s))}function $_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Qf=180/Math.PI;function $a(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function yt(s,e,n){return Math.max(e,Math.min(n,s))}function K_(s,e){return(s%e+e)%e}function bu(s,e,n){return(1-n)*s+n*e}function Ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,n=0){Nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let h=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3],x=c[u+0],M=c[u+1],T=c[u+2],A=c[u+3];if(f<=0){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(f>=1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=A;return}if(_!==A||h!==x||m!==M||v!==T){let S=h*x+m*M+v*T+_*A;S<0&&(x=-x,M=-M,T=-T,A=-A,S=-S);let g=1-f;if(S<.9995){const N=Math.acos(S),L=Math.sin(N);g=Math.sin(g*N)/L,f=Math.sin(f*N)/L,h=h*g+x*f,m=m*g+M*f,v=v*g+T*f,_=_*g+A*f}else{h=h*g+x*f,m=m*g+M*f,v=v*g+T*f,_=_*g+A*f;const N=1/Math.sqrt(h*h+m*m+v*v+_*_);h*=N,m*=N,v*=N,_*=N}}e[n]=h,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],h=r[o+1],m=r[o+2],v=r[o+3],_=c[u],x=c[u+1],M=c[u+2],T=c[u+3];return e[n]=f*T+v*_+h*M-m*x,e[n+1]=h*T+v*x+m*_-f*M,e[n+2]=m*T+v*M+f*x-h*_,e[n+3]=v*T-f*_-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),v=f(o/2),_=f(c/2),x=h(r/2),M=h(o/2),T=h(c/2);switch(u){case"XYZ":this._x=x*v*_+m*M*T,this._y=m*M*_-x*v*T,this._z=m*v*T+x*M*_,this._w=m*v*_-x*M*T;break;case"YXZ":this._x=x*v*_+m*M*T,this._y=m*M*_-x*v*T,this._z=m*v*T-x*M*_,this._w=m*v*_+x*M*T;break;case"ZXY":this._x=x*v*_-m*M*T,this._y=m*M*_+x*v*T,this._z=m*v*T+x*M*_,this._w=m*v*_-x*M*T;break;case"ZYX":this._x=x*v*_-m*M*T,this._y=m*M*_+x*v*T,this._z=m*v*T-x*M*_,this._w=m*v*_+x*M*T;break;case"YZX":this._x=x*v*_+m*M*T,this._y=m*M*_+x*v*T,this._z=m*v*T-x*M*_,this._w=m*v*_-x*M*T;break;case"XZY":this._x=x*v*_-m*M*T,this._y=m*M*_-x*v*T,this._z=m*v*T+x*M*_,this._w=m*v*_+x*M*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],v=n[6],_=n[10],x=r+f+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-c*h,this._y=o*v+u*h+c*f-r*m,this._z=c*v+u*m+r*h-o*f,this._w=u*v-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,u=-u,f=-f);let h=1-n;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);h=Math.sin(h*m)/v,n=Math.sin(n*m)/v,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+c*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+c*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),v=2*(f*n-c*o),_=2*(c*r-u*n);return this.x=n+h*m+u*_-f*v,this.y=r+h*v+f*m-c*_,this.z=o+h*_+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new ee,Jp=new Ka;class pt{constructor(e,n,r,o,c,u,f,h,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m)}set(e,n,r,o,c,u,f,h,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=c,v[5]=h,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],v=r[4],_=r[7],x=r[2],M=r[5],T=r[8],A=o[0],S=o[3],g=o[6],N=o[1],L=o[4],P=o[7],D=o[2],F=o[5],O=o[8];return c[0]=u*A+f*N+h*D,c[3]=u*S+f*L+h*F,c[6]=u*g+f*P+h*O,c[1]=m*A+v*N+_*D,c[4]=m*S+v*L+_*F,c[7]=m*g+v*P+_*O,c[2]=x*A+M*N+T*D,c[5]=x*S+M*L+T*F,c[8]=x*g+M*P+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*c*v+r*f*h+o*c*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],_=v*u-f*m,x=f*h-v*c,M=m*c-u*h,T=n*_+r*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(o*m-v*r)*A,e[2]=(f*r-o*u)*A,e[3]=x*A,e[4]=(v*n-o*h)*A,e[5]=(o*c-f*n)*A,e[6]=M*A,e[7]=(r*h-m*n)*A,e[8]=(u*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new pt,em=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z_(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ft&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Tr?Ol:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:Ol,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const At=Z_();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class Q_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Bl("canvas")),Rs.width=e.width,Rs.height=e.height;const o=Rs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=$i(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($i(n[r]/255)*255):n[r]=$i(n[r]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Lu(o[u].image)):c.push(Lu(o[u]))}else c=Lu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Lu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Q_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let ev=0;const Du=new ee;class Tn extends Ys{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,r=qi,o=qi,c=En,u=es,f=mi,h=jn,m=Tn.DEFAULT_ANISOTROPY,v=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=$a(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=eg;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],v=h[4],_=h[8],x=h[1],M=h[5],T=h[9],A=h[2],S=h[6],g=h[10];if(Math.abs(v-x)<.01&&Math.abs(_-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+A)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(M+1)/2,D=(g+1)/2,F=(v+x)/4,O=(_+A)/4,q=(T+S)/4;return L>P&&L>D?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=F/r,c=O/r):P>D?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=F/o,c=q/o):D<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(D),r=O/c,o=q/c),this.set(r,o,c,n),this}let N=Math.sqrt((S-T)*(S-T)+(_-A)*(_-A)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(_-A)/N,this.z=(x-v)/N,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tv extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Tn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new dd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends tv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ug extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nv extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(c,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),cl.subVectors(this.max,Ua),bs.subVectors(e.a,Ua),Ps.subVectors(e.b,Ua),Ns.subVectors(e.c,Ua),vr.subVectors(Ps,bs),xr.subVectors(Ns,Ps),Xr.subVectors(bs,Ns);let n=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Xr.z,Xr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Xr.z,0,-Xr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Xr.y,Xr.x,0];return!Iu(n,bs,Ps,Ns,cl)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,bs,Ps,Ns,cl))?!1:(ul.crossVectors(vr,xr),n=[ul.x,ul.y,ul.z],Iu(n,bs,Ps,Ns,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],fi=new ee,ll=new Za,bs=new ee,Ps=new ee,Ns=new ee,vr=new ee,xr=new ee,Xr=new ee,Ua=new ee,cl=new ee,ul=new ee,jr=new ee;function Iu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){jr.fromArray(s,c);const f=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),h=e.dot(jr),m=n.dot(jr),v=r.dot(jr);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>f)return!1}return!0}const iv=new Za,Fa=new ee,Uu=new ee;class Hl{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):iv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Uu)),this.expandByPoint(Fa.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gi=new ee,Fu=new ee,fl=new ee,Sr=new ee,Ou=new ee,dl=new ee,ku=new ee;class fg{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Fu.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(Fu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(fl),f=Sr.dot(this.direction),h=-Sr.dot(fl),m=Sr.lengthSq(),v=Math.abs(1-u*u);let _,x,M,T;if(v>0)if(_=u*h-f,x=u*f-h,T=c*v,_>=0)if(x>=-T)if(x<=T){const A=1/v;_*=A,x*=A,M=_*(_+u*x+2*f)+x*(u*_+x+2*h)+m}else x=c,_=Math.max(0,-(u*x+f)),M=-_*_+x*(x+2*h)+m;else x=-c,_=Math.max(0,-(u*x+f)),M=-_*_+x*(x+2*h)+m;else x<=-T?(_=Math.max(0,-(-u*c+f)),x=_>0?-c:Math.min(Math.max(-c,-h),c),M=-_*_+x*(x+2*h)+m):x<=T?(_=0,x=Math.min(Math.max(-c,-h),c),M=x*(x+2*h)+m):(_=Math.max(0,-(u*c+f)),x=_>0?c:Math.min(Math.max(-c,-h),c),M=-_*_+x*(x+2*h)+m);else x=u>0?-c:c,_=Math.max(0,-(u*x+f)),M=-_*_+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Fu).addScaledVector(fl,x),M}intersectSphere(e,n){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),o=Gi.dot(Gi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,h;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,n,r,o,c){Ou.subVectors(n,e),dl.subVectors(r,e),ku.crossVectors(Ou,dl);let u=this.direction.dot(ku),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Sr.subVectors(this.origin,e);const h=f*this.direction.dot(dl.crossVectors(Sr,dl));if(h<0)return null;const m=f*this.direction.dot(Ou.cross(Sr));if(m<0||h+m>u)return null;const v=-f*Sr.dot(ku);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,o,c,u,f,h,m,v,_,x,M,T,A,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m,v,_,x,M,T,A,S)}set(e,n,r,o,c,u,f,h,m,v,_,x,M,T,A,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=c,g[5]=u,g[9]=f,g[13]=h,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=M,g[7]=T,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),c=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*v,M=u*_,T=f*v,A=f*_;n[0]=h*v,n[4]=-h*_,n[8]=m,n[1]=M+T*m,n[5]=x-A*m,n[9]=-f*h,n[2]=A-x*m,n[6]=T+M*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*_,T=m*v,A=m*_;n[0]=x+A*f,n[4]=T*f-M,n[8]=u*m,n[1]=u*_,n[5]=u*v,n[9]=-f,n[2]=M*f-T,n[6]=A+x*f,n[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*_,T=m*v,A=m*_;n[0]=x-A*f,n[4]=-u*_,n[8]=T+M*f,n[1]=M+T*f,n[5]=u*v,n[9]=A-x*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*_,T=f*v,A=f*_;n[0]=h*v,n[4]=T*m-M,n[8]=x*m+A,n[1]=h*_,n[5]=A*m+x,n[9]=M*m-T,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*m,T=f*h,A=f*m;n[0]=h*v,n[4]=A-x*_,n[8]=T*_+M,n[1]=_,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=M*_+T,n[10]=x-A*_}else if(e.order==="XZY"){const x=u*h,M=u*m,T=f*h,A=f*m;n[0]=h*v,n[4]=-_,n[8]=m*v,n[1]=x*_+A,n[5]=u*v,n[9]=M*_-T,n[2]=T*_-M,n[6]=f*v,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,n,r){const o=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(r,Wn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(r,Wn)),yr.normalize(),hl.crossVectors(Wn,yr),o[0]=yr.x,o[4]=hl.x,o[8]=Wn.x,o[1]=yr.y,o[5]=hl.y,o[9]=Wn.y,o[2]=yr.z,o[6]=hl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],v=r[1],_=r[5],x=r[9],M=r[13],T=r[2],A=r[6],S=r[10],g=r[14],N=r[3],L=r[7],P=r[11],D=r[15],F=o[0],O=o[4],q=o[8],w=o[12],R=o[1],z=o[5],K=o[9],$=o[13],oe=o[2],ce=o[6],ie=o[10],H=o[14],j=o[3],fe=o[7],re=o[11],U=o[15];return c[0]=u*F+f*R+h*oe+m*j,c[4]=u*O+f*z+h*ce+m*fe,c[8]=u*q+f*K+h*ie+m*re,c[12]=u*w+f*$+h*H+m*U,c[1]=v*F+_*R+x*oe+M*j,c[5]=v*O+_*z+x*ce+M*fe,c[9]=v*q+_*K+x*ie+M*re,c[13]=v*w+_*$+x*H+M*U,c[2]=T*F+A*R+S*oe+g*j,c[6]=T*O+A*z+S*ce+g*fe,c[10]=T*q+A*K+S*ie+g*re,c[14]=T*w+A*$+S*H+g*U,c[3]=N*F+L*R+P*oe+D*j,c[7]=N*O+L*z+P*ce+D*fe,c[11]=N*q+L*K+P*ie+D*re,c[15]=N*w+L*$+P*H+D*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],v=e[2],_=e[6],x=e[10],M=e[14],T=e[3],A=e[7],S=e[11],g=e[15],N=h*M-m*x,L=f*M-m*_,P=f*x-h*_,D=u*M-m*v,F=u*x-h*v,O=u*_-f*v;return n*(A*N-S*L+g*P)-r*(T*N-S*D+g*F)+o*(T*L-A*D+g*O)-c*(T*P-A*F+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],_=e[9],x=e[10],M=e[11],T=e[12],A=e[13],S=e[14],g=e[15],N=_*S*m-A*x*m+A*h*M-f*S*M-_*h*g+f*x*g,L=T*x*m-v*S*m-T*h*M+u*S*M+v*h*g-u*x*g,P=v*A*m-T*_*m+T*f*M-u*A*M-v*f*g+u*_*g,D=T*_*h-v*A*h-T*f*x+u*A*x+v*f*S-u*_*S,F=n*N+r*L+o*P+c*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=N*O,e[1]=(A*x*c-_*S*c-A*o*M+r*S*M+_*o*g-r*x*g)*O,e[2]=(f*S*c-A*h*c+A*o*m-r*S*m-f*o*g+r*h*g)*O,e[3]=(_*h*c-f*x*c-_*o*m+r*x*m+f*o*M-r*h*M)*O,e[4]=L*O,e[5]=(v*S*c-T*x*c+T*o*M-n*S*M-v*o*g+n*x*g)*O,e[6]=(T*h*c-u*S*c-T*o*m+n*S*m+u*o*g-n*h*g)*O,e[7]=(u*x*c-v*h*c+v*o*m-n*x*m-u*o*M+n*h*M)*O,e[8]=P*O,e[9]=(T*_*c-v*A*c-T*r*M+n*A*M+v*r*g-n*_*g)*O,e[10]=(u*A*c-T*f*c+T*r*m-n*A*m-u*r*g+n*f*g)*O,e[11]=(v*f*c-u*_*c-v*r*m+n*_*m+u*r*M-n*f*M)*O,e[12]=D*O,e[13]=(v*A*o-T*_*o+T*r*x-n*A*x-v*r*S+n*_*S)*O,e[14]=(T*f*o-u*A*o-T*r*h+n*A*h+u*r*S-n*f*S)*O,e[15]=(u*_*o-v*f*o+v*r*h-n*_*h-u*r*x+n*f*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,v=c*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,v*f+r,v*h-o*u,0,m*h-o*f,v*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,v=u+u,_=f+f,x=c*m,M=c*v,T=c*_,A=u*v,S=u*_,g=f*_,N=h*m,L=h*v,P=h*_,D=r.x,F=r.y,O=r.z;return o[0]=(1-(A+g))*D,o[1]=(M+P)*D,o[2]=(T-L)*D,o[3]=0,o[4]=(M-P)*F,o[5]=(1-(x+g))*F,o[6]=(S+N)*F,o[7]=0,o[8]=(T+L)*O,o[9]=(S-N)*O,o[10]=(1-(x+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),f=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),di.copy(this);const m=1/c,v=1/u,_=1/f;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,n.setFromRotationMatrix(di),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Ri,h=!1){const m=this.elements,v=2*c/(n-e),_=2*c/(r-o),x=(n+e)/(n-e),M=(r+o)/(r-o);let T,A;if(h)T=c/(u-c),A=u*c/(u-c);else if(f===Ri)T=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(f===kl)T=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Ri,h=!1){const m=this.elements,v=2/(n-e),_=2/(r-o),x=-(n+e)/(n-e),M=-(r+o)/(r-o);let T,A;if(h)T=1/(u-c),A=u/(u-c);else if(f===Ri)T=-2/(u-c),A=-(u+c)/(u-c);else if(f===kl)T=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new ee,di=new qt,rv=new ee(0,0,0),sv=new ee(1,1,1),yr=new ee,hl=new ee,Wn=new ee,nm=new qt,im=new Ka;class Li{constructor(e=0,n=0,r=0,o=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],m=o[5],v=o[9],_=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const rm=new ee,Ds=new Ka,Wi=new qt,pl=new ee,Oa=new ee,ov=new ee,lv=new Ka,sm=new ee(1,0,0),am=new ee(0,1,0),om=new ee(0,0,1),lm={type:"added"},cv={type:"removed"},Is={type:"childadded",child:null},Bu={type:"childremoved",child:null};class mn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new ee,n=new Li,r=new Ka,o=new ee(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new pt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?pl.copy(e):pl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Oa,pl,this.up):Wi.lookAt(pl,Oa,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),Ds.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),Is.child=e,this.dispatchEvent(Is),Is.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cv),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const _=h[m];c(e.shapes,_)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),v=u(e.images),_=u(e.shapes),x=u(e.skeletons),M=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const h=[];for(const m in f){const v=f[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}mn.DEFAULT_UP=new ee(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ee,Xi=new ee,zu=new ee,ji=new ee,Us=new ee,Fs=new ee,cm=new ee,Vu=new ee,Hu=new ee,Gu=new ee,Wu=new $t,Xu=new $t,ju=new $t;class pi{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),hi.subVectors(e,n),o.cross(hi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){hi.subVectors(o,n),Xi.subVectors(r,n),zu.subVectors(e,n);const u=hi.dot(hi),f=hi.dot(Xi),h=hi.dot(zu),m=Xi.dot(Xi),v=Xi.dot(zu),_=u*m-f*f;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*h-f*v)*x,T=(u*v-f*h)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,n,r,o,c,u,f,h){return this.getBarycoord(e,n,r,o,ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,ji.x),h.addScaledVector(u,ji.y),h.addScaledVector(f,ji.z),h)}static getInterpolatedAttribute(e,n,r,o,c,u){return Wu.setScalar(0),Xu.setScalar(0),ju.setScalar(0),Wu.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,r),ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Wu,c.x),u.addScaledVector(Xu,c.y),u.addScaledVector(ju,c.z),u}static isFrontFacing(e,n,r,o){return hi.subVectors(r,n),Xi.subVectors(e,n),hi.cross(Xi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),hi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Us.subVectors(o,r),Fs.subVectors(c,r),Vu.subVectors(e,r);const h=Us.dot(Vu),m=Fs.dot(Vu);if(h<=0&&m<=0)return n.copy(r);Hu.subVectors(e,o);const v=Us.dot(Hu),_=Fs.dot(Hu);if(v>=0&&_<=v)return n.copy(o);const x=h*_-v*m;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),n.copy(r).addScaledVector(Us,u);Gu.subVectors(e,c);const M=Us.dot(Gu),T=Fs.dot(Gu);if(T>=0&&M<=T)return n.copy(c);const A=M*m-h*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Fs,f);const S=v*T-M*_;if(S<=0&&_-v>=0&&M-T>=0)return cm.subVectors(c,o),f=(_-v)/(_-v+(M-T)),n.copy(o).addScaledVector(cm,f);const g=1/(S+A+x);return u=A*g,f=x*g,n.copy(r).addScaledVector(Us,u).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=K_(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=qu(u,c,e+1/3),this.g=qu(u,c,e),this.b=qu(u,c,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,n=ni){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const r=hg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return At.workingToColorSpace(Mn.copy(this),e),Math.round(yt(Mn.r*255,0,255))*65536+Math.round(yt(Mn.g*255,0,255))*256+Math.round(yt(Mn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,o=Mn.g,c=Mn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const v=(f+u)/2;if(f===u)h=0,m=0;else{const _=u-f;switch(m=v<=.5?_/(u+f):_/(2-u-f),u){case r:h=(o-c)/_+(o<c?6:0);break;case o:h=(c-r)/_+2;break;case c:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ni){At.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(ml);const r=bu(Mr.h,ml.h,n),o=bu(Mr.s,ml.s,n),c=bu(Mr.l,ml.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ct;Ct.NAMES=hg;let uv=0;class $s extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Vs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==of&&(r.blendSrc=this.blendSrc),this.blendDst!==lf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zl extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ee,gl=new Nt;let fv=0;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=$p,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ia(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array),c=On(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}}class pg extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class mg extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Pn extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let dv=0;const ti=new qt,Yu=new mn,Os=new ee,Xn=new Za,ka=new Za,fn=new ee;class qn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?mg:pg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,r){return ti.makeTranslation(e,n,r),this.applyMatrix4(ti),this}scale(e,n,r){return ti.makeScale(e,n,r),this.applyMatrix4(ti),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Xn.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];ka.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(Xn.min,ka.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,ka.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(ka.min),Xn.expandByPoint(ka.max))}Xn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)fn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(fn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)fn.fromBufferAttribute(f,m),h&&(Os.fromBufferAttribute(e,m),fn.add(Os)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let q=0;q<r.count;q++)f[q]=new ee,h[q]=new ee;const m=new ee,v=new ee,_=new ee,x=new Nt,M=new Nt,T=new Nt,A=new ee,S=new ee;function g(q,w,R){m.fromBufferAttribute(r,q),v.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),x.fromBufferAttribute(c,q),M.fromBufferAttribute(c,w),T.fromBufferAttribute(c,R),v.sub(m),_.sub(m),M.sub(x),T.sub(x);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(z),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(z),f[q].add(A),f[w].add(A),f[R].add(A),h[q].add(S),h[w].add(S),h[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,w=N.length;q<w;++q){const R=N[q],z=R.start,K=R.count;for(let $=z,oe=z+K;$<oe;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new ee,P=new ee,D=new ee,F=new ee;function O(q){D.fromBufferAttribute(o,q),F.copy(D);const w=f[q];L.copy(w),L.sub(D.multiplyScalar(D.dot(w))).normalize(),P.crossVectors(F,w);const z=P.dot(h[q])<0?-1:1;u.setXYZW(q,L.x,L.y,L.z,z)}for(let q=0,w=N.length;q<w;++q){const R=N[q],z=R.start,K=R.count;for(let $=z,oe=z+K;$<oe;$+=3)O(e.getX($+0)),O(e.getX($+1)),O(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ee,c=new ee,u=new ee,f=new ee,h=new ee,m=new ee,v=new ee,_=new ee;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),v.subVectors(u,c),_.subVectors(o,c),v.cross(_),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),f.add(v),h.add(v),m.add(v),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,c),_.subVectors(o,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)fn.fromBufferAttribute(e,n),fn.normalize(),e.setXYZ(n,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,h){const m=f.array,v=f.itemSize,_=f.normalized,x=new m.constructor(h.length*v);let M=0,T=0;for(let A=0,S=h.length;A<S;A++){f.isInterleavedBufferAttribute?M=h[A]*f.data.stride+f.offset:M=h[A]*v;for(let g=0;g<v;g++)x[T++]=m[M++]}return new gi(x,v,_)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let v=0,_=m.length;v<_;v++){const x=m[v],M=e(x,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,M=_.length;x<M;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const um=new qt,qr=new fg,_l=new Hl,fm=new ee,vl=new ee,xl=new ee,Sl=new ee,$u=new ee,yl=new ee,dm=new ee,Ml=new ee;class Zt extends mn{constructor(e=new qn,n=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){yl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const v=f[h],_=c[h];v!==0&&($u.fromBufferAttribute(_,e),u?yl.addScaledVector($u,v):yl.addScaledVector($u.sub(n),v))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(c),qr.copy(e.ray).recast(e.near),!(_l.containsPoint(qr.origin)===!1&&(qr.intersectSphere(_l,fm)===null||qr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(um.copy(c).invert(),qr.copy(e.ray).applyMatrix4(um),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,A=x.length;T<A;T++){const S=x[T],g=u[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let P=N,D=L;P<D;P+=3){const F=f.getX(P),O=f.getX(P+1),q=f.getX(P+2);o=El(this,g,e,r,m,v,_,F,O,q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let S=T,g=A;S<g;S+=3){const N=f.getX(S),L=f.getX(S+1),P=f.getX(S+2);o=El(this,u,e,r,m,v,_,N,L,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,A=x.length;T<A;T++){const S=x[T],g=u[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=N,D=L;P<D;P+=3){const F=P,O=P+1,q=P+2;o=El(this,g,e,r,m,v,_,F,O,q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=T,g=A;S<g;S+=3){const N=S,L=S+1,P=S+2;o=El(this,u,e,r,m,v,_,N,L,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function hv(s,e,n,r,o,c,u,f){let h;if(e.side===kn?h=r.intersectTriangle(u,c,o,!0,f):h=r.intersectTriangle(o,c,u,e.side===Cr,f),h===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Ml);return m<n.near||m>n.far?null:{distance:m,point:Ml.clone(),object:s}}function El(s,e,n,r,o,c,u,f,h,m){s.getVertexPosition(f,vl),s.getVertexPosition(h,xl),s.getVertexPosition(m,Sl);const v=hv(s,e,n,r,vl,xl,Sl,dm);if(v){const _=new ee;pi.getBarycoord(dm,vl,xl,Sl,_),o&&(v.uv=pi.getInterpolatedAttribute(o,f,h,m,_,new Nt)),c&&(v.uv1=pi.getInterpolatedAttribute(c,f,h,m,_,new Nt)),u&&(v.normal=pi.getInterpolatedAttribute(u,f,h,m,_,new ee),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new ee,materialIndex:0};pi.getNormal(vl,xl,Sl,x.normal),v.face=x,v.barycoord=_}return v}class is extends qn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],v=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(_,2));function T(A,S,g,N,L,P,D,F,O,q,w){const R=P/O,z=D/q,K=P/2,$=D/2,oe=F/2,ce=O+1,ie=q+1;let H=0,j=0;const fe=new ee;for(let re=0;re<ie;re++){const U=re*z-$;for(let se=0;se<ce;se++){const Ae=se*R-K;fe[A]=Ae*N,fe[S]=U*L,fe[g]=oe,m.push(fe.x,fe.y,fe.z),fe[A]=0,fe[S]=0,fe[g]=F>0?1:-1,v.push(fe.x,fe.y,fe.z),_.push(se/O),_.push(1-re/q),H+=1}}for(let re=0;re<q;re++)for(let U=0;U<O;U++){const se=x+U+ce*re,Ae=x+U+ce*(re+1),He=x+(U+1)+ce*(re+1),$e=x+(U+1)+ce*re;h.push(se,Ae,$e),h.push(Ae,He,$e),j+=6}f.addGroup(M,j,w),M+=j,x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const o in r)e[o]=r[o]}return e}function pv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const mv={clone:qs,merge:bn};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gv,this.fragmentShader=_v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class _g extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new ee,hm=new Nt,pm=new Nt;class ii extends _g{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,hm,pm),n.subVectors(pm,hm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ru*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Bs=1;class vv extends mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(ks,Bs,e,n);o.layers=this.layers,this.add(o);const c=new ii(ks,Bs,e,n);c.layers=this.layers,this.add(c);const u=new ii(ks,Bs,e,n);u.layers=this.layers,this.add(u);const f=new ii(ks,Bs,e,n);f.layers=this.layers,this.add(f);const h=new ii(ks,Bs,e,n);h.layers=this.layers,this.add(h);const m=new ii(ks,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(_,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class vg extends Tn{constructor(e=[],n=ns,r,o,c,u,f,h,m,v){super(e,n,r,o,c,u,f,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xg extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new vg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new is(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Yi});c.uniforms.tEquirect.value=n;const u=new Zt(o,c),f=n.minFilter;return n.minFilter===es&&(n.minFilter=En),new vv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class wr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xv={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),g=this._getHandJoint(m,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new wr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class hd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(e),this.density=n}clone(){return new hd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sv extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yv extends Tn{constructor(e=null,n=1,r=1,o,c,u,f,h,m=pn,v=pn,_,x){super(null,u,f,h,m,v,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new ee,Mv=new ee,Ev=new pt;class Zr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Zu.subVectors(r,n).cross(Mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Ev.getNormalMatrix(e),o=this.coplanarPoint(Zu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Hl,Tv=new Nt(.5,.5),Tl=new ee;class pd{constructor(e=new Zr,n=new Zr,r=new Zr,o=new Zr,c=new Zr,u=new Zr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ri,r=!1){const o=this.planes,c=e.elements,u=c[0],f=c[1],h=c[2],m=c[3],v=c[4],_=c[5],x=c[6],M=c[7],T=c[8],A=c[9],S=c[10],g=c[11],N=c[12],L=c[13],P=c[14],D=c[15];if(o[0].setComponents(m-u,M-v,g-T,D-N).normalize(),o[1].setComponents(m+u,M+v,g+T,D+N).normalize(),o[2].setComponents(m+f,M+_,g+A,D+L).normalize(),o[3].setComponents(m-f,M-_,g-A,D-L).normalize(),r)o[4].setComponents(h,x,S,P).normalize(),o[5].setComponents(m-h,M-x,g-S,D-P).normalize();else if(o[4].setComponents(m-h,M-x,g-S,D-P).normalize(),n===Ri)o[5].setComponents(m+h,M+x,g+S,D+P).normalize();else if(n===kl)o[5].setComponents(h,x,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=Tv.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sg extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mm=new qt,Jf=new fg,wl=new Hl,Al=new ee;class wv extends mn{constructor(e=new qn,n=new Sg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(o),wl.radius+=c,e.ray.intersectsSphere(wl)===!1)return;mm.copy(o).invert(),Jf.copy(e.ray).applyMatrix4(mm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=x,A=M;T<A;T++){const S=m.getX(T);Al.fromBufferAttribute(_,S),gm(Al,S,h,o,e,n,this)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let T=x,A=M;T<A;T++)Al.fromBufferAttribute(_,T),gm(Al,T,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function gm(s,e,n,r,o,c,u){const f=Jf.distanceSqToPoint(s);if(f<n){const h=new ee;Jf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Av extends Tn{constructor(e,n,r,o,c,u,f,h,m){super(e,n,r,o,c,u,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ya extends Tn{constructor(e,n,r=Ni,o,c,u,f=pn,h=pn,m,v=Zi,_=1){if(v!==Zi&&v!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,f,h,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cv extends Ya{constructor(e,n=Ni,r=ns,o,c,u=pn,f=pn,h,m=Zi){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,n,r,o,c,u,f,h,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yg extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class md extends qn{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],_=[],x=[],M=[];let T=0;const A=[],S=r/2;let g=0;N(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Pn(_,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(M,2));function N(){const P=new ee,D=new ee;let F=0;const O=(n-e)/r;for(let q=0;q<=c;q++){const w=[],R=q/c,z=R*(n-e)+e;for(let K=0;K<=o;K++){const $=K/o,oe=$*h+f,ce=Math.sin(oe),ie=Math.cos(oe);D.x=z*ce,D.y=-R*r+S,D.z=z*ie,_.push(D.x,D.y,D.z),P.set(ce,O,ie).normalize(),x.push(P.x,P.y,P.z),M.push($,1-R),w.push(T++)}A.push(w)}for(let q=0;q<o;q++)for(let w=0;w<c;w++){const R=A[w][q],z=A[w+1][q],K=A[w+1][q+1],$=A[w][q+1];(e>0||w!==0)&&(v.push(R,z,$),F+=3),(n>0||w!==c-1)&&(v.push(z,K,$),F+=3)}m.addGroup(g,F,0),g+=F}function L(P){const D=T,F=new Nt,O=new ee;let q=0;const w=P===!0?e:n,R=P===!0?1:-1;for(let K=1;K<=o;K++)_.push(0,S*R,0),x.push(0,R,0),M.push(.5,.5),T++;const z=T;for(let K=0;K<=o;K++){const oe=K/o*h+f,ce=Math.cos(oe),ie=Math.sin(oe);O.x=w*ie,O.y=S*R,O.z=w*ce,_.push(O.x,O.y,O.z),x.push(0,R,0),F.x=ce*.5+.5,F.y=ie*.5*R+.5,M.push(F.x,F.y),T++}for(let K=0;K<o;K++){const $=D+K,oe=z+K;P===!0?v.push(oe,oe+1,$):v.push(oe+1,oe,$),q+=3}m.addGroup(g,q,P===!0?1:2),g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gd extends md{constructor(e=1,n=1,r=32,o=1,c=!1,u=0,f=Math.PI*2){super(0,e,n,r,o,c,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f}}static fromJSON(e){return new gd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qa extends qn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,v=h+1,_=e/f,x=n/h,M=[],T=[],A=[],S=[];for(let g=0;g<v;g++){const N=g*x-u;for(let L=0;L<m;L++){const P=L*_-c;T.push(P,-N,0),A.push(0,0,1),S.push(L/f),S.push(1-g/h)}}for(let g=0;g<h;g++)for(let N=0;N<f;N++){const L=N+m*g,P=N+m*(g+1),D=N+1+m*(g+1),F=N+1+m*g;M.push(L,P,F),M.push(P,D,F)}this.setIndex(M),this.setAttribute("position",new Pn(T,3)),this.setAttribute("normal",new Pn(A,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ti extends qn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const v=[],_=new ee,x=new ee,M=[],T=[],A=[],S=[];for(let g=0;g<=r;g++){const N=[],L=g/r;let P=0;g===0&&u===0?P=.5/n:g===r&&h===Math.PI&&(P=-.5/n);for(let D=0;D<=n;D++){const F=D/n;_.x=-e*Math.cos(o+F*c)*Math.sin(u+L*f),_.y=e*Math.cos(u+L*f),_.z=e*Math.sin(o+F*c)*Math.sin(u+L*f),T.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),S.push(F+P,1-L),N.push(m++)}v.push(N)}for(let g=0;g<r;g++)for(let N=0;N<n;N++){const L=v[g][N+1],P=v[g][N],D=v[g+1][N],F=v[g+1][N+1];(g!==0||u>0)&&M.push(L,P,F),(g!==r-1||h<Math.PI)&&M.push(P,D,F)}this.setIndex(M),this.setAttribute("position",new Pn(T,3)),this.setAttribute("normal",new Pn(A,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rv extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cl extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lg,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bv extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pv extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mg extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Qu=new qt,_m=new ee,vm=new ee;class Nv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(vm),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _d extends _g{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Lv extends Nv{constructor(){super(new _d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dv extends Mg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Lv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Iv extends Mg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uv extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(s,e,n,r){const o=Ov(r);switch(n){case sg:return s*e;case og:return s*e/o.components*o.byteLength;case od:return s*e/o.components*o.byteLength;case Xs:return s*e*2/o.components*o.byteLength;case ld:return s*e*2/o.components*o.byteLength;case ag:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case cd:return s*e*4/o.components*o.byteLength;case Nl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:case Ef:return Math.max(s,16)*Math.max(e,8)/4;case Sf:case Mf:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case wf:case Cf:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:case bf:case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xf:case jf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ov(s){switch(s){case jn:case tg:return{byteLength:1,components:1};case Xa:case ng:case Ki:return{byteLength:2,components:1};case sd:case ad:return{byteLength:2,components:4};case Ni:case rd:case Ci:return{byteLength:4,components:1};case ig:case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function kv(s){const e=new WeakMap;function n(f,h){const m=f.array,v=f.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,m){const v=h.array,_=h.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,_[x]=A)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:u}}var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
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
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,Jv=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Ox=`uniform sampler2D dfgLUT;
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
}`,kx=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
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
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ES=`float getShadowMask() {
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
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
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
}`,XS=`#if DEPTH_PACKING == 3200
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
}`,jS=`#define DISTANCE
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
}`,qS=`#define DISTANCE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,JS=`uniform vec3 diffuse;
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define MATCAP
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
}`,iy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,sy=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,oy=`#define PHONG
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
}`,ly=`#define STANDARD
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
}`,cy=`#define STANDARD
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
}`,uy=`#define TOON
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
}`,fy=`#define TOON
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
}`,dy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 color;
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
}`,gy=`uniform float rotation;
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
}`,_y=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Bv,alphahash_pars_fragment:zv,alphamap_fragment:Vv,alphamap_pars_fragment:Hv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:jv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:$v,beginnormal_vertex:Kv,bsdfs:Zv,iridescence_fragment:Qv,bumpmap_pars_fragment:Jv,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:rx,color_pars_fragment:sx,color_pars_vertex:ax,color_vertex:ox,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:fx,displacementmap_vertex:dx,emissivemap_fragment:hx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Nx,envmap_vertex:yx,fog_vertex:Mx,fog_pars_vertex:Ex,fog_fragment:Tx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Cx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:bx,lights_pars_begin:Px,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:kx,lights_fragment_maps:Bx,lights_fragment_end:zx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:jx,map_particle_fragment:qx,map_particle_pars_fragment:Yx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Zx,morphcolor_vertex:Qx,morphnormal_vertex:Jx,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:aS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:cS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:fS,opaque_fragment:dS,packing:hS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:xS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:yS,shadowmap_vertex:MS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:wS,skinning_vertex:AS,skinnormal_vertex:CS,specularmap_fragment:RS,specularmap_pars_fragment:bS,tonemapping_fragment:PS,tonemapping_pars_fragment:NS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:IS,uv_pars_vertex:US,uv_vertex:FS,worldpos_vertex:OS,background_vert:kS,background_frag:BS,backgroundCube_vert:zS,backgroundCube_frag:VS,cube_vert:HS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distance_vert:jS,distance_frag:qS,equirect_vert:YS,equirect_frag:$S,linedashed_vert:KS,linedashed_frag:ZS,meshbasic_vert:QS,meshbasic_frag:JS,meshlambert_vert:ey,meshlambert_frag:ty,meshmatcap_vert:ny,meshmatcap_frag:iy,meshnormal_vert:ry,meshnormal_frag:sy,meshphong_vert:ay,meshphong_frag:oy,meshphysical_vert:ly,meshphysical_frag:cy,meshtoon_vert:uy,meshtoon_frag:fy,points_vert:dy,points_frag:hy,shadow_vert:py,shadow_frag:my,sprite_vert:gy,sprite_frag:_y},Ue={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:bn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:bn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:bn([Ue.points,Ue.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:bn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:bn([Ue.common,Ue.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:bn([Ue.sprite,Ue.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:bn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:bn([Ue.lights,Ue.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Rl={r:0,b:0,g:0},$r=new Li,vy=new qt;function xy(s,e,n,r,o,c,u){const f=new Ct(0);let h=c===!0?0:1,m,v,_=null,x=0,M=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function A(L){let P=!1;const D=T(L);D===null?g(f,h):D&&D.isColor&&(g(D,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,P){const D=T(P);D&&(D.isCubeTexture||D.mapping===Vl)?(v===void 0&&(v=new Zt(new is(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:qs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),$r.copy(P.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler($r)),v.material.toneMapped=At.getTransfer(D.colorSpace)!==Ft,(_!==D||x!==D.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=D,x=D.version,M=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Zt(new Qa(2,2),new Di({name:"BackgroundMaterial",uniforms:qs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=At.getTransfer(D.colorSpace)!==Ft,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||x!==D.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=D,x=D.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,P){L.getRGB(Rl,gg(s)),r.buffers.color.setClear(Rl.r,Rl.g,Rl.b,P,u)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),h=P,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,g(f,h)},render:A,addToRenderList:S,dispose:N}}function Sy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function f(R,z,K,$,oe){let ce=!1;const ie=_($,K,z);c!==ie&&(c=ie,m(c.object)),ce=M(R,$,K,oe),ce&&T(R,$,K,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,P(R,z,K,$),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function _(R,z,K){const $=K.wireframe===!0;let oe=r[R.id];oe===void 0&&(oe={},r[R.id]=oe);let ce=oe[z.id];ce===void 0&&(ce={},oe[z.id]=ce);let ie=ce[$];return ie===void 0&&(ie=x(h()),ce[$]=ie),ie}function x(R){const z=[],K=[],$=[];for(let oe=0;oe<n;oe++)z[oe]=0,K[oe]=0,$[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:$,object:R,attributes:{},index:null}}function M(R,z,K,$){const oe=c.attributes,ce=z.attributes;let ie=0;const H=K.getAttributes();for(const j in H)if(H[j].location>=0){const re=oe[j];let U=ce[j];if(U===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;ie++}return c.attributesNum!==ie||c.index!==$}function T(R,z,K,$){const oe={},ce=z.attributes;let ie=0;const H=K.getAttributes();for(const j in H)if(H[j].location>=0){let re=ce[j];re===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),oe[j]=U,ie++}c.attributes=oe,c.attributesNum=ie,c.index=$}function A(){const R=c.newAttributes;for(let z=0,K=R.length;z<K;z++)R[z]=0}function S(R){g(R,0)}function g(R,z){const K=c.newAttributes,$=c.enabledAttributes,oe=c.attributeDivisors;K[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),oe[R]!==z&&(s.vertexAttribDivisor(R,z),oe[R]=z)}function N(){const R=c.newAttributes,z=c.enabledAttributes;for(let K=0,$=z.length;K<$;K++)z[K]!==R[K]&&(s.disableVertexAttribArray(K),z[K]=0)}function L(R,z,K,$,oe,ce,ie){ie===!0?s.vertexAttribIPointer(R,z,K,oe,ce):s.vertexAttribPointer(R,z,K,$,oe,ce)}function P(R,z,K,$){A();const oe=$.attributes,ce=K.getAttributes(),ie=z.defaultAttributeValues;for(const H in ce){const j=ce[H];if(j.location>=0){let fe=oe[H];if(fe===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const re=fe.normalized,U=fe.itemSize,se=e.get(fe);if(se===void 0)continue;const Ae=se.buffer,He=se.type,$e=se.bytesPerElement,te=He===s.INT||He===s.UNSIGNED_INT||fe.gpuType===rd;if(fe.isInterleavedBufferAttribute){const de=fe.data,ve=de.stride,Be=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Le=0;Le<j.locationSize;Le++)g(j.location+Le,de.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Le=0;Le<j.locationSize;Le++)S(j.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Le=0;Le<j.locationSize;Le++)L(j.location+Le,U/j.locationSize,He,re,ve*$e,(Be+U/j.locationSize*Le)*$e,te)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)g(j.location+de,fe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<j.locationSize;de++)S(j.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let de=0;de<j.locationSize;de++)L(j.location+de,U/j.locationSize,He,re,U*$e,U/j.locationSize*de*$e,te)}}else if(ie!==void 0){const re=ie[H];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(j.location,re);break;case 3:s.vertexAttrib3fv(j.location,re);break;case 4:s.vertexAttrib4fv(j.location,re);break;default:s.vertexAttrib1fv(j.location,re)}}}}N()}function D(){q();for(const R in r){const z=r[R];for(const K in z){const $=z[K];for(const oe in $)v($[oe].object),delete $[oe];delete z[K]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const K in z){const $=z[K];for(const oe in $)v($[oe].object),delete $[oe];delete z[K]}delete r[R.id]}function O(R){for(const z in r){const K=r[z];if(K[R.id]===void 0)continue;const $=K[R.id];for(const oe in $)v($[oe].object),delete $[oe];delete K[R.id]}}function q(){w(),u=!0,c!==o&&(c=o,m(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function yy(s,e,n){let r;function o(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function f(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=v[T];n.update(M,r,1)}function h(m,v,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)u(m[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let T=0;for(let A=0;A<_;A++)T+=v[A]*x[A];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function My(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const q=O===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==jn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ci&&!q)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=h(m);v!==m&&(ut("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:P,maxSamples:D,samples:F}}function Ey(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Zr,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||o;return o=x,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!o||T===null||T.length===0||c&&!S)c?v(null):m();else{const N=c?0:r,L=N*4;let P=g.clippingState||null;h.value=P,P=v(T,x,L,M);for(let D=0;D!==L;++D)P[D]=n[D];g.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,M,T){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,T!==!0||S===null){const g=M+A*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,P=M;L!==A;++L,P+=4)u.copy(_[L]).applyMatrix4(N,f),u.normal.toArray(S,P),S[P+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function Ty(s){let e=new WeakMap;function n(u,f){return f===gf?u.mapping=ns:f===_f&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===gf||f===_f)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new xg(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ar=4,Sm=[.125,.215,.35,.446,.526,.582],Jr=20,wy=256,Ba=new _d,ym=new Ct;let Ju=null,ef=0,tf=0,nf=!1;const Ay=new ee;class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:f=Ay}=c;Ju=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ef,tf),this._renderer.xr.enabled=nf,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ki,format:mi,colorSpace:js,depthBuffer:!1},o=Em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cy(c)),this._blurMaterial=by(c,e,n),this._ggxMaterial=Ry(c,e,n)}return o}_compileMaterial(e){const n=new Zt(new qn,e);this._renderer.compile(n,Ba)}_sceneToCubeUV(e,n,r,o,c){const h=new ii(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(ym),_.toneMapping=bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new is,new zl({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let g=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,g=!0):(S.color.copy(ym),g=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,m[L],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x+v[L],c.y,c.z)):P===1?(h.up.set(0,0,m[L]),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y+v[L],c.z)):(h.up.set(0,m[L],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y,c.z+v[L]));const D=this._cubeSize;zs(o,P*D,L>2?D:0,D,D),_.setRenderTarget(o),g&&_.render(A,h),_.render(e,h)}_.toneMapping=M,_.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;zs(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Ba)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),x=0+m*1.25,M=_*x,{_lodMax:T}=this,A=this._sizeLods[r],S=3*A*(r>T-Ar?r-T+Ar:0),g=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=T-n,zs(c,S,g,3*A,2*A),o.setRenderTarget(c),o.render(f,Ba),h.envMap.value=c.texture,h.roughness.value=0,h.mipInt.value=T-r,zs(e,S,g,3*A,2*A),o.setRenderTarget(e),o.render(f,Ba)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),A=c/T,S=isFinite(c)?1+Math.floor(v*A):Jr;S>Jr&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const g=[];let N=0;for(let O=0;O<Jr;++O){const q=O/A,w=Math.exp(-q*q/2);g.push(w),O===0?N+=w:O<S&&(N+=2*w)}for(let O=0;O<g.length;O++)g[O]=g[O]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const P=this._sizeLods[o],D=3*P*(o>L-Ar?o-L+Ar:0),F=4*(this._cubeSize-P);zs(n,D,F,3*P,2*P),h.setRenderTarget(n),h.render(_,Ba)}}function Cy(s){const e=[],n=[],r=[];let o=s;const c=s-Ar+1+Sm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Ar?h=Sm[u-s+Ar-1]:u===0&&(h=0),n.push(h);const m=1/(f-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,A=3,S=2,g=1,N=new Float32Array(A*T*M),L=new Float32Array(S*T*M),P=new Float32Array(g*T*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,q=F>2?0:-1,w=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];N.set(w,A*T*F),L.set(x,S*T*F);const R=[F,F,F,F,F,F];P.set(R,g*T*F)}const D=new qn;D.setAttribute("position",new gi(N,A)),D.setAttribute("uv",new gi(L,S)),D.setAttribute("faceIndex",new gi(P,g)),r.push(new Zt(D,null)),o>Ar&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Em(s,e,n){const r=new Pi(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Ry(s,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function by(s,e,n){const r=new Float32Array(Jr),o=new ee(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Tm(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function wm(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function Py(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===gf||h===_f,v=h===ns||h===Ws;if(m||v){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Mm(s)),_=m?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return m&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new Mm(s)),_=m?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Ny(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qa("WebGLRenderer: "+r+" extension not supported."),o}}}function Ly(s,e,n,r){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function h(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,T=_.attributes.position;let A=0;if(M!==null){const N=M.array;A=M.version;for(let L=0,P=N.length;L<P;L+=3){const D=N[L+0],F=N[L+1],O=N[L+2];x.push(D,F,F,O,O,D)}}else if(T!==void 0){const N=T.array;A=T.version;for(let L=0,P=N.length/3-1;L<P;L+=3){const D=L+0,F=L+1,O=L+2;x.push(D,F,F,O,O,D)}}else return;const S=new(cg(x)?mg:pg)(x,1);S.version=A;const g=c.get(_);g&&e.remove(g),c.set(_,S)}function v(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function Dy(s,e,n){let r;function o(x){r=x}let c,u;function f(x){c=x.type,u=x.bytesPerElement}function h(x,M){s.drawElements(r,M,c,x*u),n.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*u,T),n.update(M,r,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let S=0;for(let g=0;g<T;g++)S+=M[g];n.update(S,r,1)}function _(x,M,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/u,M[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,T);let g=0;for(let N=0;N<T;N++)g+=M[N]*A[N];n.update(g,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Iy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Uy(s,e,n){const r=new WeakMap,o=new $t;function c(u,f,h){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let R=function(){q.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),S===!0&&(P=3);let D=f.attributes.position.count*P,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*F*4*_),q=new ug(O,D,F,_);q.type=Ci,q.needsUpdate=!0;const w=P*4;for(let z=0;z<_;z++){const K=g[z],$=N[z],oe=L[z],ce=D*F*4*z;for(let ie=0;ie<K.count;ie++){const H=ie*w;T===!0&&(o.fromBufferAttribute(K,ie),O[ce+H+0]=o.x,O[ce+H+1]=o.y,O[ce+H+2]=o.z,O[ce+H+3]=0),A===!0&&(o.fromBufferAttribute($,ie),O[ce+H+4]=o.x,O[ce+H+5]=o.y,O[ce+H+6]=o.z,O[ce+H+7]=0),S===!0&&(o.fromBufferAttribute(oe,ie),O[ce+H+8]=o.x,O[ce+H+9]=o.y,O[ce+H+10]=o.z,O[ce+H+11]=oe.itemSize===4?o.w:1)}}x={count:_,texture:q,size:new Nt(D,F)},r.set(f,x),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const A=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Fy(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,v=h.geometry,_=e.get(h,v);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return _}function u(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Oy={[qm]:"LINEAR_TONE_MAPPING",[Ym]:"REINHARD_TONE_MAPPING",[$m]:"CINEON_TONE_MAPPING",[Km]:"ACES_FILMIC_TONE_MAPPING",[Qm]:"AGX_TONE_MAPPING",[Jm]:"NEUTRAL_TONE_MAPPING",[Zm]:"CUSTOM_TONE_MAPPING"};function ky(s,e,n,r,o){const c=new Pi(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Pi(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),f=new qn;f.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const h=new Rv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Zt(f,h),v=new _d(-1,1,1,-1,0,1);let _=null,x=null,M=!1,T,A=null,S=[],g=!1;this.setSize=function(N,L){c.setSize(N,L),u.setSize(N,L);for(let P=0;P<S.length;P++){const D=S[P];D.setSize&&D.setSize(N,L)}},this.setEffects=function(N){S=N,g=S.length>0&&S[0].isRenderPass===!0;const L=c.width,P=c.height;for(let D=0;D<S.length;D++){const F=S[D];F.setSize&&F.setSize(L,P)}},this.begin=function(N,L){if(M||N.toneMapping===bi&&S.length===0)return!1;if(A=L,L!==null){const P=L.width,D=L.height;(c.width!==P||c.height!==D)&&this.setSize(P,D)}return g===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=bi,!0},this.hasRenderPass=function(){return g},this.end=function(N,L){N.toneMapping=T,M=!0;let P=c,D=u;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(N,D,P,L),O.needsSwap!==!1)){const q=P;P=D,D=q}}if(_!==N.outputColorSpace||x!==N.toneMapping){_=N.outputColorSpace,x=N.toneMapping,h.defines={},At.getTransfer(_)===Ft&&(h.defines.SRGB_TRANSFER="");const F=Oy[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(A),N.render(m,v),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),h.dispose()}}const Tg=new Tn,ed=new Ya(1,1),wg=new ug,Ag=new nv,Cg=new vg,Am=[],Cm=[],Rm=new Float32Array(16),bm=new Float32Array(9),Pm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Am[o];if(c===void 0&&(c=new Float32Array(o),Am[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function rn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Wl(s,e){let n=Cm[e];n===void 0&&(n=new Int32Array(e),Cm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function By(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2fv(this.addr,e),sn(n,e)}}function Vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;s.uniform3fv(this.addr,e),sn(n,e)}}function Hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4fv(this.addr,e),sn(n,e)}}function Gy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Pm.set(r),s.uniformMatrix2fv(this.addr,!1,Pm),sn(n,r)}}function Wy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;bm.set(r),s.uniformMatrix3fv(this.addr,!1,bm),sn(n,r)}}function Xy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Rm.set(r),s.uniformMatrix4fv(this.addr,!1,Rm),sn(n,r)}}function jy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2iv(this.addr,e),sn(n,e)}}function Yy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3iv(this.addr,e),sn(n,e)}}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4iv(this.addr,e),sn(n,e)}}function Ky(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2uiv(this.addr,e),sn(n,e)}}function Qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3uiv(this.addr,e),sn(n,e)}}function Jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4uiv(this.addr,e),sn(n,e)}}function eM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(ed.compareFunction=n.isReversedDepthBuffer()?fd:ud,c=ed):c=Tg,n.setTexture2D(e||c,o)}function tM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ag,o)}function nM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Cg,o)}function iM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||wg,o)}function rM(s){switch(s){case 5126:return By;case 35664:return zy;case 35665:return Vy;case 35666:return Hy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return jy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Zy;case 36295:return Qy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}function sM(s,e){s.uniform1fv(this.addr,e)}function aM(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function oM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function lM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function cM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function uM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function fM(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function dM(s,e){s.uniform1iv(this.addr,e)}function hM(s,e){s.uniform2iv(this.addr,e)}function pM(s,e){s.uniform3iv(this.addr,e)}function mM(s,e){s.uniform4iv(this.addr,e)}function gM(s,e){s.uniform1uiv(this.addr,e)}function _M(s,e){s.uniform2uiv(this.addr,e)}function vM(s,e){s.uniform3uiv(this.addr,e)}function xM(s,e){s.uniform4uiv(this.addr,e)}function SM(s,e,n){const r=this.cache,o=e.length,c=Wl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=ed:u=Tg;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,c[f])}function yM(s,e,n){const r=this.cache,o=e.length,c=Wl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ag,c[u])}function MM(s,e,n){const r=this.cache,o=e.length,c=Wl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Cg,c[u])}function EM(s,e,n){const r=this.cache,o=e.length,c=Wl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||wg,c[u])}function TM(s){switch(s){case 5126:return sM;case 35664:return aM;case 35665:return oM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return hM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return _M;case 36295:return vM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return EM}}class wM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rM(n.type)}}class AM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TM(n.type)}}class CM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const rf=/(\w+)(\])?(\[|\.)?/g;function Nm(s,e){s.seq.push(e),s.map[e.id]=e}function RM(s,e,n){const r=s.name,o=r.length;for(rf.lastIndex=0;;){const c=rf.exec(r),u=rf.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){Nm(n,m===void 0?new wM(f,s,e):new AM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new CM(f),Nm(n,_)),n=_}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),h=e.getUniformLocation(n,f.name);RM(f,h,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Lm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const bM=37297;let PM=0;function NM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Dm=new pt;function LM(s){At._getMatrix(Dm,At.workingColorSpace,s);const e=`mat3( ${Dm.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(s)){case Ol:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Im(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+NM(s.getShaderSource(e),f)}else return c}function DM(s,e){const n=LM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const IM={[qm]:"Linear",[Ym]:"Reinhard",[$m]:"Cineon",[Km]:"ACESFilmic",[Qm]:"AgX",[Jm]:"Neutral",[Zm]:"Custom"};function UM(s,e){const n=IM[e];return n===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bl=new ee;function FM(){At.getLuminanceCoefficients(bl);const s=bl.x.toFixed(4),e=bl.y.toFixed(4),n=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function kM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function BM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ga(s){return s!==""}function Um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zM=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(s){return s.replace(zM,HM)}const VM=new Map;function HM(s,e){let n=_t[e];if(n===void 0){const r=VM.get(e);if(r!==void 0)n=_t[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return td(n)}const GM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(s){return s.replace(GM,WM)}function WM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const XM={[Pl]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function jM(s){return XM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qM={[ns]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Vl]:"ENVMAP_TYPE_CUBE_UV"};function YM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":qM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const $M={[Ws]:"ENVMAP_MODE_REFRACTION"};function KM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$M[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZM={[jm]:"ENVMAP_BLENDING_MULTIPLY",[O_]:"ENVMAP_BLENDING_MIX",[k_]:"ENVMAP_BLENDING_ADD"};function QM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ZM[s.combine]||"ENVMAP_BLENDING_NONE"}function JM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function eE(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=jM(n),m=YM(n),v=KM(n),_=QM(n),x=JM(n),M=OM(n),T=kM(c),A=o.createProgram();let S,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ga).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ga).join(`
`),g.length>0&&(g+=`
`)):(S=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),g=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?_t.tonemapping_pars_fragment:"",n.toneMapping!==bi?UM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,DM("linearToOutputTexel",n.outputColorSpace),FM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ga).join(`
`)),u=td(u),u=Um(u,n),u=Fm(u,n),f=td(f),f=Um(f,n),f=Fm(f,n),u=Om(u),f=Om(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+S+u,P=N+g+f,D=Lm(o,o.VERTEX_SHADER,L),F=Lm(o,o.FRAGMENT_SHADER,P);o.attachShader(A,D),o.attachShader(A,F),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(z){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(A)||"",$=o.getShaderInfoLog(D)||"",oe=o.getShaderInfoLog(F)||"",ce=K.trim(),ie=$.trim(),H=oe.trim();let j=!0,fe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,D,F);else{const re=Im(o,D,"vertex"),U=Im(o,F,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ce+`
`+re+`
`+U)}else ce!==""?ut("WebGLProgram: Program Info Log:",ce):(ie===""||H==="")&&(fe=!1);fe&&(z.diagnostics={runnable:j,programLog:ce,vertexShader:{log:ie,prefix:S},fragmentShader:{log:H,prefix:g}})}o.deleteShader(D),o.deleteShader(F),q=new Ul(o,A),w=BM(o,A)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,bM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=F,this}let tE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new iE(e),n.set(e,r)),r}}class iE{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}}function rE(s,e,n,r,o,c,u){const f=new dg,h=new nE,m=new Set,v=[],_=new Map,x=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,R,z,K,$){const oe=K.fog,ce=$.geometry,ie=w.isMeshStandardMaterial?K.environment:null,H=(w.isMeshStandardMaterial?n:e).get(w.envMap||ie),j=H&&H.mapping===Vl?H.image.height:null,fe=T[w.type];w.precision!==null&&(M=o.getMaxPrecision(w.precision),M!==w.precision&&ut("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=re!==void 0?re.length:0;let se=0;ce.morphAttributes.position!==void 0&&(se=1),ce.morphAttributes.normal!==void 0&&(se=2),ce.morphAttributes.color!==void 0&&(se=3);let Ae,He,$e,te;if(fe){const Et=wi[fe];Ae=Et.vertexShader,He=Et.fragmentShader}else Ae=w.vertexShader,He=w.fragmentShader,h.update(w),$e=h.getVertexShaderID(w),te=h.getFragmentShaderID(w);const de=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Be=$.isInstancedMesh===!0,Le=$.isBatchedMesh===!0,mt=!!w.map,Ht=!!w.matcap,ht=!!H,Ne=!!w.aoMap,Ke=!!w.lightMap,Ve=!!w.bumpMap,xt=!!w.normalMap,B=!!w.displacementMap,Mt=!!w.emissiveMap,lt=!!w.metalnessMap,dt=!!w.roughnessMap,Oe=w.anisotropy>0,b=w.clearcoat>0,y=w.dispersion>0,X=w.iridescence>0,he=w.sheen>0,pe=w.transmission>0,ue=Oe&&!!w.anisotropyMap,Ge=b&&!!w.clearcoatMap,Te=b&&!!w.clearcoatNormalMap,We=b&&!!w.clearcoatRoughnessMap,st=X&&!!w.iridescenceMap,ye=X&&!!w.iridescenceThicknessMap,be=he&&!!w.sheenColorMap,qe=he&&!!w.sheenRoughnessMap,Ze=!!w.specularMap,Ce=!!w.specularColorMap,ft=!!w.specularIntensityMap,G=pe&&!!w.transmissionMap,De=pe&&!!w.thicknessMap,Me=!!w.gradientMap,Ie=!!w.alphaMap,xe=w.alphaTest>0,me=!!w.alphaHash,Re=!!w.extensions;let at=bi;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ut={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:He,defines:w.defines,customVertexShaderID:$e,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Le,batchingColor:Le&&$._colorsTexture!==null,instancing:Be,instancingColor:Be&&$.instanceColor!==null,instancingMorph:Be&&$.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:js,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:Ht,envMap:ht,envMapMode:ht&&H.mapping,envMapCubeUVHeight:j,aoMap:Ne,lightMap:Ke,bumpMap:Ve,normalMap:xt,displacementMap:B,emissiveMap:Mt,normalMapObjectSpace:xt&&w.normalMapType===V_,normalMapTangentSpace:xt&&w.normalMapType===lg,metalnessMap:lt,roughnessMap:dt,anisotropy:Oe,anisotropyMap:ue,clearcoat:b,clearcoatMap:Ge,clearcoatNormalMap:Te,clearcoatRoughnessMap:We,dispersion:y,iridescence:X,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:be,sheenRoughnessMap:qe,specularMap:Ze,specularColorMap:Ce,specularIntensityMap:ft,transmission:pe,transmissionMap:G,thicknessMap:De,gradientMap:Me,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:xe,alphaHash:me,combine:w.combine,mapUv:mt&&A(w.map.channel),aoMapUv:Ne&&A(w.aoMap.channel),lightMapUv:Ke&&A(w.lightMap.channel),bumpMapUv:Ve&&A(w.bumpMap.channel),normalMapUv:xt&&A(w.normalMap.channel),displacementMapUv:B&&A(w.displacementMap.channel),emissiveMapUv:Mt&&A(w.emissiveMap.channel),metalnessMapUv:lt&&A(w.metalnessMap.channel),roughnessMapUv:dt&&A(w.roughnessMap.channel),anisotropyMapUv:ue&&A(w.anisotropyMap.channel),clearcoatMapUv:Ge&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&A(w.sheenRoughnessMap.channel),specularMapUv:Ze&&A(w.specularMap.channel),specularColorMapUv:Ce&&A(w.specularColorMap.channel),specularIntensityMapUv:ft&&A(w.specularIntensityMap.channel),transmissionMapUv:G&&A(w.transmissionMap.channel),thicknessMapUv:De&&A(w.thicknessMap.channel),alphaMapUv:Ie&&A(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(xt||Oe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(mt||Ie),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ve,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:Mt&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ai,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)R.push(z),R.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(N(R,w),L(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function L(w,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),w.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),w.push(f.mask)}function P(w){const R=T[w.type];let z;if(R){const K=wi[R];z=mv.clone(K.uniforms)}else z=w.uniforms;return z}function D(w,R){let z=_.get(R);return z!==void 0?++z.usedTimes:(z=new eE(s,R,w,c),v.push(z),_.set(R,z)),z}function F(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),_.delete(w.cacheKey),w.destroy()}}function O(w){h.remove(w)}function q(){h.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:D,releaseProgram:F,releaseShaderCache:O,programs:v,dispose:q}}function sE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function aE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(_,x,M,T,A,S){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:A,group:S},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=A,g.group=S),e++,g}function f(_,x,M,T,A,S){const g=u(_,x,M,T,A,S);M.transmission>0?r.push(g):M.transparent===!0?o.push(g):n.push(g)}function h(_,x,M,T,A,S){const g=u(_,x,M,T,A,S);M.transmission>0?r.unshift(g):M.transparent===!0?o.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||aE),r.length>1&&r.sort(x||Bm),o.length>1&&o.sort(x||Bm)}function v(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:h,finish:v,sort:m}}function oE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new zm,s.set(r,[u])):o>=c.length?(u=new zm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new Ct};break;case"SpotLight":n={position:new ee,direction:new ee,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function cE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let uE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dE(s){const e=new lE,n=cE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const o=new ee,c=new qt,u=new qt;function f(m){let v=0,_=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,A=0,S=0,g=0,N=0,L=0,P=0,D=0,F=0,O=0;m.sort(fE);for(let w=0,R=m.length;w<R;w++){const z=m[w],K=z.color,$=z.intensity,oe=z.distance;let ce=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Xs?ce=z.shadow.map.texture:ce=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=K.r*$,_+=K.g*$,x+=K.b*$;else if(z.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(z.sh.coefficients[ie],$);O++}else if(z.isDirectionalLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,j=n.get(z);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=z.shadow.matrix,N++}r.directional[M]=ie,M++}else if(z.isSpotLight){const ie=e.get(z);ie.position.setFromMatrixPosition(z.matrixWorld),ie.color.copy(K).multiplyScalar($),ie.distance=oe,ie.coneCos=Math.cos(z.angle),ie.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ie.decay=z.decay,r.spot[A]=ie;const H=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,H.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[A]=H.matrix,z.castShadow){const j=n.get(z);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=ce,P++}A++}else if(z.isRectAreaLight){const ie=e.get(z);ie.color.copy(K).multiplyScalar($),ie.halfWidth.set(z.width*.5,0,0),ie.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ie,S++}else if(z.isPointLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),ie.distance=z.distance,ie.decay=z.decay,z.castShadow){const H=z.shadow,j=n.get(z);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=ie,T++}else if(z.isHemisphereLight){const ie=e.get(z);ie.skyColor.copy(z.color).multiplyScalar($),ie.groundColor.copy(z.groundColor).multiplyScalar($),r.hemi[g]=ie,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==M||q.pointLength!==T||q.spotLength!==A||q.rectAreaLength!==S||q.hemiLength!==g||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==P||q.numSpotMaps!==D||q.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+D-F,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,q.directionalLength=M,q.pointLength=T,q.spotLength=A,q.rectAreaLength=S,q.hemiLength=g,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=P,q.numSpotMaps=D,q.numLightProbes=O,r.version=uE++)}function h(m,v){let _=0,x=0,M=0,T=0,A=0;const S=v.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const L=m[g];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),_++}else if(L.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),A++}}}return{setup:f,setupView:h,state:r}}function Vm(s){const e=new dE(s),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function f(){e.setup(n)}function h(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function hE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new Vm(s),e.set(o,[f])):c>=u.length?(f=new Vm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
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
}`,gE=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],_E=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Hm=new qt,za=new ee,sf=new ee;function vE(s,e,n){let r=new pd;const o=new Nt,c=new Nt,u=new $t,f=new bv,h=new Pv,m={},v=n.maxTextureSize,_={[Cr]:kn,[kn]:Cr,[Ai]:Ai},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new qn;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zt(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let g=this.type;this.render=function(F,O,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===Xm&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Pl);const w=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Yi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=g!==this.type;$&&O.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(ce=>ce.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,ce=F.length;oe<ce;oe++){const ie=F[oe],H=ie.shadow;if(H===void 0){ut("WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const j=H.getFrameExtents();if(o.multiply(j),c.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/j.x),o.x=c.x*j.x,H.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/j.y),o.y=c.y*j.y,H.mapSize.y=c.y)),H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ha){if(ie.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Pi(o.x,o.y,{format:Xs,type:Ki,minFilter:En,magFilter:En,generateMipmaps:!1}),H.map.texture.name=ie.name+".shadowMap",H.map.depthTexture=new Ya(o.x,o.y,Ci),H.map.depthTexture.name=ie.name+".shadowMapDepth",H.map.depthTexture.format=Zi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pn,H.map.depthTexture.magFilter=pn}else{ie.isPointLight?(H.map=new xg(o.x),H.map.depthTexture=new Cv(o.x,Ni)):(H.map=new Pi(o.x,o.y),H.map.depthTexture=new Ya(o.x,o.y,Ni)),H.map.depthTexture.name=ie.name+".shadowMap",H.map.depthTexture.format=Zi;const re=s.state.buffers.depth.getReversed();this.type===Pl?(H.map.depthTexture.compareFunction=re?fd:ud,H.map.depthTexture.minFilter=En,H.map.depthTexture.magFilter=En):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pn,H.map.depthTexture.magFilter=pn)}H.camera.updateProjectionMatrix()}const fe=H.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<fe;re++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,re),s.clear();else{re===0&&(s.setRenderTarget(H.map),s.clear());const U=H.getViewport(re);u.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),K.viewport(u)}if(ie.isPointLight){const U=H.camera,se=H.matrix,Ae=ie.distance||U.far;Ae!==U.far&&(U.far=Ae,U.updateProjectionMatrix()),za.setFromMatrixPosition(ie.matrixWorld),U.position.copy(za),sf.copy(U.position),sf.add(gE[re]),U.up.copy(_E[re]),U.lookAt(sf),U.updateMatrixWorld(),se.makeTranslation(-za.x,-za.y,-za.z),Hm.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Hm,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(ie);r=H.getFrustum(),P(O,q,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===Ha&&N(H,q),H.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(w,R,z)};function N(F,O){const q=e.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pi(o.x,o.y,{format:Xs,type:Ki})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,q,x,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,q,M,A,null)}function L(F,O,q,w){let R=null;const z=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=q.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=R.uuid,$=O.uuid;let oe=m[K];oe===void 0&&(oe={},m[K]=oe);let ce=oe[$];ce===void 0&&(ce=R.clone(),oe[$]=ce,O.addEventListener("dispose",D)),R=ce}if(R.visible=O.visible,R.wireframe=O.wireframe,w===Ha?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=s.properties.get(R);K.light=q}return R}function P(F,O,q,w,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ha)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const $=e.update(F),oe=F.material;if(Array.isArray(oe)){const ce=$.groups;for(let ie=0,H=ce.length;ie<H;ie++){const j=ce[ie],fe=oe[j.materialIndex];if(fe&&fe.visible){const re=L(F,fe,w,R);F.onBeforeShadow(s,F,O,q,$,re,j),s.renderBufferDirect(q,null,$,re,F,j),F.onAfterShadow(s,F,O,q,$,re,j)}}}else if(oe.visible){const ce=L(F,oe,w,R);F.onBeforeShadow(s,F,O,q,$,ce,null),s.renderBufferDirect(q,null,$,ce,F,null),F.onAfterShadow(s,F,O,q,$,ce,null)}}const K=F.children;for(let $=0,oe=K.length;$<oe;$++)P(K[$],O,q,w,R)}function D(F){F.target.removeEventListener("dispose",D);for(const q in m){const w=m[q],R=F.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const xE={[cf]:uf,[ff]:pf,[df]:mf,[Gs]:hf,[uf]:cf,[pf]:ff,[mf]:df,[hf]:Gs};function SE(s,e){function n(){let G=!1;const De=new $t;let Me=null;const Ie=new $t(0,0,0,0);return{setMask:function(xe){Me!==xe&&!G&&(s.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){G=xe},setClear:function(xe,me,Re,at,Ut){Ut===!0&&(xe*=at,me*=at,Re*=at),De.set(xe,me,Re,at),Ie.equals(De)===!1&&(s.clearColor(xe,me,Re,at),Ie.copy(De))},reset:function(){G=!1,Me=null,Ie.set(-1,0,0,0)}}}function r(){let G=!1,De=!1,Me=null,Ie=null,xe=null;return{setReversed:function(me){if(De!==me){const Re=e.get("EXT_clip_control");me?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),De=me;const at=xe;xe=null,this.setClear(at)}},getReversed:function(){return De},setTest:function(me){me?de(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(me){Me!==me&&!G&&(s.depthMask(me),Me=me)},setFunc:function(me){if(De&&(me=xE[me]),Ie!==me){switch(me){case cf:s.depthFunc(s.NEVER);break;case uf:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case df:s.depthFunc(s.EQUAL);break;case hf:s.depthFunc(s.GEQUAL);break;case pf:s.depthFunc(s.GREATER);break;case mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=me}},setLocked:function(me){G=me},setClear:function(me){xe!==me&&(De&&(me=1-me),s.clearDepth(me),xe=me)},reset:function(){G=!1,Me=null,Ie=null,xe=null,De=!1}}}function o(){let G=!1,De=null,Me=null,Ie=null,xe=null,me=null,Re=null,at=null,Ut=null;return{setTest:function(Et){G||(Et?de(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Et){De!==Et&&!G&&(s.stencilMask(Et),De=Et)},setFunc:function(Et,Bn,wn){(Me!==Et||Ie!==Bn||xe!==wn)&&(s.stencilFunc(Et,Bn,wn),Me=Et,Ie=Bn,xe=wn)},setOp:function(Et,Bn,wn){(me!==Et||Re!==Bn||at!==wn)&&(s.stencilOp(Et,Bn,wn),me=Et,Re=Bn,at=wn)},setLocked:function(Et){G=Et},setClear:function(Et){Ut!==Et&&(s.clearStencil(Et),Ut=Et)},reset:function(){G=!1,De=null,Me=null,Ie=null,xe=null,me=null,Re=null,at=null,Ut=null}}}const c=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,M=[],T=null,A=!1,S=null,g=null,N=null,L=null,P=null,D=null,F=null,O=new Ct(0,0,0),q=0,w=!1,R=null,z=null,K=null,$=null,oe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,H=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),ie=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ie=H>=2);let fe=null,re={};const U=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ae=new $t().fromArray(U),He=new $t().fromArray(se);function $e(G,De,Me,Ie){const xe=new Uint8Array(4),me=s.createTexture();s.bindTexture(G,me),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Me;Re++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(De+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return me}const te={};te[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(Gs),Ve(!1),xt(Xp),de(s.CULL_FACE),Ne(Yi);function de(G){v[G]!==!0&&(s.enable(G),v[G]=!0)}function ve(G){v[G]!==!1&&(s.disable(G),v[G]=!1)}function Be(G,De){return _[G]!==De?(s.bindFramebuffer(G,De),_[G]=De,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=De),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Le(G,De){let Me=M,Ie=!1;if(G){Me=x.get(De),Me===void 0&&(Me=[],x.set(De,Me));const xe=G.textures;if(Me.length!==xe.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Re=xe.length;me<Re;me++)Me[me]=s.COLOR_ATTACHMENT0+me;Me.length=xe.length,Ie=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Me)}function mt(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const Ht={[Qr]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[y_]:s.FUNC_REVERSE_SUBTRACT};Ht[M_]=s.MIN,Ht[E_]=s.MAX;const ht={[T_]:s.ZERO,[w_]:s.ONE,[A_]:s.SRC_COLOR,[of]:s.SRC_ALPHA,[L_]:s.SRC_ALPHA_SATURATE,[P_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[lf]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[b_]:s.ONE_MINUS_DST_ALPHA,[D_]:s.CONSTANT_COLOR,[I_]:s.ONE_MINUS_CONSTANT_COLOR,[U_]:s.CONSTANT_ALPHA,[F_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(G,De,Me,Ie,xe,me,Re,at,Ut,Et){if(G===Yi){A===!0&&(ve(s.BLEND),A=!1);return}if(A===!1&&(de(s.BLEND),A=!0),G!==x_){if(G!==S||Et!==w){if((g!==Qr||P!==Qr)&&(s.blendEquation(s.FUNC_ADD),g=Qr,P=Qr),Et)switch(G){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fl:s.blendFunc(s.ONE,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",G);break}else switch(G){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jp:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qp:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",G);break}N=null,L=null,D=null,F=null,O.set(0,0,0),q=0,S=G,w=Et}return}xe=xe||De,me=me||Me,Re=Re||Ie,(De!==g||xe!==P)&&(s.blendEquationSeparate(Ht[De],Ht[xe]),g=De,P=xe),(Me!==N||Ie!==L||me!==D||Re!==F)&&(s.blendFuncSeparate(ht[Me],ht[Ie],ht[me],ht[Re]),N=Me,L=Ie,D=me,F=Re),(at.equals(O)===!1||Ut!==q)&&(s.blendColor(at.r,at.g,at.b,Ut),O.copy(at),q=Ut),S=G,w=!1}function Ke(G,De){G.side===Ai?ve(s.CULL_FACE):de(s.CULL_FACE);let Me=G.side===kn;De&&(Me=!Me),Ve(Me),G.blending===Vs&&G.transparent===!1?Ne(Yi):Ne(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const Ie=G.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Mt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function xt(G){G!==__?(de(s.CULL_FACE),G!==z&&(G===Xp?s.cullFace(s.BACK):G===v_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),z=G}function B(G){G!==K&&(ie&&s.lineWidth(G),K=G)}function Mt(G,De,Me){G?(de(s.POLYGON_OFFSET_FILL),($!==De||oe!==Me)&&(s.polygonOffset(De,Me),$=De,oe=Me)):ve(s.POLYGON_OFFSET_FILL)}function lt(G){G?de(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function dt(G){G===void 0&&(G=s.TEXTURE0+ce-1),fe!==G&&(s.activeTexture(G),fe=G)}function Oe(G,De,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ce-1:Me=fe);let Ie=re[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[Me]=Ie),(Ie.type!==G||Ie.texture!==De)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(G,De||te[G]),Ie.type=G,Ie.texture=De)}function b(){const G=re[fe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function he(){try{s.texSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function pe(){try{s.texSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Te(){try{s.texStorage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function We(){try{s.texStorage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function st(){try{s.texImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function ye(){try{s.texImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function be(G){Ae.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ae.copy(G))}function qe(G){He.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),He.copy(G))}function Ze(G,De){let Me=m.get(De);Me===void 0&&(Me=new WeakMap,m.set(De,Me));let Ie=Me.get(G);Ie===void 0&&(Ie=s.getUniformBlockIndex(De,G.name),Me.set(G,Ie))}function Ce(G,De){const Ie=m.get(De).get(G);h.get(De)!==Ie&&(s.uniformBlockBinding(De,Ie,G.__bindingPointIndex),h.set(De,Ie))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},fe=null,re={},_={},x=new WeakMap,M=[],T=null,A=!1,S=null,g=null,N=null,L=null,P=null,D=null,F=null,O=new Ct(0,0,0),q=0,w=!1,R=null,z=null,K=null,$=null,oe=null,Ae.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:de,disable:ve,bindFramebuffer:Be,drawBuffers:Le,useProgram:mt,setBlending:Ne,setMaterial:Ke,setFlipSided:Ve,setCullFace:xt,setLineWidth:B,setPolygonOffset:Mt,setScissorTest:lt,activeTexture:dt,bindTexture:Oe,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:X,texImage2D:st,texImage3D:ye,updateUBOMapping:Ze,uniformBlockBinding:Ce,texStorage2D:Te,texStorage3D:We,texSubImage2D:he,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ge,scissor:be,viewport:qe,reset:ft}}function yE(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,v=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,y){return M?new OffscreenCanvas(b,y):Bl("canvas")}function A(b,y,X){let he=1;const pe=Oe(b);if((pe.width>X||pe.height>X)&&(he=X/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(he*pe.width),Ge=Math.floor(he*pe.height);_===void 0&&(_=T(ue,Ge));const Te=y?T(ue,Ge):_;return Te.width=ue,Te.height=Ge,Te.getContext("2d").drawImage(b,0,0,ue,Ge),ut("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Ge+")."),Te}else return"data"in b&&ut("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,y,X,he,pe=!1){if(b!==null){if(s[b]!==void 0)return s[b];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=y;if(y===s.RED&&(X===s.FLOAT&&(ue=s.R32F),X===s.HALF_FLOAT&&(ue=s.R16F),X===s.UNSIGNED_BYTE&&(ue=s.R8)),y===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ue=s.R8UI),X===s.UNSIGNED_SHORT&&(ue=s.R16UI),X===s.UNSIGNED_INT&&(ue=s.R32UI),X===s.BYTE&&(ue=s.R8I),X===s.SHORT&&(ue=s.R16I),X===s.INT&&(ue=s.R32I)),y===s.RG&&(X===s.FLOAT&&(ue=s.RG32F),X===s.HALF_FLOAT&&(ue=s.RG16F),X===s.UNSIGNED_BYTE&&(ue=s.RG8)),y===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ue=s.RG8UI),X===s.UNSIGNED_SHORT&&(ue=s.RG16UI),X===s.UNSIGNED_INT&&(ue=s.RG32UI),X===s.BYTE&&(ue=s.RG8I),X===s.SHORT&&(ue=s.RG16I),X===s.INT&&(ue=s.RG32I)),y===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),X===s.UNSIGNED_INT&&(ue=s.RGB32UI),X===s.BYTE&&(ue=s.RGB8I),X===s.SHORT&&(ue=s.RGB16I),X===s.INT&&(ue=s.RGB32I)),y===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),X===s.UNSIGNED_INT&&(ue=s.RGBA32UI),X===s.BYTE&&(ue=s.RGBA8I),X===s.SHORT&&(ue=s.RGBA16I),X===s.INT&&(ue=s.RGBA32I)),y===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),y===s.RGBA){const Ge=pe?Ol:At.getTransfer(he);X===s.FLOAT&&(ue=s.RGBA32F),X===s.HALF_FLOAT&&(ue=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ue=Ge===Ft?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(b,y){let X;return b?y===null||y===Ni||y===ja?X=s.DEPTH24_STENCIL8:y===Ci?X=s.DEPTH32F_STENCIL8:y===Xa&&(X=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===ja?X=s.DEPTH_COMPONENT24:y===Ci?X=s.DEPTH_COMPONENT32F:y===Xa&&(X=s.DEPTH_COMPONENT16),X}function D(b,y){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==pn&&b.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function F(b){const y=b.target;y.removeEventListener("dispose",F),q(y),y.isVideoTexture&&v.delete(y)}function O(b){const y=b.target;y.removeEventListener("dispose",O),R(y)}function q(b){const y=r.get(b);if(y.__webglInit===void 0)return;const X=b.source,he=x.get(X);if(he){const pe=he[y.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(b),Object.keys(he).length===0&&x.delete(X)}r.remove(b)}function w(b){const y=r.get(b);s.deleteTexture(y.__webglTexture);const X=b.source,he=x.get(X);delete he[y.__cacheKey],u.memory.textures--}function R(b){const y=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(y.__webglFramebuffer[he]))for(let pe=0;pe<y.__webglFramebuffer[he].length;pe++)s.deleteFramebuffer(y.__webglFramebuffer[he][pe]);else s.deleteFramebuffer(y.__webglFramebuffer[he]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[he])}else{if(Array.isArray(y.__webglFramebuffer))for(let he=0;he<y.__webglFramebuffer.length;he++)s.deleteFramebuffer(y.__webglFramebuffer[he]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let he=0;he<y.__webglColorRenderbuffer.length;he++)y.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[he]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=b.textures;for(let he=0,pe=X.length;he<pe;he++){const ue=r.get(X[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(X[he])}r.remove(b)}let z=0;function K(){z=0}function $(){const b=z;return b>=o.maxTextures&&ut("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),z+=1,b}function oe(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function ce(b,y){const X=r.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&X.__version!==b.version){const he=b.image;if(he===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{te(X,b,y);return}}else b.isExternalTexture&&(X.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+y)}function ie(b,y){const X=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){te(X,b,y);return}else b.isExternalTexture&&(X.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+y)}function H(b,y){const X=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){te(X,b,y);return}n.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+y)}function j(b,y){const X=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&X.__version!==b.version){de(X,b,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+y)}const fe={[vf]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[xf]:s.MIRRORED_REPEAT},re={[pn]:s.NEAREST,[B_]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},U={[H_]:s.NEVER,[q_]:s.ALWAYS,[G_]:s.LESS,[ud]:s.LEQUAL,[W_]:s.EQUAL,[fd]:s.GEQUAL,[X_]:s.GREATER,[j_]:s.NOTEQUAL};function se(b,y){if(y.type===Ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===Cu||y.magFilter===ol||y.magFilter===es||y.minFilter===En||y.minFilter===Cu||y.minFilter===ol||y.minFilter===es)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,fe[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,fe[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,fe[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==ol&&y.minFilter!==es||y.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Ae(b,y){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",F));const he=y.source;let pe=x.get(he);pe===void 0&&(pe={},x.set(he,pe));const ue=oe(y);if(ue!==b.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),pe[ue].usedTimes++;const Ge=pe[b.__cacheKey];Ge!==void 0&&(pe[b.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(y)),b.__cacheKey=ue,b.__webglTexture=pe[ue].texture}return X}function He(b,y,X){return Math.floor(Math.floor(b/X)/y)}function $e(b,y,X,he){const ue=b.updateRanges;if(ue.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,X,he,y.data);else{ue.sort((ye,be)=>ye.start-be.start);let Ge=0;for(let ye=1;ye<ue.length;ye++){const be=ue[Ge],qe=ue[ye],Ze=be.start+be.count,Ce=He(qe.start,y.width,4),ft=He(be.start,y.width,4);qe.start<=Ze+1&&Ce===ft&&He(qe.start+qe.count-1,y.width,4)===Ce?be.count=Math.max(be.count,qe.start+qe.count-be.start):(++Ge,ue[Ge]=qe)}ue.length=Ge+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),st=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ye=0,be=ue.length;ye<be;ye++){const qe=ue[ye],Ze=Math.floor(qe.start/4),Ce=Math.ceil(qe.count/4),ft=Ze%y.width,G=Math.floor(Ze/y.width),De=Ce,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,ft,G,De,Me,X,he,y.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,st)}}function te(b,y,X){let he=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(he=s.TEXTURE_3D);const pe=Ae(b,y),ue=y.source;n.bindTexture(he,b.__webglTexture,s.TEXTURE0+X);const Ge=r.get(ue);if(ue.version!==Ge.__version||pe===!0){n.activeTexture(s.TEXTURE0+X);const Te=At.getPrimaries(At.workingColorSpace),We=y.colorSpace===Tr?null:At.getPrimaries(y.colorSpace),st=y.colorSpace===Tr||Te===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=A(y.image,!1,o.maxTextureSize);ye=dt(y,ye);const be=c.convert(y.format,y.colorSpace),qe=c.convert(y.type);let Ze=L(y.internalFormat,be,qe,y.colorSpace,y.isVideoTexture);se(he,y);let Ce;const ft=y.mipmaps,G=y.isVideoTexture!==!0,De=Ge.__version===void 0||pe===!0,Me=ue.dataReady,Ie=D(y,ye);if(y.isDepthTexture)Ze=P(y.format===ts,y.type),De&&(G?n.texStorage2D(s.TEXTURE_2D,1,Ze,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Ze,ye.width,ye.height,0,be,qe,null));else if(y.isDataTexture)if(ft.length>0){G&&De&&n.texStorage2D(s.TEXTURE_2D,Ie,Ze,ft[0].width,ft[0].height);for(let xe=0,me=ft.length;xe<me;xe++)Ce=ft[xe],G?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,be,qe,Ce.data):n.texImage2D(s.TEXTURE_2D,xe,Ze,Ce.width,Ce.height,0,be,qe,Ce.data);y.generateMipmaps=!1}else G?(De&&n.texStorage2D(s.TEXTURE_2D,Ie,Ze,ye.width,ye.height),Me&&$e(y,ye,be,qe)):n.texImage2D(s.TEXTURE_2D,0,Ze,ye.width,ye.height,0,be,qe,ye.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){G&&De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ze,ft[0].width,ft[0].height,ye.depth);for(let xe=0,me=ft.length;xe<me;xe++)if(Ce=ft[xe],y.format!==mi)if(be!==null)if(G){if(Me)if(y.layerUpdates.size>0){const Re=xm(Ce.width,Ce.height,y.format,y.type);for(const at of y.layerUpdates){const Ut=Ce.data.subarray(at*Re/Ce.data.BYTES_PER_ELEMENT,(at+1)*Re/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,at,Ce.width,Ce.height,1,be,Ut)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ye.depth,be,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Ze,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ye.depth,be,qe,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,Ze,Ce.width,Ce.height,ye.depth,0,be,qe,Ce.data)}else{G&&De&&n.texStorage2D(s.TEXTURE_2D,Ie,Ze,ft[0].width,ft[0].height);for(let xe=0,me=ft.length;xe<me;xe++)Ce=ft[xe],y.format!==mi?be!==null?G?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,be,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,Ze,Ce.width,Ce.height,0,Ce.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,be,qe,Ce.data):n.texImage2D(s.TEXTURE_2D,xe,Ze,Ce.width,Ce.height,0,be,qe,Ce.data)}else if(y.isDataArrayTexture)if(G){if(De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ze,ye.width,ye.height,ye.depth),Me)if(y.layerUpdates.size>0){const xe=xm(ye.width,ye.height,y.format,y.type);for(const me of y.layerUpdates){const Re=ye.data.subarray(me*xe/ye.data.BYTES_PER_ELEMENT,(me+1)*xe/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,be,qe,Re)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,be,qe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,ye.width,ye.height,ye.depth,0,be,qe,ye.data);else if(y.isData3DTexture)G?(De&&n.texStorage3D(s.TEXTURE_3D,Ie,Ze,ye.width,ye.height,ye.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,be,qe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Ze,ye.width,ye.height,ye.depth,0,be,qe,ye.data);else if(y.isFramebufferTexture){if(De)if(G)n.texStorage2D(s.TEXTURE_2D,Ie,Ze,ye.width,ye.height);else{let xe=ye.width,me=ye.height;for(let Re=0;Re<Ie;Re++)n.texImage2D(s.TEXTURE_2D,Re,Ze,xe,me,0,be,qe,null),xe>>=1,me>>=1}}else if(ft.length>0){if(G&&De){const xe=Oe(ft[0]);n.texStorage2D(s.TEXTURE_2D,Ie,Ze,xe.width,xe.height)}for(let xe=0,me=ft.length;xe<me;xe++)Ce=ft[xe],G?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,be,qe,Ce):n.texImage2D(s.TEXTURE_2D,xe,Ze,be,qe,Ce);y.generateMipmaps=!1}else if(G){if(De){const xe=Oe(ye);n.texStorage2D(s.TEXTURE_2D,Ie,Ze,xe.width,xe.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be,qe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Ze,be,qe,ye);S(y)&&g(he),Ge.__version=ue.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function de(b,y,X){if(y.image.length!==6)return;const he=Ae(b,y),pe=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+X);const ue=r.get(pe);if(pe.version!==ue.__version||he===!0){n.activeTexture(s.TEXTURE0+X);const Ge=At.getPrimaries(At.workingColorSpace),Te=y.colorSpace===Tr?null:At.getPrimaries(y.colorSpace),We=y.colorSpace===Tr||Ge===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const st=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,be=[];for(let me=0;me<6;me++)!st&&!ye?be[me]=A(y.image[me],!0,o.maxCubemapSize):be[me]=ye?y.image[me].image:y.image[me],be[me]=dt(y,be[me]);const qe=be[0],Ze=c.convert(y.format,y.colorSpace),Ce=c.convert(y.type),ft=L(y.internalFormat,Ze,Ce,y.colorSpace),G=y.isVideoTexture!==!0,De=ue.__version===void 0||he===!0,Me=pe.dataReady;let Ie=D(y,qe);se(s.TEXTURE_CUBE_MAP,y);let xe;if(st){G&&De&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ft,qe.width,qe.height);for(let me=0;me<6;me++){xe=be[me].mipmaps;for(let Re=0;Re<xe.length;Re++){const at=xe[Re];y.format!==mi?Ze!==null?G?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,at.width,at.height,Ze,at.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ft,at.width,at.height,0,at.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,at.width,at.height,Ze,Ce,at.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ft,at.width,at.height,0,Ze,Ce,at.data)}}}else{if(xe=y.mipmaps,G&&De){xe.length>0&&Ie++;const me=Oe(be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ft,me.width,me.height)}for(let me=0;me<6;me++)if(ye){G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,be[me].width,be[me].height,Ze,Ce,be[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,be[me].width,be[me].height,0,Ze,Ce,be[me].data);for(let Re=0;Re<xe.length;Re++){const Ut=xe[Re].image[me].image;G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Ut.width,Ut.height,Ze,Ce,Ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ft,Ut.width,Ut.height,0,Ze,Ce,Ut.data)}}else{G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ze,Ce,be[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,Ze,Ce,be[me]);for(let Re=0;Re<xe.length;Re++){const at=xe[Re];G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Ze,Ce,at.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ft,Ze,Ce,at.image[me])}}}S(y)&&g(s.TEXTURE_CUBE_MAP),ue.__version=pe.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ve(b,y,X,he,pe,ue){const Ge=c.convert(X.format,X.colorSpace),Te=c.convert(X.type),We=L(X.internalFormat,Ge,Te,X.colorSpace),st=r.get(y),ye=r.get(X);if(ye.__renderTarget=y,!st.__hasExternalTextures){const be=Math.max(1,y.width>>ue),qe=Math.max(1,y.height>>ue);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,ue,We,be,qe,y.depth,0,Ge,Te,null):n.texImage2D(pe,ue,We,be,qe,0,Ge,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),Mt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,pe,ye.__webglTexture,0,B(y)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,pe,ye.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(b,y,X){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const he=y.depthTexture,pe=he&&he.isDepthTexture?he.type:null,ue=P(y.stencilBuffer,pe),Ge=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Mt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(y),ue,y.width,y.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(y),ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ue,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,b)}else{const he=y.textures;for(let pe=0;pe<he.length;pe++){const ue=he[pe],Ge=c.convert(ue.format,ue.colorSpace),Te=c.convert(ue.type),We=L(ue.internalFormat,Ge,Te,ue.colorSpace);Mt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(y),We,y.width,y.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(y),We,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,We,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(b,y,X){const he=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(y.depthTexture);if(pe.__renderTarget=y,(!pe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),se(s.TEXTURE_CUBE_MAP,y.depthTexture);const st=c.convert(y.depthTexture.format),ye=c.convert(y.depthTexture.type);let be;y.depthTexture.format===Zi?be=s.DEPTH_COMPONENT24:y.depthTexture.format===ts&&(be=s.DEPTH24_STENCIL8);for(let qe=0;qe<6;qe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,be,y.width,y.height,0,st,ye,null)}}else ce(y.depthTexture,0);const ue=pe.__webglTexture,Ge=B(y),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,We=y.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Zi)Mt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Te,ue,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,We,Te,ue,0);else if(y.depthTexture.format===ts)Mt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Te,ue,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,We,Te,ue,0);else throw new Error("Unknown depthTexture format")}function mt(b){const y=r.get(b),X=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const he=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),he){const pe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),y.__depthDisposeCallback=pe}y.__boundDepthTexture=he}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let he=0;he<6;he++)Le(y.__webglFramebuffer[he],b,he);else{const he=b.texture.mipmaps;he&&he.length>0?Le(y.__webglFramebuffer[0],b,0):Le(y.__webglFramebuffer,b,0)}else if(X){y.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[he]),y.__webglDepthbuffer[he]===void 0)y.__webglDepthbuffer[he]=s.createRenderbuffer(),Be(y.__webglDepthbuffer[he],b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ue)}}else{const he=b.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Be(y.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(b,y,X){const he=r.get(b);y!==void 0&&ve(he.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&mt(b)}function ht(b){const y=b.texture,X=r.get(b),he=r.get(y);b.addEventListener("dispose",O);const pe=b.textures,ue=b.isWebGLCubeRenderTarget===!0,Ge=pe.length>1;if(Ge||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=y.version,u.memory.textures++),ue){X.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[Te]=[];for(let We=0;We<y.mipmaps.length;We++)X.__webglFramebuffer[Te][We]=s.createFramebuffer()}else X.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let Te=0;Te<y.mipmaps.length;Te++)X.__webglFramebuffer[Te]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Te=0,We=pe.length;Te<We;Te++){const st=r.get(pe[Te]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),u.memory.textures++)}if(b.samples>0&&Mt(b)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Te=0;Te<pe.length;Te++){const We=pe[Te];X.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Te]);const st=c.convert(We.format,We.colorSpace),ye=c.convert(We.type),be=L(We.internalFormat,st,ye,We.colorSpace,b.isXRRenderTarget===!0),qe=B(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,X.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),se(s.TEXTURE_CUBE_MAP,y);for(let Te=0;Te<6;Te++)if(y.mipmaps&&y.mipmaps.length>0)for(let We=0;We<y.mipmaps.length;We++)ve(X.__webglFramebuffer[Te][We],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We);else ve(X.__webglFramebuffer[Te],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(y)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Te=0,We=pe.length;Te<We;Te++){const st=pe[Te],ye=r.get(st);let be=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,ye.__webglTexture),se(be,st),ve(X.__webglFramebuffer,b,st,s.COLOR_ATTACHMENT0+Te,be,0),S(st)&&g(be)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Te=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),se(Te,y),y.mipmaps&&y.mipmaps.length>0)for(let We=0;We<y.mipmaps.length;We++)ve(X.__webglFramebuffer[We],b,y,s.COLOR_ATTACHMENT0,Te,We);else ve(X.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,Te,0);S(y)&&g(Te),n.unbindTexture()}b.depthBuffer&&mt(b)}function Ne(b){const y=b.textures;for(let X=0,he=y.length;X<he;X++){const pe=y[X];if(S(pe)){const ue=N(b),Ge=r.get(pe).__webglTexture;n.bindTexture(ue,Ge),g(ue),n.unbindTexture()}}}const Ke=[],Ve=[];function xt(b){if(b.samples>0){if(Mt(b)===!1){const y=b.textures,X=b.width,he=b.height;let pe=s.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(b),Te=y.length>1;if(Te)for(let st=0;st<y.length;st++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const We=b.texture.mipmaps;We&&We.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let st=0;st<y.length;st++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[st]);const ye=r.get(y[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,he,0,0,X,he,pe,s.NEAREST),h===!0&&(Ke.length=0,Ve.length=0,Ke.push(s.COLOR_ATTACHMENT0+st),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ke.push(ue),Ve.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let st=0;st<y.length;st++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[st]);const ye=r.get(y[st]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function B(b){return Math.min(o.maxSamples,b.samples)}function Mt(b){const y=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(b){const y=u.render.frame;v.get(b)!==y&&(v.set(b,y),b.update())}function dt(b,y){const X=b.colorSpace,he=b.format,pe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||X!==js&&X!==Tr&&(At.getTransfer(X)===Ft?(he!==mi||pe!==jn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",X)),y}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=ie,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=Ht,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ME(s,e){function n(r,o=Tr){let c;const u=At.getTransfer(o);if(r===jn)return s.UNSIGNED_BYTE;if(r===sd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ad)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ig)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===tg)return s.BYTE;if(r===ng)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===rd)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===sg)return s.ALPHA;if(r===ag)return s.RGB;if(r===mi)return s.RGBA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===og)return s.RED;if(r===od)return s.RED_INTEGER;if(r===Xs)return s.RG;if(r===ld)return s.RG_INTEGER;if(r===cd)return s.RGBA_INTEGER;if(r===Nl||r===Ll||r===Dl||r===Il)if(u===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Nl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Nl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sf||r===yf||r===Mf||r===Ef)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Sf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ef)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===bf||r===Pf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Tf||r===wf)return u===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Af)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cf)return c.COMPRESSED_R11_EAC;if(r===Rf)return c.COMPRESSED_SIGNED_R11_EAC;if(r===bf)return c.COMPRESSED_RG11_EAC;if(r===Pf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Nf||r===Lf||r===Df||r===If||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Nf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Df)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===If)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ff)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Of)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xf||r===jf||r===qf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Xf)return u===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yf||r===$f||r===Kf||r===Zf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Yf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ja?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TE=`
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

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new yg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Di({vertexShader:EE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new Qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Ys{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",h=1,m=null,v=null,_=null,x=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",S=new wE,g={},N=n.getContextAttributes();let L=null,P=null;const D=[],F=[],O=new Nt;let q=null;const w=new ii;w.viewport=new $t;const R=new ii;R.viewport=new $t;const z=[w,R],K=new Uv;let $=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=D[te];return de===void 0&&(de=new Ku,D[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=D[te];return de===void 0&&(de=new Ku,D[te]=de),de.getGripSpace()},this.getHand=function(te){let de=D[te];return de===void 0&&(de=new Ku,D[te]=de),de.getHandSpace()};function ce(te){const de=F.indexOf(te.inputSource);if(de===-1)return;const ve=D[de];ve!==void 0&&(ve.update(te.inputSource,te.frame,m||u),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function ie(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",H);for(let te=0;te<D.length;te++){const de=F[te];de!==null&&(F[te]=null,D[te].disconnect(de))}$=null,oe=null,S.reset();for(const te in g)delete g[te];e.setRenderTarget(L),M=null,x=null,_=null,o=null,P=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await n.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Be=null,Le=null;N.depth&&(Le=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=N.stencil?ts:Zi,Be=N.stencil?ja:Ni);const mt={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(mt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Pi(x.textureWidth,x.textureHeight,{format:mi,type:jn,depthTexture:new Ya(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ve={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ve),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Pi(M.framebufferWidth,M.framebufferHeight,{format:mi,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),$e.setContext(o),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(te){for(let de=0;de<te.removed.length;de++){const ve=te.removed[de],Be=F.indexOf(ve);Be>=0&&(F[Be]=null,D[Be].disconnect(ve))}for(let de=0;de<te.added.length;de++){const ve=te.added[de];let Be=F.indexOf(ve);if(Be===-1){for(let mt=0;mt<D.length;mt++)if(mt>=F.length){F.push(ve),Be=mt;break}else if(F[mt]===null){F[mt]=ve,Be=mt;break}if(Be===-1)break}const Le=D[Be];Le&&Le.connect(ve)}}const j=new ee,fe=new ee;function re(te,de,ve){j.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const Be=j.distanceTo(fe),Le=de.projectionMatrix.elements,mt=ve.projectionMatrix.elements,Ht=Le[14]/(Le[10]-1),ht=Le[14]/(Le[10]+1),Ne=(Le[9]+1)/Le[5],Ke=(Le[9]-1)/Le[5],Ve=(Le[8]-1)/Le[0],xt=(mt[8]+1)/mt[0],B=Ht*Ve,Mt=Ht*xt,lt=Be/(-Ve+xt),dt=lt*-Ve;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(dt),te.translateZ(lt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Le[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Oe=Ht+lt,b=ht+lt,y=B-dt,X=Mt+(Be-dt),he=Ne*ht/b*Oe,pe=Ke*ht/b*Oe;te.projectionMatrix.makePerspective(y,X,he,pe,Oe,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let de=te.near,ve=te.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),K.near=R.near=w.near=de,K.far=R.far=w.far=ve,($!==K.near||oe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,oe=K.far),K.layers.mask=te.layers.mask|6,w.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const Be=te.parent,Le=K.cameras;U(K,Be);for(let mt=0;mt<Le.length;mt++)U(Le[mt],Be);Le.length===2?re(K,w,R):K.projectionMatrix.copy(w.projectionMatrix),se(te,K,Be)};function se(te,de,ve){ve===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Qf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(te){h=te,x!==null&&(x.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(te){return g[te]};let Ae=null;function He(te,de){if(v=de.getViewerPose(m||u),T=de,v!==null){const ve=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Be=!1;ve.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let ht=0;ht<ve.length;ht++){const Ne=ve[ht];let Ke=null;if(M!==null)Ke=M.getViewport(Ne);else{const xt=_.getViewSubImage(x,Ne);Ke=xt.viewport,ht===0&&(e.setRenderTargetTextures(P,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(P))}let Ve=z[ht];Ve===void 0&&(Ve=new ii,Ve.layers.enable(ht),Ve.viewport=new $t,z[ht]=Ve),Ve.matrix.fromArray(Ne.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ne.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ht===0&&(K.matrix.copy(Ve.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(Ve)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const ht=_.getDepthInformation(ve[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,o.renderState)}if(Le&&Le.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<ve.length;ht++){const Ne=ve[ht].camera;if(Ne){let Ke=g[Ne];Ke||(Ke=new yg,g[Ne]=Ke);const Ve=_.getCameraImage(Ne);Ke.sourceTexture=Ve}}}}for(let ve=0;ve<D.length;ve++){const Be=F[ve],Le=D[ve];Be!==null&&Le!==void 0&&Le.update(Be,de,m||u)}Ae&&Ae(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const $e=new Eg;$e.setAnimationLoop(He),this.setAnimationLoop=function(te){Ae=te},this.dispose=function(){}}}const Kr=new Li,CE=new qt;function RE(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,gg(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function o(S,g,N,L,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),v(S,g)):g.isMeshStandardMaterial?(c(S,g),x(S,g),g.isMeshPhysicalMaterial&&M(S,g,P)):g.isMeshMatcapMaterial?(c(S,g),T(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),A(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(u(S,g),g.isLineDashedMaterial&&f(S,g)):g.isPointsMaterial?h(S,g,N,L):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const N=e.get(g),L=N.envMap,P=N.envMapRotation;L&&(S.envMap.value=L,Kr.copy(P),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),S.envMapRotation.value.setFromMatrix4(CE.makeRotationFromEuler(Kr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function u(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function f(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function h(S,g,N,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*N,S.scale.value=L*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,N){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const N=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function bE(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const P=L.program;r.uniformBlockBinding(N,P)}function m(N,L){let P=o[N.id];P===void 0&&(T(N),P=v(N),o[N.id]=P,N.addEventListener("dispose",S));const D=L.program;r.updateUBOMapping(N,D);const F=e.render.frame;c[N.id]!==F&&(x(N),c[N.id]=F)}function v(N){const L=_();N.__bindingPointIndex=L;const P=s.createBuffer(),D=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,D,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function _(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=o[N.id],P=N.uniforms,D=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,O=P.length;F<O;F++){const q=Array.isArray(P[F])?P[F]:[P[F]];for(let w=0,R=q.length;w<R;w++){const z=q[w];if(M(z,F,w,D)===!0){const K=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let ce=0;ce<$.length;ce++){const ie=$[ce],H=A(ie);typeof ie=="number"||typeof ie=="boolean"?(z.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,K+oe,z.__data)):ie.isMatrix3?(z.__data[0]=ie.elements[0],z.__data[1]=ie.elements[1],z.__data[2]=ie.elements[2],z.__data[3]=0,z.__data[4]=ie.elements[3],z.__data[5]=ie.elements[4],z.__data[6]=ie.elements[5],z.__data[7]=0,z.__data[8]=ie.elements[6],z.__data[9]=ie.elements[7],z.__data[10]=ie.elements[8],z.__data[11]=0):(ie.toArray(z.__data,oe),oe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,L,P,D){const F=N.value,O=L+"_"+P;if(D[O]===void 0)return typeof F=="number"||typeof F=="boolean"?D[O]=F:D[O]=F.clone(),!0;{const q=D[O];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return D[O]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function T(N){const L=N.uniforms;let P=0;const D=16;for(let O=0,q=L.length;O<q;O++){const w=Array.isArray(L[O])?L[O]:[L[O]];for(let R=0,z=w.length;R<z;R++){const K=w[R],$=Array.isArray(K.value)?K.value:[K.value];for(let oe=0,ce=$.length;oe<ce;oe++){const ie=$[oe],H=A(ie),j=P%D,fe=j%H.boundary,re=j+fe;P+=fe,re!==0&&D-re<H.storage&&(P+=D-re),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=H.storage}}}const F=P%D;return F>0&&(P+=D-F),N.__size=P,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function g(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:h,update:m,dispose:g}}const PE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function NE(){return Ei===null&&(Ei=new yv(PE,16,16,Xs,Ki),Ei.name="DFG_LUT",Ei.minFilter=En,Ei.magFilter=En,Ei.wrapS=qi,Ei.wrapT=qi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class LE{constructor(e={}){const{canvas:n=Y_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=jn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const A=M,S=new Set([cd,ld,od]),g=new Set([jn,Ni,Xa,ja,sd,ad]),N=new Uint32Array(4),L=new Int32Array(4);let P=null,D=null;const F=[],O=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=ni;let z=0,K=0,$=null,oe=-1,ce=null;const ie=new $t,H=new $t;let j=null;const fe=new Ct(0);let re=0,U=n.width,se=n.height,Ae=1,He=null,$e=null;const te=new $t(0,0,U,se),de=new $t(0,0,U,se);let ve=!1;const Be=new pd;let Le=!1,mt=!1;const Ht=new qt,ht=new ee,Ne=new $t,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function xt(){return $===null?Ae:1}let B=r;function Mt(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${id}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",Et,!1),B===null){const Y="webgl2";if(B=Mt(Y,C),B===null)throw Mt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Pt("WebGLRenderer: "+C.message),C}let lt,dt,Oe,b,y,X,he,pe,ue,Ge,Te,We,st,ye,be,qe,Ze,Ce,ft,G,De,Me,Ie,xe;function me(){lt=new Ny(B),lt.init(),Me=new ME(B,lt),dt=new My(B,lt,e,Me),Oe=new SE(B,lt),dt.reversedDepthBuffer&&x&&Oe.buffers.depth.setReversed(!0),b=new Iy(B),y=new sE,X=new yE(B,lt,Oe,y,dt,Me,b),he=new Ty(w),pe=new Py(w),ue=new kv(B),Ie=new Sy(B,ue),Ge=new Ly(B,ue,b,Ie),Te=new Fy(B,Ge,ue,b),ft=new Uy(B,dt,X),qe=new Ey(y),We=new rE(w,he,pe,lt,dt,Ie,qe),st=new RE(w,y),ye=new oE,be=new hE(lt),Ce=new xy(w,he,pe,Oe,Te,T,h),Ze=new vE(w,Te,dt),xe=new bE(B,b,dt,Oe),G=new yy(B,lt,b),De=new Dy(B,lt,b),b.programs=We.programs,w.capabilities=dt,w.extensions=lt,w.properties=y,w.renderLists=ye,w.shadowMap=Ze,w.state=Oe,w.info=b}me(),A!==jn&&(q=new ky(A,n.width,n.height,o,c));const Re=new AE(w,B);this.xr=Re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(C){C!==void 0&&(Ae=C,this.setSize(U,se,!1))},this.getSize=function(C){return C.set(U,se)},this.setSize=function(C,Y,le=!0){if(Re.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,se=Y,n.width=Math.floor(C*Ae),n.height=Math.floor(Y*Ae),le===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(U*Ae,se*Ae).floor()},this.setDrawingBufferSize=function(C,Y,le){U=C,se=Y,Ae=le,n.width=Math.floor(C*le),n.height=Math.floor(Y*le),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(A===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ie)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,Y,le,ne){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Y,le,ne),Oe.viewport(ie.copy(te).multiplyScalar(Ae).round())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,Y,le,ne){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,Y,le,ne),Oe.scissor(H.copy(de).multiplyScalar(Ae).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){Oe.setScissorTest(ve=C)},this.setOpaqueSort=function(C){He=C},this.setTransparentSort=function(C){$e=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,le=!0){let ne=0;if(C){let Q=!1;if($!==null){const Pe=$.texture.format;Q=S.has(Pe)}if(Q){const Pe=$.texture.type,Fe=g.has(Pe),we=Ce.getClearColor(),je=Ce.getClearAlpha(),ze=we.r,rt=we.g,et=we.b;Fe?(N[0]=ze,N[1]=rt,N[2]=et,N[3]=je,B.clearBufferuiv(B.COLOR,0,N)):(L[0]=ze,L[1]=rt,L[2]=et,L[3]=je,B.clearBufferiv(B.COLOR,0,L))}else ne|=B.COLOR_BUFFER_BIT}Y&&(ne|=B.DEPTH_BUFFER_BIT),le&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Ce.dispose(),ye.dispose(),be.dispose(),y.dispose(),he.dispose(),pe.dispose(),Te.dispose(),Ie.dispose(),xe.dispose(),We.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",br),Re.removeEventListener("sessionend",Pr),ri.stop()};function at(C){C.preventDefault(),Qp("WebGLRenderer: Context Lost."),R=!0}function Ut(){Qp("WebGLRenderer: Context Restored."),R=!1;const C=b.autoReset,Y=Ze.enabled,le=Ze.autoUpdate,ne=Ze.needsUpdate,Q=Ze.type;me(),b.autoReset=C,Ze.enabled=Y,Ze.autoUpdate=le,Ze.needsUpdate=ne,Ze.type=Q}function Et(C){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Bn(C){const Y=C.target;Y.removeEventListener("dispose",Bn),wn(Y)}function wn(C){Zs(C),y.remove(C)}function Zs(C){const Y=y.get(C).programs;Y!==void 0&&(Y.forEach(function(le){We.releaseProgram(le)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,le,ne,Q,Pe){Y===null&&(Y=Ke);const Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,we=no(C,Y,le,ne,Q);Oe.setMaterial(ne,Fe);let je=le.index,ze=1;if(ne.wireframe===!0){if(je=Ge.getWireframeAttribute(le),je===void 0)return;ze=2}const rt=le.drawRange,et=le.attributes.position;let gt=rt.start*ze,Tt=(rt.start+rt.count)*ze;Pe!==null&&(gt=Math.max(gt,Pe.start*ze),Tt=Math.min(Tt,(Pe.start+Pe.count)*ze)),je!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,je.count)):et!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,et.count));const kt=Tt-gt;if(kt<0||kt===1/0)return;Ie.setup(Q,ne,we,le,je);let Ot,Rt=G;if(je!==null&&(Ot=ue.get(je),Rt=De,Rt.setIndex(Ot)),Q.isMesh)ne.wireframe===!0?(Oe.setLineWidth(ne.wireframeLinewidth*xt()),Rt.setMode(B.LINES)):Rt.setMode(B.TRIANGLES);else if(Q.isLine){let tt=ne.linewidth;tt===void 0&&(tt=1),Oe.setLineWidth(tt*xt()),Q.isLineSegments?Rt.setMode(B.LINES):Q.isLineLoop?Rt.setMode(B.LINE_LOOP):Rt.setMode(B.LINE_STRIP)}else Q.isPoints?Rt.setMode(B.POINTS):Q.isSprite&&Rt.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const tt=Q._multiDrawStarts,Lt=Q._multiDrawCounts,St=Q._multiDrawCount,gn=je?ue.get(je).bytesPerElement:1,_i=y.get(ne).currentProgram.getUniforms();for(let en=0;en<St;en++)_i.setValue(B,"_gl_DrawID",en),Rt.render(tt[en]/gn,Lt[en])}else if(Q.isInstancedMesh)Rt.renderInstances(gt,kt,Q.count);else if(le.isInstancedBufferGeometry){const tt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Lt=Math.min(le.instanceCount,tt);Rt.renderInstances(gt,kt,Lt)}else Rt.render(gt,kt)};function Qi(C,Y,le){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,Nr(C,Y,le),C.side=Cr,C.needsUpdate=!0,Nr(C,Y,le),C.side=Ai):Nr(C,Y,le)}this.compile=function(C,Y,le=null){le===null&&(le=C),D=be.get(le),D.init(Y),O.push(D),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),C!==le&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const ne=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const we=Pe[Fe];Qi(we,le,Q),ne.add(we)}else Qi(Pe,le,Q),ne.add(Pe)}),D=O.pop(),ne},this.compileAsync=function(C,Y,le=null){const ne=this.compile(C,Y,le);return new Promise(Q=>{function Pe(){if(ne.forEach(function(Fe){y.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){Q(C);return}setTimeout(Pe,10)}lt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Qs=null;function Rr(C){Qs&&Qs(C)}function br(){ri.stop()}function Pr(){ri.start()}const ri=new Eg;ri.setAnimationLoop(Rr),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(C){Qs=C,Re.setAnimationLoop(C),C===null?ri.stop():ri.start()},Re.addEventListener("sessionstart",br),Re.addEventListener("sessionend",Pr),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const le=Re.enabled===!0&&Re.isPresenting===!0,ne=q!==null&&($===null||le)&&q.begin(w,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Y,$),D=be.get(C,O.length),D.init(Y),O.push(D),Ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Be.setFromProjectionMatrix(Ht,Ri,Y.reversedDepth),mt=this.localClippingEnabled,Le=qe.init(this.clippingPlanes,mt),P=ye.get(C,F.length),P.init(),F.push(P),Re.enabled===!0&&Re.isPresenting===!0){const Fe=w.xr.getDepthSensingMesh();Fe!==null&&Js(Fe,Y,-1/0,w.sortObjects)}Js(C,Y,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(He,$e),Ve=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ve&&Ce.addToRenderList(P,C),this.info.render.frame++,Le===!0&&qe.beginShadows();const Q=D.state.shadowsArray;if(Ze.render(Q,C,Y),Le===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&q.hasRenderPass())===!1){const Fe=P.opaque,we=P.transmissive;if(D.setupLights(),Y.isArrayCamera){const je=Y.cameras;if(we.length>0)for(let ze=0,rt=je.length;ze<rt;ze++){const et=je[ze];eo(Fe,we,C,et)}Ve&&Ce.render(C);for(let ze=0,rt=je.length;ze<rt;ze++){const et=je[ze];Ja(P,C,et,et.viewport)}}else we.length>0&&eo(Fe,we,C,Y),Ve&&Ce.render(C),Ja(P,C,Y)}$!==null&&K===0&&(X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($)),ne&&q.end(w),C.isScene===!0&&C.onAfterRender(w,C,Y),Ie.resetDefaultState(),oe=-1,ce=null,O.pop(),O.length>0?(D=O[O.length-1],Le===!0&&qe.setGlobalState(w.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function Js(C,Y,le,ne){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Be.intersectsSprite(C)){ne&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ht);const Fe=Te.update(C),we=C.material;we.visible&&P.push(C,Fe,we,le,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Be.intersectsObject(C))){const Fe=Te.update(C),we=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ne.copy(Fe.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Ht)),Array.isArray(we)){const je=Fe.groups;for(let ze=0,rt=je.length;ze<rt;ze++){const et=je[ze],gt=we[et.materialIndex];gt&&gt.visible&&P.push(C,Fe,gt,le,Ne.z,et)}}else we.visible&&P.push(C,Fe,we,le,Ne.z,null)}}const Pe=C.children;for(let Fe=0,we=Pe.length;Fe<we;Fe++)Js(Pe[Fe],Y,le,ne)}function Ja(C,Y,le,ne){const{opaque:Q,transmissive:Pe,transparent:Fe}=C;D.setupLightsView(le),Le===!0&&qe.setGlobalState(w.clippingPlanes,le),ne&&Oe.viewport(ie.copy(ne)),Q.length>0&&Yn(Q,Y,le),Pe.length>0&&Yn(Pe,Y,le),Fe.length>0&&Yn(Fe,Y,le),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function eo(C,Y,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const gt=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Pi(1,1,{generateMipmaps:!0,type:gt?Ki:jn,minFilter:es,samples:dt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Pe=D.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||ie;Pe.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);const we=w.getRenderTarget(),je=w.getActiveCubeFace(),ze=w.getActiveMipmapLevel();w.setRenderTarget(Pe),w.getClearColor(fe),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear(),Ve&&Ce.render(le);const rt=w.toneMapping;w.toneMapping=bi;const et=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),Le===!0&&qe.setGlobalState(w.clippingPlanes,ne),Yn(C,le,ne),X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Tt=0,kt=Y.length;Tt<kt;Tt++){const Ot=Y[Tt],{object:Rt,geometry:tt,material:Lt,group:St}=Ot;if(Lt.side===Ai&&Rt.layers.test(ne.layers)){const gn=Lt.side;Lt.side=kn,Lt.needsUpdate=!0,ea(Rt,le,ne,tt,Lt,St),Lt.side=gn,Lt.needsUpdate=!0,gt=!0}}gt===!0&&(X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe))}w.setRenderTarget(we,je,ze),w.setClearColor(fe,re),et!==void 0&&(ne.viewport=et),w.toneMapping=rt}function Yn(C,Y,le){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Pe=C.length;Q<Pe;Q++){const Fe=C[Q],{object:we,geometry:je,group:ze}=Fe;let rt=Fe.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),we.layers.test(le.layers)&&ea(we,Y,le,je,rt,ze)}}function ea(C,Y,le,ne,Q,Pe){C.onBeforeRender(w,Y,le,ne,Q,Pe),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,Y,le,ne,C,Pe),Q.transparent===!0&&Q.side===Ai&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,ne,Q,C,Pe),Q.side=Cr,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,ne,Q,C,Pe),Q.side=Ai):w.renderBufferDirect(le,Y,ne,Q,C,Pe),C.onAfterRender(w,Y,le,ne,Q,Pe)}function Nr(C,Y,le){Y.isScene!==!0&&(Y=Ke);const ne=y.get(C),Q=D.state.lights,Pe=D.state.shadowsArray,Fe=Q.state.version,we=We.getParameters(C,Q.state,Pe,Y,le),je=We.getProgramCacheKey(we);let ze=ne.programs;ne.environment=C.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(C.isMeshStandardMaterial?pe:he).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",Bn),ze=new Map,ne.programs=ze);let rt=ze.get(je);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Fe)return ta(C,we),rt}else we.uniforms=We.getUniforms(C),C.onBeforeCompile(we,w),rt=We.acquireProgram(we,je),ze.set(je,rt),ne.uniforms=we.uniforms;const et=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=qe.uniform),ta(C,we),ne.needsLights=ro(C),ne.lightsStateVersion=Fe,ne.needsLights&&(et.ambientLightColor.value=Q.state.ambient,et.lightProbe.value=Q.state.probe,et.directionalLights.value=Q.state.directional,et.directionalLightShadows.value=Q.state.directionalShadow,et.spotLights.value=Q.state.spot,et.spotLightShadows.value=Q.state.spotShadow,et.rectAreaLights.value=Q.state.rectArea,et.ltc_1.value=Q.state.rectAreaLTC1,et.ltc_2.value=Q.state.rectAreaLTC2,et.pointLights.value=Q.state.point,et.pointLightShadows.value=Q.state.pointShadow,et.hemisphereLights.value=Q.state.hemi,et.directionalShadowMap.value=Q.state.directionalShadowMap,et.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,et.spotShadowMap.value=Q.state.spotShadowMap,et.spotLightMatrix.value=Q.state.spotLightMatrix,et.spotLightMap.value=Q.state.spotLightMap,et.pointShadowMap.value=Q.state.pointShadowMap,et.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function to(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Ul.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ta(C,Y){const le=y.get(C);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function no(C,Y,le,ne,Q){Y.isScene!==!0&&(Y=Ke),X.resetTextureUnits();const Pe=Y.fog,Fe=ne.isMeshStandardMaterial?Y.environment:null,we=$===null?w.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:js,je=(ne.isMeshStandardMaterial?pe:he).get(ne.envMap||Fe),ze=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,rt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,Tt=!!le.morphAttributes.color;let kt=bi;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(kt=w.toneMapping);const Ot=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Rt=Ot!==void 0?Ot.length:0,tt=y.get(ne),Lt=D.state.lights;if(Le===!0&&(mt===!0||C!==ce)){const an=C===ce&&ne.id===oe;qe.setState(ne,C,an)}let St=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Lt.state.version||tt.outputColorSpace!==we||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isBatchedMesh&&tt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&tt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&tt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&tt.instancingMorph===!1&&Q.morphTexture!==null||tt.envMap!==je||ne.fog===!0&&tt.fog!==Pe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==qe.numPlanes||tt.numIntersection!==qe.numIntersection)||tt.vertexAlphas!==ze||tt.vertexTangents!==rt||tt.morphTargets!==et||tt.morphNormals!==gt||tt.morphColors!==Tt||tt.toneMapping!==kt||tt.morphTargetsCount!==Rt)&&(St=!0):(St=!0,tt.__version=ne.version);let gn=tt.currentProgram;St===!0&&(gn=Nr(ne,Y,Q));let _i=!1,en=!1,Lr=!1;const Dt=gn.getUniforms(),ct=tt.uniforms;if(Oe.useProgram(gn.program)&&(_i=!0,en=!0,Lr=!0),ne.id!==oe&&(oe=ne.id,en=!0),_i||ce!==C){Oe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(B,"projectionMatrix",C.projectionMatrix),Dt.setValue(B,"viewMatrix",C.matrixWorldInverse);const on=Dt.map.cameraPosition;on!==void 0&&on.setValue(B,ht.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),ce!==C&&(ce=C,en=!0,Lr=!0)}if(tt.needsLights&&(Lt.state.directionalShadowMap.length>0&&Dt.setValue(B,"directionalShadowMap",Lt.state.directionalShadowMap,X),Lt.state.spotShadowMap.length>0&&Dt.setValue(B,"spotShadowMap",Lt.state.spotShadowMap,X),Lt.state.pointShadowMap.length>0&&Dt.setValue(B,"pointShadowMap",Lt.state.pointShadowMap,X)),Q.isSkinnedMesh){Dt.setOptional(B,Q,"bindMatrix"),Dt.setOptional(B,Q,"bindMatrixInverse");const an=Q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Dt.setValue(B,"boneTexture",an.boneTexture,X))}Q.isBatchedMesh&&(Dt.setOptional(B,Q,"batchingTexture"),Dt.setValue(B,"batchingTexture",Q._matricesTexture,X),Dt.setOptional(B,Q,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",Q._indirectTexture,X),Dt.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",Q._colorsTexture,X));const An=le.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ft.update(Q,le,gn),(en||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,Dt.setValue(B,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ct.envMap.value=je,ct.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(ct.envMapIntensity.value=Y.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=NE()),en&&(Dt.setValue(B,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&io(ct,Lr),Pe&&ne.fog===!0&&st.refreshFogUniforms(ct,Pe),st.refreshMaterialUniforms(ct,ne,Ae,se,D.state.transmissionRenderTarget[C.id]),Ul.upload(B,to(tt),ct,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ul.upload(B,to(tt),ct,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(B,"center",Q.center),Dt.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Dt.setValue(B,"normalMatrix",Q.normalMatrix),Dt.setValue(B,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const an=ne.uniformsGroups;for(let on=0,rs=an.length;on<rs;on++){const vi=an[on];xe.update(vi,gn),xe.bind(vi,gn)}}return gn}function io(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ro(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Y,le){const ne=y.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),y.get(C.texture).__webglTexture=Y,y.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const le=y.get(C);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Xl=B.createFramebuffer();this.setRenderTarget=function(C,Y=0,le=0){$=C,z=Y,K=le;let ne=null,Q=!1,Pe=!1;if(C){const we=y.get(C);if(we.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),ie.copy(C.viewport),H.copy(C.scissor),j=C.scissorTest,Oe.viewport(ie),Oe.scissor(H),Oe.setScissorTest(j),oe=-1;return}else if(we.__webglFramebuffer===void 0)X.setupRenderTarget(C);else if(we.__hasExternalTextures)X.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(we.__boundDepthTexture!==rt){if(rt!==null&&y.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Pe=!0);const ze=y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[Y])?ne=ze[Y][le]:ne=ze[Y],Q=!0):C.samples>0&&X.useMultisampledRTT(C)===!1?ne=y.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?ne=ze[le]:ne=ze,ie.copy(C.viewport),H.copy(C.scissor),j=C.scissorTest}else ie.copy(te).multiplyScalar(Ae).floor(),H.copy(de).multiplyScalar(Ae).floor(),j=ve;if(le!==0&&(ne=Xl),Oe.bindFramebuffer(B.FRAMEBUFFER,ne)&&Oe.drawBuffers(C,ne),Oe.viewport(ie),Oe.scissor(H),Oe.setScissorTest(j),Q){const we=y.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we.__webglTexture,le)}else if(Pe){const we=Y;for(let je=0;je<C.textures.length;je++){const ze=y.get(C.textures[je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+je,ze.__webglTexture,le,we)}}else if(C!==null&&le!==0){const we=y.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,le)}oe=-1},this.readRenderTargetPixels=function(C,Y,le,ne,Q,Pe,Fe,we=0){if(!(C&&C.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(je=je[Fe]),je){Oe.bindFramebuffer(B.FRAMEBUFFER,je);try{const ze=C.textures[we],rt=ze.format,et=ze.type;if(!dt.textureFormatReadable(rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(et)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ne&&le>=0&&le<=C.height-Q&&(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(Y,le,ne,Q,Me.convert(rt),Me.convert(et),Pe))}finally{const ze=$!==null?y.get($).__webglFramebuffer:null;Oe.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,Y,le,ne,Q,Pe,Fe,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(je=je[Fe]),je)if(Y>=0&&Y<=C.width-ne&&le>=0&&le<=C.height-Q){Oe.bindFramebuffer(B.FRAMEBUFFER,je);const ze=C.textures[we],rt=ze.format,et=ze.type;if(!dt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.bufferData(B.PIXEL_PACK_BUFFER,Pe.byteLength,B.STREAM_READ),C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(Y,le,ne,Q,Me.convert(rt),Me.convert(et),0);const Tt=$!==null?y.get($).__webglFramebuffer:null;Oe.bindFramebuffer(B.FRAMEBUFFER,Tt);const kt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $_(B,kt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pe),B.deleteBuffer(gt),B.deleteSync(kt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,le=0){const ne=Math.pow(2,-le),Q=Math.floor(C.image.width*ne),Pe=Math.floor(C.image.height*ne),Fe=Y!==null?Y.x:0,we=Y!==null?Y.y:0;X.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,le,0,0,Fe,we,Q,Pe),Oe.unbindTexture()};const jl=B.createFramebuffer(),Wt=B.createFramebuffer();this.copyTextureToTexture=function(C,Y,le=null,ne=null,Q=0,Pe=null){Pe===null&&(Q!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Q,Q=0):Pe=0);let Fe,we,je,ze,rt,et,gt,Tt,kt;const Ot=C.isCompressedTexture?C.mipmaps[Pe]:C.image;if(le!==null)Fe=le.max.x-le.min.x,we=le.max.y-le.min.y,je=le.isBox3?le.max.z-le.min.z:1,ze=le.min.x,rt=le.min.y,et=le.isBox3?le.min.z:0;else{const An=Math.pow(2,-Q);Fe=Math.floor(Ot.width*An),we=Math.floor(Ot.height*An),C.isDataArrayTexture?je=Ot.depth:C.isData3DTexture?je=Math.floor(Ot.depth*An):je=1,ze=0,rt=0,et=0}ne!==null?(gt=ne.x,Tt=ne.y,kt=ne.z):(gt=0,Tt=0,kt=0);const Rt=Me.convert(Y.format),tt=Me.convert(Y.type);let Lt;Y.isData3DTexture?(X.setTexture3D(Y,0),Lt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(X.setTexture2DArray(Y,0),Lt=B.TEXTURE_2D_ARRAY):(X.setTexture2D(Y,0),Lt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const St=B.getParameter(B.UNPACK_ROW_LENGTH),gn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=B.getParameter(B.UNPACK_SKIP_PIXELS),en=B.getParameter(B.UNPACK_SKIP_ROWS),Lr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const Dt=C.isDataArrayTexture||C.isData3DTexture,ct=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const An=y.get(C),an=y.get(Y),on=y.get(An.__renderTarget),rs=y.get(an.__renderTarget);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,on.__webglFramebuffer),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let vi=0;vi<je;vi++)Dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(C).__webglTexture,Q,et+vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(Y).__webglTexture,Pe,kt+vi)),B.blitFramebuffer(ze,rt,Fe,we,gt,Tt,Fe,we,B.DEPTH_BUFFER_BIT,B.NEAREST);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||y.has(C)){const An=y.get(C),an=y.get(Y);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,jl),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wt);for(let on=0;on<je;on++)Dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,An.__webglTexture,Q,et+on):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,An.__webglTexture,Q),ct?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,Pe,kt+on):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,Pe),Q!==0?B.blitFramebuffer(ze,rt,Fe,we,gt,Tt,Fe,we,B.COLOR_BUFFER_BIT,B.NEAREST):ct?B.copyTexSubImage3D(Lt,Pe,gt,Tt,kt+on,ze,rt,Fe,we):B.copyTexSubImage2D(Lt,Pe,gt,Tt,ze,rt,Fe,we);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ct?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Lt,Pe,gt,Tt,kt,Fe,we,je,Rt,tt,Ot.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Lt,Pe,gt,Tt,kt,Fe,we,je,Rt,Ot.data):B.texSubImage3D(Lt,Pe,gt,Tt,kt,Fe,we,je,Rt,tt,Ot):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,gt,Tt,Fe,we,Rt,tt,Ot.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,gt,Tt,Ot.width,Ot.height,Rt,Ot.data):B.texSubImage2D(B.TEXTURE_2D,Pe,gt,Tt,Fe,we,Rt,tt,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,St),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),B.pixelStorei(B.UNPACK_SKIP_ROWS,en),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Lr),Pe===0&&Y.generateMipmaps&&B.generateMipmap(Lt),Oe.unbindTexture()},this.initRenderTarget=function(C){y.get(C).__webglFramebuffer===void 0&&X.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?X.setTextureCube(C,0):C.isData3DTexture?X.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?X.setTexture2DArray(C,0):X.setTexture2D(C,0),Oe.unbindTexture()},this.resetState=function(){z=0,K=0,$=null,Oe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function DE(){const s=It.useRef(null);return It.useEffect(()=>{const e=s.current;if(!e)return;const n=e.clientWidth,r=e.clientHeight,o=new Sv;o.fog=new hd(11763285,.0055);const c=new ii(50,n/r,.1,1e3);c.position.set(0,6,35),c.lookAt(0,11,-70);const u=new LE({antialias:!0,alpha:!0});u.setSize(n,r),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=Xm,e.appendChild(u.domElement);const f=new Iv(4338491,2.5);o.add(f);const h=new Dv(16768947,4.5);h.position.set(-65,12,-110),h.castShadow=!0,h.shadow.mapSize.width=1024,h.shadow.mapSize.height=1024,o.add(h);const m=280,v=new qn,_=new Float32Array(m*3);for(let Ne=0;Ne<m;Ne++)_[Ne*3]=(Math.random()-.5)*160,_[Ne*3+1]=20+Math.random()*45,_[Ne*3+2]=-90-Math.random()*80;v.setAttribute("position",new gi(_,3));const x=new Sg({color:16773856,size:.35,transparent:!0,opacity:.65,blending:Fl}),M=new wv(v,x);o.add(M);const T=(()=>{const Ne=document.createElement("canvas");Ne.width=64,Ne.height=256;const Ke=Ne.getContext("2d"),Ve=Ke.createLinearGradient(0,256,0,0);return Ve.addColorStop(0,"rgba(253, 215, 150, 0.24)"),Ve.addColorStop(.5,"rgba(253, 215, 150, 0.08)"),Ve.addColorStop(1,"rgba(253, 215, 150, 0)"),Ke.fillStyle=Ve,Ke.fillRect(0,0,64,256),new Av(Ne)})(),A=6,S=[],g=new Qa(16,120);for(let Ne=0;Ne<A;Ne++){const Ke=new zl({map:T,transparent:!0,opacity:.15,blending:Fl,depthWrite:!1,side:Ai}),Ve=new Zt(g,Ke);Ve.position.set(-65,8,-108),Ve.rotation.z=-.55+Ne*.22,Ve.position.z+=Ne*.1,o.add(Ve),S.push({mesh:Ve,speed:.45+Math.random()*.5,baseOpacity:.08+Math.random()*.12})}const N=new wr;N.position.y=-18;const L=60,P=[],D=new Cl({color:2038304,roughness:.38,metalness:.78,flatShading:!0}),F=new zl({color:16758876,toneMapped:!1});for(let Ne=0;Ne<L;Ne++){const Ke=(Math.random()-.5)*140,Ve=-55-Math.random()*115,xt=Math.abs(Ke),B=Math.max(0,1-xt/70),Mt=8+Math.random()*20+B*48,lt=3.5+Math.random()*4.5,dt=3.5+Math.random()*4.5,Oe=90,b=new is(lt,Mt+Oe,dt),y=new Zt(b,D);if(y.position.set(Ke,(Mt-Oe)/2,Ve),y.castShadow=!0,y.receiveShadow=!0,N.add(y),xt<30&&Mt>32&&Math.random()>.3){const pe=Mt*.8,ue=new is(.3,pe,.1),Ge=new Zt(ue,F);Ge.position.set(0,Mt*.08,dt/2+.08),y.add(Ge)}P.push(y)}o.add(N);const O=new wr,q=new Cl({color:395277,roughness:.95,metalness:.05,flatShading:!0}),w=new Zt(new Ti(120,24,24),q);w.position.set(-45,-112,-85),w.scale.set(1.3,.6,1),w.receiveShadow=!0,O.add(w);const R=new Zt(new Ti(130,24,24),q);R.position.set(50,-118,-95),R.scale.set(1.4,.6,1),R.receiveShadow=!0,O.add(R);const z=new Zt(new Ti(140,32,32),q);z.position.set(-95,-125,-60),z.scale.set(1.2,.65,1),z.receiveShadow=!0,O.add(z);const K=new Zt(new Ti(140,32,32),q);K.position.set(95,-132,-65),K.scale.set(1.3,.65,1),K.receiveShadow=!0,O.add(K);const $=new Zt(new Ti(135,32,32),q);$.position.set(-50,-122,-38),$.scale.set(1,.68,1),$.receiveShadow=!0,O.add($);const oe=new Zt(new Ti(145,32,32),q);oe.position.set(55,-131,-48),oe.scale.set(1.1,.68,1),oe.receiveShadow=!0,O.add(oe);const ce=new Zt(new Ti(110,48,48),q);ce.position.set(0,-99,6),ce.scale.set(1.4,.55,1),ce.receiveShadow=!0,O.add(ce),o.add(O);const ie=new wr,H=new gd(.12,1.8,3),j=new Cl({color:329482,roughness:1,flatShading:!0}),fe=(Ne,Ke,Ve,xt,B,Mt,lt,dt,Oe)=>{for(let b=0;b<lt;b++){const y=dt+b/lt*(Oe-dt)+(Math.random()-.5)*.02,X=Ne+Math.sin(y)*xt*B,he=Ke-.4+Math.cos(y)*xt*Mt,pe=Ve+.2+(Math.random()-.5)*1.5,ue=new Zt(H,j);ue.position.set(X,he,pe),ue.rotation.z=-y+(Math.random()-.5)*.45,ue.rotation.x=(Math.random()-.5)*.3;const Ge=.45+Math.random()*.75,Te=.55+Math.random()*.45;ue.scale.set(Te,Ge,Te),ie.add(ue)}};fe(0,-99,6,110,1.4,.55,220,-.72,.72),fe(-50,-122,-38,135,1,.68,80,-.4,.5),fe(55,-131,-48,145,1.1,.68,80,-.5,.4),o.add(ie);const re=new Cl({color:14269354,roughness:.98,metalness:0,flatShading:!0});function U(Ne,Ke,Ve,xt){const B=new wr;B.position.set(Ne,Ke,Ve);const Mt=8+Math.floor(Math.random()*5),lt=[];for(let dt=0;dt<Mt;dt++){const Oe=4+Math.random()*5.5,b=new Ti(Oe,8,8),y=new Zt(b,re),X=(Math.random()-.5)*13,he=(Math.random()-.5)*5,pe=(Math.random()-.5)*11;y.position.set(X,he,pe),y.scale.set(1,.72+Math.random()*.2,1),B.add(y),lt.push(y)}return B.scale.set(xt,xt,xt),o.add(B),{group:B,spheres:lt,speed:.015+Math.random()*.015}}const se=U(-58,6,-72,1.6),Ae=U(-75,16,-88,1.25),He=[U(20,18,-100,.85),U(65,22,-120,1.1),U(-10,24,-95,.75)];let $e=0,te=0,de=0,ve=6;const Be=Ne=>{$e=Ne.clientX/window.innerWidth-.5,te=Ne.clientY/window.innerHeight-.5};window.addEventListener("mousemove",Be,{passive:!0});let Le=new Fv,mt;const Ht=()=>{mt=requestAnimationFrame(Ht);const Ne=Le.getElapsedTime();x.opacity=.5+Math.sin(Ne*1.6)*.25,S.forEach((Ke,Ve)=>{Ke.mesh.material.opacity=Ke.baseOpacity+Math.sin(Ne*Ke.speed+Ve)*.04}),se.spheres.forEach((Ke,Ve)=>{Ke.scale.y=.75+Math.sin(Ne*.5+Ve)*.04}),Ae.spheres.forEach((Ke,Ve)=>{Ke.scale.y=.75+Math.sin(Ne*.4+Ve)*.04}),He.forEach(Ke=>{Ke.group.position.x+=Ke.speed,Ke.group.position.x>95&&(Ke.group.position.x=-95,Ke.group.position.y=10+Math.random()*15),Ke.spheres.forEach((Ve,xt)=>{Ve.scale.y=.75+Math.sin(Ne*.75+xt)*.04})}),de=$e*14,ve=6-te*7,c.position.x+=(de-c.position.x)*.04,c.position.y+=(ve-c.position.y)*.04,c.lookAt(0,10,-70),u.render(o,c)};Ht();const ht=()=>{if(!e)return;const Ne=e.clientWidth,Ke=e.clientHeight;c.aspect=Ne/Ke,c.updateProjectionMatrix(),u.setSize(Ne,Ke)};return window.addEventListener("resize",ht),()=>{window.removeEventListener("mousemove",Be),window.removeEventListener("resize",ht),cancelAnimationFrame(mt),e.contains(u.domElement)&&e.removeChild(u.domElement),v.dispose(),x.dispose(),D.dispose(),F.dispose(),q.dispose(),g.dispose(),T.dispose(),H.dispose(),j.dispose(),re.dispose(),P.forEach(Ne=>{Ne.geometry.dispose()}),w.geometry.dispose(),R.geometry.dispose(),z.geometry.dispose(),K.geometry.dispose(),$.geometry.dispose(),oe.geometry.dispose(),ce.geometry.dispose(),S.forEach(Ne=>{Ne.mesh.material.dispose()}),se.spheres.forEach(Ne=>{Ne.geometry.dispose()}),Ae.spheres.forEach(Ne=>{Ne.geometry.dispose()}),He.forEach(Ne=>{Ne.spheres.forEach(Ke=>{Ke.geometry.dispose()})}),u.dispose()}},[]),k.jsx("div",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",background:"linear-gradient(to bottom, #06090f 0%, #101115 28%, #2f201b 52%, #b57a4a 78%, #ebcb86 100%)",overflow:"hidden",zIndex:1}})}const Wa=[{id:"fmcg",category:"consumer",name:"Consumer Goods & FMCG",tagline:"Everyday essentials, crafted for a premium lifestyle.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"]},{id:"manufacturing",category:"tech",name:"Manufacturing",tagline:"Precision engineering and smart factories of tomorrow.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=600&auto=format&fit=crop"]},{id:"warehousing",category:"tech",name:"Warehousing & Logistics",tagline:"Seamless fulfillment centers driving global supply chains.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1553413719-875871274712?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"]},{id:"consumer-tech",category:"tech",name:"Consumer Tech & Apps",tagline:"Beautifully designed interfaces connecting people.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551645121-d1034da75057?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1580927751497-69f9c7e98a3c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"]},{id:"saas",category:"tech",name:"SaaS",tagline:"Enterprise workflows streamlined into single-pane control.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"]},{id:"ai-tools",category:"tech",name:"AI Tools & Agents",tagline:"The cognitive layer automating tasks and amplifying intellect.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"]},{id:"health",category:"consumer",name:"Health & Wellness",tagline:"Nurturing minds and bodies with mindful digital touchpoints.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"education",category:"creative",name:"Education",tagline:"Empowering curious minds through intuitive learning platforms.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"]},{id:"agriculture",category:"tech",name:"Agriculture",tagline:"Sustainable food tech and vertical crop optimization.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1560493527-3efd3243e023?q=80&w=600&auto=format&fit=crop"]},{id:"media",category:"creative",name:"Media, News & Entertainment",tagline:"Culture-defining storytelling that shapes the zeitgeist.",accent:"#ffeeba",images:["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"]},{id:"social-media",category:"creative",name:"Social Media",tagline:"Enabling next-generation content creators and networks.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"]},{id:"marketing",category:"creative",name:"Marketing",tagline:"Performance strategies backed by behavioral economics.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"]},{id:"tech-research",category:"tech",name:"Technology & Research",tagline:"Pioneering studies and technological breakthroughs.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"]},{id:"finance",category:"tech",name:"Finance & Compliance",tagline:"Intelligent asset management and compliance systems.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"]},{id:"real-estate",category:"consumer",name:"Real Estate",tagline:"Architectural structures designed with human scale in mind.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=600&auto=format&fit=crop"]},{id:"travel",category:"consumer",name:"Travel & Hospitality",tagline:"Curating bespoke travel diaries and sensory hotels.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"ips",category:"creative",name:"IPs & Creative Assets",tagline:"Protecting, fostering, and monetizing unique design IPs.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop"]},{id:"events",category:"consumer",name:"Events & Experiences",tagline:"Gathering communities in beautifully staged spaces.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"]}];function Gm(){const s=window.innerWidth;return s<=400?{radius:300,cardW:100,cardH:155,perspective:900}:s<=768?{radius:340,cardW:118,cardH:172,perspective:1e3}:{radius:380,cardW:180,cardH:250,perspective:1200}}function IE({items:s=[]}){const e=It.useRef(null),[n,r]=It.useState(0),[o,c]=It.useState(!1),[u,f]=It.useState(0),[h,m]=It.useState(0),[v,_]=It.useState(0),[x,M]=It.useState(Gm),T=It.useRef(0),A=It.useRef(0),S=It.useRef(null),g=s.map(H=>({url:H.images[0],name:H.name,accent:H.accent})),L=360/(g.length||1),{radius:P,cardW:D,cardH:F,perspective:O}=x;It.useEffect(()=>{const H=()=>M(Gm());return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[]),It.useEffect(()=>{if(o){S.current&&cancelAnimationFrame(S.current);return}const H=.95,j=()=>{Math.abs(v)>.05?(r(fe=>fe+v),_(fe=>fe*H),S.current=requestAnimationFrame(j)):_(0)};return S.current=requestAnimationFrame(j),()=>{S.current&&cancelAnimationFrame(S.current)}},[o,v]);const q=H=>{c(!0),f(H),m(n),_(0),T.current=H,A.current=Date.now()},w=H=>{if(!o)return;const j=H-u,fe=.35,re=h+j*fe;r(re);const U=Date.now(),se=U-A.current;if(se>0){const He=(H-T.current)/se*12*fe;_($e=>$e*.5+He*.5)}T.current=H,A.current=U},R=()=>{c(!1)},z=H=>{q(H.clientX)},K=H=>{w(H.clientX)},$=()=>{R()},oe=H=>{H.touches.length>0&&q(H.touches[0].clientX)},ce=H=>{H.touches.length>0&&w(H.touches[0].clientX)},ie=()=>{R()};return It.useEffect(()=>{const H=e.current;if(!H)return;const j=fe=>{o&&fe.preventDefault()};return H.addEventListener("touchmove",j,{passive:!1}),()=>{H.removeEventListener("touchmove",j)}},[o]),k.jsxs("section",{id:"industries",className:"dome-gallery-section","aria-label":"Sectors in Motion",children:[k.jsxs("div",{className:"dome-gallery-header",children:[k.jsx("h3",{className:"section-title-accent",children:"Sectors in Motion"}),k.jsx("p",{className:"section-subtitle",children:"Swipe or drag to spin the 3D gallery and explore our active pursuits."})]}),k.jsx("div",{className:"dome-gallery-viewport",ref:e,style:{"--dome-perspective":`${O}px`,"--dome-card-w":`${D}px`,"--dome-card-h":`${F}px`},onMouseDown:z,onMouseMove:K,onMouseUp:$,onMouseLeave:$,onTouchStart:oe,onTouchMove:ce,onTouchEnd:ie,children:k.jsx("div",{className:"dome-gallery-cylinder",style:{width:D,height:F,transform:`translateZ(-${P}px) rotateY(${-n}deg)`,cursor:o?"grabbing":"grab"},children:g.map((H,j)=>{const fe=j*L;return k.jsxs("div",{className:"dome-gallery-card",style:{width:D,height:F,transform:`rotateY(${fe}deg) translateZ(${P}px)`,borderTop:`3px solid ${H.accent||"#fff"}`},children:[k.jsx("div",{className:"dome-card-image",style:{backgroundImage:`url("${H.url}")`}}),k.jsxs("div",{className:"dome-card-meta",children:[k.jsx("span",{className:"dome-card-number",children:(j+1).toString().padStart(2,"0")}),k.jsx("h4",{className:"dome-card-title",children:H.name})]})]},j)})})})]})}function UE(){const[s,e]=It.useState(null),[n,r]=It.useState(!1),o=[{id:1,type:"quote",content:"What starts here changes the world.",caption:"Our guiding light. Deeply committed to the pursuits that matter.",bg:"linear-gradient(135deg, #ffddcc 0%, #ffccd5 100%)",textColor:"#333",likes:"1,240",comments:"42"},{id:2,type:"image",url:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",caption:"Collaborating at the intersection of intellect and execution. #WHNLGroup",likes:"892",comments:"18"},{id:3,type:"quote",content:"One group, many pursuits and an obsession for excellence.",caption:"Diverse operations, singular standard. Excellence is not negotiable.",bg:"linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",textColor:"#2a4d33",likes:"1,053",comments:"29"},{id:4,type:"reel",thumbnail:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",caption:"🎥 WHNL Group Promo Reel 2026. A glimpse into our vision, industries, and pursuits. Press Play to experience.",likes:"3,412",comments:"115"},{id:5,type:"quote",content:"Rooted in clarity, action, impact, participation, consistency, tenacity with a dash of humour.",caption:"The foundation of everything we build. And yes, we don't take ourselves too seriously all the time.",bg:"linear-gradient(135deg, #cce5ff 0%, #b8daff 100%)",textColor:"#1d3a5f",likes:"940",comments:"31"},{id:6,type:"image",url:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",caption:"Quiet mornings in our workspace. Designing structures with human scale in mind.",likes:"612",comments:"11"},{id:7,type:"quote",content:"We probably say “why not” for everything that we do.",caption:"Because constraints are just rules someone else made up. We choose exploration.",bg:"linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)",textColor:"#533f03",likes:"1,114",comments:"54"},{id:8,type:"image",url:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",caption:"Dynamic systems. Scalable technology. Real impact.",likes:"743",comments:"14"},{id:9,type:"quote",content:"Unwavering participation, no limitations.",caption:"We show up. Fully. Every single day.",bg:"linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)",textColor:"#721c24",likes:"889",comments:"22"},{id:10,type:"quote",content:"We believe in ourselves almost to the point of delusion.",caption:"Call it crazy, call it bold. Every world-changing pursuit started with absolute belief.",bg:"linear-gradient(135deg, #e8dbfc 0%, #d6bbfb 100%)",textColor:"#3d126b",likes:"1,529",comments:"98"},{id:11,type:"image",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",caption:"Visualizing research & data pipelines. Precision at depth.",likes:"790",comments:"16"},{id:12,type:"quote",content:"An intersection of vision, intellect and impact.",caption:"Where theories turn into applications, and investments turn into impact.",bg:"linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)",textColor:"#0c5460",likes:"1,032",comments:"41"}],c=f=>{e(f),f.type==="reel"&&r(!0)},u=()=>{e(null),r(!1)};return k.jsxs("div",{className:"instagram-section",children:[k.jsx("div",{className:"instagram-header",children:k.jsxs("div",{className:"insta-profile-info",children:[k.jsx("div",{className:"insta-avatar",children:k.jsx("span",{className:"avatar-text",children:"W"})}),k.jsxs("div",{className:"insta-meta",children:[k.jsxs("div",{className:"insta-username-row",children:[k.jsx("h2",{className:"insta-username",children:"whnl.group"}),k.jsx("span",{className:"verified-badge",children:"✓"}),k.jsx("button",{className:"insta-follow-btn",children:"Follow"})]}),k.jsxs("div",{className:"insta-stats",children:[k.jsxs("span",{children:[k.jsx("strong",{children:"12"})," posts"]}),k.jsxs("span",{children:[k.jsx("strong",{children:"48.6K"})," followers"]}),k.jsxs("span",{children:[k.jsx("strong",{children:"142"})," following"]})]}),k.jsxs("div",{className:"insta-bio",children:[k.jsx("p",{className:"bio-name",children:"WHNL Group"}),k.jsx("p",{className:"bio-desc",children:"One group, many pursuits. Rooted in clarity, action, and impact."}),k.jsx("a",{href:"#explore",className:"bio-link",children:"zaina.international/whnl"})]})]})]})}),k.jsx("div",{className:"instagram-grid",children:o.map(f=>k.jsxs("div",{className:`instagram-grid-item ${f.type}`,onClick:()=>c(f),children:[f.type==="quote"&&k.jsxs("div",{className:"insta-quote-card",style:{background:f.bg,color:f.textColor},children:[k.jsxs("p",{className:"quote-text",children:["“",f.content,"”"]}),k.jsx("span",{className:"quote-branding",children:"WHNL"})]}),f.type==="image"&&k.jsx("div",{className:"insta-image-card",style:{backgroundImage:`url("${f.url}")`}}),f.type==="reel"&&k.jsxs("div",{className:"insta-image-card reel-card",style:{backgroundImage:`url("${f.thumbnail}")`},children:[k.jsxs("div",{className:"reel-badge",children:[k.jsx("svg",{viewBox:"0 0 24 24",className:"reel-svg-icon",children:k.jsx("path",{fill:"currentColor",d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-2,14.5v-9l6,4.5Z"})}),k.jsx("span",{children:"REEL"})]}),k.jsx("div",{className:"reel-overlay-play",children:k.jsx("div",{className:"play-triangle"})})]}),k.jsx("div",{className:"insta-hover-overlay",children:k.jsxs("div",{className:"overlay-metrics",children:[k.jsxs("span",{children:["❤️ ",f.likes]}),k.jsxs("span",{children:["💬 ",f.comments]})]})})]},f.id))}),s&&k.jsx("div",{className:"insta-modal-backdrop",onClick:u,children:k.jsxs("div",{className:"insta-modal-content",onClick:f=>f.stopPropagation(),children:[k.jsx("button",{className:"insta-modal-close",onClick:u,children:"×"}),k.jsxs("div",{className:"insta-modal-body",children:[k.jsxs("div",{className:"insta-modal-media",children:[s.type==="quote"&&k.jsxs("div",{className:"insta-quote-card modal-view",style:{background:s.bg,color:s.textColor},children:[k.jsxs("p",{className:"quote-text-large",children:["“",s.content,"”"]}),k.jsx("span",{className:"quote-branding-large",children:"WHNL GROUP"})]}),s.type==="image"&&k.jsx("img",{src:s.url,alt:"Instagram post",className:"modal-img"}),s.type==="reel"&&k.jsx("div",{className:"reel-player-container",children:n?k.jsxs("div",{className:"custom-reel-player",children:[k.jsxs("div",{className:"hyperspeed-reel-simulation",children:[k.jsx("div",{className:"reel-glow-backdrop"}),k.jsxs("div",{className:"reel-text-flow",children:[k.jsx("span",{className:"reel-title-slide",children:"WHNL GROUP"}),k.jsx("span",{className:"reel-subtitle-slide",children:"WHAT STARTS HERE CHANGES THE WORLD"}),k.jsx("span",{className:"reel-tags-slide",children:"#clarity #action #impact"}),k.jsx("div",{className:"reel-visual-pulse"})]})]}),k.jsxs("div",{className:"reel-controls",children:[k.jsx("button",{className:"reel-btn",onClick:()=>r(!1),children:"Pause"}),k.jsx("span",{className:"reel-duration",children:"0:15"})]})]}):k.jsx("div",{className:"reel-poster",style:{backgroundImage:`url("${s.thumbnail}")`},children:k.jsx("button",{className:"play-reel-trigger-btn",onClick:()=>r(!0),children:"Play Promo Reel"})})})]}),k.jsxs("div",{className:"insta-modal-sidebar",children:[k.jsxs("div",{className:"sidebar-header",children:[k.jsx("div",{className:"insta-avatar small",children:"W"}),k.jsxs("div",{children:[k.jsx("span",{className:"sidebar-username",children:"whnl.group"}),k.jsx("span",{className:"verified-badge small",children:"✓"})]})]}),k.jsxs("div",{className:"sidebar-caption-area",children:[k.jsxs("div",{className:"caption-row",children:[k.jsx("div",{className:"insta-avatar small",children:"W"}),k.jsxs("p",{className:"caption-text",children:[k.jsx("strong",{children:"whnl.group"})," ",s.caption]})]}),k.jsx("div",{className:"comment-divider"}),k.jsxs("div",{className:"mock-comments",children:[k.jsxs("div",{className:"comment-row",children:[k.jsx("span",{className:"comment-user",children:"alex_design"}),k.jsx("span",{className:"comment-content",children:"Absolutely love this aesthetic! Sleek. ✨"})]}),k.jsxs("div",{className:"comment-row",children:[k.jsx("span",{className:"comment-user",children:"impact_lab"}),k.jsx("span",{className:"comment-content",children:"This quote hits hard. Bold approach. 🙌"})]}),k.jsxs("div",{className:"comment-row",children:[k.jsx("span",{className:"comment-user",children:"tech_pursuits"}),k.jsx("span",{className:"comment-content",children:"Is the Careers board open? Can't wait!"})]})]})]}),k.jsxs("div",{className:"sidebar-footer",children:[k.jsxs("div",{className:"interactions-row",children:[k.jsx("span",{className:"heart-icon",children:"❤️"}),k.jsx("span",{className:"share-icon",children:"📤"})]}),k.jsxs("div",{className:"likes-count",children:[s.likes," likes"]}),k.jsx("div",{className:"post-date",children:"June 6, 2026"})]})]})]})]})})]})}function af({text:s,className:e}){const n=It.useRef(null),r=s.split(" ");return It.useEffect(()=>{const o=n.current;if(!o)return;const c=o.querySelectorAll(".reveal-word"),u=()=>{const f=o.getBoundingClientRect(),h=window.innerHeight,m=h*.85,v=h*.25,_=m-v,x=Math.min(Math.max(0,(m-f.top)/_),1),M=c.length;c.forEach((T,A)=>{const S=A/M*.7,N=Math.min(Math.max(0,(x-S)/.3),1),L=.35+N*.65;T.style.opacity=L,T.style.color=N>.4?"#ffffff":"#a1a1a6"})};return window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),u(),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[s]),k.jsx("p",{ref:n,className:e,style:{display:"inline-block"},children:r.map((o,c)=>k.jsx("span",{className:"reveal-word",style:{display:"inline-block",marginRight:"0.26em",opacity:.35,color:"#a1a1a6",transition:"opacity 0.08s ease-out, color 0.08s ease-out",willChange:"opacity, color"},children:o},c))})}const FE=typeof CSS<"u"&&CSS.supports("(animation-timeline: scroll())")&&CSS.supports("animation-range: 0 100%");function OE(s){const e=s.flatMap(n=>n.images.slice(0,1));return{layer1:e.slice(0,6),layer2:e.slice(6,12),layer3:e.slice(12,14),scaler:e[4]||e[0]}}function Va(s,e=2){return 1-Math.pow(1-s,e)}function kE(){const s=It.useRef(null),e=It.useRef(null),n=It.useRef(null),r=It.useRef([]),o=It.useMemo(()=>OE(Wa),[]);It.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||FE)return;const f=s.current,h=n.current,m=r.current.filter(Boolean);if(!f||!h)return;const v=32,_=[T=>Va(T,1),T=>Va(T,3),T=>Va(T,4)],x=[0,-.1,-.2],M=()=>{const T=f.getBoundingClientRect(),A=Math.max(f.offsetHeight-window.innerHeight,1),S=Math.min(Math.max(-T.top/A,0),1),g=h.parentElement,N=(g==null?void 0:g.offsetWidth)||200,L=(g==null?void 0:g.offsetHeight)||250,P=window.innerWidth-v*2,D=window.innerHeight-v*2,F=Va(S,2),O=Va(S,1);h.style.width=`${P+(N-P)*F}px`,h.style.height=`${D+(L-D)*O}px`,m.forEach((q,w)=>{var oe;const R=x[w]??0,z=Math.min(Math.max((S-R)/(1+Math.abs(R)),0),1),K=z<=.55?0:(z-.55)/.45,$=z<=.3?0:((oe=_[w])==null?void 0:oe.call(_,(z-.3)/.7))??z;q.style.opacity=String(K),q.style.transform=`scale(${$})`})};return window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",M),M(),()=>{window.removeEventListener("scroll",M),window.removeEventListener("resize",M),h.style.width="",h.style.height="",m.forEach(T=>{T.style.opacity="",T.style.transform=""})}},[]);const c=(u,f)=>k.jsx("div",{className:"scroll-playbook__layer",ref:h=>{r.current[f]=h},children:u.map(h=>k.jsx("div",{className:"scroll-playbook__cell",children:k.jsx("img",{src:h,alt:"",loading:"lazy",decoding:"async"})},h))});return k.jsxs("div",{className:"scroll-playbook","data-enhanced":"true","data-center":"true","data-layers":"true","data-stagger":"range",children:[k.jsx("section",{ref:s,className:"scroll-playbook__runner",children:k.jsxs("div",{ref:e,className:"scroll-playbook__sticky",children:[k.jsxs("div",{className:"scroll-playbook__intro",children:[k.jsx("span",{className:"scroll-playbook__label",children:"The WHNL Universe"}),k.jsxs("h2",{className:"scroll-playbook__title",children:["let's",k.jsx("br",{}),"scroll."]})]}),k.jsxs("div",{className:"scroll-playbook__grid",children:[c(o.layer1,0),c(o.layer2,1),c(o.layer3,2),k.jsx("div",{className:"scroll-playbook__scaler",children:k.jsx("img",{ref:n,src:o.scaler,alt:"WHNL portfolio highlight",loading:"lazy",decoding:"async"})})]})]})}),k.jsxs("section",{className:"scroll-playbook__fin",children:[k.jsx("span",{className:"scroll-playbook__fin-label",children:"Portfolio"}),k.jsx("h2",{className:"scroll-playbook__fin-title",children:"fin."})]})]})}function BE(){const[s,e]=It.useState(null),[n,r]=It.useState("all"),o=It.useRef(null);It.useEffect(()=>{const u=o.current;if(!u)return;const f=h=>{u.style.left=`${h.clientX+180}px`,u.style.top=`${h.clientY+-80}px`};return window.addEventListener("mousemove",f),()=>{window.removeEventListener("mousemove",f)}},[]);const c=n==="all"?Wa:Wa.filter(u=>u.category===n);return k.jsxs("div",{className:"page",children:[k.jsxs("header",{className:"header",children:[k.jsx("div",{className:"brand-logo-container",children:k.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"brand-logo"})}),k.jsxs("nav",{className:"nav-links",children:[k.jsx("a",{href:"#industries",className:"nav-link",children:"Sectors"}),k.jsx("a",{href:"#social",className:"nav-link",children:"Journal"}),k.jsx("a",{href:"#communities",className:"nav-link",children:"Careers"})]})]}),k.jsxs("section",{className:"hero-section",children:[k.jsx("div",{className:"hero-hyperspeed-container",children:k.jsx(DE,{})}),k.jsx("div",{className:"hero-overlay"}),k.jsx("div",{className:"hero-bottom-fade"}),k.jsxs("div",{className:"hero-content",children:[k.jsxs("div",{className:"hero-title-group",children:[k.jsx("span",{className:"hero-tagline",children:"WHNL Group"}),k.jsxs("h1",{className:"hero-title",children:["What starts here",k.jsx("br",{}),"changes the world."]}),k.jsx(af,{text:"We are a holding company of businesses that make an impact.",className:"hero-subtitle"})]}),k.jsx("div",{className:"hero-cta-group",children:k.jsx("button",{className:"btn-primary",onClick:()=>{const u=document.getElementById("communities");u&&u.scrollIntoView({behavior:"smooth"})},children:"Explore Careers & Communities"})})]}),k.jsxs("a",{href:"#industries",className:"scroll-indicator",children:[k.jsx("span",{className:"scroll-text",children:"Explore"}),k.jsx("div",{className:"scroll-line"})]})]}),k.jsx(kE,{}),k.jsxs("main",{children:[k.jsxs("section",{className:"zaina-index-section","aria-labelledby":"portfolio-heading",children:[k.jsxs("div",{className:"zaina-section-header",children:[k.jsx("span",{className:"section-label",children:"Pursuits"}),k.jsx("h2",{id:"portfolio-heading",className:"section-title",children:"The WHNL Portfolio"}),k.jsx(af,{text:"An intersection of vision, intellect, and impact. A diverse ecosystem of businesses operating with an obsession for excellence.",className:"section-description"})]}),k.jsxs("div",{className:"filters-row",children:[k.jsx("span",{className:"filters-title",children:"Industries Index"}),k.jsxs("div",{className:"filter-tags",children:[k.jsxs("button",{className:`filter-tag ${n==="all"?"active":""}`,onClick:()=>r("all"),children:["All Sectors (",Wa.length,")"]}),k.jsx("button",{className:`filter-tag ${n==="consumer"?"active":""}`,onClick:()=>r("consumer"),children:"Consumer"}),k.jsx("button",{className:`filter-tag ${n==="tech"?"active":""}`,onClick:()=>r("tech"),children:"Tech & AI"}),k.jsx("button",{className:`filter-tag ${n==="creative"?"active":""}`,onClick:()=>r("creative"),children:"IP & Creative"})]})]}),k.jsx("div",{className:"zaina-table",children:c.map((u,f)=>k.jsxs("div",{className:"zaina-row",onMouseEnter:()=>e(u),onMouseLeave:()=>e(null),children:[k.jsx("span",{className:"row-num",children:(f+1).toString().padStart(2,"0")}),k.jsx("span",{className:"row-name",children:u.name}),k.jsx("span",{className:"row-tagline",children:u.tagline}),k.jsx("div",{className:"row-action",children:k.jsx("span",{className:"action-arrow",children:"→"})})]},u.id))}),k.jsx("div",{ref:o,className:`float-preview-container ${s?"visible":""}`,children:s&&k.jsx("div",{className:"image-stack",children:s.images.slice(0,3).map((u,f)=>k.jsx("div",{className:`stack-image img-${f}`,style:{backgroundImage:`url("${u}")`}},f))})})]}),k.jsx(IE,{items:Wa}),k.jsx("section",{id:"social",children:k.jsx(UE,{})}),k.jsx("section",{id:"communities",className:"communities-section",children:k.jsxs("div",{className:"communities-content",children:[k.jsx("span",{className:"section-label",children:"Join Our Pursuit"}),k.jsx("h2",{className:"section-title",children:"Careers & Communities"}),k.jsx(af,{text:"We believe in ourselves almost to the point of delusion. If you carry unwavering participation, no limitations, and a healthy dose of tenacity, let's design the future together.",className:"section-description"}),k.jsxs("div",{className:"communities-grid",children:[k.jsxs("div",{className:"community-card",children:[k.jsx("span",{className:"card-label",children:"Active Talents"}),k.jsx("h3",{className:"card-title",children:"Explore Careers"}),k.jsx("p",{className:"card-description",children:"Discover open opportunities across our businesses in technology, FMCG, SaaS, manufacturing, real estate, and finance."}),k.jsxs("a",{href:"#apply",className:"card-link",onClick:u=>{u.preventDefault(),alert("Talent recruitment portal coming soon. For inquiries, email careers@whnl.group")},children:["Apply Online ",k.jsx("span",{children:"→"})]})]}),k.jsxs("div",{className:"community-card",children:[k.jsx("span",{className:"card-label",children:"Eco-systems"}),k.jsx("h3",{className:"card-title",children:"Our Communities"}),k.jsx("p",{className:"card-description",children:"Learn about our collaborative networks, events, hackathons, creative IPs, and wellness experiences designed to cultivate impact."}),k.jsxs("a",{href:"#connect",className:"card-link",onClick:u=>{u.preventDefault(),alert("Community platform launch scheduled for Fall 2026.")},children:["Get Involved ",k.jsx("span",{children:"→"})]})]})]})]})})]}),k.jsxs("footer",{className:"whnl-footer",children:[k.jsxs("div",{className:"footer-top",children:[k.jsxs("div",{className:"footer-brand",children:[k.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"footer-logo"}),k.jsx("p",{className:"footer-pitch",children:"One group, many pursuits, and an obsession for excellence."})]}),k.jsxs("div",{className:"footer-cols",children:[k.jsxs("div",{className:"footer-col",children:[k.jsx("h4",{className:"footer-col-title",children:"Operations"}),k.jsxs("ul",{children:[k.jsx("li",{children:k.jsx("a",{href:"#industries",children:"Consumer & FMCG"})}),k.jsx("li",{children:k.jsx("a",{href:"#industries",children:"Technology & SaaS"})}),k.jsx("li",{children:k.jsx("a",{href:"#industries",children:"Manufacturing & Logistics"})}),k.jsx("li",{children:k.jsx("a",{href:"#industries",children:"IPs & Media"})})]})]}),k.jsxs("div",{className:"footer-col",children:[k.jsx("h4",{className:"footer-col-title",children:"Company"}),k.jsxs("ul",{children:[k.jsx("li",{children:k.jsx("a",{href:"#social",children:"Journal"})}),k.jsx("li",{children:k.jsx("a",{href:"#communities",children:"Careers"})}),k.jsx("li",{children:k.jsx("a",{href:"#communities",children:"Communities"})}),k.jsx("li",{children:k.jsx("a",{href:"#contact",onClick:u=>{u.preventDefault(),alert("Contact: hello@whnl.group")},children:"Contact Us"})})]})]})]})]}),k.jsxs("div",{className:"footer-bottom",children:[k.jsxs("span",{children:["© ",new Date().getFullYear()," WHNL Group. All rights reserved."]}),k.jsx("span",{children:"Sleek • Premium • sorted"})]})]})]})}g_.createRoot(document.getElementById("root")).render(k.jsx(c_.StrictMode,{children:k.jsx(BE,{})}));
