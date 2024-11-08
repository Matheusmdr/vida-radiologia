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
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast.js';
import { Banners } from '@/types/banners';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { UploadImageField } from './fields/upload-image-field.tsx';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes

const formSchema = z.object({
  title: z.string().min(1, { message: 'Por favor, insira um título' }),
  description: z.string(),
  link: z.string().optional(),
  order: z
    .string()
    .refine(
      (value) => {
        const regex = /^\d+$/;
        return regex.test(value);
      },
      {
        message: 'Por favor, insira um número',
      },
    )
    .default('0'),
  active: z.boolean().optional().default(true),
  image: z
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
});

type FormValues = z.infer<typeof formSchema>;

interface CreateAndEditBannersProps {
  data?: Banners;
}

export function CreateAndEditBanners({ data }: CreateAndEditBannersProps) {
  console.log(data);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? '',
      description: data?.description ?? '',
      link: data?.link ? data?.link : '',
      order: data?.order ? String(data?.order) : '0',
      active: data?.active ? Boolean(data?.active) : true,
      image: {
        file: undefined,
        preview: data?.image ?? '',
      },
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/banners/${data.id}`,
        {
          _method: 'put',
          title: values.title,
          image: values.image.file,
          description: values.description ?? '',
          link: values.link ?? '',
          order: Number(values.order),
          active: values.active,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Banner editado',
              description: 'Banner editado com sucesso.',
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao editar o banner.',
              variant: 'destructive',
            });
          },
        },
      );
      return;
    }

    router.post(
      '/admin/banners',
      {
        title: values.title,
        image: values.image.file,
        description: values.description ?? '',
        link: values.link ?? '',
        order: Number(values.order),
        active: values.active,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Banner criado',
            description: 'Banner criado com sucesso.',
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao criar o banner.',
            variant: 'destructive',
          });
        },
      },
    );
  }

  console.log(form.formState.errors);

  const handleDeleteImage = () => {
    form.setValue('image', { preview: '', file: undefined });

    if (data?.image == null || !data) return;
    router.post(
      `/admin/banners/${data?.id}/delete-image`,
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
                <FormLabel className="text-base">Status do banner</FormLabel>
                <FormDescription>
                  Desative o banner para ele não aparecer no site.
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
              <FormLabel>Título do banner</FormLabel>
              <FormControl>
                <Input placeholder="Título do banner" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="flex gap-4">
          <UploadImageField
            form={form}
            label="Imagem"
            name="image"
            className="w-full"
            onDelete={() => handleDeleteImage()}
          />
        </fieldset>

        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ordem do banner</FormLabel>
              <FormControl>
                <Input placeholder="Ordem do banner" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link do banner</FormLabel>
              <FormControl>
                <Input placeholder="Link do banner" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do banner</FormLabel>
              <FormControl>
                <Textarea placeholder="Descrição do banner" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">{data ? 'Editar' : 'Criar'}</Button>
        </div>
      </form>
    </Form>
  );
}
