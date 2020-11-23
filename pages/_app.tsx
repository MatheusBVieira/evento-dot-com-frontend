import { AppProps } from 'next/app';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import { ToastProvider, AxiosProvider } from '../components';
import { theme, materialTheme } from '../styles/theme';

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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme}>
        <MaterialThemeProvider theme={materialTheme}>
          <GlobalStyles />
          <ToastProvider>
            <AxiosProvider>
              <Component {...pageProps} />
            </AxiosProvider>
          </ToastProvider>
        </MaterialThemeProvider>
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
