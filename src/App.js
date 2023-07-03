import './App.css'
import { Container, ThemeProvider } from '@mui/material'
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
