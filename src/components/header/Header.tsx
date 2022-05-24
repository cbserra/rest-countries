import React from 'react';
import { ThemeContext } from '../../ThemeProvider';
import './Header.css'

const Header = () => {
    const { theme, mode, setMode } = React.useContext(ThemeContext);
    console.log(theme)
    console.log(mode)
    const showOnHover = (event: any) => {
        const darkModeEl = document.getElementsByClassName('dark-mode')[0]
        const lightModeEl = document.getElementsByClassName('light-mode')[0]
        const systemModeEl = document.getElementsByClassName('system-mode')[0]

        // darkModeEl.classList.
    }


    return (
        <header>
            <h1>Where in the world?</h1>
            <div className="dark-light-toggle">
                <span className={`dark-mode`} onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                    <i className={`${mode === 'dark' ? 'fa-solid' : 'fa-regular'} fa-moon`}></i>
                    Dark Mode
                </span>
                {/* <span className={`light-mode ${mode === 'light' ? 'show' : 'hide'}`} onClick={() => setMode("light")}>
                    <i className="fa-regular fa-moon"></i>
                    Light Mode
                </span>
                <span className={`system-mode ${mode === 'system' ? 'show' : 'hide'}`} onClick={() => setMode("system")}>
                    <i className="fa-solid fa-computer"></i>
                    System Setting
                </span> */}
            </div>
        </header>
    )
}

export default Header