!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=21)}([function(t,e,r){"use strict";r.r(e),r.d(e,"defaultConverter",(function(){return y})),r.d(e,"notEqual",(function(){return v})),r.d(e,"UpdatingElement",(function(){return w})),r.d(e,"customElement",(function(){return x})),r.d(e,"property",(function(){return k})),r.d(e,"internalProperty",(function(){return S})),r.d(e,"query",(function(){return D})),r.d(e,"queryAsync",(function(){return T})),r.d(e,"queryAll",(function(){return E})),r.d(e,"eventOptions",(function(){return N})),r.d(e,"queryAssignedNodes",(function(){return A})),r.d(e,"html",(function(){return p.h})),r.d(e,"svg",(function(){return p.l})),r.d(e,"TemplateResult",(function(){return p.e})),r.d(e,"SVGTemplateResult",(function(){return p.d})),r.d(e,"supportsAdoptingStyleSheets",(function(){return P})),r.d(e,"CSSResult",(function(){return F})),r.d(e,"unsafeCSS",(function(){return I})),r.d(e,"css",(function(){return M})),r.d(e,"LitElement",(function(){return z}));var i=r(7),n=r(3);function a(t,e){const{element:{content:r},parts:i}=t,n=document.createTreeWalker(r,133,null,!1);let a=s(i),o=i[a],d=-1,c=0;const l=[];let p=null;for(;n.nextNode();){d++;const t=n.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&c++;void 0!==o&&o.index===d;)o.index=null!==p?-1:o.index-c,a=s(i,a),o=i[a]}l.forEach(t=>t.parentNode.removeChild(t))}const o=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},s=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(Object(n.d)(e))return r}return-1};var d=r(10),c=r(9),l=r(8),p=r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=(t,e)=>`${t}--${e}`;let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const m=t=>e=>{const r=u(e.type,t);let i=c.a.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},c.a.set(r,i));let a=i.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(n.f);if(a=i.keyString.get(o),void 0===a){const r=e.getTemplateElement();h&&window.ShadyCSS.prepareTemplateDom(r,t),a=new n.a(e,r),i.keyString.set(o,a)}return i.stringsArray.set(e.strings,a),a},b=["html","svg"],f=new Set,g=(t,e,r)=>{f.add(t);const i=r?r.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:d}=n;if(0===d)return void window.ShadyCSS.prepareTemplateStyles(i,t);const l=document.createElement("style");for(let t=0;t<d;t++){const e=n[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{b.forEach(e=>{const r=c.a.get(u(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),a(t,r)})})})(t);const p=i.content;r?function(t,e,r=null){const{element:{content:i},parts:n}=t;if(null==r)return void i.appendChild(e);const a=document.createTreeWalker(i,133,null,!1);let d=s(n),c=0,l=-1;for(;a.nextNode();){l++;for(a.currentNode===r&&(c=o(e),r.parentNode.insertBefore(e,r));-1!==d&&n[d].index===l;){if(c>0){for(;-1!==d;)n[d].index+=c,d=s(n,d);return}d=s(n,d)}}}(r,l,p.firstChild):p.insertBefore(l,p.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const h=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(r){p.insertBefore(l,p.firstChild);const t=new Set;t.add(l),a(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v};class w extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const i=this._attributeNameForProperty(r,e);void 0!==i&&(this._attributeToPropertyMap.set(i,r),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=_){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||_}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=v){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,i=e.converter||y,n="function"==typeof i?i:i.fromAttribute;return n?n(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,i=e.converter;return(i&&i.toAttribute||y.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=_){const i=this.constructor,n=i._attributeNameForProperty(t,r);if(void 0!==n){const t=i._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(t);if(void 0!==i){const t=r.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}w.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),O=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function k(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):O(t,e)}function S(t){return k({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function D(t){return(e,r)=>{const i={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==r?C(i,e,r):j(i,e)}}function T(t){return(e,r)=>{const i={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==r?C(i,e,r):j(i,e)}}function E(t){return(e,r)=>{const i={get(){return this.renderRoot.querySelectorAll(t)},enumerable:!0,configurable:!0};return void 0!==r?C(i,e,r):j(i,e)}}const C=(t,e,r)=>{Object.defineProperty(e,r,t)},j=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function N(t){return(e,r)=>void 0!==r?((t,e,r)=>{Object.assign(e[r],t)})(t,e,r):((t,e)=>Object.assign(Object.assign({},e),{finisher(r){Object.assign(r.prototype[e.key],t)}}))(t,e)}function A(t="",e=!1){return(r,i)=>{const n={get(){const r="slot"+(t?`[name=${t}]`:""),i=this.renderRoot.querySelector(r);return i&&i.assignedNodes({flatten:e})},enumerable:!0,configurable:!0};return void 0!==i?C(n,r,i):j(n,r)}}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const P="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();class F{constructor(t,e){if(e!==R)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(P?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const I=t=>new F(String(t),R),M=(t,...e)=>{const r=e.reduce((e,r,i)=>e+(t=>{if(t instanceof F)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[i+1],t[0]);return new F(r,R)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const L={};class z extends w{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,r)=>t.reduceRight((t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t),r),r=e(t,new Set),i=[];r.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?P?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==L&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return L}}z.finalized=!0,z.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,a=d.a.has(e),o=h&&11===e.nodeType&&!!e.host,s=o&&!f.has(n),c=s?document.createDocumentFragment():e;if(Object(d.b)(t,c,Object.assign({templateFactory:m(n)},r)),s){const t=d.a.get(c);d.a.delete(c);const r=t.value instanceof l.a?t.value.template:void 0;g(n,c,r),Object(i.b)(e,e.firstChild),e.appendChild(c),d.a.set(e,t)}!a&&o&&window.ShadyCSS.styleElement(e.host)}},function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function n(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var a=function(){return(a=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function o(t,e,r,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,r,o):n(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o}},function(t,e,r){"use strict";r.d(e,"g",(function(){return o.a})),r.d(e,"j",(function(){return s.b})),r.d(e,"k",(function(){return s.c})),r.d(e,"i",(function(){return d.a})),r.d(e,"a",(function(){return i.b})),r.d(e,"b",(function(){return i.e})),r.d(e,"c",(function(){return i.g})),r.d(e,"m",(function(){return c.b})),r.d(e,"d",(function(){return a.a})),r.d(e,"e",(function(){return a.b})),r.d(e,"f",(function(){return l.c})),r.d(e,"h",(function(){return p})),r.d(e,"l",(function(){return u}));var i=r(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new class{handleAttributeExpressions(t,e,r,n){const a=e[0];if("."===a){return new i.f(t,e.slice(1),r).parts}if("@"===a)return[new i.d(t,e.slice(1),n.eventContext)];if("?"===a)return[new i.c(t,e.slice(1),r)];return new i.a(t,e,r).parts}handleTextExpression(t){return new i.e(t)}};var a=r(12),o=r(11),s=r(7),d=r(5),c=(r(10),r(9)),l=(r(8),r(3));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const p=(t,...e)=>new a.b(t,e,"html",n),u=(t,...e)=>new a.a(t,e,"svg",n)},function(t,e,r){"use strict";r.d(e,"f",(function(){return i})),r.d(e,"g",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"e",(function(){return p}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${n}`),o="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;const r=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,h=0;const{strings:m,values:{length:b}}=t;for(;h<b;){const t=s.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let i=0;for(let t=0;t<r;t++)d(e[t].name,o)&&i++;for(;i-- >0;){const e=m[h],r=p.exec(e)[2],i=r.toLowerCase()+o,n=t.getAttribute(i);t.removeAttribute(i);const s=n.split(a);this.parts.push({type:"attribute",index:u,name:r,strings:s}),h+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,n=e.split(a),s=n.length-1;for(let e=0;e<s;e++){let r,a=n[e];if(""===a)r=l();else{const t=p.exec(a);null!==t&&d(t[2],o)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),r=document.createTextNode(a)}i.insertBefore(r,t),this.parts.push({type:"node",index:++u})}""===n[s]?(i.insertBefore(l(),t),r.push(t)):t.data=n[s],h+=s}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(r.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=n.pop()}for(const t of r)t.parentNode.removeChild(t)}}const d=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return u})),r.d(e,"e",(function(){return h})),r.d(e,"c",(function(){return m})),r.d(e,"f",(function(){return b})),r.d(e,"g",(function(){return f})),r.d(e,"d",(function(){return y}));var i=r(11),n=r(7),a=r(5),o=r(8),s=r(12),d=r(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const c=t=>null===t||!("object"==typeof t||"function"==typeof t),l=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class p{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new u(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let i=0;i<e;i++){r+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(c(t)||!l(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a.a||c(t)&&t===this.value||(this.value=t,Object(i.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const t=this.value;this.value=a.a,t(this)}this.value!==a.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(d.c)()),this.endNode=t.appendChild(Object(d.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(d.c)()),t.__insert(this.endNode=Object(d.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(d.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(i.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}const t=this.__pendingValue;t!==a.a&&(c(t)?t!==this.value&&this.__commitText(t):t instanceof s.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):l(t)?this.__commitIterable(t):t===a.b?(this.value=a.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const r=new o.a(e,t.processor,this.options),i=r._clone();r.update(t.values),this.__commitNode(i),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,i=0;for(const n of t)r=e[i],void 0===r&&(r=new h(this.options),e.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(e[i-1])),r.setValue(n),r.commit(),i++;i<e.length&&(e.length=i,this.clear(r&&r.endNode))}clear(t=this.startNode){Object(n.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class m{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;Object(i.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}if(this.__pendingValue===a.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a.a}}class b extends p{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends u{}let g=!1;(()=>{try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class y{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(i.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}if(this.__pendingValue===a.a)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=v(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const v=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i={},n={}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var i=r(2);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class n{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const a=new WeakMap,o=Object(i.g)(t=>e=>{if(!(e instanceof i.a)||e instanceof i.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=e,{element:o}=r;let s=a.get(e);void 0===s&&(o.setAttribute("class",r.strings.join(" ")),a.set(e,s=new Set));const d=o.classList||new n(o);s.forEach(e=>{e in t||(d.remove(e),s.delete(e))});for(const e in t){const r=t[e];r!=s.has(e)&&(r?(d.add(e),s.add(e)):(d.remove(e),s.delete(e)))}"function"==typeof d.commit&&d.commit()})},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return a}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,r=null,i=null)=>{for(;e!==r;){const r=e.nextSibling;t.insertBefore(e,i),e=r}},a=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var i=r(7),n=r(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class a{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,a=document.createTreeWalker(t,133,null,!1);let o,s=0,d=0,c=a.nextNode();for(;s<r.length;)if(o=r[s],Object(n.d)(o)){for(;d<o.index;)d++,"TEMPLATE"===c.nodeName&&(e.push(c),a.currentNode=c.content),null===(c=a.nextNode())&&(a.currentNode=e.pop(),c=a.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return i.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}));var i=r(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function n(t){let e=a.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},a.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(i.f);return r=e.keyString.get(n),void 0===r&&(r=new i.a(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const a=new Map},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return s}));var i=r(7),n=r(4),a=r(9);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,s=(t,e,r)=>{let s=o.get(e);void 0===s&&(Object(i.b)(e,e.firstChild),o.set(e,s=new n.e(Object.assign({templateFactory:a.b},r))),s.appendInto(e)),s.setValue(t),s.commit()}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=t=>(...e)=>{const r=t(...e);return i.set(r,!0),r},a=t=>"function"==typeof t&&i.has(t)},function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return s}));var i=r(7),n=r(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=` ${n.f} `;class o{constructor(t,e,r,i){this.strings=t,this.values=e,this.type=r,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===t.indexOf("--\x3e",o+1);const s=n.e.exec(t);e+=null===s?t+(r?a:n.g):t.substr(0,s.index)+s[1]+s[2]+n.b+s[3]+n.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class s extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,r=e.firstChild;return e.removeChild(r),Object(i.c)(e,r.firstChild),t}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var i=r(0),n=r(15);r.d(e,"b",(function(){return n.a}));
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class a extends i.LitElement{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}));r(17);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/function i(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let n=!1;const a=()=>{},o={get passive(){return n=!0,!1}};document.addEventListener("x",a,o),document.removeEventListener("x",a);const s=n},function(t,e,r){"use strict";var i;function n(t,e){void 0===e&&(e=!1);var r,n=t.CSS;if("boolean"==typeof i&&!e)return i;if(!(n&&"function"==typeof n.supports))return!1;var a=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return r=a||o,e||(i=r),r}function a(t,e,r){if(!t)return{x:0,y:0};var i,n,a=e.x,o=e.y,s=a+r.left,d=o+r.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-s,n=c.changedTouches[0].pageY-d}else{var l=t;i=l.pageX-s,n=l.pageY-d}return{x:i,y:n}}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}))},function(t,e,r){"use strict";function i(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";var i=r(1),n=r(14),a={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},o={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},s={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},d=r(16),c=["touchstart","pointerdown","mousedown","keydown"],l=["touchend","pointerup","mouseup","contextmenu"],p=[],u=function(t){function e(r){var n=t.call(this,Object(i.a)(Object(i.a)({},e.defaultAdapter),r))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return Object(i.c)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,r=this.supportsPressRipple_();if(this.registerRootHandlers_(r),r){var i=e.cssClasses,n=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var r=e.cssClasses,i=r.ROOT,n=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(n),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var r=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(c.forEach((function(t){e.adapter.registerInteractionHandler(t,e.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):l.forEach((function(t){e.adapter.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;c.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),l.forEach((function(e){t.adapter.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,r=e.strings;Object.keys(r).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(r[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState_;if(!r.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))r.isActivated=!0,r.isProgrammatic=void 0===t,r.activationEvent=t,r.wasActivatedByPointer=!r.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&p.length>0&&p.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(p.push(t.target),this.registerDeactivationHandlers_(t)),r.wasElementMadeActive=this.checkElementMadeActive_(t),r.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){p=[],r.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(r.wasElementMadeActive=e.checkElementMadeActive_(t),r.wasElementMadeActive&&e.animateActivation_()),r.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,r=e.strings,i=r.VAR_FG_TRANSLATE_START,n=r.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates_(),u=p.startPoint,h=p.endPoint;c=u.x+"px, "+u.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(i,c),this.adapter.updateCssVariable(n,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),d)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,r=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(d.a)(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,r=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,n=i.hasDeactivationUXRun,a=i.isActivated;(n||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(r)}),s.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var r=Object(i.a)({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(r)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(r),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,r=t.wasElementMadeActive;(e||r)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var r=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?r:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var i=Math.floor(r*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize_=i-1:this.initialSize_=i,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,r=t.VAR_FG_SIZE,i=t.VAR_LEFT,n=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize_+"px"),this.adapter.updateCssVariable(a,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords_.top+"px"))},e}(n.a);e.a=u},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e._convertDecimalToClock=e._convertDateToTimeString=e._convertTimeStringToDate=e._calculateDateStringFromDate=void 0,e._calculateDateStringFromDate=t=>{if(t){const e=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return`${e}-${r<10?"0"+r:r}-${i<10?"0"+i:i}`}return""},e._convertTimeStringToDate=(t,e)=>{const r=new Date(e);return r.setHours(parseInt(t.split(":")[0])),r.setMinutes(parseInt(t.split(":")[1])),r.setSeconds(0,0),r},e._convertDateToTimeString=t=>{if(t){const e=t.getHours(),r=t.getMinutes();return`${e<10?"0"+e:e}:${r<10?"0"+r:r}`}return""},e._convertDecimalToClock=t=>{if(24===t)return"24:00";const e=new Date(0,0);e.setMinutes(60*+t);return e.toTimeString().slice(0,5)}},function(t,e,r){"use strict";var i=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(n,a){function o(t){try{d(i.next(t))}catch(t){a(t)}}function s(t){try{d(i.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}d((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),r(22),window.addEventListener("load",()=>{!function(){i(this,void 0,void 0,(function*(){if("serviceWorker"in navigator)try{yield navigator.serviceWorker.register("./sw.js")}catch(t){console.log("ServiceWorker registration failed."),console.log(t)}else console.log("Your browser does not support ServiceWorker")}))}()})},function(t,e,r){"use strict";var i=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,r,o):n(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o},n=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(n,a){function o(t){try{d(i.next(t))}catch(t){a(t)}}function s(t){try{d(i.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}d((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const a=r(0),o=r(37);r(36),r(33),r(34),r(35),r(32),r(25),r(27),r(28);const s=r(29),d=r(30),c=r(20),l=a.html`
  <footer>Made with love by <a href="${"https://open-wc.org/"}">${"PixelQuasar"}</a></footer>
`;let p=class extends(d.Provider(a.LitElement)){constructor(){super(),this.drawerOpen=!1,this.currentView="dayView",this._dayViewRoute=()=>{this.currentView="dayView"},this._viewTemplateRoute=()=>{this.currentView="viewTemplate"},this._notFoundRoute=()=>{this.currentView="notFoundView"},this.router=new s.default,this._installRoutes(),this._installListeners(),this._initiateState()}firstUpdated(){}_initiateState(){const t={currentDayData:void 0,defaultTimes:{startHours:void 0,endHours:void 0,startMinutes:void 0,endMinutes:void 0},saveDisabled:!1};this.state=Object.assign(Object.assign({},this.state),t)}_openDB(){return n(this,void 0,void 0,(function*(){const t=yield o.openDB("Days",1,{upgrade(t){t.createObjectStore("days")}});t?(this.db=t,console.log("dbloaded")):console.log("error loading db")}))}_installListeners(){this.addEventListener("time-change",t=>{const e=t.detail.startTime,r=t.detail.endTime;this.state=Object.assign(Object.assign({},this.state),{currentDayData:Object.assign(Object.assign({},this.state.currentDayData),{startTime:e,endTime:r}),saveDisabled:!1})}),this.addEventListener("add-break",t=>{const e=t.detail.breakString;this.state=Object.assign(Object.assign({},this.state),{currentDayData:Object.assign(Object.assign({},this.state.currentDayData),{breaks:[...this.state.currentDayData.breaks,e]}),saveDisabled:!1})}),this.addEventListener("delete-break",t=>{const e=t.detail.index;this.state=Object.assign(Object.assign({},this.state),{currentDayData:Object.assign(Object.assign({},this.state.currentDayData),{breaks:this.state.currentDayData.breaks.filter((t,r)=>r!==e)}),saveDisabled:!1})}),this.addEventListener("save-day",t=>{this._saveDay()}),this.addEventListener("delete-day",t=>{this._deleteDay()}),this.addEventListener("load-day",t=>{const e=t.detail.dateString;this._loadDay(e)})}connectedCallback(){super.connectedCallback(),console.log("app connected")}updated(t){}static get styles(){return a.css`
                header{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: monospace;
                }
                mwc-top-app-bar{
                    --mdc-theme-primary: transparent;
                    --mdc-theme-on-primary: black;
                }
            `}render(){return a.html`
            <mwc-drawer hasHeader type="modal" .open=${this.drawerOpen} @MDCDrawer:closed=${()=>this.drawerOpen=!1}>
                <span slot="title">Drawer Title</span>
                <span slot="subtitle">subtitle</span>
                <div>
                    ${this._renderDrawerContent()}
                </div>
                <div slot="appContent">
                        <mwc-top-app-bar>
                            <mwc-icon-button @click=${()=>this._toggleDrawer(this.drawerOpen)} slot="navigationIcon" icon="menu"></mwc-icon-button>
                        </mwc-top-app-bar>
                        <header class="container">
                            <h1>time contrast</h1>
                        </header>
                        ${this._renderCurrentView(this.currentView)}
                        <!-- ${l} -->
                </div>
            </mwc-drawer>
        `}_renderDrawerContent(){return a.html`
            <li @click=${()=>this._changeView({view:"dayView"})} >Day View</li>
            <li @click=${()=>this._changeView({view:"viewTemplate"})}>View Template</li>
            <li @click=${()=>this._changeView({view:"notFoundView"})}>Not Found Test</li>
        `}_renderCurrentView(t){switch(t){case"dayView":return a.html`
                    <day-view
                        .state=${this.state}
                    ></day-view>
                `;case"viewTemplate":return a.html`
                    <view-template></view-template>
                `;case"notFoundView":default:return a.html`
                    <not-found-view></not-found-view>
                `}}_installRoutes(){this.router.getParameter("view")||(this.router.setParameter("view","dayView"),this.router.applyParameters),this._applyRouteByParameters(),this.addEventListener("change-view",t=>{const e=t.detail.view;this.router.clearParameters();const r=t=>{this.router.setParameter("view",t),this.router.applyParameters(),this._applyRouteByParameters()};switch(e){case"dayView":case"viewTemplate":case"notFoundView":r(e)}})}_applyRouteByParameters(){switch(this.router.getParameter("view")){case"dayView":this._dayViewRoute();break;case"viewTemplate":this._viewTemplateRoute();break;case"notFoundView":default:this._notFoundRoute()}}_changeView(t){const e=new CustomEvent("change-view",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)}_toggleDrawer(t){this.drawerOpen=!t}_setDefaultTimes(t){const e=new Date;let r;if((null==t?void 0:t.length)>0){const i=new Date(t[t.length-1].startTime);r={startHours:i.getHours(),startMinutes:i.getMinutes(),endHours:e.getHours(),endMinutes:e.getMinutes()}}else r={startHours:8,startMinutes:0,endHours:e.getHours(),endMinutes:e.getMinutes()};this.state=Object.assign(Object.assign({},this.state),{defaultTimes:r})}_saveDay(){return n(this,void 0,void 0,(function*(){this.db||(yield this._openDB());const t=Object.assign(Object.assign({},this.state.currentDayData),{exists:!0}),e=c._calculateDateStringFromDate(t.startTime),r=yield this.db.put("days",Object.assign({},t),e);console.log("dbsave",r);const i=new Date;let n={startHours:t.startTime.getHours(),startMinutes:t.startTime.getMinutes(),endHours:i.getHours(),endMinutes:i.getMinutes()};this.state=Object.assign(Object.assign({},this.state),{currentDayData:t,defaultTimes:n,saveDisabled:!0})}))}_loadDay(t){var e;return n(this,void 0,void 0,(function*(){console.log(t);try{this.db||(yield this._openDB());let r=yield this.db.get("days",t);if(console.log("dbload",r),r)this.state=Object.assign(Object.assign({},this.state),{currentDayData:r,saveDisabled:!0});else{const r=new Date,i=null===(e=this.state)||void 0===e?void 0:e.defaultTimes;(null==i?void 0:i.startHours)||(i.startHours=8),(null==i?void 0:i.startMinutes)||(i.startMinutes=30),(null==i?void 0:i.endHours)||(i.endHours=r.getHours()),i.endMinutes||(i.endMinutes=r.getMinutes()),this.state=Object.assign(Object.assign({},this.state),{defaultTimes:i});const n=new Date(t);n.setHours(this.state.defaultTimes.startHours),n.setMinutes(this.state.defaultTimes.startMinutes);const a=new Date(t);a.setHours(this.state.defaultTimes.endHours),a.setMinutes(this.state.defaultTimes.endMinutes),a<n&&a.setDate(a.getDate()+1);let o={startTime:n,endTime:a,breaks:[],exists:!1};this.state=Object.assign(Object.assign({},this.state),{currentDayData:o,saveDisabled:!1})}}catch(t){console.log("failed loading day",t)}}))}_deleteDay(){return n(this,void 0,void 0,(function*(){const t=this.state.currentDayData,e=c._calculateDateStringFromDate(t.startTime);this.db||(yield this._openDB());let r=yield this.db.delete("days",e);console.log("dbload",r),this.state=Object.assign(Object.assign({},this.state),{currentDayData:void 0})}))}};i([a.property({type:Boolean})],p.prototype,"drawerOpen",void 0),i([a.property({type:String})],p.prototype,"currentView",void 0),i([a.property({attribute:!1})],p.prototype,"router",void 0),i([a.property({type:Object})],p.prototype,"state",void 0),i([a.property({attribute:!1})],p.prototype,"db",void 0),p=i([a.customElement("zeitkontrast-app")],p)},function(t,e){
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{var t,e,r;const i=Symbol(),n=Symbol(),a=Symbol(),o=Symbol(),s=Symbol(),d=Symbol(),c=Symbol(),l=Symbol(),p=Symbol(),u=Symbol(),h=Symbol(),m=Symbol(),b=Symbol();class f{constructor(){this[t]=[],this[e]=[],this[r]=new Set}destructor(){this[p](this[a]);this[i]=null,this[a]=null,this[n]=null}get top(){const t=this[i];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[d](t),this[i].push(t))}remove(t){const e=this[i].indexOf(t);return-1!==e&&(this[i].splice(e,1),e===this[i].length&&this[d](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[i].indexOf(t)}[(t=i,e=a,r=n,d)](t){const e=this[n],r=this[a];if(!t)return this[p](r),e.clear(),void(this[a]=[]);const i=this[u](t);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[a]=i;const o=this[h](t);if(!r.length)return void this[l](i,o,e);let s=r.length-1,d=i.length-1;for(;s>0&&d>0&&r[s]===i[d];)s--,d--;r[s]!==i[d]&&this[c](r[s],i[d]),s>0&&this[p](r.slice(0,s)),d>0&&this[l](i.slice(0,d),o,null)}[c](t,e){const r=t[o];this[m](t)&&!t.inert&&(t.inert=!0,r.add(t)),r.has(e)&&(e.inert=!1,r.delete(e)),e[s]=t[s],e[o]=r,t[s]=void 0,t[o]=void 0}[p](t){for(const e of t){e[s].disconnect(),e[s]=void 0;const t=e[o];for(const e of t)e.inert=!1;e[o]=void 0}}[l](t,e,r){for(const i of t){const t=i.parentNode,n=t.children,a=new Set;for(let t=0;t<n.length;t++){const o=n[t];o===i||!this[m](o)||e&&e.has(o)||(r&&o.inert?r.add(o):(o.inert=!0,a.add(o)))}i[o]=a;const d=new MutationObserver(this[b].bind(this));i[s]=d;let c=t;const l=c;l.__shady&&l.host&&(c=l.host),d.observe(c,{childList:!0})}}[b](t){const e=this[a],r=this[n];for(const i of t){const t=i.target.host||i.target,n=t===document.body?e.length:e.indexOf(t),a=e[n-1],s=a[o];for(let t=0;t<i.removedNodes.length;t++){const e=i.removedNodes[t];if(e===a)return console.info("Detected removal of the top Blocking Element."),void this.pop();s.has(e)&&(e.inert=!1,s.delete(e))}for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];this[m](e)&&(r&&e.inert?r.add(e):(e.inert=!0,s.add(e)))}}}[m](t){return!1===/^(style|template|script)$/.test(t.localName)}[u](t){const e=[];let r=t;for(;r&&r!==document.body;)if(r.nodeType===Node.ELEMENT_NODE&&e.push(r),r.assignedSlot){for(;r=r.assignedSlot;)e.push(r);r=e.pop()}else r=r.parentNode||r.host;return e}[h](t){const e=t.shadowRoot;if(!e)return null;const r=new Set;let i,n,a;const o=e.querySelectorAll("slot");if(o.length&&o[0].assignedNodes)for(i=0;i<o.length;i++)for(a=o[i].assignedNodes({flatten:!0}),n=0;n<a.length;n++)a[n].nodeType===Node.ELEMENT_NODE&&r.add(a[n]);return r}}document.$blockingElements=new f})()},function(t,e){!function(){if("undefined"==typeof window)return;const t=Array.prototype.slice,e=Element.prototype.matches||Element.prototype.msMatchesSelector,r=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");class i{constructor(t,e){this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}destructor(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(t){this._unmanageNode(t.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}get managedNodes(){return new Set(this._managedNodes)}get hasSavedAriaHidden(){return null!==this._savedAriaHidden}set savedAriaHidden(t){this._savedAriaHidden=t}get savedAriaHidden(){return this._savedAriaHidden}_makeSubtreeUnfocusable(t){a(t,t=>this._visitNode(t));let e=document.activeElement;if(!document.body.contains(t)){let r=t,i=void 0;for(;r;){if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i=r;break}r=r.parentNode}i&&(e=i.activeElement)}t.contains(e)&&(e.blur(),e===document.activeElement&&document.body.focus())}_visitNode(t){if(t.nodeType!==Node.ELEMENT_NODE)return;const i=t;i!==this._rootElement&&i.hasAttribute("inert")&&this._adoptInertRoot(i),(e.call(i,r)||i.hasAttribute("tabindex"))&&this._manageNode(i)}_manageNode(t){const e=this._inertManager.register(t,this);this._managedNodes.add(e)}_unmanageNode(t){const e=this._inertManager.deregister(t,this);e&&this._managedNodes.delete(e)}_unmanageSubtree(t){a(t,t=>this._unmanageNode(t))}_adoptInertRoot(t){let e=this._inertManager.getInertRoot(t);e||(this._inertManager.setInert(t,!0),e=this._inertManager.getInertRoot(t)),e.managedNodes.forEach((function(t){this._manageNode(t.node)}),this)}_onMutation(e,r){e.forEach((function(e){const r=e.target;if("childList"===e.type)t.call(e.addedNodes).forEach((function(t){this._makeSubtreeUnfocusable(t)}),this),t.call(e.removedNodes).forEach((function(t){this._unmanageSubtree(t)}),this);else if("attributes"===e.type)if("tabindex"===e.attributeName)this._manageNode(r);else if(r!==this._rootElement&&"inert"===e.attributeName&&r.hasAttribute("inert")){this._adoptInertRoot(r);const t=this._inertManager.getInertRoot(r);this._managedNodes.forEach((function(e){r.contains(e.node)&&t._manageNode(e.node)}))}}),this)}}class n{constructor(t,e){this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([e]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}destructor(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){const t=this._node;null!==this._savedTabIndex?t.setAttribute("tabindex",this._savedTabIndex):t.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete t.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}get destroyed(){return this._destroyed}_throwIfDestroyed(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}get hasSavedTabIndex(){return null!==this._savedTabIndex}get node(){return this._throwIfDestroyed(),this._node}set savedTabIndex(t){this._throwIfDestroyed(),this._savedTabIndex=t}get savedTabIndex(){return this._throwIfDestroyed(),this._savedTabIndex}ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;const t=this.node;if(e.call(t,r)){if(-1===t.tabIndex&&this.hasSavedTabIndex)return;t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex),t.setAttribute("tabindex","-1"),t.nodeType===Node.ELEMENT_NODE&&(t.focus=function(){},this._overrodeFocusMethod=!0)}else t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex,t.removeAttribute("tabindex"))}addInertRoot(t){this._throwIfDestroyed(),this._inertRoots.add(t)}removeInertRoot(t){this._throwIfDestroyed(),this._inertRoots.delete(t),0===this._inertRoots.size&&this.destructor()}}function a(t,e,r){if(t.nodeType==Node.ELEMENT_NODE){const i=t;e&&e(i);const n=i.shadowRoot;if(n)return void a(n,e,n);if("content"==i.localName){const t=i,n=t.getDistributedNodes?t.getDistributedNodes():[];for(let t=0;t<n.length;t++)a(n[t],e,r);return}if("slot"==i.localName){const t=i,n=t.assignedNodes?t.assignedNodes({flatten:!0}):[];for(let t=0;t<n.length;t++)a(n[t],e,r);return}}let i=t.firstChild;for(;null!=i;)a(i,e,r),i=i.nextSibling}function o(t){if(t.querySelector("style#inert-style, link#inert-style"))return;const e=document.createElement("style");e.setAttribute("id","inert-style"),e.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",t.appendChild(e)}const s=new class{constructor(t){if(!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),o(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}setInert(t,e){if(e){if(this._inertRoots.has(t))return;const e=new i(t,this);if(t.setAttribute("inert",""),this._inertRoots.set(t,e),!this._document.body.contains(t)){let e=t.parentNode;for(;e;)11===e.nodeType&&o(e),e=e.parentNode}}else{if(!this._inertRoots.has(t))return;this._inertRoots.get(t).destructor(),this._inertRoots.delete(t),t.removeAttribute("inert")}}getInertRoot(t){return this._inertRoots.get(t)}register(t,e){let r=this._managedNodes.get(t);return void 0!==r?r.addInertRoot(e):r=new n(t,e),this._managedNodes.set(t,r),r}deregister(t,e){const r=this._managedNodes.get(t);return r?(r.removeInertRoot(e),r.destroyed&&this._managedNodes.delete(t),r):null}_onDocumentLoaded(){t.call(this._document.querySelectorAll("[inert]")).forEach((function(t){this.setInert(t,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}_watchForInert(r,i){const n=this;r.forEach((function(r){switch(r.type){case"childList":t.call(r.addedNodes).forEach((function(r){if(r.nodeType!==Node.ELEMENT_NODE)return;const i=t.call(r.querySelectorAll("[inert]"));e.call(r,"[inert]")&&i.unshift(r),i.forEach((function(t){this.setInert(t,!0)}),n)}),n);break;case"attributes":if("inert"!==r.attributeName)return;const i=r.target,a=i.hasAttribute("inert");n.setInert(i,a)}}),this)}}(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){s.setInert(this,t)}})}()},function(t,e,r){"use strict";var i=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,r,o):n(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=r(0),a=r(20),o=r(26);let s=class extends(o.Requester(n.LitElement)){constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("day view connected")}updated(t){var e;t.has("state")&&((null===(e=this.state)||void 0===e?void 0:e.currentDayData)||this.loadDay(a._calculateDateStringFromDate(new Date)))}static get styles(){return n.css`
                :host {
                    font-family: Helvetica, "Helvetica Neue", Arial, sans-serif;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 50px;
                }
                .container{
                    box-sizing: border-box;
                    margin-left: 20px;
                    margin-right: 20px;
                    padding-right: 8px;
                    padding-left: 8px;
                    max-width: 100%;
                }
                label {
                    color: #9e9e9e;
                    position: relative;
                    top: 0;
                    left: 0;
                    font-size: 1rem;
                    cursor: text;
                    -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;
                    transition: color .2s ease-out, -webkit-transform .2s ease-out;
                    transition: transform .2s ease-out, color .2s ease-out;
                    transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;
                    -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
                    text-align: initial;
                    -webkit-transform: translateY(12px);
                    transform: translateY(12px);
                }
                input {
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid #9e9e9e;
                    border-radius: 0;
                    outline: none;
                    height: 3rem;
                    width: 100%;
                    font-size: 16px;
                    margin: 0 0 8px 0;
                    padding: 0;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                    -webkit-box-sizing: content-box;
                    box-sizing: content-box;
                    -webkit-transition: border .3s, -webkit-box-shadow .3s;
                    transition: border .3s, -webkit-box-shadow .3s;
                    transition: box-shadow .3s, border .3s;
                    transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
                }
                .pickers-container{
                    display: flex;
                    flex-direction: column;
                }
                .picker {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .break-picker-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .break-container{
                    display:flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: 1.5rem;
                }
                .work-result{
                    font-size: 2rem;
                }
                .worked-hours{
                    text-decoration: underline;
                }
                h2 {
                    margin-top: 70px;
                }
                mwc-button {
                --mdc-theme-primary: #D0021B;
                --mdc-theme-on-primary: white;
                }
        `}render(){var t,e,r,i,o,s,d,c,l,p,u,h;let m,b;return(null===(t=this.state)||void 0===t?void 0:t.currentDayData)&&(m=this._calculateNettoDecimal(this.state.currentDayData.startTime,this.state.currentDayData.endTime,this.state.currentDayData.breaks),b=this._calculateBruttoDecimal(this.state.currentDayData.startTime,this.state.currentDayData.endTime)),n.html`
        <main class="container">
            <label for="date">date</label>
            <app-datepicker
                id="date"
                .label=${"date"}
                .min=${"1970-01-01"}
                @datepicker-value-updated=${t=>this._changeDate(t)}
                .value=${a._calculateDateStringFromDate(null===(r=null===(e=this.state)||void 0===e?void 0:e.currentDayData)||void 0===r?void 0:r.startTime)}
            ></app-datepicker>
            <div class="pickers-container">
                <div class="picker">
                    <label for="time-start">start time</label>
                    <input 
                        @change=${t=>this._changeStartTime(t)}
                        .value=${a._convertDateToTimeString(null===(o=null===(i=this.state)||void 0===i?void 0:i.currentDayData)||void 0===o?void 0:o.startTime)}
                        id="time-start" 
                        type="time" 
                        required>
                </div>
                
                <div class="picker">
                    <label for="time-end">end time</label>
                    <input 
                        @change=${t=>this._changeEndTime(t)}
                        .value=${a._convertDateToTimeString(null===(d=null===(s=this.state)||void 0===s?void 0:s.currentDayData)||void 0===d?void 0:d.endTime)}
                        id="time-end" 
                        type="time" 
                        required>
                </div>
            </div>

            <div class="break-picker-container">
                <mwc-icon-button
                icon="add"
                @click=${this._addBreak}
                ></mwc-icon-button>
                <div class="picker">
                    <label for="break">add break</label>
                    <input 
                        .value=${"00:15"}
                        id="break" 
                        type="time" 
                        required>
                </div>
            </div>
            ${this.renderWorkedHours(m)}
            ${this._renderBreaks(null===(l=null===(c=this.state)||void 0===c?void 0:c.currentDayData)||void 0===l?void 0:l.breaks)}
            </main>
            <div>
                <mwc-button 
                    .disabled=${null===(p=this.state)||void 0===p?void 0:p.saveDisabled}
                    raised
                    @click=${()=>this.saveDay()} 
                    label="Save Day" 
                    icon="save">
                </mwc-button>
                <mwc-button 
                    .disabled=${!(null===(h=null===(u=this.state)||void 0===u?void 0:u.currentDayData)||void 0===h?void 0:h.exists)}
                    raised
                    @click=${()=>this.deleteDay()} 
                    label="Delete Day" 
                    icon="delete">
                </mwc-button>
            </div>
        `}renderWorkedHours(t){if(t)return n.html`
            <p class="work-result">You worked for <span class="worked-hours">${a._convertDecimalToClock(t)} hours</span>. (${t.toFixed(2)} decimal)</p>
            `}_renderBreaks(t){if(t)return n.html`
            ${t.length>0?n.html`
            <h2>breaks</h2>
            `:n.html``}
           ${t.map((t,e)=>n.html`
            <div class="break-container">
            <p>break ${e+1}: ${t}</p>
            <mwc-icon-button icon="delete" @click=${()=>this.deleteBreak(e)}></mwc-icon-button>
            </div>
            `)}
        `}_calculateBruttoDecimal(t,e){return Math.abs(e.getTime()-t.getTime())/36e5}_calculateNettoDecimal(t,e,r){let i,n=new Date(e);return r.forEach(t=>{this._substractTimeStringFromDate(n,t)}),i=n<t?Math.abs(t.getTime()-n.getTime())/36e5:Math.abs(n.getTime()-t.getTime())/36e5,i}_substractTimeStringFromDate(t,e){t.setHours(t.getHours()-parseInt(e.split(":")[0])),t.setMinutes(t.getMinutes()-parseInt(e.split(":")[1]))}_changeStartTime(t){const e=t.target.value,r=a._convertTimeStringToDate(e,this.state.currentDayData.startTime),i=new Date(this.state.currentDayData.endTime);i<r&&i.setDate(i.getDate()+1),this.setTime(r,i)}_changeEndTime(t){const e=t.target.value,r=a._convertTimeStringToDate(e,this.state.currentDayData.startTime);r<this.state.currentDayData.startTime&&r.setDate(r.getDate()+1),this.setTime(this.state.currentDayData.startTime,r)}_changeDate(t){const e=t.detail.value;this.loadDay(e)}_addBreak(){const t=this.shadowRoot.querySelector("#break");"00:00"!==t.value&&this.addBreak(t.value)}};i([n.property({type:Object})],s.prototype,"state",void 0),s=i([n.customElement("day-view")],s)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Requester=void 0,e.Requester=t=>class extends t{requestInstance(t){const e=new CustomEvent("request-instance",{detail:{key:t},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(e),e.detail.instance}setTime(t,e){const r=new CustomEvent("time-change",{detail:{startTime:t,endTime:e},bubbles:!0,composed:!0});this.dispatchEvent(r)}addBreak(t){const e=new CustomEvent("add-break",{detail:{breakString:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}deleteBreak(t){const e=new CustomEvent("delete-break",{detail:{index:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}saveDay(){const t=new CustomEvent("save-day",{bubbles:!0,composed:!0});this.dispatchEvent(t)}loadDay(t){const e=new CustomEvent("load-day",{detail:{dateString:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}deleteDay(){const t=new CustomEvent("delete-day",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}},function(t,e,r){"use strict";var i=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,r,o):n(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=r(0);let a=class extends n.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("view connected")}updated(t){}static get styles(){return n.css``}render(){return n.html`
            <h1>View Template</h1>
        `}};a=i([n.customElement("view-template")],a)},function(t,e,r){"use strict";var i=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,r,o):n(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=r(0);let a=class extends n.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("view connected")}updated(t){}static get styles(){return n.css``}render(){return n.html`
            <h1>Ooops, an error occured</h1>
        `}};a=i([n.customElement("not-found-view")],a)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.baseURL=this._calcBaseURL(),this.parameters=this._getParameters()}_calcBaseURL(){return location.protocol+"//"+location.host+location.pathname}_getParameters(){const t=location.search.substr(1).split("&"),e={};return t.forEach(t=>{const r=t.split("=");e[r[0]]=r[1]}),e}getParameter(t){return this.parameters[t]}setParameter(t,e){this.parameters[t]=e}clearParameters(){this.parameters={}}applyParameters(t){t||(t=document.title),window.history.pushState({},t,this._createNewURL(this.baseURL,this.parameters))}_createNewURL(t,e){let r=[];Object.keys(e).forEach(t=>{const i=e[t];r=i?[...r,`${t}=${i}`]:[...r,t]});const i=r.join("&");return i?`${t}?${i}`:t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Provider=void 0;const i=r(31);e.Provider=t=>class extends(i.PendingContainer(t)){constructor(){super(),this.__instances=new Map,this.addEventListener("request-instance",t=>{const e=t.detail.key;this.__instances.has(e)&&(t.detail.instance=this.__instances.get(e),t.stopPropagation())})}provideInstance(t,e){this.__instances.set(t,e)}}},function(t,e,r){"use strict";var i=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,r,o):n(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o},n=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(n,a){function o(t){try{d(i.next(t))}catch(t){a(t)}}function s(t){try{d(i.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}d((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PendingContainer=void 0;const a=r(0);e.PendingContainer=t=>{class e extends t{constructor(){super(),this.__hasPendingChildren=!1,this.__pendingCount=0,this.addEventListener("pending-state",t=>n(this,void 0,void 0,(function*(){this.__hasPendingChildren=!0,this.__pendingCount++,yield t.detail.promise,this.__pendingCount--,this.__hasPendingChildren=0!==this.__pendingCount})))}}return i([a.property({type:Boolean})],e.prototype,"__hasPendingChildren",void 0),i([a.property({type:Number})],e.prototype,"__pendingCount",void 0),e}},function(t,e,r){"use strict";r.r(e);const i=Intl&&Intl.DateTimeFormat,n=[38,33,36],a=[40,34,35],o=new Set([37,...n]),s=new Set([39,...a]),d=new Set([39,...n]),c=new Set([37,...a]),l=new Set([37,39,...n,...a]);var p=r(1),u=r(0),h=r(8),m=r(2);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=new WeakMap,f=Object(m.g)(t=>e=>{if(!(e instanceof m.b))throw new Error("cache can only be used in text bindings");let r=b.get(e);void 0===r&&(r=new WeakMap,b.set(e,r));const i=e.value;if(i instanceof h.a){if(t instanceof m.e&&i.template===e.options.templateFactory(t))return void e.setValue(t);{let t=r.get(i.template);void 0===t&&(t={instance:i,nodes:document.createDocumentFragment()},r.set(i.template,t)),Object(m.k)(t.nodes,e.startNode.nextSibling,e.endNode)}}if(t instanceof m.e){const i=e.options.templateFactory(t),n=r.get(i);void 0!==n&&(e.setValue(n.nodes),e.commit(),e.value=n.instance)}e.setValue(t)});var g=r(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=(t,e)=>{const r=t.startNode.parentNode,i=void 0===e?t.endNode:e.startNode,n=r.insertBefore(Object(m.f)(),i);r.insertBefore(Object(m.f)(),i);const a=new m.b(t.options);return a.insertAfterNode(n),a},v=(t,e)=>(t.setValue(e),t.commit(),t),_=(t,e,r)=>{const i=t.startNode.parentNode,n=r?r.startNode:t.endNode,a=e.endNode.nextSibling;a!==n&&Object(m.k)(i,e.startNode,a,n)},w=t=>{Object(m.j)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},x=(t,e,r)=>{const i=new Map;for(let n=e;n<=r;n++)i.set(t[n],n);return i},O=new WeakMap,k=new WeakMap,S=Object(m.g)((t,e,r)=>{let i;return void 0===r?r=e:void 0!==e&&(i=e),e=>{if(!(e instanceof m.b))throw new Error("repeat can only be used in text bindings");const n=O.get(e)||[],a=k.get(e)||[],o=[],s=[],d=[];let c,l,p=0;for(const e of t)d[p]=i?i(e,p):p,s[p]=r(e,p),p++;let u=0,h=n.length-1,b=0,f=s.length-1;for(;u<=h&&b<=f;)if(null===n[u])u++;else if(null===n[h])h--;else if(a[u]===d[b])o[b]=v(n[u],s[b]),u++,b++;else if(a[h]===d[f])o[f]=v(n[h],s[f]),h--,f--;else if(a[u]===d[f])o[f]=v(n[u],s[f]),_(e,n[u],o[f+1]),u++,f--;else if(a[h]===d[b])o[b]=v(n[h],s[b]),_(e,n[h],n[u]),h--,b++;else if(void 0===c&&(c=x(d,b,f),l=x(a,u,h)),c.has(a[u]))if(c.has(a[h])){const t=l.get(d[b]),r=void 0!==t?n[t]:null;if(null===r){const t=y(e,n[u]);v(t,s[b]),o[b]=t}else o[b]=v(r,s[b]),_(e,r,n[u]),n[t]=null;b++}else w(n[h]),h--;else w(n[u]),u++;for(;b<=f;){const t=y(e,o[f+1]);v(t,s[b]),o[b++]=t}for(;u<=h;){const t=n[u++];null!==t&&w(t)}O.set(e,o),k.set(e,d)}});function D(t,e,r){return new Date(Date.UTC(t,e,r))}const T=u.html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`,E=u.html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`,C=u.css`
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  background: none; /** NOTE: IE11 fix */
  color: inherit;
  border: none;
  font: inherit;
  text-align: left;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`,j=(u.css`
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  position: relative;
  display: inline-block;
  background: initial;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  text-decoration: none;
  outline: none;
}
a:focus,
a:focus.page-selected {
  text-decoration: underline;
}
`,u.css`
svg {
  display: block;
  min-width: var(--svg-icon-min-width, 24px);
  min-height: var(--svg-icon-min-height, 24px);
  fill: var(--svg-icon-fill, currentColor);
  pointer-events: none;
}
`,u.css`[hidden] { display: none !important; }`,u.css`
:host {
  display: block;

  /* --app-datepicker-width: 300px; */
  /* --app-datepicker-primary-color: #4285f4; */
  /* --app-datepicker-header-height: 80px; */
}

* {
  box-sizing: border-box;
}
`);function N(t,e){return+e-+t}function A({hasAltKey:t,keyCode:e,focusedDate:r,selectedDate:i,disabledDaysSet:n,disabledDatesSet:a,minTime:l,maxTime:p}){const u=r.getUTCFullYear(),h=r.getUTCMonth(),m=r.getUTCDate(),b=+r,f=i.getUTCFullYear(),g=i.getUTCMonth();let y=u,v=h,_=m,w=!0;switch((g!==h||f!==u)&&(y=f,v=g,_=1,w=34===e||33===e||35===e),w){case b===l&&o.has(e):case b===p&&s.has(e):break;case 38===e:_-=7;break;case 40===e:_+=7;break;case 37===e:_-=1;break;case 39===e:_+=1;break;case 34===e:t?y+=1:v+=1;break;case 33===e:t?y-=1:v-=1;break;case 35===e:v+=1,_=0;break;case 36===e:default:_=1}if(34===e||33===e){const t=D(y,v+1,0).getUTCDate();_>t&&(_=t)}return function({keyCode:t,disabledDaysSet:e,disabledDatesSet:r,focusedDate:i,maxTime:n,minTime:a}){const o=+i;let s=o<a,l=o>n;if(N(a,n)<864e5)return i;let p=s||l||e.has(i.getUTCDay())||r.has(o);if(!p)return i;let u=0,h=s===l?i:new Date(s?a-864e5:864e5+n);const m=h.getUTCFullYear(),b=h.getUTCMonth();let f=h.getUTCDate();for(;p;)(s||!l&&d.has(t))&&(f+=1),(l||!s&&c.has(t))&&(f-=1),h=D(m,b,f),u=+h,s||(s=u<a,s&&(h=new Date(a),u=+h,f=h.getUTCDate())),l||(l=u>n,l&&(h=new Date(n),u=+h,f=h.getUTCDate())),p=e.has(h.getUTCDay())||r.has(u);return h}({keyCode:e,maxTime:p,minTime:l,disabledDaysSet:n,disabledDatesSet:a,focusedDate:D(y,v,_)})}function P(t,e,r){return t.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}function R(t,e){return t.composedPath().find(t=>t instanceof HTMLElement&&e(t))}function F(t){return e=>t.format(e).replace(/\u200e/gi,"")}function I(t){const e=i(t,{timeZone:"UTC",weekday:"short",month:"short",day:"numeric"}),r=i(t,{timeZone:"UTC",day:"numeric"}),n=i(t,{timeZone:"UTC",year:"numeric",month:"short",day:"numeric"}),a=i(t,{timeZone:"UTC",year:"numeric",month:"long"}),o=i(t,{timeZone:"UTC",weekday:"long"}),s=i(t,{timeZone:"UTC",weekday:"narrow"}),d=i(t,{timeZone:"UTC",year:"numeric"});return{locale:t,dateFormat:F(e),dayFormat:F(r),fullDateFormat:F(n),longMonthYearFormat:F(a),longWeekdayFormat:F(o),narrowWeekdayFormat:F(s),yearFormat:F(d)}}function M(t,e){const r=function(t,e){const r=e.getUTCFullYear(),i=e.getUTCMonth(),n=e.getUTCDate(),a=e.getUTCDay();let o=a;return"first-4-day-week"===t&&(o=3),"first-day-of-year"===t&&(o=6),"first-full-week"===t&&(o=0),D(r,i,n-a+o)}(t,e),i=D(r.getUTCFullYear(),0,1),n=1+(+r-+i)/864e5;return Math.ceil(n/7)}function L(t){if(t>=0&&t<7)return Math.abs(t);return((t<0?7*Math.ceil(Math.abs(t)):0)+t)%7}function z(t,e,r){const i=L(t-e);return r?1+i:i}function H(t){const{dayFormat:e,fullDateFormat:r,locale:i,longWeekdayFormat:n,narrowWeekdayFormat:a,selectedDate:o,disabledDates:s,disabledDays:d,firstDayOfWeek:c,max:l,min:p,showWeekNumber:u,weekLabel:h,weekNumberType:m}=t,b=null==p?Number.MIN_SAFE_INTEGER:+p,f=null==l?Number.MAX_SAFE_INTEGER:+l,g=function(t){const{firstDayOfWeek:e=0,showWeekNumber:r=!1,weekLabel:i,longWeekdayFormat:n,narrowWeekdayFormat:a}=t||{},o=1+(e+(e<0?7:0))%7,s=i||"Wk",d=r?[{label:"Wk"===s?"Week":s,value:s}]:[];return Array.from(Array(7)).reduce((t,e,r)=>{const i=D(2017,0,o+r);return t.push({label:n(i),value:a(i)}),t},d)}({longWeekdayFormat:n,narrowWeekdayFormat:a,firstDayOfWeek:c,showWeekNumber:u,weekLabel:h}),y=t=>[i,t.toJSON(),null==s?void 0:s.join("_"),null==d?void 0:d.join("_"),c,null==l?void 0:l.toJSON(),null==p?void 0:p.toJSON(),u,h,m].filter(Boolean).join(":"),v=o.getUTCFullYear(),_=o.getUTCMonth(),w=[-1,0,1].map(t=>{const n=D(v,_+t,1),a=+D(v,_+t+1,0),o=y(n);if(a<b||+n>f)return{key:o,calendar:[],disabledDatesSet:new Set,disabledDaysSet:new Set};return{...function(t){const{dayFormat:e,fullDateFormat:r,locale:i="en-US",selectedDate:n,disabledDates:a=[],disabledDays:o=[],firstDayOfWeek:s=0,max:d,min:c,showWeekNumber:l=!1,weekLabel:p="Week",weekNumberType:u="first-4-day-week"}=t||{},h=L(s),m=n.getUTCFullYear(),b=n.getUTCMonth(),f=D(m,b,1),g=new Set(o.map(t=>z(t,h,l))),y=new Set(a.map(t=>+t)),v=[f.toJSON(),h,i,null==d?"":d.toJSON(),null==c?"":c.toJSON(),Array.from(g).join(","),Array.from(y).join(","),u].filter(Boolean).join(":"),_=z(f.getUTCDay(),h,l),w=null==c?+new Date("2000-01-01"):+c,x=null==d?+new Date("2100-12-31"):+d,O=l?8:7,k=D(m,1+b,0).getUTCDate(),S=[];let T=[],E=!1,C=1;for(const t of[0,1,2,3,4,5]){for(const i of[0,1,2,3,4,5,6].concat(7===O?[]:[7])){const n=i+t*O;if(!E&&l&&0===i){const e=M(u,D(m,b,C-(t<1?h:0))),r=`${p} ${e}`;T.push({fullDate:null,label:r,value:""+e,key:`${v}:${r}`,disabled:!0});continue}if(E||n<_){T.push({fullDate:null,label:"",value:"",key:`${v}:${n}`,disabled:!0});continue}const a=D(m,b,C),o=+a,s=g.has(i)||y.has(o)||o<w||o>x;s&&y.add(o),T.push({fullDate:a,label:r(a),value:e(a),key:`${v}:${a.toJSON()}`,disabled:s}),C+=1,C>k&&(E=!0)}S.push(T),T=[]}return{disabledDatesSet:y,calendar:S,disabledDaysSet:new Set(o.map(t=>L(t))),key:v}}({dayFormat:e,fullDateFormat:r,locale:i,disabledDates:s,disabledDays:d,firstDayOfWeek:c,max:l,min:p,showWeekNumber:u,weekNumberType:m,selectedDate:n}),key:o}}),x=[],O=new Set,k=new Set;for(const t of w){const{disabledDatesSet:e,disabledDaysSet:r,...i}=t;if(i.calendar.length>0){if(r.size>0)for(const t of r)k.add(t);if(e.size>0)for(const t of e)O.add(t)}x.push(i)}return{calendars:x,weekdays:g,disabledDatesSet:O,disabledDaysSet:k,key:y(o)}}function V(t){const e=null==t?new Date:new Date(t),r="string"==typeof t&&(/^\d{4}-\d{2}-\d{2}$/i.test(t)||/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|\+00:00|-00:00)$/i.test(t)),i="number"==typeof t&&t>0&&isFinite(t);let n=e.getFullYear(),a=e.getMonth(),o=e.getDate();return(r||i)&&(n=e.getUTCFullYear(),a=e.getUTCMonth(),o=e.getUTCDate()),D(n,a,o)}function B(t,e){return t.classList.contains(e)}function U(t,e){return!(null==t||!(e instanceof Date)||isNaN(+e))}function $(t){return t-Math.floor(t)>0?+t.toFixed(3):t}function W(t){return{passive:!0,handleEvent:t}}function q(t,e){const r="string"==typeof t&&t.length>0?t.split(/,\s*/i):[];return r.length?"function"==typeof e?r.map(e):r:[]}function Y(t){if(t instanceof Date&&!isNaN(+t)){const e=t.toJSON();return null==e?"":e.replace(/^(.+)T.+/i,"$1")}return""}function G(t,e){if(N(t,e)<864e5)return[];const r=t.getUTCFullYear();return Array.from(Array(e.getUTCFullYear()-r+1),(t,e)=>e+r)}function X(t,e,r){const i="number"==typeof t?t:+t,n=+e,a=+r;return i<n?n:i>a?a:t}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let K=!1;const Z=()=>{},J={get passive(){return K=!0,!1}};document.addEventListener("x",Z,J),document.removeEventListener("x",Z);const Q=K;function tt(t){const{clientX:e,clientY:r,pageX:i,pageY:n}=t,a=Math.max(i,e),o=Math.max(n,r),s=t.identifier||t.pointerId;return{x:a,y:o,id:null==s?0:s}}function et(t,e){const r=e.changedTouches;if(null==r)return{newPointer:tt(e),oldPointer:t};const i=Array.from(r,t=>tt(t));return{newPointer:null==t?i[0]:i.find(e=>e.id===t.id),oldPointer:t}}function rt(t,e,r){t.addEventListener(e,r,!!Q&&{passive:!0})}class it{constructor(t,e){this._element=t,this._startPointer=null;const{down:r,move:i,up:n}=e;this._down=this._onDown(r),this._move=this._onMove(i),this._up=this._onUp(n),t&&t.addEventListener&&(t.addEventListener("mousedown",this._down),rt(t,"touchstart",this._down),rt(t,"touchmove",this._move),rt(t,"touchend",this._up))}disconnect(){const t=this._element;t&&t.removeEventListener&&(t.removeEventListener("mousedown",this._down),t.removeEventListener("touchstart",this._down),t.removeEventListener("touchmove",this._move),t.removeEventListener("touchend",this._up))}_onDown(t){return e=>{e instanceof MouseEvent&&(this._element.addEventListener("mousemove",this._move),this._element.addEventListener("mouseup",this._up),this._element.addEventListener("mouseleave",this._up));const{newPointer:r}=et(this._startPointer,e);t(r,e),this._startPointer=r}}_onMove(t){return e=>{this._updatePointers(t,e)}}_onUp(t){return e=>{this._updatePointers(t,e,!0)}}_updatePointers(t,e,r){r&&e instanceof MouseEvent&&(this._element.removeEventListener("mousemove",this._move),this._element.removeEventListener("mouseup",this._up),this._element.removeEventListener("mouseleave",this._up));const{newPointer:i,oldPointer:n}=et(this._startPointer,e);t(i,n,e),this._startPointer=r?null:i}}class nt extends u.LitElement{constructor(){super(),this.firstDayOfWeek=0,this.showWeekNumber=!1,this.weekNumberType="first-4-day-week",this.landscape=!1,this.locale=i&&i().resolvedOptions&&i().resolvedOptions().locale||"en-US",this.disabledDays="",this.disabledDates="",this.weekLabel="Wk",this.inline=!1,this.dragRatio=.15,this._hasMin=!1,this._hasMax=!1,this._disabledDaysSet=new Set,this._disabledDatesSet=new Set,this._dx=-1/0,this._hasNativeWebAnimation="animate"in HTMLElement.prototype,this._updatingDateWithKey=!1;const t=V(),e=I(this.locale),r=Y(t),n=V("2100-12-31");this.value=r,this.startView="calendar",this._min=new Date(t),this._max=new Date(n),this._todayDate=t,this._maxDate=n,this._yearList=G(t,n),this._selectedDate=new Date(t),this._focusedDate=new Date(t),this._formatters=e}get startView(){return this._startView}set startView(t){const e=t||"calendar";if("calendar"!==e&&"yearList"!==e)return;const r=this._startView;this._startView=e,this.requestUpdate("startView",r)}get min(){return this._hasMin?Y(this._min):""}set min(t){const e=V(t),r=U(t,e);this._min=r?e:this._todayDate,this._hasMin=r,this.requestUpdate("min")}get max(){return this._hasMax?Y(this._max):""}set max(t){const e=V(t),r=U(t,e);this._max=r?e:this._maxDate,this._hasMax=r,this.requestUpdate("max")}get value(){return Y(this._focusedDate)}set value(t){const e=V(t),r=U(t,e)?e:this._todayDate;this._focusedDate=new Date(r),this._selectedDate=this._lastSelectedDate=new Date(r)}get datepickerBodyCalendarView(){return this.shadowRoot.querySelector(".datepicker-body__calendar-view")}get calendarsContainer(){return this.shadowRoot.querySelector(".calendars-container")}disconnectedCallback(){super.disconnectedCallback(),this._tracker&&(this._tracker.disconnect(),this._tracker=void 0)}render(){this._formatters.locale!==this.locale&&(this._formatters=I(this.locale));const t="yearList"===this._startView?this._renderDatepickerYearList():this._renderDatepickerCalendar(),e=this.inline?null:u.html`<div class="datepicker-header" part="header">${this._renderHeaderSelectorButton()}</div>`;return u.html`
    ${e}
    <div class="datepicker-body" part="body">${f(t)}</div>
    `}firstUpdated(){let t;t="calendar"===this._startView?this.inline?this.shadowRoot.querySelector(".btn__month-selector"):this._buttonSelectorYear:this._yearViewListItem,P(this,"datepicker-first-updated",{firstFocusableElement:t,value:this.value})}updated(t){const e=this._startView;if(t.has("min")||t.has("max")){this._yearList=G(this._min,this._max),"yearList"===e&&this.requestUpdate();const t=+this._min,r=+this._max;if(N(t,r)>864e5){const e=+this._focusedDate;let i=e;e<t&&(i=t),e>r&&(i=r),this.value=Y(new Date(i))}}if(t.has("_startView")||t.has("startView")){if("yearList"===e){const t=48*(this._selectedDate.getUTCFullYear()-this._min.getUTCFullYear()-2);!function(t,e){if(null==t.scrollTo){const{top:r,left:i}=e||{};t.scrollTop=r||0,t.scrollLeft=i||0}else t.scrollTo(e)}(this._yearViewFullList,{top:t,left:0})}if("calendar"===e&&null==this._tracker){const t=this.calendarsContainer;let e=!1,r=!1,i=!1;if(t){const n={down:()=>{i||(e=!0,this._dx=0)},move:(n,a)=>{if(i||!e)return;const o=this._dx,s=o<0&&B(t,"has-max-date")||o>0&&B(t,"has-min-date");!s&&Math.abs(o)>0&&e&&(r=!0,t.style.transform=`translateX(${$(o)}px)`),this._dx=s?0:o+(n.x-a.x)},up:async(n,a,o)=>{if(e&&r){const n=this._dx,a=t.getBoundingClientRect().width/3,o=Math.abs(n)>Number(this.dragRatio)*a,s=350,d="cubic-bezier(0, 0, .4, 1)",c=o?$(a*(n<0?-1:1)):0;i=!0,await async function(t,e){const{hasNativeWebAnimation:r=!1,keyframes:i=[],options:n={duration:100}}=e||{};if(Array.isArray(i)&&i.length)return new Promise(e=>{if(r){t.animate(i,n).onfinish=()=>e()}else{const[,r]=i||[],a=()=>{t.removeEventListener("transitionend",a),e()};t.addEventListener("transitionend",a),t.style.transitionDuration=n.duration+"ms",n.easing&&(t.style.transitionTimingFunction=n.easing),Object.keys(r).forEach(e=>{e&&(t.style[e]=r[e])})}})}(t,{hasNativeWebAnimation:this._hasNativeWebAnimation,keyframes:[{transform:`translateX(${n}px)`},{transform:`translateX(${c}px)`}],options:{duration:s,easing:d}}),o&&this._updateMonth(n<0?"next":"previous").handleEvent(),e=r=i=!1,this._dx=-1/0,t.removeAttribute("style"),P(this,"datepicker-animation-finished")}else e&&(this._updateFocusedDate(o),e=r=!1,this._dx=-1/0)}};this._tracker=new it(t,n)}}t.get("_startView")&&"calendar"===e&&this._focusElement('[part="year-selector"]')}this._updatingDateWithKey&&(this._focusElement('[part="calendars"]:nth-of-type(2) .day--focused'),this._updatingDateWithKey=!1)}_focusElement(t){const e=this.shadowRoot.querySelector(t);e&&e.focus()}_renderHeaderSelectorButton(){const{yearFormat:t,dateFormat:e}=this._formatters,r="calendar"===this.startView,i=this._focusedDate,n=e(i),a=t(i);return u.html`
    <button
      class="${Object(g.a)({"btn__year-selector":!0,selected:!r})}"
      part="year-selector"
      data-view="${"yearList"}"
      @click="${this._updateView("yearList")}">${a}</button>

    <div class="datepicker-toolbar" part="toolbar">
      <button
        class="${Object(g.a)({"btn__calendar-selector":!0,selected:r})}"
        part="calendar-selector"
        data-view="${"calendar"}"
        @click="${this._updateView("calendar")}">${n}</button>
    </div>
    `}_renderDatepickerYearList(){const{yearFormat:t}=this._formatters,e=this._focusedDate.getUTCFullYear();return u.html`
    <div class="datepicker-body__year-list-view" part="year-list-view">
      <div class="year-list-view__full-list" part="year-list" @click="${this._updateYear}">
      ${this._yearList.map(r=>u.html`<button
        class="${Object(g.a)({"year-list-view__list-item":!0,"year--selected":e===r})}"
        part="year"
        .year="${r}">${t(D(r,0,1))}</button>`)}</div>
    </div>
    `}_renderDatepickerCalendar(){const{longMonthYearFormat:t,dayFormat:e,fullDateFormat:r,longWeekdayFormat:i,narrowWeekdayFormat:n}=this._formatters,a=q(this.disabledDays,Number),o=q(this.disabledDates,V),s=this.showWeekNumber,d=this._focusedDate,c=this.firstDayOfWeek,l=V(),p=this._selectedDate,h=this._max,m=this._min,{calendars:b,disabledDaysSet:f,disabledDatesSet:y,weekdays:v}=H({dayFormat:e,fullDateFormat:r,longWeekdayFormat:i,narrowWeekdayFormat:n,firstDayOfWeek:c,disabledDays:a,disabledDates:o,locale:this.locale,selectedDate:p,showWeekNumber:this.showWeekNumber,weekNumberType:this.weekNumberType,max:h,min:m,weekLabel:this.weekLabel}),_=!b[0].calendar.length,w=!b[2].calendar.length,x=v.map(t=>u.html`<th
        class="calendar-weekday"
        part="calendar-weekday"
        role="columnheader"
        aria-label="${t.label}"
      >
        <div class="weekday" part="weekday">${t.value}</div>
      </th>`),O=S(b,t=>t.key,({calendar:e},r)=>{if(!e.length)return u.html`<div class="calendar-container" part="calendar"></div>`;const i="calendarcaption"+r,n=e[1][1].fullDate,a=1===r,o=a&&!this._isInVisibleMonth(d,p)?A({disabledDaysSet:f,disabledDatesSet:y,hasAltKey:!1,keyCode:36,focusedDate:d,selectedDate:p,minTime:+m,maxTime:+h}):d;return u.html`
      <div class="calendar-container" part="calendar">
        <table class="calendar-table" part="table" role="grid" aria-labelledby="${i}">
          <caption id="${i}">
            <div class="calendar-label" part="label">${n?t(n):""}</div>
          </caption>

          <thead role="rowgroup">
            <tr class="calendar-weekdays" part="weekdays" role="row">${x}</tr>
          </thead>

          <tbody role="rowgroup">${e.map(t=>u.html`<tr role="row">${t.map((t,e)=>{const{disabled:r,fullDate:i,label:n,value:c}=t;if(!i&&c&&s&&e<1)return u.html`<th
                      class="full-calendar__day weekday-label"
                      part="calendar-day"
                      scope="row"
                      role="rowheader"
                      abbr="${n}"
                      aria-label="${n}"
                    >${c}</th>`;if(!c||!i)return u.html`<td class="full-calendar__day day--empty" part="calendar-day"></td>`;const p=+new Date(i),h=+d===p,m=a&&o.getUTCDate()===Number(c);return u.html`
                  <td
                    tabindex="${m?"0":"-1"}"
                    class="${Object(g.a)({"full-calendar__day":!0,"day--disabled":r,"day--today":+l===p,"day--focused":!r&&h})}"
                    part="calendar-day"
                    role="gridcell"
                    aria-disabled="${r?"true":"false"}"
                    aria-label="${n}"
                    aria-selected="${h?"true":"false"}"
                    .fullDate="${i}"
                    .day="${c}"
                  >
                    <div class="calendar-day" part="day">${c}</div>
                  </td>
                  `})}</tr>`)}</tbody>
        </table>
      </div>
      `});return this._disabledDatesSet=y,this._disabledDaysSet=f,u.html`
    <div class="datepicker-body__calendar-view" part="calendar-view">
      <div class="calendar-view__month-selector" part="month-selectors">
        <div class="month-selector-container">${_?null:u.html`
          <button
            class="btn__month-selector"
            part="month-selector"
            aria-label="Previous month"
            @click="${this._updateMonth("previous")}"
          >${T}</button>
        `}</div>

        <div class="month-selector-container">${w?null:u.html`
          <button
            class="btn__month-selector"
            part="month-selector"
            aria-label="Next month"
            @click="${this._updateMonth("next")}"
          >${E}</button>
        `}</div>
      </div>

      <div
        class="${Object(g.a)({"calendars-container":!0,"has-min-date":_,"has-max-date":w})}"
        part="calendars"
        @keyup="${this._updateFocusedDateWithKeyboard}"
      >${O}</div>
    </div>
    `}_updateView(t){return W(()=>{"calendar"===t&&(this._selectedDate=this._lastSelectedDate=new Date(X(this._focusedDate,this._min,this._max))),this._startView=t})}_updateMonth(t){return W(()=>{if(null==this.calendarsContainer)return this.updateComplete;const e=this._lastSelectedDate||this._selectedDate,r=this._min,i=this._max,n="previous"===t,a=D(e.getUTCFullYear(),e.getUTCMonth()+(n?-1:1),1),o=a.getUTCFullYear(),s=a.getUTCMonth(),d=r.getUTCFullYear(),c=r.getUTCMonth(),l=i.getUTCFullYear(),p=i.getUTCMonth();return o<d||o<=d&&s<c||(o>l||o>=l&&s>p)||(this._lastSelectedDate=a,this._selectedDate=this._lastSelectedDate),this.updateComplete})}_updateYear(t){const e=R(t,t=>B(t,"year-list-view__list-item"));if(null==e)return;const r=X(new Date(this._focusedDate).setUTCFullYear(+e.year),this._min,this._max);this._selectedDate=this._lastSelectedDate=new Date(r),this._focusedDate=new Date(r),this._startView="calendar"}_updateFocusedDate(t){const e=R(t,t=>B(t,"full-calendar__day"));null==e||["day--empty","day--disabled","day--focused","weekday-label"].some(t=>B(e,t))||(this._focusedDate=new Date(e.fullDate),P(this,"datepicker-value-updated",{isKeypress:!1,value:this.value}))}_updateFocusedDateWithKeyboard(t){const e=t.keyCode;if(13===e||32===e)return P(this,"datepicker-value-updated",{keyCode:e,isKeypress:!0,value:this.value}),void(this._focusedDate=new Date(this._selectedDate));if(9===e||!l.has(e))return;const r=this._selectedDate,i=A({keyCode:e,selectedDate:r,disabledDatesSet:this._disabledDatesSet,disabledDaysSet:this._disabledDaysSet,focusedDate:this._focusedDate,hasAltKey:t.altKey,maxTime:+this._max,minTime:+this._min});this._isInVisibleMonth(i,r)||(this._selectedDate=this._lastSelectedDate=i),this._focusedDate=i,this._updatingDateWithKey=!0,P(this,"datepicker-value-updated",{keyCode:e,isKeypress:!0,value:this.value})}_isInVisibleMonth(t,e){const r=t.getUTCFullYear(),i=t.getUTCMonth(),n=e.getUTCFullYear(),a=e.getUTCMonth();return r===n&&i===a}}var at,ot;nt.styles=[j,C,u.css`
    :host {
      width: 312px;
      /** NOTE: Magic number as 16:9 aspect ratio does not look good */
      /* height: calc((var(--app-datepicker-width) / .66) - var(--app-datepicker-footer-height, 56px)); */
      background-color: var(--app-datepicker-bg-color, #fff);
      color: var(--app-datepicker-color, #000);
      border-radius:
        var(--app-datepicker-border-top-left-radius, 0)
        var(--app-datepicker-border-top-right-radius, 0)
        var(--app-datepicker-border-bottom-right-radius, 0)
        var(--app-datepicker-border-bottom-left-radius, 0);
      contain: content;
      overflow: hidden;
    }
    :host([landscape]) {
      display: flex;

      /** <iphone-5-landscape-width> - <standard-side-margin-width> */
      min-width: calc(568px - 16px * 2);
      width: calc(568px - 16px * 2);
    }

    .datepicker-header + .datepicker-body {
      border-top: 1px solid var(--app-datepicker-separator-color, #ddd);
    }
    :host([landscape]) > .datepicker-header + .datepicker-body {
      border-top: none;
      border-left: 1px solid var(--app-datepicker-separator-color, #ddd);
    }

    .datepicker-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: relative;
      padding: 16px 24px;
    }
    :host([landscape]) > .datepicker-header {
      /** :this.<one-liner-month-day-width> + :this.<side-padding-width> */
      min-width: calc(14ch + 24px * 2);
    }

    .btn__year-selector,
    .btn__calendar-selector {
      color: var(--app-datepicker-selector-color, rgba(0, 0, 0, .55));
      cursor: pointer;
      /* outline: none; */
    }
    .btn__year-selector.selected,
    .btn__calendar-selector.selected {
      color: currentColor;
    }

    /**
      * NOTE: IE11-only fix. This prevents formatted focused date from overflowing the container.
      */
    .datepicker-toolbar {
      width: 100%;
    }

    .btn__year-selector {
      font-size: 16px;
      font-weight: 700;
    }
    .btn__calendar-selector {
      font-size: 36px;
      font-weight: 700;
      line-height: 1;
    }

    .datepicker-body {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .datepicker-body__calendar-view {
      min-height: 56px;
    }

    .calendar-view__month-selector {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 8px;
      z-index: 1;
    }

    .month-selector-container {
      max-height: 56px;
      height: 100%;
    }
    .month-selector-container + .month-selector-container {
      margin: 0 0 0 auto;
    }

    .btn__month-selector {
      padding: calc((56px - 24px) / 2);
      /**
        * NOTE: button element contains no text, only SVG.
        * No extra height will incur with such setting.
        */
      line-height: 0;
    }
    .btn__month-selector > svg {
      fill: currentColor;
    }

    .calendars-container {
      display: flex;
      justify-content: center;

      position: relative;
      top: 0;
      left: calc(-100%);
      width: calc(100% * 3);
      transform: translateZ(0);
      will-change: transform;
      /**
        * NOTE: Required for Pointer Events API to work on touch devices.
        * Native \`pan-y\` action will be fired by the browsers since we only care about the
        * horizontal direction. This is great as vertical scrolling still works even when touch
        * event happens on a datepicker's calendar.
        */
      touch-action: pan-y;
      /* outline: none; */
    }

    .year-list-view__full-list {
      max-height: calc(48px * 7);
      overflow-y: auto;

      scrollbar-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35)) rgba(0, 0, 0, 0);
      scrollbar-width: thin;
    }
    .year-list-view__full-list::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(0, 0, 0, 0);
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb {
      background-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35));
      border-radius: 50px;
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb:hover {
      background-color: var(--app-datepicker-scrollbar-thumb-hover-bg-color, rgba(0, 0, 0, .5));
    }

    .calendar-weekdays > th,
    .weekday-label {
      color: var(--app-datepicker-weekday-color, rgba(0, 0, 0, .55));
      font-weight: 400;
      transform: translateZ(0);
      will-change: transform;
    }

    .calendar-container,
    .calendar-label,
    .calendar-table {
      width: 100%;
    }

    .calendar-container {
      position: relative;
      padding: 0 16px 16px;
    }

    .calendar-table {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;

      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }

    .calendar-label {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      font-weight: 500;
      text-align: center;
    }

    .calendar-weekday,
    .full-calendar__day {
      position: relative;
      width: calc(100% / 7);
      height: 0;
      padding: calc(100% / 7 / 2) 0;
      outline: none;
      text-align: center;
    }
    .full-calendar__day:not(.day--disabled):focus {
      outline: #000 dotted 1px;
      outline: -webkit-focus-ring-color auto 1px;
    }
    :host([showweeknumber]) .calendar-weekday,
    :host([showweeknumber]) .full-calendar__day {
      width: calc(100% / 8);
      padding-top: calc(100% / 8);
      padding-bottom: 0;
    }
    :host([showweeknumber]) th.weekday-label {
      padding: 0;
    }

    /**
      * NOTE: Interesting fact! That is ::after will trigger paint when dragging. This will trigger
      * layout and paint on **ONLY** affected nodes. This is much cheaper as compared to rendering
      * all :::after of all calendar day elements. When dragging the entire calendar container,
      * because of all layout and paint trigger on each and every ::after, this becomes a expensive
      * task for the browsers especially on low-end devices. Even though animating opacity is much
      * cheaper, the technique does not work here. Adding 'will-change' will further reduce overall
      * painting at the expense of memory consumption as many cells in a table has been promoted
      * a its own layer.
      */
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      transform: translateZ(0);
      will-change: transform;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label).day--focused::after,
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-accent-color, #1a73e8);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      cursor: pointer;
      pointer-events: auto;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .full-calendar__day.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after,
    .full-calendar__day.day--today.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after {
      opacity: 1;
    }

    .calendar-weekday > .weekday,
    .full-calendar__day > .calendar-day {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      color: currentColor;
      font-size: 14px;
      pointer-events: none;
      z-index: 1;
    }
    .full-calendar__day.day--today {
      color: var(--app-datepicker-accent-color, #1a73e8);
    }
    .full-calendar__day.day--focused,
    .full-calendar__day.day--today.day--focused {
      color: var(--app-datepicker-focused-day-color, #fff);
    }
    .full-calendar__day.day--empty,
    .full-calendar__day.weekday-label,
    .full-calendar__day.day--disabled > .calendar-day {
      pointer-events: none;
    }
    .full-calendar__day.day--disabled:not(.day--today) {
      color: var(--app-datepicker-disabled-day-color, rgba(0, 0, 0, .55));
    }

    .year-list-view__list-item {
      position: relative;
      width: 100%;
      padding: 12px 16px;
      text-align: center;
      /** NOTE: Reduce paint when hovering and scrolling, but this increases memory usage */
      /* will-change: opacity; */
      /* outline: none; */
    }
    .year-list-view__list-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-focused-year-bg-color, #000);
      opacity: 0;
      pointer-events: none;
    }
    .year-list-view__list-item:focus::after {
      opacity: .05;
    }
    .year-list-view__list-item.year--selected {
      color: var(--app-datepicker-accent-color, #1a73e8);
      font-size: 24px;
      font-weight: 500;
    }

    @media (any-hover: hover) {
      .btn__month-selector:hover,
      .year-list-view__list-item:hover {
        cursor: pointer;
      }
      .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
        opacity: .15;
      }
      .year-list-view__list-item:hover::after {
        opacity: .05;
      }
    }

    @supports (background: -webkit-canvas(squares)) {
      .calendar-container {
        padding: 56px 16px 16px;
      }

      table > caption {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        will-change: transform;
      }
    }
    `],Object(p.b)([Object(u.property)({type:Number,reflect:!0})],nt.prototype,"firstDayOfWeek",void 0),Object(p.b)([Object(u.property)({type:Boolean,reflect:!0})],nt.prototype,"showWeekNumber",void 0),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"weekNumberType",void 0),Object(p.b)([Object(u.property)({type:Boolean,reflect:!0})],nt.prototype,"landscape",void 0),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"startView",null),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"min",null),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"max",null),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"value",null),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"locale",void 0),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"disabledDays",void 0),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"disabledDates",void 0),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"weekLabel",void 0),Object(p.b)([Object(u.property)({type:Boolean})],nt.prototype,"inline",void 0),Object(p.b)([Object(u.property)({type:Number})],nt.prototype,"dragRatio",void 0),Object(p.b)([Object(u.property)({type:Date,attribute:!1})],nt.prototype,"_selectedDate",void 0),Object(p.b)([Object(u.property)({type:Date,attribute:!1})],nt.prototype,"_focusedDate",void 0),Object(p.b)([Object(u.property)({type:String,attribute:!1})],nt.prototype,"_startView",void 0),Object(p.b)([Object(u.query)(".year-list-view__full-list")],nt.prototype,"_yearViewFullList",void 0),Object(p.b)([Object(u.query)(".btn__year-selector")],nt.prototype,"_buttonSelectorYear",void 0),Object(p.b)([Object(u.query)(".year-list-view__list-item")],nt.prototype,"_yearViewListItem",void 0),Object(p.b)([Object(u.eventOptions)({passive:!0})],nt.prototype,"_updateYear",null),Object(p.b)([Object(u.eventOptions)({passive:!0})],nt.prototype,"_updateFocusedDateWithKeyboard",null),at="app-datepicker",ot=nt,window.customElements&&!window.customElements.get(at)&&window.customElements.define(at,ot)},function(t,e,r){"use strict";r.r(e),r.d(e,"Button",(function(){return v}));var i=r(1),n=r(0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const a=n.css`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let o=class extends n.LitElement{render(){return n.html`<slot></slot>`}};o.styles=a,o=Object(i.b)([Object(n.customElement)("mwc-icon")],o);var s=r(13),d=r(18),c=r(6),l=r(2);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,u=Object(l.g)(t=>e=>{if(!(e instanceof l.a)||e instanceof l.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=e,{style:i}=r.element;let n=p.get(e);void 0===n&&(i.cssText=r.strings.join(" "),p.set(e,n=new Set)),n.forEach(e=>{e in t||(n.delete(e),-1===e.indexOf("-")?i[e]=null:i.removeProperty(e))});for(const e in t)n.add(e),-1===e.indexOf("-")?i[e]=t[e]:i.setProperty(e,t[e])});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class h extends s.a{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=d.a}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}render(){const t={"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,hover:this.hovering,primary:this.primary,accent:this.accent,disabled:this.disabled,activated:this.activated,selected:this.selected};return n.html`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Object(c.a)(t)}"
          style="${u({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}Object(i.b)([Object(n.query)(".mdc-ripple-surface")],h.prototype,"mdcRoot",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"primary",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"accent",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"unbounded",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"disabled",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"activated",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"selected",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"hovering",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"bgFocused",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"fgActivation",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"fgDeactivation",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"fgScale",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"fgSize",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"translateStart",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"translateEnd",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"leftPos",void 0),Object(i.b)([Object(n.internalProperty)()],h.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const m=n.css`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none}.primary{--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}.accent{--mdc-ripple-color: var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface{top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden;--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface.activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface.activated.hover::before{opacity:.16;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated.mdc-ripple-upgraded--background-focused::before{opacity:.24;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.12)}.mdc-ripple-surface.selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface.selected.hover::before{opacity:.12;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected.mdc-ripple-upgraded--background-focused::before{opacity:.2;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.08)}.mdc-ripple-surface.disabled{--mdc-ripple-color: transparent}.mdc-ripple-surface::before{z-index:1;z-index:var(--m-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--m-ripple-z-index, 0)}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let b=class extends h{};b.styles=m,b=Object(i.b)([Object(n.customElement)("mwc-ripple")],b);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class f{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class g extends n.LitElement{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new f(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){const t=this.raised||this.unelevated;return n.html`${this.shouldRenderRipple?n.html`<mwc-ripple .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}`}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){const t={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return n.html`
      <button
          id="button"
          class="mdc-button ${Object(c.a)(t)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseup="${this.handleRippleDeactivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <slot></slot>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return n.html`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(i.b)([Object(n.property)({type:Boolean})],g.prototype,"raised",void 0),Object(i.b)([Object(n.property)({type:Boolean})],g.prototype,"unelevated",void 0),Object(i.b)([Object(n.property)({type:Boolean})],g.prototype,"outlined",void 0),Object(i.b)([Object(n.property)({type:Boolean})],g.prototype,"dense",void 0),Object(i.b)([Object(n.property)({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0),Object(i.b)([Object(n.property)({type:Boolean,attribute:"trailingicon"})],g.prototype,"trailingIcon",void 0),Object(i.b)([Object(n.property)({type:Boolean,reflect:!0})],g.prototype,"fullwidth",void 0),Object(i.b)([Object(n.property)({type:String})],g.prototype,"icon",void 0),Object(i.b)([Object(n.property)({type:String})],g.prototype,"label",void 0),Object(i.b)([Object(n.query)("#button")],g.prototype,"buttonElement",void 0),Object(i.b)([Object(n.queryAsync)("mwc-ripple")],g.prototype,"ripple",void 0),Object(i.b)([Object(n.internalProperty)()],g.prototype,"shouldRenderRipple",void 0),Object(i.b)([Object(n.eventOptions)({passive:!0})],g.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const y=n.css`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}:host{display:inline-flex;outline:none;vertical-align:top}:host([disabled]){pointer-events:none}:host([fullwidth]){width:100%}.mdc-button{flex:auto;overflow:hidden;padding:0 var(--mdc-button-horizontal-padding, 8px) 0 var(--mdc-button-horizontal-padding, 8px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding, 16px) 0 var(--mdc-button-horizontal-padding, 16px)}.mdc-button.mdc-button--raised mwc-ripple,.mdc-button.mdc-button--unelevated mwc-ripple{--mdc-ripple-color: var(--mdc-theme-on-primary, #fff);--mdc-ripple-hover-opacity: .08;--mdc-ripple-press-opacity: .24;--mdc-ripple-focus-opacity: .24}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px)) 0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));border-width:var(--mdc-button-outline-width, 1px);border-color:var(--mdc-button-outline-color, var(--mdc-theme-primary, #6200ee))}.mdc-button.mdc-button--outlined mwc-ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38));border-color:var(--mdc-button-disabled-outline-color, var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38)))}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let v=class extends g{};v.styles=y,v=Object(i.b)([Object(n.customElement)("mwc-button")],v)},function(t,e,r){"use strict";r.r(e),r.d(e,"Drawer",(function(){return b}));var i=r(1),n=r(0),a=(r(23),r(24),{ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"}),o={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},s=function(t){function e(r){var n=t.call(this,Object(i.a)(Object(i.a)({},e.defaultAdapter),r))||this;return n.animationFrame_=0,n.animationTimer_=0,n}return Object(i.c)(e,t),Object.defineProperty(e,"strings",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(a.OPEN),this.adapter.addClass(a.ANIMATE),this.runNextAnimationFrame_((function(){t.adapter.addClass(a.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(a.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(a.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(a.OPENING)||this.adapter.hasClass(a.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(a.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=a.OPENING,r=a.CLOSING,i=a.OPEN,n=a.ANIMATE,o=a.ROOT;this.isElement_(t.target)&&this.adapter.elementHasClass(t.target,o)&&(this.isClosing()?(this.adapter.removeClass(i),this.closed_(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened_(),this.adapter.notifyOpen()),this.adapter.removeClass(n),this.adapter.removeClass(e),this.adapter.removeClass(r))},e.prototype.opened_=function(){},e.prototype.closed_=function(){},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e.prototype.isElement_=function(t){return Boolean(t.classList)},e}(r(14).a),d=s,c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened_=function(){this.adapter.trapFocus()},e.prototype.closed_=function(){this.adapter.releaseFocus()},e}(s),l=r(13);var p=r(6);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const u=document.$blockingElements;class h extends l.a{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?c:d}createAdapter(){return Object.assign(Object.assign({},Object(l.b)(this.mdcRoot)),{elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(o.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(o.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{u.push(this),this.appContent.inert=!0},releaseFocus:()=>{u.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof c&&this.mdcFoundation.handleScrimClick()}render(){const t="dismissible"===this.type||"modal"===this.type,e="modal"===this.type,r=this.hasHeader?n.html`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"",i={"mdc-drawer--dismissible":t,"mdc-drawer--modal":e};return n.html`
      <aside class="mdc-drawer ${Object(p.a)(i)}">
        ${r}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${e?n.html`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",t=>this.mdcFoundation.handleKeydown(t)),this.mdcRoot.addEventListener("transitionend",t=>this.mdcFoundation.handleTransitionEnd(t))}updated(t){t.has("type")&&this.createFoundation()}}Object(i.b)([Object(n.query)(".mdc-drawer")],h.prototype,"mdcRoot",void 0),Object(i.b)([Object(n.query)(".mdc-drawer-app-content")],h.prototype,"appContent",void 0),Object(i.b)([(t=>(e,r)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,r)=>e.constructor._observers.set(r,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const r=this.constructor._observers.get(e);void 0!==r&&r.call(this,this[e],t)})}}e.constructor._observers.set(r,t)})((function(t){""!==this.type&&(t?this.mdcFoundation.open():this.mdcFoundation.close())})),Object(n.property)({type:Boolean,reflect:!0})],h.prototype,"open",void 0),Object(i.b)([Object(n.property)({type:Boolean})],h.prototype,"hasHeader",void 0),Object(i.b)([Object(n.property)({reflect:!0})],h.prototype,"type",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const m=n.css`.mdc-drawer{border-color:rgba(0,0,0,.12);background-color:#fff;border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0,0,0,.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let b=class extends h{};b.styles=m,b=Object(i.b)([Object(n.customElement)("mwc-drawer")],b)},function(t,e,r){"use strict";r.r(e),r.d(e,"TopAppBar",(function(){return y}));var i=r(1),n=r(0),a={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},o={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},s={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},d=function(t){function e(r){return t.call(this,Object(i.a)(Object(i.a)({},e.defaultAdapter),r))||this}return Object(i.c)(e,t),Object.defineProperty(e,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(r(14).a),c=d,l=function(t){function e(e){var r=t.call(this,e)||this;return r.wasDocked_=!0,r.isDockedShowing_=!0,r.currentAppBarOffsetTop_=0,r.isCurrentlyBeingResized_=!1,r.resizeThrottleId_=0,r.resizeDebounceId_=0,r.lastScrollPosition_=r.adapter.getViewportScrollY(),r.topAppBarHeight_=r.adapter.getTopAppBarHeight(),r}return Object(i.c)(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()}),o.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0}),o.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,r=this.currentAppBarOffsetTop_>t,i=e&&r;if(i)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==r)return this.isDockedShowing_=r,!0}return i},e.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-o.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler_=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},e}(d),p=r(13),u=r(15),h=r(6);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const m=u.b?{passive:!0}:void 0;class b extends p.a{constructor(){super(...arguments),this.mdcFoundationClass=c,this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(t){this.unregisterScrollListener();const e=this.scrollTarget;this._scrollTarget=t,this.updateRootPosition(),this.requestUpdate("scrollTarget",e),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const t=this.scrollTarget===window;this.mdcRoot.style.position=t?"":"absolute"}}render(){let t=n.html`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(t=n.html`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${t}</section>`),n.html`
      <header class="mdc-top-app-bar ${Object(h.a)(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:t}
        </section>
        ${this.centerTitle?t:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${Object(h.a)(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},Object(p.b)(this.mdcRoot)),{setStyle:(t,e)=>this.mdcRoot.style.setProperty(t,e),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(s.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,m)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}Object(i.b)([Object(n.query)(".mdc-top-app-bar")],b.prototype,"mdcRoot",void 0),Object(i.b)([Object(n.query)('slot[name="actionItems"]')],b.prototype,"_actionItemsSlot",void 0),Object(i.b)([Object(n.property)({type:Boolean})],b.prototype,"centerTitle",void 0),Object(i.b)([Object(n.property)()],b.prototype,"scrollTarget",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class f extends b{constructor(){super(...arguments),this.mdcFoundationClass=l,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,m)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}Object(i.b)([Object(n.property)({type:Boolean,reflect:!0})],f.prototype,"prominent",void 0),Object(i.b)([Object(n.property)({type:Boolean,reflect:!0})],f.prototype,"dense",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const g=n.css`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let y=class extends f{};y.styles=g,y=Object(i.b)([Object(n.customElement)("mwc-top-app-bar")],y)},function(t,e,r){"use strict";r.r(e),r.d(e,"IconButton",(function(){return _}));var i=r(1),n=r(0);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function a(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var r={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,r),t.document.removeEventListener("test",i,r)}catch(t){e=!1}return e}(t)&&{passive:!0}}var o=r(17),s=r(18),d=r(16),c=r(2);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const l=n.css`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`,p=Object(d.b)(window);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class u{constructor(t){this.foundation=t}startPress(){this.foundation.activate()}endPress(){this.foundation.deactivate()}startFocus(){this.foundation.handleFocus()}endFocus(){this.foundation.handleBlur()}destroy(){this.foundation.destroy()}setUnbounded(t){this.foundation.setUnbounded(t)}}const h=navigator.userAgent.match(/Safari/);let m=!1;const b=t=>{h&&!m&&(()=>{m=!0;const t=document.createElement("style"),e=new c.b({templateFactory:c.m});e.appendInto(t),e.setValue(l),e.commit(),document.head.appendChild(t)})();const e=t.surfaceNode,r=t.interactionNode||e;r.getRootNode()!==e.getRootNode()&&""===r.style.position&&(r.style.position="relative");const i={browserSupportsCssVars:()=>p,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>Object(o.a)(r,":active"),isSurfaceDisabled:()=>Boolean(r.hasAttribute("disabled")),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>r.contains(t),registerInteractionHandler:(t,e)=>r.addEventListener(t,e,a()),deregisterInteractionHandler:(t,e)=>r.removeEventListener(t,e,a()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,a()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,a()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,r)=>e.style.setProperty(t,r),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})},n=new s.a(i);return n.init(),new u(n)},f=new WeakMap,g=Object(c.g)((t={})=>e=>{const r=e.committer.element,i=t.interactionNode||r;let n=e.value;const a=f.get(n);void 0!==a&&a!==i&&(n.destroy(),n=c.i),n===c.i?(n=b(Object.assign({},t,{surfaceNode:r})),f.set(n,i),e.setValue(n)):(void 0!==t.unbounded&&n.setUnbounded(t.unbounded),void 0!==t.disabled&&n.setUnbounded(t.disabled)),!0===t.active?n.startPress():!1===t.active&&n.endPress()});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class y extends n.LitElement{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return n.html`<button
    .ripple="${g()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}Object(i.b)([Object(n.property)({type:Boolean,reflect:!0})],y.prototype,"disabled",void 0),Object(i.b)([Object(n.property)({type:String})],y.prototype,"icon",void 0),Object(i.b)([Object(n.property)({type:String})],y.prototype,"label",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const v=n.css`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:0.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let _=class extends y{};_.styles=v,_=Object(i.b)([Object(n.customElement)("mwc-icon-button")],_)},function(t,e,r){"use strict";r.r(e),r.d(e,"unwrap",(function(){return m})),r.d(e,"wrap",(function(){return h})),r.d(e,"deleteDB",(function(){return f})),r.d(e,"openDB",(function(){return b}));let i,n;const a=new WeakMap,o=new WeakMap,s=new WeakMap,d=new WeakMap,c=new WeakMap;let l={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||s.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return h(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(m(this),e),h(a.get(this))}:function(...e){return h(t.apply(m(this),e))}:function(e,...r){const i=t.call(m(this),e,...r);return s.set(i,e.sort?e.sort():[e]),h(i)}}function u(t){return"function"==typeof t?p(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise((e,r)=>{const i=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",a),t.removeEventListener("abort",a)},n=()=>{e(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",n),t.addEventListener("error",a),t.addEventListener("abort",a)});o.set(t,e)}(t),e=t,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,l):t);var e}function h(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,r)=>{const i=()=>{t.removeEventListener("success",n),t.removeEventListener("error",a)},n=()=>{e(h(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",n),t.addEventListener("error",a)});return e.then(e=>{e instanceof IDBCursor&&a.set(e,t)}).catch(()=>{}),c.set(e,t),e}(t);if(d.has(t))return d.get(t);const e=u(t);return e!==t&&(d.set(t,e),c.set(e,t)),e}const m=t=>c.get(t);function b(t,e,{blocked:r,upgrade:i,blocking:n,terminated:a}={}){const o=indexedDB.open(t,e),s=h(o);return i&&o.addEventListener("upgradeneeded",t=>{i(h(o.result),t.oldVersion,t.newVersion,h(o.transaction))}),r&&o.addEventListener("blocked",()=>r()),s.then(t=>{a&&t.addEventListener("close",()=>a()),n&&t.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}function f(t,{blocked:e}={}){const r=indexedDB.deleteDatabase(t);return e&&r.addEventListener("blocked",()=>e()),h(r).then(()=>{})}const g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function _(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(v.get(e))return v.get(e);const r=e.replace(/FromIndex$/,""),i=e!==r,n=y.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!n&&!g.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,n?"readwrite":"readonly");let o=a.store;i&&(o=o.index(e.shift()));const s=await o[r](...e);return n&&await a.done,s};return v.set(e,a),a}l=(t=>({...t,get:(e,r,i)=>_(e,r)||t.get(e,r,i),has:(e,r)=>!!_(e,r)||t.has(e,r)}))(l)}]);
//# sourceMappingURL=index.js.map