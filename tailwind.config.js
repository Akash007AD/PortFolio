/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editor: {
          bg: '#1e1e1e',       // VS Code Background
          fg: '#d4d4d4',       // Default Text
          key: '#9cdcfe',      // Object Keys (Light Blue)
          string: '#ce9178',   // Strings (Orange/Brown)
          number: '#b5cea8',   // Numbers (Light Green)
          keyword: '#c586c0',  // Keywords (Purple)
          comment: '#6a9955',  // Comments (Green)
          function: '#dcdcaa', // Functions (Yellow)
          bracket: '#ffd700',  // Brackets (Gold)
          line: '#2d2d2d',     // Line Numbers/Borders
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'cursor': 'cursor .75s step-end infinite',
      },
      keyframes: {
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
