import Cover from '../UI/Cover';
import sprite from '../../access/sprite.svg';
import classes from './MenuElements.module.scss';

const MenuElements = (props) => {
  return (
    <Cover className={classes.menu}>
      <p className={classes.menu__text}>{props.content}</p>
      <div className={classes.menu__circle}>
        <svg className={classes.menu__svg}>
          <use href={sprite + '#icon-arrow_forward'}></use>
        </svg>
      </div>
    </Cover>
  );
}

export default MenuElements;