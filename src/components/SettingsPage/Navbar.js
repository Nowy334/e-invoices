import classes from './Navbar.module.scss';
import sprite from '../../access/sprite.svg';

const Navbar = () => {
  return(
    <nav className={classes.navbar}>
      <h2 className={classes.navbar__title}>Ustawienia</h2>
      <div className={classes.navbar__content}>
        <select name="user" className={classes['navbar__content-select']}>
          <option value="Nicole Klejna">Nicole Klejna</option>
        </select>
        <div className={classes['navbar__content-bg']}>
          <svg className={classes['navbar__content-bg--svg']}>
            <use href={sprite + '#icon-bell'}></use>
          </svg>
        </div>
        <svg className={classes['navbar__content-bg--svg']}>
            <use href={sprite + '#icon-keyboard_arrow_down'}></use>
          </svg>
      </div>
    </nav>
  );
}

export default Navbar;