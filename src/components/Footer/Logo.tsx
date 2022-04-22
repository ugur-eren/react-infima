import classNames from 'classnames';
import {WithoutChildren} from '../../Types';

type Props = WithoutChildren<React.ImgHTMLAttributes<HTMLImageElement>>;

const Logo: React.FC<Props> = (props) => {
  const {className, ...restProps} = props;

  const classes = classNames('footer__logo', className);

  return <img className={classes} {...restProps} />;
};

export default Logo;
