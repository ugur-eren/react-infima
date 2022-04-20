import PropTypes from 'prop-types';

export interface AvatarIntroProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode;
  subtitle?: React.ReactNode;
  nameClassName?: string;
  subtitleClassName?: string;
}

export const AvatarIntroPropTypes: React.WeakValidationMap<AvatarIntroProps> = {
  name: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  nameClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
};
