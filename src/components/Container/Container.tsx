import classNames from 'classnames';
import {ContainerProps, ContainerPropTypes} from './Container.props';

const Container: React.FC<ContainerProps> = (props) => {
  const {children, className, fluid, ...restProps} = props;

  const classes = classNames('container', {'container--fluid': fluid}, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Container.propTypes = ContainerPropTypes;

export default Container;
