import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from './component/Layout';
import { AuthProvider } from './component/AuthContext';

// Start the mock worker only in development mode
//if (process.env.NODE_ENV === "development") {
  //import("/mocks/browser")
    //.then(({ worker }) => worker.start())
    //.catch((error) => console.error("Failed to start the mock worker:", error));
//}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<AuthProvider>
      <App />
      </AuthProvider>


    </BrowserRouter>

  </React.StrictMode>
);



