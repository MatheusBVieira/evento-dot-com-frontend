import Head from 'next/head';

import { FadeIn } from '../components';
import FormEvento from '../containers/FormEvento';
import PageContainer from '../containers/PageContainer';

const CriarEvento = () => {
  return (
    <>
      <Head>
        <title>Evento.com - Cadastro eventos</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <FormEvento />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default CriarEvento;
