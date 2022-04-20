import PropTypes from 'prop-types';

export interface PaginationItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  disabled?: boolean;
}

export const PaginationItemPropTypes: React.WeakValidationMap<PaginationItemProps> = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};
