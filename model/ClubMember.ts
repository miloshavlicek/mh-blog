import { Human, humanFields, peopleDir } from "./Human";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";

export const clubMemberFields = humanFields;

export type ClubMember = Human;

const clubMemberFilter = (human: Human) => human.isClubMember === true;

export function getClubMemberBySlug(slug: string): ClubMember | undefined {
  return getEntityBySlug<Human>(
    peopleDir,
    slug,
    clubMemberFields,
    {},
    clubMemberFilter
  );
}

export function getAllClubMembers(): ClubMember[] {
  return getAllEntities<Human>(
    peopleDir,
    clubMemberFields,
    {},
    clubMemberFilter
  );
}
