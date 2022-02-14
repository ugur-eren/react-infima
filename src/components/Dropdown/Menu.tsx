import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLUListElement>;

const Menu: React.FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('dropdown__menu', className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

export default Menu;
