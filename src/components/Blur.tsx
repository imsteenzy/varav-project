import React from 'react';
import '../App.css';

const Blur: React.FC<{ show: boolean }> = ({ show }) => {
  return <div className={`blur-effect ${show ? 'start' : ''}`}></div>;
};

export default Blur;