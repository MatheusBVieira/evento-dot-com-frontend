import { CalendarOutline } from '@styled-icons/evaicons-outline';

import styled from 'styled-components';

type DataEvento = {
  dataHoraFim: Date;
  dataHoraInicio: Date;
};

type EventoDataDetailProps = {
  dataEvento?: DataEvento;
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
  const { dataHoraFim, dataHoraInicio } = dataEvento ?? {};
  return (
    <DataContainer>
      <CalendarOutline width={24} height={24} />
      <p>{`${dataHoraInicio} até ${dataHoraFim}`}</p>
    </DataContainer>
  );
};

export default EventoDataDetail;
