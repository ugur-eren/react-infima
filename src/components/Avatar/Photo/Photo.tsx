import classNames from 'classnames';
import {DefaultSize} from '../../../Constants';
import {AvatarPhotoProps, AvatarPhotoPropTypes} from './Photo.props';

const Photo: React.FC<AvatarPhotoProps> = (props) => {
  const {className, size = DefaultSize, ...restProps} = props;

  const classes = classNames(
    'avatar__photo',

    {'avatar__photo--sm': size === 'small'},
    {'avatar__photo--lg': size === 'large'},
    {'avatar__photo--xl': size === 'xlarge'},

    className,
  );

  return <img className={classes} {...restProps} />;
};

Photo.propTypes = AvatarPhotoPropTypes;

export default Photo;
