import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleRoleChange = async (id, newRole) => {
        try {
            await axios.put(`http://localhost:5000/users/${id}`, { role: newRole });
            fetchUsers(); 
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Admin Dashboard</h2>
                <button className="small-logout-button" onClick={handleLogout}>Logout</button>
            </header>
            <main className="dashboard-main">
                <section className="dashboard-section">
                    <h3>All Users</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td><img src={`https://via.placeholder.com/50?text=${user.name.charAt(0)}`} alt={`${user.name}'s profile`} /></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {user.role !== 'Admin' && (
                                            <button onClick={() => handleRoleChange(user.id, 'Admin')}>Make Admin</button>
                                        )}
                                        {user.role === 'Admin' && (
                                            <button onClick={() => handleRoleChange(user.id, 'User')}>Revoke Admin</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <section className="dashboard-section">
                    <h3>Admin Profile</h3>
                    <p>Name: Admin Name</p>
                    <p>Email: admin@example.com</p>
                </section>
                <section className="dashboard-section">
                    <h3>Admin Activities</h3>
                    <ul>
                        <li>Reviewed user reports</li>
                        <li>Updated site settings</li>
                        <li>Managed user accounts</li>
                    </ul>
                </section>
                <section className="dashboard-section">
                    <h3>Site Statistics</h3>
                    <p>Total users: 1500</p>
                    <p>Active users: 1200</p>
                </section>
                <section className="dashboard-section">
                    <h3>Admin Gallery</h3>
                    <div className="gallery">
                        <img src="https://via.placeholder.com/150" alt="Gallery item 1" />
                        <img src="https://via.placeholder.com/150" alt="Gallery item 2" />
                        <img src="https://via.placeholder.com/150" alt="Gallery item 3" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminDashboard;
