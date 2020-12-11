import { CalendarOutline } from '@styled-icons/evaicons-outline';
import dayjs from 'dayjs';

import styled from 'styled-components';

type DataEvento = {
  dataHoraFim: Date;
  dataHoraInicio: Date;
};
type DataContainerProps = {
  disableSpacing?: boolean;
};

type EventoDataDetailProps = {
  dataEvento?: DataEvento;
  disableIcon?: boolean;
} & DataContainerProps;

const DataContainer = styled.div<DataContainerProps>`
  margin: ${({ disableSpacing }) => !disableSpacing && '2rem 0'};
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

const EventoDataDetail: React.FC<EventoDataDetailProps> = ({
  dataEvento,
  disableSpacing,
  disableIcon,
}) => {
  const { dataHoraFim, dataHoraInicio } = dataEvento ?? {};

  const formatDate = (data) => dayjs(data).format('DD MMM HH:mm');

  return (
    <DataContainer disableSpacing={disableSpacing}>
      {!disableIcon && <CalendarOutline width={24} height={24} />}
      <p>{`${formatDate(dataHoraInicio)} até ${formatDate(
        dataHoraFim
      )} de ${dayjs(dataHoraFim).get('year')}`}</p>
    </DataContainer>
  );
};

export default EventoDataDetail;
