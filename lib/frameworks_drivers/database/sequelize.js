'use strict';

const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/postgres');
const sequelize = new Sequelize('postgres://filapnwmsqpmzp:2a2ebc8033608de14979fa404d53a81a1be48e83f0c6dc3d0dbbbaf3dc2065dc@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d65rdp3l8g7q49');

sequelize.import('./models/Users');
sequelize.import('./models/WeatherChannels');
sequelize.import('./models/Articles');

module.exports = sequelize;