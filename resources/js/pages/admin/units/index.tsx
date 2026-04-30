import { DataTable } from '@/components/data-table';
import { unitsColumns } from '@/components/data-table/columns/units-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Unit } from '@/types/unit';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  units: Unit[];
}

export default function Page({ auth, units }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/units/create">Adicionar unidade</Link>
            </Button>
          </div>
          {units && <DataTable data={units} columns={unitsColumns} />}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
