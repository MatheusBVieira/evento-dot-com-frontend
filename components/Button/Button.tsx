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
  secondary = 'secondary',
}

type ButtonProps = {
  loading?: boolean;
  variant?: keyof typeof VARIANT;
  onClick?: MaterialButtonProps['onClick'];
  buttonProps?: Omit<MaterialButtonProps, keyof 'color'>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  loading,
  buttonProps,
  onClick,
}) => {
  const VARIANTS = {
    primary: {
      buttonVariant: 'contained',
      color: 'secondary',
    },
    secondary: {
      buttonVariant: 'contained',
      color: 'primary',
    },
  };

  const { color, buttonVariant }: any = VARIANTS[variant] ?? {};

  return (
    <StyledButton
      color={color}
      variant={buttonVariant}
      disabled={loading}
      onClick={onClick}
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
