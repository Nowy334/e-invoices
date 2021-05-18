import Cover from '../UI/Cover';
import sprite from '../../access/sprite.svg';
import classes from './MenuElements.module.scss';

const MenuElements = (props) => {

  const messageId = () => {
    props.click(props.id);
  }

  return (
    <Cover className={classes.menu}>
      <p className={classes.menu__text}>{props.content}</p>
      <button className={classes.menu__circle} onClick={messageId}>
        <svg className={classes.menu__svg}>
          <use href={sprite + '#icon-arrow_forward'}></use>
        </svg>
      </button>
    </Cover>
  );
}

export default MenuElements;