const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  serverUrl: process.env.SERVER_URL
};
