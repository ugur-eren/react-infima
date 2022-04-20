import classNames from 'classnames';
import Title from './Title/Title';
import Subtitle from './Subtitle/Subtitle';
import {HeroProps, HeroPropTypes, HeroSubComponents} from './Hero.props';

const Hero: React.FC<HeroProps> & HeroSubComponents = (props) => {
  const {children, className, theme = 'default', ...restProps} = props;

  const classes = classNames(
    'hero',

    {'hero--dark': theme === 'dark'},
    {'hero--primary': theme === 'primary'},

    className,
  );

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Hero.Title = Title;
Hero.Subtitle = Subtitle;

Hero.propTypes = HeroPropTypes;

export default Hero;
