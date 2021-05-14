import classes from './SidebarItem.module.scss';
import sprite from '../../access/sprite.svg';

const SidebarItem = (props) => {

  const active = props.id === 4 ? classes.active : '';

  return (
    <li className={classes.list__item}>
      <svg className={`${classes[`list__item-svg`]} ${active}`}>
        <use href={sprite + props.svg}></use>
      </svg>
      <a className={`${classes[`list__item-link`]} ${active}`} href="/#">{props.name}</a>
    </li>
  );
} 

export default SidebarItem;