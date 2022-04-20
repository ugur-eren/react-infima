import classNames from 'classnames';
import {ButtonGroupProps, ButtonGroupPropTypes} from './ButtonGroup.props';

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const {children, className, block, ...restProps} = props;

  const classes = classNames('button-group', {'button-group--block': block}, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = ButtonGroupPropTypes;

export default ButtonGroup;
