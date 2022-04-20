import PropTypes from 'prop-types';
import {Sizes} from '../../../Constants';
import {Size} from '../../../Types';

export interface AvatarPhotoProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    React.HTMLAttributes<HTMLImageElement> {
  size?: Size | 'xlarge';
}

export const AvatarPhotoPropTypes: React.WeakValidationMap<AvatarPhotoProps> = {
  size: PropTypes.oneOf([...Sizes, 'xlarge']),
};
