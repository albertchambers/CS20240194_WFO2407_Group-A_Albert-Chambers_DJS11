import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => (
  <button type={type} className={`btn ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
