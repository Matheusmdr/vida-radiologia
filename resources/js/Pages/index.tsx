import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
  return (
    <MainLayout>
      <Head title="Welcome" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        hellow world
      </div>
    </MainLayout>
  );
}
