import Head from 'next/head';

import { FadeIn } from '../components';
import MainContainer from '../containers/MainContainer';
import PageContainer from '../containers/PageContainer';

const Home = () => (
  <>
    <Head>
      <title>Evento.com</title>
    </Head>

    <FadeIn orientation="down-to-up">
      <PageContainer>
        <MainContainer />
      </PageContainer>
    </FadeIn>
  </>
);

export default Home;
