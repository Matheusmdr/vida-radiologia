import{r as d,j as t,R as u,Y as be,a as ve}from"./app-BxHz2UGl.js";import{E as _e}from"./exam-button-CmRxH1kX.js";import{M as ge,T as Ce}from"./main-layout-BEpiV58_.js";import{a as F,b as T,P as A,d as z,m as ye,u as U,e as Ae,c as k,B as Ne}from"./react-icons.esm-CusL7JKP.js";import{c as je}from"./toaster-BcYWg7J0.js";import{u as Y,a as Ie}from"./index-DHMLRJrr.js";import{c as q}from"./createLucideIcon-suhfAHQz.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=q("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var O="Collapsible",[Ee,J]=F(O),[Pe,D]=Ee(O),Q=d.forwardRef((e,n)=>{const{__scopeCollapsible:o,open:a,defaultOpen:s,disabled:r,onOpenChange:l,...c}=e,[p=!1,x]=T({prop:a,defaultProp:s,onChange:l});return t.jsx(Pe,{scope:o,disabled:r,contentId:Y(),open:p,onOpenToggle:d.useCallback(()=>x(m=>!m),[x]),children:t.jsx(A.div,{"data-state":$(p),"data-disabled":r?"":void 0,...c,ref:n})})});Q.displayName=O;var W="CollapsibleTrigger",X=d.forwardRef((e,n)=>{const{__scopeCollapsible:o,...a}=e,s=D(W,o);return t.jsx(A.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":$(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...a,ref:n,onClick:z(e.onClick,s.onOpenToggle)})});X.displayName=W;var L="CollapsibleContent",Z=d.forwardRef((e,n)=>{const{forceMount:o,...a}=e,s=D(L,e.__scopeCollapsible);return t.jsx(ye,{present:o||s.open,children:({present:r})=>t.jsx(Me,{...a,ref:n,present:r})})});Z.displayName=L;var Me=d.forwardRef((e,n)=>{const{__scopeCollapsible:o,present:a,children:s,...r}=e,l=D(L,o),[c,p]=d.useState(a),x=d.useRef(null),m=U(n,x),f=d.useRef(0),C=f.current,b=d.useRef(0),N=b.current,v=l.open||c,_=d.useRef(v),g=d.useRef();return d.useEffect(()=>{const i=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(i)},[]),Ae(()=>{const i=x.current;if(i){g.current=g.current||{transitionDuration:i.style.transitionDuration,animationName:i.style.animationName},i.style.transitionDuration="0s",i.style.animationName="none";const y=i.getBoundingClientRect();f.current=y.height,b.current=y.width,_.current||(i.style.transitionDuration=g.current.transitionDuration,i.style.animationName=g.current.animationName),p(a)}},[l.open,a]),t.jsx(A.div,{"data-state":$(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!v,...r,ref:m,style:{"--radix-collapsible-content-height":C?`${C}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...e.style},children:v&&s})});function $(e){return e?"open":"closed"}var Se=Q,Te=X,ke=Z,h="Accordion",Oe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[H,De,Le]=je(h),[I,tt]=F(h,[Le,J]),V=J(),ee=u.forwardRef((e,n)=>{const{type:o,...a}=e,s=a,r=a;return t.jsx(H.Provider,{scope:e.__scopeAccordion,children:o==="multiple"?t.jsx(Be,{...r,ref:n}):t.jsx(Ve,{...s,ref:n})})});ee.displayName=h;var[te,$e]=I(h),[oe,He]=I(h,{collapsible:!1}),Ve=u.forwardRef((e,n)=>{const{value:o,defaultValue:a,onValueChange:s=()=>{},collapsible:r=!1,...l}=e,[c,p]=T({prop:o,defaultProp:a,onChange:s});return t.jsx(te,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:p,onItemClose:u.useCallback(()=>r&&p(""),[r,p]),children:t.jsx(oe,{scope:e.__scopeAccordion,collapsible:r,children:t.jsx(ne,{...l,ref:n})})})}),Be=u.forwardRef((e,n)=>{const{value:o,defaultValue:a,onValueChange:s=()=>{},...r}=e,[l=[],c]=T({prop:o,defaultProp:a,onChange:s}),p=u.useCallback(m=>c((f=[])=>[...f,m]),[c]),x=u.useCallback(m=>c((f=[])=>f.filter(C=>C!==m)),[c]);return t.jsx(te,{scope:e.__scopeAccordion,value:l,onItemOpen:p,onItemClose:x,children:t.jsx(oe,{scope:e.__scopeAccordion,collapsible:!0,children:t.jsx(ne,{...r,ref:n})})})}),[Ge,w]=I(h),ne=u.forwardRef((e,n)=>{const{__scopeAccordion:o,disabled:a,dir:s,orientation:r="vertical",...l}=e,c=u.useRef(null),p=U(c,n),x=De(o),f=Ie(s)==="ltr",C=z(e.onKeyDown,b=>{var G;if(!Oe.includes(b.key))return;const N=b.target,v=x().filter(M=>{var K;return!((K=M.ref.current)!=null&&K.disabled)}),_=v.findIndex(M=>M.ref.current===N),g=v.length;if(_===-1)return;b.preventDefault();let i=_;const y=0,R=g-1,E=()=>{i=_+1,i>R&&(i=y)},P=()=>{i=_-1,i<y&&(i=R)};switch(b.key){case"Home":i=y;break;case"End":i=R;break;case"ArrowRight":r==="horizontal"&&(f?E():P());break;case"ArrowDown":r==="vertical"&&E();break;case"ArrowLeft":r==="horizontal"&&(f?P():E());break;case"ArrowUp":r==="vertical"&&P();break}const he=i%g;(G=v[he].ref.current)==null||G.focus()});return t.jsx(Ge,{scope:o,disabled:a,direction:s,orientation:r,children:t.jsx(H.Slot,{scope:o,children:t.jsx(A.div,{...l,"data-orientation":r,ref:p,onKeyDown:a?void 0:C})})})}),j="AccordionItem",[Ke,B]=I(j),ae=u.forwardRef((e,n)=>{const{__scopeAccordion:o,value:a,...s}=e,r=w(j,o),l=$e(j,o),c=V(o),p=Y(),x=a&&l.value.includes(a)||!1,m=r.disabled||e.disabled;return t.jsx(Ke,{scope:o,open:x,disabled:m,triggerId:p,children:t.jsx(Se,{"data-orientation":r.orientation,"data-state":de(x),...c,...s,ref:n,disabled:m,open:x,onOpenChange:f=>{f?l.onItemOpen(a):l.onItemClose(a)}})})});ae.displayName=j;var re="AccordionHeader",se=u.forwardRef((e,n)=>{const{__scopeAccordion:o,...a}=e,s=w(h,o),r=B(re,o);return t.jsx(A.h3,{"data-orientation":s.orientation,"data-state":de(r.open),"data-disabled":r.disabled?"":void 0,...a,ref:n})});se.displayName=re;var S="AccordionTrigger",le=u.forwardRef((e,n)=>{const{__scopeAccordion:o,...a}=e,s=w(h,o),r=B(S,o),l=He(S,o),c=V(o);return t.jsx(H.ItemSlot,{scope:o,children:t.jsx(Te,{"aria-disabled":r.open&&!l.collapsible||void 0,"data-orientation":s.orientation,id:r.triggerId,...c,...a,ref:n})})});le.displayName=S;var ie="AccordionContent",ce=u.forwardRef((e,n)=>{const{__scopeAccordion:o,...a}=e,s=w(h,o),r=B(ie,o),l=V(o);return t.jsx(ke,{role:"region","aria-labelledby":r.triggerId,"data-orientation":s.orientation,...l,...a,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});ce.displayName=ie;function de(e){return e?"open":"closed"}var Fe=ee,ze=ae,Ue=se,pe=le,xe=ce;const Ye=Fe,ue=d.forwardRef(({className:e,...n},o)=>t.jsx(ze,{ref:o,className:k("border-b",e),...n}));ue.displayName="AccordionItem";const me=d.forwardRef(({className:e,children:n,...o},a)=>t.jsx(Ue,{className:"flex",children:t.jsxs(pe,{ref:a,className:k("group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...o,children:[n,t.jsx(Re,{className:"h-4 w-4 shrink-0 text-blue-tertiary transition-transform duration-200 group-data-[state=open]:hidden"}),t.jsx(we,{className:"h-4 w-4 shrink-0 text-blue-tertiary transition-transform duration-200 group-data-[state=closed]:hidden"})]})}));me.displayName=pe.displayName;const fe=d.forwardRef(({className:e,children:n,...o},a)=>t.jsx(xe,{ref:a,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:t.jsx("div",{className:k("pb-4 pt-0",e),children:n})}));fe.displayName=xe.displayName;function ot({exam:e}){return t.jsxs(ge,{children:[t.jsx(be,{title:e.title}),t.jsxs("main",{className:"space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20",children:[t.jsx("section",{className:"space-y-10 md:space-y-20",children:t.jsxs("div",{className:"mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4",children:[t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx("h1",{className:"text-base font-semibold text-blue-primary md:text-4xl",children:"Nossos Exames"}),t.jsx(Ce,{className:"mt-2"})]}),t.jsx("div",{className:"flex flex-col gap-6",children:!!e&&t.jsx(_e,{href:`/exames/${e.slug}`,text:e.title,iconSrc:e.icon})}),t.jsx("div",{className:"[&_ul]: space-y-4 text-sm font-normal text-blue-tertiary md:text-2xl [&_h1]:text-base [&_h1]:font-bold [&_h1]:md:text-3xl [&_h2]:text-base [&_h2]:font-bold [&_h2]:md:text-3xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:md:text-3xl [&_h4]:text-base [&_h4]:font-bold [&_h4]:md:text-3xl [&_h5]:text-base [&_h5]:font-bold [&_h5]:md:text-3xl [&_h6]:text-base [&_h6]:font-bold [&_h6]:md:text-3xl [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",dangerouslySetInnerHTML:{__html:e.body??""}}),!!e.subexams&&e.subexams.length>0&&t.jsx(Ye,{type:"single",collapsible:!0,className:"mx-auto w-11/12",children:e.subexams.map(n=>t.jsxs(ue,{value:n.title,className:"border-b-[#CECECE]",children:[t.jsx(me,{className:"text-center text-sm font-bold text-blue-tertiary md:text-2xl",children:n.title}),t.jsx(fe,{children:t.jsx("div",{className:"[&_ul]: space-y-4 text-sm font-normal text-blue-tertiary md:text-2xl [&_h1]:text-base [&_h1]:font-bold [&_h1]:md:text-3xl [&_h2]:text-base [&_h2]:font-bold [&_h2]:md:text-3xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:md:text-3xl [&_h4]:text-base [&_h4]:font-bold [&_h4]:md:text-3xl [&_h5]:text-base [&_h5]:font-bold [&_h5]:md:text-3xl [&_h6]:text-base [&_h6]:font-bold [&_h6]:md:text-3xl [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",dangerouslySetInnerHTML:{__html:n.body??""}})})]},n.id))})]})}),t.jsx("section",{className:"flex justify-center",children:t.jsx(ve,{href:"/exames",className:"self-center",children:t.jsx(Ne,{className:"h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl",children:"Voltar para Exames"})})})]})]})}export{ot as default};