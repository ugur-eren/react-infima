import PropTypes from 'prop-types';

export interface PillsItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

export const PillsItemPropTypes: React.WeakValidationMap<PillsItemProps> = {
  active: PropTypes.bool,
};
