import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { Content } from "../Content";

export type getEntityBySlugInterface<T> = (slug: string) => T;

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
  fields: string[] = [],
  bindFields: { [index: string]: (slug: string) => any } = {},
  filter: (entity: T) => boolean = () => true
): T | undefined {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dataDir, `${realSlug}.md`);

  let fileContents: string;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (e) {
    return;
  }

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

  Object.keys(bindFields).forEach((bindFieldSlug: string) => {
    if (typeof data[bindFieldSlug] === "undefined") {
      return;
    }

    const getBySlugFunction = bindFields[bindFieldSlug];
    item[bindFieldSlug] = getBySlugFunction(data[bindFieldSlug]);
  });

  if (!filter(item as T)) {
    return;
  }

  return item as T;
}

export function getAllEntities<T extends Content>(
  dataDir: string,
  fields: string[] = [],
  bindFields: { [index: string]: (slug: string) => any } = {},
  filter: (entity: T) => boolean = () => true
): T[] {
  return (
    getEntitiesSlugs(dataDir)
      .map(
        (slug: string) =>
          getEntityBySlug<T>(dataDir, slug, fields, bindFields) as T
      )
      // sort blog by date in descending order
      .filter(filter)
      .sort((post1: T, post2: T) =>
        (post1?.date ?? 0) > (post2?.date ?? 0) ? -1 : 1
      )
  );
}
