import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn, useAuth, useToast } from '../../components';
import PageContainer from '../../containers/PageContainer';
import CompraContainer from '../../containers/CompraContainer';

const Compra = () => {
  const { query, push } = useRouter();
  const { id } = query;
  const { token } = useAuth();
  const showToast = useToast();

  useEffect(() => {
    if (!token) {
      showToast('Você precisa estar logado para comprar um evento', {
        type: 'info',
      });
      push('/conta');
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>Evento.com - Compra ingresso</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <CompraContainer id={id} />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default Compra;
