import PropTypes from 'prop-types';
import Menu from './Menu/Menu';
import Item from './Item/Item';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  show?: boolean;
  align?: 'left' | 'right';
}

export interface DropdownSubComponents {
  Menu: typeof Menu;
  Item: typeof Item;
}

export const DropdownPropTypes: React.WeakValidationMap<DropdownProps> = {
  hoverable: PropTypes.bool,
  show: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right']),
};
