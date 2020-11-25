import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn } from '../../components';
import PageContainer from '../../containers/PageContainer';
import CompraContainer from '../../containers/CompraContainer';

const Compra = () => {
  const { query } = useRouter();
  const { id } = query;

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
