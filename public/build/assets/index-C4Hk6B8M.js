import{j as a,a as d}from"./app-CJbSt0Tb.js";import{f as r,D as c,a as o}from"./data-table-row-actions-BXeiaZIg.js";import{C as i}from"./checkbox-Botge_TE.js";import{B as m}from"./react-icons.esm-DhhrjAnU.js";import{A as n,T as x}from"./authenticated-layout-SZ16Ot78.js";import"./toaster-BdbOar5n.js";import"./index-B5T3ujw5.js";import"./index-B9V1VO6f.js";import"./createLucideIcon-zhr4_zeL.js";import"./index-b5J35k7t.js";import"./index-C7LmZuF0.js";const u=({examId:t})=>[{id:"id",header:({table:e})=>a.jsx(i,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:l=>e.toggleAllPageRowsSelected(!!l),"aria-label":"Select all"}),cell:({row:e})=>a.jsx(i,{checked:e.getIsSelected(),onCheckedChange:l=>e.toggleSelected(!!l),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"title",header:"Título",cell:({row:e})=>a.jsx("div",{className:"lowercase",children:e.getValue("title")})},{accessorKey:"created_at",header:()=>a.jsx("div",{className:"text-right",children:"Criado em"}),cell:({row:e})=>a.jsx("div",{className:"text-right font-medium",children:r(e.getValue("created_at"),"dd/MM/yyyy -	kk:mm")})},{accessorKey:"updated_at",header:()=>a.jsx("div",{className:"text-right",children:"Atualizado em"}),cell:({row:e})=>a.jsx("div",{className:"text-right font-medium",children:r(e.getValue("updated_at"),"dd/MM/yyyy -	kk:mm")})},{id:"actions",enableHiding:!1,cell:({row:e})=>a.jsx(c,{row:e,editUrl:`/admin/exams/${t}/subexams/edit/`,deleteUrl:`/admin/exams/${t}/subexams/delete/`})}];function A({auth:t,exam:s,subexams:e}){return a.jsx(n,{user:t.user,children:a.jsx(x,{delayDuration:0,children:a.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[a.jsx("div",{children:a.jsx(m,{className:"w",children:a.jsx(d,{href:`/admin/exams/${s.id}/create`,children:"Adicionar exame"})})}),e&&a.jsx(o,{data:e,columns:u({examId:s.id})})]})})})}export{A as default};