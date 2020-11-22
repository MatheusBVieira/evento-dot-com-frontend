import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  margin: 2.5rem 0;
`;

export const CategoriaTitle = styled.h2`
  max-width: 1280px;
  padding: 0.5rem 2.5rem;
  margin: auto;
  color: ${({ theme }) => theme.colors.ligthText};
  font: ${({ theme }) => theme.fonts.title};
`;

export const ListBanner = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  ${({ theme }) => theme.elevation[0]}
`;

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
