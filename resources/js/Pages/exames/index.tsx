import { ExamButton } from '@/components/exam-button';
import { TextDivider } from '@/components/text-divider';
import MainLayout from '@/layouts/main-layout';
import { Exam } from '@/types/exam';
import { Head } from '@inertiajs/react';

interface Props {
  exams: Exam[];
}

export default function Page({ exams }: Props) {
  return (
    <MainLayout>
      <Head title="Nossos Exames" />
      <section className="space-y-10 bg-gray-100 py-10 md:space-y-20 md:py-20">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-base font-semibold text-blue-primary md:text-4xl">
              Nossos Exames
            </h1>
            <TextDivider className="mt-2" />
          </div>
          <p className="text-center text-sm font-normal text-gray-500 md:text-2xl">
            Nossa equipe de profissionais qualificados utiliza tecnologia de
            ponta para garantir resultados precisos e rápidos, essenciais para
            um diagnóstico eficaz e um tratamento adequado.
          </p>

          <p className="text-center text-sm font-semibold text-gray-500 md:text-2xl">
            SELECIONE O EXAME PARA VER AS OPÇÕES
          </p>

          <div className="flex flex-col gap-6">
            {exams.map((exam) => (
              <ExamButton
                key={exam.id}
                href={`/exames/${exam.slug}`}
                text={exam.title}
                iconSrc={exam.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
