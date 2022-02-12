import React from 'react';
import classNames from 'classnames';
import Photo from './Photo';
import Intro from './Intro';
import Name from './Name';
import Subtitle from './Subtitle';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
}

interface SubComponents {
  Photo: typeof Photo;
  Intro: typeof Intro;
  Name: typeof Name;
  Subtitle: typeof Subtitle;
}

const Avatar: React.FC<Props> & SubComponents = (props) => {
  const {children, className, direction = 'horizontal', ...restProps} = props;

  const classes = classNames('avatar', {'avatar--vertical': direction === 'vertical'}, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Avatar.Photo = Photo;
Avatar.Intro = Intro;
Avatar.Name = Name;
Avatar.Subtitle = Subtitle;

export default Avatar;
