import Head from 'next/head';

import { FadeIn, useAuth } from '../components';
import PageContainer from '../containers/PageContainer';
import ContaContainer from '../containers/ContaContainer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CriarConta = () => {
  const { token } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (token) {
      push('/conta');
    }
  }, [token]);

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
