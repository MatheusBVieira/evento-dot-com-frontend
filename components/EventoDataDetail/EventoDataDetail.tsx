import { CalendarOutline } from '@styled-icons/evaicons-outline';

import styled from 'styled-components';

type DataEvento = {
  horarioInicio: string;
  horarioFim: string;
  dataInicio: Date;
  dataFim: Date;
};

type EventoDataDetailProps = {
  dataEvento: DataEvento;
};

const DataContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

const EventoDataDetail: React.FC<EventoDataDetailProps> = ({ dataEvento }) => {
  const { dataInicio, dataFim, horarioFim, horarioInicio } = dataEvento ?? {};
  return (
    <DataContainer>
      <CalendarOutline width={24} height={24} />
      {`${dataInicio} as ${horarioInicio} até ${dataFim} as ${horarioFim}`}
    </DataContainer>
  );
};

export default EventoDataDetail;
