import { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

type FormTimeProps = {
  onChange: (target: { name: string; value: string | number }) => void;
};

const FormPagamento: React.FC<FormTimeProps> = memo(({ onChange }) => {
  return (
    <>
      <Grid item lg={6} md={9} sm={8} xs={12}>
        <Input
          label="Número do cartão"
          name="numeroCartao"
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item lg={3} md={3} sm={4} xs={12}>
        <Input
          label="Data expiração"
          name="dataExpiracao"
          type="date"
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item lg={3} md={4} sm={5} xs={12}>
        <Input
          label="Código de segurança"
          name="codigoSeguranca"
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item lg={9} md={8} sm={7} xs={12}>
        <Input
          label="Nome (impresso no cartão)"
          name="nomeCartao"
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item lg={6} md={9} sm={8} xs={12}>
        <Input label="CPF" name="cpf" onChange={onChange} required />
      </Grid>
      <Grid item lg={3} md={3} sm={4} xs={12}>
        <Input
          label="Data nascimento"
          name="dataNascimento"
          type="date"
          onChange={onChange}
          required
        />
      </Grid>
    </>
  );
});

export default FormPagamento;
