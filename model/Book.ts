import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { Content } from "./Content";

const postsDir = join(process.cwd(), "data/books");

export const bookFields = ["slug", "title", "excerpt", "date"];

export type Book = Content;

export function getBookBySlug(slug: string): Book | undefined {
  return getEntityBySlug<Book>(postsDir, slug, bookFields);
}

export function getAllBooks(): Book[] {
  return getAllEntities<Book>(postsDir, bookFields);
}
