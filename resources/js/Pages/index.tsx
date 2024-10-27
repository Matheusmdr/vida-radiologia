import { HomeLink } from '@/components/home-link';
import { TextDivider } from '@/components/text-divider';
import { Button } from '@/components/ui/button';
import { UnitCard } from '@/components/unit/components/unit-card';
import MainLayout from '@/layouts/main-layout';
import { Unit } from '@/types/unit';
import { Head, Link } from '@inertiajs/react';

interface Props {
  units: Unit[];
}

export default function Page({ units }: Props) {
  return (
    <MainLayout>
      <Head title="Home" />
      <section className="py-5 pt-10 md:pt-20">
        <div className="mx-auto flex w-3/5 max-w-sm flex-col justify-center gap-2 md:gap-6">
          <HomeLink href="/" text="Resultados de Exames" />
          <HomeLink href="/exames" text="Nossos Exames" />
          <HomeLink href="/convenios" text="Convênios Atendidos" />
        </div>
      </section>
      <section className="py-10 md:py-20">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8">
          <div>
            <h2 className="text-center text-lg font-semibold text-blue-primary md:text-4xl">
              Contamos com {units.length.toString().padStart(2, '0')} unidades!
            </h2>
            <TextDivider className="mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-2 justify-center gap-4">
            {units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/noticias" className="self-center">
              <Button className="h-8 w-fit rounded-3xl border border-blue-primary bg-blue-primary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-primary md:h-12 md:px-10 md:text-2xl">
                Mais informações
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-home bg-cover bg-center py-10 md:py-20">
        <div className="mx-auto flex min-h-[40vh] w-11/12 max-w-7xl flex-col justify-center gap-2 md:min-h-[60vh] md:gap-8">
          <div>
            <h2 className="text-center text-base font-bold text-white md:text-4xl">
              Sua saúde em cada detalhe!
            </h2>
            <h3 className="text-center text-sm font-semibold text-gray-500 text-white md:text-2xl">
              CONFIRA OS CONVÊNIOS QUE ATENDEMOS
            </h3>
          </div>

          <div className="flex justify-center">
            <Link href="/nossas-unidades" className="self-center">
              <Button className="h-8 w-fit rounded-3xl border border-blue-primary bg-blue-primary px-5 text-xs font-bold text-white hover:bg-white hover:text-blue-primary md:h-12 md:px-10 md:text-2xl">
                Saiba mais
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="space-y-10 py-10 md:space-y-20 md:py-20">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-4">
          <p className="text-center text-sm font-normal text-gray-500 md:text-2xl">
            A Vida Radiologia conta com equipamentos de última geração, uma
            equipe de colaboradores treinados e um corpo clínico formado por
            profissionais especializados e altamente capacitados para oferecer
            um serviço de excelência em exames de imagens.
          </p>
        </div>
        <div className="mx-auto grid w-10/12 max-w-7xl grid-cols-2 justify-center gap-6">
          <img
            src="/imgs/banners/mini-banner-1.jpg"
            alt=""
            className="w-full rounded-2xl"
          />
          <img
            src="/imgs/banners/mini-banner-2.jpg"
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
      </section>
    </MainLayout>
  );
}
