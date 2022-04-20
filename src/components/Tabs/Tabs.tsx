import classNames from 'classnames';
import Item from './Item/Item';
import {TabsProps, TabsPropTypes, TabsSubComponents} from './Tabs.props';

const Tabs: React.FC<TabsProps> & TabsSubComponents = (props) => {
  const {children, className, block, ...restProps} = props;

  const classes = classNames('tabs', {'tabs--block': block}, className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

Tabs.Item = Item;

Tabs.propTypes = TabsPropTypes;

export default Tabs;
