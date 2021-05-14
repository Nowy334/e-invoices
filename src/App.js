import React from 'react';
import './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import SettingsPage from './components/SettingsPage/SettingsPage';
import InfoButton from './components/UI/InfoButton';

function App() {
  return (
    <>
      <Sidebar/>
      <SettingsPage/>
      <InfoButton/>
    </>
  );
}

export default App;
