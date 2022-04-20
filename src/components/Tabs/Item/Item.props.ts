import PropTypes from 'prop-types';

export interface TabsItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

export const TabsItemPropTypes: React.WeakValidationMap<TabsItemProps> = {
  active: PropTypes.bool,
};
