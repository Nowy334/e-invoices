import React from 'react';
import classes from './SettingsPageMobile.module.scss';
import Header from './Header';
import Menu from './Menu';

const data = ['Moje konto i dane płatnika', 'Zabezpieczenia', 'Powiadomienia', 'Zgody na komunikację marketingową', 'Regulaminy i licencje', 'Rezygnacja z e-faktury'];


const SettingsPageMobile = () => {
  return (
    <div className={classes.container}>
      <Header/>
      <Menu data = {data}/>
    </div>
  );
};

export default SettingsPageMobile;
