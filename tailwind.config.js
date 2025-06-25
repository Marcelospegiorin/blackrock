/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        border: '#FBF4E3',
        input: 'hsl(35, 20%, 12%)',
        ring: '#FBF4E3',
        background: '#1B1611',
        foreground: '#FBF4E3',
        primary: {
          DEFAULT: '#FBF4E3',
          foreground: '#1B1611',
        },
        secondary: {
          DEFAULT: 'hsl(35, 20%, 12%)',
          foreground: '#FBF4E3',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)',
          foreground: '#FBF4E3',
        },
        muted: {
          DEFAULT: 'hsl(35, 15%, 15%)',
          foreground: 'hsl(42, 73%, 85%)',
        },
        accent: {
          DEFAULT: 'hsl(35, 20%, 12%)',
          foreground: '#FBF4E3',
        },
        popover: {
          DEFAULT: '#1B1611',
          foreground: '#FBF4E3',
        },
        card: {
          DEFAULT: 'hsl(35, 20%, 12%)',
          foreground: '#FBF4E3',
        },
        // Custom colors
        light: '#FBF4E3',
        dark: '#1B1611',
        charcoal: 'hsl(35, 20%, 12%)',
        gold: '#FFD700',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-light': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(251, 244, 227, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(251, 244, 227, 0.8)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-light': 'pulse-light 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}