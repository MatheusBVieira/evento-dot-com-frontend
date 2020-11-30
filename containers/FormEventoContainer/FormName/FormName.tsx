import { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Input, InputImage } from '../../../components';

type FormNameProps = {
  value: {
    nome: string;
    imagem: string;
  };
  onChange: (data: any) => void;
};

const FormName: React.FC<FormNameProps> = memo(({ value, onChange }) => {
  console.log(value);
  return (
    <>
      <Grid item xs={12}>
        <Input
          label="Nome do evento"
          name="nome"
          placeholder="Escreva o nome do evento"
          defaultValue={value.nome}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <InputImage
          label="Imagem do evento"
          name="imagem"
          onChange={onChange}
          required
        />
      </Grid>
    </>
  );
});

export default FormName;
