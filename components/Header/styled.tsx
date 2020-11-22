import styled from 'styled-components';

import { Drawer } from '@material-ui/core';

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const Title = styled.a`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primaryText};
  text-decoration: none;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0 0.5rem;
  border: 1px solid transparent;
  border-radius: 1rem;

  :hover {
    border-color: ${({ theme }) => theme.colors.primaryTextDarker};
    color: ${({ theme }) => theme.colors.primaryTextDarker};
  }
`;

export const HeaderRoutes = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

type RouteTextProps = {
  border?: boolean;
};

export const RouteText = styled.a<RouteTextProps>`
  color: ${({ theme }) => theme.colors.ligthText};
  border: ${({ theme, border }) =>
    border ? `1px solid ${theme.colors.ligthText}` : 'none'};
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.primaryText};
    border-color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.headerBackground};

    a {
      margin: 1rem;
      width: 90%;
    }
  }
`;

export const IconButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  margin-left: auto;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.ligthText};

  @media (min-width: 960px) {
    display: none;
  }

  :hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;
