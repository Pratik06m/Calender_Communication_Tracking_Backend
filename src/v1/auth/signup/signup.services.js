const pool = require('../../../services/database/mysql');

const findUserEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
    return rows;
};

const createUser = async (username, email, hashedPassword) => {
    const result = await pool.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    return result;
};

module.exports = {
    findUserEmail,
    createUser
};
