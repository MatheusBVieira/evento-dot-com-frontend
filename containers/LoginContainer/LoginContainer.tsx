import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input, Button } from '../../components';
import { Container, Form, FormTitle } from './styled';
import useMutate from '../../hooks/useMutate';

const LoginContainer = () => {
  const [form, setForm] = useState({});

  const [loginPost, { loading }] = useMutate({
    method: 'post',
    path: '/auth',
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
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
          <Button
            loading={loading}
            buttonProps={{ type: 'submit' }}
            variant="primary"
          >
            Entrar
          </Button>
        </Grid>
      </Form>
    </Container>
  );
};

export default LoginContainer;
