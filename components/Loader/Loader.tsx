import React, { memo } from 'react';

import styled, { keyframes } from 'styled-components';

type ContainerProps = {
  fullScreen?: boolean;
};

const Container = styled.div<ContainerProps>`
  ${({ fullScreen }) =>
    fullScreen &&
    `width: 100%; height: 120%; display: flex; align-items: center; justify-content: center;`}
`;

const Content = styled.div`
  display: inline-block;
  position: relative;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  margin: auto;
  box-sizing: border-box;
  border-radius: 50%;
  border-style: solid;
  height: 64px;
  width: 64px;
  border-width: 4px;
  animation: ${rotate} 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67);
  border-color: ${({ theme }) => theme.colors.backgroundLight};
  border-top-color: transparent;
`;

const LoadingText = styled.p`
  font: ${({ theme }) => theme.fonts.regularSemiBoldLarge};
  color: ${({ theme }) => theme.colors.inputBackgroundDarker};
`;

type LoaderProps = ContainerProps & {
  label?: string;
};

const Loader: React.FC<LoaderProps> = ({ label, fullScreen }) => (
  <Container fullScreen={fullScreen}>
    <Content>
      <Loading role="alert" aria-busy={true} aria-live="assertive" />
      {label && <LoadingText>{label}</LoadingText>}
    </Content>
  </Container>
);

Loader.defaultProps = {
  label: 'Carregando',
  fullScreen: false,
};

export default memo(Loader);
