import { Checkbox } from '@/components/ui/checkbox';
import { ClinicalStaff } from '@/types/clinical-staff';
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const clinicalStaffColumns: ColumnDef<ClinicalStaff>[] = [
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
    accessorKey: 'cover',
    header: () => <div>Imagem</div>,
    cell: ({ row }) => {
      return (
        <div>
          <img src={`${row.getValue('cover')}`} alt="cover" className="w-36" />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => <div className="lowercase">{row.getValue('name')}</div>,
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
          editUrl="/admin/clinical-staff/edit/"
          deleteUrl="/admin/clinical-staff/delete/"
        />
      );
    },
  },
];
