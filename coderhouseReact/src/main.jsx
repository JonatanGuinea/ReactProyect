import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  //Upper camelCase for components
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
