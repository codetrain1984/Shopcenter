import React from 'react'
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
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetails from '../ProductDetails'

export default function SingleProductMobile({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(
    ProductDetails,
  )

  return (
    <>
      <Products>
        <ProductImage src={product.img} />
        <ProductMetaWrapper>
          <Typography variant={matches ? 'h6' : 'h5'}>
            {product.name}
          </Typography>
          <Typography variant={matches ? 'caption' : 'body1'}>
            ${product.price}
          </Typography>
        </ProductMetaWrapper>

        <ProductActionWrapper>
          <Stack direction={'row'}>
            <ProductFavButton isFav={1}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>

            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Products>
      <ProductAddCart variant="contained">Add to cart</ProductAddCart>
      <ProductDetailDialog product={product} />
    </>
  )
}
