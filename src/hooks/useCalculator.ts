// SRP - This hook is responsible for managing calculator logic. It doesn't have to worry about UI rendering.

import { useState } from 'react';
import calculate from '../utils/calculate';

export const useCalculator = () => {

  // using react state to save the state of the display component to add(concatinat) numbers or operations.
  const [display, setDisplay] = useState<(string | number)[]>([]);

  // using react state to save the state of result. If we press '=' or 'Enter', the result will be true and the value will be displayed 
  // else the result will be false and the value will be added(concatinated) to the display
  const [isResult, setIsResult] = useState<boolean>(false);

  // DIP - Instead of implementing  calculations directly, we delegate the task to an external function 'calculate.ts'.
  // By doing this we make our code resuable.

  const handleClick = (value: string | number) => {
    
    // SRP - This block is only responsible for clearing the last input.
    if (value === 'C') {
      setDisplay((prev) => prev.slice(0, -1));
      setIsResult(false);
    } else if (value === '=') {
      try {

        // DIP - Using `calculate.ts` instead of `eval()`
        // This makes our calculation logic independent and easily extendable.
        const result = calculate(display);
        setDisplay([result]);
        setIsResult(true);
      } catch {
        setDisplay(['Error']);
        setIsResult(false);
      }
    } else {

      // LSP - Whether a number or a string(operator) is passed, the function will behave same.
      setDisplay((prev) => (isResult ? [value] : [...prev, value]));
      setIsResult(false);
    }
  };

  return { display, handleClick };
};
