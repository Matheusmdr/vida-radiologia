import{j as a,a as l}from"./app-CByUnEZO.js";import{f as s,D as i,a as d}from"./data-table-row-actions-BrMutgYY.js";import{C as r}from"./checkbox-t8mtI1x-.js";import{B as c}from"./react-icons.esm-9arjoQWl.js";import{A as o,T as n}from"./authenticated-layout-DobKgQad.js";import"./toaster-CykRjx2c.js";import"./index-CJ-Y-PQw.js";import"./index-CibuiSGj.js";import"./createLucideIcon-BA91lyPa.js";import"./index-DLMF2-hx.js";import"./index-DRadeR-j.js";const m=[{id:"id",header:({table:e})=>a.jsx(r,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":"Select all"}),cell:({row:e})=>a.jsx(r,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Nome",cell:({row:e})=>a.jsx("div",{className:"lowercase",children:e.getValue("name")})},{accessorKey:"created_at",header:()=>a.jsx("div",{className:"text-right",children:"Criado em"}),cell:({row:e})=>a.jsx("div",{className:"text-right font-medium",children:s(e.getValue("created_at"),"dd/MM/yyyy -	kk:mm")})},{accessorKey:"updated_at",header:()=>a.jsx("div",{className:"text-right",children:"Atualizado em"}),cell:({row:e})=>a.jsx("div",{className:"text-right font-medium",children:s(e.getValue("updated_at"),"dd/MM/yyyy -	kk:mm")})},{id:"actions",enableHiding:!1,cell:({row:e})=>a.jsx(i,{row:e,editUrl:"/admin/users/edit/",deleteUrl:"/admin/users/delete/"})}];function C({auth:e,users:t}){return a.jsx(o,{user:e.user,children:a.jsx(n,{delayDuration:0,children:a.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[a.jsx("div",{children:a.jsx(c,{className:"w",children:a.jsx(l,{href:"/admin/users/create",children:"Adicionar usuário"})})}),t&&a.jsx(d,{data:t,columns:m})]})})})}export{C as default};
