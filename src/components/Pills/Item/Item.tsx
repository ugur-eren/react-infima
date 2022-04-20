import classNames from 'classnames';
import {PillsItemProps, PillsItemPropTypes} from './Item.props';

const Item: React.FC<PillsItemProps> = (props) => {
  const {children, className, active, ...restProps} = props;

  const classes = classNames('pills__item', {'pills__item--active': active}, className);

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

Item.propTypes = PillsItemPropTypes;

export default Item;
