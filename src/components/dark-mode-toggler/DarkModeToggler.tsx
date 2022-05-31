
import { useTheme } from '../../utils/ThemeProvider'
import './DarkModeToggler.css'

const DarkModeToggler = () => {
    const { theme, setMode, setTheme } = useTheme()

    return (
        <div className="dark-light-toggle">
            <label className='theme-type-label' htmlFor="theme-type">
                <input 
                    className='theme-type-check'
                    type="checkbox" 
                    name="themeType" 
                    id="theme-type"
                    onChange={(e) => {
                        const toggledThemeMode = theme === "light" ? "dark" : "light"
                        setTheme(toggledThemeMode)
                        setMode(toggledThemeMode)
                        console.log(`checked = ${e.target.checked}`)
                    }}
                     />
                <i className={`${theme === 'dark' ? 'fa-solid' : 'fa-regular'} fa-moon`}></i>
                <span>{theme} mode</span>
            </label>
        </div>
    )
}

export default DarkModeToggler
