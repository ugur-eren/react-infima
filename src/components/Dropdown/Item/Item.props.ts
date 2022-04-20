import PropTypes from 'prop-types';

export interface DropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkClassName?: string;
}

export const DropdownItemPropTypes: React.WeakValidationMap<DropdownItemProps> = {
  linkClassName: PropTypes.string,
};
