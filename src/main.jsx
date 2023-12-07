import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyle" ;
import RoutesApp from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RoutesApp/>
  <GlobalStyle/>
  </React.StrictMode>
);
