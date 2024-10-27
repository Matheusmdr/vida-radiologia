import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="bg-main-background">{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default MainLayout;
