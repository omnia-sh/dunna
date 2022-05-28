import { GetStaticProps } from 'next';
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
    <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 10fr' }}>
      <TableOfContent
        links={[
          { label: 'Basic', link: '/docs/basic', order: 1 },
          { label: 'Boolean', link: '/docs/basic#boolean', order: 2 },
          { label: 'Integer', link: '/docs/basic#integer', order: 2 },
          { label: 'Float', link: '/docs/basic#float', order: 2 },
          { label: 'Letter', link: '/docs/basic#letter', order: 2 },
          { label: 'Choice', link: '/docs/basic#choice', order: 2 },

          { label: 'Location', link: '/docs/location', order: 1 },
          {
            label: 'country',
            link: '/docs/location#country',
            order: 2,
          },
          {
            label: 'countryName',
            link: '/docs/location#countryName',
            order: 2,
          },
          {
            label: 'countryCode',
            link: '/docs/location#countryCode',
            order: 2,
          },
          { label: 'city', link: '/docs/location#city', order: 2 },
          { label: 'cityName', link: '/docs/location#cityName', order: 2 },
          { label: 'cityCode', link: '/docs/location#cityCode', order: 2 },
          { label: 'lng', link: '/docs/location#lng', order: 2 },
          { label: 'lat', link: '/docs/location#lat', order: 2 },

          { label: 'Person', link: '/docs/person', order: 1 },
          {
            label: 'fullName',
            link: '/docs/person#fullName',
            order: 2,
          },
          {
            label: 'firstName',
            link: '/docs/person#firstName',
            order: 2,
          },
          {
            label: 'lastName',
            link: '/docs/person#lastName',
            order: 2,
          },
          { label: 'email', link: '/docs/person#email', order: 2 },
          {
            label: 'gender',
            link: '/docs/person#gender',
            order: 2,
          },
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
