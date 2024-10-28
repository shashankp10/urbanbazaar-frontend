import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../CSS/Login.css';

export default function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         navigate("/");
    //     }
    // }, [navigate]);
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:8080/urbanbazaar/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
    
            if (response.ok) {
                const data = await response.json();
                const token = data.token;  
                localStorage.setItem("token", token);
    
                onLoginSuccess(data); 
                navigate("/");
            } else {
                alert("Incorrect email or password.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    
    //Client ID : 703800378807-j55j3bh6kg1e8mhire4f08td61d2ilrm.apps.googleusercontent.com
    //Client Secret : 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
    const handleGoogleLogin = () => {
        // account.createOAuth2Session("google", {
        //     redirect_uri: "http://localhost:3000/auth/google/callback"
        // });
    };
    return (
        <div className="login-page">
            <div className="image-section">
                <img src="logo.png" alt="Logo" className="logo" /> 
            </div>
            <div className="form-section">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group password-group">
                    <label>Password:</label>
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <span 
                            className="password-toggle-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <p className='forget-password'>Forget paasword?</p>
                </div>
                <button type="submit">Login</button>
                </form>
                <p onClick={() => navigate('/register')} className="toggle">
                    Don’t have an account? Register
                </p>
                <div className="line-container">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>
                <div className="social-login">
                <h6>Sign up with</h6>
                <div className="social-icons">
                    <img 
                        src="https://img.icons8.com/color/48/google-logo.png" 
                        alt="google-logo" 
                        onClick={() => handleGoogleLogin()} // Replace with your Google login function
                        style={{ cursor: 'pointer' }} // Enforce pointer cursor for the Google icon
                    />
                    <div className="meta-icon">
                        <img 
                            src="https://img.icons8.com/fluency/48/meta.png" 
                            alt="meta" 
                        />
                    </div>
                </div>
            </div>

            </div>
            
        </div>
    );
}
