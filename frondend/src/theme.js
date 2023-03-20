import { createTheme } from '@mui/material/styles'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme = createTheme({
  palette: {
    purpleDark: {
      main: '#673F86',
    },
    purpleLight: {
      main: '#9980B7',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '55px',
      textTransform: 'capitalize',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '29px',
      textTransform: 'capitalize',
      [breakpoints.up('md')]: {
        fontSize: '36px',
        lineHeight: '44px',
      },
    },
    h3: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'uppercase',
      color: '#fff',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
    body2: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#673F86',
          borderRadius: '8px',
          padding: '14px',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '24px',
          textTransform: 'capitalize',
          color: '#FFFFFF',
          '&:disabled': {
            background: '#9980B7',
            color: '#FFFFFF',
          },
          '&:hover': {
            background: '#673F86',
          },
        },
      },
    },
  },
})

export default theme
