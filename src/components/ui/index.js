import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../../styles/theme'
import { clamp } from './clamp'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

export default function IncDec() {
  const clampV = clamp(1, 10)
  const [value, setValue] = useState(1)
  return (
    <Box display={'flex'}>
      <IconButton
        sx={{ borderRadius: 0, background: `${colors.secondary}` }}
        onClick={() => setValue(clampV(value - 1))}
      >
        <RemoveIcon />
      </IconButton>

      <Typography variant="h6" px={2} border={`1px solid ${colors.secondary}`}>
        {value}
      </Typography>
      <IconButton
        sx={{ borderRadius: 0, background: `${colors.secondary}` }}
        onClick={() => setValue(clampV(value + 1))}
      >
        <AddIcon />
      </IconButton>
    </Box>
  )
}
