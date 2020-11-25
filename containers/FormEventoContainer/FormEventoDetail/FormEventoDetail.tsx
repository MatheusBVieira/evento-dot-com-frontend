import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input, Select, Textarea } from '../../../components';
import { WarningText } from './styled';

export type EventoDetail = {
  valor_ingresso?: string;
  capacidade_max?: string;
  categoria?: string;
  descricao?: string;
};

type FormEventoDetailProps = {
  value: EventoDetail;
  onChange: ({ value: Time, name: string }) => void;
};

const FormEventoDetail: React.FC<FormEventoDetailProps> = memo(
  ({ value, onChange }) => {
    const [detail, setDetail] = useState<EventoDetail>({});

    const handleFormChange = ({ value, name }) => {
      setDetail((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
      if (detail) {
        onChange({ value: detail, name: 'detalhe' });
      }
    }, [detail]);

    return (
      <>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Input
            label="Valor por ingresso"
            name="valor_ingresso"
            type="number"
            placeholder="R$ 10,00"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Input
            label="Capacidade maxíma local"
            name="capacidade_max"
            placeholder="10"
            type="number"
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Input
            label="Ingressos"
            value={(0.4 * Number(detail.capacidade_max)).toFixed(0)}
            disabled
            required
          />
        </Grid>
        <Grid
          item
          lg={5}
          md={12}
          sm={6}
          xs={12}
          style={{ display: 'flex' }}
          alignItems="center"
        >
          <WarningText>
            Devido a pandemia do <b>COVID-19</b> o maxímo de ingressos vendidos
            é igual a <b>40%</b> da capacidade maxíma.
          </WarningText>
        </Grid>
        <Grid item xs={12}>
          <Select
            label="Categoria"
            name="categoria"
            options={[
              { label: 'Categoria', value: 1 },
              { label: 'Categoria2', value: 2 },
              { label: 'Categoria3', value: 3 },
              { label: 'Categoria4', value: 4 },
            ]}
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Textarea
            label="Descrição"
            name="descricao"
            onChange={handleFormChange}
            placeholder="Descreva como vai ser seu evento"
            required
          />
        </Grid>
      </>
    );
  }
);

export default FormEventoDetail;
