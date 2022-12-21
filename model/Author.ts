import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { Human, humanFields, peopleDir } from "./Human";

export const authorFields = humanFields;

export type Author = Human;

const authorFilter = (human: Human) => human.isAuthor === true;

export function getAuthorBySlug(slug: string): Author | undefined {
  return getEntityBySlug<Human>(
    peopleDir,
    slug,
    authorFields,
    {},
    authorFilter
  );
}

export function getAllAuthors(): Author[] {
  return getAllEntities<Human>(peopleDir, authorFields, {}, authorFilter);
}
