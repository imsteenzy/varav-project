import React from "react";

interface DefaultImagesProps {
    src: string;
    darkModeSrc?: string; // Karanlık mod için alternatif resim
    style?: React.CSSProperties;
    isDarkMode: boolean; // Karanlık/Aydınlık mod durumu için yeni prop ekledik
}

const DefaultImage: React.FC<DefaultImagesProps> = ({ style, src, darkModeSrc, isDarkMode }) => {
    return (
        <img src={isDarkMode && darkModeSrc ? darkModeSrc : src} alt="STYWEB" style={style} />
    );
}

export default DefaultImage;