import React, { useState } from 'react';
import '../styles.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        
        alert('Password reset link sent to your email');
    };

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
