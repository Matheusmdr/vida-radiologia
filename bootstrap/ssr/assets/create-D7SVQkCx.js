import { jsx } from "react/jsx-runtime";
import { a as CreateAndEditClinicalStaff } from "./create-and-edit-users-9MMufKld.js";
import { A as Authenticated } from "./authenticated-layout-BsJMxIOs.js";
import "./button-weNgVMLy.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
import "clsx";
import "tailwind-merge";
import "./input-BNCjIeFf.js";
import "@radix-ui/react-label";
import "./toaster-CPGl9inu.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "@hookform/resolvers/zod";
import "@inertiajs/react";
import "react-hook-form";
import "zod";
import "md-editor-rt";
import "turndown";
import "@radix-ui/react-switch";
import "@radix-ui/react-dialog";
import "lucide-react";
import "react-dropzone";
import "filesize";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "react-resizable-panels";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-separator";
import "@radix-ui/react-tabs";
import "@radix-ui/react-tooltip";
function Page({ auth }) {
  return /* @__PURE__ */ jsx(Authenticated, { user: auth.user, children: /* @__PURE__ */ jsx(CreateAndEditClinicalStaff, {}) });
}
export {
  Page as default
};
