import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Body: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('card__body', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Body;
