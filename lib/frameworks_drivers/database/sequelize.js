'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/postgres');

sequelize.import('./models/Users');
sequelize.import('./models/WeatherChannels');
sequelize.import('./models/Articles');

module.exports = sequelize;