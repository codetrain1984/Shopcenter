import { Box, Typography, styled } from '@mui/material'
import theme, { colors } from '../theme'

export const PromotionsContainer = styled(Box)(() => ({
  [theme.breakpoints.up('md')]: {
    padding: '40px 0px 40px 0px',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0px 20px 0px',
  backgroundColor: colors.secondary,
}))

export const MessageText = styled(Typography)(() => ({
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  color: colors.white,
  fontSize: '1.5rem',
}))
