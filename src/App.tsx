import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { ThemeContext } from './ThemeProvider';


const App = () => {
  const { theme, mode, setMode } = React.useContext(ThemeContext);
  
  return (
      <div className={`app ${theme}`}>
        <Header />
        <Main />
      </div>
  );
}

export default App
