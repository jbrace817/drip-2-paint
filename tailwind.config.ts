import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light1: 'hsl(var(--primary-light1))',
          light2: 'hsl(var(--primary-light2))',
          light3: 'hsl(var(--primary-light3))',
          light4: 'hsl(var(--primary-light4))',
          light5: 'hsl(var(--primary-light5))',
          dark2: 'hsl(var(--primary-dark2))',
          dark3: 'hsl(var(--primary-dark3))',
          dark4: 'hsl(var(--primary-dark4))',
          dark5: 'hsl(var(--primary-dark5))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        coolGray: {
          DEFAULT: 'hsl(var(--coolGray-dark1))',
          light1: 'hsl(var(--coolGray-light1))',
          light2: 'hsl(var(--coolGray-light2))',
          light3: 'hsl(var(--coolGray-light3))',
          light4: 'hsl(var(--coolGray-light4))',
          light5: 'hsl(var(--coolGray-light5))',
          dark2: 'hsl(var(--coolGray-dark2))',
          dark3: 'hsl(var(--coolGray-dark3))',
          dark4: 'hsl(var(--coolGray-dark4))',
          dark5: 'hsl(var(--coolGray-dark5))',
        },
        support: {
          DEFAULT: 'hsl(var(--indigo-light5))',
        },
      },
      fontFamily: {
        headings: ['var(--font-openSans-header)'],
        body: ['var(--font-lato-body)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
