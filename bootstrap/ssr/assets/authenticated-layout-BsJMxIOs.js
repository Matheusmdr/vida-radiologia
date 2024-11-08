import { jsx, jsxs } from "react/jsx-runtime";
import { Sun, Moon, Activity, Image, MapPinHouse, BookUser, Users } from "lucide-react";
import * as React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { c as cn, B as Button, b as buttonVariants } from "./button-weNgVMLy.js";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, CheckIcon, DotFilledIcon, DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Link, Head } from "@inertiajs/react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as ResizablePrimitive from "react-resizable-panels";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { T as Toaster } from "./toaster-CPGl9inu.js";
const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
function ModeToggle() {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function UserNav({ user }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.name) ?? "", alt: (user == null ? void 0 : user.name) ?? "" }),
      /* @__PURE__ */ jsx(AvatarFallback, { children: (_a = user == null ? void 0 : user.name) == null ? void 0 : _a.charAt(0) })
    ] }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: (_b = user == null ? void 0 : user.name) == null ? void 0 : _b.split("")[0] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: user == null ? void 0 : user.email })
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "bg-border" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("logout"), method: "post", children: "Log out" }) })
    ] })
  ] });
}
function AdminHeader({ user }) {
  return /* @__PURE__ */ jsx("div", { className: "border-b bg-white dark:bg-black", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-4", children: [
    /* @__PURE__ */ jsx("div", { className: "space-x-4", children: /* @__PURE__ */ jsx(Link, { href: "/admin", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/imgs/logo_branca.png",
        alt: "logo_branca.png",
        className: "max-w-40 invert dark:invert-0"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx(ModeToggle, {}),
      /* @__PURE__ */ jsx(UserNav, { user })
    ] })
  ] }) });
}
const ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx(DragHandleDots2Icon, { className: "h-2.5 w-2.5" }) })
  }
);
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function Nav({ links, isCollapsed }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-collapsed": isCollapsed,
      className: "group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2",
      children: /* @__PURE__ */ jsx("nav", { className: "grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2", children: links.map(
        (link, index) => isCollapsed ? /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 0, children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: link.url,
              className: cn(
                buttonVariants({ variant: link.variant, size: "icon" }),
                "h-9 w-9",
                link.variant === "default" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              ),
              children: [
                /* @__PURE__ */ jsx(link.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: link.title })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(TooltipContent, { side: "right", className: "flex items-center gap-4", children: [
            link.title,
            link.label && /* @__PURE__ */ jsx("span", { className: "ml-auto text-muted-foreground", children: link.label })
          ] })
        ] }, index) : /* @__PURE__ */ jsxs(
          Link,
          {
            href: link.url,
            className: cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              link.variant === "default" && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            ),
            children: [
              /* @__PURE__ */ jsx(link.icon, { className: "mr-2 h-4 w-4" }),
              link.title,
              link.label && /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "ml-auto",
                    link.variant === "default" && "text-background text-white"
                  ),
                  children: link.label
                }
              )
            ]
          },
          index
        )
      ) })
    }
  );
}
function SideNav({ children }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const defaultLayout = [20, 80];
  const navCollapsedSize = 4;
  const pathname = window.location.pathname;
  return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs(
    ResizablePanelGroup,
    {
      direction: "horizontal",
      className: "h-[calc(100vh-4rem)] !max-h-dvh items-stretch",
      children: [
        /* @__PURE__ */ jsxs(
          ResizablePanel,
          {
            defaultSize: defaultLayout[0],
            collapsedSize: navCollapsedSize,
            collapsible: true,
            minSize: 15,
            maxSize: 20,
            className: cn(
              isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
            ),
            onCollapse: () => {
              setIsCollapsed(true);
            },
            onExpand: () => {
              setIsCollapsed(false);
            },
            children: [
              /* @__PURE__ */ jsx(Separator, {}),
              /* @__PURE__ */ jsx(
                Nav,
                {
                  isCollapsed,
                  links: [
                    {
                      title: "Exames",
                      label: "",
                      icon: Activity,
                      variant: pathname.includes("/admin/exams") ? "default" : "ghost",
                      url: "/admin/exams"
                    },
                    {
                      title: "Banners",
                      label: "",
                      icon: Image,
                      variant: pathname.includes("/admin/banners") ? "default" : "ghost",
                      url: "/admin/banners"
                    },
                    {
                      title: "Unidades",
                      label: "",
                      icon: MapPinHouse,
                      variant: pathname.includes("/admin/units") ? "default" : "ghost",
                      url: "/admin/units"
                    },
                    {
                      title: "Corpo Clínico",
                      label: "",
                      icon: BookUser,
                      variant: pathname.includes("/admin/clinical-staff") ? "default" : "ghost",
                      url: "/admin/clinical-staff"
                    }
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Separator, {}),
              /* @__PURE__ */ jsx(
                Nav,
                {
                  isCollapsed,
                  links: [
                    {
                      title: "Usuários",
                      label: "",
                      icon: Users,
                      variant: pathname.includes("/admin/users") ? "default" : "ghost",
                      url: "/admin/users"
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(ResizableHandle, { withHandle: true, className: "text-white" }),
        /* @__PURE__ */ jsx(ResizablePanel, { defaultSize: defaultLayout[1], minSize: 30, children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "all", children: [
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs(ScrollArea, { className: "h-[calc(100vh-4rem)]", children: [
            children,
            /* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
          ] })
        ] }) })
      ]
    }
  ) });
}
function Authenticated({
  user,
  children
}) {
  return /* @__PURE__ */ jsxs(ThemeProvider, { defaultTheme: "dark", storageKey: "vite-ui-theme", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Admin" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" })
    ] }),
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex h-screen flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(AdminHeader, { user }),
      /* @__PURE__ */ jsx("div", { className: "h-full bg-white dark:bg-[#09090b]", children: /* @__PURE__ */ jsx(SideNav, { children }) })
    ] })
  ] });
}
export {
  Authenticated as A,
  DropdownMenuItem as D,
  TooltipProvider as T,
  DropdownMenu as a,
  DropdownMenuTrigger as b,
  DropdownMenuContent as c,
  DropdownMenuLabel as d,
  DropdownMenuSeparator as e,
  DropdownMenuCheckboxItem as f,
  useTheme as u
};
