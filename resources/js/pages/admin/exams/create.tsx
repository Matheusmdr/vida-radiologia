import { CreateAndEditExams } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';

export default function Page({ auth }: PageProps) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditExams userId={auth.user.id} />
    </Authenticated>
  );
}
