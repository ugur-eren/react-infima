import React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  active?: boolean;
  disabled?: boolean;
}

const Item: React.FC<Props> = (props) => {
  const {children, className, active, disabled, ...restProps} = props;

  const classes = classNames(
    'pagination__item',
    {'pagination__item--active': active},
    {disabled},

    className,
  );

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

export default Item;
