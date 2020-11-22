import styled from 'styled-components';
import { SearchOutline } from '@styled-icons/evaicons-outline';
import { Button } from '@material-ui/core';

export const SearchContainer = styled.article`
  max-width: 1280px;
  margin: 2.5rem auto;
  padding: 2.5rem;

  @media (min-width: 612px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1 / -1;
  width: 100%;

  @media (min-width: 960px) {
    width: 50%;
  }
`;

export const SearchIcon = styled(SearchOutline)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const SearchTerm = styled.div`
  align-self: center;
  white-space: nowrap;
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.ligthText};

  & > span {
    color: ${({ theme }) => theme.colors.primaryText};
    font: ${({ theme }) => theme.fonts.regular};
  }

  @media (max-width: 612px) {
    margin: 2rem 0 1rem 0;
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: fit-content;
    margin-left: 2rem;
    font: ${({ theme }) => theme.fonts.regular};
    border-radius: 0.8rem;
  }
`;
