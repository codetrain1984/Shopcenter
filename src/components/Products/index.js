import { Container, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import products from '../../data'
import SingleProductMobile from './SingleProductMobile'
import SingleProductDesktop from './SingleProductDesktop'

export default function Products() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const renderProducts = products.map((product) => (
    <Grid
      item
      xs={2}
      sm={4}
      key={product.id}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      {matches ? (
        <SingleProductMobile matches={matches} product={product} />
      ) : (
        <SingleProductDesktop matches={matches} product={product} />
      )}
    </Grid>
  ))
  return (
    <Container>
      <Grid
        columns={{ xs: 2, sm: 8, md: 12 }}
        container
        justifyContent={'center'}
        sx={{ margin: '20px 4px 10px 4px' }}
      >
        {renderProducts}
      </Grid>
    </Container>
  )
}
