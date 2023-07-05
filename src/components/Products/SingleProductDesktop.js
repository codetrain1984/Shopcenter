import React, { useState } from 'react'
import {
  ProductActionButton,
  ProductActionWrapper,
  ProductAddCart,
  ProductFavButton,
  ProductMetaWrapper,
  Products,
} from '../../styles/products'
import { ProductImage } from '../../styles/products'
import { Stack, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false)
  const handleMouseEnter = () => {
    setShowOptions(true)
  }
  const handleMouseLeave = () => {
    setShowOptions(false)
  }
  return (
    <>
      <Products onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.img} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddCart>
        )}
        <ProductActionWrapper show={showOptions}>
          <Stack direction={'column'}>
            <ProductActionButton>
              <ShareIcon />
            </ProductActionButton>

            <ProductActionButton>
              <FitScreenIcon />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Products>
      <ProductMetaWrapper>
        <Typography variant={matches ? 'h6' : 'h5'}>{product.name}</Typography>
        <Typography variant={matches ? 'caption' : 'body1'}>
          ${product.price}
        </Typography>
      </ProductMetaWrapper>
    </>
  )
}
