import classes from './MarketingCommunication.module.scss';
import Cover from '../../UI/Cover';
import sprite from '../../../access/sprite.svg';
import ToggleSwitch from '../../UI/ToggleSwitch';

const MarketingCommunication = (props) => {
  return (
    <Cover className = {props.className}>
      <div className={classes.container}>
        <svg className={classes['container-svg']}>
          <use href={sprite + '#icon-clipboard'}></use>
        </svg>
        <h3 className={classes['container-title']}>Zgody na komunikację marketingową</h3>
        <div className={classes.container__info}>
          <ToggleSwitch id={6}/>
          <p>Oświadczam, że zgadzam się na kontakt drogą telefoniczną (Opcjonalnie)</p>
          <svg className={classes['container__info-svg']}>
            <use href={sprite + '#icon-info_outline'}></use>
          </svg>
        </div>
        <div className={classes.container__info}>
          <ToggleSwitch id={7}/>
          <p>Oświadczam, że zgadzam się na kontakt drogą elektroniczną (Opcjonalnie)</p>
          <svg className={classes['container__info-svg']}>
            <use href={sprite + '#icon-info_outline'}></use>
          </svg>
        </div>
      </div>
    </Cover>
  );
}

export default MarketingCommunication;