import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Image: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('card__image', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Image;
