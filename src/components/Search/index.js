import React, { useContext } from 'react'
import { UIContext } from '../../context/ui'
import { IconButton, Slide } from '@mui/material'
import { SearchBoxContainer, SearchField } from '../../styles/Search'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

export default function SearchBox() {
  const { showSearchBox, setShowSearchBox } = useContext(UIContext)
  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          placeholder="Search ..."
          fullWidth
        />
        <IconButton>
          <SearchIcon sx={{ fontSize: '2rem', md: '3rem' }} color="secondary" />
        </IconButton>
        <IconButton
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={() => setShowSearchBox(false)}
        >
          <ClearIcon sx={{ fontSize: '3rem' }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  )
}
