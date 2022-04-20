import PropTypes from 'prop-types';
import {Sizes} from '../../Constants';
import {Size} from '../../Types';
import Item from './Item/Item';
import Link from './Link/Link';

export interface PaginationProps extends React.HTMLAttributes<HTMLUListElement> {
  size?: Size;
}

export interface PaginationSubComponents {
  Item: typeof Item;
  Link: typeof Link;
}

export const PaginationPropTypes: React.WeakValidationMap<PaginationProps> = {
  size: PropTypes.oneOf(Sizes),
};
