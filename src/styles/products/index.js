import { Box, Button, IconButton, styled } from '@mui/material'
import { colors } from '../theme'
import { slideInBottom, slideInRight } from '../../animations'

export const Products = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '15px',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
}))

export const ProductImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  objectFit: 'cover',
  // width: '100%',
  width: '350px',
  height: '350px',
  background: colors.light_gray,
  padding: '10px',

  [theme.breakpoints.down('md')]: {
    // width: '80%',
    width: '280px',
    height: '280px',
    // padding: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    // width: '80%',
    width: '350px',
    height: '350px',
    // padding: '24px',
  },
}))

export const ProductActionButton = styled(IconButton)(() => ({
  background: colors.white,
  margin: 4,
}))

export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== 'isFav',
})(({ isFav, theme }) => ({
  color: isFav ? colors.primary : colors.light,
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    right: '3%',
    top: '6%',
  },
}))

export const ProductAddCart = styled(Button)(({ show, theme }) => ({
  width: '120px',
  fontSize: '12px',

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '300px',
    padding: '10px 5px',
    animation:
      show && `${slideInBottom} 0.5s cubic.bezier(0.250, 0.460, 0.940) both`,
  },
  background: colors.secondary,
  opacity: 0.9,
}))

export const ProductMetaWrapper = styled(Button)(({ show, theme }) => ({
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))
export const ProductActionWrapper = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'show',
})(({ show, theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    position: 'absolute',
    right: 0,
    top: '20%',
    animation:
      show && `${slideInRight} 0.5s cubic.bezier(0.250, 0.460, 0.940) both`,
  },
}))
