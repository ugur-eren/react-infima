import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('card__footer', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Footer;
