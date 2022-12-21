import { WithSlug } from "./interfaces";
import { join } from "path";

export const peopleDir = join(process.cwd(), "data/people");

export const humanFields = [
  "slug",
  "name",
  "jobTitle",
  "profilePhoto",
  "description",
  "linkToFacebook",
  "linkToFacebookGroup",
  "linkToLinkedIn",
  "linkToGitHub",
  "linkToWebsite",
  "location",
  "isAuthor",
  "isClubMember",
];

export type Human = {
  name: string;
  jobTitle: string;
  profilePhoto: string;
  description: string;
  linkToFacebook?: string;
  linkToFacebookGroup?: string;
  linkToLinkedIn?: string;
  linkToGitHub?: string;
  linkToWebsite?: string;
  location?: string;
  isAuthor?: boolean;
  isClubMember?: boolean;
} & WithSlug;
