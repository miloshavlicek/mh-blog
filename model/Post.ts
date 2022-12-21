import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { Content } from "./Content";
import { getHumanBySlug, Human } from "./Human";

const postsDir = join(process.cwd(), "data/posts");

export const postFields = [
  "slug",
  "title",
  "excerpt",
  "date",
  "authOnly",
  "topics",
  "youTubeVideo",
  "workbook",
  "content",
];

export const postBindFields = {
  author: getHumanBySlug,
  organizer: getHumanBySlug,
};

export type Post = {
  topics?: string[];
  author?: Human;
  organizer?: Human;
  youTubeVideo?: string;
  workbook?: string;
} & Content;

export function getPostBySlug(slug: string): Post | undefined {
  return getEntityBySlug<Post>(postsDir, slug, postFields, postBindFields);
}

export function getAllPosts(): Post[] {
  return getAllEntities<Post>(postsDir, postFields, postBindFields);
}
