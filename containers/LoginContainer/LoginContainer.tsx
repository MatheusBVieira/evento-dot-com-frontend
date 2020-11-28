import { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { Input, Button, useAuth, useToast } from '../../components';
import { Container, Form, FormTitle } from './styled';

const LoginContainer = () => {
  const { logIn } = useAuth();
  const { push } = useRouter();
  const showToast = useToast();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    logIn(form, (login) => {
      setLoading(false);
      login && showToast('Logado com sucesso', { type: 'success' });
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={4} justify="center" alignItems="center">
          <FormTitle>Acessar conta</FormTitle>

          <Grid item xs={12}>
            <Input
              label="E-mail"
              name="email"
              type="email"
              placeholder="Digite o email"
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
              onChange={handleFormChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Button loading={loading} type="submit" color="primary">
              Entrar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="button"
              color="secondary"
              onClick={() => push('/criar-conta')}
            >
              Não tem conta? Cadastre-se
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default LoginContainer;
