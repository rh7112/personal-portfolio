import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: process.env.DB_HOST,        // '127.0.0.1' from .env.local
  port: process.env.DB_PORT,        // '3306' from .env.local
  user: process.env.DB_USER,        // 'root'
  password: process.env.DB_PASSWORD,// 'your_password'
  database: process.env.DB_NAME,    // 'portfolio_site'
  connectionLimit: 10,              // Pool size
  socketPath: null,                 // Ensure using TCP/IP and not Unix socket
});

export default pool;
