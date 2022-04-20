import PropTypes from 'prop-types';
import {Sizes, Themes} from '../../Constants';
import {Size, Theme} from '../../Types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme | 'link';
  size?: Size;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
}

export const ButtonPropTypes: React.WeakValidationMap<ButtonProps> = {
  theme: PropTypes.oneOf([...Themes, 'link']),
  size: PropTypes.oneOf(Sizes),
  outline: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};
