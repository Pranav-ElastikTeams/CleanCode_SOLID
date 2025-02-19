// SRP - This function is responsible for evaluating mathematical expressions only.

// OCP -This function is extendable.
// We can modify how expressions are parsed without affecting other parts of the code.
// The code is extensible as we can add exponent, root, factorial features without modifying the calculate function.
// We can create a new function for parsing expression.

export default function calculate(input: (number | string)[]): number {

  // Convert array to string expression
  const expression = input.join('');

  // Input validation using regex to prevent runtime errors.
  if (!/^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/.test(expression)) {
    return NaN; // Invalid expression
  }

  try {
    // DIP - Here a safe function is used to evaluate expression instead of relying on 'eval()'.
    const result = new Function(`return ${expression}`)();
    return result;
  } catch (e) {
    return NaN;
  }
}
