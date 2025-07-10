import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './form.jsx'
import FluxDeDonne from './FluxDeDonne.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FluxDeDonne />
  </StrictMode>,
)
