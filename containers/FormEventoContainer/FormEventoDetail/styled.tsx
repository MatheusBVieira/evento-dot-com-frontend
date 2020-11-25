import styled from 'styled-components';

export const WarningText = styled.p`
  font: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.ligthText};
  text-align: justify;
`;
