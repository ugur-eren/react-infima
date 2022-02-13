import React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const Container: React.FC<Props> = (props) => {
  const {children, className, fluid, ...restProps} = props;

  const classes = classNames('container', {'container--fluid': fluid}, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
