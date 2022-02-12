import React from 'react';
import classNames from 'classnames';
import CloseButton from './CloseButton';
import {DefaultTheme} from '../../Constants';
import {Theme} from '../../Types';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  theme?: Theme;
}

interface SubComponents {
  CloseButton: typeof CloseButton;
}

const Alert: React.FC<Props> & SubComponents = (props) => {
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

export default Alert;
