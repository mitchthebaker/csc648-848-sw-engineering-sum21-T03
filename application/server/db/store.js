const config = require('./config');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
});

async function getAllUsers() {
  const result = await pool.query(
    "SELECT id, first_name AS firstName, last_name AS lastName, age FROM users"
  );
  return result[0].length < 1 ? {} : result[0];
}

async function getAllProducts() {
  const result = await pool.query(
    "SELECT product_id, title AS title, description AS description, price AS price, image AS image FROM products"
  );
  return result[0].length < 1 ? {} : result[0];
}

async function getUserById(id) {
  const result = await pool.query(
    "SELECT user_id, username AS username FROM users WHERE user_id = ?",
    [id]
  );
  if (result[0].length < 1) {
    throw new Error(`User with id = ${id} not found`);
  }
  return result[0][0];
}

async function getProductById(id) {
  const result = await pool.query(
    "SELECT product_id, title AS title FROM products WHERE product_id = ?",
    [id]
  );
  if(result[0].length < 1) {
    throw new Error(`Product with id = ${id} not found`);
  }
  return result[0][0];
}

async function createUser(username, password) {

  const encPassword = await bcrypt.hash(password, saltRounds);
  console.log(encPassword);

  const date = new Date();

  const result = await pool.query(
    "INSERT INTO users SET username = ?, password = ?, created_at = ?, is_active = ?, is_buyer = ?, is_seller = ?",
    [username, encPassword, date, 1, 1, 0]
  );
  if (result[0].length < 1) {
    throw new Error(
      `Failed to create a new user ${username}`
    );
  }
  return getUserById(result[0].insertId);
}

async function loginUser(username, password) {
  
  const result = await pool.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );
  
  if(result[0].length === 1) {
    const comparison = await bcrypt.compare(password, result[0][0].password);

    if(comparison) {
      return result[0][0];
    }
    else {
      throw new Error(
        `Username and password do not match`
      );
    }
  }
  else {
    throw new Error(
      `Username does not exist`
    );
  }
}

async function uploadProduct(aProduct) {

  const result = await pool.query(
    "INSERT INTO products SET title = ?, description = ?, price = ?, image = ?, seller_id = ?",
    [aProduct.title, aProduct.description, aProduct.price, aProduct.image, 2]
  );
  if(result[0].length < 1) {
    throw new Error(
      `Failed to create a new product ${aProduct.title}`
    );
  }

  return getProductById(result[0].insertId);
}

async function deleteUserById(id) {
  const result = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  if (result[0].affectedRows < 1) {
    throw new Error(`User with id ${id} does not exist`);
  }
  return "";
}

async function updateUser(id, user) {
  const result = await pool.query(
    "UPDATE users SET first_name = ?, last_name = ?, age = ? WHERE id = ?",
    [user.firstName, user.lastName, user.age, id]
  );
  if (result[0].affectedRows < 1) {
    throw new Error(`User with id ${id} does not exist`);
  }
  return getUserById(id);
}

module.exports = {
  getAllUsers,
  getAllProducts,
  createUser,
  loginUser,
  uploadProduct,
  getUserById,
  deleteUserById,
  updateUser,
};