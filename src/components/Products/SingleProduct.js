import React from 'react'
import { ProductMetaWrapper, Products } from '../../styles/products'
import { ProductImage } from '../../styles/products'
import { Typography } from '@mui/material'

export default function SingleProduct({ product, matches }) {
  return (
    <Products>
      <ProductImage src={product.img} />
      <ProductMetaWrapper>
        <Typography variant={matches ? 'h6' : 'h5'}>{product.name}</Typography>
        <Typography variant={matches ? 'caption' : 'body1'}>
          ${product.price}
        </Typography>
      </ProductMetaWrapper>
    </Products>
  )
}
