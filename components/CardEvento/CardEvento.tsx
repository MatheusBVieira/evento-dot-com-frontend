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
  name: string;
  descricao: string;
};

const CardEvento: React.FC<CardEvento> = ({ name, descricao }) => {
  return (
    <CardContainer>
      <EventoImage>
        <Image src="/evento.jpg" width="346" height="140" layout="responsive" />
      </EventoImage>
      <EventoDetalhe>
        <EventoNome>{name}</EventoNome>
        <EventoDescricao>{descricao}</EventoDescricao>
        <StyledButton variant="contained" color="secondary">
          Ver mais
        </StyledButton>
      </EventoDetalhe>
    </CardContainer>
  );
};

export default CardEvento;
