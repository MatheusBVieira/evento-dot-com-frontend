import { memo } from 'react';

import { Grid } from '@material-ui/core';
import { Input, Loader } from '../../../components';
import useFetch from '../../../hooks/useFetch';

const FormParticipante = memo(() => {
  const { data = {}, loading } = useFetch({ method: 'get', path: '/usuario' });

  return loading ? (
    <Loader />
  ) : (
    <>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Nome" defaultValue={data.nome} disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Sobrenome" defaultValue={data.sobrenome} disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="E-mail" defaultValue={data.email} disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input
          label="Telefone"
          defaultValue={data.telefone}
          mask="(##) #####-####"
          disabled
        />
      </Grid>
    </>
  );
});

export default FormParticipante;
