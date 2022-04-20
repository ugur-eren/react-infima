import PropTypes from 'prop-types';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export const ContainerPropTypes: React.WeakValidationMap<ContainerProps> = {
  fluid: PropTypes.bool,
};
