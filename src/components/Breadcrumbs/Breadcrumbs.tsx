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

const Breadcrumbs: React.FC<Props> & SubComponents = (props) => {
  const {children, className, size = DefaultSize} = props;

  const classes = classNames(
    'breadcrumbs',

    {'breadcrumbs--sm': size === 'small'},
    {'breadcrumbs--lg': size === 'large'},

    className,
  );

  return (
    <nav aria-label="breadcrumbs">
      <ul className={classes}>{children}</ul>
    </nav>
  );
};

Breadcrumbs.Item = Item;
Breadcrumbs.Link = Link;

export default Breadcrumbs;
