import { join } from "path";
import { getAllEntities, getEntityBySlug } from "./comment/getMarkdownEntity";
import { WithSlug } from "./interfaces";

const topicsDir = join(process.cwd(), "data/topics");

export const topicFields = ["slug", "title", "priority", "content"];

export type Topic = {
  title: string;
  priority?: number;
  content?: string;
} & WithSlug;

export function getTopicBySlug(slug: string): Topic | undefined {
  return getEntityBySlug<Topic>(topicsDir, slug, topicFields);
}

export function getAllTopics(): Topic[] {
  return getAllEntities<Topic>(topicsDir, topicFields).sort((a, b) =>
    (a.priority ?? 99999) < (b.priority ?? 99999) ? -1 : 1
  );
}
