import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { useTheme } from './utils/ThemeProvider';


const App = () => {
  const { theme } = useTheme()
  
  return (
      <div className={`app ${theme}`}>
        <Header />
        <Main />
      </div>
  );
}

export default App
