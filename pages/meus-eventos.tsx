import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn, useAuth } from '../components';
import PageContainer from '../containers/PageContainer';
import EventosListContainer from '../containers/EventosListContainer';

const MeusEventos = () => {
  const { token } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!token) {
      push('/conta');
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>Evento.com - Meus eventos</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <EventosListContainer />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default MeusEventos;
