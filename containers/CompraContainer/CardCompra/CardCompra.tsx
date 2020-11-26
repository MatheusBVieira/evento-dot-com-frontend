import styled from 'styled-components';
import { EventoDataDetail, EventoLocalDetail } from '../../../components';
import { toCurrency } from '../../../utils/toCurrency';

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0.5rem;
  ${({ theme }) => theme.elevation[1]}

  div {
    margin: 1rem;
  }
`;

const Title = styled.p`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.fonts.titleLarge};
`;

const Price = styled.p`
  margin: 1rem;
  font: ${({ theme }) => theme.fonts.title};
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
