import classNames from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

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
