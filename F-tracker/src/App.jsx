import React from 'react';
import { Routes, Route } from "react-router-dom";
import Userprofile from './components/Userprofile';
import Tracker from './components/Tracker';
import LoginPage from './LoginPage';

function App(){
 return (
    <Routes>
        <Route  path="/LoginPage" element={<LoginPage />}/>
        <Route  path="/Tracker" element={<Tracker />}/>
        <Route  path="/" element={<Userprofile />}/>
        
    </Routes>
 )
}
export default App;