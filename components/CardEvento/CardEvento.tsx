import Image from 'next/image';
import {
  CardContainer,
  EventoImage,
  EventoDetalhe,
  EventoNome,
  EventoDescricao,
  StyledButton,
} from './styled';

const CardEvento = () => {
  return (
    <CardContainer>
      <EventoImage>
        <Image src="/evento.jpg" width="346" height="140" layout="responsive" />
      </EventoImage>
      <EventoDetalhe>
        <EventoNome>Lorem Ipsum</EventoNome>
        <EventoDescricao>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </EventoDescricao>
        <StyledButton variant="contained" color="secondary">
          Ver mais
        </StyledButton>
      </EventoDetalhe>
    </CardContainer>
  );
};

export default CardEvento;
