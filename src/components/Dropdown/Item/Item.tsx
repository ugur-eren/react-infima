import classNames from 'classnames';
import {DropdownItemProps, DropdownItemPropTypes} from './Item.props';

const Item: React.FC<DropdownItemProps> = (props) => {
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

Item.propTypes = DropdownItemPropTypes;

export default Item;
