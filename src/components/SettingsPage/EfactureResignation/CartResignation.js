import classes from './CartResignation.module.scss';
import Cover from '../../UI/Cover';
import Modal from '../../UI/Modal';


const CartResignation = (props) => {

  let text;

  if(props.isToggled){
    text = <p className = {classes['container__info-text']}>Czy napewno chcesz zrezygnowac z e-faktury?</p>
  }else {
    text = <p className = {classes['container__info-text']}>Czy chcesz na nowo zacząć korzystać z e-faktury?</p>
  }

  return (
    <Modal className={classes.container}>
      <Cover className = {classes.container__info}>
        {text}
        <div className = {classes['container__info-button']}>
          <button onClick = {props.onHideModalWhenYes}>Tak</button>
          <button onClick = {props.onHideModalWhenNo}>Nie</button>
        </div>
      </Cover>
    </Modal>
  );
}

export default CartResignation;