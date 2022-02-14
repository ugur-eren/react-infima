import classNames from 'classnames';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

type Props = React.HTMLAttributes<HTMLDivElement>;

interface SubComponents {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  Image: typeof Image;
}

const Card: React.FC<Props> & SubComponents = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('card', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Image = Image;

export default Card;
