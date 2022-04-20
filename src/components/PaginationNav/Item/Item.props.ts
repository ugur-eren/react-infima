import PropTypes from 'prop-types';

export interface PaginationNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'previous' | 'next';
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  linkClassName?: string;
  labelClassName?: string;
  sublabelClassName?: string;
}

export const PaginationNavItemPropTypes: React.WeakValidationMap<PaginationNavItemProps> = {
  type: PropTypes.oneOf(['previous', 'next']),
  label: PropTypes.node,
  sublabel: PropTypes.node,
  linkClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  sublabelClassName: PropTypes.string,
};
