import React from 'react';
import './App.css';
import './styles/css/application.css';
import Root from './view/root/Root'
import ThemeSelection from './components/theme-selection/ThemeSelection'

function App() {
  return (
    <div className="App">
      <ThemeSelection />
      <Root />
    </div>
  );
}

export default App;
