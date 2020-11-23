import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const CardContainer = styled.div`
  width: 346px;
  height: 346px;
  margin: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0.5rem;
  ${({ theme }) => theme.elevation[1]}
`;

export const EventoImage = styled.div`
  width: 100%;
  height: 40%;

  img {
    object-fit: cover;
  }
`;

export const EventoDetalhe = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 60%;
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
    width: fit-content;
    margin-top: auto;
    font: ${({ theme }) => theme.fonts.regular};
  }
`;
