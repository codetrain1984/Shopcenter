import { Box, IconButton, List, Typography, styled } from '@mui/material'
import { colors } from '../theme'

//container
export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 8px',
}))

//Header

export const AppbarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '2em',
  color: 'colors.secondary',
}))

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
  background: colors.shaft,
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${colors.border}`,
}))
export const ActionIconsContainerDesktop = styled(Box)(() => ({}))

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  bottom: 30,
  left: '180px',
  zIndex: 9999,
  color: colors.primary,
}))
