import{r as s,j as n}from"./app-CByUnEZO.js";import{a as O,u as A,b as B,P as w,d as j,m as H,c as g,j as K}from"./react-icons.esm-9arjoQWl.js";import{u as L}from"./index-CibuiSGj.js";import{u as q}from"./index-DRadeR-j.js";var P="Checkbox",[z,W]=O(P),[T,X]=z(P),I=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,name:u,checked:p,defaultChecked:o,required:h,disabled:d,value:b="on",onCheckedChange:x,form:l,...C}=e,[a,k]=s.useState(null),v=A(i,r=>k(r)),y=s.useRef(!1),R=a?l||!!a.closest("form"):!0,[f=!1,E]=B({prop:p,defaultProp:o,onChange:x}),M=s.useRef(f);return s.useEffect(()=>{const r=a==null?void 0:a.form;if(r){const m=()=>E(M.current);return r.addEventListener("reset",m),()=>r.removeEventListener("reset",m)}},[a,E]),n.jsxs(T,{scope:t,state:f,disabled:d,children:[n.jsx(w.button,{type:"button",role:"checkbox","aria-checked":c(f)?"mixed":f,"aria-required":h,"data-state":_(f),"data-disabled":d?"":void 0,disabled:d,value:b,...C,ref:v,onKeyDown:j(e.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:j(e.onClick,r=>{E(m=>c(m)?!0:!m),R&&(y.current=r.isPropagationStopped(),y.current||r.stopPropagation())})}),R&&n.jsx(F,{control:a,bubbles:!y.current,name:u,value:b,checked:f,required:h,disabled:d,form:l,style:{transform:"translateX(-100%)"},defaultChecked:c(o)?!1:o})]})});I.displayName=P;var N="CheckboxIndicator",S=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,forceMount:u,...p}=e,o=X(N,t);return n.jsx(H,{present:u||c(o.state)||o.state===!0,children:n.jsx(w.span,{"data-state":_(o.state),"data-disabled":o.disabled?"":void 0,...p,ref:i,style:{pointerEvents:"none",...e.style}})})});S.displayName=N;var F=e=>{const{control:i,checked:t,bubbles:u=!0,defaultChecked:p,...o}=e,h=s.useRef(null),d=L(t),b=q(i);s.useEffect(()=>{const l=h.current,C=window.HTMLInputElement.prototype,k=Object.getOwnPropertyDescriptor(C,"checked").set;if(d!==t&&k){const v=new Event("click",{bubbles:u});l.indeterminate=c(t),k.call(l,c(t)?!1:t),l.dispatchEvent(v)}},[d,t,u]);const x=s.useRef(c(t)?!1:t);return n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:p??x.current,...o,tabIndex:-1,ref:h,style:{...e.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function c(e){return e==="indeterminate"}function _(e){return c(e)?"indeterminate":e?"checked":"unchecked"}var D=I,$=S;const G=s.forwardRef(({className:e,...i},t)=>n.jsx(D,{ref:t,className:g("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...i,children:n.jsx($,{className:g("flex items-center justify-center text-current"),children:n.jsx(K,{className:"h-4 w-4"})})}));G.displayName=D.displayName;export{G as C};
