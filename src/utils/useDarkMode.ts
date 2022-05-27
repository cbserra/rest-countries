import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { Mode, Theme } from '../ThemeProvider'

export const useDarkMode = () => {
    const [theme, setTheme] = useState<Theme | Mode>('light')
    const [lsTheme, setLsTheme] = useLocalStorage<Theme | Mode>("theme", "light")

    const setMode = (mode: Mode) => {
        setLsTheme(mode)
        setTheme(mode)
    }

    const themeToggler = (): void => {
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = lsTheme;
        localTheme && setTheme(localTheme)
    }, [])
    
    return [theme, themeToggler]
};
