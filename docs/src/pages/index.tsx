import { GetStaticProps } from 'next';
import { getAllDocs } from '@/utils';
import { Doc } from '@/types';
import { Anchor, Container, Title } from '@mantine/core';

export const getStaticProps: GetStaticProps = (ctx) => {
  const docs = getAllDocs();

  return { props: { docs } };
};

interface HomeProps {
  docs: Doc[];
}

const Home = ({ docs }: HomeProps) => {
  return (
    <Container>
      {docs.map((doc, i) => (
        <Anchor key={i} href={`/docs/${doc.name}`}>
          {doc.title}
        </Anchor>
      ))}
    </Container>
  );
};

export default Home;
