import React from 'react';
import classNames from 'classnames';
import {Size} from '../../Types';
import {DefaultSize} from '../../Constants';

interface Props
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  size?: Size;
}

const Photo: React.VFC<Props> = (props) => {
  const {className, size = DefaultSize, ...restProps} = props;

  const classes = classNames(
    'avatar__photo',

    {'avatar__photo--sm': size === 'small'},
    {'avatar__photo--lg': size === 'large'},
    {'avatar__photo--xl': size === 'xlarge'},

    className,
  );

  return <img className={classes} {...restProps} />;
};

export default Photo;
