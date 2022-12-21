import { WithSlug } from "./interfaces";
import { join } from "path";

export const peopleDir = join(process.cwd(), "data/people");

export const humanFields = [
  "slug",
  "name",
  "jobTitle",
  "profilePhoto",
  "content",
  "linkToFacebook",
  "linkToFacebookGroup",
  "linkToLinkedIn",
  "linkToGitHub",
  "linkToWebsite",
  "location",
  "isAuthor",
  "isClubMember",
  "roles",
];

export type Human = {
  name: string;
  jobTitle: string;
  profilePhoto: string;
  content: string;
  linkToFacebook?: string;
  linkToFacebookGroup?: string;
  linkToLinkedIn?: string;
  linkToGitHub?: string;
  linkToWebsite?: string;
  location?: string;
  isAuthor?: boolean;
  isClubMember?: boolean;
  roles?: string[];
} & WithSlug;
