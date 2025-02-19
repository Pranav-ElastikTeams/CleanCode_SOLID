// SRP - This component is only responsible to display the calculator output.

import React from 'react';

interface DisplayProps {
  value: (number | string)[];
}

// LSP - This component can be replaced with any other UI-based Display without breaking the app.
// We can implement say DigitalDisplay if we want without changing App.tsx.

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value.length > 0 ? value.join('') : '0'}</div>;
};

export default Display;
