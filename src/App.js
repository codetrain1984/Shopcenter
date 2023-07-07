import './App.css'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import theme from './styles/theme'
import Appbar from './components/Appbar'
import Banner from './components/Banner/Banner'
import Promotions from './components/Promotions'
import Products from './components/Products'
import Footer from './components/Footer'
import AppDrawer from './components/Drawer'
import { UIProvider } from './context/ui'
import SearchBox from './components/Search'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box p={4}>
            <Typography textAlign={'center'} variant="h4">
              Our Products
            </Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
