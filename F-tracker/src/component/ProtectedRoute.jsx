import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';



function ProtectedRoute ({ children })  {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/LoginPage" />
    };
    return children;
};

export default ProtectedRoute;