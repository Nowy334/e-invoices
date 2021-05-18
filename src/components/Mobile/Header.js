import sprite from '../../access/sprite.svg';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <a className={classes['header__href']} href="/#">
        <svg className={classes['header__back']}>
          <use href={sprite + '#icon-arrow_back'}></use>
        </svg>
      </a>
      <div className={classes['header__background']}></div>
      <h2 className={classes.header__title}>Ustawienia</h2>
      <div className={classes.header__container}>
        <svg className={classes['header__container-svg']}>
          <use href={sprite + '#icon-user'}></use>
        </svg>
      </div>
      <p className={classes.header__text}>Firma testowa 1505</p>
    </header>
  );
}

export default Header;