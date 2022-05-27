import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { Module } from '@/types';

const MODULES_PATH = path.join(process.cwd(), 'src/modules');

export function getSlugs() {
  const slugs = glob.sync(`${MODULES_PATH}/*.mdx`);

  return slugs;
}

export function getNameFromSlug(slug: string): string {
  const name = slug.split('/').at(-1)?.split('.')[0] as string;

  return name;
}

export function getSlugFromName(name: string): string {
  const slug = path.join(MODULES_PATH, `${name}.mdx`);

  return slug;
}

export function getNames(): string[] {
  const names = getSlugs().map(getNameFromSlug);

  return names;
}

export function getModuleFromSlug(slug: string): Module {
  const source = fs.readFileSync(slug);
  const name = getNameFromSlug(slug);

  const { content, data } = matter(source);

  return {
    name,
    title: data.title,
    content,
  };
}

export function getAllModules(): Module[] {
  const slugs = getSlugs();

  const modules = slugs.map(getModuleFromSlug);

  return modules;
}
