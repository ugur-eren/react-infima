import PropTypes from 'prop-types';
import {Theme} from '../../Types';
import {Themes} from '../../Constants';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  theme?: Theme;
}

export const BadgePropTypes: React.WeakValidationMap<BadgeProps> = {
  theme: PropTypes.oneOf(Themes),
};
