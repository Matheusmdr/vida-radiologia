import { AdminHeader } from '@/components/admin-header';
import { SideNav } from '@/components/side-nav';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { User } from '@/types';
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Authenticated({
  user,
  children,
}: PropsWithChildren<{ user: User }>) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Head>
        <title>Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Toaster />
      <div className="flex h-screen flex-col overflow-hidden">
        <AdminHeader user={user} />
        <div className="h-full bg-white dark:bg-[#09090b]">
          <SideNav>{children}</SideNav>
        </div>
      </div>
    </ThemeProvider>
  );
}
