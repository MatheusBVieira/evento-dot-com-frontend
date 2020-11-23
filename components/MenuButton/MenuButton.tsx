import { useRef, useState } from 'react';

import { Menu } from '@material-ui/core';

import {
  OrderByArrow,
  OrderByButton,
  OrderByText,
  StyledMenuItem,
} from './styled';

type MenuOption = {
  value: string | number;
  label: string;
};

type MenuButtonProps = {
  label: string;
  defaultValue?: MenuOption['value'];
  options: Array<MenuOption>;
  onChange: (option: MenuOption['value']) => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  defaultValue,
  options,
  onChange,
}) => {
  const { label: defaultLabel } =
    options.find((option) => option.value === defaultValue) ?? options[0];
  const [orderBy, setOrderBy] = useState(defaultLabel);
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<null | HTMLButtonElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (option: MenuOption) => {
    onChange(option.value);
    setOrderBy(option.label);
    handleClose();
  };

  return (
    <>
      <OrderByButton ref={anchorEl} onClick={() => setOpen(true)}>
        {label} <OrderByText>&nbsp; {orderBy}</OrderByText>
        <OrderByArrow />
      </OrderByButton>
      <Menu
        anchorEl={anchorEl.current}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options.map((option) => (
          <StyledMenuItem
            key={option.value}
            onClick={() => handleClick(option)}
          >
            {option.label}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
