import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { colors } from '../../styles/theme'
import CloseIcon from '@mui/icons-material/Close'
import Products from '../Products'
import { ProductImage } from '../../styles/products'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import IncDec from '../ui'

function SlideTransition(props) {
  return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4),
}))

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  lineHeight: 1.5,
  marginLeft: '30px',
}))

export default function ProductDetails({ open, onClose, product }) {
  const theme = useTheme()
  console.log(theme)
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Dialog
      variant="permenant"
      open={open}
      fullScreen
      TransitionComponent={SlideTransition}
    >
      <DialogTitle sx={{ background: colors.secondary }}>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
          <ProductImage src={product.img} />
          <ProductDetailInfoWrapper mt={3}>
            <Typography variant="subtitle1">SKU 123</Typography>
            <Typography variant="subtitle1">Availability 8 in Stock</Typography>
            <Typography variant="h4" sx={{ lineHeight: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="body1">
              {product.desc}
              {product.desc}
              {product.desc}
            </Typography>
            <Box
              mt={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <IncDec />
              <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
                Add to cart
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 4,
                color: colors.light,
              }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to whishlist
            </Box>

            <Box sx={{ mt: 4, color: colors.light }}>
              <TwitterIcon />
              <FacebookIcon sx={{ pl: 4 }} />
              <InstagramIcon sx={{ pl: 4 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  )
}
