import React, { useState, useEffect } from 'react';

const Mode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

   
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#333' : '#FFF',
      color: isDarkMode ? '#FFF' : '#000',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: isDarkMode ? '#FFF' : '#333',
          color: isDarkMode ? '#333' : '#FFF',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        {isDarkMode ? 'Aydınlık Modu' : 'Karanlık Modu'}
      </button>
    </div>
  );
};

export default Mode;