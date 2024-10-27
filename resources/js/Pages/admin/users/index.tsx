import { DataTable } from '@/components/data-table';
import { usersColumns } from '@/components/data-table/columns/users.columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps, User } from '@/types';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  users: User[];
}

export default function Page({ auth, users }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/users/create">Adicionar usuário</Link>
            </Button>
          </div>
          {users && <DataTable data={users} columns={usersColumns} />}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
