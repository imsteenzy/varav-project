import React, { useState } from "react";
import { Link } from 'react-router-dom';

interface DefaultFrameProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  hoverImage?: string; // Resim URL'si için yeni bir prop ekledik
  linkTo?: string; // Link URL'si için yeni bir prop ekledik
}

export const DefaultFrame: React.FC<DefaultFrameProps> = ({ style, children, hoverImage, linkTo }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: hover ? 'none' : 'block' }}>
        {children}
      </div>
      {hover && hoverImage && (
        <Link to={linkTo || '#'} style={{ display: 'block', width: '100%', height: '100%' }}>
          <button
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `url(${hoverImage}) no-repeat center center`,
              backgroundSize: 'contain', // cover yerine contain kullanarak resmi tam olarak gösterelim
              border: 'none',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
            }}
          />
        </Link>
      )}
    </div>
  );
};