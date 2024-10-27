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
import { Exam } from '@/types/exam';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { Path, useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes

const formSchema = z.object({
  title: z.string().min(1, { message: 'Por favor, insira um título' }),
  body: z.string(),
  icon: z
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

interface CreateAndEditExamsProps {
  userId: number;
  data?: Exam;
}

export function CreateAndEditExams({ data, userId }: CreateAndEditExamsProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? '',
      body: data?.body ?? '',
      icon: {
        file: undefined,
        preview: data?.icon ?? '',
      },
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/exams/${data.id}`,
        {
          _method: 'put',
          title: values.title,
          body: values.body ?? '',
          icon: values.icon.file,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Exame editado',
              description: 'Exame editado com sucesso.',
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao editar o exame.',
              variant: 'destructive',
            });
          },
        },
      );
      return;
    }

    router.post(
      '/admin/exams',
      {
        title: values.title,
        body: values.body ?? '',
        icon: values.icon.file,
        user_id: userId,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Exame criado',
            description: 'Exame criado com sucesso.',
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao criar o exame.',
            variant: 'destructive',
          });
        },
      },
    );
  }

  const handleDeleteImage = (
    imageType: 'icon' | 'illustration_image_1' | 'illustration_image_2',
  ) => {
    const fields = {
      icon: 'icon',
      illustration_image_1: 'illustration1',
      illustration_image_2: 'illustration2',
    };

    form.setValue(fields[imageType] as Path<FormValues>, {
      preview: '',
      file: undefined,
    });

    if (data) {
      router.post(
        `/admin/exams/${data?.id}/delete-image`,
        { image_type: imageType },
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
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título do exame</FormLabel>
              <FormControl>
                <Input placeholder="Título do exame" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="flex gap-4">
          <UploadImageField
            form={form}
            label="Icone"
            name="icon"
            className="w-full"
            onDelete={() => handleDeleteImage('icon')}
          />
        </fieldset>
        <MdEditorField
          form={form}
          label="Conteúdo"
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
