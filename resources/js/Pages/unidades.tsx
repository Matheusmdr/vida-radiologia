import { TextDivider } from '@/components/text-divider';
import { Button } from '@/components/ui/button';
import { UnitItem } from '@/components/unit';
import MainLayout from '@/layouts/main-layout';
import { Unit } from '@/types/unit';
import { Head, Link } from '@inertiajs/react';

interface Props {
  units: Unit[];
}

export default function Page({ units }: Props) {
  return (
    <MainLayout>
      <Head title="Nossas Unidades" />
      <main className="space-y-10 bg-[#EEEEEE] py-10 md:space-y-20 md:py-20">
        <section className="space-y-10 md:space-y-20">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 space-y-5 md:gap-4">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-base font-semibold text-blue-primary md:text-4xl">
                Nossas Unidades
              </h1>
              <TextDivider className="mt-2" />
            </div>
            <p className="text-center text-sm font-normal text-gray-500 md:text-2xl">
              Estamos comprometidos em oferecer serviços de radiologia de
              excelência em ambientes modernos e acessíveis. Para atender melhor
              a nossos pacientes, contamos com duas unidades estrategicamente
              localizadas nas cidades de Osvaldo Cruz/SP e Novo Horizonte/SP.
            </p>
          </div>
          <div className="mx-auto grid w-11/12 max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
            {units.map((unit) => (
              <UnitItem key={unit.id} unit={unit} />
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
