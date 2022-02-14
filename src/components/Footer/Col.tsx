import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Col: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('col', 'footer__col', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Col;
