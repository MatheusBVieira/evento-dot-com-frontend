import styled from 'styled-components';

export const ListBanner = styled.article`
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  ${({ theme }) => theme.elevation[0]}
`;

export const ListContainer = styled.div`
  display: grid;
  max-width: 1280px;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
`;
