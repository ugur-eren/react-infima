import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  disabled?: boolean;
}

const Item: React.FC<Props> = (props) => {
  const {children, className, active, disabled, ...restProps} = props;

  const classes = classNames(
    'pagination__item',
    {'pagination__item--active': active},
    {disabled},

    className,
  );

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

export default Item;
