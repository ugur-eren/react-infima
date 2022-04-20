import PropTypes from 'prop-types';

export interface BreadcrumbsItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

export const BreadcrumbsItemPropTypes: React.WeakValidationMap<BreadcrumbsItemProps> = {
  active: PropTypes.bool,
};
