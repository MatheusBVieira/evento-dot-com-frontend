import Head from 'next/head';

import { FadeIn } from '../components';
import SearchEvento from '../containers/SearchEvento';

const Eventos = () => {
  return (
    <>
      <Head>
        <title>Evento.com - Eventos</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <SearchEvento />
      </FadeIn>
    </>
  );
};

export default Eventos;
