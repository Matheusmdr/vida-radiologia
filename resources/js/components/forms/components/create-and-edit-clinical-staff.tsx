import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ClinicalStaff } from '@/types/clinical-staff';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes

const formSchema = z.object({
  name: z.string().min(1, { message: 'Por favor, insira um nome' }),
  crm: z.string().min(1, { message: 'Por favor, insira um CRM' }),
  phone: z.string().optional(),
  email: z.string().optional(),
  body: z.string().optional(),
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
    ),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateAndEditClinicalStaffProps {
  data?: ClinicalStaff;
}

export function CreateAndEditClinicalStaff({
  data,
}: CreateAndEditClinicalStaffProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name ?? '',
      body: data?.body ?? '',
      crm: data?.crm ?? '',
      phone: data?.phone ? data?.phone : '',
      email: data?.email ? data?.email : '',
      cover: {
        file: undefined,
        preview: data?.cover ?? '',
      },
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/clinical-staff/${data.id}`,
        {
          _method: 'put',
          name: values.name,
          crm: values.crm,
          body: values.body ?? '',
          cover: values.cover.file,
          phone: values.phone,
          email: values.email,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Funcionário(a) editado(a)',
              description: 'Funcionário(a) editado(a) com sucesso.',
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao editar o(a) funcionário(a).',
              variant: 'destructive',
            });
          },
        },
      );
      return;
    }

    router.post(
      '/admin/clinical-staff',
      {
        name: values.name,
        crm: values.crm,
        body: values.body ?? '',
        cover: values.cover.file,
        phone: values.phone,
        email: values.email,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Funcionário(a) criado(a)',
            description: 'Funcionário(a) criado(a) com sucesso.',
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao criar o(a) funcionário(a).',
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do(a) funcionário(a)</FormLabel>
              <FormControl>
                <Input placeholder="Nome do(a) funcionário(a)" {...field} />
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
          name="crm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CRM</FormLabel>
              <FormControl>
                <Input placeholder="CRM" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <MdEditorField
          form={form}
          label="Curriculo (opcional)"
          name="body"
          htmlValue={data?.body ?? ''}
        />

        <div className="flex justify-end">
          <Button type="submit">{data ? 'Editar' : 'Criar'}</Button>
        </div>
      </form>
    </Form>
  );
}
