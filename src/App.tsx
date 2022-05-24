import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { ThemeContext } from './ThemeProvider';


const App = () => {
  const { theme } = React.useContext(ThemeContext);
  
  return (
      <div className={`app ${theme}`}>
        <Header />
        <Main />
      </div>
  );
}

export default App
