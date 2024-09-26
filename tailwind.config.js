/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.300'), // General text color in dark mode
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
            code: { color: theme('colors.green.400') },
            pre: { backgroundColor: theme('colors.gray.800') },
            // Add custom style for bold/strong text in dark mode
            strong: {
              color: theme('colors.gray.100'), // Make bold text brighter in dark mode
            },
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}