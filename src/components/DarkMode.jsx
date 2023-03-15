import React, { useEffect, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';

const DarkMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="dark:bg-black dark:text-white text-gray-700 transition-colors duration-300 min-h-screen">
      <BsFillMoonFill
        className="text-xl cursor-pointer hover:text-pink-500"
        onClick={handleSwitch}
      />
    </div>
  );
};

export default DarkMode;
