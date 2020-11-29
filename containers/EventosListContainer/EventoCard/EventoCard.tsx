import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import {
  EventoLocalDetail,
  EventoDataDetail,
  Button,
} from '../../../components';
import {
  Card,
  Title,
  Descricao,
  EventoDetail,
  EventoStatus,
  EventoStatusContainer,
} from './styled';

type EventoCardProps = {
  evento: any;
  edit?: boolean;
};

const EventoCard: React.FC<EventoCardProps> = ({ evento, edit }) => {
  const { push } = useRouter();
  const { id, nome, descricao, dataEvento, endereco } = evento;
  const isAtivo = dayjs(dataEvento.dataHoraFim).isAfter(dayjs());

  return (
    <Card>
      <EventoDetail>
        <Title>{nome}</Title>
        <EventoLocalDetail endereco={endereco} />
        <Descricao>{descricao}</Descricao>
      </EventoDetail>
      <EventoStatusContainer>
        {edit ? (
          <Button color="primary" onClick={() => push(`/criar-evento/${id}`)}>
            Editar
          </Button>
        ) : (
          <EventoStatus color={isAtivo ? 'primary' : 'featuredText'}>
            {isAtivo ? 'Evento ativo' : 'Evento finalizado'}
          </EventoStatus>
        )}

        <EventoDataDetail dataEvento={dataEvento} />
      </EventoStatusContainer>
    </Card>
  );
};

export default EventoCard;
