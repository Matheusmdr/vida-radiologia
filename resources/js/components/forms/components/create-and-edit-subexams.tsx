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
import { SubExam } from '@/types/exam';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Por favor, insira um título' }),
  body: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateAndEditSubExamsProps {
  examId: number;
  userId: number;
  data?: SubExam;
}

export function CreateAndEditSubExams({
  data,
  examId,
  userId,
}: CreateAndEditSubExamsProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? '',
      body: data?.body ?? '',
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/exams/${examId}/subexams/${data.id}`,
        {
          _method: 'put',
          title: values.title,
          body: values.body ?? '',
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
      `/admin/exams/${examId}/subexams`,
      {
        title: values.title,
        body: values.body ?? '',
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
