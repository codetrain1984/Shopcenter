import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { FooterTitle, SubscribeIf } from '../../styles/footer'
import { colors } from '../../styles/theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import SendIcon from '@mui/icons-material/Send'

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: colors.shaft,
        fontSize: { xs: '12px', md: '14px' },
        color: colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
      }}
    >
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            error ad fugit, debitis cumque laudantium harum fugiat quod
            exercitationem ipsam aut facere sequi accusantium! Perferendis,
            porro!
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                MyAccount
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Whislist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newletter</FooterTitle>
          <Stack>
            <SubscribeIf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ mt: 4, mb: 4 }}
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
