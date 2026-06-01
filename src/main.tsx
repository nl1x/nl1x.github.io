import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
    </style>
    <App/>
  </StrictMode>,
)
