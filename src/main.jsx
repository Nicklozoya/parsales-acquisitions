import React, { StrictMode } from 'react'  // ← Add React here
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={window.location.pathname.startsWith('/parsales-acquisitions') ? '/parsales-acquisitions' : '/'}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)