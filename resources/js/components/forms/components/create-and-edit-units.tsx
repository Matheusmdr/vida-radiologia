import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { Unit } from '@/types/unit';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { UploadImageField } from './fields/upload-image-field.tsx';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes

const formSchema = z.object({
  title: z.string().min(1, { message: 'Por favor, insira um título' }),
  address: z.string(),
  gmaps_link: z.string(),
  cover: z
    .object({
      preview: z.string(),
      file: z.instanceof(File).optional(),
    })
    .refine(
      (value) => !value.file || value.file.type?.includes('image'),
      'Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos.',
    )
    .refine(
      (value) => !value.file || value.file?.size <= MAX_FILE_SIZE,
      `Tamanho máximo: ${MAX_FILE_SIZE / 1000}KB`,
    )
    .refine((value) => value.preview?.trim(), 'Por favor, insira uma imagem'),
  phone: z.string().optional(),
  email: z.string().optional(),
  whatsapp: z.string().optional(),
  active: z.boolean().optional().default(true),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateAndEditUnitsProps {
  data?: Unit;
}

export function CreateAndEditUnits({ data }: CreateAndEditUnitsProps) {
  console.log(data);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? '',
      address: data?.address ?? '',
      gmaps_link: data?.gmaps_link ?? '',
      cover: {
        file: undefined,
        preview: data?.cover ?? '',
      },
      active: true,
      email: data?.email ?? '',
      phone: data?.phone ?? '',
      whatsapp: data?.whatsapp ?? '',
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/units/${data.id}`,
        {
          _method: 'put',
          title: values.title,
          address: values.address ?? '',
          gmaps_link: values.gmaps_link ?? '',
          cover: values.cover.file,
          phone: values.phone,
          email: values.email,
          whatsapp: values.whatsapp,
          active: values.active,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Unidade editada',
              description: 'Unidade editada com sucesso.',
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao editar a unidade.',
              variant: 'destructive',
            });
          },
        },
      );
      return;
    }

    router.post(
      '/admin/units',
      {
        title: values.title,
        address: values.address ?? '',
        gmaps_link: values.gmaps_link ?? '',
        cover: values.cover.file,
        phone: values.phone,
        email: values.email,
        whatsapp: values.whatsapp,
        active: values.active,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Unidade criada',
            description: 'Unidade criada com sucesso.',
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao criar a unidade.',
            variant: 'destructive',
          });
        },
      },
    );
  }

  const handleDeleteImage = () => {
    form.setValue('cover', { preview: '', file: undefined });

    if (data?.cover === null || !data) return;

    router.post(
      `/admin/units/${data?.id}/delete-image`,
      {},
      {
        onSuccess: () => {
          toast({
            title: 'Imagem deletada',
            description: 'Imagem deletada com sucesso.',
          });
        },
        onError: () => {
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao deletar a imagem.',
            variant: 'destructive',
          });
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Status da unidade</FormLabel>
                <FormDescription>
                  Desative a unidade para ele não aparecer no site.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da unidade</FormLabel>
              <FormControl>
                <Input placeholder="Nome da unidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="flex gap-4">
          <UploadImageField
            form={form}
            label="Imagem"
            name="cover"
            className="w-full"
            onDelete={() => handleDeleteImage()}
          />
        </fieldset>

        <FormField
          control={form.control}
          name="gmaps_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link do Iframe do Google Maps</FormLabel>
              <FormControl>
                <Input placeholder="Link do Iframe do Google Maps" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input placeholder="Endereço" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <fieldset className="flex w-full flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="Telefone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="WhatsApp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <div className="flex justify-end">
          <Button type="submit">{data ? 'Editar' : 'Criar'}</Button>
        </div>
      </form>
    </Form>
  );
}
