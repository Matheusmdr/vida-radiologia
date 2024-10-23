import { HeaderDesktop } from './components/header-desktop';
import { HeaderMobile } from './components/header-mobile';

const menuItems = [
  {
    title: 'Nossas Unidades',
    href: '/nossas-unidades',
    isExternal: false,
  },
  {
    title: 'Sobre o Instituto',
    href: '/sobre',
    isExternal: false,
  },
  {
    title: 'Nossos Exames',
    href: '/nossos-exames',
    isExternal: false,
  },
  {
    title: 'Corpo Clínico',
    href: '/corpo-clinico',
    isExternal: false,
  },
  {
    title: 'Convênios Atendidos',
    href: '/convenios-atendidos',
    isExternal: false,
  },

  {
    title: 'Fale Conosco',
    href: '/fale-conosco',
    isExternal: false,
  },
];

function Header() {
  return (
    <>
      <HeaderDesktop menuItems={menuItems} />
      <HeaderMobile />
    </>
  );
}

export { Header };
