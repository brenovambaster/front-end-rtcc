import Footer from '../components/Footer/Footer'
import Section from '../components/Section/Section'
import Menu from '../components/Menu/Menu'
import './App.css'
import Home from '../pages/Professor'
import Courses from '../pages/Courses'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/professor" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tcc" element={<Section />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
