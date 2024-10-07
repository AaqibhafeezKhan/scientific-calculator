import React, { useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
