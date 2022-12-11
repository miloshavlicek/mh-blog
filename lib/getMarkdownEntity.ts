import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { Content } from "../interfaces";

export function getEntitiesSlugs(dataDir: string): string[] {
  try {
    return fs.readdirSync(dataDir);
  } catch (e) {
    return [];
  }
}

export function getEntityBySlug<T extends Content>(
  dataDir: string,
  slug: string,
  fields: string[] = []
): T {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dataDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const item = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      item[field] = realSlug;
    } else if (field === "content") {
      item[field] = content;
    } else if (typeof data[field] !== "undefined") {
      item[field] = data[field];
    }
  });

  return item as T;
}

export function getAllEntities<T extends Content>(
  dataDir: string,
  fields: string[] = []
): T[] {
  return (
    getEntitiesSlugs(dataDir)
      .map((slug) => getEntityBySlug<T>(dataDir, slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );
}
