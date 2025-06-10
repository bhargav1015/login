// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles.css';

// function Dashboard() {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         navigate('/login');
//     };

//     return (
//         <div className="dashboard-container">
//             <header className="dashboard-header">
//                 <h2>User Dashboard</h2>
//                 <button className="small-logout-button" onClick={handleLogout}>Logout</button>
//             </header>
//             <main className="dashboard-main">
//                 <section className="dashboard-section">
//                     <h3>Welcome, Hari!</h3>
//                     <p>This is your dashboard where you can manage your account and view your activities.</p>
//                 </section>
//                 <section className="dashboard-section">
//                     <h3>Recent Activities</h3>
//                     <ul>
//                         <li>Logged in</li>
//                         <li>Updated profile</li>
//                         <li>Viewed dashboard</li>
//                     </ul>
//                 </section>
//                 <section className="dashboard-section">
//                     <h3>Account Details</h3>
//                     <p>Name: Hari</p>
//                     <p>Email: hari123@gmail.com</p>
//                 </section>
//             </main>
//         </div>
//     );
// }

// export default Dashboard;

// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';  // import useSelector
import '../styles.css';

function Dashboard() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);  // access user data from the store

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>User Dashboard</h2>
                <button className="small-logout-button" onClick={handleLogout}>Logout</button>
            </header>
            <main className="dashboard-main">
                <section className="dashboard-section">
                    <h3>Welcome, {user.username || 'User'}!</h3>
                    <p>This is your dashboard where you can manage your account and view your activities.</p>
                </section>
                <section className="dashboard-section">
                    <h3>Recent Activities</h3>
                    <ul>
                        <li>Logged in</li>
                        <li>Updated profile</li>
                        <li>Viewed dashboard</li>
                    </ul>
                </section>
                <section className="dashboard-section">
                    <h3>Account Details</h3>
                    <p>Name: {user.username}</p>
                    <p>Email: {user.email}</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
