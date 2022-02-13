import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLLIElement>;

const Item: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames(className);

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

export default Item;
