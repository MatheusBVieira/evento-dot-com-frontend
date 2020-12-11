import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
  CircularProgress,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(MaterialButton)`
  && {
    min-height: 4.6rem;
    font: ${({ theme }) => theme.fonts.regular};
  }
`;

type ButtonProps = {
  loading?: boolean;
} & MaterialButtonProps;

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...buttonProps
}) => {
  return (
    <StyledButton variant="contained" disabled={loading} {...buttonProps}>
      {children}
      {loading && (
        <CircularProgress color="primary" style={{ position: 'absolute' }} />
      )}
    </StyledButton>
  );
};

export default Button;
