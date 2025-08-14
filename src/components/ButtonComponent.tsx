import React, { CSSProperties } from 'react';

interface ButtonComponentProps {
  label: string;
  style?: CSSProperties;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, style }) => {
  return <button style={style}>{label}</button>;
};

export default ButtonComponent;