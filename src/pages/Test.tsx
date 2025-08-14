import React from 'react';
import { Link } from 'react-router-dom';
import { Signature } from '../components/Signature';

const Test: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 60%, #333 100%)',
        color: '#fff',
        minHeight: '100vh',
        padding: '48px 0 32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Trokia, Arial, sans-serif',
        position: 'relative'
      }}
    >
      <Link to="/" style={{
        position: 'absolute',
        top: '20px',
        right: '40px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#FFF',
        color: '#1a1a1a',
        border: '2px solid #1a1a1a',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
        fontFamily: 'Trokia, Arial, sans-serif'
      }}>
        Home
      </Link>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textAlign: 'center',
          margin: 0
        }}>
          BAKIM VAR
        </h1>
      </div>
      <Signature name="©L' CHANCE 2025 · Varav " color="white" status="Çevrimdısı" isDarkMode={true} />
    </div>
  );
};

export default Test;