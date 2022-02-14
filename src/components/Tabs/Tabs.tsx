import classNames from 'classnames';
import Item from './Item';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  block?: boolean;
}

interface SubComponents {
  Item: typeof Item;
}

const Tabs: React.FC<Props> & SubComponents = (props) => {
  const {children, className, block, ...restProps} = props;

  const classes = classNames('tabs', {'tabs--block': block}, className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

Tabs.Item = Item;

export default Tabs;
