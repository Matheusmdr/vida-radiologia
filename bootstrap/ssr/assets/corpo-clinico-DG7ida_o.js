import { jsxs, jsx } from "react/jsx-runtime";
import { M as MainLayout, T as TextDivider } from "./main-layout-BBolkOG-.js";
import { B as Button } from "./button-weNgVMLy.js";
import { Head, Link } from "@inertiajs/react";
import React__default from "react";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
function Page({ clinicalStaff }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Corpo Clínico" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "space-y-10 md:space-y-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-blue-primary md:text-4xl", children: "Corpo Clínico" }),
            /* @__PURE__ */ jsx(TextDivider, { className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-normal text-gray-500 md:text-2xl", children: "O compromisso com a excelência em diagnóstico por imagem começa com nosso corpo clínico altamente qualificado. Contamos com uma equipe de médicos radiologistas especializados e experientes, que estão sempre atualizados com as mais recentes inovações e tecnologias na área de radiologia." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid w-3/5 max-w-7xl grid-cols-1 place-items-center items-center justify-center justify-items-center gap-6 sm:w-4/5 md:grid-cols-2 md:gap-12", children: clinicalStaff.map((staff, i) => {
          var _a;
          return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2 md:space-y-4", children: [
              ((_a = staff.cover) == null ? void 0 : _a.trim()) && /* @__PURE__ */ jsx(
                "img",
                {
                  src: staff.cover,
                  alt: staff.name,
                  className: "w-60 lg:h-80 lg:w-80"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-gray-500 md:text-2xl", children: staff.name }),
              /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-gray-500 md:text-2xl", children: staff.crm })
            ] }),
            i < clinicalStaff.length - 1 && /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-[#CECECE] md:hidden" })
          ] }, staff.id);
        }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl", children: "Voltar para Home" }) }) })
    ] })
  ] });
}
export {
  Page as default
};
