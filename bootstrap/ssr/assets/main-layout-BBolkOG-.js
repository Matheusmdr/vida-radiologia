import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { c as cn, B as Button } from "./button-weNgVMLy.js";
import { Link } from "@inertiajs/react";
import { Fragment, useState } from "react";
import { T as Toaster } from "./toaster-CPGl9inu.js";
function TextDivider({ className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "h-[3px] w-14 bg-gradient-to-r from-blue-tertiary from-50% to-blue-primary to-50% md:h-[6px] md:w-20",
        className
      )
    }
  );
}
const socialLinks = [
  {
    text: "Instagram",
    url: "https://www.instagram.com/_vidaradiologia/",
    icon: "/imgs/social/instagram.svg",
    alt: "Ícone do Instagram."
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/UniVidasRedes/",
    icon: "/imgs/social/facebook.svg",
    alt: "Ícone do Facebook."
  }
];
function SocialLinks() {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-full max-w-xl flex-col gap-2 md:flex-row md:justify-center md:gap-6", children: socialLinks.map((socialLink) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: socialLink.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex items-center gap-2 text-xs font-bold text-white hover:text-white/80",
      children: [
        /* @__PURE__ */ jsx("img", { src: socialLink.icon, alt: socialLink.alt, className: "h-6 w-6" }),
        /* @__PURE__ */ jsx("span", { children: socialLink.text })
      ]
    },
    socialLink.text
  )) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "flex flex-col gap-4 bg-blue-tertiary", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-10/12 max-w-7xl space-y-6 py-10 md:w-11/12 md:space-y-14", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/imgs/logo_branca.png",
        alt: "Logo Vida Radiologia",
        className: "mx-auto max-w-[150px] md:max-w-[250px] lg:hidden"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 flex-row gap-4 md:flex-col md:gap-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full flex-col justify-between gap-4 md:max-w-3xl md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/logo_branca.png",
            alt: "Logo Vida Radiologia",
            className: "mx-auto hidden max-w-[150px] md:max-w-[250px] lg:block"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-[8px] font-bold text-white md:text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-2 md:flex-row md:gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://pacs.clinicavidaradiologia.com.br/login",
                target: "_blank",
                rel: "noreferrer noopener",
                className: "hover:text-white/80",
                children: "Resultados de Exames"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
            /* @__PURE__ */ jsx(Link, { href: "/exames", className: "hover:text-white/80", children: "Nossos Exames" }),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
            /* @__PURE__ */ jsx(Link, { href: "/corpo-clinico", className: "hover:text-white/80", children: "Corpo Clínico" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:gap-4", children: [
            /* @__PURE__ */ jsx(Link, { href: "/unidades", className: "hover:text-white/80", children: "Nossas Unidades" }),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "|" }),
            /* @__PURE__ */ jsx(Link, { href: "/convenios", className: "hover:text-white/80", children: "Convênios Atendidos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col justify-center", children: /* @__PURE__ */ jsx(SocialLinks, {}) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 text-center text-[8px] font-normal text-white md:text-xs", children: [
        /* @__PURE__ */ jsx("span", { children: "Vida Radiologia | CNPJ: 41.037.121/00001-95" }),
        /* @__PURE__ */ jsx("span", { children: "Av. Pres. Vargas, 01, sala 1 - Vila São Luis - Osvaldo Cruz/SP" }),
        /* @__PURE__ */ jsx("span", { children: "Responsável Técnico: Pedro Bastos Felismino - CRM/SP 106.720" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("span", { className: "mx-auto text-center text-[8px] font-normal text-white md:text-xs", children: "@2024 Vida Radiologia - Todos os direitos reservados" }) }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2 text-center text-[8px] font-normal text-white md:text-xs", children: [
        "DESENVOLVIDO POR",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.promarke.com.br",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsx("img", { src: "/imgs/logo_promarke.png", alt: "Logo Agência Promarke" })
          }
        )
      ] })
    ] })
  ] }) });
}
function WhatsappButton({ className }) {
  return /* @__PURE__ */ jsx(Link, { href: "/unidades", target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ jsx(
    Button,
    {
      className: cn(
        "rounded-3xl bg-white text-xl font-bold text-blue-primary hover:bg-white",
        className
      ),
      children: /* @__PURE__ */ jsx("span", { children: " Agende seu exame!" })
    }
  ) });
}
function HeaderDesktop({ menuItems: menuItems2 }) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      id: "top",
      className: "sticky top-0 z-10 hidden bg-blue-primary shadow lg:block",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-5xl items-center justify-between py-4", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/logo_branca.png",
              alt: "Logo Vida Radiologia",
              className: "max-w-60"
            }
          ) }),
          /* @__PURE__ */ jsx(WhatsappButton, { className: "px-6" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://pacs.clinicavidaradiologia.com.br/login",
              target: "_blank",
              rel: "noreferrer noopener",
              children: /* @__PURE__ */ jsx(Button, { className: "rounded-3xl border-2 border-white bg-blue-primary text-xl text-white hover:bg-white hover:text-blue-primary", children: "Resultados de Exames" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+551839184777",
              className: "text-xl font-semibold text-blue-primary",
              target: "_blank",
              rel: "noreferrer noopener",
              children: "(18) 3918-4777"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "bg-blue-primary py-4", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl justify-between text-white", children: menuItems2.map((item) => /* @__PURE__ */ jsx(Fragment, { children: item.isExternal ? /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "text-xl font-bold hover:text-white",
            target: "_blank",
            rel: "noreferrer noopener",
            children: item.title
          }
        ) : /* @__PURE__ */ jsx(
          Link,
          {
            href: item.href,
            className: "text-xl font-bold hover:text-white",
            children: item.title
          }
        ) }, item.title)) }) })
      ]
    }
  );
}
const menuItems$1 = [
  {
    title: "Agendar Exame",
    href: "/unidades",
    isExternal: true
  },
  {
    title: "Resultados de Exames",
    href: "https://pacs.clinicavidaradiologia.com.br/login",
    isExternal: true
  },
  {
    title: "Nossos Exames",
    href: "/exames",
    isExternal: false
  },
  {
    title: "Convênios Atendidos",
    href: "/convenios",
    isExternal: false
  },
  {
    title: "Nossas Unidades",
    href: "/unidades",
    isExternal: false
  },
  {
    title: "Corpo Clínico",
    href: "/corpo-clinico",
    isExternal: false
  }
];
function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 rounded-full bg-white transition ease-in-out transform duration-300`;
  return /* @__PURE__ */ jsxs(
    "header",
    {
      id: "top",
      className: "sticky top-0 z-10 block bg-blue-primary shadow lg:hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 items-center justify-between py-4", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/logo_branca.png",
              className: "max-w-[100px]",
              alt: "Logo Vida Radiologia"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-2", children: /* @__PURE__ */ jsx(Button, { className: "rounded-2xl border-white bg-white text-blue-primary hover:bg-white", children: "Agende seu exame!" }) }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "icon",
              className: cn(
                "relative z-50 flex h-12 w-12 flex-col items-center justify-center gap-0 rounded-xl border-2 border-transparent !bg-transparent shadow-none lg:hidden",
                isOpen && "fixed shadow-none"
              ),
              onClick: () => setIsOpen(!isOpen),
              name: "Menu Mobile",
              "aria-label": "Menu Mobile",
              "aria-expanded": isOpen,
              "aria-controls": "menu-mobile",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      genericHamburgerLine,
                      "opacity-100",
                      isOpen && "my-1 translate-y-3 rotate-45 bg-white opacity-100"
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      genericHamburgerLine,
                      "mt-1 opacity-100",
                      isOpen && "my-1 opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      genericHamburgerLine,
                      "mt-1 opacity-100",
                      isOpen && "my-1 -translate-y-3 -rotate-45 bg-white opacity-100"
                    )
                  }
                )
              ]
            }
          )
        ] }),
        isOpen && /* @__PURE__ */ jsx(
          "nav",
          {
            className: cn(
              "fixed inset-0 z-40 hidden h-full w-screen items-center justify-center bg-blue-primary lg:relative lg:inset-auto lg:block lg:w-fit lg:bg-transparent",
              isOpen && "flex lg:block"
            ),
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12", children: [
              /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/imgs/logo_branca.png",
                  className: "max-w-[150px]",
                  alt: "Logo Instituto de Radiologia de Presidente Prudente"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-3", children: menuItems$1.map((item) => /* @__PURE__ */ jsxs(Fragment, { children: [
                item.isExternal ? /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.href,
                    className: "text-base font-semibold text-white hover:text-white",
                    children: item.title
                  }
                ) : /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: item.href,
                    className: "text-base font-semibold text-white hover:text-white",
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-white" })
              ] }, item.title)) })
            ] })
          }
        )
      ]
    }
  );
}
const menuItems = [
  {
    title: "Nossas Unidades",
    href: "/unidades",
    isExternal: false
  },
  {
    title: "Nossos Exames",
    href: "/exames",
    isExternal: false
  },
  {
    title: "Corpo Clínico",
    href: "/corpo-clinico",
    isExternal: false
  },
  {
    title: "Convênios Atendidos",
    href: "/convenios",
    isExternal: false
  }
];
function Header() {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(HeaderDesktop, { menuItems }),
    /* @__PURE__ */ jsx(HeaderMobile, {})
  ] });
}
function MainLayout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    children,
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  MainLayout as M,
  TextDivider as T
};
