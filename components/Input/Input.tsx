import { memo, ReactNode, useState } from 'react';

import Label from '../Label';
import { InputBlock, InputBox, StyledInput, Adorment } from './styled';
import stringFormat from '../../utils/stringFormat';

type Props = {
  label?: string;
  color?: Colors;
  initialValue?: string | number;
  onChange?: (target: { name: string; value: string | number }) => void;
  startAdorment?: ReactNode;
  fullWidth?: boolean;
  mask?: string;
};

type InputProps = Props &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;

const Input: React.FC<InputProps> = memo(
  ({
    label,
    initialValue,
    color,
    onChange,
    name,
    required,
    startAdorment,
    fullWidth,
    mask,
    disabled,
    ...rest
  }) => {
    const [value, setValue] = useState(initialValue);

    const parseNumber = (value: string) =>
      value === '' ? undefined : Number(value);

    const handleChange = (event) => {
      const { value, type } = event.target;
      let inputValue = value,
        newValue = value;

      if (type === 'number') {
        inputValue = value.replace(/\D/g, '');
        newValue = parseNumber(inputValue);
      } else if (mask) {
        newValue = parseNumber(value.replace(/\D/g, ''));
        inputValue = stringFormat(mask, newValue);
      }

      setValue(inputValue ?? '');
      onChange({ name, value: newValue });
    };

    return (
      <InputBlock fullWidth={fullWidth}>
        {label && (
          <Label htmlFor={name} color={color} required={required}>
            {label}
          </Label>
        )}
        <InputBox disabled={disabled}>
          {startAdorment && <Adorment>{startAdorment}</Adorment>}
          <StyledInput
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            {...rest}
          />
        </InputBox>
      </InputBlock>
    );
  }
);

Input.defaultProps = {
  type: 'text',
  color: 'ligthText',
  onChange: () => {},
};

export default Input;
