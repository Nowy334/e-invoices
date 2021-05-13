import Cover from '../../UI/Cover';
import classes from './PersonalInformation.module.scss';
import sprite from '../../../access/sprite.svg';

const PersonalInformation = (props) => {
  return (
    <Cover className = {props.className}>
      <div className={classes.container}>
        <div className={classes.container__header}>
          <svg className={classes['container__header-svg']}>
            <use href={sprite + '#icon-address-book'}></use>
          </svg>
          <h3 className={classes['container__header-title']}>Dane personalne</h3>
        </div>
        <div className={classes.container__data}>
          <div>
            <div className={classes['info-box']}> 
              <h4>Adres podstawowy</h4>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-info_outline'}></use>
              </svg>
            </div>
            <span className={classes['info-box']} >
              <p>ul. Mariacka 0 m. 9</p>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-create'}></use>
              </svg>
            </span>
            <p>7-991 Warszawa</p>
          </div>
          <div>
            <div className={classes['info-box']}>
              <h4>Adres korespondencyjny</h4>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-info_outline'}></use>
              </svg>
            </div>
            <span className={classes['info-box']}>
              <p>ul. Ustronna 24 m. 76</p>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-create'}></use>
              </svg>
            </span>
            <p>5-197 Warszawa</p>
          </div>
        </div>
      </div>
    </Cover>
  );
}

export default PersonalInformation;