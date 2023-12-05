import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyle" ;
import Home from "./Pages/Home";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Home/>
  <GlobalStyle/>
  </React.StrictMode>,
)
