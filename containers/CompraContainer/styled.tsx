import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled.main`
  max-width: 1280px;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.div`
  height: 100%;
  padding: 2.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const FormTitle = styled.p`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.ligthText};
`;
