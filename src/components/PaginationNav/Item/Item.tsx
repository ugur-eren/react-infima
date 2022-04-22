import classNames from 'classnames';
import {PaginationNavItemProps, PaginationNavItemPropTypes} from './Item.props';

const Item: React.FC<PaginationNavItemProps> = (props) => {
  const {
    className,
    type = 'previous',
    label,
    sublabel,
    linkClassName,
    labelClassName,
    sublabelClassName,
    ...restProps
  } = props;

  const itemClasses = classNames(
    'pagination-nav__item',
    {'pagination-nav__item--next': type === 'next'},
    className,
  );
  const linkClasses = classNames('pagination-nav__link', linkClassName);
  const labelClasses = classNames('pagination-nav__label', labelClassName);
  const sublabelClasses = classNames('pagination-nav__sublabel', sublabelClassName);

  return (
    <div className={itemClasses}>
      {label || sublabel ? (
        <a className={linkClasses} {...restProps}>
          {sublabel ? <div className={sublabelClasses}>{sublabel}</div> : null}

          <div className={labelClasses}>{label}</div>
        </a>
      ) : null}
    </div>
  );
};

Item.propTypes = PaginationNavItemPropTypes;

export default Item;
