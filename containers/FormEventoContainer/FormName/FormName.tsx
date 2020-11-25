import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

export type EventoName = {
  valor_ingresso?: string;
  capacidade_max?: string;
  categoria?: string;
  descricao?: string;
};

type FormNameProps = {
  value: EventoName;
  onChange: ({ value: Time, name: string }) => void;
};

const FormName: React.FC<FormNameProps> = memo(({ value, onChange }) => {
  const [formName, setFormName] = useState<EventoName>({});

  const handleFormChange = ({ value, name }) => {
    setFormName((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formName) {
      onChange({ value: formName, name: 'eventoName' });
    }
  }, [formName]);

  return (
    <>
      <Grid item xs={12}>
        <Input
          label="Nome do evento"
          name="nome_evento"
          placeholder="Escreva o nome do evento"
          onChange={handleFormChange}
          required
        />
      </Grid>
    </>
  );
});

export default FormName;
