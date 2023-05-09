import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="Home" element={<Home />} />
      </Routes>
      </HashRouter>
  </React.StrictMode>,
)
