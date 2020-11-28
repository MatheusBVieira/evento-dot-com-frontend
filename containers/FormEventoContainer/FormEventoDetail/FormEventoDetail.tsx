import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input, Select, Textarea } from '../../../components';
import { WarningText } from './styled';
import useFetch from '../../../hooks/useFetch';

export type EventoDetail = {
  preco?: number;
  capacidadePessoas?: string;
  categoria?: number;
  descricao?: string;
};

type FormEventoDetailProps = {
  value: EventoDetail;
  onChange: ({ value: Time, name: string }) => void;
};

const FormEventoDetail: React.FC<FormEventoDetailProps> = memo(
  ({ value, onChange }) => {
    const [detail, setDetail] = useState<EventoDetail>(value);

    const { data: { content = [] } = {} } = useFetch({
      method: 'get',
      path: '/categoria',
    });

    const handleFormChange = ({ value, name }) => {
      setDetail((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
      if (detail) {
        onChange({ value: detail, name: 'detail' });
      }
    }, [detail]);

    return (
      <>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Input
            label="Valor por ingresso"
            name="preco"
            type="money"
            placeholder="Digite o valor"
            defaultValue={detail.preco}
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Input
            label="Capacidade maxíma local"
            name="capacidadePessoas"
            placeholder="Digite a capacidade max."
            type="number"
            defaultValue={detail.capacidadePessoas}
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Input
            label="Ingressos"
            value={(0.4 * Number(detail?.capacidadePessoas ?? '')).toFixed(0)}
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
            options={content.map((c) => ({ value: c.id, label: c.descricao }))}
            onChange={handleFormChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Textarea
            label="Descrição"
            name="descricao"
            defaultValue={detail.descricao}
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
