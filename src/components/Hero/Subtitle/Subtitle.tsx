import classNames from 'classnames';
import {HeroSubtitleProps} from './Subtitle.props';

const Subtitle: React.FC<HeroSubtitleProps> = (props) => {
  const {children, className, ...restProps} = props;

  const classes = classNames('hero__subtitle', className);

  return (
    <p className={classes} {...restProps}>
      {children}
    </p>
  );
};

export default Subtitle;
