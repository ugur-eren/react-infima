import classNames from 'classnames';
import {AvatarIntroProps, AvatarIntroPropTypes} from './Intro.props';

const Intro: React.FC<AvatarIntroProps> = (props) => {
  const {className, name, subtitle, nameClassName, subtitleClassName, ...restProps} = props;

  const introClasses = classNames('avatar__intro', className);
  const nameClasses = classNames('avatar__name', nameClassName);
  const subtitleClasses = classNames('avatar__subtitle', subtitleClassName);

  return (
    <div className={introClasses} {...restProps}>
      <div className={nameClasses}>{name}</div>

      {subtitle ? <small className={subtitleClasses}>{subtitle}</small> : null}
    </div>
  );
};

Intro.propTypes = AvatarIntroPropTypes;

export default Intro;
