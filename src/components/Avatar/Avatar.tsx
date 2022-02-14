import classNames from 'classnames';
import Photo from './Photo';
import Intro from './Intro';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
}

interface SubComponents {
  Photo: typeof Photo;
  Intro: typeof Intro;
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

export default Avatar;
