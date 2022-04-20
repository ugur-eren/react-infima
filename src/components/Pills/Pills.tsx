import classNames from 'classnames';
import Item from './Item/Item';
import {PillsProps, PillsPropTypes, PillsSubComponents} from './Pills.props';

const Pills: React.FC<PillsProps> & PillsSubComponents = (props) => {
  const {children, className, block, ...restProps} = props;

  const classes = classNames('pills', {'pills--block': block}, className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

Pills.Item = Item;

Pills.propTypes = PillsPropTypes;

export default Pills;
