!function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=21)}([function(t,e,i){"use strict";i.r(e),i.d(e,"defaultConverter",(function(){return y})),i.d(e,"notEqual",(function(){return v})),i.d(e,"UpdatingElement",(function(){return w})),i.d(e,"customElement",(function(){return x})),i.d(e,"property",(function(){return O})),i.d(e,"internalProperty",(function(){return D})),i.d(e,"query",(function(){return S})),i.d(e,"queryAsync",(function(){return T})),i.d(e,"queryAll",(function(){return E})),i.d(e,"eventOptions",(function(){return N})),i.d(e,"queryAssignedNodes",(function(){return A})),i.d(e,"html",(function(){return p.h})),i.d(e,"svg",(function(){return p.l})),i.d(e,"TemplateResult",(function(){return p.e})),i.d(e,"SVGTemplateResult",(function(){return p.d})),i.d(e,"supportsAdoptingStyleSheets",(function(){return P})),i.d(e,"CSSResult",(function(){return F})),i.d(e,"unsafeCSS",(function(){return I})),i.d(e,"css",(function(){return M})),i.d(e,"LitElement",(function(){return z}));var r=i(7),n=i(3);function a(t,e){const{element:{content:i},parts:r}=t,n=document.createTreeWalker(i,133,null,!1);let a=s(r),o=r[a],d=-1,c=0;const l=[];let p=null;for(;n.nextNode();){d++;const t=n.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&c++;void 0!==o&&o.index===d;)o.index=null!==p?-1:o.index-c,a=s(r,a),o=r[a]}l.forEach(t=>t.parentNode.removeChild(t))}const o=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},s=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(Object(n.d)(e))return i}return-1};var d=i(10),c=i(9),l=i(8),p=i(2);
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
const u=(t,e)=>`${t}--${e}`;let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const m=t=>e=>{const i=u(e.type,t);let r=c.a.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},c.a.set(i,r));let a=r.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(n.f);if(a=r.keyString.get(o),void 0===a){const i=e.getTemplateElement();h&&window.ShadyCSS.prepareTemplateDom(i,t),a=new n.a(e,i),r.keyString.set(o,a)}return r.stringsArray.set(e.strings,a),a},b=["html","svg"],f=new Set,g=(t,e,i)=>{f.add(t);const r=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:d}=n;if(0===d)return void window.ShadyCSS.prepareTemplateStyles(r,t);const l=document.createElement("style");for(let t=0;t<d;t++){const e=n[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{b.forEach(e=>{const i=c.a.get(u(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),a(t,i)})})})(t);const p=r.content;i?function(t,e,i=null){const{element:{content:r},parts:n}=t;if(null==i)return void r.appendChild(e);const a=document.createTreeWalker(r,133,null,!1);let d=s(n),c=0,l=-1;for(;a.nextNode();){l++;for(a.currentNode===i&&(c=o(e),i.parentNode.insertBefore(e,i));-1!==d&&n[d].index===l;){if(c>0){for(;-1!==d;)n[d].index+=c,d=s(n,d);return}d=s(n,d)}}}(i,l,p.firstChild):p.insertBefore(l,p.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const h=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(i){p.insertBefore(l,p.firstChild);const t=new Set;t.add(l),a(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v};class w extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=_){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||_}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=v){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||y,n="function"==typeof r?r:r.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||y.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=_){const r=this.constructor,n=r._attributeNameForProperty(t,i);if(void 0!==n){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const r=this.constructor,n=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}w.finalized=!0;
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
const x=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),k=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function O(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):k(t,e)}function D(t){return O({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function S(t){return(e,i)=>{const r={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?C(r,e,i):j(r,e)}}function T(t){return(e,i)=>{const r={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?C(r,e,i):j(r,e)}}function E(t){return(e,i)=>{const r={get(){return this.renderRoot.querySelectorAll(t)},enumerable:!0,configurable:!0};return void 0!==i?C(r,e,i):j(r,e)}}const C=(t,e,i)=>{Object.defineProperty(e,i,t)},j=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function N(t){return(e,i)=>void 0!==i?((t,e,i)=>{Object.assign(e[i],t)})(t,e,i):((t,e)=>Object.assign(Object.assign({},e),{finisher(i){Object.assign(i.prototype[e.key],t)}}))(t,e)}function A(t="",e=!1){return(i,r)=>{const n={get(){const i="slot"+(t?`[name=${t}]`:""),r=this.renderRoot.querySelector(i);return r&&r.assignedNodes({flatten:e})},enumerable:!0,configurable:!0};return void 0!==r?C(n,i,r):j(n,i)}}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const P="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();class F{constructor(t,e){if(e!==R)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(P?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const I=t=>new F(String(t),R),M=(t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof F)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new F(i,R)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const L={};class z extends w{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?P?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==L&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return L}}z.finalized=!0,z.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,a=d.a.has(e),o=h&&11===e.nodeType&&!!e.host,s=o&&!f.has(n),c=s?document.createDocumentFragment():e;if(Object(d.b)(t,c,Object.assign({templateFactory:m(n)},i)),s){const t=d.a.get(c);d.a.delete(c);const i=t.value instanceof l.a?t.value.template:void 0;g(n,c,i),Object(r.b)(e,e.firstChild),e.appendChild(c),d.a.set(e,t)}!a&&o&&window.ShadyCSS.styleElement(e.host)}},function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));
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
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function n(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var a=function(){return(a=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function o(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o}},function(t,e,i){"use strict";i.d(e,"g",(function(){return o.a})),i.d(e,"j",(function(){return s.b})),i.d(e,"k",(function(){return s.c})),i.d(e,"i",(function(){return d.a})),i.d(e,"a",(function(){return r.b})),i.d(e,"b",(function(){return r.e})),i.d(e,"c",(function(){return r.g})),i.d(e,"m",(function(){return c.b})),i.d(e,"d",(function(){return a.a})),i.d(e,"e",(function(){return a.b})),i.d(e,"f",(function(){return l.c})),i.d(e,"h",(function(){return p})),i.d(e,"l",(function(){return u}));var r=i(4);
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
 */const n=new class{handleAttributeExpressions(t,e,i,n){const a=e[0];if("."===a){return new r.f(t,e.slice(1),i).parts}if("@"===a)return[new r.d(t,e.slice(1),n.eventContext)];if("?"===a)return[new r.c(t,e.slice(1),i)];return new r.a(t,e,i).parts}handleTextExpression(t){return new r.e(t)}};var a=i(12),o=i(11),s=i(7),d=i(5),c=(i(10),i(9)),l=(i(8),i(3));
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const p=(t,...e)=>new a.b(t,e,"html",n),u=(t,...e)=>new a.a(t,e,"svg",n)},function(t,e,i){"use strict";i.d(e,"f",(function(){return r})),i.d(e,"g",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"c",(function(){return l})),i.d(e,"e",(function(){return p}));
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
const r=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${n}`),o="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,h=0;const{strings:m,values:{length:b}}=t;for(;h<b;){const t=s.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)d(e[t].name,o)&&r++;for(;r-- >0;){const e=m[h],i=p.exec(e)[2],r=i.toLowerCase()+o,n=t.getAttribute(r);t.removeAttribute(r);const s=n.split(a);this.parts.push({type:"attribute",index:u,name:i,strings:s}),h+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,n=e.split(a),s=n.length-1;for(let e=0;e<s;e++){let i,a=n[e];if(""===a)i=l();else{const t=p.exec(a);null!==t&&d(t[2],o)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),i=document.createTextNode(a)}r.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===n[s]?(r.insertBefore(l(),t),i.push(t)):t.data=n[s],h+=s}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const d=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,i){"use strict";i.d(e,"a",(function(){return p})),i.d(e,"b",(function(){return u})),i.d(e,"e",(function(){return h})),i.d(e,"c",(function(){return m})),i.d(e,"f",(function(){return b})),i.d(e,"g",(function(){return f})),i.d(e,"d",(function(){return y}));var r=i(11),n=i(7),a=i(5),o=i(8),s=i(12),d=i(3);
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
const c=t=>null===t||!("object"==typeof t||"function"==typeof t),l=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class p{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new u(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let r=0;r<e;r++){i+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(c(t)||!l(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a.a||c(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=a.a,t(this)}this.value!==a.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(d.c)()),this.endNode=t.appendChild(Object(d.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(d.c)()),t.__insert(this.endNode=Object(d.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(d.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}const t=this.__pendingValue;t!==a.a&&(c(t)?t!==this.value&&this.__commitText(t):t instanceof s.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):l(t)?this.__commitIterable(t):t===a.b?(this.value=a.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const i=new o.a(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const n of t)i=e[r],void 0===i&&(i=new h(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(n),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){Object(n.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class m{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}if(this.__pendingValue===a.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a.a}}class b extends p{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends u{}let g=!1;(()=>{try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class y{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}if(this.__pendingValue===a.a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=v(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const v=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}));
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
const r={},n={}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=i(2);
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
 */class n{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const a=new WeakMap,o=Object(r.g)(t=>e=>{if(!(e instanceof r.a)||e instanceof r.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:o}=i;let s=a.get(e);void 0===s&&(o.setAttribute("class",i.strings.join(" ")),a.set(e,s=new Set));const d=o.classList||new n(o);s.forEach(e=>{e in t||(d.remove(e),s.delete(e))});for(const e in t){const i=t[e];i!=s.has(e)&&(i?(d.add(e),s.add(e)):(d.remove(e),s.delete(e)))}"function"==typeof d.commit&&d.commit()})},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return a}));
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
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,i=null,r=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,r),e=i}},a=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var r=i(7),n=i(3);
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
class a{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,a=document.createTreeWalker(t,133,null,!1);let o,s=0,d=0,c=a.nextNode();for(;s<i.length;)if(o=i[s],Object(n.d)(o)){for(;d<o.index;)d++,"TEMPLATE"===c.nodeName&&(e.push(c),a.currentNode=c.content),null===(c=a.nextNode())&&(a.currentNode=e.pop(),c=a.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}));var r=i(3);
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
 */function n(t){let e=a.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},a.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(r.f);return i=e.keyString.get(n),void 0===i&&(i=new r.a(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const a=new Map},function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return s}));var r=i(7),n=i(4),a=i(9);
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
const o=new WeakMap,s=(t,e,i)=>{let s=o.get(e);void 0===s&&(Object(r.b)(e,e.firstChild),o.set(e,s=new n.e(Object.assign({templateFactory:a.b},i))),s.appendInto(e)),s.setValue(t),s.commit()}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));
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
const r=new WeakMap,n=t=>(...e)=>{const i=t(...e);return r.set(i,!0),i},a=t=>"function"==typeof t&&r.has(t)},function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return s}));var r=i(7),n=i(3);
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
const a=` ${n.f} `;class o{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const s=n.e.exec(t);e+=null===s?t+(i?a:n.g):t.substr(0,s.index)+s[1]+s[2]+n.b+s[3]+n.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class s extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Object(r.c)(e,i.firstChild),t}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var r=i(0),n=i(15);i.d(e,"b",(function(){return n.a}));
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
class a extends r.LitElement{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));
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
var r=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}()},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s}));i(17);
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
*/function r(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let n=!1;const a=()=>{},o={get passive(){return n=!0,!1}};document.addEventListener("x",a,o),document.removeEventListener("x",a);const s=n},function(t,e,i){"use strict";var r;function n(t,e){void 0===e&&(e=!1);var i,n=t.CSS;if("boolean"==typeof r&&!e)return r;if(!(n&&"function"==typeof n.supports))return!1;var a=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=a||o,e||(r=i),i}function a(t,e,i){if(!t)return{x:0,y:0};var r,n,a=e.x,o=e.y,s=a+i.left,d=o+i.top;if("touchstart"===t.type){var c=t;r=c.changedTouches[0].pageX-s,n=c.changedTouches[0].pageY-d}else{var l=t;r=l.pageX-s,n=l.pageY-d}return{x:r,y:n}}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}))},function(t,e,i){"use strict";function r(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}i.d(e,"a",(function(){return r}))},function(t,e,i){"use strict";var r=i(1),n=i(14),a={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},o={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},s={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},d=i(16),c=["touchstart","pointerdown","mousedown","keydown"],l=["touchend","pointerup","mouseup","contextmenu"],p=[],u=function(t){function e(i){var n=t.call(this,Object(r.a)(Object(r.a)({},e.defaultAdapter),i))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return Object(r.c)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var r=e.cssClasses,n=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(r),t.adapter.removeClass(n),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(c.forEach((function(t){e.adapter.registerInteractionHandler(t,e.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):l.forEach((function(t){e.adapter.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;c.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),l.forEach((function(e){t.adapter.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(i[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&p.length>0&&p.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(p.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){p=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates_(),u=p.startPoint,h=p.endPoint;c=u.x+"px, "+u.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(n,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),d)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(d.a)(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,n=r.hasDeactivationUXRun,a=r.isActivated;(n||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(i)}),s.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=Object(r.a)({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize_=r-1:this.initialSize_=r,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize_+"px"),this.adapter.updateCssVariable(a,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords_.top+"px"))},e}(n.a);e.a=u},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLocale=e._convertDecimalToClock=e._convertDateToTimeString=e._convertTimeStringToDate=e._calculateDateStringFromDate=void 0,e._calculateDateStringFromDate=t=>{if(t){const e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return`${e}-${i<10?"0"+i:i}-${r<10?"0"+r:r}`}return""},e._convertTimeStringToDate=(t,e)=>{const i=new Date(e);return i.setHours(parseInt(t.split(":")[0])),i.setMinutes(parseInt(t.split(":")[1])),i.setSeconds(0,0),i},e._convertDateToTimeString=t=>{if(t){const e=t.getHours(),i=t.getMinutes();return`${e<10?"0"+e:e}:${i<10?"0"+i:i}`}return""},e._convertDecimalToClock=t=>{if(24===t)return"24:00";const e=new Date(0,0);e.setMinutes(60*+t);return e.toTimeString().slice(0,5)},e.getLocale=()=>null!=navigator.languages?navigator.languages[0]:navigator.language},function(t,e,i){"use strict";var r=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,a){function o(t){try{d(r.next(t))}catch(t){a(t)}}function s(t){try{d(r.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,s)}d((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),i(22),window.addEventListener("load",()=>{!function(){r(this,void 0,void 0,(function*(){if("serviceWorker"in navigator)try{yield navigator.serviceWorker.register("./sw.js")}catch(t){console.log("ServiceWorker registration failed."),console.log(t)}else console.log("Your browser does not support ServiceWorker")}))}()})},function(t,e,i){"use strict";var r=this&&this.__decorate||function(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o},n=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,a){function o(t){try{d(r.next(t))}catch(t){a(t)}}function s(t){try{d(r.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,s)}d((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const a=i(0),o=i(37);i(36),i(33),i(34),i(35),i(32),i(25),i(27),i(28);const s=i(29),d=i(30),c=i(20),l=a.html`
  <footer>Made with love by <a href="${"https://open-wc.org/"}">${"PixelQuasar"}</a></footer>
`;let p=class extends(d.Provider(a.LitElement)){constructor(){super(),this.drawerOpen=!1,this.currentView="dayView",this._dayViewRoute=()=>{this.currentView="dayView"},this._viewTemplateRoute=()=>{this.currentView="viewTemplate"},this._notFoundRoute=()=>{this.currentView="notFoundView"},this.router=new s.default,this._installRoutes(),this._installListeners(),this._initiateState()}firstUpdated(){}_initiateState(){const t={currentDayData:void 0,defaultTimes:{startHours:void 0,endHours:void 0,startMinutes:void 0,endMinutes:void 0},saveDisabled:!1,locale:c.getLocale()};this.state=Object.assign(Object.assign({},this.state),t)}_openDB(){return n(this,void 0,void 0,(function*(){const t=yield o.openDB("Days",1,{upgrade(t){t.createObjectStore("days")}});t?(this.db=t,console.log("dbloaded")):console.log("error loading db")}))}_installListeners(){this.addEventListener("time-change",t=>{const e=t.detail.startTime,i=t.detail.endTime;this.state=Object.assign(Object.assign({},this.state),{currentDayData:Object.assign(Object.assign({},this.state.currentDayData),{startTime:e,endTime:i}),saveDisabled:!1})}),this.addEventListener("add-break",t=>{const e=t.detail.breakString;this.state=Object.assign(Object.assign({},this.state),{currentDayData:Object.assign(Object.assign({},this.state.currentDayData),{breaks:[...this.state.currentDayData.breaks,e]}),saveDisabled:!1})}),this.addEventListener("delete-break",t=>{const e=t.detail.index;this.state=Object.assign(Object.assign({},this.state),{currentDayData:Object.assign(Object.assign({},this.state.currentDayData),{breaks:this.state.currentDayData.breaks.filter((t,i)=>i!==e)}),saveDisabled:!1})}),this.addEventListener("save-day",t=>{this._saveDay()}),this.addEventListener("delete-day",t=>{this._deleteDay()}),this.addEventListener("load-day",t=>{const e=t.detail.dateString;this._loadDay(e)})}connectedCallback(){super.connectedCallback(),console.log("app connected")}updated(t){}static get styles(){return a.css`
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
                        <mwc-top-app-bar centerTitle>
                            <mwc-icon-button @click=${()=>this._toggleDrawer(this.drawerOpen)} slot="navigationIcon" icon="menu"></mwc-icon-button>
                            <div slot="title">time contrast</div>
                        </mwc-top-app-bar>
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
                `}}_installRoutes(){this.router.getParameter("view")||(this.router.setParameter("view","dayView"),this.router.applyParameters),this._applyRouteByParameters(),this.addEventListener("change-view",t=>{const e=t.detail.view;this.router.clearParameters();const i=t=>{this.router.setParameter("view",t),this.router.applyParameters(),this._applyRouteByParameters()};switch(e){case"dayView":case"viewTemplate":case"notFoundView":i(e)}})}_applyRouteByParameters(){switch(this.router.getParameter("view")){case"dayView":this._dayViewRoute();break;case"viewTemplate":this._viewTemplateRoute();break;case"notFoundView":default:this._notFoundRoute()}}_changeView(t){const e=new CustomEvent("change-view",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)}_toggleDrawer(t){this.drawerOpen=!t}_setDefaultTimes(t){const e=new Date;let i;if((null==t?void 0:t.length)>0){const r=new Date(t[t.length-1].startTime);i={startHours:r.getHours(),startMinutes:r.getMinutes(),endHours:e.getHours(),endMinutes:e.getMinutes()}}else i={startHours:8,startMinutes:0,endHours:e.getHours(),endMinutes:e.getMinutes()};this.state=Object.assign(Object.assign({},this.state),{defaultTimes:i})}_saveDay(){return n(this,void 0,void 0,(function*(){this.db||(yield this._openDB());const t=Object.assign(Object.assign({},this.state.currentDayData),{exists:!0}),e=c._calculateDateStringFromDate(t.startTime),i=yield this.db.put("days",Object.assign({},t),e);console.log("dbsave",i);const r=new Date;let n={startHours:t.startTime.getHours(),startMinutes:t.startTime.getMinutes(),endHours:r.getHours(),endMinutes:r.getMinutes()};this.state=Object.assign(Object.assign({},this.state),{currentDayData:t,defaultTimes:n,saveDisabled:!0})}))}_loadDay(t){var e;return n(this,void 0,void 0,(function*(){console.log(t);try{this.db||(yield this._openDB());let i=yield this.db.get("days",t);if(console.log("dbload",i),i)this.state=Object.assign(Object.assign({},this.state),{currentDayData:i,saveDisabled:!0});else{const i=new Date,r=null===(e=this.state)||void 0===e?void 0:e.defaultTimes;(null==r?void 0:r.startHours)||(r.startHours=8),(null==r?void 0:r.startMinutes)||(r.startMinutes=30),(null==r?void 0:r.endHours)||(r.endHours=i.getHours()),r.endMinutes||(r.endMinutes=i.getMinutes()),this.state=Object.assign(Object.assign({},this.state),{defaultTimes:r});const n=new Date(t);n.setHours(this.state.defaultTimes.startHours),n.setMinutes(this.state.defaultTimes.startMinutes);const a=new Date(t);a.setHours(this.state.defaultTimes.endHours),a.setMinutes(this.state.defaultTimes.endMinutes),a<n&&a.setDate(a.getDate()+1);let o={startTime:n,endTime:a,breaks:[],exists:!1};this.state=Object.assign(Object.assign({},this.state),{currentDayData:o,saveDisabled:!1})}}catch(t){console.log("failed loading day",t)}}))}_deleteDay(){return n(this,void 0,void 0,(function*(){const t=this.state.currentDayData,e=c._calculateDateStringFromDate(t.startTime);this.db||(yield this._openDB());let i=yield this.db.delete("days",e);console.log("dbload",i),this.state=Object.assign(Object.assign({},this.state),{currentDayData:void 0})}))}};r([a.property({type:Boolean})],p.prototype,"drawerOpen",void 0),r([a.property({type:String})],p.prototype,"currentView",void 0),r([a.property({attribute:!1})],p.prototype,"router",void 0),r([a.property({type:Object})],p.prototype,"state",void 0),r([a.property({attribute:!1})],p.prototype,"db",void 0),p=r([a.customElement("zeitkontrast-app")],p)},function(t,e){
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
(()=>{var t,e,i;const r=Symbol(),n=Symbol(),a=Symbol(),o=Symbol(),s=Symbol(),d=Symbol(),c=Symbol(),l=Symbol(),p=Symbol(),u=Symbol(),h=Symbol(),m=Symbol(),b=Symbol();class f{constructor(){this[t]=[],this[e]=[],this[i]=new Set}destructor(){this[p](this[a]);this[r]=null,this[a]=null,this[n]=null}get top(){const t=this[r];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[d](t),this[r].push(t))}remove(t){const e=this[r].indexOf(t);return-1!==e&&(this[r].splice(e,1),e===this[r].length&&this[d](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[r].indexOf(t)}[(t=r,e=a,i=n,d)](t){const e=this[n],i=this[a];if(!t)return this[p](i),e.clear(),void(this[a]=[]);const r=this[u](t);if(r[r.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[a]=r;const o=this[h](t);if(!i.length)return void this[l](r,o,e);let s=i.length-1,d=r.length-1;for(;s>0&&d>0&&i[s]===r[d];)s--,d--;i[s]!==r[d]&&this[c](i[s],r[d]),s>0&&this[p](i.slice(0,s)),d>0&&this[l](r.slice(0,d),o,null)}[c](t,e){const i=t[o];this[m](t)&&!t.inert&&(t.inert=!0,i.add(t)),i.has(e)&&(e.inert=!1,i.delete(e)),e[s]=t[s],e[o]=i,t[s]=void 0,t[o]=void 0}[p](t){for(const e of t){e[s].disconnect(),e[s]=void 0;const t=e[o];for(const e of t)e.inert=!1;e[o]=void 0}}[l](t,e,i){for(const r of t){const t=r.parentNode,n=t.children,a=new Set;for(let t=0;t<n.length;t++){const o=n[t];o===r||!this[m](o)||e&&e.has(o)||(i&&o.inert?i.add(o):(o.inert=!0,a.add(o)))}r[o]=a;const d=new MutationObserver(this[b].bind(this));r[s]=d;let c=t;const l=c;l.__shady&&l.host&&(c=l.host),d.observe(c,{childList:!0})}}[b](t){const e=this[a],i=this[n];for(const r of t){const t=r.target.host||r.target,n=t===document.body?e.length:e.indexOf(t),a=e[n-1],s=a[o];for(let t=0;t<r.removedNodes.length;t++){const e=r.removedNodes[t];if(e===a)return console.info("Detected removal of the top Blocking Element."),void this.pop();s.has(e)&&(e.inert=!1,s.delete(e))}for(let t=0;t<r.addedNodes.length;t++){const e=r.addedNodes[t];this[m](e)&&(i&&e.inert?i.add(e):(e.inert=!0,s.add(e)))}}}[m](t){return!1===/^(style|template|script)$/.test(t.localName)}[u](t){const e=[];let i=t;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&e.push(i),i.assignedSlot){for(;i=i.assignedSlot;)e.push(i);i=e.pop()}else i=i.parentNode||i.host;return e}[h](t){const e=t.shadowRoot;if(!e)return null;const i=new Set;let r,n,a;const o=e.querySelectorAll("slot");if(o.length&&o[0].assignedNodes)for(r=0;r<o.length;r++)for(a=o[r].assignedNodes({flatten:!0}),n=0;n<a.length;n++)a[n].nodeType===Node.ELEMENT_NODE&&i.add(a[n]);return i}}document.$blockingElements=new f})()},function(t,e){!function(){if("undefined"==typeof window)return;const t=Array.prototype.slice,e=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");class r{constructor(t,e){this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}destructor(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(t){this._unmanageNode(t.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}get managedNodes(){return new Set(this._managedNodes)}get hasSavedAriaHidden(){return null!==this._savedAriaHidden}set savedAriaHidden(t){this._savedAriaHidden=t}get savedAriaHidden(){return this._savedAriaHidden}_makeSubtreeUnfocusable(t){a(t,t=>this._visitNode(t));let e=document.activeElement;if(!document.body.contains(t)){let i=t,r=void 0;for(;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){r=i;break}i=i.parentNode}r&&(e=r.activeElement)}t.contains(e)&&(e.blur(),e===document.activeElement&&document.body.focus())}_visitNode(t){if(t.nodeType!==Node.ELEMENT_NODE)return;const r=t;r!==this._rootElement&&r.hasAttribute("inert")&&this._adoptInertRoot(r),(e.call(r,i)||r.hasAttribute("tabindex"))&&this._manageNode(r)}_manageNode(t){const e=this._inertManager.register(t,this);this._managedNodes.add(e)}_unmanageNode(t){const e=this._inertManager.deregister(t,this);e&&this._managedNodes.delete(e)}_unmanageSubtree(t){a(t,t=>this._unmanageNode(t))}_adoptInertRoot(t){let e=this._inertManager.getInertRoot(t);e||(this._inertManager.setInert(t,!0),e=this._inertManager.getInertRoot(t)),e.managedNodes.forEach((function(t){this._manageNode(t.node)}),this)}_onMutation(e,i){e.forEach((function(e){const i=e.target;if("childList"===e.type)t.call(e.addedNodes).forEach((function(t){this._makeSubtreeUnfocusable(t)}),this),t.call(e.removedNodes).forEach((function(t){this._unmanageSubtree(t)}),this);else if("attributes"===e.type)if("tabindex"===e.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===e.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);const t=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(e){i.contains(e.node)&&t._manageNode(e.node)}))}}),this)}}class n{constructor(t,e){this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([e]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}destructor(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){const t=this._node;null!==this._savedTabIndex?t.setAttribute("tabindex",this._savedTabIndex):t.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete t.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}get destroyed(){return this._destroyed}_throwIfDestroyed(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}get hasSavedTabIndex(){return null!==this._savedTabIndex}get node(){return this._throwIfDestroyed(),this._node}set savedTabIndex(t){this._throwIfDestroyed(),this._savedTabIndex=t}get savedTabIndex(){return this._throwIfDestroyed(),this._savedTabIndex}ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;const t=this.node;if(e.call(t,i)){if(-1===t.tabIndex&&this.hasSavedTabIndex)return;t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex),t.setAttribute("tabindex","-1"),t.nodeType===Node.ELEMENT_NODE&&(t.focus=function(){},this._overrodeFocusMethod=!0)}else t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex,t.removeAttribute("tabindex"))}addInertRoot(t){this._throwIfDestroyed(),this._inertRoots.add(t)}removeInertRoot(t){this._throwIfDestroyed(),this._inertRoots.delete(t),0===this._inertRoots.size&&this.destructor()}}function a(t,e,i){if(t.nodeType==Node.ELEMENT_NODE){const r=t;e&&e(r);const n=r.shadowRoot;if(n)return void a(n,e,n);if("content"==r.localName){const t=r,n=t.getDistributedNodes?t.getDistributedNodes():[];for(let t=0;t<n.length;t++)a(n[t],e,i);return}if("slot"==r.localName){const t=r,n=t.assignedNodes?t.assignedNodes({flatten:!0}):[];for(let t=0;t<n.length;t++)a(n[t],e,i);return}}let r=t.firstChild;for(;null!=r;)a(r,e,i),r=r.nextSibling}function o(t){if(t.querySelector("style#inert-style, link#inert-style"))return;const e=document.createElement("style");e.setAttribute("id","inert-style"),e.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",t.appendChild(e)}const s=new class{constructor(t){if(!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),o(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}setInert(t,e){if(e){if(this._inertRoots.has(t))return;const e=new r(t,this);if(t.setAttribute("inert",""),this._inertRoots.set(t,e),!this._document.body.contains(t)){let e=t.parentNode;for(;e;)11===e.nodeType&&o(e),e=e.parentNode}}else{if(!this._inertRoots.has(t))return;this._inertRoots.get(t).destructor(),this._inertRoots.delete(t),t.removeAttribute("inert")}}getInertRoot(t){return this._inertRoots.get(t)}register(t,e){let i=this._managedNodes.get(t);return void 0!==i?i.addInertRoot(e):i=new n(t,e),this._managedNodes.set(t,i),i}deregister(t,e){const i=this._managedNodes.get(t);return i?(i.removeInertRoot(e),i.destroyed&&this._managedNodes.delete(t),i):null}_onDocumentLoaded(){t.call(this._document.querySelectorAll("[inert]")).forEach((function(t){this.setInert(t,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}_watchForInert(i,r){const n=this;i.forEach((function(i){switch(i.type){case"childList":t.call(i.addedNodes).forEach((function(i){if(i.nodeType!==Node.ELEMENT_NODE)return;const r=t.call(i.querySelectorAll("[inert]"));e.call(i,"[inert]")&&r.unshift(i),r.forEach((function(t){this.setInert(t,!0)}),n)}),n);break;case"attributes":if("inert"!==i.attributeName)return;const r=i.target,a=r.hasAttribute("inert");n.setInert(r,a)}}),this)}}(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){s.setInert(this,t)}})}()},function(t,e,i){"use strict";var r=this&&this.__decorate||function(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),a=i(20),o=i(26);let s=class extends(o.Requester(n.LitElement)){constructor(){super(),this.datePickerOpened=screen.width>865,this.displayDecimal=!1}connectedCallback(){super.connectedCallback(),console.log("day view connected")}updated(t){var e;t.has("state")&&((null===(e=this.state)||void 0===e?void 0:e.currentDayData)||this.loadDay(a._calculateDateStringFromDate(new Date)))}static get styles(){return n.css`
                :host {
                    font-family: Helvetica, "Helvetica Neue", Arial, sans-serif;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 20px;
                }
                main{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                }
                .grid{
                    display: grid;
                    grid-column-gap: 50px;
                    grid-row-gap: 50px;
                }
                @media (min-width: 865px){
                    .grid{
                    grid-template-columns: 1fr 1fr;
                    }
                    :host{
                        margin: 50px;
                    }
                }
                .grid-card{
                    width: 330px;
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
                    margin: 30px 0px 10px;
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
                .breaks-section{
                    display: grid;
                    grid-template-columns: 1fr 1fr;

                }
                .break-container{
                    display:flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: 1.5rem;
                    justify-content: space-between;
                }
                .break{
                    font-size: 1rem;
                }
                .work-result{
                    font-size: 1.3rem;
                }
                .worked-hours{
                    text-decoration: underline;
                    cursor: pointer;
                }
                h2 {
                    margin-top: 70px;
                }
                .buttons-container{
                    display: flex;
                    justify-content: space-between;
                    /* margin-top: auto; */
                }
                mwc-button {
                    --mdc-theme-primary: #D0021B;
                    --mdc-theme-on-primary: white;
                }
                .card {
                    background: #fff;
                    border-radius: 2px;
                    padding: 1rem;
                }

                .card-elevatable {
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                }

                /* .card-elevatable:hover {
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                } */
                .time-section{
                    display: flex;
                    flex-direction: column;
                }
                .calender-label{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                app-datepicker{
                    --app-datepicker-accent-color: #D0021B;
                }
        `}render(){var t,e,i,r,o,s,d,c,l,p,u,h,m,b;let f,g;return(null===(t=this.state)||void 0===t?void 0:t.currentDayData)&&(f=this._calculateNettoDecimal(this.state.currentDayData.startTime,this.state.currentDayData.endTime,this.state.currentDayData.breaks),g=this._calculateBruttoDecimal(this.state.currentDayData.startTime,this.state.currentDayData.endTime)),n.html`
        <main class="container">
            <div class="grid">
                <div class="date-section grid-card card card-elevatable">
                    <div @click=${()=>this._toggleDatePicker()} class="calender-label">
                        <label>calendar</label>
                        <mwc-icon-button icon="${this.datePickerOpened?"expand_less":"expand_more"}"></mwc-icon-button>
                    </div>
                    ${this.renderDatePicker()}
                </div>
                <div class="time-section grid-card card card-elevatable">
                    <h1>${this._calculateDateHeading(null===(i=null===(e=this.state)||void 0===e?void 0:e.currentDayData)||void 0===i?void 0:i.startTime)}</h1>
                    <div class="text-section">
                        ${this.renderWorkedHours(f)}
                    </div>
                    <div class="buttons-container">
                        <mwc-button 
                            id="dave-day"
                            .disabled=${null===(r=this.state)||void 0===r?void 0:r.saveDisabled}
                            raised
                            @click=${()=>this.saveDay()} 
                            label="Save Day" 
                            icon="save">
                        </mwc-button>
                        ${(null===(s=null===(o=this.state)||void 0===o?void 0:o.currentDayData)||void 0===s?void 0:s.exists)?n.html`
                            <mwc-button 
                                id="delete-day"
                                .disabled=${!(null===(c=null===(d=this.state)||void 0===d?void 0:d.currentDayData)||void 0===c?void 0:c.exists)}
                                @click=${()=>this.deleteDay()} 
                                label="Delete Day" 
                                icon="delete">
                            </mwc-button>
                        `:n.html``}
                    </div>
                    <div class="pickers-container">
                        <div class="picker">
                            <label for="time-start">start time</label>
                            <input 
                                @change=${t=>this._changeStartTime(t)}
                                .value=${a._convertDateToTimeString(null===(p=null===(l=this.state)||void 0===l?void 0:l.currentDayData)||void 0===p?void 0:p.startTime)}
                                id="time-start" 
                                type="time" 
                                required>
                        </div>
                        
                        <div class="picker">
                            <label for="time-end">end time</label>
                            <input 
                                @change=${t=>this._changeEndTime(t)}
                                .value=${a._convertDateToTimeString(null===(h=null===(u=this.state)||void 0===u?void 0:u.currentDayData)||void 0===h?void 0:h.endTime)}
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
                    ${this._renderBreaks(null===(b=null===(m=this.state)||void 0===m?void 0:m.currentDayData)||void 0===b?void 0:b.breaks)}
                </div>
            </div>
        </main>
        `}_calculateDateHeading(t){if(t){const e={weekday:"short",year:"numeric",month:"long",day:"numeric"};return new Intl.DateTimeFormat(this.state.locale,e).format(t)}}_toggleDatePicker(){this.datePickerOpened?this.datePickerOpened=!1:this.datePickerOpened=!0}renderDatePicker(){var t,e;if(this.datePickerOpened)return n.html`
                <app-datepicker
                    .inline=${!0}
                    id="date"
                    .label=${"date"}
                    .min=${"1970-01-01"}
                    @datepicker-value-updated=${t=>this._changeDate(t)}
                    .value=${a._calculateDateStringFromDate(null===(e=null===(t=this.state)||void 0===t?void 0:t.currentDayData)||void 0===e?void 0:e.startTime)}
                ></app-datepicker>
            `}renderWorkedHours(t){let e=a._convertDecimalToClock(t)+" hours";if(this.displayDecimal&&(e=t.toFixed(2)+" hours (decimal)"),t)return n.html`
            <p class="work-result">You worked for <span @click="${()=>this.displayDecimal=!this.displayDecimal}" class="worked-hours">${e}.</span></p>
            `}_renderBreaks(t){if((null==t?void 0:t.length)>0)return n.html`
                <div>
                    <div class="breaks-section">
                        ${t.length>0?n.html`
                        `:n.html``}
                        ${t.map((t,e)=>n.html`
                            <div class="break-container">
                            <p class="break">break ${e+1}: ${t}</p>
                            <mwc-icon-button icon="delete" @click=${()=>this.deleteBreak(e)}></mwc-icon-button>
                            </div>
                        `)}
                    </div>
                </div>
            `}_calculateBruttoDecimal(t,e){return Math.abs(e.getTime()-t.getTime())/36e5}_calculateNettoDecimal(t,e,i){let r,n=new Date(e);return i.forEach(t=>{this._substractTimeStringFromDate(n,t)}),r=n<t?Math.abs(t.getTime()-n.getTime())/36e5:Math.abs(n.getTime()-t.getTime())/36e5,r}_substractTimeStringFromDate(t,e){t.setHours(t.getHours()-parseInt(e.split(":")[0])),t.setMinutes(t.getMinutes()-parseInt(e.split(":")[1]))}_changeStartTime(t){const e=t.target.value,i=a._convertTimeStringToDate(e,this.state.currentDayData.startTime),r=new Date(this.state.currentDayData.endTime);r<i&&r.setDate(r.getDate()+1),this.setTime(i,r)}_changeEndTime(t){const e=t.target.value,i=a._convertTimeStringToDate(e,this.state.currentDayData.startTime);i<this.state.currentDayData.startTime&&i.setDate(i.getDate()+1),this.setTime(this.state.currentDayData.startTime,i)}_changeDate(t){const e=t.detail.value;this.loadDay(e)}_addBreak(){const t=this.shadowRoot.querySelector("#break");"00:00"!==t.value&&this.addBreak(t.value)}};r([n.property({type:Object})],s.prototype,"state",void 0),r([n.property({type:Boolean})],s.prototype,"datePickerOpened",void 0),r([n.property({type:Boolean})],s.prototype,"displayDecimal",void 0),s=r([n.customElement("day-view")],s)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Requester=void 0,e.Requester=t=>class extends t{requestInstance(t){const e=new CustomEvent("request-instance",{detail:{key:t},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(e),e.detail.instance}setTime(t,e){const i=new CustomEvent("time-change",{detail:{startTime:t,endTime:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}addBreak(t){const e=new CustomEvent("add-break",{detail:{breakString:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}deleteBreak(t){const e=new CustomEvent("delete-break",{detail:{index:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}saveDay(){const t=new CustomEvent("save-day",{bubbles:!0,composed:!0});this.dispatchEvent(t)}loadDay(t){const e=new CustomEvent("load-day",{detail:{dateString:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}deleteDay(){const t=new CustomEvent("delete-day",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}},function(t,e,i){"use strict";var r=this&&this.__decorate||function(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=i(0);let a=class extends n.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("view connected")}updated(t){}static get styles(){return n.css``}render(){return n.html`
            <h1>View Template</h1>
        `}};a=r([n.customElement("view-template")],a)},function(t,e,i){"use strict";var r=this&&this.__decorate||function(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=i(0);let a=class extends n.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback(),console.log("view connected")}updated(t){}static get styles(){return n.css``}render(){return n.html`
            <h1>Ooops, an error occured</h1>
        `}};a=r([n.customElement("not-found-view")],a)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.baseURL=this._calcBaseURL(),this.parameters=this._getParameters()}_calcBaseURL(){return location.protocol+"//"+location.host+location.pathname}_getParameters(){const t=location.search.substr(1).split("&"),e={};return t.forEach(t=>{const i=t.split("=");e[i[0]]=i[1]}),e}getParameter(t){return this.parameters[t]}setParameter(t,e){this.parameters[t]=e}clearParameters(){this.parameters={}}applyParameters(t){t||(t=document.title),window.history.pushState({},t,this._createNewURL(this.baseURL,this.parameters))}_createNewURL(t,e){let i=[];Object.keys(e).forEach(t=>{const r=e[t];i=r?[...i,`${t}=${r}`]:[...i,t]});const r=i.join("&");return r?`${t}?${r}`:t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Provider=void 0;const r=i(31);e.Provider=t=>class extends(r.PendingContainer(t)){constructor(){super(),this.__instances=new Map,this.addEventListener("request-instance",t=>{const e=t.detail.key;this.__instances.has(e)&&(t.detail.instance=this.__instances.get(e),t.stopPropagation())})}provideInstance(t,e){this.__instances.set(t,e)}}},function(t,e,i){"use strict";var r=this&&this.__decorate||function(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o},n=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,a){function o(t){try{d(r.next(t))}catch(t){a(t)}}function s(t){try{d(r.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,s)}d((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PendingContainer=void 0;const a=i(0);e.PendingContainer=t=>{class e extends t{constructor(){super(),this.__hasPendingChildren=!1,this.__pendingCount=0,this.addEventListener("pending-state",t=>n(this,void 0,void 0,(function*(){this.__hasPendingChildren=!0,this.__pendingCount++,yield t.detail.promise,this.__pendingCount--,this.__hasPendingChildren=0!==this.__pendingCount})))}}return r([a.property({type:Boolean})],e.prototype,"__hasPendingChildren",void 0),r([a.property({type:Number})],e.prototype,"__pendingCount",void 0),e}},function(t,e,i){"use strict";i.r(e);const r=Intl&&Intl.DateTimeFormat,n=[38,33,36],a=[40,34,35],o=new Set([37,...n]),s=new Set([39,...a]),d=new Set([39,...n]),c=new Set([37,...a]),l=new Set([37,39,...n,...a]);var p=i(1),u=i(0),h=i(8),m=i(2);
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
const b=new WeakMap,f=Object(m.g)(t=>e=>{if(!(e instanceof m.b))throw new Error("cache can only be used in text bindings");let i=b.get(e);void 0===i&&(i=new WeakMap,b.set(e,i));const r=e.value;if(r instanceof h.a){if(t instanceof m.e&&r.template===e.options.templateFactory(t))return void e.setValue(t);{let t=i.get(r.template);void 0===t&&(t={instance:r,nodes:document.createDocumentFragment()},i.set(r.template,t)),Object(m.k)(t.nodes,e.startNode.nextSibling,e.endNode)}}if(t instanceof m.e){const r=e.options.templateFactory(t),n=i.get(r);void 0!==n&&(e.setValue(n.nodes),e.commit(),e.value=n.instance)}e.setValue(t)});var g=i(6);
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
 */const y=(t,e)=>{const i=t.startNode.parentNode,r=void 0===e?t.endNode:e.startNode,n=i.insertBefore(Object(m.f)(),r);i.insertBefore(Object(m.f)(),r);const a=new m.b(t.options);return a.insertAfterNode(n),a},v=(t,e)=>(t.setValue(e),t.commit(),t),_=(t,e,i)=>{const r=t.startNode.parentNode,n=i?i.startNode:t.endNode,a=e.endNode.nextSibling;a!==n&&Object(m.k)(r,e.startNode,a,n)},w=t=>{Object(m.j)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},x=(t,e,i)=>{const r=new Map;for(let n=e;n<=i;n++)r.set(t[n],n);return r},k=new WeakMap,O=new WeakMap,D=Object(m.g)((t,e,i)=>{let r;return void 0===i?i=e:void 0!==e&&(r=e),e=>{if(!(e instanceof m.b))throw new Error("repeat can only be used in text bindings");const n=k.get(e)||[],a=O.get(e)||[],o=[],s=[],d=[];let c,l,p=0;for(const e of t)d[p]=r?r(e,p):p,s[p]=i(e,p),p++;let u=0,h=n.length-1,b=0,f=s.length-1;for(;u<=h&&b<=f;)if(null===n[u])u++;else if(null===n[h])h--;else if(a[u]===d[b])o[b]=v(n[u],s[b]),u++,b++;else if(a[h]===d[f])o[f]=v(n[h],s[f]),h--,f--;else if(a[u]===d[f])o[f]=v(n[u],s[f]),_(e,n[u],o[f+1]),u++,f--;else if(a[h]===d[b])o[b]=v(n[h],s[b]),_(e,n[h],n[u]),h--,b++;else if(void 0===c&&(c=x(d,b,f),l=x(a,u,h)),c.has(a[u]))if(c.has(a[h])){const t=l.get(d[b]),i=void 0!==t?n[t]:null;if(null===i){const t=y(e,n[u]);v(t,s[b]),o[b]=t}else o[b]=v(i,s[b]),_(e,i,n[u]),n[t]=null;b++}else w(n[h]),h--;else w(n[u]),u++;for(;b<=f;){const t=y(e,o[f+1]);v(t,s[b]),o[b++]=t}for(;u<=h;){const t=n[u++];null!==t&&w(t)}k.set(e,o),O.set(e,d)}});function S(t,e,i){return new Date(Date.UTC(t,e,i))}const T=u.html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`,E=u.html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`,C=u.css`
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
`);function N(t,e){return+e-+t}function A({hasAltKey:t,keyCode:e,focusedDate:i,selectedDate:r,disabledDaysSet:n,disabledDatesSet:a,minTime:l,maxTime:p}){const u=i.getUTCFullYear(),h=i.getUTCMonth(),m=i.getUTCDate(),b=+i,f=r.getUTCFullYear(),g=r.getUTCMonth();let y=u,v=h,_=m,w=!0;switch((g!==h||f!==u)&&(y=f,v=g,_=1,w=34===e||33===e||35===e),w){case b===l&&o.has(e):case b===p&&s.has(e):break;case 38===e:_-=7;break;case 40===e:_+=7;break;case 37===e:_-=1;break;case 39===e:_+=1;break;case 34===e:t?y+=1:v+=1;break;case 33===e:t?y-=1:v-=1;break;case 35===e:v+=1,_=0;break;case 36===e:default:_=1}if(34===e||33===e){const t=S(y,v+1,0).getUTCDate();_>t&&(_=t)}return function({keyCode:t,disabledDaysSet:e,disabledDatesSet:i,focusedDate:r,maxTime:n,minTime:a}){const o=+r;let s=o<a,l=o>n;if(N(a,n)<864e5)return r;let p=s||l||e.has(r.getUTCDay())||i.has(o);if(!p)return r;let u=0,h=s===l?r:new Date(s?a-864e5:864e5+n);const m=h.getUTCFullYear(),b=h.getUTCMonth();let f=h.getUTCDate();for(;p;)(s||!l&&d.has(t))&&(f+=1),(l||!s&&c.has(t))&&(f-=1),h=S(m,b,f),u=+h,s||(s=u<a,s&&(h=new Date(a),u=+h,f=h.getUTCDate())),l||(l=u>n,l&&(h=new Date(n),u=+h,f=h.getUTCDate())),p=e.has(h.getUTCDay())||i.has(u);return h}({keyCode:e,maxTime:p,minTime:l,disabledDaysSet:n,disabledDatesSet:a,focusedDate:S(y,v,_)})}function P(t,e,i){return t.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:!0,composed:!0}))}function R(t,e){return t.composedPath().find(t=>t instanceof HTMLElement&&e(t))}function F(t){return e=>t.format(e).replace(/\u200e/gi,"")}function I(t){const e=r(t,{timeZone:"UTC",weekday:"short",month:"short",day:"numeric"}),i=r(t,{timeZone:"UTC",day:"numeric"}),n=r(t,{timeZone:"UTC",year:"numeric",month:"short",day:"numeric"}),a=r(t,{timeZone:"UTC",year:"numeric",month:"long"}),o=r(t,{timeZone:"UTC",weekday:"long"}),s=r(t,{timeZone:"UTC",weekday:"narrow"}),d=r(t,{timeZone:"UTC",year:"numeric"});return{locale:t,dateFormat:F(e),dayFormat:F(i),fullDateFormat:F(n),longMonthYearFormat:F(a),longWeekdayFormat:F(o),narrowWeekdayFormat:F(s),yearFormat:F(d)}}function M(t,e){const i=function(t,e){const i=e.getUTCFullYear(),r=e.getUTCMonth(),n=e.getUTCDate(),a=e.getUTCDay();let o=a;return"first-4-day-week"===t&&(o=3),"first-day-of-year"===t&&(o=6),"first-full-week"===t&&(o=0),S(i,r,n-a+o)}(t,e),r=S(i.getUTCFullYear(),0,1),n=1+(+i-+r)/864e5;return Math.ceil(n/7)}function L(t){if(t>=0&&t<7)return Math.abs(t);return((t<0?7*Math.ceil(Math.abs(t)):0)+t)%7}function z(t,e,i){const r=L(t-e);return i?1+r:r}function H(t){const{dayFormat:e,fullDateFormat:i,locale:r,longWeekdayFormat:n,narrowWeekdayFormat:a,selectedDate:o,disabledDates:s,disabledDays:d,firstDayOfWeek:c,max:l,min:p,showWeekNumber:u,weekLabel:h,weekNumberType:m}=t,b=null==p?Number.MIN_SAFE_INTEGER:+p,f=null==l?Number.MAX_SAFE_INTEGER:+l,g=function(t){const{firstDayOfWeek:e=0,showWeekNumber:i=!1,weekLabel:r,longWeekdayFormat:n,narrowWeekdayFormat:a}=t||{},o=1+(e+(e<0?7:0))%7,s=r||"Wk",d=i?[{label:"Wk"===s?"Week":s,value:s}]:[];return Array.from(Array(7)).reduce((t,e,i)=>{const r=S(2017,0,o+i);return t.push({label:n(r),value:a(r)}),t},d)}({longWeekdayFormat:n,narrowWeekdayFormat:a,firstDayOfWeek:c,showWeekNumber:u,weekLabel:h}),y=t=>[r,t.toJSON(),null==s?void 0:s.join("_"),null==d?void 0:d.join("_"),c,null==l?void 0:l.toJSON(),null==p?void 0:p.toJSON(),u,h,m].filter(Boolean).join(":"),v=o.getUTCFullYear(),_=o.getUTCMonth(),w=[-1,0,1].map(t=>{const n=S(v,_+t,1),a=+S(v,_+t+1,0),o=y(n);if(a<b||+n>f)return{key:o,calendar:[],disabledDatesSet:new Set,disabledDaysSet:new Set};return{...function(t){const{dayFormat:e,fullDateFormat:i,locale:r="en-US",selectedDate:n,disabledDates:a=[],disabledDays:o=[],firstDayOfWeek:s=0,max:d,min:c,showWeekNumber:l=!1,weekLabel:p="Week",weekNumberType:u="first-4-day-week"}=t||{},h=L(s),m=n.getUTCFullYear(),b=n.getUTCMonth(),f=S(m,b,1),g=new Set(o.map(t=>z(t,h,l))),y=new Set(a.map(t=>+t)),v=[f.toJSON(),h,r,null==d?"":d.toJSON(),null==c?"":c.toJSON(),Array.from(g).join(","),Array.from(y).join(","),u].filter(Boolean).join(":"),_=z(f.getUTCDay(),h,l),w=null==c?+new Date("2000-01-01"):+c,x=null==d?+new Date("2100-12-31"):+d,k=l?8:7,O=S(m,1+b,0).getUTCDate(),D=[];let T=[],E=!1,C=1;for(const t of[0,1,2,3,4,5]){for(const r of[0,1,2,3,4,5,6].concat(7===k?[]:[7])){const n=r+t*k;if(!E&&l&&0===r){const e=M(u,S(m,b,C-(t<1?h:0))),i=`${p} ${e}`;T.push({fullDate:null,label:i,value:""+e,key:`${v}:${i}`,disabled:!0});continue}if(E||n<_){T.push({fullDate:null,label:"",value:"",key:`${v}:${n}`,disabled:!0});continue}const a=S(m,b,C),o=+a,s=g.has(r)||y.has(o)||o<w||o>x;s&&y.add(o),T.push({fullDate:a,label:i(a),value:e(a),key:`${v}:${a.toJSON()}`,disabled:s}),C+=1,C>O&&(E=!0)}D.push(T),T=[]}return{disabledDatesSet:y,calendar:D,disabledDaysSet:new Set(o.map(t=>L(t))),key:v}}({dayFormat:e,fullDateFormat:i,locale:r,disabledDates:s,disabledDays:d,firstDayOfWeek:c,max:l,min:p,showWeekNumber:u,weekNumberType:m,selectedDate:n}),key:o}}),x=[],k=new Set,O=new Set;for(const t of w){const{disabledDatesSet:e,disabledDaysSet:i,...r}=t;if(r.calendar.length>0){if(i.size>0)for(const t of i)O.add(t);if(e.size>0)for(const t of e)k.add(t)}x.push(r)}return{calendars:x,weekdays:g,disabledDatesSet:k,disabledDaysSet:O,key:y(o)}}function V(t){const e=null==t?new Date:new Date(t),i="string"==typeof t&&(/^\d{4}-\d{2}-\d{2}$/i.test(t)||/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|\+00:00|-00:00)$/i.test(t)),r="number"==typeof t&&t>0&&isFinite(t);let n=e.getFullYear(),a=e.getMonth(),o=e.getDate();return(i||r)&&(n=e.getUTCFullYear(),a=e.getUTCMonth(),o=e.getUTCDate()),S(n,a,o)}function B(t,e){return t.classList.contains(e)}function $(t,e){return!(null==t||!(e instanceof Date)||isNaN(+e))}function U(t){return t-Math.floor(t)>0?+t.toFixed(3):t}function W(t){return{passive:!0,handleEvent:t}}function q(t,e){const i="string"==typeof t&&t.length>0?t.split(/,\s*/i):[];return i.length?"function"==typeof e?i.map(e):i:[]}function Y(t){if(t instanceof Date&&!isNaN(+t)){const e=t.toJSON();return null==e?"":e.replace(/^(.+)T.+/i,"$1")}return""}function G(t,e){if(N(t,e)<864e5)return[];const i=t.getUTCFullYear();return Array.from(Array(e.getUTCFullYear()-i+1),(t,e)=>e+i)}function X(t,e,i){const r="number"==typeof t?t:+t,n=+e,a=+i;return r<n?n:r>a?a:t}
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
 */let K=!1;const Z=()=>{},J={get passive(){return K=!0,!1}};document.addEventListener("x",Z,J),document.removeEventListener("x",Z);const Q=K;function tt(t){const{clientX:e,clientY:i,pageX:r,pageY:n}=t,a=Math.max(r,e),o=Math.max(n,i),s=t.identifier||t.pointerId;return{x:a,y:o,id:null==s?0:s}}function et(t,e){const i=e.changedTouches;if(null==i)return{newPointer:tt(e),oldPointer:t};const r=Array.from(i,t=>tt(t));return{newPointer:null==t?r[0]:r.find(e=>e.id===t.id),oldPointer:t}}function it(t,e,i){t.addEventListener(e,i,!!Q&&{passive:!0})}class rt{constructor(t,e){this._element=t,this._startPointer=null;const{down:i,move:r,up:n}=e;this._down=this._onDown(i),this._move=this._onMove(r),this._up=this._onUp(n),t&&t.addEventListener&&(t.addEventListener("mousedown",this._down),it(t,"touchstart",this._down),it(t,"touchmove",this._move),it(t,"touchend",this._up))}disconnect(){const t=this._element;t&&t.removeEventListener&&(t.removeEventListener("mousedown",this._down),t.removeEventListener("touchstart",this._down),t.removeEventListener("touchmove",this._move),t.removeEventListener("touchend",this._up))}_onDown(t){return e=>{e instanceof MouseEvent&&(this._element.addEventListener("mousemove",this._move),this._element.addEventListener("mouseup",this._up),this._element.addEventListener("mouseleave",this._up));const{newPointer:i}=et(this._startPointer,e);t(i,e),this._startPointer=i}}_onMove(t){return e=>{this._updatePointers(t,e)}}_onUp(t){return e=>{this._updatePointers(t,e,!0)}}_updatePointers(t,e,i){i&&e instanceof MouseEvent&&(this._element.removeEventListener("mousemove",this._move),this._element.removeEventListener("mouseup",this._up),this._element.removeEventListener("mouseleave",this._up));const{newPointer:r,oldPointer:n}=et(this._startPointer,e);t(r,n,e),this._startPointer=i?null:r}}class nt extends u.LitElement{constructor(){super(),this.firstDayOfWeek=0,this.showWeekNumber=!1,this.weekNumberType="first-4-day-week",this.landscape=!1,this.locale=r&&r().resolvedOptions&&r().resolvedOptions().locale||"en-US",this.disabledDays="",this.disabledDates="",this.weekLabel="Wk",this.inline=!1,this.dragRatio=.15,this._hasMin=!1,this._hasMax=!1,this._disabledDaysSet=new Set,this._disabledDatesSet=new Set,this._dx=-1/0,this._hasNativeWebAnimation="animate"in HTMLElement.prototype,this._updatingDateWithKey=!1;const t=V(),e=I(this.locale),i=Y(t),n=V("2100-12-31");this.value=i,this.startView="calendar",this._min=new Date(t),this._max=new Date(n),this._todayDate=t,this._maxDate=n,this._yearList=G(t,n),this._selectedDate=new Date(t),this._focusedDate=new Date(t),this._formatters=e}get startView(){return this._startView}set startView(t){const e=t||"calendar";if("calendar"!==e&&"yearList"!==e)return;const i=this._startView;this._startView=e,this.requestUpdate("startView",i)}get min(){return this._hasMin?Y(this._min):""}set min(t){const e=V(t),i=$(t,e);this._min=i?e:this._todayDate,this._hasMin=i,this.requestUpdate("min")}get max(){return this._hasMax?Y(this._max):""}set max(t){const e=V(t),i=$(t,e);this._max=i?e:this._maxDate,this._hasMax=i,this.requestUpdate("max")}get value(){return Y(this._focusedDate)}set value(t){const e=V(t),i=$(t,e)?e:this._todayDate;this._focusedDate=new Date(i),this._selectedDate=this._lastSelectedDate=new Date(i)}get datepickerBodyCalendarView(){return this.shadowRoot.querySelector(".datepicker-body__calendar-view")}get calendarsContainer(){return this.shadowRoot.querySelector(".calendars-container")}disconnectedCallback(){super.disconnectedCallback(),this._tracker&&(this._tracker.disconnect(),this._tracker=void 0)}render(){this._formatters.locale!==this.locale&&(this._formatters=I(this.locale));const t="yearList"===this._startView?this._renderDatepickerYearList():this._renderDatepickerCalendar(),e=this.inline?null:u.html`<div class="datepicker-header" part="header">${this._renderHeaderSelectorButton()}</div>`;return u.html`
    ${e}
    <div class="datepicker-body" part="body">${f(t)}</div>
    `}firstUpdated(){let t;t="calendar"===this._startView?this.inline?this.shadowRoot.querySelector(".btn__month-selector"):this._buttonSelectorYear:this._yearViewListItem,P(this,"datepicker-first-updated",{firstFocusableElement:t,value:this.value})}updated(t){const e=this._startView;if(t.has("min")||t.has("max")){this._yearList=G(this._min,this._max),"yearList"===e&&this.requestUpdate();const t=+this._min,i=+this._max;if(N(t,i)>864e5){const e=+this._focusedDate;let r=e;e<t&&(r=t),e>i&&(r=i),this.value=Y(new Date(r))}}if(t.has("_startView")||t.has("startView")){if("yearList"===e){const t=48*(this._selectedDate.getUTCFullYear()-this._min.getUTCFullYear()-2);!function(t,e){if(null==t.scrollTo){const{top:i,left:r}=e||{};t.scrollTop=i||0,t.scrollLeft=r||0}else t.scrollTo(e)}(this._yearViewFullList,{top:t,left:0})}if("calendar"===e&&null==this._tracker){const t=this.calendarsContainer;let e=!1,i=!1,r=!1;if(t){const n={down:()=>{r||(e=!0,this._dx=0)},move:(n,a)=>{if(r||!e)return;const o=this._dx,s=o<0&&B(t,"has-max-date")||o>0&&B(t,"has-min-date");!s&&Math.abs(o)>0&&e&&(i=!0,t.style.transform=`translateX(${U(o)}px)`),this._dx=s?0:o+(n.x-a.x)},up:async(n,a,o)=>{if(e&&i){const n=this._dx,a=t.getBoundingClientRect().width/3,o=Math.abs(n)>Number(this.dragRatio)*a,s=350,d="cubic-bezier(0, 0, .4, 1)",c=o?U(a*(n<0?-1:1)):0;r=!0,await async function(t,e){const{hasNativeWebAnimation:i=!1,keyframes:r=[],options:n={duration:100}}=e||{};if(Array.isArray(r)&&r.length)return new Promise(e=>{if(i){t.animate(r,n).onfinish=()=>e()}else{const[,i]=r||[],a=()=>{t.removeEventListener("transitionend",a),e()};t.addEventListener("transitionend",a),t.style.transitionDuration=n.duration+"ms",n.easing&&(t.style.transitionTimingFunction=n.easing),Object.keys(i).forEach(e=>{e&&(t.style[e]=i[e])})}})}(t,{hasNativeWebAnimation:this._hasNativeWebAnimation,keyframes:[{transform:`translateX(${n}px)`},{transform:`translateX(${c}px)`}],options:{duration:s,easing:d}}),o&&this._updateMonth(n<0?"next":"previous").handleEvent(),e=i=r=!1,this._dx=-1/0,t.removeAttribute("style"),P(this,"datepicker-animation-finished")}else e&&(this._updateFocusedDate(o),e=i=!1,this._dx=-1/0)}};this._tracker=new rt(t,n)}}t.get("_startView")&&"calendar"===e&&this._focusElement('[part="year-selector"]')}this._updatingDateWithKey&&(this._focusElement('[part="calendars"]:nth-of-type(2) .day--focused'),this._updatingDateWithKey=!1)}_focusElement(t){const e=this.shadowRoot.querySelector(t);e&&e.focus()}_renderHeaderSelectorButton(){const{yearFormat:t,dateFormat:e}=this._formatters,i="calendar"===this.startView,r=this._focusedDate,n=e(r),a=t(r);return u.html`
    <button
      class="${Object(g.a)({"btn__year-selector":!0,selected:!i})}"
      part="year-selector"
      data-view="${"yearList"}"
      @click="${this._updateView("yearList")}">${a}</button>

    <div class="datepicker-toolbar" part="toolbar">
      <button
        class="${Object(g.a)({"btn__calendar-selector":!0,selected:i})}"
        part="calendar-selector"
        data-view="${"calendar"}"
        @click="${this._updateView("calendar")}">${n}</button>
    </div>
    `}_renderDatepickerYearList(){const{yearFormat:t}=this._formatters,e=this._focusedDate.getUTCFullYear();return u.html`
    <div class="datepicker-body__year-list-view" part="year-list-view">
      <div class="year-list-view__full-list" part="year-list" @click="${this._updateYear}">
      ${this._yearList.map(i=>u.html`<button
        class="${Object(g.a)({"year-list-view__list-item":!0,"year--selected":e===i})}"
        part="year"
        .year="${i}">${t(S(i,0,1))}</button>`)}</div>
    </div>
    `}_renderDatepickerCalendar(){const{longMonthYearFormat:t,dayFormat:e,fullDateFormat:i,longWeekdayFormat:r,narrowWeekdayFormat:n}=this._formatters,a=q(this.disabledDays,Number),o=q(this.disabledDates,V),s=this.showWeekNumber,d=this._focusedDate,c=this.firstDayOfWeek,l=V(),p=this._selectedDate,h=this._max,m=this._min,{calendars:b,disabledDaysSet:f,disabledDatesSet:y,weekdays:v}=H({dayFormat:e,fullDateFormat:i,longWeekdayFormat:r,narrowWeekdayFormat:n,firstDayOfWeek:c,disabledDays:a,disabledDates:o,locale:this.locale,selectedDate:p,showWeekNumber:this.showWeekNumber,weekNumberType:this.weekNumberType,max:h,min:m,weekLabel:this.weekLabel}),_=!b[0].calendar.length,w=!b[2].calendar.length,x=v.map(t=>u.html`<th
        class="calendar-weekday"
        part="calendar-weekday"
        role="columnheader"
        aria-label="${t.label}"
      >
        <div class="weekday" part="weekday">${t.value}</div>
      </th>`),k=D(b,t=>t.key,({calendar:e},i)=>{if(!e.length)return u.html`<div class="calendar-container" part="calendar"></div>`;const r="calendarcaption"+i,n=e[1][1].fullDate,a=1===i,o=a&&!this._isInVisibleMonth(d,p)?A({disabledDaysSet:f,disabledDatesSet:y,hasAltKey:!1,keyCode:36,focusedDate:d,selectedDate:p,minTime:+m,maxTime:+h}):d;return u.html`
      <div class="calendar-container" part="calendar">
        <table class="calendar-table" part="table" role="grid" aria-labelledby="${r}">
          <caption id="${r}">
            <div class="calendar-label" part="label">${n?t(n):""}</div>
          </caption>

          <thead role="rowgroup">
            <tr class="calendar-weekdays" part="weekdays" role="row">${x}</tr>
          </thead>

          <tbody role="rowgroup">${e.map(t=>u.html`<tr role="row">${t.map((t,e)=>{const{disabled:i,fullDate:r,label:n,value:c}=t;if(!r&&c&&s&&e<1)return u.html`<th
                      class="full-calendar__day weekday-label"
                      part="calendar-day"
                      scope="row"
                      role="rowheader"
                      abbr="${n}"
                      aria-label="${n}"
                    >${c}</th>`;if(!c||!r)return u.html`<td class="full-calendar__day day--empty" part="calendar-day"></td>`;const p=+new Date(r),h=+d===p,m=a&&o.getUTCDate()===Number(c);return u.html`
                  <td
                    tabindex="${m?"0":"-1"}"
                    class="${Object(g.a)({"full-calendar__day":!0,"day--disabled":i,"day--today":+l===p,"day--focused":!i&&h})}"
                    part="calendar-day"
                    role="gridcell"
                    aria-disabled="${i?"true":"false"}"
                    aria-label="${n}"
                    aria-selected="${h?"true":"false"}"
                    .fullDate="${r}"
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
      >${k}</div>
    </div>
    `}_updateView(t){return W(()=>{"calendar"===t&&(this._selectedDate=this._lastSelectedDate=new Date(X(this._focusedDate,this._min,this._max))),this._startView=t})}_updateMonth(t){return W(()=>{if(null==this.calendarsContainer)return this.updateComplete;const e=this._lastSelectedDate||this._selectedDate,i=this._min,r=this._max,n="previous"===t,a=S(e.getUTCFullYear(),e.getUTCMonth()+(n?-1:1),1),o=a.getUTCFullYear(),s=a.getUTCMonth(),d=i.getUTCFullYear(),c=i.getUTCMonth(),l=r.getUTCFullYear(),p=r.getUTCMonth();return o<d||o<=d&&s<c||(o>l||o>=l&&s>p)||(this._lastSelectedDate=a,this._selectedDate=this._lastSelectedDate),this.updateComplete})}_updateYear(t){const e=R(t,t=>B(t,"year-list-view__list-item"));if(null==e)return;const i=X(new Date(this._focusedDate).setUTCFullYear(+e.year),this._min,this._max);this._selectedDate=this._lastSelectedDate=new Date(i),this._focusedDate=new Date(i),this._startView="calendar"}_updateFocusedDate(t){const e=R(t,t=>B(t,"full-calendar__day"));null==e||["day--empty","day--disabled","day--focused","weekday-label"].some(t=>B(e,t))||(this._focusedDate=new Date(e.fullDate),P(this,"datepicker-value-updated",{isKeypress:!1,value:this.value}))}_updateFocusedDateWithKeyboard(t){const e=t.keyCode;if(13===e||32===e)return P(this,"datepicker-value-updated",{keyCode:e,isKeypress:!0,value:this.value}),void(this._focusedDate=new Date(this._selectedDate));if(9===e||!l.has(e))return;const i=this._selectedDate,r=A({keyCode:e,selectedDate:i,disabledDatesSet:this._disabledDatesSet,disabledDaysSet:this._disabledDaysSet,focusedDate:this._focusedDate,hasAltKey:t.altKey,maxTime:+this._max,minTime:+this._min});this._isInVisibleMonth(r,i)||(this._selectedDate=this._lastSelectedDate=r),this._focusedDate=r,this._updatingDateWithKey=!0,P(this,"datepicker-value-updated",{keyCode:e,isKeypress:!0,value:this.value})}_isInVisibleMonth(t,e){const i=t.getUTCFullYear(),r=t.getUTCMonth(),n=e.getUTCFullYear(),a=e.getUTCMonth();return i===n&&r===a}}var at,ot;nt.styles=[j,C,u.css`
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
    `],Object(p.b)([Object(u.property)({type:Number,reflect:!0})],nt.prototype,"firstDayOfWeek",void 0),Object(p.b)([Object(u.property)({type:Boolean,reflect:!0})],nt.prototype,"showWeekNumber",void 0),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"weekNumberType",void 0),Object(p.b)([Object(u.property)({type:Boolean,reflect:!0})],nt.prototype,"landscape",void 0),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"startView",null),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"min",null),Object(p.b)([Object(u.property)({type:String,reflect:!0})],nt.prototype,"max",null),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"value",null),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"locale",void 0),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"disabledDays",void 0),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"disabledDates",void 0),Object(p.b)([Object(u.property)({type:String})],nt.prototype,"weekLabel",void 0),Object(p.b)([Object(u.property)({type:Boolean})],nt.prototype,"inline",void 0),Object(p.b)([Object(u.property)({type:Number})],nt.prototype,"dragRatio",void 0),Object(p.b)([Object(u.property)({type:Date,attribute:!1})],nt.prototype,"_selectedDate",void 0),Object(p.b)([Object(u.property)({type:Date,attribute:!1})],nt.prototype,"_focusedDate",void 0),Object(p.b)([Object(u.property)({type:String,attribute:!1})],nt.prototype,"_startView",void 0),Object(p.b)([Object(u.query)(".year-list-view__full-list")],nt.prototype,"_yearViewFullList",void 0),Object(p.b)([Object(u.query)(".btn__year-selector")],nt.prototype,"_buttonSelectorYear",void 0),Object(p.b)([Object(u.query)(".year-list-view__list-item")],nt.prototype,"_yearViewListItem",void 0),Object(p.b)([Object(u.eventOptions)({passive:!0})],nt.prototype,"_updateYear",null),Object(p.b)([Object(u.eventOptions)({passive:!0})],nt.prototype,"_updateFocusedDateWithKeyboard",null),at="app-datepicker",ot=nt,window.customElements&&!window.customElements.get(at)&&window.customElements.define(at,ot)},function(t,e,i){"use strict";i.r(e),i.d(e,"Button",(function(){return v}));var r=i(1),n=i(0);
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
*/let o=class extends n.LitElement{render(){return n.html`<slot></slot>`}};o.styles=a,o=Object(r.b)([Object(n.customElement)("mwc-icon")],o);var s=i(13),d=i(18),c=i(6),l=i(2);
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
const p=new WeakMap,u=Object(l.g)(t=>e=>{if(!(e instanceof l.a)||e instanceof l.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let n=p.get(e);void 0===n&&(r.cssText=i.strings.join(" "),p.set(e,n=new Set)),n.forEach(e=>{e in t||(n.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))});for(const e in t)n.add(e),-1===e.indexOf("-")?r[e]=t[e]:r.setProperty(e,t[e])});
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
          style="${u({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}Object(r.b)([Object(n.query)(".mdc-ripple-surface")],h.prototype,"mdcRoot",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"primary",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"accent",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"unbounded",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"disabled",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"activated",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"selected",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"hovering",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"bgFocused",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"fgActivation",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"fgDeactivation",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"fgScale",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"fgSize",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"translateStart",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"translateEnd",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"leftPos",void 0),Object(r.b)([Object(n.internalProperty)()],h.prototype,"topPos",void 0);
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
*/let b=class extends h{};b.styles=m,b=Object(r.b)([Object(n.customElement)("mwc-ripple")],b);
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
    </mwc-icon>`}handleRippleActivate(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(r.b)([Object(n.property)({type:Boolean})],g.prototype,"raised",void 0),Object(r.b)([Object(n.property)({type:Boolean})],g.prototype,"unelevated",void 0),Object(r.b)([Object(n.property)({type:Boolean})],g.prototype,"outlined",void 0),Object(r.b)([Object(n.property)({type:Boolean})],g.prototype,"dense",void 0),Object(r.b)([Object(n.property)({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0),Object(r.b)([Object(n.property)({type:Boolean,attribute:"trailingicon"})],g.prototype,"trailingIcon",void 0),Object(r.b)([Object(n.property)({type:Boolean,reflect:!0})],g.prototype,"fullwidth",void 0),Object(r.b)([Object(n.property)({type:String})],g.prototype,"icon",void 0),Object(r.b)([Object(n.property)({type:String})],g.prototype,"label",void 0),Object(r.b)([Object(n.query)("#button")],g.prototype,"buttonElement",void 0),Object(r.b)([Object(n.queryAsync)("mwc-ripple")],g.prototype,"ripple",void 0),Object(r.b)([Object(n.internalProperty)()],g.prototype,"shouldRenderRipple",void 0),Object(r.b)([Object(n.eventOptions)({passive:!0})],g.prototype,"handleRippleActivate",null);
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
*/let v=class extends g{};v.styles=y,v=Object(r.b)([Object(n.customElement)("mwc-button")],v)},function(t,e,i){"use strict";i.r(e),i.d(e,"Drawer",(function(){return b}));var r=i(1),n=i(0),a=(i(23),i(24),{ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"}),o={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},s=function(t){function e(i){var n=t.call(this,Object(r.a)(Object(r.a)({},e.defaultAdapter),i))||this;return n.animationFrame_=0,n.animationTimer_=0,n}return Object(r.c)(e,t),Object.defineProperty(e,"strings",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(a.OPEN),this.adapter.addClass(a.ANIMATE),this.runNextAnimationFrame_((function(){t.adapter.addClass(a.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(a.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(a.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(a.OPENING)||this.adapter.hasClass(a.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(a.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=a.OPENING,i=a.CLOSING,r=a.OPEN,n=a.ANIMATE,o=a.ROOT;this.isElement_(t.target)&&this.adapter.elementHasClass(t.target,o)&&(this.isClosing()?(this.adapter.removeClass(r),this.closed_(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened_(),this.adapter.notifyOpen()),this.adapter.removeClass(n),this.adapter.removeClass(e),this.adapter.removeClass(i))},e.prototype.opened_=function(){},e.prototype.closed_=function(){},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e.prototype.isElement_=function(t){return Boolean(t.classList)},e}(i(14).a),d=s,c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened_=function(){this.adapter.trapFocus()},e.prototype.closed_=function(){this.adapter.releaseFocus()},e}(s),l=i(13);var p=i(6);
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
*/const u=document.$blockingElements;class h extends l.a{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?c:d}createAdapter(){return Object.assign(Object.assign({},Object(l.b)(this.mdcRoot)),{elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(o.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(o.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{u.push(this),this.appContent.inert=!0},releaseFocus:()=>{u.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof c&&this.mdcFoundation.handleScrimClick()}render(){const t="dismissible"===this.type||"modal"===this.type,e="modal"===this.type,i=this.hasHeader?n.html`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"",r={"mdc-drawer--dismissible":t,"mdc-drawer--modal":e};return n.html`
      <aside class="mdc-drawer ${Object(p.a)(r)}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${e?n.html`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",t=>this.mdcFoundation.handleKeydown(t)),this.mdcRoot.addEventListener("transitionend",t=>this.mdcFoundation.handleTransitionEnd(t))}updated(t){t.has("type")&&this.createFoundation()}}Object(r.b)([Object(n.query)(".mdc-drawer")],h.prototype,"mdcRoot",void 0),Object(r.b)([Object(n.query)(".mdc-drawer-app-content")],h.prototype,"appContent",void 0),Object(r.b)([(t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)})((function(t){""!==this.type&&(t?this.mdcFoundation.open():this.mdcFoundation.close())})),Object(n.property)({type:Boolean,reflect:!0})],h.prototype,"open",void 0),Object(r.b)([Object(n.property)({type:Boolean})],h.prototype,"hasHeader",void 0),Object(r.b)([Object(n.property)({reflect:!0})],h.prototype,"type",void 0);
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
*/let b=class extends h{};b.styles=m,b=Object(r.b)([Object(n.customElement)("mwc-drawer")],b)},function(t,e,i){"use strict";i.r(e),i.d(e,"TopAppBar",(function(){return y}));var r=i(1),n=i(0),a={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},o={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},s={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},d=function(t){function e(i){return t.call(this,Object(r.a)(Object(r.a)({},e.defaultAdapter),i))||this}return Object(r.c)(e,t),Object.defineProperty(e,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(i(14).a),c=d,l=function(t){function e(e){var i=t.call(this,e)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter.getViewportScrollY(),i.topAppBarHeight_=i.adapter.getTopAppBarHeight(),i}return Object(r.c)(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()}),o.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0}),o.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,r=e&&i;if(r)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return r},e.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-o.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler_=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},e}(d),p=i(13),u=i(15),h=i(6);
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
    `}createAdapter(){return Object.assign(Object.assign({},Object(p.b)(this.mdcRoot)),{setStyle:(t,e)=>this.mdcRoot.style.setProperty(t,e),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(s.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,m)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}Object(r.b)([Object(n.query)(".mdc-top-app-bar")],b.prototype,"mdcRoot",void 0),Object(r.b)([Object(n.query)('slot[name="actionItems"]')],b.prototype,"_actionItemsSlot",void 0),Object(r.b)([Object(n.property)({type:Boolean})],b.prototype,"centerTitle",void 0),Object(r.b)([Object(n.property)()],b.prototype,"scrollTarget",null);
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
class f extends b{constructor(){super(...arguments),this.mdcFoundationClass=l,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,m)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}Object(r.b)([Object(n.property)({type:Boolean,reflect:!0})],f.prototype,"prominent",void 0),Object(r.b)([Object(n.property)({type:Boolean,reflect:!0})],f.prototype,"dense",void 0);
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
*/let y=class extends f{};y.styles=g,y=Object(r.b)([Object(n.customElement)("mwc-top-app-bar")],y)},function(t,e,i){"use strict";i.r(e),i.d(e,"IconButton",(function(){return _}));var r=i(1),n=i(0);
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
function a(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},r=function(){};t.document.addEventListener("test",r,i),t.document.removeEventListener("test",r,i)}catch(t){e=!1}return e}(t)&&{passive:!0}}var o=i(17),s=i(18),d=i(16),c=i(2);
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
*/class u{constructor(t){this.foundation=t}startPress(){this.foundation.activate()}endPress(){this.foundation.deactivate()}startFocus(){this.foundation.handleFocus()}endFocus(){this.foundation.handleBlur()}destroy(){this.foundation.destroy()}setUnbounded(t){this.foundation.setUnbounded(t)}}const h=navigator.userAgent.match(/Safari/);let m=!1;const b=t=>{h&&!m&&(()=>{m=!0;const t=document.createElement("style"),e=new c.b({templateFactory:c.m});e.appendInto(t),e.setValue(l),e.commit(),document.head.appendChild(t)})();const e=t.surfaceNode,i=t.interactionNode||e;i.getRootNode()!==e.getRootNode()&&""===i.style.position&&(i.style.position="relative");const r={browserSupportsCssVars:()=>p,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>Object(o.a)(i,":active"),isSurfaceDisabled:()=>Boolean(i.hasAttribute("disabled")),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>i.contains(t),registerInteractionHandler:(t,e)=>i.addEventListener(t,e,a()),deregisterInteractionHandler:(t,e)=>i.removeEventListener(t,e,a()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,a()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,a()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})},n=new s.a(r);return n.init(),new u(n)},f=new WeakMap,g=Object(c.g)((t={})=>e=>{const i=e.committer.element,r=t.interactionNode||i;let n=e.value;const a=f.get(n);void 0!==a&&a!==r&&(n.destroy(),n=c.i),n===c.i?(n=b(Object.assign({},t,{surfaceNode:i})),f.set(n,r),e.setValue(n)):(void 0!==t.unbounded&&n.setUnbounded(t.unbounded),void 0!==t.disabled&&n.setUnbounded(t.disabled)),!0===t.active?n.startPress():!1===t.active&&n.endPress()});
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
  </button>`}}Object(r.b)([Object(n.property)({type:Boolean,reflect:!0})],y.prototype,"disabled",void 0),Object(r.b)([Object(n.property)({type:String})],y.prototype,"icon",void 0),Object(r.b)([Object(n.property)({type:String})],y.prototype,"label",void 0);
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
*/let _=class extends y{};_.styles=v,_=Object(r.b)([Object(n.customElement)("mwc-icon-button")],_)},function(t,e,i){"use strict";i.r(e),i.d(e,"unwrap",(function(){return m})),i.d(e,"wrap",(function(){return h})),i.d(e,"deleteDB",(function(){return f})),i.d(e,"openDB",(function(){return b}));let r,n;const a=new WeakMap,o=new WeakMap,s=new WeakMap,d=new WeakMap,c=new WeakMap;let l={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||s.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return h(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(m(this),e),h(a.get(this))}:function(...e){return h(t.apply(m(this),e))}:function(e,...i){const r=t.call(m(this),e,...i);return s.set(r,e.sort?e.sort():[e]),h(r)}}function u(t){return"function"==typeof t?p(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise((e,i)=>{const r=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",a),t.removeEventListener("abort",a)},n=()=>{e(),r()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",n),t.addEventListener("error",a),t.addEventListener("abort",a)});o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,l):t);var e}function h(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,i)=>{const r=()=>{t.removeEventListener("success",n),t.removeEventListener("error",a)},n=()=>{e(h(t.result)),r()},a=()=>{i(t.error),r()};t.addEventListener("success",n),t.addEventListener("error",a)});return e.then(e=>{e instanceof IDBCursor&&a.set(e,t)}).catch(()=>{}),c.set(e,t),e}(t);if(d.has(t))return d.get(t);const e=u(t);return e!==t&&(d.set(t,e),c.set(e,t)),e}const m=t=>c.get(t);function b(t,e,{blocked:i,upgrade:r,blocking:n,terminated:a}={}){const o=indexedDB.open(t,e),s=h(o);return r&&o.addEventListener("upgradeneeded",t=>{r(h(o.result),t.oldVersion,t.newVersion,h(o.transaction))}),i&&o.addEventListener("blocked",()=>i()),s.then(t=>{a&&t.addEventListener("close",()=>a()),n&&t.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}function f(t,{blocked:e}={}){const i=indexedDB.deleteDatabase(t);return e&&i.addEventListener("blocked",()=>e()),h(i).then(()=>{})}const g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function _(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(v.get(e))return v.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,n=y.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!n&&!g.includes(i))return;const a=async function(t,...e){const a=this.transaction(t,n?"readwrite":"readonly");let o=a.store;r&&(o=o.index(e.shift()));const s=await o[i](...e);return n&&await a.done,s};return v.set(e,a),a}l=(t=>({...t,get:(e,i,r)=>_(e,i)||t.get(e,i,r),has:(e,i)=>!!_(e,i)||t.has(e,i)}))(l)}]);
//# sourceMappingURL=index.js.map