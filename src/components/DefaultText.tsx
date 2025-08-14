import React from "react";
import { Link } from 'react-router-dom';

interface DefaultTextsProps {
    style?: React.CSSProperties;
    text: string;
    isButton?: boolean; // Buton olup olmadığını belirlemek için yeni prop
}

const DefaultText: React.FC<DefaultTextsProps> = ({ style, text, isButton = false }) => {
    return (
        isButton ? (
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <button style={style}>{text}</button>
            </Link>
        ) : (
            <p style={style}>{text}</p>
        )
    );
}

export default DefaultText;