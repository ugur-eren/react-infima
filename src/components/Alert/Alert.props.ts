import PropTypes from 'prop-types';
import {Theme} from '../../Types';
import {Themes} from '../../Constants';
import CloseButton from './CloseButton/CloseButton';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: Theme;
}

export interface AlertSubComponents {
  CloseButton: typeof CloseButton;
}

export const AlertPropTypes: React.WeakValidationMap<AlertProps> = {
  theme: PropTypes.oneOf(Themes),
};
