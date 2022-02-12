import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Name: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('avatar__name', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Name;
