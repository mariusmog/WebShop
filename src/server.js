// manager.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vueshop",
});

app.use(express.json());
app.use(cors());

app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM product');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
