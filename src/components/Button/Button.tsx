import classNames from 'classnames';
import {DefaultSize, DefaultTheme} from '../../Constants';
import {ButtonProps, ButtonPropTypes} from './Button.props';

const Button: React.FC<ButtonProps> = (props) => {
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

    `button--${theme}`,

    {
      'button--sm': size === 'small',
      'button--lg': size === 'large',
    },

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

Button.propTypes = ButtonPropTypes;

export default Button;
