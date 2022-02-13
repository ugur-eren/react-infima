import React from 'react';
import classNames from 'classnames';
import Links from './Links';
import Link from './Link';
import Seperator from './Separator';
import Col from './Col';
import Items from './Items';
import Item from './Item';
import Logo from './Logo';
import Title from './Title';

interface Props extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
}

interface SubComponents {
  Links: typeof Links;
  Link: typeof Link;
  Seperator: typeof Seperator;
  Col: typeof Col;
  Items: typeof Items;
  Item: typeof Item;
  Title: typeof Title;
  Logo: typeof Logo;
}

const Footer: React.FC<Props> & SubComponents = (props) => {
  const {children, className, dark, ...restProps} = props;

  const classes = classNames('footer', {'footer--dark': dark}, className);

  return (
    <footer className={classes} {...restProps}>
      {children}
    </footer>
  );
};

Footer.Links = Links;
Footer.Link = Link;
Footer.Seperator = Seperator;
Footer.Col = Col;
Footer.Items = Items;
Footer.Item = Item;
Footer.Title = Title;
Footer.Logo = Logo;

export default Footer;
