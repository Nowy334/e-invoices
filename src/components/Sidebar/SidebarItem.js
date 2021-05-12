import classes from './SidebarItem.module.scss';
import sprite from '../../access/sprite.svg';

const SidebarItem = (props) => {
  return (
    <li className={classes['list__item']}>
      <svg className={classes['list__item-svg']}>
        <use href={sprite + props.svg}></use>
      </svg>
      <a className={classes['list__item-link']} href="/#">{props.name}</a>
    </li>
  );
} 

export default SidebarItem;