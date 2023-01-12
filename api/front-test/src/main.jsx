import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import Router from './router'
import { store } from './store'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
