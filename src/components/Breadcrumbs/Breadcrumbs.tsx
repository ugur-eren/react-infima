import classNames from 'classnames';
import {DefaultSize} from '../../Constants';
import Item from './Item/Item';
import Link from './Link/Link';
import {
  BreadcrumbsProps,
  BreadcrumbsPropTypes,
  BreadcrumbsSubComponents,
} from './Breadcrumbs.props';

const Breadcrumbs: React.FC<BreadcrumbsProps> & BreadcrumbsSubComponents = (props) => {
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

Breadcrumbs.propTypes = BreadcrumbsPropTypes;

export default Breadcrumbs;
