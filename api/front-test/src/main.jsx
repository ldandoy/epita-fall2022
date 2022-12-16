import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './router'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
