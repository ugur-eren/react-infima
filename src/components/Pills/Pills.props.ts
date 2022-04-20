import PropTypes from 'prop-types';
import Item from './Item/Item';

export interface PillsProps extends React.HTMLAttributes<HTMLUListElement> {
  block?: boolean;
}

export interface PillsSubComponents {
  Item: typeof Item;
}

export const PillsPropTypes: React.WeakValidationMap<PillsProps> = {
  block: PropTypes.bool,
};
