import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./getMarkdownEntity";
import { Post } from "../interfaces";

const postsDir = join(process.cwd(), "data/_posts");

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  return getEntityBySlug<Post>(postsDir, slug, fields);
}

export function getAllPosts(fields: string[] = []): Post[] {
  return getAllEntities<Post>(postsDir, fields);
}
