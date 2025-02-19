// SRP - This component is only used to render the UI and also to handle user intereaction.

import React, { useEffect } from 'react';
import { useCalculator } from './hooks/useCalculator';
import Button from './components/Button';
import Display from './components/Display';
import './App.css';

const App: React.FC = () => {
  // DIP - To implement reusability, the calculations are handled in separate hook 'useCalculator'.
  // By doing this we are separating the App component from business logic(functionalities).
  const { display, handleClick } = useCalculator();

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const funcs = ['+', '-', '*', '/', 'C', '='];

  // Handle keyboard input
  useEffect(() => {
    const handleKeyboardInput = (event: KeyboardEvent) => {
      const key = event.key;

      // LSP - The 'handleClick' function is flexible to handle both the on-screen buttons and keyboard buttons.
      // Both the input methods can substitute each other without modifying 'handleClick'.

      if (/[0-9]/.test(key)) {
        handleClick(Number(key));
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleClick(key);
      } else if (key === 'Enter' || key === '=') {
        handleClick('=');
      } else if (key === 'Backspace') {
        handleClick('C');
      }
    };

    // OCP - By using event listener for keyboard input, we can implement more keyboard functionalities without modifying existing logic.

    // Add event listener for keydown when component mounts.
    window.addEventListener('keydown', handleKeyboardInput);
    // Cleanup function to remove event listener when component unmounts to prevent memory leaks.
    return () => window.removeEventListener('keydown', handleKeyboardInput);
  }, [handleClick]);

  return (
    <div className="container">
      <div className="calculator-container">
        <h1>Calculator</h1>
        <Display value={display} />
        <div className="button-row">
          {digits.map((digit) => (
            <Button key={digit} value={digit} onClick={() => handleClick(digit)} />
          ))}
          {funcs.map((func) => (
            <Button key={func} value={func} onClick={() => handleClick(func)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
