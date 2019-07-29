// http url format
// scheme://user@host:port/path?query#fragment

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.PORT || 5000
};
