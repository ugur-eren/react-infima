import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'previous' | 'next';
}

const Item: React.FC<Props> = (props) => {
  const {children, className, type = 'previous', ...restProps} = props;

  const classes = classNames(
    'pagination-nav__item',
    {'pagination-nav__item--next': type === 'next'},
    className,
  );

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Item;
