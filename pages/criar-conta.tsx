import Head from 'next/head';

import { FadeIn } from '../components';
import PageContainer from '../containers/PageContainer';
import ContaContainer from '../containers/ContaContainer';

const CriarConta = () => {
  return (
    <>
      <Head>
        <title>Evento.com - Minha conta</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <ContaContainer />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default CriarConta;
