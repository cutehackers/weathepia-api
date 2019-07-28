'use strict';

const Sequelize = require('sequelize');
/**
 * postgresql://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]
 */
//const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/postgres');
const sequelize = new Sequelize('postgresql://jhlee:dlwnfod2@postgres.cnhqsywrdtyv.us-east-1.rds.amazonaws.com:5432/postgres');

sequelize.import('./models/Users');
sequelize.import('./models/WeatherChannels');
sequelize.import('./models/Articles');

module.exports = sequelize;