import { useRef, useState } from 'react';

import { Menu, MenuItem } from '@material-ui/core';

import { OrderByArrow, OrderByButton, OrderByText } from './styled';

type MenuOption = {
  value: string | number;
  label: string;
};

type MenuButtonProps = {
  label: string;
  options: Array<MenuOption>;
  onChange: (option: MenuOption['value']) => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  options,
  onChange,
}) => {
  const [orderBy, setOrderBy] = useState('');
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
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} onClick={() => handleClick(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
