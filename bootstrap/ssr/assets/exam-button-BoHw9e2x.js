import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, b as buttonVariants } from "./button-weNgVMLy.js";
import { Link } from "@inertiajs/react";
function ExamButton({ href, text, iconSrc, className }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      className: cn(
        buttonVariants({ variant: "default" }),
        "mx-auto flex h-16 w-3/5 max-w-sm items-center justify-center rounded-lg !bg-blue-primary text-center text-xs font-semibold md:h-28 md:w-full md:text-2xl",
        className
      ),
      children: [
        iconSrc && /* @__PURE__ */ jsx(
          "img",
          {
            src: iconSrc,
            alt: text,
            className: "mr-2 max-w-12 p-1 md:mr-4 md:max-w-20 md:p-2"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "max-w-[200px] whitespace-normal text-left", children: text })
      ]
    }
  );
}
export {
  ExamButton as E
};
