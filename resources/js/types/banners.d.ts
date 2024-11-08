interface Banners {
  id: number;
  title: string;
  image: string;
  description: string;
  link?: string;
  order: number;
  active: boolean;
}

export type { Banners };
