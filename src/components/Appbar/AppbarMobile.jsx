import { IconButton } from '@mui/material'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Action from './action'
import { useContext } from 'react'
import { UIContext } from '../../context/ui'

export default function AppbarMobile({ matches }) {
  const { setDrawerSwitch, setShowSearchBox } = useContext(UIContext)
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerSwitch(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={'center'}>My Logo</AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Action matches={matches} />
    </AppbarContainer>
  )
}
