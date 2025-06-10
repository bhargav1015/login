import React, { useState } from 'react';
import '../styles.css';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleContactUs = async (e) => {
        e.preventDefault();
        
        alert('Message sent successfully');
    };

    return (
        <div className="container">
            <h2>Contact Us</h2>
            <form onSubmit={handleContactUs}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;
