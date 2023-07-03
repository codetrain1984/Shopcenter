import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from '../../styles/appbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { colors } from '../../styles/theme'

export default function Action({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop
  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  )
}
