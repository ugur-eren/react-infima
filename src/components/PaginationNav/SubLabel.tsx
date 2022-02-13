import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const SubLabel: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('pagination-nav__sublabel', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default SubLabel;
