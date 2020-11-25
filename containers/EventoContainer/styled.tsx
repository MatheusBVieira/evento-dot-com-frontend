import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  width: 100%;
  margin: 2rem auto;
  height: 100vh;
`;

export const Content = styled.article`
  width: 100%;
  height: 100%;
  padding: 5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 960px) {
    padding: 1rem;
  }
`;

export const EventoImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2rem;
  ${({ theme }) => theme.elevation[1]};

  img {
    object-fit: cover;
  }

  @media (max-width: 960px) {
    max-height: 350px;
  }
`;

export const EventoCompra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.baseText};

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 960px) {
    align-self: center;
    margin-top: 2rem;
  }
`;

export const EventoDetalhe = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.ligthText};
  font: ${({ theme }) => theme.fonts.regular};

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const EventoName = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.fonts.titleLarge};
`;

export const EventoDescricaoTitle = styled.p`
  margin-top: 2rem;
  font: ${({ theme }) => theme.fonts.title};
`;

export const EventoDescricao = styled.span`
  font: ${({ theme }) => theme.fonts.regularSmall};
`;
