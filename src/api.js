import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 


export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};


// export const signup = async (userData) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/signup`, userData);
//         return response;
//     } catch (error) {
//         console.error('Signup failed:', error);
//         throw error;
//     }
// };

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData, {
            headers: { "Content-Type": "application/json" }
        });
        return response;
    } catch (error) {
        console.error('Signup failed:', error.response?.data || error.message);
        throw error;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response;
    } catch (error) {
        console.error('Fetching users failed:', error);
        throw error;
    }
};

export const updateUserRole = async (id, newRole) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${id}`, { role: newRole });
        return response;
    } catch (error) {
        console.error('Updating user role failed:', error);
        throw error;
    }
};
