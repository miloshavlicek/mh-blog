import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { WithSlug } from "./interfaces";

const topicsDir = join(process.cwd(), "data/topics");

export const topicFields = ["slug", "title", "description"];

export type Topic = {
  title: string;
  description: string;
} & WithSlug;

export function getTopicBySlug(slug: string): Topic | undefined {
  return getEntityBySlug<Topic>(topicsDir, slug, topicFields);
}

export function getAllTopics(): Topic[] {
  return getAllEntities<Topic>(topicsDir, topicFields);
}
