const pool = require('./connection');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL
)`;

pool.query(createTableQuery).then(() => {
  console.log('Tabela "users" criada com sucesso!');
})
.catch((error) => {
  console.error('Erro ao criar tabela:', error);
});

const findAllCustomers = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM customers');
        return rows;
    } catch (error) {
        return error;
    }
}

const findCustomerById = async (id) => {
    try {
        const { rows } = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        return error;
    }
}

const createCustomer = async (customer) => {
    const { name, email, phone, address } = customer;
    try {
        const { rows } = await pool.query('INSERT INTO customers (name, email, phone, address) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, phone, address]);
        return rows[0];
    } catch (error) {
        return error;
    }
}

const updateCustomer = async (id, customer) => {
    const { name, email, phone, address } = customer;
    try {
        const { rows } = await pool.query('UPDATE customers SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5 RETURNING *', [name, email, phone, address, id]);
        return rows[0];
    } catch (error) {
        return error;
    }
}

const deleteCustomer = async (id) => {
    try {
        const { rows } = await pool.query('DELETE FROM customers WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        return error;
    }
}

module.exports = {
    findAllCustomers,
    findCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
}