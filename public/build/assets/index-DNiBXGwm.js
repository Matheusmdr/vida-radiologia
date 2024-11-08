import{r as D,j as y,a as Oe}from"./app-DQ45nbNN.js";import{c as ie,B as ye,A as pt,t as xt,l as gt}from"./react-icons.esm-CEszRcT5.js";import{c as ht}from"./createLucideIcon-BQgjaQui.js";import{M as yt,T as bt}from"./main-layout-XmXNRjhT.js";import{C as St,a as jt,b as Nt,c as wt}from"./card-eqtL7d18.js";import"./toaster-Dr-4jIAi.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=ht("CircleArrowRight",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]),vt={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function De(e={}){let t,n,r,i=!1,o=!0,s=!1,l=0;function a(N,L){n=N;const{mergeOptions:v,optionsAtMedia:w}=L,E=v(vt,De.globalOptions),C=v(E,e);if(t=w(C),n.scrollSnapList().length<=1)return;s=t.jump,r=!1;const{eventStore:O,ownerDocument:I}=n.internalEngine(),M=n.rootNode(),R=t.rootNode&&t.rootNode(M)||M,V=n.containerNode();n.on("pointerDown",u),t.stopOnInteraction||n.on("pointerUp",x),t.stopOnMouseEnter&&(O.add(R,"mouseenter",()=>{o=!1,u()}),t.stopOnInteraction||O.add(R,"mouseleave",()=>{o=!0,x()})),t.stopOnFocusIn&&(n.on("slideFocusStart",u),t.stopOnInteraction||O.add(V,"focusout",x)),O.add(I,"visibilitychange",g),t.playOnInit&&!S()&&x()}function c(){n.off("pointerDown",u).off("pointerUp",x).off("slideFocusStart",u),u(),r=!0,i=!1}function x(){if(r||!o)return;i||n.emit("autoplay:play");const{ownerWindow:N}=n.internalEngine();N.clearInterval(l),l=N.setInterval(p,t.delay),i=!0}function u(){if(r)return;i&&n.emit("autoplay:stop");const{ownerWindow:N}=n.internalEngine();N.clearInterval(l),l=0,i=!1}function g(){if(S())return o=i,u();o&&x()}function S(){const{ownerDocument:N}=n.internalEngine();return N.visibilityState==="hidden"}function f(N){typeof N<"u"&&(s=N),o=!0,x()}function m(){i&&u()}function h(){i&&f()}function d(){return i}function p(){const{index:N}=n.internalEngine(),L=N.clone().add(1).get(),v=n.scrollSnapList().length-1;t.stopOnLastSnap&&L===v&&u(),n.canScrollNext()?n.scrollNext(s):n.scrollTo(0,s)}return{name:"autoplay",options:e,init:a,destroy:c,play:f,stop:m,reset:h,isPlaying:d}}De.globalOptions=void 0;function Et(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ke(e){return Et(e)||Array.isArray(e)}function Ct(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Pe(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==o?!1:n.every(s=>{const l=e[s],a=t[s];return typeof l=="function"?`${l}`==`${a}`:!Ke(l)||!Ke(a)?l===a:Pe(l,a)})}function Qe(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function It(e,t){if(e.length!==t.length)return!1;const n=Qe(e),r=Qe(t);return n.every((i,o)=>{const s=r[o];return Pe(i,s)})}function ke(e){return typeof e=="number"}function Ae(e){return typeof e=="string"}function Se(e){return typeof e=="boolean"}function _e(e){return Object.prototype.toString.call(e)==="[object Object]"}function P(e){return Math.abs(e)}function Me(e){return Math.sign(e)}function de(e,t){return P(e-t)}function Lt(e,t){if(e===0||t===0||P(e)<=P(t))return 0;const n=de(P(e),P(t));return P(n/e)}function me(e){return pe(e).map(Number)}function G(e){return e[ge(e)]}function ge(e){return Math.max(0,e.length-1)}function Fe(e,t){return t===ge(e)}function Je(e,t=0){return Array.from(Array(e),(n,r)=>t+r)}function pe(e){return Object.keys(e)}function Ye(e,t){return[e,t].reduce((n,r)=>(pe(r).forEach(i=>{const o=n[i],s=r[i],l=_e(o)&&_e(s);n[i]=l?Ye(o,s):s}),n),{})}function Te(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Ot(e,t){const n={start:r,center:i,end:o};function r(){return 0}function i(a){return o(a)/2}function o(a){return t-a}function s(a,c){return Ae(e)?n[e](a):e(t,a,c)}return{measure:s}}function xe(){let e=[];function t(i,o,s,l={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(o,s,l),a=()=>i.removeEventListener(o,s,l);else{const c=i;c.addListener(s),a=()=>c.removeListener(s)}return e.push(a),r}function n(){e=e.filter(i=>i())}const r={add:t,clear:n};return r}function At(e,t,n,r){const i=xe(),o=1e3/60;let s=null,l=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&f()})}function x(){S(),i.clear()}function u(h){if(!a)return;s||(s=h);const d=h-s;for(s=h,l+=d;l>=o;)n(o),l-=o;const p=l/o;r(p),a&&t.requestAnimationFrame(u)}function g(){a||(a=t.requestAnimationFrame(u))}function S(){t.cancelAnimationFrame(a),s=null,l=0,a=0}function f(){s=null,l=0}return{init:c,destroy:x,start:g,stop:S,update:()=>n(o),render:r}}function Tt(e,t){const n=t==="rtl",r=e==="y",i=r?"y":"x",o=r?"x":"y",s=!r&&n?-1:1,l=x(),a=u();function c(f){const{height:m,width:h}=f;return r?m:h}function x(){return r?"top":n?"right":"left"}function u(){return r?"bottom":n?"left":"right"}function g(f){return f*s}return{scroll:i,cross:o,startEdge:l,endEdge:a,measureSize:c,direction:g}}function se(e=0,t=0){const n=P(e-t);function r(c){return c<e}function i(c){return c>t}function o(c){return r(c)||i(c)}function s(c){return o(c)?r(c)?e:t:c}function l(c){return n?c-n*Math.ceil((c-t)/n):c}return{length:n,max:t,min:e,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:l}}function Ze(e,t,n){const{constrain:r}=se(0,e),i=e+1;let o=s(t);function s(g){return n?P((i+g)%i):r(g)}function l(){return o}function a(g){return o=s(g),u}function c(g){return x().set(l()+g)}function x(){return Ze(e,l(),n)}const u={get:l,set:a,add:c,clone:x};return u}function Dt(e,t,n,r,i,o,s,l,a,c,x,u,g,S,f,m,h,d,p){const{cross:j,direction:N}=e,L=["INPUT","SELECT","TEXTAREA"],v={passive:!1},w=xe(),E=xe(),C=se(50,225).constrain(S.measure(20)),O={mouse:300,touch:400},I={mouse:500,touch:600},M=f?43:25;let R=!1,V=0,$=0,te=!1,Y=!1,K=!1,Q=!1;function ce(b){if(!p)return;function A(z){(Se(p)||p(b,z))&&le(z)}const k=t;w.add(k,"dragstart",z=>z.preventDefault(),v).add(k,"touchmove",()=>{},v).add(k,"touchend",()=>{}).add(k,"touchstart",A).add(k,"mousedown",A).add(k,"touchcancel",F).add(k,"contextmenu",F).add(k,"click",J,!0)}function U(){w.clear(),E.clear()}function re(){const b=Q?n:t;E.add(b,"touchmove",B,v).add(b,"touchend",F).add(b,"mousemove",B,v).add(b,"mouseup",F)}function oe(b){const A=b.nodeName||"";return L.includes(A)}function _(){return(f?I:O)[Q?"mouse":"touch"]}function ae(b,A){const k=u.add(Me(b)*-1),z=x.byDistance(b,!f).distance;return f||P(b)<C?z:h&&A?z*.5:x.byIndex(k.get(),0).distance}function le(b){const A=Te(b,r);Q=A,K=f&&A&&!b.buttons&&R,R=de(i.get(),s.get())>=2,!(A&&b.button!==0)&&(oe(b.target)||(te=!0,o.pointerDown(b),c.useFriction(0).useDuration(0),i.set(s),re(),V=o.readPoint(b),$=o.readPoint(b,j),g.emit("pointerDown")))}function B(b){if(!Te(b,r)&&b.touches.length>=2)return F(b);const k=o.readPoint(b),z=o.readPoint(b,j),q=de(k,V),X=de(z,$);if(!Y&&!Q&&(!b.cancelable||(Y=q>X,!Y)))return F(b);const Z=o.pointerMove(b);q>m&&(K=!0),c.useFriction(.3).useDuration(.75),l.start(),i.add(N(Z)),b.preventDefault()}function F(b){const k=x.byDistance(0,!1).index!==u.get(),z=o.pointerUp(b)*_(),q=ae(N(z),k),X=Lt(z,q),Z=M-10*X,W=d+X/50;Y=!1,te=!1,E.clear(),c.useDuration(Z).useFriction(W),a.distance(q,!f),Q=!1,g.emit("pointerUp")}function J(b){K&&(b.stopPropagation(),b.preventDefault(),K=!1)}function H(){return te}return{init:ce,destroy:U,pointerDown:H}}function Pt(e,t){let r,i;function o(u){return u.timeStamp}function s(u,g){const f=`client${(g||e.scroll)==="x"?"X":"Y"}`;return(Te(u,t)?u:u.touches[0])[f]}function l(u){return r=u,i=u,s(u)}function a(u){const g=s(u)-s(i),S=o(u)-o(r)>170;return i=u,S&&(r=u),g}function c(u){if(!r||!i)return 0;const g=s(i)-s(r),S=o(u)-o(r),f=o(u)-o(i)>170,m=g/S;return S&&!f&&P(m)>.1?m:0}return{pointerDown:l,pointerMove:a,pointerUp:c,readPoint:s}}function kt(){function e(n){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=n;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:e}}function Mt(e){function t(r){return e*(r/100)}return{measure:t}}function Ft(e,t,n,r,i,o,s){const l=[e].concat(r);let a,c,x=[],u=!1;function g(h){return i.measureSize(s.measure(h))}function S(h){if(!o)return;c=g(e),x=r.map(g);function d(p){for(const j of p){if(u)return;const N=j.target===e,L=r.indexOf(j.target),v=N?c:x[L],w=g(N?e:r[L]);if(P(w-v)>=.5){h.reInit(),t.emit("resize");break}}}a=new ResizeObserver(p=>{(Se(o)||o(h,p))&&d(p)}),n.requestAnimationFrame(()=>{l.forEach(p=>a.observe(p))})}function f(){u=!0,a&&a.disconnect()}return{init:S,destroy:f}}function zt(e,t,n,r,i,o){let s=0,l=0,a=i,c=o,x=e.get(),u=0;function g(v){const w=v/1e3,E=a*w,C=r.get()-e.get(),O=!a;let I=0;return O?(s=0,n.set(r),e.set(r),I=C):(n.set(e),s+=C/E,s*=c,x+=s,e.add(s*w),I=x-u),l=Me(I),u=x,L}function S(){const v=r.get()-t.get();return P(v)<.001}function f(){return a}function m(){return l}function h(){return s}function d(){return j(i)}function p(){return N(o)}function j(v){return a=v,L}function N(v){return c=v,L}const L={direction:m,duration:f,velocity:h,seek:g,settled:S,useBaseFriction:p,useBaseDuration:d,useFriction:N,useDuration:j};return L}function Rt(e,t,n,r,i){const o=i.measure(10),s=i.measure(50),l=se(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function x(S){if(!c())return;const f=e.reachedMin(t.get())?"min":"max",m=P(e[f]-t.get()),h=n.get()-t.get(),d=l.constrain(m/s);n.subtract(h*d),!S&&P(h)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function u(S){a=!S}return{shouldConstrain:c,constrain:x,toggleActive:u}}function Bt(e,t,n,r,i){const o=se(-t+e,0),s=u(),l=x(),a=g();function c(f,m){return de(f,m)<1}function x(){const f=s[0],m=G(s),h=s.lastIndexOf(f),d=s.indexOf(m)+1;return se(h,d)}function u(){return n.map((f,m)=>{const{min:h,max:d}=o,p=o.constrain(f),j=!m,N=Fe(n,m);return j?d:N||c(h,p)?h:c(d,p)?d:p}).map(f=>parseFloat(f.toFixed(3)))}function g(){if(t<=e+i)return[o.max];if(r==="keepSnaps")return s;const{min:f,max:m}=l;return s.slice(f,m)}return{snapsContained:a,scrollContainLimit:l}}function Vt(e,t,n){const r=t[0],i=n?r-e:G(t);return{limit:se(i,r)}}function Ht(e,t,n,r){const o=t.min+.1,s=t.max+.1,{reachedMin:l,reachedMax:a}=se(o,s);function c(g){return g===1?a(n.get()):g===-1?l(n.get()):!1}function x(g){if(!c(g))return;const S=e*(g*-1);r.forEach(f=>f.add(S))}return{loop:x}}function Gt(e){const{max:t,length:n}=e;function r(o){const s=o-t;return n?s/-n:0}return{get:r}}function $t(e,t,n,r,i){const{startEdge:o,endEdge:s}=e,{groupSlides:l}=i,a=u().map(t.measure),c=g(),x=S();function u(){return l(r).map(m=>G(m)[s]-m[0][o]).map(P)}function g(){return r.map(m=>n[o]-m[o]).map(m=>-P(m))}function S(){return l(c).map(m=>m[0]).map((m,h)=>m+a[h])}return{snaps:c,snapsAligned:x}}function Ut(e,t,n,r,i,o){const{groupSlides:s}=i,{min:l,max:a}=r,c=x();function x(){const g=s(o),S=!e||t==="keepSnaps";return n.length===1?[o]:S?g:g.slice(l,a).map((f,m,h)=>{const d=!m,p=Fe(h,m);if(d){const j=G(h[0])+1;return Je(j)}if(p){const j=ge(o)-G(h)[0]+1;return Je(j,G(h)[0])}return f})}return{slideRegistry:c}}function qt(e,t,n,r,i){const{reachedAny:o,removeOffset:s,constrain:l}=r;function a(f){return f.concat().sort((m,h)=>P(m)-P(h))[0]}function c(f){const m=e?s(f):l(f),h=t.map((p,j)=>({diff:x(p-m,0),index:j})).sort((p,j)=>P(p.diff)-P(j.diff)),{index:d}=h[0];return{index:d,distance:m}}function x(f,m){const h=[f,f+n,f-n];if(!e)return f;if(!m)return a(h);const d=h.filter(p=>Me(p)===m);return d.length?a(d):G(h)-n}function u(f,m){const h=t[f]-i.get(),d=x(h,m);return{index:f,distance:d}}function g(f,m){const h=i.get()+f,{index:d,distance:p}=c(h),j=!e&&o(h);if(!m||j)return{index:d,distance:f};const N=t[d]-p,L=f+x(N,0);return{index:d,distance:L}}return{byDistance:g,byIndex:u,shortcut:x}}function Kt(e,t,n,r,i,o,s){function l(u){const g=u.distance,S=u.index!==t.get();o.add(g),g&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),S&&(n.set(t.get()),t.set(u.index),s.emit("select"))}function a(u,g){const S=i.byDistance(u,g);l(S)}function c(u,g){const S=t.clone().set(u),f=i.byIndex(S.get(),g);l(f)}return{distance:a,index:c}}function Qt(e,t,n,r,i,o,s,l){const a={passive:!0,capture:!0};let c=0;function x(S){if(!l)return;function f(m){if(new Date().getTime()-c>10)return;s.emit("slideFocusStart"),e.scrollLeft=0;const p=n.findIndex(j=>j.includes(m));ke(p)&&(i.useDuration(0),r.index(p,0),s.emit("slideFocus"))}o.add(document,"keydown",u,!1),t.forEach((m,h)=>{o.add(m,"focus",d=>{(Se(l)||l(S,d))&&f(h)},a)})}function u(S){S.code==="Tab"&&(c=new Date().getTime())}return{init:x}}function fe(e){let t=e;function n(){return t}function r(a){t=s(a)}function i(a){t+=s(a)}function o(a){t-=s(a)}function s(a){return ke(a)?a:a.get()}return{get:n,set:r,add:i,subtract:o}}function We(e,t){const n=e.scroll==="x"?o:s,r=t.style;let i=!1;function o(u){return`translate3d(${u}px,0px,0px)`}function s(u){return`translate3d(0px,${u}px,0px)`}function l(u){i||(r.transform=n(e.direction(u)))}function a(u){i=!u}function c(){i||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:c,to:l,toggleActive:a}}function _t(e,t,n,r,i,o,s,l,a){const x=me(i),u=me(i).reverse(),g=d().concat(p());function S(w,E){return w.reduce((C,O)=>C-i[O],E)}function f(w,E){return w.reduce((C,O)=>S(C,E)>0?C.concat([O]):C,[])}function m(w){return o.map((E,C)=>({start:E-r[C]+.5+w,end:E+t-.5+w}))}function h(w,E,C){const O=m(E);return w.map(I=>{const M=C?0:-n,R=C?n:0,V=C?"end":"start",$=O[I][V];return{index:I,loopPoint:$,slideLocation:fe(-1),translate:We(e,a[I]),target:()=>l.get()>$?M:R}})}function d(){const w=s[0],E=f(u,w);return h(E,n,!1)}function p(){const w=t-s[0]-1,E=f(x,w);return h(E,-n,!0)}function j(){return g.every(({index:w})=>{const E=x.filter(C=>C!==w);return S(E,t)<=.1})}function N(){g.forEach(w=>{const{target:E,translate:C,slideLocation:O}=w,I=E();I!==O.get()&&(C.to(I),O.set(I))})}function L(){g.forEach(w=>w.translate.clear())}return{canLoop:j,clear:L,loop:N,loopPoints:g}}function Jt(e,t,n){let r,i=!1;function o(a){if(!n)return;function c(x){for(const u of x)if(u.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}r=new MutationObserver(x=>{i||(Se(n)||n(a,x))&&c(x)}),r.observe(e,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function Xt(e,t,n,r){const i={};let o=null,s=null,l,a=!1;function c(){l=new IntersectionObserver(f=>{a||(f.forEach(m=>{const h=t.indexOf(m.target);i[h]=m}),o=null,s=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(f=>l.observe(f))}function x(){l&&l.disconnect(),a=!0}function u(f){return pe(i).reduce((m,h)=>{const d=parseInt(h),{isIntersecting:p}=i[d];return(f&&p||!f&&!p)&&m.push(d),m},[])}function g(f=!0){if(f&&o)return o;if(!f&&s)return s;const m=u(f);return f&&(o=m),f||(s=m),m}return{init:c,destroy:x,get:g}}function Yt(e,t,n,r,i,o){const{measureSize:s,startEdge:l,endEdge:a}=e,c=n[0]&&i,x=f(),u=m(),g=n.map(s),S=h();function f(){if(!c)return 0;const p=n[0];return P(t[l]-p[l])}function m(){if(!c)return 0;const p=o.getComputedStyle(G(r));return parseFloat(p.getPropertyValue(`margin-${a}`))}function h(){return n.map((p,j,N)=>{const L=!j,v=Fe(N,j);return L?g[j]+x:v?g[j]+u:N[j+1][l]-p[l]}).map(P)}return{slideSizes:g,slideSizesWithGaps:S,startGap:x,endGap:u}}function Zt(e,t,n,r,i,o,s,l,a){const{startEdge:c,endEdge:x,direction:u}=e,g=ke(n);function S(d,p){return me(d).filter(j=>j%p===0).map(j=>d.slice(j,j+p))}function f(d){return d.length?me(d).reduce((p,j,N)=>{const L=G(p)||0,v=L===0,w=j===ge(d),E=i[c]-o[L][c],C=i[c]-o[j][x],O=!r&&v?u(s):0,I=!r&&w?u(l):0,M=P(C-I-(E+O));return N&&M>t+a&&p.push(j),w&&p.push(d.length),p},[]).map((p,j,N)=>{const L=Math.max(N[j-1]||0);return d.slice(L,p)}):[]}function m(d){return g?S(d,n):f(d)}return{groupSlides:m}}function Wt(e,t,n,r,i,o,s){const{align:l,axis:a,direction:c,startIndex:x,loop:u,duration:g,dragFree:S,dragThreshold:f,inViewThreshold:m,slidesToScroll:h,skipSnaps:d,containScroll:p,watchResize:j,watchSlides:N,watchDrag:L,watchFocus:v}=o,w=2,E=kt(),C=E.measure(t),O=n.map(E.measure),I=Tt(a,c),M=I.measureSize(C),R=Mt(M),V=Ot(l,M),$=!u&&!!p,te=u||!!p,{slideSizes:Y,slideSizesWithGaps:K,startGap:Q,endGap:ce}=Yt(I,C,O,n,te,i),U=Zt(I,M,h,u,C,O,Q,ce,w),{snaps:re,snapsAligned:oe}=$t(I,V,C,O,U),_=-G(re)+G(K),{snapsContained:ae,scrollContainLimit:le}=Bt(M,_,oe,p,w),B=$?ae:oe,{limit:F}=Vt(_,B,u),J=Ze(ge(B),x,u),H=J.clone(),T=me(n),b=({dragHandler:ee,scrollBody:Ee,scrollBounds:Ce,options:{loop:he}},Ie)=>{he||Ce.constrain(ee.pointerDown()),Ee.seek(Ie)},A=({scrollBody:ee,translate:Ee,location:Ce,offsetLocation:he,scrollLooper:Ie,slideLooper:at,dragHandler:lt,animation:ut,eventHandler:He,scrollBounds:ft,options:{loop:Ge}},$e)=>{const Ue=ee.settled(),dt=!ft.shouldConstrain(),qe=Ge?Ue:Ue&&dt;qe&&!lt.pointerDown()&&(ut.stop(),He.emit("settle")),qe||He.emit("scroll");const mt=Ce.get()*$e+Z.get()*(1-$e);he.set(mt),Ge&&(Ie.loop(ee.direction()),at.loop()),Ee.to(he.get())},k=At(r,i,ee=>b(ve,ee),ee=>A(ve,ee)),z=.68,q=B[J.get()],X=fe(q),Z=fe(q),W=fe(q),ne=fe(q),ue=zt(X,W,Z,ne,g,z),Ne=qt(u,B,_,F,ne),we=Kt(k,J,H,ue,Ne,ne,s),Re=Gt(F),Be=xe(),it=Xt(t,n,s,m),{slideRegistry:Ve}=Ut($,p,B,le,U,T),ct=Qt(e,n,Ve,we,ue,Be,s,v),ve={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:C,slideRects:O,animation:k,axis:I,dragHandler:Dt(I,e,r,i,ne,Pt(I,i),X,k,we,ue,Ne,J,s,R,S,f,d,z,L),eventStore:Be,percentOfView:R,index:J,indexPrevious:H,limit:F,location:X,offsetLocation:W,previousLocation:Z,options:o,resizeHandler:Ft(t,s,i,n,I,j,E),scrollBody:ue,scrollBounds:Rt(F,W,ne,ue,R),scrollLooper:Ht(_,F,W,[X,W,Z,ne]),scrollProgress:Re,scrollSnapList:B.map(Re.get),scrollSnaps:B,scrollTarget:Ne,scrollTo:we,slideLooper:_t(I,M,_,Y,K,re,B,W,n),slideFocus:ct,slidesHandler:Jt(t,s,N),slidesInView:it,slideIndexes:T,slideRegistry:Ve,slidesToScroll:U,target:ne,translate:We(I,t)};return ve}function en(){let e={},t;function n(c){t=c}function r(c){return e[c]||[]}function i(c){return r(c).forEach(x=>x(t,c)),a}function o(c,x){return e[c]=r(c).concat([x]),a}function s(c,x){return e[c]=r(c).filter(u=>u!==x),a}function l(){e={}}const a={init:n,emit:i,off:s,on:o,clear:l};return a}const tn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function nn(e){function t(o,s){return Ye(o,s||{})}function n(o){const s=o.breakpoints||{},l=pe(s).filter(a=>e.matchMedia(a).matches).map(a=>s[a]).reduce((a,c)=>t(a,c),{});return t(o,l)}function r(o){return o.map(s=>pe(s.breakpoints||{})).reduce((s,l)=>s.concat(l),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function sn(e){let t=[];function n(o,s){return t=s.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),t.forEach(l=>l.init(o,e)),s.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function r(){t=t.filter(o=>o.destroy())}return{init:n,destroy:r}}function be(e,t,n){const r=e.ownerDocument,i=r.defaultView,o=nn(i),s=sn(o),l=xe(),a=en(),{mergeOptions:c,optionsAtMedia:x,optionsMediaQueries:u}=o,{on:g,off:S,emit:f}=a,m=I;let h=!1,d,p=c(tn,be.globalOptions),j=c(p),N=[],L,v,w;function E(){const{container:T,slides:b}=j;v=(Ae(T)?e.querySelector(T):T)||e.children[0];const k=Ae(b)?v.querySelectorAll(b):b;w=[].slice.call(k||v.children)}function C(T){const b=Wt(e,v,w,r,i,T,a);if(T.loop&&!b.slideLooper.canLoop()){const A=Object.assign({},T,{loop:!1});return C(A)}return b}function O(T,b){h||(p=c(p,T),j=x(p),N=b||N,E(),d=C(j),u([p,...N.map(({options:A})=>A)]).forEach(A=>l.add(A,"change",I)),j.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(H),d.eventHandler.init(H),d.resizeHandler.init(H),d.slidesHandler.init(H),d.options.loop&&d.slideLooper.loop(),v.offsetParent&&w.length&&d.dragHandler.init(H),L=s.init(H,N)))}function I(T,b){const A=U();M(),O(c({startIndex:A},T),b),a.emit("reInit")}function M(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),s.destroy(),l.clear()}function R(){h||(h=!0,l.clear(),M(),a.emit("destroy"),a.clear())}function V(T,b,A){!j.active||h||(d.scrollBody.useBaseFriction().useDuration(b===!0?0:j.duration),d.scrollTo.index(T,A||0))}function $(T){const b=d.index.add(1).get();V(b,T,-1)}function te(T){const b=d.index.add(-1).get();V(b,T,1)}function Y(){return d.index.add(1).get()!==U()}function K(){return d.index.add(-1).get()!==U()}function Q(){return d.scrollSnapList}function ce(){return d.scrollProgress.get(d.location.get())}function U(){return d.index.get()}function re(){return d.indexPrevious.get()}function oe(){return d.slidesInView.get()}function _(){return d.slidesInView.get(!1)}function ae(){return L}function le(){return d}function B(){return e}function F(){return v}function J(){return w}const H={canScrollNext:Y,canScrollPrev:K,containerNode:F,internalEngine:le,destroy:R,off:S,on:g,emit:f,plugins:ae,previousScrollSnap:re,reInit:m,rootNode:B,scrollNext:$,scrollPrev:te,scrollProgress:ce,scrollSnapList:Q,scrollTo:V,selectedScrollSnap:U,slideNodes:J,slidesInView:oe,slidesNotInView:_};return O(t,n),setTimeout(()=>a.emit("init"),0),H}be.globalOptions=void 0;function ze(e={},t=[]){const n=D.useRef(e),r=D.useRef(t),[i,o]=D.useState(),[s,l]=D.useState(),a=D.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return D.useEffect(()=>{Pe(n.current,e)||(n.current=e,a())},[e,a]),D.useEffect(()=>{It(r.current,t)||(r.current=t,a())},[t,a]),D.useEffect(()=>{if(Ct()&&s){be.globalOptions=ze.globalOptions;const c=be(s,n.current,r.current);return o(c),()=>c.destroy()}else o(void 0)},[s,o]),[l,i]}ze.globalOptions=void 0;const et=D.createContext(null);function je(){const e=D.useContext(et);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const tt=D.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:r,className:i,children:o,...s},l)=>{const[a,c]=ze({...t,axis:e==="horizontal"?"x":"y"},r),[x,u]=D.useState(!1),[g,S]=D.useState(!1),f=D.useCallback(p=>{p&&(u(p.canScrollPrev()),S(p.canScrollNext()))},[]),m=D.useCallback(()=>{c==null||c.scrollPrev()},[c]),h=D.useCallback(()=>{c==null||c.scrollNext()},[c]),d=D.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),m()):p.key==="ArrowRight"&&(p.preventDefault(),h())},[m,h]);return D.useEffect(()=>{!c||!n||n(c)},[c,n]),D.useEffect(()=>{if(c)return f(c),c.on("reInit",f),c.on("select",f),()=>{c==null||c.off("select",f)}},[c,f]),y.jsx(et.Provider,{value:{carouselRef:a,api:c,opts:t,orientation:e||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:g},children:y.jsx("div",{ref:l,onKeyDownCapture:d,className:ie("relative",i),role:"region","aria-roledescription":"carousel",...s,children:o})})});tt.displayName="Carousel";const nt=D.forwardRef(({className:e,...t},n)=>{const{carouselRef:r,orientation:i}=je();return y.jsx("div",{ref:r,className:"overflow-hidden",children:y.jsx("div",{ref:n,className:ie("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})});nt.displayName="CarouselContent";const st=D.forwardRef(({className:e,...t},n)=>{const{orientation:r}=je();return y.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:ie("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",e),...t})});st.displayName="CarouselItem";const rt=D.forwardRef(({className:e,variant:t="outline",size:n="icon",...r},i)=>{const{orientation:o,scrollPrev:s,canScrollPrev:l}=je();return y.jsxs(ye,{ref:i,variant:t,size:n,className:ie("absolute  h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!l,onClick:s,...r,children:[y.jsx(pt,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Previous slide"})]})});rt.displayName="CarouselPrevious";const ot=D.forwardRef(({className:e,variant:t="outline",size:n="icon",...r},i)=>{const{orientation:o,scrollNext:s,canScrollNext:l}=je();return y.jsxs(ye,{ref:i,variant:t,size:n,className:ie("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!l,onClick:s,...r,children:[y.jsx(xt,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Next slide"})]})});ot.displayName="CarouselNext";function rn({banners:e}){return y.jsx(y.Fragment,{children:e.length>0&&y.jsx("section",{className:"hidden md:block",children:y.jsxs(tt,{plugins:[De({delay:7e3})],opts:{loop:!0,align:"start"},className:"relative",children:[y.jsx(nt,{children:e.map(t=>{var n;return((n=t==null?void 0:t.image)==null?void 0:n.trim())&&y.jsx(st,{children:y.jsx("a",{href:t.link??"#",target:"_blank",rel:"noreferrer",className:"w-full",children:y.jsx("img",{src:t.image,alt:t.description,className:"w-full"})})},t.id)})}),y.jsx(rt,{className:"left-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary"}),y.jsx(ot,{className:"right-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary"})]})})})}function Le({href:e,text:t}){return y.jsxs(Oe,{href:e,className:ie(gt({variant:"default"}),"flex w-full items-center gap-0 rounded-md !bg-transparent px-0 py-0 md:h-16"),children:[y.jsx("span",{className:"inline-flex h-9 w-1/5 items-center justify-center rounded-l-md bg-blue-secondary p-2 text-white md:h-16",children:y.jsx(Xe,{className:"md:!h-6 md:!w-6"})}),y.jsx("span",{className:"inline-flex h-full w-full items-center justify-center rounded-r-md bg-blue-primary p-2 text-sm font-medium text-white md:text-2xl",children:t})]})}function on({unit:e}){const{title:t,address:n,phone:r,whatsapp:i}=e,o=a=>`55${a.replace(/\D/g,"")}`,s=o(r??""),l=o(i??"");return y.jsxs(St,{className:"h-full border-gray-300 bg-transparent",children:[y.jsx(jt,{className:"p-4 md:p-6",children:y.jsx(Nt,{className:"text-center text-[10px] font-semibold text-gray-400 md:text-3xl",children:t})}),y.jsxs(wt,{className:"flex flex-col items-center justify-center gap-2 p-0 px-2 pb-4 md:gap-6 md:p-6 md:pt-0",children:[y.jsxs("div",{className:"flex items-center justify-center gap-2",children:[y.jsx("img",{src:"/imgs/pin-gps.png",alt:"Pin GPS",className:"h-4 w-auto md:h-10"}),y.jsx("p",{className:"w-[80%] text-center text-[10px] font-normal text-gray-400 md:text-2xl",children:n})]}),(r==null?void 0:r.trim())&&y.jsxs("a",{href:`tel:${s}`,className:"flex items-center justify-center gap-2",target:"_blank",rel:"noreferrer noopener",children:[y.jsx(Xe,{className:"h-4 w-4 text-blue-primary md:h-10 md:w-10"}),y.jsx("p",{className:"text-center text-[10px] font-semibold text-gray-400 md:text-2xl",children:r})]}),(i==null?void 0:i.trim())&&y.jsxs("a",{href:`https://wa.me/${l}`,className:"flex items-center justify-center gap-2",target:"_blank",rel:"noreferrer noopener",children:[y.jsx("img",{src:"/imgs/whatsapp-logo.png",alt:"Logo Whatsapp",className:"h-4 w-4 md:h-10 md:w-10"}),y.jsx("p",{className:"text-center text-[10px] font-semibold text-gray-400 md:text-2xl",children:i})]})]})]})}function mn({units:e,banners:t}){return y.jsxs(yt,{children:[y.jsx(rn,{banners:t}),y.jsxs("main",{className:"bg-main-background py-10 md:py-20",children:[y.jsx("section",{className:"block md:hidden",children:y.jsxs("div",{className:"mx-auto flex w-3/5 max-w-sm flex-col justify-center gap-2 md:gap-6",children:[y.jsx(Le,{href:"/",text:"Resultados de Exames"}),y.jsx(Le,{href:"/exames",text:"Nossos Exames"}),y.jsx(Le,{href:"/convenios",text:"Convênios Atendidos"})]})}),y.jsx("section",{className:"py-10 md:py-20 md:pt-0",children:y.jsxs("div",{className:"mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8",children:[y.jsxs("div",{children:[y.jsxs("h2",{className:"text-center text-lg font-semibold text-blue-primary md:text-4xl",children:["Contamos com ",e.length.toString().padStart(2,"0")," ","unidades!"]}),y.jsx(bt,{className:"mx-auto mt-2"})]}),y.jsx("div",{className:"grid grid-cols-2 justify-center gap-4",children:e.map(n=>y.jsx(on,{unit:n},n.id))}),y.jsx("div",{className:"flex justify-center",children:y.jsx(Oe,{href:"/noticias",className:"self-center",children:y.jsx(ye,{className:"h-8 w-fit rounded-3xl border border-blue-primary bg-blue-primary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-primary md:h-12 md:px-10 md:text-2xl",children:"Mais informações"})})})]})}),y.jsx("section",{className:"bg-home bg-cover bg-center py-10 md:py-20",children:y.jsxs("div",{className:"mx-auto flex min-h-[40vh] w-11/12 max-w-7xl flex-col justify-center gap-2 md:min-h-[60vh] md:gap-8",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-center text-base font-bold text-white md:text-4xl",children:"Sua saúde em cada detalhe!"}),y.jsx("h3",{className:"text-center text-sm font-semibold text-gray-500 text-white md:text-2xl",children:"CONFIRA OS CONVÊNIOS QUE ATENDEMOS"})]}),y.jsx("div",{className:"flex justify-center",children:y.jsx(Oe,{href:"/nossas-unidades",className:"self-center",children:y.jsx(ye,{className:"h-8 w-fit rounded-3xl border border-blue-primary bg-blue-primary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-primary md:h-12 md:px-10 md:text-2xl",children:"Saiba mais"})})})]})}),y.jsxs("section",{className:"space-y-10 py-10 md:space-y-20 md:py-20",children:[y.jsx("div",{className:"mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-4",children:y.jsx("p",{className:"text-center text-sm font-normal text-gray-500 md:text-2xl",children:"A Vida Radiologia conta com equipamentos de última geração, uma equipe de colaboradores treinados e um corpo clínico formado por profissionais especializados e altamente capacitados para oferecer um serviço de excelência em exames de imagens."})}),y.jsxs("div",{className:"mx-auto grid w-10/12 max-w-7xl grid-cols-2 justify-center gap-6",children:[y.jsx("img",{src:"/imgs/banners/mini-banner-1.jpg",alt:"",className:"w-full rounded-2xl"}),y.jsx("img",{src:"/imgs/banners/mini-banner-2.jpg",alt:"",className:"w-full rounded-2xl"})]})]})]})]})}export{mn as default};
