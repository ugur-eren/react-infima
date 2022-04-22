import classNames from 'classnames';
import {WithoutChildren} from '../../Types';

interface Props extends WithoutChildren<React.InputHTMLAttributes<HTMLInputElement>> {
  containerClassName?: string;
}

const Search: React.FC<Props> = (props) => {
  const {className, containerClassName, ...restProps} = props;

  const containerClasses = classNames('navbar__search', containerClassName);
  const inputClasses = classNames('navbar__search-input', className);

  return (
    <div className={containerClasses}>
      <input className={inputClasses} {...restProps} />
    </div>
  );
};

export default Search;
