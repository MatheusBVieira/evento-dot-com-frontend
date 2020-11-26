import Head from 'next/head';

import { FadeIn } from '../components';
import PageContainer from '../containers/PageContainer';
import LoginContainer from '../containers/LoginContainer';
import ContaContainer from '../containers/ContaContainer';
import { useAuth } from '../components';

const Conta = () => {
  const { token } = useAuth();
  return (
    <>
      <Head>
        <title>Evento.com - Minha conta</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          {token ? <ContaContainer isEditing /> : <LoginContainer />}
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default Conta;
