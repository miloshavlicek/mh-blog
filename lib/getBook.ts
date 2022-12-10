import type { Book } from "../interfaces";
import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./getMarkdownEntity";

const postsDir = join(process.cwd(), "data/_books");

export function getBookBySlug(slug: string, fields: string[] = []): Book {
  return getEntityBySlug<Book>(postsDir, slug, fields);
}

export function getAllBooks(fields: string[] = []): Book[] {
  return getAllEntities<Book>(postsDir);
}
