// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../styles.css';

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();

       
//         if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
//             alert('All fields are required.');
//             return;
//         }

//         if (password !== confirmPassword) {
//             alert('Passwords do not match.');
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/api/signup', {
//                 username,
//                 email,
//                 password,
//                 confirmPassword
//             });
//             console.log(response.data);

//             if (response.data.message === 'Signup successful') {
//                 alert('Signup successful! Please log in.');
//                 navigate('/login');
//             } else {
//                 alert('Signup failed. Please try again.');
//             }
//         } catch (error) {
//             console.error('Signup failed:', error);
//             alert('Signup failed. Please try again later.');
//         }
//     };

//     return (
//         <div className="container">
//             <img 
//                src="/2.png" 
//                alt="Logo" 
//                style={{ width: '150px', height: '150px' }} 
//             />
                
//             <h2
//                 style={{
//                     color: '#4f4f4f', 
//                     fontSize: '1.5rem', 
//                     fontWeight: '600', 
//                     textAlign: 'center',
//                     margin: '20px 0',
//                 }}
//             >
//                 SIGN UP
//             </h2>

//             <form onSubmit={handleSignup}>
//                 <div className="form-group">
//                     <div className="input-container">
//                         <i className="fa fa-user icon"></i>
//                         <input
//                             id="username"
//                             type="text"
//                             placeholder="Username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <div className="input-container">
//                         <i className="fa fa-envelope icon"></i>
//                         <input
//                             id="email"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <div className="input-container">
//                         <i className="fa fa-lock icon"></i>
//                         <input
//                             id="password"
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <div className="input-container">
//                         <i className="fa fa-lock icon"></i>
//                         <input
//                             id="confirmPassword"
//                             type="password"
//                             placeholder="Confirm Password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <button type="submit" className="full-width-rounded-button">
//                     SIGN UP
//                 </button>
//             </form>

//             <div className="additional-options">
//                 <button className="full-width-white-button" onClick={() => navigate('/login')}>Already have an account? Log in</button>
//             </div>
//         </div>
//     );
// }


// export default Signup;
// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  // import useDispatch
import axios from 'axios';
import { setUserData } from '../redux/userSlice';  // import the action
import '../styles.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();  // access dispatch

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                username,
                email,
                password,
                confirmPassword
            });

            if (response.data.message === 'Signup successful') {
                alert('Signup successful! Please log in.');

                // Dispatch the user data to the store
                dispatch(setUserData({ username, email, password }));

                navigate('/login');
            } else {
                alert('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup failed:', error);
            alert('Signup failed. Please try again later.');
        }
    };

    return (
        <div className="container">
            <img 
               src="/2.png" 
               alt="Logo" 
               style={{ width: '150px', height: '150px' }} 
            />
                
            <h2
                style={{
                    color: '#4f4f4f', 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    textAlign: 'center',
                    margin: '20px 0',
                }}
            >
                SIGN UP
            </h2>

            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <div className="input-container">
                        <i className="fa fa-user icon"></i>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <i className="fa fa-envelope icon"></i>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <i className="fa fa-lock icon"></i>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <i className="fa fa-lock icon"></i>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="full-width-rounded-button">
                    SIGN UP
                </button>
            </form>

            <div className="additional-options">
                <button className="full-width-white-button" onClick={() => navigate('/login')}>Already have an account? Log in</button>
            </div>
        </div>
    );
}

export default Signup;
