let config = {};

config.database = {};
config.database.host = process.env.DATABASE_HOST || 'localhost';
config.database.user = process.env.DATABASE_USER || 'root';
config.database.password = process.env.DATABASE_PASSWORD || 'omgnoway23';
config.database.name = 'mysql_ja';

module.exports = config;