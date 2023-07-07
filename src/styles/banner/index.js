import { Box, Button, Typography, styled } from '@mui/material'
import theme, { colors } from '../theme'

export const BannerContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '0px 0px',
  backgroundColor: colors.light_gray,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const BannerImage = styled('img')((src) => ({
  src: `url(${src})`,
  objectFit: 'cover',
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '320px',
    height: '300px',
  },
}))

export const BannerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 420,
  padding: '30px',
}))

export const BannerTitle = styled(Typography)(() => ({
  lineHeight: 1.5,
  fontSize: '72px',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',
  },
}))

export const BannerDescription = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: '3rem',
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: '1.5rem',
  },
}))

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: '20px 0px',
  color: colors.white,
  fontWeight: 'bold',
  fontSize: '16px',
  backgroundColor: colors.primary,
  width: '100%',
  '&:hover': {
    backgroundColor: colors.inverse,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0px',
    fontSize: '14px',
  },
}))
