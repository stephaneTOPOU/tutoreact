import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './form.jsx'
import FluxDeDonne from './FluxDeDonne.jsx'
import ListeDeProduit from './ListeDeProduit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListeDeProduit />
  </StrictMode>,
)
