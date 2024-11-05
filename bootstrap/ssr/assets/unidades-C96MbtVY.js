import { jsxs, jsx } from "react/jsx-runtime";
import { M as MainLayout, T as TextDivider } from "./main-layout-B_hnqyyi.js";
import { B as Button } from "./button-weNgVMLy.js";
import "./card-DBb_vtYi.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
function UnitItem({ unit }) {
  const { title, cover, address, phone, whatsapp, gmaps_link } = unit;
  return /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center gap-4 md:gap-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-blue-primary md:text-4xl", children: title }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: cover,
        alt: `Foto da unidade ${title}`,
        className: "h-[300px] w-10/12 max-w-4xl rounded-2xl object-cover"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex max-w-2xl flex-col gap-4 md:flex-row", children: [
      (phone == null ? void 0 : phone.trim()) && /* @__PURE__ */ jsx(Button, { className: "h-full basis-full whitespace-normal break-words rounded-[40px] !bg-[#203861] text-xs font-bold text-white hover:bg-white md:px-10", children: "CLIQUE PARA LIGAR" }),
      (whatsapp == null ? void 0 : whatsapp.trim()) && /* @__PURE__ */ jsx(Button, { className: "h-full basis-full whitespace-normal break-words rounded-[40px] !bg-[#47C756] text-xs font-bold text-white hover:bg-white md:px-10", children: "ENVIAR MENSAGEM NO WHATSAPP" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "text-center text-sm font-normal text-gray-500 md:text-2xl", children: address }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-normal text-gray-500 md:text-2xl", children: [
        (phone == null ? void 0 : phone.trim()) && `FONE: ${phone} `,
        (whatsapp == null ? void 0 : whatsapp.trim()) && `| WHATSAPP: ${whatsapp}`
      ] })
    ] }),
    (gmaps_link == null ? void 0 : gmaps_link.trim()) && /* @__PURE__ */ jsx(
      "iframe",
      {
        src: gmaps_link,
        className: "min-h-64 w-10/12 max-w-4xl",
        referrerPolicy: "no-referrer-when-downgrade",
        loading: "lazy"
      }
    )
  ] });
}
function Page({ units }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Nossas Unidades" }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "space-y-10 md:space-y-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-blue-primary md:text-4xl", children: "Nossas Unidades" }),
            /* @__PURE__ */ jsx(TextDivider, { className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-normal text-gray-500 md:text-2xl", children: "Estamos comprometidos em oferecer serviços de radiologia de excelência em ambientes modernos e acessíveis. Para atender melhor a nossos pacientes, contamos com duas unidades estrategicamente localizadas nas cidades de Osvaldo Cruz/SP e Novo Horizonte/SP." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid w-11/12 max-w-7xl grid-cols-1 gap-10 md:grid-cols-2", children: units.map((unit) => /* @__PURE__ */ jsx(UnitItem, { unit }, unit.id)) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl", children: "Voltar para Home" }) }) })
    ] })
  ] });
}
export {
  Page as default
};
