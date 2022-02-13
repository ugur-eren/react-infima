import React from 'react';
import classNames from 'classnames';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & React.HTMLAttributes<HTMLImageElement>;

const Logo: React.VFC<Props> = (props) => {
  const {className, ...restProps} = props;

  const classes = classNames('footer__logo', className);

  return <img className={classes} {...restProps} />;
};

export default Logo;
