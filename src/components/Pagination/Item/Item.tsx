import classNames from 'classnames';
import {PaginationItemProps, PaginationItemPropTypes} from './Item.props';

const Item: React.FC<PaginationItemProps> = (props) => {
  const {children, className, active, disabled, ...restProps} = props;

  const classes = classNames(
    'pagination__item',
    {'pagination__item--active': active},
    {disabled},

    className,
  );

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

Item.propTypes = PaginationItemPropTypes;

export default Item;
