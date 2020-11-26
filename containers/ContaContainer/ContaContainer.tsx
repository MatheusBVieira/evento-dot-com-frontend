import { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { Input, Button, useToast } from '../../components';
import { Container, Form, FormTitle } from './styled';
import useMutate from '../../hooks/useMutate';

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
  isEditing?: boolean;
};

const ContaContainer: React.FC<ContaContainerProps> = ({
  conta,
  isEditing,
}) => {
  const showToast = useToast();
  const { push } = useRouter();
  const [form, setForm] = useState<Conta>(conta);

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [createUsuario, { loading }] = useMutate({
    method: 'post',
    path: '/usuario',
    onCompleted: ({ id } = {}) => {
      if (id) {
        showToast(isEditing ? 'Dados atualizados' : 'Conta criada', {
          type: 'success',
        });
        push('/conta');
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { telefone, cpf } = form;
    createUsuario({
      ...form,
      telefone: String(telefone),
      cpf: String(cpf),
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <FormTitle>{isEditing ? 'Sua conta' : 'Criar conta'}</FormTitle>

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
          <Grid item xs={12} style={{ display: 'flex' }} justify="center">
            <Button type="submit" variant="primary" loading={loading}>
              {isEditing ? 'Atualizar dados' : 'Cadastrar'}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

ContaContainer.defaultProps = {
  conta: {},
};

export default ContaContainer;
