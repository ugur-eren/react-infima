import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right';
}

const Items: React.FC<Props> = (props) => {
  const {children, className, align = 'left', ...restProps} = props;

  const classes = classNames(
    'navbar__items',

    {'navbar__items--center': align === 'center'},
    {'navbar__items--right': align === 'right'},

    className,
  );

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Items;
