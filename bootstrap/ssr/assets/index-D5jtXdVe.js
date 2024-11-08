import { jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./authenticated-layout-BsJMxIOs.js";
import "lucide-react";
import "react";
import "./button-weNgVMLy.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-icons";
import "@inertiajs/react";
import "@radix-ui/react-avatar";
import "react-resizable-panels";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-separator";
import "@radix-ui/react-tabs";
import "@radix-ui/react-tooltip";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-toast";
function Page({ auth }) {
  return /* @__PURE__ */ jsx(Authenticated, { user: auth.user, children: /* @__PURE__ */ jsx("main", { className: "space-y-10 bg-gray-100 py-10 md:space-y-20 md:py-20", children: auth.user.name }) });
}
export {
  Page as default
};
