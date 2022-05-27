import type { GetStaticPaths, GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import { Module } from '@/types';
import { getModuleFromSlug, getNames, getSlugFromName } from '@/utils/helpers';
import 'highlight.js/styles/atom-one-dark.css';

export const getStaticPaths: GetStaticPaths = (ctx) => {
  return {
    paths: getNames().map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const name = ctx.params?.name as string;
  const slug = getSlugFromName(name);

  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = getModuleFromSlug(slug);
  const content = await serialize(module.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      module: {
        ...module,
        content,
      },
    },
  };
};

interface ModuleProps {
  module: Module & {
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
}

const Module = ({ module }: ModuleProps) => {
  return (
    <div>
      <h1>{module.title}</h1>

      <MDXRemote {...module.content} />
    </div>
  );
};

export default Module;
