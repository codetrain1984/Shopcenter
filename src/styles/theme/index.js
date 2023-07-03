import { createTheme } from '@mui/material'

export const colors = {
  primary: '#5f2c3e',
  secondary: '#d1adcc',
  success: '#4caf50',
  danger: '#ff5722',
  warning: '#ffc107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#dddfe1',
  inverse: '#2f3d4a',
  shaft: '#333',
  ///////////////
  //Grays
  ///////////////
  dim_gray: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  ///////////////
  //Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
})
export default theme
