import { useState } from 'react';

import { Grid } from '@material-ui/core';
import { Button } from '../../components';

import FormName from './FormName';
import FormEventoDetail, { EventoDetail } from './FormEventoDetail';
import FormEndereco, { Endereco } from './FormEndereco';
import FormTime, { DataEvento } from './FormTime';

import { Container, Form, FormTitle, FormContent } from './styled';
import useMutate from '../../hooks/useMutate';

type FormEvento = {
  name?: string;
  detail?: EventoDetail;
  endereco?: Endereco;
  dataEvento?: DataEvento;
};

const FormEvento = ({ evento }) => {
  const [form, setForm] = useState<FormEvento>(evento);

  const [insertEvento, { loading }] = useMutate({
    method: 'post',
    path: '/evento',
    onCompleted: console.log,
  });

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dataEvento, endereco, detail, ...rest } = form;
    const input = { dataEvento, endereco, ...detail, ...rest };
    insertEvento(input);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>1. Qual é nome do evento?</FormTitle>
          </Grid>
          <FormName value={form.name} onChange={handleFormChange} />
        </FormContent>

        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>2. Como vai ser seu evento?</FormTitle>
          </Grid>
          <FormEventoDetail value={form.detail} onChange={handleFormChange} />
        </FormContent>

        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>3. Onde o evento vai acontecer?</FormTitle>
          </Grid>
          <FormEndereco value={form.endereco} onChange={handleFormChange} />
        </FormContent>

        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>4. Quando vai acontecer?</FormTitle>
          </Grid>
          <FormTime value={form.dataEvento} onChange={handleFormChange} />
        </FormContent>
        <Button type="submit" variant="secondary" loading={loading}>
          Publicar evento
        </Button>
      </Form>
    </Container>
  );
};

FormEvento.defaultProps = {
  evento: {
    name: '',
    detail: {},
    endereco: {},
    dataEvento: {},
  },
};

export default FormEvento;
