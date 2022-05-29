import type { NextPage } from 'next';
import { Shell } from '@/components';

interface HomeProps {}

const Home: NextPage<HomeProps> = (props) => {
  return <Shell>Welcome here</Shell>;
};

export default Home;
