import Image from 'next/image';
import {
  CardContainer,
  EventoImage,
  EventoDetalhe,
  EventoNome,
  EventoDescricao,
  StyledButton,
} from './styled';

type CardEvento = {
  nome: string;
  categoria: string;
};

const CardEvento: React.FC<CardEvento> = ({ nome, categoria }) => {
  return (
    <CardContainer>
      <EventoImage>
        <Image src="/evento.jpg" width="346" height="140" layout="responsive" />
      </EventoImage>
      <EventoDetalhe>
        <EventoNome>{nome}</EventoNome>
        <EventoDescricao>{categoria}</EventoDescricao>
        <StyledButton variant="contained" color="secondary">
          Ver mais
        </StyledButton>
      </EventoDetalhe>
    </CardContainer>
  );
};

export default CardEvento;
