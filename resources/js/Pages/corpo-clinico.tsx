import { TextDivider } from '@/components/text-divider';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { ClinicalStaff } from '@/types/clinical-staff';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface Props {
  clinicalStaff: ClinicalStaff[];
}

export default function Page({ clinicalStaff }: Props) {
  return (
    <MainLayout>
      <Head title="Corpo Clínico" />
      <main className="space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20">
        <section className="space-y-10 md:space-y-20">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-base font-semibold text-blue-primary md:text-4xl">
                Corpo Clínico
              </h1>
              <TextDivider className="mt-2" />
            </div>
            <p className="text-center text-sm font-normal text-gray-500 md:text-2xl">
              O compromisso com a excelência em diagnóstico por imagem começa
              com nosso corpo clínico altamente qualificado. Contamos com uma
              equipe de médicos radiologistas especializados e experientes, que
              estão sempre atualizados com as mais recentes inovações e
              tecnologias na área de radiologia.
            </p>
          </div>
          <div className="mx-auto grid w-3/5 max-w-7xl grid-cols-1 place-items-center items-center justify-center justify-items-center gap-6 sm:w-4/5 md:grid-cols-2 md:gap-12">
            {clinicalStaff.map((staff, i) => (
              <React.Fragment key={staff.id}>
                <div className="flex flex-col items-center space-y-2 md:space-y-4">
                  <img
                    src={staff.cover}
                    alt={staff.name}
                    className="w-60 lg:h-80 lg:w-80"
                  />
                  <p className="text-center text-sm text-gray-500 md:text-2xl">
                    {staff.name}
                  </p>
                  <p className="text-center text-sm text-gray-500 md:text-2xl">
                    {staff.crm}
                  </p>
                </div>
                {i < clinicalStaff.length - 1 && (
                  <div className="h-px w-full bg-[#CECECE] md:hidden" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
        <section className="flex justify-center">
          <Link href="/" className="self-center">
            <Button className="h-8 w-fit rounded-3xl border border-blue-tertiary bg-blue-tertiary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-tertiary md:h-12 md:px-10 md:text-2xl">
              Voltar para Home
            </Button>
          </Link>
        </section>
      </main>
    </MainLayout>
  );
}
