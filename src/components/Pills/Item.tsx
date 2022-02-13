import React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

const Item: React.FC<Props> = (props) => {
  const {children, className, active, ...restProps} = props;

  const classes = classNames('pills__item', {'pills__item--active': active}, className);

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

export default Item;
