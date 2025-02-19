# React Calculator Application

## Overview
This is a simple **React-based Calculator Application** built using **Vite** and **TypeScript**. It follows the **SOLID principles** to ensure modularity, scalability, and maintainability.

## Features
- Perform basic arithmetic operations (+, -, *, /)
- Keyboard input support
- Clear button to delete last input
- Responsive UI with separate components for display and buttons

## Technologies Used
- **React** (UI framework)
- **TypeScript** (Strong typing)
- **Vite** (Fast build tool)
- **CSS** (Styling)

## Installation
### Prerequisites
Ensure you have **Node.js** and **npm/yarn** installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd react-calculator
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:5173  # Default Vite port
   ```

## Project Structure
```
react-calculator/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Display.tsx
│   ├── hooks/
│   │   ├── useCalculator.ts
│   ├── utils/
│   │   ├── calculate.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## SOLID Principles Applied
- **SRP (Single Responsibility Principle):** Separate components for UI, logic, and calculations.
- **OCP (Open/Closed Principle):** Easily extend functionalities without modifying existing code.
- **LSP (Liskov Substitution Principle):** Calculation logic can be swapped without affecting the UI.
- **ISP (Interface Segregation Principle):** Components are designed to be independent and focused.
- **DIP (Dependency Inversion Principle):** The UI (`App.tsx`) depends on `useCalculator.ts` abstraction rather than direct logic.

## Deployment
To build and deploy the project:
```sh
npm run build  # or yarn build
```

## Author
Developed by **Pranav Bharti** 🚀

