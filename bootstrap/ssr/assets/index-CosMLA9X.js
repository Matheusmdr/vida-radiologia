import { jsx, jsxs } from "react/jsx-runtime";
import { E as ExamButton } from "./exam-button-BoHw9e2x.js";
import { M as MainLayout, T as TextDivider } from "./main-layout-B_hnqyyi.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { c as cn, B as Button } from "./button-weNgVMLy.js";
import { Plus, Minus } from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0 text-blue-tertiary transition-transform duration-200 group-data-[state=open]:hidden" }),
      /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 shrink-0 text-blue-tertiary transition-transform duration-200 group-data-[state=closed]:hidden" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function Page({ exam }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: exam.title }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20", children: [
      /* @__PURE__ */ jsx("section", { className: "space-y-10 md:space-y-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-blue-primary md:text-4xl", children: "Nossos Exames" }),
          /* @__PURE__ */ jsx(TextDivider, { className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: !!exam && /* @__PURE__ */ jsx(
          ExamButton,
          {
            href: `/exames/${exam.slug}`,
            text: exam.title,
            iconSrc: exam.icon
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "[&_ul]: space-y-4 text-sm font-normal text-blue-tertiary md:text-2xl [&_h1]:text-base [&_h1]:font-bold [&_h1]:md:text-3xl [&_h2]:text-base [&_h2]:font-bold [&_h2]:md:text-3xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:md:text-3xl [&_h4]:text-base [&_h4]:font-bold [&_h4]:md:text-3xl [&_h5]:text-base [&_h5]:font-bold [&_h5]:md:text-3xl [&_h6]:text-base [&_h6]:font-bold [&_h6]:md:text-3xl [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",
            dangerouslySetInnerHTML: { __html: exam.body ?? "" }
          }
        ),
        !!exam.subexams && exam.subexams.length > 0 && /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mx-auto w-11/12", children: exam.subexams.map((subexam) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: subexam.title,
            className: "border-b-[#CECECE]",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-center text-sm font-bold text-blue-tertiary md:text-2xl", children: subexam.title }),
              /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "[&_ul]: space-y-4 text-sm font-normal text-blue-tertiary md:text-2xl [&_h1]:text-base [&_h1]:font-bold [&_h1]:md:text-3xl [&_h2]:text-base [&_h2]:font-bold [&_h2]:md:text-3xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:md:text-3xl [&_h4]:text-base [&_h4]:font-bold [&_h4]:md:text-3xl [&_h5]:text-base [&_h5]:font-bold [&_h5]:md:text-3xl [&_h6]:text-base [&_h6]:font-bold [&_h6]:md:text-3xl [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",
                  dangerouslySetInnerHTML: { __html: subexam.body ?? "" }
                }
              ) })
            ]
          },
          subexam.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: "/exames", className: "self-center", children: /* @__PURE__ */ jsx(Button, { className: "h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl", children: "Voltar para Exames" }) }) })
    ] })
  ] });
}
export {
  Page as default
};
