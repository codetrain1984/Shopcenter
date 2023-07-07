import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import React, { useContext } from 'react'
import { UIContext } from '../../context/ui'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import { DrawerCloseButton } from '../../styles/appbar'

export default function AppDrawer() {
  const { drawerSwitch, setDrawerSwitch } = useContext(UIContext)
  return (
    <>
      {drawerSwitch && (
        <DrawerCloseButton onClick={() => setDrawerSwitch(false)}>
          <ArrowCircleLeftOutlinedIcon sx={{ fontSize: '35px' }} />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerSwitch}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Drawer>
    </>
  )
}
