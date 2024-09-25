import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Blog from './pages/Blog.jsx'
import Tags from './pages/Tags.jsx'
import About from './pages/About.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/tags' element={<Tags />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
