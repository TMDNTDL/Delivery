import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
// injection
import {Provider} from 'react-redux'
import store from './store'
import Menu from './components/Menu'
import MenuStore from './components/Menu'
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />   
  </Provider>
  
)
