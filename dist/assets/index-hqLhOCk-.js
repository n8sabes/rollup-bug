import{j as f,c as te,d as ne,F as B,s as re,e as se,q as ie,b as oe,_ as ae}from"./core.prod-BxGGwZQY.js";/**
 * @license
 * @builder.io/qwik/server 1.4.5
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var ce=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),le="<sync>";function ue(t,e){const n=e==null?void 0:e.mapper,s=t.symbolMapper?t.symbolMapper:i=>{var a;if(n){const o=E(i),c=n[o];if(!c){if(o===le)return[o,""];if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(o))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return c}};return{isServer:!0,async importSymbol(i,a,o){var y;const c=E(o),l=(y=globalThis.__qwik_reg_symbols)==null?void 0:y.get(c);if(l)return l;let d=String(a);d.endsWith(".js")||(d+=".js");const w=ce(d);if(!(o in w))throw new Error(`Q-ERROR: missing symbol '${o}' in module '${d}'.`);return w[o]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,n)}}}async function de(t,e){const n=ue(t,e);re(n)}var E=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function _(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function H(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var fe=`((e,t)=>{const n="__q_context__",s=window,o=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((s=>f(s,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,s,o,i=o.type)=>{const a="on"+s+":"+i;t.hasAttribute("preventdefault:"+i)&&o.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,o],(()=>t.isConnected))(o,t);return}const b=r(t,a);if(b){const s=t.closest("[q\\\\:container]"),i=new URL(r(s,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now();let b;const d=a.startsWith("#");if(d)b=(s.qFuncs||[])[Number.parseInt(c)];else{const e=import(
/* @vite-ignore */
r.href.split("#")[0]);l(s),b=(await e)[c]}const p=e[n];if(t.isConnected)try{e[n]=[t,o,r],d||u("qsymbol",{symbol:c,element:t,reqTime:f}),await b(o,t)}finally{e[n]=p}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),d=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},q=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,u("qinit"),(null!=(n=s.requestIdleCallback)?n:s.setTimeout).bind(s)((()=>u("qidle"))),o.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},w=(e,t,n,s=!1)=>e.addEventListener(t,n,{capture:s,passive:!1}),v=t=>{for(const n of t)o.has(n)||(w(e,n,d,!0),w(s,n,p),o.add(n))};if(!e.qR){const t=s.qwikevents;Array.isArray(t)&&v(t),s.qwikevents={push:(...e)=>v(e)},w(e,"readystatechange",q),q()}})(document);`,me=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    await listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    const isSync = qrl.startsWith("#");
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbolName)];
                    } else {
                        const module = import(
                        /* @vite-ignore */
                        url.href.split("#")[0]);
                        resolveContainer(container);
                        handler = (await module)[symbolName];
                    }
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,pe=`((e,t)=>{const n="__q_context__",s=window,o=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((s=>f(s,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,s,o,i=o.type)=>{const a="on"+s+":"+i;t.hasAttribute("preventdefault:"+i)&&o.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,o],(()=>t.isConnected))(o,t);return}const b=r(t,a);if(b){const s=t.closest("[q\\\\:container]"),i=new URL(r(s,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now();let b;const d=a.startsWith("#");if(d)b=(s.qFuncs||[])[Number.parseInt(c)];else{const e=import(
/* @vite-ignore */
r.href.split("#")[0]);l(s),b=(await e)[c]}const p=e[n];if(t.isConnected)try{e[n]=[t,o,r],d||u("qsymbol",{symbol:c,element:t,reqTime:f}),await b(o,t)}finally{e[n]=p}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),d=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},q=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,u("qinit"),(null!=(n=s.requestIdleCallback)?n:s.setTimeout).bind(s)((()=>u("qidle"))),o.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},w=(e,t,n,s=!1)=>e.addEventListener(t,n,{capture:s,passive:!1}),v=t=>{for(const n of t)o.has(n)||(w(e,n,d,!0),w(s,n,p),o.add(n))};if(!e.qR){const t=s.qwikevents;Array.isArray(t)&&v(t),s.qwikevents={push:(...e)=>v(e)},w(e,"readystatechange",q),q()}})(document);`,ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    await listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    const isSync = qrl.startsWith("#");
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbolName)];
                    } else {
                        const module = import(
                        /* @vite-ignore */
                        url.href.split("#")[0]);
                        resolveContainer(container);
                        handler = (await module)[symbolName];
                    }
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function J(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?ve:pe).replace("window.qEvents",JSON.stringify(t.events)):t.debug?me:fe}function be(t,e,n){if(!n)return[];const s=e.prefetchStrategy,r=H(e);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return he(t,n,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function he(t,e,n){const s=[],r=t==null?void 0:t.qrls,{mapper:i,manifest:a}=e,o=new Map;if(Array.isArray(r))for(const c of r){const l=c.getHash(),d=i[l];d&&Q(a,o,s,n,d[1])}return s}function Q(t,e,n,s,r){const i=s+r;let a=e.get(i);if(!a){a={url:i,imports:[]},e.set(i,a);const o=t.bundles[r];if(o&&Array.isArray(o.imports))for(const c of o.imports)Q(t,e,a.imports,s,c)}n.push(a)}function ye(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function k(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function we(t){const e={bundles:q(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function q(t){const e=[],n=s=>{if(Array.isArray(s))for(const r of s)e.includes(r.url)||(e.push(r.url),n(r.imports))};return n(t),e}function qe(t){const e=new Map;let n=0;const s=(o,c)=>{if(Array.isArray(o))for(const l of o){const d=e.get(l.url)||0;e.set(l.url,d+1),n++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},r=new Set;for(const o of t)r.clear(),s(o.imports,r);const i=n/e.size*2,a=Array.from(e.entries());return a.sort((o,c)=>c[1]-o[1]),a.slice(0,5).filter(o=>o[1]>i).map(o=>o[0])}function ge(t,e,n){const s=Ce(t==null?void 0:t.implementation),r=[];return s.prefetchEvent==="always"&&_e(r,e,n),s.linkInsert==="html-append"&&Ee(r,e,s),s.linkInsert==="js-append"?ke(r,e,s,n):s.workerFetchInsert==="always"&&Se(r,e,n),r.length>0?f(B,{children:r}):null}function _e(t,e,n){const s=qe(e);for(const r of s)t.push(f("link",{rel:"modulepreload",href:r,nonce:n}));t.push(f("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:we(e)+";document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:n}))}function Ee(t,e,n){const s=q(e),r=n.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=r,(r==="prefetch"||r==="preload")&&i.endsWith(".js")&&(a.as="script"),t.push(f("link",a,void 0))}}function ke(t,e,n,s){const r=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(q(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${r}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${r}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=k(),i+="}"),n.workerFetchInsert==="always"&&(i+=k()),t.push(f("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:s}))}function Se(t,e,n){let s=`const u=${JSON.stringify(q(e))};`;s+=k(),t.push(f("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:s,nonce:n}))}function Ce(t){return{...Ie,...t}}var Ie={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Le="<!DOCTYPE html>";async function Ae(t,e){var T;let n=e.stream,s=0,r=0,i=0,a=0,o="",c;const l=((T=e.streaming)==null?void 0:T.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=e.containerTagName??"html",w=e.containerAttributes??{},y=n,K=_(),V=H(e),m=Te(e.manifest);function S(){o&&(y.write(o),o="",s=0,i++,i===1&&(a=K()))}function C(u){const p=u.length;s+=p,r+=p,o+=u}switch(l.strategy){case"disabled":n={write:C};break;case"direct":n=y;break;case"auto":let u=0,p=!1;const R=l.maximunChunk??0,g=l.maximunInitialChunk??0;n={write(h){h==="<!--qkssr-f-->"?p||(p=!0):h==="<!--qkssr-pu-->"?u++:h==="<!--qkssr-po-->"?u--:C(h),u===0&&(p||s>=(i===0?g:R))&&(p=!1,S())}};break}d==="html"?n.write(Le):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await de(e,m);const I=m==null?void 0:m.manifest.injections,Z=I?I.map(u=>f(u.tag,u.attributes??{})):void 0,Y=_(),L=[];let A=0,N=0;await te(t,{stream:n,containerTagName:d,containerAttributes:w,serverData:e.serverData,base:V,beforeContent:Z,beforeClose:async(u,p,R,g)=>{var D,F,$,O,U,W,z;A=Y();const h=_();c=await ne(u,p,void 0,g);const b=[];if(e.prefetchStrategy!==null){const v=be(c,e,m);if(v.length>0){const M=ge(e.prefetchStrategy,v,(D=e.serverData)==null?void 0:D.nonce);M&&b.push(M)}}const X=JSON.stringify(c.state,void 0,void 0);b.push(f("script",{type:"qwik/json",dangerouslySetInnerHTML:Re(X),nonce:(F=e.serverData)==null?void 0:F.nonce})),c.funcs.length>0&&b.push(f("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:je(c.funcs),nonce:($=e.serverData)==null?void 0:$.nonce}));const ee=!c||c.mode!=="static",x=((O=e.qwikLoader)==null?void 0:O.include)??"auto",P=x==="always"||x==="auto"&&ee;if(P){const v=J({events:(U=e.qwikLoader)==null?void 0:U.events,debug:e.debug});b.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:v,nonce:(W=e.serverData)==null?void 0:W.nonce}))}const j=Array.from(p.$events$,v=>JSON.stringify(v));if(j.length>0){let v=`window.qwikevents.push(${j.join(", ")})`;P||(v=`window.qwikevents||=[];${v}`),b.push(f("script",{dangerouslySetInnerHTML:v,nonce:(z=e.serverData)==null?void 0:z.nonce}))}return xe(L,u),N=h(),f(B,{children:b})},manifestHash:(m==null?void 0:m.manifest.manifestHash)||"dev"}),d!=="html"&&n.write("<!--/cq-->"),S();const G=c.resources.some(u=>u._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:m==null?void 0:m.manifest,size:r,isStatic:!G,timing:{render:A,snapshot:N,firstFlush:a},_symbols:L}}async function Ne(t,e={}){const n=[],s={write(i){n.push(i)}},r=await Ae(t,{base:e.base,containerAttributes:e.containerAttributes,containerTagName:e.containerTagName,locale:e.locale,manifest:e.manifest,symbolMapper:e.symbolMapper,qwikLoader:e.qwikLoader,serverData:e.serverData,prefetchStrategy:e.prefetchStrategy,stream:s});return{isStatic:r.isStatic,prefetchResources:r.prefetchResources,timing:r.timing,manifest:r.manifest,snapshotResult:r.snapshotResult,html:n.join("")}}function Te(t){if(t){if("mapper"in t)return t;if(t=ye(t),t){const e={};return Object.entries(t.mapping).forEach(([n,s])=>{e[E(n)]=[n,s]}),{mapper:e,manifest:t}}}}var Re=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function xe(t,e){var n;for(const s of e){const r=(n=s.$componentQrl$)==null?void 0:n.getSymbol();r&&!t.includes(r)&&t.push(r)}}var Pe='document.currentScript.closest("[q\\\\:container]").qFuncs=';function je(t){return Pe+`[${t.join(`,
`)}]`}const De=se(ie(()=>oe(()=>import("./entry_component-DhOEkw_9.js"),__vite__mapDeps([])),"s_0WQh6CmOu1E"));(async function(){document.head.appendChild(document.createElement("script")).text=J({debug:!0})+"; console.log('I am alive')";const t=await Ne(ae(De,null,3,"o0_0"),{containerTagName:"div",base:"/assets"});document.body.innerHTML=t.html,document.body.querySelectorAll("script").forEach(e=>{if(e.type==="qwik/json")return;const n=document.createElement("script");n.text=e.text,document.body.appendChild(n)})})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
