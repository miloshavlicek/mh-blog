import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { Content } from "./Content";
import { Author, getAuthorBySlug } from "./Author";

const postsDir = join(process.cwd(), "data/posts");

export const postFields = [
  "slug",
  "title",
  "excerpt",
  "date",
  "authOnly",
  "topics",
  "youTubeVideo",
  "content",
];

export const postBindFields = { author: getAuthorBySlug };

export type Post = {
  topics?: string[];
  author?: Author;
  youTubeVideo?: string;
} & Content;

export function getPostBySlug(slug: string): Post | undefined {
  return getEntityBySlug<Post>(postsDir, slug, postFields, postBindFields);
}

export function getAllPosts(): Post[] {
  return getAllEntities<Post>(postsDir, postFields, postBindFields);
}
