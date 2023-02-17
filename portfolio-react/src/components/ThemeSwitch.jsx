import { useEffect, useState } from 'react';
import { moon, sun } from '../assets/'

export const ThemeSwitch = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="theme-switch">
        <input type="checkbox" id="switch" checked={isDarkMode} onChange={toggleTheme}/>
        <label className="toggle-icons" htmlFor="switch">
            <img className="moon" src={moon} alt="moon"/>
            <img className="sun" src={sun} alt="sun"/>
        </label>
    </div>
  )
}
