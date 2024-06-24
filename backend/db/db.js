import mysql from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const pool = mysql.createPool({
 host: process.env.DB_HOST,
 user: process.env.DB_USER, // replace with your user
 password: process.env.DB_PASSWORD, // replace with your password
 database: process.env.DB_DATABASE // replace with your database name
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database successfully!');
    connection.release(); // release the connection back to the pool
  }
});


export default pool.promise();
