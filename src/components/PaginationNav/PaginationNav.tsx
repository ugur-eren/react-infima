import classNames from 'classnames';
import Item from './Item';

type Props = React.HTMLAttributes<HTMLElement>;

interface SubComponents {
  Item: typeof Item;
}

const PaginationNav: React.FC<Props> & SubComponents = (props) => {
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
