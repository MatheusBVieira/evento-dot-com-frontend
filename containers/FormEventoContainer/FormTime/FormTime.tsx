import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

export type Time = {
  data_inicio?: string;
  hora_inicio?: string;
  data_fim?: string;
  hora_fim?: string;
};

type FormTimeProps = {
  value: Time;
  onChange: ({ value: Time, name: string }) => void;
};

const FormTime: React.FC<FormTimeProps> = memo(({ value, onChange }) => {
  const [time, setTime] = useState<Time>({});

  const handleFormChange = ({ value, name }) => {
    setTime((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (time) {
      onChange({ value: time, name: 'time' });
    }
  }, [time]);

  return (
    <>
      <Grid item md={3} sm={6} xs={12}>
        <Input
          label="Data de início"
          name="data_inicio"
          type="date"
          onChange={handleFormChange}
          required
        />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Input
          label="Hora de início"
          name="hora_inicio"
          type="time"
          onChange={handleFormChange}
          required
        />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Input
          label="Data de fim"
          name="data_fim"
          type="date"
          onChange={handleFormChange}
          required
        />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Input
          label="Hora de fim"
          name="hora_fim"
          type="time"
          onChange={handleFormChange}
          required
        />
      </Grid>
    </>
  );
});

export default FormTime;
