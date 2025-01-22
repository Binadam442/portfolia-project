import React, { createContext, useState, useContext } from "react";
import LoginPage from "../Pages/LoginPage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    const login = (userData) => {
        setUser(userData);
      

};

    const logout = () => {
        setUser(null);
    };

return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
);
};