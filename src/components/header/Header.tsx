import React from 'react';
import { ThemeContext } from '../../ThemeProvider';
import DarkModeToggler from '../dark-mode-toggler/DarkModeToggler';
import './Header.css'

const Header = () => {
    const { theme, setMode } = React.useContext(ThemeContext);

    return (
        <header>
            <h1>Where in the world?</h1>
            <DarkModeToggler 
                theme={theme}
                setMode={setMode}
            />
        </header>
    )
}

export default Header