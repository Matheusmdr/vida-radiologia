interface Unit {
  id: number;
  title: string;
  cover?: string;
  body?: string;
  address: string;
  gmaps_link: string;
  created_at: Date;
  updated_at: Date;
  phone: string;
  whatsapp?: string;
  email?: string;
  active: boolean;
  slug: string;
}

export type { Unit };
