import DarkModeToggler from '../dark-mode-toggler/DarkModeToggler';
import './Header.css'

const Header = () => {

    return (
        <header>
            <div className='header-width-wrapper'>
                <h1>Where in the world?</h1>
                <DarkModeToggler />
            </div>
        </header>
    )
}

export default Header