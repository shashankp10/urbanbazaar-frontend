import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Register.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginImg from '../Assets/login.jpeg';
import axios from 'axios';

export default function Register({ onLoginClick }) {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();
    
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 

    const getPasswordStrength = (password) => {
        const lengthCriteria = password.length >= 8;
        const numberCriteria = /[0-9]/.test(password);
        const uppercaseCriteria = /[A-Z]/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        const criteriaMet = [lengthCriteria, numberCriteria, uppercaseCriteria, specialCharCriteria].filter(Boolean).length;

        if (criteriaMet === 4) return "Strong";
        if (criteriaMet === 3) return "Medium";
        if (criteriaMet === 2) return "Weak";
        return "Very Weak";
    };

    const getPasswordColor = (strength) => {
        switch (strength) {
            case "Strong":
                return "green";
            case "Medium":
                return "orange";
            case "Weak":
            case "Very Weak":
                return "red";
            default:
                return "black"; 
        }
    };

    const validateForm = () => {
        let errors = [];

        if (!fullName || fullName.length < 2) {
            errors.push("Full Name must not be empty and should contain at least two words.");
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        const passwordStrength = getPasswordStrength(password);
        if (!password || passwordStrength === "Weak" || passwordStrength === "Very Weak") {
            errors.push("Password must not be empty and must be at least medium strength.");
        }

        if (!termsAccepted) {
            errors.push("You must accept the terms and conditions.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post("http://localhost:8080/urbanbazaar/api/v1/register", {
                    name: fullName,
                    email: email,
                    password: password,
                    roles: "ROLE_CUSTOMER",
                });
    
                if (response.status === 200 || response.status === 201) {
                    alert("Registered successfully!!");
                    navigate('/login');
                } else {
                    alert("Unexpected response. Please check the backend.");
                }
            } catch (error) {
                if (error.response) {
                    alert("Registration failed. Server says: " + error.response.data.message);
                } else {
                    alert("Failed to register. Please check the console for details.");
                }
            }
        } else {
            alert("Form validation failed. No data sent to server.");
        }
    };
    
    return (
        <div className="register-page">
            <div className="image-section">
                <h1 className="urbanBazaar">UrbanBazaar</h1>
                <img src={LoginImg} alt="Logo" className="logo" /> 
            </div>
            <div className="register-container">
                <h2>Create your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            placeholder='Enter your name' 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter your email' 
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
                                placeholder='Enter your password' 
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
                        {password && (
                            <div className="password-strength" style={{ color: getPasswordColor(getPasswordStrength(password)) }}>
                                <small>Strength: {getPasswordStrength(password)}</small>
                            </div>
                        )}
                    </div>
                    <div className="form-group terms">
                        <input 
                            type="checkbox" 
                            checked={termsAccepted} 
                            onChange={() => setTermsAccepted(!termsAccepted)} 
                            required 
                        />
                        <label>
                            I accept the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                        </label>
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p onClick={() => navigate('/login')} className="toggle">
                    Already have an account? Login
                </p>
            </div>
        </div>
    );
}
