import classNames from 'classnames';
import Logo from './Logo';
import Title from './Title';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface SubComponents {
  Logo: typeof Logo;
  Title: typeof Title;
}

const Brand: React.FC<Props> & SubComponents = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('navbar__brand', className);

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

Brand.Logo = Logo;
Brand.Title = Title;

export default Brand;
