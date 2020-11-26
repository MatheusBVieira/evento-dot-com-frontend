import styled from 'styled-components';

export const Container = styled.main`
  max-width: 640px;
  margin: 2rem auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 2.5rem 5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  @media (max-width: 725px) {
    padding: 2.5rem;
  }
`;

export const FormTitle = styled.p`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.ligthText};
`;
