import type { GetStaticPaths, GetStaticProps } from 'next';
import { Module } from '@/types';
import { getModuleFromSlug, getNames, getSlugFromName } from '@/utils/helpers';

export const getStaticPaths: GetStaticPaths = (ctx) => {
  return {
    paths: getNames().map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const name = ctx.params?.name as string;
  const slug = getSlugFromName(name);

  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = getModuleFromSlug(slug);

  return { props: { module } };
};

interface ModuleProps {
  module: Module;
}

const Module = ({ module }: ModuleProps) => {
  return (
    <div>
      <h1>{module.title}</h1>
    </div>
  );
};

export default Module;
