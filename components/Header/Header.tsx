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
  },
];

const Header = () => {
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

  return (
    <>
      <HeaderContainer>
        <Title
          onClick={() => handleRoute('/')}
          onKeyDown={(e) => handleKeydown(e, '/')}
        >
          Evento.com
        </Title>
        <HeaderRoutes>
          {routes.map(({ route, name, buttonProps }) => (
            <RouteText
              key={name}
              onClick={() => handleRoute(route)}
              onKeyDown={(e) => handleKeydown(e, route)}
              {...buttonProps}
            >
              {name}
            </RouteText>
          ))}
        </HeaderRoutes>
        <IconButton onClick={() => setShowSideBar(true)}>
          <MenuOutline />
        </IconButton>
      </HeaderContainer>
      <StyledDrawer open={showSideBar} onClose={() => setShowSideBar(false)}>
        {routes.map(({ route, name, buttonProps }) => (
          <RouteText
            {...buttonProps}
            onClick={() => handleRoute(route)}
            onKeyDown={(e) => handleKeydown(e, route)}
          >
            {name}
          </RouteText>
        ))}
      </StyledDrawer>
    </>
  );
};

export default Header;
