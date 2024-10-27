import { DataTable } from '@/components/data-table';
import { clinicalStaffColumns } from '@/components/data-table/columns/clinical-staff-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { ClinicalStaff } from '@/types/clinical-staff';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  clinicalStaff: ClinicalStaff[];
}

export default function Page({ auth, clinicalStaff }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/clinical-staff/create">
                Adicionar funcionário
              </Link>
            </Button>
          </div>
          {clinicalStaff && (
            <DataTable data={clinicalStaff} columns={clinicalStaffColumns} />
          )}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
