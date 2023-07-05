import './App.css'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import theme from './styles/theme'
import Appbar from './components/Appbar'
import Banner from './components/Banner/Banner'
import Promotions from './components/Promotions'
import Products from './components/Products'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
        <Banner />
        <Promotions />
        <Box p={4}>
          <Typography textAlign={'center'} variant="h4">
            Our Products
          </Typography>
        </Box>
        <Products />

        {/* 
   
      Product icons
      title
      searchbox
      Appdrawer
      */}
      </Container>
    </ThemeProvider>
  )
}

export default App
