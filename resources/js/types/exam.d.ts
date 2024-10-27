interface Exam {
  id: number;
  slug: string;
  title: string;
  body?: string;
  body_2?: string;
  illustration_image_1?: string;
  illustration_image_2?: string;
  icon: string;
  created_at: Date;
  updated_at: Date;
  subexams?: SubExam[];
}

interface SubExam {
  id: number;
  exam_id: number;
  title: string;
  body?: string;
  slug: string;
}

export type { Exam, SubExam };
