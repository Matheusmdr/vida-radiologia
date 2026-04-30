import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';

export default function Page({ auth }: PageProps) {
  return (
    <Authenticated user={auth.user}>
      <main className="space-y-10 bg-gray-100 py-10 md:space-y-20 md:py-20">
        {auth.user.name}
      </main>
    </Authenticated>
  );
}
