import styled from 'styled-components';
import { EventoDataDetail, EventoLocalDetail } from '../../../components';
import { toCurrency } from '../../../utils/toCurrency';

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0.5rem;
  ${({ theme }) => theme.elevation[1]}

  div {
    margin: 1rem;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.fonts.titleLarge};
`;

const Price = styled.p`
  margin: 1rem;
  font: ${({ theme }) => theme.fonts.regularSemiBold};
`;

const CompraContainer = ({ nome, dataEvento, endereco, preco }) => {
  return (
    <CardContainer>
      <Title>{nome}</Title>
      <EventoDataDetail dataEvento={dataEvento} />
      <EventoLocalDetail endereco={endereco} />
      <Price>{toCurrency(preco || 0)}</Price>
    </CardContainer>
  );
};

export default CompraContainer;
