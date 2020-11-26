import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

export type Endereco = {
  nomeLocal?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
};

type FormEnderecoProps = {
  value: Endereco;
  onChange: ({ value: Endereco, name: string }) => void;
};

const FormEndereco: React.FC<FormEnderecoProps> = memo(
  ({ value, onChange }) => {
    const [endereco, setEndereco] = useState<Endereco>(value);

    const handleFormChange = ({ value, name }) => {
      setEndereco((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
      if (endereco) {
        onChange({ value: endereco, name: 'endereco' });
      }
    }, [endereco]);

    return (
      <>
        <Grid item lg={2} md={4} sm={4} xs={12}>
          <Input
            label="CEP"
            name="cep"
            mask="#####-###"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={10} md={8} sm={8} xs={12}>
          <Input
            label="Nome do local"
            name="nomeLocal"
            onChange={handleFormChange}
            required
          />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Input label="Rua" name="rua" onChange={handleFormChange} required />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Input
            label="Número"
            name="numero"
            type="number"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Input
            label="Complemento"
            name="complemento"
            onChange={handleFormChange}
            required
          />
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Input
            label="Bairro"
            name="bairro"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Input
            label="Cidade"
            name="cidade"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Input
            label="Estado"
            name="estado"
            onChange={handleFormChange}
            required
          />
        </Grid>
      </>
    );
  }
);

export default FormEndereco;
