
import { Mode, Theme } from '../../ThemeProvider'
import './DarkModeToggler.css'

const DarkModeToggler = (props: {mode: Mode, theme: Theme, setMode: (mode: Mode) => void }) => {
    const mode = props.mode
    const theme = props.theme
    const setMode = props.setMode

    return (
        <div className="dark-light-toggle">
                <span className={`dark-mode`} onClick={() => setMode(theme === 'dark' ? 'light' : 'dark')}>
                    <i className={`${theme === 'dark' ? 'fa-solid' : 'fa-regular'} fa-moon`}></i>
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
    )
}

export default DarkModeToggler
