let config = {};

config.database = {};
config.database.host = process.env.DATABASE_HOST || 'rds-mysql-joses-angels.cgt4l91wscet.us-west-1.rds.amazonaws.com'; //localhost
config.database.user = process.env.DATABASE_USER || 'admin'; // root
config.database.password = process.env.DATABASE_PASSWORD || 'oM9QuhdFhNMVUyMFU4ha'; //admin
config.database.name = 'mysql_ja';

module.exports = config;