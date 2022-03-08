import classNames from 'classnames';
import Menu from './Menu';
import Item from './Item';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  show?: boolean;
  align?: 'left' | 'right';
}

interface SubComponents {
  Menu: typeof Menu;
  Item: typeof Item;
}

const Dropdown: React.FC<Props> & SubComponents = (props) => {
  const {children, className, hoverable, show, align, ...restProps} = props;

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

export default Dropdown;
