import classNames from 'classnames';
import {DropdownMenuProps} from './Menu.props';

const Menu: React.FC<DropdownMenuProps> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('dropdown__menu', className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

export default Menu;
