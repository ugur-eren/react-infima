import classNames from 'classnames';
import {Theme} from '../../Types';
import {DefaultTheme} from '../../Constants';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  theme?: Theme;
}

const Badge: React.FC<Props> = (props) => {
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

export default Badge;
