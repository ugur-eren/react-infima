import classNames from 'classnames';
import {HeroTitleProps} from './Title.props';

const Title: React.FC<HeroTitleProps> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('hero__title', className);

  return (
    <h1 className={classes} {...restProps}>
      {children}
    </h1>
  );
};

export default Title;
