import React from 'react';
import classNames from 'classnames';
import Title from './Title';
import Subtitle from './Subtitle';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'default' | 'dark' | 'primary';
}

interface SubComponents {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
}

const Hero: React.FC<Props> & SubComponents = (props) => {
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

export default Hero;
