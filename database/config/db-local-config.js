// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    database: 'lelang_nft_local',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql',
};
