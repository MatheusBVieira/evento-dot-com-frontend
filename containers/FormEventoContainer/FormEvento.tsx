import { useState } from 'react';

import { Grid } from '@material-ui/core';
import { Button } from '../../components';

import FormName, { EventoName } from './FormName';
import FormEventoDetail, { EventoDetail } from './FormEventoDetail';
import FormEndereco, { Endereco } from './FormEndereco';
import FormTime, { Time } from './FormTime';

import { Container, Form, FormTitle, FormContent } from './styled';
import useMutate from '../../hooks/useMutate';

type FormEvento = {
  eventoName?: EventoName;
  detail?: EventoDetail;
  endereco?: Endereco;
  time?: Time;
};

const FormEvento = () => {
  const [form, setForm] = useState<FormEvento>({});

  const [insertEvento, { loading }] = useMutate({
    method: 'post',
    path: '/evento',
  });

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>1. Qual é nome do evento?</FormTitle>
          </Grid>
          <FormName value={form.eventoName} onChange={handleFormChange} />
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
          <FormTime value={form.time} onChange={handleFormChange} />
        </FormContent>
        <Button variant="secondary">Publicar evento</Button>
      </Form>
    </Container>
  );
};

export default FormEvento;
