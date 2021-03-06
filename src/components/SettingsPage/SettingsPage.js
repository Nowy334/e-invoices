import classes from './SettingsPage.module.scss';
import Navbar from './Navbar';
import PersonalInformation from './SettingsPageElements/PersonalInformation';
import ContractData from './SettingsPageElements/ContractData';
import EmailNotifications from './SettingsPageElements/EmailNotifications';
import MarketingCommunication from './SettingsPageElements/MarketingCommunication';
import Documents from './SettingsPageElements/Documents';
import Facture from './EfactureResignation/Facture';

const SettingsPage = (props) => {

  return(
    <main className={classes.main}>
      <Navbar/>
      <div className={classes.main__container}>
        <PersonalInformation className={classes['main__container-1']}/>
        <ContractData className={classes['main__container-2']}/>
        <EmailNotifications className={classes['main__container-3']}/>
        <MarketingCommunication className={classes['main__container-4']}/>
        <Documents className={classes['main__container-5']}/>
        <Facture className={classes['main__container-6']} isToggled ={props.isToggled} onToggle={props.onToggle}/>
      </div>
    </main>
  );
}

export default SettingsPage;