import classes from './Facture.module.scss';
import sprite from '../../../access/sprite.svg';
import Cover from '../../UI/Cover';
import ToggleSwitch from '../../UI/ToggleSwitch';

const Facture = (props) => {

  return(
    <Cover className = {props.className}>
      <div className={classes.container}>
        <svg className={classes['container-svg']}>
          <use href={sprite + '#icon-file'}></use>
        </svg>
        <h3 className={classes['container-title']}>Rezygnacja z e-faktury</h3>
        <div className={classes.container__info}>
          <ToggleSwitch id={8} isToggled ={props.isToggled} onToggle={props.onToggle}/>
          <p>Rezygnacja z e-faktury</p>
          <svg className={classes['container__info-svg']}>
            <use href={sprite + '#icon-info_outline'}></use>
          </svg>
        </div>
      </div>
    </Cover>
  );

}

export default Facture;