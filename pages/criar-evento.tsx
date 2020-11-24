import Head from 'next/head';

import { FadeIn } from '../components';

import PageContainer from '../containers/PageContainer';
import FormEvento from '../containers/FormEventoContainer';

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
