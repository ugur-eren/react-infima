import classNames from 'classnames';
import Menu from './Menu/Menu';
import Item from './Item/Item';
import {DropdownProps, DropdownPropTypes, DropdownSubComponents} from './Dropdown.props';

const Dropdown: React.FC<DropdownProps> & DropdownSubComponents = (props) => {
  const {children, className, hoverable, show, align = 'left', ...restProps} = props;

  const classes = classNames(
    'dropdown',
    {'dropdown--hoverable': hoverable},
    {'dropdown--show': show},
    {'dropdown--right': align === 'right'},
    className,
  );

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Dropdown.Menu = Menu;
Dropdown.Item = Item;

Dropdown.propTypes = DropdownPropTypes;

export default Dropdown;
