import Head from 'next/head';

import { FadeIn } from '../components';
import MainContainer from '../containers/MainContainer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Evento.com</title>
      </Head>

      <MainContainer />
    </>
  );
};

export default Home;
