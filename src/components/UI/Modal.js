import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>
};

const ModalOverlay = props => {
  return <div className={classes.modal + ' ' + props.className}>
   {props.children}
  </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay className={props.className}>{props.children}</ModalOverlay>, portalElement)}
  </React.Fragment>
}

export default Modal;