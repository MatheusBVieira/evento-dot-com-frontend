import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../components';
import { Container, Form, FormTitle, SubmitButton } from './styled';

type Conta = {
  email?: string;
  nome?: string;
  sobrenome?: string;
  cpf?: string;
  telefone?: string;
  senha?: any;
};

type ContaContainerProps = {
  conta?: Conta;
};

const ContaContainer: React.FC<ContaContainerProps> = ({ conta }) => {
  const [form, setForm] = useState<Conta>(conta);

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <FormTitle>Criar conta</FormTitle>

          <Grid item xs={12}>
            <Input
              label="E-mail"
              defaultValue={form.email}
              name="email"
              type="email"
              placeholder="email@mail.com"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Nome"
              name="nome"
              defaultValue={form.nome}
              placeholder="Nome..."
              autoComplete="cc-name"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Sobrenome"
              placeholder="Sobrenome..."
              name="sobrenome"
              defaultValue={form.sobrenome}
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Senha"
              placeholder="************"
              name="senha"
              type="password"
              defaultValue={form.senha}
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="CPF"
              name="cpf"
              defaultValue={form.cpf}
              placeholder="000-000-000-00"
              mask="###-###-###-##"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Telefone"
              name="telefone"
              type="tel"
              defaultValue={form.telefone}
              placeholder="(00) 00000-0000"
              mask="(##) #####-####"
              onChange={handleFormChange}
              required
            />
          </Grid>
          <SubmitButton type="submit" variant="contained" color="secondary">
            Cadastrar
          </SubmitButton>
        </Grid>
      </Form>
    </Container>
  );
};

ContaContainer.defaultProps = {
  conta: {},
};

export default ContaContainer;
