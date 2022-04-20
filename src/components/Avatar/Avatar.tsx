import classNames from 'classnames';
import Photo from './Photo/Photo';
import Intro from './Intro/Intro';
import {AvatarProps, AvatarPropTypes, AvatarSubComponents} from './Avatar.props';

const Avatar: React.FC<AvatarProps> & AvatarSubComponents = (props) => {
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

Avatar.propTypes = AvatarPropTypes;

export default Avatar;
