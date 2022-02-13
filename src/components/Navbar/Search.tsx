import React from 'react';
import classNames from 'classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const Search: React.VFC<Props> = (props) => {
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
