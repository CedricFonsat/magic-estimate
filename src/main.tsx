import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import DevisReducer from './redux/DevisReducer.tsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
     devis: DevisReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
