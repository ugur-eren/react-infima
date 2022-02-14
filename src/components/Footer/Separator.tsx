import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLSpanElement>;

const Seperator: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('footer__link-separator', className);

  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

export default Seperator;
