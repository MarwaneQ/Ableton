
import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
function App() {

  return (
    <Container maxWidth="xl">
      <Header />
      <Hero />
      <Showcase />
    </Container>
  )
}

export default App
