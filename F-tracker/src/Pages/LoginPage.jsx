import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../component/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../mocks/AuthService";



function LoginPage({ switchToRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { createSession } = useAuth();


    const handleLogin =async (event) => {
        //to validate credendial
        event.preventDefault()
        //check user in DB

        const user = await AuthService.login(email, password);
        console.log(user)
        if (user) {
           
            createSession(user);
           
            navigate('/TrackerPage');
        }else{
            alert("Error login in")
        }
    };


    return (
        <div className="form-container">
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div className="form-component">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-component">
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                <button onClick={() => navigate("/TrackerPage")}>Login</button>
                    <button type="button" onClick={() => {
                        setEmail("")
                        setPassword("")
                        }}>Clear</button>
                </div>
            </form>
            <p>
                Don't have an account?
                <button onClick={() => navigate("/RegisterPage")}>Register</button>
            </p>





        </div>
    );

}
export default LoginPage;