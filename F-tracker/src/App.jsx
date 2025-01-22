import React from 'react';
import { Routes, Route } from "react-router-dom";
import './CSS/globall.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage'; 
import Layout from './component/Layout';
import TrackerPage from './Pages/useraccount/TrackerPage';
import AboutPage from './Pages/AboutPage';
import { AuthProvider } from './component/AuthContext';
import ProtectedRoute from './component/Protectedroute';
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/RegisterPage" element={<RegisterPage />} />
                <Route path="/useraccount" element={<ProtectedRoute><TrackerPage /></ProtectedRoute>} />
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/TrackerPage' element={<TrackerPage />}/>
            </Routes>
        </Layout>
    )
}
export default App;