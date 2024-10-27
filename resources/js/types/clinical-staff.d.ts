interface ClinicalStaff {
  id: number;
  name: string;
  crm: string;
  cover?: string;
  body?: string;
  phone?: string;
  email?: string;
  created_at: Date;
  updated_at: Date;
}

export type { ClinicalStaff };
