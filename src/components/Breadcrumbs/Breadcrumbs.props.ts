import PropTypes from 'prop-types';
import {Sizes} from '../../Constants';
import {Size} from '../../Types';
import Item from './Item/Item';
import Link from './Link/Link';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLUListElement> {
  size?: Size;
}

export interface BreadcrumbsSubComponents {
  Item: typeof Item;
  Link: typeof Link;
}

export const BreadcrumbsPropTypes: React.WeakValidationMap<BreadcrumbsProps> = {
  size: PropTypes.oneOf(Sizes),
};
