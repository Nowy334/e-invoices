import React, {useState} from 'react';
import './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import SettingsPage from './components/SettingsPage/SettingsPage';
import InfoButton from './components/UI/InfoButton';
import CartResignation from './components/SettingsPage/EfactureResignation/CartResignation';

function App() {
  const[isToggled, setIsToggled] = useState(false);
  const[modalIsShow, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalWhenNoHandler = () => {
    if(isToggled){
      setIsToggled(false)
    }else{
      setIsToggled(true);
    }
    setModalIsShown(false);

  };

  const hideModalWhenYesHandler = () => {
    if(isToggled){
      setIsToggled(true);
    }else{
      setIsToggled(false);
    }
    setModalIsShown(false);
  };

  const onToggleHandler = () => {
    setIsToggled(!isToggled);
    showModalHandler(true);
  };


  return (
    <>
      <Sidebar/>
      <SettingsPage isToggled = {isToggled} onToggle = {onToggleHandler}/>
      <InfoButton/>
      {modalIsShow && <CartResignation onHideModalWhenNo ={hideModalWhenNoHandler} onHideModalWhenYes = {hideModalWhenYesHandler} isToggled={isToggled}/>}
    </>
  );
}

export default App;
