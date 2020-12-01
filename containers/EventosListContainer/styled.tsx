import styled from 'styled-components';
import { Tab as MaterialTab, Paper } from '@material-ui/core';

export const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 140px);
`;

export const TabsContainer = styled(Paper)`
  width: fit-content;
  margin: 2.5rem;
  && {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

export const Tab = styled(MaterialTab)`
  && {
    color: ${({ theme }) => theme.colors.ligthText};
    font: ${({ theme }) => theme.fonts.regular};
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NoEventLabel = styled.p`
  color: ${({ theme }) => theme.colors.ligthText};
  font: ${({ theme }) => theme.fonts.regular};
`;
