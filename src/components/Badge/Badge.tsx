import classNames from 'classnames';
import {DefaultTheme} from '../../Constants';
import {BadgeProps, BadgePropTypes} from './Badge.props';

const Badge: React.FC<BadgeProps> = (props) => {
  const {children, className, theme = DefaultTheme, ...restProps} = props;

  const classes = classNames(
    'badge',

    {'badge--primary': theme === 'primary'},
    {'badge--secondary': theme === 'secondary'},
    {'badge--success': theme === 'success'},
    {'badge--info': theme === 'info'},
    {'badge--warning': theme === 'warning'},
    {'badge--danger': theme === 'danger'},

    className,
  );

  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

Badge.propTypes = BadgePropTypes;

export default Badge;
