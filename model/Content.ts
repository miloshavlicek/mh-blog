import { WithSlug } from "./interfaces";

export type Content = {
  title?: string;
  author?: string;
  excerpt?: string;
  content?: string;
  date?: string;
  authOnly?: boolean;
} & WithSlug;
