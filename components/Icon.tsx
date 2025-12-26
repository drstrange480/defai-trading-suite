import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fill?: boolean;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '', fill = false }) => {
  return (
    <span 
      className={`material-symbols-rounded ${className}`} 
      style={{ 
        fontSize: `${size}px`, 
        fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0",
        userSelect: 'none' 
      }}
    >
      {name}
    </span>
  );
};

export default Icon;