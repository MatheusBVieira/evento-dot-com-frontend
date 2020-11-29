import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn, useAuth, useToast } from '../../components';

import PageContainer from '../../containers/PageContainer';
import FormEvento from '../../containers/FormEventoContainer';

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
        <title>Evento.com - Criar evento</title>
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
