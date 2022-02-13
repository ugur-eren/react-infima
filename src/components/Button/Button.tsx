import React from 'react';
import classNames from 'classnames';
import {DefaultSize, DefaultTheme} from '../../Constants';
import {Size, Theme} from '../../Types';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme | 'link';
  size?: Size;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    type = 'button',
    className,
    theme = DefaultTheme,
    size = DefaultSize,
    outline,
    active,
    disabled,
    block,
    ...restProps
  } = props;

  const classes = classNames(
    'button',

    {'button--primary': theme === 'primary'},
    {'button--secondary': theme === 'secondary'},
    {'button--success': theme === 'success'},
    {'button--info': theme === 'info'},
    {'button--warning': theme === 'warning'},
    {'button--danger': theme === 'danger'},
    {'button--link': theme === 'link'},

    {'button--sm': size === 'small'},
    {'button--lg': size === 'large'},

    {'button--outline': outline},
    {'button--active': active},
    {'button--block': block},
    {disabled},

    className,
  );

  return (
    <button {...restProps} disabled={disabled} type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
