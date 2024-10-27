import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Toaster />
      <Footer />
    </>
  );
}

export default MainLayout;
