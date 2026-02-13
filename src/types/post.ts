export interface PostMeta {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  thumbnail?: string;
  slug: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}
