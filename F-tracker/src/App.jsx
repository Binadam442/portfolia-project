import React from 'react';
import { Routes, Route } from "react-router-dom";
import './CSS/globall.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage'; 
import Layout from './component/Layout';
import TrackerPage from './Pages/useraccount/TrackerPage';
import AboutPage from './Pages/AboutPage';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/RegisterPage" element={<RegisterPage />} />
                <Route path="/useraccount" element={<TrackerPage />} />
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </Layout>
    )
}
export default App;