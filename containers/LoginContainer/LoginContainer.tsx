import { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { Input, Button, useAuth, useToast } from '../../components';
import { Container, Form, FormTitle } from './styled';
import useMutate from '../../hooks/useMutate';

const LoginContainer = () => {
  const { setAuth } = useAuth();
  const { back, push } = useRouter();
  const showToast = useToast();
  const [form, setForm] = useState({});

  const [loginPost, { loading }] = useMutate({
    method: 'post',
    path: '/auth',
    onCompleted: ({ token }) => {
      setAuth(token);
      showToast('Logado com sucesso', { type: 'success' });
      back();
    },
  });

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginPost(form);
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
              placeholder="email@mail.com"
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
            <Button loading={loading} type={'submit'} variant="primary">
              Entrar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="button"
              variant="secondary"
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
