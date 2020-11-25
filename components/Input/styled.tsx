import styled from 'styled-components';

type InputBlockProps = {
  fullWidth?: boolean;
};

export const InputBlock = styled.div<InputBlockProps>`
  position: relative;
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : '')};

  :focus-within:after,
  :hover:after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;

type InputBoxProps = {
  disabled?: boolean;
};

export const InputBox = styled.div<InputBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.inputBackgroundDarker
      : theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  padding: 0 1.6rem;
  ${({ theme }) => theme.elevation[0]};
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: 0;
  font: ${({ theme }) => theme.fonts.regular};

  ::placeholder {
    color: ${({ theme }) => theme.colors.complementText};
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Adorment = styled.div`
  width: 24px;
  height: 24px;
`;
