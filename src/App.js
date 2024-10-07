import React from 'react';
import Calculator from './components/Calculator';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Calculator />
    </div>
  );
}

export default App;
