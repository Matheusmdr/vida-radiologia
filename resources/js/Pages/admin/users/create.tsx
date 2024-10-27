import { CreateAndEditUsers } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';

export default function Page({ auth }: PageProps) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditUsers />
    </Authenticated>
  );
}
