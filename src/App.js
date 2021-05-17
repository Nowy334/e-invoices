import React, {useState, useEffect} from 'react';
import './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import SettingsPage from './components/SettingsPage/SettingsPage';
import InfoButton from './components/UI/InfoButton';
import CartResignation from './components/SettingsPage/EfactureResignation/CartResignation';

function App() {
  const[isToggled, setIsToggled] = useState(false);
  const[modalIsShow, setModalIsShown] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const isMobile = pageWidth <= 730;

  const updateWidthPage = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthPage);
    return () => window.removeEventListener("resize", updateWidthPage);
  })
  
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

  if(isMobile){
    return (
      <>
        <SettingsPage isToggled = {isToggled} onToggle = {onToggleHandler}/>
        <InfoButton/>
        {modalIsShow && <CartResignation onHideModalWhenNo ={hideModalWhenNoHandler} onHideModalWhenYes = {hideModalWhenYesHandler} isToggled={isToggled}/>}
      </>
    );
  }


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
