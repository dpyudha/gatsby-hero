const themes = {
  fonts: {
    default: 'Nunito Sans, sans-serif',
    p: {
      fontSize: '1rem',
      lineHeight: '1.375rem'
    },
    h1: {
      fontSize: '3.75rem',
      lineHeight: '4.0625rem',
      fontWeight: '700'
    },

  },

  breakpoints: {
    mobile: '(max-width: 47.9988rem)',
    tablet: '(max-width: 64rem) and (min-width: 48rem)',
    desktop: '(min-width: 64.0625rem)'
  },

  colors: {
    dark: '#1F1D2B',
    white: '#FFFFFF',
    red: '#FF5286',
    grey: '#909193',
    yellow: '#FFB800',
    tosca: '#00B187',
    blue: 'rgba(211 ,236 ,246, 0.3)'
  },

  spacings: {
    xSmall: '.25rem',
    small: '.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '3rem'
  },

  containers: {
    large: '83.75rem',
    medium: '75rem'
  }
  
}

export default themes