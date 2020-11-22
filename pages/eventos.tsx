import Head from 'next/head';

import { FadeIn } from '../components';
import ListEventos from '../containers/ListEventos';

const Eventos = () => {
  return (
    <>
      <Head>
        <title>Evento.com - Eventos</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <ListEventos />
      </FadeIn>
    </>
  );
};

export default Eventos;
