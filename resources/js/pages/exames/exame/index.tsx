import { ExamButton } from '@/components/exam-button';
import { TextDivider } from '@/components/text-divider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { Exam } from '@/types/exam';
import { Head, Link } from '@inertiajs/react';

interface Props {
  exam: Exam;
}

export default function Page({ exam }: Props) {
  return (
    <MainLayout>
      <Head title={exam.title} />
      <main className="space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20">
        <section className="space-y-10 md:space-y-20">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-base font-semibold text-blue-primary md:text-4xl">
                Nossos Exames
              </h1>
              <TextDivider className="mt-2" />
            </div>

            <div className="flex flex-col gap-6">
              {!!exam && (
                <ExamButton
                  href={`/exames/${exam.slug}`}
                  text={exam.title}
                  iconSrc={exam.icon}
                />
              )}
            </div>

            <div
              className="[&_ul]: space-y-4 text-sm font-normal text-blue-tertiary md:text-2xl [&_h1]:text-base [&_h1]:font-bold [&_h1]:md:text-3xl [&_h2]:text-base [&_h2]:font-bold [&_h2]:md:text-3xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:md:text-3xl [&_h4]:text-base [&_h4]:font-bold [&_h4]:md:text-3xl [&_h5]:text-base [&_h5]:font-bold [&_h5]:md:text-3xl [&_h6]:text-base [&_h6]:font-bold [&_h6]:md:text-3xl [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: exam.body ?? '' }}
            />

            {!!exam.subexams && exam.subexams.length > 0 && (
              <Accordion type="single" collapsible className="mx-auto w-11/12">
                {exam.subexams.map((subexam) => (
                  <AccordionItem
                    key={subexam.id}
                    value={subexam.title}
                    className="border-b-[#CECECE]"
                  >
                    <AccordionTrigger className="text-center text-sm font-bold text-blue-tertiary md:text-2xl">
                      {subexam.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        className="[&_ul]: space-y-4 text-sm font-normal text-blue-tertiary md:text-2xl [&_h1]:text-base [&_h1]:font-bold [&_h1]:md:text-3xl [&_h2]:text-base [&_h2]:font-bold [&_h2]:md:text-3xl [&_h3]:text-base [&_h3]:font-bold [&_h3]:md:text-3xl [&_h4]:text-base [&_h4]:font-bold [&_h4]:md:text-3xl [&_h5]:text-base [&_h5]:font-bold [&_h5]:md:text-3xl [&_h6]:text-base [&_h6]:font-bold [&_h6]:md:text-3xl [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5"
                        dangerouslySetInnerHTML={{ __html: subexam.body ?? '' }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </section>
        <section className="flex justify-center">
          <Link href="/exames" className="self-center">
            <Button className="h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl">
              Voltar para Exames
            </Button>
          </Link>
        </section>
      </main>
    </MainLayout>
  );
}
