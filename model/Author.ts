import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { WithSlug } from "./interfaces";

const authorsDir = join(process.cwd(), "data/authors");

export const authorFields = [
  "slug",
  "name",
  "jobTitle",
  "profilePhoto",
  "description",
  "linkToFacebook",
  "linkToLinkedIn",
  "linkToGitHub",
  "location",
];

export type Author = {
  name: string;
  jobTitle: string;
  profilePhoto: string;
  description: string;
  linkToFacebook: string;
  linkToLinkedIn: string;
  linkToGitHub: string;
  location: string;
} & WithSlug;

export function getAuthorBySlug(slug: string): Author | undefined {
  return getEntityBySlug<Author>(authorsDir, slug, authorFields);
}

export function getAllAuthors(): Author[] {
  return getAllEntities<Author>(authorsDir, authorFields);
}
