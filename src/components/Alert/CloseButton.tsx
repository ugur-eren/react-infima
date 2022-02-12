import React from 'react';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CloseButton: React.VFC<Props> = (props) => {
  const {className, ...restProps} = props;

  const classes = classNames('clean-btn', 'close', className);

  return (
    <button type="button" className={classes} {...restProps}>
      <span aria-hidden="true">×</span>
    </button>
  );
};

export default CloseButton;
