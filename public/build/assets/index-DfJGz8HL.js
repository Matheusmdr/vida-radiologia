import{j as a,a as s}from"./app-CJbSt0Tb.js";import{f as l,D as i,a as d}from"./data-table-row-actions-BXeiaZIg.js";import{C as r}from"./checkbox-Botge_TE.js";import{B as c}from"./react-icons.esm-DhhrjAnU.js";import{A as o,T as n}from"./authenticated-layout-SZ16Ot78.js";import"./toaster-BdbOar5n.js";import"./index-B5T3ujw5.js";import"./index-B9V1VO6f.js";import"./createLucideIcon-zhr4_zeL.js";import"./index-b5J35k7t.js";import"./index-C7LmZuF0.js";const m=[{id:"id",header:({table:e})=>a.jsx(r,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":"Select all"}),cell:({row:e})=>a.jsx(r,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"cover",header:()=>a.jsx("div",{children:"Imagem"}),cell:({row:e})=>a.jsx("div",{children:a.jsx("img",{src:`${e.getValue("cover")}`,alt:"cover",className:"w-36"})})},{accessorKey:"title",header:"Título",cell:({row:e})=>a.jsx("div",{className:"lowercase",children:e.getValue("title")})},{accessorKey:"created_at",header:()=>a.jsx("div",{className:"text-right",children:"Criado em"}),cell:({row:e})=>a.jsx("div",{className:"text-right font-medium",children:l(e.getValue("created_at"),"dd/MM/yyyy -	kk:mm")})},{accessorKey:"updated_at",header:()=>a.jsx("div",{className:"text-right",children:"Atualizado em"}),cell:({row:e})=>a.jsx("div",{className:"text-right font-medium",children:l(e.getValue("updated_at"),"dd/MM/yyyy -	kk:mm")})},{id:"actions",enableHiding:!1,cell:({row:e})=>a.jsx(i,{row:e,editUrl:"/admin/units/edit/",deleteUrl:"/admin/units/delete/"})}];function C({auth:e,units:t}){return a.jsx(o,{user:e.user,children:a.jsx(n,{delayDuration:0,children:a.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[a.jsx("div",{children:a.jsx(c,{className:"w",children:a.jsx(s,{href:"/admin/units/create",children:"Adicionar unidade"})})}),t&&a.jsx(d,{data:t,columns:m})]})})})}export{C as default};