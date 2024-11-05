import { jsxs, jsx } from "react/jsx-runtime";
import { E as ExamButton } from "./exam-button-BoHw9e2x.js";
import { M as MainLayout, T as TextDivider } from "./main-layout-B_hnqyyi.js";
import { B as Button } from "./button-weNgVMLy.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
function Page({ exams }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Nossos Exames" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsx("section", { className: "space-y-10 md:space-y-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-blue-primary md:text-4xl", children: "Nossos Exames" }),
          /* @__PURE__ */ jsx(TextDivider, { className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-normal text-gray-500 md:text-2xl", children: "Nossa equipe de profissionais qualificados utiliza tecnologia de ponta para garantir resultados precisos e rápidos, essenciais para um diagnóstico eficaz e um tratamento adequado." }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-semibold text-gray-500 md:text-2xl", children: "SELECIONE O EXAME PARA VER AS OPÇÕES" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: exams.map((exam) => /* @__PURE__ */ jsx(
          ExamButton,
          {
            href: `/exames/${exam.slug}`,
            text: exam.title,
            iconSrc: exam.icon
          },
          exam.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl", children: "Voltar para Home" }) }) })
    ] })
  ] });
}
export {
  Page as default
};
