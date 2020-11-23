import Head from 'next/head';

import { FadeIn } from '../components';
import PageContainer from '../containers/PageContainer';

const Conta = () => {
  return (
    <>
      <Head>
        <title>Evento.com - Minha conta</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>conta</PageContainer>
      </FadeIn>
    </>
  );
};

export default Conta;
