import Cover from '../../UI/Cover';
import classes from './ContractData.module.scss';
import sprite from '../../../access/sprite.svg';

const ContractData = (props) => {
  return(
    <Cover className = {props.className}>
      <div className={classes.container}>
        <div className={classes.container__header}>
          <div>
            <svg className={classes['container__header-svg']}>
              <use href={sprite + '#icon-files'}></use>
            </svg>
            <h3 className={classes['container__header-title']}>Dane umowy</h3>
          </div>
          <p className={classes['container__header-content']}>
          <span className={classes['container__header-content-2']}>Punkt poboru:</span> PLPOLD10801300001211</p>
        </div>
        <div className={classes.container__data}>
          <div>
            <div className={classes['info-box']}> 
              <h4>Adres punktu poboru</h4>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-info_outline'}></use>
              </svg>
            </div>
            <p>ul. Ustronna 57 m. 79</p>
            <p>4-773 Warszawa</p>
          </div>
          <div>
            <div className={classes['info-box']}>
              <h4>Adres do wysyłki faktur</h4>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-info_outline'}></use>
              </svg>
            </div>
            <span className={classes['info-box']}>
              <p>ul. Mariacka 86 m. 70</p>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-create'}></use>
              </svg>
            </span>
            <p>98-765 Warszawa</p>
          </div>
        </div>
        <div className={classes.container__data}>
          <div className={classes['add-info']}>
            <div className={classes['info-box']}>
              <h4>E-mail do e-faktur</h4>
              <svg className={classes['info-box-svg']}>
                <use href={sprite + '#icon-info_outline'}></use>
              </svg>
            </div>
            <span className={classes['info-box']}>
              <p><a href="mailto:test.test@euvic.pl">test.test@euvic.pl</a></p>
              <svg className={classes['info-box-svg']}>
              <use href={sprite + '#icon-create'}></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Cover>
  );
}

export default ContractData;