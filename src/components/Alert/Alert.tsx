import classNames from 'classnames';
import CloseButton from './CloseButton/CloseButton';
import {DefaultTheme} from '../../Constants';
import {AlertProps, AlertPropTypes, AlertSubComponents} from './Alert.props';

const Alert: React.FC<AlertProps> & AlertSubComponents = (props) => {
  const {children, className, theme = DefaultTheme, ...restProps} = props;

  const classes = classNames(
    'alert',

    {'alert--primary': theme === 'primary'},
    {'alert--secondary': theme === 'secondary'},
    {'alert--success': theme === 'success'},
    {'alert--info': theme === 'info'},
    {'alert--warning': theme === 'warning'},
    {'alert--danger': theme === 'danger'},

    className,
  );

  return (
    <div className={classes} role="alert" {...restProps}>
      {children}
    </div>
  );
};

Alert.CloseButton = CloseButton;

Alert.propTypes = AlertPropTypes;

export default Alert;
