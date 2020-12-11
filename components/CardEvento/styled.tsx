import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const EventoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventoNome = styled.p`
  font: ${({ theme }) => theme.fonts.title};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EventoPreco = styled.p`
  font: ${({ theme }) => theme.fonts.regularSemiBold};
`;

export const EventoDescricao = styled.span`
  font: ${({ theme }) => theme.fonts.regular};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledButton = styled(Button)`
  && {
    width: fit-content;
    margin-top: auto;
    font: ${({ theme }) => theme.fonts.regular};
  }
`;
