import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FadeIn, useAuth, useToast, Loader } from '../../components';

import PageContainer from '../../containers/PageContainer';
import FormEvento from '../../containers/FormEventoContainer';
import useFetch from '../../hooks/useFetch';

const CriarEvento = () => {
  const { token } = useAuth();
  const showToast = useToast();
  const { push, query } = useRouter();
  const { id } = query;

  useEffect(() => {
    if (!token) {
      showToast('Você precisa estar logado para organizar um evento', {
        type: 'info',
      });
      push('/conta');
    }
  }, [token]);

  const {
    loading,
    data: {
      nome,
      preco,
      descricao,
      capacidadePessoas,
      dataEvento = {},
      endereco = {},
      categoria = {},
    } = {},
  } = useFetch({
    method: 'get',
    path: `/evento/${id}`,
    skip: !id,
  });

  if (loading) {
    return <Loader />;
  }

  const evento = {
    id,
    nome,
    dataEvento,
    endereco: { ...endereco, id: undefined },
    detail: {
      preco: preco?.toFixed(2),
      capacidadePessoas,
      descricao,
      categoria: {
        value: categoria.id,
        label: categoria.descricao,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Evento.com - Editar evento</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <FormEvento evento={evento} />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default CriarEvento;
