import { CreateAndEditExams } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Exam } from '@/types/exam';

interface Props extends PageProps {
  exam: Exam;
}

export default function Page({ auth, exam }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditExams data={exam} userId={auth.user.id} />
    </Authenticated>
  );
}
