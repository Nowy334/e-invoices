import React, {useState, useEffect, useCallback} from 'react';
import './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import SettingsPage from './components/SettingsPage/SettingsPage';
import InfoButton from './components/UI/InfoButton';
import CartResignation from './components/SettingsPage/EfactureResignation/CartResignation';
import SettingsPageMobile from './components/Mobile/SettingsPageMobile';

function App() {
  const[isToggled, setIsToggled] = useState(false);
  const[modalIsShow, setModalIsShown] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [service, setService] = useState(false);


  const fetchServiceHandler = useCallback(async() => {

    try{
      const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json');

      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const hundredthPart = data.rates[0].mid.toString();

      if(+hundredthPart[4] % 2 === 0){
        setService(true);
      }else{
        setService(false);
      }

      if(service){
        console.log('the service is active');
      }else {
        console.log('the service is not active');
      }
      
    }catch(error){
      console.log(error.message)
    }
  }, [service]);

  useEffect(() => {
    if(modalIsShow){
      fetchServiceHandler();
    }
  }, [modalIsShow, fetchServiceHandler]);

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
        <SettingsPageMobile isToggled = {isToggled} onToggle = {onToggleHandler}/>
        {modalIsShow && <CartResignation onHideModalWhenNo ={hideModalWhenNoHandler} onHideModalWhenYes = {hideModalWhenYesHandler} isToggled={isToggled}/>}
      </>
    );
  }

  //http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json


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
