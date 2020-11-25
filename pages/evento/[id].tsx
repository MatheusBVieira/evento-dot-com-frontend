import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn } from '../../components';
import PageContainer from '../../containers/PageContainer';
import EventoContainer from '../../containers/EventoContainer';

const Evento = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <Head>
        <title>Evento.com - Detalhe do evento</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <EventoContainer id={id} />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default Evento;
