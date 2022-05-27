import React, { createContext, useEffect, useState } from "react";

const localStorageKey = "mode";

// Saved mode
export type Mode = "light" | "dark" | "system";
// Visual themes
export type Theme = "light" | "dark";

// Emulate backend calls
const getMode = (): Promise<Mode> =>
  new Promise((res) =>
    setTimeout(() => {
      res(
        (localStorage.getItem(localStorageKey) as Mode | undefined) || "system"
      );
    }, 3000)
  );

// exposed context for doing awesome things directly in React
export const ThemeContext = createContext<{
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
}>({
  mode: "system",
  theme: "light",
  setMode: () => {}
});

interface Props {
  children: JSX.Element
}

export const ThemeProvider: React.FunctionComponent<Props> = (props : Props) => {
  const [mode, setMode] = useState<Mode>(() => {
    const initialMode =
      (localStorage.getItem(localStorageKey) as Mode | undefined) || "system";
    return initialMode;
  });

  // This will only get called during the 1st render
  useState(() => {
    getMode().then(setMode);
  });

  // When the mode changes, save it to the localStorage and to the database
  useEffect(() => {
    localStorage.setItem(localStorageKey, mode);
  }, [mode]);

  const [theme, setTheme] = useState<Theme>(() => {
    if (mode !== "system") {
      return mode;
    }
    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)")
      .matches;
    return isSystemInDarkMode ? "dark" : "light";
  });

  // Update the theme according to the mode
  useEffect(() => {
    if (mode !== "system") {
      setTheme(mode);
      return;
    }

    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)");
    // If system mode, immediately change theme according to the current system value
    setTheme(isSystemInDarkMode.matches ? "dark" : "light");

    // As the system value can change, we define an event listener when in system mode
    // to track down its changes
    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };
    isSystemInDarkMode.addEventListener('change', listener);
    return () => {
      isSystemInDarkMode.removeEventListener('change', listener);
    };
  }, [mode]);

  // Update the visuals on theme change
  useEffect(() => {
    // change <meta name="color-scheme"> for native inputs
    (document.getElementById("colorScheme") as HTMLMetaElement).content = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
