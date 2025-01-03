/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'rgb(15 23 42)', // slate-900
            a: {
              color: 'rgb(37 99 235)', // blue-600
              '&:hover': {
                color: 'rgb(30 64 175)', // blue-800
              },
              textDecoration: 'none',
            },
            h1: {
              color: 'rgb(15 23 42)', // slate-900
              fontWeight: '700',
              fontSize: '2.25rem',
              marginBottom: '1rem',
            },
            h2: {
              color: 'rgb(15 23 42)', // slate-900
              fontWeight: '700',
              fontSize: '1.875rem',
              marginBottom: '0.75rem',
            },
            h3: {
              color: 'rgb(15 23 42)', // slate-900
              fontWeight: '600',
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
            },
            strong: {
              color: 'rgb(15 23 42)', // slate-900
              fontWeight: '600',
            },
            code: {
              color: 'rgb(15 23 42)', // slate-900
              backgroundColor: 'rgb(241 245 249)', // slate-100
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
              fontFamily: 'ui-monospace, monospace',
            },
            pre: {
              backgroundColor: 'rgb(241 245 249)', // slate-100
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
                color: 'inherit',
              },
            },
            blockquote: {
              color: 'rgb(71 85 105)', // slate-600
              borderLeftColor: 'rgb(148 163 184)', // slate-400
              fontStyle: 'italic',
              marginLeft: '0',
              paddingLeft: '1rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.25rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.25rem',
            },
            li: {
              marginBottom: '0.5rem',
            },
          },
        },
        invert: {
          css: {
            color: 'rgb(241 245 249)', // slate-100
            a: {
              color: 'rgb(96 165 250)', // blue-400
              '&:hover': {
                color: 'rgb(147 197 253)', // blue-300
              },
            },
            h1: {
              color: 'rgb(255 255 255)',
            },
            h2: {
              color: 'rgb(255 255 255)',
            },
            h3: {
              color: 'rgb(255 255 255)',
            },
            strong: {
              color: 'rgb(255 255 255)',
            },
            code: {
              color: 'rgb(241 245 249)', // slate-100
              backgroundColor: 'rgb(30 41 59)', // slate-800
            },
            pre: {
              backgroundColor: 'rgb(30 41 59)', // slate-800
            },
            blockquote: {
              color: 'rgb(148 163 184)', // slate-400
              borderLeftColor: 'rgb(71 85 105)', // slate-600
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
