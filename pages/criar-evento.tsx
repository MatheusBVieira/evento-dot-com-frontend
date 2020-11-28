import Head from 'next/head';

import { FadeIn, useAuth, useToast } from '../components';

import PageContainer from '../containers/PageContainer';
import FormEvento from '../containers/FormEventoContainer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CriarEvento = () => {
  const { token } = useAuth();
  const showToast = useToast();
  const { push } = useRouter();

  useEffect(() => {
    if (!token) {
      showToast('Você precisa estar logado para organizar um evento', {
        type: 'info',
      });
      push('/conta');
    }
  }, [token]);

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
