// SRP - This component is only used to render the buttons and to handle clicks (both associated with buttons).

import React from 'react';

interface ButtonProps {
  value: string | number;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {

  // OCP - The getButtonClass is extendable for new buttons without need to modify the main logic.
  // getButtonClass is used to give the property to button based on the value.

  const getButtonClass = () => {
    if (typeof value === 'number') return 'number-btn';
    if (value === 'C') return 'clear-btn';
    if (value === '=') return 'equals-btn';
    return 'operator-btn';
  };

  return (
    <button className={getButtonClass()} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
