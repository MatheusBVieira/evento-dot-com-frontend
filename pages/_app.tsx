import { AppProps } from 'next/app';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import {
  ToastProvider,
  AxiosProvider,
  AuthProvider,
  useAuth,
} from '../components';
import { theme, materialTheme } from '../styles/theme';
import { useEffect } from 'react';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100vh;
  }

  body { 
    background: ${({ theme }) => theme.colors.background}
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: ${({ theme }) => theme.fonts.regularSemiBold};
    color: ${({ theme }) => theme.colors.baseText};
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  }
 
  ::-webkit-scrollbar-thumb {
    border-left: 2px solid ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.backgroundSecondary}; 
  }
`;

const AuthMiddleware = ({ route }) => {
  const { validateToken } = useAuth();
  useEffect(() => {
    if (route) {
      validateToken();
    }
  }, [route]);
  return null;
};

const AppContainer = ({ Component, pageProps, router }: AppProps) => {
  return (
    <AxiosProvider url={process.env.NEXT_PUBLIC_SERVER_URL}>
      <AuthProvider>
        <AnimatePresence exitBeforeEnter>
          <ThemeProvider theme={theme}>
            <MaterialThemeProvider theme={materialTheme}>
              <GlobalStyles />
              <ToastProvider>
                <Component {...pageProps} />
                <AuthMiddleware route={router.route} />
              </ToastProvider>
            </MaterialThemeProvider>
          </ThemeProvider>
        </AnimatePresence>
      </AuthProvider>
    </AxiosProvider>
  );
};

export default AppContainer;
