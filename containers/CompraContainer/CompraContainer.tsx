import { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';

import { Button, useToast } from '../../components';
import CardCompra from './CardCompra';
import FormParticipante from './FormParticipante';
import FormPagamento from './FormPagamento';

import { Container, Form, FormContent, FormTitle } from './styled';
import useFetch from '../../hooks/useFetch';
import useMutate from '../../hooks/useMutate';

const CompraContainer = ({ id }) => {
  const showToast = useToast();
  const { push } = useRouter();
  const [pagamento, setPagamento] = useState({});

  const { data = {} } = useFetch({
    method: 'get',
    path: `/evento/${id}`,
    skip: !id,
  });

  const [comprarEvento, { loading }] = useMutate({
    method: 'post',
    path: '/compra',
    onCompleted: () => {
      showToast('Evento comprado com sucesso', { type: 'success' });
      push('/');
    },
  });

  const handleFormChange = ({ value, name }) => {
    setPagamento((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pagamento);
    comprarEvento({ idEvento: id });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={4} justify="space-between">
          <Grid item md={5} sm={6} xs={12}>
            <FormContent>
              <CardCompra {...data} />
            </FormContent>
          </Grid>

          <Grid item md={7} sm={6} xs={12}>
            <FormContent>
              <Grid container spacing={4} justify="center">
                <Grid item xs={12}>
                  <FormTitle>Informações do participante</FormTitle>
                </Grid>
                <FormParticipante />
              </Grid>
            </FormContent>
          </Grid>
          <Grid item xs={12}>
            <FormContent>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FormTitle>Informação de pagamento</FormTitle>
                </Grid>
                <FormPagamento onChange={handleFormChange} />
              </Grid>
            </FormContent>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type="submit" color="primary" loading={loading}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default CompraContainer;
