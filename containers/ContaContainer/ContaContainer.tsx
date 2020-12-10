import { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { Input, Button, useToast, useAuth } from '../../components';
import { Container, Form, FormTitle } from './styled';
import useMutate from '../../hooks/useMutate';

type Conta = {
  id?: number;
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
  const { logOut } = useAuth();
  const showToast = useToast();
  const { push } = useRouter();
  const [form, setForm] = useState<Conta>(conta);
  const isEditing = !!conta.id;

  const handleFormChange = ({ value, name }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [mutateUsuario, { loading }] = useMutate({
    method: isEditing ? 'put' : 'post',
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
    mutateUsuario({
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
              placeholder="Digite seu email"
              onChange={handleFormChange}
              required={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Nome"
              name="nome"
              defaultValue={form.nome}
              placeholder="Digite seu nome"
              autoComplete="cc-name"
              onChange={handleFormChange}
              required={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              name="sobrenome"
              defaultValue={form.sobrenome}
              onChange={handleFormChange}
              required={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label={isEditing ? 'Nova senha' : 'Senha'}
              placeholder="Digite sua senha"
              name="senha"
              type="password"
              defaultValue={form.senha}
              onChange={handleFormChange}
              required={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="CPF"
              name="cpf"
              defaultValue={form.cpf}
              placeholder="Digite seu cpf"
              mask="###-###-###-##"
              onChange={handleFormChange}
              required={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Telefone"
              name="telefone"
              type="tel"
              defaultValue={form.telefone}
              placeholder="Digite seu telefone"
              mask="(##) #####-####"
              onChange={handleFormChange}
              required={!isEditing}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button type="submit" color="primary" loading={loading}>
              {isEditing ? 'Atualizar dados' : 'Cadastrar'}
            </Button>
            {isEditing && (
              <Button
                type="button"
                onClick={() => logOut()}
                color="primary"
                loading={loading}
              >
                Sair
              </Button>
            )}
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
