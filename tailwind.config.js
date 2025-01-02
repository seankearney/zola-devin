module.exports = {
  content: ["./templates/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#60a5fa', // blue-400
          DEFAULT: '#3b82f6', // blue-500
          dark: '#2563eb', // blue-600
        },
        // Dark mode specific colors handled through dark: prefix in templates
        background: {
          light: '#ffffff',
          dark: '#111827', // gray-900
        },
        text: {
          light: '#111827', // gray-900
          dark: '#f3f4f6', // gray-100
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              '&:hover': {
                color: '#3b82f6',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
