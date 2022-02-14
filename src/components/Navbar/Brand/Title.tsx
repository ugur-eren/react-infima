import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLElement>;

const Title: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('navbar__title', className);

  return (
    <b className={classes} {...restProps}>
      {children}
    </b>
  );
};

export default Title;
