import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('footer__title', className);

  return (
    <h4 className={classes} {...restProps}>
      {children}
    </h4>
  );
};

export default Title;
