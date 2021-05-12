import React from 'react';
import './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import SettingsPage from './components/SettingsPage/SettingsPage';

function App() {
  return (
    <>
      <Sidebar/>
      <SettingsPage/>
    </>
  );
}

export default App;
