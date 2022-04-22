import PropTypes from 'prop-types';
import {Sizes} from '../../../Constants';
import {Size, WithoutChildren} from '../../../Types';

export interface AvatarPhotoProps
  extends WithoutChildren<React.ImgHTMLAttributes<HTMLImageElement>> {
  size?: Size | 'xlarge';
}

export const AvatarPhotoPropTypes: React.WeakValidationMap<AvatarPhotoProps> = {
  size: PropTypes.oneOf([...Sizes, 'xlarge']),
};
