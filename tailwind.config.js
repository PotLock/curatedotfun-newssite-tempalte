/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          DEFAULT: '#2563eb', // Primary brand color
          light: '#3b82f6',   // Light variant
          dark: '#1d4ed8',    // Dark variant
        },
        // Accent colors
        accent: {
          DEFAULT: '#f59e0b', // Primary accent color
          light: '#fbbf24',   // Light variant
          dark: '#d97706',    // Dark variant
        },
        // Background colors
        background: {
          DEFAULT: '#ffffff', // Main background
          dark: '#f3f4f6',    // Dark background
        },
        // Text colors
        text: {
          DEFAULT: '#1f2937', // Main text
          light: '#6b7280',   // Light text
          dark: '#111827',    // Dark text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Jersey System', 'system-ui', 'sans-serif'],
      },
      // Custom spacing
      spacing: {
        'container': '1rem',
        'container-lg': '2rem',
      },
      // Custom breakpoints
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} 