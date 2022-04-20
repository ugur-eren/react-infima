import PropTypes from 'prop-types';
import Item from './Item/Item';

export interface TabsProps extends React.HTMLAttributes<HTMLUListElement> {
  block?: boolean;
}

export interface TabsSubComponents {
  Item: typeof Item;
}

export const TabsPropTypes: React.WeakValidationMap<TabsProps> = {
  block: PropTypes.bool,
};
