import { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

const FormParticipante = memo(() => {
  return (
    <>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Nome" disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Sobrenome" disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="E-mail" disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Telefone" disabled />
      </Grid>
    </>
  );
});

export default FormParticipante;
