import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'
import Science from './pages/Science'
import Docs from './pages/Docs'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/science" element={<Science />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  )
}
