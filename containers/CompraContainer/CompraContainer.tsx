import { useState } from 'react';
import { Grid } from '@material-ui/core';

import CardCompra from './CardCompra';
import FormParticipante from './FormParticipante';
import FormPagamento from './FormPagamento';

import { Container, Form, FormContent, FormTitle } from './styled';
import useFetch from '../../hooks/useFetch';

const CompraContainer = ({ id }) => {
  const [pagamento, setPagamento] = useState({});
  const { data = {} } = useFetch({
    method: 'get',
    path: `/evento/${id}`,
    skip: !id,
  });

  const handleFormChange = (event) => {
    const { value, name } = event.target;
    setPagamento((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Form>
        <Grid container spacing={4} justify="space-between">
          <Grid item md={5} sm={6} xs={12}>
            <FormContent>
              <CardCompra {...data} />
            </FormContent>
          </Grid>

          <Grid item md={7} sm={6} xs={12}>
            <FormContent>
              <Grid container spacing={4}>
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
        </Grid>
      </Form>
    </Container>
  );
};

export default CompraContainer;
