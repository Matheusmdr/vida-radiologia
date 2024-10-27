import { DataTable } from '@/components/data-table';
import { examsColumns } from '@/components/data-table/columns/exams-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Exam } from '@/types/exam';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  exams: Exam[];
}

export default function Page({ auth, exams }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/exams/create">Adicionar exame</Link>
            </Button>
          </div>
          {exams && <DataTable data={exams} columns={examsColumns} />}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
