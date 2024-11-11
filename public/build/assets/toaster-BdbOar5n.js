import{r,j as c,d as ze,R as M,b as qe}from"./app-CJbSt0Tb.js";import{f as F,u as k,P as D,d as S,p as me,e as Te,S as de,a as Ge,b as Qe,m as Je,c as V,C as Ze,s as et}from"./react-icons.esm-DhhrjAnU.js";const tt=1,st=1e6;let Z=0;function ot(){return Z=(Z+1)%Number.MAX_SAFE_INTEGER,Z.toString()}const ee=new Map,le=e=>{if(ee.has(e))return;const t=setTimeout(()=>{ee.delete(e),W({type:"REMOVE_TOAST",toastId:e})},st);ee.set(e,t)},rt=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,tt)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case"DISMISS_TOAST":{const{toastId:s}=t;return s?le(s):e.toasts.forEach(o=>{le(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===s||s===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)}}},Y=[];let z={toasts:[]};function W(e){z=rt(z,e),Y.forEach(t=>{t(z)})}function nt({...e}){const t=ot(),s=n=>W({type:"UPDATE_TOAST",toast:{...n,id:t}}),o=()=>W({type:"DISMISS_TOAST",toastId:t});return W({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:n=>{n||o()}}}),{id:t,dismiss:o,update:s}}function at(){const[e,t]=r.useState(z);return r.useEffect(()=>(Y.push(t),()=>{const s=Y.indexOf(t);s>-1&&Y.splice(s,1)}),[e]),{...e,toast:nt,dismiss:s=>W({type:"DISMISS_TOAST",toastId:s})}}function it(e,t=globalThis==null?void 0:globalThis.document){const s=F(e);r.useEffect(()=>{const o=n=>{n.key==="Escape"&&s(n)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[s,t])}var ct="DismissableLayer",se="dismissableLayer.update",ut="dismissableLayer.pointerDownOutside",dt="dismissableLayer.focusOutside",fe,Ee=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xe=r.forwardRef((e,t)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:o,onPointerDownOutside:n,onFocusOutside:i,onInteractOutside:u,onDismiss:d,...v}=e,a=r.useContext(Ee),[m,w]=r.useState(null),y=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,P]=r.useState({}),E=k(t,x=>w(x)),f=Array.from(a.layers),[l]=[...a.layersWithOutsidePointerEventsDisabled].slice(-1),h=f.indexOf(l),T=m?f.indexOf(m):-1,b=a.layersWithOutsidePointerEventsDisabled.size>0,C=T>=h,g=ft(x=>{const A=x.target,O=[...a.branches].some(I=>I.contains(A));!C||O||(n==null||n(x),u==null||u(x),x.defaultPrevented||d==null||d())},y),R=pt(x=>{const A=x.target;[...a.branches].some(I=>I.contains(A))||(i==null||i(x),u==null||u(x),x.defaultPrevented||d==null||d())},y);return it(x=>{T===a.layers.size-1&&(o==null||o(x),!x.defaultPrevented&&d&&(x.preventDefault(),d()))},y),r.useEffect(()=>{if(m)return s&&(a.layersWithOutsidePointerEventsDisabled.size===0&&(fe=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),a.layersWithOutsidePointerEventsDisabled.add(m)),a.layers.add(m),pe(),()=>{s&&a.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=fe)}},[m,y,s,a]),r.useEffect(()=>()=>{m&&(a.layers.delete(m),a.layersWithOutsidePointerEventsDisabled.delete(m),pe())},[m,a]),r.useEffect(()=>{const x=()=>P({});return document.addEventListener(se,x),()=>document.removeEventListener(se,x)},[]),c.jsx(D.div,{...v,ref:E,style:{pointerEvents:b?C?"auto":"none":void 0,...e.style},onFocusCapture:S(e.onFocusCapture,R.onFocusCapture),onBlurCapture:S(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:S(e.onPointerDownCapture,g.onPointerDownCapture)})});xe.displayName=ct;var lt="DismissableLayerBranch",we=r.forwardRef((e,t)=>{const s=r.useContext(Ee),o=r.useRef(null),n=k(t,o);return r.useEffect(()=>{const i=o.current;if(i)return s.branches.add(i),()=>{s.branches.delete(i)}},[s.branches]),c.jsx(D.div,{...e,ref:n})});we.displayName=lt;function ft(e,t=globalThis==null?void 0:globalThis.document){const s=F(e),o=r.useRef(!1),n=r.useRef(()=>{});return r.useEffect(()=>{const i=d=>{if(d.target&&!o.current){let v=function(){ye(ut,s,a,{discrete:!0})};const a={originalEvent:d};d.pointerType==="touch"?(t.removeEventListener("click",n.current),n.current=v,t.addEventListener("click",n.current,{once:!0})):v()}else t.removeEventListener("click",n.current);o.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",i),t.removeEventListener("click",n.current)}},[t,s]),{onPointerDownCapture:()=>o.current=!0}}function pt(e,t=globalThis==null?void 0:globalThis.document){const s=F(e),o=r.useRef(!1);return r.useEffect(()=>{const n=i=>{i.target&&!o.current&&ye(dt,s,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,s]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function pe(){const e=new CustomEvent(se);document.dispatchEvent(e)}function ye(e,t,s,{discrete:o}){const n=s.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:s});t&&n.addEventListener(e,t,{once:!0}),o?me(n,i):n.dispatchEvent(i)}var vt=xe,mt=we,Tt="Portal",he=r.forwardRef((e,t)=>{var d;const{container:s,...o}=e,[n,i]=r.useState(!1);Te(()=>i(!0),[]);const u=s||n&&((d=globalThis==null?void 0:globalThis.document)==null?void 0:d.body);return u?ze.createPortal(c.jsx(D.div,{...o,ref:t}),u):null});he.displayName=Tt;function Et(e,t=[]){let s=[];function o(i,u){const d=r.createContext(u),v=s.length;s=[...s,u];function a(w){const{scope:y,children:P,...E}=w,f=(y==null?void 0:y[e][v])||d,l=r.useMemo(()=>E,Object.values(E));return c.jsx(f.Provider,{value:l,children:P})}function m(w,y){const P=(y==null?void 0:y[e][v])||d,E=r.useContext(P);if(E)return E;if(u!==void 0)return u;throw new Error(`\`${w}\` must be used within \`${i}\``)}return a.displayName=i+"Provider",[a,m]}const n=()=>{const i=s.map(u=>r.createContext(u));return function(d){const v=(d==null?void 0:d[e])||i;return r.useMemo(()=>({[`__scope${e}`]:{...d,[e]:v}}),[d,v])}};return n.scopeName=e,[o,xt(n,...t)]}function xt(...e){const t=e[0];if(e.length===1)return t;const s=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(i){const u=o.reduce((d,{useScope:v,scopeName:a})=>{const w=v(i)[`__scope${a}`];return{...d,...w}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return s.scopeName=t.scopeName,s}function wt(e){const t=e+"CollectionProvider",[s,o]=Et(t),[n,i]=s(t,{collectionRef:{current:null},itemMap:new Map}),u=P=>{const{scope:E,children:f}=P,l=M.useRef(null),h=M.useRef(new Map).current;return c.jsx(n,{scope:E,itemMap:h,collectionRef:l,children:f})};u.displayName=t;const d=e+"CollectionSlot",v=M.forwardRef((P,E)=>{const{scope:f,children:l}=P,h=i(d,f),T=k(E,h.collectionRef);return c.jsx(de,{ref:T,children:l})});v.displayName=d;const a=e+"CollectionItemSlot",m="data-radix-collection-item",w=M.forwardRef((P,E)=>{const{scope:f,children:l,...h}=P,T=M.useRef(null),b=k(E,T),C=i(a,f);return M.useEffect(()=>(C.itemMap.set(T,{ref:T,...h}),()=>void C.itemMap.delete(T))),c.jsx(de,{[m]:"",ref:b,children:l})});w.displayName=a;function y(P){const E=i(e+"CollectionConsumer",P);return M.useCallback(()=>{const l=E.collectionRef.current;if(!l)return[];const h=Array.from(l.querySelectorAll(`[${m}]`));return Array.from(E.itemMap.values()).sort((C,g)=>h.indexOf(C.ref.current)-h.indexOf(g.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:u,Slot:v,ItemSlot:w},y,o]}var yt="VisuallyHidden",q=r.forwardRef((e,t)=>c.jsx(D.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));q.displayName=yt;var Ht=q,ae="ToastProvider",[ie,ht,bt]=wt("Toast"),[be,Ut]=Ge("Toast",[bt]),[Ct,G]=be(ae),Ce=e=>{const{__scopeToast:t,label:s="Notification",duration:o=5e3,swipeDirection:n="right",swipeThreshold:i=50,children:u}=e,[d,v]=r.useState(null),[a,m]=r.useState(0),w=r.useRef(!1),y=r.useRef(!1);return s.trim()||console.error(`Invalid prop \`label\` supplied to \`${ae}\`. Expected non-empty \`string\`.`),c.jsx(ie.Provider,{scope:t,children:c.jsx(Ct,{scope:t,label:s,duration:o,swipeDirection:n,swipeThreshold:i,toastCount:a,viewport:d,onViewportChange:v,onToastAdd:r.useCallback(()=>m(P=>P+1),[]),onToastRemove:r.useCallback(()=>m(P=>P-1),[]),isFocusedToastEscapeKeyDownRef:w,isClosePausedRef:y,children:u})})};Ce.displayName=ae;var Pe="ToastViewport",Pt=["F8"],oe="toast.viewportPause",re="toast.viewportResume",ge=r.forwardRef((e,t)=>{const{__scopeToast:s,hotkey:o=Pt,label:n="Notifications ({hotkey})",...i}=e,u=G(Pe,s),d=ht(s),v=r.useRef(null),a=r.useRef(null),m=r.useRef(null),w=r.useRef(null),y=k(t,w,u.onViewportChange),P=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=u.toastCount>0;r.useEffect(()=>{const l=h=>{var b;o.length!==0&&o.every(C=>h[C]||h.code===C)&&((b=w.current)==null||b.focus())};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[o]),r.useEffect(()=>{const l=v.current,h=w.current;if(E&&l&&h){const T=()=>{if(!u.isClosePausedRef.current){const R=new CustomEvent(oe);h.dispatchEvent(R),u.isClosePausedRef.current=!0}},b=()=>{if(u.isClosePausedRef.current){const R=new CustomEvent(re);h.dispatchEvent(R),u.isClosePausedRef.current=!1}},C=R=>{!l.contains(R.relatedTarget)&&b()},g=()=>{l.contains(document.activeElement)||b()};return l.addEventListener("focusin",T),l.addEventListener("focusout",C),l.addEventListener("pointermove",T),l.addEventListener("pointerleave",g),window.addEventListener("blur",T),window.addEventListener("focus",b),()=>{l.removeEventListener("focusin",T),l.removeEventListener("focusout",C),l.removeEventListener("pointermove",T),l.removeEventListener("pointerleave",g),window.removeEventListener("blur",T),window.removeEventListener("focus",b)}}},[E,u.isClosePausedRef]);const f=r.useCallback(({tabbingDirection:l})=>{const T=d().map(b=>{const C=b.ref.current,g=[C,...jt(C)];return l==="forwards"?g:g.reverse()});return(l==="forwards"?T.reverse():T).flat()},[d]);return r.useEffect(()=>{const l=w.current;if(l){const h=T=>{var g,R,x;const b=T.altKey||T.ctrlKey||T.metaKey;if(T.key==="Tab"&&!b){const A=document.activeElement,O=T.shiftKey;if(T.target===l&&O){(g=a.current)==null||g.focus();return}const L=f({tabbingDirection:O?"backwards":"forwards"}),B=L.findIndex(p=>p===A);te(L.slice(B+1))?T.preventDefault():O?(R=a.current)==null||R.focus():(x=m.current)==null||x.focus()}};return l.addEventListener("keydown",h),()=>l.removeEventListener("keydown",h)}},[d,f]),c.jsxs(mt,{ref:v,role:"region","aria-label":n.replace("{hotkey}",P),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&c.jsx(ne,{ref:a,onFocusFromOutsideViewport:()=>{const l=f({tabbingDirection:"forwards"});te(l)}}),c.jsx(ie.Slot,{scope:s,children:c.jsx(D.ol,{tabIndex:-1,...i,ref:y})}),E&&c.jsx(ne,{ref:m,onFocusFromOutsideViewport:()=>{const l=f({tabbingDirection:"backwards"});te(l)}})]})});ge.displayName=Pe;var Re="ToastFocusProxy",ne=r.forwardRef((e,t)=>{const{__scopeToast:s,onFocusFromOutsideViewport:o,...n}=e,i=G(Re,s);return c.jsx(q,{"aria-hidden":!0,tabIndex:0,...n,ref:t,style:{position:"fixed"},onFocus:u=>{var a;const d=u.relatedTarget;!((a=i.viewport)!=null&&a.contains(d))&&o()}})});ne.displayName=Re;var Q="Toast",gt="toast.swipeStart",Rt="toast.swipeMove",St="toast.swipeCancel",Nt="toast.swipeEnd",Se=r.forwardRef((e,t)=>{const{forceMount:s,open:o,defaultOpen:n,onOpenChange:i,...u}=e,[d=!0,v]=Qe({prop:o,defaultProp:n,onChange:i});return c.jsx(Je,{present:s||d,children:c.jsx(Ot,{open:d,...u,ref:t,onClose:()=>v(!1),onPause:F(e.onPause),onResume:F(e.onResume),onSwipeStart:S(e.onSwipeStart,a=>{a.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:S(e.onSwipeMove,a=>{const{x:m,y:w}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","move"),a.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${w}px`)}),onSwipeCancel:S(e.onSwipeCancel,a=>{a.currentTarget.setAttribute("data-swipe","cancel"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:S(e.onSwipeEnd,a=>{const{x:m,y:w}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","end"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${w}px`),v(!1)})})})});Se.displayName=Q;var[At,Dt]=be(Q,{onClose(){}}),Ot=r.forwardRef((e,t)=>{const{__scopeToast:s,type:o="foreground",duration:n,open:i,onClose:u,onEscapeKeyDown:d,onPause:v,onResume:a,onSwipeStart:m,onSwipeMove:w,onSwipeCancel:y,onSwipeEnd:P,...E}=e,f=G(Q,s),[l,h]=r.useState(null),T=k(t,p=>h(p)),b=r.useRef(null),C=r.useRef(null),g=n||f.duration,R=r.useRef(0),x=r.useRef(g),A=r.useRef(0),{onToastAdd:O,onToastRemove:I}=f,j=F(()=>{var N;(l==null?void 0:l.contains(document.activeElement))&&((N=f.viewport)==null||N.focus()),u()}),L=r.useCallback(p=>{!p||p===1/0||(window.clearTimeout(A.current),R.current=new Date().getTime(),A.current=window.setTimeout(j,p))},[j]);r.useEffect(()=>{const p=f.viewport;if(p){const N=()=>{L(x.current),a==null||a()},_=()=>{const $=new Date().getTime()-R.current;x.current=x.current-$,window.clearTimeout(A.current),v==null||v()};return p.addEventListener(oe,_),p.addEventListener(re,N),()=>{p.removeEventListener(oe,_),p.removeEventListener(re,N)}}},[f.viewport,g,v,a,L]),r.useEffect(()=>{i&&!f.isClosePausedRef.current&&L(g)},[i,g,f.isClosePausedRef,L]),r.useEffect(()=>(O(),()=>I()),[O,I]);const B=r.useMemo(()=>l?Le(l):null,[l]);return f.viewport?c.jsxs(c.Fragment,{children:[B&&c.jsx(_t,{__scopeToast:s,role:"status","aria-live":o==="foreground"?"assertive":"polite","aria-atomic":!0,children:B}),c.jsx(At,{scope:s,onClose:j,children:qe.createPortal(c.jsx(ie.ItemSlot,{scope:s,children:c.jsx(vt,{asChild:!0,onEscapeKeyDown:S(d,()=>{f.isFocusedToastEscapeKeyDownRef.current||j(),f.isFocusedToastEscapeKeyDownRef.current=!1}),children:c.jsx(D.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":f.swipeDirection,...E,ref:T,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:S(e.onKeyDown,p=>{p.key==="Escape"&&(d==null||d(p.nativeEvent),p.nativeEvent.defaultPrevented||(f.isFocusedToastEscapeKeyDownRef.current=!0,j()))}),onPointerDown:S(e.onPointerDown,p=>{p.button===0&&(b.current={x:p.clientX,y:p.clientY})}),onPointerMove:S(e.onPointerMove,p=>{if(!b.current)return;const N=p.clientX-b.current.x,_=p.clientY-b.current.y,$=!!C.current,K=["left","right"].includes(f.swipeDirection),H=["left","up"].includes(f.swipeDirection)?Math.min:Math.max,Xe=K?H(0,N):0,Ye=K?0:H(0,_),J=p.pointerType==="touch"?10:2,U={x:Xe,y:Ye},ue={originalEvent:p,delta:U};$?(C.current=U,X(Rt,w,ue,{discrete:!1})):ve(U,f.swipeDirection,J)?(C.current=U,X(gt,m,ue,{discrete:!1}),p.target.setPointerCapture(p.pointerId)):(Math.abs(N)>J||Math.abs(_)>J)&&(b.current=null)}),onPointerUp:S(e.onPointerUp,p=>{const N=C.current,_=p.target;if(_.hasPointerCapture(p.pointerId)&&_.releasePointerCapture(p.pointerId),C.current=null,b.current=null,N){const $=p.currentTarget,K={originalEvent:p,delta:N};ve(N,f.swipeDirection,f.swipeThreshold)?X(Nt,P,K,{discrete:!0}):X(St,y,K,{discrete:!0}),$.addEventListener("click",H=>H.preventDefault(),{once:!0})}})})})}),f.viewport)})]}):null}),_t=e=>{const{__scopeToast:t,children:s,...o}=e,n=G(Q,t),[i,u]=r.useState(!1),[d,v]=r.useState(!1);return Mt(()=>u(!0)),r.useEffect(()=>{const a=window.setTimeout(()=>v(!0),1e3);return()=>window.clearTimeout(a)},[]),d?null:c.jsx(he,{asChild:!0,children:c.jsx(q,{...o,children:i&&c.jsxs(c.Fragment,{children:[n.label," ",s]})})})},It="ToastTitle",Ne=r.forwardRef((e,t)=>{const{__scopeToast:s,...o}=e;return c.jsx(D.div,{...o,ref:t})});Ne.displayName=It;var Lt="ToastDescription",Ae=r.forwardRef((e,t)=>{const{__scopeToast:s,...o}=e;return c.jsx(D.div,{...o,ref:t})});Ae.displayName=Lt;var De="ToastAction",Oe=r.forwardRef((e,t)=>{const{altText:s,...o}=e;return s.trim()?c.jsx(Ie,{altText:s,asChild:!0,children:c.jsx(ce,{...o,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${De}\`. Expected non-empty \`string\`.`),null)});Oe.displayName=De;var _e="ToastClose",ce=r.forwardRef((e,t)=>{const{__scopeToast:s,...o}=e,n=Dt(_e,s);return c.jsx(Ie,{asChild:!0,children:c.jsx(D.button,{type:"button",...o,ref:t,onClick:S(e.onClick,n.onClose)})})});ce.displayName=_e;var Ie=r.forwardRef((e,t)=>{const{__scopeToast:s,altText:o,...n}=e;return c.jsx(D.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...n,ref:t})});function Le(e){const t=[];return Array.from(e.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&t.push(o.textContent),Ft(o)){const n=o.ariaHidden||o.hidden||o.style.display==="none",i=o.dataset.radixToastAnnounceExclude==="";if(!n)if(i){const u=o.dataset.radixToastAnnounceAlt;u&&t.push(u)}else t.push(...Le(o))}}),t}function X(e,t,s,{discrete:o}){const n=s.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:s});t&&n.addEventListener(e,t,{once:!0}),o?me(n,i):n.dispatchEvent(i)}var ve=(e,t,s=0)=>{const o=Math.abs(e.x),n=Math.abs(e.y),i=o>n;return t==="left"||t==="right"?i&&o>s:!i&&n>s};function Mt(e=()=>{}){const t=F(e);Te(()=>{let s=0,o=0;return s=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(s),window.cancelAnimationFrame(o)}},[t])}function Ft(e){return e.nodeType===e.ELEMENT_NODE}function jt(e){const t=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const n=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||n?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)t.push(s.currentNode);return t}function te(e){const t=document.activeElement;return e.some(s=>s===t?!0:(s.focus(),document.activeElement!==t))}var kt=Ce,Me=ge,Fe=Se,je=Ne,ke=Ae,Ve=Oe,$e=ce;const Vt=kt,Ke=r.forwardRef(({className:e,...t},s)=>c.jsx(Me,{ref:s,className:V("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Ke.displayName=Me.displayName;const $t=et("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),We=r.forwardRef(({className:e,variant:t,...s},o)=>c.jsx(Fe,{ref:o,className:V($t({variant:t}),e),...s}));We.displayName=Fe.displayName;const Kt=r.forwardRef(({className:e,...t},s)=>c.jsx(Ve,{ref:s,className:V("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));Kt.displayName=Ve.displayName;const Be=r.forwardRef(({className:e,...t},s)=>c.jsx($e,{ref:s,className:V("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:c.jsx(Ze,{className:"h-4 w-4"})}));Be.displayName=$e.displayName;const He=r.forwardRef(({className:e,...t},s)=>c.jsx(je,{ref:s,className:V("text-sm font-semibold [&+div]:text-xs",e),...t}));He.displayName=je.displayName;const Ue=r.forwardRef(({className:e,...t},s)=>c.jsx(ke,{ref:s,className:V("text-sm opacity-90",e),...t}));Ue.displayName=ke.displayName;function Xt(){const{toasts:e}=at();return c.jsxs(Vt,{children:[e.map(function({id:t,title:s,description:o,action:n,...i}){return c.jsxs(We,{...i,children:[c.jsxs("div",{className:"grid gap-1",children:[s&&c.jsx(He,{children:s}),o&&c.jsx(Ue,{children:o})]}),n,c.jsx(Be,{})]},t)}),c.jsx(Ke,{})]})}export{xe as D,he as P,Ht as R,Xt as T,q as V,wt as c,nt as t};