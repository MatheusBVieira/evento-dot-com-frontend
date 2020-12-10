import { useRouter } from 'next/router';
import {
  EventoNome,
  EventoPreco,
  EventoHeader,
  EventoDescricao,
  StyledButton,
} from './styled';
import Card from '../Card';
import { toCurrency } from '../../utils/toCurrency';

type CardEvento = {
  nome: string;
  descricao: string;
  preco: number;
  id: number;
};

const CardEvento: React.FC<CardEvento> = ({ nome, descricao, preco, id }) => {
  const { push } = useRouter();

  const handleClickCard = () => {
    id && push(`/evento/${id}`);
  };

  return (
    <Card image="/evento.jpg">
      <EventoHeader>
        <EventoNome>{nome}</EventoNome>
        <EventoPreco>{toCurrency(preco || 0)}</EventoPreco>
      </EventoHeader>
      <EventoDescricao>{descricao}</EventoDescricao>
      <StyledButton
        onClick={handleClickCard}
        variant="contained"
        color="primary"
      >
        Ver mais
      </StyledButton>
    </Card>
  );
};

export default CardEvento;
