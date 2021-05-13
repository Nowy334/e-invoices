import classes from './SettingsPage.module.scss';
import Navbar from './Navbar';
import PersonalInformation from './SettingsPageElements/PersonalInformation';
import ContractData from './SettingsPageElements/ContractData';

const SettingsPage = () => {
  return(
    <main className={classes.main}>
      <Navbar/>
      <div className={classes.main__container}>
        <PersonalInformation className={classes['main__container-1']}/>
        <ContractData className={classes['main__container-2']}/>
      </div>
    </main>
  );
}

export default SettingsPage;