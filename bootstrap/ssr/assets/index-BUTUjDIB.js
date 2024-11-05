import { jsx, jsxs } from "react/jsx-runtime";
import { D as DataTableRowActions, a as DataTable } from "./data-table-row-actions-CvTvY5WB.js";
import { C as Checkbox } from "./checkbox-DyFoBjLW.js";
import { D as DropdownMenuItem, A as Authenticated, T as TooltipProvider } from "./authenticated-layout-mFQV83D4.js";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { B as Button } from "./button-weNgVMLy.js";
import "@tanstack/react-table";
import "react";
import "@radix-ui/react-icons";
import "@radix-ui/react-select";
import "lucide-react";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "react-resizable-panels";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-separator";
import "@radix-ui/react-tabs";
import "@radix-ui/react-tooltip";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const examsColumns = [
  {
    id: "id",
    header: ({ table }) => /* @__PURE__ */ jsx(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all"
      }
    ),
    cell: ({ row }) => /* @__PURE__ */ jsx(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row"
      }
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "lowercase", children: row.getValue("title") })
  },
  {
    accessorKey: "created_at",
    header: () => /* @__PURE__ */ jsx("div", { className: "text-right", children: "Criado em" }),
    cell: ({ row }) => {
      return /* @__PURE__ */ jsx("div", { className: "text-right font-medium", children: format(row.getValue("created_at"), "dd/MM/yyyy -	kk:mm") });
    }
  },
  {
    accessorKey: "updated_at",
    header: () => /* @__PURE__ */ jsx("div", { className: "text-right", children: "Atualizado em" }),
    cell: ({ row }) => {
      return /* @__PURE__ */ jsx("div", { className: "text-right font-medium", children: format(row.getValue("updated_at"), "dd/MM/yyyy -	kk:mm") });
    }
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return /* @__PURE__ */ jsx(
        DataTableRowActions,
        {
          row,
          editUrl: "/admin/exams/edit/",
          deleteUrl: "/admin/exams/delete/",
          children: /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { href: `/admin/exams/${row.original.id}/subexams/`, children: "Listar subexames" }) })
        }
      );
    }
  }
];
function Page({ auth, exams }) {
  return /* @__PURE__ */ jsx(Authenticated, { user: auth.user, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 p-4", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { className: "w", children: /* @__PURE__ */ jsx(Link, { href: "/admin/exams/create", children: "Adicionar exame" }) }) }),
    exams && /* @__PURE__ */ jsx(DataTable, { data: exams, columns: examsColumns })
  ] }) }) });
}
export {
  Page as default
};
