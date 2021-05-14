import classes from './InfoButton.module.scss';
import sprite from '../../access/sprite.svg';

const InfoButton = () => {
  return(
  <div className={classes['button']}>
    <svg className={classes['button__svg']}> 
      <use href={sprite + '#icon-address-book'}></use>
    </svg>
  </div>);
}

export default InfoButton;