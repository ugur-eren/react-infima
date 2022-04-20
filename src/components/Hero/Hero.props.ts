import PropTypes from 'prop-types';
import Title from './Title/Title';
import Subtitle from './Subtitle/Subtitle';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'default' | 'dark' | 'primary';
}

export interface HeroSubComponents {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
}

export const HeroPropTypes: React.WeakValidationMap<HeroProps> = {
  theme: PropTypes.oneOf(['default', 'dark', 'primary']),
};
