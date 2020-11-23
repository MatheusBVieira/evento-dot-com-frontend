import styled from 'styled-components';
import { ChevronDownOutline } from '@styled-icons/evaicons-outline';
import { Button, MenuItem } from '@material-ui/core';

export const OrderByButton = styled(Button)`
  && {
    align-self: center;
    justify-self: flex-end;
    font: ${({ theme }) => theme.fonts.regularSmall};
    color: ${({ theme }) => theme.colors.ligthText};
    white-space: nowrap;
    padding: 0;
  }
`;

export const OrderByArrow = styled(ChevronDownOutline)`
  width: 24px;
  height: 24px;
`;

export const OrderByText = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    font: ${({ theme }) => theme.fonts.regularSmall};
    color: ${({ theme }) => theme.colors.baseText};
  }
`;
