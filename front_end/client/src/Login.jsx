import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        name: '', // changed to 'name' instead of 'username'
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Sending 'name' instead of 'username'
            const response = await axios.post('http://localhost:3000/login', {
                name: formData.name,
                password: formData.password
            });
            
            // Handling the response according to your backend
            if (response.data.status) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/home'); // Redirect to home page upon successful login
            } else {
                setErrorMessage(response.data.message || 'Invalid login credentials');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('An error occurred. Please try again.');
        }
    };
    
    return (
        <div className="main">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <b>Login</b>
                    <a href="/home">
                        <i className="fa fa-times" aria-hidden="true" style={{ marginLeft: '300px', marginTop: '10px', padding: '20px', color: 'white' }}></i>
                    </a>
                    <div className="input-box">
                        <input
                            type="text"
                            name="name" // changed from 'username' to 'name'
                            placeholder="Username"
                            value={formData.name} // Reflect the change here
                            onChange={handleChange}
                            required
                        />
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
