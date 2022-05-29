import type { GetStaticProps } from 'next';
import { Anchor, Box } from '@mantine/core';
import { TableOfContent } from '@/components';
import { getAllDocs } from '@/utils';
import { Doc } from '@/types';

export const getStaticProps: GetStaticProps = (ctx) => {
  const docs = getAllDocs();

  return { props: { docs } };
};

interface HomeProps {
  docs: Doc[];
}

const Home = ({ docs }: HomeProps) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
      <TableOfContent active="" />

      <Box>
        {docs.map((doc, i) => (
          <Anchor key={i} href={`/docs/${doc.name}`}>
            {doc.title}
          </Anchor>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
