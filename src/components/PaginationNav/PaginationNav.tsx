import classNames from 'classnames';
import Item from './Item/Item';
import {PaginationNavProps, PaginationNavSubComponents} from './PaginationNav.props';

const PaginationNav: React.FC<PaginationNavProps> & PaginationNavSubComponents = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('pagination-nav', className);

  return (
    <nav className={classes} {...restProps}>
      {children}
    </nav>
  );
};

PaginationNav.Item = Item;

export default PaginationNav;
