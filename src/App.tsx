import React from 'react';
import './App.css';
import './styles/css/application.css';
import Root from './view/root/Root'
import { ThemeProvider } from './hooks/context/useUserContext';

function App() {
	return (
		<ThemeProvider>
			<Root />
    	</ThemeProvider>
  	)
}

export default App;
