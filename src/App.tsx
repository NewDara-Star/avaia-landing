import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'
import Science from './pages/Science'
import Docs from './pages/Docs'
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/science" element={<Science />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

