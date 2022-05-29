import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Anchor, Box, Text, Title } from '@mantine/core';
import { Prism } from '@mantine/prism';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import {
  getDocFromSlug,
  getNameFromSlug,
  getSlugFromName,
  getSlugs,
} from '@/utils';
import type { Doc } from '@/types';
import { TableOfContent } from '@/components';
import { useRouter } from 'next/router';

export const getStaticPaths: GetStaticPaths = (ctx) => {
  return {
    paths: getSlugs().map((slug) => ({
      params: { name: getNameFromSlug(slug) },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const name = ctx.params?.name as string;
  const slug = getSlugFromName(name);
  const doc = getDocFromSlug(slug);

  return { props: { doc } };
};

interface DocPageProps {
  doc: Doc;
}

const DocPage = ({ doc }: DocPageProps) => {
  const { asPath } = useRouter();

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
      <TableOfContent active={asPath} />

      <Box>
        <Title>{doc.title}</Title>

        <ReactMarkdown
          rehypePlugins={[
            rehypeSlug,
            [rehypeAutolinkHeadings, { behaviour: 'wrap' }],
          ]}
          components={{
            h1({ children }) {
              return <Title>{children}</Title>;
            },

            a({ children, href }) {
              return (
                <Link passHref href={href as string}>
                  <Anchor sx={{ fontSize: 'inherit' }}>{children}</Anchor>
                </Link>
              );
            },

            p({ children }) {
              return <Text>{children}</Text>;
            },

            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');

              return !inline && match ? (
                <Prism language={match[1] as any}>
                  {String(children).replace(/\n$/, '')}
                </Prism>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {doc.source}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default DocPage;
