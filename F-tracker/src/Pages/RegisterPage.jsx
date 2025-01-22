import React, { useState } from "react";

function RegisterPage({ switchToLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");

    const handleRegister = () => {
        //Handle registration logic here
    }; 

    return (
        <div className="form container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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

            <input
            type="password"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => SetConfirmPassword(e.target.value)} />

            <button type="submit">Register</button>
            </form>
            <p>
                Already have an account?
                <button onClick={switchToLogin}>Login</button>
            </p>
        

        </div>
    );

};

export default RegisterPage;