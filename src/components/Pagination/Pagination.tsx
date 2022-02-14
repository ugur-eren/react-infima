import classNames from 'classnames';
import {Size} from '../../Types';
import {DefaultSize} from '../../Constants';
import Item from './Item';
import Link from './Link';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  size?: Size;
}

interface SubComponents {
  Item: typeof Item;
  Link: typeof Link;
}

const Pagination: React.FC<Props> & SubComponents = (props) => {
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

export default Pagination;
