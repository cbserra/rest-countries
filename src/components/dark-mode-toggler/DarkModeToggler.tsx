
import { Mode, Theme } from '../../ThemeProvider'
import './DarkModeToggler.css'

const DarkModeToggler = (props: {theme: Theme, setMode: (mode: Mode) => void }) => {
    const theme = props.theme
    const setMode = props.setMode

    return (
        <div className="dark-light-toggle">
                <span className={`dark-mode`} onClick={() => setMode(theme === 'dark' ? 'light' : 'dark')}>
                    <i className={`${theme === 'dark' ? 'fa-solid' : 'fa-regular'} fa-moon`}></i>
                    Dark Mode
                </span>
            </div>
    )
}

export default DarkModeToggler
