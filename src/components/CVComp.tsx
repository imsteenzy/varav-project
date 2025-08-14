import React, { useState, useEffect } from 'react';
import DefaultImage from './DefaultImage';
import DefaultText from './DefaultText';
import { Signature } from './Signature';
import { Link } from 'react-router-dom'; // Eklendi
import Pic from '../images/orange.png';

interface CVCompProps {
  name: string;
  description: string;
  about: string;
  image?: string;
}

const CVComp: React.FC<CVCompProps> = ({ name, description, about, image }) => {
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

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#1a1a1a' : '#FFF',
        color: isDarkMode ? '#FFF' : '#000',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '32px',
        margin: '16px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        position: 'relative',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <DefaultImage
        style={{
          height: '120px',
          borderRadius: '10px',
        }}
        src={image || Pic}
        darkModeSrc={image || Pic}
        isDarkMode={isDarkMode}
      />
      <div style={{ flex: 1 }}>
        <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>{name}</h2>
        <p style={{ margin: '12px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{description}</p>
        <p style={{ margin: '8px 0 0 0', fontSize: '16px' }}>{about}</p>
      </div>
     
      <Signature name="© Last Chance Studios 2025 · Made By VARAV" color="white" status="Aktif" isDarkMode={isDarkMode} />
    </div>
  );
};

export default CVComp;