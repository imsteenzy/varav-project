import React, { useState, useEffect } from 'react';
import { DefaultFrame } from '../components/DefaultFrame';
import DefaultImage from '../components/DefaultImage';
import { Signature } from '../components/Signature';
import '../App.css';
import IletisimPNG from '../images/iLETISIMPNGG.png';
import EKIBIMIZ from '../images/EkibimizPng.png';
import raporpng from '../images/RaporPng.png';
import Logo from '../images/DarkModeLastChance.png';
import DarkModeLogo from '../images/ToplanHayatLogo.png'; // Karanlık mod için yeni resim
import Sponsor1 from '../images/ToplanHayatLogo.png';
import Sponsor2 from '../images/iu_logo-beyaz.png';
import Sponsor3 from '../images/white.png';
import ODUL from '../images/ödül.png';

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Bilgisayarın sistem temasını kontrol et
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Tema değişikliklerini dinle
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
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 60%, #333 100%)',
        color: isDarkMode ? '#FFF' : '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        padding: '0 10%',
        position: 'relative',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <DefaultImage
        style={{
          height: '120px',
          position: 'absolute',
          top: '5%', // Sayfanın üst kısmında ortalamak için
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        src={Logo}
        darkModeSrc={DarkModeLogo} // Karanlık mod için alternatif resim
        isDarkMode={isDarkMode} // Karanlık/Aydınlık mod durumu
      />

      <DefaultFrame
        style={{
          height: '250px',
          color: isDarkMode ? '#FFF' : '#000',
          textAlign: 'center',
          width: '30%', // Genişliği ayarlamak için
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        hoverImage={IletisimPNG} // Hover resmini ekledik
        linkTo="/last-chance-studio" // Link URL'sini ekledik
      >
        <div className="home">
          <h1 >ILETISIM</h1>
          <p style={{ opacity: 0.5 }}>explore</p>
        </div>
      </DefaultFrame>

      <DefaultFrame
        style={{
          height: '250px',

          color: isDarkMode ? '#FFF' : '#000',
          textAlign: 'center',
          width: '30%', // Genişliği ayarlamak için
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        hoverImage={raporpng} // Hover resmini ekledik
        linkTo="/my-works" // Link URL'sini ekledik
      >
        <div className="home">
          <h1>RAPOR</h1>
          <p style={{ opacity: 0.5 }}>explore</p>
        </div>
      </DefaultFrame>

      <DefaultFrame
        style={{
          height: '250px',
          color: isDarkMode ? '#FFF' : '#000',
          textAlign: 'center',
          width: '30%', // Genişliği ayarlamak için
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        hoverImage={EKIBIMIZ} // Hover resmini ekledik
        linkTo="/steenzy-cv" // Link URL'sini ekledik
      >
        <div className="home">
          <h1>EKIBIMIZ</h1>
          <p style={{ opacity: 0.5 }}>explore</p>
        </div>
      </DefaultFrame>

      {/* Yeni 4. Buton: Test */}
      <DefaultFrame
        style={{
          height: '250px',
          color: isDarkMode ? '#FFF' : '#000',
          textAlign: 'center',
          width: '30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        hoverImage={ODUL} // İsterseniz başka bir görsel ekleyebilirsiniz
        linkTo="/test"
      >
        <div className="home">
          <h1>BAKIM</h1>
          <p style={{ opacity: 0.5 }}>explore</p>
        </div>
      </DefaultFrame>

      <Signature name="©L' CHANCE 2025 · Varav " color="white" status="Aktif" isDarkMode={isDarkMode} />

      {/* Sponsor Paneli */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '70%',
          transform: 'translateX(-50%)',
          width: '60%',
          background: 'rgba(40,40,40,0.97)',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          padding: '18px 0',
          display: 'flex',
          flexDirection: 'column', // Başlık ve logoları alt alta koymak için
          alignItems: 'center',
          overflow: 'hidden',
          border: '2px solid #444',
          zIndex: 30,
        }}
      >
        <span
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '26px',
            letterSpacing: '2px',
            marginBottom: '12px',
          }}
        >
          SPONSORLAR
        </span>
        <div
          style={{
            display: 'flex',
            gap: '72px',
            animation: 'slideRight 12s linear infinite',
            alignItems: 'center',
            width: 'max-content',
          }}
        >
          <img
            src={Sponsor1}
            alt="Sponsor 1"
            style={{
              height: '100px',
              objectFit: 'contain',
              transition: 'transform 0.3s, filter 0.3s',
              cursor: 'pointer',
            }}
            className="sponsor-logo"
          />
          <img
            src={Sponsor2}
            alt="Sponsor 2"
            style={{
              height: '70px',
              objectFit: 'contain',
              transition: 'transform 0.3s, filter 0.3s',
              cursor: 'pointer',
            }}
            className="sponsor-logo"
          />
          <img
            src={Sponsor3}
            alt="Sponsor 3"
            style={{
              height: '100px',
              objectFit: 'contain',
              transition: 'transform 0.3s, filter 0.3s',
              cursor: 'pointer',
            }}
            className="sponsor-logo"
          />
        </div>
        <style>
          {`
            @keyframes slideRight {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .sponsor-logo:hover {
              transform: scale(1.15);
              filter: brightness(1.1) drop-shadow(0 0 6px #ffffffff);
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;