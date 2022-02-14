import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLParagraphElement>;

const Subtitle: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('hero__subtitle', className);

  return (
    <p className={classes} {...restProps}>
      {children}
    </p>
  );
};

export default Subtitle;
