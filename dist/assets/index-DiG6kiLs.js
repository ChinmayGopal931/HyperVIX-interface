const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-mnRrpx0H.js","assets/core-Bn9v_PDz.js","assets/index-DAQpu9e7.js","assets/index-D6yDMLGb.css","assets/index.es-D0gEBoHY.js","assets/all-wallets-OY23clFy.js","assets/arrow-bottom-circle-QCjWfrfO.js","assets/app-store-CIICcbVT.js","assets/apple-lT1i0-70.js","assets/arrow-bottom-DDTTxj-e.js","assets/arrow-left-CBJgdjFB.js","assets/arrow-right-3408XQim.js","assets/arrow-top-D6iludQ-.js","assets/bank-CEFeSJ9M.js","assets/browser-D7I_qM82.js","assets/card-ByLd303L.js","assets/checkmark-n8vmKulW.js","assets/checkmark-bold-Cu6wwfA2.js","assets/chevron-bottom-CC-A3yOW.js","assets/chevron-left-DCyxcXqE.js","assets/chevron-right-BgK4hDCC.js","assets/chevron-top-D1JU8tMa.js","assets/chrome-store-D55Fyf_h.js","assets/clock-Cm7O0TSv.js","assets/close-CQFsvqYy.js","assets/compass-8Bf5cFqc.js","assets/coinPlaceholder-Cfz0c5zI.js","assets/copy-DxnVF1yo.js","assets/cursor-DsKgTgIE.js","assets/cursor-transparent-DAxlm1r0.js","assets/desktop-B1UQ2ZHc.js","assets/disconnect-r6brUa6_.js","assets/discord-CcRVsh5w.js","assets/etherscan-QfafYM32.js","assets/extension-DL-OYTnv.js","assets/external-link-BiOQcdyD.js","assets/facebook-Dg28PoYB.js","assets/farcaster-BKmt5EOI.js","assets/filters-DxUUOdMw.js","assets/github-Cu2AYLMO.js","assets/google-CtLnQXeb.js","assets/help-circle-VbTAJRgd.js","assets/image-DFeWbqAp.js","assets/id-C693X29d.js","assets/info-circle-DwxaePj0.js","assets/lightbulb-VVh-Cnj1.js","assets/mail-DtMy-idP.js","assets/mobile-CpnYfXpB.js","assets/more-Ds7J5uew.js","assets/network-placeholder-NcBmjBfR.js","assets/nftPlaceholder-BmlrmfW-.js","assets/off-BN8OyFLZ.js","assets/play-store-CSGp_VSO.js","assets/plus-Dkg30rdR.js","assets/qr-code-fkh_sA-_.js","assets/recycle-horizontal-CSd4OctI.js","assets/refresh-OX2Rt9A5.js","assets/search-Rz6U6nc0.js","assets/send-BYaBTir4.js","assets/swapHorizontal-B0_7nDE8.js","assets/swapHorizontalMedium-BieiRJ2l.js","assets/swapHorizontalBold-CyW5t__e.js","assets/swapHorizontalRoundedBold-DMgolynA.js","assets/swapVertical-n82WCxib.js","assets/telegram-DogXLYex.js","assets/three-dots-Dn8Oaz_W.js","assets/twitch-DaP-VEDk.js","assets/x-bLOdmGuD.js","assets/twitterIcon-CksBaAIo.js","assets/verify-XvhiDQqo.js","assets/verify-filled-Cq8nj7bq.js","assets/wallet-DULV6iHf.js","assets/walletconnect-C7W7sMX0.js","assets/wallet-placeholder-MxzBv3_n.js","assets/warning-circle-Du5toHzq.js","assets/info-v63aFjKB.js","assets/exclamation-triangle-xgcX1ok4.js","assets/reown-logo-CRyMQ2dA.js"])))=>i.map(i=>d[i]);
import{B as jt,D as Bt,i as R,r as L,a as D,x as b,F as ht,o as Rt,e as Nt}from"./core-Bn9v_PDz.js";import{_ as c}from"./index-DAQpu9e7.js";const $={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:i,truncate:r}){return e.length<=t+i?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-i)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(i))}`},generateAvatarColors(e){const i=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(o==null?void 0:o.replace("px","")),a=`${n}% ${n}% at 65% 40%`,l=[];for(let u=0;u<5;u+=1){const p=this.tintColor(r,.15*u);l.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(e){const t=parseInt(e,16),i=t>>16&255,r=t>>8&255,o=t&255;return[i,r,o]},tintColor(e,t){const[i,r,o]=e,s=Math.round(i+(255-i)*t),n=Math.round(r+(255-r)*t),a=Math.round(o+(255-o)*t);return[s,n,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,i){return e.toString().length>=t?Number(e).toFixed(i):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function Wt(e,t){const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function Ft(e,t){return customElements.get(e)||customElements.define(e,t),t}function I(e){return function(i){return typeof i=="function"?Ft(e,i):Wt(e,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,ut=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),ft=new WeakMap;let Lt=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ut&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=ft.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ft.set(i,t))}return t}toString(){return this.cssText}};const qt=e=>new Lt(typeof e=="string"?e:e+"",void 0,dt),Me=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Lt(i,e,dt)},Gt=(e,t)=>{if(ut)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),o=J.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}},wt=ut?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return qt(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Kt,defineProperty:Yt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Xt,getOwnPropertySymbols:Jt,getPrototypeOf:Qt}=Object,E=globalThis,mt=E.trustedTypes,te=mt?mt.emptyScript:"",st=E.reactiveElementPolyfillSupport,H=(e,t)=>e,tt={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},pt=(e,t)=>!Kt(e,t),yt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let z=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=yt){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Yt(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){const{get:o,set:s}=Zt(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get:o,set(n){const a=o==null?void 0:o.call(this);s==null||s.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const i=this.properties,r=[...Xt(i),...Jt(i)];for(const o of r)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,o]of i)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const o=this._$Eu(i,r);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(wt(o))}else t!==void 0&&i.push(wt(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostDisconnected)==null?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){var s;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const n=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:tt).toAttribute(i,r.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){var s,n;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:tt;this._$Em=o;const u=l.fromAttribute(i,a.type);this[o]=u??((n=this._$Ej)==null?void 0:n.get(o))??u,this._$Em=null}}requestUpdate(t,i,r){var o;if(t!==void 0){const s=this.constructor,n=this[t];if(r??(r=s.getPropertyOptions(t)),!((r.hasChanged??pt)(n,i)||r.useDefault&&r.reflect&&n===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??i??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(r=this._$EO)==null||r.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(i)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[H("elementProperties")]=new Map,z[H("finalized")]=new Map,st==null||st({ReactiveElement:z}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,et=j.trustedTypes,$t=et?et.createPolicy("lit-html",{createHTML:e=>e}):void 0,Dt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+S,ee=`<${It}>`,C=document,N=()=>C.createComment(""),W=e=>e===null||typeof e!="object"&&typeof e!="function",_t=Array.isArray,ie=e=>_t(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Et=/>/g,A=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,At=/"/g,zt=/^(?:script|style|textarea|title)$/i,re=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),je=re(1),V=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Pt=new WeakMap,P=C.createTreeWalker(C,129);function Vt(e,t){if(!_t(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}const oe=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",n=M;for(let a=0;a<i;a++){const l=e[a];let u,p,d=-1,w=0;for(;w<l.length&&(n.lastIndex=w,p=n.exec(l),p!==null);)w=n.lastIndex,n===M?p[1]==="!--"?n=St:p[1]!==void 0?n=Et:p[2]!==void 0?(zt.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=o??M,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,u=p[1],n=p[3]===void 0?A:p[3]==='"'?At:bt):n===At||n===bt?n=A:n===St||n===Et?n=M:(n=A,o=void 0);const y=n===A&&e[a+1].startsWith("/>")?" ":"";s+=n===M?l+ee:d>=0?(r.push(u),l.slice(0,d)+Dt+l.slice(d)+S+y):l+S+(d===-2?a:y)}return[Vt(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class F{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const a=t.length-1,l=this.parts,[u,p]=oe(t,i);if(this.el=F.createElement(u,r),P.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=P.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Dt)){const w=p[n++],y=o.getAttribute(d).split(S),X=/([.?@])?(.*)/.exec(w);l.push({type:1,index:s,name:X[2],strings:y,ctor:X[1]==="."?ne:X[1]==="?"?ae:X[1]==="@"?ce:rt}),o.removeAttribute(d)}else d.startsWith(S)&&(l.push({type:6,index:s}),o.removeAttribute(d));if(zt.test(o.tagName)){const d=o.textContent.split(S),w=d.length-1;if(w>0){o.textContent=et?et.emptyScript:"";for(let y=0;y<w;y++)o.append(d[y],N()),P.nextNode(),l.push({type:2,index:++s});o.append(d[w],N())}}}else if(o.nodeType===8)if(o.data===It)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(S,d+1))!==-1;)l.push({type:7,index:s}),d+=S.length-1}s++}}static createElement(t,i){const r=C.createElement("template");return r.innerHTML=t,r}}function k(e,t,i=e,r){var n,a;if(t===V)return t;let o=r!==void 0?(n=i._$Co)==null?void 0:n[r]:i._$Cl;const s=W(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=o:i._$Cl=o),o!==void 0&&(t=k(e,o._$AS(e,t.values),o,r)),t}class se{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??C).importNode(i,!0);P.currentNode=o;let s=P.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new K(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new le(s,this,t)),this._$AV.push(u),l=r[++a]}n!==(l==null?void 0:l.index)&&(s=P.nextNode(),n++)}return P.currentNode=C,o}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}class K{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=k(this,t,i),W(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==V&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ie(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=F.createElement(Vt(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(i);else{const n=new se(o,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=Pt.get(t.strings);return i===void 0&&Pt.set(t.strings,i=new F(t)),i}k(t){_t(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new K(this.O(N()),this.O(N()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(t,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=k(this,t,i,0),n=!W(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=k(this,a[r+l],i,l),u===V&&(u=this._$AH[l]),n||(n=!W(u)||u!==this._$AH[l]),u===_?t=_:t!==_&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}n&&!o&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ne extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class ae extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class ce extends rt{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){if((t=k(this,t,i,0)??_)===V)return;const r=this._$AH,o=t===_&&r!==_||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==_&&(r===_||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class le{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const at=j.litHtmlPolyfillSupport;at==null||at(F,K),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.1");const he=(e,t,i)=>{const r=(i==null?void 0:i.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;r._$litPart$=o=new K(t.insertBefore(N(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;let Q=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=he(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return V}};var Ot;Q._$litElement$=!0,Q.finalized=!0,(Ot=x.litElementHydrateSupport)==null||Ot.call(x,{LitElement:Q});const ct=x.litElementPolyfillSupport;ct==null||ct({LitElement:Q});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:pt},de=(e=ue,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),r==="accessor"){const{name:n}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(r==="setter"){const{name:n}=i;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+r)};function pe(e){return(t,i)=>typeof i=="object"?de(e,t,i):((r,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ne(e){return pe({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:jt},ge=(e=_e,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),r==="accessor"){const{name:n}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(r==="setter"){const{name:n}=i;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+r)};function h(e){return(t,i)=>typeof i=="object"?ge(e,t,i):((r,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}const ve=R`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var v=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let g=class extends D{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&$.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&$.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&$.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&$.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&$.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&$.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&$.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&$.getSpacingStyles(this.margin,3)};
    `,b`<slot></slot>`}};g.styles=[L,ve];v([h()],g.prototype,"flexDirection",void 0);v([h()],g.prototype,"flexWrap",void 0);v([h()],g.prototype,"flexBasis",void 0);v([h()],g.prototype,"flexGrow",void 0);v([h()],g.prototype,"flexShrink",void 0);v([h()],g.prototype,"alignItems",void 0);v([h()],g.prototype,"justifyContent",void 0);v([h()],g.prototype,"columnGap",void 0);v([h()],g.prototype,"rowGap",void 0);v([h()],g.prototype,"gap",void 0);v([h()],g.prototype,"padding",void 0);v([h()],g.prototype,"margin",void 0);g=v([I("wui-flex")],g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=e=>e??_;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=e=>e===null||typeof e!="object"&&typeof e!="function",we=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={ATTRIBUTE:1,CHILD:2},Ut=e=>(...t)=>({_$litDirective$:e,values:t});let Mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(e,t)=>{var r;const i=e._$AN;if(i===void 0)return!1;for(const o of i)(r=o._$AO)==null||r.call(o,t,!1),B(o,t);return!0},it=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Ht=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),$e(t)}};function me(e){this._$AN!==void 0?(it(this),this._$AM=e,Ht(this)):this._$AM=e}function ye(e,t=!1,i=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let s=i;s<r.length;s++)B(r[s],!1),it(r[s]);else r!=null&&(B(r,!1),it(r));else B(this,e)}const $e=e=>{e.type==kt.CHILD&&(e._$AP??(e._$AP=ye),e._$AQ??(e._$AQ=me))};class Se extends Mt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),Ht(this),this.isConnected=t._$AU}_$AO(t,i=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),i&&(B(this,t),it(this))}setValue(t){if(we(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ee{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class be{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){var t;(t=this.Z)==null||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=e=>!fe(e)&&typeof e.then=="function",Ct=1073741823;class Ae extends Se{constructor(){super(...arguments),this._$Cwt=Ct,this._$Cbt=[],this._$CK=new Ee(this),this._$CX=new be}render(...t){return t.find(i=>!xt(i))??ht}update(t,i){const r=this._$Cbt;let o=r.length;this._$Cbt=i;const s=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!xt(l))return this._$Cwt=a,l;a<o&&l===r[a]||(this._$Cwt=Ct,o=0,Promise.resolve(l).then(async u=>{for(;n.get();)await n.get();const p=s.deref();if(p!==void 0){const d=p._$Cbt.indexOf(l);d>-1&&d<p._$Cwt&&(p._$Cwt=d,p.setValue(u))}}))}return ht}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Pe=Ut(Ae);class xe{constructor(){this.cache=new Map}set(t,i){this.cache.set(t,i)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}const lt=new xe,Ce=R`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var Y=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const Tt={add:async()=>(await c(async()=>{const{addSvg:e}=await import("./add-mnRrpx0H.js");return{addSvg:e}},__vite__mapDeps([0,1,2,3,4]))).addSvg,allWallets:async()=>(await c(async()=>{const{allWalletsSvg:e}=await import("./all-wallets-OY23clFy.js");return{allWalletsSvg:e}},__vite__mapDeps([5,1,2,3,4]))).allWalletsSvg,arrowBottomCircle:async()=>(await c(async()=>{const{arrowBottomCircleSvg:e}=await import("./arrow-bottom-circle-QCjWfrfO.js");return{arrowBottomCircleSvg:e}},__vite__mapDeps([6,1,2,3,4]))).arrowBottomCircleSvg,appStore:async()=>(await c(async()=>{const{appStoreSvg:e}=await import("./app-store-CIICcbVT.js");return{appStoreSvg:e}},__vite__mapDeps([7,1,2,3,4]))).appStoreSvg,apple:async()=>(await c(async()=>{const{appleSvg:e}=await import("./apple-lT1i0-70.js");return{appleSvg:e}},__vite__mapDeps([8,1,2,3,4]))).appleSvg,arrowBottom:async()=>(await c(async()=>{const{arrowBottomSvg:e}=await import("./arrow-bottom-DDTTxj-e.js");return{arrowBottomSvg:e}},__vite__mapDeps([9,1,2,3,4]))).arrowBottomSvg,arrowLeft:async()=>(await c(async()=>{const{arrowLeftSvg:e}=await import("./arrow-left-CBJgdjFB.js");return{arrowLeftSvg:e}},__vite__mapDeps([10,1,2,3,4]))).arrowLeftSvg,arrowRight:async()=>(await c(async()=>{const{arrowRightSvg:e}=await import("./arrow-right-3408XQim.js");return{arrowRightSvg:e}},__vite__mapDeps([11,1,2,3,4]))).arrowRightSvg,arrowTop:async()=>(await c(async()=>{const{arrowTopSvg:e}=await import("./arrow-top-D6iludQ-.js");return{arrowTopSvg:e}},__vite__mapDeps([12,1,2,3,4]))).arrowTopSvg,bank:async()=>(await c(async()=>{const{bankSvg:e}=await import("./bank-CEFeSJ9M.js");return{bankSvg:e}},__vite__mapDeps([13,1,2,3,4]))).bankSvg,browser:async()=>(await c(async()=>{const{browserSvg:e}=await import("./browser-D7I_qM82.js");return{browserSvg:e}},__vite__mapDeps([14,1,2,3,4]))).browserSvg,card:async()=>(await c(async()=>{const{cardSvg:e}=await import("./card-ByLd303L.js");return{cardSvg:e}},__vite__mapDeps([15,1,2,3,4]))).cardSvg,checkmark:async()=>(await c(async()=>{const{checkmarkSvg:e}=await import("./checkmark-n8vmKulW.js");return{checkmarkSvg:e}},__vite__mapDeps([16,1,2,3,4]))).checkmarkSvg,checkmarkBold:async()=>(await c(async()=>{const{checkmarkBoldSvg:e}=await import("./checkmark-bold-Cu6wwfA2.js");return{checkmarkBoldSvg:e}},__vite__mapDeps([17,1,2,3,4]))).checkmarkBoldSvg,chevronBottom:async()=>(await c(async()=>{const{chevronBottomSvg:e}=await import("./chevron-bottom-CC-A3yOW.js");return{chevronBottomSvg:e}},__vite__mapDeps([18,1,2,3,4]))).chevronBottomSvg,chevronLeft:async()=>(await c(async()=>{const{chevronLeftSvg:e}=await import("./chevron-left-DCyxcXqE.js");return{chevronLeftSvg:e}},__vite__mapDeps([19,1,2,3,4]))).chevronLeftSvg,chevronRight:async()=>(await c(async()=>{const{chevronRightSvg:e}=await import("./chevron-right-BgK4hDCC.js");return{chevronRightSvg:e}},__vite__mapDeps([20,1,2,3,4]))).chevronRightSvg,chevronTop:async()=>(await c(async()=>{const{chevronTopSvg:e}=await import("./chevron-top-D1JU8tMa.js");return{chevronTopSvg:e}},__vite__mapDeps([21,1,2,3,4]))).chevronTopSvg,chromeStore:async()=>(await c(async()=>{const{chromeStoreSvg:e}=await import("./chrome-store-D55Fyf_h.js");return{chromeStoreSvg:e}},__vite__mapDeps([22,1,2,3,4]))).chromeStoreSvg,clock:async()=>(await c(async()=>{const{clockSvg:e}=await import("./clock-Cm7O0TSv.js");return{clockSvg:e}},__vite__mapDeps([23,1,2,3,4]))).clockSvg,close:async()=>(await c(async()=>{const{closeSvg:e}=await import("./close-CQFsvqYy.js");return{closeSvg:e}},__vite__mapDeps([24,1,2,3,4]))).closeSvg,compass:async()=>(await c(async()=>{const{compassSvg:e}=await import("./compass-8Bf5cFqc.js");return{compassSvg:e}},__vite__mapDeps([25,1,2,3,4]))).compassSvg,coinPlaceholder:async()=>(await c(async()=>{const{coinPlaceholderSvg:e}=await import("./coinPlaceholder-Cfz0c5zI.js");return{coinPlaceholderSvg:e}},__vite__mapDeps([26,1,2,3,4]))).coinPlaceholderSvg,copy:async()=>(await c(async()=>{const{copySvg:e}=await import("./copy-DxnVF1yo.js");return{copySvg:e}},__vite__mapDeps([27,1,2,3,4]))).copySvg,cursor:async()=>(await c(async()=>{const{cursorSvg:e}=await import("./cursor-DsKgTgIE.js");return{cursorSvg:e}},__vite__mapDeps([28,1,2,3,4]))).cursorSvg,cursorTransparent:async()=>(await c(async()=>{const{cursorTransparentSvg:e}=await import("./cursor-transparent-DAxlm1r0.js");return{cursorTransparentSvg:e}},__vite__mapDeps([29,1,2,3,4]))).cursorTransparentSvg,desktop:async()=>(await c(async()=>{const{desktopSvg:e}=await import("./desktop-B1UQ2ZHc.js");return{desktopSvg:e}},__vite__mapDeps([30,1,2,3,4]))).desktopSvg,disconnect:async()=>(await c(async()=>{const{disconnectSvg:e}=await import("./disconnect-r6brUa6_.js");return{disconnectSvg:e}},__vite__mapDeps([31,1,2,3,4]))).disconnectSvg,discord:async()=>(await c(async()=>{const{discordSvg:e}=await import("./discord-CcRVsh5w.js");return{discordSvg:e}},__vite__mapDeps([32,1,2,3,4]))).discordSvg,etherscan:async()=>(await c(async()=>{const{etherscanSvg:e}=await import("./etherscan-QfafYM32.js");return{etherscanSvg:e}},__vite__mapDeps([33,1,2,3,4]))).etherscanSvg,extension:async()=>(await c(async()=>{const{extensionSvg:e}=await import("./extension-DL-OYTnv.js");return{extensionSvg:e}},__vite__mapDeps([34,1,2,3,4]))).extensionSvg,externalLink:async()=>(await c(async()=>{const{externalLinkSvg:e}=await import("./external-link-BiOQcdyD.js");return{externalLinkSvg:e}},__vite__mapDeps([35,1,2,3,4]))).externalLinkSvg,facebook:async()=>(await c(async()=>{const{facebookSvg:e}=await import("./facebook-Dg28PoYB.js");return{facebookSvg:e}},__vite__mapDeps([36,1,2,3,4]))).facebookSvg,farcaster:async()=>(await c(async()=>{const{farcasterSvg:e}=await import("./farcaster-BKmt5EOI.js");return{farcasterSvg:e}},__vite__mapDeps([37,1,2,3,4]))).farcasterSvg,filters:async()=>(await c(async()=>{const{filtersSvg:e}=await import("./filters-DxUUOdMw.js");return{filtersSvg:e}},__vite__mapDeps([38,1,2,3,4]))).filtersSvg,github:async()=>(await c(async()=>{const{githubSvg:e}=await import("./github-Cu2AYLMO.js");return{githubSvg:e}},__vite__mapDeps([39,1,2,3,4]))).githubSvg,google:async()=>(await c(async()=>{const{googleSvg:e}=await import("./google-CtLnQXeb.js");return{googleSvg:e}},__vite__mapDeps([40,1,2,3,4]))).googleSvg,helpCircle:async()=>(await c(async()=>{const{helpCircleSvg:e}=await import("./help-circle-VbTAJRgd.js");return{helpCircleSvg:e}},__vite__mapDeps([41,1,2,3,4]))).helpCircleSvg,image:async()=>(await c(async()=>{const{imageSvg:e}=await import("./image-DFeWbqAp.js");return{imageSvg:e}},__vite__mapDeps([42,1,2,3,4]))).imageSvg,id:async()=>(await c(async()=>{const{idSvg:e}=await import("./id-C693X29d.js");return{idSvg:e}},__vite__mapDeps([43,1,2,3,4]))).idSvg,infoCircle:async()=>(await c(async()=>{const{infoCircleSvg:e}=await import("./info-circle-DwxaePj0.js");return{infoCircleSvg:e}},__vite__mapDeps([44,1,2,3,4]))).infoCircleSvg,lightbulb:async()=>(await c(async()=>{const{lightbulbSvg:e}=await import("./lightbulb-VVh-Cnj1.js");return{lightbulbSvg:e}},__vite__mapDeps([45,1,2,3,4]))).lightbulbSvg,mail:async()=>(await c(async()=>{const{mailSvg:e}=await import("./mail-DtMy-idP.js");return{mailSvg:e}},__vite__mapDeps([46,1,2,3,4]))).mailSvg,mobile:async()=>(await c(async()=>{const{mobileSvg:e}=await import("./mobile-CpnYfXpB.js");return{mobileSvg:e}},__vite__mapDeps([47,1,2,3,4]))).mobileSvg,more:async()=>(await c(async()=>{const{moreSvg:e}=await import("./more-Ds7J5uew.js");return{moreSvg:e}},__vite__mapDeps([48,1,2,3,4]))).moreSvg,networkPlaceholder:async()=>(await c(async()=>{const{networkPlaceholderSvg:e}=await import("./network-placeholder-NcBmjBfR.js");return{networkPlaceholderSvg:e}},__vite__mapDeps([49,1,2,3,4]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await c(async()=>{const{nftPlaceholderSvg:e}=await import("./nftPlaceholder-BmlrmfW-.js");return{nftPlaceholderSvg:e}},__vite__mapDeps([50,1,2,3,4]))).nftPlaceholderSvg,off:async()=>(await c(async()=>{const{offSvg:e}=await import("./off-BN8OyFLZ.js");return{offSvg:e}},__vite__mapDeps([51,1,2,3,4]))).offSvg,playStore:async()=>(await c(async()=>{const{playStoreSvg:e}=await import("./play-store-CSGp_VSO.js");return{playStoreSvg:e}},__vite__mapDeps([52,1,2,3,4]))).playStoreSvg,plus:async()=>(await c(async()=>{const{plusSvg:e}=await import("./plus-Dkg30rdR.js");return{plusSvg:e}},__vite__mapDeps([53,1,2,3,4]))).plusSvg,qrCode:async()=>(await c(async()=>{const{qrCodeIcon:e}=await import("./qr-code-fkh_sA-_.js");return{qrCodeIcon:e}},__vite__mapDeps([54,1,2,3,4]))).qrCodeIcon,recycleHorizontal:async()=>(await c(async()=>{const{recycleHorizontalSvg:e}=await import("./recycle-horizontal-CSd4OctI.js");return{recycleHorizontalSvg:e}},__vite__mapDeps([55,1,2,3,4]))).recycleHorizontalSvg,refresh:async()=>(await c(async()=>{const{refreshSvg:e}=await import("./refresh-OX2Rt9A5.js");return{refreshSvg:e}},__vite__mapDeps([56,1,2,3,4]))).refreshSvg,search:async()=>(await c(async()=>{const{searchSvg:e}=await import("./search-Rz6U6nc0.js");return{searchSvg:e}},__vite__mapDeps([57,1,2,3,4]))).searchSvg,send:async()=>(await c(async()=>{const{sendSvg:e}=await import("./send-BYaBTir4.js");return{sendSvg:e}},__vite__mapDeps([58,1,2,3,4]))).sendSvg,swapHorizontal:async()=>(await c(async()=>{const{swapHorizontalSvg:e}=await import("./swapHorizontal-B0_7nDE8.js");return{swapHorizontalSvg:e}},__vite__mapDeps([59,1,2,3,4]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await c(async()=>{const{swapHorizontalMediumSvg:e}=await import("./swapHorizontalMedium-BieiRJ2l.js");return{swapHorizontalMediumSvg:e}},__vite__mapDeps([60,1,2,3,4]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await c(async()=>{const{swapHorizontalBoldSvg:e}=await import("./swapHorizontalBold-CyW5t__e.js");return{swapHorizontalBoldSvg:e}},__vite__mapDeps([61,1,2,3,4]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await c(async()=>{const{swapHorizontalRoundedBoldSvg:e}=await import("./swapHorizontalRoundedBold-DMgolynA.js");return{swapHorizontalRoundedBoldSvg:e}},__vite__mapDeps([62,1,2,3,4]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await c(async()=>{const{swapVerticalSvg:e}=await import("./swapVertical-n82WCxib.js");return{swapVerticalSvg:e}},__vite__mapDeps([63,1,2,3,4]))).swapVerticalSvg,telegram:async()=>(await c(async()=>{const{telegramSvg:e}=await import("./telegram-DogXLYex.js");return{telegramSvg:e}},__vite__mapDeps([64,1,2,3,4]))).telegramSvg,threeDots:async()=>(await c(async()=>{const{threeDotsSvg:e}=await import("./three-dots-Dn8Oaz_W.js");return{threeDotsSvg:e}},__vite__mapDeps([65,1,2,3,4]))).threeDotsSvg,twitch:async()=>(await c(async()=>{const{twitchSvg:e}=await import("./twitch-DaP-VEDk.js");return{twitchSvg:e}},__vite__mapDeps([66,1,2,3,4]))).twitchSvg,twitter:async()=>(await c(async()=>{const{xSvg:e}=await import("./x-bLOdmGuD.js");return{xSvg:e}},__vite__mapDeps([67,1,2,3,4]))).xSvg,twitterIcon:async()=>(await c(async()=>{const{twitterIconSvg:e}=await import("./twitterIcon-CksBaAIo.js");return{twitterIconSvg:e}},__vite__mapDeps([68,1,2,3,4]))).twitterIconSvg,verify:async()=>(await c(async()=>{const{verifySvg:e}=await import("./verify-XvhiDQqo.js");return{verifySvg:e}},__vite__mapDeps([69,1,2,3,4]))).verifySvg,verifyFilled:async()=>(await c(async()=>{const{verifyFilledSvg:e}=await import("./verify-filled-Cq8nj7bq.js");return{verifyFilledSvg:e}},__vite__mapDeps([70,1,2,3,4]))).verifyFilledSvg,wallet:async()=>(await c(async()=>{const{walletSvg:e}=await import("./wallet-DULV6iHf.js");return{walletSvg:e}},__vite__mapDeps([71,1,2,3,4]))).walletSvg,walletConnect:async()=>(await c(async()=>{const{walletConnectSvg:e}=await import("./walletconnect-C7W7sMX0.js");return{walletConnectSvg:e}},__vite__mapDeps([72,1,2,3,4]))).walletConnectSvg,walletConnectLightBrown:async()=>(await c(async()=>{const{walletConnectLightBrownSvg:e}=await import("./walletconnect-C7W7sMX0.js");return{walletConnectLightBrownSvg:e}},__vite__mapDeps([72,1,2,3,4]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await c(async()=>{const{walletConnectBrownSvg:e}=await import("./walletconnect-C7W7sMX0.js");return{walletConnectBrownSvg:e}},__vite__mapDeps([72,1,2,3,4]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await c(async()=>{const{walletPlaceholderSvg:e}=await import("./wallet-placeholder-MxzBv3_n.js");return{walletPlaceholderSvg:e}},__vite__mapDeps([73,1,2,3,4]))).walletPlaceholderSvg,warningCircle:async()=>(await c(async()=>{const{warningCircleSvg:e}=await import("./warning-circle-Du5toHzq.js");return{warningCircleSvg:e}},__vite__mapDeps([74,1,2,3,4]))).warningCircleSvg,x:async()=>(await c(async()=>{const{xSvg:e}=await import("./x-bLOdmGuD.js");return{xSvg:e}},__vite__mapDeps([67,1,2,3,4]))).xSvg,info:async()=>(await c(async()=>{const{infoSvg:e}=await import("./info-v63aFjKB.js");return{infoSvg:e}},__vite__mapDeps([75,1,2,3,4]))).infoSvg,exclamationTriangle:async()=>(await c(async()=>{const{exclamationTriangleSvg:e}=await import("./exclamation-triangle-xgcX1ok4.js");return{exclamationTriangleSvg:e}},__vite__mapDeps([76,1,2,3,4]))).exclamationTriangleSvg,reown:async()=>(await c(async()=>{const{reownSvg:e}=await import("./reown-logo-CRyMQ2dA.js");return{reownSvg:e}},__vite__mapDeps([77,1,2,3,4]))).reownSvg};async function Te(e){if(lt.has(e))return lt.get(e);const i=(Tt[e]??Tt.copy)();return lt.set(e,i),i}let T=class extends D{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,b`${Pe(Te(this.name),b`<div class="fallback"></div>`)}`}};T.styles=[L,Rt,Ce];Y([h()],T.prototype,"size",void 0);Y([h()],T.prototype,"name",void 0);Y([h()],T.prototype,"color",void 0);Y([h()],T.prototype,"aspectRatio",void 0);T=Y([I("wui-icon")],T);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=Ut(class extends Mt{constructor(e){var t;if(super(e),e.type!==kt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return ht}}),Re=R`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var Z=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let O=class extends D{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,b`<slot class=${Oe(t)}></slot>`}};O.styles=[L,Re];Z([h()],O.prototype,"variant",void 0);Z([h()],O.prototype,"color",void 0);Z([h()],O.prototype,"align",void 0);Z([h()],O.prototype,"lineClamp",void 0);O=Z([I("wui-text")],O);const Le=R`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var m=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let f=class extends D{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,i=this.size==="lg",r=this.size==="xl",o=i?"12%":"16%",s=i?"xxs":r?"s":"3xl",n=this.background==="gray",a=this.background==="opaque",l=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let u=`var(--wui-color-${this.backgroundColor})`;return l?u=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(u=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${u};
       --local-bg-mix: ${l||n?"100%":o};
       --local-border-radius: var(--wui-border-radius-${s});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,b` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};f.styles=[L,Nt,Le];m([h()],f.prototype,"size",void 0);m([h()],f.prototype,"backgroundColor",void 0);m([h()],f.prototype,"iconColor",void 0);m([h()],f.prototype,"iconSize",void 0);m([h()],f.prototype,"background",void 0);m([h({type:Boolean})],f.prototype,"border",void 0);m([h()],f.prototype,"borderColor",void 0);m([h()],f.prototype,"icon",void 0);f=m([I("wui-icon-box")],f);const De=R`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var ot=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let U=class extends D{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,b`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};U.styles=[L,Rt,De];ot([h()],U.prototype,"src",void 0);ot([h()],U.prototype,"alt",void 0);ot([h()],U.prototype,"size",void 0);U=ot([I("wui-image")],U);const Ie=R`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var gt=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let q=class extends D{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return b`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};q.styles=[L,Ie];gt([h()],q.prototype,"variant",void 0);gt([h()],q.prototype,"size",void 0);q=gt([I("wui-tag")],q);const ze=R`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var vt=function(e,t,i,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let G=class extends D{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,b`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};G.styles=[L,ze];vt([h()],G.prototype,"color",void 0);vt([h()],G.prototype,"size",void 0);G=vt([I("wui-loading-spinner")],G);export{$ as U,pe as a,Me as b,I as c,Oe as d,Ut as e,Se as f,Q as i,h as n,Fe as o,Ne as r,je as x};
