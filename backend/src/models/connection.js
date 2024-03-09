const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'customersdb',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '1234',
});
    
// Handle potential connection errors gracefully
pool.on('error', (error) => {
    console.error('Unexpected error connecting to PostgreSQL:', error);
});

module.exports = pool;
