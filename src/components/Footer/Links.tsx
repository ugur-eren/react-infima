import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Links: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('footer__links', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Links;
