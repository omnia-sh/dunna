import { GetStaticProps } from 'next';
import { Anchor, Box, Container } from '@mantine/core';
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
    <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 10fr' }}>
      <TableOfContent
        links={[
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello1', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
          { label: 'Hello', link: '/hello', order: 1 },
        ]}
        active="/hello1"
      />

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
