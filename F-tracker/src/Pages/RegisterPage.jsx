import React, { useState } from "react";

function RegisterPage() {
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

            <input
            type="password"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => SetConfirmPassword(e.target.value)} />

            <button type="submit">Register</button>
            </form>
            <p>
                Already have an account <a href="/">log in here</a>
            </p>
        

        </div>
    );

};

export default RegisterPage;