(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Vm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Su={exports:{}},Da={},yu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function i_(){if(Lp)return mt;Lp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(I,le,Ae){this.props=I,this.context=le,this.refs=C,this.updater=Ae||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,le){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,le,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=S.prototype;function N(I,le,Ae){this.props=I,this.context=le,this.refs=C,this.updater=Ae||y}var D=N.prototype=new g;D.constructor=N,T(D,S.prototype),D.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function Q(I,le,Ae){var He,Ye={},W=null,ee=null;if(le!=null)for(He in le.ref!==void 0&&(ee=le.ref),le.key!==void 0&&(W=""+le.key),le)U.call(le,He)&&!O.hasOwnProperty(He)&&(Ye[He]=le[He]);var pe=arguments.length-2;if(pe===1)Ye.children=Ae;else if(1<pe){for(var De=Array(pe),Ce=0;Ce<pe;Ce++)De[Ce]=arguments[Ce+2];Ye.children=De}if(I&&I.defaultProps)for(He in pe=I.defaultProps,pe)Ye[He]===void 0&&(Ye[He]=pe[He]);return{$$typeof:s,type:I,key:W,ref:ee,props:Ye,_owner:F.current}}function w(I,le){return{$$typeof:s,type:I.type,key:le,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function V(I){var le={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ae){return le[Ae]})}var Y=/\/+/g;function K(I,le){return typeof I=="object"&&I!==null&&I.key!=null?V(""+I.key):le.toString(36)}function ce(I,le,Ae,He,Ye){var W=typeof I;(W==="undefined"||W==="boolean")&&(I=null);var ee=!1;if(I===null)ee=!0;else switch(W){case"string":case"number":ee=!0;break;case"object":switch(I.$$typeof){case s:case e:ee=!0}}if(ee)return ee=I,Ye=Ye(ee),I=He===""?"."+K(ee,0):He,P(Ye)?(Ae="",I!=null&&(Ae=I.replace(Y,"$&/")+"/"),ce(Ye,le,Ae,"",function(Ce){return Ce})):Ye!=null&&(R(Ye)&&(Ye=w(Ye,Ae+(!Ye.key||ee&&ee.key===Ye.key?"":(""+Ye.key).replace(Y,"$&/")+"/")+I)),le.push(Ye)),1;if(ee=0,He=He===""?".":He+":",P(I))for(var pe=0;pe<I.length;pe++){W=I[pe];var De=He+K(W,pe);ee+=ce(W,le,Ae,De,Ye)}else if(De=x(I),typeof De=="function")for(I=De.call(I),pe=0;!(W=I.next()).done;)W=W.value,De=He+K(W,pe++),ee+=ce(W,le,Ae,De,Ye);else if(W==="object")throw le=String(I),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return ee}function ue(I,le,Ae){if(I==null)return I;var He=[],Ye=0;return ce(I,He,"","",function(W){return le.call(Ae,W,Ye++)}),He}function oe(I){if(I._status===-1){var le=I._result;le=le(),le.then(function(Ae){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ae)},function(Ae){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ae)}),I._status===-1&&(I._status=0,I._result=le)}if(I._status===1)return I._result.default;throw I._result}var $={current:null},q={transition:null},de={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:q,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ue,forEach:function(I,le,Ae){ue(I,function(){le.apply(this,arguments)},Ae)},count:function(I){var le=0;return ue(I,function(){le++}),le},toArray:function(I){return ue(I,function(le){return le})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},mt.Component=S,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=N,mt.StrictMode=r,mt.Suspense=p,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,mt.act=re,mt.cloneElement=function(I,le,Ae){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var He=T({},I.props),Ye=I.key,W=I.ref,ee=I._owner;if(le!=null){if(le.ref!==void 0&&(W=le.ref,ee=F.current),le.key!==void 0&&(Ye=""+le.key),I.type&&I.type.defaultProps)var pe=I.type.defaultProps;for(De in le)U.call(le,De)&&!O.hasOwnProperty(De)&&(He[De]=le[De]===void 0&&pe!==void 0?pe[De]:le[De])}var De=arguments.length-2;if(De===1)He.children=Ae;else if(1<De){pe=Array(De);for(var Ce=0;Ce<De;Ce++)pe[Ce]=arguments[Ce+2];He.children=pe}return{$$typeof:s,type:I.type,key:Ye,ref:W,props:He,_owner:ee}},mt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},mt.createElement=Q,mt.createFactory=function(I){var le=Q.bind(null,I);return le.type=I,le},mt.createRef=function(){return{current:null}},mt.forwardRef=function(I){return{$$typeof:d,render:I}},mt.isValidElement=R,mt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:oe}},mt.memo=function(I,le){return{$$typeof:m,type:I,compare:le===void 0?null:le}},mt.startTransition=function(I){var le=q.transition;q.transition={};try{I()}finally{q.transition=le}},mt.unstable_act=re,mt.useCallback=function(I,le){return $.current.useCallback(I,le)},mt.useContext=function(I){return $.current.useContext(I)},mt.useDebugValue=function(){},mt.useDeferredValue=function(I){return $.current.useDeferredValue(I)},mt.useEffect=function(I,le){return $.current.useEffect(I,le)},mt.useId=function(){return $.current.useId()},mt.useImperativeHandle=function(I,le,Ae){return $.current.useImperativeHandle(I,le,Ae)},mt.useInsertionEffect=function(I,le){return $.current.useInsertionEffect(I,le)},mt.useLayoutEffect=function(I,le){return $.current.useLayoutEffect(I,le)},mt.useMemo=function(I,le){return $.current.useMemo(I,le)},mt.useReducer=function(I,le,Ae){return $.current.useReducer(I,le,Ae)},mt.useRef=function(I){return $.current.useRef(I)},mt.useState=function(I){return $.current.useState(I)},mt.useSyncExternalStore=function(I,le,Ae){return $.current.useSyncExternalStore(I,le,Ae)},mt.useTransition=function(){return $.current.useTransition()},mt.version="18.3.1",mt}var Dp;function ed(){return Dp||(Dp=1,yu.exports=i_()),yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function r_(){if(Ip)return Da;Ip=1;var s=ed(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var v,_={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:o.current}}return Da.Fragment=n,Da.jsx=u,Da.jsxs=u,Da}var Up;function s_(){return Up||(Up=1,Su.exports=r_()),Su.exports}var z=s_(),Yt=ed();const a_=Vm(Yt);var sl={},Mu={exports:{}},Un={},Eu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function o_(){return Fp||(Fp=1,(function(s){function e(q,de){var re=q.length;q.push(de);e:for(;0<re;){var I=re-1>>>1,le=q[I];if(0<o(le,de))q[I]=de,q[re]=le,re=I;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var de=q[0],re=q.pop();if(re!==de){q[0]=re;e:for(var I=0,le=q.length,Ae=le>>>1;I<Ae;){var He=2*(I+1)-1,Ye=q[He],W=He+1,ee=q[W];if(0>o(Ye,re))W<le&&0>o(ee,Ye)?(q[I]=ee,q[W]=re,I=W):(q[I]=Ye,q[He]=re,I=He);else if(W<le&&0>o(ee,re))q[I]=ee,q[W]=re,I=W;else break e}}return de}function o(q,de){var re=q.sortIndex-de.sortIndex;return re!==0?re:q.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,_=null,x=3,y=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(q){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=q)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function P(q){if(C=!1,D(q),!T)if(n(p)!==null)T=!0,oe(U);else{var de=n(m);de!==null&&$(P,de.startTime-q)}}function U(q,de){T=!1,C&&(C=!1,g(Q),Q=-1),y=!0;var re=x;try{for(D(de),_=n(p);_!==null&&(!(_.expirationTime>de)||q&&!V());){var I=_.callback;if(typeof I=="function"){_.callback=null,x=_.priorityLevel;var le=I(_.expirationTime<=de);de=s.unstable_now(),typeof le=="function"?_.callback=le:_===n(p)&&r(p),D(de)}else r(p);_=n(p)}if(_!==null)var Ae=!0;else{var He=n(m);He!==null&&$(P,He.startTime-de),Ae=!1}return Ae}finally{_=null,x=re,y=!1}}var F=!1,O=null,Q=-1,w=5,R=-1;function V(){return!(s.unstable_now()-R<w)}function Y(){if(O!==null){var q=s.unstable_now();R=q;var de=!0;try{de=O(!0,q)}finally{de?K():(F=!1,O=null)}}else F=!1}var K;if(typeof N=="function")K=function(){N(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=Y,K=function(){ue.postMessage(null)}}else K=function(){S(Y,0)};function oe(q){O=q,F||(F=!0,K())}function $(q,de){Q=S(function(){q(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,oe(U))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(q){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var re=x;x=de;try{return q()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,de){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var re=x;x=q;try{return de()}finally{x=re}},s.unstable_scheduleCallback=function(q,de,re){var I=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,q){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=re+le,q={id:v++,callback:de,priorityLevel:q,startTime:re,expirationTime:le,sortIndex:-1},re>I?(q.sortIndex=re,e(m,q),n(p)===null&&q===n(m)&&(C?(g(Q),Q=-1):C=!0,$(P,re-I))):(q.sortIndex=le,e(p,q),T||y||(T=!0,oe(U))),q},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(q){var de=x;return function(){var re=x;x=de;try{return q.apply(this,arguments)}finally{x=re}}}})(Tu)),Tu}var Op;function l_(){return Op||(Op=1,Eu.exports=o_()),Eu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function c_(){if(Bp)return Un;Bp=1;var s=ed(),e=l_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function y(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||y(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,l)&&(a=null),l||f===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),q=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,I;function le(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ae=!1;function He(t,i){if(!t||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var l=se}Reflect.construct(t,[],i)}else{try{i.call()}catch(se){l=se}t.call(i.prototype)}else{try{throw Error()}catch(se){l=se}t()}}catch(se){if(se&&l&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,L=h.length-1;1<=E&&0<=L&&f[E]!==h[L];)L--;for(;1<=E&&0<=L;E--,L--)if(f[E]!==h[L]){if(E!==1||L!==1)do if(E--,L--,0>L||f[E]!==h[L]){var k=`
`+f[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=L);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?le(t):""}function Ye(t){switch(t.tag){case 5:return le(t.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function W(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case w:return"Profiler";case Q:return"StrictMode";case K:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:W(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return W(t(i))}catch{}}return null}function ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(i);case 8:return i===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(t){var i=De(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function it(t){t._valueTracker||(t._valueTracker=Ce(t))}function Ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vt(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function gt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function Bt(t,i){lt(t,i);var a=pe(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ft(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ft(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ft(t,i,a){(i!=="number"||ut(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var pt=Array.isArray;function St(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Xe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(pt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:pe(a)}}function M(t,i){var a=pe(i.value),l=pe(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function X(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fe,$e=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function ye(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function Pe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=ye(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Ge=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(t,i){if(i){if(Ge[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Re(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Me=null,Ie=null;function xe(t){if(t=va(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),Le(t.stateNode,t.type,i))}}function me(t){Me?Ie?Ie.push(t):Ie=[t]:Me=t}function be(){if(Me){var t=Me,i=Ie;if(Ie=Me=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function rt(t,i){return t(i)}function Lt(){}var yt=!1;function Bn(t,i,a){if(yt)return t(i,a);yt=!0;try{return rt(t,i,a)}finally{yt=!1,(Me!==null||Ie!==null)&&(Lt(),be())}}function wn(t,i){var a=t.stateNode;if(a===null)return null;var l=So(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zs=!1;if(d)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Zs=!1}function Qs(t,i,a,l,f,h,E,L,k){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(ve){this.onError(ve)}}var Ar=!1,Cr=null,Rr=!1,ri=null,Js={onError:function(t){Ar=!0,Cr=t}};function Qa(t,i,a,l,f,h,E,L,k){Ar=!1,Cr=null,Qs.apply(Js,arguments)}function Ja(t,i,a,l,f,h,E,L,k){if(Qa.apply(this,arguments),Ar){if(Ar){var se=Cr;Ar=!1,Cr=null}else throw Error(n(198));Rr||(Rr=!0,ri=se)}}function jn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function br(t){if(jn(t)!==t)throw Error(n(188))}function eo(t){var i=t.alternate;if(!i){if(i=jn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return br(f),t;if(h===l)return br(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var E=!1,L=f.child;L;){if(L===a){E=!0,a=f,l=h;break}if(L===l){E=!0,l=f,a=h;break}L=L.sibling}if(!E){for(L=h.child;L;){if(L===a){E=!0,a=h,l=f;break}if(L===l){E=!0,l=h,a=f;break}L=L.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ta(t){return t=eo(t),t!==null?to(t):null}function to(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=to(t);if(i!==null)return i;t=t.sibling}return null}var no=e.unstable_scheduleCallback,io=e.unstable_cancelCallback,Gl=e.unstable_shouldYield,Wl=e.unstable_requestPaint,Gt=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,J=e.unstable_LowPriority,Ne=e.unstable_IdlePriority,Fe=null,we=null;function Ve(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:dt,tt=Math.log,Ze=Math.LN2;function dt(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var Mt=64,Ut=4194304;function It(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var L=E&~f;L!==0?l=It(L):(h&=E,h!==0&&(l=It(h)))}else E=a&~f,E!==0?l=It(E):h!==0&&(l=It(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Be(i),f=1<<a,l|=t[a],i&=~f;return l}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Be(h),L=1<<E,k=f[E];k===-1?((L&a)===0||(L&l)!==0)&&(f[E]=Qe(L,i)):k<=i&&(t.expiredLanes|=L),h&=~L}}function _t(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function _i(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Jt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Be(i),t[i]=a}function Pr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Be(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function Nt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Be(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var at=0;function An(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sn,an,is,vi,pd,Xl=!1,ro=[],Qi=null,Ji=null,er=null,na=new Map,ia=new Map,tr=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(t,i){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":na.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(i.pointerId)}}function ra(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=va(i),i!==null&&an(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ag(t,i,a,l,f){switch(i){case"focusin":return Qi=ra(Qi,t,i,a,l,f),!0;case"dragenter":return Ji=ra(Ji,t,i,a,l,f),!0;case"mouseover":return er=ra(er,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return na.set(h,ra(na.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,ia.set(h,ra(ia.get(h)||null,t,i,a,l,f)),!0}return!1}function gd(t){var i=Nr(t.target);if(i!==null){var a=jn(i);if(a!==null){if(i=a.tag,i===13){if(i=ea(a),i!==null){t.blockedOn=i,pd(t.priority,function(){is(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ct=l,a.target.dispatchEvent(l),ct=null}else return i=va(a),i!==null&&an(i),t.blockedOn=a,!1;i.shift()}return!0}function _d(t,i,a){so(t)&&a.delete(i)}function Cg(){Xl=!1,Qi!==null&&so(Qi)&&(Qi=null),Ji!==null&&so(Ji)&&(Ji=null),er!==null&&so(er)&&(er=null),na.forEach(_d),ia.forEach(_d)}function sa(t,i){t.blockedOn===i&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cg)))}function aa(t){function i(f){return sa(f,t)}if(0<ro.length){sa(ro[0],t);for(var a=1;a<ro.length;a++){var l=ro[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Qi!==null&&sa(Qi,t),Ji!==null&&sa(Ji,t),er!==null&&sa(er,t),na.forEach(i),ia.forEach(i),a=0;a<tr.length;a++)l=tr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)gd(a),a.blockedOn===null&&tr.shift()}var rs=P.ReactCurrentBatchConfig,ao=!0;function Rg(t,i,a,l){var f=at,h=rs.transition;rs.transition=null;try{at=1,jl(t,i,a,l)}finally{at=f,rs.transition=h}}function bg(t,i,a,l){var f=at,h=rs.transition;rs.transition=null;try{at=4,jl(t,i,a,l)}finally{at=f,rs.transition=h}}function jl(t,i,a,l){if(ao){var f=ql(t,i,a,l);if(f===null)uc(t,i,l,oo,a),md(t,l);else if(Ag(f,t,i,a,l))l.stopPropagation();else if(md(t,l),i&4&&-1<wg.indexOf(t)){for(;f!==null;){var h=va(f);if(h!==null&&sn(h),h=ql(t,i,a,l),h===null&&uc(t,i,l,oo,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else uc(t,i,l,null,a)}}var oo=null;function ql(t,i,a,l){if(oo=null,t=H(l),t=Nr(t),t!==null)if(i=jn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ea(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oo=t,null}function vd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case j:return 1;case ae:return 4;case ne:case J:return 16;case Ne:return 536870912;default:return 16}default:return 16}}var nr=null,Yl=null,lo=null;function xd(){if(lo)return lo;var t,i=Yl,a=i.length,l,f="value"in nr?nr.value:nr.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[h-l];l++);return lo=f.slice(t,1<l?1-l:void 0)}function co(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Sd(){return!1}function kn(t){function i(a,l,f,h,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(a=t[L],this[L]=a?a(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?uo:Sd,this.isPropagationStopped=Sd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=kn(ss),oa=re({},ss,{view:0,detail:0}),Pg=kn(oa),Kl,Zl,la,fo=re({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Kl=t.screenX-la.screenX,Zl=t.screenY-la.screenY):Zl=Kl=0,la=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),yd=kn(fo),Ng=re({},fo,{dataTransfer:0}),Lg=kn(Ng),Dg=re({},oa,{relatedTarget:0}),Ql=kn(Dg),Ig=re({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=kn(Ig),Fg=re({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Og=kn(Fg),Bg=re({},ss,{data:0}),Md=kn(Bg),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vg[t])?!!i[t]:!1}function Jl(){return Hg}var Gg=re({},oa,{key:function(t){if(t.key){var i=kg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wg=kn(Gg),Xg=re({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=kn(Xg),jg=re({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),qg=kn(jg),Yg=re({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=kn(Yg),Kg=re({},fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=kn(Kg),Qg=[9,13,27,32],ec=d&&"CompositionEvent"in window,ca=null;d&&"documentMode"in document&&(ca=document.documentMode);var Jg=d&&"TextEvent"in window&&!ca,Td=d&&(!ec||ca&&8<ca&&11>=ca),wd=" ",Ad=!1;function Cd(t,i){switch(t){case"keyup":return Qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function e0(t,i){switch(t){case"compositionend":return Rd(i);case"keypress":return i.which!==32?null:(Ad=!0,wd);case"textInput":return t=i.data,t===wd&&Ad?null:t;default:return null}}function t0(t,i){if(as)return t==="compositionend"||!ec&&Cd(t,i)?(t=xd(),lo=Yl=nr=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Td&&i.locale!=="ko"?null:i.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!n0[t.type]:i==="textarea"}function Pd(t,i,a,l){me(l),i=_o(i,"onChange"),0<i.length&&(a=new $l("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ua=null,fa=null;function i0(t){Yd(t,0)}function ho(t){var i=fs(t);if(Ht(i))return t}function r0(t,i){if(t==="change")return i}var Nd=!1;if(d){var tc;if(d){var nc="oninput"in document;if(!nc){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),nc=typeof Ld.oninput=="function"}tc=nc}else tc=!1;Nd=tc&&(!document.documentMode||9<document.documentMode)}function Dd(){ua&&(ua.detachEvent("onpropertychange",Id),fa=ua=null)}function Id(t){if(t.propertyName==="value"&&ho(fa)){var i=[];Pd(i,fa,t,H(t)),Bn(i0,i)}}function s0(t,i,a){t==="focusin"?(Dd(),ua=i,fa=a,ua.attachEvent("onpropertychange",Id)):t==="focusout"&&Dd()}function a0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ho(fa)}function o0(t,i){if(t==="click")return ho(i)}function l0(t,i){if(t==="input"||t==="change")return ho(i)}function c0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:c0;function da(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!si(t[f],i[f]))return!1}return!0}function Ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fd(t,i){var a=Ud(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ud(a)}}function Od(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Od(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ut(t.document)}return i}function ic(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function u0(t){var i=Bd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Od(a.ownerDocument.documentElement,a)){if(l!==null&&ic(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Fd(a,h);var E=Fd(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f0=d&&"documentMode"in document&&11>=document.documentMode,os=null,rc=null,ha=null,sc=!1;function kd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||os==null||os!==ut(l)||(l=os,"selectionStart"in l&&ic(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ha&&da(ha,l)||(ha=l,l=_o(rc,"onSelect"),0<l.length&&(i=new $l("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=os)))}function po(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ls={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},ac={},zd={};d&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function mo(t){if(ac[t])return ac[t];if(!ls[t])return t;var i=ls[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in zd)return ac[t]=i[a];return t}var Vd=mo("animationend"),Hd=mo("animationiteration"),Gd=mo("animationstart"),Wd=mo("transitionend"),Xd=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,i){Xd.set(t,i),c(i,[t])}for(var oc=0;oc<jd.length;oc++){var lc=jd[oc],d0=lc.toLowerCase(),h0=lc[0].toUpperCase()+lc.slice(1);ir(d0,"on"+h0)}ir(Vd,"onAnimationEnd"),ir(Hd,"onAnimationIteration"),ir(Gd,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Wd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function qd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Ja(l,i,void 0,t),t.currentTarget=null}function Yd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var L=l[E],k=L.instance,se=L.currentTarget;if(L=L.listener,k!==h&&f.isPropagationStopped())break e;qd(f,L,se),h=k}else for(E=0;E<l.length;E++){if(L=l[E],k=L.instance,se=L.currentTarget,L=L.listener,k!==h&&f.isPropagationStopped())break e;qd(f,L,se),h=k}}}if(Rr)throw t=ri,Rr=!1,ri=null,t}function kt(t,i){var a=i[gc];a===void 0&&(a=i[gc]=new Set);var l=t+"__bubble";a.has(l)||($d(i,t,2,!1),a.add(l))}function cc(t,i,a){var l=0;i&&(l|=4),$d(a,t,l,i)}var go="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[go]){t[go]=!0,r.forEach(function(a){a!=="selectionchange"&&(p0.has(a)||cc(a,!1,t),cc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[go]||(i[go]=!0,cc("selectionchange",!1,i))}}function $d(t,i,a,l){switch(vd(i)){case 1:var f=Rg;break;case 4:f=bg;break;default:f=jl}a=f.bind(null,i,a,t),f=void 0,!Zs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function uc(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var L=l.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;L!==null;){if(E=Nr(L),E===null)return;if(k=E.tag,k===5||k===6){l=h=E;continue e}L=L.parentNode}}l=l.return}Bn(function(){var se=h,ve=H(a),Se=[];e:{var _e=Xd.get(t);if(_e!==void 0){var Oe=$l,We=t;switch(t){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":Oe=Wg;break;case"focusin":We="focus",Oe=Ql;break;case"focusout":We="blur",Oe=Ql;break;case"beforeblur":case"afterblur":Oe=Ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=qg;break;case Vd:case Hd:case Gd:Oe=Ug;break;case Wd:Oe=$g;break;case"scroll":Oe=Pg;break;case"wheel":Oe=Zg;break;case"copy":case"cut":case"paste":Oe=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Ed}var qe=(i&4)!==0,Kt=!qe&&t==="scroll",Z=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var G=se,te;G!==null;){te=G;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Z!==null&&(Ee=wn(G,Z),Ee!=null&&qe.push(ga(G,Ee,te)))),Kt)break;G=G.return}0<qe.length&&(_e=new Oe(_e,We,null,a,ve),Se.push({event:_e,listeners:qe}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",_e&&a!==ct&&(We=a.relatedTarget||a.fromElement)&&(Nr(We)||We[Di]))break e;if((Oe||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(We=a.relatedTarget||a.toElement,Oe=se,We=We?Nr(We):null,We!==null&&(Kt=jn(We),We!==Kt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=se),Oe!==We)){if(qe=yd,Ee="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Ed,Ee="onPointerLeave",Z="onPointerEnter",G="pointer"),Kt=Oe==null?_e:fs(Oe),te=We==null?_e:fs(We),_e=new qe(Ee,G+"leave",Oe,a,ve),_e.target=Kt,_e.relatedTarget=te,Ee=null,Nr(ve)===se&&(qe=new qe(Z,G+"enter",We,a,ve),qe.target=te,qe.relatedTarget=Kt,Ee=qe),Kt=Ee,Oe&&We)t:{for(qe=Oe,Z=We,G=0,te=qe;te;te=cs(te))G++;for(te=0,Ee=Z;Ee;Ee=cs(Ee))te++;for(;0<G-te;)qe=cs(qe),G--;for(;0<te-G;)Z=cs(Z),te--;for(;G--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=cs(qe),Z=cs(Z)}qe=null}else qe=null;Oe!==null&&Kd(Se,_e,Oe,qe,!1),We!==null&&Kt!==null&&Kd(Se,Kt,We,qe,!0)}}e:{if(_e=se?fs(se):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var Ke=r0;else if(bd(_e))if(Nd)Ke=l0;else{Ke=a0;var Je=s0}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=o0);if(Ke&&(Ke=Ke(t,se))){Pd(Se,Ke,a,ve);break e}Je&&Je(t,_e,se),t==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&Ft(_e,"number",_e.value)}switch(Je=se?fs(se):window,t){case"focusin":(bd(Je)||Je.contentEditable==="true")&&(os=Je,rc=se,ha=null);break;case"focusout":ha=rc=os=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,kd(Se,a,ve);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":kd(Se,a,ve)}var et;if(ec)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else as?Cd(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Td&&a.locale!=="ko"&&(as||st!=="onCompositionStart"?st==="onCompositionEnd"&&as&&(et=xd()):(nr=ve,Yl="value"in nr?nr.value:nr.textContent,as=!0)),Je=_o(se,st),0<Je.length&&(st=new Md(st,t,null,a,ve),Se.push({event:st,listeners:Je}),et?st.data=et:(et=Rd(a),et!==null&&(st.data=et)))),(et=Jg?e0(t,a):t0(t,a))&&(se=_o(se,"onBeforeInput"),0<se.length&&(ve=new Md("onBeforeInput","beforeinput",null,a,ve),Se.push({event:ve,listeners:se}),ve.data=et))}Yd(Se,i)})}function ga(t,i,a){return{instance:t,listener:i,currentTarget:a}}function _o(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=wn(t,a),h!=null&&l.unshift(ga(t,h,f)),h=wn(t,i),h!=null&&l.push(ga(t,h,f))),t=t.return}return l}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kd(t,i,a,l,f){for(var h=i._reactName,E=[];a!==null&&a!==l;){var L=a,k=L.alternate,se=L.stateNode;if(k!==null&&k===l)break;L.tag===5&&se!==null&&(L=se,f?(k=wn(a,h),k!=null&&E.unshift(ga(a,k,L))):f||(k=wn(a,h),k!=null&&E.push(ga(a,k,L)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function Zd(t){return(typeof t=="string"?t:""+t).replace(m0,`
`).replace(g0,"")}function vo(t,i,a){if(i=Zd(i),Zd(t)!==i&&a)throw Error(n(425))}function xo(){}var fc=null,dc=null;function hc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(t){return Qd.resolve(null).then(t).catch(x0)}:pc;function x0(t){setTimeout(function(){throw t})}function mc(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),aa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);aa(i)}function rr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Jd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),xi="__reactFiber$"+us,_a="__reactProps$"+us,Di="__reactContainer$"+us,gc="__reactEvents$"+us,S0="__reactListeners$"+us,y0="__reactHandles$"+us;function Nr(t){var i=t[xi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Di]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Jd(t);t!==null;){if(a=t[xi])return a;t=Jd(t)}return i}t=a,a=t.parentNode}return null}function va(t){return t=t[xi]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[_a]||null}var _c=[],ds=-1;function sr(t){return{current:t}}function zt(t){0>ds||(t.current=_c[ds],_c[ds]=null,ds--)}function Ot(t,i){ds++,_c[ds]=t.current,t.current=i}var ar={},gn=sr(ar),Pn=sr(!1),Lr=ar;function hs(t,i){var a=t.type.contextTypes;if(!a)return ar;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function yo(){zt(Pn),zt(gn)}function eh(t,i,a){if(gn.current!==ar)throw Error(n(168));Ot(gn,i),Ot(Pn,a)}function th(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ee(t)||"Unknown",f));return re({},a,l)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Lr=gn.current,Ot(gn,t),Ot(Pn,Pn.current),!0}function nh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=th(t,i,Lr),l.__reactInternalMemoizedMergedChildContext=t,zt(Pn),zt(gn),Ot(gn,t)):zt(Pn),Ot(Pn,a)}var Ii=null,Eo=!1,vc=!1;function ih(t){Ii===null?Ii=[t]:Ii.push(t)}function M0(t){Eo=!0,ih(t)}function or(){if(!vc&&Ii!==null){vc=!0;var t=0,i=at;try{var a=Ii;for(at=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ii=null,Eo=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(t+1)),no(j,or),f}finally{at=i,vc=!1}}return null}var ps=[],ms=0,To=null,wo=0,qn=[],Yn=0,Dr=null,Ui=1,Fi="";function Ir(t,i){ps[ms++]=wo,ps[ms++]=To,To=t,wo=i}function rh(t,i,a){qn[Yn++]=Ui,qn[Yn++]=Fi,qn[Yn++]=Dr,Dr=t;var l=Ui;t=Fi;var f=32-Be(l)-1;l&=~(1<<f),a+=1;var h=32-Be(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ui=1<<32-Be(i)+f|a<<f|l,Fi=h+t}else Ui=1<<h|a<<f|l,Fi=t}function xc(t){t.return!==null&&(Ir(t,1),rh(t,1,0))}function Sc(t){for(;t===To;)To=ps[--ms],ps[ms]=null,wo=ps[--ms],ps[ms]=null;for(;t===Dr;)Dr=qn[--Yn],qn[Yn]=null,Fi=qn[--Yn],qn[Yn]=null,Ui=qn[--Yn],qn[Yn]=null}var zn=null,Vn=null,Vt=!1,ai=null;function sh(t,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ah(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Vn=rr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Dr!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,zn=t,Vn=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(Vt){var i=Vn;if(i){var a=i;if(!ah(t,i)){if(yc(t))throw Error(n(418));i=rr(a.nextSibling);var l=zn;i&&ah(t,i)?sh(l,a):(t.flags=t.flags&-4097|2,Vt=!1,zn=t)}}else{if(yc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,zn=t}}}function oh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Ao(t){if(t!==zn)return!1;if(!Vt)return oh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hc(t.type,t.memoizedProps)),i&&(i=Vn)){if(yc(t))throw lh(),Error(n(418));for(;i;)sh(t,i),i=rr(i.nextSibling)}if(oh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Vn=rr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=zn?rr(t.stateNode.nextSibling):null;return!0}function lh(){for(var t=Vn;t;)t=rr(t.nextSibling)}function gs(){Vn=zn=null,Vt=!1}function Ec(t){ai===null?ai=[t]:ai.push(t)}var E0=P.ReactCurrentBatchConfig;function xa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var L=f.refs;E===null?delete L[h]:L[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ch(t){var i=t._init;return i(t._payload)}function uh(t){function i(Z,G){if(t){var te=Z.deletions;te===null?(Z.deletions=[G],Z.flags|=16):te.push(G)}}function a(Z,G){if(!t)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function l(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function f(Z,G){return Z=mr(Z,G),Z.index=0,Z.sibling=null,Z}function h(Z,G,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<G?(Z.flags|=2,G):te):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function L(Z,G,te,Ee){return G===null||G.tag!==6?(G=pu(te,Z.mode,Ee),G.return=Z,G):(G=f(G,te),G.return=Z,G)}function k(Z,G,te,Ee){var Ke=te.type;return Ke===O?ve(Z,G,te.props.children,Ee,te.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&ch(Ke)===G.type)?(Ee=f(G,te.props),Ee.ref=xa(Z,G,te),Ee.return=Z,Ee):(Ee=Zo(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=xa(Z,G,te),Ee.return=Z,Ee)}function se(Z,G,te,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=mu(te,Z.mode,Ee),G.return=Z,G):(G=f(G,te.children||[]),G.return=Z,G)}function ve(Z,G,te,Ee,Ke){return G===null||G.tag!==7?(G=Hr(te,Z.mode,Ee,Ke),G.return=Z,G):(G=f(G,te),G.return=Z,G)}function Se(Z,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=pu(""+G,Z.mode,te),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return te=Zo(G.type,G.key,G.props,null,Z.mode,te),te.ref=xa(Z,null,G),te.return=Z,te;case F:return G=mu(G,Z.mode,te),G.return=Z,G;case oe:var Ee=G._init;return Se(Z,Ee(G._payload),te)}if(pt(G)||de(G))return G=Hr(G,Z.mode,te,null),G.return=Z,G;Co(Z,G)}return null}function _e(Z,G,te,Ee){var Ke=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:L(Z,G,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===Ke?k(Z,G,te,Ee):null;case F:return te.key===Ke?se(Z,G,te,Ee):null;case oe:return Ke=te._init,_e(Z,G,Ke(te._payload),Ee)}if(pt(te)||de(te))return Ke!==null?null:ve(Z,G,te,Ee,null);Co(Z,te)}return null}function Oe(Z,G,te,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(te)||null,L(G,Z,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return Z=Z.get(Ee.key===null?te:Ee.key)||null,k(G,Z,Ee,Ke);case F:return Z=Z.get(Ee.key===null?te:Ee.key)||null,se(G,Z,Ee,Ke);case oe:var Je=Ee._init;return Oe(Z,G,te,Je(Ee._payload),Ke)}if(pt(Ee)||de(Ee))return Z=Z.get(te)||null,ve(G,Z,Ee,Ke,null);Co(G,Ee)}return null}function We(Z,G,te,Ee){for(var Ke=null,Je=null,et=G,st=G=0,cn=null;et!==null&&st<te.length;st++){et.index>st?(cn=et,et=null):cn=et.sibling;var Ct=_e(Z,et,te[st],Ee);if(Ct===null){et===null&&(et=cn);break}t&&et&&Ct.alternate===null&&i(Z,et),G=h(Ct,G,st),Je===null?Ke=Ct:Je.sibling=Ct,Je=Ct,et=cn}if(st===te.length)return a(Z,et),Vt&&Ir(Z,st),Ke;if(et===null){for(;st<te.length;st++)et=Se(Z,te[st],Ee),et!==null&&(G=h(et,G,st),Je===null?Ke=et:Je.sibling=et,Je=et);return Vt&&Ir(Z,st),Ke}for(et=l(Z,et);st<te.length;st++)cn=Oe(et,Z,st,te[st],Ee),cn!==null&&(t&&cn.alternate!==null&&et.delete(cn.key===null?st:cn.key),G=h(cn,G,st),Je===null?Ke=cn:Je.sibling=cn,Je=cn);return t&&et.forEach(function(gr){return i(Z,gr)}),Vt&&Ir(Z,st),Ke}function qe(Z,G,te,Ee){var Ke=de(te);if(typeof Ke!="function")throw Error(n(150));if(te=Ke.call(te),te==null)throw Error(n(151));for(var Je=Ke=null,et=G,st=G=0,cn=null,Ct=te.next();et!==null&&!Ct.done;st++,Ct=te.next()){et.index>st?(cn=et,et=null):cn=et.sibling;var gr=_e(Z,et,Ct.value,Ee);if(gr===null){et===null&&(et=cn);break}t&&et&&gr.alternate===null&&i(Z,et),G=h(gr,G,st),Je===null?Ke=gr:Je.sibling=gr,Je=gr,et=cn}if(Ct.done)return a(Z,et),Vt&&Ir(Z,st),Ke;if(et===null){for(;!Ct.done;st++,Ct=te.next())Ct=Se(Z,Ct.value,Ee),Ct!==null&&(G=h(Ct,G,st),Je===null?Ke=Ct:Je.sibling=Ct,Je=Ct);return Vt&&Ir(Z,st),Ke}for(et=l(Z,et);!Ct.done;st++,Ct=te.next())Ct=Oe(et,Z,st,Ct.value,Ee),Ct!==null&&(t&&Ct.alternate!==null&&et.delete(Ct.key===null?st:Ct.key),G=h(Ct,G,st),Je===null?Ke=Ct:Je.sibling=Ct,Je=Ct);return t&&et.forEach(function(n_){return i(Z,n_)}),Vt&&Ir(Z,st),Ke}function Kt(Z,G,te,Ee){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var Ke=te.key,Je=G;Je!==null;){if(Je.key===Ke){if(Ke=te.type,Ke===O){if(Je.tag===7){a(Z,Je.sibling),G=f(Je,te.props.children),G.return=Z,Z=G;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&ch(Ke)===Je.type){a(Z,Je.sibling),G=f(Je,te.props),G.ref=xa(Z,Je,te),G.return=Z,Z=G;break e}a(Z,Je);break}else i(Z,Je);Je=Je.sibling}te.type===O?(G=Hr(te.props.children,Z.mode,Ee,te.key),G.return=Z,Z=G):(Ee=Zo(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=xa(Z,G,te),Ee.return=Z,Z=Ee)}return E(Z);case F:e:{for(Je=te.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(Z,G.sibling),G=f(G,te.children||[]),G.return=Z,Z=G;break e}else{a(Z,G);break}else i(Z,G);G=G.sibling}G=mu(te,Z.mode,Ee),G.return=Z,Z=G}return E(Z);case oe:return Je=te._init,Kt(Z,G,Je(te._payload),Ee)}if(pt(te))return We(Z,G,te,Ee);if(de(te))return qe(Z,G,te,Ee);Co(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(Z,G.sibling),G=f(G,te),G.return=Z,Z=G):(a(Z,G),G=pu(te,Z.mode,Ee),G.return=Z,Z=G),E(Z)):a(Z,G)}return Kt}var _s=uh(!0),fh=uh(!1),Ro=sr(null),bo=null,vs=null,Tc=null;function wc(){Tc=vs=bo=null}function Ac(t){var i=Ro.current;zt(Ro),t._currentValue=i}function Cc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function xs(t,i){bo=t,Tc=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Ln=!0),t.firstContext=null)}function $n(t){var i=t._currentValue;if(Tc!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(bo===null)throw Error(n(308));vs=t,bo.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Ur=null;function Rc(t){Ur===null?Ur=[t]:Ur.push(t)}function dh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Rc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Oi(t,l)}function Oi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var lr=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Et&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Oi(t,a)}return f=l.interleaved,f===null?(i.next=i,Rc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Oi(t,a)}function Po(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Nt(t,a)}}function ph(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function No(t,i,a,l){var f=t.updateQueue;lr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var k=L,se=k.next;k.next=null,E===null?h=se:E.next=se,E=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==E&&(L===null?ve.firstBaseUpdate=se:L.next=se,ve.lastBaseUpdate=k))}if(h!==null){var Se=f.baseState;E=0,ve=se=k=null,L=h;do{var _e=L.lane,Oe=L.eventTime;if((l&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Oe,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var We=t,qe=L;switch(_e=i,Oe=a,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){Se=We.call(Oe,Se,_e);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,_e=typeof We=="function"?We.call(Oe,Se,_e):We,_e==null)break e;Se=re({},Se,_e);break e;case 2:lr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,_e=f.effects,_e===null?f.effects=[L]:_e.push(L))}else Oe={eventTime:Oe,lane:_e,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(se=ve=Oe,k=Se):ve=ve.next=Oe,E|=_e;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;_e=L,L=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ve===null&&(k=Se),f.baseState=k,f.firstBaseUpdate=se,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Br|=E,t.lanes=E,t.memoizedState=Se}}function mh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Sa={},Si=sr(Sa),ya=sr(Sa),Ma=sr(Sa);function Fr(t){if(t===Sa)throw Error(n(174));return t}function Pc(t,i){switch(Ot(Ma,i),Ot(ya,t),Ot(Si,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ge(i,t)}zt(Si),Ot(Si,i)}function Ss(){zt(Si),zt(ya),zt(Ma)}function gh(t){Fr(Ma.current);var i=Fr(Si.current),a=ge(i,t.type);i!==a&&(Ot(ya,t),Ot(Si,a))}function Nc(t){ya.current===t&&(zt(Si),zt(ya))}var Wt=sr(0);function Lo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Dc(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Do=P.ReactCurrentDispatcher,Ic=P.ReactCurrentBatchConfig,Or=0,Xt=null,en=null,on=null,Io=!1,Ea=!1,Ta=0,T0=0;function _n(){throw Error(n(321))}function Uc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!si(t[a],i[a]))return!1;return!0}function Fc(t,i,a,l,f,h){if(Or=h,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?R0:b0,t=a(l,f),Ea){h=0;do{if(Ea=!1,Ta=0,25<=h)throw Error(n(301));h+=1,on=en=null,i.updateQueue=null,Do.current=P0,t=a(l,f)}while(Ea)}if(Do.current=Oo,i=en!==null&&en.next!==null,Or=0,on=en=Xt=null,Io=!1,i)throw Error(n(300));return t}function Oc(){var t=Ta!==0;return Ta=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Xt.memoizedState=on=t:on=on.next=t,on}function Kn(){if(en===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=on===null?Xt.memoizedState:on.next;if(i!==null)on=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Xt.memoizedState=on=t:on=on.next=t}return on}function wa(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=en,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var L=E=null,k=null,se=h;do{var ve=se.lane;if((Or&ve)===ve)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),l=se.hasEagerState?se.eagerState:t(l,se.action);else{var Se={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(L=k=Se,E=l):k=k.next=Se,Xt.lanes|=ve,Br|=ve}se=se.next}while(se!==null&&se!==h);k===null?E=l:k.next=L,si(l,i.memoizedState)||(Ln=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,Xt.lanes|=h,Br|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function kc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);si(h,i.memoizedState)||(Ln=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function _h(){}function vh(t,i){var a=Xt,l=Kn(),f=i(),h=!si(l.memoizedState,f);if(h&&(l.memoizedState=f,Ln=!0),l=l.queue,zc(yh.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Sh.bind(null,a,l,f,i),void 0,null),ln===null)throw Error(n(349));(Or&30)!==0||xh(a,i,f)}return f}function xh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Sh(t,i,a,l){i.value=a,i.getSnapshot=l,Mh(i)&&Eh(t)}function yh(t,i,a){return a(function(){Mh(i)&&Eh(t)})}function Mh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!si(t,a)}catch{return!0}}function Eh(t){var i=Oi(t,1);i!==null&&ui(i,t,1,-1)}function Th(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i.queue=t,t=t.dispatch=C0.bind(null,Xt,t),[i.memoizedState,t]}function Aa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function wh(){return Kn().memoizedState}function Uo(t,i,a,l){var f=yi();Xt.flags|=t,f.memoizedState=Aa(1|i,a,void 0,l===void 0?null:l)}function Fo(t,i,a,l){var f=Kn();l=l===void 0?null:l;var h=void 0;if(en!==null){var E=en.memoizedState;if(h=E.destroy,l!==null&&Uc(l,E.deps)){f.memoizedState=Aa(i,a,h,l);return}}Xt.flags|=t,f.memoizedState=Aa(1|i,a,h,l)}function Ah(t,i){return Uo(8390656,8,t,i)}function zc(t,i){return Fo(2048,8,t,i)}function Ch(t,i){return Fo(4,2,t,i)}function Rh(t,i){return Fo(4,4,t,i)}function bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ph(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4,4,bh.bind(null,i,t),a)}function Vc(){}function Nh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Uc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Lh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Uc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Dh(t,i,a){return(Or&21)===0?(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=a):(si(a,i)||(a=mn(),Xt.lanes|=a,Br|=a,t.baseState=!0),i)}function w0(t,i){var a=at;at=a!==0&&4>a?a:4,t(!0);var l=Ic.transition;Ic.transition={};try{t(!1),i()}finally{at=a,Ic.transition=l}}function Ih(){return Kn().memoizedState}function A0(t,i,a){var l=hr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Uh(t))Fh(i,a);else if(a=dh(t,i,a,l),a!==null){var f=Rn();ui(a,t,l,f),Oh(a,i,l)}}function C0(t,i,a){var l=hr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uh(t))Fh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,L=h(E,a);if(f.hasEagerState=!0,f.eagerState=L,si(L,E)){var k=i.interleaved;k===null?(f.next=f,Rc(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}a=dh(t,i,f,l),a!==null&&(f=Rn(),ui(a,t,l,f),Oh(a,i,l))}}function Uh(t){var i=t.alternate;return t===Xt||i!==null&&i===Xt}function Fh(t,i){Ea=Io=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Oh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Nt(t,a)}}var Oo={readContext:$n,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},R0={readContext:$n,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:Ah,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4194308,4,bh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Uo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Uo(4,2,t,i)},useMemo:function(t,i){var a=yi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=yi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=A0.bind(null,Xt,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Th,useDebugValue:Vc,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Th(!1),i=t[0];return t=w0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Xt,f=yi();if(Vt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ln===null)throw Error(n(349));(Or&30)!==0||xh(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Ah(yh.bind(null,l,h,t),[t]),l.flags|=2048,Aa(9,Sh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=yi(),i=ln.identifierPrefix;if(Vt){var a=Fi,l=Ui;a=(l&~(1<<32-Be(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=T0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},b0={readContext:$n,useCallback:Nh,useContext:$n,useEffect:zc,useImperativeHandle:Ph,useInsertionEffect:Ch,useLayoutEffect:Rh,useMemo:Lh,useReducer:Bc,useRef:wh,useState:function(){return Bc(wa)},useDebugValue:Vc,useDeferredValue:function(t){var i=Kn();return Dh(i,en.memoizedState,t)},useTransition:function(){var t=Bc(wa)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Ih,unstable_isNewReconciler:!1},P0={readContext:$n,useCallback:Nh,useContext:$n,useEffect:zc,useImperativeHandle:Ph,useInsertionEffect:Ch,useLayoutEffect:Rh,useMemo:Lh,useReducer:kc,useRef:wh,useState:function(){return kc(wa)},useDebugValue:Vc,useDeferredValue:function(t){var i=Kn();return en===null?i.memoizedState=t:Dh(i,en.memoizedState,t)},useTransition:function(){var t=kc(wa)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Ih,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Hc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?jn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Rn(),f=hr(t),h=Bi(l,f);h.payload=i,a!=null&&(h.callback=a),i=cr(t,h,f),i!==null&&(ui(i,t,f,l),Po(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Rn(),f=hr(t),h=Bi(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(t,h,f),i!==null&&(ui(i,t,f,l),Po(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Rn(),l=hr(t),f=Bi(a,l);f.tag=2,i!=null&&(f.callback=i),i=cr(t,f,l),i!==null&&(ui(i,t,l,a),Po(i,t,l))}};function Bh(t,i,a,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(f,h):!0}function kh(t,i,a){var l=!1,f=ar,h=i.contextType;return typeof h=="object"&&h!==null?h=$n(h):(f=Nn(i)?Lr:gn.current,l=i.contextTypes,h=(l=l!=null)?hs(t,f):ar),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function zh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function Gc(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},bc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=$n(h):(h=Nn(i)?Lr:gn.current,f.context=hs(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Hc(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Bo.enqueueReplaceState(f,f.state,null),No(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var a="",l=i;do a+=Ye(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Wc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Xc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function Vh(t,i,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Xo||(Xo=!0,au=l),Xc(t,i)},a}function Hh(t,i,a){a=Bi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Xc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Xc(t,i),typeof l!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Gh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new N0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=X0.bind(null,t,i,a),i.then(t,t))}function Wh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Xh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Bi(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var L0=P.ReactCurrentOwner,Ln=!1;function Cn(t,i,a,l){i.child=t===null?fh(i,null,a,l):_s(i,t.child,a,l)}function jh(t,i,a,l,f){a=a.render;var h=i.ref;return xs(i,f),l=Fc(t,i,a,l,h,f),a=Oc(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ki(t,i,f)):(Vt&&a&&xc(i),i.flags|=1,Cn(t,i,l,f),i.child)}function qh(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!hu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Yh(t,i,h,l,f)):(t=Zo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,l)&&t.ref===i.ref)return ki(t,i,f)}return i.flags|=1,t=mr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Yh(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(da(h,l)&&t.ref===i.ref)if(Ln=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Ln=!0);else return i.lanes=t.lanes,ki(t,i,f)}return jc(t,i,a,l,f)}function $h(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Es,Hn),Hn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(Es,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Ot(Es,Hn),Hn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Ot(Es,Hn),Hn|=l;return Cn(t,i,f,a),i.child}function Kh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function jc(t,i,a,l,f){var h=Nn(a)?Lr:gn.current;return h=hs(i,h),xs(i,f),a=Fc(t,i,a,l,h,f),l=Oc(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ki(t,i,f)):(Vt&&l&&xc(i),i.flags|=1,Cn(t,i,a,f),i.child)}function Zh(t,i,a,l,f){if(Nn(a)){var h=!0;Mo(i)}else h=!1;if(xs(i,f),i.stateNode===null)zo(t,i),kh(i,a,l),Gc(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,L=i.memoizedProps;E.props=L;var k=E.context,se=a.contextType;typeof se=="object"&&se!==null?se=$n(se):(se=Nn(a)?Lr:gn.current,se=hs(i,se));var ve=a.getDerivedStateFromProps,Se=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==l||k!==se)&&zh(i,E,l,se),lr=!1;var _e=i.memoizedState;E.state=_e,No(i,l,E,f),k=i.memoizedState,L!==l||_e!==k||Pn.current||lr?(typeof ve=="function"&&(Hc(i,a,ve,l),k=i.memoizedState),(L=lr||Bh(i,a,L,l,_e,k,se))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=se,l=L):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,hh(t,i),L=i.memoizedProps,se=i.type===i.elementType?L:oi(i.type,L),E.props=se,Se=i.pendingProps,_e=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=$n(k):(k=Nn(a)?Lr:gn.current,k=hs(i,k));var Oe=a.getDerivedStateFromProps;(ve=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==Se||_e!==k)&&zh(i,E,l,k),lr=!1,_e=i.memoizedState,E.state=_e,No(i,l,E,f);var We=i.memoizedState;L!==Se||_e!==We||Pn.current||lr?(typeof Oe=="function"&&(Hc(i,a,Oe,l),We=i.memoizedState),(se=lr||Bh(i,a,se,l,_e,We,k)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,We,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,We,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=We),E.props=l,E.state=We,E.context=k,l=se):(typeof E.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return qc(t,i,a,l,h,f)}function qc(t,i,a,l,f,h){Kh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&nh(i,a,!1),ki(t,i,h);l=i.stateNode,L0.current=i;var L=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=_s(i,t.child,null,h),i.child=_s(i,null,L,h)):Cn(t,i,L,h),i.memoizedState=l.state,f&&nh(i,a,!0),i.child}function Qh(t){var i=t.stateNode;i.pendingContext?eh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&eh(t,i.context,!1),Pc(t,i.containerInfo)}function Jh(t,i,a,l,f){return gs(),Ec(f),i.flags|=256,Cn(t,i,a,l),i.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function ep(t,i,a){var l=i.pendingProps,f=Wt.current,h=!1,E=(i.flags&128)!==0,L;if((L=E)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ot(Wt,f&1),t===null)return Mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Qo(E,l,0,null),t=Hr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=$c(a),i.memoizedState=Yc,t):Kc(i,E));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return D0(t,i,E,l,L,f,a);if(h){h=l.fallback,E=i.mode,f=t.child,L=f.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=mr(f,k),l.subtreeFlags=f.subtreeFlags&14680064),L!==null?h=mr(L,h):(h=Hr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?$c(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=Yc,l}return h=t.child,t=h.sibling,l=mr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Kc(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ko(t,i,a,l){return l!==null&&Ec(l),_s(i,t.child,null,a),t=Kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function D0(t,i,a,l,f,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Wc(Error(n(422))),ko(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Qo({mode:"visible",children:l.children},f,0,null),h=Hr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&_s(i,t.child,null,E),i.child.memoizedState=$c(E),i.memoizedState=Yc,h);if((i.mode&1)===0)return ko(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Wc(h,l,void 0),ko(t,i,E,l)}if(L=(E&t.childLanes)!==0,Ln||L){if(l=ln,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Oi(t,f),ui(l,t,f,-1))}return du(),l=Wc(Error(n(421))),ko(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=j0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Vn=rr(f.nextSibling),zn=i,Vt=!0,ai=null,t!==null&&(qn[Yn++]=Ui,qn[Yn++]=Fi,qn[Yn++]=Dr,Ui=t.id,Fi=t.overflow,Dr=i),i=Kc(i,l.children),i.flags|=4096,i)}function tp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cc(t.return,i,a)}function Zc(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function np(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(Cn(t,i,l.children,a),l=Wt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,a,i);else if(t.tag===19)tp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Wt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Lo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Zc(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Lo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Zc(i,!0,a,null,h);break;case"together":Zc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ki(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Br|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function I0(t,i,a){switch(i.tag){case 3:Qh(i),gs();break;case 5:gh(i);break;case 1:Nn(i.type)&&Mo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ot(Ro,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ep(t,i,a):(Ot(Wt,Wt.current&1),t=ki(t,i,a),t!==null?t.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return np(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ot(Wt,Wt.current),l)break;return null;case 22:case 23:return i.lanes=0,$h(t,i,a)}return ki(t,i,a)}var ip,Qc,rp,sp;ip=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qc=function(){},rp=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Fr(Si.current);var h=null;switch(a){case"input":f=vt(t,f),l=vt(t,l),h=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":f=Xe(t,f),l=Xe(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=xo)}je(a,l);var E;a=null;for(se in f)if(!l.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var L=f[se];for(E in L)L.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?h||(h=[]):(h=h||[]).push(se,null));for(se in l){var k=l[se];if(L=f!=null?f[se]:void 0,l.hasOwnProperty(se)&&k!==L&&(k!=null||L!=null))if(se==="style")if(L){for(E in L)!L.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&L[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(h||(h=[]),h.push(se,a)),a=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,L=L?L.__html:void 0,k!=null&&L!==k&&(h=h||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&kt("scroll",t),h||L===k||(h=[])):(h=h||[]).push(se,k))}a&&(h=h||[]).push("style",a);var se=h;(i.updateQueue=se)&&(i.flags|=4)}},sp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ca(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function U0(t,i,a){var l=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Nn(i.type)&&yo(),vn(i),null;case 3:return l=i.stateNode,Ss(),zt(Pn),zt(gn),Dc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(cu(ai),ai=null))),Qc(t,i),vn(i),null;case 5:Nc(i);var f=Fr(Ma.current);if(a=i.type,t!==null&&i.stateNode!=null)rp(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return vn(i),null}if(t=Fr(Si.current),Ao(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[xi]=i,l[_a]=h,t=(i.mode&1)!==0,a){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(f=0;f<pa.length;f++)kt(pa[f],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":gt(l,h),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},kt("invalid",l);break;case"textarea":b(l,h),kt("invalid",l)}je(a,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var L=h[E];E==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&vo(l.textContent,L,t),f=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&vo(l.textContent,L,t),f=["children",""+L]):o.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&kt("scroll",l)}switch(a){case"input":it(l),B(l,h,!0);break;case"textarea":it(l),X(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=xo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[xi]=i,t[_a]=l,ip(t,i,!1,!1),i.stateNode=t;e:{switch(E=Re(a,l),a){case"dialog":kt("cancel",t),kt("close",t),f=l;break;case"iframe":case"object":case"embed":kt("load",t),f=l;break;case"video":case"audio":for(f=0;f<pa.length;f++)kt(pa[f],t);f=l;break;case"source":kt("error",t),f=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),f=l;break;case"details":kt("toggle",t),f=l;break;case"input":gt(t,l),f=vt(t,l),kt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),kt("invalid",t);break;case"textarea":b(t,l),f=Xe(t,l),kt("invalid",t);break;default:f=l}je(a,f),L=f;for(h in L)if(L.hasOwnProperty(h)){var k=L[h];h==="style"?Pe(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&$e(t,k)):h==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Te(t,k):typeof k=="number"&&Te(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?k!=null&&h==="onScroll"&&kt("scroll",t):k!=null&&D(t,h,k,E))}switch(a){case"input":it(t),B(t,l,!1);break;case"textarea":it(t),X(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?St(t,!!l.multiple,h,!1):l.defaultValue!=null&&St(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=xo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(t&&i.stateNode!=null)sp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Fr(Ma.current),Fr(Si.current),Ao(i)){if(l=i.stateNode,a=i.memoizedProps,l[xi]=i,(h=l.nodeValue!==a)&&(t=zn,t!==null))switch(t.tag){case 3:vo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[xi]=i,i.stateNode=l}return vn(i),null;case 13:if(zt(Wt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lh(),gs(),i.flags|=98560,h=!1;else if(h=Ao(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[xi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),h=!1}else ai!==null&&(cu(ai),ai=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Wt.current&1)!==0?tn===0&&(tn=3):du())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ss(),Qc(t,i),t===null&&ma(i.stateNode.containerInfo),vn(i),null;case 10:return Ac(i.type._context),vn(i),null;case 17:return Nn(i.type)&&yo(),vn(i),null;case 19:if(zt(Wt),h=i.memoizedState,h===null)return vn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ca(h,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Lo(t),E!==null){for(i.flags|=128,Ca(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ot(Wt,Wt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Gt()>Ts&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304)}else{if(!l)if(t=Lo(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Vt)return vn(i),null}else 2*Gt()-h.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,l=!0,Ca(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Gt(),i.sibling=null,a=Wt.current,Ot(Wt,l?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return fu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function F0(t,i){switch(Sc(i),i.tag){case 1:return Nn(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),zt(Pn),zt(gn),Dc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Nc(i),null;case 13:if(zt(Wt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Wt),null;case 4:return Ss(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Vo=!1,xn=!1,O0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ms(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){qt(t,i,l)}else a.current=null}function Jc(t,i,a){try{a()}catch(l){qt(t,i,l)}}var ap=!1;function B0(t,i){if(fc=ao,t=Bd(),ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,L=-1,k=-1,se=0,ve=0,Se=t,_e=null;t:for(;;){for(var Oe;Se!==a||f!==0&&Se.nodeType!==3||(L=E+f),Se!==h||l!==0&&Se.nodeType!==3||(k=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)_e=Se,Se=Oe;for(;;){if(Se===t)break t;if(_e===a&&++se===f&&(L=E),_e===h&&++ve===l&&(k=E),(Oe=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Oe}a=L===-1||k===-1?null:{start:L,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(dc={focusedElem:t,selectionRange:a},ao=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,Kt=We.memoizedState,Z=i.stateNode,G=Z.getSnapshotBeforeUpdate(i.elementType===i.type?qe:oi(i.type,qe),Kt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){qt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return We=ap,ap=!1,We}function Ra(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Jc(i,a,h)}f=f.next}while(f!==l)}}function Ho(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function eu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function op(t){var i=t.alternate;i!==null&&(t.alternate=null,op(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[xi],delete i[_a],delete i[gc],delete i[S0],delete i[y0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=xo));else if(l!==4&&(t=t.child,t!==null))for(tu(t,i,a),t=t.sibling;t!==null;)tu(t,i,a),t=t.sibling}function nu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}var fn=null,li=!1;function ur(t,i,a){for(a=a.child;a!==null;)up(t,i,a),a=a.sibling}function up(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Fe,a)}catch{}switch(a.tag){case 5:xn||Ms(a,i);case 6:var l=fn,f=li;fn=null,ur(t,i,a),fn=l,li=f,fn!==null&&(li?(t=fn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(li?(t=fn,a=a.stateNode,t.nodeType===8?mc(t.parentNode,a):t.nodeType===1&&mc(t,a),aa(t)):mc(fn,a.stateNode));break;case 4:l=fn,f=li,fn=a.stateNode.containerInfo,li=!0,ur(t,i,a),fn=l,li=f;break;case 0:case 11:case 14:case 15:if(!xn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Jc(a,i,E),f=f.next}while(f!==l)}ur(t,i,a);break;case 1:if(!xn&&(Ms(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(L){qt(a,i,L)}ur(t,i,a);break;case 21:ur(t,i,a);break;case 22:a.mode&1?(xn=(l=xn)||a.memoizedState!==null,ur(t,i,a),xn=l):ur(t,i,a);break;default:ur(t,i,a)}}function fp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new O0),i.forEach(function(l){var f=q0.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ci(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 5:fn=L.stateNode,li=!1;break e;case 3:fn=L.stateNode.containerInfo,li=!0;break e;case 4:fn=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(fn===null)throw Error(n(160));up(h,E,f),fn=null,li=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(se){qt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,t),i=i.sibling}function dp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),Mi(t),l&4){try{Ra(3,t,t.return),Ho(3,t)}catch(qe){qt(t,t.return,qe)}try{Ra(5,t,t.return)}catch(qe){qt(t,t.return,qe)}}break;case 1:ci(i,t),Mi(t),l&512&&a!==null&&Ms(a,a.return);break;case 5:if(ci(i,t),Mi(t),l&512&&a!==null&&Ms(a,a.return),t.flags&32){var f=t.stateNode;try{Te(f,"")}catch(qe){qt(t,t.return,qe)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,L=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&lt(f,h),Re(L,E);var se=Re(L,h);for(E=0;E<k.length;E+=2){var ve=k[E],Se=k[E+1];ve==="style"?Pe(f,Se):ve==="dangerouslySetInnerHTML"?$e(f,Se):ve==="children"?Te(f,Se):D(f,ve,Se,se)}switch(L){case"input":Bt(f,h);break;case"textarea":M(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?St(f,!!h.multiple,Oe,!1):_e!==!!h.multiple&&(h.defaultValue!=null?St(f,!!h.multiple,h.defaultValue,!0):St(f,!!h.multiple,h.multiple?[]:"",!1))}f[_a]=h}catch(qe){qt(t,t.return,qe)}}break;case 6:if(ci(i,t),Mi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(qe){qt(t,t.return,qe)}}break;case 3:if(ci(i,t),Mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{aa(i.containerInfo)}catch(qe){qt(t,t.return,qe)}break;case 4:ci(i,t),Mi(t);break;case 13:ci(i,t),Mi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(su=Gt())),l&4&&fp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(xn=(se=xn)||ve,ci(i,t),xn=se):ci(i,t),Mi(t),l&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!ve&&(t.mode&1)!==0)for(ze=t,ve=t.child;ve!==null;){for(Se=ze=ve;ze!==null;){switch(_e=ze,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ra(4,_e,_e.return);break;case 1:Ms(_e,_e.return);var We=_e.stateNode;if(typeof We.componentWillUnmount=="function"){l=_e,a=_e.return;try{i=l,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(qe){qt(l,a,qe)}}break;case 5:Ms(_e,_e.return);break;case 22:if(_e.memoizedState!==null){mp(Se);continue}}Oe!==null?(Oe.return=_e,ze=Oe):mp(Se)}ve=ve.sibling}e:for(ve=null,Se=t;;){if(Se.tag===5){if(ve===null){ve=Se;try{f=Se.stateNode,se?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Se.stateNode,k=Se.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,L.style.display=ye("display",E))}catch(qe){qt(t,t.return,qe)}}}else if(Se.tag===6){if(ve===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(qe){qt(t,t.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ve===Se&&(ve=null),Se=Se.return}ve===Se&&(ve=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,t),Mi(t),l&4&&fp(t);break;case 21:break;default:ci(i,t),Mi(t)}}function Mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(lp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Te(f,""),l.flags&=-33);var h=cp(t);nu(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,L=cp(t);tu(t,L,E);break;default:throw Error(n(161))}}catch(k){qt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function k0(t,i,a){ze=t,hp(t)}function hp(t,i,a){for(var l=(t.mode&1)!==0;ze!==null;){var f=ze,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Vo;if(!E){var L=f.alternate,k=L!==null&&L.memoizedState!==null||xn;L=Vo;var se=xn;if(Vo=E,(xn=k)&&!se)for(ze=f;ze!==null;)E=ze,k=E.child,E.tag===22&&E.memoizedState!==null?gp(f):k!==null?(k.return=E,ze=k):gp(f);for(;h!==null;)ze=h,hp(h),h=h.sibling;ze=f,Vo=L,xn=se}pp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,ze=h):pp(t)}}function pp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Ho(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!xn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&mh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mh(i,E,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var Se=ve.dehydrated;Se!==null&&aa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&eu(i)}catch(_e){qt(i,i.return,_e)}}if(i===t){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function mp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function gp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(k){qt(i,a,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(k){qt(i,f,k)}}var h=i.return;try{eu(i)}catch(k){qt(i,h,k)}break;case 5:var E=i.return;try{eu(i)}catch(k){qt(i,E,k)}}}catch(k){qt(i,i.return,k)}if(i===t){ze=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ze=L;break}ze=i.return}}var z0=Math.ceil,Go=P.ReactCurrentDispatcher,iu=P.ReactCurrentOwner,Zn=P.ReactCurrentBatchConfig,Et=0,ln=null,Zt=null,dn=0,Hn=0,Es=sr(0),tn=0,ba=null,Br=0,Wo=0,ru=0,Pa=null,Dn=null,su=0,Ts=1/0,zi=null,Xo=!1,au=null,fr=null,jo=!1,dr=null,qo=0,Na=0,ou=null,Yo=-1,$o=0;function Rn(){return(Et&6)!==0?Gt():Yo!==-1?Yo:Yo=Gt()}function hr(t){return(t.mode&1)===0?1:(Et&2)!==0&&dn!==0?dn&-dn:E0.transition!==null?($o===0&&($o=mn()),$o):(t=at,t!==0||(t=window.event,t=t===void 0?16:vd(t.type)),t)}function ui(t,i,a,l){if(50<Na)throw Na=0,ou=null,Error(n(185));Jt(t,a,l),((Et&2)===0||t!==ln)&&(t===ln&&((Et&2)===0&&(Wo|=a),tn===4&&pr(t,dn)),In(t,l),a===1&&Et===0&&(i.mode&1)===0&&(Ts=Gt()+500,Eo&&or()))}function In(t,i){var a=t.callbackNode;bt(t,i);var l=At(t,t===ln?dn:0);if(l===0)a!==null&&io(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&io(a),i===1)t.tag===0?M0(vp.bind(null,t)):ih(vp.bind(null,t)),v0(function(){(Et&6)===0&&or()}),a=null;else{switch(An(l)){case 1:a=j;break;case 4:a=ae;break;case 16:a=ne;break;case 536870912:a=Ne;break;default:a=ne}a=Ap(a,_p.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function _p(t,i){if(Yo=-1,$o=0,(Et&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ws()&&t.callbackNode!==a)return null;var l=At(t,t===ln?dn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ko(t,l);else{i=l;var f=Et;Et|=2;var h=Sp();(ln!==t||dn!==i)&&(zi=null,Ts=Gt()+500,zr(t,i));do try{G0();break}catch(L){xp(t,L)}while(!0);wc(),Go.current=h,Et=f,Zt!==null?i=0:(ln=null,dn=0,i=tn)}if(i!==0){if(i===2&&(f=_t(t),f!==0&&(l=f,i=lu(t,f))),i===1)throw a=ba,zr(t,0),pr(t,l),In(t,Gt()),a;if(i===6)pr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!V0(f)&&(i=Ko(t,l),i===2&&(h=_t(t),h!==0&&(l=h,i=lu(t,h))),i===1))throw a=ba,zr(t,0),pr(t,l),In(t,Gt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Vr(t,Dn,zi);break;case 3:if(pr(t,l),(l&130023424)===l&&(i=su+500-Gt(),10<i)){if(At(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=pc(Vr.bind(null,t,Dn,zi),i);break}Vr(t,Dn,zi);break;case 4:if(pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Be(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Gt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*z0(l/1960))-l,10<l){t.timeoutHandle=pc(Vr.bind(null,t,Dn,zi),l);break}Vr(t,Dn,zi);break;case 5:Vr(t,Dn,zi);break;default:throw Error(n(329))}}}return In(t,Gt()),t.callbackNode===a?_p.bind(null,t):null}function lu(t,i){var a=Pa;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=Dn,Dn=a,i!==null&&cu(i)),t}function cu(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function V0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!si(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i){for(i&=~ru,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Be(i),l=1<<a;t[a]=-1,i&=~l}}function vp(t){if((Et&6)!==0)throw Error(n(327));ws();var i=At(t,0);if((i&1)===0)return In(t,Gt()),null;var a=Ko(t,i);if(t.tag!==0&&a===2){var l=_t(t);l!==0&&(i=l,a=lu(t,l))}if(a===1)throw a=ba,zr(t,0),pr(t,i),In(t,Gt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Vr(t,Dn,zi),In(t,Gt()),null}function uu(t,i){var a=Et;Et|=1;try{return t(i)}finally{Et=a,Et===0&&(Ts=Gt()+500,Eo&&or())}}function kr(t){dr!==null&&dr.tag===0&&(Et&6)===0&&ws();var i=Et;Et|=1;var a=Zn.transition,l=at;try{if(Zn.transition=null,at=1,t)return t()}finally{at=l,Zn.transition=a,Et=i,(Et&6)===0&&or()}}function fu(){Hn=Es.current,zt(Es)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,_0(a)),Zt!==null)for(a=Zt.return;a!==null;){var l=a;switch(Sc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&yo();break;case 3:Ss(),zt(Pn),zt(gn),Dc();break;case 5:Nc(l);break;case 4:Ss();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:Ac(l.type._context);break;case 22:case 23:fu()}a=a.return}if(ln=t,Zt=t=mr(t.current,null),dn=Hn=i,tn=0,ba=null,ru=Wo=Br=0,Dn=Pa=null,Ur!==null){for(i=0;i<Ur.length;i++)if(a=Ur[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}a.pending=l}Ur=null}return t}function xp(t,i){do{var a=Zt;try{if(wc(),Do.current=Oo,Io){for(var l=Xt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Io=!1}if(Or=0,on=en=Xt=null,Ea=!1,Ta=0,iu.current=null,a===null||a.return===null){tn=1,ba=i,Zt=null;break}e:{var h=t,E=a.return,L=a,k=i;if(i=dn,L.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,ve=L,Se=ve.tag;if((ve.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Oe=Wh(E);if(Oe!==null){Oe.flags&=-257,Xh(Oe,E,L,h,i),Oe.mode&1&&Gh(h,se,i),i=Oe,k=se;var We=i.updateQueue;if(We===null){var qe=new Set;qe.add(k),i.updateQueue=qe}else We.add(k);break e}else{if((i&1)===0){Gh(h,se,i),du();break e}k=Error(n(426))}}else if(Vt&&L.mode&1){var Kt=Wh(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Xh(Kt,E,L,h,i),Ec(ys(k,L));break e}}h=k=ys(k,L),tn!==4&&(tn=2),Pa===null?Pa=[h]:Pa.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Vh(h,k,i);ph(h,Z);break e;case 1:L=k;var G=h.type,te=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(fr===null||!fr.has(te)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Hh(h,L,i);ph(h,Ee);break e}}h=h.return}while(h!==null)}Mp(a)}catch(Ke){i=Ke,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Sp(){var t=Go.current;return Go.current=Oo,t===null?Oo:t}function du(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(Br&268435455)===0&&(Wo&268435455)===0||pr(ln,dn)}function Ko(t,i){var a=Et;Et|=2;var l=Sp();(ln!==t||dn!==i)&&(zi=null,zr(t,i));do try{H0();break}catch(f){xp(t,f)}while(!0);if(wc(),Et=a,Go.current=l,Zt!==null)throw Error(n(261));return ln=null,dn=0,tn}function H0(){for(;Zt!==null;)yp(Zt)}function G0(){for(;Zt!==null&&!Gl();)yp(Zt)}function yp(t){var i=wp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?Mp(t):Zt=i,iu.current=null}function Mp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=U0(a,i,Hn),a!==null){Zt=a;return}}else{if(a=F0(a,i),a!==null){a.flags&=32767,Zt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Vr(t,i,a){var l=at,f=Zn.transition;try{Zn.transition=null,at=1,W0(t,i,a,l)}finally{Zn.transition=f,at=l}return null}function W0(t,i,a,l){do ws();while(dr!==null);if((Et&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Pr(t,h),t===ln&&(Zt=ln=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||jo||(jo=!0,Ap(ne,function(){return ws(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Zn.transition,Zn.transition=null;var E=at;at=1;var L=Et;Et|=4,iu.current=null,B0(t,a),dp(a,t),u0(dc),ao=!!fc,dc=fc=null,t.current=a,k0(a),Wl(),Et=L,at=E,Zn.transition=h}else t.current=a;if(jo&&(jo=!1,dr=t,qo=f),h=t.pendingLanes,h===0&&(fr=null),Ve(a.stateNode),In(t,Gt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Xo)throw Xo=!1,t=au,au=null,t;return(qo&1)!==0&&t.tag!==0&&ws(),h=t.pendingLanes,(h&1)!==0?t===ou?Na++:(Na=0,ou=t):Na=0,or(),null}function ws(){if(dr!==null){var t=An(qo),i=Zn.transition,a=at;try{if(Zn.transition=null,at=16>t?16:t,dr===null)var l=!1;else{if(t=dr,dr=null,qo=0,(Et&6)!==0)throw Error(n(331));var f=Et;for(Et|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if((ze.flags&16)!==0){var L=h.deletions;if(L!==null){for(var k=0;k<L.length;k++){var se=L[k];for(ze=se;ze!==null;){var ve=ze;switch(ve.tag){case 0:case 11:case 15:Ra(8,ve,h)}var Se=ve.child;if(Se!==null)Se.return=ve,ze=Se;else for(;ze!==null;){ve=ze;var _e=ve.sibling,Oe=ve.return;if(op(ve),ve===se){ze=null;break}if(_e!==null){_e.return=Oe,ze=_e;break}ze=Oe}}}var We=h.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ra(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,ze=Z;break e}ze=h.return}}var G=t.current;for(ze=G;ze!==null;){E=ze;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,ze=te;else e:for(E=G;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ho(9,L)}}catch(Ke){qt(L,L.return,Ke)}if(L===E){ze=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ze=Ee;break e}ze=L.return}}if(Et=f,or(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Fe,t)}catch{}l=!0}return l}finally{at=a,Zn.transition=i}}return!1}function Ep(t,i,a){i=ys(a,i),i=Vh(t,i,1),t=cr(t,i,1),i=Rn(),t!==null&&(Jt(t,1,i),In(t,i))}function qt(t,i,a){if(t.tag===3)Ep(t,t,a);else for(;i!==null;){if(i.tag===3){Ep(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fr===null||!fr.has(l))){t=ys(a,t),t=Hh(i,t,1),i=cr(i,t,1),t=Rn(),i!==null&&(Jt(i,1,t),In(i,t));break}}i=i.return}}function X0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&a,ln===t&&(dn&a)===a&&(tn===4||tn===3&&(dn&130023424)===dn&&500>Gt()-su?zr(t,0):ru|=a),In(t,i)}function Tp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var a=Rn();t=Oi(t,i),t!==null&&(Jt(t,i,a),In(t,a))}function j0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Tp(t,a)}function q0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Tp(t,a)}var wp;wp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Pn.current)Ln=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,I0(t,i,a);Ln=(t.flags&131072)!==0}else Ln=!1,Vt&&(i.flags&1048576)!==0&&rh(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;zo(t,i),t=i.pendingProps;var f=hs(i,gn.current);xs(i,a),f=Fc(null,i,l,t,f,a);var h=Oc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(l)?(h=!0,Mo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bc(i),f.updater=Bo,i.stateNode=f,f._reactInternals=i,Gc(i,l,t,a),i=qc(null,i,l,!0,h,a)):(i.tag=0,Vt&&h&&xc(i),Cn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(zo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=$0(l),t=oi(l,t),f){case 0:i=jc(null,i,l,t,a);break e;case 1:i=Zh(null,i,l,t,a);break e;case 11:i=jh(null,i,l,t,a);break e;case 14:i=qh(null,i,l,oi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),jc(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Zh(t,i,l,f,a);case 3:e:{if(Qh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,hh(t,i),No(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=ys(Error(n(423)),i),i=Jh(t,i,l,a,f);break e}else if(l!==f){f=ys(Error(n(424)),i),i=Jh(t,i,l,a,f);break e}else for(Vn=rr(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,ai=null,a=fh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),l===f){i=ki(t,i,a);break e}Cn(t,i,l,a)}i=i.child}return i;case 5:return gh(i),t===null&&Mc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,hc(l,f)?E=null:h!==null&&hc(l,h)&&(i.flags|=32),Kh(t,i),Cn(t,i,E,a),i.child;case 6:return t===null&&Mc(i),null;case 13:return ep(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=_s(i,null,l,a):Cn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),jh(t,i,l,f,a);case 7:return Cn(t,i,i.pendingProps,a),i.child;case 8:return Cn(t,i,i.pendingProps.children,a),i.child;case 12:return Cn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Ot(Ro,l._currentValue),l._currentValue=E,h!==null)if(si(h.value,E)){if(h.children===f.children&&!Pn.current){i=ki(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){E=h.child;for(var k=L.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=Bi(-1,a&-a),k.tag=2;var se=h.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),se.pending=k}}h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),Cc(h.return,a,i),L.lanes|=a;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,L=E.alternate,L!==null&&(L.lanes|=a),Cc(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Cn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,xs(i,a),f=$n(f),l=l(f),i.flags|=1,Cn(t,i,l,a),i.child;case 14:return l=i.type,f=oi(l,i.pendingProps),f=oi(l.type,f),qh(t,i,l,f,a);case 15:return Yh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),zo(t,i),i.tag=1,Nn(l)?(t=!0,Mo(i)):t=!1,xs(i,a),kh(i,l,f),Gc(i,l,f,a),qc(null,i,l,!0,t,a);case 19:return np(t,i,a);case 22:return $h(t,i,a)}throw Error(n(156,i.tag))};function Ap(t,i){return no(t,i)}function Y0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,a,l){return new Y0(t,i,a,l)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $0(t){if(typeof t=="function")return hu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===ue)return 14}return 2}function mr(t,i){var a=t.alternate;return a===null?(a=Qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Zo(t,i,a,l,f,h){var E=2;if(l=t,typeof t=="function")hu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Hr(a.children,f,h,i);case Q:E=8,f|=8;break;case w:return t=Qn(12,a,i,f|2),t.elementType=w,t.lanes=h,t;case K:return t=Qn(13,a,i,f),t.elementType=K,t.lanes=h,t;case ce:return t=Qn(19,a,i,f),t.elementType=ce,t.lanes=h,t;case $:return Qo(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case V:E=9;break e;case Y:E=11;break e;case ue:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Hr(t,i,a,l){return t=Qn(7,t,l,i),t.lanes=a,t}function Qo(t,i,a,l){return t=Qn(22,t,l,i),t.elementType=$,t.lanes=a,t.stateNode={isHidden:!1},t}function pu(t,i,a){return t=Qn(6,t,null,i),t.lanes=a,t}function mu(t,i,a){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function K0(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function gu(t,i,a,l,f,h,E,L,k){return t=new K0(t,i,a,L,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(h),t}function Z0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Cp(t){if(!t)return ar;t=t._reactInternals;e:{if(jn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Nn(a))return th(t,a,i)}return i}function Rp(t,i,a,l,f,h,E,L,k){return t=gu(a,l,!0,t,f,h,E,L,k),t.context=Cp(null),a=t.current,l=Rn(),f=hr(a),h=Bi(l,f),h.callback=i??null,cr(a,h,f),t.current.lanes=f,Jt(t,f,l),In(t,l),t}function Jo(t,i,a,l){var f=i.current,h=Rn(),E=hr(f);return a=Cp(a),i.context===null?i.context=a:i.pendingContext=a,i=Bi(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=cr(f,i,E),t!==null&&(ui(t,f,E,h),Po(t,f,E)),E}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _u(t,i){bp(t,i),(t=t.alternate)&&bp(t,i)}function Q0(){return null}var Pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function vu(t){this._internalRoot=t}tl.prototype.render=vu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Jo(t,i,null,null)},tl.prototype.unmount=vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kr(function(){Jo(null,t,null,null)}),i[Di]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=vi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,t),a===0&&gd(t)}};function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function J0(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var se=el(E);h.call(se)}}var E=Rp(i,l,t,0,null,!1,!1,"",Np);return t._reactRootContainer=E,t[Di]=E.current,ma(t.nodeType===8?t.parentNode:t),kr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var L=l;l=function(){var se=el(k);L.call(se)}}var k=gu(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=k,t[Di]=k.current,ma(t.nodeType===8?t.parentNode:t),kr(function(){Jo(i,k,a,l)}),k}function il(t,i,a,l,f){var h=a._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var L=f;f=function(){var k=el(E);L.call(k)}}Jo(i,E,t,f)}else E=J0(a,i,t,f,l);return el(E)}sn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=It(i.pendingLanes);a!==0&&(Nt(i,a|1),In(i,Gt()),(Et&6)===0&&(Ts=Gt()+500,or()))}break;case 13:kr(function(){var l=Oi(t,1);if(l!==null){var f=Rn();ui(l,t,1,f)}}),_u(t,1)}},an=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var a=Rn();ui(i,t,134217728,a)}_u(t,134217728)}},is=function(t){if(t.tag===13){var i=hr(t),a=Oi(t,i);if(a!==null){var l=Rn();ui(a,t,i,l)}_u(t,i)}},vi=function(){return at},pd=function(t,i){var a=at;try{return at=t,i()}finally{at=a}},Le=function(t,i,a){switch(i){case"input":if(Bt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=So(l);if(!f)throw Error(n(90));Ht(l),Bt(l,f)}}}break;case"textarea":M(t,a);break;case"select":i=a.value,i!=null&&St(t,!!a.multiple,i,!1)}},rt=uu,Lt=kr;var e_={usingClientEntryPoint:!1,Events:[va,fs,So,me,be,uu]},La={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t_={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ta(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Fe=rl.inject(t_),we=rl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_,Un.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(i))throw Error(n(200));return Z0(t,i,null,a)},Un.createRoot=function(t,i){if(!xu(t))throw Error(n(299));var a=!1,l="",f=Pp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=gu(t,1,!1,null,null,a,!1,l,f),t[Di]=i.current,ma(t.nodeType===8?t.parentNode:t),new vu(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ta(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return kr(t)},Un.hydrate=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,a)},Un.hydrateRoot=function(t,i,a){if(!xu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",E=Pp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Rp(i,null,t,1,a??null,f,!1,h,E),t[Di]=i.current,ma(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new tl(i)},Un.render=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,a)},Un.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(kr(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1},Un.unstable_batchedUpdates=uu,Un.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!nl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,a,!1,l)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var kp;function u_(){if(kp)return Mu.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mu.exports=c_(),Mu.exports}var zp;function f_(){if(zp)return sl;zp=1;var s=u_();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var d_=f_();const h_=Vm(d_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="182",p_=0,Vp=1,m_=2,bl=1,Hm=2,Va=3,wr=0,On=1,wi=2,qi=0,es=1,Ul=2,Hp=3,Gp=4,g_=5,Kr=100,__=101,v_=102,x_=103,S_=104,y_=200,M_=201,E_=202,T_=203,sf=204,af=205,w_=206,A_=207,C_=208,R_=209,b_=210,P_=211,N_=212,L_=213,D_=214,of=0,lf=1,cf=2,Hs=3,uf=4,ff=5,df=6,hf=7,Gm=0,I_=1,U_=2,Ri=0,Wm=1,Xm=2,jm=3,qm=4,Ym=5,$m=6,Km=7,Zm=300,ts=301,Gs=302,pf=303,mf=304,kl=306,gf=1e3,ji=1001,_f=1002,hn=1003,F_=1004,al=1005,En=1006,wu=1007,Qr=1008,Xn=1009,Qm=1010,Jm=1011,Xa=1012,nd=1013,Pi=1014,Ai=1015,$i=1016,id=1017,rd=1018,ja=1020,eg=35902,tg=35899,ng=1021,ig=1022,mi=1023,Ki=1026,Jr=1027,rg=1028,sd=1029,Ws=1030,ad=1031,od=1033,Pl=33776,Nl=33777,Ll=33778,Dl=33779,vf=35840,xf=35841,Sf=35842,yf=35843,Mf=36196,Ef=37492,Tf=37496,wf=37488,Af=37489,Cf=37490,Rf=37491,bf=37808,Pf=37809,Nf=37810,Lf=37811,Df=37812,If=37813,Uf=37814,Ff=37815,Of=37816,Bf=37817,kf=37818,zf=37819,Vf=37820,Hf=37821,Gf=36492,Wf=36494,Xf=36495,jf=36283,qf=36284,Yf=36285,$f=36286,O_=3200,sg=0,B_=1,Er="",ei="srgb",Xs="srgb-linear",Fl="linear",Dt="srgb",As=7680,Wp=519,k_=512,z_=513,V_=514,ld=515,H_=516,G_=517,cd=518,W_=519,Xp=35044,jp="300 es",Ci=2e3,Ol=2001;function ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function X_(){const s=Bl("canvas");return s.style.display="block",s}const qp={};function Yp(...s){const e="THREE."+s.shift();console.log(e,...s)}function ot(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Rt(...s){const e="THREE."+s.shift();console.error(e,...s)}function qa(...s){const e=s.join(" ");e in qp||(qp[e]=!0,ot(...s))}function j_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,Kf=180/Math.PI;function $a(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function q_(s,e){return(s%e+e)%e}function Cu(s,e,n){return(1-n)*s+n*e}function Ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3],x=c[u+0],y=c[u+1],T=c[u+2],C=c[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=C;return}if(_!==C||p!==x||m!==y||v!==T){let S=p*x+m*y+v*T+_*C;S<0&&(x=-x,y=-y,T=-T,C=-C,S=-S);let g=1-d;if(S<.9995){const N=Math.acos(S),D=Math.sin(N);g=Math.sin(g*N)/D,d=Math.sin(d*N)/D,p=p*g+x*d,m=m*g+y*d,v=v*g+T*d,_=_*g+C*d}else{p=p*g+x*d,m=m*g+y*d,v=v*g+T*d,_=_*g+C*d;const N=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=N,m*=N,v*=N,_*=N}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=c[u],x=c[u+1],y=c[u+2],T=c[u+3];return e[n]=d*T+v*_+p*y-m*x,e[n+1]=p*T+v*x+m*_-d*y,e[n+2]=m*T+v*y+d*x-p*_,e[n+3]=v*T-d*_-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),_=d(c/2),x=p(r/2),y=p(o/2),T=p(c/2);switch(u){case"XYZ":this._x=x*v*_+m*y*T,this._y=m*y*_-x*v*T,this._z=m*v*T+x*y*_,this._w=m*v*_-x*y*T;break;case"YXZ":this._x=x*v*_+m*y*T,this._y=m*y*_-x*v*T,this._z=m*v*T-x*y*_,this._w=m*v*_+x*y*T;break;case"ZXY":this._x=x*v*_-m*y*T,this._y=m*y*_+x*v*T,this._z=m*v*T+x*y*_,this._w=m*v*_-x*y*T;break;case"ZYX":this._x=x*v*_-m*y*T,this._y=m*y*_+x*v*T,this._z=m*v*T-x*y*_,this._w=m*v*_+x*y*T;break;case"YZX":this._x=x*v*_+m*y*T,this._y=m*y*_+x*v*T,this._z=m*v*T-x*y*_,this._w=m*v*_-x*y*T;break;case"XZY":this._x=x*v*_-m*y*T,this._y=m*y*_-x*v*T,this._z=m*v*T+x*y*_,this._w=m*v*_+x*y*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],_=n[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(c-m)*y,this._z=(u-o)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(v-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(c-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(u-o)/y,this._x=(c+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+o*m-c*p,this._y=o*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-o*d,this._w=u*v-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),v=2*(d*n-c*o),_=2*(c*r-u*n);return this.x=n+p*m+u*_-d*v,this.y=r+p*v+d*m-c*_,this.z=o+p*_+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new ie,$p=new Ka;class ft{constructor(e,n,r,o,c,u,d,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],y=r[5],T=r[8],C=o[0],S=o[3],g=o[6],N=o[1],D=o[4],P=o[7],U=o[2],F=o[5],O=o[8];return c[0]=u*C+d*N+p*U,c[3]=u*S+d*D+p*F,c[6]=u*g+d*P+p*O,c[1]=m*C+v*N+_*U,c[4]=m*S+v*D+_*F,c[7]=m*g+v*P+_*O,c[2]=x*C+y*N+T*U,c[5]=x*S+y*D+T*F,c[8]=x*g+y*P+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*u-d*m,x=d*p-v*c,y=m*c-u*p,T=n*_+r*x+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(o*m-v*r)*C,e[2]=(d*r-o*u)*C,e[3]=x*C,e[4]=(v*n-o*p)*C,e[5]=(o*c-d*n)*C,e[6]=y*C,e[7]=(r*p-m*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new ft,Kp=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y_(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Dt&&(o.r=Yi(o.r),o.g=Yi(o.g),o.b=Yi(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Vs(o.r),o.g=Vs(o.g),o.b=Vs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Er?Fl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:Fl,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Tt=Y_();function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class $_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Bl("canvas")),Cs.width=e.width,Cs.height=e.height;const o=Cs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Yi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Yi(n[r]/255)*255):n[r]=Yi(n[r]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Pu(o[u].image)):c.push(Pu(o[u]))}else c=Pu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Z_=0;const Nu=new ie;class Tn extends Ys{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,r=ji,o=ji,c=En,u=Qr,d=mi,p=Xn,m=Tn.DEFAULT_ANISOTROPY,v=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=$a(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nu).x}get height(){return this.source.getSize(Nu).y}get depth(){return this.source.getSize(Nu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Zm;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],y=p[5],T=p[9],C=p[2],S=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(y+1)/2,U=(g+1)/2,F=(v+x)/4,O=(_+C)/4,Q=(T+S)/4;return D>P&&D>U?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=F/r,c=O/r):P>U?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=F/o,c=Q/o):U<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),r=O/c,o=Q/c),this.set(r,o,c,n),this}let N=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(_-C)/N,this.z=(x-v)/N,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Q_ extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Tn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new ud(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Q_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class og extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(c,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ll.subVectors(this.max,Ua),Rs.subVectors(e.a,Ua),bs.subVectors(e.b,Ua),Ps.subVectors(e.c,Ua),_r.subVectors(bs,Rs),vr.subVectors(Ps,bs),Gr.subVectors(Rs,Ps);let n=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Gr.z,Gr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Gr.z,0,-Gr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Gr.y,Gr.x,0];return!Lu(n,Rs,bs,Ps,ll)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,Rs,bs,Ps,ll))?!1:(cl.crossVectors(_r,vr),n=[cl.x,cl.y,cl.z],Lu(n,Rs,bs,Ps,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],fi=new ie,ol=new Za,Rs=new ie,bs=new ie,Ps=new ie,_r=new ie,vr=new ie,Gr=new ie,Ua=new ie,ll=new ie,cl=new ie,Wr=new ie;function Lu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Wr.fromArray(s,c);const d=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),p=e.dot(Wr),m=n.dot(Wr),v=r.dot(Wr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const ev=new Za,Fa=new ie,Du=new ie;class zl{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ev.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Du)),this.expandByPoint(Fa.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new ie,Iu=new ie,ul=new ie,xr=new ie,Uu=new ie,fl=new ie,Fu=new ie;class lg{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Iu.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ul),d=xr.dot(this.direction),p=-xr.dot(ul),m=xr.lengthSq(),v=Math.abs(1-u*u);let _,x,y,T;if(v>0)if(_=u*p-d,x=u*d-p,T=c*v,_>=0)if(x>=-T)if(x<=T){const C=1/v;_*=C,x*=C,y=_*(_+u*x+2*d)+x*(u*_+x+2*p)+m}else x=c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+m):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+x*(x+2*p)+m);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Iu).addScaledVector(ul,x),y}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),o=Hi.dot(Hi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,r,o,c){Uu.subVectors(n,e),fl.subVectors(r,e),Fu.crossVectors(Uu,fl);let u=this.direction.dot(Fu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const p=d*this.direction.dot(fl.crossVectors(xr,fl));if(p<0)return null;const m=d*this.direction.dot(Uu.cross(xr));if(m<0||p+m>u)return null;const v=-d*xr.dot(Fu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,o,c,u,d,p,m,v,_,x,y,T,C,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,v,_,x,y,T,C,S)}set(e,n,r,o,c,u,d,p,m,v,_,x,y,T,C,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=c,g[5]=u,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=y,g[7]=T,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*v,y=u*_,T=d*v,C=d*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=y+T*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=T+y*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*v,y=p*_,T=m*v,C=m*_;n[0]=x+C*d,n[4]=T*d-y,n[8]=u*m,n[1]=u*_,n[5]=u*v,n[9]=-d,n[2]=y*d-T,n[6]=C+x*d,n[10]=u*p}else if(e.order==="ZXY"){const x=p*v,y=p*_,T=m*v,C=m*_;n[0]=x-C*d,n[4]=-u*_,n[8]=T+y*d,n[1]=y+T*d,n[5]=u*v,n[9]=C-x*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const x=u*v,y=u*_,T=d*v,C=d*_;n[0]=p*v,n[4]=T*m-y,n[8]=x*m+C,n[1]=p*_,n[5]=C*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,y=u*m,T=d*p,C=d*m;n[0]=p*v,n[4]=C-x*_,n[8]=T*_+y,n[1]=_,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*_+T,n[10]=x-C*_}else if(e.order==="XZY"){const x=u*p,y=u*m,T=d*p,C=d*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=x*_+C,n[5]=u*v,n[9]=y*_-T,n[2]=T*_-y,n[6]=d*v,n[10]=C*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tv,e,nv)}lookAt(e,n,r){const o=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Sr.crossVectors(r,Gn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Sr.crossVectors(r,Gn)),Sr.normalize(),dl.crossVectors(Gn,Sr),o[0]=Sr.x,o[4]=dl.x,o[8]=Gn.x,o[1]=Sr.y,o[5]=dl.y,o[9]=Gn.y,o[2]=Sr.z,o[6]=dl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],y=r[13],T=r[2],C=r[6],S=r[10],g=r[14],N=r[3],D=r[7],P=r[11],U=r[15],F=o[0],O=o[4],Q=o[8],w=o[12],R=o[1],V=o[5],Y=o[9],K=o[13],ce=o[2],ue=o[6],oe=o[10],$=o[14],q=o[3],de=o[7],re=o[11],I=o[15];return c[0]=u*F+d*R+p*ce+m*q,c[4]=u*O+d*V+p*ue+m*de,c[8]=u*Q+d*Y+p*oe+m*re,c[12]=u*w+d*K+p*$+m*I,c[1]=v*F+_*R+x*ce+y*q,c[5]=v*O+_*V+x*ue+y*de,c[9]=v*Q+_*Y+x*oe+y*re,c[13]=v*w+_*K+x*$+y*I,c[2]=T*F+C*R+S*ce+g*q,c[6]=T*O+C*V+S*ue+g*de,c[10]=T*Q+C*Y+S*oe+g*re,c[14]=T*w+C*K+S*$+g*I,c[3]=N*F+D*R+P*ce+U*q,c[7]=N*O+D*V+P*ue+U*de,c[11]=N*Q+D*Y+P*oe+U*re,c[15]=N*w+D*K+P*$+U*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],y=e[14],T=e[3],C=e[7],S=e[11],g=e[15],N=p*y-m*x,D=d*y-m*_,P=d*x-p*_,U=u*y-m*v,F=u*x-p*v,O=u*_-d*v;return n*(C*N-S*D+g*P)-r*(T*N-S*U+g*F)+o*(T*D-C*U+g*O)-c*(T*P-C*F+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],y=e[11],T=e[12],C=e[13],S=e[14],g=e[15],N=_*S*m-C*x*m+C*p*y-d*S*y-_*p*g+d*x*g,D=T*x*m-v*S*m-T*p*y+u*S*y+v*p*g-u*x*g,P=v*C*m-T*_*m+T*d*y-u*C*y-v*d*g+u*_*g,U=T*_*p-v*C*p-T*d*x+u*C*x+v*d*S-u*_*S,F=n*N+r*D+o*P+c*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=N*O,e[1]=(C*x*c-_*S*c-C*o*y+r*S*y+_*o*g-r*x*g)*O,e[2]=(d*S*c-C*p*c+C*o*m-r*S*m-d*o*g+r*p*g)*O,e[3]=(_*p*c-d*x*c-_*o*m+r*x*m+d*o*y-r*p*y)*O,e[4]=D*O,e[5]=(v*S*c-T*x*c+T*o*y-n*S*y-v*o*g+n*x*g)*O,e[6]=(T*p*c-u*S*c-T*o*m+n*S*m+u*o*g-n*p*g)*O,e[7]=(u*x*c-v*p*c+v*o*m-n*x*m-u*o*y+n*p*y)*O,e[8]=P*O,e[9]=(T*_*c-v*C*c-T*r*y+n*C*y+v*r*g-n*_*g)*O,e[10]=(u*C*c-T*d*c+T*r*m-n*C*m-u*r*g+n*d*g)*O,e[11]=(v*d*c-u*_*c-v*r*m+n*_*m+u*r*y-n*d*y)*O,e[12]=U*O,e[13]=(v*C*o-T*_*o+T*r*x-n*C*x-v*r*S+n*_*S)*O,e[14]=(T*d*o-u*C*o-T*r*p+n*C*p+u*r*S-n*d*S)*O,e[15]=(u*_*o-v*d*o+v*r*p-n*_*p-u*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*u,0,m*p-o*d,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,_=d+d,x=c*m,y=c*v,T=c*_,C=u*v,S=u*_,g=d*_,N=p*m,D=p*v,P=p*_,U=r.x,F=r.y,O=r.z;return o[0]=(1-(C+g))*U,o[1]=(y+P)*U,o[2]=(T-D)*U,o[3]=0,o[4]=(y-P)*F,o[5]=(1-(x+g))*F,o[6]=(S+N)*F,o[7]=0,o[8]=(T+D)*O,o[9]=(S-N)*O,o[10]=(1-(x+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Ns.set(o[0],o[1],o[2]).length();const u=Ns.set(o[4],o[5],o[6]).length(),d=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),di.copy(this);const m=1/c,v=1/u,_=1/d;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,n.setFromRotationMatrix(di),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=Ci,p=!1){const m=this.elements,v=2*c/(n-e),_=2*c/(r-o),x=(n+e)/(n-e),y=(r+o)/(r-o);let T,C;if(p)T=c/(u-c),C=u*c/(u-c);else if(d===Ci)T=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===Ol)T=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=Ci,p=!1){const m=this.elements,v=2/(n-e),_=2/(r-o),x=-(n+e)/(n-e),y=-(r+o)/(r-o);let T,C;if(p)T=1/(u-c),C=u/(u-c);else if(d===Ci)T=-2/(u-c),C=-(u+c)/(u-c);else if(d===Ol)T=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new ie,di=new jt,tv=new ie(0,0,0),nv=new ie(1,1,1),Sr=new ie,dl=new ie,Gn=new ie,Qp=new jt,Jp=new Ka;class Ni{constructor(e=0,n=0,r=0,o=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],v=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iv=0;const em=new ie,Ls=new Ka,Gi=new jt,hl=new ie,Oa=new ie,rv=new ie,sv=new Ka,tm=new ie(1,0,0),nm=new ie(0,1,0),im=new ie(0,0,1),rm={type:"added"},av={type:"removed"},Ds={type:"childadded",child:null},Ou={type:"childremoved",child:null};class pn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new ie,n=new Ni,r=new Ka,o=new ie(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Oa,hl,this.up):Gi.lookAt(hl,Oa,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(av),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}pn.DEFAULT_UP=new ie(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ie,Wi=new ie,Bu=new ie,Xi=new ie,Is=new ie,Us=new ie,sm=new ie,ku=new ie,zu=new ie,Vu=new ie,Hu=new $t,Gu=new $t,Wu=new $t;class pi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),hi.subVectors(e,n),o.cross(hi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){hi.subVectors(o,n),Wi.subVectors(r,n),Bu.subVectors(e,n);const u=hi.dot(hi),d=hi.dot(Wi),p=hi.dot(Bu),m=Wi.dot(Wi),v=Wi.dot(Bu),_=u*m-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(m*p-d*v)*x,T=(u*v-d*p)*x;return c.set(1-y-T,T,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Xi.x),p.addScaledVector(u,Xi.y),p.addScaledVector(d,Xi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Hu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Hu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Hu,c.x),u.addScaledVector(Gu,c.y),u.addScaledVector(Wu,c.z),u}static isFrontFacing(e,n,r,o){return hi.subVectors(r,n),Wi.subVectors(e,n),hi.cross(Wi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),hi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Is.subVectors(o,r),Us.subVectors(c,r),ku.subVectors(e,r);const p=Is.dot(ku),m=Us.dot(ku);if(p<=0&&m<=0)return n.copy(r);zu.subVectors(e,o);const v=Is.dot(zu),_=Us.dot(zu);if(v>=0&&_<=v)return n.copy(o);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Is,u);Vu.subVectors(e,c);const y=Is.dot(Vu),T=Us.dot(Vu);if(T>=0&&y<=T)return n.copy(c);const C=y*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Us,d);const S=v*T-y*_;if(S<=0&&_-v>=0&&y-T>=0)return sm.subVectors(c,o),d=(_-v)/(_-v+(y-T)),n.copy(o).addScaledVector(sm,d);const g=1/(S+C+x);return u=C*g,d=x*g,n.copy(r).addScaledVector(Is,u).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Xu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=q_(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Xu(u,c,e+1/3),this.g=Xu(u,c,e),this.b=Xu(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=ei){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(yn.copy(this),e),Math.round(xt(yn.r*255,0,255))*65536+Math.round(xt(yn.g*255,0,255))*256+Math.round(xt(yn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(yn.copy(this),n);const r=yn.r,o=yn.g,c=yn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const _=u-d;switch(m=v<=.5?_/(u+d):_/(2-u-d),u){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ei){Tt.workingToColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,o=yn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(pl);const r=Cu(yr.h,pl.h,n),o=Cu(yr.s,pl.s,n),c=Cu(yr.l,pl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new wt;wt.NAMES=ug;let ov=0;class $s extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=es,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=af,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sf&&(r.blendSrc=this.blendSrc),this.blendDst!==af&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ga extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ie,ml=new Pt;let lv=0;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ia(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array),c=Fn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class fg extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class dg extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ni extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let cv=0;const Jn=new jt,ju=new pn,Fs=new ie,Wn=new Za,Ba=new Za,un=new ie;class ii extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?dg:fg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ni(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Wn.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Ba.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(Wn.min,Ba.min),Wn.expandByPoint(un),un.addVectors(Wn.max,Ba.max),Wn.expandByPoint(un)):(Wn.expandByPoint(Ba.min),Wn.expandByPoint(Ba.max))}Wn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)un.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(un));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)un.fromBufferAttribute(d,m),p&&(Fs.fromBufferAttribute(e,m),un.add(Fs)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let Q=0;Q<r.count;Q++)d[Q]=new ie,p[Q]=new ie;const m=new ie,v=new ie,_=new ie,x=new Pt,y=new Pt,T=new Pt,C=new ie,S=new ie;function g(Q,w,R){m.fromBufferAttribute(r,Q),v.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Q),y.fromBufferAttribute(c,w),T.fromBufferAttribute(c,R),v.sub(m),_.sub(m),y.sub(x),T.sub(x);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(V),d[Q].add(C),d[w].add(C),d[R].add(C),p[Q].add(S),p[w].add(S),p[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Q=0,w=N.length;Q<w;++Q){const R=N[Q],V=R.start,Y=R.count;for(let K=V,ce=V+Y;K<ce;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new ie,P=new ie,U=new ie,F=new ie;function O(Q){U.fromBufferAttribute(o,Q),F.copy(U);const w=d[Q];D.copy(w),D.sub(U.multiplyScalar(U.dot(w))).normalize(),P.crossVectors(F,w);const V=P.dot(p[Q])<0?-1:1;u.setXYZW(Q,D.x,D.y,D.z,V)}for(let Q=0,w=N.length;Q<w;++Q){const R=N[Q],V=R.start,Y=R.count;for(let K=V,ce=V+Y;K<ce;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new ie,c=new ie,u=new ie,d=new ie,p=new ie,m=new ie,v=new ie,_=new ie;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),v.subVectors(u,c),_.subVectors(o,c),v.cross(_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,c),_.subVectors(o,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,x=new m.constructor(p.length*v);let y=0,T=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*v;for(let g=0;g<v;g++)x[T++]=m[y++]}return new gi(x,v,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,_=m.length;v<_;v++){const x=m[v],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];v.push(y.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,y=_.length;x<y;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new jt,Xr=new lg,gl=new zl,om=new ie,_l=new ie,vl=new ie,xl=new ie,qu=new ie,Sl=new ie,lm=new ie,yl=new ie;class Mn extends pn{constructor(e=new ii,n=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Sl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],_=c[p];v!==0&&(qu.fromBufferAttribute(_,e),u?Sl.addScaledVector(qu,v):Sl.addScaledVector(qu.sub(n),v))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(c),Xr.copy(e.ray).recast(e.near),!(gl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(gl,om)===null||Xr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(am.copy(c).invert(),Xr.copy(e.ray).applyMatrix4(am),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const S=x[T],g=u[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let P=N,U=D;P<U;P+=3){const F=d.getX(P),O=d.getX(P+1),Q=d.getX(P+2);o=Ml(this,g,e,r,m,v,_,F,O,Q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=T,g=C;S<g;S+=3){const N=d.getX(S),D=d.getX(S+1),P=d.getX(S+2);o=Ml(this,u,e,r,m,v,_,N,D,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const S=x[T],g=u[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let P=N,U=D;P<U;P+=3){const F=P,O=P+1,Q=P+2;o=Ml(this,g,e,r,m,v,_,F,O,Q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const T=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let S=T,g=C;S<g;S+=3){const N=S,D=S+1,P=S+2;o=Ml(this,u,e,r,m,v,_,N,D,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function uv(s,e,n,r,o,c,u,d){let p;if(e.side===On?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===wr,d),p===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(yl);return m<n.near||m>n.far?null:{distance:m,point:yl.clone(),object:s}}function Ml(s,e,n,r,o,c,u,d,p,m){s.getVertexPosition(d,_l),s.getVertexPosition(p,vl),s.getVertexPosition(m,xl);const v=uv(s,e,n,r,_l,vl,xl,lm);if(v){const _=new ie;pi.getBarycoord(lm,_l,vl,xl,_),o&&(v.uv=pi.getInterpolatedAttribute(o,d,p,m,_,new Pt)),c&&(v.uv1=pi.getInterpolatedAttribute(c,d,p,m,_,new Pt)),u&&(v.normal=pi.getInterpolatedAttribute(u,d,p,m,_,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ie,materialIndex:0};pi.getNormal(_l,vl,xl,x.normal),v.face=x,v.barycoord=_}return v}class ns extends ii{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(v,3)),this.setAttribute("uv",new ni(_,2));function T(C,S,g,N,D,P,U,F,O,Q,w){const R=P/O,V=U/Q,Y=P/2,K=U/2,ce=F/2,ue=O+1,oe=Q+1;let $=0,q=0;const de=new ie;for(let re=0;re<oe;re++){const I=re*V-K;for(let le=0;le<ue;le++){const Ae=le*R-Y;de[C]=Ae*N,de[S]=I*D,de[g]=ce,m.push(de.x,de.y,de.z),de[C]=0,de[S]=0,de[g]=F>0?1:-1,v.push(de.x,de.y,de.z),_.push(le/O),_.push(1-re/Q),$+=1}}for(let re=0;re<Q;re++)for(let I=0;I<O;I++){const le=x+I+ue*re,Ae=x+I+ue*(re+1),He=x+(I+1)+ue*(re+1),Ye=x+(I+1)+ue*re;p.push(le,Ae,Ye),p.push(Ae,He,Ye),q+=6}d.addGroup(y,q,w),y+=q,x+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const o in r)e[o]=r[o]}return e}function fv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const dv={clone:js,merge:bn};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class pg extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new ie,cm=new Pt,um=new Pt;class ti extends pg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,cm,um),n.subVectors(um,cm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,Bs=1;class mv extends pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Os,Bs,e,n);o.layers=this.layers,this.add(o);const c=new ti(Os,Bs,e,n);c.layers=this.layers,this.add(c);const u=new ti(Os,Bs,e,n);u.layers=this.layers,this.add(u);const d=new ti(Os,Bs,e,n);d.layers=this.layers,this.add(d);const p=new ti(Os,Bs,e,n);p.layers=this.layers,this.add(p);const m=new ti(Os,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(_,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class mg extends Tn{constructor(e=[],n=ts,r,o,c,u,d,p,m,v){super(e,n,r,o,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gg extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ns(5,5,5),c=new Li({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:qi});c.uniforms.tEquirect.value=n;const u=new Mn(o,c),d=n.minFilter;return n.minFilter===Qr&&(n.minFilter=En),new mv(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class zs extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gv={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),g=this._getHandJoint(m,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class fd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=n}clone(){return new fd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _v extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vv extends Tn{constructor(e=null,n=1,r=1,o,c,u,d,p,m=hn,v=hn,_,x){super(null,u,d,p,m,v,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $u=new ie,xv=new ie,Sv=new ft;class $r{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=$u.subVectors(r,n).cross(xv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($u),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Sv.getNormalMatrix(e),o=this.coplanarPoint($u).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new zl,yv=new Pt(.5,.5),El=new ie;class dd{constructor(e=new $r,n=new $r,r=new $r,o=new $r,c=new $r,u=new $r){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ci,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],v=c[4],_=c[5],x=c[6],y=c[7],T=c[8],C=c[9],S=c[10],g=c[11],N=c[12],D=c[13],P=c[14],U=c[15];if(o[0].setComponents(m-u,y-v,g-T,U-N).normalize(),o[1].setComponents(m+u,y+v,g+T,U+N).normalize(),o[2].setComponents(m+d,y+_,g+C,U+D).normalize(),o[3].setComponents(m-d,y-_,g-C,U-D).normalize(),r)o[4].setComponents(p,x,S,P).normalize(),o[5].setComponents(m-p,y-x,g-S,U-P).normalize();else if(o[4].setComponents(m-p,y-x,g-S,U-P).normalize(),n===Ci)o[5].setComponents(m+p,y+x,g+S,U+P).normalize();else if(n===Ol)o[5].setComponents(p,x,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const n=yv.distanceTo(e.center);return jr.radius=.7071067811865476+n,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(El.x=o.normal.x>0?e.max.x:e.min.x,El.y=o.normal.y>0?e.max.y:e.min.y,El.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _g extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fm=new jt,Zf=new lg,Tl=new zl,wl=new ie;class Mv extends pn{constructor(e=new ii,n=new _g){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=c,e.ray.intersectsSphere(Tl)===!1)return;fm.copy(o).invert(),Zf.copy(e.ray).applyMatrix4(fm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let T=x,C=y;T<C;T++){const S=m.getX(T);wl.fromBufferAttribute(_,S),dm(wl,S,p,o,e,n,this)}}else{const x=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let T=x,C=y;T<C;T++)wl.fromBufferAttribute(_,T),dm(wl,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function dm(s,e,n,r,o,c,u){const d=Zf.distanceSqToPoint(s);if(d<n){const p=new ie;Zf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class hm extends Tn{constructor(e,n,r,o,c,u,d,p,m){super(e,n,r,o,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ya extends Tn{constructor(e,n,r=Pi,o,c,u,d=hn,p=hn,m,v=Ki,_=1){if(v!==Ki&&v!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ev extends Ya{constructor(e,n=Pi,r=ts,o,c,u=hn,d=hn,p,m=Ki){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,n,r,o,c,u,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vg extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends ii{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,_=e/d,x=n/p,y=[],T=[],C=[],S=[];for(let g=0;g<v;g++){const N=g*x-u;for(let D=0;D<m;D++){const P=D*_-c;T.push(P,-N,0),C.push(0,0,1),S.push(D/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<d;N++){const D=N+m*g,P=N+m*(g+1),U=N+1+m*(g+1),F=N+1+m*g;y.push(D,P,F),y.push(P,U,F)}this.setIndex(y),this.setAttribute("position",new ni(T,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wa extends ii{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const v=[],_=new ie,x=new ie,y=[],T=[],C=[],S=[];for(let g=0;g<=r;g++){const N=[],D=g/r;let P=0;g===0&&u===0?P=.5/n:g===r&&p===Math.PI&&(P=-.5/n);for(let U=0;U<=n;U++){const F=U/n;_.x=-e*Math.cos(o+F*c)*Math.sin(u+D*d),_.y=e*Math.cos(u+D*d),_.z=e*Math.sin(o+F*c)*Math.sin(u+D*d),T.push(_.x,_.y,_.z),x.copy(_).normalize(),C.push(x.x,x.y,x.z),S.push(F+P,1-D),N.push(m++)}v.push(N)}for(let g=0;g<r;g++)for(let N=0;N<n;N++){const D=v[g][N+1],P=v[g][N],U=v[g+1][N],F=v[g+1][N+1];(g!==0||u>0)&&y.push(D,P,F),(g!==r-1||p<Math.PI)&&y.push(P,U,F)}this.setIndex(y),this.setAttribute("position",new ni(T,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tv extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pm extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sg,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wv extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Av extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xg extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ku=new jt,mm=new ie,gm=new ie;class Cv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(mm),gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gm),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hd extends pg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Rv extends Cv{constructor(){super(new hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bv extends xg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Rv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Pv extends xg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nv extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(s,e,n,r){const o=Dv(r);switch(n){case ng:return s*e;case rg:return s*e/o.components*o.byteLength;case sd:return s*e/o.components*o.byteLength;case Ws:return s*e*2/o.components*o.byteLength;case ad:return s*e*2/o.components*o.byteLength;case ig:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case od:return s*e*4/o.components*o.byteLength;case Pl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:case yf:return Math.max(s,16)*Math.max(e,8)/4;case vf:case Sf:return Math.max(s,8)*Math.max(e,8)/2;case Mf:case Ef:case wf:case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tf:case Cf:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gf:case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dv(s){switch(s){case Xn:case Qm:return{byteLength:1,components:1};case Xa:case Jm:case $i:return{byteLength:2,components:1};case id:case rd:return{byteLength:2,components:4};case Pi:case nd:case Ai:return{byteLength:4,components:1};case eg:case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Iv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,v);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],C=_[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,_[x]=C)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const C=_[y];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var Uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fv=`#ifdef USE_ALPHAHASH
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
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vv=`#ifdef USE_AOMAP
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
#endif`,Hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gv=`#ifdef USE_BATCHING
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
#endif`,Wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yv=`#ifdef USE_IRIDESCENCE
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
#endif`,$v=`#ifdef USE_BUMPMAP
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
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Dx=`uniform sampler2D dfgLUT;
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
}`,Ix=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
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
#endif`,rS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ES=`#ifdef USE_SKINNING
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
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RS=`#ifdef USE_TRANSMISSION
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
#endif`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
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
}`,VS=`#if DEPTH_PACKING == 3200
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
}`,HS=`#define DISTANCE
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
}`,GS=`#define DISTANCE
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
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
}`,qS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,$S=`uniform vec3 diffuse;
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
}`,KS=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
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
}`,QS=`#define MATCAP
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
}`,JS=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ty=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,sy=`#define STANDARD
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
}`,ay=`#define TOON
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
}`,oy=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,fy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,hy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Uv,alphahash_pars_fragment:Fv,alphamap_fragment:Ov,alphamap_pars_fragment:Bv,alphatest_fragment:kv,alphatest_pars_fragment:zv,aomap_fragment:Vv,aomap_pars_fragment:Hv,batching_pars_vertex:Gv,batching_vertex:Wv,begin_vertex:Xv,beginnormal_vertex:jv,bsdfs:qv,iridescence_fragment:Yv,bumpmap_pars_fragment:$v,clipping_planes_fragment:Kv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Qv,clipping_planes_vertex:Jv,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ax,displacementmap_pars_vertex:ox,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:ux,colorspace_fragment:fx,colorspace_pars_fragment:dx,envmap_fragment:hx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Cx,envmap_vertex:_x,fog_vertex:vx,fog_pars_vertex:xx,fog_fragment:Sx,fog_pars_fragment:yx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:Ex,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:wx,lights_pars_begin:Ax,lights_toon_fragment:Rx,lights_toon_pars_fragment:bx,lights_phong_fragment:Px,lights_phong_pars_fragment:Nx,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Ix,lights_fragment_maps:Ux,lights_fragment_end:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:zx,map_fragment:Vx,map_pars_fragment:Hx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:jx,morphinstance_vertex:qx,morphcolor_vertex:Yx,morphnormal_vertex:$x,morphtarget_pars_vertex:Kx,morphtarget_vertex:Zx,normal_fragment_begin:Qx,normal_fragment_maps:Jx,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:rS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:oS,opaque_fragment:lS,packing:cS,premultiplied_alpha_fragment:uS,project_vertex:fS,dithering_fragment:dS,dithering_pars_fragment:hS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:_S,shadowmap_vertex:vS,shadowmask_pars_fragment:xS,skinbase_vertex:SS,skinning_pars_vertex:yS,skinning_vertex:MS,skinnormal_vertex:ES,specularmap_fragment:TS,specularmap_pars_fragment:wS,tonemapping_fragment:AS,tonemapping_pars_fragment:CS,transmission_fragment:RS,transmission_pars_fragment:bS,uv_pars_fragment:PS,uv_pars_vertex:NS,uv_vertex:LS,worldpos_vertex:DS,background_vert:IS,background_frag:US,backgroundCube_vert:FS,backgroundCube_frag:OS,cube_vert:BS,cube_frag:kS,depth_vert:zS,depth_frag:VS,distance_vert:HS,distance_frag:GS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:jS,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:$S,meshlambert_vert:KS,meshlambert_frag:ZS,meshmatcap_vert:QS,meshmatcap_frag:JS,meshnormal_vert:ey,meshnormal_frag:ty,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:ry,meshphysical_frag:sy,meshtoon_vert:ay,meshtoon_frag:oy,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:fy,sprite_vert:dy,sprite_frag:hy},Ue={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:bn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:bn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:bn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:bn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:bn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:bn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:bn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:bn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:bn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:bn([Ue.lights,Ue.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ti.physical={uniforms:bn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Al={r:0,b:0,g:0},qr=new Ni,py=new jt;function my(s,e,n,r,o,c,u){const d=new wt(0);let p=c===!0?0:1,m,v,_=null,x=0,y=null;function T(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function C(D){let P=!1;const U=T(D);U===null?g(d,p):U&&U.isColor&&(g(U,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,P){const U=T(P);U&&(U.isCubeTexture||U.mapping===kl)?(v===void 0&&(v=new Mn(new ns(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:js(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,O,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),qr.copy(P.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(qr)),v.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Dt,(_!==U||x!==U.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,_=U,x=U.version,y=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Mn(new qs(2,2),new Li({name:"BackgroundMaterial",uniforms:js(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Dt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(Al,hg(s)),r.buffers.color.setClear(Al.r,Al.g,Al.b,P,u)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:C,addToRenderList:S,dispose:N}}function gy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function d(R,V,Y,K,ce){let ue=!1;const oe=_(K,Y,V);c!==oe&&(c=oe,m(c.object)),ue=y(R,K,Y,ce),ue&&T(R,K,Y,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,P(R,V,Y,K),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function _(R,V,Y){const K=Y.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let ue=ce[V.id];ue===void 0&&(ue={},ce[V.id]=ue);let oe=ue[K];return oe===void 0&&(oe=x(p()),ue[K]=oe),oe}function x(R){const V=[],Y=[],K=[];for(let ce=0;ce<n;ce++)V[ce]=0,Y[ce]=0,K[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:K,object:R,attributes:{},index:null}}function y(R,V,Y,K){const ce=c.attributes,ue=V.attributes;let oe=0;const $=Y.getAttributes();for(const q in $)if($[q].location>=0){const re=ce[q];let I=ue[q];if(I===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;oe++}return c.attributesNum!==oe||c.index!==K}function T(R,V,Y,K){const ce={},ue=V.attributes;let oe=0;const $=Y.getAttributes();for(const q in $)if($[q].location>=0){let re=ue[q];re===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),ce[q]=I,oe++}c.attributes=ce,c.attributesNum=oe,c.index=K}function C(){const R=c.newAttributes;for(let V=0,Y=R.length;V<Y;V++)R[V]=0}function S(R){g(R,0)}function g(R,V){const Y=c.newAttributes,K=c.enabledAttributes,ce=c.attributeDivisors;Y[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),ce[R]!==V&&(s.vertexAttribDivisor(R,V),ce[R]=V)}function N(){const R=c.newAttributes,V=c.enabledAttributes;for(let Y=0,K=V.length;Y<K;Y++)V[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),V[Y]=0)}function D(R,V,Y,K,ce,ue,oe){oe===!0?s.vertexAttribIPointer(R,V,Y,ce,ue):s.vertexAttribPointer(R,V,Y,K,ce,ue)}function P(R,V,Y,K){C();const ce=K.attributes,ue=Y.getAttributes(),oe=V.defaultAttributeValues;for(const $ in ue){const q=ue[$];if(q.location>=0){let de=ce[$];if(de===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const re=de.normalized,I=de.itemSize,le=e.get(de);if(le===void 0)continue;const Ae=le.buffer,He=le.type,Ye=le.bytesPerElement,W=He===s.INT||He===s.UNSIGNED_INT||de.gpuType===nd;if(de.isInterleavedBufferAttribute){const ee=de.data,pe=ee.stride,De=de.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)g(q.location+Ce,ee.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)S(q.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Ce=0;Ce<q.locationSize;Ce++)D(q.location+Ce,I/q.locationSize,He,re,pe*Ye,(De+I/q.locationSize*Ce)*Ye,W)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)g(q.location+ee,de.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<q.locationSize;ee++)S(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ee=0;ee<q.locationSize;ee++)D(q.location+ee,I/q.locationSize,He,re,I*Ye,I/q.locationSize*ee*Ye,W)}}else if(oe!==void 0){const re=oe[$];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(q.location,re);break;case 3:s.vertexAttrib3fv(q.location,re);break;case 4:s.vertexAttrib4fv(q.location,re);break;default:s.vertexAttrib1fv(q.location,re)}}}}N()}function U(){Q();for(const R in r){const V=r[R];for(const Y in V){const K=V[Y];for(const ce in K)v(K[ce].object),delete K[ce];delete V[Y]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const Y in V){const K=V[Y];for(const ce in K)v(K[ce].object),delete K[ce];delete V[Y]}delete r[R.id]}function O(R){for(const V in r){const Y=r[V];if(Y[R.id]===void 0)continue;const K=Y[R.id];for(const ce in K)v(K[ce].object),delete K[ce];delete Y[R.id]}}function Q(){w(),u=!0,c!==o&&(c=o,m(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function _y(s,e,n){let r;function o(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function d(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let y=0;for(let T=0;T<_;T++)y+=v[T];n.update(y,r,1)}function p(m,v,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)u(m[T],v[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let T=0;for(let C=0;C<_;C++)T+=v[C]*x[C];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function vy(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const Q=O===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Xn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ai&&!Q)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(ot("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:P,maxSamples:U,samples:F}}function xy(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new $r,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||o;return o=x,r=_.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!o||T===null||T.length===0||c&&!S)c?v(null):m();else{const N=c?0:r,D=N*4;let P=g.clippingState||null;p.value=P,P=v(T,x,D,y);for(let U=0;U!==D;++U)P[U]=n[U];g.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,y,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const g=y+C*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,P=y;D!==C;++D,P+=4)u.copy(_[D]).applyMatrix4(N,d),u.normal.toArray(S,P),S[P+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function Sy(s){let e=new WeakMap;function n(u,d){return d===pf?u.mapping=ts:d===mf&&(u.mapping=Gs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===pf||d===mf)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new gg(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Tr=4,vm=[.125,.215,.35,.446,.526,.582],Zr=20,yy=256,ka=new hd,xm=new wt;let Zu=null,Qu=0,Ju=0,ef=!1;const My=new ie;class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=My}=c;Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Qu,Ju),this._renderer.xr.enabled=ef,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:$i,format:mi,colorSpace:Xs,depthBuffer:!1},o=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ey(c)),this._blurMaterial=wy(c,e,n),this._ggxMaterial=Ty(c,e,n)}return o}_compileMaterial(e){const n=new Mn(new ii,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,r,o,c){const p=new ti(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(xm),_.toneMapping=Ri,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new ns,new Ga({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let g=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,g=!0):(S.color.copy(xm),g=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[D],c.y,c.z)):P===1?(p.up.set(0,0,m[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[D],c.z)):(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[D]));const U=this._cubeSize;ks(o,P*U,D>2?U:0,U,U),_.setRenderTarget(o),g&&_.render(C,p),_.render(e,p)}_.toneMapping=y,_.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ts||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;ks(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),x=0+m*1.25,y=_*x,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-Tr?r-T+Tr:0),g=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=T-n,ks(c,S,g,3*C,2*C),o.setRenderTarget(c),o.render(d,ka),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,ks(e,S,g,3*C,2*C),o.setRenderTarget(e),o.render(d,ka)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Zr-1),C=c/T,S=isFinite(c)?1+Math.floor(v*C):Zr;S>Zr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const g=[];let N=0;for(let O=0;O<Zr;++O){const Q=O/C,w=Math.exp(-Q*Q/2);g.push(w),O===0?N+=w:O<S&&(N+=2*w)}for(let O=0;O<g.length;O++)g[O]=g[O]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=T,x.mipInt.value=D-r;const P=this._sizeLods[o],U=3*P*(o>D-Tr?o-D+Tr:0),F=4*(this._cubeSize-P);ks(n,U,F,3*P,2*P),p.setRenderTarget(n),p.render(_,ka)}}function Ey(s){const e=[],n=[],r=[];let o=s;const c=s-Tr+1+vm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-Tr?p=vm[u-s+Tr-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,T=6,C=3,S=2,g=1,N=new Float32Array(C*T*y),D=new Float32Array(S*T*y),P=new Float32Array(g*T*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,Q=F>2?0:-1,w=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];N.set(w,C*T*F),D.set(x,S*T*F);const R=[F,F,F,F,F,F];P.set(R,g*T*F)}const U=new ii;U.setAttribute("position",new gi(N,C)),U.setAttribute("uv",new gi(D,S)),U.setAttribute("faceIndex",new gi(P,g)),r.push(new Mn(U,null)),o>Tr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function ym(s,e,n){const r=new bi(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Ty(s,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function wy(s,e,n){const r=new Float32Array(Zr),o=new ie(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Mm(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Em(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function Ay(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===pf||p===mf,v=p===ts||p===Gs;if(m||v){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Sm(s)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&o(y)?(n===null&&(n=new Sm(s)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Cy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qa("WebGLRenderer: "+r+" extension not supported."),o}}}function Ry(s,e,n,r){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,T=_.attributes.position;let C=0;if(y!==null){const N=y.array;C=y.version;for(let D=0,P=N.length;D<P;D+=3){const U=N[D+0],F=N[D+1],O=N[D+2];x.push(U,F,F,O,O,U)}}else if(T!==void 0){const N=T.array;C=T.version;for(let D=0,P=N.length/3-1;D<P;D+=3){const U=D+0,F=D+1,O=D+2;x.push(U,F,F,O,O,U)}}else return;const S=new(ag(x)?dg:fg)(x,1);S.version=C;const g=c.get(_);g&&e.remove(g),c.set(_,S)}function v(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function by(s,e,n){let r;function o(x){r=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function p(x,y){s.drawElements(r,y,c,x*u),n.update(y,r,1)}function m(x,y,T){T!==0&&(s.drawElementsInstanced(r,y,c,x*u,T),n.update(y,r,T))}function v(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,T);let S=0;for(let g=0;g<T;g++)S+=y[g];n.update(S,r,1)}function _(x,y,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/u,y[g],C[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,T);let g=0;for(let N=0;N<T;N++)g+=y[N]*C[N];n.update(g,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Py(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Ny(s,e,n){const r=new WeakMap,o=new $t;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let R=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),S===!0&&(P=3);let U=d.attributes.position.count*P,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*F*4*_),Q=new og(O,U,F,_);Q.type=Ai,Q.needsUpdate=!0;const w=P*4;for(let V=0;V<_;V++){const Y=g[V],K=N[V],ce=D[V],ue=U*F*4*V;for(let oe=0;oe<Y.count;oe++){const $=oe*w;T===!0&&(o.fromBufferAttribute(Y,oe),O[ue+$+0]=o.x,O[ue+$+1]=o.y,O[ue+$+2]=o.z,O[ue+$+3]=0),C===!0&&(o.fromBufferAttribute(K,oe),O[ue+$+4]=o.x,O[ue+$+5]=o.y,O[ue+$+6]=o.z,O[ue+$+7]=0),S===!0&&(o.fromBufferAttribute(ce,oe),O[ue+$+8]=o.x,O[ue+$+9]=o.y,O[ue+$+10]=o.z,O[ue+$+11]=ce.itemSize===4?o.w:1)}}x={count:_,texture:Q,size:new Pt(U,F)},r.set(d,x),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Ly(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return _}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Dy={[Wm]:"LINEAR_TONE_MAPPING",[Xm]:"REINHARD_TONE_MAPPING",[jm]:"CINEON_TONE_MAPPING",[qm]:"ACES_FILMIC_TONE_MAPPING",[$m]:"AGX_TONE_MAPPING",[Km]:"NEUTRAL_TONE_MAPPING",[Ym]:"CUSTOM_TONE_MAPPING"};function Iy(s,e,n,r,o){const c=new bi(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new bi(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),d=new ii;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const p=new Tv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Mn(d,p),v=new hd(-1,1,1,-1,0,1);let _=null,x=null,y=!1,T,C=null,S=[],g=!1;this.setSize=function(N,D){c.setSize(N,D),u.setSize(N,D);for(let P=0;P<S.length;P++){const U=S[P];U.setSize&&U.setSize(N,D)}},this.setEffects=function(N){S=N,g=S.length>0&&S[0].isRenderPass===!0;const D=c.width,P=c.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(D,P)}},this.begin=function(N,D){if(y||N.toneMapping===Ri&&S.length===0)return!1;if(C=D,D!==null){const P=D.width,U=D.height;(c.width!==P||c.height!==U)&&this.setSize(P,U)}return g===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=Ri,!0},this.hasRenderPass=function(){return g},this.end=function(N,D){N.toneMapping=T,y=!0;let P=c,U=u;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(N,U,P,D),O.needsSwap!==!1)){const Q=P;P=U,U=Q}}if(_!==N.outputColorSpace||x!==N.toneMapping){_=N.outputColorSpace,x=N.toneMapping,p.defines={},Tt.getTransfer(_)===Dt&&(p.defines.SRGB_TRANSFER="");const F=Dy[x];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(C),N.render(m,v),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const yg=new Tn,Qf=new Ya(1,1),Mg=new og,Eg=new J_,Tg=new mg,Tm=[],wm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Tm[o];if(c===void 0&&(c=new Float32Array(o),Tm[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Hl(s,e){let n=wm[e];n===void 0&&(n=new Int32Array(e),wm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Uy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Fy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function Oy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function By(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function ky(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Rm.set(r),s.uniformMatrix2fv(this.addr,!1,Rm),rn(n,r)}}function zy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Cm.set(r),s.uniformMatrix3fv(this.addr,!1,Cm),rn(n,r)}}function Vy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),rn(n,r)}}function Hy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function Xy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function jy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function Yy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function Ky(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Qf.compareFunction=n.isReversedDepthBuffer()?cd:ld,c=Qf):c=yg,n.setTexture2D(e||c,o)}function Zy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Eg,o)}function Qy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Tg,o)}function Jy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Mg,o)}function eM(s){switch(s){case 5126:return Uy;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return ky;case 35675:return zy;case 35676:return Vy;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return jy;case 36294:return qy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return Jy}}function tM(s,e){s.uniform1fv(this.addr,e)}function nM(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function iM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function rM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function sM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function aM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function oM(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function lM(s,e){s.uniform1iv(this.addr,e)}function cM(s,e){s.uniform2iv(this.addr,e)}function uM(s,e){s.uniform3iv(this.addr,e)}function fM(s,e){s.uniform4iv(this.addr,e)}function dM(s,e){s.uniform1uiv(this.addr,e)}function hM(s,e){s.uniform2uiv(this.addr,e)}function pM(s,e){s.uniform3uiv(this.addr,e)}function mM(s,e){s.uniform4uiv(this.addr,e)}function gM(s,e,n){const r=this.cache,o=e.length,c=Hl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=Qf:u=yg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function _M(s,e,n){const r=this.cache,o=e.length,c=Hl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Eg,c[u])}function vM(s,e,n){const r=this.cache,o=e.length,c=Hl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Tg,c[u])}function xM(s,e,n){const r=this.cache,o=e.length,c=Hl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Mg,c[u])}function SM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return fM;case 5125:return dM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}class yM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=eM(n.type)}}class MM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SM(n.type)}}class EM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function bm(s,e){s.seq.push(e),s.map[e.id]=e}function TM(s,e,n){const r=s.name,o=r.length;for(tf.lastIndex=0;;){const c=tf.exec(r),u=tf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){bm(n,m===void 0?new yM(d,s,e):new MM(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new EM(d),bm(n,_)),n=_}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);TM(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const wM=37297;let AM=0;function CM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Nm=new ft;function RM(s){Tt._getMatrix(Nm,Tt.workingColorSpace,s);const e=`mat3( ${Nm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+CM(s.getShaderSource(e),d)}else return c}function bM(s,e){const n=RM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PM={[Wm]:"Linear",[Xm]:"Reinhard",[jm]:"Cineon",[qm]:"ACESFilmic",[$m]:"AgX",[Km]:"Neutral",[Ym]:"Custom"};function NM(s,e){const n=PM[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new ie;function LM(){Tt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function IM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function UM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ha(s){return s!==""}function Dm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(s){return s.replace(FM,BM)}const OM=new Map;function BM(s,e){let n=ht[e];if(n===void 0){const r=OM.get(e);if(r!==void 0)n=ht[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jf(n)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(kM,zM)}function zM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const VM={[bl]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function HM(s){return VM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GM={[ts]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[kl]:"ENVMAP_TYPE_CUBE_UV"};function WM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":GM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const XM={[Gs]:"ENVMAP_MODE_REFRACTION"};function jM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":XM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qM={[Gm]:"ENVMAP_BLENDING_MULTIPLY",[I_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function YM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qM[s.combine]||"ENVMAP_BLENDING_NONE"}function $M(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function KM(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=HM(n),m=WM(n),v=jM(n),_=YM(n),x=$M(n),y=DM(n),T=IM(c),C=o.createProgram();let S,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ha).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ha).join(`
`),g.length>0&&(g+=`
`)):(S=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?ht.tonemapping_pars_fragment:"",n.toneMapping!==Ri?NM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,bM("linearToOutputTexel",n.outputColorSpace),LM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ha).join(`
`)),u=Jf(u),u=Dm(u,n),u=Im(u,n),d=Jf(d),d=Dm(d,n),d=Im(d,n),u=Um(u),d=Um(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=N+S+u,P=N+g+d,U=Pm(o,o.VERTEX_SHADER,D),F=Pm(o,o.FRAGMENT_SHADER,P);o.attachShader(C,U),o.attachShader(C,F),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(V){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",K=o.getShaderInfoLog(U)||"",ce=o.getShaderInfoLog(F)||"",ue=Y.trim(),oe=K.trim(),$=ce.trim();let q=!0,de=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,F);else{const re=Lm(o,U,"vertex"),I=Lm(o,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+re+`
`+I)}else ue!==""?ot("WebGLProgram: Program Info Log:",ue):(oe===""||$==="")&&(de=!1);de&&(V.diagnostics={runnable:q,programLog:ue,vertexShader:{log:oe,prefix:S},fragmentShader:{log:$,prefix:g}})}o.deleteShader(U),o.deleteShader(F),Q=new Il(o,C),w=UM(o,C)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(C,wM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=F,this}let ZM=0;class QM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new JM(e),n.set(e,r)),r}}class JM{constructor(e){this.id=ZM++,this.code=e,this.usedTimes=0}}function eE(s,e,n,r,o,c,u){const d=new cg,p=new QM,m=new Set,v=[],_=new Map,x=o.logarithmicDepthBuffer;let y=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,R,V,Y,K){const ce=Y.fog,ue=K.geometry,oe=w.isMeshStandardMaterial?Y.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||oe),q=$&&$.mapping===kl?$.image.height:null,de=T[w.type];w.precision!==null&&(y=o.getMaxPrecision(w.precision),y!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const re=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,I=re!==void 0?re.length:0;let le=0;ue.morphAttributes.position!==void 0&&(le=1),ue.morphAttributes.normal!==void 0&&(le=2),ue.morphAttributes.color!==void 0&&(le=3);let Ae,He,Ye,W;if(de){const yt=Ti[de];Ae=yt.vertexShader,He=yt.fragmentShader}else Ae=w.vertexShader,He=w.fragmentShader,p.update(w),Ye=p.getVertexShaderID(w),W=p.getFragmentShaderID(w);const ee=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),De=K.isInstancedMesh===!0,Ce=K.isBatchedMesh===!0,it=!!w.map,Ht=!!w.matcap,ut=!!$,vt=!!w.aoMap,gt=!!w.lightMap,lt=!!w.bumpMap,Bt=!!w.normalMap,B=!!w.displacementMap,Ft=!!w.emissiveMap,pt=!!w.metalnessMap,St=!!w.roughnessMap,Xe=w.anisotropy>0,b=w.clearcoat>0,M=w.dispersion>0,X=w.iridescence>0,he=w.sheen>0,ge=w.transmission>0,fe=Xe&&!!w.anisotropyMap,$e=b&&!!w.clearcoatMap,Te=b&&!!w.clearcoatNormalMap,ke=b&&!!w.clearcoatRoughnessMap,nt=X&&!!w.iridescenceMap,ye=X&&!!w.iridescenceThicknessMap,Pe=he&&!!w.sheenColorMap,Ge=he&&!!w.sheenRoughnessMap,je=!!w.specularMap,Re=!!w.specularColorMap,ct=!!w.specularIntensityMap,H=ge&&!!w.transmissionMap,Le=ge&&!!w.thicknessMap,Me=!!w.gradientMap,Ie=!!w.alphaMap,xe=w.alphaTest>0,me=!!w.alphaHash,be=!!w.extensions;let rt=Ri;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Lt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:He,defines:w.defines,customVertexShaderID:Ye,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ce,batchingColor:Ce&&K._colorsTexture!==null,instancing:De,instancingColor:De&&K.instanceColor!==null,instancingMorph:De&&K.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xs,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Ht,envMap:ut,envMapMode:ut&&$.mapping,envMapCubeUVHeight:q,aoMap:vt,lightMap:gt,bumpMap:lt,normalMap:Bt,displacementMap:B,emissiveMap:Ft,normalMapObjectSpace:Bt&&w.normalMapType===B_,normalMapTangentSpace:Bt&&w.normalMapType===sg,metalnessMap:pt,roughnessMap:St,anisotropy:Xe,anisotropyMap:fe,clearcoat:b,clearcoatMap:$e,clearcoatNormalMap:Te,clearcoatRoughnessMap:ke,dispersion:M,iridescence:X,iridescenceMap:nt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Pe,sheenRoughnessMap:Ge,specularMap:je,specularColorMap:Re,specularIntensityMap:ct,transmission:ge,transmissionMap:H,thicknessMap:Le,gradientMap:Me,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:xe,alphaHash:me,combine:w.combine,mapUv:it&&C(w.map.channel),aoMapUv:vt&&C(w.aoMap.channel),lightMapUv:gt&&C(w.lightMap.channel),bumpMapUv:lt&&C(w.bumpMap.channel),normalMapUv:Bt&&C(w.normalMap.channel),displacementMapUv:B&&C(w.displacementMap.channel),emissiveMapUv:Ft&&C(w.emissiveMap.channel),metalnessMapUv:pt&&C(w.metalnessMap.channel),roughnessMapUv:St&&C(w.roughnessMap.channel),anisotropyMapUv:fe&&C(w.anisotropyMap.channel),clearcoatMapUv:$e&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&C(w.sheenRoughnessMap.channel),specularMapUv:je&&C(w.specularMap.channel),specularColorMapUv:Re&&C(w.specularColorMap.channel),specularIntensityMapUv:ct&&C(w.specularIntensityMap.channel),transmissionMapUv:H&&C(w.transmissionMap.channel),thicknessMapUv:Le&&C(w.thicknessMap.channel),alphaMapUv:Ie&&C(w.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Bt||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ue.attributes.uv&&(it||Ie),fog:!!ce,useFog:w.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:pe,skinning:K.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wi,flipSided:w.side===On,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=m.has(1),Lt.vertexUv2s=m.has(2),Lt.vertexUv3s=m.has(3),m.clear(),Lt}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(N(R,w),D(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function D(w,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function P(w){const R=T[w.type];let V;if(R){const Y=Ti[R];V=dv.clone(Y.uniforms)}else V=w.uniforms;return V}function U(w,R){let V=_.get(R);return V!==void 0?++V.usedTimes:(V=new KM(s,R,w,c),v.push(V),_.set(R,V)),V}function F(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),_.delete(w.cacheKey),w.destroy()}}function O(w){p.remove(w)}function Q(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:U,releaseProgram:F,releaseShaderCache:O,programs:v,dispose:Q}}function tE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function nE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(_,x,y,T,C,S){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:C,group:S},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=C,g.group=S),e++,g}function d(_,x,y,T,C,S){const g=u(_,x,y,T,C,S);y.transmission>0?r.push(g):y.transparent===!0?o.push(g):n.push(g)}function p(_,x,y,T,C,S){const g=u(_,x,y,T,C,S);y.transmission>0?r.unshift(g):y.transparent===!0?o.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||nE),r.length>1&&r.sort(x||Om),o.length>1&&o.sort(x||Om)}function v(){for(let _=e,x=s.length;_<x;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:v,sort:m}}function iE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Bm,s.set(r,[u])):o>=c.length?(u=new Bm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function rE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new wt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function sE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let aE=0;function oE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lE(s){const e=new rE,n=sE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,c=new jt,u=new jt;function d(m){let v=0,_=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,T=0,C=0,S=0,g=0,N=0,D=0,P=0,U=0,F=0,O=0;m.sort(oE);for(let w=0,R=m.length;w<R;w++){const V=m[w],Y=V.color,K=V.intensity,ce=V.distance;let ue=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ws?ue=V.shadow.map.texture:ue=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Y.r*K,_+=Y.g*K,x+=Y.b*K;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],K);O++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,q=n.get(V);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=V.shadow.matrix,N++}r.directional[y]=oe,y++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(Y).multiplyScalar(K),oe.distance=ce,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[C]=oe;const $=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,$.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=$.matrix,V.castShadow){const q=n.get(V);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=ue,P++}C++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(Y).multiplyScalar(K),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=oe,S++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const $=V.shadow,q=n.get(V);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=V.shadow.matrix,D++}r.point[T]=oe,T++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(K),oe.groundColor.copy(V.groundColor).multiplyScalar(K),r.hemi[g]=oe,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==T||Q.spotLength!==C||Q.rectAreaLength!==S||Q.hemiLength!==g||Q.numDirectionalShadows!==N||Q.numPointShadows!==D||Q.numSpotShadows!==P||Q.numSpotMaps!==U||Q.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+U-F,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,Q.directionalLength=y,Q.pointLength=T,Q.spotLength=C,Q.rectAreaLength=S,Q.hemiLength=g,Q.numDirectionalShadows=N,Q.numPointShadows=D,Q.numSpotShadows=P,Q.numSpotMaps=U,Q.numLightProbes=O,r.version=aE++)}function p(m,v){let _=0,x=0,y=0,T=0,C=0;const S=v.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const D=m[g];if(D.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),_++}else if(D.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(D.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function km(s){const e=new lE(s),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function cE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new km(s),e.set(o,[d])):c>=u.length?(d=new km(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fE=`uniform sampler2D shadow_pass;
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
}`,dE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],hE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],zm=new jt,za=new ie,nf=new ie;function pE(s,e,n){let r=new dd;const o=new Pt,c=new Pt,u=new $t,d=new wv,p=new Av,m={},v=n.maxTextureSize,_={[wr]:On,[On]:wr,[wi]:wi},x=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:uE,fragmentShader:fE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new ii;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Mn(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let g=this.type;this.render=function(F,O,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===Hm&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=bl);const w=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(qi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=g!==this.type;K&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(ue=>ue.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,ue=F.length;ce<ue;ce++){const oe=F[ce],$=oe.shadow;if($===void 0){ot("WebGLShadowMap:",oe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const q=$.getFrameExtents();if(o.multiply(q),c.copy($.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/q.x),o.x=c.x*q.x,$.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/q.y),o.y=c.y*q.y,$.mapSize.y=c.y)),$.map===null||K===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Va){if(oe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new bi(o.x,o.y,{format:Ws,type:$i,minFilter:En,magFilter:En,generateMipmaps:!1}),$.map.texture.name=oe.name+".shadowMap",$.map.depthTexture=new Ya(o.x,o.y,Ai),$.map.depthTexture.name=oe.name+".shadowMapDepth",$.map.depthTexture.format=Ki,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn}else{oe.isPointLight?($.map=new gg(o.x),$.map.depthTexture=new Ev(o.x,Pi)):($.map=new bi(o.x,o.y),$.map.depthTexture=new Ya(o.x,o.y,Pi)),$.map.depthTexture.name=oe.name+".shadowMap",$.map.depthTexture.format=Ki;const re=s.state.buffers.depth.getReversed();this.type===bl?($.map.depthTexture.compareFunction=re?cd:ld,$.map.depthTexture.minFilter=En,$.map.depthTexture.magFilter=En):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn)}$.camera.updateProjectionMatrix()}const de=$.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<de;re++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,re),s.clear();else{re===0&&(s.setRenderTarget($.map),s.clear());const I=$.getViewport(re);u.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),Y.viewport(u)}if(oe.isPointLight){const I=$.camera,le=$.matrix,Ae=oe.distance||I.far;Ae!==I.far&&(I.far=Ae,I.updateProjectionMatrix()),za.setFromMatrixPosition(oe.matrixWorld),I.position.copy(za),nf.copy(I.position),nf.add(dE[re]),I.up.copy(hE[re]),I.lookAt(nf),I.updateMatrixWorld(),le.makeTranslation(-za.x,-za.y,-za.z),zm.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$._frustum.setFromProjectionMatrix(zm,I.coordinateSystem,I.reversedDepth)}else $.updateMatrices(oe);r=$.getFrustum(),P(O,Q,$.camera,oe,this.type)}$.isPointLightShadow!==!0&&this.type===Va&&N($,Q),$.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(w,R,V)};function N(F,O){const Q=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bi(o.x,o.y,{format:Ws,type:$i})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,Q,x,C,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,Q,y,C,null)}function D(F,O,Q,w){let R=null;const V=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)R=V;else if(R=Q.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=R.uuid,K=O.uuid;let ce=m[Y];ce===void 0&&(ce={},m[Y]=ce);let ue=ce[K];ue===void 0&&(ue=R.clone(),ce[K]=ue,O.addEventListener("dispose",U)),R=ue}if(R.visible=O.visible,R.wireframe=O.wireframe,w===Va?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,Q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=s.properties.get(R);Y.light=Q}return R}function P(F,O,Q,w,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Va)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);const K=e.update(F),ce=F.material;if(Array.isArray(ce)){const ue=K.groups;for(let oe=0,$=ue.length;oe<$;oe++){const q=ue[oe],de=ce[q.materialIndex];if(de&&de.visible){const re=D(F,de,w,R);F.onBeforeShadow(s,F,O,Q,K,re,q),s.renderBufferDirect(Q,null,K,re,F,q),F.onAfterShadow(s,F,O,Q,K,re,q)}}}else if(ce.visible){const ue=D(F,ce,w,R);F.onBeforeShadow(s,F,O,Q,K,ue,null),s.renderBufferDirect(Q,null,K,ue,F,null),F.onAfterShadow(s,F,O,Q,K,ue,null)}}const Y=F.children;for(let K=0,ce=Y.length;K<ce;K++)P(Y[K],O,Q,w,R)}function U(F){F.target.removeEventListener("dispose",U);for(const Q in m){const w=m[Q],R=F.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const mE={[of]:lf,[cf]:df,[uf]:hf,[Hs]:ff,[lf]:of,[df]:cf,[hf]:uf,[ff]:Hs};function gE(s,e){function n(){let H=!1;const Le=new $t;let Me=null;const Ie=new $t(0,0,0,0);return{setMask:function(xe){Me!==xe&&!H&&(s.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){H=xe},setClear:function(xe,me,be,rt,Lt){Lt===!0&&(xe*=rt,me*=rt,be*=rt),Le.set(xe,me,be,rt),Ie.equals(Le)===!1&&(s.clearColor(xe,me,be,rt),Ie.copy(Le))},reset:function(){H=!1,Me=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,Me=null,Ie=null,xe=null;return{setReversed:function(me){if(Le!==me){const be=e.get("EXT_clip_control");me?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Le=me;const rt=xe;xe=null,this.setClear(rt)}},getReversed:function(){return Le},setTest:function(me){me?ee(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(me){Me!==me&&!H&&(s.depthMask(me),Me=me)},setFunc:function(me){if(Le&&(me=mE[me]),Ie!==me){switch(me){case of:s.depthFunc(s.NEVER);break;case lf:s.depthFunc(s.ALWAYS);break;case cf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case uf:s.depthFunc(s.EQUAL);break;case ff:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=me}},setLocked:function(me){H=me},setClear:function(me){xe!==me&&(Le&&(me=1-me),s.clearDepth(me),xe=me)},reset:function(){H=!1,Me=null,Ie=null,xe=null,Le=!1}}}function o(){let H=!1,Le=null,Me=null,Ie=null,xe=null,me=null,be=null,rt=null,Lt=null;return{setTest:function(yt){H||(yt?ee(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(yt){Le!==yt&&!H&&(s.stencilMask(yt),Le=yt)},setFunc:function(yt,Bn,wn){(Me!==yt||Ie!==Bn||xe!==wn)&&(s.stencilFunc(yt,Bn,wn),Me=yt,Ie=Bn,xe=wn)},setOp:function(yt,Bn,wn){(me!==yt||be!==Bn||rt!==wn)&&(s.stencilOp(yt,Bn,wn),me=yt,be=Bn,rt=wn)},setLocked:function(yt){H=yt},setClear:function(yt){Lt!==yt&&(s.clearStencil(yt),Lt=yt)},reset:function(){H=!1,Le=null,Me=null,Ie=null,xe=null,me=null,be=null,rt=null,Lt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,y=[],T=null,C=!1,S=null,g=null,N=null,D=null,P=null,U=null,F=null,O=new wt(0,0,0),Q=0,w=!1,R=null,V=null,Y=null,K=null,ce=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),oe=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),oe=$>=2);let de=null,re={};const I=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ae=new $t().fromArray(I),He=new $t().fromArray(le);function Ye(H,Le,Me,Ie){const xe=new Uint8Array(4),me=s.createTexture();s.bindTexture(H,me),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<Me;be++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Le+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return me}const W={};W[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ee(s.DEPTH_TEST),u.setFunc(Hs),lt(!1),Bt(Vp),ee(s.CULL_FACE),vt(qi);function ee(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function pe(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function De(H,Le){return _[H]!==Le?(s.bindFramebuffer(H,Le),_[H]=Le,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ce(H,Le){let Me=y,Ie=!1;if(H){Me=x.get(Le),Me===void 0&&(Me=[],x.set(Le,Me));const xe=H.textures;if(Me.length!==xe.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let me=0,be=xe.length;me<be;me++)Me[me]=s.COLOR_ATTACHMENT0+me;Me.length=xe.length,Ie=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Me)}function it(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Ht={[Kr]:s.FUNC_ADD,[__]:s.FUNC_SUBTRACT,[v_]:s.FUNC_REVERSE_SUBTRACT};Ht[x_]=s.MIN,Ht[S_]=s.MAX;const ut={[y_]:s.ZERO,[M_]:s.ONE,[E_]:s.SRC_COLOR,[sf]:s.SRC_ALPHA,[b_]:s.SRC_ALPHA_SATURATE,[C_]:s.DST_COLOR,[w_]:s.DST_ALPHA,[T_]:s.ONE_MINUS_SRC_COLOR,[af]:s.ONE_MINUS_SRC_ALPHA,[R_]:s.ONE_MINUS_DST_COLOR,[A_]:s.ONE_MINUS_DST_ALPHA,[P_]:s.CONSTANT_COLOR,[N_]:s.ONE_MINUS_CONSTANT_COLOR,[L_]:s.CONSTANT_ALPHA,[D_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(H,Le,Me,Ie,xe,me,be,rt,Lt,yt){if(H===qi){C===!0&&(pe(s.BLEND),C=!1);return}if(C===!1&&(ee(s.BLEND),C=!0),H!==g_){if(H!==S||yt!==w){if((g!==Kr||P!==Kr)&&(s.blendEquation(s.FUNC_ADD),g=Kr,P=Kr),yt)switch(H){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ul:s.blendFunc(s.ONE,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",H);break}else switch(H){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ul:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hp:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gp:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",H);break}N=null,D=null,U=null,F=null,O.set(0,0,0),Q=0,S=H,w=yt}return}xe=xe||Le,me=me||Me,be=be||Ie,(Le!==g||xe!==P)&&(s.blendEquationSeparate(Ht[Le],Ht[xe]),g=Le,P=xe),(Me!==N||Ie!==D||me!==U||be!==F)&&(s.blendFuncSeparate(ut[Me],ut[Ie],ut[me],ut[be]),N=Me,D=Ie,U=me,F=be),(rt.equals(O)===!1||Lt!==Q)&&(s.blendColor(rt.r,rt.g,rt.b,Lt),O.copy(rt),Q=Lt),S=H,w=!1}function gt(H,Le){H.side===wi?pe(s.CULL_FACE):ee(s.CULL_FACE);let Me=H.side===On;Le&&(Me=!Me),lt(Me),H.blending===es&&H.transparent===!1?vt(qi):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ie=H.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function Bt(H){H!==p_?(ee(s.CULL_FACE),H!==V&&(H===Vp?s.cullFace(s.BACK):H===m_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),V=H}function B(H){H!==Y&&(oe&&s.lineWidth(H),Y=H)}function Ft(H,Le,Me){H?(ee(s.POLYGON_OFFSET_FILL),(K!==Le||ce!==Me)&&(s.polygonOffset(Le,Me),K=Le,ce=Me)):pe(s.POLYGON_OFFSET_FILL)}function pt(H){H?ee(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function St(H){H===void 0&&(H=s.TEXTURE0+ue-1),de!==H&&(s.activeTexture(H),de=H)}function Xe(H,Le,Me){Me===void 0&&(de===null?Me=s.TEXTURE0+ue-1:Me=de);let Ie=re[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[Me]=Ie),(Ie.type!==H||Ie.texture!==Le)&&(de!==Me&&(s.activeTexture(Me),de=Me),s.bindTexture(H,Le||W[H]),Ie.type=H,Ie.texture=Le)}function b(){const H=re[de];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function he(){try{s.texSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ge(){try{s.texSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Te(){try{s.texStorage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ke(){try{s.texStorage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function nt(){try{s.texImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Pe(H){Ae.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function Ge(H){He.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function je(H,Le){let Me=m.get(Le);Me===void 0&&(Me=new WeakMap,m.set(Le,Me));let Ie=Me.get(H);Ie===void 0&&(Ie=s.getUniformBlockIndex(Le,H.name),Me.set(H,Ie))}function Re(H,Le){const Ie=m.get(Le).get(H);p.get(Le)!==Ie&&(s.uniformBlockBinding(Le,Ie,H.__bindingPointIndex),p.set(Le,Ie))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},de=null,re={},_={},x=new WeakMap,y=[],T=null,C=!1,S=null,g=null,N=null,D=null,P=null,U=null,F=null,O=new wt(0,0,0),Q=0,w=!1,R=null,V=null,Y=null,K=null,ce=null,Ae.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ee,disable:pe,bindFramebuffer:De,drawBuffers:Ce,useProgram:it,setBlending:vt,setMaterial:gt,setFlipSided:lt,setCullFace:Bt,setLineWidth:B,setPolygonOffset:Ft,setScissorTest:pt,activeTexture:St,bindTexture:Xe,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:nt,texImage3D:ye,updateUBOMapping:je,uniformBlockBinding:Re,texStorage2D:Te,texStorage3D:ke,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:$e,scissor:Pe,viewport:Ge,reset:ct}}function _E(s,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,v=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,M){return y?new OffscreenCanvas(b,M):Bl("canvas")}function C(b,M,X){let he=1;const ge=Xe(b);if((ge.width>X||ge.height>X)&&(he=X/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const fe=Math.floor(he*ge.width),$e=Math.floor(he*ge.height);_===void 0&&(_=T(fe,$e));const Te=M?T(fe,$e):_;return Te.width=fe,Te.height=$e,Te.getContext("2d").drawImage(b,0,0,fe,$e),ot("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+$e+")."),Te}else return"data"in b&&ot("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,M,X,he,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=M;if(M===s.RED&&(X===s.FLOAT&&(fe=s.R32F),X===s.HALF_FLOAT&&(fe=s.R16F),X===s.UNSIGNED_BYTE&&(fe=s.R8)),M===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.R8UI),X===s.UNSIGNED_SHORT&&(fe=s.R16UI),X===s.UNSIGNED_INT&&(fe=s.R32UI),X===s.BYTE&&(fe=s.R8I),X===s.SHORT&&(fe=s.R16I),X===s.INT&&(fe=s.R32I)),M===s.RG&&(X===s.FLOAT&&(fe=s.RG32F),X===s.HALF_FLOAT&&(fe=s.RG16F),X===s.UNSIGNED_BYTE&&(fe=s.RG8)),M===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RG8UI),X===s.UNSIGNED_SHORT&&(fe=s.RG16UI),X===s.UNSIGNED_INT&&(fe=s.RG32UI),X===s.BYTE&&(fe=s.RG8I),X===s.SHORT&&(fe=s.RG16I),X===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),X===s.UNSIGNED_INT&&(fe=s.RGB32UI),X===s.BYTE&&(fe=s.RGB8I),X===s.SHORT&&(fe=s.RGB16I),X===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),X===s.UNSIGNED_INT&&(fe=s.RGBA32UI),X===s.BYTE&&(fe=s.RGBA8I),X===s.SHORT&&(fe=s.RGBA16I),X===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),M===s.RGBA){const $e=ge?Fl:Tt.getTransfer(he);X===s.FLOAT&&(fe=s.RGBA32F),X===s.HALF_FLOAT&&(fe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(fe=$e===Dt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(b,M){let X;return b?M===null||M===Pi||M===ja?X=s.DEPTH24_STENCIL8:M===Ai?X=s.DEPTH32F_STENCIL8:M===Xa&&(X=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===ja?X=s.DEPTH_COMPONENT24:M===Ai?X=s.DEPTH_COMPONENT32F:M===Xa&&(X=s.DEPTH_COMPONENT16),X}function U(b,M){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function F(b){const M=b.target;M.removeEventListener("dispose",F),Q(M),M.isVideoTexture&&v.delete(M)}function O(b){const M=b.target;M.removeEventListener("dispose",O),R(M)}function Q(b){const M=r.get(b);if(M.__webglInit===void 0)return;const X=b.source,he=x.get(X);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&w(b),Object.keys(he).length===0&&x.delete(X)}r.remove(b)}function w(b){const M=r.get(b);s.deleteTexture(M.__webglTexture);const X=b.source,he=x.get(X);delete he[M.__cacheKey],u.memory.textures--}function R(b){const M=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=b.textures;for(let he=0,ge=X.length;he<ge;he++){const fe=r.get(X[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(X[he])}r.remove(b)}let V=0;function Y(){V=0}function K(){const b=V;return b>=o.maxTextures&&ot("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),V+=1,b}function ce(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function ue(b,M){const X=r.get(b);if(b.isVideoTexture&&pt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&X.__version!==b.version){const he=b.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,b,M);return}}else b.isExternalTexture&&(X.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+M)}function oe(b,M){const X=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){W(X,b,M);return}else b.isExternalTexture&&(X.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+M)}function $(b,M){const X=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){W(X,b,M);return}n.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+M)}function q(b,M){const X=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&X.__version!==b.version){ee(X,b,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+M)}const de={[gf]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[_f]:s.MIRRORED_REPEAT},re={[hn]:s.NEAREST,[F_]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[wu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},I={[k_]:s.NEVER,[W_]:s.ALWAYS,[z_]:s.LESS,[ld]:s.LEQUAL,[V_]:s.EQUAL,[cd]:s.GEQUAL,[H_]:s.GREATER,[G_]:s.NOTEQUAL};function le(b,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===wu||M.magFilter===al||M.magFilter===Qr||M.minFilter===En||M.minFilter===wu||M.minFilter===al||M.minFilter===Qr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,de[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,de[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,de[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==al&&M.minFilter!==Qr||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(b,M){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",F));const he=M.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const fe=ce(M);if(fe!==b.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),ge[fe].usedTimes++;const $e=ge[b.__cacheKey];$e!==void 0&&(ge[b.__cacheKey].usedTimes--,$e.usedTimes===0&&w(M)),b.__cacheKey=fe,b.__webglTexture=ge[fe].texture}return X}function He(b,M,X){return Math.floor(Math.floor(b/X)/M)}function Ye(b,M,X,he){const fe=b.updateRanges;if(fe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,X,he,M.data);else{fe.sort((ye,Pe)=>ye.start-Pe.start);let $e=0;for(let ye=1;ye<fe.length;ye++){const Pe=fe[$e],Ge=fe[ye],je=Pe.start+Pe.count,Re=He(Ge.start,M.width,4),ct=He(Pe.start,M.width,4);Ge.start<=je+1&&Re===ct&&He(Ge.start+Ge.count-1,M.width,4)===Re?Pe.count=Math.max(Pe.count,Ge.start+Ge.count-Pe.start):(++$e,fe[$e]=Ge)}fe.length=$e+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),ke=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ye=0,Pe=fe.length;ye<Pe;ye++){const Ge=fe[ye],je=Math.floor(Ge.start/4),Re=Math.ceil(Ge.count/4),ct=je%M.width,H=Math.floor(je/M.width),Le=Re,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,ct,H,Le,Me,X,he,M.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function W(b,M,X){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const ge=Ae(b,M),fe=M.source;n.bindTexture(he,b.__webglTexture,s.TEXTURE0+X);const $e=r.get(fe);if(fe.version!==$e.__version||ge===!0){n.activeTexture(s.TEXTURE0+X);const Te=Tt.getPrimaries(Tt.workingColorSpace),ke=M.colorSpace===Er?null:Tt.getPrimaries(M.colorSpace),nt=M.colorSpace===Er||Te===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ye=C(M.image,!1,o.maxTextureSize);ye=St(M,ye);const Pe=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let je=D(M.internalFormat,Pe,Ge,M.colorSpace,M.isVideoTexture);le(he,M);let Re;const ct=M.mipmaps,H=M.isVideoTexture!==!0,Le=$e.__version===void 0||ge===!0,Me=fe.dataReady,Ie=U(M,ye);if(M.isDepthTexture)je=P(M.format===Jr,M.type),Le&&(H?n.texStorage2D(s.TEXTURE_2D,1,je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,je,ye.width,ye.height,0,Pe,Ge,null));else if(M.isDataTexture)if(ct.length>0){H&&Le&&n.texStorage2D(s.TEXTURE_2D,Ie,je,ct[0].width,ct[0].height);for(let xe=0,me=ct.length;xe<me;xe++)Re=ct[xe],H?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re.width,Re.height,Pe,Ge,Re.data):n.texImage2D(s.TEXTURE_2D,xe,je,Re.width,Re.height,0,Pe,Ge,Re.data);M.generateMipmaps=!1}else H?(Le&&n.texStorage2D(s.TEXTURE_2D,Ie,je,ye.width,ye.height),Me&&Ye(M,ye,Pe,Ge)):n.texImage2D(s.TEXTURE_2D,0,je,ye.width,ye.height,0,Pe,Ge,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,ct[0].width,ct[0].height,ye.depth);for(let xe=0,me=ct.length;xe<me;xe++)if(Re=ct[xe],M.format!==mi)if(Pe!==null)if(H){if(Me)if(M.layerUpdates.size>0){const be=_m(Re.width,Re.height,M.format,M.type);for(const rt of M.layerUpdates){const Lt=Re.data.subarray(rt*be/Re.data.BYTES_PER_ELEMENT,(rt+1)*be/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,rt,Re.width,Re.height,1,Pe,Lt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,ye.depth,Pe,Re.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,je,Re.width,Re.height,ye.depth,0,Re.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,ye.depth,Pe,Ge,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,je,Re.width,Re.height,ye.depth,0,Pe,Ge,Re.data)}else{H&&Le&&n.texStorage2D(s.TEXTURE_2D,Ie,je,ct[0].width,ct[0].height);for(let xe=0,me=ct.length;xe<me;xe++)Re=ct[xe],M.format!==mi?Pe!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,je,Re.width,Re.height,0,Re.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re.width,Re.height,Pe,Ge,Re.data):n.texImage2D(s.TEXTURE_2D,xe,je,Re.width,Re.height,0,Pe,Ge,Re.data)}else if(M.isDataArrayTexture)if(H){if(Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,ye.width,ye.height,ye.depth),Me)if(M.layerUpdates.size>0){const xe=_m(ye.width,ye.height,M.format,M.type);for(const me of M.layerUpdates){const be=ye.data.subarray(me*xe/ye.data.BYTES_PER_ELEMENT,(me+1)*xe/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,Pe,Ge,be)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Ge,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,je,ye.width,ye.height,ye.depth,0,Pe,Ge,ye.data);else if(M.isData3DTexture)H?(Le&&n.texStorage3D(s.TEXTURE_3D,Ie,je,ye.width,ye.height,ye.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Ge,ye.data)):n.texImage3D(s.TEXTURE_3D,0,je,ye.width,ye.height,ye.depth,0,Pe,Ge,ye.data);else if(M.isFramebufferTexture){if(Le)if(H)n.texStorage2D(s.TEXTURE_2D,Ie,je,ye.width,ye.height);else{let xe=ye.width,me=ye.height;for(let be=0;be<Ie;be++)n.texImage2D(s.TEXTURE_2D,be,je,xe,me,0,Pe,Ge,null),xe>>=1,me>>=1}}else if(ct.length>0){if(H&&Le){const xe=Xe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ie,je,xe.width,xe.height)}for(let xe=0,me=ct.length;xe<me;xe++)Re=ct[xe],H?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe,Ge,Re):n.texImage2D(s.TEXTURE_2D,xe,je,Pe,Ge,Re);M.generateMipmaps=!1}else if(H){if(Le){const xe=Xe(ye);n.texStorage2D(s.TEXTURE_2D,Ie,je,xe.width,xe.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ge,ye)}else n.texImage2D(s.TEXTURE_2D,0,je,Pe,Ge,ye);S(M)&&g(he),$e.__version=fe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ee(b,M,X){if(M.image.length!==6)return;const he=Ae(b,M),ge=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+X);const fe=r.get(ge);if(ge.version!==fe.__version||he===!0){n.activeTexture(s.TEXTURE0+X);const $e=Tt.getPrimaries(Tt.workingColorSpace),Te=M.colorSpace===Er?null:Tt.getPrimaries(M.colorSpace),ke=M.colorSpace===Er||$e===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!nt&&!ye?Pe[me]=C(M.image[me],!0,o.maxCubemapSize):Pe[me]=ye?M.image[me].image:M.image[me],Pe[me]=St(M,Pe[me]);const Ge=Pe[0],je=c.convert(M.format,M.colorSpace),Re=c.convert(M.type),ct=D(M.internalFormat,je,Re,M.colorSpace),H=M.isVideoTexture!==!0,Le=fe.__version===void 0||he===!0,Me=ge.dataReady;let Ie=U(M,Ge);le(s.TEXTURE_CUBE_MAP,M);let xe;if(nt){H&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,Ge.width,Ge.height);for(let me=0;me<6;me++){xe=Pe[me].mipmaps;for(let be=0;be<xe.length;be++){const rt=xe[be];M.format!==mi?je!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,0,0,rt.width,rt.height,je,rt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,ct,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,0,0,rt.width,rt.height,je,Re,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be,ct,rt.width,rt.height,0,je,Re,rt.data)}}}else{if(xe=M.mipmaps,H&&Le){xe.length>0&&Ie++;const me=Xe(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,me.width,me.height)}for(let me=0;me<6;me++)if(ye){H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,je,Re,Pe[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Pe[me].width,Pe[me].height,0,je,Re,Pe[me].data);for(let be=0;be<xe.length;be++){const Lt=xe[be].image[me].image;H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,0,0,Lt.width,Lt.height,je,Re,Lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,ct,Lt.width,Lt.height,0,je,Re,Lt.data)}}else{H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je,Re,Pe[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,je,Re,Pe[me]);for(let be=0;be<xe.length;be++){const rt=xe[be];H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,0,0,je,Re,rt.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,be+1,ct,je,Re,rt.image[me])}}}S(M)&&g(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function pe(b,M,X,he,ge,fe){const $e=c.convert(X.format,X.colorSpace),Te=c.convert(X.type),ke=D(X.internalFormat,$e,Te,X.colorSpace),nt=r.get(M),ye=r.get(X);if(ye.__renderTarget=M,!nt.__hasExternalTextures){const Pe=Math.max(1,M.width>>fe),Ge=Math.max(1,M.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,fe,ke,Pe,Ge,M.depth,0,$e,Te,null):n.texImage2D(ge,fe,ke,Pe,Ge,0,$e,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),Ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ye.__webglTexture,0,B(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ye.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function De(b,M,X){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,fe=P(M.stencilBuffer,ge),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ft(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(M),fe,M.width,M.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(M),fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,fe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,b)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const fe=he[ge],$e=c.convert(fe.format,fe.colorSpace),Te=c.convert(fe.type),ke=D(fe.internalFormat,$e,Te,fe.colorSpace);Ft(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(M),ke,M.width,M.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(M),ke,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ke,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(b,M,X){const he=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),le(s.TEXTURE_CUBE_MAP,M.depthTexture);const nt=c.convert(M.depthTexture.format),ye=c.convert(M.depthTexture.type);let Pe;M.depthTexture.format===Ki?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===Jr&&(Pe=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Pe,M.width,M.height,0,nt,ye,null)}}else ue(M.depthTexture,0);const fe=ge.__webglTexture,$e=B(M),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,ke=M.depthTexture.format===Jr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ki)Ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,Te,fe,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ke,Te,fe,0);else if(M.depthTexture.format===Jr)Ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,Te,fe,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ke,Te,fe,0);else throw new Error("Unknown depthTexture format")}function it(b){const M=r.get(b),X=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const he=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let he=0;he<6;he++)Ce(M.__webglFramebuffer[he],b,he);else{const he=b.texture.mipmaps;he&&he.length>0?Ce(M.__webglFramebuffer[0],b,0):Ce(M.__webglFramebuffer,b,0)}else if(X){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),De(M.__webglDepthbuffer[he],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else{const he=b.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),De(M.__webglDepthbuffer,b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(b,M,X){const he=r.get(b);M!==void 0&&pe(he.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&it(b)}function ut(b){const M=b.texture,X=r.get(b),he=r.get(M);b.addEventListener("dispose",O);const ge=b.textures,fe=b.isWebGLCubeRenderTarget===!0,$e=ge.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,u.memory.textures++),fe){X.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Te]=[];for(let ke=0;ke<M.mipmaps.length;ke++)X.__webglFramebuffer[Te][ke]=s.createFramebuffer()}else X.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)X.__webglFramebuffer[Te]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if($e)for(let Te=0,ke=ge.length;Te<ke;Te++){const nt=r.get(ge[Te]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),u.memory.textures++)}if(b.samples>0&&Ft(b)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const ke=ge[Te];X.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Te]);const nt=c.convert(ke.format,ke.colorSpace),ye=c.convert(ke.type),Pe=D(ke.internalFormat,nt,ye,ke.colorSpace,b.isXRRenderTarget===!0),Ge=B(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Pe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,X.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),De(X.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),le(s.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)pe(X.__webglFramebuffer[Te][ke],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ke);else pe(X.__webglFramebuffer[Te],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(M)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Te=0,ke=ge.length;Te<ke;Te++){const nt=ge[Te],ye=r.get(nt);let Pe=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Pe=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ye.__webglTexture),le(Pe,nt),pe(X.__webglFramebuffer,b,nt,s.COLOR_ATTACHMENT0+Te,Pe,0),S(nt)&&g(Pe)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Te=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),le(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)pe(X.__webglFramebuffer[ke],b,M,s.COLOR_ATTACHMENT0,Te,ke);else pe(X.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,Te,0);S(M)&&g(Te),n.unbindTexture()}b.depthBuffer&&it(b)}function vt(b){const M=b.textures;for(let X=0,he=M.length;X<he;X++){const ge=M[X];if(S(ge)){const fe=N(b),$e=r.get(ge).__webglTexture;n.bindTexture(fe,$e),g(fe),n.unbindTexture()}}}const gt=[],lt=[];function Bt(b){if(b.samples>0){if(Ft(b)===!1){const M=b.textures,X=b.width,he=b.height;let ge=s.COLOR_BUFFER_BIT;const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(b),Te=M.length>1;if(Te)for(let nt=0;nt<M.length;nt++)n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ke=b.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const ye=r.get(M[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,he,0,0,X,he,ge,s.NEAREST),p===!0&&(gt.length=0,lt.length=0,gt.push(s.COLOR_ATTACHMENT0+nt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(gt.push(fe),lt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let nt=0;nt<M.length;nt++){n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const ye=r.get(M[nt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function B(b){return Math.min(o.maxSamples,b.samples)}function Ft(b){const M=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(b){const M=u.render.frame;v.get(b)!==M&&(v.set(b,M),b.update())}function St(b,M){const X=b.colorSpace,he=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||X!==Xs&&X!==Er&&(Tt.getTransfer(X)===Dt?(he!==mi||ge!==Xn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",X)),M}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=ue,this.setTexture2DArray=oe,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=Ht,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vE(s,e){function n(r,o=Er){let c;const u=Tt.getTransfer(o);if(r===Xn)return s.UNSIGNED_BYTE;if(r===id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Qm)return s.BYTE;if(r===Jm)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===nd)return s.INT;if(r===Pi)return s.UNSIGNED_INT;if(r===Ai)return s.FLOAT;if(r===$i)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===mi)return s.RGBA;if(r===Ki)return s.DEPTH_COMPONENT;if(r===Jr)return s.DEPTH_STENCIL;if(r===rg)return s.RED;if(r===sd)return s.RED_INTEGER;if(r===Ws)return s.RG;if(r===ad)return s.RG_INTEGER;if(r===od)return s.RGBA_INTEGER;if(r===Pl||r===Nl||r===Ll||r===Dl)if(u===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===xf||r===Sf||r===yf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Mf||r===Ef)return u===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Tf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===wf)return c.COMPRESSED_R11_EAC;if(r===Af)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Cf)return c.COMPRESSED_RG11_EAC;if(r===Rf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===bf||r===Pf||r===Nf||r===Lf||r===Df||r===If||r===Uf||r===Ff||r===Of||r===Bf||r===kf||r===zf||r===Vf||r===Hf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===bf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===If)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gf||r===Wf||r===Xf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Gf)return u===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jf||r===qf||r===Yf||r===$f)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===jf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$f)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ja?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
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

}`;class yE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new vg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Li({vertexShader:xE,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mn(new qs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends Ys{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,_=null,x=null,y=null,T=null;const C=typeof XRWebGLBinding<"u",S=new yE,g={},N=n.getContextAttributes();let D=null,P=null;const U=[],F=[],O=new Pt;let Q=null;const w=new ti;w.viewport=new $t;const R=new ti;R.viewport=new $t;const V=[w,R],Y=new Nv;let K=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=U[W];return ee===void 0&&(ee=new Yu,U[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=U[W];return ee===void 0&&(ee=new Yu,U[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=U[W];return ee===void 0&&(ee=new Yu,U[W]=ee),ee.getHandSpace()};function ue(W){const ee=F.indexOf(W.inputSource);if(ee===-1)return;const pe=U[ee];pe!==void 0&&(pe.update(W.inputSource,W.frame,m||u),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function oe(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",$);for(let W=0;W<U.length;W++){const ee=F[W];ee!==null&&(F[W]=null,U[W].disconnect(ee))}K=null,ce=null,S.reset();for(const W in g)delete g[W];e.setRenderTarget(D),y=null,x=null,_=null,o=null,P=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",$),N.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,Ce=null;N.depth&&(Ce=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=N.stencil?Jr:Ki,De=N.stencil?ja:Pi);const it={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(it),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new bi(x.textureWidth,x.textureHeight,{format:mi,type:Xn,depthTexture:new Ya(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const pe={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,pe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new bi(y.framebufferWidth,y.framebufferHeight,{format:mi,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Ye.setContext(o),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(W){for(let ee=0;ee<W.removed.length;ee++){const pe=W.removed[ee],De=F.indexOf(pe);De>=0&&(F[De]=null,U[De].disconnect(pe))}for(let ee=0;ee<W.added.length;ee++){const pe=W.added[ee];let De=F.indexOf(pe);if(De===-1){for(let it=0;it<U.length;it++)if(it>=F.length){F.push(pe),De=it;break}else if(F[it]===null){F[it]=pe,De=it;break}if(De===-1)break}const Ce=U[De];Ce&&Ce.connect(pe)}}const q=new ie,de=new ie;function re(W,ee,pe){q.setFromMatrixPosition(ee.matrixWorld),de.setFromMatrixPosition(pe.matrixWorld);const De=q.distanceTo(de),Ce=ee.projectionMatrix.elements,it=pe.projectionMatrix.elements,Ht=Ce[14]/(Ce[10]-1),ut=Ce[14]/(Ce[10]+1),vt=(Ce[9]+1)/Ce[5],gt=(Ce[9]-1)/Ce[5],lt=(Ce[8]-1)/Ce[0],Bt=(it[8]+1)/it[0],B=Ht*lt,Ft=Ht*Bt,pt=De/(-lt+Bt),St=pt*-lt;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(St),W.translateZ(pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ce[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Xe=Ht+pt,b=ut+pt,M=B-St,X=Ft+(De-St),he=vt*ut/b*Xe,ge=gt*ut/b*Xe;W.projectionMatrix.makePerspective(M,X,he,ge,Xe,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function I(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let ee=W.near,pe=W.far;S.texture!==null&&(S.depthNear>0&&(ee=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),Y.near=R.near=w.near=ee,Y.far=R.far=w.far=pe,(K!==Y.near||ce!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),K=Y.near,ce=Y.far),Y.layers.mask=W.layers.mask|6,w.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const De=W.parent,Ce=Y.cameras;I(Y,De);for(let it=0;it<Ce.length;it++)I(Ce[it],De);Ce.length===2?re(Y,w,R):Y.projectionMatrix.copy(w.projectionMatrix),le(W,Y,De)};function le(W,ee,pe){pe===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Kf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(W){p=W,x!==null&&(x.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(W){return g[W]};let Ae=null;function He(W,ee){if(v=ee.getViewerPose(m||u),T=ee,v!==null){const pe=v.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let De=!1;pe.length!==Y.cameras.length&&(Y.cameras.length=0,De=!0);for(let ut=0;ut<pe.length;ut++){const vt=pe[ut];let gt=null;if(y!==null)gt=y.getViewport(vt);else{const Bt=_.getViewSubImage(x,vt);gt=Bt.viewport,ut===0&&(e.setRenderTargetTextures(P,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(P))}let lt=V[ut];lt===void 0&&(lt=new ti,lt.layers.enable(ut),lt.viewport=new $t,V[ut]=lt),lt.matrix.fromArray(vt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(vt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(gt.x,gt.y,gt.width,gt.height),ut===0&&(Y.matrix.copy(lt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),De===!0&&Y.cameras.push(lt)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ut=_.getDepthInformation(pe[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,o.renderState)}if(Ce&&Ce.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<pe.length;ut++){const vt=pe[ut].camera;if(vt){let gt=g[vt];gt||(gt=new vg,g[vt]=gt);const lt=_.getCameraImage(vt);gt.sourceTexture=lt}}}}for(let pe=0;pe<U.length;pe++){const De=F[pe],Ce=U[pe];De!==null&&Ce!==void 0&&Ce.update(De,ee,m||u)}Ae&&Ae(W,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),T=null}const Ye=new Sg;Ye.setAnimationLoop(He),this.setAnimationLoop=function(W){Ae=W},this.dispose=function(){}}}const Yr=new Ni,EE=new jt;function TE(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,hg(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function o(S,g,N,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),v(S,g)):g.isMeshStandardMaterial?(c(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,P)):g.isMeshMatcapMaterial?(c(S,g),T(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),C(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(u(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,N,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===On&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===On&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const N=e.get(g),D=N.envMap,P=N.envMapRotation;D&&(S.envMap.value=D,Yr.copy(P),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),S.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Yr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function u(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,N,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*N,S.scale.value=D*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,N){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){const N=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function wE(s,e,n,r){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,D){const P=D.program;r.uniformBlockBinding(N,P)}function m(N,D){let P=o[N.id];P===void 0&&(T(N),P=v(N),o[N.id]=P,N.addEventListener("dispose",S));const U=D.program;r.updateUBOMapping(N,U);const F=e.render.frame;c[N.id]!==F&&(x(N),c[N.id]=F)}function v(N){const D=_();N.__bindingPointIndex=D;const P=s.createBuffer(),U=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function _(){for(let N=0;N<d;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=o[N.id],P=N.uniforms,U=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,O=P.length;F<O;F++){const Q=Array.isArray(P[F])?P[F]:[P[F]];for(let w=0,R=Q.length;w<R;w++){const V=Q[w];if(y(V,F,w,U)===!0){const Y=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let ce=0;for(let ue=0;ue<K.length;ue++){const oe=K[ue],$=C(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Y+ce,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,ce),ce+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,D,P,U){const F=N.value,O=D+"_"+P;if(U[O]===void 0)return typeof F=="number"||typeof F=="boolean"?U[O]=F:U[O]=F.clone(),!0;{const Q=U[O];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return U[O]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function T(N){const D=N.uniforms;let P=0;const U=16;for(let O=0,Q=D.length;O<Q;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,V=w.length;R<V;R++){const Y=w[R],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let ce=0,ue=K.length;ce<ue;ce++){const oe=K[ce],$=C(oe),q=P%U,de=q%$.boundary,re=q+de;P+=de,re!==0&&U-re<$.storage&&(P+=U-re),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=$.storage}}}const F=P%U;return F>0&&(P+=U-F),N.__size=P,N.__cache={},this}function C(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const P=u.indexOf(D.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function g(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:p,update:m,dispose:g}}const AE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function CE(){return Ei===null&&(Ei=new vv(AE,16,16,Ws,$i),Ei.name="DFG_LUT",Ei.minFilter=En,Ei.magFilter=En,Ei.wrapS=ji,Ei.wrapT=ji,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class RE{constructor(e={}){const{canvas:n=X_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=Xn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const C=y,S=new Set([od,ad,sd]),g=new Set([Xn,Pi,Xa,ja,id,rd]),N=new Uint32Array(4),D=new Int32Array(4);let P=null,U=null;const F=[],O=[];let Q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=ei;let V=0,Y=0,K=null,ce=-1,ue=null;const oe=new $t,$=new $t;let q=null;const de=new wt(0);let re=0,I=n.width,le=n.height,Ae=1,He=null,Ye=null;const W=new $t(0,0,I,le),ee=new $t(0,0,I,le);let pe=!1;const De=new dd;let Ce=!1,it=!1;const Ht=new jt,ut=new ie,vt=new $t,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Bt(){return K===null?Ae:1}let B=r;function Ft(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${td}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",Lt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),B===null){const j="webgl2";if(B=Ft(j,A),B===null)throw Ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let pt,St,Xe,b,M,X,he,ge,fe,$e,Te,ke,nt,ye,Pe,Ge,je,Re,ct,H,Le,Me,Ie,xe;function me(){pt=new Cy(B),pt.init(),Me=new vE(B,pt),St=new vy(B,pt,e,Me),Xe=new gE(B,pt),St.reversedDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),b=new Py(B),M=new tE,X=new _E(B,pt,Xe,M,St,Me,b),he=new Sy(w),ge=new Ay(w),fe=new Iv(B),Ie=new gy(B,fe),$e=new Ry(B,fe,b,Ie),Te=new Ly(B,$e,fe,b),ct=new Ny(B,St,X),Ge=new xy(M),ke=new eE(w,he,ge,pt,St,Ie,Ge),nt=new TE(w,M),ye=new iE,Pe=new cE(pt),Re=new my(w,he,ge,Xe,Te,T,p),je=new pE(w,Te,St),xe=new wE(B,b,St,Xe),H=new _y(B,pt,b),Le=new by(B,pt,b),b.programs=ke.programs,w.capabilities=St,w.extensions=pt,w.properties=M,w.renderLists=ye,w.shadowMap=je,w.state=Xe,w.info=b}me(),C!==Xn&&(Q=new Iy(C,n.width,n.height,o,c));const be=new ME(w,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(I,le,!1))},this.getSize=function(A){return A.set(I,le)},this.setSize=function(A,j,ae=!0){if(be.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,le=j,n.width=Math.floor(A*Ae),n.height=Math.floor(j*Ae),ae===!0&&(n.style.width=A+"px",n.style.height=j+"px"),Q!==null&&Q.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(I*Ae,le*Ae).floor()},this.setDrawingBufferSize=function(A,j,ae){I=A,le=j,Ae=ae,n.width=Math.floor(A*ae),n.height=Math.floor(j*ae),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===Xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,j,ae,ne){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,j,ae,ne),Xe.viewport(oe.copy(W).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,j,ae,ne){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,j,ae,ne),Xe.scissor($.copy(ee).multiplyScalar(Ae).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Xe.setScissorTest(pe=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ae=!0){let ne=0;if(A){let J=!1;if(K!==null){const Ne=K.texture.format;J=S.has(Ne)}if(J){const Ne=K.texture.type,Fe=g.has(Ne),we=Re.getClearColor(),Ve=Re.getClearAlpha(),Be=we.r,tt=we.g,Ze=we.b;Fe?(N[0]=Be,N[1]=tt,N[2]=Ze,N[3]=Ve,B.clearBufferuiv(B.COLOR,0,N)):(D[0]=Be,D[1]=tt,D[2]=Ze,D[3]=Ve,B.clearBufferiv(B.COLOR,0,D))}else ne|=B.COLOR_BUFFER_BIT}j&&(ne|=B.DEPTH_BUFFER_BIT),ae&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",Lt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),Re.dispose(),ye.dispose(),Pe.dispose(),M.dispose(),he.dispose(),ge.dispose(),Te.dispose(),Ie.dispose(),xe.dispose(),ke.dispose(),be.dispose(),be.removeEventListener("sessionstart",Cr),be.removeEventListener("sessionend",Rr),ri.stop()};function rt(A){A.preventDefault(),Yp("WebGLRenderer: Context Lost."),R=!0}function Lt(){Yp("WebGLRenderer: Context Restored."),R=!1;const A=b.autoReset,j=je.enabled,ae=je.autoUpdate,ne=je.needsUpdate,J=je.type;me(),b.autoReset=A,je.enabled=j,je.autoUpdate=ae,je.needsUpdate=ne,je.type=J}function yt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){const j=A.target;j.removeEventListener("dispose",Bn),wn(j)}function wn(A){Zs(A),M.remove(A)}function Zs(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(ae){ke.releaseProgram(ae)}),A.isShaderMaterial&&ke.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ae,ne,J,Ne){j===null&&(j=gt);const Fe=J.isMesh&&J.matrixWorld.determinant()<0,we=to(A,j,ae,ne,J);Xe.setMaterial(ne,Fe);let Ve=ae.index,Be=1;if(ne.wireframe===!0){if(Ve=$e.getWireframeAttribute(ae),Ve===void 0)return;Be=2}const tt=ae.drawRange,Ze=ae.attributes.position;let dt=tt.start*Be,Mt=(tt.start+tt.count)*Be;Ne!==null&&(dt=Math.max(dt,Ne.start*Be),Mt=Math.min(Mt,(Ne.start+Ne.count)*Be)),Ve!==null?(dt=Math.max(dt,0),Mt=Math.min(Mt,Ve.count)):Ze!=null&&(dt=Math.max(dt,0),Mt=Math.min(Mt,Ze.count));const Ut=Mt-dt;if(Ut<0||Ut===1/0)return;Ie.setup(J,ne,we,ae,Ve);let It,At=H;if(Ve!==null&&(It=fe.get(Ve),At=Le,At.setIndex(It)),J.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*Bt()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(J.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*Bt()),J.isLineSegments?At.setMode(B.LINES):J.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else J.isPoints?At.setMode(B.POINTS):J.isSprite&&At.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))At.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,bt=J._multiDrawCounts,_t=J._multiDrawCount,mn=Ve?fe.get(Ve).bytesPerElement:1,_i=M.get(ne).currentProgram.getUniforms();for(let Jt=0;Jt<_t;Jt++)_i.setValue(B,"_gl_DrawID",Jt),At.render(Qe[Jt]/mn,bt[Jt])}else if(J.isInstancedMesh)At.renderInstances(dt,Ut,J.count);else if(ae.isInstancedBufferGeometry){const Qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,bt=Math.min(ae.instanceCount,Qe);At.renderInstances(dt,Ut,bt)}else At.render(dt,Ut)};function Zi(A,j,ae){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,br(A,j,ae),A.side=wr,A.needsUpdate=!0,br(A,j,ae),A.side=wi):br(A,j,ae)}this.compile=function(A,j,ae=null){ae===null&&(ae=A),U=Pe.get(ae),U.init(j),O.push(U),ae.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),A!==ae&&A.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),U.setupLights();const ne=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Fe=0;Fe<Ne.length;Fe++){const we=Ne[Fe];Zi(we,ae,J),ne.add(we)}else Zi(Ne,ae,J),ne.add(Ne)}),U=O.pop(),ne},this.compileAsync=function(A,j,ae=null){const ne=this.compile(A,j,ae);return new Promise(J=>{function Ne(){if(ne.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){J(A);return}setTimeout(Ne,10)}pt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Qs=null;function Ar(A){Qs&&Qs(A)}function Cr(){ri.stop()}function Rr(){ri.start()}const ri=new Sg;ri.setAnimationLoop(Ar),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(A){Qs=A,be.setAnimationLoop(A),A===null?ri.stop():ri.start()},be.addEventListener("sessionstart",Cr),be.addEventListener("sessionend",Rr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ae=be.enabled===!0&&be.isPresenting===!0,ne=Q!==null&&(K===null||ae)&&Q.begin(w,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,j,K),U=Pe.get(A,O.length),U.init(j),O.push(U),Ht.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),De.setFromProjectionMatrix(Ht,Ci,j.reversedDepth),it=this.localClippingEnabled,Ce=Ge.init(this.clippingPlanes,it),P=ye.get(A,F.length),P.init(),F.push(P),be.enabled===!0&&be.isPresenting===!0){const Fe=w.xr.getDepthSensingMesh();Fe!==null&&Js(Fe,j,-1/0,w.sortObjects)}Js(A,j,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(He,Ye),lt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,lt&&Re.addToRenderList(P,A),this.info.render.frame++,Ce===!0&&Ge.beginShadows();const J=U.state.shadowsArray;if(je.render(J,A,j),Ce===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&Q.hasRenderPass())===!1){const Fe=P.opaque,we=P.transmissive;if(U.setupLights(),j.isArrayCamera){const Ve=j.cameras;if(we.length>0)for(let Be=0,tt=Ve.length;Be<tt;Be++){const Ze=Ve[Be];Ja(Fe,we,A,Ze)}lt&&Re.render(A);for(let Be=0,tt=Ve.length;Be<tt;Be++){const Ze=Ve[Be];Qa(P,A,Ze,Ze.viewport)}}else we.length>0&&Ja(Fe,we,A,j),lt&&Re.render(A),Qa(P,A,j)}K!==null&&Y===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),ne&&Q.end(w),A.isScene===!0&&A.onAfterRender(w,A,j),Ie.resetDefaultState(),ce=-1,ue=null,O.pop(),O.length>0?(U=O[O.length-1],Ce===!0&&Ge.setGlobalState(w.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function Js(A,j,ae,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||De.intersectsSprite(A)){ne&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const Fe=Te.update(A),we=A.material;we.visible&&P.push(A,Fe,we,ae,vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||De.intersectsObject(A))){const Fe=Te.update(A),we=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),vt.copy(Fe.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(we)){const Ve=Fe.groups;for(let Be=0,tt=Ve.length;Be<tt;Be++){const Ze=Ve[Be],dt=we[Ze.materialIndex];dt&&dt.visible&&P.push(A,Fe,dt,ae,vt.z,Ze)}}else we.visible&&P.push(A,Fe,we,ae,vt.z,null)}}const Ne=A.children;for(let Fe=0,we=Ne.length;Fe<we;Fe++)Js(Ne[Fe],j,ae,ne)}function Qa(A,j,ae,ne){const{opaque:J,transmissive:Ne,transparent:Fe}=A;U.setupLightsView(ae),Ce===!0&&Ge.setGlobalState(w.clippingPlanes,ae),ne&&Xe.viewport(oe.copy(ne)),J.length>0&&jn(J,j,ae),Ne.length>0&&jn(Ne,j,ae),Fe.length>0&&jn(Fe,j,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ja(A,j,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ne.id]===void 0){const dt=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ne.id]=new bi(1,1,{generateMipmaps:!0,type:dt?$i:Xn,minFilter:Qr,samples:St.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=U.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||oe;Ne.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);const we=w.getRenderTarget(),Ve=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(Ne),w.getClearColor(de),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear(),lt&&Re.render(ae);const tt=w.toneMapping;w.toneMapping=Ri;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),Ce===!0&&Ge.setGlobalState(w.clippingPlanes,ne),jn(A,ae,ne),X.updateMultisampleRenderTarget(Ne),X.updateRenderTargetMipmap(Ne),pt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Mt=0,Ut=j.length;Mt<Ut;Mt++){const It=j[Mt],{object:At,geometry:Qe,material:bt,group:_t}=It;if(bt.side===wi&&At.layers.test(ne.layers)){const mn=bt.side;bt.side=On,bt.needsUpdate=!0,ea(At,ae,ne,Qe,bt,_t),bt.side=mn,bt.needsUpdate=!0,dt=!0}}dt===!0&&(X.updateMultisampleRenderTarget(Ne),X.updateRenderTargetMipmap(Ne))}w.setRenderTarget(we,Ve,Be),w.setClearColor(de,re),Ze!==void 0&&(ne.viewport=Ze),w.toneMapping=tt}function jn(A,j,ae){const ne=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Ne=A.length;J<Ne;J++){const Fe=A[J],{object:we,geometry:Ve,group:Be}=Fe;let tt=Fe.material;tt.allowOverride===!0&&ne!==null&&(tt=ne),we.layers.test(ae.layers)&&ea(we,j,ae,Ve,tt,Be)}}function ea(A,j,ae,ne,J,Ne){A.onBeforeRender(w,j,ae,ne,J,Ne),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(w,j,ae,ne,A,Ne),J.transparent===!0&&J.side===wi&&J.forceSinglePass===!1?(J.side=On,J.needsUpdate=!0,w.renderBufferDirect(ae,j,ne,J,A,Ne),J.side=wr,J.needsUpdate=!0,w.renderBufferDirect(ae,j,ne,J,A,Ne),J.side=wi):w.renderBufferDirect(ae,j,ne,J,A,Ne),A.onAfterRender(w,j,ae,ne,J,Ne)}function br(A,j,ae){j.isScene!==!0&&(j=gt);const ne=M.get(A),J=U.state.lights,Ne=U.state.shadowsArray,Fe=J.state.version,we=ke.getParameters(A,J.state,Ne,j,ae),Ve=ke.getProgramCacheKey(we);let Be=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?ge:he).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Bn),Be=new Map,ne.programs=Be);let tt=Be.get(Ve);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Fe)return ta(A,we),tt}else we.uniforms=ke.getUniforms(A),A.onBeforeCompile(we,w),tt=ke.acquireProgram(we,Ve),Be.set(Ve,tt),ne.uniforms=we.uniforms;const Ze=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ge.uniform),ta(A,we),ne.needsLights=io(A),ne.lightsStateVersion=Fe,ne.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function eo(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Il.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ta(A,j){const ae=M.get(A);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function to(A,j,ae,ne,J){j.isScene!==!0&&(j=gt),X.resetTextureUnits();const Ne=j.fog,Fe=ne.isMeshStandardMaterial?j.environment:null,we=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Xs,Ve=(ne.isMeshStandardMaterial?ge:he).get(ne.envMap||Fe),Be=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,tt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Mt=!!ae.morphAttributes.color;let Ut=Ri;ne.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ut=w.toneMapping);const It=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,At=It!==void 0?It.length:0,Qe=M.get(ne),bt=U.state.lights;if(Ce===!0&&(it===!0||A!==ue)){const sn=A===ue&&ne.id===ce;Ge.setState(ne,A,sn)}let _t=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bt.state.version||Qe.outputColorSpace!==we||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Ve||ne.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ge.numPlanes||Qe.numIntersection!==Ge.numIntersection)||Qe.vertexAlphas!==Be||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==dt||Qe.morphColors!==Mt||Qe.toneMapping!==Ut||Qe.morphTargetsCount!==At)&&(_t=!0):(_t=!0,Qe.__version=ne.version);let mn=Qe.currentProgram;_t===!0&&(mn=br(ne,j,J));let _i=!1,Jt=!1,Pr=!1;const Nt=mn.getUniforms(),at=Qe.uniforms;if(Xe.useProgram(mn.program)&&(_i=!0,Jt=!0,Pr=!0),ne.id!==ce&&(ce=ne.id,Jt=!0),_i||ue!==A){Xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(B,"projectionMatrix",A.projectionMatrix),Nt.setValue(B,"viewMatrix",A.matrixWorldInverse);const an=Nt.map.cameraPosition;an!==void 0&&an.setValue(B,ut.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,Jt=!0,Pr=!0)}if(Qe.needsLights&&(bt.state.directionalShadowMap.length>0&&Nt.setValue(B,"directionalShadowMap",bt.state.directionalShadowMap,X),bt.state.spotShadowMap.length>0&&Nt.setValue(B,"spotShadowMap",bt.state.spotShadowMap,X),bt.state.pointShadowMap.length>0&&Nt.setValue(B,"pointShadowMap",bt.state.pointShadowMap,X)),J.isSkinnedMesh){Nt.setOptional(B,J,"bindMatrix"),Nt.setOptional(B,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Nt.setValue(B,"boneTexture",sn.boneTexture,X))}J.isBatchedMesh&&(Nt.setOptional(B,J,"batchingTexture"),Nt.setValue(B,"batchingTexture",J._matricesTexture,X),Nt.setOptional(B,J,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",J._indirectTexture,X),Nt.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",J._colorsTexture,X));const An=ae.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ct.update(J,ae,mn),(Jt||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Nt.setValue(B,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(at.envMap.value=Ve,at.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(at.envMapIntensity.value=j.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=CE()),Jt&&(Nt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&no(at,Pr),Ne&&ne.fog===!0&&nt.refreshFogUniforms(at,Ne),nt.refreshMaterialUniforms(at,ne,Ae,le,U.state.transmissionRenderTarget[A.id]),Il.upload(B,eo(Qe),at,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Il.upload(B,eo(Qe),at,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(B,"center",J.center),Nt.setValue(B,"modelViewMatrix",J.modelViewMatrix),Nt.setValue(B,"normalMatrix",J.normalMatrix),Nt.setValue(B,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const sn=ne.uniformsGroups;for(let an=0,is=sn.length;an<is;an++){const vi=sn[an];xe.update(vi,mn),xe.bind(vi,mn)}}return mn}function no(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function io(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,j,ae){const ne=M.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ae=M.get(A);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const Gl=B.createFramebuffer();this.setRenderTarget=function(A,j=0,ae=0){K=A,V=j,Y=ae;let ne=null,J=!1,Ne=!1;if(A){const we=M.get(A);if(we.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),oe.copy(A.viewport),$.copy(A.scissor),q=A.scissorTest,Xe.viewport(oe),Xe.scissor($),Xe.setScissorTest(q),ce=-1;return}else if(we.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(we.__hasExternalTextures)X.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&M.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const Be=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[j])?ne=Be[j][ae]:ne=Be[j],J=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?ne=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?ne=Be[ae]:ne=Be,oe.copy(A.viewport),$.copy(A.scissor),q=A.scissorTest}else oe.copy(W).multiplyScalar(Ae).floor(),$.copy(ee).multiplyScalar(Ae).floor(),q=pe;if(ae!==0&&(ne=Gl),Xe.bindFramebuffer(B.FRAMEBUFFER,ne)&&Xe.drawBuffers(A,ne),Xe.viewport(oe),Xe.scissor($),Xe.setScissorTest(q),J){const we=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,we.__webglTexture,ae)}else if(Ne){const we=j;for(let Ve=0;Ve<A.textures.length;Ve++){const Be=M.get(A.textures[Ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ve,Be.__webglTexture,ae,we)}}else if(A!==null&&ae!==0){const we=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,ae)}ce=-1},this.readRenderTargetPixels=function(A,j,ae,ne,J,Ne,Fe,we=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){Xe.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const Be=A.textures[we],tt=Be.format,Ze=Be.type;if(!St.textureFormatReadable(tt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ze)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&ae>=0&&ae<=A.height-J&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(j,ae,ne,J,Me.convert(tt),Me.convert(Ze),Ne))}finally{const Be=K!==null?M.get(K).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,j,ae,ne,J,Ne,Fe,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if(j>=0&&j<=A.width-ne&&ae>=0&&ae<=A.height-J){Xe.bindFramebuffer(B.FRAMEBUFFER,Ve);const Be=A.textures[we],tt=Be.format,Ze=Be.type;if(!St.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,Ne.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),B.readPixels(j,ae,ne,J,Me.convert(tt),Me.convert(Ze),0);const Mt=K!==null?M.get(K).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,Mt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await j_(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ne),B.deleteBuffer(dt),B.deleteSync(Ut),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ae=0){const ne=Math.pow(2,-ae),J=Math.floor(A.image.width*ne),Ne=Math.floor(A.image.height*ne),Fe=j!==null?j.x:0,we=j!==null?j.y:0;X.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Fe,we,J,Ne),Xe.unbindTexture()};const Wl=B.createFramebuffer(),Gt=B.createFramebuffer();this.copyTextureToTexture=function(A,j,ae=null,ne=null,J=0,Ne=null){Ne===null&&(J!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=J,J=0):Ne=0);let Fe,we,Ve,Be,tt,Ze,dt,Mt,Ut;const It=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ae!==null)Fe=ae.max.x-ae.min.x,we=ae.max.y-ae.min.y,Ve=ae.isBox3?ae.max.z-ae.min.z:1,Be=ae.min.x,tt=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{const An=Math.pow(2,-J);Fe=Math.floor(It.width*An),we=Math.floor(It.height*An),A.isDataArrayTexture?Ve=It.depth:A.isData3DTexture?Ve=Math.floor(It.depth*An):Ve=1,Be=0,tt=0,Ze=0}ne!==null?(dt=ne.x,Mt=ne.y,Ut=ne.z):(dt=0,Mt=0,Ut=0);const At=Me.convert(j.format),Qe=Me.convert(j.type);let bt;j.isData3DTexture?(X.setTexture3D(j,0),bt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(X.setTexture2DArray(j,0),bt=B.TEXTURE_2D_ARRAY):(X.setTexture2D(j,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),mn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=B.getParameter(B.UNPACK_SKIP_PIXELS),Jt=B.getParameter(B.UNPACK_SKIP_ROWS),Pr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Nt=A.isDataArrayTexture||A.isData3DTexture,at=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const An=M.get(A),sn=M.get(j),an=M.get(An.__renderTarget),is=M.get(sn.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,an.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let vi=0;vi<Ve;vi++)Nt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(A).__webglTexture,J,Ze+vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Ne,Ut+vi)),B.blitFramebuffer(Be,tt,Fe,we,dt,Mt,Fe,we,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||M.has(A)){const An=M.get(A),sn=M.get(j);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,Wl),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gt);for(let an=0;an<Ve;an++)Nt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,An.__webglTexture,J,Ze+an):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,An.__webglTexture,J),at?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,Ne,Ut+an):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,Ne),J!==0?B.blitFramebuffer(Be,tt,Fe,we,dt,Mt,Fe,we,B.COLOR_BUFFER_BIT,B.NEAREST):at?B.copyTexSubImage3D(bt,Ne,dt,Mt,Ut+an,Be,tt,Fe,we):B.copyTexSubImage2D(bt,Ne,dt,Mt,Be,tt,Fe,we);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(bt,Ne,dt,Mt,Ut,Fe,we,Ve,At,Qe,It.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,Ne,dt,Mt,Ut,Fe,we,Ve,At,It.data):B.texSubImage3D(bt,Ne,dt,Mt,Ut,Fe,we,Ve,At,Qe,It):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ne,dt,Mt,Fe,we,At,Qe,It.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ne,dt,Mt,It.width,It.height,At,It.data):B.texSubImage2D(B.TEXTURE_2D,Ne,dt,Mt,Fe,we,At,Qe,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),B.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pr),Ne===0&&j.generateMipmaps&&B.generateMipmap(bt),Xe.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){V=0,Y=0,K=null,Xe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function bE(){const s=Yt.useRef(null);return Yt.useEffect(()=>{const e=s.current;if(!e)return;const n=e.clientWidth,r=e.clientHeight,o=new _v;o.fog=new fd(11763285,.0055);const c=new ti(50,n/r,.1,1e3);c.position.set(0,6,35),c.lookAt(0,11,-70);const u=new RE({antialias:!0,alpha:!0});u.setSize(n,r),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=Hm,e.appendChild(u.domElement);const d=new Pv(4338491,2.5);o.add(d);const p=new bv(16768947,4.5);p.position.set(-65,12,-110),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,o.add(p);const m=100,v=new ii,_=new Float32Array(m*3);for(let W=0;W<m;W++)_[W*3]=(Math.random()-.5)*160,_[W*3+1]=20+Math.random()*45,_[W*3+2]=-90-Math.random()*80;v.setAttribute("position",new gi(_,3));const x=new _g({color:16773856,size:.35,transparent:!0,opacity:.65,blending:Ul}),y=new Mv(v,x);o.add(y);const T=(()=>{const W=document.createElement("canvas");W.width=64,W.height=256;const ee=W.getContext("2d"),pe=ee.createLinearGradient(0,256,0,0);return pe.addColorStop(0,"rgba(253, 215, 150, 0.24)"),pe.addColorStop(.5,"rgba(253, 215, 150, 0.08)"),pe.addColorStop(1,"rgba(253, 215, 150, 0)"),ee.fillStyle=pe,ee.fillRect(0,0,64,256),new hm(W)})(),C=6,S=[],g=new qs(16,120);for(let W=0;W<C;W++){const ee=new Ga({map:T,transparent:!0,opacity:.15,blending:Ul,depthWrite:!1,side:wi}),pe=new Mn(g,ee);pe.position.set(-65,8,-108),pe.rotation.z=-.55+W*.22,pe.position.z+=W*.1,o.add(pe),S.push({mesh:pe,speed:.45+Math.random()*.5,baseOpacity:.08+Math.random()*.12})}const N=new zs,D=55,P=[],U=new pm({color:2038304,roughness:.38,metalness:.78,flatShading:!0}),F=new Ga({color:16758876,toneMapped:!1});for(let W=0;W<D;W++){const ee=(Math.random()-.5)*140,pe=-55-Math.random()*115,De=Math.abs(ee),Ce=Math.max(0,1-De/70),it=8+Math.random()*20+Ce*48,Ht=3.5+Math.random()*4.5,ut=3.5+Math.random()*4.5,vt=new ns(Ht,it,ut),gt=new Mn(vt,U);if(gt.position.set(ee,it/2,pe),gt.castShadow=!0,gt.receiveShadow=!0,N.add(gt),De<30&&it>32&&Math.random()>.3){const B=it*.8,Ft=new ns(.3,B,.1),pt=new Mn(Ft,F);pt.position.set(0,it*.08,ut/2+.08),gt.add(pt)}P.push(gt)}o.add(N);const O=new zs,Q=new pm({color:395277,roughness:.95,metalness:.05,flatShading:!0}),w=new Mn(new Wa(140,32,32),Q);w.position.set(-65,-128,-42),w.scale.set(1,.7,1),w.receiveShadow=!0,O.add(w);const R=new Mn(new Wa(150,32,32),Q);R.position.set(70,-137,-62),R.scale.set(1.2,.7,1),R.receiveShadow=!0,O.add(R);const V=new Mn(new Wa(110,48,48),Q);V.position.set(0,-99,6),V.scale.set(1.4,.55,1),V.receiveShadow=!0,O.add(V),o.add(O);const Y=(()=>{const W=document.createElement("canvas");W.width=128,W.height=128;const ee=W.getContext("2d"),pe=ee.createRadialGradient(64,64,0,64,64,64),De=189,Ce=133,it=89;return pe.addColorStop(0,`rgba(${De}, ${Ce}, ${it}, 0.28)`),pe.addColorStop(.5,`rgba(${De}, ${Ce}, ${it}, 0.08)`),pe.addColorStop(1,`rgba(${De}, ${Ce}, ${it}, 0)`),ee.fillStyle=pe,ee.fillRect(0,0,128,128),new hm(W)})(),K=18,ce=[],ue=new qs(48,48),oe=new Ga({map:Y,transparent:!0,depthWrite:!1,blending:es});for(let W=0;W<K;W++){const ee=new Mn(ue,oe),pe=(Math.random()-.5)*160,De=1+Math.random()*14,Ce=-15-Math.random()*75;ee.position.set(pe,De,Ce),ee.rotation.z=Math.random()*Math.PI*2,ee.userData={speed:.012+Math.random()*.018},o.add(ee),ce.push(ee)}let $=0,q=0,de=0,re=6;const I=W=>{$=W.clientX/window.innerWidth-.5,q=W.clientY/window.innerHeight-.5};window.addEventListener("mousemove",I,{passive:!0});let le=new Lv,Ae;const He=()=>{Ae=requestAnimationFrame(He);const W=le.getElapsedTime();x.opacity=.5+Math.sin(W*1.6)*.25,S.forEach((ee,pe)=>{ee.mesh.material.opacity=ee.baseOpacity+Math.sin(W*ee.speed+pe)*.04}),ce.forEach(ee=>{ee.position.x+=ee.userData.speed,ee.position.x>95&&(ee.position.x=-95,ee.position.y=1+Math.random()*14)}),de=$*14,re=6-q*7,c.position.x+=(de-c.position.x)*.04,c.position.y+=(re-c.position.y)*.04,c.lookAt(0,10,-70),u.render(o,c)};He();const Ye=()=>{if(!e)return;const W=e.clientWidth,ee=e.clientHeight;c.aspect=W/ee,c.updateProjectionMatrix(),u.setSize(W,ee)};return window.addEventListener("resize",Ye),()=>{window.removeEventListener("mousemove",I),window.removeEventListener("resize",Ye),cancelAnimationFrame(Ae),e.contains(u.domElement)&&e.removeChild(u.domElement),v.dispose(),x.dispose(),U.dispose(),F.dispose(),Q.dispose(),ue.dispose(),oe.dispose(),Y.dispose(),g.dispose(),T.dispose(),P.forEach(W=>{W.geometry.dispose()}),w.geometry.dispose(),R.geometry.dispose(),V.geometry.dispose(),S.forEach(W=>{W.mesh.material.dispose()}),u.dispose()}},[]),z.jsx("div",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",background:"linear-gradient(to bottom, #06090f 0%, #101115 28%, #2f201b 52%, #b57a4a 78%, #ebcb86 100%)",overflow:"hidden",zIndex:1}})}const Rl=[{id:"fmcg",category:"consumer",name:"Consumer Goods & FMCG",tagline:"Everyday essentials, crafted for a premium lifestyle.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"]},{id:"manufacturing",category:"tech",name:"Manufacturing",tagline:"Precision engineering and smart factories of tomorrow.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=600&auto=format&fit=crop"]},{id:"warehousing",category:"tech",name:"Warehousing & Logistics",tagline:"Seamless fulfillment centers driving global supply chains.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1553413719-875871274712?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"]},{id:"consumer-tech",category:"tech",name:"Consumer Tech & Apps",tagline:"Beautifully designed interfaces connecting people.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551645121-d1034da75057?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1580927751497-69f9c7e98a3c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"]},{id:"saas",category:"tech",name:"SaaS",tagline:"Enterprise workflows streamlined into single-pane control.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"]},{id:"ai-tools",category:"tech",name:"AI Tools & Agents",tagline:"The cognitive layer automating tasks and amplifying intellect.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"]},{id:"health",category:"consumer",name:"Health & Wellness",tagline:"Nurturing minds and bodies with mindful digital touchpoints.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"education",category:"creative",name:"Education",tagline:"Empowering curious minds through intuitive learning platforms.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"]},{id:"agriculture",category:"tech",name:"Agriculture",tagline:"Sustainable food tech and vertical crop optimization.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1560493527-3efd3243e023?q=80&w=600&auto=format&fit=crop"]},{id:"media",category:"creative",name:"Media, News & Entertainment",tagline:"Culture-defining storytelling that shapes the zeitgeist.",accent:"#ffeeba",images:["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"]},{id:"social-media",category:"creative",name:"Social Media",tagline:"Enabling next-generation content creators and networks.",accent:"#f8d7da",images:["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"]},{id:"marketing",category:"creative",name:"Marketing",tagline:"Performance strategies backed by behavioral economics.",accent:"#e8dbfc",images:["https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"]},{id:"tech-research",category:"tech",name:"Technology & Research",tagline:"Pioneering studies and technological breakthroughs.",accent:"#cce5ff",images:["https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"]},{id:"finance",category:"tech",name:"Finance & Compliance",tagline:"Intelligent asset management and compliance systems.",accent:"#e2e3e5",images:["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"]},{id:"real-estate",category:"consumer",name:"Real Estate",tagline:"Architectural structures designed with human scale in mind.",accent:"#ffddcc",images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=600&auto=format&fit=crop"]},{id:"travel",category:"consumer",name:"Travel & Hospitality",tagline:"Curating bespoke travel diaries and sensory hotels.",accent:"#d1ecf1",images:["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"]},{id:"ips",category:"creative",name:"IPs & Creative Assets",tagline:"Protecting, fostering, and monetizing unique design IPs.",accent:"#fff3cd",images:["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop"]},{id:"events",category:"consumer",name:"Events & Experiences",tagline:"Gathering communities in beautifully staged spaces.",accent:"#d4edda",images:["https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"]}];function PE({items:s=[]}){const e=Yt.useRef(null),[n,r]=Yt.useState(0),[o,c]=Yt.useState(!1),[u,d]=Yt.useState(0),[p,m]=Yt.useState(0),[v,_]=Yt.useState(0),x=Yt.useRef(0),y=Yt.useRef(0),T=Yt.useRef(null),C=s.map((Y,K)=>({url:Y.images[0],name:Y.name,accent:Y.accent})),g=360/(C.length||1),N=380;Yt.useEffect(()=>{if(o){T.current&&cancelAnimationFrame(T.current);return}const Y=.95,K=()=>{Math.abs(v)>.05?(r(ce=>ce+v),_(ce=>ce*Y),T.current=requestAnimationFrame(K)):_(0)};return T.current=requestAnimationFrame(K),()=>{T.current&&cancelAnimationFrame(T.current)}},[o,v]);const D=Y=>{c(!0),d(Y),m(n),_(0),x.current=Y,y.current=Date.now()},P=Y=>{if(!o)return;const K=Y-u,ce=.35,ue=p+K*ce;r(ue);const oe=Date.now(),$=oe-y.current;if($>0){const de=(Y-x.current)/$*12*ce;_(re=>re*.5+de*.5)}x.current=Y,y.current=oe},U=()=>{c(!1)},F=Y=>{D(Y.clientX)},O=Y=>{P(Y.clientX)},Q=()=>{U()},w=Y=>{Y.touches.length>0&&D(Y.touches[0].clientX)},R=Y=>{Y.touches.length>0&&P(Y.touches[0].clientX)},V=()=>{U()};return Yt.useEffect(()=>{const Y=e.current;if(!Y)return;const K=ce=>{o&&ce.preventDefault()};return Y.addEventListener("touchmove",K,{passive:!1}),()=>{Y.removeEventListener("touchmove",K)}},[o]),z.jsxs("div",{className:"dome-gallery-section",children:[z.jsxs("div",{className:"dome-gallery-header",children:[z.jsx("h3",{className:"section-title-accent",children:"Sectors in Motion"}),z.jsx("p",{className:"section-subtitle",children:"Swipe or drag to spin the 3D gallery and explore our active pursuits."})]}),z.jsx("div",{className:"dome-gallery-viewport",ref:e,onMouseDown:F,onMouseMove:O,onMouseUp:Q,onMouseLeave:Q,onTouchStart:w,onTouchMove:R,onTouchEnd:V,children:z.jsx("div",{className:"dome-gallery-cylinder",style:{transform:`translateZ(-${N}px) rotateY(${-n}deg)`,cursor:o?"grabbing":"grab"},children:C.map((Y,K)=>{const ce=K*g;return z.jsxs("div",{className:"dome-gallery-card",style:{transform:`rotateY(${ce}deg) translateZ(${N}px)`,borderTop:`3px solid ${Y.accent||"#fff"}`},children:[z.jsx("div",{className:"dome-card-image",style:{backgroundImage:`url("${Y.url}")`}}),z.jsxs("div",{className:"dome-card-meta",children:[z.jsx("span",{className:"dome-card-number",children:(K+1).toString().padStart(2,"0")}),z.jsx("h4",{className:"dome-card-title",children:Y.name})]})]},K)})})})]})}function NE(){const[s,e]=Yt.useState(null),[n,r]=Yt.useState(!1),o=[{id:1,type:"quote",content:"What starts here changes the world.",caption:"Our guiding light. Deeply committed to the pursuits that matter.",bg:"linear-gradient(135deg, #ffddcc 0%, #ffccd5 100%)",textColor:"#333",likes:"1,240",comments:"42"},{id:2,type:"image",url:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",caption:"Collaborating at the intersection of intellect and execution. #WHNLGroup",likes:"892",comments:"18"},{id:3,type:"quote",content:"One group, many pursuits and an obsession for excellence.",caption:"Diverse operations, singular standard. Excellence is not negotiable.",bg:"linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",textColor:"#2a4d33",likes:"1,053",comments:"29"},{id:4,type:"reel",thumbnail:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",caption:"🎥 WHNL Group Promo Reel 2026. A glimpse into our vision, industries, and pursuits. Press Play to experience.",likes:"3,412",comments:"115"},{id:5,type:"quote",content:"Rooted in clarity, action, impact, participation, consistency, tenacity with a dash of humour.",caption:"The foundation of everything we build. And yes, we don't take ourselves too seriously all the time.",bg:"linear-gradient(135deg, #cce5ff 0%, #b8daff 100%)",textColor:"#1d3a5f",likes:"940",comments:"31"},{id:6,type:"image",url:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",caption:"Quiet mornings in our workspace. Designing structures with human scale in mind.",likes:"612",comments:"11"},{id:7,type:"quote",content:"We probably say “why not” for everything that we do.",caption:"Because constraints are just rules someone else made up. We choose exploration.",bg:"linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)",textColor:"#533f03",likes:"1,114",comments:"54"},{id:8,type:"image",url:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",caption:"Dynamic systems. Scalable technology. Real impact.",likes:"743",comments:"14"},{id:9,type:"quote",content:"Unwavering participation, no limitations.",caption:"We show up. Fully. Every single day.",bg:"linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)",textColor:"#721c24",likes:"889",comments:"22"},{id:10,type:"quote",content:"We believe in ourselves almost to the point of delusion.",caption:"Call it crazy, call it bold. Every world-changing pursuit started with absolute belief.",bg:"linear-gradient(135deg, #e8dbfc 0%, #d6bbfb 100%)",textColor:"#3d126b",likes:"1,529",comments:"98"},{id:11,type:"image",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",caption:"Visualizing research & data pipelines. Precision at depth.",likes:"790",comments:"16"},{id:12,type:"quote",content:"An intersection of vision, intellect and impact.",caption:"Where theories turn into applications, and investments turn into impact.",bg:"linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)",textColor:"#0c5460",likes:"1,032",comments:"41"}],c=d=>{e(d),d.type==="reel"&&r(!0)},u=()=>{e(null),r(!1)};return z.jsxs("div",{className:"instagram-section",children:[z.jsx("div",{className:"instagram-header",children:z.jsxs("div",{className:"insta-profile-info",children:[z.jsx("div",{className:"insta-avatar",children:z.jsx("span",{className:"avatar-text",children:"W"})}),z.jsxs("div",{className:"insta-meta",children:[z.jsxs("div",{className:"insta-username-row",children:[z.jsx("h2",{className:"insta-username",children:"whnl.group"}),z.jsx("span",{className:"verified-badge",children:"✓"}),z.jsx("button",{className:"insta-follow-btn",children:"Follow"})]}),z.jsxs("div",{className:"insta-stats",children:[z.jsxs("span",{children:[z.jsx("strong",{children:"12"})," posts"]}),z.jsxs("span",{children:[z.jsx("strong",{children:"48.6K"})," followers"]}),z.jsxs("span",{children:[z.jsx("strong",{children:"142"})," following"]})]}),z.jsxs("div",{className:"insta-bio",children:[z.jsx("p",{className:"bio-name",children:"WHNL Group"}),z.jsx("p",{className:"bio-desc",children:"One group, many pursuits. Rooted in clarity, action, and impact."}),z.jsx("a",{href:"#explore",className:"bio-link",children:"zaina.international/whnl"})]})]})]})}),z.jsx("div",{className:"instagram-grid",children:o.map(d=>z.jsxs("div",{className:`instagram-grid-item ${d.type}`,onClick:()=>c(d),children:[d.type==="quote"&&z.jsxs("div",{className:"insta-quote-card",style:{background:d.bg,color:d.textColor},children:[z.jsxs("p",{className:"quote-text",children:["“",d.content,"”"]}),z.jsx("span",{className:"quote-branding",children:"WHNL"})]}),d.type==="image"&&z.jsx("div",{className:"insta-image-card",style:{backgroundImage:`url("${d.url}")`}}),d.type==="reel"&&z.jsxs("div",{className:"insta-image-card reel-card",style:{backgroundImage:`url("${d.thumbnail}")`},children:[z.jsxs("div",{className:"reel-badge",children:[z.jsx("svg",{viewBox:"0 0 24 24",className:"reel-svg-icon",children:z.jsx("path",{fill:"currentColor",d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-2,14.5v-9l6,4.5Z"})}),z.jsx("span",{children:"REEL"})]}),z.jsx("div",{className:"reel-overlay-play",children:z.jsx("div",{className:"play-triangle"})})]}),z.jsx("div",{className:"insta-hover-overlay",children:z.jsxs("div",{className:"overlay-metrics",children:[z.jsxs("span",{children:["❤️ ",d.likes]}),z.jsxs("span",{children:["💬 ",d.comments]})]})})]},d.id))}),s&&z.jsx("div",{className:"insta-modal-backdrop",onClick:u,children:z.jsxs("div",{className:"insta-modal-content",onClick:d=>d.stopPropagation(),children:[z.jsx("button",{className:"insta-modal-close",onClick:u,children:"×"}),z.jsxs("div",{className:"insta-modal-body",children:[z.jsxs("div",{className:"insta-modal-media",children:[s.type==="quote"&&z.jsxs("div",{className:"insta-quote-card modal-view",style:{background:s.bg,color:s.textColor},children:[z.jsxs("p",{className:"quote-text-large",children:["“",s.content,"”"]}),z.jsx("span",{className:"quote-branding-large",children:"WHNL GROUP"})]}),s.type==="image"&&z.jsx("img",{src:s.url,alt:"Instagram post",className:"modal-img"}),s.type==="reel"&&z.jsx("div",{className:"reel-player-container",children:n?z.jsxs("div",{className:"custom-reel-player",children:[z.jsxs("div",{className:"hyperspeed-reel-simulation",children:[z.jsx("div",{className:"reel-glow-backdrop"}),z.jsxs("div",{className:"reel-text-flow",children:[z.jsx("span",{className:"reel-title-slide",children:"WHNL GROUP"}),z.jsx("span",{className:"reel-subtitle-slide",children:"WHAT STARTS HERE CHANGES THE WORLD"}),z.jsx("span",{className:"reel-tags-slide",children:"#clarity #action #impact"}),z.jsx("div",{className:"reel-visual-pulse"})]})]}),z.jsxs("div",{className:"reel-controls",children:[z.jsx("button",{className:"reel-btn",onClick:()=>r(!1),children:"Pause"}),z.jsx("span",{className:"reel-duration",children:"0:15"})]})]}):z.jsx("div",{className:"reel-poster",style:{backgroundImage:`url("${s.thumbnail}")`},children:z.jsx("button",{className:"play-reel-trigger-btn",onClick:()=>r(!0),children:"Play Promo Reel"})})})]}),z.jsxs("div",{className:"insta-modal-sidebar",children:[z.jsxs("div",{className:"sidebar-header",children:[z.jsx("div",{className:"insta-avatar small",children:"W"}),z.jsxs("div",{children:[z.jsx("span",{className:"sidebar-username",children:"whnl.group"}),z.jsx("span",{className:"verified-badge small",children:"✓"})]})]}),z.jsxs("div",{className:"sidebar-caption-area",children:[z.jsxs("div",{className:"caption-row",children:[z.jsx("div",{className:"insta-avatar small",children:"W"}),z.jsxs("p",{className:"caption-text",children:[z.jsx("strong",{children:"whnl.group"})," ",s.caption]})]}),z.jsx("div",{className:"comment-divider"}),z.jsxs("div",{className:"mock-comments",children:[z.jsxs("div",{className:"comment-row",children:[z.jsx("span",{className:"comment-user",children:"alex_design"}),z.jsx("span",{className:"comment-content",children:"Absolutely love this aesthetic! Sleek. ✨"})]}),z.jsxs("div",{className:"comment-row",children:[z.jsx("span",{className:"comment-user",children:"impact_lab"}),z.jsx("span",{className:"comment-content",children:"This quote hits hard. Bold approach. 🙌"})]}),z.jsxs("div",{className:"comment-row",children:[z.jsx("span",{className:"comment-user",children:"tech_pursuits"}),z.jsx("span",{className:"comment-content",children:"Is the Careers board open? Can't wait!"})]})]})]}),z.jsxs("div",{className:"sidebar-footer",children:[z.jsxs("div",{className:"interactions-row",children:[z.jsx("span",{className:"heart-icon",children:"❤️"}),z.jsx("span",{className:"share-icon",children:"📤"})]}),z.jsxs("div",{className:"likes-count",children:[s.likes," likes"]}),z.jsx("div",{className:"post-date",children:"June 6, 2026"})]})]})]})]})})]})}function rf({text:s,className:e}){const n=Yt.useRef(null),r=s.split(" ");return Yt.useEffect(()=>{const o=n.current;if(!o)return;const c=o.querySelectorAll(".reveal-word"),u=()=>{const d=o.getBoundingClientRect(),p=window.innerHeight,m=p*.85,v=p*.25,_=m-v,x=Math.min(Math.max(0,(m-d.top)/_),1),y=c.length;c.forEach((T,C)=>{const S=C/y*.7,N=Math.min(Math.max(0,(x-S)/.3),1),D=.35+N*.65;T.style.opacity=D,T.style.color=N>.4?"#ffffff":"#a1a1a6"})};return window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),u(),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[s]),z.jsx("p",{ref:n,className:e,style:{display:"inline-block"},children:r.map((o,c)=>z.jsx("span",{className:"reveal-word",style:{display:"inline-block",marginRight:"0.26em",opacity:.35,color:"#a1a1a6",transition:"opacity 0.08s ease-out, color 0.08s ease-out",willChange:"opacity, color"},children:o},c))})}function LE(){const[s,e]=Yt.useState(null),[n,r]=Yt.useState("all"),o=Yt.useRef(null);Yt.useEffect(()=>{const u=o.current;if(!u)return;const d=p=>{u.style.left=`${p.clientX+180}px`,u.style.top=`${p.clientY+-80}px`};return window.addEventListener("mousemove",d),()=>{window.removeEventListener("mousemove",d)}},[]);const c=n==="all"?Rl:Rl.filter(u=>u.category===n);return z.jsxs("div",{className:"page",children:[z.jsxs("header",{className:"header",children:[z.jsx("div",{className:"brand-logo-container",children:z.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"brand-logo"})}),z.jsxs("nav",{className:"nav-links",children:[z.jsx("a",{href:"#industries",className:"nav-link",children:"Sectors"}),z.jsx("a",{href:"#social",className:"nav-link",children:"Journal"}),z.jsx("a",{href:"#communities",className:"nav-link",children:"Careers"})]})]}),z.jsxs("section",{className:"hero-section",children:[z.jsx("div",{className:"hero-hyperspeed-container",children:z.jsx(bE,{})}),z.jsx("div",{className:"hero-overlay"}),z.jsxs("div",{className:"hero-content",children:[z.jsxs("div",{className:"hero-title-group",children:[z.jsx("span",{className:"hero-tagline",children:"WHNL Group"}),z.jsxs("h1",{className:"hero-title",children:["What starts here",z.jsx("br",{}),"changes the world."]}),z.jsx(rf,{text:"We are a holding company of businesses that make an impact.",className:"hero-subtitle"})]}),z.jsx("div",{className:"hero-cta-group",children:z.jsx("button",{className:"btn-primary",onClick:()=>{const u=document.getElementById("communities");u&&u.scrollIntoView({behavior:"smooth"})},children:"Explore Careers & Communities"})})]}),z.jsxs("a",{href:"#industries",className:"scroll-indicator",children:[z.jsx("span",{className:"scroll-text",children:"Explore"}),z.jsx("div",{className:"scroll-line"})]})]}),z.jsxs("main",{children:[z.jsxs("section",{id:"industries",className:"zaina-index-section",children:[z.jsxs("div",{className:"zaina-section-header",children:[z.jsx("span",{className:"section-label",children:"Pursuits"}),z.jsx("h2",{className:"section-title",children:"The WHNL Portfolio"}),z.jsx(rf,{text:"An intersection of vision, intellect, and impact. A diverse ecosystem of businesses operating with an obsession for excellence.",className:"section-description"})]}),z.jsxs("div",{className:"filters-row",children:[z.jsx("span",{className:"filters-title",children:"Industries Index"}),z.jsxs("div",{className:"filter-tags",children:[z.jsxs("button",{className:`filter-tag ${n==="all"?"active":""}`,onClick:()=>r("all"),children:["All Sectors (",Rl.length,")"]}),z.jsx("button",{className:`filter-tag ${n==="consumer"?"active":""}`,onClick:()=>r("consumer"),children:"Consumer"}),z.jsx("button",{className:`filter-tag ${n==="tech"?"active":""}`,onClick:()=>r("tech"),children:"Tech & AI"}),z.jsx("button",{className:`filter-tag ${n==="creative"?"active":""}`,onClick:()=>r("creative"),children:"IP & Creative"})]})]}),z.jsx("div",{className:"zaina-table",children:c.map((u,d)=>z.jsxs("div",{className:"zaina-row",onMouseEnter:()=>e(u),onMouseLeave:()=>e(null),children:[z.jsx("span",{className:"row-num",children:(d+1).toString().padStart(2,"0")}),z.jsx("span",{className:"row-name",children:u.name}),z.jsx("span",{className:"row-tagline",children:u.tagline}),z.jsx("div",{className:"row-action",children:z.jsx("span",{className:"action-arrow",children:"→"})})]},u.id))}),z.jsx("div",{ref:o,className:`float-preview-container ${s?"visible":""}`,children:s&&z.jsx("div",{className:"image-stack",children:s.images.slice(0,3).map((u,d)=>z.jsx("div",{className:`stack-image img-${d}`,style:{backgroundImage:`url("${u}")`}},d))})})]}),z.jsx("section",{className:"dome-gallery-section",children:z.jsx(PE,{items:Rl})}),z.jsx("section",{id:"social",children:z.jsx(NE,{})}),z.jsx("section",{id:"communities",className:"communities-section",children:z.jsxs("div",{className:"communities-content",children:[z.jsx("span",{className:"section-label",children:"Join Our Pursuit"}),z.jsx("h2",{className:"section-title",children:"Careers & Communities"}),z.jsx(rf,{text:"We believe in ourselves almost to the point of delusion. If you carry unwavering participation, no limitations, and a healthy dose of tenacity, let's design the future together.",className:"section-description"}),z.jsxs("div",{className:"communities-grid",children:[z.jsxs("div",{className:"community-card",children:[z.jsx("span",{className:"card-label",children:"Active Talents"}),z.jsx("h3",{className:"card-title",children:"Explore Careers"}),z.jsx("p",{className:"card-description",children:"Discover open opportunities across our businesses in technology, FMCG, SaaS, manufacturing, real estate, and finance."}),z.jsxs("a",{href:"#apply",className:"card-link",onClick:u=>{u.preventDefault(),alert("Talent recruitment portal coming soon. For inquiries, email careers@whnl.group")},children:["Apply Online ",z.jsx("span",{children:"→"})]})]}),z.jsxs("div",{className:"community-card",children:[z.jsx("span",{className:"card-label",children:"Eco-systems"}),z.jsx("h3",{className:"card-title",children:"Our Communities"}),z.jsx("p",{className:"card-description",children:"Learn about our collaborative networks, events, hackathons, creative IPs, and wellness experiences designed to cultivate impact."}),z.jsxs("a",{href:"#connect",className:"card-link",onClick:u=>{u.preventDefault(),alert("Community platform launch scheduled for Fall 2026.")},children:["Get Involved ",z.jsx("span",{children:"→"})]})]})]})]})})]}),z.jsxs("footer",{className:"whnl-footer",children:[z.jsxs("div",{className:"footer-top",children:[z.jsxs("div",{className:"footer-brand",children:[z.jsx("img",{src:"/images/FulllogowithoutBG.png",alt:"WHNL Logo",className:"footer-logo"}),z.jsx("p",{className:"footer-pitch",children:"One group, many pursuits, and an obsession for excellence."})]}),z.jsxs("div",{className:"footer-cols",children:[z.jsxs("div",{className:"footer-col",children:[z.jsx("h4",{className:"footer-col-title",children:"Operations"}),z.jsxs("ul",{children:[z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"Consumer & FMCG"})}),z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"Technology & SaaS"})}),z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"Manufacturing & Logistics"})}),z.jsx("li",{children:z.jsx("a",{href:"#industries",children:"IPs & Media"})})]})]}),z.jsxs("div",{className:"footer-col",children:[z.jsx("h4",{className:"footer-col-title",children:"Company"}),z.jsxs("ul",{children:[z.jsx("li",{children:z.jsx("a",{href:"#social",children:"Journal"})}),z.jsx("li",{children:z.jsx("a",{href:"#communities",children:"Careers"})}),z.jsx("li",{children:z.jsx("a",{href:"#communities",children:"Communities"})}),z.jsx("li",{children:z.jsx("a",{href:"#contact",onClick:u=>{u.preventDefault(),alert("Contact: hello@whnl.group")},children:"Contact Us"})})]})]})]})]}),z.jsxs("div",{className:"footer-bottom",children:[z.jsxs("span",{children:["© ",new Date().getFullYear()," WHNL Group. All rights reserved."]}),z.jsx("span",{children:"Sleek • Premium • sorted"})]})]})]})}h_.createRoot(document.getElementById("root")).render(z.jsx(a_.StrictMode,{children:z.jsx(LE,{})}));
