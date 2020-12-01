import styled from 'styled-components';

type LabelProps = {
  color?: Colors;
  required?: boolean;
};

const Label = styled.label<LabelProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font: ${({ theme }) => theme.fonts.regularSemiBold};

  :after {
    ${({ required }) => required && `content: ' * '; color: red;`};
  }
`;

Label.defaultProps = {
  color: 'ligthText',
};

export default Label;
