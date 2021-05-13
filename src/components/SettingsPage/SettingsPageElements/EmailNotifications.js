import classes from './EmailNotifications.module.scss';
import sprite from '../../../access/sprite.svg';
import Cover from '../../UI/Cover';
import ToggleSwitch from '../../UI/ToggleSwitch';



const EmailNotifications = (props) => {

  return(
    <Cover className = {props.className}>
      <div className={classes.container}>
        <svg className={classes['container-svg']}>
          <use href={sprite + '#icon-email'}></use>
        </svg>
        <h3 className={classes['container-title']}>Powiadomienia E-mail</h3>
        <div className={classes.container__info}>
          <ToggleSwitch id={1}/>
          <p>Powiadomienie o nowej wiadomości</p>
        </div>
        <div className={classes.container__info}>
          <ToggleSwitch id={2}/>
          <p>Powiadomienie o nowej fakturze</p>
        </div>
        <div className={classes.container__info}>
          <ToggleSwitch id={3}/>
          <p>Powiadomienie o zbliżającym się terminie płatności</p>
        </div>
        <div className={classes.container__info}>
          <ToggleSwitch id={4}/>
          <p>Powiadomienie o upływie terminu płatności</p>
        </div>
        <div className={classes.container__info}>
          <ToggleSwitch id={5}/>
          <p>Powiadomienie o zaległościach</p>
        </div>
        
      </div>
    </Cover>
  );
}

export default EmailNotifications;