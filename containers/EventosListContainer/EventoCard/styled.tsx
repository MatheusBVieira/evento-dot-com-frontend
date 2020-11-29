import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Card = styled(Paper)`
  width: 100%;
  margin: 2rem;
  padding: 2rem;

  && {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.ligthText};
    font: ${({ theme }) => theme.fonts.regular};
  }

  @media (min-width: 960px) {
    display: flex;
  }
`;

export const EventoDetail = styled.div`
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.fonts.titleLarge};

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Descricao = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EventoStatusContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }
`;

type EventoStatusProps = {
  color: Colors;
};
export const EventoStatus = styled.div<EventoStatusProps>`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  font: ${({ theme }) => theme.fonts.regularSemiBold};

  ${({ theme }) => theme.elevation[1]};
`;
