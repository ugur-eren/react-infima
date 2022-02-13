import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('hero__title', className);

  return (
    <h1 className={classes} {...restProps}>
      {children}
    </h1>
  );
};

export default Title;
