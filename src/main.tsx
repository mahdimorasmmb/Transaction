import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import 'https://fonts.cdnfonts.com/css/iranyekan';
// import 'https://fonts.googleapis.com/css?family=Lato&display=swap'

import "./i18n";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
