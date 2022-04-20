import classNames from 'classnames';
import {PaginationLinkProps} from './Link.props';

const Link: React.FC<PaginationLinkProps> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('pagination__link', className);

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
