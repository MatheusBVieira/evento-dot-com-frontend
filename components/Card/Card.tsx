import Image from 'next/image';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 346px;
  height: 346px;
  margin: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0.5rem;
  ${({ theme }) => theme.elevation[1]}
`;

const EventoImage = styled.div`
  width: 100%;
  height: 40%;

  img {
    object-fit: cover;
  }
`;

const EventoDetalhe = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 60%;
`;

type CardEvento = {
  image: string;
};

const CardEvento: React.FC<CardEvento> = ({ image, children }) => {
  return (
    <CardContainer>
      <EventoImage>
        <Image src={image} width="346" height="140" layout="responsive" />
      </EventoImage>
      <EventoDetalhe>{children}</EventoDetalhe>
    </CardContainer>
  );
};

export default CardEvento;
