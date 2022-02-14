import classNames from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'previous' | 'next';
  label: string;
  sublabel?: string;
  linkClassName?: string;
  labelClassName?: string;
  sublabelClassName?: string;
}

const Item: React.VFC<Props> = (props) => {
  const {
    className,
    type = 'previous',
    label,
    sublabel,
    linkClassName,
    labelClassName,
    sublabelClassName,
    ...restProps
  } = props;

  const itemClasses = classNames(
    'pagination-nav__item',
    {'pagination-nav__item--next': type === 'next'},
    className,
  );
  const linkClasses = classNames('pagination-nav__link', linkClassName);
  const labelClasses = classNames('pagination-nav__label', labelClassName);
  const sublabelClasses = classNames('pagination-nav__sublabel', sublabelClassName);

  return (
    <div className={itemClasses}>
      <a className={linkClasses} {...restProps}>
        <div className={labelClasses}>{label}</div>

        {sublabel ? <div className={sublabelClasses}>{sublabel}</div> : null}
      </a>
    </div>
  );
};

export default Item;
