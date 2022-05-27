import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { Module } from '@/types';

const MODULES_PATH = path.join(process.cwd(), 'src/modules');

export function getModuleSlugs() {
  const slugs = glob.sync(`${MODULES_PATH}/*.mdx`);

  return slugs;
}

function getModuleFromSlug(slug: string): Module {
  const source = fs.readFileSync(slug);
  const name = slug.split('/').at(-1)?.split('.')[0] as string;

  const { content, data } = matter(source);

  return {
    content,
    name,
    title: data.title,
  };
}

export function getAllModules(): Module[] {
  const slugs = getModuleSlugs();

  const modules = slugs.map(getModuleFromSlug);

  return modules;
}
