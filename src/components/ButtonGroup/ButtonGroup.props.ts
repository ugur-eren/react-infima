import PropTypes from 'prop-types';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
}

export const ButtonGroupPropTypes: React.WeakValidationMap<ButtonGroupProps> = {
  block: PropTypes.bool,
};
