import Head from 'next/head';

import { FadeIn } from '../components';
import MainContainer from '../containers/MainContainer';

const Home = () => (
  <>
    <Head>
      <title>Evento.com</title>
    </Head>

    <FadeIn orientation="down-to-up">
      <MainContainer />
    </FadeIn>
  </>
);

export default Home;
