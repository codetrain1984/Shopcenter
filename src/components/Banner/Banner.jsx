import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from '../../styles/banner'

export default function Banner() {
  const theme = useTheme()
  console.log(theme)
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <BannerContainer>
      <BannerImage src="/Images/Banner/main.jpg" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle>New Shoes</BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          repellendus vel nesciunt suscipit quibusdam earum blanditiis ullam
          itaque maxime ut!
        </BannerDescription>
        <BannerShopButton color="primary">shop now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  )
}
