import PropTypes from 'prop-types';
import Intro from './Intro/Intro';
import Photo from './Photo/Photo';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
}

export interface AvatarSubComponents {
  Photo: typeof Photo;
  Intro: typeof Intro;
}

export const AvatarPropTypes: React.WeakValidationMap<AvatarProps> = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};
