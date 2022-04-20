import Item from './Item/Item';

export type PaginationNavProps = React.HTMLAttributes<HTMLElement>;

export interface PaginationNavSubComponents {
  Item: typeof Item;
}
