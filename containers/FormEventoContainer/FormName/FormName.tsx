import { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

type FormNameProps = {
  value: string;
  onChange: (data: any) => void;
};

const FormName: React.FC<FormNameProps> = memo(({ value, onChange }) => {
  return (
    <>
      <Grid item xs={12}>
        <Input
          label="Nome do evento"
          name="nome"
          placeholder="Escreva o nome do evento"
          defaultValue={value}
          onChange={onChange}
          required
        />
      </Grid>
    </>
  );
});

export default FormName;
