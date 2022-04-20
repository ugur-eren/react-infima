import classNames from 'classnames';
import {BreadcrumbsLinkProps} from './Link.props';

const Link: React.FC<BreadcrumbsLinkProps> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('breadcrumbs__link', className);

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
