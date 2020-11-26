import { useState } from 'react';

import { useRouter } from 'next/router';
import { MenuOutline } from '@styled-icons/evaicons-outline';

import {
  HeaderContainer,
  Title,
  HeaderRoutes,
  RouteText,
  StyledDrawer,
  IconButton,
} from './styled';
import { useAuth } from '..';

const routes = [
  {
    name: 'Buscar eventos',
    route: '/eventos',
  },
  {
    name: 'Organize seu evento',
    route: '/criar-evento',
  },
  {
    name: 'Acesse sua conta',
    route: '/conta',
  },
  {
    name: 'Cadastre-se',
    route: '/criar-conta',
    buttonProps: { border: true },
    hideOnAuth: true,
  },
];

const Header = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);

  const handleRoute = (route) => {
    router.push(route);
  };

  const handleKeydown = (e, route) => {
    if (e.key === 'Enter') {
      handleRoute(route);
    }
  };

  const handleRoutes = () =>
    routes.map(({ route, name, buttonProps, hideOnAuth }) =>
      hideOnAuth && !!token ? null : (
        <RouteText
          key={name}
          {...buttonProps}
          onClick={() => handleRoute(route)}
          onKeyDown={(e) => handleKeydown(e, route)}
        >
          {name}
        </RouteText>
      )
    );

  return (
    <>
      <HeaderContainer>
        <Title
          onClick={() => handleRoute('/')}
          onKeyDown={(e) => handleKeydown(e, '/')}
        >
          Evento.com
        </Title>
        <HeaderRoutes>{handleRoutes()}</HeaderRoutes>
        <IconButton onClick={() => setShowSideBar(true)}>
          <MenuOutline />
        </IconButton>
      </HeaderContainer>
      <StyledDrawer open={showSideBar} onClose={() => setShowSideBar(false)}>
        {handleRoutes()}
      </StyledDrawer>
    </>
  );
};

export default Header;
