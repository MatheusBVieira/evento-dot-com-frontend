import styled from 'styled-components';

export const Container = styled.main`
  max-width: 640px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const FormTitle = styled.p`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.ligthText};
`;
