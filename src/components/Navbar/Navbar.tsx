import React from 'react';
import classNames from 'classnames';
import Brand from './Brand/Brand';
import Items from './Items';
import Link from './Link';
import Search from './Search';

interface Props extends React.HTMLAttributes<HTMLElement> {
  innerClassName?: string;
  theme?: 'default' | 'dark' | 'primary';
}

interface SubComponents {
  Brand: typeof Brand;
  Items: typeof Items;
  Link: typeof Link;
  Search: typeof Search;
}

const Navbar: React.FC<Props> & SubComponents = (props) => {
  const {children, className, innerClassName, theme = 'default', ...restProps} = props;

  const navClasses = classNames(
    'navbar',

    {'navbar--dark': theme === 'dark'},
    {'navbar--primary': theme === 'primary'},

    className,
  );
  const innerClasses = classNames('navbar_inner', innerClassName);

  return (
    <nav className={navClasses} {...restProps}>
      <div className={innerClasses}>{children}</div>
    </nav>
  );
};

Navbar.Brand = Brand;
Navbar.Items = Items;
Navbar.Link = Link;
Navbar.Search = Search;

export default Navbar;
