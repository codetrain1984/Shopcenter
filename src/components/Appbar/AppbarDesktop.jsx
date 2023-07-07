import React, { useContext } from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Action from './action'
import { UIContext } from '../../context/ui'

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useContext(UIContext)
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
            <SearchIcon onClick={() => setShowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Action matches={matches} />
    </AppbarContainer>
  )
}
