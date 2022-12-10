export type Content = {
  title?: string;
  author?: string;
  excerpt?: string;
  slug?: string;
  content?: string;
  date?: Date;
  [key: string]: any;
}

export type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

export type Comment = {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};

export type Post = Content;

export type Book = Content;
