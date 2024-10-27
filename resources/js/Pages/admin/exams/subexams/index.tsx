import { DataTable } from '@/components/data-table';
import { subExamsColumns } from '@/components/data-table/columns/subexams-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Exam, SubExam } from '@/types/exam';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  exam: Exam;
  subexams: SubExam[];
}

export default function Page({ auth, exam, subexams }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href={`/admin/exams/${exam.id}/create`}>
                Adicionar exame
              </Link>
            </Button>
          </div>
          {subexams && (
            <DataTable
              data={subexams}
              columns={subExamsColumns({ examId: exam.id })}
            />
          )}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
