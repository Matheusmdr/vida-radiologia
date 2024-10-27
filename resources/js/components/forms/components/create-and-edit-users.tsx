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
import { User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    name: z.string().min(1, { message: 'Por favor, insira um nome' }),
    email: z.string().email({ message: 'Por favor, insira um email' }),
    password: z
      .string()
      .min(6, { message: 'Your password must be at least 6 characters' })
      .refine(
        (value) => {
          const regex = /(?=.*?[A-Z])/;
          return regex.test(value);
        },
        {
          message: 'Your password must contain an uppercase character',
        },
      )
      .refine(
        (value) => {
          const regex = /(?=.*?[a-z])/;
          return regex.test(value);
        },
        {
          message: 'Your password must contain a lowercase character',
        },
      )
      .refine(
        (value) => {
          const regex = /(?=.*?[0-9])/;
          return regex.test(value);
        },
        {
          message: 'Your password must contain a number',
        },
      )
      .refine(
        (value) => {
          const regex = /(?=.*?[#?!@$ %^&*-])/;
          return regex.test(value);
        },
        {
          message: 'Your password must contain a special character',
        },
      ),
    confirmPassword: z
      .string()
      .min(6, { message: 'Your password must be at least 6 characters' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

type FormValues = z.infer<typeof formSchema>;

interface CreateAndEditUsersProps {
  data?: User;
}

export function CreateAndEditUsers({ data }: CreateAndEditUsersProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name ?? '',
      email: data?.email ?? '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/users/${data.id}`,
        {
          _method: 'put',
          name: values.name,
          email: values.email,
          password: values.password,
          password_confirmation: values.confirmPassword,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Usuário editado',
              description: 'Usuário editado com sucesso.',
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao editar o usuário.',
              variant: 'destructive',
            });
          },
        },
      );
      return;
    }

    router.post(
      `/admin/users`,
      {
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Usuário criado',
            description: 'Usuário criado com sucesso.',
          });
        },
        onError: (errors) => {
          console.log(errors);
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao criar o usuário.',
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do usuário</FormLabel>
              <FormControl>
                <Input placeholder="Nome do usuário" {...field} />
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
              <FormLabel>Email do usuário</FormLabel>
              <FormControl>
                <Input placeholder="Email do usuário" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme a senha</FormLabel>
              <FormControl>
                <Input placeholder="Confirme a senha" {...field} />
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
