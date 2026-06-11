/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gh: {
          bg:      '#0d1117',
          surface: '#161b22',
          border:  '#21262d',
          border2: '#30363d',
          text:    '#e6edf3',
          muted:   '#8b949e',
          hint:    '#484f58',
          blue:    '#58a6ff',
          green:   '#3fb950',
          amber:   '#d29922',
          purple:  '#a371f7',
          red:     '#f85149',
          bluebg:  '#0d2340',
          greenbg: '#0d2b1a',
          amberbg: '#231b00',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
