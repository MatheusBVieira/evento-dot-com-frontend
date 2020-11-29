import { memo, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from '../../../components';

export type DataEvento = {
  dataHoraInicio?: string;
  dataHoraFim?: string;
};

type FormTimeProps = {
  value: DataEvento;
  onChange: ({ value: Time, name: string }) => void;
};

const FormTime: React.FC<FormTimeProps> = memo(({ value, onChange }) => {
  const [time, setTime] = useState<DataEvento>(value);

  const handleFormChange = ({ value, name }) => {
    setTime((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (time) {
      onChange({ value: time, name: 'dataEvento' });
    }
  }, [time]);

  return (
    <>
      <Grid item md={6} sm={12} xs={12}>
        <Input
          label="início"
          name="dataHoraInicio"
          type="datetime-local"
          defaultValue={time.dataHoraInicio}
          onChange={handleFormChange}
          required
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Input
          label="Fim"
          name="dataHoraFim"
          type="datetime-local"
          defaultValue={time.dataHoraFim}
          onChange={handleFormChange}
          required
        />
      </Grid>
    </>
  );
});

export default FormTime;
