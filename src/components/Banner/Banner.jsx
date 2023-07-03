import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from '../../styles/banner'

export default function Banner() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <BannerContainer>
      <BannerImage src="/Images/Banner/Bag3.jpg" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle>New Bags</BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          repellendus vel nesciunt suscipit quibusdam earum blanditiis ullam
          itaque maxime ut!
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  )
}
