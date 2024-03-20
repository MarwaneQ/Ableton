
import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
function App() {

  return (
    <Container maxWidth="xl">
      <Header />
      <Hero />
      <Showcase />
      <Footer />
    </Container>
  )
}

export default App
