import React, { createContext, useEffect, useState } from "react"
import useLocalStorage from "use-local-storage"


// Saved mode
export type Mode = "light" | "dark" | "system"
// Visual themes
export type Theme = "light" | "dark"

// exposed context for doing awesome things directly in React
export const ThemeContext = createContext<{
  mode: Mode,
  theme: Theme,
  setMode: (mode: Mode) => void
}>({
  mode: "system",
  theme: "light",
  setMode: () => {}
})

interface Props {
  children: JSX.Element
}

export const ThemeProvider: React.FunctionComponent<Props> = (props : Props) => {
  const LS_MODE_KEY = "mode"
  const [lsMode, setLsMode] = useLocalStorage(LS_MODE_KEY, "system")
  const [mode, setMode] = useState<Mode>(() => {
    const initialMode = lsMode as Mode
    return initialMode
  })
  
  // Emulate backend calls
  const getMode = (): Promise<Mode> =>
  new Promise((res) =>
    setTimeout(() => {
      res(lsMode as Mode)
    }, 3000)
  )


  // This will only get called during the 1st render
  useState(() => {
    getMode().then(setMode)
  })

  // When the mode changes, save it to the localStorage and to the database
  useEffect(() => {
    setLsMode(mode)
  }, [setLsMode, mode])
  
  const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)")
  const getPreferredColorScheme = (): Theme => {
    return isSystemInDarkMode.matches ? "dark" : "light"
  }
  const [theme, setTheme] = useState<Theme>(() => {
    if (mode !== "system") {
      return mode
    }
    
    return getPreferredColorScheme()
  })

  // Update the theme according to the mode
  useEffect(() => {
    if (mode !== "system") {
      setTheme(mode)
      return
    }

    // If system mode, immediately change theme according to the current system value
    setTheme(getPreferredColorScheme())

    // As the system value can change, we define an event listener when in system mode
    // to track down its changes
    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light")
    }
    isSystemInDarkMode.addEventListener('change', listener)
    return () => {
      isSystemInDarkMode.removeEventListener('change', listener)
    }
  }, [mode, getPreferredColorScheme, isSystemInDarkMode])

  // Update the visuals on theme change
  useEffect(() => {
    // change <meta name="color-scheme"> for native inputs
    (document.getElementById("colorScheme") as HTMLMetaElement).content = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
