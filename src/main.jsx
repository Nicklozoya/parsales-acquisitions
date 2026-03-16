import React, { StrictMode } from 'react'  // ← Add React here
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={/parsaleacquisitions\.com$/i.test(window.location.hostname) ? '/' : '/parsales-acquisitions'}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)