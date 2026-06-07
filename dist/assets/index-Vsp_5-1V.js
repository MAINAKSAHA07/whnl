(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Gm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yu={exports:{}},Da={},Mu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function s_(){if(Up)return mt;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(U,le,Re){this.props=U,this.context=le,this.refs=C,this.updater=Re||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,le){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,le,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(U,le,Re){this.props=U,this.context=le,this.refs=C,this.updater=Re||M}var N=L.prototype=new _;N.constructor=L,T(N,S.prototype),N.isPureReactComponent=!0;var P=Array.isArray,D=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function $(U,le,Re){var Ge,$e={},ie=null,he=null;if(le!=null)for(Ge in le.ref!==void 0&&(he=le.ref),le.key!==void 0&&(ie=""+le.key),le)D.call(le,Ge)&&!O.hasOwnProperty(Ge)&&($e[Ge]=le[Ge]);var Se=arguments.length-2;if(Se===1)$e.children=Re;else if(1<Se){for(var ke=Array(Se),De=0;De<Se;De++)ke[De]=arguments[De+2];$e.children=ke}if(U&&U.defaultProps)for(Ge in Se=U.defaultProps,Se)$e[Ge]===void 0&&($e[Ge]=Se[Ge]);return{$$typeof:s,type:U,key:ie,ref:he,props:$e,_owner:F.current}}function w(U,le){return{$$typeof:s,type:U.type,key:le,ref:U.ref,props:U.props,_owner:U._owner}}function b(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function V(U){var le={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Re){return le[Re]})}var G=/\/+/g;function q(U,le){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):le.toString(36)}function ne(U,le,Re,Ge,$e){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(ie){case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case s:case e:he=!0}}if(he)return he=U,$e=$e(he),U=Ge===""?"."+q(he,0):Ge,P($e)?(Re="",U!=null&&(Re=U.replace(G,"$&/")+"/"),ne($e,le,Re,"",function(De){return De})):$e!=null&&(b($e)&&($e=w($e,Re+(!$e.key||he&&he.key===$e.key?"":(""+$e.key).replace(G,"$&/")+"/")+U)),le.push($e)),1;if(he=0,Ge=Ge===""?".":Ge+":",P(U))for(var Se=0;Se<U.length;Se++){ie=U[Se];var ke=Ge+q(ie,Se);he+=ne(ie,le,Re,ke,$e)}else if(ke=x(U),typeof ke=="function")for(U=ke.call(U),Se=0;!(ie=U.next()).done;)ie=ie.value,ke=Ge+q(ie,Se++),he+=ne(ie,le,Re,ke,$e);else if(ie==="object")throw le=String(U),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return he}function fe(U,le,Re){if(U==null)return U;var Ge=[],$e=0;return ne(U,Ge,"","",function(ie){return le.call(Re,ie,$e++)}),Ge}function te(U){if(U._status===-1){var le=U._result;le=le(),le.then(function(Re){(U._status===0||U._status===-1)&&(U._status=1,U._result=Re)},function(Re){(U._status===0||U._status===-1)&&(U._status=2,U._result=Re)}),U._status===-1&&(U._status=0,U._result=le)}if(U._status===1)return U._result.default;throw U._result}var K={current:null},Y={transition:null},de={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Y,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:fe,forEach:function(U,le,Re){fe(U,function(){le.apply(this,arguments)},Re)},count:function(U){var le=0;return fe(U,function(){le++}),le},toArray:function(U){return fe(U,function(le){return le})||[]},only:function(U){if(!b(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=S,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=L,mt.StrictMode=r,mt.Suspense=p,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,mt.act=se,mt.cloneElement=function(U,le,Re){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ge=T({},U.props),$e=U.key,ie=U.ref,he=U._owner;if(le!=null){if(le.ref!==void 0&&(ie=le.ref,he=F.current),le.key!==void 0&&($e=""+le.key),U.type&&U.type.defaultProps)var Se=U.type.defaultProps;for(ke in le)D.call(le,ke)&&!O.hasOwnProperty(ke)&&(Ge[ke]=le[ke]===void 0&&Se!==void 0?Se[ke]:le[ke])}var ke=arguments.length-2;if(ke===1)Ge.children=Re;else if(1<ke){Se=Array(ke);for(var De=0;De<ke;De++)Se[De]=arguments[De+2];Ge.children=Se}return{$$typeof:s,type:U.type,key:$e,ref:ie,props:Ge,_owner:he}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},mt.createElement=$,mt.createFactory=function(U){var le=$.bind(null,U);return le.type=U,le},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:d,render:U}},mt.isValidElement=b,mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:te}},mt.memo=function(U,le){return{$$typeof:m,type:U,compare:le===void 0?null:le}},mt.startTransition=function(U){var le=Y.transition;Y.transition={};try{U()}finally{Y.transition=le}},mt.unstable_act=se,mt.useCallback=function(U,le){return K.current.useCallback(U,le)},mt.useContext=function(U){return K.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return K.current.useDeferredValue(U)},mt.useEffect=function(U,le){return K.current.useEffect(U,le)},mt.useId=function(){return K.current.useId()},mt.useImperativeHandle=function(U,le,Re){return K.current.useImperativeHandle(U,le,Re)},mt.useInsertionEffect=function(U,le){return K.current.useInsertionEffect(U,le)},mt.useLayoutEffect=function(U,le){return K.current.useLayoutEffect(U,le)},mt.useMemo=function(U,le){return K.current.useMemo(U,le)},mt.useReducer=function(U,le,Re){return K.current.useReducer(U,le,Re)},mt.useRef=function(U){return K.current.useRef(U)},mt.useState=function(U){return K.current.useState(U)},mt.useSyncExternalStore=function(U,le,Re){return K.current.useSyncExternalStore(U,le,Re)},mt.useTransition=function(){return K.current.useTransition()},mt.version="18.3.1",mt}var Fp;function td(){return Fp||(Fp=1,Mu.exports=s_()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function a_(){if(Op)return Da;Op=1;var s=td(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var v,g={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(g[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)g[v]===void 0&&(g[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:M,props:g,_owner:o.current}}return Da.Fragment=n,Da.jsx=u,Da.jsxs=u,Da}var kp;function o_(){return kp||(kp=1,yu.exports=a_()),yu.exports}var H=o_(),$t=td();const l_=Gm($t);var al={},Eu={exports:{}},Fn={},Tu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function c_(){return Bp||(Bp=1,(function(s){function e(Y,de){var se=Y.length;Y.push(de);e:for(;0<se;){var U=se-1>>>1,le=Y[U];if(0<o(le,de))Y[U]=de,Y[se]=le,se=U;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var de=Y[0],se=Y.pop();if(se!==de){Y[0]=se;e:for(var U=0,le=Y.length,Re=le>>>1;U<Re;){var Ge=2*(U+1)-1,$e=Y[Ge],ie=Ge+1,he=Y[ie];if(0>o($e,se))ie<le&&0>o(he,$e)?(Y[U]=he,Y[ie]=se,U=ie):(Y[U]=$e,Y[Ge]=se,U=Ge);else if(ie<le&&0>o(he,se))Y[U]=he,Y[ie]=se,U=ie;else break e}}return de}function o(Y,de){var se=Y.sortIndex-de.sortIndex;return se!==0?se:Y.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,g=null,x=3,M=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=Y)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function P(Y){if(C=!1,N(Y),!T)if(n(p)!==null)T=!0,te(D);else{var de=n(m);de!==null&&K(P,de.startTime-Y)}}function D(Y,de){T=!1,C&&(C=!1,_($),$=-1),M=!0;var se=x;try{for(N(de),g=n(p);g!==null&&(!(g.expirationTime>de)||Y&&!V());){var U=g.callback;if(typeof U=="function"){g.callback=null,x=g.priorityLevel;var le=U(g.expirationTime<=de);de=s.unstable_now(),typeof le=="function"?g.callback=le:g===n(p)&&r(p),N(de)}else r(p);g=n(p)}if(g!==null)var Re=!0;else{var Ge=n(m);Ge!==null&&K(P,Ge.startTime-de),Re=!1}return Re}finally{g=null,x=se,M=!1}}var F=!1,O=null,$=-1,w=5,b=-1;function V(){return!(s.unstable_now()-b<w)}function G(){if(O!==null){var Y=s.unstable_now();b=Y;var de=!0;try{de=O(!0,Y)}finally{de?q():(F=!1,O=null)}}else F=!1}var q;if(typeof L=="function")q=function(){L(G)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,fe=ne.port2;ne.port1.onmessage=G,q=function(){fe.postMessage(null)}}else q=function(){S(G,0)};function te(Y){O=Y,F||(F=!0,q())}function K(Y,de){$=S(function(){Y(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,te(D))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var se=x;x=de;try{return Y()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,de){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var se=x;x=Y;try{return de()}finally{x=se}},s.unstable_scheduleCallback=function(Y,de,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,Y){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=se+le,Y={id:v++,callback:de,priorityLevel:Y,startTime:se,expirationTime:le,sortIndex:-1},se>U?(Y.sortIndex=se,e(m,Y),n(p)===null&&Y===n(m)&&(C?(_($),$=-1):C=!0,K(P,se-U))):(Y.sortIndex=le,e(p,Y),T||M||(T=!0,te(D))),Y},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Y){var de=x;return function(){var se=x;x=de;try{return Y.apply(this,arguments)}finally{x=se}}}})(wu)),wu}var zp;function u_(){return zp||(zp=1,Tu.exports=c_()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function f_(){if(Vp)return Fn;Vp=1;var s=td(),e=u_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return p.call(g,t)?!0:p.call(v,t)?!1:m.test(t)?g[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,L);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,L);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,L);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,l)&&(a=null),l||f===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),V=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Y=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function le(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Re=!1;function Ge(t,i){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var l=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){l=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){l=ae}t()}}catch(ae){if(ae&&l&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,I=h.length-1;1<=E&&0<=I&&f[E]!==h[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==h[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==h[I]){var z=`
`+f[E].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=E&&0<=I);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?le(t):""}function $e(t){switch(t.tag){case 5:return le(t.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case w:return"Profiler";case $:return"StrictMode";case q:return"Suspense";case ne:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case b:return(t._context.displayName||"Context")+".Provider";case G:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}function he(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ft(t){t._valueTracker||(t._valueTracker=De(t))}function Vt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gt(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function St(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function Ut(t,i){it(t,i);var a=Se(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ot(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ot(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ot(t,i,a){(i!=="number"||ct(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var pt=Array.isArray;function _t(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function We(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(pt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Se(a)}}function y(t,i){var a=Se(i.value),l=Se(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function k(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oe,Be=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function xe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(t){Ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Pe[i]=Pe[t]})});function ge(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Pe.hasOwnProperty(t)&&Pe[t]?(""+i).trim():i+"px"}function Te(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=ge(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Fe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oe(t,i){if(i){if(Fe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var et=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Ee=null,Ie=null;function ye(t){if(t=va(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=yo(i),Le(t.stateNode,t.type,i))}}function me(t){Ee?Ie?Ie.push(t):Ie=[t]:Ee=t}function be(){if(Ee){var t=Ee,i=Ie;if(Ie=Ee=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function st(t,i){return t(i)}function Nt(){}var yt=!1;function Bn(t,i,a){if(yt)return t(i,a);yt=!0;try{return st(t,i,a)}finally{yt=!1,(Ee!==null||Ie!==null)&&(Nt(),be())}}function wn(t,i){var a=t.stateNode;if(a===null)return null;var l=yo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zs=!1;if(d)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Zs=!1}function Qs(t,i,a,l,f,h,E,I,z){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(ve){this.onError(ve)}}var br=!1,Pr=null,Lr=!1,ri=null,Js={onError:function(t){br=!0,Pr=t}};function Ja(t,i,a,l,f,h,E,I,z){br=!1,Pr=null,Qs.apply(Js,arguments)}function eo(t,i,a,l,f,h,E,I,z){if(Ja.apply(this,arguments),br){if(br){var ae=Pr;br=!1,Pr=null}else throw Error(n(198));Lr||(Lr=!0,ri=ae)}}function Yn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Nr(t){if(Yn(t)!==t)throw Error(n(188))}function to(t){var i=t.alternate;if(!i){if(i=Yn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return Nr(f),t;if(h===l)return Nr(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var E=!1,I=f.child;I;){if(I===a){E=!0,a=f,l=h;break}if(I===l){E=!0,l=f,a=h;break}I=I.sibling}if(!E){for(I=h.child;I;){if(I===a){E=!0,a=h,l=f;break}if(I===l){E=!0,l=h,a=f;break}I=I.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ta(t){return t=to(t),t!==null?no(t):null}function no(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=no(t);if(i!==null)return i;t=t.sibling}return null}var io=e.unstable_scheduleCallback,ro=e.unstable_cancelCallback,Wl=e.unstable_shouldYield,Xl=e.unstable_requestPaint,Wt=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,ue=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,Q=e.unstable_LowPriority,Ne=e.unstable_IdlePriority,ze=null,Ce=null;function je(t){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:dt,rt=Math.log,Qe=Math.LN2;function dt(t){return t>>>=0,t===0?32:31-(rt(t)/Qe|0)|0}var Mt=64,Ft=4194304;function It(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var I=E&~f;I!==0?l=It(I):(h&=E,h!==0&&(l=It(h)))}else E=a&~f,E!==0?l=It(E):h!==0&&(l=It(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-He(i),f=1<<a,l|=t[a],i&=~f;return l}function Je(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-He(h),I=1<<E,z=f[E];z===-1?((I&a)===0||(I&l)!==0)&&(f[E]=Je(I,i)):z<=i&&(t.expiredLanes|=I),h&=~I}}function vt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function vi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function en(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-He(i),t[i]=a}function Dr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-He(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function Lt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-He(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var ot=0;function An(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var an,on,rs,xi,_d,jl=!1,so=[],er=null,tr=null,nr=null,na=new Map,ia=new Map,ir=[],Cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(t,i){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":na.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(i.pointerId)}}function ra(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=va(i),i!==null&&on(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Rg(t,i,a,l,f){switch(i){case"focusin":return er=ra(er,t,i,a,l,f),!0;case"dragenter":return tr=ra(tr,t,i,a,l,f),!0;case"mouseover":return nr=ra(nr,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return na.set(h,ra(na.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,ia.set(h,ra(ia.get(h)||null,t,i,a,l,f)),!0}return!1}function xd(t){var i=Ir(t.target);if(i!==null){var a=Yn(i);if(a!==null){if(i=a.tag,i===13){if(i=ea(a),i!==null){t.blockedOn=i,_d(t.priority,function(){rs(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);et=l,a.target.dispatchEvent(l),et=null}else return i=va(a),i!==null&&on(i),t.blockedOn=a,!1;i.shift()}return!0}function Sd(t,i,a){ao(t)&&a.delete(i)}function bg(){jl=!1,er!==null&&ao(er)&&(er=null),tr!==null&&ao(tr)&&(tr=null),nr!==null&&ao(nr)&&(nr=null),na.forEach(Sd),ia.forEach(Sd)}function sa(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bg)))}function aa(t){function i(f){return sa(f,t)}if(0<so.length){sa(so[0],t);for(var a=1;a<so.length;a++){var l=so[a];l.blockedOn===t&&(l.blockedOn=null)}}for(er!==null&&sa(er,t),tr!==null&&sa(tr,t),nr!==null&&sa(nr,t),na.forEach(i),ia.forEach(i),a=0;a<ir.length;a++)l=ir[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)xd(a),a.blockedOn===null&&ir.shift()}var ss=P.ReactCurrentBatchConfig,oo=!0;function Pg(t,i,a,l){var f=ot,h=ss.transition;ss.transition=null;try{ot=1,ql(t,i,a,l)}finally{ot=f,ss.transition=h}}function Lg(t,i,a,l){var f=ot,h=ss.transition;ss.transition=null;try{ot=4,ql(t,i,a,l)}finally{ot=f,ss.transition=h}}function ql(t,i,a,l){if(oo){var f=Yl(t,i,a,l);if(f===null)fc(t,i,l,lo,a),vd(t,l);else if(Rg(f,t,i,a,l))l.stopPropagation();else if(vd(t,l),i&4&&-1<Cg.indexOf(t)){for(;f!==null;){var h=va(f);if(h!==null&&an(h),h=Yl(t,i,a,l),h===null&&fc(t,i,l,lo,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else fc(t,i,l,null,a)}}var lo=null;function Yl(t,i,a,l){if(lo=null,t=W(l),t=Ir(t),t!==null)if(i=Yn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ea(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case j:return 1;case ue:return 4;case re:case Q:return 16;case Ne:return 536870912;default:return 16}default:return 16}}var rr=null,$l=null,co=null;function Md(){if(co)return co;var t,i=$l,a=i.length,l,f="value"in rr?rr.value:rr.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[h-l];l++);return co=f.slice(t,1<l?1-l:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Ed(){return!1}function zn(t){function i(a,l,f,h,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fo:Ed,this.isPropagationStopped=Ed,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=zn(as),oa=se({},as,{view:0,detail:0}),Ng=zn(oa),Zl,Ql,la,ho=se({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Zl=t.screenX-la.screenX,Ql=t.screenY-la.screenY):Ql=Zl=0,la=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Td=zn(ho),Dg=se({},ho,{dataTransfer:0}),Ig=zn(Dg),Ug=se({},oa,{relatedTarget:0}),Jl=zn(Ug),Fg=se({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=zn(Fg),kg=se({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bg=zn(kg),zg=se({},as,{data:0}),wd=zn(zg),Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Gg[t])?!!i[t]:!1}function ec(){return Wg}var Xg=se({},oa,{key:function(t){if(t.key){var i=Vg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jg=zn(Xg),qg=se({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=zn(qg),Yg=se({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),$g=zn(Yg),Kg=se({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=zn(Kg),Qg=se({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=zn(Qg),e0=[9,13,27,32],tc=d&&"CompositionEvent"in window,ca=null;d&&"documentMode"in document&&(ca=document.documentMode);var t0=d&&"TextEvent"in window&&!ca,Cd=d&&(!tc||ca&&8<ca&&11>=ca),Rd=" ",bd=!1;function Pd(t,i){switch(t){case"keyup":return e0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function n0(t,i){switch(t){case"compositionend":return Ld(i);case"keypress":return i.which!==32?null:(bd=!0,Rd);case"textInput":return t=i.data,t===Rd&&bd?null:t;default:return null}}function i0(t,i){if(os)return t==="compositionend"||!tc&&Pd(t,i)?(t=Md(),co=$l=rr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cd&&i.locale!=="ko"?null:i.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!r0[t.type]:i==="textarea"}function Dd(t,i,a,l){me(l),i=vo(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ua=null,fa=null;function s0(t){Zd(t,0)}function po(t){var i=ds(t);if(Vt(i))return t}function a0(t,i){if(t==="change")return i}var Id=!1;if(d){var nc;if(d){var ic="oninput"in document;if(!ic){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),ic=typeof Ud.oninput=="function"}nc=ic}else nc=!1;Id=nc&&(!document.documentMode||9<document.documentMode)}function Fd(){ua&&(ua.detachEvent("onpropertychange",Od),fa=ua=null)}function Od(t){if(t.propertyName==="value"&&po(fa)){var i=[];Dd(i,fa,t,W(t)),Bn(s0,i)}}function o0(t,i,a){t==="focusin"?(Fd(),ua=i,fa=a,ua.attachEvent("onpropertychange",Od)):t==="focusout"&&Fd()}function l0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(fa)}function c0(t,i){if(t==="click")return po(i)}function u0(t,i){if(t==="input"||t==="change")return po(i)}function f0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:f0;function da(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!si(t[f],i[f]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,i){var a=kd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function zd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vd(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ct(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function d0(t){var i=Vd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&zd(a.ownerDocument.documentElement,a)){if(l!==null&&rc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Bd(a,h);var E=Bd(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var h0=d&&"documentMode"in document&&11>=document.documentMode,ls=null,sc=null,ha=null,ac=!1;function Hd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||ls==null||ls!==ct(l)||(l=ls,"selectionStart"in l&&rc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ha&&da(ha,l)||(ha=l,l=vo(sc,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ls)))}function mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},oc={},Gd={};d&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function go(t){if(oc[t])return oc[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gd)return oc[t]=i[a];return t}var Wd=go("animationend"),Xd=go("animationiteration"),jd=go("animationstart"),qd=go("transitionend"),Yd=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,i){Yd.set(t,i),c(i,[t])}for(var lc=0;lc<$d.length;lc++){var cc=$d[lc],p0=cc.toLowerCase(),m0=cc[0].toUpperCase()+cc.slice(1);sr(p0,"on"+m0)}sr(Wd,"onAnimationEnd"),sr(Xd,"onAnimationIteration"),sr(jd,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(qd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Kd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,eo(l,i,void 0,t),t.currentTarget=null}function Zd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],z=I.instance,ae=I.currentTarget;if(I=I.listener,z!==h&&f.isPropagationStopped())break e;Kd(f,I,ae),h=z}else for(E=0;E<l.length;E++){if(I=l[E],z=I.instance,ae=I.currentTarget,I=I.listener,z!==h&&f.isPropagationStopped())break e;Kd(f,I,ae),h=z}}}if(Lr)throw t=ri,Lr=!1,ri=null,t}function Bt(t,i){var a=i[_c];a===void 0&&(a=i[_c]=new Set);var l=t+"__bubble";a.has(l)||(Qd(i,t,2,!1),a.add(l))}function uc(t,i,a){var l=0;i&&(l|=4),Qd(a,t,l,i)}var _o="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[_o]){t[_o]=!0,r.forEach(function(a){a!=="selectionchange"&&(g0.has(a)||uc(a,!1,t),uc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[_o]||(i[_o]=!0,uc("selectionchange",!1,i))}}function Qd(t,i,a,l){switch(yd(i)){case 1:var f=Pg;break;case 4:f=Lg;break;default:f=ql}a=f.bind(null,i,a,t),f=void 0,!Zs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function fc(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Ir(I),E===null)return;if(z=E.tag,z===5||z===6){l=h=E;continue e}I=I.parentNode}}l=l.return}Bn(function(){var ae=h,ve=W(a),Me=[];e:{var _e=Yd.get(t);if(_e!==void 0){var Ve=Kl,qe=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":Ve=jg;break;case"focusin":qe="focus",Ve=Jl;break;case"focusout":qe="blur",Ve=Jl;break;case"beforeblur":case"afterblur":Ve=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=Ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=$g;break;case Wd:case Xd:case jd:Ve=Og;break;case qd:Ve=Zg;break;case"scroll":Ve=Ng;break;case"wheel":Ve=Jg;break;case"copy":case"cut":case"paste":Ve=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Ad}var Ye=(i&4)!==0,Zt=!Ye&&t==="scroll",Z=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var X=ae,J;X!==null;){J=X;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,Z!==null&&(we=wn(X,Z),we!=null&&Ye.push(ga(X,we,J)))),Zt)break;X=X.return}0<Ye.length&&(_e=new Ve(_e,qe,null,a,ve),Me.push({event:_e,listeners:Ye}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",_e&&a!==et&&(qe=a.relatedTarget||a.fromElement)&&(Ir(qe)||qe[Ui]))break e;if((Ve||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ve?(qe=a.relatedTarget||a.toElement,Ve=ae,qe=qe?Ir(qe):null,qe!==null&&(Zt=Yn(qe),qe!==Zt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=ae),Ve!==qe)){if(Ye=Td,we="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Ad,we="onPointerLeave",Z="onPointerEnter",X="pointer"),Zt=Ve==null?_e:ds(Ve),J=qe==null?_e:ds(qe),_e=new Ye(we,X+"leave",Ve,a,ve),_e.target=Zt,_e.relatedTarget=J,we=null,Ir(ve)===ae&&(Ye=new Ye(Z,X+"enter",qe,a,ve),Ye.target=J,Ye.relatedTarget=Zt,we=Ye),Zt=we,Ve&&qe)t:{for(Ye=Ve,Z=qe,X=0,J=Ye;J;J=us(J))X++;for(J=0,we=Z;we;we=us(we))J++;for(;0<X-J;)Ye=us(Ye),X--;for(;0<J-X;)Z=us(Z),J--;for(;X--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=us(Ye),Z=us(Z)}Ye=null}else Ye=null;Ve!==null&&Jd(Me,_e,Ve,Ye,!1),qe!==null&&Zt!==null&&Jd(Me,Zt,qe,Ye,!0)}}e:{if(_e=ae?ds(ae):window,Ve=_e.nodeName&&_e.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&_e.type==="file")var Ke=a0;else if(Nd(_e))if(Id)Ke=u0;else{Ke=l0;var tt=o0}else(Ve=_e.nodeName)&&Ve.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=c0);if(Ke&&(Ke=Ke(t,ae))){Dd(Me,Ke,a,ve);break e}tt&&tt(t,_e,ae),t==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&Ot(_e,"number",_e.value)}switch(tt=ae?ds(ae):window,t){case"focusin":(Nd(tt)||tt.contentEditable==="true")&&(ls=tt,sc=ae,ha=null);break;case"focusout":ha=sc=ls=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Hd(Me,a,ve);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":Hd(Me,a,ve)}var nt;if(tc)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else os?Pd(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Cd&&a.locale!=="ko"&&(os||at!=="onCompositionStart"?at==="onCompositionEnd"&&os&&(nt=Md()):(rr=ve,$l="value"in rr?rr.value:rr.textContent,os=!0)),tt=vo(ae,at),0<tt.length&&(at=new wd(at,t,null,a,ve),Me.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Ld(a),nt!==null&&(at.data=nt)))),(nt=t0?n0(t,a):i0(t,a))&&(ae=vo(ae,"onBeforeInput"),0<ae.length&&(ve=new wd("onBeforeInput","beforeinput",null,a,ve),Me.push({event:ve,listeners:ae}),ve.data=nt))}Zd(Me,i)})}function ga(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=wn(t,a),h!=null&&l.unshift(ga(t,h,f)),h=wn(t,i),h!=null&&l.push(ga(t,h,f))),t=t.return}return l}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,i,a,l,f){for(var h=i._reactName,E=[];a!==null&&a!==l;){var I=a,z=I.alternate,ae=I.stateNode;if(z!==null&&z===l)break;I.tag===5&&ae!==null&&(I=ae,f?(z=wn(a,h),z!=null&&E.unshift(ga(a,z,I))):f||(z=wn(a,h),z!=null&&E.push(ga(a,z,I)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var _0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(_0,`
`).replace(v0,"")}function xo(t,i,a){if(i=eh(i),eh(t)!==i&&a)throw Error(n(425))}function So(){}var dc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(y0)}:mc;function y0(t){setTimeout(function(){throw t})}function gc(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),aa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);aa(i)}function ar(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Si="__reactFiber$"+fs,_a="__reactProps$"+fs,Ui="__reactContainer$"+fs,_c="__reactEvents$"+fs,M0="__reactListeners$"+fs,E0="__reactHandles$"+fs;function Ir(t){var i=t[Si];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ui]||a[Si]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=nh(t);t!==null;){if(a=t[Si])return a;t=nh(t)}return i}t=a,a=t.parentNode}return null}function va(t){return t=t[Si]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function yo(t){return t[_a]||null}var vc=[],hs=-1;function or(t){return{current:t}}function zt(t){0>hs||(t.current=vc[hs],vc[hs]=null,hs--)}function kt(t,i){hs++,vc[hs]=t.current,t.current=i}var lr={},_n=or(lr),Ln=or(!1),Ur=lr;function ps(t,i){var a=t.type.contextTypes;if(!a)return lr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function Mo(){zt(Ln),zt(_n)}function ih(t,i,a){if(_n.current!==lr)throw Error(n(168));kt(_n,i),kt(Ln,a)}function rh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,he(t)||"Unknown",f));return se({},a,l)}function Eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ur=_n.current,kt(_n,t),kt(Ln,Ln.current),!0}function sh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=rh(t,i,Ur),l.__reactInternalMemoizedMergedChildContext=t,zt(Ln),zt(_n),kt(_n,t)):zt(Ln),kt(Ln,a)}var Fi=null,To=!1,xc=!1;function ah(t){Fi===null?Fi=[t]:Fi.push(t)}function T0(t){To=!0,ah(t)}function cr(){if(!xc&&Fi!==null){xc=!0;var t=0,i=ot;try{var a=Fi;for(ot=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Fi=null,To=!1}catch(f){throw Fi!==null&&(Fi=Fi.slice(t+1)),io(j,cr),f}finally{ot=i,xc=!1}}return null}var ms=[],gs=0,wo=null,Ao=0,$n=[],Kn=0,Fr=null,Oi=1,ki="";function Or(t,i){ms[gs++]=Ao,ms[gs++]=wo,wo=t,Ao=i}function oh(t,i,a){$n[Kn++]=Oi,$n[Kn++]=ki,$n[Kn++]=Fr,Fr=t;var l=Oi;t=ki;var f=32-He(l)-1;l&=~(1<<f),a+=1;var h=32-He(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Oi=1<<32-He(i)+f|a<<f|l,ki=h+t}else Oi=1<<h|a<<f|l,ki=t}function Sc(t){t.return!==null&&(Or(t,1),oh(t,1,0))}function yc(t){for(;t===wo;)wo=ms[--gs],ms[gs]=null,Ao=ms[--gs],ms[gs]=null;for(;t===Fr;)Fr=$n[--Kn],$n[Kn]=null,ki=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null}var Vn=null,Hn=null,Ht=!1,ai=null;function lh(t,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ch(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=ar(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Fr!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Vn=t,Hn=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(Ht){var i=Hn;if(i){var a=i;if(!ch(t,i)){if(Mc(t))throw Error(n(418));i=ar(a.nextSibling);var l=Vn;i&&ch(t,i)?lh(l,a):(t.flags=t.flags&-4097|2,Ht=!1,Vn=t)}}else{if(Mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,Vn=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Co(t){if(t!==Vn)return!1;if(!Ht)return uh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=Hn)){if(Mc(t))throw fh(),Error(n(418));for(;i;)lh(t,i),i=ar(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Hn=ar(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Vn?ar(t.stateNode.nextSibling):null;return!0}function fh(){for(var t=Hn;t;)t=ar(t.nextSibling)}function _s(){Hn=Vn=null,Ht=!1}function Tc(t){ai===null?ai=[t]:ai.push(t)}var w0=P.ReactCurrentBatchConfig;function xa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var I=f.refs;E===null?delete I[h]:I[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ro(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function dh(t){var i=t._init;return i(t._payload)}function hh(t){function i(Z,X){if(t){var J=Z.deletions;J===null?(Z.deletions=[X],Z.flags|=16):J.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function l(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function f(Z,X){return Z=_r(Z,X),Z.index=0,Z.sibling=null,Z}function h(Z,X,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<X?(Z.flags|=2,X):J):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,X,J,we){return X===null||X.tag!==6?(X=mu(J,Z.mode,we),X.return=Z,X):(X=f(X,J),X.return=Z,X)}function z(Z,X,J,we){var Ke=J.type;return Ke===O?ve(Z,X,J.props.children,we,J.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===te&&dh(Ke)===X.type)?(we=f(X,J.props),we.ref=xa(Z,X,J),we.return=Z,we):(we=Qo(J.type,J.key,J.props,null,Z.mode,we),we.ref=xa(Z,X,J),we.return=Z,we)}function ae(Z,X,J,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=gu(J,Z.mode,we),X.return=Z,X):(X=f(X,J.children||[]),X.return=Z,X)}function ve(Z,X,J,we,Ke){return X===null||X.tag!==7?(X=Xr(J,Z.mode,we,Ke),X.return=Z,X):(X=f(X,J),X.return=Z,X)}function Me(Z,X,J){if(typeof X=="string"&&X!==""||typeof X=="number")return X=mu(""+X,Z.mode,J),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return J=Qo(X.type,X.key,X.props,null,Z.mode,J),J.ref=xa(Z,null,X),J.return=Z,J;case F:return X=gu(X,Z.mode,J),X.return=Z,X;case te:var we=X._init;return Me(Z,we(X._payload),J)}if(pt(X)||de(X))return X=Xr(X,Z.mode,J,null),X.return=Z,X;Ro(Z,X)}return null}function _e(Z,X,J,we){var Ke=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ke!==null?null:I(Z,X,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ke?z(Z,X,J,we):null;case F:return J.key===Ke?ae(Z,X,J,we):null;case te:return Ke=J._init,_e(Z,X,Ke(J._payload),we)}if(pt(J)||de(J))return Ke!==null?null:ve(Z,X,J,we,null);Ro(Z,J)}return null}function Ve(Z,X,J,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return Z=Z.get(J)||null,I(X,Z,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case D:return Z=Z.get(we.key===null?J:we.key)||null,z(X,Z,we,Ke);case F:return Z=Z.get(we.key===null?J:we.key)||null,ae(X,Z,we,Ke);case te:var tt=we._init;return Ve(Z,X,J,tt(we._payload),Ke)}if(pt(we)||de(we))return Z=Z.get(J)||null,ve(X,Z,we,Ke,null);Ro(X,we)}return null}function qe(Z,X,J,we){for(var Ke=null,tt=null,nt=X,at=X=0,un=null;nt!==null&&at<J.length;at++){nt.index>at?(un=nt,nt=null):un=nt.sibling;var Ct=_e(Z,nt,J[at],we);if(Ct===null){nt===null&&(nt=un);break}t&&nt&&Ct.alternate===null&&i(Z,nt),X=h(Ct,X,at),tt===null?Ke=Ct:tt.sibling=Ct,tt=Ct,nt=un}if(at===J.length)return a(Z,nt),Ht&&Or(Z,at),Ke;if(nt===null){for(;at<J.length;at++)nt=Me(Z,J[at],we),nt!==null&&(X=h(nt,X,at),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Ht&&Or(Z,at),Ke}for(nt=l(Z,nt);at<J.length;at++)un=Ve(nt,Z,at,J[at],we),un!==null&&(t&&un.alternate!==null&&nt.delete(un.key===null?at:un.key),X=h(un,X,at),tt===null?Ke=un:tt.sibling=un,tt=un);return t&&nt.forEach(function(vr){return i(Z,vr)}),Ht&&Or(Z,at),Ke}function Ye(Z,X,J,we){var Ke=de(J);if(typeof Ke!="function")throw Error(n(150));if(J=Ke.call(J),J==null)throw Error(n(151));for(var tt=Ke=null,nt=X,at=X=0,un=null,Ct=J.next();nt!==null&&!Ct.done;at++,Ct=J.next()){nt.index>at?(un=nt,nt=null):un=nt.sibling;var vr=_e(Z,nt,Ct.value,we);if(vr===null){nt===null&&(nt=un);break}t&&nt&&vr.alternate===null&&i(Z,nt),X=h(vr,X,at),tt===null?Ke=vr:tt.sibling=vr,tt=vr,nt=un}if(Ct.done)return a(Z,nt),Ht&&Or(Z,at),Ke;if(nt===null){for(;!Ct.done;at++,Ct=J.next())Ct=Me(Z,Ct.value,we),Ct!==null&&(X=h(Ct,X,at),tt===null?Ke=Ct:tt.sibling=Ct,tt=Ct);return Ht&&Or(Z,at),Ke}for(nt=l(Z,nt);!Ct.done;at++,Ct=J.next())Ct=Ve(nt,Z,at,Ct.value,we),Ct!==null&&(t&&Ct.alternate!==null&&nt.delete(Ct.key===null?at:Ct.key),X=h(Ct,X,at),tt===null?Ke=Ct:tt.sibling=Ct,tt=Ct);return t&&nt.forEach(function(r_){return i(Z,r_)}),Ht&&Or(Z,at),Ke}function Zt(Z,X,J,we){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:e:{for(var Ke=J.key,tt=X;tt!==null;){if(tt.key===Ke){if(Ke=J.type,Ke===O){if(tt.tag===7){a(Z,tt.sibling),X=f(tt,J.props.children),X.return=Z,Z=X;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===te&&dh(Ke)===tt.type){a(Z,tt.sibling),X=f(tt,J.props),X.ref=xa(Z,tt,J),X.return=Z,Z=X;break e}a(Z,tt);break}else i(Z,tt);tt=tt.sibling}J.type===O?(X=Xr(J.props.children,Z.mode,we,J.key),X.return=Z,Z=X):(we=Qo(J.type,J.key,J.props,null,Z.mode,we),we.ref=xa(Z,X,J),we.return=Z,Z=we)}return E(Z);case F:e:{for(tt=J.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(Z,X.sibling),X=f(X,J.children||[]),X.return=Z,Z=X;break e}else{a(Z,X);break}else i(Z,X);X=X.sibling}X=gu(J,Z.mode,we),X.return=Z,Z=X}return E(Z);case te:return tt=J._init,Zt(Z,X,tt(J._payload),we)}if(pt(J))return qe(Z,X,J,we);if(de(J))return Ye(Z,X,J,we);Ro(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,X!==null&&X.tag===6?(a(Z,X.sibling),X=f(X,J),X.return=Z,Z=X):(a(Z,X),X=mu(J,Z.mode,we),X.return=Z,Z=X),E(Z)):a(Z,X)}return Zt}var vs=hh(!0),ph=hh(!1),bo=or(null),Po=null,xs=null,wc=null;function Ac(){wc=xs=Po=null}function Cc(t){var i=bo.current;zt(bo),t._currentValue=i}function Rc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Ss(t,i){Po=t,wc=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Po===null)throw Error(n(308));xs=t,Po.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var kr=null;function bc(t){kr===null?kr=[t]:kr.push(t)}function mh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,bc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Bi(t,l)}function Bi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ur=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Et&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Bi(t,a)}return f=l.interleaved,f===null?(i.next=i,bc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Bi(t,a)}function Lo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Lt(t,a)}}function _h(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function No(t,i,a,l){var f=t.updateQueue;ur=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,ae=z.next;z.next=null,E===null?h=ae:E.next=ae,E=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=ae:I.next=ae,ve.lastBaseUpdate=z))}if(h!==null){var Me=f.baseState;E=0,ve=ae=z=null,I=h;do{var _e=I.lane,Ve=I.eventTime;if((l&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Ve,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var qe=t,Ye=I;switch(_e=i,Ve=a,Ye.tag){case 1:if(qe=Ye.payload,typeof qe=="function"){Me=qe.call(Ve,Me,_e);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ye.payload,_e=typeof qe=="function"?qe.call(Ve,Me,_e):qe,_e==null)break e;Me=se({},Me,_e);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,_e=f.effects,_e===null?f.effects=[I]:_e.push(I))}else Ve={eventTime:Ve,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ae=ve=Ve,z=Me):ve=ve.next=Ve,E|=_e;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ve===null&&(z=Me),f.baseState=z,f.firstBaseUpdate=ae,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Vr|=E,t.lanes=E,t.memoizedState=Me}}function vh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Sa={},yi=or(Sa),ya=or(Sa),Ma=or(Sa);function Br(t){if(t===Sa)throw Error(n(174));return t}function Lc(t,i){switch(kt(Ma,i),kt(ya,t),kt(yi,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}zt(yi),kt(yi,i)}function ys(){zt(yi),zt(ya),zt(Ma)}function xh(t){Br(Ma.current);var i=Br(yi.current),a=pe(i,t.type);i!==a&&(kt(ya,t),kt(yi,a))}function Nc(t){ya.current===t&&(zt(yi),zt(ya))}var Xt=or(0);function Do(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Dc=[];function Ic(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Io=P.ReactCurrentDispatcher,Uc=P.ReactCurrentBatchConfig,zr=0,jt=null,tn=null,ln=null,Uo=!1,Ea=!1,Ta=0,A0=0;function vn(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!si(t[a],i[a]))return!1;return!0}function Oc(t,i,a,l,f,h){if(zr=h,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?P0:L0,t=a(l,f),Ea){h=0;do{if(Ea=!1,Ta=0,25<=h)throw Error(n(301));h+=1,ln=tn=null,i.updateQueue=null,Io.current=N0,t=a(l,f)}while(Ea)}if(Io.current=ko,i=tn!==null&&tn.next!==null,zr=0,ln=tn=jt=null,Uo=!1,i)throw Error(n(300));return t}function kc(){var t=Ta!==0;return Ta=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=t:ln=ln.next=t,ln}function Qn(){if(tn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=ln===null?jt.memoizedState:ln.next;if(i!==null)ln=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?jt.memoizedState=ln=t:ln=ln.next=t}return ln}function wa(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=Qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=tn,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var I=E=null,z=null,ae=h;do{var ve=ae.lane;if((zr&ve)===ve)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),l=ae.hasEagerState?ae.eagerState:t(l,ae.action);else{var Me={lane:ve,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(I=z=Me,E=l):z=z.next=Me,jt.lanes|=ve,Vr|=ve}ae=ae.next}while(ae!==null&&ae!==h);z===null?E=l:z.next=I,si(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=z,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,jt.lanes|=h,Vr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zc(t){var i=Qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);si(h,i.memoizedState)||(Dn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Sh(){}function yh(t,i){var a=jt,l=Qn(),f=i(),h=!si(l.memoizedState,f);if(h&&(l.memoizedState=f,Dn=!0),l=l.queue,Vc(Th.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Eh.bind(null,a,l,f,i),void 0,null),cn===null)throw Error(n(349));(zr&30)!==0||Mh(a,i,f)}return f}function Mh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Eh(t,i,a,l){i.value=a,i.getSnapshot=l,wh(i)&&Ah(t)}function Th(t,i,a){return a(function(){wh(i)&&Ah(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!si(t,a)}catch{return!0}}function Ah(t){var i=Bi(t,1);i!==null&&ui(i,t,1,-1)}function Ch(t){var i=Mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i.queue=t,t=t.dispatch=b0.bind(null,jt,t),[i.memoizedState,t]}function Aa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return Qn().memoizedState}function Fo(t,i,a,l){var f=Mi();jt.flags|=t,f.memoizedState=Aa(1|i,a,void 0,l===void 0?null:l)}function Oo(t,i,a,l){var f=Qn();l=l===void 0?null:l;var h=void 0;if(tn!==null){var E=tn.memoizedState;if(h=E.destroy,l!==null&&Fc(l,E.deps)){f.memoizedState=Aa(i,a,h,l);return}}jt.flags|=t,f.memoizedState=Aa(1|i,a,h,l)}function bh(t,i){return Fo(8390656,8,t,i)}function Vc(t,i){return Oo(2048,8,t,i)}function Ph(t,i){return Oo(4,2,t,i)}function Lh(t,i){return Oo(4,4,t,i)}function Nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4,4,Nh.bind(null,i,t),a)}function Hc(){}function Ih(t,i){var a=Qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Fc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Uh(t,i){var a=Qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Fc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Fh(t,i,a){return(zr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=a):(si(a,i)||(a=gn(),jt.lanes|=a,Vr|=a,t.baseState=!0),i)}function C0(t,i){var a=ot;ot=a!==0&&4>a?a:4,t(!0);var l=Uc.transition;Uc.transition={};try{t(!1),i()}finally{ot=a,Uc.transition=l}}function Oh(){return Qn().memoizedState}function R0(t,i,a){var l=mr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},kh(t))Bh(i,a);else if(a=mh(t,i,a,l),a!==null){var f=Rn();ui(a,t,l,f),zh(a,i,l)}}function b0(t,i,a){var l=mr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(kh(t))Bh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,I=h(E,a);if(f.hasEagerState=!0,f.eagerState=I,si(I,E)){var z=i.interleaved;z===null?(f.next=f,bc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=mh(t,i,f,l),a!==null&&(f=Rn(),ui(a,t,l,f),zh(a,i,l))}}function kh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Bh(t,i){Ea=Uo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function zh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Lt(t,a)}}var ko={readContext:Zn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},P0={readContext:Zn,useCallback:function(t,i){return Mi().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:bh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4194308,4,Nh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Fo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fo(4,2,t,i)},useMemo:function(t,i){var a=Mi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=Mi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=R0.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=Mi();return t={current:t},i.memoizedState=t},useState:Ch,useDebugValue:Hc,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Ch(!1),i=t[0];return t=C0.bind(null,t[1]),Mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=jt,f=Mi();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),cn===null)throw Error(n(349));(zr&30)!==0||Mh(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,bh(Th.bind(null,l,h,t),[t]),l.flags|=2048,Aa(9,Eh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=Mi(),i=cn.identifierPrefix;if(Ht){var a=ki,l=Oi;a=(l&~(1<<32-He(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=A0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},L0={readContext:Zn,useCallback:Ih,useContext:Zn,useEffect:Vc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:Lh,useMemo:Uh,useReducer:Bc,useRef:Rh,useState:function(){return Bc(wa)},useDebugValue:Hc,useDeferredValue:function(t){var i=Qn();return Fh(i,tn.memoizedState,t)},useTransition:function(){var t=Bc(wa)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:yh,useId:Oh,unstable_isNewReconciler:!1},N0={readContext:Zn,useCallback:Ih,useContext:Zn,useEffect:Vc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:Lh,useMemo:Uh,useReducer:zc,useRef:Rh,useState:function(){return zc(wa)},useDebugValue:Hc,useDeferredValue:function(t){var i=Qn();return tn===null?i.memoizedState=t:Fh(i,tn.memoizedState,t)},useTransition:function(){var t=zc(wa)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:yh,useId:Oh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Gc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Rn(),f=mr(t),h=zi(l,f);h.payload=i,a!=null&&(h.callback=a),i=fr(t,h,f),i!==null&&(ui(i,t,f,l),Lo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Rn(),f=mr(t),h=zi(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=fr(t,h,f),i!==null&&(ui(i,t,f,l),Lo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Rn(),l=mr(t),f=zi(a,l);f.tag=2,i!=null&&(f.callback=i),i=fr(t,f,l),i!==null&&(ui(i,t,l,a),Lo(i,t,l))}};function Vh(t,i,a,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(f,h):!0}function Hh(t,i,a){var l=!1,f=lr,h=i.contextType;return typeof h=="object"&&h!==null?h=Zn(h):(f=Nn(i)?Ur:_n.current,l=i.contextTypes,h=(l=l!=null)?ps(t,f):lr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Gh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function Wc(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Pc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Zn(h):(h=Nn(i)?Ur:_n.current,f.context=ps(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Gc(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Bo.enqueueReplaceState(f,f.state,null),No(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var a="",l=i;do a+=$e(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Xc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function jc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function Wh(t,i,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){jo||(jo=!0,ou=l),jc(t,i)},a}function Xh(t,i,a){a=zi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){jc(t,i),typeof l!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function jh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new D0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=q0.bind(null,t,i,a),i.then(t,t))}function qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=zi(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var I0=P.ReactCurrentOwner,Dn=!1;function Cn(t,i,a,l){i.child=t===null?ph(i,null,a,l):vs(i,t.child,a,l)}function $h(t,i,a,l,f){a=a.render;var h=i.ref;return Ss(i,f),l=Oc(t,i,a,l,h,f),a=kc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Vi(t,i,f)):(Ht&&a&&Sc(i),i.flags|=1,Cn(t,i,l,f),i.child)}function Kh(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!pu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Zh(t,i,h,l,f)):(t=Qo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,l)&&t.ref===i.ref)return Vi(t,i,f)}return i.flags|=1,t=_r(h,l),t.ref=i.ref,t.return=i,i.child=t}function Zh(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(da(h,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Vi(t,i,f)}return qc(t,i,a,l,f)}function Qh(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ts,Gn),Gn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Ts,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,kt(Ts,Gn),Gn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,kt(Ts,Gn),Gn|=l;return Cn(t,i,f,a),i.child}function Jh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,a,l,f){var h=Nn(a)?Ur:_n.current;return h=ps(i,h),Ss(i,f),a=Oc(t,i,a,l,h,f),l=kc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Vi(t,i,f)):(Ht&&l&&Sc(i),i.flags|=1,Cn(t,i,a,f),i.child)}function ep(t,i,a,l,f){if(Nn(a)){var h=!0;Eo(i)}else h=!1;if(Ss(i,f),i.stateNode===null)Vo(t,i),Hh(i,a,l),Wc(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var z=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Zn(ae):(ae=Nn(a)?Ur:_n.current,ae=ps(i,ae));var ve=a.getDerivedStateFromProps,Me=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||z!==ae)&&Gh(i,E,l,ae),ur=!1;var _e=i.memoizedState;E.state=_e,No(i,l,E,f),z=i.memoizedState,I!==l||_e!==z||Ln.current||ur?(typeof ve=="function"&&(Gc(i,a,ve,l),z=i.memoizedState),(I=ur||Vh(i,a,I,l,_e,z,ae))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),E.props=l,E.state=z,E.context=ae,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,gh(t,i),I=i.memoizedProps,ae=i.type===i.elementType?I:oi(i.type,I),E.props=ae,Me=i.pendingProps,_e=E.context,z=a.contextType,typeof z=="object"&&z!==null?z=Zn(z):(z=Nn(a)?Ur:_n.current,z=ps(i,z));var Ve=a.getDerivedStateFromProps;(ve=typeof Ve=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Me||_e!==z)&&Gh(i,E,l,z),ur=!1,_e=i.memoizedState,E.state=_e,No(i,l,E,f);var qe=i.memoizedState;I!==Me||_e!==qe||Ln.current||ur?(typeof Ve=="function"&&(Gc(i,a,Ve,l),qe=i.memoizedState),(ae=ur||Vh(i,a,ae,l,_e,qe,z)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,qe,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,qe,z)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=qe),E.props=l,E.state=qe,E.context=z,l=ae):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return Yc(t,i,a,l,h,f)}function Yc(t,i,a,l,f,h){Jh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&sh(i,a,!1),Vi(t,i,h);l=i.stateNode,I0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=vs(i,t.child,null,h),i.child=vs(i,null,I,h)):Cn(t,i,I,h),i.memoizedState=l.state,f&&sh(i,a,!0),i.child}function tp(t){var i=t.stateNode;i.pendingContext?ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ih(t,i.context,!1),Lc(t,i.containerInfo)}function np(t,i,a,l,f){return _s(),Tc(f),i.flags|=256,Cn(t,i,a,l),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ip(t,i,a){var l=i.pendingProps,f=Xt.current,h=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),kt(Xt,f&1),t===null)return Ec(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Jo(E,l,0,null),t=Xr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Kc(a),i.memoizedState=$c,t):Zc(i,E));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return U0(t,i,E,l,I,f,a);if(h){h=l.fallback,E=i.mode,f=t.child,I=f.sibling;var z={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=_r(f,z),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?h=_r(I,h):(h=Xr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Kc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=$c,l}return h=t.child,t=h.sibling,l=_r(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Zc(t,i){return i=Jo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function zo(t,i,a,l){return l!==null&&Tc(l),vs(i,t.child,null,a),t=Zc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function U0(t,i,a,l,f,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Xc(Error(n(422))),zo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Jo({mode:"visible",children:l.children},f,0,null),h=Xr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&vs(i,t.child,null,E),i.child.memoizedState=Kc(E),i.memoizedState=$c,h);if((i.mode&1)===0)return zo(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,h=Error(n(419)),l=Xc(h,l,void 0),zo(t,i,E,l)}if(I=(E&t.childLanes)!==0,Dn||I){if(l=cn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Bi(t,f),ui(l,t,f,-1))}return hu(),l=Xc(Error(n(421))),zo(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Y0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Hn=ar(f.nextSibling),Vn=i,Ht=!0,ai=null,t!==null&&($n[Kn++]=Oi,$n[Kn++]=ki,$n[Kn++]=Fr,Oi=t.id,ki=t.overflow,Fr=i),i=Zc(i,l.children),i.flags|=4096,i)}function rp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Rc(t.return,i,a)}function Qc(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function sp(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(Cn(t,i,l.children,a),l=Xt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,a,i);else if(t.tag===19)rp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(kt(Xt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Qc(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Do(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Qc(i,!0,a,null,h);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Vi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=_r(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=_r(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function F0(t,i,a){switch(i.tag){case 3:tp(i),_s();break;case 5:xh(i);break;case 1:Nn(i.type)&&Eo(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;kt(bo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(kt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ip(t,i,a):(kt(Xt,Xt.current&1),t=Vi(t,i,a),t!==null?t.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return sp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Xt,Xt.current),l)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,a)}return Vi(t,i,a)}var ap,Jc,op,lp;ap=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},op=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Br(yi.current);var h=null;switch(a){case"input":f=gt(t,f),l=gt(t,l),h=[];break;case"select":f=se({},f,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":f=We(t,f),l=We(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=So)}Oe(a,l);var E;a=null;for(ae in f)if(!l.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var I=f[ae];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?h||(h=[]):(h=h||[]).push(ae,null));for(ae in l){var z=l[ae];if(I=f!=null?f[ae]:void 0,l.hasOwnProperty(ae)&&z!==I&&(z!=null||I!=null))if(ae==="style")if(I){for(E in I)!I.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in z)z.hasOwnProperty(E)&&I[E]!==z[E]&&(a||(a={}),a[E]=z[E])}else a||(h||(h=[]),h.push(ae,a)),a=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(h=h||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Bt("scroll",t),h||I===z||(h=[])):(h=h||[]).push(ae,z))}a&&(h=h||[]).push("style",a);var ae=h;(i.updateQueue=ae)&&(i.flags|=4)}},lp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ca(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function O0(t,i,a){var l=i.pendingProps;switch(yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Nn(i.type)&&Mo(),xn(i),null;case 3:return l=i.stateNode,ys(),zt(Ln),zt(_n),Ic(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Co(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(uu(ai),ai=null))),Jc(t,i),xn(i),null;case 5:Nc(i);var f=Br(Ma.current);if(a=i.type,t!==null&&i.stateNode!=null)op(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Br(yi.current),Co(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[Si]=i,l[_a]=h,t=(i.mode&1)!==0,a){case"dialog":Bt("cancel",l),Bt("close",l);break;case"iframe":case"object":case"embed":Bt("load",l);break;case"video":case"audio":for(f=0;f<pa.length;f++)Bt(pa[f],l);break;case"source":Bt("error",l);break;case"img":case"image":case"link":Bt("error",l),Bt("load",l);break;case"details":Bt("toggle",l);break;case"input":St(l,h),Bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Bt("invalid",l);break;case"textarea":R(l,h),Bt("invalid",l)}Oe(a,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var I=h[E];E==="children"?typeof I=="string"?l.textContent!==I&&(h.suppressHydrationWarning!==!0&&xo(l.textContent,I,t),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&xo(l.textContent,I,t),f=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Bt("scroll",l)}switch(a){case"input":ft(l),B(l,h,!0);break;case"textarea":ft(l),k(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=So)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[Si]=i,t[_a]=l,ap(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ae(a,l),a){case"dialog":Bt("cancel",t),Bt("close",t),f=l;break;case"iframe":case"object":case"embed":Bt("load",t),f=l;break;case"video":case"audio":for(f=0;f<pa.length;f++)Bt(pa[f],t);f=l;break;case"source":Bt("error",t),f=l;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),f=l;break;case"details":Bt("toggle",t),f=l;break;case"input":St(t,l),f=gt(t,l),Bt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=se({},l,{value:void 0}),Bt("invalid",t);break;case"textarea":R(t,l),f=We(t,l),Bt("invalid",t);break;default:f=l}Oe(a,f),I=f;for(h in I)if(I.hasOwnProperty(h)){var z=I[h];h==="style"?Te(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Be(t,z)):h==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&xe(t,z):typeof z=="number"&&xe(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Bt("scroll",t):z!=null&&N(t,h,z,E))}switch(a){case"input":ft(t),B(t,l,!1);break;case"textarea":ft(t),k(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Se(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?_t(t,!!l.multiple,h,!1):l.defaultValue!=null&&_t(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=So)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)lp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Br(Ma.current),Br(yi.current),Co(i)){if(l=i.stateNode,a=i.memoizedProps,l[Si]=i,(h=l.nodeValue!==a)&&(t=Vn,t!==null))switch(t.tag){case 3:xo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Si]=i,i.stateNode=l}return xn(i),null;case 13:if(zt(Xt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fh(),_s(),i.flags|=98560,h=!1;else if(h=Co(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Si]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),h=!1}else ai!==null&&(uu(ai),ai=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?nn===0&&(nn=3):hu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return ys(),Jc(t,i),t===null&&ma(i.stateNode.containerInfo),xn(i),null;case 10:return Cc(i.type._context),xn(i),null;case 17:return Nn(i.type)&&Mo(),xn(i),null;case 19:if(zt(Xt),h=i.memoizedState,h===null)return xn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ca(h,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Do(t),E!==null){for(i.flags|=128,Ca(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kt(Xt,Xt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Wt()>ws&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304)}else{if(!l)if(t=Do(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ht)return xn(i),null}else 2*Wt()-h.renderingStartTime>ws&&a!==1073741824&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Wt(),i.sibling=null,a=Xt.current,kt(Xt,l?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return du(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function k0(t,i){switch(yc(i),i.tag){case 1:return Nn(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),zt(Ln),zt(_n),Ic(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Nc(i),null;case 13:if(zt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Xt),null;case 4:return ys(),null;case 10:return Cc(i.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Ho=!1,Sn=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Yt(t,i,l)}else a.current=null}function eu(t,i,a){try{a()}catch(l){Yt(t,i,l)}}var cp=!1;function z0(t,i){if(dc=oo,t=Vd(),rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,I=-1,z=-1,ae=0,ve=0,Me=t,_e=null;t:for(;;){for(var Ve;Me!==a||f!==0&&Me.nodeType!==3||(I=E+f),Me!==h||l!==0&&Me.nodeType!==3||(z=E+l),Me.nodeType===3&&(E+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)_e=Me,Me=Ve;for(;;){if(Me===t)break t;if(_e===a&&++ae===f&&(I=E),_e===h&&++ve===l&&(z=E),(Ve=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Ve}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(hc={focusedElem:t,selectionRange:a},oo=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ye=qe.memoizedProps,Zt=qe.memoizedState,Z=i.stateNode,X=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:oi(i.type,Ye),Zt);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Yt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return qe=cp,cp=!1,qe}function Ra(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&eu(i,a,h)}f=f.next}while(f!==l)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function tu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Si],delete i[_a],delete i[_c],delete i[M0],delete i[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fp(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=So));else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}function iu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,a),t=t.sibling;t!==null;)iu(t,i,a),t=t.sibling}var dn=null,li=!1;function dr(t,i,a){for(a=a.child;a!==null;)hp(t,i,a),a=a.sibling}function hp(t,i,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(ze,a)}catch{}switch(a.tag){case 5:Sn||Es(a,i);case 6:var l=dn,f=li;dn=null,dr(t,i,a),dn=l,li=f,dn!==null&&(li?(t=dn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(li?(t=dn,a=a.stateNode,t.nodeType===8?gc(t.parentNode,a):t.nodeType===1&&gc(t,a),aa(t)):gc(dn,a.stateNode));break;case 4:l=dn,f=li,dn=a.stateNode.containerInfo,li=!0,dr(t,i,a),dn=l,li=f;break;case 0:case 11:case 14:case 15:if(!Sn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&eu(a,i,E),f=f.next}while(f!==l)}dr(t,i,a);break;case 1:if(!Sn&&(Es(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Yt(a,i,I)}dr(t,i,a);break;case 21:dr(t,i,a);break;case 22:a.mode&1?(Sn=(l=Sn)||a.memoizedState!==null,dr(t,i,a),Sn=l):dr(t,i,a);break;default:dr(t,i,a)}}function pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new B0),i.forEach(function(l){var f=$0.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ci(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,li=!1;break e;case 3:dn=I.stateNode.containerInfo,li=!0;break e;case 4:dn=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(dn===null)throw Error(n(160));hp(h,E,f),dn=null,li=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ae){Yt(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mp(i,t),i=i.sibling}function mp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),Ei(t),l&4){try{Ra(3,t,t.return),Go(3,t)}catch(Ye){Yt(t,t.return,Ye)}try{Ra(5,t,t.return)}catch(Ye){Yt(t,t.return,Ye)}}break;case 1:ci(i,t),Ei(t),l&512&&a!==null&&Es(a,a.return);break;case 5:if(ci(i,t),Ei(t),l&512&&a!==null&&Es(a,a.return),t.flags&32){var f=t.stateNode;try{xe(f,"")}catch(Ye){Yt(t,t.return,Ye)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,I=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&it(f,h),Ae(I,E);var ae=Ae(I,h);for(E=0;E<z.length;E+=2){var ve=z[E],Me=z[E+1];ve==="style"?Te(f,Me):ve==="dangerouslySetInnerHTML"?Be(f,Me):ve==="children"?xe(f,Me):N(f,ve,Me,ae)}switch(I){case"input":Ut(f,h);break;case"textarea":y(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ve=h.value;Ve!=null?_t(f,!!h.multiple,Ve,!1):_e!==!!h.multiple&&(h.defaultValue!=null?_t(f,!!h.multiple,h.defaultValue,!0):_t(f,!!h.multiple,h.multiple?[]:"",!1))}f[_a]=h}catch(Ye){Yt(t,t.return,Ye)}}break;case 6:if(ci(i,t),Ei(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ye){Yt(t,t.return,Ye)}}break;case 3:if(ci(i,t),Ei(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{aa(i.containerInfo)}catch(Ye){Yt(t,t.return,Ye)}break;case 4:ci(i,t),Ei(t);break;case 13:ci(i,t),Ei(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(au=Wt())),l&4&&pp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(Sn=(ae=Sn)||ve,ci(i,t),Sn=ae):ci(i,t),Ei(t),l&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!ve&&(t.mode&1)!==0)for(Xe=t,ve=t.child;ve!==null;){for(Me=Xe=ve;Xe!==null;){switch(_e=Xe,Ve=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ra(4,_e,_e.return);break;case 1:Es(_e,_e.return);var qe=_e.stateNode;if(typeof qe.componentWillUnmount=="function"){l=_e,a=_e.return;try{i=l,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Ye){Yt(l,a,Ye)}}break;case 5:Es(_e,_e.return);break;case 22:if(_e.memoizedState!==null){vp(Me);continue}}Ve!==null?(Ve.return=_e,Xe=Ve):vp(Me)}ve=ve.sibling}e:for(ve=null,Me=t;;){if(Me.tag===5){if(ve===null){ve=Me;try{f=Me.stateNode,ae?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=Me.stateNode,z=Me.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=ge("display",E))}catch(Ye){Yt(t,t.return,Ye)}}}else if(Me.tag===6){if(ve===null)try{Me.stateNode.nodeValue=ae?"":Me.memoizedProps}catch(Ye){Yt(t,t.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;ve===Me&&(ve=null),Me=Me.return}ve===Me&&(ve=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ci(i,t),Ei(t),l&4&&pp(t);break;case 21:break;default:ci(i,t),Ei(t)}}function Ei(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(fp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(xe(f,""),l.flags&=-33);var h=dp(t);iu(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,I=dp(t);nu(t,I,E);break;default:throw Error(n(161))}}catch(z){Yt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function V0(t,i,a){Xe=t,gp(t)}function gp(t,i,a){for(var l=(t.mode&1)!==0;Xe!==null;){var f=Xe,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Ho;if(!E){var I=f.alternate,z=I!==null&&I.memoizedState!==null||Sn;I=Ho;var ae=Sn;if(Ho=E,(Sn=z)&&!ae)for(Xe=f;Xe!==null;)E=Xe,z=E.child,E.tag===22&&E.memoizedState!==null?xp(f):z!==null?(z.return=E,Xe=z):xp(f);for(;h!==null;)Xe=h,gp(h),h=h.sibling;Xe=f,Ho=I,Sn=ae}_p(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Xe=h):_p(t)}}function _p(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Sn||Go(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Sn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&vh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}vh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var ve=ae.memoizedState;if(ve!==null){var Me=ve.dehydrated;Me!==null&&aa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Sn||i.flags&512&&tu(i)}catch(_e){Yt(i,i.return,_e)}}if(i===t){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function vp(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function xp(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(z){Yt(i,a,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(z){Yt(i,f,z)}}var h=i.return;try{tu(i)}catch(z){Yt(i,h,z)}break;case 5:var E=i.return;try{tu(i)}catch(z){Yt(i,E,z)}}}catch(z){Yt(i,i.return,z)}if(i===t){Xe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Xe=I;break}Xe=i.return}}var H0=Math.ceil,Wo=P.ReactCurrentDispatcher,ru=P.ReactCurrentOwner,Jn=P.ReactCurrentBatchConfig,Et=0,cn=null,Qt=null,hn=0,Gn=0,Ts=or(0),nn=0,ba=null,Vr=0,Xo=0,su=0,Pa=null,In=null,au=0,ws=1/0,Hi=null,jo=!1,ou=null,hr=null,qo=!1,pr=null,Yo=0,La=0,lu=null,$o=-1,Ko=0;function Rn(){return(Et&6)!==0?Wt():$o!==-1?$o:$o=Wt()}function mr(t){return(t.mode&1)===0?1:(Et&2)!==0&&hn!==0?hn&-hn:w0.transition!==null?(Ko===0&&(Ko=gn()),Ko):(t=ot,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function ui(t,i,a,l){if(50<La)throw La=0,lu=null,Error(n(185));en(t,a,l),((Et&2)===0||t!==cn)&&(t===cn&&((Et&2)===0&&(Xo|=a),nn===4&&gr(t,hn)),Un(t,l),a===1&&Et===0&&(i.mode&1)===0&&(ws=Wt()+500,To&&cr()))}function Un(t,i){var a=t.callbackNode;Pt(t,i);var l=At(t,t===cn?hn:0);if(l===0)a!==null&&ro(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ro(a),i===1)t.tag===0?T0(yp.bind(null,t)):ah(yp.bind(null,t)),S0(function(){(Et&6)===0&&cr()}),a=null;else{switch(An(l)){case 1:a=j;break;case 4:a=ue;break;case 16:a=re;break;case 536870912:a=Ne;break;default:a=re}a=bp(a,Sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Sp(t,i){if($o=-1,Ko=0,(Et&6)!==0)throw Error(n(327));var a=t.callbackNode;if(As()&&t.callbackNode!==a)return null;var l=At(t,t===cn?hn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Zo(t,l);else{i=l;var f=Et;Et|=2;var h=Ep();(cn!==t||hn!==i)&&(Hi=null,ws=Wt()+500,Gr(t,i));do try{X0();break}catch(I){Mp(t,I)}while(!0);Ac(),Wo.current=h,Et=f,Qt!==null?i=0:(cn=null,hn=0,i=nn)}if(i!==0){if(i===2&&(f=vt(t),f!==0&&(l=f,i=cu(t,f))),i===1)throw a=ba,Gr(t,0),gr(t,l),Un(t,Wt()),a;if(i===6)gr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!G0(f)&&(i=Zo(t,l),i===2&&(h=vt(t),h!==0&&(l=h,i=cu(t,h))),i===1))throw a=ba,Gr(t,0),gr(t,l),Un(t,Wt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Wr(t,In,Hi);break;case 3:if(gr(t,l),(l&130023424)===l&&(i=au+500-Wt(),10<i)){if(At(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=mc(Wr.bind(null,t,In,Hi),i);break}Wr(t,In,Hi);break;case 4:if(gr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-He(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Wt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*H0(l/1960))-l,10<l){t.timeoutHandle=mc(Wr.bind(null,t,In,Hi),l);break}Wr(t,In,Hi);break;case 5:Wr(t,In,Hi);break;default:throw Error(n(329))}}}return Un(t,Wt()),t.callbackNode===a?Sp.bind(null,t):null}function cu(t,i){var a=Pa;return t.current.memoizedState.isDehydrated&&(Gr(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=In,In=a,i!==null&&uu(i)),t}function uu(t){In===null?In=t:In.push.apply(In,t)}function G0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!si(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(t,i){for(i&=~su,i&=~Xo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-He(i),l=1<<a;t[a]=-1,i&=~l}}function yp(t){if((Et&6)!==0)throw Error(n(327));As();var i=At(t,0);if((i&1)===0)return Un(t,Wt()),null;var a=Zo(t,i);if(t.tag!==0&&a===2){var l=vt(t);l!==0&&(i=l,a=cu(t,l))}if(a===1)throw a=ba,Gr(t,0),gr(t,i),Un(t,Wt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Wr(t,In,Hi),Un(t,Wt()),null}function fu(t,i){var a=Et;Et|=1;try{return t(i)}finally{Et=a,Et===0&&(ws=Wt()+500,To&&cr())}}function Hr(t){pr!==null&&pr.tag===0&&(Et&6)===0&&As();var i=Et;Et|=1;var a=Jn.transition,l=ot;try{if(Jn.transition=null,ot=1,t)return t()}finally{ot=l,Jn.transition=a,Et=i,(Et&6)===0&&cr()}}function du(){Gn=Ts.current,zt(Ts)}function Gr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,x0(a)),Qt!==null)for(a=Qt.return;a!==null;){var l=a;switch(yc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Mo();break;case 3:ys(),zt(Ln),zt(_n),Ic();break;case 5:Nc(l);break;case 4:ys();break;case 13:zt(Xt);break;case 19:zt(Xt);break;case 10:Cc(l.type._context);break;case 22:case 23:du()}a=a.return}if(cn=t,Qt=t=_r(t.current,null),hn=Gn=i,nn=0,ba=null,su=Xo=Vr=0,In=Pa=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}a.pending=l}kr=null}return t}function Mp(t,i){do{var a=Qt;try{if(Ac(),Io.current=ko,Uo){for(var l=jt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Uo=!1}if(zr=0,ln=tn=jt=null,Ea=!1,Ta=0,ru.current=null,a===null||a.return===null){nn=1,ba=i,Qt=null;break}e:{var h=t,E=a.return,I=a,z=i;if(i=hn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,ve=I,Me=ve.tag;if((ve.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ve=qh(E);if(Ve!==null){Ve.flags&=-257,Yh(Ve,E,I,h,i),Ve.mode&1&&jh(h,ae,i),i=Ve,z=ae;var qe=i.updateQueue;if(qe===null){var Ye=new Set;Ye.add(z),i.updateQueue=Ye}else qe.add(z);break e}else{if((i&1)===0){jh(h,ae,i),hu();break e}z=Error(n(426))}}else if(Ht&&I.mode&1){var Zt=qh(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Yh(Zt,E,I,h,i),Tc(Ms(z,I));break e}}h=z=Ms(z,I),nn!==4&&(nn=2),Pa===null?Pa=[h]:Pa.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Wh(h,z,i);_h(h,Z);break e;case 1:I=z;var X=h.type,J=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(hr===null||!hr.has(J)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Xh(h,I,i);_h(h,we);break e}}h=h.return}while(h!==null)}wp(a)}catch(Ke){i=Ke,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Ep(){var t=Wo.current;return Wo.current=ko,t===null?ko:t}function hu(){(nn===0||nn===3||nn===2)&&(nn=4),cn===null||(Vr&268435455)===0&&(Xo&268435455)===0||gr(cn,hn)}function Zo(t,i){var a=Et;Et|=2;var l=Ep();(cn!==t||hn!==i)&&(Hi=null,Gr(t,i));do try{W0();break}catch(f){Mp(t,f)}while(!0);if(Ac(),Et=a,Wo.current=l,Qt!==null)throw Error(n(261));return cn=null,hn=0,nn}function W0(){for(;Qt!==null;)Tp(Qt)}function X0(){for(;Qt!==null&&!Wl();)Tp(Qt)}function Tp(t){var i=Rp(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?wp(t):Qt=i,ru.current=null}function wp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=O0(a,i,Gn),a!==null){Qt=a;return}}else{if(a=k0(a,i),a!==null){a.flags&=32767,Qt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=t}while(i!==null);nn===0&&(nn=5)}function Wr(t,i,a){var l=ot,f=Jn.transition;try{Jn.transition=null,ot=1,j0(t,i,a,l)}finally{Jn.transition=f,ot=l}return null}function j0(t,i,a,l){do As();while(pr!==null);if((Et&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Dr(t,h),t===cn&&(Qt=cn=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||qo||(qo=!0,bp(re,function(){return As(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Jn.transition,Jn.transition=null;var E=ot;ot=1;var I=Et;Et|=4,ru.current=null,z0(t,a),mp(a,t),d0(hc),oo=!!dc,hc=dc=null,t.current=a,V0(a),Xl(),Et=I,ot=E,Jn.transition=h}else t.current=a;if(qo&&(qo=!1,pr=t,Yo=f),h=t.pendingLanes,h===0&&(hr=null),je(a.stateNode),Un(t,Wt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(jo)throw jo=!1,t=ou,ou=null,t;return(Yo&1)!==0&&t.tag!==0&&As(),h=t.pendingLanes,(h&1)!==0?t===lu?La++:(La=0,lu=t):La=0,cr(),null}function As(){if(pr!==null){var t=An(Yo),i=Jn.transition,a=ot;try{if(Jn.transition=null,ot=16>t?16:t,pr===null)var l=!1;else{if(t=pr,pr=null,Yo=0,(Et&6)!==0)throw Error(n(331));var f=Et;for(Et|=4,Xe=t.current;Xe!==null;){var h=Xe,E=h.child;if((Xe.flags&16)!==0){var I=h.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ae=I[z];for(Xe=ae;Xe!==null;){var ve=Xe;switch(ve.tag){case 0:case 11:case 15:Ra(8,ve,h)}var Me=ve.child;if(Me!==null)Me.return=ve,Xe=Me;else for(;Xe!==null;){ve=Xe;var _e=ve.sibling,Ve=ve.return;if(up(ve),ve===ae){Xe=null;break}if(_e!==null){_e.return=Ve,Xe=_e;break}Xe=Ve}}}var qe=h.alternate;if(qe!==null){var Ye=qe.child;if(Ye!==null){qe.child=null;do{var Zt=Ye.sibling;Ye.sibling=null,Ye=Zt}while(Ye!==null)}}Xe=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Xe=E;else e:for(;Xe!==null;){if(h=Xe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ra(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,Xe=Z;break e}Xe=h.return}}var X=t.current;for(Xe=X;Xe!==null;){E=Xe;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Xe=J;else e:for(E=X;Xe!==null;){if(I=Xe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Go(9,I)}}catch(Ke){Yt(I,I.return,Ke)}if(I===E){Xe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Xe=we;break e}Xe=I.return}}if(Et=f,cr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(ze,t)}catch{}l=!0}return l}finally{ot=a,Jn.transition=i}}return!1}function Ap(t,i,a){i=Ms(a,i),i=Wh(t,i,1),t=fr(t,i,1),i=Rn(),t!==null&&(en(t,1,i),Un(t,i))}function Yt(t,i,a){if(t.tag===3)Ap(t,t,a);else for(;i!==null;){if(i.tag===3){Ap(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hr===null||!hr.has(l))){t=Ms(a,t),t=Xh(i,t,1),i=fr(i,t,1),t=Rn(),i!==null&&(en(i,1,t),Un(i,t));break}}i=i.return}}function q0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&a,cn===t&&(hn&a)===a&&(nn===4||nn===3&&(hn&130023424)===hn&&500>Wt()-au?Gr(t,0):su|=a),Un(t,i)}function Cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=Rn();t=Bi(t,i),t!==null&&(en(t,i,a),Un(t,a))}function Y0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Cp(t,a)}function $0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Cp(t,a)}var Rp;Rp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Dn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,F0(t,i,a);Dn=(t.flags&131072)!==0}else Dn=!1,Ht&&(i.flags&1048576)!==0&&oh(i,Ao,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Vo(t,i),t=i.pendingProps;var f=ps(i,_n.current);Ss(i,a),f=Oc(null,i,l,t,f,a);var h=kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(l)?(h=!0,Eo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Pc(i),f.updater=Bo,i.stateNode=f,f._reactInternals=i,Wc(i,l,t,a),i=Yc(null,i,l,!0,h,a)):(i.tag=0,Ht&&h&&Sc(i),Cn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Vo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=Z0(l),t=oi(l,t),f){case 0:i=qc(null,i,l,t,a);break e;case 1:i=ep(null,i,l,t,a);break e;case 11:i=$h(null,i,l,t,a);break e;case 14:i=Kh(null,i,l,oi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),qc(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),ep(t,i,l,f,a);case 3:e:{if(tp(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,gh(t,i),No(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ms(Error(n(423)),i),i=np(t,i,l,a,f);break e}else if(l!==f){f=Ms(Error(n(424)),i),i=np(t,i,l,a,f);break e}else for(Hn=ar(i.stateNode.containerInfo.firstChild),Vn=i,Ht=!0,ai=null,a=ph(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),l===f){i=Vi(t,i,a);break e}Cn(t,i,l,a)}i=i.child}return i;case 5:return xh(i),t===null&&Ec(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,pc(l,f)?E=null:h!==null&&pc(l,h)&&(i.flags|=32),Jh(t,i),Cn(t,i,E,a),i.child;case 6:return t===null&&Ec(i),null;case 13:return ip(t,i,a);case 4:return Lc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=vs(i,null,l,a):Cn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),$h(t,i,l,f,a);case 7:return Cn(t,i,i.pendingProps,a),i.child;case 8:return Cn(t,i,i.pendingProps.children,a),i.child;case 12:return Cn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,kt(bo,l._currentValue),l._currentValue=E,h!==null)if(si(h.value,E)){if(h.children===f.children&&!Ln.current){i=Vi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){E=h.child;for(var z=I.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=zi(-1,a&-a),z.tag=2;var ae=h.updateQueue;if(ae!==null){ae=ae.shared;var ve=ae.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ae.pending=z}}h.lanes|=a,z=h.alternate,z!==null&&(z.lanes|=a),Rc(h.return,a,i),I.lanes|=a;break}z=z.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Rc(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Cn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ss(i,a),f=Zn(f),l=l(f),i.flags|=1,Cn(t,i,l,a),i.child;case 14:return l=i.type,f=oi(l,i.pendingProps),f=oi(l.type,f),Kh(t,i,l,f,a);case 15:return Zh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Vo(t,i),i.tag=1,Nn(l)?(t=!0,Eo(i)):t=!1,Ss(i,a),Hh(i,l,f),Wc(i,l,f,a),Yc(null,i,l,!0,t,a);case 19:return sp(t,i,a);case 22:return Qh(t,i,a)}throw Error(n(156,i.tag))};function bp(t,i){return io(t,i)}function K0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,a,l){return new K0(t,i,a,l)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z0(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===G)return 11;if(t===fe)return 14}return 2}function _r(t,i){var a=t.alternate;return a===null?(a=ei(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Qo(t,i,a,l,f,h){var E=2;if(l=t,typeof t=="function")pu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Xr(a.children,f,h,i);case $:E=8,f|=8;break;case w:return t=ei(12,a,i,f|2),t.elementType=w,t.lanes=h,t;case q:return t=ei(13,a,i,f),t.elementType=q,t.lanes=h,t;case ne:return t=ei(19,a,i,f),t.elementType=ne,t.lanes=h,t;case K:return Jo(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:E=10;break e;case V:E=9;break e;case G:E=11;break e;case fe:E=14;break e;case te:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ei(E,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Xr(t,i,a,l){return t=ei(7,t,l,i),t.lanes=a,t}function Jo(t,i,a,l){return t=ei(22,t,l,i),t.elementType=K,t.lanes=a,t.stateNode={isHidden:!1},t}function mu(t,i,a){return t=ei(6,t,null,i),t.lanes=a,t}function gu(t,i,a){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Q0(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _u(t,i,a,l,f,h,E,I,z){return t=new Q0(t,i,a,I,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ei(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(h),t}function J0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Pp(t){if(!t)return lr;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Nn(a))return rh(t,a,i)}return i}function Lp(t,i,a,l,f,h,E,I,z){return t=_u(a,l,!0,t,f,h,E,I,z),t.context=Pp(null),a=t.current,l=Rn(),f=mr(a),h=zi(l,f),h.callback=i??null,fr(a,h,f),t.current.lanes=f,en(t,f,l),Un(t,l),t}function el(t,i,a,l){var f=i.current,h=Rn(),E=mr(f);return a=Pp(a),i.context===null?i.context=a:i.pendingContext=a,i=zi(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=fr(f,i,E),t!==null&&(ui(t,f,E,h),Lo(t,f,E)),E}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function vu(t,i){Np(t,i),(t=t.alternate)&&Np(t,i)}function e_(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}nl.prototype.render=xu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Hr(function(){el(null,t,null,null)}),i[Ui]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=xi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,t),a===0&&xd(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function t_(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ae=tl(E);h.call(ae)}}var E=Lp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=E,t[Ui]=E.current,ma(t.nodeType===8?t.parentNode:t),Hr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var ae=tl(z);I.call(ae)}}var z=_u(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=z,t[Ui]=z.current,ma(t.nodeType===8?t.parentNode:t),Hr(function(){el(i,z,a,l)}),z}function rl(t,i,a,l,f){var h=a._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var I=f;f=function(){var z=tl(E);I.call(z)}}el(i,E,t,f)}else E=t_(a,i,t,f,l);return tl(E)}an=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=It(i.pendingLanes);a!==0&&(Lt(i,a|1),Un(i,Wt()),(Et&6)===0&&(ws=Wt()+500,cr()))}break;case 13:Hr(function(){var l=Bi(t,1);if(l!==null){var f=Rn();ui(l,t,1,f)}}),vu(t,1)}},on=function(t){if(t.tag===13){var i=Bi(t,134217728);if(i!==null){var a=Rn();ui(i,t,134217728,a)}vu(t,134217728)}},rs=function(t){if(t.tag===13){var i=mr(t),a=Bi(t,i);if(a!==null){var l=Rn();ui(a,t,i,l)}vu(t,i)}},xi=function(){return ot},_d=function(t,i){var a=ot;try{return ot=t,i()}finally{ot=a}},Le=function(t,i,a){switch(i){case"input":if(Ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=yo(l);if(!f)throw Error(n(90));Vt(l),Ut(l,f)}}}break;case"textarea":y(t,a);break;case"select":i=a.value,i!=null&&_t(t,!!a.multiple,i,!1)}},st=fu,Nt=Hr;var n_={usingClientEntryPoint:!1,Events:[va,ds,yo,me,be,fu]},Na={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i_={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ta(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{ze=sl.inject(i_),Ce=sl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_,Fn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(n(200));return J0(t,i,null,a)},Fn.createRoot=function(t,i){if(!Su(t))throw Error(n(299));var a=!1,l="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=_u(t,1,!1,null,null,a,!1,l,f),t[Ui]=i.current,ma(t.nodeType===8?t.parentNode:t),new xu(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ta(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Hr(t)},Fn.hydrate=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,a)},Fn.hydrateRoot=function(t,i,a){if(!Su(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",E=Dp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Lp(i,null,t,1,a??null,f,!1,h,E),t[Ui]=i.current,ma(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new nl(i)},Fn.render=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,a)},Fn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Hr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1},Fn.unstable_batchedUpdates=fu,Fn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!il(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,a,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Hp;function d_(){if(Hp)return Eu.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=f_(),Eu.exports}var Gp;function h_(){if(Gp)return al;Gp=1;var s=d_();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var p_=h_();const m_=Gm(p_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="182",g_=0,Wp=1,__=2,Pl=1,Wm=2,Ha=3,Rr=0,kn=1,Ci=2,$i=0,Vs=1,Fl=2,Xp=3,jp=4,v_=5,Jr=100,x_=101,S_=102,y_=103,M_=104,E_=200,T_=201,w_=202,A_=203,af=204,of=205,C_=206,R_=207,b_=208,P_=209,L_=210,N_=211,D_=212,I_=213,U_=214,lf=0,cf=1,uf=2,Gs=3,ff=4,df=5,hf=6,pf=7,Xm=0,F_=1,O_=2,Pi=0,jm=1,qm=2,Ym=3,$m=4,Km=5,Zm=6,Qm=7,Jm=300,is=301,Ws=302,mf=303,gf=304,zl=306,_f=1e3,Yi=1001,vf=1002,pn=1003,k_=1004,ol=1005,En=1006,Au=1007,ts=1008,jn=1009,eg=1010,tg=1011,Xa=1012,id=1013,Ni=1014,Ri=1015,Zi=1016,rd=1017,sd=1018,ja=1020,ng=35902,ig=35899,rg=1021,sg=1022,gi=1023,Qi=1026,ns=1027,ag=1028,ad=1029,Xs=1030,od=1031,ld=1033,Ll=33776,Nl=33777,Dl=33778,Il=33779,xf=35840,Sf=35841,yf=35842,Mf=35843,Ef=36196,Tf=37492,wf=37496,Af=37488,Cf=37489,Rf=37490,bf=37491,Pf=37808,Lf=37809,Nf=37810,Df=37811,If=37812,Uf=37813,Ff=37814,Of=37815,kf=37816,Bf=37817,zf=37818,Vf=37819,Hf=37820,Gf=37821,Wf=36492,Xf=36494,jf=36495,qf=36283,Yf=36284,$f=36285,Kf=36286,B_=3200,og=0,z_=1,wr="",ni="srgb",js="srgb-linear",Ol="linear",Dt="srgb",Cs=7680,qp=519,V_=512,H_=513,G_=514,cd=515,W_=516,X_=517,ud=518,j_=519,Yp=35044,$p="300 es",bi=2e3,kl=2001;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function q_(){const s=Bl("canvas");return s.style.display="block",s}const Kp={};function Zp(...s){const e="THREE."+s.shift();console.log(e,...s)}function lt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Rt(...s){const e="THREE."+s.shift();console.error(e,...s)}function qa(...s){const e=s.join(" ");e in Kp||(Kp[e]=!0,lt(...s))}function Y_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,Zf=180/Math.PI;function $a(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function $_(s,e){return(s%e+e)%e}function Ru(s,e,n){return(1-n)*s+n*e}function Ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,n=0){bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3],x=c[u+0],M=c[u+1],T=c[u+2],C=c[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=C;return}if(g!==C||p!==x||m!==M||v!==T){let S=p*x+m*M+v*T+g*C;S<0&&(x=-x,M=-M,T=-T,C=-C,S=-S);let _=1-d;if(S<.9995){const L=Math.acos(S),N=Math.sin(L);_=Math.sin(_*L)/N,d=Math.sin(d*L)/N,p=p*_+x*d,m=m*_+M*d,v=v*_+T*d,g=g*_+C*d}else{p=p*_+x*d,m=m*_+M*d,v=v*_+T*d,g=g*_+C*d;const L=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=L,m*=L,v*=L,g*=L}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],g=c[u],x=c[u+1],M=c[u+2],T=c[u+3];return e[n]=d*T+v*g+p*M-m*x,e[n+1]=p*T+v*x+m*g-d*M,e[n+2]=m*T+v*M+d*x-p*g,e[n+3]=v*T-d*g-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),g=d(c/2),x=p(r/2),M=p(o/2),T=p(c/2);switch(u){case"XYZ":this._x=x*v*g+m*M*T,this._y=m*M*g-x*v*T,this._z=m*v*T+x*M*g,this._w=m*v*g-x*M*T;break;case"YXZ":this._x=x*v*g+m*M*T,this._y=m*M*g-x*v*T,this._z=m*v*T-x*M*g,this._w=m*v*g+x*M*T;break;case"ZXY":this._x=x*v*g-m*M*T,this._y=m*M*g+x*v*T,this._z=m*v*T+x*M*g,this._w=m*v*g-x*M*T;break;case"ZYX":this._x=x*v*g-m*M*T,this._y=m*M*g+x*v*T,this._z=m*v*T-x*M*g,this._w=m*v*g+x*M*T;break;case"YZX":this._x=x*v*g+m*M*T,this._y=m*M*g+x*v*T,this._z=m*v*T-x*M*g,this._w=m*v*g-x*M*T;break;case"XZY":this._x=x*v*g-m*M*T,this._y=m*M*g-x*v*T,this._z=m*v*T+x*M*g,this._w=m*v*g+x*M*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+o*m-c*p,this._y=o*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-o*d,this._w=u*v-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),v=2*(d*n-c*o),g=2*(c*r-u*n);return this.x=n+p*m+u*g-d*v,this.y=r+p*v+d*m-c*g,this.z=o+p*g+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new ee,Qp=new Ka;class ut{constructor(e,n,r,o,c,u,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],x=r[2],M=r[5],T=r[8],C=o[0],S=o[3],_=o[6],L=o[1],N=o[4],P=o[7],D=o[2],F=o[5],O=o[8];return c[0]=u*C+d*L+p*D,c[3]=u*S+d*N+p*F,c[6]=u*_+d*P+p*O,c[1]=m*C+v*L+g*D,c[4]=m*S+v*N+g*F,c[7]=m*_+v*P+g*O,c[2]=x*C+M*L+T*D,c[5]=x*S+M*N+T*F,c[8]=x*_+M*P+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*u-d*m,x=d*p-v*c,M=m*c-u*p,T=n*g+r*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(o*m-v*r)*C,e[2]=(d*r-o*u)*C,e[3]=x*C,e[4]=(v*n-o*p)*C,e[5]=(o*c-d*n)*C,e[6]=M*C,e[7]=(r*p-m*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new ut,Jp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Dt&&(o.r=Ki(o.r),o.g=Ki(o.g),o.b=Ki(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===wr?Ol:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:Ol,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const Tt=K_();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class Z_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Bl("canvas")),Rs.width=e.width,Rs.height=e.height;const o=Rs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ki(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ki(n[r]/255)*255):n[r]=Ki(n[r]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Lu(o[u].image)):c.push(Lu(o[u]))}else c=Lu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Lu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Z_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let J_=0;const Nu=new ee;class Tn extends Ys{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,r=Yi,o=Yi,c=En,u=ts,d=gi,p=jn,m=Tn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=$a(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nu).x}get height(){return this.source.getSize(Nu).y}get depth(){return this.source.getSize(Nu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Jm;Tn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],M=p[5],T=p[9],C=p[2],S=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,P=(M+1)/2,D=(_+1)/2,F=(v+x)/4,O=(g+C)/4,$=(T+S)/4;return N>P&&N>D?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=F/r,c=O/r):P>D?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=F/o,c=$/o):D<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(D),r=O/c,o=$/c),this.set(r,o,c,n),this}let L=Math.sqrt((S-T)*(S-T)+(g-C)*(g-C)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(g-C)/L,this.z=(x-v)/L,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ev extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Tn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new fd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends ev{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class cg extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tv extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(c,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),cl.subVectors(this.max,Ua),bs.subVectors(e.a,Ua),Ps.subVectors(e.b,Ua),Ls.subVectors(e.c,Ua),xr.subVectors(Ps,bs),Sr.subVectors(Ls,Ps),jr.subVectors(bs,Ls);let n=[0,-xr.z,xr.y,0,-Sr.z,Sr.y,0,-jr.z,jr.y,xr.z,0,-xr.x,Sr.z,0,-Sr.x,jr.z,0,-jr.x,-xr.y,xr.x,0,-Sr.y,Sr.x,0,-jr.y,jr.x,0];return!Du(n,bs,Ps,Ls,cl)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,bs,Ps,Ls,cl))?!1:(ul.crossVectors(xr,Sr),n=[ul.x,ul.y,ul.z],Du(n,bs,Ps,Ls,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],fi=new ee,ll=new Za,bs=new ee,Ps=new ee,Ls=new ee,xr=new ee,Sr=new ee,jr=new ee,Ua=new ee,cl=new ee,ul=new ee,qr=new ee;function Du(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){qr.fromArray(s,c);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),p=e.dot(qr),m=n.dot(qr),v=r.dot(qr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const nv=new Za,Fa=new ee,Iu=new ee;class Vl{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):nv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Iu)),this.expandByPoint(Fa.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wi=new ee,Uu=new ee,fl=new ee,yr=new ee,Fu=new ee,dl=new ee,Ou=new ee;class ug{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Uu.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(Uu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(fl),d=yr.dot(this.direction),p=-yr.dot(fl),m=yr.lengthSq(),v=Math.abs(1-u*u);let g,x,M,T;if(v>0)if(g=u*p-d,x=u*d-p,T=c*v,g>=0)if(x>=-T)if(x<=T){const C=1/v;g*=C,x*=C,M=g*(g+u*x+2*d)+x*(u*g+x+2*p)+m}else x=c,g=Math.max(0,-(u*x+d)),M=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(u*x+d)),M=-g*g+x*(x+2*p)+m;else x<=-T?(g=Math.max(0,-(-u*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),M=-g*g+x*(x+2*p)+m):x<=T?(g=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(g=Math.max(0,-(u*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),M=-g*g+x*(x+2*p)+m);else x=u>0?-c:c,g=Math.max(0,-(u*x+d)),M=-g*g+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Uu).addScaledVector(fl,x),M}intersectSphere(e,n){Wi.subVectors(e.center,this.origin);const r=Wi.dot(this.direction),o=Wi.dot(Wi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,n,r,o,c){Fu.subVectors(n,e),dl.subVectors(r,e),Ou.crossVectors(Fu,dl);let u=this.direction.dot(Ou),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;yr.subVectors(this.origin,e);const p=d*this.direction.dot(dl.crossVectors(yr,dl));if(p<0)return null;const m=d*this.direction.dot(Fu.cross(yr));if(m<0||p+m>u)return null;const v=-d*yr.dot(Ou);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,o,c,u,d,p,m,v,g,x,M,T,C,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,v,g,x,M,T,C,S)}set(e,n,r,o,c,u,d,p,m,v,g,x,M,T,C,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=T,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=u*v,M=u*g,T=d*v,C=d*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=M+T*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=T+M*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*v,M=p*g,T=m*v,C=m*g;n[0]=x+C*d,n[4]=T*d-M,n[8]=u*m,n[1]=u*g,n[5]=u*v,n[9]=-d,n[2]=M*d-T,n[6]=C+x*d,n[10]=u*p}else if(e.order==="ZXY"){const x=p*v,M=p*g,T=m*v,C=m*g;n[0]=x-C*d,n[4]=-u*g,n[8]=T+M*d,n[1]=M+T*d,n[5]=u*v,n[9]=C-x*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const x=u*v,M=u*g,T=d*v,C=d*g;n[0]=p*v,n[4]=T*m-M,n[8]=x*m+C,n[1]=p*g,n[5]=C*m+x,n[9]=M*m-T,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,M=u*m,T=d*p,C=d*m;n[0]=p*v,n[4]=C-x*g,n[8]=T*g+M,n[1]=g,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*g+T,n[10]=x-C*g}else if(e.order==="XZY"){const x=u*p,M=u*m,T=d*p,C=d*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=x*g+C,n[5]=u*v,n[9]=M*g-T,n[2]=T*g-M,n[6]=d*v,n[10]=C*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iv,e,rv)}lookAt(e,n,r){const o=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Mr.crossVectors(r,Wn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Mr.crossVectors(r,Wn)),Mr.normalize(),hl.crossVectors(Wn,Mr),o[0]=Mr.x,o[4]=hl.x,o[8]=Wn.x,o[1]=Mr.y,o[5]=hl.y,o[9]=Wn.y,o[2]=Mr.z,o[6]=hl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],x=r[9],M=r[13],T=r[2],C=r[6],S=r[10],_=r[14],L=r[3],N=r[7],P=r[11],D=r[15],F=o[0],O=o[4],$=o[8],w=o[12],b=o[1],V=o[5],G=o[9],q=o[13],ne=o[2],fe=o[6],te=o[10],K=o[14],Y=o[3],de=o[7],se=o[11],U=o[15];return c[0]=u*F+d*b+p*ne+m*Y,c[4]=u*O+d*V+p*fe+m*de,c[8]=u*$+d*G+p*te+m*se,c[12]=u*w+d*q+p*K+m*U,c[1]=v*F+g*b+x*ne+M*Y,c[5]=v*O+g*V+x*fe+M*de,c[9]=v*$+g*G+x*te+M*se,c[13]=v*w+g*q+x*K+M*U,c[2]=T*F+C*b+S*ne+_*Y,c[6]=T*O+C*V+S*fe+_*de,c[10]=T*$+C*G+S*te+_*se,c[14]=T*w+C*q+S*K+_*U,c[3]=L*F+N*b+P*ne+D*Y,c[7]=L*O+N*V+P*fe+D*de,c[11]=L*$+N*G+P*te+D*se,c[15]=L*w+N*q+P*K+D*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],M=e[14],T=e[3],C=e[7],S=e[11],_=e[15],L=p*M-m*x,N=d*M-m*g,P=d*x-p*g,D=u*M-m*v,F=u*x-p*v,O=u*g-d*v;return n*(C*L-S*N+_*P)-r*(T*L-S*D+_*F)+o*(T*N-C*D+_*O)-c*(T*P-C*F+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],M=e[11],T=e[12],C=e[13],S=e[14],_=e[15],L=g*S*m-C*x*m+C*p*M-d*S*M-g*p*_+d*x*_,N=T*x*m-v*S*m-T*p*M+u*S*M+v*p*_-u*x*_,P=v*C*m-T*g*m+T*d*M-u*C*M-v*d*_+u*g*_,D=T*g*p-v*C*p-T*d*x+u*C*x+v*d*S-u*g*S,F=n*L+r*N+o*P+c*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=L*O,e[1]=(C*x*c-g*S*c-C*o*M+r*S*M+g*o*_-r*x*_)*O,e[2]=(d*S*c-C*p*c+C*o*m-r*S*m-d*o*_+r*p*_)*O,e[3]=(g*p*c-d*x*c-g*o*m+r*x*m+d*o*M-r*p*M)*O,e[4]=N*O,e[5]=(v*S*c-T*x*c+T*o*M-n*S*M-v*o*_+n*x*_)*O,e[6]=(T*p*c-u*S*c-T*o*m+n*S*m+u*o*_-n*p*_)*O,e[7]=(u*x*c-v*p*c+v*o*m-n*x*m-u*o*M+n*p*M)*O,e[8]=P*O,e[9]=(T*g*c-v*C*c-T*r*M+n*C*M+v*r*_-n*g*_)*O,e[10]=(u*C*c-T*d*c+T*r*m-n*C*m-u*r*_+n*d*_)*O,e[11]=(v*d*c-u*g*c-v*r*m+n*g*m+u*r*M-n*d*M)*O,e[12]=D*O,e[13]=(v*C*o-T*g*o+T*r*x-n*C*x-v*r*S+n*g*S)*O,e[14]=(T*d*o-u*C*o-T*r*p+n*C*p+u*r*S-n*d*S)*O,e[15]=(u*g*o-v*d*o+v*r*p-n*g*p-u*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*u,0,m*p-o*d,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,g=d+d,x=c*m,M=c*v,T=c*g,C=u*v,S=u*g,_=d*g,L=p*m,N=p*v,P=p*g,D=r.x,F=r.y,O=r.z;return o[0]=(1-(C+_))*D,o[1]=(M+P)*D,o[2]=(T-N)*D,o[3]=0,o[4]=(M-P)*F,o[5]=(1-(x+_))*F,o[6]=(S+L)*F,o[7]=0,o[8]=(T+N)*O,o[9]=(S-L)*O,o[10]=(1-(x+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Ns.set(o[0],o[1],o[2]).length();const u=Ns.set(o[4],o[5],o[6]).length(),d=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),di.copy(this);const m=1/c,v=1/u,g=1/d;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=g,di.elements[9]*=g,di.elements[10]*=g,n.setFromRotationMatrix(di),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=bi,p=!1){const m=this.elements,v=2*c/(n-e),g=2*c/(r-o),x=(n+e)/(n-e),M=(r+o)/(r-o);let T,C;if(p)T=c/(u-c),C=u*c/(u-c);else if(d===bi)T=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===kl)T=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=bi,p=!1){const m=this.elements,v=2/(n-e),g=2/(r-o),x=-(n+e)/(n-e),M=-(r+o)/(r-o);let T,C;if(p)T=1/(u-c),C=u/(u-c);else if(d===bi)T=-2/(u-c),C=-(u+c)/(u-c);else if(d===kl)T=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=g,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new ee,di=new qt,iv=new ee(0,0,0),rv=new ee(1,1,1),Mr=new ee,hl=new ee,Wn=new ee,tm=new qt,nm=new Ka;class Di{constructor(e=0,n=0,r=0,o=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],v=o[9],g=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sv=0;const im=new ee,Ds=new Ka,Xi=new qt,pl=new ee,Oa=new ee,av=new ee,ov=new Ka,rm=new ee(1,0,0),sm=new ee(0,1,0),am=new ee(0,0,1),om={type:"added"},lv={type:"removed"},Is={type:"childadded",child:null},ku={type:"childremoved",child:null};class mn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new ee,n=new Di,r=new Ka,o=new ee(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new ut}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?pl.copy(e):pl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Oa,pl,this.up):Xi.lookAt(pl,Oa,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Ds.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Is.child=e,this.dispatchEvent(Is),Is.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lv),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),g=u(e.shapes),x=u(e.skeletons),M=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}mn.DEFAULT_UP=new ee(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ee,ji=new ee,Bu=new ee,qi=new ee,Us=new ee,Fs=new ee,lm=new ee,zu=new ee,Vu=new ee,Hu=new ee,Gu=new Kt,Wu=new Kt,Xu=new Kt;class mi{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),hi.subVectors(e,n),o.cross(hi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){hi.subVectors(o,n),ji.subVectors(r,n),Bu.subVectors(e,n);const u=hi.dot(hi),d=hi.dot(ji),p=hi.dot(Bu),m=ji.dot(ji),v=ji.dot(Bu),g=u*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(m*p-d*v)*x,T=(u*v-d*p)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,qi.x),p.addScaledVector(u,qi.y),p.addScaledVector(d,qi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Gu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Gu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Gu,c.x),u.addScaledVector(Wu,c.y),u.addScaledVector(Xu,c.z),u}static isFrontFacing(e,n,r,o){return hi.subVectors(r,n),ji.subVectors(e,n),hi.cross(ji).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return mi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Us.subVectors(o,r),Fs.subVectors(c,r),zu.subVectors(e,r);const p=Us.dot(zu),m=Fs.dot(zu);if(p<=0&&m<=0)return n.copy(r);Vu.subVectors(e,o);const v=Us.dot(Vu),g=Fs.dot(Vu);if(v>=0&&g<=v)return n.copy(o);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Us,u);Hu.subVectors(e,c);const M=Us.dot(Hu),T=Fs.dot(Hu);if(T>=0&&M<=T)return n.copy(c);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Fs,d);const S=v*T-M*g;if(S<=0&&g-v>=0&&M-T>=0)return lm.subVectors(c,o),d=(g-v)/(g-v+(M-T)),n.copy(o).addScaledVector(lm,d);const _=1/(S+C+x);return u=C*_,d=x*_,n.copy(r).addScaledVector(Us,u).addScaledVector(Fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},ml={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=$_(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=ju(u,c,e+1/3),this.g=ju(u,c,e),this.b=ju(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=ni){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Tt.workingToColorSpace(Mn.copy(this),e),Math.round(xt(Mn.r*255,0,255))*65536+Math.round(xt(Mn.g*255,0,255))*256+Math.round(xt(Mn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,o=Mn.g,c=Mn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const g=u-d;switch(m=v<=.5?g/(u+d):g/(2-u-d),u){case r:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-r)/g+2;break;case c:p=(r-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ni){Tt.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(ml);const r=Ru(Er.h,ml.h,n),o=Ru(Er.s,ml.s,n),c=Ru(Er.l,ml.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new wt;wt.NAMES=dg;let cv=0;class $s extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Vs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=of,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==af&&(r.blendSrc=this.blendSrc),this.blendDst!==of&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wa extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ee,gl=new bt;let uv=0;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Yp,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ia(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array),c=On(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class hg extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class pg extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Pn extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let fv=0;const ti=new qt,qu=new mn,Os=new ee,Xn=new Za,ka=new Za,fn=new ee;class qn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?pg:hg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,r){return ti.makeTranslation(e,n,r),this.applyMatrix4(ti),this}scale(e,n,r){return ti.makeScale(e,n,r),this.applyMatrix4(ti),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Xn.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];ka.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Xn.min,ka.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,ka.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(ka.min),Xn.expandByPoint(ka.max))}Xn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)fn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(fn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)fn.fromBufferAttribute(d,m),p&&(Os.fromBufferAttribute(e,m),fn.add(Os)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let $=0;$<r.count;$++)d[$]=new ee,p[$]=new ee;const m=new ee,v=new ee,g=new ee,x=new bt,M=new bt,T=new bt,C=new ee,S=new ee;function _($,w,b){m.fromBufferAttribute(r,$),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),x.fromBufferAttribute(c,$),M.fromBufferAttribute(c,w),T.fromBufferAttribute(c,b),v.sub(m),g.sub(m),M.sub(x),T.sub(x);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(V),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(V),d[$].add(C),d[w].add(C),d[b].add(C),p[$].add(S),p[w].add(S),p[b].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let $=0,w=L.length;$<w;++$){const b=L[$],V=b.start,G=b.count;for(let q=V,ne=V+G;q<ne;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const N=new ee,P=new ee,D=new ee,F=new ee;function O($){D.fromBufferAttribute(o,$),F.copy(D);const w=d[$];N.copy(w),N.sub(D.multiplyScalar(D.dot(w))).normalize(),P.crossVectors(F,w);const V=P.dot(p[$])<0?-1:1;u.setXYZW($,N.x,N.y,N.z,V)}for(let $=0,w=L.length;$<w;++$){const b=L[$],V=b.start,G=b.count;for(let q=V,ne=V+G;q<ne;q+=3)O(e.getX(q+0)),O(e.getX(q+1)),O(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ee,c=new ee,u=new ee,d=new ee,p=new ee,m=new ee,v=new ee,g=new ee;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)fn.fromBufferAttribute(e,n),fn.normalize(),e.setXYZ(n,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(p.length*v);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*v;for(let _=0;_<v;_++)x[T++]=m[M++]}return new _i(x,v,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],M=e(x,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const M=m[g];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new qt,Yr=new ug,_l=new Vl,um=new ee,vl=new ee,xl=new ee,Sl=new ee,Yu=new ee,yl=new ee,fm=new ee,Ml=new ee;class Gt extends mn{constructor(e=new qn,n=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){yl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Yu.fromBufferAttribute(g,e),u?yl.addScaledVector(Yu,v):yl.addScaledVector(Yu.sub(n),v))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(_l.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(_l,um)===null||Yr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const S=x[T],_=u[S.materialIndex],L=Math.max(S.start,M.start),N=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let P=L,D=N;P<D;P+=3){const F=d.getX(P),O=d.getX(P+1),$=d.getX(P+2);o=El(this,_,e,r,m,v,g,F,O,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=T,_=C;S<_;S+=3){const L=d.getX(S),N=d.getX(S+1),P=d.getX(S+2);o=El(this,u,e,r,m,v,g,L,N,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const S=x[T],_=u[S.materialIndex],L=Math.max(S.start,M.start),N=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let P=L,D=N;P<D;P+=3){const F=P,O=P+1,$=P+2;o=El(this,_,e,r,m,v,g,F,O,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,_=C;S<_;S+=3){const L=S,N=S+1,P=S+2;o=El(this,u,e,r,m,v,g,L,N,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function dv(s,e,n,r,o,c,u,d){let p;if(e.side===kn?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===Rr,d),p===null)return null;Ml.copy(d),Ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Ml);return m<n.near||m>n.far?null:{distance:m,point:Ml.clone(),object:s}}function El(s,e,n,r,o,c,u,d,p,m){s.getVertexPosition(d,vl),s.getVertexPosition(p,xl),s.getVertexPosition(m,Sl);const v=dv(s,e,n,r,vl,xl,Sl,fm);if(v){const g=new ee;mi.getBarycoord(fm,vl,xl,Sl,g),o&&(v.uv=mi.getInterpolatedAttribute(o,d,p,m,g,new bt)),c&&(v.uv1=mi.getInterpolatedAttribute(c,d,p,m,g,new bt)),u&&(v.normal=mi.getInterpolatedAttribute(u,d,p,m,g,new ee),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ee,materialIndex:0};mi.getNormal(vl,xl,Sl,x.normal),v.face=x,v.barycoord=g}return v}class Cr extends qn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],g=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(g,2));function T(C,S,_,L,N,P,D,F,O,$,w){const b=P/O,V=D/$,G=P/2,q=D/2,ne=F/2,fe=O+1,te=$+1;let K=0,Y=0;const de=new ee;for(let se=0;se<te;se++){const U=se*V-q;for(let le=0;le<fe;le++){const Re=le*b-G;de[C]=Re*L,de[S]=U*N,de[_]=ne,m.push(de.x,de.y,de.z),de[C]=0,de[S]=0,de[_]=F>0?1:-1,v.push(de.x,de.y,de.z),g.push(le/O),g.push(1-se/$),K+=1}}for(let se=0;se<$;se++)for(let U=0;U<O;U++){const le=x+U+fe*se,Re=x+U+fe*(se+1),Ge=x+(U+1)+fe*(se+1),$e=x+(U+1)+fe*se;p.push(le,Re,$e),p.push(Re,Ge,$e),Y+=6}d.addGroup(M,Y,w),M+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const o in r)e[o]=r[o]}return e}function hv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const pv={clone:qs,merge:bn};var mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=hv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gg extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new ee,dm=new bt,hm=new bt;class ii extends gg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zf*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,dm,hm),n.subVectors(hm,dm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Bs=1;class _v extends mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(ks,Bs,e,n);o.layers=this.layers,this.add(o);const c=new ii(ks,Bs,e,n);c.layers=this.layers,this.add(c);const u=new ii(ks,Bs,e,n);u.layers=this.layers,this.add(u);const d=new ii(ks,Bs,e,n);d.layers=this.layers,this.add(d);const p=new ii(ks,Bs,e,n);p.layers=this.layers,this.add(p);const m=new ii(ks,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(g,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class _g extends Tn{constructor(e=[],n=is,r,o,c,u,d,p,m,v){super(e,n,r,o,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vg extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new _g(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Cr(5,5,5),c=new Ii({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:$i});c.uniforms.tEquirect.value=n;const u=new Gt(o,c),d=n.minFilter;return n.minFilter===ts&&(n.minFilter=En),new _v(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class wi extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),_=this._getHandJoint(m,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new wi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class dd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=n}clone(){return new dd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xv extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Sv extends Tn{constructor(e=null,n=1,r=1,o,c,u,d,p,m=pn,v=pn,g,x){super(null,u,d,p,m,v,o,c,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=new ee,yv=new ee,Mv=new ut;class Qr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ku.subVectors(r,n).cross(yv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ku),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Mv.getNormalMatrix(e),o=this.coplanarPoint(Ku).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Vl,Ev=new bt(.5,.5),Tl=new ee;class hd{constructor(e=new Qr,n=new Qr,r=new Qr,o=new Qr,c=new Qr,u=new Qr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=bi,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],v=c[4],g=c[5],x=c[6],M=c[7],T=c[8],C=c[9],S=c[10],_=c[11],L=c[12],N=c[13],P=c[14],D=c[15];if(o[0].setComponents(m-u,M-v,_-T,D-L).normalize(),o[1].setComponents(m+u,M+v,_+T,D+L).normalize(),o[2].setComponents(m+d,M+g,_+C,D+N).normalize(),o[3].setComponents(m-d,M-g,_-C,D-N).normalize(),r)o[4].setComponents(p,x,S,P).normalize(),o[5].setComponents(m-p,M-x,_-S,D-P).normalize();else if(o[4].setComponents(m-p,M-x,_-S,D-P).normalize(),n===bi)o[5].setComponents(m+p,M+x,_+S,D+P).normalize();else if(n===kl)o[5].setComponents(p,x,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const n=Ev.distanceTo(e.center);return $r.radius=.7071067811865476+n,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xg extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pm=new qt,Qf=new ug,wl=new Vl,Al=new ee;class Tv extends mn{constructor(e=new qn,n=new xg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(o),wl.radius+=c,e.ray.intersectsSphere(wl)===!1)return;pm.copy(o).invert(),Qf.copy(e.ray).applyMatrix4(pm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=x,C=M;T<C;T++){const S=m.getX(T);Al.fromBufferAttribute(g,S),mm(Al,S,p,o,e,n,this)}}else{const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=x,C=M;T<C;T++)Al.fromBufferAttribute(g,T),mm(Al,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function mm(s,e,n,r,o,c,u){const d=Qf.distanceSqToPoint(s);if(d<n){const p=new ee;Qf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class wv extends Tn{constructor(e,n,r,o,c,u,d,p,m){super(e,n,r,o,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ya extends Tn{constructor(e,n,r=Ni,o,c,u,d=pn,p=pn,m,v=Qi,g=1){if(v!==Qi&&v!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,o,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Av extends Ya{constructor(e,n=Ni,r=is,o,c,u=pn,d=pn,p,m=Qi){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,o,c,u,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sg extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pd extends qn{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],x=[],M=[];let T=0;const C=[],S=r/2;let _=0;L(),u===!1&&(e>0&&N(!0),n>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(M,2));function L(){const P=new ee,D=new ee;let F=0;const O=(n-e)/r;for(let $=0;$<=c;$++){const w=[],b=$/c,V=b*(n-e)+e;for(let G=0;G<=o;G++){const q=G/o,ne=q*p+d,fe=Math.sin(ne),te=Math.cos(ne);D.x=V*fe,D.y=-b*r+S,D.z=V*te,g.push(D.x,D.y,D.z),P.set(fe,O,te).normalize(),x.push(P.x,P.y,P.z),M.push(q,1-b),w.push(T++)}C.push(w)}for(let $=0;$<o;$++)for(let w=0;w<c;w++){const b=C[w][$],V=C[w+1][$],G=C[w+1][$+1],q=C[w][$+1];(e>0||w!==0)&&(v.push(b,V,q),F+=3),(n>0||w!==c-1)&&(v.push(V,G,q),F+=3)}m.addGroup(_,F,0),_+=F}function N(P){const D=T,F=new bt,O=new ee;let $=0;const w=P===!0?e:n,b=P===!0?1:-1;for(let G=1;G<=o;G++)g.push(0,S*b,0),x.push(0,b,0),M.push(.5,.5),T++;const V=T;for(let G=0;G<=o;G++){const ne=G/o*p+d,fe=Math.cos(ne),te=Math.sin(ne);O.x=w*te,O.y=S*b,O.z=w*fe,g.push(O.x,O.y,O.z),x.push(0,b,0),F.x=fe*.5+.5,F.y=te*.5*b+.5,M.push(F.x,F.y),T++}for(let G=0;G<o;G++){const q=D+G,ne=V+G;P===!0?v.push(ne,ne+1,q):v.push(ne+1,ne,q),$+=3}m.addGroup(_,$,P===!0?1:2),_+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class md extends pd{constructor(e=1,n=1,r=32,o=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,r,o,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new md(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qa extends qn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,g=e/d,x=n/p,M=[],T=[],C=[],S=[];for(let _=0;_<v;_++){const L=_*x-u;for(let N=0;N<m;N++){const P=N*g-c;T.push(P,-L,0),C.push(0,0,1),S.push(N/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<d;L++){const N=L+m*_,P=L+m*(_+1),D=L+1+m*(_+1),F=L+1+m*_;M.push(N,P,F),M.push(P,D,F)}this.setIndex(M),this.setAttribute("position",new Pn(T,3)),this.setAttribute("normal",new Pn(C,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class pi extends qn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const v=[],g=new ee,x=new ee,M=[],T=[],C=[],S=[];for(let _=0;_<=r;_++){const L=[],N=_/r;let P=0;_===0&&u===0?P=.5/n:_===r&&p===Math.PI&&(P=-.5/n);for(let D=0;D<=n;D++){const F=D/n;g.x=-e*Math.cos(o+F*c)*Math.sin(u+N*d),g.y=e*Math.cos(u+N*d),g.z=e*Math.sin(o+F*c)*Math.sin(u+N*d),T.push(g.x,g.y,g.z),x.copy(g).normalize(),C.push(x.x,x.y,x.z),S.push(F+P,1-N),L.push(m++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<n;L++){const N=v[_][L+1],P=v[_][L],D=v[_+1][L],F=v[_+1][L+1];(_!==0||u>0)&&M.push(N,P,F),(_!==r-1||p<Math.PI)&&M.push(P,D,F)}this.setIndex(M),this.setAttribute("position",new Pn(T,3)),this.setAttribute("normal",new Pn(C,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cv extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ba extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=og,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rv extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bv extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yg extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Zu=new qt,gm=new ee,_m=new ee;class Pv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hd,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(gm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gd extends gg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Lv extends Pv{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends yg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Lv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Nv extends yg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dv extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Iv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(s,e,n,r){const o=Uv(r);switch(n){case rg:return s*e;case ag:return s*e/o.components*o.byteLength;case ad:return s*e/o.components*o.byteLength;case Xs:return s*e*2/o.components*o.byteLength;case od:return s*e*2/o.components*o.byteLength;case sg:return s*e*3/o.components*o.byteLength;case gi:return s*e*4/o.components*o.byteLength;case ld:return s*e*4/o.components*o.byteLength;case Ll:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Mf:return Math.max(s,16)*Math.max(e,8)/4;case xf:case yf:return Math.max(s,8)*Math.max(e,8)/2;case Ef:case Tf:case Af:case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wf:case Rf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wf:case Xf:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $f:case Kf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Uv(s){switch(s){case jn:case eg:return{byteLength:1,components:1};case Xa:case tg:case Zi:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case Ni:case id:case Ri:return{byteLength:4,components:1};case ng:case ig:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Fv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,g=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(s.bindBuffer(m,d),g.length===0)s.bufferSubData(m,0,v);else{g.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<g.length;M++){const T=g[x],C=g[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,g[x]=C)}g.length=x+1;for(let M=0,T=g.length;M<T;M++){const C=g[M];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var Ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gv=`#ifdef USE_AOMAP
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
#endif`,Wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xv=`#ifdef USE_BATCHING
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
#endif`,jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kv=`#ifdef USE_IRIDESCENCE
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
#endif`,Zv=`#ifdef USE_BUMPMAP
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ax=`#define PI 3.141592653589793
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
} // validated`,ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
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
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
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
#endif`,Ux=`uniform sampler2D dfgLUT;
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
}`,Fx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jx=`#if defined( USE_POINTS_UV )
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
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sS=`#ifdef USE_NORMALMAP
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
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,MS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ES=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,AS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
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
}`,GS=`#if DEPTH_PACKING == 3200
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
}`,WS=`#define DISTANCE
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
}`,XS=`#define DISTANCE
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`uniform float scale;
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
}`,$S=`uniform vec3 diffuse;
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
}`,KS=`#include <common>
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
}`,ZS=`uniform vec3 diffuse;
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
}`,QS=`#define LAMBERT
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
}`,JS=`#define LAMBERT
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
}`,ey=`#define MATCAP
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
}`,ty=`#define MATCAP
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
}`,ny=`#define NORMAL
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
}`,iy=`#define NORMAL
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
}`,ry=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,ay=`#define STANDARD
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
}`,oy=`#define STANDARD
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
}`,ly=`#define TOON
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
}`,cy=`#define TOON
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
}`,uy=`uniform float size;
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
}`,fy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,py=`uniform float rotation;
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
}`,my=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Ov,alphahash_pars_fragment:kv,alphamap_fragment:Bv,alphamap_pars_fragment:zv,alphatest_fragment:Vv,alphatest_pars_fragment:Hv,aomap_fragment:Gv,aomap_pars_fragment:Wv,batching_pars_vertex:Xv,batching_vertex:jv,begin_vertex:qv,beginnormal_vertex:Yv,bsdfs:$v,iridescence_fragment:Kv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:Jv,clipping_planes_pars_vertex:ex,clipping_planes_vertex:tx,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:rx,color_vertex:sx,common:ax,cube_uv_reflection_fragment:ox,defaultnormal_vertex:lx,displacementmap_pars_vertex:cx,displacementmap_vertex:ux,emissivemap_fragment:fx,emissivemap_pars_fragment:dx,colorspace_fragment:hx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:vx,envmap_physical_pars_fragment:bx,envmap_vertex:xx,fog_vertex:Sx,fog_pars_vertex:yx,fog_fragment:Mx,fog_pars_fragment:Ex,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:wx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Cx,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:Lx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Ux,lights_fragment_begin:Fx,lights_fragment_maps:Ox,lights_fragment_end:kx,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Hx,map_fragment:Gx,map_pars_fragment:Wx,map_particle_fragment:Xx,map_particle_pars_fragment:jx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:$x,morphcolor_vertex:Kx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Qx,morphtarget_vertex:Jx,normal_fragment_begin:eS,normal_fragment_maps:tS,normal_pars_fragment:nS,normal_pars_vertex:iS,normal_vertex:rS,normalmap_pars_fragment:sS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:lS,iridescence_pars_fragment:cS,opaque_fragment:uS,packing:fS,premultiplied_alpha_fragment:dS,project_vertex:hS,dithering_fragment:pS,dithering_pars_fragment:mS,roughnessmap_fragment:gS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:vS,shadowmap_pars_vertex:xS,shadowmap_vertex:SS,shadowmask_pars_fragment:yS,skinbase_vertex:MS,skinning_pars_vertex:ES,skinning_vertex:TS,skinnormal_vertex:wS,specularmap_fragment:AS,specularmap_pars_fragment:CS,tonemapping_fragment:RS,tonemapping_pars_fragment:bS,transmission_fragment:PS,transmission_pars_fragment:LS,uv_pars_fragment:NS,uv_pars_vertex:DS,uv_vertex:IS,worldpos_vertex:US,background_vert:FS,background_frag:OS,backgroundCube_vert:kS,backgroundCube_frag:BS,cube_vert:zS,cube_frag:VS,depth_vert:HS,depth_frag:GS,distance_vert:WS,distance_frag:XS,equirect_vert:jS,equirect_frag:qS,linedashed_vert:YS,linedashed_frag:$S,meshbasic_vert:KS,meshbasic_frag:ZS,meshlambert_vert:QS,meshlambert_frag:JS,meshmatcap_vert:ey,meshmatcap_frag:ty,meshnormal_vert:ny,meshnormal_frag:iy,meshphong_vert:ry,meshphong_frag:sy,meshphysical_vert:ay,meshphysical_frag:oy,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:uy,points_frag:fy,shadow_vert:dy,shadow_frag:hy,sprite_vert:py,sprite_frag:my},Ue={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ai={basic:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:bn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:bn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:bn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:bn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:bn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:bn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:bn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:bn([Ue.lights,Ue.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ai.physical={uniforms:bn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Cl={r:0,b:0,g:0},Kr=new Di,gy=new qt;function _y(s,e,n,r,o,c,u){const d=new wt(0);let p=c===!0?0:1,m,v,g=null,x=0,M=null;function T(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function C(N){let P=!1;const D=T(N);D===null?_(d,p):D&&D.isColor&&(_(D,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,P){const D=T(P);D&&(D.isCubeTexture||D.mapping===zl)?(v===void 0&&(v=new Gt(new Cr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:qs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,O,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Kr.copy(P.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Kr)),v.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Dt,(g!==D||x!==D.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=D,x=D.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Gt(new Qa(2,2),new Ii({name:"BackgroundMaterial",uniforms:qs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||x!==D.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,g=D,x=D.version,M=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,P){N.getRGB(Cl,mg(s)),r.buffers.color.setClear(Cl.r,Cl.g,Cl.b,P,u)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,_(d,p)},render:C,addToRenderList:S,dispose:L}}function vy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function d(b,V,G,q,ne){let fe=!1;const te=g(q,G,V);c!==te&&(c=te,m(c.object)),fe=M(b,q,G,ne),fe&&T(b,q,G,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,P(b,V,G,q),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function p(){return s.createVertexArray()}function m(b){return s.bindVertexArray(b)}function v(b){return s.deleteVertexArray(b)}function g(b,V,G){const q=G.wireframe===!0;let ne=r[b.id];ne===void 0&&(ne={},r[b.id]=ne);let fe=ne[V.id];fe===void 0&&(fe={},ne[V.id]=fe);let te=fe[q];return te===void 0&&(te=x(p()),fe[q]=te),te}function x(b){const V=[],G=[],q=[];for(let ne=0;ne<n;ne++)V[ne]=0,G[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:q,object:b,attributes:{},index:null}}function M(b,V,G,q){const ne=c.attributes,fe=V.attributes;let te=0;const K=G.getAttributes();for(const Y in K)if(K[Y].location>=0){const se=ne[Y];let U=fe[Y];if(U===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;te++}return c.attributesNum!==te||c.index!==q}function T(b,V,G,q){const ne={},fe=V.attributes;let te=0;const K=G.getAttributes();for(const Y in K)if(K[Y].location>=0){let se=fe[Y];se===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ne[Y]=U,te++}c.attributes=ne,c.attributesNum=te,c.index=q}function C(){const b=c.newAttributes;for(let V=0,G=b.length;V<G;V++)b[V]=0}function S(b){_(b,0)}function _(b,V){const G=c.newAttributes,q=c.enabledAttributes,ne=c.attributeDivisors;G[b]=1,q[b]===0&&(s.enableVertexAttribArray(b),q[b]=1),ne[b]!==V&&(s.vertexAttribDivisor(b,V),ne[b]=V)}function L(){const b=c.newAttributes,V=c.enabledAttributes;for(let G=0,q=V.length;G<q;G++)V[G]!==b[G]&&(s.disableVertexAttribArray(G),V[G]=0)}function N(b,V,G,q,ne,fe,te){te===!0?s.vertexAttribIPointer(b,V,G,ne,fe):s.vertexAttribPointer(b,V,G,q,ne,fe)}function P(b,V,G,q){C();const ne=q.attributes,fe=G.getAttributes(),te=V.defaultAttributeValues;for(const K in fe){const Y=fe[K];if(Y.location>=0){let de=ne[K];if(de===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const se=de.normalized,U=de.itemSize,le=e.get(de);if(le===void 0)continue;const Re=le.buffer,Ge=le.type,$e=le.bytesPerElement,ie=Ge===s.INT||Ge===s.UNSIGNED_INT||de.gpuType===id;if(de.isInterleavedBufferAttribute){const he=de.data,Se=he.stride,ke=de.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<Y.locationSize;De++)_(Y.location+De,he.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<Y.locationSize;De++)S(Y.location+De);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let De=0;De<Y.locationSize;De++)N(Y.location+De,U/Y.locationSize,Ge,se,Se*$e,(ke+U/Y.locationSize*De)*$e,ie)}else{if(de.isInstancedBufferAttribute){for(let he=0;he<Y.locationSize;he++)_(Y.location+he,de.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let he=0;he<Y.locationSize;he++)S(Y.location+he);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let he=0;he<Y.locationSize;he++)N(Y.location+he,U/Y.locationSize,Ge,se,U*$e,U/Y.locationSize*he*$e,ie)}}else if(te!==void 0){const se=te[K];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(Y.location,se);break;case 3:s.vertexAttrib3fv(Y.location,se);break;case 4:s.vertexAttrib4fv(Y.location,se);break;default:s.vertexAttrib1fv(Y.location,se)}}}}L()}function D(){$();for(const b in r){const V=r[b];for(const G in V){const q=V[G];for(const ne in q)v(q[ne].object),delete q[ne];delete V[G]}delete r[b]}}function F(b){if(r[b.id]===void 0)return;const V=r[b.id];for(const G in V){const q=V[G];for(const ne in q)v(q[ne].object),delete q[ne];delete V[G]}delete r[b.id]}function O(b){for(const V in r){const G=r[V];if(G[b.id]===void 0)continue;const q=G[b.id];for(const ne in q)v(q[ne].object),delete q[ne];delete G[b.id]}}function $(){w(),u=!0,c!==o&&(c=o,m(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:$,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:L}}function xy(s,e,n){let r;function o(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,g){g!==0&&(s.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T];n.update(M,r,1)}function p(m,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)u(m[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,g);let T=0;for(let C=0;C<g;C++)T+=v[C]*x[C];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Sy(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==gi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const $=O===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==jn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ri&&!$)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(lt("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:P,maxSamples:D,samples:F}}function yy(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Qr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||o;return o=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,M){const T=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!o||T===null||T.length===0||c&&!S)c?v(null):m();else{const L=c?0:r,N=L*4;let P=_.clippingState||null;p.value=P,P=v(T,x,N,M);for(let D=0;D!==N;++D)P[D]=n[D];_.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,M,T){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const _=M+C*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,P=M;N!==C;++N,P+=4)u.copy(g[N]).applyMatrix4(L,d),u.normal.toArray(S,P),S[P+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function My(s){let e=new WeakMap;function n(u,d){return d===mf?u.mapping=is:d===gf&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===mf||d===gf)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new vg(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ar=4,Sm=[.125,.215,.35,.446,.526,.582],es=20,Ey=256,za=new gd,ym=new wt;let Qu=null,Ju=0,ef=0,tf=!1;const Ty=new ee;class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=Ty}=c;Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,Ju,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:Zi,format:gi,colorSpace:js,depthBuffer:!1},o=Em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wy(c)),this._blurMaterial=Cy(c,e,n),this._ggxMaterial=Ay(c,e,n)}return o}_compileMaterial(e){const n=new Gt(new qn,e);this._renderer.compile(n,za)}_sceneToCubeUV(e,n,r,o,c){const p=new ii(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(ym),g.toneMapping=Pi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Cr,new Wa({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,_=!0):(S.color.copy(ym),_=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[N],c.y,c.z)):P===1?(p.up.set(0,0,m[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[N],c.z)):(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[N]));const D=this._cubeSize;zs(o,P*D,N>2?D:0,D,D),g.setRenderTarget(o),_&&g.render(C,p),g.render(e,p)}g.toneMapping=M,g.autoClear=x,e.background=L}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===is||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;zs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,za)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),x=0+m*1.25,M=g*x,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-Ar?r-T+Ar:0),_=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-n,zs(c,S,_,3*C,2*C),o.setRenderTarget(c),o.render(d,za),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,zs(e,S,_,3*C,2*C),o.setRenderTarget(e),o.render(d,za)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*es-1),C=c/T,S=isFinite(c)?1+Math.floor(v*C):es;S>es&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${es}`);const _=[];let L=0;for(let O=0;O<es;++O){const $=O/C,w=Math.exp(-$*$/2);_.push(w),O===0?L+=w:O<S&&(L+=2*w)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-r;const P=this._sizeLods[o],D=3*P*(o>N-Ar?o-N+Ar:0),F=4*(this._cubeSize-P);zs(n,D,F,3*P,2*P),p.setRenderTarget(n),p.render(g,za)}}function wy(s){const e=[],n=[],r=[];let o=s;const c=s-Ar+1+Sm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-Ar?p=Sm[u-s+Ar-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,T=6,C=3,S=2,_=1,L=new Float32Array(C*T*M),N=new Float32Array(S*T*M),P=new Float32Array(_*T*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,$=F>2?0:-1,w=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];L.set(w,C*T*F),N.set(x,S*T*F);const b=[F,F,F,F,F,F];P.set(b,_*T*F)}const D=new qn;D.setAttribute("position",new _i(L,C)),D.setAttribute("uv",new _i(N,S)),D.setAttribute("faceIndex",new _i(P,_)),r.push(new Gt(D,null)),o>Ar&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Em(s,e,n){const r=new Li(s,e,n);return r.texture.mapping=zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Ay(s,e,n){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Cy(s,e,n){const r=new Float32Array(es),o=new ee(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Tm(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function wm(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function Ry(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===mf||p===gf,v=p===is||p===Ws;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Mm(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new Mm(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function by(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qa("WebGLRenderer: "+r+" extension not supported."),o}}}function Py(s,e,n,r){const o={},c=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function p(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(g){const x=[],M=g.index,T=g.attributes.position;let C=0;if(M!==null){const L=M.array;C=M.version;for(let N=0,P=L.length;N<P;N+=3){const D=L[N+0],F=L[N+1],O=L[N+2];x.push(D,F,F,O,O,D)}}else if(T!==void 0){const L=T.array;C=T.version;for(let N=0,P=L.length/3-1;N<P;N+=3){const D=N+0,F=N+1,O=N+2;x.push(D,F,F,O,O,D)}}else return;const S=new(lg(x)?pg:hg)(x,1);S.version=C;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function Ly(s,e,n){let r;function o(x){r=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function p(x,M){s.drawElements(r,M,c,x*u),n.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*u,T),n.update(M,r,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let S=0;for(let _=0;_<T;_++)S+=M[_];n.update(S,r,1)}function g(x,M,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/u,M[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,T);let _=0;for(let L=0;L<T;L++)_+=M[L]*C[L];n.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Ny(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Dy(s,e,n){const r=new WeakMap,o=new Kt;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let b=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),S===!0&&(P=3);let D=d.attributes.position.count*P,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*F*4*g),$=new cg(O,D,F,g);$.type=Ri,$.needsUpdate=!0;const w=P*4;for(let V=0;V<g;V++){const G=_[V],q=L[V],ne=N[V],fe=D*F*4*V;for(let te=0;te<G.count;te++){const K=te*w;T===!0&&(o.fromBufferAttribute(G,te),O[fe+K+0]=o.x,O[fe+K+1]=o.y,O[fe+K+2]=o.z,O[fe+K+3]=0),C===!0&&(o.fromBufferAttribute(q,te),O[fe+K+4]=o.x,O[fe+K+5]=o.y,O[fe+K+6]=o.z,O[fe+K+7]=0),S===!0&&(o.fromBufferAttribute(ne,te),O[fe+K+8]=o.x,O[fe+K+9]=o.y,O[fe+K+10]=o.z,O[fe+K+11]=ne.itemSize===4?o.w:1)}}x={count:g,texture:$,size:new bt(D,F)},r.set(d,x),d.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Iy(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return g}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Uy={[jm]:"LINEAR_TONE_MAPPING",[qm]:"REINHARD_TONE_MAPPING",[Ym]:"CINEON_TONE_MAPPING",[$m]:"ACES_FILMIC_TONE_MAPPING",[Zm]:"AGX_TONE_MAPPING",[Qm]:"NEUTRAL_TONE_MAPPING",[Km]:"CUSTOM_TONE_MAPPING"};function Fy(s,e,n,r,o){const c=new Li(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Li(e,n,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),d=new qn;d.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const p=new Cv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Gt(d,p),v=new gd(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,C=null,S=[],_=!1;this.setSize=function(L,N){c.setSize(L,N),u.setSize(L,N);for(let P=0;P<S.length;P++){const D=S[P];D.setSize&&D.setSize(L,N)}},this.setEffects=function(L){S=L,_=S.length>0&&S[0].isRenderPass===!0;const N=c.width,P=c.height;for(let D=0;D<S.length;D++){const F=S[D];F.setSize&&F.setSize(N,P)}},this.begin=function(L,N){if(M||L.toneMapping===Pi&&S.length===0)return!1;if(C=N,N!==null){const P=N.width,D=N.height;(c.width!==P||c.height!==D)&&this.setSize(P,D)}return _===!1&&L.setRenderTarget(c),T=L.toneMapping,L.toneMapping=Pi,!0},this.hasRenderPass=function(){return _},this.end=function(L,N){L.toneMapping=T,M=!0;let P=c,D=u;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(L,D,P,N),O.needsSwap!==!1)){const $=P;P=D,D=$}}if(g!==L.outputColorSpace||x!==L.toneMapping){g=L.outputColorSpace,x=L.toneMapping,p.defines={},Tt.getTransfer(g)===Dt&&(p.defines.SRGB_TRANSFER="");const F=Uy[x];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(C),L.render(m,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const Eg=new Tn,Jf=new Ya(1,1),Tg=new cg,wg=new tv,Ag=new _g,Am=[],Cm=[],Rm=new Float32Array(16),bm=new Float32Array(9),Pm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Am[o];if(c===void 0&&(c=new Float32Array(o),Am[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function rn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=Cm[e];n===void 0&&(n=new Int32Array(e),Cm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Oy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2fv(this.addr,e),sn(n,e)}}function By(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;s.uniform3fv(this.addr,e),sn(n,e)}}function zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4fv(this.addr,e),sn(n,e)}}function Vy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Pm.set(r),s.uniformMatrix2fv(this.addr,!1,Pm),sn(n,r)}}function Hy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;bm.set(r),s.uniformMatrix3fv(this.addr,!1,bm),sn(n,r)}}function Gy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Rm.set(r),s.uniformMatrix4fv(this.addr,!1,Rm),sn(n,r)}}function Wy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Xy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2iv(this.addr,e),sn(n,e)}}function jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3iv(this.addr,e),sn(n,e)}}function qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4iv(this.addr,e),sn(n,e)}}function Yy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2uiv(this.addr,e),sn(n,e)}}function Ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3uiv(this.addr,e),sn(n,e)}}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4uiv(this.addr,e),sn(n,e)}}function Qy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Jf.compareFunction=n.isReversedDepthBuffer()?ud:cd,c=Jf):c=Eg,n.setTexture2D(e||c,o)}function Jy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||wg,o)}function eM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ag,o)}function tM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Tg,o)}function nM(s){switch(s){case 5126:return Oy;case 35664:return ky;case 35665:return By;case 35666:return zy;case 35674:return Vy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return jy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return $y;case 36295:return Ky;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}function iM(s,e){s.uniform1fv(this.addr,e)}function rM(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function sM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function aM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function oM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function lM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function cM(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function uM(s,e){s.uniform1iv(this.addr,e)}function fM(s,e){s.uniform2iv(this.addr,e)}function dM(s,e){s.uniform3iv(this.addr,e)}function hM(s,e){s.uniform4iv(this.addr,e)}function pM(s,e){s.uniform1uiv(this.addr,e)}function mM(s,e){s.uniform2uiv(this.addr,e)}function gM(s,e){s.uniform3uiv(this.addr,e)}function _M(s,e){s.uniform4uiv(this.addr,e)}function vM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=Jf:u=Eg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function xM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||wg,c[u])}function SM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Ag,c[u])}function yM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Tg,c[u])}function MM(s){switch(s){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return aM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return yM}}class EM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=nM(n.type)}}class TM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MM(n.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function Lm(s,e){s.seq.push(e),s.map[e.id]=e}function AM(s,e,n){const r=s.name,o=r.length;for(nf.lastIndex=0;;){const c=nf.exec(r),u=nf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Lm(n,m===void 0?new EM(d,s,e):new TM(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new wM(d),Lm(n,g)),n=g}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);AM(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Nm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const CM=37297;let RM=0;function bM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Dm=new ut;function PM(s){Tt._getMatrix(Dm,Tt.workingColorSpace,s);const e=`mat3( ${Dm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Ol:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Im(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+bM(s.getShaderSource(e),d)}else return c}function LM(s,e){const n=PM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const NM={[jm]:"Linear",[qm]:"Reinhard",[Ym]:"Cineon",[$m]:"ACESFilmic",[Zm]:"AgX",[Qm]:"Neutral",[Km]:"Custom"};function DM(s,e){const n=NM[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new ee;function IM(){Tt.getLuminanceCoefficients(Rl);const s=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function FM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function OM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ga(s){return s!==""}function Um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(s){return s.replace(kM,zM)}const BM=new Map;function zM(s,e){let n=ht[e];if(n===void 0){const r=BM.get(e);if(r!==void 0)n=ht[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ed(n)}const VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(s){return s.replace(VM,HM)}function HM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const GM={[Pl]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function WM(s){return GM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XM={[is]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[zl]:"ENVMAP_TYPE_CUBE_UV"};function jM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":XM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const qM={[Ws]:"ENVMAP_MODE_REFRACTION"};function YM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $M={[Xm]:"ENVMAP_BLENDING_MULTIPLY",[F_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function KM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$M[s.combine]||"ENVMAP_BLENDING_NONE"}function ZM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function QM(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=WM(n),m=jM(n),v=YM(n),g=KM(n),x=ZM(n),M=UM(n),T=FM(c),C=o.createProgram();let S,_,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ga).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ga).join(`
`),_.length>0&&(_+=`
`)):(S=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),_=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?ht.tonemapping_pars_fragment:"",n.toneMapping!==Pi?DM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,LM("linearToOutputTexel",n.outputColorSpace),IM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ga).join(`
`)),u=ed(u),u=Um(u,n),u=Fm(u,n),d=ed(d),d=Um(d,n),d=Fm(d,n),u=Om(u),d=Om(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=L+S+u,P=L+_+d,D=Nm(o,o.VERTEX_SHADER,N),F=Nm(o,o.FRAGMENT_SHADER,P);o.attachShader(C,D),o.attachShader(C,F),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(V){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(C)||"",q=o.getShaderInfoLog(D)||"",ne=o.getShaderInfoLog(F)||"",fe=G.trim(),te=q.trim(),K=ne.trim();let Y=!0,de=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,D,F);else{const se=Im(o,D,"vertex"),U=Im(o,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+se+`
`+U)}else fe!==""?lt("WebGLProgram: Program Info Log:",fe):(te===""||K==="")&&(de=!1);de&&(V.diagnostics={runnable:Y,programLog:fe,vertexShader:{log:te,prefix:S},fragmentShader:{log:K,prefix:_}})}o.deleteShader(D),o.deleteShader(F),$=new Ul(o,C),w=OM(o,C)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(C,CM)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=D,this.fragmentShader=F,this}let JM=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new tE(e),n.set(e,r)),r}}class tE{constructor(e){this.id=JM++,this.code=e,this.usedTimes=0}}function nE(s,e,n,r,o,c,u){const d=new fg,p=new eE,m=new Set,v=[],g=new Map,x=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,b,V,G,q){const ne=G.fog,fe=q.geometry,te=w.isMeshStandardMaterial?G.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||te),Y=K&&K.mapping===zl?K.image.height:null,de=T[w.type];w.precision!==null&&(M=o.getMaxPrecision(w.precision),M!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=se!==void 0?se.length:0;let le=0;fe.morphAttributes.position!==void 0&&(le=1),fe.morphAttributes.normal!==void 0&&(le=2),fe.morphAttributes.color!==void 0&&(le=3);let Re,Ge,$e,ie;if(de){const yt=Ai[de];Re=yt.vertexShader,Ge=yt.fragmentShader}else Re=w.vertexShader,Ge=w.fragmentShader,p.update(w),$e=p.getVertexShaderID(w),ie=p.getFragmentShaderID(w);const he=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),ke=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,ft=!!w.map,Vt=!!w.matcap,ct=!!K,gt=!!w.aoMap,St=!!w.lightMap,it=!!w.bumpMap,Ut=!!w.normalMap,B=!!w.displacementMap,Ot=!!w.emissiveMap,pt=!!w.metalnessMap,_t=!!w.roughnessMap,We=w.anisotropy>0,R=w.clearcoat>0,y=w.dispersion>0,k=w.iridescence>0,ce=w.sheen>0,pe=w.transmission>0,oe=We&&!!w.anisotropyMap,Be=R&&!!w.clearcoatMap,xe=R&&!!w.clearcoatNormalMap,Pe=R&&!!w.clearcoatRoughnessMap,Ze=k&&!!w.iridescenceMap,ge=k&&!!w.iridescenceThicknessMap,Te=ce&&!!w.sheenColorMap,Fe=ce&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Ae=!!w.specularColorMap,et=!!w.specularIntensityMap,W=pe&&!!w.transmissionMap,Le=pe&&!!w.thicknessMap,Ee=!!w.gradientMap,Ie=!!w.alphaMap,ye=w.alphaTest>0,me=!!w.alphaHash,be=!!w.extensions;let st=Pi;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=s.toneMapping);const Nt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Re,fragmentShader:Ge,defines:w.defines,customVertexShaderID:$e,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:ke,instancingColor:ke&&q.instanceColor!==null,instancingMorph:ke&&q.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:js,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:Vt,envMap:ct,envMapMode:ct&&K.mapping,envMapCubeUVHeight:Y,aoMap:gt,lightMap:St,bumpMap:it,normalMap:Ut,displacementMap:B,emissiveMap:Ot,normalMapObjectSpace:Ut&&w.normalMapType===z_,normalMapTangentSpace:Ut&&w.normalMapType===og,metalnessMap:pt,roughnessMap:_t,anisotropy:We,anisotropyMap:oe,clearcoat:R,clearcoatMap:Be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,dispersion:y,iridescence:k,iridescenceMap:Ze,iridescenceThicknessMap:ge,sheen:ce,sheenColorMap:Te,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:et,transmission:pe,transmissionMap:W,thicknessMap:Le,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ye,alphaHash:me,combine:w.combine,mapUv:ft&&C(w.map.channel),aoMapUv:gt&&C(w.aoMap.channel),lightMapUv:St&&C(w.lightMap.channel),bumpMapUv:it&&C(w.bumpMap.channel),normalMapUv:Ut&&C(w.normalMap.channel),displacementMapUv:B&&C(w.displacementMap.channel),emissiveMapUv:Ot&&C(w.emissiveMap.channel),metalnessMapUv:pt&&C(w.metalnessMap.channel),roughnessMapUv:_t&&C(w.roughnessMap.channel),anisotropyMapUv:oe&&C(w.anisotropyMap.channel),clearcoatMapUv:Be&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:xe&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&C(w.sheenRoughnessMap.channel),specularMapUv:Oe&&C(w.specularMap.channel),specularColorMapUv:Ae&&C(w.specularColorMap.channel),specularIntensityMapUv:et&&C(w.specularIntensityMap.channel),transmissionMapUv:W&&C(w.transmissionMap.channel),thicknessMapUv:Le&&C(w.thicknessMap.channel),alphaMapUv:Ie&&C(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ut||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!fe.attributes.uv&&(ft||Ie),fog:!!ne,useFog:w.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Se,skinning:q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ot&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ci,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Nt.vertexUv1s=m.has(1),Nt.vertexUv2s=m.has(2),Nt.vertexUv3s=m.has(3),m.clear(),Nt}function _(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)b.push(V),b.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(L(b,w),N(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function L(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function N(w,b){d.disableAll(),b.instancing&&d.enable(0),b.instancingColor&&d.enable(1),b.instancingMorph&&d.enable(2),b.matcap&&d.enable(3),b.envMap&&d.enable(4),b.normalMapObjectSpace&&d.enable(5),b.normalMapTangentSpace&&d.enable(6),b.clearcoat&&d.enable(7),b.iridescence&&d.enable(8),b.alphaTest&&d.enable(9),b.vertexColors&&d.enable(10),b.vertexAlphas&&d.enable(11),b.vertexUv1s&&d.enable(12),b.vertexUv2s&&d.enable(13),b.vertexUv3s&&d.enable(14),b.vertexTangents&&d.enable(15),b.anisotropy&&d.enable(16),b.alphaHash&&d.enable(17),b.batching&&d.enable(18),b.dispersion&&d.enable(19),b.batchingColor&&d.enable(20),b.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reversedDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),w.push(d.mask)}function P(w){const b=T[w.type];let V;if(b){const G=Ai[b];V=pv.clone(G.uniforms)}else V=w.uniforms;return V}function D(w,b){let V=g.get(b);return V!==void 0?++V.usedTimes:(V=new QM(s,b,w,c),v.push(V),g.set(b,V)),V}function F(w){if(--w.usedTimes===0){const b=v.indexOf(w);v[b]=v[v.length-1],v.pop(),g.delete(w.cacheKey),w.destroy()}}function O(w){p.remove(w)}function $(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:D,releaseProgram:F,releaseShaderCache:O,programs:v,dispose:$}}function iE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function rE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g,x,M,T,C,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:T,renderOrder:g.renderOrder,z:C,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=C,_.group=S),e++,_}function d(g,x,M,T,C,S){const _=u(g,x,M,T,C,S);M.transmission>0?r.push(_):M.transparent===!0?o.push(_):n.push(_)}function p(g,x,M,T,C,S){const _=u(g,x,M,T,C,S);M.transmission>0?r.unshift(_):M.transparent===!0?o.unshift(_):n.unshift(_)}function m(g,x){n.length>1&&n.sort(g||rE),r.length>1&&r.sort(x||Bm),o.length>1&&o.sort(x||Bm)}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:v,sort:m}}function sE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new zm,s.set(r,[u])):o>=c.length?(u=new zm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function aE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new wt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let lE=0;function cE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uE(s){const e=new aE,n=oE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const o=new ee,c=new qt,u=new qt;function d(m){let v=0,g=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,C=0,S=0,_=0,L=0,N=0,P=0,D=0,F=0,O=0;m.sort(cE);for(let w=0,b=m.length;w<b;w++){const V=m[w],G=V.color,q=V.intensity,ne=V.distance;let fe=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Xs?fe=V.shadow.map.texture:fe=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=G.r*q,g+=G.g*q,x+=G.b*q;else if(V.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(V.sh.coefficients[te],q);O++}else if(V.isDirectionalLight){const te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=n.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=fe,r.directionalShadowMatrix[M]=V.shadow.matrix,L++}r.directional[M]=te,M++}else if(V.isSpotLight){const te=e.get(V);te.position.setFromMatrixPosition(V.matrixWorld),te.color.copy(G).multiplyScalar(q),te.distance=ne,te.coneCos=Math.cos(V.angle),te.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),te.decay=V.decay,r.spot[C]=te;const K=V.shadow;if(V.map&&(r.spotLightMap[D]=V.map,D++,K.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=K.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=fe,P++}C++}else if(V.isRectAreaLight){const te=e.get(V);te.color.copy(G).multiplyScalar(q),te.halfWidth.set(V.width*.5,0,0),te.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=te,S++}else if(V.isPointLight){const te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),te.distance=V.distance,te.decay=V.decay,V.castShadow){const K=V.shadow,Y=n.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=V.shadow.matrix,N++}r.point[T]=te,T++}else if(V.isHemisphereLight){const te=e.get(V);te.skyColor.copy(V.color).multiplyScalar(q),te.groundColor.copy(V.groundColor).multiplyScalar(q),r.hemi[_]=te,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const $=r.hash;($.directionalLength!==M||$.pointLength!==T||$.spotLength!==C||$.rectAreaLength!==S||$.hemiLength!==_||$.numDirectionalShadows!==L||$.numPointShadows!==N||$.numSpotShadows!==P||$.numSpotMaps!==D||$.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+D-F,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,$.directionalLength=M,$.pointLength=T,$.spotLength=C,$.rectAreaLength=S,$.hemiLength=_,$.numDirectionalShadows=L,$.numPointShadows=N,$.numSpotShadows=P,$.numSpotMaps=D,$.numLightProbes=O,r.version=lE++)}function p(m,v){let g=0,x=0,M=0,T=0,C=0;const S=v.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const N=m[_];if(N.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),g++}else if(N.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),u.identity(),c.copy(N.matrixWorld),c.premultiply(S),u.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(N.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function Vm(s){const e=new uE(s),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function fE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Vm(s),e.set(o,[d])):c>=u.length?(d=new Vm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
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
}`,pE=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],mE=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Hm=new qt,Va=new ee,rf=new ee;function gE(s,e,n){let r=new hd;const o=new bt,c=new bt,u=new Kt,d=new Rv,p=new bv,m={},v=n.maxTextureSize,g={[Rr]:kn,[kn]:Rr,[Ci]:Ci},x=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:dE,fragmentShader:hE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new qn;T.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Gt(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let _=this.type;this.render=function(F,O,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===Wm&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Pl);const w=s.getRenderTarget(),b=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),G=s.state;G.setBlending($i),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=_!==this.type;q&&O.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(fe=>fe.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,fe=F.length;ne<fe;ne++){const te=F[ne],K=te.shadow;if(K===void 0){lt("WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Y=K.getFrameExtents();if(o.multiply(Y),c.copy(K.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/Y.x),o.x=c.x*Y.x,K.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/Y.y),o.y=c.y*Y.y,K.mapSize.y=c.y)),K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ha){if(te.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Li(o.x,o.y,{format:Xs,type:Zi,minFilter:En,magFilter:En,generateMipmaps:!1}),K.map.texture.name=te.name+".shadowMap",K.map.depthTexture=new Ya(o.x,o.y,Ri),K.map.depthTexture.name=te.name+".shadowMapDepth",K.map.depthTexture.format=Qi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=pn,K.map.depthTexture.magFilter=pn}else{te.isPointLight?(K.map=new vg(o.x),K.map.depthTexture=new Av(o.x,Ni)):(K.map=new Li(o.x,o.y),K.map.depthTexture=new Ya(o.x,o.y,Ni)),K.map.depthTexture.name=te.name+".shadowMap",K.map.depthTexture.format=Qi;const se=s.state.buffers.depth.getReversed();this.type===Pl?(K.map.depthTexture.compareFunction=se?ud:cd,K.map.depthTexture.minFilter=En,K.map.depthTexture.magFilter=En):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=pn,K.map.depthTexture.magFilter=pn)}K.camera.updateProjectionMatrix()}const de=K.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<de;se++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,se),s.clear();else{se===0&&(s.setRenderTarget(K.map),s.clear());const U=K.getViewport(se);u.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),G.viewport(u)}if(te.isPointLight){const U=K.camera,le=K.matrix,Re=te.distance||U.far;Re!==U.far&&(U.far=Re,U.updateProjectionMatrix()),Va.setFromMatrixPosition(te.matrixWorld),U.position.copy(Va),rf.copy(U.position),rf.add(pE[se]),U.up.copy(mE[se]),U.lookAt(rf),U.updateMatrixWorld(),le.makeTranslation(-Va.x,-Va.y,-Va.z),Hm.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Hm,U.coordinateSystem,U.reversedDepth)}else K.updateMatrices(te);r=K.getFrustum(),P(O,$,K.camera,te,this.type)}K.isPointLightShadow!==!0&&this.type===Ha&&L(K,$),K.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,b,V)};function L(F,O){const $=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Li(o.x,o.y,{format:Xs,type:Zi})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,$,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,$,M,C,null)}function N(F,O,$,w){let b=null;const V=$.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)b=V;else if(b=$.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const G=b.uuid,q=O.uuid;let ne=m[G];ne===void 0&&(ne={},m[G]=ne);let fe=ne[q];fe===void 0&&(fe=b.clone(),ne[q]=fe,O.addEventListener("dispose",D)),b=fe}if(b.visible=O.visible,b.wireframe=O.wireframe,w===Ha?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:g[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,$.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=s.properties.get(b);G.light=$}return b}function P(F,O,$,w,b){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===Ha)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld);const q=e.update(F),ne=F.material;if(Array.isArray(ne)){const fe=q.groups;for(let te=0,K=fe.length;te<K;te++){const Y=fe[te],de=ne[Y.materialIndex];if(de&&de.visible){const se=N(F,de,w,b);F.onBeforeShadow(s,F,O,$,q,se,Y),s.renderBufferDirect($,null,q,se,F,Y),F.onAfterShadow(s,F,O,$,q,se,Y)}}}else if(ne.visible){const fe=N(F,ne,w,b);F.onBeforeShadow(s,F,O,$,q,fe,null),s.renderBufferDirect($,null,q,fe,F,null),F.onAfterShadow(s,F,O,$,q,fe,null)}}const G=F.children;for(let q=0,ne=G.length;q<ne;q++)P(G[q],O,$,w,b)}function D(F){F.target.removeEventListener("dispose",D);for(const $ in m){const w=m[$],b=F.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const _E={[lf]:cf,[uf]:hf,[ff]:pf,[Gs]:df,[cf]:lf,[hf]:uf,[pf]:ff,[df]:Gs};function vE(s,e){function n(){let W=!1;const Le=new Kt;let Ee=null;const Ie=new Kt(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!W&&(s.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){W=ye},setClear:function(ye,me,be,st,Nt){Nt===!0&&(ye*=st,me*=st,be*=st),Le.set(ye,me,be,st),Ie.equals(Le)===!1&&(s.clearColor(ye,me,be,st),Ie.copy(Le))},reset:function(){W=!1,Ee=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Le=!1,Ee=null,Ie=null,ye=null;return{setReversed:function(me){if(Le!==me){const be=e.get("EXT_clip_control");me?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Le=me;const st=ye;ye=null,this.setClear(st)}},getReversed:function(){return Le},setTest:function(me){me?he(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(me){Ee!==me&&!W&&(s.depthMask(me),Ee=me)},setFunc:function(me){if(Le&&(me=_E[me]),Ie!==me){switch(me){case lf:s.depthFunc(s.NEVER);break;case cf:s.depthFunc(s.ALWAYS);break;case uf:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case ff:s.depthFunc(s.EQUAL);break;case df:s.depthFunc(s.GEQUAL);break;case hf:s.depthFunc(s.GREATER);break;case pf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=me}},setLocked:function(me){W=me},setClear:function(me){ye!==me&&(Le&&(me=1-me),s.clearDepth(me),ye=me)},reset:function(){W=!1,Ee=null,Ie=null,ye=null,Le=!1}}}function o(){let W=!1,Le=null,Ee=null,Ie=null,ye=null,me=null,be=null,st=null,Nt=null;return{setTest:function(yt){W||(yt?he(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(yt){Le!==yt&&!W&&(s.stencilMask(yt),Le=yt)},setFunc:function(yt,Bn,wn){(Ee!==yt||Ie!==Bn||ye!==wn)&&(s.stencilFunc(yt,Bn,wn),Ee=yt,Ie=Bn,ye=wn)},setOp:function(yt,Bn,wn){(me!==yt||be!==Bn||st!==wn)&&(s.stencilOp(yt,Bn,wn),me=yt,be=Bn,st=wn)},setLocked:function(yt){W=yt},setClear:function(yt){Nt!==yt&&(s.clearStencil(yt),Nt=yt)},reset:function(){W=!1,Le=null,Ee=null,Ie=null,ye=null,me=null,be=null,st=null,Nt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,M=[],T=null,C=!1,S=null,_=null,L=null,N=null,P=null,D=null,F=null,O=new wt(0,0,0),$=0,w=!1,b=null,V=null,G=null,q=null,ne=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=K>=2);let de=null,se={};const U=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Re=new Kt().fromArray(U),Ge=new Kt().fromArray(le);function $e(W,Le,Ee,Ie){const ye=new Uint8Array(4),me=s.createTexture();s.bindTexture(W,me),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<Ee;be++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Le+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return me}const ie={};ie[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),he(s.DEPTH_TEST),u.setFunc(Gs),it(!1),Ut(Wp),he(s.CULL_FACE),gt($i);function he(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Se(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function ke(W,Le){return g[W]!==Le?(s.bindFramebuffer(W,Le),g[W]=Le,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function De(W,Le){let Ee=M,Ie=!1;if(W){Ee=x.get(Le),Ee===void 0&&(Ee=[],x.set(Le,Ee));const ye=W.textures;if(Ee.length!==ye.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let me=0,be=ye.length;me<be;me++)Ee[me]=s.COLOR_ATTACHMENT0+me;Ee.length=ye.length,Ie=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Ee)}function ft(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Vt={[Jr]:s.FUNC_ADD,[x_]:s.FUNC_SUBTRACT,[S_]:s.FUNC_REVERSE_SUBTRACT};Vt[y_]=s.MIN,Vt[M_]=s.MAX;const ct={[E_]:s.ZERO,[T_]:s.ONE,[w_]:s.SRC_COLOR,[af]:s.SRC_ALPHA,[L_]:s.SRC_ALPHA_SATURATE,[b_]:s.DST_COLOR,[C_]:s.DST_ALPHA,[A_]:s.ONE_MINUS_SRC_COLOR,[of]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[R_]:s.ONE_MINUS_DST_ALPHA,[N_]:s.CONSTANT_COLOR,[D_]:s.ONE_MINUS_CONSTANT_COLOR,[I_]:s.CONSTANT_ALPHA,[U_]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(W,Le,Ee,Ie,ye,me,be,st,Nt,yt){if(W===$i){C===!0&&(Se(s.BLEND),C=!1);return}if(C===!1&&(he(s.BLEND),C=!0),W!==v_){if(W!==S||yt!==w){if((_!==Jr||P!==Jr)&&(s.blendEquation(s.FUNC_ADD),_=Jr,P=Jr),yt)switch(W){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fl:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xp:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jp:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}L=null,N=null,D=null,F=null,O.set(0,0,0),$=0,S=W,w=yt}return}ye=ye||Le,me=me||Ee,be=be||Ie,(Le!==_||ye!==P)&&(s.blendEquationSeparate(Vt[Le],Vt[ye]),_=Le,P=ye),(Ee!==L||Ie!==N||me!==D||be!==F)&&(s.blendFuncSeparate(ct[Ee],ct[Ie],ct[me],ct[be]),L=Ee,N=Ie,D=me,F=be),(st.equals(O)===!1||Nt!==$)&&(s.blendColor(st.r,st.g,st.b,Nt),O.copy(st),$=Nt),S=W,w=!1}function St(W,Le){W.side===Ci?Se(s.CULL_FACE):he(s.CULL_FACE);let Ee=W.side===kn;Le&&(Ee=!Ee),it(Ee),W.blending===Vs&&W.transparent===!1?gt($i):gt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ot(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){b!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),b=W)}function Ut(W){W!==g_?(he(s.CULL_FACE),W!==V&&(W===Wp?s.cullFace(s.BACK):W===__?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),V=W}function B(W){W!==G&&(te&&s.lineWidth(W),G=W)}function Ot(W,Le,Ee){W?(he(s.POLYGON_OFFSET_FILL),(q!==Le||ne!==Ee)&&(s.polygonOffset(Le,Ee),q=Le,ne=Ee)):Se(s.POLYGON_OFFSET_FILL)}function pt(W){W?he(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function _t(W){W===void 0&&(W=s.TEXTURE0+fe-1),de!==W&&(s.activeTexture(W),de=W)}function We(W,Le,Ee){Ee===void 0&&(de===null?Ee=s.TEXTURE0+fe-1:Ee=de);let Ie=se[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},se[Ee]=Ie),(Ie.type!==W||Ie.texture!==Le)&&(de!==Ee&&(s.activeTexture(Ee),de=Ee),s.bindTexture(W,Le||ie[W]),Ie.type=W,Ie.texture=Le)}function R(){const W=se[de];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ce(){try{s.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function pe(){try{s.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function xe(){try{s.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Pe(){try{s.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ze(){try{s.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ge(){try{s.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Te(W){Re.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Re.copy(W))}function Fe(W){Ge.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ge.copy(W))}function Oe(W,Le){let Ee=m.get(Le);Ee===void 0&&(Ee=new WeakMap,m.set(Le,Ee));let Ie=Ee.get(W);Ie===void 0&&(Ie=s.getUniformBlockIndex(Le,W.name),Ee.set(W,Ie))}function Ae(W,Le){const Ie=m.get(Le).get(W);p.get(Le)!==Ie&&(s.uniformBlockBinding(Le,Ie,W.__bindingPointIndex),p.set(Le,Ie))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},de=null,se={},g={},x=new WeakMap,M=[],T=null,C=!1,S=null,_=null,L=null,N=null,P=null,D=null,F=null,O=new wt(0,0,0),$=0,w=!1,b=null,V=null,G=null,q=null,ne=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:he,disable:Se,bindFramebuffer:ke,drawBuffers:De,useProgram:ft,setBlending:gt,setMaterial:St,setFlipSided:it,setCullFace:Ut,setLineWidth:B,setPolygonOffset:Ot,setScissorTest:pt,activeTexture:_t,bindTexture:We,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Ze,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:Pe,texSubImage2D:ce,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Be,scissor:Te,viewport:Fe,reset:et}}function xE(s,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new bt,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,y){return M?new OffscreenCanvas(R,y):Bl("canvas")}function C(R,y,k){let ce=1;const pe=We(R);if((pe.width>k||pe.height>k)&&(ce=k/Math.max(pe.width,pe.height)),ce<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(ce*pe.width),Be=Math.floor(ce*pe.height);g===void 0&&(g=T(oe,Be));const xe=y?T(oe,Be):g;return xe.width=oe,xe.height=Be,xe.getContext("2d").drawImage(R,0,0,oe,Be),lt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+oe+"x"+Be+")."),xe}else return"data"in R&&lt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function S(R){return R.generateMipmaps}function _(R){s.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(R,y,k,ce,pe=!1){if(R!==null){if(s[R]!==void 0)return s[R];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=y;if(y===s.RED&&(k===s.FLOAT&&(oe=s.R32F),k===s.HALF_FLOAT&&(oe=s.R16F),k===s.UNSIGNED_BYTE&&(oe=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(oe=s.R8UI),k===s.UNSIGNED_SHORT&&(oe=s.R16UI),k===s.UNSIGNED_INT&&(oe=s.R32UI),k===s.BYTE&&(oe=s.R8I),k===s.SHORT&&(oe=s.R16I),k===s.INT&&(oe=s.R32I)),y===s.RG&&(k===s.FLOAT&&(oe=s.RG32F),k===s.HALF_FLOAT&&(oe=s.RG16F),k===s.UNSIGNED_BYTE&&(oe=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(oe=s.RG8UI),k===s.UNSIGNED_SHORT&&(oe=s.RG16UI),k===s.UNSIGNED_INT&&(oe=s.RG32UI),k===s.BYTE&&(oe=s.RG8I),k===s.SHORT&&(oe=s.RG16I),k===s.INT&&(oe=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),k===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),k===s.UNSIGNED_INT&&(oe=s.RGB32UI),k===s.BYTE&&(oe=s.RGB8I),k===s.SHORT&&(oe=s.RGB16I),k===s.INT&&(oe=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),k===s.UNSIGNED_INT&&(oe=s.RGBA32UI),k===s.BYTE&&(oe=s.RGBA8I),k===s.SHORT&&(oe=s.RGBA16I),k===s.INT&&(oe=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),y===s.RGBA){const Be=pe?Ol:Tt.getTransfer(ce);k===s.FLOAT&&(oe=s.RGBA32F),k===s.HALF_FLOAT&&(oe=s.RGBA16F),k===s.UNSIGNED_BYTE&&(oe=Be===Dt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function P(R,y){let k;return R?y===null||y===Ni||y===ja?k=s.DEPTH24_STENCIL8:y===Ri?k=s.DEPTH32F_STENCIL8:y===Xa&&(k=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===ja?k=s.DEPTH_COMPONENT24:y===Ri?k=s.DEPTH_COMPONENT32F:y===Xa&&(k=s.DEPTH_COMPONENT16),k}function D(R,y){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function F(R){const y=R.target;y.removeEventListener("dispose",F),$(y),y.isVideoTexture&&v.delete(y)}function O(R){const y=R.target;y.removeEventListener("dispose",O),b(y)}function $(R){const y=r.get(R);if(y.__webglInit===void 0)return;const k=R.source,ce=x.get(k);if(ce){const pe=ce[y.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(R),Object.keys(ce).length===0&&x.delete(k)}r.remove(R)}function w(R){const y=r.get(R);s.deleteTexture(y.__webglTexture);const k=R.source,ce=x.get(k);delete ce[y.__cacheKey],u.memory.textures--}function b(R){const y=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(y.__webglFramebuffer[ce]))for(let pe=0;pe<y.__webglFramebuffer[ce].length;pe++)s.deleteFramebuffer(y.__webglFramebuffer[ce][pe]);else s.deleteFramebuffer(y.__webglFramebuffer[ce]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ce])}else{if(Array.isArray(y.__webglFramebuffer))for(let ce=0;ce<y.__webglFramebuffer.length;ce++)s.deleteFramebuffer(y.__webglFramebuffer[ce]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ce=0;ce<y.__webglColorRenderbuffer.length;ce++)y.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ce]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=R.textures;for(let ce=0,pe=k.length;ce<pe;ce++){const oe=r.get(k[ce]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(k[ce])}r.remove(R)}let V=0;function G(){V=0}function q(){const R=V;return R>=o.maxTextures&&lt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),V+=1,R}function ne(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function fe(R,y){const k=r.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const ce=R.image;if(ce===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(k,R,y);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function te(R,y){const k=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,y);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function K(R,y){const k=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,y);return}n.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function Y(R,y){const k=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){he(k,R,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const de={[_f]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[vf]:s.MIRRORED_REPEAT},se={[pn]:s.NEAREST,[k_]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},U={[V_]:s.NEVER,[j_]:s.ALWAYS,[H_]:s.LESS,[cd]:s.LEQUAL,[G_]:s.EQUAL,[ud]:s.GEQUAL,[W_]:s.GREATER,[X_]:s.NOTEQUAL};function le(R,y){if(y.type===Ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===Au||y.magFilter===ol||y.magFilter===ts||y.minFilter===En||y.minFilter===Au||y.minFilter===ol||y.minFilter===ts)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,de[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,de[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,de[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,se[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==ol&&y.minFilter!==ts||y.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Re(R,y){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",F));const ce=y.source;let pe=x.get(ce);pe===void 0&&(pe={},x.set(ce,pe));const oe=ne(y);if(oe!==R.__cacheKey){pe[oe]===void 0&&(pe[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,k=!0),pe[oe].usedTimes++;const Be=pe[R.__cacheKey];Be!==void 0&&(pe[R.__cacheKey].usedTimes--,Be.usedTimes===0&&w(y)),R.__cacheKey=oe,R.__webglTexture=pe[oe].texture}return k}function Ge(R,y,k){return Math.floor(Math.floor(R/k)/y)}function $e(R,y,k,ce){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,ce,y.data);else{oe.sort((ge,Te)=>ge.start-Te.start);let Be=0;for(let ge=1;ge<oe.length;ge++){const Te=oe[Be],Fe=oe[ge],Oe=Te.start+Te.count,Ae=Ge(Fe.start,y.width,4),et=Ge(Te.start,y.width,4);Fe.start<=Oe+1&&Ae===et&&Ge(Fe.start+Fe.count-1,y.width,4)===Ae?Te.count=Math.max(Te.count,Fe.start+Fe.count-Te.start):(++Be,oe[Be]=Fe)}oe.length=Be+1;const xe=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ge=0,Te=oe.length;ge<Te;ge++){const Fe=oe[ge],Oe=Math.floor(Fe.start/4),Ae=Math.ceil(Fe.count/4),et=Oe%y.width,W=Math.floor(Oe/y.width),Le=Ae,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),n.texSubImage2D(s.TEXTURE_2D,0,et,W,Le,Ee,k,ce,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,xe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ze)}}function ie(R,y,k){let ce=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ce=s.TEXTURE_3D);const pe=Re(R,y),oe=y.source;n.bindTexture(ce,R.__webglTexture,s.TEXTURE0+k);const Be=r.get(oe);if(oe.version!==Be.__version||pe===!0){n.activeTexture(s.TEXTURE0+k);const xe=Tt.getPrimaries(Tt.workingColorSpace),Pe=y.colorSpace===wr?null:Tt.getPrimaries(y.colorSpace),Ze=y.colorSpace===wr||xe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ge=C(y.image,!1,o.maxTextureSize);ge=_t(y,ge);const Te=c.convert(y.format,y.colorSpace),Fe=c.convert(y.type);let Oe=N(y.internalFormat,Te,Fe,y.colorSpace,y.isVideoTexture);le(ce,y);let Ae;const et=y.mipmaps,W=y.isVideoTexture!==!0,Le=Be.__version===void 0||pe===!0,Ee=oe.dataReady,Ie=D(y,ge);if(y.isDepthTexture)Oe=P(y.format===ns,y.type),Le&&(W?n.texStorage2D(s.TEXTURE_2D,1,Oe,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Te,Fe,null));else if(y.isDataTexture)if(et.length>0){W&&Le&&n.texStorage2D(s.TEXTURE_2D,Ie,Oe,et[0].width,et[0].height);for(let ye=0,me=et.length;ye<me;ye++)Ae=et[ye],W?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,Te,Fe,Ae.data):n.texImage2D(s.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,Te,Fe,Ae.data);y.generateMipmaps=!1}else W?(Le&&n.texStorage2D(s.TEXTURE_2D,Ie,Oe,ge.width,ge.height),Ee&&$e(y,ge,Te,Fe)):n.texImage2D(s.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Te,Fe,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Oe,et[0].width,et[0].height,ge.depth);for(let ye=0,me=et.length;ye<me;ye++)if(Ae=et[ye],y.format!==gi)if(Te!==null)if(W){if(Ee)if(y.layerUpdates.size>0){const be=xm(Ae.width,Ae.height,y.format,y.type);for(const st of y.layerUpdates){const Nt=Ae.data.subarray(st*be/Ae.data.BYTES_PER_ELEMENT,(st+1)*be/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,st,Ae.width,Ae.height,1,Te,Nt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ae.width,Ae.height,ge.depth,Te,Ae.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Oe,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ae.width,Ae.height,ge.depth,Te,Fe,Ae.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,Oe,Ae.width,Ae.height,ge.depth,0,Te,Fe,Ae.data)}else{W&&Le&&n.texStorage2D(s.TEXTURE_2D,Ie,Oe,et[0].width,et[0].height);for(let ye=0,me=et.length;ye<me;ye++)Ae=et[ye],y.format!==gi?Te!==null?W?Ee&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,Te,Ae.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,Ae.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,Te,Fe,Ae.data):n.texImage2D(s.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,Te,Fe,Ae.data)}else if(y.isDataArrayTexture)if(W){if(Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Oe,ge.width,ge.height,ge.depth),Ee)if(y.layerUpdates.size>0){const ye=xm(ge.width,ge.height,y.format,y.type);for(const me of y.layerUpdates){const be=ge.data.subarray(me*ye/ge.data.BYTES_PER_ELEMENT,(me+1)*ye/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ge.width,ge.height,1,Te,Fe,be)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Te,Fe,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Te,Fe,ge.data);else if(y.isData3DTexture)W?(Le&&n.texStorage3D(s.TEXTURE_3D,Ie,Oe,ge.width,ge.height,ge.depth),Ee&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Te,Fe,ge.data)):n.texImage3D(s.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Te,Fe,ge.data);else if(y.isFramebufferTexture){if(Le)if(W)n.texStorage2D(s.TEXTURE_2D,Ie,Oe,ge.width,ge.height);else{let ye=ge.width,me=ge.height;for(let be=0;be<Ie;be++)n.texImage2D(s.TEXTURE_2D,be,Oe,ye,me,0,Te,Fe,null),ye>>=1,me>>=1}}else if(et.length>0){if(W&&Le){const ye=We(et[0]);n.texStorage2D(s.TEXTURE_2D,Ie,Oe,ye.width,ye.height)}for(let ye=0,me=et.length;ye<me;ye++)Ae=et[ye],W?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Te,Fe,Ae):n.texImage2D(s.TEXTURE_2D,ye,Oe,Te,Fe,Ae);y.generateMipmaps=!1}else if(W){if(Le){const ye=We(ge);n.texStorage2D(s.TEXTURE_2D,Ie,Oe,ye.width,ye.height)}Ee&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Fe,ge)}else n.texImage2D(s.TEXTURE_2D,0,Oe,Te,Fe,ge);S(y)&&_(ce),Be.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,k){if(y.image.length!==6)return;const ce=Re(R,y),pe=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const oe=r.get(pe);if(pe.version!==oe.__version||ce===!0){n.activeTexture(s.TEXTURE0+k);const Be=Tt.getPrimaries(Tt.workingColorSpace),xe=y.colorSpace===wr?null:Tt.getPrimaries(y.colorSpace),Pe=y.colorSpace===wr||Be===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ze=y.isCompressedTexture||y.image[0].isCompressedTexture,ge=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let me=0;me<6;me++)!Ze&&!ge?Te[me]=C(y.image[me],!0,o.maxCubemapSize):Te[me]=ge?y.image[me].image:y.image[me],Te[me]=_t(y,Te[me]);const Fe=Te[0],Oe=c.convert(y.format,y.colorSpace),Ae=c.convert(y.type),et=N(y.internalFormat,Oe,Ae,y.colorSpace),W=y.isVideoTexture!==!0,Le=oe.__version===void 0||ce===!0,Ee=pe.dataReady;let Ie=D(y,Fe);le(s.TEXTURE_CUBE_MAP,y);let ye;if(Ze){W&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,et,Fe.width,Fe.height);for(let me=0;me<6;me++){ye=Te[me].mipmaps;for(let be=0;be<ye.length;be++){const st=ye[be];y.format!==gi?Oe!==null?W?Ee&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,0,0,st.width,st.height,Oe,st.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,et,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,0,0,st.width,st.height,Oe,Ae,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,et,st.width,st.height,0,Oe,Ae,st.data)}}}else{if(ye=y.mipmaps,W&&Le){ye.length>0&&Ie++;const me=We(Te[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,et,me.width,me.height)}for(let me=0;me<6;me++)if(ge){W?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Te[me].width,Te[me].height,Oe,Ae,Te[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,et,Te[me].width,Te[me].height,0,Oe,Ae,Te[me].data);for(let be=0;be<ye.length;be++){const Nt=ye[be].image[me].image;W?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,0,0,Nt.width,Nt.height,Oe,Ae,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,et,Nt.width,Nt.height,0,Oe,Ae,Nt.data)}}else{W?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe,Ae,Te[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,et,Oe,Ae,Te[me]);for(let be=0;be<ye.length;be++){const st=ye[be];W?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,0,0,Oe,Ae,st.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,et,Oe,Ae,st.image[me])}}}S(y)&&_(s.TEXTURE_CUBE_MAP),oe.__version=pe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Se(R,y,k,ce,pe,oe){const Be=c.convert(k.format,k.colorSpace),xe=c.convert(k.type),Pe=N(k.internalFormat,Be,xe,k.colorSpace),Ze=r.get(y),ge=r.get(k);if(ge.__renderTarget=y,!Ze.__hasExternalTextures){const Te=Math.max(1,y.width>>oe),Fe=Math.max(1,y.height>>oe);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,oe,Pe,Te,Fe,y.depth,0,Be,xe,null):n.texImage2D(pe,oe,Pe,Te,Fe,0,Be,xe,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),Ot(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,pe,ge.__webglTexture,0,B(y)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,pe,ge.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(R,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const ce=y.depthTexture,pe=ce&&ce.isDepthTexture?ce.type:null,oe=P(y.stencilBuffer,pe),Be=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(y),oe,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(y),oe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,oe,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,R)}else{const ce=y.textures;for(let pe=0;pe<ce.length;pe++){const oe=ce[pe],Be=c.convert(oe.format,oe.colorSpace),xe=c.convert(oe.type),Pe=N(oe.internalFormat,Be,xe,oe.colorSpace);Ot(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(y),Pe,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(y),Pe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(R,y,k){const ce=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(y.depthTexture);if(pe.__renderTarget=y,(!pe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ce){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),le(s.TEXTURE_CUBE_MAP,y.depthTexture);const Ze=c.convert(y.depthTexture.format),ge=c.convert(y.depthTexture.type);let Te;y.depthTexture.format===Qi?Te=s.DEPTH_COMPONENT24:y.depthTexture.format===ns&&(Te=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Te,y.width,y.height,0,Ze,ge,null)}}else fe(y.depthTexture,0);const oe=pe.__webglTexture,Be=B(y),xe=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Pe=y.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Qi)Ot(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,xe,oe,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,xe,oe,0);else if(y.depthTexture.format===ns)Ot(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,xe,oe,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,xe,oe,0);else throw new Error("Unknown depthTexture format")}function ft(R){const y=r.get(R),k=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const ce=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ce){const pe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ce.removeEventListener("dispose",pe)};ce.addEventListener("dispose",pe),y.__depthDisposeCallback=pe}y.__boundDepthTexture=ce}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let ce=0;ce<6;ce++)De(y.__webglFramebuffer[ce],R,ce);else{const ce=R.texture.mipmaps;ce&&ce.length>0?De(y.__webglFramebuffer[0],R,0):De(y.__webglFramebuffer,R,0)}else if(k){y.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ce]),y.__webglDepthbuffer[ce]===void 0)y.__webglDepthbuffer[ce]=s.createRenderbuffer(),ke(y.__webglDepthbuffer[ce],R,!1);else{const pe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}else{const ce=R.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ke(y.__webglDepthbuffer,R,!1);else{const pe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,y,k){const ce=r.get(R);y!==void 0&&Se(ce.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ft(R)}function ct(R){const y=R.texture,k=r.get(R),ce=r.get(y);R.addEventListener("dispose",O);const pe=R.textures,oe=R.isWebGLCubeRenderTarget===!0,Be=pe.length>1;if(Be||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=y.version,u.memory.textures++),oe){k.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[xe]=[];for(let Pe=0;Pe<y.mipmaps.length;Pe++)k.__webglFramebuffer[xe][Pe]=s.createFramebuffer()}else k.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)k.__webglFramebuffer[xe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Be)for(let xe=0,Pe=pe.length;xe<Pe;xe++){const Ze=r.get(pe[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&Ot(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){const Pe=pe[xe];k.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[xe]);const Ze=c.convert(Pe.format,Pe.colorSpace),ge=c.convert(Pe.type),Te=N(Pe.internalFormat,Ze,ge,Pe.colorSpace,R.isXRRenderTarget===!0),Fe=B(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Te,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,k.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),le(s.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)Se(k.__webglFramebuffer[xe][Pe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Pe);else Se(k.__webglFramebuffer[xe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(y)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let xe=0,Pe=pe.length;xe<Pe;xe++){const Ze=pe[xe],ge=r.get(Ze);let Te=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,ge.__webglTexture),le(Te,Ze),Se(k.__webglFramebuffer,R,Ze,s.COLOR_ATTACHMENT0+xe,Te,0),S(Ze)&&_(Te)}n.unbindTexture()}else{let xe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(xe,ce.__webglTexture),le(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)Se(k.__webglFramebuffer[Pe],R,y,s.COLOR_ATTACHMENT0,xe,Pe);else Se(k.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,xe,0);S(y)&&_(xe),n.unbindTexture()}R.depthBuffer&&ft(R)}function gt(R){const y=R.textures;for(let k=0,ce=y.length;k<ce;k++){const pe=y[k];if(S(pe)){const oe=L(R),Be=r.get(pe).__webglTexture;n.bindTexture(oe,Be),_(oe),n.unbindTexture()}}}const St=[],it=[];function Ut(R){if(R.samples>0){if(Ot(R)===!1){const y=R.textures,k=R.width,ce=R.height;let pe=s.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(R),xe=y.length>1;if(xe)for(let Ze=0;Ze<y.length;Ze++)n.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ze=0;Ze<y.length;Ze++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ze]);const ge=r.get(y[Ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,k,ce,0,0,k,ce,pe,s.NEAREST),p===!0&&(St.length=0,it.length=0,St.push(s.COLOR_ATTACHMENT0+Ze),R.depthBuffer&&R.resolveDepthBuffer===!1&&(St.push(oe),it.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ze=0;Ze<y.length;Ze++){n.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ze]);const ge=r.get(y[Ze]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,ge,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function B(R){return Math.min(o.maxSamples,R.samples)}function Ot(R){const y=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pt(R){const y=u.render.frame;v.get(R)!==y&&(v.set(R,y),R.update())}function _t(R,y){const k=R.colorSpace,ce=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==js&&k!==wr&&(Tt.getTransfer(k)===Dt?(ce!==gi||pe!==jn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",k)),y}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=fe,this.setTexture2DArray=te,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Vt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SE(s,e){function n(r,o=wr){let c;const u=Tt.getTransfer(o);if(r===jn)return s.UNSIGNED_BYTE;if(r===rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ng)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ig)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===eg)return s.BYTE;if(r===tg)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===id)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===Ri)return s.FLOAT;if(r===Zi)return s.HALF_FLOAT;if(r===rg)return s.ALPHA;if(r===sg)return s.RGB;if(r===gi)return s.RGBA;if(r===Qi)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===ag)return s.RED;if(r===ad)return s.RED_INTEGER;if(r===Xs)return s.RG;if(r===od)return s.RG_INTEGER;if(r===ld)return s.RGBA_INTEGER;if(r===Ll||r===Nl||r===Dl||r===Il)if(u===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ll)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ll)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xf||r===Sf||r===yf||r===Mf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===bf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ef||r===Tf)return u===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Af)return c.COMPRESSED_R11_EAC;if(r===Cf)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Rf)return c.COMPRESSED_RG11_EAC;if(r===bf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Pf||r===Lf||r===Nf||r===Df||r===If||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Pf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Df)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ff)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Of)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wf||r===Xf||r===jf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Wf)return u===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qf||r===Yf||r===$f||r===Kf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===qf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$f)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ja?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ME=`
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

}`;class EE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Sg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ii({vertexShader:yE,fragmentShader:ME,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new Qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TE extends Ys{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,g=null,x=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new EE,_={},L=n.getContextAttributes();let N=null,P=null;const D=[],F=[],O=new bt;let $=null;const w=new ii;w.viewport=new Kt;const b=new ii;b.viewport=new Kt;const V=[w,b],G=new Dv;let q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=D[ie];return he===void 0&&(he=new $u,D[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=D[ie];return he===void 0&&(he=new $u,D[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=D[ie];return he===void 0&&(he=new $u,D[ie]=he),he.getHandSpace()};function fe(ie){const he=F.indexOf(ie.inputSource);if(he===-1)return;const Se=D[he];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,m||u),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",K);for(let ie=0;ie<D.length;ie++){const he=F[ie];he!==null&&(F[ie]=null,D[ie].disconnect(he))}q=null,ne=null,S.reset();for(const ie in _)delete _[ie];e.setRenderTarget(N),M=null,x=null,g=null,o=null,P=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio($),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",te),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await n.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ke=null,De=null;L.depth&&(De=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=L.stencil?ns:Qi,ke=L.stencil?ja:Ni);const ft={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ft),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Li(x.textureWidth,x.textureHeight,{format:gi,type:jn,depthTexture:new Ya(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Li(M.framebufferWidth,M.framebufferHeight,{format:gi,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),$e.setContext(o),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(ie){for(let he=0;he<ie.removed.length;he++){const Se=ie.removed[he],ke=F.indexOf(Se);ke>=0&&(F[ke]=null,D[ke].disconnect(Se))}for(let he=0;he<ie.added.length;he++){const Se=ie.added[he];let ke=F.indexOf(Se);if(ke===-1){for(let ft=0;ft<D.length;ft++)if(ft>=F.length){F.push(Se),ke=ft;break}else if(F[ft]===null){F[ft]=Se,ke=ft;break}if(ke===-1)break}const De=D[ke];De&&De.connect(Se)}}const Y=new ee,de=new ee;function se(ie,he,Se){Y.setFromMatrixPosition(he.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const ke=Y.distanceTo(de),De=he.projectionMatrix.elements,ft=Se.projectionMatrix.elements,Vt=De[14]/(De[10]-1),ct=De[14]/(De[10]+1),gt=(De[9]+1)/De[5],St=(De[9]-1)/De[5],it=(De[8]-1)/De[0],Ut=(ft[8]+1)/ft[0],B=Vt*it,Ot=Vt*Ut,pt=ke/(-it+Ut),_t=pt*-it;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(_t),ie.translateZ(pt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),De[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Vt+pt,R=ct+pt,y=B-_t,k=Ot+(ke-_t),ce=gt*ct/R*We,pe=St*ct/R*We;ie.projectionMatrix.makePerspective(y,k,ce,pe,We,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let he=ie.near,Se=ie.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),G.near=b.near=w.near=he,G.far=b.far=w.far=Se,(q!==G.near||ne!==G.far)&&(o.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,ne=G.far),G.layers.mask=ie.layers.mask|6,w.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;const ke=ie.parent,De=G.cameras;U(G,ke);for(let ft=0;ft<De.length;ft++)U(De[ft],ke);De.length===2?se(G,w,b):G.projectionMatrix.copy(w.projectionMatrix),le(ie,G,ke)};function le(ie,he,Se){Se===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Zf*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(ie){p=ie,x!==null&&(x.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(ie){return _[ie]};let Re=null;function Ge(ie,he){if(v=he.getViewerPose(m||u),T=he,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ke=!1;Se.length!==G.cameras.length&&(G.cameras.length=0,ke=!0);for(let ct=0;ct<Se.length;ct++){const gt=Se[ct];let St=null;if(M!==null)St=M.getViewport(gt);else{const Ut=g.getViewSubImage(x,gt);St=Ut.viewport,ct===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(P))}let it=V[ct];it===void 0&&(it=new ii,it.layers.enable(ct),it.viewport=new Kt,V[ct]=it),it.matrix.fromArray(gt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(gt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(St.x,St.y,St.width,St.height),ct===0&&(G.matrix.copy(it.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ke===!0&&G.cameras.push(it)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const ct=g.getDepthInformation(Se[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,o.renderState)}if(De&&De.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let ct=0;ct<Se.length;ct++){const gt=Se[ct].camera;if(gt){let St=_[gt];St||(St=new Sg,_[gt]=St);const it=g.getCameraImage(gt);St.sourceTexture=it}}}}for(let Se=0;Se<D.length;Se++){const ke=F[Se],De=D[Se];ke!==null&&De!==void 0&&De.update(ke,he,m||u)}Re&&Re(ie,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),T=null}const $e=new Mg;$e.setAnimationLoop(Ge),this.setAnimationLoop=function(ie){Re=ie},this.dispose=function(){}}}const Zr=new Di,wE=new qt;function AE(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,mg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,L,N,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(c(S,_),T(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),C(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,L,N):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===kn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===kn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),N=L.envMap,P=L.envMapRotation;N&&(S.envMap.value=N,Zr.copy(P),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),S.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Zr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,L,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=N*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function CE(s,e,n,r){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,N){const P=N.program;r.uniformBlockBinding(L,P)}function m(L,N){let P=o[L.id];P===void 0&&(T(L),P=v(L),o[L.id]=P,L.addEventListener("dispose",S));const D=N.program;r.updateUBOMapping(L,D);const F=e.render.frame;c[L.id]!==F&&(x(L),c[L.id]=F)}function v(L){const N=g();L.__bindingPointIndex=N;const P=s.createBuffer(),D=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,D,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function g(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const N=o[L.id],P=L.uniforms,D=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,O=P.length;F<O;F++){const $=Array.isArray(P[F])?P[F]:[P[F]];for(let w=0,b=$.length;w<b;w++){const V=$[w];if(M(V,F,w,D)===!0){const G=V.__offset,q=Array.isArray(V.value)?V.value:[V.value];let ne=0;for(let fe=0;fe<q.length;fe++){const te=q[fe],K=C(te);typeof te=="number"||typeof te=="boolean"?(V.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,G+ne,V.__data)):te.isMatrix3?(V.__data[0]=te.elements[0],V.__data[1]=te.elements[1],V.__data[2]=te.elements[2],V.__data[3]=0,V.__data[4]=te.elements[3],V.__data[5]=te.elements[4],V.__data[6]=te.elements[5],V.__data[7]=0,V.__data[8]=te.elements[6],V.__data[9]=te.elements[7],V.__data[10]=te.elements[8],V.__data[11]=0):(te.toArray(V.__data,ne),ne+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,N,P,D){const F=L.value,O=N+"_"+P;if(D[O]===void 0)return typeof F=="number"||typeof F=="boolean"?D[O]=F:D[O]=F.clone(),!0;{const $=D[O];if(typeof F=="number"||typeof F=="boolean"){if($!==F)return D[O]=F,!0}else if($.equals(F)===!1)return $.copy(F),!0}return!1}function T(L){const N=L.uniforms;let P=0;const D=16;for(let O=0,$=N.length;O<$;O++){const w=Array.isArray(N[O])?N[O]:[N[O]];for(let b=0,V=w.length;b<V;b++){const G=w[b],q=Array.isArray(G.value)?G.value:[G.value];for(let ne=0,fe=q.length;ne<fe;ne++){const te=q[ne],K=C(te),Y=P%D,de=Y%K.boundary,se=Y+de;P+=de,se!==0&&D-se<K.storage&&(P+=D-se),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=P,P+=K.storage}}}const F=P%D;return F>0&&(P+=D-F),L.__size=P,L.__cache={},this}function C(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:p,update:m,dispose:_}}const RE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function bE(){return Ti===null&&(Ti=new Sv(RE,16,16,Xs,Zi),Ti.name="DFG_LUT",Ti.minFilter=En,Ti.magFilter=En,Ti.wrapS=Yi,Ti.wrapT=Yi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class PE{constructor(e={}){const{canvas:n=q_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=jn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const C=M,S=new Set([ld,od,ad]),_=new Set([jn,Ni,Xa,ja,rd,sd]),L=new Uint32Array(4),N=new Int32Array(4);let P=null,D=null;const F=[],O=[];let $=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let b=!1;this._outputColorSpace=ni;let V=0,G=0,q=null,ne=-1,fe=null;const te=new Kt,K=new Kt;let Y=null;const de=new wt(0);let se=0,U=n.width,le=n.height,Re=1,Ge=null,$e=null;const ie=new Kt(0,0,U,le),he=new Kt(0,0,U,le);let Se=!1;const ke=new hd;let De=!1,ft=!1;const Vt=new qt,ct=new ee,gt=new Kt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ut(){return q===null?Re:1}let B=r;function Ot(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nd}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),B===null){const j="webgl2";if(B=Ot(j,A),B===null)throw Ot(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let pt,_t,We,R,y,k,ce,pe,oe,Be,xe,Pe,Ze,ge,Te,Fe,Oe,Ae,et,W,Le,Ee,Ie,ye;function me(){pt=new by(B),pt.init(),Ee=new SE(B,pt),_t=new Sy(B,pt,e,Ee),We=new vE(B,pt),_t.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),R=new Ny(B),y=new iE,k=new xE(B,pt,We,y,_t,Ee,R),ce=new My(w),pe=new Ry(w),oe=new Fv(B),Ie=new vy(B,oe),Be=new Py(B,oe,R,Ie),xe=new Iy(B,Be,oe,R),et=new Dy(B,_t,k),Fe=new yy(y),Pe=new nE(w,ce,pe,pt,_t,Ie,Fe),Ze=new AE(w,y),ge=new sE,Te=new fE(pt),Ae=new _y(w,ce,pe,We,xe,T,p),Oe=new gE(w,xe,_t),ye=new CE(B,R,_t,We),W=new xy(B,pt,R),Le=new Ly(B,pt,R),R.programs=Pe.programs,w.capabilities=_t,w.extensions=pt,w.properties=y,w.renderLists=ge,w.shadowMap=Oe,w.state=We,w.info=R}me(),C!==jn&&($=new Fy(C,n.width,n.height,o,c));const be=new TE(w,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(U,le,!1))},this.getSize=function(A){return A.set(U,le)},this.setSize=function(A,j,ue=!0){if(be.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,le=j,n.width=Math.floor(A*Re),n.height=Math.floor(j*Re),ue===!0&&(n.style.width=A+"px",n.style.height=j+"px"),$!==null&&$.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(U*Re,le*Re).floor()},this.setDrawingBufferSize=function(A,j,ue){U=A,le=j,Re=ue,n.width=Math.floor(A*ue),n.height=Math.floor(j*ue),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,j,ue,re){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,j,ue,re),We.viewport(te.copy(ie).multiplyScalar(Re).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,j,ue,re){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,j,ue,re),We.scissor(K.copy(he).multiplyScalar(Re).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){We.setScissorTest(Se=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){$e=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ue=!0){let re=0;if(A){let Q=!1;if(q!==null){const Ne=q.texture.format;Q=S.has(Ne)}if(Q){const Ne=q.texture.type,ze=_.has(Ne),Ce=Ae.getClearColor(),je=Ae.getClearAlpha(),He=Ce.r,rt=Ce.g,Qe=Ce.b;ze?(L[0]=He,L[1]=rt,L[2]=Qe,L[3]=je,B.clearBufferuiv(B.COLOR,0,L)):(N[0]=He,N[1]=rt,N[2]=Qe,N[3]=je,B.clearBufferiv(B.COLOR,0,N))}else re|=B.COLOR_BUFFER_BIT}j&&(re|=B.DEPTH_BUFFER_BIT),ue&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),Ae.dispose(),ge.dispose(),Te.dispose(),y.dispose(),ce.dispose(),pe.dispose(),xe.dispose(),Ie.dispose(),ye.dispose(),Pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Pr),be.removeEventListener("sessionend",Lr),ri.stop()};function st(A){A.preventDefault(),Zp("WebGLRenderer: Context Lost."),b=!0}function Nt(){Zp("WebGLRenderer: Context Restored."),b=!1;const A=R.autoReset,j=Oe.enabled,ue=Oe.autoUpdate,re=Oe.needsUpdate,Q=Oe.type;me(),R.autoReset=A,Oe.enabled=j,Oe.autoUpdate=ue,Oe.needsUpdate=re,Oe.type=Q}function yt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){const j=A.target;j.removeEventListener("dispose",Bn),wn(j)}function wn(A){Zs(A),y.remove(A)}function Zs(A){const j=y.get(A).programs;j!==void 0&&(j.forEach(function(ue){Pe.releaseProgram(ue)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ue,re,Q,Ne){j===null&&(j=St);const ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=no(A,j,ue,re,Q);We.setMaterial(re,ze);let je=ue.index,He=1;if(re.wireframe===!0){if(je=Be.getWireframeAttribute(ue),je===void 0)return;He=2}const rt=ue.drawRange,Qe=ue.attributes.position;let dt=rt.start*He,Mt=(rt.start+rt.count)*He;Ne!==null&&(dt=Math.max(dt,Ne.start*He),Mt=Math.min(Mt,(Ne.start+Ne.count)*He)),je!==null?(dt=Math.max(dt,0),Mt=Math.min(Mt,je.count)):Qe!=null&&(dt=Math.max(dt,0),Mt=Math.min(Mt,Qe.count));const Ft=Mt-dt;if(Ft<0||Ft===1/0)return;Ie.setup(Q,re,Ce,ue,je);let It,At=W;if(je!==null&&(It=oe.get(je),At=Le,At.setIndex(It)),Q.isMesh)re.wireframe===!0?(We.setLineWidth(re.wireframeLinewidth*Ut()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(Q.isLine){let Je=re.linewidth;Je===void 0&&(Je=1),We.setLineWidth(Je*Ut()),Q.isLineSegments?At.setMode(B.LINES):Q.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else Q.isPoints?At.setMode(B.POINTS):Q.isSprite&&At.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))At.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Je=Q._multiDrawStarts,Pt=Q._multiDrawCounts,vt=Q._multiDrawCount,gn=je?oe.get(je).bytesPerElement:1,vi=y.get(re).currentProgram.getUniforms();for(let en=0;en<vt;en++)vi.setValue(B,"_gl_DrawID",en),At.render(Je[en]/gn,Pt[en])}else if(Q.isInstancedMesh)At.renderInstances(dt,Ft,Q.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Pt=Math.min(ue.instanceCount,Je);At.renderInstances(dt,Ft,Pt)}else At.render(dt,Ft)};function Ji(A,j,ue){A.transparent===!0&&A.side===Ci&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Nr(A,j,ue),A.side=Rr,A.needsUpdate=!0,Nr(A,j,ue),A.side=Ci):Nr(A,j,ue)}this.compile=function(A,j,ue=null){ue===null&&(ue=A),D=Te.get(ue),D.init(j),O.push(D),ue.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),A!==ue&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const re=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Ce=Ne[ze];Ji(Ce,ue,Q),re.add(Ce)}else Ji(Ne,ue,Q),re.add(Ne)}),D=O.pop(),re},this.compileAsync=function(A,j,ue=null){const re=this.compile(A,j,ue);return new Promise(Q=>{function Ne(){if(re.forEach(function(ze){y.get(ze).currentProgram.isReady()&&re.delete(ze)}),re.size===0){Q(A);return}setTimeout(Ne,10)}pt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Qs=null;function br(A){Qs&&Qs(A)}function Pr(){ri.stop()}function Lr(){ri.start()}const ri=new Mg;ri.setAnimationLoop(br),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(A){Qs=A,be.setAnimationLoop(A),A===null?ri.stop():ri.start()},be.addEventListener("sessionstart",Pr),be.addEventListener("sessionend",Lr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const ue=be.enabled===!0&&be.isPresenting===!0,re=$!==null&&(q===null||ue)&&$.begin(w,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,j,q),D=Te.get(A,O.length),D.init(j),O.push(D),Vt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(Vt,bi,j.reversedDepth),ft=this.localClippingEnabled,De=Fe.init(this.clippingPlanes,ft),P=ge.get(A,F.length),P.init(),F.push(P),be.enabled===!0&&be.isPresenting===!0){const ze=w.xr.getDepthSensingMesh();ze!==null&&Js(ze,j,-1/0,w.sortObjects)}Js(A,j,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(Ge,$e),it=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,it&&Ae.addToRenderList(P,A),this.info.render.frame++,De===!0&&Fe.beginShadows();const Q=D.state.shadowsArray;if(Oe.render(Q,A,j),De===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&$.hasRenderPass())===!1){const ze=P.opaque,Ce=P.transmissive;if(D.setupLights(),j.isArrayCamera){const je=j.cameras;if(Ce.length>0)for(let He=0,rt=je.length;He<rt;He++){const Qe=je[He];eo(ze,Ce,A,Qe)}it&&Ae.render(A);for(let He=0,rt=je.length;He<rt;He++){const Qe=je[He];Ja(P,A,Qe,Qe.viewport)}}else Ce.length>0&&eo(ze,Ce,A,j),it&&Ae.render(A),Ja(P,A,j)}q!==null&&G===0&&(k.updateMultisampleRenderTarget(q),k.updateRenderTargetMipmap(q)),re&&$.end(w),A.isScene===!0&&A.onAfterRender(w,A,j),Ie.resetDefaultState(),ne=-1,fe=null,O.pop(),O.length>0?(D=O[O.length-1],De===!0&&Fe.setGlobalState(w.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function Js(A,j,ue,re){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){re&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Vt);const ze=xe.update(A),Ce=A.material;Ce.visible&&P.push(A,ze,Ce,ue,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const ze=xe.update(A),Ce=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),gt.copy(ze.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(Vt)),Array.isArray(Ce)){const je=ze.groups;for(let He=0,rt=je.length;He<rt;He++){const Qe=je[He],dt=Ce[Qe.materialIndex];dt&&dt.visible&&P.push(A,ze,dt,ue,gt.z,Qe)}}else Ce.visible&&P.push(A,ze,Ce,ue,gt.z,null)}}const Ne=A.children;for(let ze=0,Ce=Ne.length;ze<Ce;ze++)Js(Ne[ze],j,ue,re)}function Ja(A,j,ue,re){const{opaque:Q,transmissive:Ne,transparent:ze}=A;D.setupLightsView(ue),De===!0&&Fe.setGlobalState(w.clippingPlanes,ue),re&&We.viewport(te.copy(re)),Q.length>0&&Yn(Q,j,ue),Ne.length>0&&Yn(Ne,j,ue),ze.length>0&&Yn(ze,j,ue),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function eo(A,j,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const dt=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new Li(1,1,{generateMipmaps:!0,type:dt?Zi:jn,minFilter:ts,samples:_t.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[re.id],ze=re.viewport||te;Ne.setSize(ze.z*w.transmissionResolutionScale,ze.w*w.transmissionResolutionScale);const Ce=w.getRenderTarget(),je=w.getActiveCubeFace(),He=w.getActiveMipmapLevel();w.setRenderTarget(Ne),w.getClearColor(de),se=w.getClearAlpha(),se<1&&w.setClearColor(16777215,.5),w.clear(),it&&Ae.render(ue);const rt=w.toneMapping;w.toneMapping=Pi;const Qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),De===!0&&Fe.setGlobalState(w.clippingPlanes,re),Yn(A,ue,re),k.updateMultisampleRenderTarget(Ne),k.updateRenderTargetMipmap(Ne),pt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Mt=0,Ft=j.length;Mt<Ft;Mt++){const It=j[Mt],{object:At,geometry:Je,material:Pt,group:vt}=It;if(Pt.side===Ci&&At.layers.test(re.layers)){const gn=Pt.side;Pt.side=kn,Pt.needsUpdate=!0,ea(At,ue,re,Je,Pt,vt),Pt.side=gn,Pt.needsUpdate=!0,dt=!0}}dt===!0&&(k.updateMultisampleRenderTarget(Ne),k.updateRenderTargetMipmap(Ne))}w.setRenderTarget(Ce,je,He),w.setClearColor(de,se),Qe!==void 0&&(re.viewport=Qe),w.toneMapping=rt}function Yn(A,j,ue){const re=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Ne=A.length;Q<Ne;Q++){const ze=A[Q],{object:Ce,geometry:je,group:He}=ze;let rt=ze.material;rt.allowOverride===!0&&re!==null&&(rt=re),Ce.layers.test(ue.layers)&&ea(Ce,j,ue,je,rt,He)}}function ea(A,j,ue,re,Q,Ne){A.onBeforeRender(w,j,ue,re,Q,Ne),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(w,j,ue,re,A,Ne),Q.transparent===!0&&Q.side===Ci&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,w.renderBufferDirect(ue,j,re,Q,A,Ne),Q.side=Rr,Q.needsUpdate=!0,w.renderBufferDirect(ue,j,re,Q,A,Ne),Q.side=Ci):w.renderBufferDirect(ue,j,re,Q,A,Ne),A.onAfterRender(w,j,ue,re,Q,Ne)}function Nr(A,j,ue){j.isScene!==!0&&(j=St);const re=y.get(A),Q=D.state.lights,Ne=D.state.shadowsArray,ze=Q.state.version,Ce=Pe.getParameters(A,Q.state,Ne,j,ue),je=Pe.getProgramCacheKey(Ce);let He=re.programs;re.environment=A.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(A.isMeshStandardMaterial?pe:ce).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Bn),He=new Map,re.programs=He);let rt=He.get(je);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===ze)return ta(A,Ce),rt}else Ce.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Ce,w),rt=Pe.acquireProgram(Ce,je),He.set(je,rt),re.uniforms=Ce.uniforms;const Qe=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Fe.uniform),ta(A,Ce),re.needsLights=ro(A),re.lightsStateVersion=ze,re.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function to(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ta(A,j){const ue=y.get(A);ue.outputColorSpace=j.outputColorSpace,ue.batching=j.batching,ue.batchingColor=j.batchingColor,ue.instancing=j.instancing,ue.instancingColor=j.instancingColor,ue.instancingMorph=j.instancingMorph,ue.skinning=j.skinning,ue.morphTargets=j.morphTargets,ue.morphNormals=j.morphNormals,ue.morphColors=j.morphColors,ue.morphTargetsCount=j.morphTargetsCount,ue.numClippingPlanes=j.numClippingPlanes,ue.numIntersection=j.numClipIntersection,ue.vertexAlphas=j.vertexAlphas,ue.vertexTangents=j.vertexTangents,ue.toneMapping=j.toneMapping}function no(A,j,ue,re,Q){j.isScene!==!0&&(j=St),k.resetTextureUnits();const Ne=j.fog,ze=re.isMeshStandardMaterial?j.environment:null,Ce=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:js,je=(re.isMeshStandardMaterial?pe:ce).get(re.envMap||ze),He=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,rt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Qe=!!ue.morphAttributes.position,dt=!!ue.morphAttributes.normal,Mt=!!ue.morphAttributes.color;let Ft=Pi;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ft=w.toneMapping);const It=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,At=It!==void 0?It.length:0,Je=y.get(re),Pt=D.state.lights;if(De===!0&&(ft===!0||A!==fe)){const an=A===fe&&re.id===ne;Fe.setState(re,A,an)}let vt=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Pt.state.version||Je.outputColorSpace!==Ce||Q.isBatchedMesh&&Je.batching===!1||!Q.isBatchedMesh&&Je.batching===!0||Q.isBatchedMesh&&Je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Je.instancing===!1||!Q.isInstancedMesh&&Je.instancing===!0||Q.isSkinnedMesh&&Je.skinning===!1||!Q.isSkinnedMesh&&Je.skinning===!0||Q.isInstancedMesh&&Je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Je.instancingMorph===!1&&Q.morphTexture!==null||Je.envMap!==je||re.fog===!0&&Je.fog!==Ne||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Fe.numPlanes||Je.numIntersection!==Fe.numIntersection)||Je.vertexAlphas!==He||Je.vertexTangents!==rt||Je.morphTargets!==Qe||Je.morphNormals!==dt||Je.morphColors!==Mt||Je.toneMapping!==Ft||Je.morphTargetsCount!==At)&&(vt=!0):(vt=!0,Je.__version=re.version);let gn=Je.currentProgram;vt===!0&&(gn=Nr(re,j,Q));let vi=!1,en=!1,Dr=!1;const Lt=gn.getUniforms(),ot=Je.uniforms;if(We.useProgram(gn.program)&&(vi=!0,en=!0,Dr=!0),re.id!==ne&&(ne=re.id,en=!0),vi||fe!==A){We.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(B,"projectionMatrix",A.projectionMatrix),Lt.setValue(B,"viewMatrix",A.matrixWorldInverse);const on=Lt.map.cameraPosition;on!==void 0&&on.setValue(B,ct.setFromMatrixPosition(A.matrixWorld)),_t.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,en=!0,Dr=!0)}if(Je.needsLights&&(Pt.state.directionalShadowMap.length>0&&Lt.setValue(B,"directionalShadowMap",Pt.state.directionalShadowMap,k),Pt.state.spotShadowMap.length>0&&Lt.setValue(B,"spotShadowMap",Pt.state.spotShadowMap,k),Pt.state.pointShadowMap.length>0&&Lt.setValue(B,"pointShadowMap",Pt.state.pointShadowMap,k)),Q.isSkinnedMesh){Lt.setOptional(B,Q,"bindMatrix"),Lt.setOptional(B,Q,"bindMatrixInverse");const an=Q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Lt.setValue(B,"boneTexture",an.boneTexture,k))}Q.isBatchedMesh&&(Lt.setOptional(B,Q,"batchingTexture"),Lt.setValue(B,"batchingTexture",Q._matricesTexture,k),Lt.setOptional(B,Q,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",Q._indirectTexture,k),Lt.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",Q._colorsTexture,k));const An=ue.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&et.update(Q,ue,gn),(en||Je.receiveShadow!==Q.receiveShadow)&&(Je.receiveShadow=Q.receiveShadow,Lt.setValue(B,"receiveShadow",Q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(ot.envMap.value=je,ot.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(ot.envMapIntensity.value=j.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=bE()),en&&(Lt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&io(ot,Dr),Ne&&re.fog===!0&&Ze.refreshFogUniforms(ot,Ne),Ze.refreshMaterialUniforms(ot,re,Re,le,D.state.transmissionRenderTarget[A.id]),Ul.upload(B,to(Je),ot,k)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ul.upload(B,to(Je),ot,k),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(B,"center",Q.center),Lt.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(B,"normalMatrix",Q.normalMatrix),Lt.setValue(B,"modelMatrix",Q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const an=re.uniformsGroups;for(let on=0,rs=an.length;on<rs;on++){const xi=an[on];ye.update(xi,gn),ye.bind(xi,gn)}}return gn}function io(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ro(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,j,ue){const re=y.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),y.get(A.texture).__webglTexture=j,y.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ue=y.get(A);ue.__webglFramebuffer=j,ue.__useDefaultFramebuffer=j===void 0};const Wl=B.createFramebuffer();this.setRenderTarget=function(A,j=0,ue=0){q=A,V=j,G=ue;let re=null,Q=!1,Ne=!1;if(A){const Ce=y.get(A);if(Ce.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(B.FRAMEBUFFER,Ce.__webglFramebuffer),te.copy(A.viewport),K.copy(A.scissor),Y=A.scissorTest,We.viewport(te),We.scissor(K),We.setScissorTest(Y),ne=-1;return}else if(Ce.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Ce.__hasExternalTextures)k.rebindTextures(A,y.get(A.texture).__webglTexture,y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&y.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);const He=y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[j])?re=He[j][ue]:re=He[j],Q=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?re=y.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?re=He[ue]:re=He,te.copy(A.viewport),K.copy(A.scissor),Y=A.scissorTest}else te.copy(ie).multiplyScalar(Re).floor(),K.copy(he).multiplyScalar(Re).floor(),Y=Se;if(ue!==0&&(re=Wl),We.bindFramebuffer(B.FRAMEBUFFER,re)&&We.drawBuffers(A,re),We.viewport(te),We.scissor(K),We.setScissorTest(Y),Q){const Ce=y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,ue)}else if(Ne){const Ce=j;for(let je=0;je<A.textures.length;je++){const He=y.get(A.textures[je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+je,He.__webglTexture,ue,Ce)}}else if(A!==null&&ue!==0){const Ce=y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ce.__webglTexture,ue)}ne=-1},this.readRenderTargetPixels=function(A,j,ue,re,Q,Ne,ze,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){We.bindFramebuffer(B.FRAMEBUFFER,je);try{const He=A.textures[Ce],rt=He.format,Qe=He.type;if(!_t.textureFormatReadable(rt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-re&&ue>=0&&ue<=A.height-Q&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ce),B.readPixels(j,ue,re,Q,Ee.convert(rt),Ee.convert(Qe),Ne))}finally{const He=q!==null?y.get(q).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,j,ue,re,Q,Ne,ze,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je)if(j>=0&&j<=A.width-re&&ue>=0&&ue<=A.height-Q){We.bindFramebuffer(B.FRAMEBUFFER,je);const He=A.textures[Ce],rt=He.format,Qe=He.type;if(!_t.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,Ne.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ce),B.readPixels(j,ue,re,Q,Ee.convert(rt),Ee.convert(Qe),0);const Mt=q!==null?y.get(q).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,Mt);const Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Y_(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ne),B.deleteBuffer(dt),B.deleteSync(Ft),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ue=0){const re=Math.pow(2,-ue),Q=Math.floor(A.image.width*re),Ne=Math.floor(A.image.height*re),ze=j!==null?j.x:0,Ce=j!==null?j.y:0;k.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,ze,Ce,Q,Ne),We.unbindTexture()};const Xl=B.createFramebuffer(),Wt=B.createFramebuffer();this.copyTextureToTexture=function(A,j,ue=null,re=null,Q=0,Ne=null){Ne===null&&(Q!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=Q,Q=0):Ne=0);let ze,Ce,je,He,rt,Qe,dt,Mt,Ft;const It=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ue!==null)ze=ue.max.x-ue.min.x,Ce=ue.max.y-ue.min.y,je=ue.isBox3?ue.max.z-ue.min.z:1,He=ue.min.x,rt=ue.min.y,Qe=ue.isBox3?ue.min.z:0;else{const An=Math.pow(2,-Q);ze=Math.floor(It.width*An),Ce=Math.floor(It.height*An),A.isDataArrayTexture?je=It.depth:A.isData3DTexture?je=Math.floor(It.depth*An):je=1,He=0,rt=0,Qe=0}re!==null?(dt=re.x,Mt=re.y,Ft=re.z):(dt=0,Mt=0,Ft=0);const At=Ee.convert(j.format),Je=Ee.convert(j.type);let Pt;j.isData3DTexture?(k.setTexture3D(j,0),Pt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(k.setTexture2DArray(j,0),Pt=B.TEXTURE_2D_ARRAY):(k.setTexture2D(j,0),Pt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=B.getParameter(B.UNPACK_ROW_LENGTH),gn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),vi=B.getParameter(B.UNPACK_SKIP_PIXELS),en=B.getParameter(B.UNPACK_SKIP_ROWS),Dr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,He),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);const Lt=A.isDataArrayTexture||A.isData3DTexture,ot=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const An=y.get(A),an=y.get(j),on=y.get(An.__renderTarget),rs=y.get(an.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,on.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let xi=0;xi<je;xi++)Lt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(A).__webglTexture,Q,Qe+xi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(j).__webglTexture,Ne,Ft+xi)),B.blitFramebuffer(He,rt,ze,Ce,dt,Mt,ze,Ce,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||y.has(A)){const An=y.get(A),an=y.get(j);We.bindFramebuffer(B.READ_FRAMEBUFFER,Xl),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wt);for(let on=0;on<je;on++)Lt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,An.__webglTexture,Q,Qe+on):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,An.__webglTexture,Q),ot?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,Ne,Ft+on):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,Ne),Q!==0?B.blitFramebuffer(He,rt,ze,Ce,dt,Mt,ze,Ce,B.COLOR_BUFFER_BIT,B.NEAREST):ot?B.copyTexSubImage3D(Pt,Ne,dt,Mt,Ft+on,He,rt,ze,Ce):B.copyTexSubImage2D(Pt,Ne,dt,Mt,He,rt,ze,Ce);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ot?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Pt,Ne,dt,Mt,Ft,ze,Ce,je,At,Je,It.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,Ne,dt,Mt,Ft,ze,Ce,je,At,It.data):B.texSubImage3D(Pt,Ne,dt,Mt,Ft,ze,Ce,je,At,Je,It):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ne,dt,Mt,ze,Ce,At,Je,It.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ne,dt,Mt,It.width,It.height,At,It.data):B.texSubImage2D(B.TEXTURE_2D,Ne,dt,Mt,ze,Ce,At,Je,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,vi),B.pixelStorei(B.UNPACK_SKIP_ROWS,en),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Dr),Ne===0&&j.generateMipmaps&&B.generateMipmap(Pt),We.unbindTexture()},this.initRenderTarget=function(A){y.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){V=0,G=0,q=null,We.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function LE(){const s=$t.useRef(null);return $t.useEffect(()=>{const e=s.current;if(!e)return;const n=e.clientWidth,r=e.clientHeight,o=new xv;o.fog=new dd(13940886,.0048);const c=new ii(50,n/r,.1,1e3);c.position.set(0,6,35),c.lookAt(0,11,-70);const u=new PE({antialias:!0,alpha:!0});u.setSize(n,r),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=Wm,e.appendChild(u.domElement);const d=new Nv(10259061,1.4);o.add(d);const p=new vm(16769720,6);p.position.set(60,15,-100),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,o.add(p);const m=new vm(11902592,2);m.position.set(-60,15,20),o.add(m);const v=new wi,g=new wi,x=new wi,M=new wi;o.add(v),o.add(g),o.add(x),o.add(M);const T=45,C=new qn,S=new Float32Array(T*3);for(let R=0;R<T;R++)S[R*3]=(Math.random()-.5)*150,S[R*3+1]=25+Math.random()*40,S[R*3+2]=-80-Math.random()*70;C.setAttribute("position",new _i(S,3));const _=new xg({color:16773328,size:.28,transparent:!0,opacity:.25,blending:Fl}),L=new Tv(C,_);M.add(L);const N=(()=>{const R=document.createElement("canvas");R.width=64,R.height=256;const y=R.getContext("2d"),k=y.createLinearGradient(0,256,0,0);return k.addColorStop(0,"rgba(253, 200, 120, 0.18)"),k.addColorStop(.5,"rgba(253, 200, 120, 0.05)"),k.addColorStop(1,"rgba(253, 200, 120, 0)"),y.fillStyle=k,y.fillRect(0,0,64,256),new wv(R)})(),P=6,D=[],F=new Qa(24,140);for(let R=0;R<P;R++){const y=new Wa({map:N,transparent:!0,opacity:.12,blending:Fl,depthWrite:!1,side:Ci}),k=new Gt(F,y);k.position.set(60,10,-95),k.rotation.z=-.7+R*.26,k.position.z+=R*.1,M.add(k),D.push({mesh:k,speed:.3+Math.random()*.4,baseOpacity:.04+Math.random()*.08})}const O=new wi;O.position.y=-18;const $=65,w=[],b=new Ba({color:12888194,roughness:.85,metalness:.05,flatShading:!0}),V=new Wa({color:16775399,toneMapped:!1});for(let R=0;R<$;R++){let y,k,ce,pe,oe;if(R===0)y=0,k=-65,ce=58,pe=5,oe=5;else{y=(Math.random()-.5)*145,Math.abs(y)<6&&(y+=y>=0?6:-6),k=-55-Math.random()*115;const Ze=Math.abs(y),ge=Math.max(0,1-Ze/75);ce=8+Math.random()*20+ge*26,pe=3.2+Math.random()*4,oe=3.2+Math.random()*4}const Be=90,xe=new Cr(pe,ce+Be,oe),Pe=new Gt(xe,b);if(Pe.position.set(y,(ce-Be)/2,k),Pe.castShadow=!0,Pe.receiveShadow=!0,O.add(Pe),R===0){const ge=ce*.98,Te=new Cr(.2,ge,.15),Fe=new Gt(Te,V);Fe.position.set(-pe*.25,ce*.05,oe/2+.08),Pe.add(Fe);const Oe=new Gt(Te,V);Oe.position.set(pe*.25,ce*.05,oe/2+.08),Pe.add(Oe)}if(R!==0&&ce>18&&Math.random()>.45){const Ze=new Wa({color:Math.random()>.3?16768947:16754780}),ge=Math.floor(ce/6);for(let Te=0;Te<ge;Te++){const Fe=(Math.random()-.5)*(ce-6),Oe=(Math.random()-.5)*(pe-1),Ae=new Cr(.12,.12,.05),et=new Gt(Ae,Ze);et.position.set(Oe,Fe,oe/2+.02),Pe.add(et)}}w.push(Pe)}x.add(O);const G=new Ba({color:1708560,roughness:.95,metalness:.05,flatShading:!0}),q=new Gt(new pi(120,24,24),G);q.position.set(-45,-112,-85),q.scale.set(1.3,.6,1),q.receiveShadow=!0,x.add(q);const ne=new Gt(new pi(130,24,24),G);ne.position.set(50,-118,-95),ne.scale.set(1.4,.6,1),ne.receiveShadow=!0,x.add(ne);const fe=new Gt(new pi(140,32,32),G);fe.position.set(-95,-125,-60),fe.scale.set(1.2,.65,1),fe.receiveShadow=!0,g.add(fe);const te=new Gt(new pi(140,32,32),G);te.position.set(95,-132,-65),te.scale.set(1.3,.65,1),te.receiveShadow=!0,g.add(te);const K=new Gt(new pi(135,32,32),G);K.position.set(-50,-122,-38),K.scale.set(1,.68,1),K.receiveShadow=!0,g.add(K);const Y=new Gt(new pi(145,32,32),G);Y.position.set(55,-131,-48),Y.scale.set(1.1,.68,1),Y.receiveShadow=!0,g.add(Y);const de=new Gt(new pi(110,48,48),G);de.position.set(0,-99,6),de.scale.set(1.4,.55,1),de.receiveShadow=!0,v.add(de);const se=new md(.12,1.8,3),U=new Ba({color:1182987,roughness:1,flatShading:!0}),le=(R,y,k,ce,pe,oe,Be,xe,Pe,Ze)=>{for(let ge=0;ge<xe;ge++){const Te=Pe+ge/xe*(Ze-Pe)+(Math.random()-.5)*.02,Fe=y+Math.sin(Te)*pe*oe,Oe=k-.4+Math.cos(Te)*pe*Be,Ae=ce+.2+(Math.random()-.5)*1.5,et=new Gt(se,U);et.position.set(Fe,Oe,Ae),et.rotation.z=-Te+(Math.random()-.5)*.45,et.rotation.x=(Math.random()-.5)*.3;const W=.45+Math.random()*.75,Le=.55+Math.random()*.45;et.scale.set(Le,W,Le),R.add(et)}};le(v,0,-99,6,110,1.4,.55,220,-.72,.72),le(g,-50,-122,-38,135,1,.68,80,-.4,.5),le(g,55,-131,-48,145,1.1,.68,80,-.5,.4);const Re=new Ba({color:16768952,roughness:.95,metalness:0,flatShading:!0});function Ge(R,y,k,ce){const pe=new wi;pe.position.set(R,y,k);const oe=9+Math.floor(Math.random()*5),Be=[];for(let xe=0;xe<oe;xe++){const Pe=4+Math.random()*5.5,Ze=new pi(Pe,8,8),ge=new Gt(Ze,Re),Te=(Math.random()-.5)*14,Fe=(Math.random()-.5)*5,Oe=(Math.random()-.5)*12;ge.position.set(Te,Fe,Oe),ge.scale.set(1,.75+Math.random()*.25,1),pe.add(ge),Be.push(ge)}return pe.scale.set(ce,ce,ce),M.add(pe),{group:pe,spheres:Be,speed:.015+Math.random()*.015}}const $e=Ge(-55,8,-70,1.7),ie=Ge(-72,18,-85,1.35),he=[Ge(20,18,-95,.85),Ge(65,22,-115,1.1),Ge(-10,24,-90,.75)],Se=new Ba({color:13940886,roughness:.95,metalness:0,transparent:!0,opacity:.4,flatShading:!0});function ke(R,y,k,ce,pe,oe){const Be=new pi(6,6,6),xe=new Gt(Be,Se);return xe.position.set(R,y,k),xe.scale.set(ce,pe*.25,oe),g.add(xe),xe}const De=[ke(-30,-5,-45,4.5,1.2,2.5),ke(40,-8,-55,5,1,3),ke(-10,-7,-25,3.5,.8,2),ke(15,-4,-15,3,.6,1.8)];let ft=0,Vt=0,ct=0,gt=6,St=0,it=0;const Ut=R=>{ft=R.clientX/window.innerWidth-.5,Vt=R.clientY/window.innerHeight-.5};window.addEventListener("mousemove",Ut,{passive:!0});const B=()=>{St=window.scrollY};window.addEventListener("scroll",B,{passive:!0});let Ot=new Iv,pt;const _t=()=>{pt=requestAnimationFrame(_t);const R=Ot.getElapsedTime();_.opacity=.2+Math.sin(R*1.6)*.1,D.forEach((y,k)=>{y.mesh.material.opacity=y.baseOpacity+Math.sin(R*y.speed+k)*.03}),$e.spheres.forEach((y,k)=>{y.scale.y=.75+Math.sin(R*.5+k)*.04}),ie.spheres.forEach((y,k)=>{y.scale.y=.75+Math.sin(R*.4+k)*.04}),he.forEach(y=>{y.group.position.x+=y.speed,y.group.position.x>95&&(y.group.position.x=-95,y.group.position.y=10+Math.random()*15),y.spheres.forEach((k,ce)=>{k.scale.y=.75+Math.sin(R*.75+ce)*.04})}),it+=(St-it)*.08,v.position.y=it*-.022,g.position.y=it*-.015,x.position.y=it*-.008,M.position.y=it*-.003,ct=ft*14,gt=6-Vt*7,c.position.x+=(ct-c.position.x)*.04,c.position.y+=(gt-c.position.y)*.04,c.lookAt(0,10-it*.006,-70),u.render(o,c)};_t();const We=()=>{if(!e)return;const R=e.clientWidth,y=e.clientHeight;c.aspect=R/y,c.updateProjectionMatrix(),u.setSize(R,y)};return window.addEventListener("resize",We),()=>{window.removeEventListener("mousemove",Ut),window.removeEventListener("scroll",B),window.removeEventListener("resize",We),cancelAnimationFrame(pt),e.contains(u.domElement)&&e.removeChild(u.domElement),C.dispose(),_.dispose(),b.dispose(),V.dispose(),G.dispose(),F.dispose(),N.dispose(),se.dispose(),U.dispose(),Re.dispose(),Se.dispose(),w.forEach(R=>{R.geometry.dispose()}),q.geometry.dispose(),ne.geometry.dispose(),fe.geometry.dispose(),te.geometry.dispose(),K.geometry.dispose(),Y.geometry.dispose(),de.geometry.dispose(),D.forEach(R=>{R.mesh.material.dispose()}),De.forEach(R=>{R.geometry.dispose()}),$e.spheres.forEach(R=>{R.geometry.dispose()}),ie.spheres.forEach(R=>{R.geometry.dispose()}),he.forEach(R=>{R.spheres.forEach(y=>{y.geometry.dispose()})}),u.dispose()}},[]),H.jsx("div",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",background:"linear-gradient(to bottom, #8a7060 0%, #b38550 35%, #c8862a 60%, #e8a845 82%, #f5c878 100%)",overflow:"hidden",zIndex:1}})}const bl=[{id:"fmcg",category:"consumer",name:"Consumer Goods & FMCG",tagline:"Everyday essentials, crafted for a premium lifestyle.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"]},{id:"manufacturing",category:"tech",name:"Manufacturing",tagline:"Precision engineering and smart factories of tomorrow.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=600&auto=format&fit=crop"]},{id:"warehousing",category:"tech",name:"Warehousing & Logistics",tagline:"Seamless fulfillment centers driving global supply chains.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1553413719-875871274712?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"]},{id:"consumer-tech",category:"tech",name:"Consumer Tech & Apps",tagline:"Beautifully designed interfaces connecting people.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551645121-d1034da75057?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1580927751497-69f9c7e98a3c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"]},{id:"saas",category:"tech",name:"SaaS",tagline:"Enterprise workflows streamlined into single-pane control.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"]},{id:"ai-tools",category:"tech",name:"AI Tools & Agents",tagline:"The cognitive layer automating tasks and amplifying intellect.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"]},{id:"health",category:"consumer",name:"Health & Wellness",tagline:"Nurturing minds and bodies with mindful digital touchpoints.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"education",category:"creative",name:"Education",tagline:"Empowering curious minds through intuitive learning platforms.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"]},{id:"agriculture",category:"tech",name:"Agriculture",tagline:"Sustainable food tech and vertical crop optimization.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1560493527-3efd3243e023?q=80&w=600&auto=format&fit=crop"]},{id:"media",category:"creative",name:"Media, News & Entertainment",tagline:"Culture-defining storytelling that shapes the zeitgeist.",accent:"#ffeeba",images:["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"]},{id:"social-media",category:"creative",name:"Social Media",tagline:"Enabling next-generation content creators and networks.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"]},{id:"marketing",category:"creative",name:"Marketing",tagline:"Performance strategies backed by behavioral economics.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"]},{id:"tech-research",category:"tech",name:"Technology & Research",tagline:"Pioneering studies and technological breakthroughs.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"]},{id:"finance",category:"tech",name:"Finance & Compliance",tagline:"Intelligent asset management and compliance systems.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"]},{id:"real-estate",category:"consumer",name:"Real Estate",tagline:"Architectural structures designed with human scale in mind.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=600&auto=format&fit=crop"]},{id:"travel",category:"consumer",name:"Travel & Hospitality",tagline:"Curating bespoke travel diaries and sensory hotels.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"ips",category:"creative",name:"IPs & Creative Assets",tagline:"Protecting, fostering, and monetizing unique design IPs.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop"]},{id:"events",category:"consumer",name:"Events & Experiences",tagline:"Gathering communities in beautifully staged spaces.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"]}];function NE({items:s=[]}){const e=$t.useRef(null),[n,r]=$t.useState(0),[o,c]=$t.useState(!1),[u,d]=$t.useState(0),[p,m]=$t.useState(0),[v,g]=$t.useState(0),x=$t.useRef(0),M=$t.useRef(0),T=$t.useRef(null),C=s.map((G,q)=>({url:G.images[0],name:G.name,accent:G.accent})),_=360/(C.length||1),L=380;$t.useEffect(()=>{if(o){T.current&&cancelAnimationFrame(T.current);return}const G=.95,q=()=>{Math.abs(v)>.05?(r(ne=>ne+v),g(ne=>ne*G),T.current=requestAnimationFrame(q)):g(0)};return T.current=requestAnimationFrame(q),()=>{T.current&&cancelAnimationFrame(T.current)}},[o,v]);const N=G=>{c(!0),d(G),m(n),g(0),x.current=G,M.current=Date.now()},P=G=>{if(!o)return;const q=G-u,ne=.35,fe=p+q*ne;r(fe);const te=Date.now(),K=te-M.current;if(K>0){const de=(G-x.current)/K*12*ne;g(se=>se*.5+de*.5)}x.current=G,M.current=te},D=()=>{c(!1)},F=G=>{N(G.clientX)},O=G=>{P(G.clientX)},$=()=>{D()},w=G=>{G.touches.length>0&&N(G.touches[0].clientX)},b=G=>{G.touches.length>0&&P(G.touches[0].clientX)},V=()=>{D()};return $t.useEffect(()=>{const G=e.current;if(!G)return;const q=ne=>{o&&ne.preventDefault()};return G.addEventListener("touchmove",q,{passive:!1}),()=>{G.removeEventListener("touchmove",q)}},[o]),H.jsxs("div",{className:"dome-gallery-section",children:[H.jsxs("div",{className:"dome-gallery-header",children:[H.jsx("h3",{className:"section-title-accent",children:"Sectors in Motion"}),H.jsx("p",{className:"section-subtitle",children:"Swipe or drag to spin the 3D gallery and explore our active pursuits."})]}),H.jsx("div",{className:"dome-gallery-viewport",ref:e,onMouseDown:F,onMouseMove:O,onMouseUp:$,onMouseLeave:$,onTouchStart:w,onTouchMove:b,onTouchEnd:V,children:H.jsx("div",{className:"dome-gallery-cylinder",style:{transform:`translateZ(-${L}px) rotateY(${-n}deg)`,cursor:o?"grabbing":"grab"},children:C.map((G,q)=>{const ne=q*_;return H.jsxs("div",{className:"dome-gallery-card",style:{transform:`rotateY(${ne}deg) translateZ(${L}px)`,borderTop:`3px solid ${G.accent||"#fff"}`},children:[H.jsx("div",{className:"dome-card-image",style:{backgroundImage:`url("${G.url}")`}}),H.jsxs("div",{className:"dome-card-meta",children:[H.jsx("span",{className:"dome-card-number",children:(q+1).toString().padStart(2,"0")}),H.jsx("h4",{className:"dome-card-title",children:G.name})]})]},q)})})})]})}function DE(){const[s,e]=$t.useState(null),[n,r]=$t.useState(!1),o=[{id:1,type:"quote",content:"What starts here changes the world.",caption:"Our guiding light. Deeply committed to the pursuits that matter.",bg:"linear-gradient(135deg, #ffddcc 0%, #ffccd5 100%)",textColor:"#333",likes:"1,240",comments:"42"},{id:2,type:"image",url:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",caption:"Collaborating at the intersection of intellect and execution. #WHNLGroup",likes:"892",comments:"18"},{id:3,type:"quote",content:"One group, many pursuits and an obsession for excellence.",caption:"Diverse operations, singular standard. Excellence is not negotiable.",bg:"linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",textColor:"#2a4d33",likes:"1,053",comments:"29"},{id:4,type:"reel",thumbnail:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",caption:"🎥 WHNL Group Promo Reel 2026. A glimpse into our vision, industries, and pursuits. Press Play to experience.",likes:"3,412",comments:"115"},{id:5,type:"quote",content:"Rooted in clarity, action, impact, participation, consistency, tenacity with a dash of humour.",caption:"The foundation of everything we build. And yes, we don't take ourselves too seriously all the time.",bg:"linear-gradient(135deg, #cce5ff 0%, #b8daff 100%)",textColor:"#1d3a5f",likes:"940",comments:"31"},{id:6,type:"image",url:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",caption:"Quiet mornings in our workspace. Designing structures with human scale in mind.",likes:"612",comments:"11"},{id:7,type:"quote",content:"We probably say “why not” for everything that we do.",caption:"Because constraints are just rules someone else made up. We choose exploration.",bg:"linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)",textColor:"#533f03",likes:"1,114",comments:"54"},{id:8,type:"image",url:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",caption:"Dynamic systems. Scalable technology. Real impact.",likes:"743",comments:"14"},{id:9,type:"quote",content:"Unwavering participation, no limitations.",caption:"We show up. Fully. Every single day.",bg:"linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)",textColor:"#721c24",likes:"889",comments:"22"},{id:10,type:"quote",content:"We believe in ourselves almost to the point of delusion.",caption:"Call it crazy, call it bold. Every world-changing pursuit started with absolute belief.",bg:"linear-gradient(135deg, #e8dbfc 0%, #d6bbfb 100%)",textColor:"#3d126b",likes:"1,529",comments:"98"},{id:11,type:"image",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",caption:"Visualizing research & data pipelines. Precision at depth.",likes:"790",comments:"16"},{id:12,type:"quote",content:"An intersection of vision, intellect and impact.",caption:"Where theories turn into applications, and investments turn into impact.",bg:"linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)",textColor:"#0c5460",likes:"1,032",comments:"41"}],c=d=>{e(d),d.type==="reel"&&r(!0)},u=()=>{e(null),r(!1)};return H.jsxs("div",{className:"instagram-section",children:[H.jsx("div",{className:"instagram-header",children:H.jsxs("div",{className:"insta-profile-info",children:[H.jsx("div",{className:"insta-avatar",children:H.jsx("span",{className:"avatar-text",children:"W"})}),H.jsxs("div",{className:"insta-meta",children:[H.jsxs("div",{className:"insta-username-row",children:[H.jsx("h2",{className:"insta-username",children:"whnl.group"}),H.jsx("span",{className:"verified-badge",children:"✓"}),H.jsx("button",{className:"insta-follow-btn",children:"Follow"})]}),H.jsxs("div",{className:"insta-stats",children:[H.jsxs("span",{children:[H.jsx("strong",{children:"12"})," posts"]}),H.jsxs("span",{children:[H.jsx("strong",{children:"48.6K"})," followers"]}),H.jsxs("span",{children:[H.jsx("strong",{children:"142"})," following"]})]}),H.jsxs("div",{className:"insta-bio",children:[H.jsx("p",{className:"bio-name",children:"WHNL Group"}),H.jsx("p",{className:"bio-desc",children:"One group, many pursuits. Rooted in clarity, action, and impact."}),H.jsx("a",{href:"#explore",className:"bio-link",children:"zaina.international/whnl"})]})]})]})}),H.jsx("div",{className:"instagram-grid",children:o.map(d=>H.jsxs("div",{className:`instagram-grid-item ${d.type}`,onClick:()=>c(d),children:[d.type==="quote"&&H.jsxs("div",{className:"insta-quote-card",style:{background:d.bg,color:d.textColor},children:[H.jsxs("p",{className:"quote-text",children:["“",d.content,"”"]}),H.jsx("span",{className:"quote-branding",children:"WHNL"})]}),d.type==="image"&&H.jsx("div",{className:"insta-image-card",style:{backgroundImage:`url("${d.url}")`}}),d.type==="reel"&&H.jsxs("div",{className:"insta-image-card reel-card",style:{backgroundImage:`url("${d.thumbnail}")`},children:[H.jsxs("div",{className:"reel-badge",children:[H.jsx("svg",{viewBox:"0 0 24 24",className:"reel-svg-icon",children:H.jsx("path",{fill:"currentColor",d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-2,14.5v-9l6,4.5Z"})}),H.jsx("span",{children:"REEL"})]}),H.jsx("div",{className:"reel-overlay-play",children:H.jsx("div",{className:"play-triangle"})})]}),H.jsx("div",{className:"insta-hover-overlay",children:H.jsxs("div",{className:"overlay-metrics",children:[H.jsxs("span",{children:["❤️ ",d.likes]}),H.jsxs("span",{children:["💬 ",d.comments]})]})})]},d.id))}),s&&H.jsx("div",{className:"insta-modal-backdrop",onClick:u,children:H.jsxs("div",{className:"insta-modal-content",onClick:d=>d.stopPropagation(),children:[H.jsx("button",{className:"insta-modal-close",onClick:u,children:"×"}),H.jsxs("div",{className:"insta-modal-body",children:[H.jsxs("div",{className:"insta-modal-media",children:[s.type==="quote"&&H.jsxs("div",{className:"insta-quote-card modal-view",style:{background:s.bg,color:s.textColor},children:[H.jsxs("p",{className:"quote-text-large",children:["“",s.content,"”"]}),H.jsx("span",{className:"quote-branding-large",children:"WHNL GROUP"})]}),s.type==="image"&&H.jsx("img",{src:s.url,alt:"Instagram post",className:"modal-img"}),s.type==="reel"&&H.jsx("div",{className:"reel-player-container",children:n?H.jsxs("div",{className:"custom-reel-player",children:[H.jsxs("div",{className:"hyperspeed-reel-simulation",children:[H.jsx("div",{className:"reel-glow-backdrop"}),H.jsxs("div",{className:"reel-text-flow",children:[H.jsx("span",{className:"reel-title-slide",children:"WHNL GROUP"}),H.jsx("span",{className:"reel-subtitle-slide",children:"WHAT STARTS HERE CHANGES THE WORLD"}),H.jsx("span",{className:"reel-tags-slide",children:"#clarity #action #impact"}),H.jsx("div",{className:"reel-visual-pulse"})]})]}),H.jsxs("div",{className:"reel-controls",children:[H.jsx("button",{className:"reel-btn",onClick:()=>r(!1),children:"Pause"}),H.jsx("span",{className:"reel-duration",children:"0:15"})]})]}):H.jsx("div",{className:"reel-poster",style:{backgroundImage:`url("${s.thumbnail}")`},children:H.jsx("button",{className:"play-reel-trigger-btn",onClick:()=>r(!0),children:"Play Promo Reel"})})})]}),H.jsxs("div",{className:"insta-modal-sidebar",children:[H.jsxs("div",{className:"sidebar-header",children:[H.jsx("div",{className:"insta-avatar small",children:"W"}),H.jsxs("div",{children:[H.jsx("span",{className:"sidebar-username",children:"whnl.group"}),H.jsx("span",{className:"verified-badge small",children:"✓"})]})]}),H.jsxs("div",{className:"sidebar-caption-area",children:[H.jsxs("div",{className:"caption-row",children:[H.jsx("div",{className:"insta-avatar small",children:"W"}),H.jsxs("p",{className:"caption-text",children:[H.jsx("strong",{children:"whnl.group"})," ",s.caption]})]}),H.jsx("div",{className:"comment-divider"}),H.jsxs("div",{className:"mock-comments",children:[H.jsxs("div",{className:"comment-row",children:[H.jsx("span",{className:"comment-user",children:"alex_design"}),H.jsx("span",{className:"comment-content",children:"Absolutely love this aesthetic! Sleek. ✨"})]}),H.jsxs("div",{className:"comment-row",children:[H.jsx("span",{className:"comment-user",children:"impact_lab"}),H.jsx("span",{className:"comment-content",children:"This quote hits hard. Bold approach. 🙌"})]}),H.jsxs("div",{className:"comment-row",children:[H.jsx("span",{className:"comment-user",children:"tech_pursuits"}),H.jsx("span",{className:"comment-content",children:"Is the Careers board open? Can't wait!"})]})]})]}),H.jsxs("div",{className:"sidebar-footer",children:[H.jsxs("div",{className:"interactions-row",children:[H.jsx("span",{className:"heart-icon",children:"❤️"}),H.jsx("span",{className:"share-icon",children:"📤"})]}),H.jsxs("div",{className:"likes-count",children:[s.likes," likes"]}),H.jsx("div",{className:"post-date",children:"June 6, 2026"})]})]})]})]})})]})}function sf({text:s,className:e}){const n=$t.useRef(null),r=s.split(" ");return $t.useEffect(()=>{const o=n.current;if(!o)return;const c=o.querySelectorAll(".reveal-word"),u=()=>{const d=o.getBoundingClientRect(),p=window.innerHeight,m=p*.85,v=p*.25,g=m-v,x=Math.min(Math.max(0,(m-d.top)/g),1),M=c.length;c.forEach((T,C)=>{const S=C/M*.7,L=Math.min(Math.max(0,(x-S)/.3),1),N=.35+L*.65;T.style.opacity=N,T.style.color=L>.4?"#ffffff":"#a1a1a6"})};return window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),u(),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[s]),H.jsx("p",{ref:n,className:e,style:{display:"inline-block"},children:r.map((o,c)=>H.jsx("span",{className:"reveal-word",style:{display:"inline-block",marginRight:"0.26em",opacity:.35,color:"#a1a1a6",transition:"opacity 0.08s ease-out, color 0.08s ease-out",willChange:"opacity, color"},children:o},c))})}function IE(){const[s,e]=$t.useState(null),[n,r]=$t.useState("all"),o=$t.useRef(null);$t.useEffect(()=>{const u=o.current;if(!u)return;const d=p=>{u.style.left=`${p.clientX+180}px`,u.style.top=`${p.clientY+-80}px`};return window.addEventListener("mousemove",d),()=>{window.removeEventListener("mousemove",d)}},[]);const c=n==="all"?bl:bl.filter(u=>u.category===n);return H.jsxs("div",{className:"page",children:[H.jsxs("header",{className:"header",children:[H.jsx("div",{className:"brand-logo-container",children:H.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"brand-logo"})}),H.jsxs("nav",{className:"nav-links",children:[H.jsx("a",{href:"#industries",className:"nav-link",children:"Sectors"}),H.jsx("a",{href:"#social",className:"nav-link",children:"Journal"}),H.jsx("a",{href:"#communities",className:"nav-link",children:"Careers"})]})]}),H.jsxs("section",{className:"hero-section",children:[H.jsx("div",{className:"hero-hyperspeed-container",children:H.jsx(LE,{})}),H.jsx("div",{className:"hero-overlay"}),H.jsx("div",{className:"hero-bottom-fade"}),H.jsxs("div",{className:"hero-content",children:[H.jsxs("div",{className:"hero-title-group",children:[H.jsx("span",{className:"hero-tagline",children:"WHNL Group"}),H.jsxs("h1",{className:"hero-title",style:{fontFamily:"'Playfair Display', serif",fontWeight:"400",color:"#ffffff",background:"none",WebkitTextFillColor:"initial",textShadow:"none"},children:["What starts here",H.jsx("br",{}),"changes the world."]}),H.jsx(sf,{text:"We are a holding company of businesses that make an impact.",className:"hero-subtitle"})]}),H.jsx("div",{className:"hero-cta-group",children:H.jsx("button",{className:"btn-primary",onClick:()=>{const u=document.getElementById("communities");u&&u.scrollIntoView({behavior:"smooth"})},children:"Explore Careers & Communities"})})]}),H.jsxs("a",{href:"#industries",className:"scroll-indicator",children:[H.jsx("span",{className:"scroll-text",children:"Explore"}),H.jsx("div",{className:"scroll-line"})]})]}),H.jsxs("main",{children:[H.jsxs("section",{id:"industries",className:"zaina-index-section",children:[H.jsxs("div",{className:"zaina-section-header",children:[H.jsx("span",{className:"section-label",children:"Pursuits"}),H.jsx("h2",{className:"section-title",children:"The WHNL Portfolio"}),H.jsx(sf,{text:"An intersection of vision, intellect, and impact. A diverse ecosystem of businesses operating with an obsession for excellence.",className:"section-description"})]}),H.jsxs("div",{className:"filters-row",children:[H.jsx("span",{className:"filters-title",children:"Industries Index"}),H.jsxs("div",{className:"filter-tags",children:[H.jsxs("button",{className:`filter-tag ${n==="all"?"active":""}`,onClick:()=>r("all"),children:["All Sectors (",bl.length,")"]}),H.jsx("button",{className:`filter-tag ${n==="consumer"?"active":""}`,onClick:()=>r("consumer"),children:"Consumer"}),H.jsx("button",{className:`filter-tag ${n==="tech"?"active":""}`,onClick:()=>r("tech"),children:"Tech & AI"}),H.jsx("button",{className:`filter-tag ${n==="creative"?"active":""}`,onClick:()=>r("creative"),children:"IP & Creative"})]})]}),H.jsx("div",{className:"zaina-table",children:c.map((u,d)=>H.jsxs("div",{className:"zaina-row",onMouseEnter:()=>e(u),onMouseLeave:()=>e(null),children:[H.jsx("span",{className:"row-num",children:(d+1).toString().padStart(2,"0")}),H.jsx("span",{className:"row-name",children:u.name}),H.jsx("span",{className:"row-tagline",children:u.tagline}),H.jsx("div",{className:"row-action",children:H.jsx("span",{className:"action-arrow",children:"→"})})]},u.id))}),H.jsx("div",{ref:o,className:`float-preview-container ${s?"visible":""}`,children:s&&H.jsx("div",{className:"image-stack",children:s.images.slice(0,3).map((u,d)=>H.jsx("div",{className:`stack-image img-${d}`,style:{backgroundImage:`url("${u}")`}},d))})})]}),H.jsx("section",{className:"dome-gallery-section",children:H.jsx(NE,{items:bl})}),H.jsx("section",{id:"social",children:H.jsx(DE,{})}),H.jsx("section",{id:"communities",className:"communities-section",children:H.jsxs("div",{className:"communities-content",children:[H.jsx("span",{className:"section-label",children:"Join Our Pursuit"}),H.jsx("h2",{className:"section-title",children:"Careers & Communities"}),H.jsx(sf,{text:"We believe in ourselves almost to the point of delusion. If you carry unwavering participation, no limitations, and a healthy dose of tenacity, let's design the future together.",className:"section-description"}),H.jsxs("div",{className:"communities-grid",children:[H.jsxs("div",{className:"community-card",children:[H.jsx("span",{className:"card-label",children:"Active Talents"}),H.jsx("h3",{className:"card-title",children:"Explore Careers"}),H.jsx("p",{className:"card-description",children:"Discover open opportunities across our businesses in technology, FMCG, SaaS, manufacturing, real estate, and finance."}),H.jsxs("a",{href:"#apply",className:"card-link",onClick:u=>{u.preventDefault(),alert("Talent recruitment portal coming soon. For inquiries, email careers@whnl.group")},children:["Apply Online ",H.jsx("span",{children:"→"})]})]}),H.jsxs("div",{className:"community-card",children:[H.jsx("span",{className:"card-label",children:"Eco-systems"}),H.jsx("h3",{className:"card-title",children:"Our Communities"}),H.jsx("p",{className:"card-description",children:"Learn about our collaborative networks, events, hackathons, creative IPs, and wellness experiences designed to cultivate impact."}),H.jsxs("a",{href:"#connect",className:"card-link",onClick:u=>{u.preventDefault(),alert("Community platform launch scheduled for Fall 2026.")},children:["Get Involved ",H.jsx("span",{children:"→"})]})]})]})]})})]}),H.jsxs("footer",{className:"whnl-footer",children:[H.jsxs("div",{className:"footer-top",children:[H.jsxs("div",{className:"footer-brand",children:[H.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"footer-logo"}),H.jsx("p",{className:"footer-pitch",children:"One group, many pursuits, and an obsession for excellence."})]}),H.jsxs("div",{className:"footer-cols",children:[H.jsxs("div",{className:"footer-col",children:[H.jsx("h4",{className:"footer-col-title",children:"Operations"}),H.jsxs("ul",{children:[H.jsx("li",{children:H.jsx("a",{href:"#industries",children:"Consumer & FMCG"})}),H.jsx("li",{children:H.jsx("a",{href:"#industries",children:"Technology & SaaS"})}),H.jsx("li",{children:H.jsx("a",{href:"#industries",children:"Manufacturing & Logistics"})}),H.jsx("li",{children:H.jsx("a",{href:"#industries",children:"IPs & Media"})})]})]}),H.jsxs("div",{className:"footer-col",children:[H.jsx("h4",{className:"footer-col-title",children:"Company"}),H.jsxs("ul",{children:[H.jsx("li",{children:H.jsx("a",{href:"#social",children:"Journal"})}),H.jsx("li",{children:H.jsx("a",{href:"#communities",children:"Careers"})}),H.jsx("li",{children:H.jsx("a",{href:"#communities",children:"Communities"})}),H.jsx("li",{children:H.jsx("a",{href:"#contact",onClick:u=>{u.preventDefault(),alert("Contact: hello@whnl.group")},children:"Contact Us"})})]})]})]})]}),H.jsxs("div",{className:"footer-bottom",children:[H.jsxs("span",{children:["© ",new Date().getFullYear()," WHNL Group. All rights reserved."]}),H.jsx("span",{children:"Sleek • Premium • sorted"})]})]})]})}m_.createRoot(document.getElementById("root")).render(H.jsx(l_.StrictMode,{children:H.jsx(IE,{})}));
