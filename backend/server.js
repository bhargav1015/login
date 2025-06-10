const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port= 5000;
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Bhargav@234',
    database: 'db',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});


app.post('/api/signup', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log('Received signup request:', username, email); 

   
    if (password !== confirmPassword) {
        res.status(400).json({ message: 'Passwords do not match' });
        return;
    }

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json({ message: 'Signup successful' });
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', username); 
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server error');
            return;
        }
        if (results.length > 0) {
            res.json({ message: 'Login successful', role: results[0].role });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

//     connection.query(query, [username, password], (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             return res.status(500).send('Server error');
//         }
//         if (results.length > 0) {
//             const user = {
//                 id: results[0].id,
//                 username: results[0].username,
//                 email: results[0].email
//             };
//             res.json({ message: 'Login successful', user });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }
//     });
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
// const db= mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Bhargav@234",
//     database: "db",

// })

// app.get("/users", (re,res) =>{
//     const q="select * from users";
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err);
//         else return res.json({data});
//     });
// })
// app.get("/",(re,res) => {
//     return res.json("Backend Connected")
// })

// app.listen(5000, ()=>{
//     console.log("Backend Connected")
// })