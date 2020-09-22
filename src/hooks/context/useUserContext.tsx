import React, { createContext, useEffect, useState, } from 'react'

type Props = {
	'children': React.ReactNode
  }
const defaultTheme = "light";

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: Props) => {  
	const [theme, setTheme] = useState(defaultTheme)

	useEffect(() => {
	  const currentTheme: string = "light"

	  setTheme(currentTheme)
	}, []);

	const themeContext: object = { theme, setTheme }
  
	return (
	  <ThemeContext.Provider value={themeContext}>
		{children}
	  </ThemeContext.Provider>
	);
  };
