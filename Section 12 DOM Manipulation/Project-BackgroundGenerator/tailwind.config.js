/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'] 
      },
      colors: {
        'br-bl': 'rgba(0, 0, 0, 0.5)',
        're': 'rgb(255, 0, 0)',
        'ye': 'rgb(255, 255,0)',
      },
      letterSpacing: {
        '0': '0em',
        '.01': '.01em',
        '.025': '0.025em',
        '.05': '0.05em',
        '.1': '0.1em',
        '.5': '0.5em',
        '.6': '0.6em',
      }
    },
  },
  plugins: [],
}
