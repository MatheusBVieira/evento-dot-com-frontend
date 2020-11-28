import { memo, ReactNode, useEffect, useState } from 'react';

import Label from '../Label';
import { InputBlock, InputBox, StyledInput, Adorment } from './styled';
import stringFormat from '../../utils/stringFormat';
import { currencyToFloat, toCurrency } from '../../utils/toCurrency';

type Props = {
  label?: string;
  color?: Colors;
  initialValue?: string | number;
  onChange?: (target: { name: string; value: string | number }) => void;
  startAdorment?: ReactNode;
  fullWidth?: boolean;
  mask?: string;
  formater?: (value: any) => any;
};

type InputProps = Props &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;

const Input: React.FC<InputProps> = memo(
  ({
    label,
    defaultValue,
    color,
    onChange,
    name,
    required,
    startAdorment,
    fullWidth,
    mask,
    formater,
    disabled,
    type,
    ...rest
  }) => {
    const [value, setValue] = useState('');

    const formatInputValue = (value) => {
      let maskedValue = value,
        newValue = value;

      const parseNumber = (value: string) =>
        value === '' ? undefined : Number(value);

      const replaceString = (s) => s && String(s).replace(/\D/g, '');

      if (mask) {
        newValue = parseNumber(replaceString(value));
        maskedValue = stringFormat(mask, newValue);
      } else if (type === 'money') {
        newValue = currencyToFloat(value);
        maskedValue = toCurrency(newValue);
      } else if (type === 'number') {
        maskedValue = replaceString(value);
        newValue = parseNumber(maskedValue);
      }
      return { maskedValue, newValue };
    };

    const handleChange = (event) => {
      const { value } = event.target;
      const { maskedValue, newValue } = formatInputValue(value);
      setValue(maskedValue ?? '');
      onChange({ name, value: newValue });
    };

    useEffect(() => {
      if (defaultValue) {
        const { maskedValue } = formatInputValue(defaultValue);
        setValue(maskedValue ?? '');
      }
    }, []);

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
            type={type}
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
