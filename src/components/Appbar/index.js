import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppbarMobile from './AppbarMobile'
import AppbarDesktop from './AppbarDesktop'

export default function Appbar() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  )
}
