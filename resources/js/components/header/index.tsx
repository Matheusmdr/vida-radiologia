import { HeaderDesktop } from './components/header-desktop';
import { HeaderMobile } from './components/header-mobile';

const menuItems = [
  {
    title: 'Nossas Unidades',
    href: '/unidades',
    isExternal: false,
  },
  {
    title: 'Nossos Exames',
    href: '/exames',
    isExternal: false,
  },
  {
    title: 'Corpo Clínico',
    href: '/corpo-clinico',
    isExternal: false,
  },
  {
    title: 'Convênios Atendidos',
    href: '/convenios',
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
