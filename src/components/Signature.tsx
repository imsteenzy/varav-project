import React, { useState } from "react";
import '../App.css';

interface SignatureProps {
  name?: string;
  color?: string;
  status?: 'Aktif' | 'Meşgul' | 'Çevrimdısı';
  isDarkMode: boolean; 
}

export const Signature: React.FC<SignatureProps> = ({ name, color, status, isDarkMode }) => {
  const [hover, setHover] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'Aktif':
        return 'green';
      case 'Meşgul':
        return 'yellow';
      case 'Çevrimdısı':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '97%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        color: isDarkMode ? '#FFF' : '#000', 
        cursor: 'pointer',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#FFF', 
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {name}
      {hover && (
        <div className="status-box" style={{ backgroundColor: getStatusColor() }}>
          <span>{status}</span>
        </div>
      )}
    </div>
  );
};