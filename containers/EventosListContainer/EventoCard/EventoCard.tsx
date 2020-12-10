import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import {
  EventoLocalDetail,
  EventoDataDetail,
  Button,
  useToast,
} from '../../../components';
import useMutate from '../../../hooks/useMutate';
import {
  Card,
  Title,
  Descricao,
  EventoDetail,
  EventoStatus,
  EventoStatusContainer,
  ActionButton,
  DeleteButton,
} from './styled';

type EventoCardProps = {
  evento: any;
  edit?: boolean;
};

const EventoCard: React.FC<EventoCardProps> = ({ evento, edit }) => {
  const showToast = useToast();
  const { push } = useRouter();
  const { id, nome, descricao, dataEvento, endereco, comprado } = evento;
  const isAtivo = dayjs(dataEvento.dataHoraFim).isAfter(dayjs());

  const [deleteEvento, { loading }] = useMutate({
    method: 'delete',
    path: `/evento/${id}`,
    onCompleted: () => {
      showToast('Evento deletado com sucesso', { type: 'success' });
    },
  });

  const handleDeleteEvento = () => {
    deleteEvento();
  };

  return (
    <Card>
      <EventoDetail>
        <Title>{nome}</Title>
        <EventoLocalDetail endereco={endereco} />
        <Descricao>{descricao}</Descricao>
      </EventoDetail>
      <EventoStatusContainer>
        {edit ? (
          <ActionButton>
            <Button
              color="secondary"
              onClick={() => push(`/criar-evento/${id}`)}
            >
              Editar
            </Button>
            {!comprado && (
              <DeleteButton loading={loading} onClick={handleDeleteEvento}>
                Excluir
              </DeleteButton>
            )}
          </ActionButton>
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
