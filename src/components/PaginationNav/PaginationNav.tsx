import classNames from 'classnames';
import Item from './Item';
import Link from './Link';
import Label from './Label';
import SubLabel from './SubLabel';

type Props = React.HTMLAttributes<HTMLElement>;

interface SubComponents {
  Item: typeof Item;
  Link: typeof Link;
  Label: typeof Label;
  SubLabel: typeof SubLabel;
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
PaginationNav.Link = Link;
PaginationNav.Label = Label;
PaginationNav.SubLabel = SubLabel;

export default PaginationNav;
