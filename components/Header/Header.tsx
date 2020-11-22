import React, { useState } from 'react';

import { MenuOutline } from '@styled-icons/evaicons-outline';

import {
  HeaderContainer,
  Title,
  HeaderRoutes,
  RouteText,
  StyledDrawer,
  IconButton,
} from './styled';

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <HeaderContainer>
        <Title>Evento.com</Title>
        <HeaderRoutes>
          <RouteText>Buscar eventos</RouteText>
          <RouteText>Organize seu evento</RouteText>
          <RouteText>Acesse sua conta</RouteText>
          <RouteText border>Cadastre-se</RouteText>
        </HeaderRoutes>
        <IconButton onClick={() => setShowSideBar(true)}>
          <MenuOutline />
        </IconButton>
      </HeaderContainer>
      <StyledDrawer open={showSideBar} onClose={() => setShowSideBar(false)}>
        <RouteText>Buscar eventos</RouteText>
        <RouteText>Organize seu evento</RouteText>
        <RouteText>Acesse sua conta</RouteText>
        <RouteText border>Cadastra-se</RouteText>
      </StyledDrawer>
    </>
  );
};

export default Header;
