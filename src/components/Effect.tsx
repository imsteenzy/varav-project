import React, { useEffect, useState } from 'react';
import '../App.css';

const Effect: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 5000); // Site açıldıktan 1 saniye sonra animasyon başlar

    return () => clearTimeout(timeout);
  }, []);

  return <div className={`light-effect ${startAnimation ? 'start' : ''}`}></div>;
};

export default Effect;