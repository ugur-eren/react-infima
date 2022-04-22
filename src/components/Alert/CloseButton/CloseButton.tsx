import classNames from 'classnames';
import {AlertCloseButtonProps} from './CloseButton.props';

const CloseButton: React.FC<AlertCloseButtonProps> = (props) => {
  const {className, ...restProps} = props;

  const classes = classNames('clean-btn', 'close', className);

  return (
    <button type="button" className={classes} {...restProps}>
      <span aria-hidden="true">×</span>
    </button>
  );
};

export default CloseButton;
