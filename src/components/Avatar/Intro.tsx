import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  subtitle?: string;
  nameClassName?: string;
  subtitleClassName?: string;
}

const Intro: React.VFC<Props> = (props) => {
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

export default Intro;
