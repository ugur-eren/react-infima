import classNames from 'classnames';
import Item from './Item';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  block?: boolean;
}

interface SubComponents {
  Item: typeof Item;
}

const Pills: React.FC<Props> & SubComponents = (props) => {
  const {children, className, block, ...restProps} = props;

  const classes = classNames('pills', {'pills--block': block}, className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

Pills.Item = Item;

export default Pills;
