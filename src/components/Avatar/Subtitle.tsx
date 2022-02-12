import React from 'react';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLElement>;

const Subtitle: React.FC<Props> = (props) => {
  const {children, className} = props;

  const classes = classNames('avatar__subtitle', className);

  return <small className={classes}>{children}</small>;
};

export default Subtitle;
