import { Doc } from '@/types';
import {
  getDocFromSlug,
  getNameFromSlug,
  getSlugFromName,
  getSlugs,
} from '@/utils';
import { Container, Title } from '@mantine/core';
import { GetStaticPaths, GetStaticProps } from 'next';

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
  return (
    <Container>
      <Title>{doc.title}</Title>
    </Container>
  );
};

export default DocPage;
