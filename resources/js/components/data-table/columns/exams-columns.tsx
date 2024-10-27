import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Exam } from '@/types/exam';
import { Link } from '@inertiajs/react';
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const examsColumns: ColumnDef<Exam>[] = [
  {
    id: 'id',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'Título',
    cell: ({ row }) => <div className="lowercase">{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'created_at',
    header: () => <div className="text-right">Criado em</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {format(row.getValue('created_at'), 'dd/MM/yyyy -	kk:mm')}
        </div>
      );
    },
  },
  {
    accessorKey: 'updated_at',
    header: () => <div className="text-right">Atualizado em</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {format(row.getValue('updated_at'), 'dd/MM/yyyy -	kk:mm')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DataTableRowActions
          row={row}
          editUrl="/admin/exams/edit/"
          deleteUrl="/admin/exams/delete/"
        >
          <DropdownMenuItem>
            <Link href={`/admin/exams/${row.original.id}/subexams/`}>
              Listar subexames
            </Link>
          </DropdownMenuItem>
        </DataTableRowActions>
      );
    },
  },
];
