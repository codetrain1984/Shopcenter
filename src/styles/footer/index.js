import { TextField, Typography, styled } from '@mui/material'
import { colors } from '../theme'

export const FooterTitle = styled(Typography)(() => ({
  textTransform: 'uppercase',
  marginBottom: '1rem',
}))

export const SubscribeIf = styled(TextField)(() => ({
  '.MuiInputLabel-root': {
    color: colors.secondary,
  },
  'MuiInput-root::before': {
    borderBottom: `1px solid ${colors.secondary}`,
  },
}))
