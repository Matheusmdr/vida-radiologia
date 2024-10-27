import { CreateAndEditSubExams } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Exam, SubExam } from '@/types/exam';

interface Props extends PageProps {
  exam: Exam;
  subexam: SubExam;
}

export default function Page({ auth, exam, subexam }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditSubExams
        data={subexam}
        userId={auth.user.id}
        examId={exam.id}
      />
    </Authenticated>
  );
}
