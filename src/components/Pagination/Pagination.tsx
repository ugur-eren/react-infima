import classNames from 'classnames';
import {DefaultSize} from '../../Constants';
import Item from './Item/Item';
import Link from './Link/Link';
import {PaginationProps, PaginationPropTypes, PaginationSubComponents} from './Pagination.props';

const Pagination: React.FC<PaginationProps> & PaginationSubComponents = (props) => {
  const {children, className, size = DefaultSize, ...restProps} = props;

  const classes = classNames(
    'pagination',

    {'pagination--sm': size === 'small'},
    {'pagination--lg': size === 'large'},

    className,
  );

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

Pagination.Item = Item;
Pagination.Link = Link;

Pagination.propTypes = PaginationPropTypes;

export default Pagination;
