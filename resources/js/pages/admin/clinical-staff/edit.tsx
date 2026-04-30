import { CreateAndEditClinicalStaff } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { ClinicalStaff } from '@/types/clinical-staff';

interface Props extends PageProps {
  clinicalStaff: ClinicalStaff;
}

export default function Page({ auth, clinicalStaff }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditClinicalStaff data={clinicalStaff} />
    </Authenticated>
  );
}
