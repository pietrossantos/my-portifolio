import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyle" ;
import RoutesApp from './routes';
import MotionObserver from './components/MotionObserver';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RoutesApp/>
  <MotionObserver/>
  <GlobalStyle/>
  </React.StrictMode>
);
