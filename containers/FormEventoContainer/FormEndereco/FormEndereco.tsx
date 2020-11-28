import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

export type Endereco = {
  cep?: string;
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
            placeholder="Digite o cep"
            mask="#####-###"
            defaultValue={endereco.cep}
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={10} md={8} sm={8} xs={12}>
          <Input
            label="Nome do local"
            placeholder="Digite o nome do local"
            name="nomeLocal"
            defaultValue={endereco.nomeLocal}
            onChange={handleFormChange}
            required
          />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Input
            label="Rua"
            name="rua"
            defaultValue={endereco.rua}
            placeholder="Digite o nome da rua"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Input
            label="Número"
            name="numero"
            defaultValue={endereco.numero}
            placeholder="Digite o número"
            type="number"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Input
            label="Complemento"
            name="complemento"
            defaultValue={endereco.complemento}
            placeholder="Digite o complemento"
            onChange={handleFormChange}
            required
          />
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Input
            label="Bairro"
            name="bairro"
            defaultValue={endereco.bairro}
            placeholder="Digite o bairro"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Input
            label="Cidade"
            name="cidade"
            defaultValue={endereco.cidade}
            placeholder="Digite a cidade"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Input
            label="Estado"
            name="estado"
            defaultValue={endereco.estado}
            placeholder="Digite o estado"
            onChange={handleFormChange}
            required
          />
        </Grid>
      </>
    );
  }
);

export default FormEndereco;
