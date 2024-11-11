import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, B as Button } from "./button-weNgVMLy.js";
import { L as Label, I as Input } from "./input-BNCjIeFf.js";
import * as React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { t as toast } from "./toaster-CPGl9inu.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { FormProvider, Controller, useFormContext, useForm } from "react-hook-form";
import { z } from "zod";
import { u as useTheme } from "./authenticated-layout-BsJMxIOs.js";
import { MdEditor } from "md-editor-rt";
import TurndownService from "turndown";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { UploadCloud, Trash } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { filesize } from "filesize";
import { Slot } from "@radix-ui/react-slot";
const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-[0.8rem] text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-[0.8rem] font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function UploadedImagePreview({
  previewInfo
}) {
  const size = filesize((previewInfo == null ? void 0 : previewInfo.size) ?? 0, { separator: "," });
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    (previewInfo == null ? void 0 : previewInfo.url) && /* @__PURE__ */ jsx(
      "img",
      {
        src: `${previewInfo == null ? void 0 : previewInfo.url}`,
        alt: "image",
        width: 200,
        height: 150,
        className: "h-36 w-36 rounded-md object-cover transition-all duration-500 group-hover:scale-110"
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      (previewInfo == null ? void 0 : previewInfo.name.trim()) && /* @__PURE__ */ jsx("p", { className: "text-base font-bold", children: previewInfo == null ? void 0 : previewInfo.name }),
      size !== "0 B" && /* @__PURE__ */ jsx("span", { className: "text-sm", children: size })
    ] })
  ] });
}
function UploadImageField({
  form,
  name,
  label,
  className,
  onDelete
}) {
  const [preview, setPreview] = useState({ name: "", url: "", size: 0 });
  const formValue = form.watch(name);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    disabled: !!preview.url,
    accept: {
      "image/*": []
    },
    onDrop: (acceptedFiles) => {
      const acceptedFile = acceptedFiles[0];
      form.setValue(name, {
        preview: acceptedFile ? URL.createObjectURL(acceptedFile) : "",
        file: acceptedFile ?? void 0
      });
      setPreview({
        name: (acceptedFile == null ? void 0 : acceptedFile.name) ?? "",
        url: acceptedFile ? URL.createObjectURL(acceptedFile) : "",
        size: (acceptedFile == null ? void 0 : acceptedFile.size) ?? 0
      });
    }
  });
  useEffect(() => {
    setPreview((prevState) => ({
      ...prevState,
      url: (formValue == null ? void 0 : formValue.preview) ?? ""
    }));
  }, [form, formValue == null ? void 0 : formValue.preview, name]);
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control: form.control,
      name,
      render: () => /* @__PURE__ */ jsxs(FormItem, { className: cn("flex flex-col", className), children: [
        /* @__PURE__ */ jsx(FormLabel, { children: label }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center gap-4 border-2 border-dashed border-muted py-5",
            ...getRootProps(),
            children: [
              /* @__PURE__ */ jsx(Input, { ...getInputProps() }),
              /* @__PURE__ */ jsx(UploadCloud, { className: "text-foreground" }),
              /* @__PURE__ */ jsx("p", { children: "Arraste e solte sua imagem aqui ou" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { type: "button", children: "Clique para selecionar" }) })
            ]
          }
        ),
        !!preview.url && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-[1px] border-solid border-muted p-4", children: [
          /* @__PURE__ */ jsx(UploadedImagePreview, { previewInfo: preview }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "destructive", children: /* @__PURE__ */ jsx(Trash, { size: 18 }) }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Deletar imagem" }) }),
              /* @__PURE__ */ jsx(DialogDescription, { children: "Essa ação não pode ser desfeita. Tem certeza que deseja deletar essa imagem?" }),
              /* @__PURE__ */ jsxs(DialogFooter, { children: [
                /* @__PURE__ */ jsx(DialogClose, { children: "Cancelar" }),
                /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: onDelete, children: "Deletar" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(FormMessage, {})
      ] })
    }
  );
}
const MAX_FILE_SIZE$3 = 2 * 1024 * 1024;
const formSchema$5 = z.object({
  title: z.string().min(1, { message: "Por favor, insira um título" }),
  description: z.string(),
  link: z.string().optional(),
  order: z.string().refine(
    (value) => {
      const regex = /^\d+$/;
      return regex.test(value);
    },
    {
      message: "Por favor, insira um número"
    }
  ).default("0"),
  active: z.boolean().optional().default(true),
  image: z.object({
    preview: z.string(),
    file: z.instanceof(File).optional()
  }).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file.type) == null ? void 0 : _a.includes("image"));
    },
    "Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos."
  ).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file) == null ? void 0 : _a.size) <= MAX_FILE_SIZE$3;
    },
    `Tamanho máximo: ${MAX_FILE_SIZE$3 / 1e3}KB`
  ).refine((value) => {
    var _a;
    return (_a = value.preview) == null ? void 0 : _a.trim();
  }, "Por favor, insira uma imagem")
});
function CreateAndEditBanners({ data }) {
  console.log(data);
  const form = useForm({
    resolver: zodResolver(formSchema$5),
    defaultValues: {
      title: (data == null ? void 0 : data.title) ?? "",
      description: (data == null ? void 0 : data.description) ?? "",
      link: (data == null ? void 0 : data.link) ? data == null ? void 0 : data.link : "",
      order: (data == null ? void 0 : data.order) ? String(data == null ? void 0 : data.order) : "0",
      active: (data == null ? void 0 : data.active) ? Boolean(data == null ? void 0 : data.active) : true,
      image: {
        file: void 0,
        preview: (data == null ? void 0 : data.image) ?? ""
      }
    }
  });
  function onSubmit(values) {
    if (data == null ? void 0 : data.id) {
      router.post(
        `/admin/banners/${data.id}`,
        {
          _method: "put",
          title: values.title,
          image: values.image.file,
          description: values.description ?? "",
          link: values.link ?? "",
          order: Number(values.order),
          active: values.active
        },
        {
          onSuccess: () => {
            toast({
              title: "Banner editado",
              description: "Banner editado com sucesso."
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao editar o banner.",
              variant: "destructive"
            });
          }
        }
      );
      return;
    }
    router.post(
      "/admin/banners",
      {
        title: values.title,
        image: values.image.file,
        description: values.description ?? "",
        link: values.link ?? "",
        order: Number(values.order),
        active: values.active
      },
      {
        onSuccess: () => {
          toast({
            title: "Banner criado",
            description: "Banner criado com sucesso."
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar o banner.",
            variant: "destructive"
          });
        }
      }
    );
  }
  console.log(form.formState.errors);
  const handleDeleteImage = () => {
    form.setValue("image", { preview: "", file: void 0 });
    if ((data == null ? void 0 : data.image) == null || !data) return;
    router.post(
      `/admin/banners/${data == null ? void 0 : data.id}/delete-image`,
      {},
      {
        onSuccess: () => {
          toast({
            title: "Imagem deletada",
            description: "Imagem deletada com sucesso."
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao deletar a imagem.",
            variant: "destructive"
          });
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 p-6", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "active",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-base", children: "Status do banner" }),
            /* @__PURE__ */ jsx(FormDescription, { children: "Desative o banner para ele não aparecer no site." })
          ] }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Switch,
            {
              checked: field.value,
              onCheckedChange: field.onChange
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "title",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Título do banner" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Título do banner", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("fieldset", { className: "flex gap-4", children: /* @__PURE__ */ jsx(
      UploadImageField,
      {
        form,
        label: "Imagem",
        name: "image",
        className: "w-full",
        onDelete: () => handleDeleteImage()
      }
    ) }),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "order",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Ordem do banner" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Ordem do banner", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "link",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Link do banner" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Link do banner", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "description",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Descrição do banner" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Descrição do banner", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: data ? "Editar" : "Criar" }) })
  ] }) });
}
function MdEditorField({
  form,
  name,
  label,
  className,
  htmlValue
}) {
  const { theme } = useTheme();
  const [mdTheme, setMdTheme] = useState("light");
  const [text, setText] = useState(form.getValues(name));
  const turndownService = useMemo(() => new TurndownService(), []);
  const setTheme = useCallback(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setMdTheme(systemTheme);
    } else setMdTheme(theme);
  }, [theme]);
  const convertMarkdownToHtml = useCallback(() => {
    if (!htmlValue) {
      setText(" ");
    }
    if (htmlValue) {
      setText(turndownService.turndown(htmlValue));
    }
  }, [htmlValue, turndownService]);
  useEffect(() => {
    convertMarkdownToHtml();
  }, [convertMarkdownToHtml]);
  useEffect(() => {
    setTheme();
  }, [setTheme]);
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control: form.control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: cn("flex flex-col", className), children: [
        /* @__PURE__ */ jsx(FormLabel, { children: label }),
        /* @__PURE__ */ jsx(
          MdEditor,
          {
            editorId: name,
            language: "en-US",
            theme: mdTheme,
            modelValue: text,
            onChange: setText,
            onHtmlChanged: field.onChange
          }
        ),
        /* @__PURE__ */ jsx(FormMessage, {})
      ] })
    }
  );
}
const MAX_FILE_SIZE$2 = 2 * 1024 * 1024;
const formSchema$4 = z.object({
  name: z.string().min(1, { message: "Por favor, insira um nome" }),
  crm: z.string().min(1, { message: "Por favor, insira um CRM" }),
  phone: z.string().optional(),
  email: z.string().optional(),
  body: z.string().optional(),
  cover: z.object({
    preview: z.string(),
    file: z.instanceof(File).optional()
  }).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file.type) == null ? void 0 : _a.includes("image"));
    },
    "Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos."
  ).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file) == null ? void 0 : _a.size) <= MAX_FILE_SIZE$2;
    },
    `Tamanho máximo: ${MAX_FILE_SIZE$2 / 1e3}KB`
  )
});
function CreateAndEditClinicalStaff({
  data
}) {
  const form = useForm({
    resolver: zodResolver(formSchema$4),
    defaultValues: {
      name: (data == null ? void 0 : data.name) ?? "",
      body: (data == null ? void 0 : data.body) ?? "",
      crm: (data == null ? void 0 : data.crm) ?? "",
      phone: (data == null ? void 0 : data.phone) ? data == null ? void 0 : data.phone : "",
      email: (data == null ? void 0 : data.email) ? data == null ? void 0 : data.email : "",
      cover: {
        file: void 0,
        preview: (data == null ? void 0 : data.cover) ?? ""
      }
    }
  });
  function onSubmit(values) {
    if (data == null ? void 0 : data.id) {
      router.post(
        `/admin/clinical-staff/${data.id}`,
        {
          _method: "put",
          name: values.name,
          crm: values.crm,
          body: values.body ?? "",
          cover: values.cover.file,
          phone: values.phone,
          email: values.email
        },
        {
          onSuccess: () => {
            toast({
              title: "Funcionário(a) editado(a)",
              description: "Funcionário(a) editado(a) com sucesso."
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao editar o(a) funcionário(a).",
              variant: "destructive"
            });
          }
        }
      );
      return;
    }
    router.post(
      "/admin/clinical-staff",
      {
        name: values.name,
        crm: values.crm,
        body: values.body ?? "",
        cover: values.cover.file,
        phone: values.phone,
        email: values.email
      },
      {
        onSuccess: () => {
          toast({
            title: "Funcionário(a) criado(a)",
            description: "Funcionário(a) criado(a) com sucesso."
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar o(a) funcionário(a).",
            variant: "destructive"
          });
        }
      }
    );
  }
  const handleDeleteImage = () => {
    form.setValue("cover", { preview: "", file: void 0 });
    if ((data == null ? void 0 : data.cover) === null || !data) return;
    router.post(
      `/admin/units/${data == null ? void 0 : data.id}/delete-image`,
      {},
      {
        onSuccess: () => {
          toast({
            title: "Imagem deletada",
            description: "Imagem deletada com sucesso."
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao deletar a imagem.",
            variant: "destructive"
          });
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 p-6", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Nome do(a) funcionário(a)" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nome do(a) funcionário(a)", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("fieldset", { className: "flex gap-4", children: /* @__PURE__ */ jsx(
      UploadImageField,
      {
        form,
        label: "Imagem",
        name: "cover",
        className: "w-full",
        onDelete: () => handleDeleteImage()
      }
    ) }),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "crm",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "CRM" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "CRM", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "email",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Email (opcional)" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Email", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "phone",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Telefone (opcional)" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Telefone", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      MdEditorField,
      {
        form,
        label: "Curriculo (opcional)",
        name: "body",
        htmlValue: (data == null ? void 0 : data.body) ?? ""
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: data ? "Editar" : "Criar" }) })
  ] }) });
}
const MAX_FILE_SIZE$1 = 2 * 1024 * 1024;
const formSchema$3 = z.object({
  title: z.string().min(1, { message: "Por favor, insira um título" }),
  body: z.string(),
  icon: z.object({
    preview: z.string(),
    file: z.instanceof(File).optional()
  }).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file.type) == null ? void 0 : _a.includes("image"));
    },
    "Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos."
  ).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file) == null ? void 0 : _a.size) <= MAX_FILE_SIZE$1;
    },
    `Tamanho máximo: ${MAX_FILE_SIZE$1 / 1e3}KB`
  ).refine((value) => {
    var _a;
    return (_a = value.preview) == null ? void 0 : _a.trim();
  }, "Por favor, insira uma imagem")
});
function CreateAndEditExams({ data, userId }) {
  const form = useForm({
    resolver: zodResolver(formSchema$3),
    defaultValues: {
      title: (data == null ? void 0 : data.title) ?? "",
      body: (data == null ? void 0 : data.body) ?? "",
      icon: {
        file: void 0,
        preview: (data == null ? void 0 : data.icon) ?? ""
      }
    }
  });
  function onSubmit(values) {
    if (data == null ? void 0 : data.id) {
      router.post(
        `/admin/exams/${data.id}`,
        {
          _method: "put",
          title: values.title,
          body: values.body ?? "",
          icon: values.icon.file
        },
        {
          onSuccess: () => {
            toast({
              title: "Exame editado",
              description: "Exame editado com sucesso."
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao editar o exame.",
              variant: "destructive"
            });
          }
        }
      );
      return;
    }
    router.post(
      "/admin/exams",
      {
        title: values.title,
        body: values.body ?? "",
        icon: values.icon.file,
        user_id: userId
      },
      {
        onSuccess: () => {
          toast({
            title: "Exame criado",
            description: "Exame criado com sucesso."
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar o exame.",
            variant: "destructive"
          });
        }
      }
    );
  }
  const handleDeleteImage = (imageType) => {
    const fields = {
      icon: "icon",
      illustration_image_1: "illustration1",
      illustration_image_2: "illustration2"
    };
    form.setValue(fields[imageType], {
      preview: "",
      file: void 0
    });
    if (data) {
      router.post(
        `/admin/exams/${data == null ? void 0 : data.id}/delete-image`,
        { image_type: imageType },
        {
          onSuccess: () => {
            toast({
              title: "Imagem deletada",
              description: "Imagem deletada com sucesso."
            });
          },
          onError: () => {
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao deletar a imagem.",
              variant: "destructive"
            });
          }
        }
      );
    }
  };
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 p-6", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "title",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Título do exame" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Título do exame", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("fieldset", { className: "flex gap-4", children: /* @__PURE__ */ jsx(
      UploadImageField,
      {
        form,
        label: "Icone",
        name: "icon",
        className: "w-full",
        onDelete: () => handleDeleteImage("icon")
      }
    ) }),
    /* @__PURE__ */ jsx(
      MdEditorField,
      {
        form,
        label: "Conteúdo",
        name: "body",
        htmlValue: (data == null ? void 0 : data.body) ?? ""
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: data ? "Editar" : "Criar" }) })
  ] }) });
}
const formSchema$2 = z.object({
  title: z.string().min(1, { message: "Por favor, insira um título" }),
  body: z.string()
});
function CreateAndEditSubExams({
  data,
  examId,
  userId
}) {
  const form = useForm({
    resolver: zodResolver(formSchema$2),
    defaultValues: {
      title: (data == null ? void 0 : data.title) ?? "",
      body: (data == null ? void 0 : data.body) ?? ""
    }
  });
  function onSubmit(values) {
    if (data == null ? void 0 : data.id) {
      router.post(
        `/admin/exams/${examId}/subexams/${data.id}`,
        {
          _method: "put",
          title: values.title,
          body: values.body ?? ""
        },
        {
          onSuccess: () => {
            toast({
              title: "Exame editado",
              description: "Exame editado com sucesso."
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao editar o exame.",
              variant: "destructive"
            });
          }
        }
      );
      return;
    }
    router.post(
      `/admin/exams/${examId}/subexams`,
      {
        title: values.title,
        body: values.body ?? "",
        user_id: userId
      },
      {
        onSuccess: () => {
          toast({
            title: "Exame criado",
            description: "Exame criado com sucesso."
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar o exame.",
            variant: "destructive"
          });
        }
      }
    );
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 p-6", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "title",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Título do exame" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Título do exame", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      MdEditorField,
      {
        form,
        label: "Conteúdo",
        name: "body",
        htmlValue: (data == null ? void 0 : data.body) ?? ""
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: data ? "Editar" : "Criar" }) })
  ] }) });
}
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const formSchema$1 = z.object({
  title: z.string().min(1, { message: "Por favor, insira um título" }),
  address: z.string(),
  gmaps_link: z.string(),
  cover: z.object({
    preview: z.string(),
    file: z.instanceof(File).optional()
  }).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file.type) == null ? void 0 : _a.includes("image"));
    },
    "Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos."
  ).refine(
    (value) => {
      var _a;
      return !value.file || ((_a = value.file) == null ? void 0 : _a.size) <= MAX_FILE_SIZE;
    },
    `Tamanho máximo: ${MAX_FILE_SIZE / 1e3}KB`
  ).refine((value) => {
    var _a;
    return (_a = value.preview) == null ? void 0 : _a.trim();
  }, "Por favor, insira uma imagem"),
  phone: z.string().optional(),
  email: z.string().optional(),
  whatsapp: z.string().optional(),
  active: z.boolean().optional().default(true)
});
function CreateAndEditUnits({ data }) {
  console.log(data);
  const form = useForm({
    resolver: zodResolver(formSchema$1),
    defaultValues: {
      title: (data == null ? void 0 : data.title) ?? "",
      address: (data == null ? void 0 : data.address) ?? "",
      gmaps_link: (data == null ? void 0 : data.gmaps_link) ?? "",
      cover: {
        file: void 0,
        preview: (data == null ? void 0 : data.cover) ?? ""
      },
      active: true,
      email: (data == null ? void 0 : data.email) ?? "",
      phone: (data == null ? void 0 : data.phone) ?? "",
      whatsapp: (data == null ? void 0 : data.whatsapp) ?? ""
    }
  });
  function onSubmit(values) {
    if (data == null ? void 0 : data.id) {
      router.post(
        `/admin/units/${data.id}`,
        {
          _method: "put",
          title: values.title,
          address: values.address ?? "",
          gmaps_link: values.gmaps_link ?? "",
          cover: values.cover.file,
          phone: values.phone,
          email: values.email,
          whatsapp: values.whatsapp,
          active: values.active
        },
        {
          onSuccess: () => {
            toast({
              title: "Unidade editada",
              description: "Unidade editada com sucesso."
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao editar a unidade.",
              variant: "destructive"
            });
          }
        }
      );
      return;
    }
    router.post(
      "/admin/units",
      {
        title: values.title,
        address: values.address ?? "",
        gmaps_link: values.gmaps_link ?? "",
        cover: values.cover.file,
        phone: values.phone,
        email: values.email,
        whatsapp: values.whatsapp,
        active: values.active
      },
      {
        onSuccess: () => {
          toast({
            title: "Unidade criada",
            description: "Unidade criada com sucesso."
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar a unidade.",
            variant: "destructive"
          });
        }
      }
    );
  }
  const handleDeleteImage = () => {
    form.setValue("cover", { preview: "", file: void 0 });
    if ((data == null ? void 0 : data.cover) === null || !data) return;
    router.post(
      `/admin/units/${data == null ? void 0 : data.id}/delete-image`,
      {},
      {
        onSuccess: () => {
          toast({
            title: "Imagem deletada",
            description: "Imagem deletada com sucesso."
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao deletar a imagem.",
            variant: "destructive"
          });
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 p-6", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "active",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-base", children: "Status da unidade" }),
            /* @__PURE__ */ jsx(FormDescription, { children: "Desative a unidade para ele não aparecer no site." })
          ] }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Switch,
            {
              checked: field.value,
              onCheckedChange: field.onChange
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "title",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Nome da unidade" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nome da unidade", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("fieldset", { className: "flex gap-4", children: /* @__PURE__ */ jsx(
      UploadImageField,
      {
        form,
        label: "Imagem",
        name: "cover",
        className: "w-full",
        onDelete: () => handleDeleteImage()
      }
    ) }),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "gmaps_link",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Link do Iframe do Google Maps" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Link do Iframe do Google Maps", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "address",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Endereço" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Endereço", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("fieldset", { className: "flex w-full flex-col gap-4 md:flex-row", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "phone",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Telefone" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Telefone", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "whatsapp",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "WhatsApp" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "WhatsApp", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: data ? "Editar" : "Criar" }) })
  ] }) });
}
const formSchema = z.object({
  name: z.string().min(1, { message: "Por favor, insira um nome" }),
  email: z.string().email({ message: "Por favor, insira um email" }),
  password: z.string().min(6, { message: "Your password must be at least 6 characters" }).refine(
    (value) => {
      const regex = /(?=.*?[A-Z])/;
      return regex.test(value);
    },
    {
      message: "Your password must contain an uppercase character"
    }
  ).refine(
    (value) => {
      const regex = /(?=.*?[a-z])/;
      return regex.test(value);
    },
    {
      message: "Your password must contain a lowercase character"
    }
  ).refine(
    (value) => {
      const regex = /(?=.*?[0-9])/;
      return regex.test(value);
    },
    {
      message: "Your password must contain a number"
    }
  ).refine(
    (value) => {
      const regex = /(?=.*?[#?!@$ %^&*-])/;
      return regex.test(value);
    },
    {
      message: "Your password must contain a special character"
    }
  ),
  confirmPassword: z.string().min(6, { message: "Your password must be at least 6 characters" })
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
      path: ["confirmPassword"]
    });
  }
});
function CreateAndEditUsers({ data }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: (data == null ? void 0 : data.name) ?? "",
      email: (data == null ? void 0 : data.email) ?? "",
      password: "",
      confirmPassword: ""
    }
  });
  function onSubmit(values) {
    if (data == null ? void 0 : data.id) {
      router.post(
        `/admin/users/${data.id}`,
        {
          _method: "put",
          name: values.name,
          email: values.email,
          password: values.password,
          password_confirmation: values.confirmPassword
        },
        {
          onSuccess: () => {
            toast({
              title: "Usuário editado",
              description: "Usuário editado com sucesso."
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: "Erro",
              description: "Ocorreu um erro ao editar o usuário.",
              variant: "destructive"
            });
          }
        }
      );
      return;
    }
    router.post(
      `/admin/users`,
      {
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword
      },
      {
        onSuccess: () => {
          toast({
            title: "Usuário criado",
            description: "Usuário criado com sucesso."
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: "Erro",
            description: "Ocorreu um erro ao criar o usuário.",
            variant: "destructive"
          });
        }
      }
    );
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 p-6", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Nome do usuário" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nome do usuário", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "email",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Email do usuário" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Email do usuário", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "password",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Senha" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Senha", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "confirmPassword",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Confirme a senha" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Confirme a senha", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: data ? "Editar" : "Criar" }) })
  ] }) });
}
export {
  CreateAndEditBanners as C,
  CreateAndEditClinicalStaff as a,
  CreateAndEditExams as b,
  CreateAndEditSubExams as c,
  CreateAndEditUnits as d,
  CreateAndEditUsers as e
};
