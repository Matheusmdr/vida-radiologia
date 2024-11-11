import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { c as cn, B as Button, b as buttonVariants } from "./button-weNgVMLy.js";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "@inertiajs/react";
import { ArrowRightCircle } from "lucide-react";
import { M as MainLayout, T as TextDivider } from "./main-layout-BBolkOG-.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DBb_vtYi.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-toast";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
function HeroBanner({ banners }) {
  return /* @__PURE__ */ jsx(Fragment, { children: banners.length > 0 && /* @__PURE__ */ jsx("section", { className: "hidden md:block", children: /* @__PURE__ */ jsxs(
    Carousel,
    {
      plugins: [
        Autoplay({
          delay: 7e3
        })
      ],
      opts: {
        loop: true,
        align: "start"
      },
      className: "relative",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: banners.map(
          (banner) => {
            var _a;
            return ((_a = banner == null ? void 0 : banner.image) == null ? void 0 : _a.trim()) && /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: banner.link ?? "#",
                target: "_blank",
                rel: "noreferrer",
                className: "w-full",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: banner.image,
                    alt: banner.description,
                    className: "w-full"
                  }
                )
              }
            ) }, banner.id);
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "right-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary" })
      ]
    }
  ) }) });
}
function HomeLink({ href, text }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      className: cn(
        buttonVariants({ variant: "default" }),
        "flex w-full items-center gap-0 rounded-md !bg-transparent px-0 py-0 md:h-16"
      ),
      children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex h-9 w-1/5 items-center justify-center rounded-l-md bg-blue-secondary p-2 text-white md:h-16", children: /* @__PURE__ */ jsx(ArrowRightCircle, { className: "md:!h-6 md:!w-6" }) }),
        /* @__PURE__ */ jsx("span", { className: "inline-flex h-full w-full items-center justify-center rounded-r-md bg-blue-primary p-2 text-sm font-medium text-white md:text-2xl", children: text })
      ]
    }
  );
}
function UnitCard({ unit }) {
  const { title, address, phone, whatsapp } = unit;
  const formatPhoneNumber = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/\D/g, "");
    const countryCode = "55";
    return `${countryCode}${digitsOnly}`;
  };
  const formattedPhone = formatPhoneNumber(phone ?? "");
  const formattedWhatsapp = formatPhoneNumber(whatsapp ?? "");
  return /* @__PURE__ */ jsxs(Card, { className: "h-full border-gray-300 bg-transparent", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-4 md:p-6", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-center text-[10px] font-semibold text-gray-400 md:text-3xl", children: title }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center gap-2 p-0 px-2 pb-4 md:gap-6 md:p-6 md:pt-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/pin-gps.png",
            alt: "Pin GPS",
            className: "h-4 w-auto md:h-10"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "w-[80%] text-center text-[10px] font-normal text-gray-400 md:text-2xl", children: address })
      ] }),
      (phone == null ? void 0 : phone.trim()) && /* @__PURE__ */ jsxs(
        "a",
        {
          href: `tel:${formattedPhone}`,
          className: "flex items-center justify-center gap-2",
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ jsx(ArrowRightCircle, { className: "h-4 w-4 text-blue-primary md:h-10 md:w-10" }),
            /* @__PURE__ */ jsx("p", { className: "text-center text-[10px] font-semibold text-gray-400 md:text-2xl", children: phone })
          ]
        }
      ),
      (whatsapp == null ? void 0 : whatsapp.trim()) && /* @__PURE__ */ jsxs(
        "a",
        {
          href: `https://wa.me/${formattedWhatsapp}`,
          className: "flex items-center justify-center gap-2",
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/imgs/whatsapp-logo.png",
                alt: "Logo Whatsapp",
                className: "h-4 w-4 md:h-10 md:w-10"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-center text-[10px] font-semibold text-gray-400 md:text-2xl", children: whatsapp })
          ]
        }
      )
    ] })
  ] });
}
function Page({ units, banners }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(HeroBanner, { banners }),
    /* @__PURE__ */ jsxs("main", { className: "bg-main-background py-10 md:py-20", children: [
      /* @__PURE__ */ jsx("section", { className: "block md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-3/5 max-w-sm flex-col justify-center gap-2 md:gap-6", children: [
        /* @__PURE__ */ jsx(HomeLink, { href: "/", text: "Resultados de Exames" }),
        /* @__PURE__ */ jsx(HomeLink, { href: "/exames", text: "Nossos Exames" }),
        /* @__PURE__ */ jsx(HomeLink, { href: "/convenios", text: "Convênios Atendidos" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10 md:py-20 md:pt-0", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-center text-lg font-semibold text-blue-primary md:text-4xl", children: [
            "Contamos com ",
            units.length.toString().padStart(2, "0"),
            " ",
            "unidades!"
          ] }),
          /* @__PURE__ */ jsx(TextDivider, { className: "mx-auto mt-2" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 justify-center gap-4", children: units.map((unit) => /* @__PURE__ */ jsx(UnitCard, { unit }, unit.id)) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/unidades", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-primary bg-blue-primary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-primary md:h-12 md:px-10 md:text-2xl", children: "Mais informações" }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-home bg-cover bg-center py-10 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-[40vh] w-11/12 max-w-7xl flex-col justify-center gap-2 md:min-h-[60vh] md:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-center text-base font-bold text-white md:text-4xl", children: "Sua saúde em cada detalhe!" }),
          /* @__PURE__ */ jsx("h3", { className: "text-center text-sm font-semibold text-gray-500 text-white md:text-2xl", children: "CONFIRA OS CONVÊNIOS QUE ATENDEMOS" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/convenios", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-primary bg-blue-primary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-primary md:h-12 md:px-10 md:text-2xl", children: "Saiba mais" }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-10 py-10 md:space-y-20 md:py-20", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-4", children: /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-normal text-gray-500 md:text-2xl", children: "A Vida Radiologia conta com equipamentos de última geração, uma equipe de colaboradores treinados e um corpo clínico formado por profissionais especializados e altamente capacitados para oferecer um serviço de excelência em exames de imagens." }) }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-10/12 max-w-7xl grid-cols-2 justify-center gap-6", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/banners/mini-banner-1.jpg",
              alt: "",
              className: "w-full rounded-2xl"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/imgs/banners/mini-banner-2.jpg",
              alt: "",
              className: "w-full rounded-2xl"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  Page as default
};
