import { CreateAndEditUsers } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps, User } from '@/types';

interface Props extends PageProps {
  user: User;
}

export default function Page({ auth, user }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditUsers data={user} />
    </Authenticated>
  );
}
