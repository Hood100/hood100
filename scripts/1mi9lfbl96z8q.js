(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81988,(e,t,r)=>{"use strict";e.i(42781),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return v},useLinkStatus:function(){return j}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let a=e.r(44066),i=e.r(56533),o=a._(e.r(16861)),l=e.r(98572),c=e.r(82150),u=e.r(99568),d=e.r(2639),h=e.r(57036),f=e.r(22959),p=e.r(66497),m=e.r(18769),x=e.r(977);function v(t){var r;let n,s,a,[v,j]=(0,o.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,o.useRef)(null),{href:b,as:w,children:N,prefetch:M=null,passHref:k,replace:C,shallow:E,scroll:S,onClick:P,onMouseEnter:O,onTouchStart:_,legacyBehavior:A=!1,onNavigate:F,transitionTypes:R,ref:T,unstable_dynamicOnHover:L,...$}=t;n=N,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let I=o.default.useContext(c.AppRouterContext),U=!1!==M,D=!1===M?"none":!0===M?"full":"auto",B="none"!==D?"auto"===D?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,z="string"==typeof(r=w||b)?r:(0,l.formatUrl)(r);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});s=o.default.Children.only(n)}let W=A?s&&"object"==typeof s&&s.ref:T,K,H=o.default.useCallback(e=>(null!==I&&(y.current=(0,p.mountLinkInstance)(e,z,I,B,U,j,K)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[U,z,I,B,j,K]),q={ref:(0,u.useMergedRef)(H,W),onClick(t){A||"function"!=typeof P||P(t),A&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t),!I||t.defaultPrevented||function(t,r,n,s,a,i,l,c="none"){if("u">typeof window){let u,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){s&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:h}=e.r(53317);o.default.startTransition(()=>{h(r,s?"replace":"push",!1===a?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,n.current,l,c)})}}(t,z,y,C,S,F,R,D)},onMouseEnter(e){A||"function"!=typeof O||O(e),A&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),I&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){A||"function"!=typeof _||_(e),A&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),I&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)(z)?q.href=z:A&&!k&&("a"!==s.type||"href"in s.props)||(q.href=(0,h.addBasePath)(z)),a=A?o.default.cloneElement(s,q):(0,i.jsx)("a",{...$,...q,children:n}),(0,i.jsx)(g.Provider,{value:v,children:a})}let g=(0,o.createContext)(p.IDLE_LINK_STATUS),j=()=>(0,o.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},99568,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return s}});let n=e.r(16861);function s(e,t){let r=(0,n.useRef)(null),s=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(r.current=a(e,n)),t&&(s.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},2639,(e,t,r)=>{"use strict";e.i(42781),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return j},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return w}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&o.test(e)};function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&h(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class g extends Error{}class j extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},18769,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(2639),s=e.r(60403);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,s.hasBasePath)(r.pathname)}catch(e){return!1}}},11792,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return o}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},98572,(e,t,r)=>{"use strict";e.i(42781),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let a=e.r(44066)._(e.r(11792)),i=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,n=e.protocol||"",s=e.pathname||"",o=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),s&&"/"!==s[0]&&(s="/"+s)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),u&&"?"!==u[0]&&(u="?"+u),s=s.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${s}${u}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},36379,e=>{"use strict";var t=e.i(56533),r=e.i(16861);function n({btm:e,className:r,children:s}){return(0,t.jsx)("div",{className:["corners",e?"btm":"",r??""].filter(Boolean).join(" "),children:s})}var s=e.i(80080);let a={arrow:(0,t.jsx)("path",{d:"M12 34 30 16H18V10h20v20h-6V20L14 38z",fill:"currentColor"}),sqsq:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("rect",{x:"5",y:"5",width:"38",height:"38",fill:"none",stroke:"currentColor",strokeWidth:"3.4"}),(0,t.jsx)("rect",{x:"16",y:"16",width:"16",height:"16",fill:"currentColor"})]}),pie:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M24 4a20 20 0 1 0 20 20H24z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M24 4v20h20A20 20 0 0 0 24 4z",fill:"none",stroke:"currentColor",strokeWidth:"3.4"})]}),dia:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M24 3 45 24 24 45 3 24z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M24 15 33 24 24 33 15 24z",fill:"var(--color-ink)"})]}),slash:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("circle",{cx:"24",cy:"24",r:"17",fill:"none",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{d:"M11 37 37 11",stroke:"currentColor",strokeWidth:"4"})]}),target:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("circle",{cx:"24",cy:"24",r:"17",fill:"none",stroke:"currentColor",strokeWidth:"3.4"}),(0,t.jsx)("circle",{cx:"24",cy:"24",r:"8",fill:"currentColor"})]}),tri:(0,t.jsx)("path",{d:"M24 6 44 40H4z",fill:"currentColor"}),half:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M6 28a18 18 0 0 1 36 0z",fill:"currentColor"}),(0,t.jsx)("rect",{x:"6",y:"34",width:"36",height:"6",fill:"currentColor"})]}),plus:(0,t.jsx)("path",{d:"M20 4h8v16h16v8H28v16h-8V28H4v-8h16z",fill:"currentColor"}),ring:(0,t.jsx)("circle",{cx:"24",cy:"24",r:"17",fill:"none",stroke:"currentColor",strokeWidth:"4"})};function i({name:e}){return(0,t.jsx)("svg",{viewBox:"0 0 48 48","aria-hidden":"true",children:a[e]})}function o({t:e}){return(0,t.jsx)("span",{className:"sv",children:e.icon?(0,t.jsx)("img",{src:e.icon,alt:"",loading:"lazy",decoding:"async",width:64,height:64}):(0,t.jsx)(i,{name:e.glyph})})}var l=e.i(75379);let c=Math.log(1e5),u=Math.log(5e8);function d(e){return Math.round((Math.log(e)-c)/(u-c)*1e3)}let h=[{label:"1M",value:1e6},{label:"10M",value:1e7},{label:"50M",value:5e7},{label:"250M",value:25e7}];e.s(["Calculator",0,function({constituents:e,supply:a,price:i,perToken:f}){let[p,m]=(0,r.useState)(620),{address:x,balance:v}=(0,s.useWallet)(),g=(0,r.useRef)(!1);(0,r.useEffect)(()=>{g.current||null===v||v<=0||(g.current=!0,m(Math.min(1e3,Math.max(0,d(Math.min(5e8,Math.max(1e5,v)))))))},[v]);let j=1e4*Math.round(Math.exp(c+p/1e3*(u-c))/1e4),y=null!==x,b=y&&null!==v,w=b&&v>=1e5,N=j*i,M=j*f,k=N>0?M/N*100:0,C=12*k*365,E=f>0,S=e.reduce((e,t)=>e+(t.weightBps??0),0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"calc mt-[1.2rem]",children:[(0,t.jsxs)("div",{className:"cbox",children:[(0,t.jsxs)("div",{className:"hdr",children:[(0,t.jsx)("span",{children:"you hold"}),(0,t.jsx)("span",{className:"ann",children:b?`wallet holds ${(0,l.compactQty)(v)} \xb7 drag to model`:y?"balance unavailable · drag":"wallet not connected · drag"})]}),(0,t.jsxs)("div",{className:"amt",children:[j.toLocaleString("en-US")," ",(0,t.jsx)("small",{children:"HOOD10"})]}),(0,t.jsx)("input",{type:"range",min:0,max:1e3,value:p,onChange:e=>m(Number(e.target.value)),"aria-label":"HOOD10 amount","aria-valuetext":`${j.toLocaleString("en-US")} HOOD10`}),(0,t.jsx)("div",{className:"chips",children:h.map(e=>{let r=p===d(e.value);return(0,t.jsx)("button",{type:"button",className:r?"chip on":"chip","aria-pressed":r,onClick:()=>m(d(e.value)),children:e.label},e.label)})}),(0,t.jsxs)("div",{className:"cstats onink",children:[(0,t.jsxs)("div",{className:"cs dark",children:[(0,t.jsx)("div",{className:"k",children:"position value"}),(0,t.jsx)("div",{className:"v",children:(0,l.usd)(N)})]}),(0,t.jsxs)("div",{className:"cs dark",children:[(0,t.jsx)("div",{className:"k",children:"share of supply"}),(0,t.jsxs)("div",{className:"v",children:[(j/a*100).toFixed(3),"%"]})]})]}),b&&(0,t.jsx)("p",{className:"caveat",children:w?(0,t.jsxs)(t.Fragment,{children:["This wallet clears the ",(0,t.jsx)("b",{children:1e5.toLocaleString("en-US")})," minimum and was in the eligible set at the last snapshot."]}):(0,t.jsxs)(t.Fragment,{children:["This wallet holds less than the ",(0,t.jsx)("b",{children:1e5.toLocaleString("en-US")})," minimum, so it is not in the distribution set."]})})]}),(0,t.jsxs)("div",{className:"cbox neon",children:[(0,t.jsxs)("div",{className:"hdr",children:[(0,t.jsx)("span",{children:"you'd collect, per epoch"}),(0,t.jsx)("span",{className:"ann",children:"in kind"})]}),(0,t.jsx)("div",{className:"amt",children:E?(0,l.usd)(M,2):"—"}),(0,t.jsxs)("div",{className:"cstats",children:[(0,t.jsxs)("div",{className:"cs",children:[(0,t.jsx)("div",{className:"k",children:"trailing yield, per epoch"}),(0,t.jsx)("div",{className:"v",children:E?k.toFixed(2)+"%":"—"})]}),(0,t.jsxs)("div",{className:"cs",children:[(0,t.jsx)("div",{className:"k",children:"annualised, simple"}),(0,t.jsx)("div",{className:"v",children:E?Math.round(C).toLocaleString("en-US")+"%":"—"})]})]}),(0,t.jsx)("p",{className:"caveat",children:E?"Computed from the most recent settled epoch only. It is what that epoch would have paid you, not what the next one will.":"No epoch has settled yet, so there is no trailing figure to compute from. This fills in after the first distribution."})]})]}),(0,t.jsxs)("div",{className:"mt-[1.4rem]",children:[(0,t.jsxs)(n,{className:"pb-[.6rem]",children:[(0,t.jsx)("span",{children:"your slice, token by token"}),(0,t.jsxs)("span",{className:"ann",children:[e.length," rows"]})]}),(0,t.jsx)("div",{children:e.map(r=>{let n=M*(S>0?(r.weightBps??0)/S:1/(e.length||1)),s=r.tokenPrice>0?n/r.tokenPrice:0;return(0,t.jsxs)("div",{className:"crow",children:[(0,t.jsx)(o,{t:r}),(0,t.jsx)("span",{children:(0,t.jsx)("b",{children:r.ticker})}),(0,t.jsx)("span",{className:"q",children:E?(0,l.compactQty)(s):"—"}),(0,t.jsx)("span",{className:"d",children:E?(0,l.usd)(n,2):"—"})]},r.ticker)})})]})]})}],36379)},79971,e=>{"use strict";var t=e.i(56533),r=e.i(16861),n=e.i(80080),s=e.i(75379),a=e.i(48733);e.s(["ConnectButton",0,function(){let{wallets:e,address:i,balance:o,connecting:l,error:c,onRobinhood:u,connect:d,disconnect:h,switchChain:f}=(0,n.useWallet)(),[p,m]=(0,r.useState)(!1),x=(0,r.useRef)(null);if((0,r.useEffect)(()=>{if(!p)return;let e=e=>{x.current&&!x.current.contains(e.target)&&m(!1)},t=e=>"Escape"===e.key&&m(!1);return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[p]),i)return(0,t.jsxs)("div",{className:"wl",ref:x,children:[(0,t.jsxs)("button",{type:"button",className:"connect on",onClick:()=>m(e=>!e),"aria-expanded":p,children:[(0,t.jsx)("i",{"aria-hidden":"true"}),(0,a.shortAddress)(i)]}),p&&(0,t.jsxs)("div",{className:"wl-pop",role:"dialog","aria-label":"Wallet",children:[(0,t.jsxs)("div",{className:"wl-row",children:[(0,t.jsx)("span",{children:"HOOD10"}),(0,t.jsx)("b",{children:null===o?"—":(0,s.compactQty)(o)})]}),(0,t.jsxs)("div",{className:"wl-row",children:[(0,t.jsx)("span",{children:"network"}),(0,t.jsx)("b",{className:u?"ok":"warn",children:u?"Robinhood Chain":"wrong network"})]}),!u&&(0,t.jsx)("button",{type:"button",className:"wl-act",onClick:()=>void f(),children:"Switch to Robinhood Chain"}),(0,t.jsx)("button",{type:"button",className:"wl-act ghost",onClick:()=>{h(),m(!1)},children:"Disconnect"}),c&&(0,t.jsx)("p",{className:"wl-err",children:c})]})]});let v=1===e.length;return(0,t.jsxs)("div",{className:"wl",ref:x,children:[(0,t.jsxs)("button",{type:"button",className:"connect",disabled:l,onClick:()=>v?void d(e[0].info.rdns):m(e=>!e),"aria-expanded":v?void 0:p,children:[(0,t.jsx)("i",{"aria-hidden":"true"}),l?"CONNECTING…":(0,t.jsxs)(t.Fragment,{children:["CONNECT",(0,t.jsx)("span",{className:"lw",children:" WALLET"})]})]}),p&&!v&&(0,t.jsxs)("div",{className:"wl-pop",role:"dialog","aria-label":"Choose a wallet",children:[0===e.length?(0,t.jsx)("p",{className:"wl-err",children:"No wallet detected. Install a browser wallet, or open this page inside your wallet’s browser."}):e.map(e=>(0,t.jsxs)("button",{type:"button",className:"wl-opt",onClick:()=>{d(e.info.rdns),m(!1)},children:[e.info.icon?(0,t.jsx)("img",{src:e.info.icon,alt:"",width:18,height:18}):(0,t.jsx)("span",{className:"wl-dot","aria-hidden":"true"}),e.info.name]},e.info.uuid)),c&&(0,t.jsx)("p",{className:"wl-err",children:c})]}),c&&!p&&(0,t.jsx)("span",{className:"sr-only",children:c})]})}])},83017,e=>{"use strict";var t=e.i(56533),r=e.i(16861),n=e.i(75379);e.s(["Countdown",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=()=>{let t=Date.now(),r=Math.max(0,Math.floor((108e5*Math.ceil(t/108e5)-t)/1e3));e.current&&(e.current.textContent=`${(0,n.pad2)(Math.floor(r/3600))}:${(0,n.pad2)(Math.floor(r%3600/60))}:${(0,n.pad2)(r%60)}`)};t();let r=setInterval(t,1e3);return()=>clearInterval(r)},[]),(0,t.jsx)("div",{className:"v g",ref:e,children:"··:··:··"})}])},96199,e=>{"use strict";var t=e.i(56533),r=e.i(16861);e.s(["Reveal",0,function({className:e,children:n}){let s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=s.current;if(!e||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=e.querySelectorAll("[data-cu],[data-fill]");if(0===t.length)return;let r=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=t.target;void 0!==e.dataset.cu&&function(e){let t=parseFloat(e.dataset.cu??"0"),r=Number(e.dataset.dp??0),n=e.dataset.pre??"",s=e.dataset.suf??"",a=performance.now(),i=o=>{let l=Math.min(1,(o-a)/1500);e.textContent=n+(t*(1-Math.pow(1-l,3))).toLocaleString("en-US",{minimumFractionDigits:r,maximumFractionDigits:r})+s,l<1&&requestAnimationFrame(i)};i(a)}(e),void 0!==e.dataset.fill&&function(e){let t=e.style.width;e.style.transition="none",e.style.width="0%",e.offsetWidth,e.style.transition="",e.style.width=t}(e),r.unobserve(e)}},{threshold:.4});return t.forEach(e=>r.observe(e)),()=>r.disconnect()},[]),(0,t.jsx)("div",{ref:s,className:e,children:n})}])},96134,e=>{"use strict";var t=e.i(56533),r=e.i(16861);let n=[2500,6e3,12e3],s=new Map,a=new Map,i=Promise.resolve(),o=e=>new Promise(t=>setTimeout(t,e));async function l(e){for(let t=0;;t++)try{let r=await fetch(`https://api.geckoterminal.com/api/v2/networks/robinhood/pools/${e}/ohlcv/hour?limit=48`,{headers:{accept:"application/json"},signal:AbortSignal.timeout(1e4)});if(r.ok)return function(e){let t=e?.data?.attributes?.ohlcv_list;return Array.isArray(t)?t.map(e=>Array.isArray(e)?{ts:Number(e[0]),c:Number(e[4])}:null).filter(e=>!!e&&e.c>0&&Number.isFinite(e.ts)).sort((e,t)=>e.ts-t.ts).map(e=>e.c):[]}(await r.json());if(t<n.length&&(429===r.status||r.status>=500)){await o(n[t]);continue}return[]}catch{if(t<n.length){await o(n[t]);continue}return[]}}e.s(["Sparkline",0,function({up:e,points:n,pool:c,stroke:u}){let d,[h,f]=(0,r.useState)(null),p=n&&n.length>=2?n:null;(0,r.useEffect)(()=>{if(p||!c)return;let e=!1;return(function(e){let t=s.get(e);if(t)return Promise.resolve(t);let r=a.get(e);if(r)return r;let n=i.then(async()=>{let t=await l(e);return t.length>=2&&s.set(e,t),a.delete(e),await o(900),t});return a.set(e,n),i=n.catch(()=>void 0),n})(c).then(t=>{!e&&t.length>=2&&f(t)}),()=>{e=!0}},[p,c]);let m=p??h;if(m&&m.length>=2){let e=Math.min(...m),t=Math.max(...m)-e||1;d=m.map((r,n)=>`${(n/(m.length-1)*100).toFixed(1)},${(35-(r-e)/t*30).toFixed(1)}`)}else d=["0,20","100,20"];return(0,t.jsx)("svg",{className:"spark",viewBox:"0 0 100 40",preserveAspectRatio:"none","aria-hidden":"true",children:(0,t.jsx)("polyline",{points:d.join(" "),fill:"none",stroke:m?u??(e?"var(--color-neon)":"var(--color-dim)"):"var(--color-rule-2)",strokeWidth:"1.5",strokeDasharray:m?void 0:"2 3",vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"})})}],96134)},89168,e=>{"use strict";var t=e.i(56533),r=e.i(16861);
function createNeuralNet(canvasEl, containerEl, fpsEl) {
  let destroyed = false;
  const ctx = canvasEl.getContext("2d");
  let nodes = [];
  let edges = [];
  const NODE_COUNT = 64;
  for (let i = 0; i < NODE_COUNT; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / NODE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const jitter = 0.82 + 0.36 * Math.random();
    nodes.push({
      x: Math.sin(phi) * Math.cos(theta) * jitter,
      y: Math.sin(phi) * Math.sin(theta) * jitter,
      z: Math.cos(phi) * jitter,
    });
  }
  for (let i = 0; i < nodes.length; i++) {
    const nodeA = nodes[i];
    const dists = [];
    for (let j = 0; j < nodes.length; j++) {
      if (j === i) continue;
      const nodeB = nodes[j];
      dists.push([j, Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y, nodeA.z - nodeB.z)]);
    }
    dists.sort((p, q) => p[1] - q[1]);
    const linkCount = 2 + Math.floor(2 * Math.random());
    for (let k = 0; k < linkCount; k++) {
      const j = dists[k][0];
      if (i < j) edges.push([i, j]);
    }
  }

  let pulses = [];
  let yaw = 0, pitch = 0.5, yawTarget = 0, pitchTarget = 0.5;
  let dragging = false, lastX = 0, lastY = 0;
  let frameCount = 0, lastFpsTime = performance.now(), lastFrameTime = performance.now();

  function resize() {
    const rect = containerEl.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvasEl.width = Math.floor(w * dpr);
    canvasEl.height = Math.floor(h * dpr);
    canvasEl.style.width = w + "px";
    canvasEl.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const rootStyle = getComputedStyle(document.documentElement);
  let accent = (rootStyle.getPropertyValue("--color-neon") || "#ff6f00").trim();
  if (!/^#[0-9a-fA-F]{6}$/.test(accent)) accent = "#ff6f00";
  const rC = parseInt(accent.slice(1, 3), 16);
  const gC = parseInt(accent.slice(3, 5), 16);
  const bC = parseInt(accent.slice(5, 7), 16);
  function rgba(a) { return "rgba(" + rC + "," + gC + "," + bC + "," + a + ")"; }

  function pickEdgeIndex() {
    return Math.floor(Math.random() * edges.length);
  }

  function frame(now) {
    if (destroyed) return;
    const dt = now - lastFrameTime;
    lastFrameTime = now;
    frameCount++;
    if (now - lastFpsTime > 1000) {
      if (fpsEl) fpsEl.textContent = Math.round((1000 * frameCount) / (now - lastFpsTime)) + " fps";
      frameCount = 0;
      lastFpsTime = now;
    }

    const rect = containerEl.getBoundingClientRect();
    if (rect.width < 10) {
      requestAnimationFrame(frame);
      return;
    }

    if (!dragging) yawTarget += 0.00022 * dt;
    yaw += (yawTarget - yaw) * 0.08;
    pitch += (pitchTarget - pitch) * 0.08;

    const cosYaw = Math.cos(yaw), sinYaw = Math.sin(yaw);
    const cosPitch = Math.cos(pitch), sinPitch = Math.sin(pitch);

    const cx = rect.width / 2, cy = rect.height / 2;
    const scale = Math.min(rect.width, rect.height) * 0.42;

    ctx.clearRect(0, 0, rect.width, rect.height);

    const projected = nodes.map(p => {
      const x1 = p.x * cosYaw - p.z * sinYaw;
      const z1 = p.z * cosYaw + p.x * sinYaw;
      const y1 = p.y * cosPitch - z1 * sinPitch;
      const z2 = z1 * cosPitch + p.y * sinPitch;
      return { x: x1, y: y1, z: z2 };
    });

    if (edges.length && Math.random() < (0.035 * dt) / 16) {
      pulses.push({ edge: pickEdgeIndex(), t: 0 });
    }

    for (let i = 0; i < edges.length; i++) {
      const ia = edges[i][0], ib = edges[i][1];
      const pa = projected[ia], pb = projected[ib];
      const depth = (pa.z + pb.z) / 2;
      const alpha = 0.08 + 0.22 * ((depth + 1.2) / 2.2);
      ctx.strokeStyle = rgba(Math.max(0.02, alpha));
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx + pa.x * scale, cy + pa.y * scale);
      ctx.lineTo(cx + pb.x * scale, cy + pb.y * scale);
      ctx.stroke();
    }

    for (let i = pulses.length - 1; i >= 0; i--) {
      const pu = pulses[i];
      pu.t += (0.018 * dt) / 16;
      if (pu.t >= 1) { pulses.splice(i, 1); continue; }
      const ia = edges[pu.edge][0], ib = edges[pu.edge][1];
      const pa = projected[ia], pb = projected[ib];
      const px = pa.x + (pb.x - pa.x) * pu.t;
      const py = pa.y + (pb.y - pa.y) * pu.t;
      ctx.beginPath();
      ctx.arc(cx + px * scale, cy + py * scale, 2, 0, Math.PI * 2);
      ctx.fillStyle = rgba(0.95);
      ctx.shadowColor = accent;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      const depthFactor = 0.5 + 0.5 * ((p.z + 1.2) / 2.2);
      const rad = 1 + 1.6 * depthFactor;
      ctx.beginPath();
      ctx.arc(cx + p.x * scale, cy + p.y * scale, rad, 0, Math.PI * 2);
      ctx.fillStyle = rgba(0.35 + 0.5 * depthFactor);
      ctx.shadowColor = accent;
      ctx.shadowBlur = 6 * depthFactor;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(frame);
  }

  function onPointerDown(e) {
    dragging = true; lastX = e.clientX; lastY = e.clientY;
    canvasEl.setPointerCapture(e.pointerId);
  }
  function onPointerUp() { dragging = false; }
  function onPointerMove(e) {
    if (!dragging) return;
    yawTarget += (e.clientX - lastX) * 0.006;
    pitchTarget += (e.clientY - lastY) * 0.006;
    lastX = e.clientX; lastY = e.clientY;
  }

  canvasEl.addEventListener("pointerdown", onPointerDown);
  canvasEl.addEventListener("pointerup", onPointerUp);
  canvasEl.addEventListener("pointercancel", onPointerUp);
  canvasEl.addEventListener("pointermove", onPointerMove);

  const ro = new ResizeObserver(resize);
  ro.observe(containerEl);
  resize();
  requestAnimationFrame(frame);

  return function destroy() {
    destroyed = true;
    ro.disconnect();
    canvasEl.removeEventListener("pointerdown", onPointerDown);
    canvasEl.removeEventListener("pointerup", onPointerUp);
    canvasEl.removeEventListener("pointercancel", onPointerUp);
    canvasEl.removeEventListener("pointermove", onPointerMove);
  };
}
e.s(["AsciiStage",0,function(){
  let stageRef = (0,r.useRef)(null), canvasRef = (0,r.useRef)(null), fpsRef = (0,r.useRef)(null);
  return (0,r.useEffect)(() => {
    let stageEl = stageRef.current, canvasEl = canvasRef.current, fpsEl = fpsRef.current;
    if (!stageEl || !canvasEl) return;
    let destroy = createNeuralNet(canvasEl, stageEl, fpsEl);
    return () => { destroy && destroy(); };
  }, []),
  (0,t.jsxs)("div",{className:"stage",ref:stageRef,"aria-hidden":"true",children:[
    (0,t.jsx)("canvas",{className:"ascii-canvas",ref:canvasRef}),
    (0,t.jsx)("span",{className:"cn tl",children:"neural · rotating"}),
    (0,t.jsx)("span",{className:"cn tr",ref:fpsRef,children:"— fps"}),
    (0,t.jsx)("span",{className:"cn bl",children:"drag to rotate"}),
    (0,t.jsx)("span",{className:"cn br",children:"64 nodes"})
  ]})
}])},93842,e=>{"use strict";function t(e,t,r,n){let s=Array(e*t).fill(" "),a=Array(e*t).fill(0);for(let i=0;i<6.283;i+=.06)for(let o=0;o<6.283;o+=.015){let l=Math.sin(o),c=Math.cos(i),u=Math.sin(r),d=Math.sin(i),h=Math.cos(r),f=c+2,p=1/(l*f*u+d*h+5),m=Math.cos(o),x=Math.cos(n),v=Math.sin(n),g=l*f*h-d*u,j=Math.floor(e/2+.21*e*p*(m*f*x-g*v)),y=Math.floor(t/2+.42*t*p*(m*f*v+g*x)),b=j+e*y,w=Math.floor(8*((d*u-l*c*h)*x-l*c*u-d*h-m*c*v));y>=0&&y<t&&j>=0&&j<e&&p>a[b]&&(a[b]=p,s[b]=".,-~:;=!*#$@"[w>0?w:0])}let i="";for(let r=0;r<t;r++)i+=s.slice(r*e,(r+1)*e).join("")+"\n";return i}let r=t(104,44,1.1,.6);e.s(["BAKED_FRAME",0,r,"renderDonutFrame",0,t])},26847,e=>{e.v(t=>Promise.all(["static/immutable/chunks/3c2b3g-azs6z2.js"].map(t=>e.l(t))).then(()=>t(11184)))},75379,e=>{"use strict";e.s(["compactQty",0,function(e){return e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":e>=1?e.toFixed(1):e.toPrecision(2)},"pad2",0,function(e){return e<10?"0"+e:String(e)},"usd",0,function(e,t=0){return"$"+e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}])}]);