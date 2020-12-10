import { useState } from 'react';

import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';

import { Button, useToast } from '../../components';
import FormName from './FormName';
import FormEventoDetail, { EventoDetail } from './FormEventoDetail';
import FormEndereco, { Endereco } from './FormEndereco';
import FormTime, { DataEvento } from './FormTime';

import { Container, Form, FormTitle, FormContent } from './styled';
import useMutate from '../../hooks/useMutate';

type FormEvento = {
  nome?: string;
  detail?: EventoDetail;
  endereco?: Endereco;
  dataEvento?: DataEvento;
};

const FormEvento = ({ evento }) => {
  const showToast = useToast();
  const { push } = useRouter();
  const [form, setForm] = useState<FormEvento>(evento);
  const isEditing = !!evento.id;

  const [insertEvento, { loading }] = useMutate({
    method: isEditing ? `put` : 'post',
    path: isEditing ? `/evento/${evento.id}` : '/evento',
    onCompleted: () => {
      showToast(
        isEditing
          ? 'Evento atualizado com sucesso'
          : 'Evento criado com sucesso',
        { type: 'success' }
      );
      push('/eventos');
    },
  });

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      dataEvento = {},
      endereco = {},
      detail: { categoria, ...restDetail } = {},
      nome,
    } = form;
    const { dataHoraFim, dataHoraInicio } = dataEvento;
    const input = {
      ...restDetail,
      dataEvento: {
        dataHoraFim: dayjs(dataHoraFim).format('DD/MM/YYYY HH:mm'),
        dataHoraInicio: dayjs(dataHoraInicio).format('DD/MM/YYYY HH:mm'),
      },
      endereco,
      categoria: categoria.value,
      nome,
    };
    insertEvento(input);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>1. Qual é nome do evento?</FormTitle>
          </Grid>
          <FormName value={form.nome} onChange={handleFormChange} />
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
        <Button type="submit" color="primary" loading={loading}>
          {isEditing ? 'Editar evento' : 'Publicar evento'}
        </Button>
      </Form>
    </Container>
  );
};

FormEvento.defaultProps = {
  evento: {
    nome: '',
    detail: {},
    endereco: {},
    dataEvento: {},
  },
};

export default FormEvento;
