import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { Doc } from '@/types';

const DOCS_PATH = path.join(process.cwd(), '/src/docs');

export function getSlugs() {
  const slugs = glob.sync(`${DOCS_PATH}/*.md`);

  return slugs;
}

export function getNameFromSlug(slug: string): string {
  const name = slug.split('/').at(-1)?.split('.')[0] as string;

  return name;
}

export function getSlugFromName(name: string): string {
  const slug = path.join(DOCS_PATH, `${name}.md`);

  return slug;
}

export function getDocFromSlug(slug: string): Doc {
  const fileBuffer = fs.readFileSync(slug);

  const { content, data } = matter(fileBuffer);
  const name = getNameFromSlug(slug);

  return {
    name,
    title: data.title,
    source: content,
  };
}

export function getAllDocs(): Doc[] {
  const docs = getSlugs().map(getDocFromSlug);

  return docs;
}
