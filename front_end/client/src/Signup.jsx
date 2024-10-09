import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        fullname: '',
        name: '',
        email: '',
        password: '',
        repeat_password: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Destructure formData to extract variables
        const { fullname, name, email, password, repeat_password } = formData;

        // Check if password and repeat_password match
        if (password !== repeat_password) {
            setError('Passwords do not match.');
            return;
        }

        // Make the POST request with the form data
        axios.post('http://localhost:3000/register', {  name,  password })
            .then(result => {
                if (result.data.error) {
                    setError(result.data.error);  // Display error message from the server
                } else {
                    console.log('Form submitted:', result.data);
                    setError('');  // Clear error if registration is successful
                    navigate("/home");2222
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="main">
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <b>Register</b>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <a href="/login">
                    <i className="fa fa-times" aria-hidden="true" style={{ marginLeft: '300px', marginTop: '10px',padding:"20px" ,color: 'white' }}></i>
                </a>
                <div className="input-box">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <i className="fa fa-envelope" aria-hidden="true" style={{ right: '13px' }}></i>
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
                <div className="input-box">
                    <input
                        type="password"
                        name="repeat_password"
                        placeholder="Repeat Password"
                        value={formData.repeat_password}
                        onChange={handleChange}
                        required
                    />
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
        </div>
    );
}

export default Signup;
