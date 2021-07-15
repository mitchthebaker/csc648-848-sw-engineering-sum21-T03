let config = {};

config.database = {};
config.database.host = process.env.DATABASE_HOST;
config.database.user = process.env.DATABASE_USER;
config.database.password = process.env.DATABASE_PASSWORD;
config.database.name = 'mysql_ja';

module.exports = config;