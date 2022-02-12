import React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
}

const ButtonGroup: React.FC<Props> = (props) => {
  const {children, className, block, ...restProps} = props;

  const classes = classNames('button-group', {'button-group--block': block}, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default ButtonGroup;
