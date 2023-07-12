import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      'desaturated-dark-cyan': 'hsl(180, 29%, 50%)'
    },
    neutral: {
      'light-grayish-cyan': 'hsl(180, 52%, 96%)',
      'light-grayish-cyan-filter': 'hsl(180, 31%, 95%)',
      'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
      'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)'
    }
  },
  fonts: {
    heading: '`League Spartan`, sans-serif',
    body: `'League Spartan', sans-serif`
  }
})
