import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
  CircularProgress,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(MaterialButton)`
  && {
    height: 4.6rem;
    font: ${({ theme }) => theme.fonts.regular};
  }
`;

enum VARIANT {
  primary = 'primary',
}

type ButtonProps = {
  loading?: boolean;
  variant?: keyof typeof VARIANT;
  buttonProps?: Omit<MaterialButtonProps, keyof 'color'>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  loading,
  buttonProps,
}) => {
  const VARIANTS = {
    primary: {
      buttonVariant: 'contained',
      color: 'secondary',
    },
  };

  const { color, buttonVariant } = VARIANTS[variant] as any;

  return (
    <StyledButton
      color={color}
      variant={buttonVariant}
      disabled={loading}
      {...buttonProps}
    >
      {children}
      {loading && (
        <CircularProgress color={color} style={{ position: 'absolute' }} />
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
