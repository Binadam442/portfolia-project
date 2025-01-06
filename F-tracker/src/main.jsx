import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Tracker from './components/Tracker';
import './Global.css/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        <App />
        <Tracker />
        
    </BrowserRouter>

  </React.StrictMode>
  );

