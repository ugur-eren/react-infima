import classNames from 'classnames';
import {BreadcrumbsItemProps, BreadcrumbsItemPropTypes} from './Item.props';

const Item: React.FC<BreadcrumbsItemProps> = (props) => {
  const {children, className, active, ...restProps} = props;

  const classes = classNames('breadcrumbs__item', {'breadcrumbs__item--active': active}, className);

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

Item.propTypes = BreadcrumbsItemPropTypes;

export default Item;
