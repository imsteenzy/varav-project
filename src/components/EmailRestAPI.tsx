import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const EmailRestAPI: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_r21pk8h';
    const templateId = 'template_wvxgr9h';
    const publicKey = 'nkNXu7rHww2vnq0mO';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      }
    };

    try {
      await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setStatus('Email Basariyla gönderildi!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Email gönderilirken bir hata oluştu.');
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 60%, #333 100%)',
        position: 'relative',
      }}
    >
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '32px',
          right: '48px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#FFF',
          color: '#1a1a1a',
          border: '2px solid #1a1a1a',
          borderRadius: '5px',
          textDecoration: 'none',
          transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
          zIndex: 10,
        }}
      >
        Ana Sayfa
      </Link>
      <form
        onSubmit={handleSubmit}
        className='emailForm'
        style={{
          background: '#222',
          padding: '32px 28px',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          minWidth: '320px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>Bizimle Iletisime Geçin</h2>
        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#181818',
            color: '#fff',
            fontSize: '16px',
          }}
        />
        <input
          type="email"
          placeholder="Mail Adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#181818',
            color: '#fff',
            fontSize: '16px',
          }}
        />
        <textarea
          cols={30}
          rows={6}
          placeholder="Mesajınız"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#181818',
            color: '#fff',
            fontSize: '16px',
            resize: 'vertical',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
        >
          Email Gönder
        </button>
        {status && (
          <p style={{
            color: status.includes('success') ? '#4caf50' : '#ff5252',
            textAlign: 'center',
            marginTop: '4px',
            fontWeight: 'bold',
          }}>
            {status}
          </p>
        )}
    
      </form>
      
    </div>
  );
};

export default EmailRestAPI;