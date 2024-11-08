import { jsxs, jsx } from "react/jsx-runtime";
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
const healthInsurances = [
  {
    title: "Unimed",
    iconSrc: "/imgs/convenios/unimed.png"
  },
  {
    title: "Oeste Saúde",
    iconSrc: "/imgs/convenios/oeste-saude.png"
  },
  {
    title: "Iamspe - A saúde do servidor",
    iconSrc: "/imgs/convenios/iamspe.png"
  },
  {
    title: "Bradesco Saúde",
    iconSrc: "/imgs/convenios/bradesco.png"
  },
  {
    title: "Cassi",
    iconSrc: "/imgs/convenios/cassi.png"
  },
  {
    title: "Apomas",
    iconSrc: "/imgs/convenios/apomas.png"
  },
  {
    title: "Cabesp",
    iconSrc: "/imgs/convenios/cabesp.png"
  },
  {
    title: "Economus",
    iconSrc: "/imgs/convenios/economus.png"
  },
  {
    title: "Famoc",
    iconSrc: "/imgs/convenios/famoc.png"
  },
  {
    title: "SulAmérica",
    iconSrc: "/imgs/convenios/sulamerica.png"
  },
  {
    title: "Pas",
    iconSrc: "/imgs/convenios/pas.png"
  },
  {
    title: "São Domingos Saúde",
    iconSrc: "/imgs/convenios/sao-domingos.png"
  },
  {
    title: "HB Saúde",
    iconSrc: "/imgs/convenios/hb-saude.png"
  },
  {
    title: "Usina Califórnia",
    iconSrc: "/imgs/convenios/usina-california.png"
  },
  {
    title: "Viver",
    iconSrc: "/imgs/convenios/viver.png"
  },
  {
    title: "Bensaúde",
    iconSrc: "/imgs/convenios/bensaude.png"
  },
  {
    title: "CISAP - Consórcio Intermunicipal de Saúde da Alta Paulista",
    iconSrc: "/imgs/convenios/cisap.png"
  }
];
function Page() {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Convênios Atendidos" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "space-y-10 md:space-y-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-blue-primary md:text-4xl", children: "Convênios Atendidos" }),
            /* @__PURE__ */ jsx(TextDivider, { className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-normal text-gray-500 md:text-2xl", children: "Valorizamos o cuidado com a sua saúde e sabemos da importância de um atendimento acessível e eficiente. Por isso, firmamos parcerias com diversos planos de saúde para garantir que você tenha acesso a exames de radiologia de alta qualidade, sem preocupações." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid w-10/12 max-w-7xl grid-cols-3 place-items-center items-center justify-center justify-items-center gap-12 md:grid-cols-6 md:gap-28", children: healthInsurances.map((healthInsurance) => /* @__PURE__ */ jsx(
          "img",
          {
            src: healthInsurance.iconSrc,
            alt: healthInsurance.title,
            className: "max-h-52 w-auto md:max-h-20"
          },
          healthInsurance.title
        )) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl", children: "Voltar para Home" }) }) })
    ] })
  ] });
}
export {
  Page as default
};