import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLUListElement>;

const Items: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('footer__items', className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

export default Items;
