import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input, Select, Textarea } from '../../components';
import { Container, FormTitle, FormContent } from './styled';
import useMutate from '../../hooks/useMutate';

const FormEvento = () => {
  const [form, setForm] = useState({});

  const [insertEvento, { loading }] = useMutate({
    method: 'post',
    path: '/evento',
  });

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertEvento(form);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>1. Qual é nome do evento?</FormTitle>
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Nome do evento"
              name="nome_evento"
              placeholder="Escreva o nome do evento"
              onChange={handleFormChange}
              required
            />
          </Grid>
        </FormContent>

        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>2. Como vai ser seu evento?</FormTitle>
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Valor por ingresso"
              name="valor_ingresso"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Capacidade maxíma local"
              name="capacidade_max"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input label="Ingressos" disabled required />
          </Grid>
          <Grid item xs={12}>
            <Select
              label="Categoria"
              name="categoria"
              options={[
                { label: 'Categoria', value: 1 },
                { label: 'Categoria2', value: 2 },
                { label: 'Categoria3', value: 3 },
                { label: 'Categoria4', value: 4 },
              ]}
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Textarea
              label="Descrição"
              name="descricao"
              onChange={handleFormChange}
              required
            />
          </Grid>
        </FormContent>

        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>3. Onde o evento vai acontecer?</FormTitle>
          </Grid>
          <Grid item xs={2}>
            <Input
              label="CEP"
              name="cep"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={10}>
            <Input
              label="Nome do local"
              name="nome_local"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Rua"
              name="rua"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Número"
              name="numero"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Complemento"
              name="complemento"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Bairro"
              name="bairro"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Cidade"
              name="cidade"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Estado"
              name="estado"
              onChange={handleFormChange}
              required
            />
          </Grid>
        </FormContent>

        <FormContent container spacing={4}>
          <Grid item xs={12}>
            <FormTitle>4. Quando vai acontecer?</FormTitle>
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Data de início"
              name="data_inicio"
              type="date"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Hora de início"
              name="hora_inicio"
              type="time"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Data de fim"
              name="data_fim"
              type="date"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              label="Hora de fim"
              name="hora_fim"
              type="time"
              onChange={handleFormChange}
              required
            />
          </Grid>
        </FormContent>
      </form>
    </Container>
  );
};

export default FormEvento;
