import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NagaveniApp from './NagaveniApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <NagaveniApp /> */}
  </StrictMode>,
)
