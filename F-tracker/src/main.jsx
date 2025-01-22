import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from './component/Layout';
import { AuthProvider } from './component/AuthContext';
import { worker } from './mocks/browser';


//Start the mock service worker
worker.start().then(() => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<AuthProvider>
      <App />
      </AuthProvider>


    </BrowserRouter>

  </React.StrictMode>
);
});

