import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: '#D59E04', size: '50px', className: "icon-provider" }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
