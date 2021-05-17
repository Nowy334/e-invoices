import classes from './Documents.module.scss';
import Cover from '../../UI/Cover';
import sprite from '../../../access/sprite.svg';

const Documents = (props) => {
  return(
    <Cover className = {props.className}>
      <div className={classes.container}>
        <div className={classes.container__header}>
          <svg className={classes['container__header-svg']}>
            <use href={sprite + '#icon-files'}></use>
          </svg>
          <h3 className={classes['container__header-title']}>Dokumenty</h3>
        </div>
        <ul className={classes.container__list}>
          <li className={classes['container__list-link']}><a href="/#">Regulamin</a></li>
          <li className={classes['container__list-link']}><a href="/#">Polityka prywatności</a></li>
          <li className={classes['container__list-link']}><a href="/#">FAQ</a></li>
          <li className={classes['container__list-link']}><a href="/#">Polityka cookies</a></li>
        </ul>
      </div>
    </Cover>
  );
}

export default Documents;