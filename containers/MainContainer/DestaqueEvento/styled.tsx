import styled from 'styled-components';

import { Divider, Button } from '@material-ui/core';

export const StyledContainer = styled.article`
  max-width: 1280px;
  margin: 2.5rem auto;
  padding: 2.5rem;
`;

export const DestaqueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding: 2.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  @media (min-width: 960px) {
    max-height: 500px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const DestaqueImage = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 2rem;
  ${({ theme }) => theme.elevation[1]};

  @media (max-width: 960px) {
    max-height: 350px;
  }
`;

export const DestaqueTitle = styled.h1`
  color: ${({ theme }) => theme.colors.ligthText};
  font: ${({ theme }) => theme.fonts.title};
  margin: 0 8px;
`;

export const DestaqueDescricao = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  margin-left: 2.5rem;
  padding: 2.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.baseText};

  @media (max-width: 960px) {
    margin-left: 0px;
    margin-top: 2.5rem;
    max-width: 100%;
    width: 100%;
  }
`;

export const DataEvento = styled.p`
  color: ${({ theme }) => theme.colors.featuredText};
`;

export const NomeEvento = styled.p`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const DescricaoEvento = styled.p`
  margin: 15px 0;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 15px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin: auto auto 0;
    display: block;
    width: 60%;
    font: ${({ theme }) => theme.fonts.regular};
    max-width: 200px;
  }
`;
