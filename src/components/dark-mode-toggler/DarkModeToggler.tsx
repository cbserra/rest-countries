
import { useTheme } from '../../utils/ThemeProvider'
import './DarkModeToggler.css'

const DarkModeToggler = () => {
    const { theme, setMode, setTheme } = useTheme()

    return (
        <div className="dark-light-toggle">
            <span className={`dark-mode`} 
                onClick={(e) => {
                    setTheme(theme === "light" ? "dark" : "light");
                    setMode(theme === 'dark' ? 'light' : 'dark');
            }}>
                <i className={`${theme === 'dark' ? 'fa-solid' : 'fa-regular'} fa-moon`}></i>
                Dark Mode
            </span>
        </div>
    )
}

export default DarkModeToggler
