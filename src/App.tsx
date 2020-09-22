import React from 'react';
import './App.css';
import './styles/css/application.css';
import Root from './view/root/Root'
import ThemeSelection from './components/theme-selection/ThemeSelection'
import { ThemeProvider } from './hooks/context/useUserContext';
import { useTheme } from './hooks/theme/useTheme'

function App() {
	const { theme } = useTheme()

	return (
		<ThemeProvider>
			<Root />
    	</ThemeProvider>
  	)
}

export default App;
