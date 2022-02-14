import classNames from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkClassName?: string;
}

const Item: React.FC<Props> = (props) => {
  const {children, className, linkClassName, ...restProps} = props;

  const itemClasses = classNames(className);
  const linkClasses = classNames('dropdown__link', linkClassName);

  return (
    <li className={itemClasses}>
      <a className={linkClasses} {...restProps}>
        {children}
      </a>
    </li>
  );
};

export default Item;
