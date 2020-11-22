import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const CardContainer = styled.div`
  width: 346px;
  height: 346px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  ${({ theme }) => theme.elevation[0]}
  border-radius: 0.5rem;
  margin: 1rem;
  overflow: hidden;
`;

export const EventoImage = styled.div`
  width: 100%;
`;

export const EventoDetalhe = styled.div`
  padding: 1rem;
`;

export const EventoNome = styled.p`
  font: ${({ theme }) => theme.fonts.title};
`;

export const EventoDescricao = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 1rem;
    display: block;
    font: ${({ theme }) => theme.fonts.regular};
  }
`;
