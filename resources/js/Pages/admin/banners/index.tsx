import { DataTable } from '@/components/data-table';
import { bannersColumns } from '@/components/data-table/columns/banners-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Banners } from '@/types/banners';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  banners: Banners[];
}

export default function Page({ auth, banners }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/banners/create">Adicionar banner</Link>
            </Button>
          </div>
          {banners && <DataTable data={banners} columns={bannersColumns} />}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
