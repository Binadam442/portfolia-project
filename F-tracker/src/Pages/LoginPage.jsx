import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        //to validate credendial

    
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
            
            


        </div>
    );

};
export default LoginPage;