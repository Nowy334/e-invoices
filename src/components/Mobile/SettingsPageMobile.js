import React, {useState} from 'react';
import classes from './SettingsPageMobile.module.scss';
import Header from './Header';
import Menu from './Menu';
import PersonalInformation from '../SettingsPage/SettingsPageElements/PersonalInformation';
import ContractData from '../SettingsPage/SettingsPageElements/ContractData';
import EmailNotifications from '../SettingsPage/SettingsPageElements/EmailNotifications';
import MarketingCommunication from '../SettingsPage/SettingsPageElements/MarketingCommunication';
import Documents from '../SettingsPage/SettingsPageElements/Documents';
import Facture from '../SettingsPage/EfactureResignation/Facture';

const data = ['Moje konto i dane płatnika', 'Zabezpieczenia', 'Powiadomienia', 'Zgody na komunikację marketingową', 'Regulaminy i licencje', 'Rezygnacja z e-faktury'];

const SettingsPageMobile = (props) => {
  const [idComponent, setIdComponent] = useState();

 const handleButton = (id) => {
  setIdComponent(id);
 }

 switch(idComponent){
  case 0:
    return(
      <div className={classes.component}>
        <button className={classes.component__button} onClick={handleButton.bind()}>X</button>
        <PersonalInformation className={classes.component}/>
      </div>
    );
  case 1:
    return(
      <div className={classes.component}>
        <button className={classes.component__button} onClick={handleButton.bind()}>X</button>
        <ContractData className={classes.component}/>
      </div>
    );
  case 2:
    return(
      <div className={classes.component}>
        <button className={classes.component__button} onClick={handleButton.bind()}>X</button>
        <EmailNotifications className={classes.component}/>
      </div>
    );
  case 3:
    return(
      <div className={classes.component}>
        <button className={classes.component__button} onClick={handleButton.bind()}>X</button>
        <MarketingCommunication className={classes.component}/>
      </div>
      );
  case 4:
    return(
      <div className={classes.component}>
        <button className={classes.component__button} onClick={handleButton.bind()}>X</button>
        <Documents className={classes.component}/>
      </div>
      );
  case 5:
    return(
      <div className={classes.component}>
        <button className={classes.component__button} onClick={handleButton.bind()}>X</button>
        <Facture className={classes.component} isToggled ={props.isToggled} onToggle={props.onToggle}/>
       </div>
       );
    default:
 }

  return (
    <div className={classes.container}>
      <Header/>
      <Menu data = {data} click={handleButton}/>
    </div>
  );
};

export default SettingsPageMobile;
