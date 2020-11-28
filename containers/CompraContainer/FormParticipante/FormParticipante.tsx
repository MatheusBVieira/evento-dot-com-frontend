import { memo } from 'react';

import { Grid } from '@material-ui/core';
import { Input } from '../../../components';
import useFetch from '../../../hooks/useFetch';

const FormParticipante = memo(() => {
  const { data = {} } = useFetch({ method: 'get', path: '/usuario' });

  return (
    <>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Nome" value={data.nome} disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="Sobrenome" value={data.sobrenome} disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input label="E-mail" value={data.email} disabled />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Input
          label="Telefone"
          value={data.telefone}
          mask="(##) #####-####"
          disabled
        />
      </Grid>
    </>
  );
});

export default FormParticipante;
