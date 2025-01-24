import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../mocks/AuthService";
import { useAuth } from "../component/AuthContext";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const { createSession } = useAuth();

    const handleRegister = async (event) => {
        event.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Attempt to register user
            const user = await AuthService.register(email, password,"sa");
            if (user) {
                alert("Registration successful! Redirecting to login page...");
                createSession(user);
                navigate("/LoginPage"); // Redirect to login page
            } else {
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred during registration.");
        }
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-component">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-component">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                <button onClick={() => navigate("/LoginPage")}>Register</button>
                    <button
                        type="button"
                        onClick={() => {
                            setEmail("");
                            setPassword("");
                            setConfirmPassword("");
                        }}
                    >
                        Clear
                    </button>
                </div>
            </form>
            <p>
                Already have an account?{" "}
                <button onClick={() => navigate("/LoginPage")}>Login</button>
            </p>
        </div>
    );
}

export default RegisterPage;