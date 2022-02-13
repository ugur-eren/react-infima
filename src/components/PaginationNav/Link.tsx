import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('pagination-nav__link', className);

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
