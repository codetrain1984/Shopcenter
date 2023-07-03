import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Action from './action'

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Logo</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Action matches={matches} />
    </AppbarContainer>
  )
}
