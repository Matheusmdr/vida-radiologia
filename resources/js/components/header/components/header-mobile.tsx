import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Fragment, useState } from 'react';

const menuItems = [
  {
    title: 'Agendar Exame',
    href: '/unidades',
    isExternal: true,
  },
  {
    title: 'Resultados de Exames',
    href: 'https://pacs.clinicavidaradiologia.com.br/login',
    isExternal: true,
  },
  {
    title: 'Nossos Exames',
    href: '/exames',
    isExternal: false,
  },
  {
    title: 'Convênios Atendidos',
    href: '/convenios',
    isExternal: false,
  },
  {
    title: 'Nossas Unidades',
    href: '/unidades',
    isExternal: false,
  },
  {
    title: 'Corpo Clínico',
    href: '/corpo-clinico',
    isExternal: false,
  },
];

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 rounded-full bg-white transition ease-in-out transform duration-300`;
  return (
    <header
      id="top"
      className="sticky top-0 z-10 block bg-blue-primary shadow lg:hidden"
    >
      <div className="mx-auto flex w-11/12 items-center justify-between py-4">
        <Link href="/">
          <img
            src="/imgs/logo_branca.png"
            className="max-w-[100px]"
            alt="Logo Vida Radiologia"
          />
        </Link>
        <div className="flex flex-col items-center gap-2">
          <Button className="rounded-2xl border-white bg-white text-blue-primary hover:bg-white">
            Agende seu exame!
          </Button>
        </div>
        <Button
          size={'icon'}
          className={cn(
            'relative z-50 flex h-12 w-12 flex-col items-center justify-center gap-0 rounded-xl border-2 border-transparent !bg-transparent shadow-none lg:hidden',
            isOpen && 'fixed shadow-none',
          )}
          onClick={() => setIsOpen(!isOpen)}
          name="Menu Mobile"
          aria-label="Menu Mobile"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
        >
          <div
            className={cn(
              genericHamburgerLine,
              'opacity-100',
              isOpen && 'my-1 translate-y-3 rotate-45 bg-white opacity-100',
            )}
          />
          <div
            className={cn(
              genericHamburgerLine,
              'mt-1 opacity-100',
              isOpen && 'my-1 opacity-0',
            )}
          />
          <div
            className={cn(
              genericHamburgerLine,
              'mt-1 opacity-100',
              isOpen && 'my-1 -translate-y-3 -rotate-45 bg-white opacity-100',
            )}
          />
        </Button>
      </div>

      {isOpen && (
        <nav
          className={cn(
            'fixed inset-0 z-40 hidden h-full w-screen items-center justify-center bg-blue-primary lg:relative lg:inset-auto lg:block lg:w-fit lg:bg-transparent',
            isOpen && 'flex lg:block',
          )}
        >
          <div className="flex flex-col gap-12">
            <Link href="/">
              <img
                src="/imgs/logo_branca.png"
                className="max-w-[150px]"
                alt="Logo Instituto de Radiologia de Presidente Prudente"
              />
            </Link>
            <div className="flex flex-col items-center gap-3">
              {menuItems.map((item) => (
                <Fragment key={item.title}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      className="text-base font-semibold text-white hover:text-white"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-base font-semibold text-white hover:text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                  <div className="h-[1px] w-full bg-white"></div>
                </Fragment>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export { HeaderMobile };
