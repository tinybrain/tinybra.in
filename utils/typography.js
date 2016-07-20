import Typography from 'typography'

const options = {
  baseFontSize: '14px',
  baseLineHeight: '18px',
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Merriweather', 'serif'],
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
