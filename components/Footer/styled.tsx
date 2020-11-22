import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  position: relative;
  margin-top: 2rem;
`;

export const FooterImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const TextContainer = styled.section`
  max-width: 1280px;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: flex-end;
  padding: 1rem;
  font: ${({ theme }) => theme.fonts.title};
`;
