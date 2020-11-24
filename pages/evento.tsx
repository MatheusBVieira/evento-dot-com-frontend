import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn } from '../components';

import PageContainer from '../containers/PageContainer';

const Evento = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <Head>
        <title>Evento.com</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>{id}</PageContainer>
      </FadeIn>
    </>
  );
};

export default Evento;
