import classNames from 'classnames';
import {TabsItemProps, TabsItemPropTypes} from './Item.props';

const Item: React.FC<TabsItemProps> = (props) => {
  const {children, className, active, ...restProps} = props;

  const classes = classNames('tabs__item', {'tabs__item--active': active}, className);

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

Item.propTypes = TabsItemPropTypes;

export default Item;
