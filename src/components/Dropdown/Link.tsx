import classNames from 'classnames';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('dropdown__link', className);

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
