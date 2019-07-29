'use strict';

const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/postgres');
const sequelize = new Sequelize('postgres://pxapyirmbudrkt:408672be6b4508769ced0a3906b38b3fc7487f69ac9a415482078bc17abff73c@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d6o4ksia174a3l');

sequelize.import('./models/Users');
sequelize.import('./models/WeatherChannels');
sequelize.import('./models/Articles');

module.exports = sequelize;