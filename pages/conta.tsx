import Head from 'next/head';

import { FadeIn } from '../components';
import PageContainer from '../containers/PageContainer';
import LoginContainer from '../containers/LoginContainer';
import ContaContainer from '../containers/ContaContainer';
import { useAuth, Loader } from '../components';
import useFetch from '../hooks/useFetch';

const Conta = () => {
  const { token } = useAuth();
  const { data, loading } = useFetch({
    method: 'get',
    path: '/usuario',
    skip: !token,
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Evento.com - Minha conta</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          {token ? <ContaContainer conta={data} /> : <LoginContainer />}
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default Conta;
