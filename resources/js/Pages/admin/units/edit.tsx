import { CreateAndEditUnits } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Unit } from '@/types/unit';

interface Props extends PageProps {
  unit: Unit;
}

export default function Page({ auth, unit }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditUnits data={unit} />
    </Authenticated>
  );
}
