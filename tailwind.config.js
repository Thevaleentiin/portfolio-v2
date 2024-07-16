const { Assistant } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        redprimary: '#E03B36',
        blueprimary: '#2274A5',
        blackprimary: "#232020",
        whiteprimary: "#F4F7F5",
        blacksecondary: "#2B2A2A"
      },
      screens: {
        'xs': '480px',
        'xxs': '380px',
        'xsmall': '325px',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        shanti: ['var(--font-shanti)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
        changa_one: ['var(--font-Changa-one)', 'sans-serif'],
        assistant: ['var(--font-assistant)', 'sans-serif'],
        cantarell: ['var(--font-cantarell)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif']
      },
      fontSize:{
        '10xl': "12rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        '1000': '62.5rem',
        '1200': '75rem',
        '1500': '93.75rem',
        '750': '46.875rem',
        '950': '59.375rem',
        '411': '25.688rem',
        '500': '31.25rem',
        '2%': '2%',
        '87%': '87%',
        '7%': '7%',
        '30': '30%',
        '9%': '9%',
        '14%': '14%',
        '15%': '15%',
        '29%': '29%',
        '26%': '26%',
        // Fractions de 1/6 à 6/6
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        // Fractions de 1/12 à 12/12
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        // Fraction 1/24
        '1/24': '4.166667%',
        '2/24': '8.333333%',
        '3/24': '12.5%',
        '4/24': '16.666667%',
        '5/24': '20.833333%',
        '6/24': '25%',
        '7/24': '29.166667%',
        '8/24': '33.333333%',
        '9/24': '37.5%',
        '10/24': '41.666667%',
        '11/24': '45.833333%',
        '12/24': '50%',
        '13/24': '54.166667%',
        '14/24': '58.333333%',
        '15/24': '62.5%',
        '16/24': '66.666667%',
        '17/24': '70.833333%',
        '18/24': '75%',
        '19/24': '79.166667%',
        '20/24': '83.333333%',
        '21/24': '87.5%',
        '22/24': '91.666667%',
        '23/24': '95.833333%',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}